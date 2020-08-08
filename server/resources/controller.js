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
//Add product
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
// exports.showProduct = function(req, res, next){
//  console.log('ID:', req.params.id)
//     next()

//   }
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.productId);
    if (!product) {
      return res.status(404).json({msg: "Could not find product"});
    }

    res.status(200).json(product);
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    next(err);
  }
}

exports.addProduct;
