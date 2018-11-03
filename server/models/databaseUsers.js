const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    user:{
        type: String
    }
})

const UserData = mongoose.model('users', dataSchema);
module.exports = UserData;