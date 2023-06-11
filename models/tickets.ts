import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const tickets = new Schema({
  paymentIntentId: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  lastName: String,
  firstName: String,
  companyName: String,
  jobTitle: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.models.Tickets || mongoose.model("Tickets", tickets);
