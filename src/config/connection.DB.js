import mongoose from "mongoose";
import { connection_string } from "./enviornment.config.js";

export default async function ConnectDB() {
  try {
    await mongoose.connect(connection_string);
    console.log("Connected , Successfully with the DataBase");
  } catch (error) {
    console.log("Failed to connect with the Database!");
  }
}
