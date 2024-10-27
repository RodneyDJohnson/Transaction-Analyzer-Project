import userRoutes from "./userRoutes";
import express from "express";
import authRoutes from "./authRoutes";
import transactionRoutes from "./transactionRoutes";
import { Router } from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";

const router = Router();

router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);

router.get("/transactions", getTransactions);
router.post("/transactions", createTransaction);

export default router;
