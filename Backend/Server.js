import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


const app = express();

//multer
const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);
app.use(express.static(path.join(dirName, "uploads")));

app.use(bodyParser.json());
dotenv.config();

app.use(cors());


const port = process.env.PORT || 8086;

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

import Admin from "./Routes/AdminRoutes.js";
app.use("/admin", Admin);

import Member from "./Routes/MemberRoutes.js";
app.use("/member", Member);

import Payment from "./Routes/paymentRoutes.js";
app.use("/payment", Payment);

import timetable from './Routes/timeTableRoutes.js';
app.use("/timetable", timetable);
