const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/venta');

//Post Method
router.post('/postVenta', async (req, res) => {
    const data = new Model({
        nif: req.body.nif,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        direccion: req.body.direccion,
        fechaVenta: req.body.fechaVenta,
        precioTotal: req.body.precioTotal,
        observaciones: req.body.observaciones,
        productos: req.body.productos
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
router.get('/getAllVenta', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get By Id Method
router.get('/getByIdVenta/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update By Id Method
router.patch('/updateByIdVenta/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/deleteByIdVenta/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.nombreCliente} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})