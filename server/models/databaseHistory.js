const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    type:{
        type: String
    }
})

const HistoryData = mongoose.model('history_questions', dataSchema);
module.exports = HistoryData;