import { Router } from "express";
import { deleteAllUser, registerUser } from "../Controller/userController";

const route = Router();
// creating User Route
//  👇👇
route.route("/postUser").post(registerUser); // register User
route.route("/deleteAll").post(deleteAllUser); // delete All User

export default route;
