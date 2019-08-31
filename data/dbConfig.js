
const knex = require("knex");

const dbEnvironment = process.env.NODE_ENV || 'hotdev';


let knexfileConfig = require('../knexfile')[dbEnvironment];




// console.log("NODE_ENV value:  ", process.env.NODE_ENV)
// console.log("SQLITE FILE:  ---> ", process.env.DB_FILE);

module.exports = require('knex')(knexfileConfig);

