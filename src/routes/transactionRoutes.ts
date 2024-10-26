import express from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";
import { Router } from "express";

const router = Router();

router.get("/", getTransactions); // GET /transactions
router.post("/", createTransaction); // POST /transactions

export default router;
