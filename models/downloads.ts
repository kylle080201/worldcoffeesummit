import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const downloads = new Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  companyName: String,
  countryCode: String,
  mobileNumber: String,
  email: String,
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.models.Downloads || mongoose.model("Downloads", downloads);
