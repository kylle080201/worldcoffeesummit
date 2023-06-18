import mongoose from "mongoose";
const mongoURL = process.env.MONGO_URL!;

const connectMongo = async () => mongoose.connect(mongoURL);
export default connectMongo;
