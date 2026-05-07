import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const startUpEnquiries = new Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  companyName: String,
  companyWebsite: String,
  country: String,
  workEmail: String,
  mobile: String,
  companyStage: String,
  briefDescription: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.models.StartUpEnquiries ||
  mongoose.model("StartUpEnquiries", startUpEnquiries);
