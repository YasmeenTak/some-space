const router = require('express').Router();

const controller = require('./controller.js');
// const stripe = require("stripe")(
//   "sk_test_51H9W3uJoAFGhJTyjnH0dr1tdnKdXJ5s2LWEyJ2pHcCNIwDE4sAxKiSium0boFyEpexAUAZ0xv3x7KmzSaYCT0fnB00jR5ndXwt"
// );
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/Contact', controller.Contact);
router.post('/pay', controller.pay);
router
  .route('/addProduct')
  .post(controller.addProduct)
  .get(controller.findProduct);
router.post('/category', controller.category);

// router.post('/addToUserSell', controller.addToUserSell);
router.get('/showMyAds', controller.showMyAds);
router.get('/showMyCarts', controller.showMyCarts);

module.exports = router;
