const Customer = require('./customerModel')
const mongoose = require('mongoose')

//get all customer
const getCustomers = async(req,res)=>{
    const customers = await Customer.find({}).sort({createdAt:-1}) //finds the customer and sorts from most recent
    res.status(200).json(customers)
}

//get a single customer
const findCustomer = async(req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { //checks if ID is 12 bytes
        return res.status(404).json({error: 'No such customer'})
    }

    const customer = await customer.findById(id) //id is from the route from previous line

    if(!customer){
        return res.status(400).json({error: 'No such customer'})
    }  
    res.status(200).json(customer);
}

//create new customer
const insertCustomer =async(req,res)=>{
    const {title,FirstName,Surname,Mobile,Email,Address1,Address2,Town,County,Eircode} =req.body

    //add doc to DB
    try{
        const customer = await Customer.create({title,FirstName,Surname,Mobile,Email,Address1,Address2,Town,County,Eircode}) //await is used since async is used
        res.status(200).json(customer)//success
    }catch(error){
        res.status(400).json({error:error.message})//fail
    }
}

//delete a customer
const deleteCustomer= async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { //checks if ID is 12 bytes
        return res.status(404).json({error: 'No such customer'})
    }

    const customer = await Customer.findOneAndDelete({_id:id}) //gets the ID selected and deletes it

    if(!customer){ //if ID doesnt exist or not found
        return res.status(400).json({error: 'No such customer'})
    }  
    res.status(200).json(customer);
}


//update a customer
const updateCustomer = async(req,res)=>{
    const{id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { //checks if ID is 12 bytes
        return res.status(404).json({error: 'No such customer'})
    }
    const customer = await Customer.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!customer){ //if ID doesnt exist or not found
        return res.status(400).json({error: 'No such customer'})
    }  
    res.status(200).json(customer);

}

module.exports = {
    findCustomer,
    getCustomers,
    insertCustomer,
    deleteCustomer,
    updateCustomer
}