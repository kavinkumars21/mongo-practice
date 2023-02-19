import express from "express";

import mongoose from "mongoose";

import cors from "cors";

import {
  addMenuToKfc,
  getAllMenu,
  getMenuById,
  updateMenuById,
  deleteMenuById,
} from "./routes/routes.js";

import bodyParser from "body-parser";

const PORT = 4001;

const app = express();

// Middleware
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/addmenu", addMenuToKfc);
app.get("/menulist", getAllMenu);
// app.get('/menu/:identifier', getMenuById);
app.get("/searchmenu", getMenuById);
app.put("/updatemenu", updateMenuById);
app.delete("/deletemenu", deleteMenuById);

// DB connection establishment
mongoose.connect("mongodb://127.0.0.1:27017/kfcdb").then((res) => {
  console.log("DB connect success");
  app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
  });
});
