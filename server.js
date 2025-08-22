import express from "express";
import { puter } from "./puter-js/dist/puter.mjs"; // ایمپورت از سورس لوکال

const app = express();
app.use(express.json());

// POST /chat { "message": "سلام" }
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await puter.ai.chat(message);
    res.json({ reply: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
