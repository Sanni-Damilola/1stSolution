import mongoose from "mongoose";
import { IWalletData } from "../interface/AllInterFace";

interface MainData extends IWalletData, mongoose.Document {}

const walletSchema = new mongoose.Schema<IWalletData>({
  balance: {
    type: Number,
  },
  credit: {
    type: Number,
  },
  debit: {
    type: Number,
  },
});

export default mongoose.model<MainData>("wallets", walletSchema);
