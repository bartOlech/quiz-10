const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    type: {
        type: String
    }
})

const GeoData = mongoose.model('geography', dataSchema, 'geography')
module.exports = GeoData;