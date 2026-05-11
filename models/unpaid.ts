import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

/**
 * Stores delegates who completed the registration form but did not finish
 * Stripe checkout. Records are upserted by email so re-submits update the
 * same row, and the matching record is removed by the Stripe webhook once
 * payment completes.
 */
const lineItemSchema = new Schema(
  {
    price: { type: String },
    quantity: { type: Number },
    tax_rates: { type: [String], default: undefined },
  },
  { _id: false }
);

const unpaid = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstName: String,
    lastName: String,
    companyName: String,
    jobTitle: String,
    countryCode: String,
    mobileNumber: String,
    country: String,
    line_items: { type: [lineItemSchema], default: undefined },
    checkoutSessionId: { type: String, index: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
  },
  { collection: "unpaid" }
);

export default mongoose.models.Unpaid || mongoose.model("Unpaid", unpaid);
