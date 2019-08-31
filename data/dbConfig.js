import knex from 'knex';
import knexConfig from '../knexfile.js';
require('dotenv').config();


let dbEnv = "";
if (process.env.DB_ENVIRO) {
    dbEnv = process.env.DB_ENVIRO
} 
if (process.env.DB_ENV) {
    dbEnv = process.env.DB_ENV
} 
if (!process.env.DB_ENV || !process.env.DB_ENVIRO) {
    dbEnv = "hotdev"
}



export default  knex(knexConfig[dbEnv]);




// console.log("dbConfig knexConfig: ", knexConfig[dbEnv]);
// console.log("DB_ENV, DB_ENVIRO: ", process.env.DB_ENV, process.env.DB_ENVIRO);
// process.env.DB_ENVIRO || process.env.DB_ENV || "hotdev";
// module.exports = knex(knexConfig[dbEnv]) ;