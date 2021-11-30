const mongoose = require('mongoose');

// Creating the schema
const schema = new mongoose.Schema({
    date: { type: Date, default: Date.now() },
    status: Boolean,
    productName: Array,
    finalAmount: Array,
});

// Creating the model
const Invoice = mongoose.model('Invoice', schema);

module.exports = Invoice;