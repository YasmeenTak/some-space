const router = require("express").Router();

const controller = require("./controller.js");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/Contact", controller.Contact);
router.post("/pay", controller.pay);
router
  .route("/addProduct")
  .post(controller.addProduct)
  .get(controller.findProduct);
router.post("/category", controller.category);

module.exports = router;
