// Import necessary modules
import { Request, Response, NextFunction } from "express";
import { Transaction } from "../models/transactionModel";
import { Router } from "express";
import express from "express";

// Mock transaction data
let transactions: Transaction[] = [
  { id: 1, name: "Sample", amount: 100, date: "2023-01-01" },
];

// Controller functions
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

// Middleware for validation
export const validateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, amount, date } = req.body;
  if (!name || !amount || !date) {
    return res.status(400).json({ message: "Invalid request body" });
  }
  next();
};

export default function someMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Do something
  next();
}

export const validateTransactionId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!parseInt(req.params.id)) {
    return res.status(400).json({ message: "Invalid transaction ID" });
  }
  next();
};

// Error handling middleware
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
};
