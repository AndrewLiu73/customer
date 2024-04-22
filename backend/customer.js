const express = require('express');
const {
    insertCustomer,
    getCustomers,
    findCustomer,
    deleteCustomer,
    updateCustomer
} =require('./customerController')

const router = express.Router();

//GET all customers
router.get('/',getCustomers)

//GET a single customer
router.get('/:id',findCustomer)

//POST a new customer
router.post('/',insertCustomer)

//DELETE a customer
router.delete('/:id',deleteCustomer)

//UPDATE a customer
router.patch('/:id',updateCustomer)

module.exports = router