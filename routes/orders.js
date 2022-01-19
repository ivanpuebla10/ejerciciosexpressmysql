const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/OrdersController");

router.get('/createtableorders', OrderController.createTableOrders);
router.post('/addorder', OrderController.addOrder);
router.get('/getorders', OrderController.getOrders);

module.exports = router;

