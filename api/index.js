import express from "express";
import cirs from "cors";

const app = express();

app.use(express.json());
app.use(cors()); //isso serve para evotar conflitos

app.listen(8800);