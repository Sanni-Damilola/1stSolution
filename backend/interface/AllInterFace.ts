export interface IUser {
  name: string;
  email: string;
  password: string;
  userName: string;
  phoneNumber: number;
  accountNumber: number;
  amount: number;
  verified: boolean;
  isAdmin: boolean;
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
  interest: number;
  payBackTime: string;
  lock: boolean;
  title: string;
} // setting the Object Type for SaveLock

export interface ITargetData {
  amount: number;
  fixedAmount: number;
  interest: number;
  dateTime: string;
  title: string;
  targetValue: boolean;v
  Targetbalance: number;
} // setting the Object Type for TargetData

export interface IinvestorModel {
  title: string;
  percentageInterest: number;
  description: string;
  investors: {}[];
  startTime: string;
  duration: string;
  category: string;
  status: boolean;
  totalUnit: number;
  amountPerUnit: number;
} // setting the Object Type for IinvestorModel

export interface InvestorData {
  invertorId: string;
  amount: number;
  unit: number;
} // setting the Object Type for InvestorData
