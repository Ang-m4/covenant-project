import express from "express";
import { defaultConfiguration } from "express/lib/application";
import morgan from "morgan";

import userRoutes from "./routes/user.routes"

const app = express();

// settings 
app.set("port", 4000);

// middleware

app.use(morgan("dev"));

// routes

app.use("/api/users",userRoutes);

export default app;