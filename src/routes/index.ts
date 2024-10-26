import express from "express";
import transactionRoutes from "./transactionRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const router = express.Router();

router.use("/transactions", transactionRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
