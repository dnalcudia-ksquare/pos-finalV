const mongoose = require('mongoose');

// Creating the schema
const schema = new mongoose.Schema({
    name: String,
    price: Number,
});

// Creating the model
const Product = mongoose.model('Product', schema);

module.exports = Product;

/* module.exports = mongoose => {
    let schema = mongoose.Schema({
        name: String,
        price: Number
    });

    schema.method("toJSON", function() {
        const {__v, _id, ...object } = this.object();
        object.id = _id;
        return object;
    });

    const product = mongoose.model("products", schema)
    return product;
} */