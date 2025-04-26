import express from "express";
import carsRouter from "./controller/cars.js";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "dotenv/config";

if (process.env.NODE_ENV === "dev") {
  config({
    path: "./dev.env",
  });
} else {
  config({
    path: "./prod.env",
  });
}

console.log(process.env.PORT);

await mongoose.connect("mongodb://localhost:27017/Cars");

const app = express();
app.use(express.json());
app.use(morgan("short"));

app.use("/cars", carsRouter);

app.listen(5050, () => {
  console.log("started a server at port 5050");
});
