const express = require("express")
const recordController = require("../controller/record.controller")
const router = express.Router()


router.post("/create-task",recordController.createRecord)
router.patch("/markcompletion-task",recordController.markCompletion)
router.patch("/rename-task",recordController.rename)
router.patch("/priority-task",recordController.priority)
router.get("/getpriority-task",recordController.getPriority)
router.patch("/date-task",recordController.date)
router.get("/getdate-task",recordController.getDate)
router.patch("/comment-task",recordController.addComment)
router.delete("/delete-task",recordController.deleteRecord)
router.get("/tasks",recordController.record)


module.exports = router