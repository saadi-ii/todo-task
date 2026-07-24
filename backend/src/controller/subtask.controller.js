const { modelNames } = require("mongoose")
const subtaskModel = require("../model/subtask.model")


const createSubtask = async(req,res) => {
    const data = req.body
    console.log(data);
    
    if (!data.subtaskname || data.subtaskname === "") {
        return res.status(401).json({
            message : "Must write sub-Task name"
        })
        
    }

    const isSubtaskAlreadyExist = await subtaskModel.findOne({
        taskname : data.taskname,
        subtaskname : data.subtaskname
    })

    if (isSubtaskAlreadyExist) {
        return res.status(401).json({
            message : "A sub-task with this name already exist in this task"
        })
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
        subtaskname : data.subtaskname,
        taskname : data.taskname
    },{
        priority : data.priority
    })
    
    res.status(200).json({record})
}

const getPriority = async(req,res) => {
    const data = req.query
    
    const records = await subtaskModel.findOne({
        subtaskname : data.subtaskname,
        taskname : data.taskname
    })
    
    if (records.priority) {
        res.status(200).json(records.priority)
    } else {
        res.status(200).json("")
    }
}



const date = async(req,res) => {
    const data = req.body
    const records = await subtaskModel.findOneAndUpdate({
        subtaskname : data.subtaskname,
        taskname : data.taskname
    },{
        date : data.date
    })
    
    res.status(200).json({record})
}

const getDate = async(req,res) => {
    const data = req.query
    
    const records = await subtaskModel.findOne({
        subtaskname : data.subtaskname,
        taskname : data.taskname
    })
    
    if (records.date) {
        res.status(200).json(records.date)
    } else {
        res.status(200).json("")
    }
}

const deleteSubTask = async(req,res)=>{
    const data = req.query;
    console.log(data);
    
    const deletedTask = await subtaskModel.findOneAndDelete({
        subtaskname : data.subtaskname,
        taskname : data.taskname
    })
    console.log(deletedTask);
    
    res.status(200).json({message:"Deleted"})
}






module.exports = {createSubtask,getSubtask,rename,priority,getPriority,date,getDate,deleteSubTask}