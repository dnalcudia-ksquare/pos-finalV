const express = require('express');
const mongoose = require('mongoose');
const mainRoute = require('../api/routes/index');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const username = 'daniel_Aguero';
const password = 'K$UKt7UW!$Pu2*m';
const cluster = 'cluster0.ed5jx';
const dbName = 'myFirstDatabase';

let corsOption = {
    origin: "http://localhost:3001",
};

app.use(cors());

app.use(express.json());

//Connecting to mongoDB
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Connected to DB successfully');
});

// Setting the server
app.use(mainRoute.ProductRouter, mainRoute.InvoiceRouter);
app.get('/', (req, res) => {
    res.status(404).json({
        message: 'Sorry resource not found',
    });
});

app.listen(port, () => {
    console.log(`Server listening at URL: http://localhost:${port}`);
});




/* // importing express and initializing the environment variable PORT
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

let corsOption = {
    origin: "http://localhost:3001",
};

app.use(cors(corsOption));

// Parsing request of content-type: application/json and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("../api/model");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!!");
})
.catch(err => {
    console.log("Can not connect to the database!", err);
    process.exit();
});

// const Product = mongoose.model('Products', { name: String, price: Number });

// Creating the GET endpoint
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Listening the port
app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`);
}); */