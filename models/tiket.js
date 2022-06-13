const mongoose = require("mongoose");

//book tiket
const tiketSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    koridor: {
      type: String,
    },
    seat: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tiket", tiketSchema);
