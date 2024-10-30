//
// tradeapp_db.js
//
// Exports 
// tradeapp_db: connection object to our MySQL database in AWS RDS
//

const mysql = require('mysql');
const fs = require('fs');
const ini = require('ini');

const config = require('./config.js');

const tradeapp_config = ini.parse(fs.readFileSync(config.tradeapp_config, 'utf-8'));
const endpoint = tradeapp_config.rds.endpoint;
const port_number = tradeapp_config.rds.port_number;
const user_name = tradeapp_config.rds.user_name;
const user_pwd = tradeapp_config.rds.user_pwd;
const db_name = tradeapp_config.rds.db_name;

//
// creates connection object, but doesn't open connnection:
//
let tradeapp_db = mysql.createConnection(
  {
    host: endpoint,
    port: port_number,
    user: user_name,
    password: user_pwd,
    database: db_name,
    multipleStatements: true  // allow multiple queries in one call
  }
);

module.exports = tradeapp_db;
