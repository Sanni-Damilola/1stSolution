import QuickSave from "../Model/QuickSave";
import { Request, Response } from "express";
import WalletModel from "../Model/WalletModel";
import mongoose from "mongoose";

export const CreateQuickSave = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const getWallet = await WalletModel.findById(req.params.walletId);

    const newDate = new Date().toDateString();

    if (amount > getWallet!.Balance) {
      return res.status(404).json({
        message: "insufficient funds",
      });
    } else {
      const creating = await QuickSave.create({
        amount,
        autoSave: false,
        dateTime: newDate,
        interest: 0.1,
      });

      await WalletModel.findByIdAndUpdate(getWallet?._id, {
        Balance: getWallet?.Balance! - amount,
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
    const getSaveId = await QuickSave.findById(req.params.SaveId);

    const dailyinterest = 0.1 * (1 / 365);

    await QuickSave.findByIdAndUpdate(getSaveId?._id, {
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
