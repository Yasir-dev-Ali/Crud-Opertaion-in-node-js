const mongoose =require("mongoose");
const Schema =mongoose.Schema;
const departmentSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    },
    department:{
        type:String,
        enm:["Engineer",'Doctore',"Law","Teacher"]
    }
});
const department=mongoose.model("Department",departmentSchema);

module.exports=department