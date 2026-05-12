import express from "express";

const app = express();

export function appStart() {
  try {
    app.listen("PortNumber", () => {
      console.log("The server is Ready");
    });
  } catch (error) {
    console.log("Failed to start the APP!");
  }
}

export default app;
