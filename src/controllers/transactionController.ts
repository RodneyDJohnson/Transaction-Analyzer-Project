// Purpose: Controller for transaction routes//

import { Request, Response } from "express";
import { Transaction } from "../models/transactionModel";

// Mock data
let transactions: Transaction[] = [
  { id: 1, name: "Sample", amount: 100, date: "2023-01-01" },
];

export const getTransactions = (req: Request, res: Response) => {
  res.json(transactions);
};

export const createTransaction = (req: Request, res: Response) => {
  const newTransaction: Transaction = {
    id: transactions.length + 1,
    ...req.body,
  };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};
