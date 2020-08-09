const router = require("express").Router();
const controller = require("./controller.js");
router.post("/register", controller.register);
router.post("/login", controller.login);
// router.post("/addProduct", controller.addProduct);
// router.get('/showProduct', controller.showProduct);
//const { check } = require("express-validator");
router.post("/Contact", controller.Contact);
module.exports = router;
