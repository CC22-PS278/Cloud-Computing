const mongoose = require("mongoose");

//kondisi bus - hasil dari test ml model
const BusConditionSchema = new mongoose.Schema(
  {
    nomorBus: {
      type: Number,
      required: true,
    },
    koridor: {
      type: String,
      required: true,
    },
    halte: {
      type: String,
      required: true,
    },
    statusPassenger: {
      type: String,
      required: true,
    },
    infoDriver: [
      {
        driverId: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
      },
    ],

    infoStaff: [
      {
        staffId: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("busCondition", BusConditionSchema);
