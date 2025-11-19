import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || "development" });
});

// Example API endpoint
app.get("/api/products", (req, res) => {
  res.json({ products: [] });
});

app.listen(PORT, () => {
  console.log(`Backend running: http://localhost:${PORT}`);
});
