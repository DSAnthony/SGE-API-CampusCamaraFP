const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    cif: {
        required: true,
        type: String,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']
    },
    nombre: {
        required: true,
        type: String,
        minLength: [3, 'Must be at least 3'],
        maxLength: [50, 'Must be less than 50']
    },
    direccion: {
        required: true,
        type: String,
        minLength: [5, 'Must be at least 5'],
    },
    telefono: {
        required: true,
        type: Number,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']
    },
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email
    },
    fechaCompra: {
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
    },
    productos: [{
        nombre: {
            required: [true, '¿Porque sin nombre?'],
            type: String,
        },
        precioVenta: mongoose.Types.Decimal128,
        tasas: {
            required: true,
            type: Number,
            min: [0, 'Must be at least 0, got {VALUE}'],
            max: [100, 'Cannot be more than 100, got {VALUE}']
        },
        descripcion: String,
    }]
})

module.exports = mongoose.model('Compras', dataSchema)