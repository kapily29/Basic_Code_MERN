import { Request, Response } from "express";

export const healthCheck = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    message: "🚀 Backend is running successfully!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
};
