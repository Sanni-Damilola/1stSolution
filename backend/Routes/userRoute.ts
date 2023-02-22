import { Router } from "express";
import { deleteAllUser, registerUser } from "../Controller/userController";

// creating User Route
//  👇👇
const route = Router();
route.route("/postUser").post(registerUser); // register User
route.route("/deleteAll").delete(deleteAllUser); // delete All User

export default route;
