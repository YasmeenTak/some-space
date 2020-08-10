const express = require('express');
const path = require('path');
const app = express();
const { UserModel, ProductModel } = require('./resources/model');
const db = require('./database/index');
const router = require('./resources/router');
const router0 = require('../routes/users');
const cors = require('cors');
app.use(express.json());
app.use(cors());
// let UserModel= db.UserModel;

app.use('/', router);
app.use('/api/users', router0);

//-------------------------------------------------
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
