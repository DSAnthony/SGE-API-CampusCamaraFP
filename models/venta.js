const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nif: {
        required: true,
        type: String,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']  
    },
    nombre: {
        required: true,
        type: String
    },
    apellidos: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email
    },
    direccion: {
        required: true,
        type: String
    },
    fechaVenta: {
        required: true,
        type: String
    },
    precioTotal: {
        required: true,
        type: Number
    },
    observaciones: {
        required: false,
        type: String
    },
    productos: [{
        nombre: {
            required: true,
            type: String
        },
        precioVenta: mongoose.Types.Decimal128,
        tasas: {
            required: true,
            type: Number,
            min: [0, 'Must be at least 0'],
            max: [100, 'Must be less than 100']
        },
        descripcion: String
    }]
})

module.exports = mongoose.model('Ventas', dataSchema)