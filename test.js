import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

console.log("API KEY:", process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌");

// Correct initialization
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function test() {
    console.log("Starting test...");

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Say hello"
        });

        console.log("Response received");
        console.log("OUTPUT:", response.text);

    } catch (err) {
        console.error("ERROR CAUGHT:", err);
    }
}

test();