const mongoose = require("mongoose")
// Connection With database

const mongooUrl="mongodb://localhost:27017/MyDatabase";
mongoose.connect(mongooUrl);
const connectDb=mongoose.connection;

    connectDb.on('open',()=>{
        console.log("Database is connected");
    });
    connectDb.on('error',(err)=>{
        console.log("Error",err);
    });


// module.exports=connectDb;
module.exports=connectDb;