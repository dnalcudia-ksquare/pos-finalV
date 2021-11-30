/* const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://daniel_Aguero:K$UKt7UW!$Pu2*m@cluster0.ed5jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db = {};

mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = dbUrl;
db.products = require("./product.model.js")(mongoose);

module.exports = db; */

const ProductModel = require('./product.model');
const InvoiceModel = require('./invoice.model');

module.exports = {
    ProductModel,
    InvoiceModel
};