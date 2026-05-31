import express from "express";
import { PORT } from "./config/enviornment.config.js";
import { app } from "../app.js";


export default function appStart() {
  try {
    app.listen(PORT, () => {
      console.log("The server is Ready");
    });
  } catch (error) {
    console.log("Failed to start the APP!");
  }
}

