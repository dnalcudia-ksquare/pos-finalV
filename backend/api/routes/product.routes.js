const express = require('express');
const Resources = require('../resources/index');
const ProductRouter = express.Router();

ProductRouter.use('/', Resources.ProductResources);

module.exports = ProductRouter;

/* module.exports = app => {
    const products = require('../controller/product.controllers.js');
    let router = require('express').Router();

    // Create a new product
    router.post('/', );
    
    // Get all products
    router.get('/', );
    
    // Fetch a single product
    router.get('/:id', );
    
    // Update a product
    router.put('/:id');
    
    // Delete a product
    router.delete('/:id', );
    
} */