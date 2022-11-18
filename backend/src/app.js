import express from "express";
import morgan from "morgan";

import userRoutes from "./routes/user.routes"
import concertationRoutes from "./routes/concertation.routes"
import loginRoutes from "./routes/login.routes"

var cors = require('cors')
const app = express();

app.use(cors())

// settings 
app.set("port", 4000);

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/concertation", concertationRoutes);

export default app;