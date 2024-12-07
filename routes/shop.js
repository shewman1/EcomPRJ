const path = require('path');
const express = require('express');
const router = express.Router();

const shopControler = require('../controller/shop');
// GET REQUESTS
router.get('/', shopControler.getHome)
router.get('/products/all',shopControler.getProductsAll)
router.get('/products/:id',shopControler.getProductsById)

router.get('/cart/add/:id',shopControler.getAddToCartById)
router.get('/cart',shopControler.getCart)

// POST REQUESTS



module.exports = router;