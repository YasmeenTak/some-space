const { UserModel, ProductModel } = require("./model.js");
const nodemailer = require("nodemailer");
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
      res.status(201).send("Saved");
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
exports.Contact = function (req, res) {
  console.log("we are hrere");
  // const { senderName, senderEmail, senderMessage } = req.body;
  console.log("i send a message");
  sendEmail(req.body.senderEmail, req.body.senderMessage);
  function sendEmail(email, number) {
    console.log("we area here");
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bankexchange4@gmail.com", // generated ethereal user
          pass: "exchange1234", // generated ethereal password
        },
      });
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: '"ExChange" <ssomespacee@gmail.com>', // sender address
          to: "ssomespacee@gmail.com", // list of receivers
          subject: "customer has a problem :heavy_check_mark:", // Subject line
          text: "I need some help", // plain text body
          html: `<h2>I need some help? : ${email}</h2><p>you got a message </p> <p>${number}<p/>`, // html body
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
