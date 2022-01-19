const express = require('express');
const router = express.Router();
const ProdandOrderController = require("../controllers/ProdsandOrdsController");

router.get('/productsorders', ProdandOrderController.createTableProdsandOrds);
router.get('/getusersandorders', ProdandOrderController.getProdsandOrds);

module.exports = router;