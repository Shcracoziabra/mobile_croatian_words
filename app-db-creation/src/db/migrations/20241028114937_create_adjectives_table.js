/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('adjectives', (table) => {
		table.increments('id').primary();
		table.string('maskuline');
		table.string('feminine');
		table.string('neutrum');
		table.string('ukrainianTranslation');
		table.string('exampleSentence');
		table.string('ukrainianTranslationSentence');
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('adjectives');
};
