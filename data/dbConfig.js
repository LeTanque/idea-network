import knex from 'knex';
import knexConfig from '../knexfile.js';
require('dotenv').config();

// console.log("DB_ENVIRO:  ", process.env.DB_ENVIRO)


const dbEnv = process.env.DB_ENVIRO || process.env.DB_ENV || "hotdev";


// module.exports = knex(knexConfig[dbEnv]) 

export default knex(knexConfig[dbEnv]) 

