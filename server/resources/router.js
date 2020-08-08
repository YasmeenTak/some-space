<<<<<<< HEAD
const router = require("express").Router();
const controller = require("./controller.js");
router.post("/register", controller.register);
router.post("/login", controller.login);
// router.post("/addProduct", controller.addProduct);
=======
const router = require('express').Router();
const controller = require('./controller.js');

router.post('/register', controller.register);
router.post('/login', controller.login);

>>>>>>> f86808a73352ba7b4706506a78350436750f9e12
module.exports = router;
