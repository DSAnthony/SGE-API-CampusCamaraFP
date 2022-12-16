const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/compra');

//Post Method
router.post('/postCompra', async (req, res) => {
    const data = new Model({
        idCompra: req.body.idCompra,
        idProveedor: req.body.idProveedor,
        fechaCompras: req.body.fechaCompras,
        precioTotal: req.body.precioTotal,
        observaciones: req.body.observaciones
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAllCompra', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getByIdCompra/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updateByIdCompra/:id', async (req, res) => {
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
router.delete('/deleteByIdCompra/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.idCompra} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get Between PrecioTotal Method
router.get('/getBetweenPrecioTotalCompra/:min/:max', async (req, res) => {
    try{
        const data = await Model.find({"precioTotal":{ 
            $gte : req.params.min,
            $lte : req.params.max }});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})