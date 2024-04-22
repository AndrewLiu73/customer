const express = require('express');
const mongoose = require('mongoose');
const readline = require('readline');
require('dotenv').config();
const customerRoutes = require('./customer');

const app =express(); //express app

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

app.use('/api/customer',customerRoutes);

mongoose.connect(process.env.MONGO_URI) //connects to DB
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{ //gets port from environment variable
            console.log('connected to DB & listening on port '+ process.env.PORT);
        }); 
    })
    .catch((error)=>{
        console.log(error);
    });

//console part



/*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function addNewCustomer() {
    const title = await askQuestion('Enter title (MX/MS/MR/MRS/MISS/DR/OTHER): ');
    const firstName = await askQuestion('Enter first name: ');
    const surname = await askQuestion('Enter surname: ');
    const mobile = await askQuestion('Enter mobile number: ');
    const email = await askQuestion('Enter email address: ');
    const address1 = await askQuestion('Enter address line 1: ');
    const address2 = await askQuestion('Enter address line 2: ');
    const town = await askQuestion('Enter town: ');
    const county = await askQuestion('Enter county: ');
    const eircode = await askQuestion('Enter Eircode (optional): ');

    try {
        const response = await fetch('/api/customer',{
            method: 'POST',
            body: JSON.stringify({
                title,
                FirstName: firstName,
                Surname: surname,
                Mobile: mobile,
                Email: email,
                Address1: address1,
                Address2: address2,
                Town: town,
                County: county,
                Eircode: eircode
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log('Customer added successfully:', data);
    } catch (error) {
        console.error('Error adding customer:', error.message);
    }
}

function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function mainMenu() {
    console.log('Main Menu');
    console.log('1. Add New Customer');
    // Add more options for other CRUD operations
    const choice = await askQuestion('Enter your choice: ');
    switch (choice) {
        case '1':
            await addNewCustomer();
            break;
        // Add cases for other options
        default:
            console.log('Invalid choice. Please try again.');
            break;
    }
    rl.close();
}

mainMenu();
*/


