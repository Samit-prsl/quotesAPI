const quote = require('../models/products')

const getProducts = async (req,res)=>{
    const data = await quote.find({}).sort({"id" : 1})
    res.status(200).json({data});
}

const getProductsTesting = async (req,res)=>{
    //res.status(200).json({msg : "Get Products Testing"});
    const data = await quote.find(req.query).sort({"id" : 1})
    res.status(200).json({data});
}

module.exports = {getProducts,getProductsTesting}