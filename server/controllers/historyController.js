const mongoose = require('mongoose');
const HistoryData = require('../models/databaseHistory');

exports.data = (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect('mongodb://localhost:27017/quiz10-questions', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    HistoryData.find({type:'question'}).then((userName)=>{
        mongoose.connection.close();
        res.send(userName)
    })
}