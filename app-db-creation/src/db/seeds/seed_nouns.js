const path = require('path');
const { createDataFromLocalJSON, formatDataItemPropsToColumnNames } = require('../../helpers/helpers');

const columnNamesToDataItemPropsMap = {
  'singular': 'singular',
  'plural': 'plural',
  'ukrainian_translation': 'ukrainian_translation',
  'example_sentence': 'example_sentence',
  'ukrainian_translation_sentence': 'ukrainian_translation_sentence',
};

const TABLE_NAME = 'nouns';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const nounAssetsDirectory = path.resolve(__dirname, '../../assets/nouns');
  const rawData = await createDataFromLocalJSON(nounAssetsDirectory);
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
