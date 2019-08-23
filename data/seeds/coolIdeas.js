
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          name: 'Tacos'
        },
        {
          name: 'Vincent'
        }
      ]);
    });
};
