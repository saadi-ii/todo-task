const connectDB = require("./src/db/db")
const app = require("./src/app")

require("dotenv").config()


connectDB()


app.listen(process.env.PORT,()=>{console.log("Server is running")})