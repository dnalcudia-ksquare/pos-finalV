const express = require('express');
const app = express();
const Models = require('../model/index');

const createProduct = async (req, res) => {
    // Seeing if the new product created already exist
    const newProduct = new Models.ProductModel(req.body);
    const products = await Models.ProductModel.find({ name: newProduct.name, price: newProduct.price }).exec();

    try{

        if(products.some(product => { 
                product.name === newProduct.name;
                product.price === newProduct.price;
            })){

                // Send error message if product already exist
                throw new Error(`This product exist`);

            } else{
                // If product is new save and send it to the database
                await newProduct.save();
                res.send(newProduct);
            }

        } catch(error){
            // Send error message as object if the action can't be done
            const { message } = error;
            res.status(500).send({ message });
        }
};

const getAllProducts = async (req, res) => {
    // Find all documents in database
    const products = await Models.ProductModel.find({})

    try{

        // Send response with find products
        res.send(products)

    } catch(error){
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

const getProductById = async (req, res) => {
    // Getting access to parameter sended through request
    const { id } = req.params;

    try{

        // Finding document by id and sending the response
        const product = await Models.ProductModel.findById(id);
        res.send(product);

    } catch(error) {
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

const updateProduct = async (req, res) => {
    // Getting access to parameter sended through request
    const { params: { id }, body } = req;

    try{

        //Validating empty string
        if(body.name === '' || body.price === null){
            throw new Error('Name and price are required');
        } else{
            const product = await Models.ProductModel.findByIdAndUpdate(id, body);
            res.send(body); // Showing updated data
        }

    } catch(error){
        const { message } = error;
        res.status(500).send(message);
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try{

        const product = await Models.ProductModel.findByIdAndRemove(id);
        const message = { message: `id: ${id} successful deleted`, };
        res.send(message) // Sending response of deleted document
    
    } catch(error){
        const { message } = error;
        res.status(500).send(message);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}

/* const Product = require('../model/product.model.js');


async function addProduct(){
    try{
        const product = await Product.create();
        return product;
    } catch(error){
        throw new Error('Error creating a product');
    }
}

async function getProduct(){
    try{
        return await Product.find({});
    } catch(error){
        throw new Error('Error getting products');
    }
}

async function getProductById(productId){
    try{
        const product = await Product.find({ productId }).exec();
        return product;
    } catch(error){
        throw new Error('Error getting the product');
    }
}

module.exports = {
    addProduct,
    getProduct,
    getProductById
} */