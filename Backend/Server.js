import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 8087;

app.listen(port, () => {
  console.log("=================================");
  console.log(`** Server is running on ${port} **`);
});

const url = process.env.MONGODB_URL;

mongoose.connect(url, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("***** MongoDB connected *****");
  console.log("=================================");
});

import FoodsRouter from "./Routes/Foods.js";
app.use("/food", FoodsRouter);

import WeekPlan from "./Routes/WeekPlan.js";
app.use("/week", WeekPlan);

import MonthPlan from "./Routes/MonthPlan.js";
app.use("/month", MonthPlan);

import TreeMonthPlan from "./Routes/TreeMonthPlan.js";
app.use("/tree", TreeMonthPlan);

import NutritionPlan from "./Routes/NutritionPlan.js";
app.use("/nutrition", NutritionPlan);

import UserSelectedNutritionPlan from "./Routes/UserSelectedNutritionPlan.js";
app.use("/usnutition", UserSelectedNutritionPlan);