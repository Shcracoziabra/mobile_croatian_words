const path = require('node:path');
const { createDataFromLocalJSON } = require('../../helpers/helpers');;

const STORIES_TABLE_NAME = 'stories';
const SENTENCES_TABLE_NAME = 'story_sentences';
const WORDS_TABLE_NAME = 'story_words';

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
    const { title_hr, illustration } = story;
    storyImages.push(illustration);
    storyTitles.push(title_hr);
  }

  const images = await knex('images')
		.select('id', 'name')
		.whereIn('name', storyImages);
  
  const imageIdByName = Object.fromEntries(images.map(({name, id}) => [name, id]));

  const storiesData = rawStoriesData.map(({ title_hr, title_uk, illustration}) => {
    return {
      title_hr,
      title_uk,
      image_id: imageIdByName[illustration]
    }
  });

  // Deletes ALL existing entries
  await knex(STORIES_TABLE_NAME).del()
  await knex(STORIES_TABLE_NAME).insert(storiesData);

  const stories = await knex(STORIES_TABLE_NAME)
  .select('id', 'title_hr')
  .whereIn('title_hr', storyTitles);

  const storyIdByTitle = Object.fromEntries(stories.map(({ id, title_hr}) => [title_hr, id]));

  await knex(SENTENCES_TABLE_NAME).del();
  for (let story of rawStoriesData) {
    const { title_hr, text, vocabulary } = story;
    sentencesData.push(...text.map((text, index) => ({...text, index, story_id: storyIdByTitle[title_hr]})));
    vocabularyData.push(...vocabulary.map((vocabulary) => ({...vocabulary, story_id: storyIdByTitle[title_hr]})));
  };

  await knex(WORDS_TABLE_NAME).del();
  for (let index = 0; index < sentencesData.length; index += 200) {
    await knex(SENTENCES_TABLE_NAME).insert(sentencesData.slice(index, index + 200));
  }

  for (let index = 0; index < vocabularyData.length; index += 200) {
    await knex(WORDS_TABLE_NAME).insert(vocabularyData.slice(index, index + 200));
  }
};
