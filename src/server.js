import express from "express";
import { PORT } from "./config/enviornment.config.js";

const app = express();

export function appStart() {
  try {
    app.listen(PORT, () => {
      console.log("The server is Ready");
    });
  } catch (error) {
    console.log("Failed to start the APP!");
  }
}

export default app;
