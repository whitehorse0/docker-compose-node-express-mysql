const express = require('express')
const router = express.Router()
const home = require('../controllers/home-controller')
const taxs = require('../controllers/tax-controller')
const product = require('../controllers/product-controller')
const order = require('../controllers/order-controller')

router.get('/', home.list())
router.get('/taxs', taxs.list())
router.get('/products', product.list())
router.get('/products/tax', product.listProductTax())
router.get('/orders', order.list())

module.exports = router