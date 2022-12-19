/**
 * By: Richard Duong
 * IMPORT the database connection pool dependency from model/nafo.js
 */
const pool = require('../../model/nafo');

/**
 * Renders the index page, where the user can view complete Otoliths dataset table and actions to modify db
 * @param {*} req There are no request object(s)
 * @param {*} res Index hbs passed for rendering
 */
exports.view = (req, res) => {

    // Connect to the Database
    pool.getConnection((err, connection) => {

        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID ' + connection.threadId);
        connection.query('SELECT * FROM nafo', (err, rows) => {
            // Releases connection
            connection.release();

            if (!err) {
                res.render('index', { rows });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: Displaying a sample NAFO data (id=6): \n', rows[5]);
        })
    });
};

/**
 * Renders the View Data Source page, where the user can view a data visual that showcases total number of otoliths collected by source type.
 * @param {*} req There are no request objects.
 * @param {*} res view-data-source passed for rendering
 */
exports.viewDataSource = (req, res) => {
    pool.getConnection((err, connection) => {
        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID ' + connection.threadId);
        connection.query('SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE source = ? UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE source = ? UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE source = ? UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE source = ?', ['Commercial', 'Observers', 'RV-4T', 'SENT-4T'], (err, result) => {
            // Releases connection
            if (!err) {
                let firstLabel = parseInt(Object.values(result[0]));
                let secondLabel = parseInt(Object.values(result[1]));
                let thirdLabel = parseInt(Object.values(result[2]));
                let fourthLabel = parseInt(Object.values(result[3]));
                res.render('view-data-source', { firstLabel, secondLabel, thirdLabel, fourthLabel });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: Number of Otolith Sources...Commercial, Observers, RV-4T, and SENT-4T respectively: ',
                parseInt(Object.values(result[0])), ',', parseInt(Object.values(result[1])), ',', parseInt(Object.values(result[2])), ',',
                parseInt(Object.values(result[3])));
        })
    });

};

/**
 * Renders the View Data Seasonal page, where the user can view a data visual that showcases total number of otoliths collected during different seasons.
 * @param {*} req There are no request objects
 * @param {*} res view-data-seasonal passed for rendering
 */
exports.viewSeasonalData = (req, res) => {
    pool.getConnection((err, connection) => {
        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID ' + connection.threadId);
        connection.query('SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE month_mois BETWEEN 3 AND 5 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE month_mois BETWEEN 6 AND 8 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE month_mois BETWEEN 9 AND 11 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE month_mois = 12 OR month_mois = 2 OR month_mois = 1', (err, result) => {
            // Releases connection
            if (!err) {
                let spring = parseInt(Object.values(result[0]));
                let summer = parseInt(Object.values(result[1]));
                let autumn = parseInt(Object.values(result[2]));
                let winter = parseInt(Object.values(result[3]));
                res.render('view-data-seasonal', { spring, summer, autumn, winter });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: Number of Otolith Sources...Commercial, Observers, RV-4T, and SENT-4T respectively: ',
                parseInt(Object.values(result[0])), ',', parseInt(Object.values(result[1])), ',', parseInt(Object.values(result[2])), ',',
                parseInt(Object.values(result[3])));
        })
    });
};

/**
 * Renders the View Data Decade page, where the user can view a data visual that showcases total number of otoliths collected during different decades.
 * @param {*} req There are no request objects
 * @param {*} res view-data-decade passed for rendering
 */
exports.viewDecadeData = (req, res) => {
    pool.getConnection((err, connection) => {
        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID ' + connection.threadId);
        connection.query('SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 1948 AND 1959 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 1960 AND 1969 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 1970 AND 1979 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 1980 AND 1989 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 1990 AND 1999 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 2000 AND 2009 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` BETWEEN 2010 AND 2019 UNION SELECT SUM(`number-otoliths_nombre-otolithes`) FROM practicalproj3.nafo WHERE `year_annÃ©e` >= 2020', (err, result) => {
            // Releases connection
            if (!err) {
                let d1 = parseInt(Object.values(result[0]));
                let d2 = parseInt(Object.values(result[1]));
                let d3 = parseInt(Object.values(result[2]));
                let d4 = parseInt(Object.values(result[3]));
                let d5 = parseInt(Object.values(result[4]));
                let d6 = parseInt(Object.values(result[5]));
                let d7 = parseInt(Object.values(result[6]));
                let d8 = parseInt(Object.values(result[7]));
                res.render('view-data-decade', { d1, d2, d3, d4, d5, d6, d7, d8});
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: Number of Otolith Sources...Commercial, Observers, RV-4T, and SENT-4T respectively: ',
                parseInt(Object.values(result[0])), ',', parseInt(Object.values(result[1])), ',', parseInt(Object.values(result[2])), ',',
                parseInt(Object.values(result[3])));
        })
    });
};

/**
 * Renders the add-record page when user clicks on 'add record' button from the index page
 * @param {*} req There are no request object(s)
 * @param {*} res add-record hbs passed for rendering
 */
exports.form = (req, res) => {
    res.render('add-record');
};

/**
 * Renders the add-record page once the add-record form was submitted from the page
 * @param {*} req Object submitted from add-record form passed through here
 * @param {*} res add-record hbs passed for re-rendering
 */
exports.create = (req, res) => {
    const { source, 'latin-name_nom-latin': latin, 'english-name_nom-anglais': eng, 'french-name_nom-franÃ§ais': french, 'year_annÃ©e': year, month_mois, 'number-otoliths_nombre-otolithes': num } = req.body;
    pool.getConnection((err, connection) => {

        // Occurs if not connected!
        if (err) throw err;

        console.log('Connection ID: ' + connection.threadId);

        connection.query('INSERT INTO nafo SET source = ?, `latin-name_nom-latin` = ?, `english-name_nom-anglais` = ?, `french-name_nom-franÃ§ais` = ?, year_annÃ©e = ?, month_mois = ?, `number-otoliths_nombre-otolithes` = ?', [source, latin, eng, french, year, month_mois, num], (err, rows) => {
            // Releases connection
            connection.release();

            if (!err) {
                res.render('add-record');
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: The data from nafo table: \n', rows);
        })
    });
};

/**
 * Renders the edit record page for the specified row (id) from the dataset
 * @param {*} req Object of the row specified by id within edit-record hbs passed
 * @param {*} res edit-record passed for rendering
 */
exports.edit = (req, res) => {
    pool.getConnection((err, connection) => {
        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID: ' + connection.threadId);

        connection.query('SELECT * FROM nafo WHERE nafo_id = ?', [req.params.id], (err, rows) => {
            // Releases connection
            connection.release();

            if (!err) {
                res.render('edit-record', { rows });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: The data from edit form: \n', rows);
        })
    });
};

/**
 * Renders the update record page for the specified row (id) from the dataset
 * @param {*} req Object submitted from edit-record form passed through here
 * @param {*} res edit-record passed for re-rendering with new textbox values (if applicable)
 */
exports.update = (req, res) => {
    const { source, 'latin-name_nom-latin': latin, 'english-name_nom-anglais': eng, 'french-name_nom-franÃ§ais': french, 'year_annÃ©e': year, month_mois, 'number-otoliths_nombre-otolithes': num } = req.body;
    pool.getConnection((err, connection) => {
        // Occurs if not connected!
        if (err) throw err;
        console.log('Connection ID ' + connection.threadId);

        connection.query('UPDATE nafo SET source=?, `latin-name_nom-latin`=?, `english-name_nom-anglais`=?, `french-name_nom-franÃ§ais`=?, year_annÃ©e=?, month_mois =?, `number-otoliths_nombre-otolithes`=? WHERE nafo_id=?', [source, latin, eng, french, year, month_mois, num, req.params.id], (err, rows) => {
            // Releases connection
            connection.release();

            if (!err) {
                pool.getConnection((err, connection) => {
                    // Occurs if not connected!
                    if (err) throw err;
                    console.log('Connection ID ' + connection.threadId);

                    connection.query('SELECT * FROM nafo WHERE nafo_id = ?', [req.params.id], (err, rows) => {
                        // Releases connection
                        connection.release();

                        if (!err) {
                            res.render('edit-record', { rows });
                        } else {
                            console.log(err);
                        }
                        console.log('RICHARD DUONG says: Here is the new data replacing the previous: \n', rows);
                    })
                });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: "Updating the record with: \n"', rows);
        })

    });

};

/**
 * Re-renders the index page after selecting the specified row (id) to delete
 * @param {*} req Object containing the id of row to delete passed through here
 * @param {*} res index passed for re-rendering
 */
exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected!
        console.log('Connected as ID ' + connection.threadId);

        connection.query('DELETE FROM nafo WHERE nafo_id = ?', [req.params.id], (err, rows) => {
            // Release connection when done with it
            console.log(rows);
            connection.release();

            if (!err) {
                res.redirect('/');
            } else {
                console.log(err);
            }
        })
    });
};

/**
 * Renders the view record page for the specified row (id) from the dataset
 * @param {*} req Object containing id of row to view record passed through here
 * @param {*} res view-record passed for rendering
 */
exports.viewrecord = (req, res) => {
    // Connect to the Database
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected!
        console.log('Connected as ID ' + connection.threadId);


        connection.query('SELECT * FROM nafo WHERE nafo_id = ?', [req.params.id], (err, rows) => {
            // Release connection when done with it
            connection.release();

            if (!err) {
                res.render('view-record', { rows });
            } else {
                console.log(err);
            }
            console.log('RICHARD DUONG says: The data from single record view: \n', rows);
        })
    });
};



