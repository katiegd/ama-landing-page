import express from "express";
import dotenv from "dotenv";
import { Mistral } from "@mistralai/mistralai";
import cors from "cors";

dotenv.config();

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/generate-report", async (req, res) => {
  const { date, location, airQuality, waterPh } = req.body;

  try {
    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [
        {
          role: "system",
          content: `Create an environmental report based on the data from the following data:
          Date: ${date}, Location: ${location}, Air Quality: ${airQuality}, Water pH: ${waterPh}`,
        },
      ],
    });

    res.status(200).json(chatResponse);
  } catch (err) {
    console.error("Error with API call", err);
    res.status(500).json({ error: "Failed to generate report." });
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
