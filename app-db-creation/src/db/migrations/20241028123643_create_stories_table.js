/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stories', (table) => {
		table.increments('id').primary();
		table.string('titleHr');
		table.string('titleUk');
		table
			.integer('imageId')
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
