const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    test:{
        type:String,
        required:true,
        enm:['veg','non-veg','both']
    },
    });
const Menu = mongoose.model("Menu", menuSchema);

module.exports=Menu;
