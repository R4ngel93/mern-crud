const express = require('express');

/* Controller */
const BusinessCtrl = require('../controllers/business-ctrl.js');

/* Router */
const router = express.Router();

/* Routes */

//Store data route
router.post('/add', BusinessCtrl.addData);

//Get data route
router.get('/', BusinessCtrl.getData);

//Edit route
router.get('/edit/:id', BusinessCtrl.editData);

//Update route
router.post('/update/:id', BusinessCtrl.updateData);

//Delete route
router.post('/delete/:id', BusinessCtrl.deleteData);

/* Export */
module.exports = router;