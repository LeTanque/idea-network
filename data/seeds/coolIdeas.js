
exports.seed = function(knex) {
  return knex('ideas').del()
    .then(function () {
      return knex('ideas').insert([
        {
          id: 1, 
          colName: 'rowValue1'
        }
      ]);
    });
};
