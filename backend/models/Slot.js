const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
  },
  date: {
      type: String,
      required: true,
  },
  startTime: {
      type: String,
      required: true,
  },
  endTime: {
      type: String,
      required: true,
  }
});

const Slot = mongoose.model("Slot", slotSchema);



module.exports = Slot;

