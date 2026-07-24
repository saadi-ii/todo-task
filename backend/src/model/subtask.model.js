const mongoose = require("mongoose")

const subtaskSchema = mongoose.Schema({
    taskname : String,
    subtaskname : String,
    priority:String,
    date:String
})


const subtaskModel = mongoose.model("subtask",subtaskSchema)
module.exports = subtaskModel