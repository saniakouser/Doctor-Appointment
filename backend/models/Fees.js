const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    type: {
        type: String,
        enum: ['clinic', 'videoCall', 'audioCall'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

const Fee = mongoose.model("Fee", feeSchema);

module.exports = Fee;


