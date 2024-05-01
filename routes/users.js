const router = require('express').Router();

const userController = require("../controllers/UserController");

//
const verifyToken = require("../app/middlewares/authenticate");

//create user
router.post('/users', verifyToken, userController.store);


module.exports = router