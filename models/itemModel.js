const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price:{
        type : Number ,
        required :true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default:"images/items/no-image.jpg",
        required: true
    }
})

module.exports = mongoose.model("items",itemSchema)