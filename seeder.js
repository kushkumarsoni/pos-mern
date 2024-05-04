const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const itemModel = require('./models/itemModel')
const userModel = require('./models/userModel')
const usersData = require('./utils/seeders/usersData')
const itemsData = require('./utils/seeders/itemsData')
require('colors');

//database connection
dotenv.config();
connectDB();

const importUserData = async () => {
    try{
        await userModel.deleteMany();
        const user = await userModel.insertMany(usersData);
        console.log("User added successfully".bgGreen);
        process.exit();
    }catch(error){
        console.log(`Error in seeding data ${error}`.bgBlack.white);
        process.exit(1);
    }
}

const importItemData = async () => {
    try{
        await itemModel.deleteMany();
        const item = await itemModel.insertMany(itemsData);
        console.log("Item added successfully".bgGreen);
        process.exit();
    }catch(error){
        console.log(`Error in seeding data ${error}`.bgBlack.white);
        process.exit(1);
    }
}

//importUserData()
importItemData()