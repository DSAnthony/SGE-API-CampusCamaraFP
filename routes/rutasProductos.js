const express = require('express');

const { default: mongoose } = require('mongoose');

const router = express.Router()

const Model = require('../models/producto');

module.exports = router;

//Post Method
router.post('/postProducto', async (req, res) => {
    const data = new Model({
        nombre: req.body.nombre,
        proveedor: {
            id: req.body.proveedor.id,
            nombre: req.body.proveedor.nombre,
            precioCompra: req.body.proveedor.precioCompra,
        },
        precioVenta: req.body.precioVenta,
        imagen: req.body.imagen,
        tasas: req.body.tasas,
        descripcion: req.body.descripcion,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get All Method
router.get('/getAllProducto', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by Id Method
router.get('/getByIdProducto/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get Between Method
router.get('/getBetweenTasasProducto/:min/:max', async (req, res) => {
    try{
        const data = await Model.find({"tasas": {
            $gte: req.params.min,
            $lt: req.params.max}})      
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update Method
router.patch('/updateByIdProducto/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true};

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete Method
router.delete('/deleteByIdProducto/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.nombre} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
