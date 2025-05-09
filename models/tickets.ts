import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const tickets = new Schema({
  paymentIntentId: {
    type: String,
    required: false,
    unique: false,
  },
  checkoutSessionId: {
    type: String,
    required: true,
    unique: true,
  },
  event: {
    type: String,
    enum: ["Summit", "Exhibition"],
    required: false,
  },
  ticketName: String,
  email: String,
  lastName: String,
  firstName: String,
  companyName: String,
  mobileNumber: String,
  jobTitle: String,
  country: String,
  isEmailAccepted: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.models.Tickets || mongoose.model("Tickets", tickets);
