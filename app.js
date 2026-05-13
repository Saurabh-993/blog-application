import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import app, { appStart } from "./src/server.js";
helmet();

appStart(); //To run the server
