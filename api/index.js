import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

app.use(cors()); //isso serve para evotar conflitos

app.use("/", userRoutes)

app.listen(8800);