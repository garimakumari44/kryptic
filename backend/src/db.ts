import { mongodb } from "./config";
import mongoose, { model, Schema } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err);
    process.exit(1); // Exit on failure
  }
};

connectDB();

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);
