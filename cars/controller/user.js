import express from "express";
import { signup } from "../handlers/user.js";

const Router = express.Router();

Router.post("/signup", signup);

export default Router;
