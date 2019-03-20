const mongoose = require('mongoose');
const UserData = require('../models/databaseUsers');


exports.user = (req, res)=>{
    console.log('work 1')
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect('mongodb://localhost:27017/quiz10-questions', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    UserData.insertMany({user:req.query.user, points:req.query.points, type:'users'}).then((userName)=>{
        mongoose.connection.close();
        res.send(userName)
    }).catch(err => console.log(err))
}

exports.dbUsers = (req, res)=>{
    console.log('work 2')
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect('mongodb://localhost:27017/quiz10-questions', {useNewUrlParser:true});
    UserData.find({type:'users'}).sort({points:-1}).limit(5).then((users)=>{
        mongoose.connection.close();
        res.send(users)
    }).catch(err => console.log())
}

exports.showUsers = (req, res)=>{
    console.log('work 3')
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect('mongodb://localhost:27017/quiz10-questions', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    UserData.find({type:'users'}).then((users)=>{
        mongoose.connection.close();
        res.send(users)
    }).catch(err => console.log(err))
}


// Utwórz odzielne kolekcje dla history i geo, teraz tylko pobiera z bazy dane (trzeba je umieścić w apce)