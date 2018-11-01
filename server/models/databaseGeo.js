const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    type:{
        type: String
    }
})

const GeoData = mongoose.model('geo_questions', dataSchema);
module.exports = GeoData;