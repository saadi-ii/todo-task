const mongoose = require("mongoose")

const boxSchema = mongoose.Schema({
    boxname : String
})


const boxModel = mongoose.model("box",boxSchema)
module.exports = boxModel