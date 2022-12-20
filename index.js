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

port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

const rutasClientes = require('./routes/rutasClientes');
const rutasProveedores = require('./routes/rutasProveedores');
const rutasCompras = require('./routes/rutasCompras');
const rutasVentas = require('./routes/rutasVentas');
const rutasProductos = require('./routes/rutasProductos');
const rutasCalendario = require('./routes/rutasCalendario');
const rutasEmpleados = require('./routes/rutasEmpleados');


app.use('/api', rutasClientes)
app.use('/api', rutasProveedores)
app.use('/api', rutasCompras)
app.use('/api', rutasVentas)
app.use('/api', rutasProductos)
app.use('/api', rutasCalendario)
app.use('/api', rutasEmpleados)