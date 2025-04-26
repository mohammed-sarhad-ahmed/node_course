import express from "express";
import carsRouter from "./controller/cars.js";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "dev") {
  dotenv.config({
    path: "./dev.env",
  });
} else {
  dotenv.config({
    path: "./prod.env",
  });
}

await mongoose.connect(process.env.DATABASE);

const app = express();
app.use(express.json());
app.use(morgan("short"));

app.use("/cars", carsRouter);

app.listen(process.env.PORT, () => {
  console.log(`started a server at port ${process.env.PORT} `);
});
