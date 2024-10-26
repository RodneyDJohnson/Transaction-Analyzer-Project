import express from "express";
import transactionRoutes from "./transactionRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { Router } from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";

const router = Router();

router.use("/transactions", transactionRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/transactionRoutes", transactionRoutes);
router.get("/", getTransactions); // GET /transactions
router.post("/", createTransaction); // POST /transactions

export default router;
