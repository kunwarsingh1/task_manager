const { response } = require('express');
const task_manager = require('./db')

const { MongoClient } = require('mongodb');

async function showall(req, res) {
    try {
        task_manager.find().then(response=>{
            res.status(200).send('done')
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}



async function createtask(req, res) {
    try {
        let task = new task_manager({
            task_name: req.body.task_name,
            task_info: req.body.task_info,
        });

        let savedTask = await task.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deletetask = async(req,res)=>{
    try {
        
            let task_remove =await task_manager.findOneAndDelete(req.body.task_name)
        
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const readtask = async(req,res)=>{
    
        try {
            const taskname = await req.params.id;
            const found = await task_manager.findById(taskname)
            if(found){
                const taskObject = found.toObject();
                return res.status(200).json(taskObject);
            }
            else{
                return res.status(404).send("No hello")
            }
        
    } catch (error) {
        res.status(500).send(console.log(error))
    }
}

const updatetask = async(req,res)=>{
    try {
        const id = req.body.id;
        const update = await task_manager.updateOne({"_id":id},{"task_name":req.body.task_name})
        if(update){
            res.status(200).send(("update.toObject()"))
        }
        else{
            res.status(401).send(console.log(update))
        }
    } catch (error) {
        
    }
}


module.exports = { showall, createtask,deletetask, readtask, updatetask };
