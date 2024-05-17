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

  module.exports = router;