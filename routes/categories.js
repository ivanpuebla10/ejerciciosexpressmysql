const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoriesController");

router.get('/createtablecategories', CategoryController.createTableCategories);
router.post('/addcategories', CategoryController.addCategory);
router.put('/updatecat/:id', CategoryController.updateCategory);
router.get('/getcats', CategoryController.addCategory);
router.get('/catid/:id', CategoryController.getCategoryById);

module.exports = router;
