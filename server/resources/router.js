const router = require('express').Router();
const controller = require('./controller.js');

router.post('/register', controller.register);

module.exports = router;