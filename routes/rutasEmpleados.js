const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/empleado');

//Post Method
router.post('/postEmpleado', async (req, res) => {
	const data = new Model({
		nif: req.body.nif,
		nombre: req.body.nombre,
		apellidos: req.body.apellidos,
		telefono: req.body.telefono,
		email: req.body.email,
		direccion: req.body.direccion,
		puesto: req.body.puesto
	})
	
	try {
		const dataToSave = await data.save();
		res.status(200).json(dataToSave)
	}
	catch (error) {
		res.status(400).json({message: error.message})
	}
})

//Get Method
router.get('/getAllEmpleado', async (req, res) => {
	try{
		const data = await Model.find();
		res.json(data)
	}
	catch(error){
		res.status(500).json({message: error.message})
	}
})

//Get By Id Method
router.get('/getByIdEmpleado/:id', async (req, res) => {
	try{
		const data = await Model.findById(req.params.id);
		res.json(data)
	}
	catch(error){
		res.status(500).json({message: error.message})
	}
})

//Update By Id Method
router.patch('/updateByIdEmpleado/:id', async (req, res) => {
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

//Delete By Id Method
router.delete('/deleteByIdEmpleado/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Model.findByIdAndDelete(id)
		res.send(`Document with ${data.name} has been deleted..`)
	}
	catch (error) {
		res.status(400).json({ message: error.message })
	}
})