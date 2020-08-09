const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { UserModel, ProductModel } = require('./resources/model');
const db = require('./database/index');
const router = require('./resources/router');
const { title } = require('process');
const cors = require('cors');
const router0 = require('../routes/users');

app.use(express.json());
app.use(cors());

app.post('/addProduct', (req, res) => {
  const { title, description, price, images, category, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
  });
});

app.use('/', router);
app.use('/api/users', router0);

// let UserModel= db.UserModel;+

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
  productDocument
    .save()
    .then(() => res.send('saved product!'))
    .catch((err) => {
      res.send(err);
    });
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
