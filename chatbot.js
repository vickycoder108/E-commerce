document.addEventListener("DOMContentLoaded", () => {
  const chatbotHTML = `
    <div id="chatbot-container">
      <div id="chat-toggle" onclick="toggleChat()">💬</div>
      <div id="chat-box" style="display: none;">
        <div id="chat-messages"></div>
        <input type="text" id="user-input" placeholder="Ask something..." />
        <button onclick="sendMessage()">Send</button>
      </div>
    </div>
  `;

  const chatbotStyles = `
    <style>
      #chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      #chat-toggle {
        background: #007bff;
        color: white;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
      }
      #chat-box {
        width: 300px;
        height: 400px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
      }
      #chat-messages {
        flex: 1;
        padding: 10px;
        overflow-y: auto;
      }
      #chat-box input {
        padding: 10px;
        border: none;
        width: 70%;
      }
      #chat-box button {
        width: 30%;
        border: none;
        background: #007bff;
        color: white;
      }
    </style>
  `;

  document.body.insertAdjacentHTML("beforeend", chatbotHTML);
  document.head.insertAdjacentHTML("beforeend", chatbotStyles);
});

function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
}

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage("You", msg);
  userInput.value = "";

  setTimeout(() => {
    appendMessage("Bot", getBotResponse(msg));
  }, 500);
}

function appendMessage(sender, message) {
  const chat = document.getElementById("chat-messages");
  const newMsg = document.createElement("div");
  newMsg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chat.appendChild(newMsg);
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("price")) return "Our prices are listed under each product.";
  if (input.includes("order")) return "You can check your order status in your profile.";
  if (input.includes("hello")) return "Hi there! How can I assist you today?";
  return "Sorry, I'm still learning! Can you try asking differently?";
}
