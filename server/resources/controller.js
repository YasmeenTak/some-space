const { UserModel, ProductModel } = require('./model.js');

 //Post product -- Add
exports.addProduct = function(req, res){
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
    .then(() => res.send("saved product!"))
    .catch((err) => {
      res.send(err);
    });
};

//Show Product
exports.showProduct = function(req, res){
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
    .then(() => res.send("saved product!"))
    .catch((err) => {
      res.send(err);
    });
}


