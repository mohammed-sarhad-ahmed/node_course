import express from "express";
import { signup, login } from "../handlers/user.js";

const Router = express.Router();

Router.post("/signup", signup);
Router.post("/login", login);
export default Router;
