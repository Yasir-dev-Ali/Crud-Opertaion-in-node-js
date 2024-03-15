const express =require("express");
const Menu=require("../Model/menu.model");
const router=express.Router();

 // menu data 
 router.post("/",async (req,res)=>{
    try {
        const body=req.body;

        const addMenu= new Menu(body);
        const saveMenu= await addMenu.save()
        console.log('Save Menu',saveMenu);
        res.status(200).json(saveMenu)
        

    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message:"Internal Server Error"});
    }
})
// Get Data of Menu
router.get("/", async (req,res)=>{
    try {
        const menu= await  Menu.find({})
        res.status(200).json(menu);
        console.log('Resposive Get', menu);
        
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message:"Internal Server Error"});
    }
})

module.exports=router;
