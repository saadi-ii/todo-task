const express = require("express")
const boxController = require("../controller/box.controller")
const router = express.Router()


router.post("/create-box",boxController.createBox)
router.get("/boxes",boxController.box)
router.delete("/delete-box",boxController.deleteBox)


module.exports = router