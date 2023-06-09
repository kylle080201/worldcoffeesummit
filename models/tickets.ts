import mongoose from "mongoose";
const { Schema } = mongoose;

const tickets = new Schema({
  paymentIntentId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Tickets", tickets);
