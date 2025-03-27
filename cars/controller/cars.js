import express from "express";
import { getCars, addCar, deleteCar } from "../handlers/cars.js";

const Router = new express.Router();

Router.route("/").get(getCars).post(addCar);

Router.route("/:id").delete(deleteCar);

export default Router;
