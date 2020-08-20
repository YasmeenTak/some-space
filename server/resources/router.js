const router = require('express').Router();

const controller = require('./controller.js');
const stripe = require('stripe')(
  'sk_test_51H9W3uJoAFGhJTyjdUZK6a1g7Ru7BrM41GtpX2xjmXUkUNVrdK0yCsL0Yu7nE5naU4SWtvBNGmm7NstwEiDkG2zE00DRNwjFPf'
);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/Contact', controller.Contact);
router.post('/pay', controller.pay);

router
  .route('/addProduct')
  .post(controller.addProduct)
  .get(controller.findProduct);

router.post('/category', controller.category);

// // router.post('/addToUserSell', controller.addToUserSell);
// router.get("/findProduct", controller.findProduct);
// router.get("/buyProduct", controller.buyProduct);
// router.get("/showMyAds", controller.showMyAds);
// router.get('/showMyCarts', controller.showMyCarts);
router.post('/showMyAds', controller.showMyAds);
router.get('/showMyCarts', controller.showMyCarts);
router.get('/finduser/:UserID', controller.findUser);
router.delete('/remove-one', controller.removeOne);
router.get('/findProduct/:UserID', controller.findProduct);
router.post('/addToCardUser', controller.addToCardUesr);
router.get('/findAllProducts', controller.findAllProducts);
router.get('/showMyCarts/:token', controller.showcartsUser);
router.put('/updateOne/:productID', controller.updateOne);
module.exports = router;
