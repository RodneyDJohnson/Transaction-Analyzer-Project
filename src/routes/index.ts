import express from "express";
import transactionRoutes from "./transactionRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { Router } from "express";

const router = Router();

router.use("/transactions", transactionRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
