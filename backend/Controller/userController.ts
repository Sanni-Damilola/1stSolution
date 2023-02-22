import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../UserModel/UserModel";
import jwt from "jsonwebtoken";
import walletModel from "../WalletModel/walletModel";
import mongoose from "mongoose";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userName, phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const getDate = Date.now();
    const generateNumber = Math.floor(Math.random() * 7000) * getDate;
    const num = 234; // country code

    const register = await userModel.create({
      name,
      email,
      password,
      userName,
      phoneNumber: num + phoneNumber,
      verified: true,
      accountNumber: generateNumber,
    });

    const createWallet = await walletModel.create({
      _id: register?._id,
      balance: 1000,
      credit: 0,
      debit: 0,
    }); // creating a wallet
    register?.wallet.push(new mongoose.Types.ObjectId(createWallet?._id));

    return res.status(201).json({
      message: "created",
      data: register,
      token: jwt.sign(
        {
          _id: register._id,
        },
        "tywguop-wodfjhbkbkaj- javk_bhdjvja"
      ),
    }); // geting a token
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured in registerUser",
      error: error,
    });
  }
}; //Creating User

export const deleteAllUser = async (req: Request, res: Response) => {
  const deleteAllUser = await userModel.deleteMany();
  return res.status(200).json({
    message: "Deleted All User",
  });
}; // deleteing All User

export const sendToAnotherWallet = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
         return res.status(400).json({
           message: "An Error Occured in sendToAnotherWallet",
           error: error,
         });
    }
}; // {wallet tranction} ... Sending to another Wallet
