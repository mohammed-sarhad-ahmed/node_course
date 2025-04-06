import express from "express";
import carsRouter from "./controller/cars.js";
import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/Cars");

const app = express();

app.use("/cars", carsRouter);

app.listen(80, () => {
  console.log("started a server at port 80");
});
