import express from "express";
import { getCars, addCar, deleteCar } from "../handlers/cars.js";
import { protect } from "../handlers/user.js";

const Router = express.Router();

Router.route("/").all(protect).get(getCars).post(addCar);

Router.route("/:id").all(protect).delete(deleteCar);

export default Router;
