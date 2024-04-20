const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Clinic = mongoose.model("Clinic", clinicSchema);

module.exports = Clinic;

