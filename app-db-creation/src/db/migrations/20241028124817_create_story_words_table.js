/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('story_words', (table) => {
		table.increments('id').primary();
		table.string('hr');
		table.string('uk');
		table
			.integer('story_id')
			.references('id')
			.inTable('stories')
			.notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('story_words');
};
