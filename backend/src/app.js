import express from "express";
import morgan from "morgan";

import userRoutes from "./routes/user.routes"
import concertationRoutes from "./routes/concertation.routes"

const app = express();

// settings 
app.set("port", 4000);

// middleware

app.use(morgan("dev"));
app.use(express.json());
// routes

app.use("/api/users", userRoutes);
app.use("/api/concertation", concertationRoutes);

export default app;