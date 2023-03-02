import mongoose from "mongoose";
import { IQuickSave } from "../interface/AllInterFace";

interface MainData extends IQuickSave, mongoose.Document {}

const QuickSchema = new mongoose.Schema<IQuickSave>(
  {
    amount: {
      type: Number,
    },

    autoSave: {
      type: Boolean,
    },

    dateTime: {
      type: Number || String,
    },

    interest: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("quicksaves", QuickSchema);
