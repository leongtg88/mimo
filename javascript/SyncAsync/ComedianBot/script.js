let jokeIndex = 0; // debe ser let, no const

document.addEventListener("DOMContentLoaded", function() {
const jokeButton = document.querySelector("button[onclick='requestJoke()']");
const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
    
    chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage(messageText){
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    
    const avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    messageDiv.append(avatar, contentDiv);
    chatContent.appendChild(messageDiv);
    
    chatContent.scrollTop = chatContent.scrollHeight;
}

function requestJoke() {
    appendUserMessage("Tell me a joke!"); // mensaje del usuario
    jokeButton.style.display = "none"; // oculta el botón

    setTimeout(function() {
    appendBotMessage("Ok, got one.");
    }, 2000);

    setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);
    }, 2500);

    setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][1]);
      jokeButton.style.display = "inline-block"; // muestra el botón después del chiste
      jokeIndex = (jokeIndex + 1) % jokes.length; // avanza el índice de los chistes
    }, 5000);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

  window.requestJoke = requestJoke; // hace que requestJoke esté disponible globalmente
});

