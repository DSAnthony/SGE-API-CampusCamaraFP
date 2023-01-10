// Add Mongoose
const mongoose = require('mongoose');

/*
    We have a schema that defines our database structure
*/
const productoSchema = new mongoose.Schema({
    nombre: {
        required: [true, '¿Porque sin nombre?'],
        type: String,
    },
    proveedor: {
        id: String,
        nombre: String,
        precioCompra: mongoose.Types.Decimal128
            
    },
    precioVenta: mongoose.Types.Decimal128, 
    imagen: {
        required: true,
        type: String,
    },
    tasas: {
        required: true,
        type: Number,
        min: [0, 'Must be at least 0'],
        max: [100, 'Must be less than 100']
    },
    descripcion: String
})

module.exports = mongoose.model('Producto', productoSchema)