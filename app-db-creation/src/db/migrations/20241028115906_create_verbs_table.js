/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('verbs', (table) => {
		table.increments('id').primary();
		table.string('infinitive');
		table.string('presentTense');
		table.string('pastTense');
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
  return knex.schema.dropTableIfExists('verbs');
};
