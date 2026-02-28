import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import Database from "better-sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("pcb_designs.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS designs (
    id TEXT PRIMARY KEY,
    input_voltage REAL,
    output_voltage REAL,
    output_current REAL,
    topology TEXT,
    data TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Design Endpoint
  app.post("/api/generate-design", async (req, res) => {
    const { inputVoltage, outputVoltage, outputCurrent, constraints } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Design a power supply circuit with the following specs:
          Input Voltage: ${inputVoltage}V
          Output Voltage: ${outputVoltage}V
          Output Current: ${outputCurrent}A
          Constraints: ${constraints || "None"}
          
          Provide the response in JSON format with the following structure:
          {
            "topology": "Buck" | "Boost" | "Linear",
            "explanation": "Why this topology was chosen",
            "components": [
              { "name": "IC1", "type": "Controller", "value": "LM2596", "description": "Step-down regulator" },
              ...
            ],
            "calculations": {
              "inductor": "Value in uH",
              "capacitor": "Value in uF",
              "efficiency": "Estimated %",
              "traceWidth": "Recommended mm for power traces"
            },
            "layoutGuidelines": [
              "Guideline 1",
              "Guideline 2"
            ],
            "schematicData": {
               "nodes": [{"id": "VIN", "label": "Input"}, ...],
               "edges": [{"from": "VIN", "to": "IC1"}, ...]
            }
          }`,
        config: {
          responseMimeType: "application/json",
        }
      });

      const response = await model;
      let result;
      try {
        result = JSON.parse(response.text || "{}");
      } catch (e) {
        console.error("JSON Parse Error:", e);
        return res.status(500).json({ error: "AI returned invalid JSON" });
      }
      
      const id = Math.random().toString(36).substring(7);
      db.prepare("INSERT INTO designs (id, input_voltage, output_voltage, output_current, topology, data) VALUES (?, ?, ?, ?, ?, ?)")
        .run(id, inputVoltage, outputVoltage, outputCurrent, result.topology, JSON.stringify(result));

      res.json({ id, ...result });
    } catch (error) {
      console.error("AI Generation Error:", error);
      res.status(500).json({ error: "Failed to generate design" });
    }
  });

  app.get("/api/designs/:id", (req, res) => {
    const design = db.prepare("SELECT * FROM designs WHERE id = ?").get(req.params.id);
    if (!design) return res.status(404).json({ error: "Design not found" });
    res.json({ ...design, data: JSON.parse(design.data as string) });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
