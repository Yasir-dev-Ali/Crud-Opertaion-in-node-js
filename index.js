const express=require("express");
const app=express();
const connectDb=require("./Db");

const bodyParse=require("body-parser");
// connectDb();
const PORT=5000;
// Middleware to parse the body of the request  
 app.use(bodyParse.json()); //for parsing the body of the request
app.get('/',(req,res)=>{
    res.send("Hello This is My Server ");
})


    const personRouter=require('./Routes/person.route');
    const menuRouter=require('./Routes/menu.route');
    const departmentRouter=require("./Routes/department.route")
    app.use('/addPerson',personRouter);
    app.use("/Menu",menuRouter);
    app.use("/department",departmentRouter)


app.listen( PORT , () => {
    console.log(`Server is running on port ${PORT}`);
  });