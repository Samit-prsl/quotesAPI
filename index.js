const express = require('express');
const app = express();
const connectdb = require('./db/connect')
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello here its live on the server,head on to /api to check for the api and /api/testing to see them along with query params')
})

const ProdRoute = require('./Routes/list');

app.use('/api',ProdRoute);

const start = async ()=>{
    try {
        await connectdb(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`Server listening at ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
start();