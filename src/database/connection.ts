require("dotenv").config();

const knex = require('knex')

const configuration = require('../../knexfile.ts')
const env = process.env.DATABASE_ENV || 'development'
const connection = knex(configuration[env])

module.exports = connection;
