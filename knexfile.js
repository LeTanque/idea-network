// REQUIRED FOR KNEXFILE TO ACKNOWLEDGE ENV WITH LOCAL MIGRATIONS
const dotenv = require('dotenv');
dotenv.config();

const productionDbConnection = process.env.DATABASE_URL || "localhost";


module.exports = {
  hotdev: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DB_FILE,
    },
    migrations: {
      directory: __dirname + '/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    useNullAsDefault: true
  },
  localpg: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/${process.env.DB_LOCAL}`,
    migrations: {
      directory: __dirname + '/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: productionDbConnection,
    migrations: {
      directory: __dirname + '/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    },
    useNullAsDefault: true
  },
};


