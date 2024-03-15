const express  = require("express");
const router= express.Router();
const Person=require("../Model/person.model.js");


// Post
router.post("/", async (req,res)=>{
    try {
        const data=req.body;
        const newPerson=new Person(data);

      const saveData= await newPerson.save();
      console.log('Resposive Save',saveData);
        res.status(200).json(saveData);
      
        
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message:"Internal Server Error"});
        
    }
    
    });



// Get the Data from the database
router.get("/", async(req,res)=>{
    try {
        const person=await Person.find({});
        res.status(200).json(person);
        console.log('Resposive Get',person);
        
        
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message:"Internal Server Error"});
        
    }
});

 

module.exports=router;