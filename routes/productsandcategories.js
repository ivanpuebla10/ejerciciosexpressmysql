const express = require("express");
const router = express.Router();
const ProdandCatController = require("../controllers/ProdsandCatsController");

router.get('/createtableprodscategories', ProdandCatController.createTableProdsandCats);
router.post('/addproductscategories', ProdandCatController.addProdandCat);
router.get('/prodsandcats', ProdandCatController.getProdsandCats);

module.exports = router;

