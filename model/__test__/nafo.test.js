/**
 * Import dependency to grab the connection pool from nafo.js for unit testing
 */
const nafo = require('../nafo');

/**
 * JEST Unit testing: ensure there is some kind of connection to database
 */
describe('Database Connection Test', () => {
    test('Test to make sure nafo can establish a connection to the database', () => {
        nafo.getConnection((err, connection) => {
            try {
                expect(connection).to.not.be.null;
            } catch (err) {
                done(err);
            }
        });
    });
});