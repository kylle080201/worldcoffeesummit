import mongoose from "mongoose";
const mongoURL = process.env.MONGO_URL!;

const connectMongo = async () => mongoose.connect(mongoURL);
if (!connectMongo) {
  throw new Error("MongoDB connection failed");
}
export default connectMongo;
