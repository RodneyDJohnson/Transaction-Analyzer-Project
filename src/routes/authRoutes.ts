// authRoutes.ts

import { Router } from "express";
import transactionRoutes from "./transactionRoutes";
import someMiddleware from "../someMiddleware";

const authRoutes = Router();

// Define authentication-related routes//
authRoutes.get("/login", (req, res) => {
  res.send("Login route");
});

authRoutes.get("/register", (req, res) => {
  res.send("Register route");
});

// Use other routes
authRoutes.use("/transactions", transactionRoutes);
authRoutes.use("/someMiddleware", someMiddleware);

export default authRoutes;
