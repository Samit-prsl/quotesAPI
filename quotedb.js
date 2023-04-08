const dotenv = require('dotenv').config();
const connectdb = require('./db/connect');
const product = require('./models/products');
const quotesjson = require('./quotes.json')
const start = async ()=>{
try {
    await connectdb(process.env.MONGO_URI);
    await product.create(quotesjson);
    console.log("success");
} catch (error) {
    console.log(error);
}
}
start();