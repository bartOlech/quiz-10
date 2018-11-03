const mongoose = require('mongoose');
const UserData = require('../models/databaseUsers');


exports.user = (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");

    mongoose.connect('mongodb://localhost:27017/quiz10-questions', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    UserData.insertMany({user:req.query.user}).then((userName)=>{
        mongoose.connection.close();
        res.send(userName)
    })
}