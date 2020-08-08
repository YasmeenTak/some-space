const express = require("express");
const path = require("path");
const app = express();
<<<<<<< HEAD
const axios = require("axios");
const { UserModel, ProductModel } = require("./resources/model");
const db = require("./database/index");
const router = require("./resources/router");
const { title } = require("process");

app.use(express.json());

app.post("/addProduct", (req, res) => {
  const { title, description, price, images, category, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
=======
const { UserModel, ProductModel } = require('./resources/model');
const db = require('./database/index');
const router = require('./resources/router');

app.use(express.json());

// let UserModel= db.UserModel;
app.post('/user', (req, res) => {
  console.log('reatch**********************');
  console.log(req.body);
  const {
    UserID,
    firstName,
    lastName,
    email,
    password,
    phone,
    stripe,
    age,
    gender,
    buy,
    sell,
    carts,
    quantity,
  } = req.body;
  let userDoc = new UserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  userDoc.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).json({
        message: 'Saved',
        user: { firstName: firstName, lastName: lastName },
      });
    }
>>>>>>> f86808a73352ba7b4706506a78350436750f9e12
  });
  productDocument
    .save()
    .then(() => res.send("saved product!"))
    .catch((err) => {
      res.send(err);
    });
});

<<<<<<< HEAD
if (process.env.NODE_ENV === "production") {
=======
//-------------------------------------------------
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
>>>>>>> f86808a73352ba7b4706506a78350436750f9e12
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
