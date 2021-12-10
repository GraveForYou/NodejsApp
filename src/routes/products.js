const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController');

router.use('/search', productsController.search);
router.use('/:id', productsController.getProductById);
router.use('/', productsController.index);

module.exports = router;