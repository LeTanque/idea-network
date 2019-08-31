
exports.seed = function(knex) {
  return knex('users').insert([
    { id:1, name: 'Tacos' },
    { id:2, name: 'Vincent' }
  ]);
};

