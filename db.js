const mongoose = require('mongoose');


const main = () =>{
 mongoose.connect('mongodb://127.0.0.1:27017/students');
}

main()

const schema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    task_info: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('datazs', schema);