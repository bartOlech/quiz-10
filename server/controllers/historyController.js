const mongoose = require('mongoose');
const HistoryData = require('../models/databaseHistory');

exports.data = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    HistoryData.find({
        type: 'question'
    }).then((userName) => {
        res.send(userName)
    })
}