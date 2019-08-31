
exports.seed = function(knex) {
  return knex('ideas').insert([
    { id:1, text:'Super delicious', user_id:1 },
    { id:2, text:'Vintage Tacos', user_id:1 }
  ]);
};

