import express, { type Express } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function registerRoutes(app: Express) {
  const router = express.Router();

  // API routes
  router.post("/api/contact", async (req, res) => {
    try {
      // Here you would typically implement email sending logic
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.use(router);

  // Only serve static files in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(join(__dirname, "../dist/public")));
    
    // Handle SPA routing in production
    app.get("*", (req, res) => {
      res.sendFile(join(__dirname, "../dist/public/index.html"));
    });
  }
}
