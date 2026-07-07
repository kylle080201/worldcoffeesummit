import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const wcaNetwork = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    areasOfInterest: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "WCA NETWORK" }
);

export default mongoose.models.WcaNetwork ||
  mongoose.model("WcaNetwork", wcaNetwork);
