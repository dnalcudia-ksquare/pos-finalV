const express = require('express');
const app = express();
const Models = require('../model/index');

const createInvoice = async (req, res) => {
    const newInvoice = new Models.InvoiceModel(req.body);

    try{

        // Save new invoice and send the response
        await newInvoice.save();
        res.send(newInvoice);

    } catch(error){
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

const getAllInvoices = async (req, res) => {
    // Find all documents in database
    const invoices = await Models.InvoiceModel.find({});

    try{

        // Send response with find invoices
        res.send(invoices);

    } catch(error){
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

const getInvoiceById = async (req, res) => {
    // Getting access to parameters sended through request
    const { id } = req.params;

    try{
        
        // Finding documents by id and sending the response
        const invoice = await Models.InvoiceModel.findById(id);
        res.send(invoice);

    } catch(error){
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

const updateInvoice = async (req, res) => {
    // Getting access to parameters sended through request
    const { params: { id }, body } = req;

    try{

        const invoice = await Models.InvoiceModel.findByIdAndUpdate(id, body);
        res.send(body); //Showing updated data

    } catch(error){
        // Send error message as object if the action can't be done
        const { message } = error;
        res.status(500).send({ message });
    }
};

module.exports = {
    createInvoice,
    getAllInvoices,
    getInvoiceById,
    updateInvoice
};