export interface IUser {
  name: string;
  email: string;
  password: string;
  userName: string;
  phoneNumber: number;
  accountNumber: number;
  amount: number;
  verified: boolean;
  wallet: {}[];
  history: {}[];
} // setting the Object Type for User

export interface IWalletData {
  balance: number;
  credit: number;
  debit: number;
  quickSave: {}[];
  saveLock: {}[];
  target: {}[];
} // setting the Object Type for Wallet

export interface IHistory {
  message: string;
  transactionRefrence: string;
  transactionType: string;
} // setting the Object Type for History

export interface IQuickSave {
  amount: number;
  autoSave: boolean;
  dateTime: string | number;
  interest: number;
} // setting the Object Type for QuickSave

export interface ISaveLock {
  amount: number;
  startTime: string;
  endTime: string;
  interest: number;
} // setting the Object Type for SaveLock
