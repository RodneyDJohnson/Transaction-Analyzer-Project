import express, { Router } from "express";
import transactionRoutes from "./transactionRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";

const router = Router();

router.use("/transactions", transactionRoutes); // handles transaction routes
router.use("/users", userRoutes); // handles user routes
router.use("/auth", authRoutes); // handles auth routes
router.get("users", getTransactions); // GET /users
router.post("users", createTransaction); // POST /users

router.get("/transactions", getTransactions); // GET /transactions
router.post("/transactions", createTransaction); // POST /transactions

export default router;
