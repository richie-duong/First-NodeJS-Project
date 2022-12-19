/**
 * Importing dependencies for routing to handle requests
 */
const express = require('express');
const router = express.Router();
const nafoController = require('../controllers/nafoController');

/**
 * Establish POST and GET requests for the index, add-record, edit-record, view-record, and delete.
 */

// GET Index
router.get('/', nafoController.view);

// GET Data Pages
router.get('/viewdata-source', nafoController.viewDataSource);
router.get('/viewdata-seasonal', nafoController.viewSeasonalData);
router.get('/viewdata-decade', nafoController.viewDecadeData);

// GET and POST Add-Record
router.get('/addrecord', nafoController.form);
router.post('/addrecord', nafoController.create);

// GET and POST Edit-Record with specified data id
router.get('/editrecord/:id', nafoController.edit);
router.post('/editrecord/:id', nafoController.update);

// GET View-Record with specified data id
router.get('/viewrecord/:id', nafoController.viewrecord);

//GET Delete-Record with specified data id
router.get('/:id', nafoController.delete);


module.exports = router;