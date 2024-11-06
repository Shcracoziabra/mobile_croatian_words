const path = require('path');
const { createDataFromLocalJSON, formatDataItemPropsToColumnNames } = require('../../helpers/helpers');

const columnNamesToDataItemPropsMap = {
  'maskuline': 'maskuline',
  'feminine': 'feminine',
  'neutrum': 'neutrum',
  'ukrainianTranslation': 'ukrainianTranslation',
  'exampleSentence': 'exampleSentence',
  'ukrainianTranslationSentence': 'ukrainianTranslationSentence',
};

const TABLE_NAME = 'adjectives';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const adjectiveAssetsDirectory = path.resolve(__dirname, '../../assets/adjectives');
  const rawData = await createDataFromLocalJSON(adjectiveAssetsDirectory);
  const formattedData = formatDataItemPropsToColumnNames({
    data: rawData,
    columnNamesToDataItemPropsMap,
  });

  // Deletes ALL existing entries
  await knex(TABLE_NAME).del()
  for(let index = 0; index < formattedData.length; index+=200) {
    await knex(TABLE_NAME).insert(formattedData.slice(index, index + 200));
  }
  
};