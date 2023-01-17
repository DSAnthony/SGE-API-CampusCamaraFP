const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/proveedor');

//Post Method
router.post('/postProveedor', async (req, res) => {
	const data = new Model({
		cif: req.body.cif,
		nombre: req.body.nombre,
		contacto: req.body.contacto,
		direccion: req.body.direccion,
		telefono: req.body.telefono,
		email: req.body.email
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
router.get('/getAllProveedor', async (req, res) => {
	try{
		const data = await Model.find();
		res.json(data)
	}
	catch(error){
		res.status(500).json({message: error.message})
	}
})

//Get By Id Method
router.get('/getByIdProveedor/:id', async (req, res) => {
	try{
		const data = await Model.findById(req.params.id);
		res.json(data)
	}
	catch(error){
		res.status(500).json({message: error.message})
	}
})

//Get All Method
router.get('/getContactoProveedor/:contacto', async (req, res) => {
	try{
		const data = await Model.find({contacto: {$regex: req.params.contacto}});
		res.json(data)
	}
	catch(error){
		res.status(500).json({message: error.message})
	}
})


//Update By Id Method
router.patch('/updateByIdProveedor/:id', async (req, res) => {
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

//Delete By Id Proveedor
router.delete('/deleteByIdProveedor/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Model.findByIdAndDelete(id)
		res.send(`Document with ${data.name} has been deleted..`)
	}
	catch (error) {
		res.status(400).json({ message: error.message })
	}
})
