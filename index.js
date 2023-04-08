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
        await connectdb('mongodb+srv://samit:28QOB7IRA5p2Zdif@samitapi.buguzwg.mongodb.net/ProductAPI?retryWrites=true&w=majority');
        app.listen(PORT,()=>{
            console.log(`Server listening at ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();