const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductsController");

router.get('/createtableproducts', ProductController.createTableProducts);
router.post('/addproducts',ProductController.addProduct);
router.put('/updateprod/:id',ProductController.updateProduct);
router.get('/getprods',ProductController.getProducts);
router.get('/prodid/:id',ProductController.getProductById);
router.get('/getproduct/:caca',ProductController.getProductByName)
router.delete('/deleteproduct/:id', ProductController.deleteProductById)
router.get('/productsdesc',ProductController.orderProductsDesc)

module.exports = router;

