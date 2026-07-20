const express = require("express")
const subtaskController = require("../controller/subtask.controller")
const router = express.Router()


router.post("/create-subtask",subtaskController.createSubtask)
router.get("/subtasks",subtaskController.getSubtask)
router.patch("/rename-subtask",subtaskController.rename)
router.patch("/priority-subtask",subtaskController.priority)


module.exports = router