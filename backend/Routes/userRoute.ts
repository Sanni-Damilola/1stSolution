import { Router } from "express";
import {
  deleteAllUser,
  getAllUser,
  registerUser,
  sendToAnotherWallet,
} from "../Controller/userController";

// creating User Route
//  👇👇
const route = Router();
route.route("/postUser").post(registerUser); // register User
route.route("/deleteAll").delete(deleteAllUser); // delete All User
route.route("/send/:userId/:walletId").patch(sendToAnotherWallet); // delete All User
route.route("/getall").get(getAllUser); // delete All User

export default route;
