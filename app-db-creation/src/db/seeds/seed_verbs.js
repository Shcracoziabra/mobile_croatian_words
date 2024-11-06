const path = require('path');
const { createDataFromLocalJSON, formatDataItemPropsToColumnNames } = require('../../helpers/helpers');

const columnNamesToDataItemPropsMap = {
  'infinitive': 'infinitive',
  'presentTense': 'presentTense',
  'pastTense': 'pastTense',
  'ukrainianTranslation': 'ukrainianTranslation',
  'exampleSentence': 'exampleSentence',
  'ukrainianTranslationSentence': 'ukrainianTranslationSentence',
};

const TABLE_NAME = 'verbs';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const verbAssetsDirectory = path.resolve(__dirname, '../../assets/verbs');
  const rawData = await createDataFromLocalJSON(verbAssetsDirectory);
  const formattedData = formatDataItemPropsToColumnNames({
    data: rawData,
    columnNamesToDataItemPropsMap,
  });

  // Deletes ALL existing entries
  await knex(TABLE_NAME).del()
  for(let index = 0; index < formattedData.length; index+=100) {
    await knex(TABLE_NAME).insert(formattedData.slice(index, index + 100));
  }
  
};