import { Request, Response } from "express";
import InvestorModel from "../InvestorModel/InvestorModel";
import userModel from "../UserModel/userModel";
import walletModel from "../WalletModel/walletModel";

export const CreatInvestify = async (req: Request, res: Response) => {
  try {
    const getUser = await userModel.findById(req.params.id);
    const getWallet = await walletModel.findById(getUser?._id);
    const dater = new Date().toDateString();
    if (getUser?.isAdmin === true) {
      const { title, description, category, duration, amountPerUnit } =
        req.body;
      const creating = await InvestorModel.create({
        title,
        description,
        category,
        duration,
        startTime: dater,
        amountPerUnit,
        totalUnit: 200,
        status: true,
      });

      return res.status(200).json(creating);
    } else {
      return res.status(404).json({
        message: "UnAuthorized User",
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "an error occurred in CreatInvestify",
    });
  }
};
