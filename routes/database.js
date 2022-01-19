const express = require('express');
const router = express.Router();
const DataBaseController = require("../controllers/DataBaseController");

router.get('/createdb', DataBaseController.dbController);

module.exports = router;