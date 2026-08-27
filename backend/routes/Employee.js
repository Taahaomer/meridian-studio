const express = require('express')
const router = express.Router();
const Employee = require('../models/Employee');


// Route to create an employee
router.post('/createemployee', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.json(newEmployee);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Route to search an employee

router.get('/allemployees' , async (req, res) => {
    try {
        const findEmployee = await Employee.find();
        res.json(findEmployee);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})

// Route to search Employee

router.get('/findemployee/:name' , async (req, res) => {
    try {
        const findOneEmployee = await Employee.find({name: req.params.name});
        if (Array.isArray(findOneEmployee) && findOneEmployee.length === 0) {
            return res.status(404).json({
                error: "Employee not found"
            });
        } else{
            res.json(findOneEmployee);
        }
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})

// Route to update an Employee
router.put('/updateemployee/:_id' , async (req, res) => {
    try {
        const updatedEmployee = await Employee.findOneAndUpdate( {_id: req.params._id}, req.body, {new:true} );
        if (!updatedEmployee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        } else {
            res.json(updatedEmployee);
        }
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})

// Route to delete an Employee

router.delete('/deleteemployee/:_id' , async (req, res) => {
    try {
        const deletedEmployee = await Employee.findOneAndDelete({_id: req.params._id});
        
        if (!deletedEmployee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        } else {
            res.json(deletedEmployee);
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
})
module.exports = router;