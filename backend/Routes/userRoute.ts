import { Router } from "express";
import { registerUser } from "../Controller/userController";

const route = Router();

route.route("/postUser").post(registerUser);

export default route;
