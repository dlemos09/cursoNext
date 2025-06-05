import express from "express";
import { json } from "body-parser";
import { setUserRoutes } from "./routes/userRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(json());

setUserRoutes();

export default app;
