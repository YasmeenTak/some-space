const { UserModel, ProductModel } = require('./model.js');

exports.register = function (req, res) {
  const {
    UserID,
    firstName,
    lastName,
    email,
    password,
    phone,
    age,
    gender,
  } = req.body;
  let userDoc = new UserModel({
    UserID: UserID,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phone: phone,
    age: age,
    gender: gender,
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

// exports.register = function (req, res) {
//   const { firstName, lastName, email, password } = req.body;
//   let regDocumentation = new RegModel({ firstName, lastName, email, password });

//   regDocumentation
//     .save()
//     .then(() => res.status(201).send('created'))
//     .catch((err) => res.status(500).send(err + 'err'));
// };

// exports.login = function (req, res) {
//   const { email, password } = req.params;

//   var email = req.body.email;
//   var password = req.body.password;

//   RegModel.find({ email, password })
//     .then((result) => {
//       if (result.length > 0) {
//         res.send(true);
//       } else {
//         res.send(false);
//       }
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };
