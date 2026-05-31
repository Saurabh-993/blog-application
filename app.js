import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import app, { appStart } from "./src/server.js";
import ConnectDB from "./src/config/connection.DB.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
helmet();
ConnectDB(); //will establish the connection with the mongoDB

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let _filename = fileURLToPath(import.meta.url);
let _dirname = dirname(_filename);

app.set("view engine", "ejs");
app.use(express.static(path.join(_dirname, "src", "Public")));
app.set("views", path.join(_dirname, "src", "views"));

appStart(); //To run the server
