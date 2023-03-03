import targetModel from "../Model/TargetModel";
import walletModel from "../Models/WalletModel/walletModel";

import { Request, Response } from "express";
import mongoose from "mongoose";

export const CreateQuickSave = async (req: Request, res: Response) => {
  try {
    const { title, amount, fixedAmount } = req.body;
    const getWallet = await walletModel.findById(req.params.walletId);
    const dailyinterest = 0.1 * (1 / 365);
    const newDate = new Date().toDateString();
    const compileFigures = [...fixedAmount];
    const add = compileFigures.reduce((a, b) => a + b);

    if (amount > getWallet!.Balance) {
      return res.status(404).json({
        message: "insufficient funds",
      });
    } else {
      const creating = await targetModel.create({
        //to be reached
        amount,
        Targetbalance: add,
        targetValue: false,
        //to be removed
        fixedAmount,
        interest: dailyinterest,
        dateTime: newDate,
        title,
      });

      await walletModel.findByIdAndUpdate(getWallet?._id, {
        Balance: getWallet?.balance! - amount,
      });

      getWallet?.Target?.push(new mongoose.Types.ObjectId(creating?._id));

      getWallet?.save();
      const getSaveId = await targetModel.findById(req.params.SaveId);

      if (getSaveId?.targetValue) {
        await targetModel.findByIdAndUpdate(getSaveId?._id, {
          amount: getSaveId?.amount! * dailyinterest + getSaveId?.amount!,
        });
        await walletModel.findByIdAndUpdate(getWallet?._id, {
          Balance: getSaveId.Targetbalance + getWallet?.balance!,
        });
      }

      return res.status(200).json({
        message: "quick save created successfully",
      });
    }
  } catch (err) {
    return res.status(404).json({
      message: "an error occured",
    });
  }
};

export const ClaimTarget = async (req: Request, res: Response) => {
  try {
    const getSaveId = await targetModel.findById(req.params.SaveId);
    const getWallet = await WalletModel.findById(req.params.walletId);

    const dailyinterest = 0.1 * (1 / 365);

    if (getSaveId?.targetValue) {
      await targetModel.findByIdAndUpdate(getSaveId?._id, {
        amount: getSaveId?.amount! * dailyinterest + getSaveId?.amount!,
      });
    }
    return res.status(200).json({
      message: "successfull",
    });
  } catch (err) {
    return res.status(404).json({
      message: "an error occured",
    });
  }
};
