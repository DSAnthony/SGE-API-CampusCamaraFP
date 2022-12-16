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
        type: String,
        minLength: [3, 'Must be at least 3'],
        maxLength: [50, 'Must be less than 50']
    },
    contacto: {
        required: true,
        type: String,
        minLength: [3, 'Must be at least 3'],
        maxLength: [150, 'Must be less than 150']
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
    }
})

module.exports = mongoose.model('Proveedores', dataSchema)