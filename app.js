import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import app, { appStart } from "./src/server.js";
import ConnectDB from "./src/config/connection.DB.js";
helmet();
ConnectDB();//will establish the connection with the mongoDB

appStart(); //To run the server

