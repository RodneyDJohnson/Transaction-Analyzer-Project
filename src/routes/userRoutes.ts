import userRoutes from "./userRoutes";
import express from "express";
import authRoutes from "./authRoutes";
import transactionRoutes from "./transactionRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);

export default router;