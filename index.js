require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const cors = require('cors');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors());

app.use(express.json());

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
});

const rutasClientes = require('./routes/rutasClientes');
const rutasProveedores = require('./routes/rutasProveedores');
const rutasCompras = require('./routes/rutasCompras');
const rutasVentas = require('./routes/rutasVentas');
const rutasProducto = require('./routes/rutasProducto');
const rutasCalendario = require('./routes/rutasCalendario');

app.use('/api', rutasClientes)
app.use('/api', rutasProveedores)
app.use('/api', rutasCompras)
app.use('/api', rutasVentas)
app.use('/api', rutasProducto)
app.use('/api', rutasCalendario)