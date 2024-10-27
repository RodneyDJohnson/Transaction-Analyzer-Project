import { Request, Response } from "express";

// define the Transaction interface
export interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: string;
}

// Mock data
let transactions: Transaction[] = [
  { id: 1, name: "Sample", amount: 100, date: "2023-01-01" },
];

export const getTransactions = (req: Request, res: Response) => {
  res.json(transactions);
};
