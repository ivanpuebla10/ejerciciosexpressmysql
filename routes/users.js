const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UsersController");

router.get('/createtableusers', UserController.createTableUsers);
router.post('/adduser', UserController.addUser);
router.put('/updateuser/:id', UserController.updateUser);
router.get('/getusers', UserController.getUsers);
router.get('/getuser/:id', UserController.getUserById);
//AGREGAR ON DELETE CASCADE DESPUES DE REFERENCES EN ORDERS(DONDE ESTA LA FOREIGN KEY)
router.delete('/deleteuser/:id', UserController.deleteUserById);

module.exports = router;