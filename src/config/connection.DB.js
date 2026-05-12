import mongoose from "mongoose";

export default async function ConnectDB() {
  try {
    await mongoose.connect("connection string");
    console.log("Connected , Successfully with the DataBase");
  } catch (error) {
    console.log("Failed to connect with the Database!");
  }
}
