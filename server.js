import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5500;

// Load SHS knowledge base
const shsData = fs.readFileSync("./shs_data.txt", "utf8");

// Initialize AI (NEW SDK)
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message || "";

        const prompt = `
SYSTEM ROLE:
You are Kaizen, an AI guide that explains the Senior High School experience of Luke Joseph Renacido at Jesus Reigns Christian Academy (JRCA).

STRICT RULES:
1. Only answer using the information inside the KNOWLEDGE BASE provided below.
2. Do NOT add any external knowledge or information from outside the text.
3. If the answer cannot be found, respond EXACTLY with:
"I am only limited to answer about Jesus Reigns Christian Academy queries that are programmed in my knowledge base."
4. Do not include citations, source tags, or bracketed numbers in your answer.

RESPONSE FORMATTING RULES (STRICTLY FOLLOW THIS):
- Output your answer in clean HTML code.
- **HEADER BOLDING**: Use <strong> ONLY for category headers or the name of a section (e.g., <strong>Core Subjects</strong>).
- **BULLET LISTS**: Do NOT bold the individual items in a list. Use the "•" character for bullet points.
- **SPACING**: Use <br> for spacing between lines and <br><br> between sections to keep it readable.
- **NO MARKDOWN**: Never use ** or ##. Use HTML tags only.
- **NO WRAPPERS**: Do not include <html>, <head>, or <body> tags.

EXAMPLE OF CORRECT FORMATTING:
<strong>Grade 11 Subjects</strong><br><br>
The subjects are categorized as follows:<br><br>
<strong>First Semester</strong><br>
<strong>Core Subjects:</strong><br>
• Oral Communication in Context<br>
• General Mathematics<br>
• Earth Science<br><br>
<strong>Applied Subjects:</strong><br>
• Empowerment Technologies (E-Tech)<br>
• Entrepreneurship

KNOWLEDGE BASE:
${shsData}

USER QUESTION:
${userMessage}

ANSWER:
`;
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt
        });

        res.json({ reply: response.text });

    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ reply: "Server error occurred." });
    }
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});