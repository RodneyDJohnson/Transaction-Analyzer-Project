import authRoutes from "./authRoutes";
import express from "express";
import transactionRoutes from "./transactionRoutes";
import { Router } from "express";
import someMiddleware from "../someMiddleware";

const router = express.Router();

router.use("/transactions", transactionRoutes);
router.use("/auth", authRoutes);
router.use(someMiddleware);

export default router;
