const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://saniakouser:cluster.420q3fw.mongodb.net/Hospital?retryWrites=true&w=majority").then
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas: ", error);
  }
};

module.exports = connectToDatabase;
