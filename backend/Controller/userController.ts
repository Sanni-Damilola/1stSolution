import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../UserModel/UserModel";
import { IUser } from "../interface/AllInterFace";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userName, phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const generateNumber = Math.floor(Math.random() * 7000) * 5678902876;
    const register = await UserModel.create({
      name,
      email,
      password,
      userName,
      phoneNumber,
      verified: true,
      accountNumber: generateNumber,
    });

    res.status(201).json({
      message: "created",
      data: register,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured in registerUser",
      error: error,
    });
  }
};
