const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/someSpace', { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('Error while connecting to DB', err);
  });

module.exports = mongoose;

















// let userSchema = mongoose.Schema({
//   Id: { type: Number },
//   firstName: { type: String },
//   lastName: { type: String },
//   email: { type: String },
//   password: { type: String },
//   phone: { type: Number },
//   stripe: { type: [] },
//   age: { type: Date },
//   gender: { type: String },
//   buy: [{ idProduct: Number, date: { type: Date, default: Date.now } }],
//   sell: [{ idProduct: Number, date: { type: Date, default: Date.now } }],
//   carts: [{ idProduct: Number }],
//   quantity: { type: Number },
// });
// let productSchema = mongoose.Schema({
//   idProduct: { type: Number },
//   title: { type: String },
//   image: { type: String },
//   discription: { type: String },
//   price: { type: Number },
//   category: { type: String, required: true },
//   location: { type: String },
//   dateOfAdd: { date: { type: Date, default: Date.now } },
// });
// let UserModel = mongoose.model('user', userSchema);
// let userDoc = new UserModel({
//   firstName: 'safaa',
//   lastName: 'shami',
//   email: 'safa@hotmail.com',
//   password: '123123',
// });
// userDoc.save((err) => {
//   if (err) {
//     console.log('error while saving to DB', err);
//   } else {
//     console.log('User Saved');
//   }
// });
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