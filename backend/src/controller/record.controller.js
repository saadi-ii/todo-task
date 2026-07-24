const recordModel = require("../model/record.model")


const createRecord = async(req,res) => {
    const data = req.body
    
    
    if (!data.taskname || data.taskname === "") {
        return res.status(401).json({
            message : "Must write taskname"
        })
        
    }
    
    const isTaskInSuchBoxExist = await recordModel.findOne({
        boxname : data.boxname,
        taskname : data.taskname
    })
    console.log(isTaskInSuchBoxExist);
    
    if (isTaskInSuchBoxExist) {
        return res.status(401).json({
            message : "This task already exist in such column"
        })
    }

    const creteRecord = await recordModel.create({
        boxname : data.boxname,
        taskname : data.taskname

    })
    res.status(201).json({
        message : "created"
    })
}

const markCompletion = async(req,res) => {
    const data = req.body
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        boxname : data.boxname
    })
    res.status(200).json({records})
}

const rename = async(req,res) => {
    const data = req.body
    
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        taskname : data.newtaskname
    })
    res.status(200).json({records})
}

const priority = async(req,res) => {
    const data = await req.body
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname,
        boxname : data.boxname
    },{
        priority : data.priority
    })
    
    res.status(200).json({records})
}


const getPriority = async(req,res) => {
    const data = await req.query
    const records = await recordModel.findOne({
        taskname : data.taskname,
        boxname : data.boxname
    })
    if (records.priority) {
        res.status(200).json(records.priority)
        
    }else{
        res.status(200).json("")
    }
}

const date = async(req,res) => {
    const data = await req.body
    
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname,
        boxname : data.boxname
    },{
        date : data.date
    })
    
    res.status(200).json({records})
}


const getDate = async(req,res) => {
    const data = await req.query
    
    const records = await recordModel.findOne({
        taskname : data.taskname,
        boxname : data.boxname
    })
    if (records.date) {
        res.status(200).json(records.date)
    }
    else{
        res.status(200).json("")

    }
}



const addComment = async(req,res) => {
    const data = req.body

    
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        comment : data.comment
    })
    
    res.status(200).json({records})
}



const record = async(req,res) => {
    const records = await recordModel.find()
    return res.status(200).json({
        records
    })
}


const deleteRecord = async(req,res) => {
    const data = req.query;
    
    const deletedTask = await recordModel.findOneAndDelete({
        taskname : data.taskname,
        boxname : data.boxname
    })
    res.status(200).json({message:"Deleted"})
}



module.exports = {createRecord,record,markCompletion,rename,priority,getPriority,addComment,date,getDate,deleteRecord}