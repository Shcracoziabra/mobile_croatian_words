const path = require('node:path');
const { createDataFromLocalImages } = require('../../helpers/helpers');

const TABLE_NAME = 'images';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const imageAssertsDirectory = path.resolve(__dirname, '../../assets/images')
  const imagesData = await createDataFromLocalImages(imageAssertsDirectory);

  // Deletes ALL existing entries
  await knex(TABLE_NAME).del()
  await knex(TABLE_NAME).insert(imagesData);
};
