const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: Date, required: true },
  otp: { type: String },
  verified: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "confirmed", "rejected"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
