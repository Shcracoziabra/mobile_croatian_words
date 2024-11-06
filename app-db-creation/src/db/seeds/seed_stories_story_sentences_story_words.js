const path = require('node:path');
const { createDataFromLocalJSON } = require('../../helpers/helpers');;

const STORIES_TABLE_NAME = 'stories';
const SENTENCES_TABLE_NAME = 'storySentences';
const WORDS_TABLE_NAME = 'storyWords';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const storiesDirectory = path.resolve(__dirname, '../../assets/stories');
  const rawStoriesData = await createDataFromLocalJSON(storiesDirectory);
  
  let sentencesData = [];
  let vocabularyData =  [];
  let storyTitles = [];
  let storyImages = [];

  for (let story of rawStoriesData) {
    const { titleHr, illustration } = story;
    storyImages.push(illustration);
    storyTitles.push(titleHr);
  }

  const images = await knex('images')
		.select('id', 'name')
		.whereIn('name', storyImages);
  
  const imageIdByName = Object.fromEntries(images.map(({name, id}) => [name, id]));

  const storiesData = rawStoriesData.map(({ titleHr, titleUk, illustration}) => {
    return {
      titleHr,
      titleUk,
      imageId: imageIdByName[illustration]
    }
  });

  // Deletes ALL existing entries
  await knex(STORIES_TABLE_NAME).del()
  await knex(STORIES_TABLE_NAME).insert(storiesData);

  const stories = await knex(STORIES_TABLE_NAME)
  .select('id', 'titleHr')
  .whereIn('titleHr', storyTitles);

  const storyIdByTitle = Object.fromEntries(stories.map(({ id, titleHr}) => [titleHr, id]));

  await knex(SENTENCES_TABLE_NAME).del();
  for (let story of rawStoriesData) {
    const { titleHr, text, vocabulary } = story;
    sentencesData.push(...text.map((text, index) => ({...text, sentenceIndex: index, storyId: storyIdByTitle[titleHr]})));
    vocabularyData.push(...vocabulary.map((vocabulary) => ({...vocabulary, storyId: storyIdByTitle[titleHr]})));
  };

  await knex(WORDS_TABLE_NAME).del();
  for (let index = 0; index < sentencesData.length; index += 200) {
    await knex(SENTENCES_TABLE_NAME).insert(sentencesData.slice(index, index + 200));
  }

  for (let index = 0; index < vocabularyData.length; index += 200) {
    await knex(WORDS_TABLE_NAME).insert(vocabularyData.slice(index, index + 200));
  }
};
