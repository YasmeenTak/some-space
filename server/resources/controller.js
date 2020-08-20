const { UserModel, ProductModel } = require("./model.js");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(
  "sk_test_51H9W3uJoAFGhJTyjdUZK6a1g7Ru7BrM41GtpX2xjmXUkUNVrdK0yCsL0Yu7nE5naU4SWtvBNGmm7NstwEiDkG2zE00DRNwjFPf"
);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./../../config/key");
const jwt_decode = require("jwt-decode");
// Load input validation
const validateRegisterInput = require("./../../validation/register");
const validateLoginInput = require("./../../validation/login");
//-----------------------------------------Register------------------------------------------------//
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
          email: "Email already exists",
        });
      } else {
        //Generate random id -- Yasmeen
        function zerobug() {
          return Math.floor(10000000 + Math.random() * 90000000);
        }
        const newUser = new UserModel({
          UserID: zerobug(),
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
                console.log("new user saved to database");
                res.sendStatus(201);
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
};
//-----------------------------------------Login-----------------------------------------------------//
exports.login = function (req, res) {
  console.log("we are in login");
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
        emailnotfound: "Email not found",
      });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        console.log(user);
        const payload = {
          UserID: user.UserID,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            console.log(token, "tokennnnnnnnnnn");
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({
          passwordincorrect: "Password incorrect",
        });
      }
    });
  });
};
//--------------------------------------------Contact us-----------------------------------------------------//
exports.Contact = function (req, res) {
  console.log(
    req.body.senderEmail,
    req.body.senderMessage,
    "   /*/*/*/**/*/*/*/*/*/**/*/"
  );
  sendEmail(req.body.senderEmail, req.body.senderMessage);
  function sendEmail(email, Message) {
    console.log("we area here");
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "zerobugeasy@gmail.com", // generated ethereal user
          pass: "zerobug666666", // generated ethereal password
        },
      });
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: '"ExChange" <ssomespacee@gmail.com>', // sender address
          to: "ssomespacee@gmail.com", // list of receivers
          subject: "customer has a problem :heavy_check_mark:", // Subject line
          text: "I need some help", // plain text body
          html: (email, "       ", Message),
          // html: `<h2>I need some help? : ${email}</h2><p>you got a message </p> <p>${Message}<p/>`, // html body
        },
        (err, info) => {
          if (err) {
            console.log(err);
            return console.log(err);
          }
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
      );
    });
  }
};
//--------------------------------------------Add Product-----------------------------------------------------//
exports.addProduct = (req, res) => {
  const {
    productID,
    title,
    description,
    price,
    images,
    category,
    location,
    token,
  } = req.body;
  //connect the user token with the product he add to buy -- Yasmeen
  var decoded = jwt_decode(token);
  id = decoded.UserID;
  let productDocument = new ProductModel({
    productID: productID,
    UserID: id,
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
  });
  productDocument
    .save()
    .then(() => {
      UserModel.updateOne(
        { UserID: id },
        { $push: { sell: { productID: productID } } }
      ).then((result) => {
        res.send("data saved");
      });
      res.send("saved product!");
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------Show All Product in Home Page----------------------------------------//

exports.findAllProducts = (req, res) => {
  ProductModel.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------------Classify by Category-------------------------------------------------//
exports.category = (req, res) => {
  ProductModel.find({ category: req.body.category })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
//--------------------------------Payment System---------------------------------------//
exports.pay = async (req, res) => {
  const { email } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "usd",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
    receipt_email: email,
  });
  res.json({ client_secret: paymentIntent["client_secret"] });
};
//---------------------------------------------------------------------------
// exports.addToUserSell = (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
//   // save teh req.body in user sell by find the arrry in push requset in usermon=dule
// };
//-------------------------------- ShowMyAds ----------------------------------------//
exports.showMyAds = async (req, res) => {
  var decoded = jwt_decode(req.body.token);
  id = decoded.UserID;
  UserModel.find({ UserID: id })
    .then((result) => {
      const array = [];
      result[0].sell.map((Element) => {
        array.push(Element["productID"]);
      });
      ProductModel.find({ productID: { $in: array } }).then((result) => {
        res.send(result);
      });
      // res.send(result[0].sell);
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------- Show My Carts ----------------------------------------//
exports.showMyCarts = (req, res) => {
  var decoded = jwt_decode(req.body.token);
  id = decoded.UserID;
  UserModel.find({ UserID: id })
    .then((result) => {
      const array = [];
      result[0].carts.map((Element) => {
        array.push(Element["productID"]);
      });
      ProductModel.find({ _id: { $in: array } }).then((result) => {
        console.log(result);
        res.send(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------- find user ----------------------------------------//
exports.findUser = function (req, res) {
  const UserID = req.params.UserID;
  UserModel.find({ UserID: UserID })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------- Remove Ads from user ads list ------------------------------------//

exports.removeOne = function (req, res) {
  // console.log(req.body);
  const { UserID, productID } = req.body;
  // const sellUpdated = 'sell.' + index;
  UserModel.update(
    { UserID: UserID },
    { $pull: { sell: { productID: productID } } }
  )
    .then((result) => {
      res.status(204).send(`${result.n} Product Deleted`);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  ProductModel.remove({ productID: productID })
    .then((result) => {
      res.status(204).send(`${result.n} Product Deleted`);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//-------------------------------- Find Product ----------------------------------------//
exports.findProduct = (req, res) => {
  const UserID = req.params.UserID;
  UserModel.find({ UserID: UserID })
    .then((result) => {
      const array = [];
      result[0].sell.map((Element) => {
        array.push(Element["productID"]);
      });
      ProductModel.find({ productID: { $in: array } }).then((result) => {
        console.log(result);
        res.send(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

// find product from carts in user
//---------------------------- Find Product  In User Carts-------------------------------------//
exports.findProductInCarts = (req, res) => {
  const UserID = req.params.UserID;
  UserModel.find({ UserID: UserID })
    .then((result) => {
      const array = [];
      result[0].carts.map((Element) => {
        array.push(Element["productID"]);
      });
      ProductModel.find({ productID: { $in: array } }).then((result) => {
        res.send(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
//-------------------------------- Edit Product ads ----------------------------------------//
exports.updateOne = function (req, res) {
  //console.log(req.body.title, req.body.description);
  const { images, title, description, price, location, category } = req.body;
  // console.log(images, title, description, price, location, category);
  ProductModel.updateOne(
    { productID: req.params.productID },
    {
      $set: { images, title, description, price, location, category },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
//*/-----------------

exports.addToCardUesr = (req, res) => {
  console.log(req.body.UserID, req.body.productID);
  UserModel.update(
    { UserID: req.body.UserID },
    { $push: { carts: { productID: req.body.productID } } }
  )
    .then((result) => {
      console.log(result, "we saved our product for cart-controller");
      res.send("we saved in database");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.showcartsUser = (req, res) => {
  var decoded = jwt_decode(req.params.token);
  id = decoded.UserID;
  UserModel.find({ UserID: id })
    .then((result) => {
      const array = [];
      result[0].carts.map((Element) => {
        array.push(Element["productID"]);
      });
      ProductModel.find({ productID: { $in: array } }).then((result) => {
        console.log("resultt", result);
        res.send(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.removeOneFromCarts = (req, res) => {
  console.log(req.body.productID);
  ProductModel.remove({ productID: req.body.productID })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
