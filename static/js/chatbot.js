function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if(message === "") return;

    addMessage(message, "user");

    input.value = "";

    // Show typing animation
    let typingDiv = document.createElement("div");
    typingDiv.className = "chat-message ai typing";
    typingDiv.id = "typing";

    typingDiv.innerHTML = `
        <img src="/static/images/profile.jpg" class="chat-avatar">
        <div class="chat-bubble">Typing...</div>
    `;

    document.getElementById("chatbox").appendChild(typingDiv);

    scrollChat();

    fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message: message})
    })
    .then(res => res.json())
    .then(data => {

        // Remove typing
        document.getElementById("typing").remove();

        addMessage(data.reply, "ai");
    });
}


function addMessage(text, sender){

    let messageDiv = document.createElement("div");
    messageDiv.className = "chat-message " + sender;

    if(sender === "user"){
        messageDiv.innerHTML = `
            <div class="chat-bubble">${text}</div>
        `;
    }
    else{
        messageDiv.innerHTML = `
            <img src="/static/images/profile.jpg" class="chat-avatar">
            <div class="chat-bubble">${text}</div>
        `;
    }

    document.getElementById("chatbox").appendChild(messageDiv);

    scrollChat();
}

function scrollChat(){
    let chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Enter key support
document.getElementById("userInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

// FAQ buttons
function askFAQ(question){
    document.getElementById("userInput").value = question;
    sendMessage();
}