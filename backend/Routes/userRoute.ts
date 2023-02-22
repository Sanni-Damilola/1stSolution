import { Router } from "express";
import {
  deleteAll_User_History_And_Wallet,
  getAllUser,
  registerUser,
  sendToAnotherWallet,
} from "../Controller/userController";

// creating User Route
//  👇👇
const route = Router();
route.route("/postUser").post(registerUser); // register User
route.route("/deleteAll").delete(deleteAll_User_History_And_Wallet); // delete All User
route.route("/send/:userId/:walletId").patch(sendToAnotherWallet); // update 
route.route("/getall").get(getAllUser); // get All User

export default route;
