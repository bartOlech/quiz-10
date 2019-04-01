const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    user:{
        type: String
    },
    points:{
        type: Number
    },
    type:{
        type:String
    }
})

const UserData = mongoose.model('users', dataSchema, 'users')
module.exports = UserData;