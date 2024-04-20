
const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    Biography: {
        type: String,
        required: true,
      },
      Education: {
        type: String,
        required: true,
      },
      Experience: {
        type: Number,
        required: true,
      },
     
  });
  
  const Doctor = mongoose.model("Doctor", doctorSchema);
  
  module.exports = Doctor;