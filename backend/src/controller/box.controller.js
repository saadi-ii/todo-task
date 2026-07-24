const boxModel = require("../model/box.model")


const createBox = async(req,res) => {
    const data = req.body
    console.log(data)
    
    const isNameAlreadyExist = await boxModel.findOne({
        boxname : data.boxname
    })
    
    if (isNameAlreadyExist) {
        res.status(401).json({
            message : "Already exist"
        })
        return
    }
    if (!data.boxname || data.boxname === "") {
        res.status(401).json({
            message : "Must write boxname"
        })
        return
    }
    const creteBox = await boxModel.create({
        boxname : data.boxname

    })
    res.status(201).json({
        message : "created"
    })
}


const box = async(req,res) => {
    const boxes = await boxModel.find()
    res.status(200).json({
        boxes
    })
}

const deleteBox = async(req,res) => {
    const data = req.query
    const boxes = await boxModel.findOneAndDelete({
        boxname:data.boxname
    })
    
    res.status(200).json({
        message:"deleted"
    })
}




module.exports = {createBox,box,deleteBox}