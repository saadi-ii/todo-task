const express = require("express")
const recordController = require("../controller/record.controller")
const router = express.Router()


router.post("/create-task",recordController.createRecord)
router.patch("/markcompletion-task",recordController.markCompletion)
router.patch("/rename-task",recordController.rename)
router.patch("/priority-task",recordController.priority)
router.patch("/comment-task",recordController.addComment)
router.get("/tasks",recordController.record)


module.exports = router