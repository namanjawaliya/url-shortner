// const express = require("express");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const { connectToDatabase } = require("./utils/utils");
// const urlRoutes = require("./routes/urlRoutes");
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./utils/utils.js";
import { router } from "./routes/urlRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// DB Connection
connectToDatabase();

// Routes
app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
