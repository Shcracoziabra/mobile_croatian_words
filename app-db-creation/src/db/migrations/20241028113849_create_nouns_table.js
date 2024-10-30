/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('nouns', (table) => {
		table.increments('id').primary();
		table.string('singular');
		table.string('plural');
		table.string('ukrainian_translation');
		table.string('example_sentence');
		table.string('ukrainian_translation_sentence');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('nouns');
};
