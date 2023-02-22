import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../UserModel/UserModel";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userName, phoneNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const getDate = Date.now();
    const generateNumber = Math.floor(Math.random() * 7000) * getDate;

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
      token: jwt.sign(
        {
          _id: register._id,
        },
        "tywguop-wodfjhbkbkaj- javk_bhdjvja"
      ),
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured in registerUser",
      error: error,
    });
  }
};
