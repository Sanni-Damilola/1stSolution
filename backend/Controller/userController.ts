import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../UserModel/UserModel";
import jwt from "jsonwebtoken";
import walletModel from "../WalletModel/walletModel";
import mongoose from "mongoose";
import historyModel from "../HistoryModel/historyModel";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userName, phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const getDate = Date.now();
    const generateNumber = Math.floor(Math.random() * 7000) * getDate; // generating random numbers
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
    register.save();

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

export const deleteAll_User_History_And_Wallet = async (
  req: Request,
  res: Response
) => {
  const deleteAllUser = await userModel.deleteMany(); // deleting All User
  const deleteAllHistory = await historyModel.deleteMany(); // deleting All History
  const deleteAllWallet = await walletModel.deleteMany(); // deleting All Wallet
  return res.status(200).json({
    message: "Deleted All User, History and Wallet",
  });
}; // deleteing All User, Wallet and History

export const sendToAnotherWallet = async (req: Request, res: Response) => {
  try {
    const { accountNumber, amount } = req.body;
    const generateReferenceNumber = Math.floor(Math.random() * 34567767) + 234; // generate Refefrence Number
    const getReceiver = await userModel.findOne({
      accountNumber,
    }); // getting receiver
    const getReceiverWallet = await walletModel.findById(getReceiver?._id); // geting Recevier Wallet {so a Recevier(user) can creidt it}
    const getSender = await userModel.findById(req.params.senderId); // getting sender
    const getSenderWallet = await walletModel.findById(
      req.params.senderWalletId
    ); // geting Sender Wallet {so a sender(user) can debit from it}

    if (getSender && getReceiver) {
      if (amount > getSenderWallet?.balance!) {
        return res.status(400).json({
          message: "Insufficient fund",
        });
      } else {
        if (getSender?.accountNumber === getSender?.accountNumber) {
          return res.status(400).json({
            message: "transaction fail",
          });
        } 
        await walletModel.findByIdAndUpdate(getSenderWallet?._id, {
          balance: getSenderWallet?.balance! - amount, // Decreasing Recevier Balance
          credit: 0,
          debit: amount,
        }); // updating sender Wallet

        const createSenderHistory = await historyModel.create({
          message: `You Have Succefully sent ${amount} to ${getReceiver?.name}`,
          transactionRefrence: "debit",
          transactionType: generateReferenceNumber, // generateReferenceNumber {from line 65 👆👆}
        }); // Sender History
        getSender?.history?.push(
          new mongoose.Types.ObjectId(createSenderHistory?._id)
        ); //  pushing data to history {in userModel(line 43) }
        getSender?.save();

        await walletModel.findByIdAndUpdate(getReceiver?._id, {
          balance: getReceiverWallet?.balance! + amount, // Increasing Recevier Balance
          credit: amount,
          debit: 0,
        }); // updating Receiver Wallet
        const createRecevierHistory = await historyModel.create({
          message: `Your Account has been credited with ${amount} from ${getReceiver?.name}`,
          transactionRefrence: "debit",
          transactionType: generateReferenceNumber, // generateReferenceNumber {from line 65 👆👆}
        });
        getReceiver?.history?.push(
          new mongoose.Types.ObjectId(createRecevierHistory?._id)
        ); // pushing data to history {in userModel(line 43) }
        getReceiver?.save();
      }
      return res.status(200).json({
        message: "transaction successfull",
      });
    } else {
      return res.status(404).json({
        message: "Account not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured in sendToAnotherWallet",
      error: error,
    });
  }
}; // {wallet tranction} ... Sending to another Wallet

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const getUsers = await userModel.find();
    return res.status(404).json({
      message: "users found",
      data: getUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "an error occured in getAllUser",
    });
  }
}; //  getting all users
