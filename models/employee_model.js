const mongoose =require('mongoose')


const employeeSchema= mongoose.Schema({

    EmployeeName: {
        type:String,
        required:true,        
    },
    Age: {
        type:Number,
        required:true
    },
    phoneNo: {
        type:String,
        required:true

    },
    YearsOfExp :{
        type:Number,
        
        default:0
    },
    Department:{
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
   
    
   
});
const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;