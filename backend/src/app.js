const express = require("express")
const cors = require("cors")
const boxRoute = require("./routes/box.routes")
const recordRoute = require("./routes/record.routes")
const subtaskRoute = require("./routes/subtask.routes")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/box",boxRoute)
app.use("/task",recordRoute)
app.use("/subtask",subtaskRoute)


module.exports = app