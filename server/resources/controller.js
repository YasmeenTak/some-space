const { UserModel, ProductModel } = require('./model.js');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(
  'sk_test_51H9W3uJoAFGhJTyjnH0dr1tdnKdXJ5s2LWEyJ2pHcCNIwDE4sAxKiSium0boFyEpexAUAZ0xv3x7KmzSaYCT0fnB00jR5ndXwt'
);

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('./../../config/key');
// Load input validation
const validateRegisterInput = require('./../../validation/register');
const validateLoginInput = require('./../../validation/login');

exports.register = function (req, res) {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    res.send(errors);
    res.end();
  } else {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    UserModel.find({ email: email }).then((user) => {
      if (user[0]) {
        return res.status(400).json({
          email: 'Email already exists',
        });
      } else {
        const newUser = new UserModel({
          firstName,
          lastName,
          email,
          password,
        });
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                console.log('new user saved to database');
                res.sendStatus(201);
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
};

exports.login = function (req, res) {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  UserModel.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({
        emailnotfound: 'Email not found',
      });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res.status(400).json({
          passwordincorrect: 'Password incorrect',
        });
      }
    });
  });
};

exports.Contact = function (req, res) {
  console.log(
    req.body.senderEmail,
    req.body.senderMessage,
    '   /*/*/*/**/*/*/*/*/*/**/*/'
  );
  sendEmail(req.body.senderEmail, req.body.senderMessage);
  function sendEmail(email, Message) {
    console.log('we area here');
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bankexchange4@gmail.com', // generated ethereal user
          pass: 'exchange1234', // generated ethereal password
        },
      });
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: '"ExChange" <ssomespacee@gmail.com>', // sender address
          to: 'ssomespacee@gmail.com', // list of receivers
          subject: 'customer has a problem :heavy_check_mark:', // Subject line
          text: 'I need some help', // plain text body
          html: (email, '       ', Message),
          // html: `<h2>I need some help? : ${email}</h2><p>you got a message </p> <p>${Message}<p/>`, // html body
        },
        (err, info) => {
          if (err) {
            console.log(err);
            return console.log(err);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
      );
    });
  }
};
// //Post product -- Add
// exports.addProduct = function (req, res) {
//   const { title, description, price, images, category, location } = req.body;
//   let productDocument = new ProductModel({
//     title: title,
//     description: description,
//     price: price,
//     images: images,
//     category: category,
//     location: location,
//   });
//   productDocument
//     .save()
//     .then(() => res.send("saved product!"))
//     .catch((err) => {
//       res.send(err);
//     });
// };

exports.addProduct = (req, res) => {
  const {
    title,
    description,
    price,
    images,
    category,
    location,
    quality,
  } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    quality: quality,
    location: location,
  });
  productDocument
    .save()
    .then(() => res.send('saved product!'))
    .catch((err) => {
      res.send(err);
    });
};
exports.findProduct = (req, res) => {
  ProductModel.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.category = (req, res) => {
  ProductModel.find({ category: req.body.category })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.quality = (req, res) => {
  ProductModel.find({ quality: req.body.quality })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.pay = async (req, res) => {
  const { email } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
    receipt_email: email,
  });

  res.json({ client_secret: paymentIntent['client_secret'] });
};
