const itemModel = require('../models/itemModel')
const {validationResult} = require('express-validator')

const getItem = async (req,res) => {
    try{
        const items = await itemModel.find();
        return res.status(200).send({
            status: true,
            message: "All items",
            items
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            status:false,
            message: "Error in getting items",
            error
        });
    }
}   

const addItem = async (req,res) => {
    try{
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            const addIitem = new itemModel(req.body);
            await addIitem.save();
            return res.status(200).send({
                status: true,
                message: "Item add successfully",
                item:addIitem
            })
        }
        res.status(422).json({
            status: false,
            message: "Validation failed",
            errors: errors.array()
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            status:false,
            message: "Error in adding items",
            error
        });
    }
}   

module.exports = {getItem,addItem}