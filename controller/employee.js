const  Employee = require("../../models/employee_model");
const mongoose = require('mongoose');

exports.createEmployee = async (req, res) => {
  try {
    
    
    
    const {
        EmployeeName,Age,phoneNo,YearsOfExp,Department,Salary
      
    }=req.body;
    const newUser= await Employee.create({
        EmployeeName,Age,phoneNo,YearsOfExp,Department,Salary
    });
      
    res.status(201).json(
      {
        success: true,
        message: "User Created Succefully ",
        data: newUser,
      });
  } catch (error) {
    res.status(404).json({ success: false , message: "Something Went Wrong !", data: error });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(201).json(
      {
        success: true,
        
        data: 
         employees
        ,
      }
      );
  } catch (error) {
    res.status(404).json({ success: false , message: "Something went wrong !", data: error });
  }
}

exports.deleteEmployee = async(req,res)=>{

  try{
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
    if(!deletedEmployee)
    return res.status(404).send("EMPLOYEE NOT FOUND")
    res.status(201).json({
        success: true,
        message:"This employee has been deleted successfully",
        data:deletedEmployee
    });

  }catch(error){
    
    res.status(500).json({
        success: false,
        message: 'An Error has occured',
    });

  }

}

exports.getOneEmployee =async(req,res)=> {

    try{

        const OneEmployee = await Employee.findById(req.params.id)
    
            res.status(201).json({
                success: true,
                
                data:OneEmployee
            });
    
      }catch(error){
    
        
            res.status(500).json({
                success: false,
                message: 'An Error has occured',
            });
        
      }

}

exports.updateEmployee = async(req,res)=>{

  try{

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,req.body)

        res.status(201).json({
            success: true,
            
            data:updatedEmployee
        });

  }catch(error){

    
        res.status(500).json({
            success: false,
            message: 'An Error has occured',
        });
    
  }

}