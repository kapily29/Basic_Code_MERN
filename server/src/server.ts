import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
