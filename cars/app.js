import express from "express";
import carsRouter from "./controller/cars.js";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./controller/user.js";

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

app.use("/user", userRouter);
app.use("/cars", carsRouter);

app.all("*", (req, res, next) => {
  next(new Error("404"));
});
app.use((err, req, res, next) => {
  if (err.message === "404") {
    res.status(404).send({
      message: "route not found",
    });
  }
  res.status(400).send({
    err,
  });
});
app.listen(process.env.PORT, () => {
  console.log(`started a server at port ${process.env.PORT} `);
});
