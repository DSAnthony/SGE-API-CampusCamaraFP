const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    evento: {
        required: true,
        type: String
    },
    fecha: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Data', dataSchema)