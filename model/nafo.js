/**
 * By: Richard Duong
 * Import MySQL dependency to establish connection.
 */
const mysql = require('mysql2');

/**
 * Create a MySQL pool, to store connections retrieved from the .env global variable injection.
 */
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

function poolTest() {
    return pool;
}


module.exports = poolTest();