const mongoose = require("mongoose")

const recordSchema = mongoose.Schema({
    boxname : String,
    taskname : String,
    priority:String,
    comment:String,
    date:String
})


const recordModel = mongoose.model("record",recordSchema)
module.exports = recordModel