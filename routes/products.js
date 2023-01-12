'use strict'

var express = require('express');
var ProductController = require('../controllers/product');

var router = express.Router();

// ROUTES FOR PRODUCTS
router.get('/productos', ProductController.list);

module.exports = router;