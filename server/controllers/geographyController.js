const mongoose = require('mongoose');
const GeoData = require('../models/databaseGeo');

exports.data = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    GeoData.find({
        type: 'question'
    }).then((userName) => {
        mongoose.connection.close();
        res.send(userName)
    })
}