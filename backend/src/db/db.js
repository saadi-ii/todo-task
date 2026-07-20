const mongoose = require("mongoose")
require("dotenv").config()


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected");
        
    } catch (error) {
        console.error("Error: ",error)
    }
}


module.exports = connectDB