const express = require('express');
const app = express();
const connectdb = require('./db/connect')
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Live')
})

const ProdRoute = require('./Routes/list');

app.use('/api/products',ProdRoute);

const start = async ()=>{
    try {
        await connectdb(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`Server listening at ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();