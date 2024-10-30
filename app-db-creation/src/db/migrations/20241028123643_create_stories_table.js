/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stories', (table) => {
		table.increments('id').primary();
		table.string('title_hr');
		table.string('title_uk');
		table
			.integer('image_id')
			.references('id')
			.inTable('images');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stories');
};
