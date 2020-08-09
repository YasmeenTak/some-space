const router = require("express").Router();
const controller = require("./controller.js");
router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/Contact", controller.contact);
// router.post("/addProduct", controller.addProduct);
module.exports = router;
