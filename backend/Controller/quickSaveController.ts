import quickSaveModel from "../Models/QuickSaveModel/quickSaveModel";
import { Request, Response } from "express";
import walletModel from "../Models/WalletModel/walletModel";
import mongoose from "mongoose";

export const CreateQuickSave = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const getWallet = await walletModel.findById(req.params.walletId);

    const newDate = new Date().toDateString();

    if (amount > getWallet!.balance) {
      return res.status(404).json({
        message: "insufficient funds",
      });
    } else {
      const creating = await quickSaveModel.create({
        amount,
        autoSave: false,
        dateTime: newDate,
        interest: 0.1,
      });

      await walletModel.findByIdAndUpdate(getWallet?._id, {
        balance: getWallet?.balance! - amount,
      });

      getWallet?.quickSave?.push(new mongoose.Types.ObjectId(creating?._id));

      getWallet?.save();

      return res.status(200).json({
        message: "quick save created successfully",
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "an error occured in CreateQuickSave",
    });
  }
};

export const ClaimDailyInterest = async (req: Request, res: Response) => {
  try {
    const getSaveId = await quickSaveModel.findById(req.params.SaveId);

    const dailyinterest = 0.1 * (1 / 365);

    await quickSaveModel.findByIdAndUpdate(getSaveId?._id, {
      amount: getSaveId?.amount! * dailyinterest + getSaveId?.amount!,
    });

    return res.status(200).json({
      message: "successfull",
    });
  } catch (err) {
    return res.status(404).json({
      message: "an error occured in ClaimDailyInterest",
    });
  }
};
