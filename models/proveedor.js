const mongoose = require('mongoose');

require('mongoose-type-email');

const dataSchema = new mongoose.Schema({
    cif: {
        required: true,
        type: String,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']
    },
    nombre: {
        required: true,
        type: String
    },
    contacto: {
        required: true,
        type: String
    },
    direccion: {
        required: true,
        type: String
    },
    telefono: {
        required: true,
        type: String,
        minLength: [9, 'Must be at least 9'],
        maxLength: [9, 'Must be less than 9']
    },
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email
    }
})

module.exports = mongoose.model('Proveedores', dataSchema)