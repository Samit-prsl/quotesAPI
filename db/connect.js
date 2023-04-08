const mongoose = require('mongoose');


const connectdb = (uri)=>{
    //console.log("Entered");
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
}

module.exports = connectdb;