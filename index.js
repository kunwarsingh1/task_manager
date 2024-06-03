const express = require('express');
//importing mongdb to the project
const {showall,createtask,deletetask,readtask,updatetask} = require('./fun')


const app = express();
app.use(express.json())


//show all tasks
app.get('/tasks', showall)

//create task
app.post('/tasks/', createtask)

//delete task with id
app.delete('/tasks/delete/', deletetask)

//read task with id
app.get('/tasks/:id', readtask)

//update task with id
app.patch('/tasks/update/',updatetask)


//express listening at port 8000
app.listen(8000, console.log('hello world'))