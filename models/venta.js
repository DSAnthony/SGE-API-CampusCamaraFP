const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({    nif: {
        required: true,
        type: String,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']
        
    },
    nombre: {
        required: true,
        type: String,
        minLength: [3, 'Must be at least 3']
    },
    apellidos: {
        required: true,
        type: String,
        minLength: [15, 'Must be at least 15']
    },
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email
    },
    direccion: {
        required: true,
        type: String,
        minLength: [6, 'Must be at least 9']
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

module.exports = mongoose.model('Ventas', dataSchema)