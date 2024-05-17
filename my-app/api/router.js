const express = require('express');
const router = express.Router();
const Employee = require('../database/models/Employee.js');

router.post('/create-employee', async (req, res) => {
    const newEmployee = new Employee({
      name: req.body.name,
      position: req.body.position,
      email: req.body.email
    });
  
    try {
      const employee = await newEmployee.save();
      res.send(employee);
    } catch (err) {
      if (err.code === 11000) {
        res.status(400).send('Duplicate key error: ' + err.keyValue);
      } else {
        res.status(500).send('An error occurred: ' + err.message);
      }
    }
  });
router.delete('/delete-employee/:id', async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
  
      if (!employee) {
        return res.status(404).json({ msg: 'Employee not found' });
      }
  
      await employee.remove();
  
      res.json({ msg: 'Employee removed' });
    } catch (err) {
      console.error(err.message);
  
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Employee not found' });
      }
  
      res.status(500).send('Server error');
    }
  });
router.get('/all-employees', async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (err) {
      res.status(500).send('Server error: ' + err.message);
    }
  });
router.put('/update-employee/:id', async (req, res) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!updatedEmployee) {
        return res.status(404).send('Employee not found');
      }
  
      res.send(updatedEmployee);
    } catch (err) {
      res.status(500).send('Server error: ' + err.message);
    }
  });
  module.exports = router;
