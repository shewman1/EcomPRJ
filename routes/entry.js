const path = require('path');
const express = require('express');
const router = express.Router();

const entryController = require('../controller/entry');

router.get('/login', entryController.getLogin);
router.get('/signup', entryController.getSignUp);
module.exports = router;