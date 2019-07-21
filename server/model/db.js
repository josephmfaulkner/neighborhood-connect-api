const { Client } = require('pg');
const config = require('./config.js');
const client = new Client(config);

client.query(`set search_path to 'test'`);
client.connect();

module.exports = client;
