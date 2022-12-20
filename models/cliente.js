const mongoose = require('mongoose');
require('mongoose-type-email');

const dataSchema = new mongoose.Schema({
    nif: {
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
        minLength: [1, 'Must be at least 1']
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
    direccion: {
        required: true,
        type: String,
        minLength: [6, 'Must be at least 6']
    }
})

module.exports = mongoose.model('Clientes', dataSchema)