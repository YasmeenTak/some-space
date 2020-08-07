const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const { UserModel, ProductModel } = require("./resources/model");
const db = require("./database/index");
const router = require("./resources/router");
const { title } = require("process");

app.use(express.json());

app.post("/product", (req, res) => {
  const { title, description, price, images, catagory, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    catagory: catagory,
    location: location,
  });
  productDocument
    .save()
    .then(() => res.send("saved product!"))
    .catch((err) => {
      res.send(err);
      console.log(err)
    });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
