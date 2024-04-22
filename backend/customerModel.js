const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    title:{
        type:String,
        required:false
    },
    FirstName:{
        type:String,
        required:true
    },
    Surname:{
        type:String,
        required: true
    },
    Mobile:{
        type:Number,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    Address1:{
        type:String,
        required: true
    },
    Address2:{
        type:String,
        required: false
    },
    Town:{
        type:String,
        required: true
    },
    County:{
        type:String,
        required: true
    },
    Eircode:{
        type:String,
        required: false
    },
},
{timestamps:true});
const mobileSchema = new Schema({
    Manufacturer:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
});

const orderSchema = new Schema({
    CustomerID:{
        type:String,
        required:true
    },
    Items:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Customer',customerSchema);
/*module.exports = mongoose.model('MobilePhones',mobileSchema);
module.exports = mongoose.model('Orders',orderSchema);*/




