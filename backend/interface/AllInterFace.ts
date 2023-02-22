export interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  accountNumber: number;
  verified: boolean;
  wallet: {}[];
  history: {}[];
} // setting the Object Type for User

export interface IWalletData {
  balance: number;
  credit: number;
  debit: number;
} // setting the Object Type Wallet

export interface IHistory {
  message: string;
  transactionRefrence: Number;
  transactionType: string;
} // setting the Object Type History
