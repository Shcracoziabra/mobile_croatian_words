/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('storyWords', (table) => {
		table.increments('id').primary();
		table.string('hr');
		table.string('uk');
		table
			.integer('storyId')
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
  return knex.schema.dropTableIfExists('storyWords');
};
