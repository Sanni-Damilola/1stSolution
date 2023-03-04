export interface UserData {
  name: string;
  email: string;
  userName: string;
  password: string;
  phoneNumber: number;
  _id: string;
  wallet: [];
}

export interface WalletData {
  Balance: number;
  credit: number;
  debit: number;
  quickSave: {}[];
  saveLock: {}[];
  Target: {}[];
  invest: {}[];
  myInvestment: [];
}

export interface HistoryData {
  message: string;
  transactionReference: number;
  transactionType: string;
}

export interface Quick {
  amount: number;
  autoSave: boolean;
  dateTime: number | string;
  interest: number;
}

export interface Locks {
  amount: number;
  PayBackTime: string;
  interest: number;
  lock: boolean;
  title: string;
}

export interface TargetData {
  amount: number;
  fixedAmount: number;
  interest: number;
  dateTime: string;
  title: string;
  targetValue: boolean;
  Targetbalance: number;
}

export interface Inves {
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
}

export interface InvestorData {
  investorId: string;
  amount: number;
  unit: number;
}
