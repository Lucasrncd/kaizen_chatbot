# 🤖 Kaizen: SHS Expert Guide Chatbot

> **"Kaizen" (改善)** is a Japanese philosophy focused on **continuous, incremental improvement** in productivity, efficiency, and quality. It is centered around the idea of **continuous learning** and growth.

**Kaizen** is an AI-powered expert guide designed to provide seamless, accurate information regarding the Senior High School experience of **Luke Joseph Renacido** at **Jesus Reigns Christian Academy (JRCA)**. By embodying the philosophy of continuous improvement, this chatbot ensures that information is delivered with precision, clarity, and constant reliability.

---

## 🚀 What does it do?

Kaizen acts as a specialized knowledge assistant. It is "grounded" in a specific dataset (`shs_data.txt`), meaning it only provides facts verified within that knowledge base.

* **Curriculum Guidance:** Explains specific subjects taken across STEM strands in Grades 11 and 12.
* **Academic History:** Provides details on enrollment years and graduation milestones.
* **Achievement Tracking:** Highlights academic honors and specialized project rankings.
* **Navigational Aid:** Offers precise commuting instructions from TUP Manila to the JRCA campus.
* **Strict Logic:** It is programmed to avoid hallucinations; if a question falls outside its programmed knowledge, it maintains integrity by stating its limitations.

---

## 🛠️ Technical Stack

* **Frontend:** HTML5, CSS3, and Vanilla JavaScript.
* **Backend:** Node.js with Express.js.
* **AI Engine:** Google Gemini 3 Flash (via Google AI SDK).
* **Deployment:** Hosted on **Render** (Web Service).

---

## 📱 Chatbot UI & Usage

The interface is designed for simplicity and readability, mirroring a modern messaging application.

### **How to Use:**
1. **Input Field:** Type your query into the chat bar at the bottom.
2. **Smart Formatting:** The UI renders AI responses in **Clean HTML**. You will see **Bold Headers** for categories and clear bullet points (•) for lists to ensure high readability.
3. **Real-time Feedback:** A "Kaizen is thinking..." indicator appears while the Gemini AI processes your request against the knowledge base.
4. **Auto-Scroll:** The chat automatically stays at the most recent message for a smooth conversational flow.

---

## 📂 Project Structure

```text
├── public/
│   ├── index.html    # The main UI structure
│   ├── script.js     # Frontend logic and API handling
│   └── styles.css    # Custom styling and animations
├── server.js         # Express server & Gemini AI integration
├── shs_data.txt      # The Knowledge Base (The "Brain")
├── .env              # API Key storage (Local only)
└── package.json      # Dependencies and scripts
