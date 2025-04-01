import dotenv from "dotenv";
dotenv.config();
export const JWTT_PASSWORD = process.env.JWT_PASSWORD as string;
export const mongodb = process.env.MONGODB_URL as string