import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleColorSystem,
  handleFusionSchema,
  handleMantineTheme,
  handlePrimitives,
  handleTokens,
  handleVariables
} from "./routes/color-system";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Color System API routes
  app.get("/api/color-system", handleColorSystem);
  app.get("/api/color-system/fusion", handleFusionSchema);
  app.get("/api/color-system/mantine", handleMantineTheme);
  app.get("/api/color-system/primitives", handlePrimitives);
  app.get("/api/color-system/tokens", handleTokens);
  app.get("/api/color-system/variables", handleVariables);

  return app;
}
