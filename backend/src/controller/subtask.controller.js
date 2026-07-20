const { modelNames } = require("mongoose")
const subtaskModel = require("../model/subtask.model")


const createSubtask = async(req,res) => {
    const data = req.body
    console.log(data)

    if (!data.subtaskname || data.subtaskname === "") {
        res.status(401).json({
            message : "Must write taskname and boxname"
        })
        return
    }
    const creteRecord = await subtaskModel.create({
        taskname : data.taskname,
        subtaskname : data.subtaskname

    })
    res.status(201).json({
        message : "created"
    })
}


const getSubtask = async(req,res) => {
    const records = await subtaskModel.find()
    return res.status(200).json({
        records
    })
}

const rename = async(req,res) => {
    const data = req.body
    const records = await subtaskModel.findOneAndUpdate({
        subtaskname : data.subtaskname
    },{
        subtaskname : data.newsubtaskname
    })
    res.status(200).json({record})
}



const priority = async(req,res) => {
    const data = req.body
    const records = await subtaskModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        priority : data.priority
    })
    
    res.status(200).json({record})
}






module.exports = {createSubtask,getSubtask,rename,priority}