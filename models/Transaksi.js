const string = require("@hapi/joi/lib/types/string");
const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    tiketBus: [
      {
        tiketId: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
      },
    ],

    total: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transaksi", transaksiSchema);
