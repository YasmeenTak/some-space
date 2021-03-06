const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(
  'sk_test_51H9W3uJoAFGhJTyjdUZK6a1g7Ru7BrM41GtpX2xjmXUkUNVrdK0yCsL0Yu7nE5naU4SWtvBNGmm7NstwEiDkG2zE00DRNwjFPf'
);
const { UserModel, ProductModel } = require('./resources/model');
const db = require('./database/index');
const router = require('./resources/router');
const { title } = require('process');

app.use(express.json());
app.use(cors());
app.use('/', router);

// app.post("/pay", async (req, res) => {
//   const { email } = req.body;

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 5000,
//     currency: "usd",
//     // Verify your integration in this guide by including this parameter
//     metadata: { integration_check: "accept_a_payment" },
//     receipt_email: email,
//   });

//   res.json({ client_secret: paymentIntent["client_secret"] });
// });

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
