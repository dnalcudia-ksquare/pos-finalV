const express = require('express');
const ProductResources = express.Router();
const Controllers = require('../controller/index');

ProductResources.get('/product/', Controllers.ProductController.getAllProducts);
ProductResources.get('/product/:id', Controllers.ProductController.getProductById);
ProductResources.post('/product/', Controllers.ProductController.createProduct);
ProductResources.put('/product/:id', Controllers.ProductController.updateProduct);
ProductResources.delete('/product/:id', Controllers.ProductController.deleteProduct);

module.exports = ProductResources;