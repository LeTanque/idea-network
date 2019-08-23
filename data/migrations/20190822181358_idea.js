exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(users) {
        users.increments();
        users
          .string('name')
          .notNullable()
          .unique();
      })
      .createTable('ideas', function(ideas) {
        ideas.increments();
        ideas.text('text').notNullable();
  
        ideas
          .integer('idea_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ideas').dropTableIfExists('users');
};

