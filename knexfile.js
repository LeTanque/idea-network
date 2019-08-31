const dotenv = require('dotenv');
dotenv.config();

const productionDbConnection = process.env.DATABASE_URL || "localhost";
const developmentDbFile = process.env.DB_FILE || "./data/db.db3"

// console.log("SQLITE FILE in knexfile:  ---> ", process.env.DB_FILE);
// console.log("NODE_ENV? is that a thing?  -->", process.env.NODE_ENV);
// console.dir(process.env);

module.exports = {
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: developmentDbFile,
  //   },
  //   migrations: {
  //     directory: __dirname + '/data/migrations',
  //     tableName: 'knex_migrations',
  //   },
  //   seeds: {
  //     directory: __dirname + '/data/seeds',
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done);
  //     },
  //   },
  //   useNullAsDefault: true
  // },
  hotdev: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/data/idea-hotdev.db3',
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


