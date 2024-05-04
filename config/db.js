const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white)
    }catch(error){
        console.log(`Mongodb connection error ${error}`.bgRed.white);
    }
}

module.exports = connectDB;