import authRoutes from "./authRoutes";
import express from "express";
import transactionRoutes from "src/routes/transactionRoutes";

const router = Router();

router.use("/transactions", transactionRoutes);
router.use("/auth", authRoutes);

export default router;
