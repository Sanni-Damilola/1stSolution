import mongoose from "mongoose";
import { ISaveLock } from "../../interface/AllInterFace";

interface MainData extends ISaveLock, mongoose.Document {}

const SaveLockSchema = new mongoose.Schema<ISaveLock>(
  {
    amount: {
      type: Number,
    },

    lock: {
      type: Boolean,
    },

    payBackTime: {
      type: String,
    },

    interest: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("saveLocks", SaveLockSchema);
