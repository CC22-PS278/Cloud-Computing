const mongoose = require("mongoose");

//pilih tiket
const kondisiSchema = new mongoose.Schema(
  {
    nomorBus: {
      type: String,
      unique: true,
    },
    halte: {
      type: String,
      required: true,
    },
    kondisi: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prediksi", kondisiSchema);
