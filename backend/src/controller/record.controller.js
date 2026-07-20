const recordModel = require("../model/record.model")


const createRecord = async(req,res) => {
    const data = req.body
    console.log(data)

    if (!data.taskname || data.taskname === "") {
        res.status(401).json({
            message : "Must write taskname"
        })
        return
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
    res.status(200).json({record})
}

const rename = async(req,res) => {
    const data = req.body
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        taskname : data.newtaskname
    })
    res.status(200).json({record})
}

const priority = async(req,res) => {
    const data = req.body
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        priority : data.priority
    })
    
    res.status(200).json({record})
}

const addComment = async(req,res) => {
    const data = req.body
    console.log(data);
    
    const records = await recordModel.findOneAndUpdate({
        taskname : data.taskname
    },{
        comment : data.comment
    })
    
    res.status(200).json({record})
}



const record = async(req,res) => {
    const records = await recordModel.find()
    return res.status(200).json({
        records
    })
}



module.exports = {createRecord,record,markCompletion,rename,priority,addComment}