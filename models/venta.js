const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    idVenta: {
        required: true,
        type: Number,
        min: 1
    },
    nombreCliente: {
        required: true,
        type: String,
        maxlenght: 55
    },
    fechaVenta: {
        required: true,
        type: String,
        maxlenght: 9
    },
    precioTotal: {
        required: true,
        type: Number
    },
    observaciones: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Ventas', dataSchema)