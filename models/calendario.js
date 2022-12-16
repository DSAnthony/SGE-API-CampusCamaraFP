const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    evento: {
        required: true,
        type: String,
        minlength: [2, "Tu evento debe ser más largo"],
        maxlength: [100, "Tu evento contiene demasiados carácteres"]
    },
    fecha: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Data', dataSchema)