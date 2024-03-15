const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
 address: {
    type: String,
    required: true,
  },
 Worker: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});
const Person = mongoose.model("Person", personSchema);
module.exports = Person; //exporting the model Person
