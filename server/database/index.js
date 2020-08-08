const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/someSpace", { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err);
  });

module.exports = mongoose;

// //------------------------------------------
// let ProductModel = mongoose.model('product', productSchema);
// // let productDoc = new ProductModel({
// //   idProduct: '123',
// //   title: 'table',
// //   category: '123123',
// // });
// // productDoc.save((err) => {
// //   if (err) {
// //     console.log('error while saving to DB', err);
// //   } else {
// //     console.log('product Saved');
// //   }
// // });
// module.exports.UserModel = this.UserModel;
// module.exports.ProductModel = this.ProductModel;
