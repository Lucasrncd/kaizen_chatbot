// Select elements
const chatBox = document.getElementById("chatBox");
const inputField = document.getElementById("chat-input");

let isThinking = false;

// Send message function
async function sendMessage() {

    const message = inputField.value.trim();

    if (message === "" || isThinking) return;

    addUserMessage(message);

    inputField.value = "";

    const thinkingMessage = addBotMessage("Kaizen is thinking...");
    isThinking = true;

    try {

        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        thinkingMessage.querySelector(".message-bubble").innerHTML = data.reply;

    } catch (error) {

        thinkingMessage.querySelector(".message-bubble").textContent =
        "Sorry, something went wrong.";

    }

    isThinking = false;

    scrollToBottom();
}

// Add user message bubble
function addUserMessage(text) {

    const messageHTML = `
    <article class="message message--user">
        <div class="message-avatar">
            <span class="material-symbols-outlined">person</span>
        </div>

        <div class="message-content">
            <div class="message-meta">
                <span class="message-author">You</span>
            </div>

            <p class="message-bubble">${text}</p>
        </div>
    </article>
    `;

    chatBox.insertAdjacentHTML("beforeend", messageHTML);

    scrollToBottom();
}

// Add bot message bubble
function addBotMessage(text) {

    const messageHTML = `
    <article class="message message--bot">
        <div class="message-avatar">
            <span class="material-symbols-outlined">smart_toy</span>
        </div>

        <div class="message-content">
            <div class="message-meta">
                <span class="message-author">Kaizen</span>
                <span class="message-tag">AI ChatBot</span>
            </div>

            <p class="message-bubble">${text}</p>
        </div>
    </article>
    `;

    chatBox.insertAdjacentHTML("beforeend", messageHTML);

    return chatBox.lastElementChild;
}

// Auto scroll
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key support
inputField.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }

});

// Auto focus input
inputField.focus();