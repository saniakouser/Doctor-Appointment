const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
    Email: {
      type: String,
      required: true,
    },
   
    password: {
      type: String,
      required: true,
      },
     
  });
  const Login = mongoose.model("Login", LoginSchema);


module.exports = Login;
  