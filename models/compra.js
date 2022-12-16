const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    idCompra: {
        required: true,
        type: Number,
        min: 1
    },
    idProveedor: {
        required: true,
        type: String,
        min: 1
    },
    fechaCompras: {
        required: true,
            type: String,
            maxlenght: 11
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

module.exports = mongoose.model('Compras', dataSchema)