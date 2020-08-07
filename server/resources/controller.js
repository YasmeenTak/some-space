const { UserModel, ProductModel } = require('./model.js');

exports.register = function (req, res) {
  const { firstName, lastName, email, password } = req.body;
  let userDoc = new UserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  userDoc.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send('Saved');
    }
  });
};

exports.login = function (req, res) {
  const { Email, Password } = req.body;
  var email = req.body.Email;
  var password = req.body.Password;
  UserModel.find({ Email, Password })
    .then((result) => {
      if (result.length > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
