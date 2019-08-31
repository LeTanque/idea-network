
exports.seed = function(knex) {
  return knex('users')
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
