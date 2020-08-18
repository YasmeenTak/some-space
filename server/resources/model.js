const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  UserID: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: Number },
  stripe: { type: [] },
  age: { type: Date },
  gender: { type: String },
  buy: [{ productID: Number, date: { type: Date, default: Date.now } }],
  sell: [{ productID: Number, date: { type: Date, default: Date.now } }],
  cart: [{ productID: String }],
  quantity: { type: Number },
});
let UserModel = mongoose.model("user", userSchema);
//---------------------------------------
let productSchema = mongoose.Schema({
  productID: { type: Number },
  title: { type: String },
  images: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: Number, default: 1, required: true },
  location: { type: String },
  dateOfAdd: { date: { type: Date, default: Date.now } },
  ImgUrl: { type: String },
  quality: { type: String, default: 1, required: true },
});
let ProductModel = mongoose.model("product", productSchema);
module.exports = {
  UserModel,
  ProductModel,
};
