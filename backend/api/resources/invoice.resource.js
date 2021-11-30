const express = require('express');
const InvoiceResources = express.Router();
const Controllers = require('../controller/index');

InvoiceResources.get('/invoice/', Controllers.InvoiceController.getAllInvoices);
InvoiceResources.get(
  '/invoice/:id',
  Controllers.InvoiceController.getInvoiceById
);
InvoiceResources.post('/invoice/', Controllers.InvoiceController.createInvoice);
InvoiceResources.put(
  '/invoice/:id',
  Controllers.InvoiceController.updateInvoice
);

module.exports = InvoiceResources;
