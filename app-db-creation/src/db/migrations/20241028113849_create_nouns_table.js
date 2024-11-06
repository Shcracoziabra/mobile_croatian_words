/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('nouns', (table) => {
		table.increments('id').primary();
		table.string('singular');
		table.string('plural');
		table.string('ukrainianTranslation');
		table.string('exampleSentence');
		table.string('ukrainianTranslationSentence');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('nouns');
};
