const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://EmanAbuWaked:emanmoon93@cluster0.ez1k5.mongodb.net/someSpace?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err);
  });

module.exports = mongoose;
