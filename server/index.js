const express = require('express');
const path = require('path');
const app = express();
const { UserModel, ProductModel } = require('./resources/model');
const db = require('./database/index');
const router = require('./resources/router');


app.use(express.json());

// let UserModel= db.UserModel;
app.post('/user', (req, res) => {
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
  let userDoc = new UserModel({ firstName: firstName, lastName: lastName });

  userDoc.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send('Saved');
    }
  });
});

//app.get('/', (req, res) => rces.send('API Running'));
app.get('/user', (req, res) => {
  UserModel.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.use('/', router);


//-------------------------------------------------
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
