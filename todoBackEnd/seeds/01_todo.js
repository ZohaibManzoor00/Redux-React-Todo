/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('todo').del()
  await knex('todo').insert([
    {description: 'Dishes'},
    {description: 'Folding Laundry'},
    {description: 'Cleaning Car'},
  ]);
};
