const express = require('express');
const InvoiceRouter = express.Router()
const Resources = require('../resources/index');

InvoiceRouter.use('/', Resources.InvoiceResources);

module.exports = InvoiceRouter;