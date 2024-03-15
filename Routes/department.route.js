const express =require("express");
const router =express.Router();
const department= require("../Model/department.model");

    // Departmnet Modele data save on database 

    router.post("/", async (req,res)=>{
        try {
            const body= req.body;
            const newdepartment= new department(body);
            const saveData= await newdepartment.save();
            console.log('Save Menu',saveData);
            res.status(200).json(saveData)

            
        } catch (error) {
            console.log('Error',error);
            res.status(500).json({message:"Internal Server Error"});
        }

    });
    router.get("/", async (req, res)=>{
       try {
        const saveData= await department.find({});
        res.status(200).json(saveData);
            console.log('Resposive Get',saveData);
        
       } catch (error) {
        console.log('Error',error);
            res.status(500).json({message:"Internal Server Error"});
       }
    });

    router.get("/:role", async (req,res)=>{
       try {
        const role=req.params.role;
        if (role == "Teacher" || role =="Law" || role == "Engineer") {
            const Resposive=await department.find({department:role});
            console.log('Responsive Fatch');
            res.status(200).json(Resposive)   
        }else{
            res.status(404).json({msg:"Invalid Role Find"})
        }
       } catch (error) {
        console.log('Error',error);
            res.status(500).json({message:"Internal Server Error"});
       }
    })

    router.put("/:id", async (req,res)=>{
        try {
            const idParams=req.params.id;
            const updatePersonId=req.body;
            const responsive= await department.findByIdAndUpdate(idParams,updatePersonId,{
                new:true, // return the update document 
                runValidators:true //Run mongoose validation
            });
            if (!responsive) {
                return res.status(404).json({error:"Person Not found"});
                
            }
               console.log('Update Value');
               res.status(200).json(responsive)
               
            
        } catch (error) {
            console.log('Error',error);
            res.status(500).json({message:"Internal Server Error"});
            
        }
    })

    router.delete("/:id",async (req,res)=>{
        try {
            const idParams=req.params.id;
            const deleteId= await department.findByIdAndDelete(idParams);
            if (!deleteId) {
                return res.status(404).json({error:"Person Not found"});
                
            }
            console.log('Data was Deleted');
            res.status(200).json({msg:"Data was Deleted"});
            

            
        } catch (error) {
            console.log('Error',error);
            res.status(500).json({message:"Internal Server Error"});
        }
    })

   
module.exports=router