// setting the Object Type for User
export interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  accountNumber: number;
  verified: boolean;
  wallet: {}[];
  history: {}[];
}

// setting the Object Type Wallet
export interface IWalletData {
  balance: number;
  credit: number;
  debit: number;
}

// setting the Object Type History
export interface IHistory {
  message: string;
  transactionRefrence: string;
  transactionType: string;
}
