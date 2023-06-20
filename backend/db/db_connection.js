const mysql = require('mysql2');
// const dotenv = require('dotenv');

// dotenv.config();

const dbConfig = {
    host: "sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
    port: parseInt("3306"),
    user: "pracha23",
    password: "2SxhMFnYU869",
    database: "project_artiva23_pracha23_p8_2223t11",
    connectTimeout: parseInt("10000")
}

const connection = mysql.createConnection(dbConfig);

module.exports = connection;