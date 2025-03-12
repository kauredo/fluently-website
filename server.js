import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Compression middleware
app.use(compression());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, "dist")));

// Send all requests to index.html so that client-side routing works
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
