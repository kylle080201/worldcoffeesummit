import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const registrants = new Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  companyName: String,
  sector: String,
  country: String,
  otherSector: String || null,
  businessEmail: String,
  countryCode: String,
  phoneNumber: String,
  interestedIn: String,
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.models.Registrants || mongoose.model("Registrants", registrants);
