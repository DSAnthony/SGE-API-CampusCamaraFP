const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    evento: {
        required: true,
        type: String
    },
    fecha: {
        required: true,
        type: Date
    },
    descripcion: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)