const mongoose = require('mongoose');
const UserData = require('../models/databaseUsers');


exports.user = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;

    UserData.insertMany({
        user: req.query.user,
        points: req.query.points,
        type: 'users'
    }).then((userName) => {
        mongoose.connection.close();
        res.send(userName)
    }).catch(err => console.log(err))
}

exports.dbUsers = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;

    // mongoose.connect(process.env.MONGODB_URI)
    UserData.find({
        type: 'users'
    }).sort({
        points: -1
    }).limit(5).then((users) => {
        mongoose.connection.close();
        res.send(users)
    }).catch(err => console.log())
}

exports.showUsers = (req, res) => {
    mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    res.header("Access-Control-Allow-Origin", "*");

    // mongoose.connect(process.env.MONGODB_URI)
    UserData.find({
        type: 'users'
    }).then((users) => {
        mongoose.connection.close();
        res.send(users)
    }).catch(err => console.log(err))
}


// Create distinct collections, users who chose the history and who chose the geography