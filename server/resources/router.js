const router = require('express').Router();
const {check} = require("express-validator");
const controller = require('./controller.js');

// router.post('/register', controller.register);
// router.post('/login', controller.login);
router.post('/addProduct', controller.addProduct);
router.get('/showProduct', controller.showProduct);




module.exports = router;
