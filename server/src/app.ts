import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app: Application = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", routes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Basic MERN API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      users: "/api/users",
    },
  });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
