function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if(message === "") return;

    addMessage(message, "user");

    input.value = "";

    // 🔥 Typing Animation
    let typingDiv = document.createElement("div");
    typingDiv.className = "message ai-message typing";
    typingDiv.id = "typing";

    typingDiv.innerHTML = `
        <img src="/static/images/profile.jpg" class="avatar">
        <div class="bubble">Typing...</div>
    `;

    document.getElementById("chatbox").appendChild(typingDiv);
    scrollChat();

    // 🔥 API CALL
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
        let typing = document.getElementById("typing");
        if(typing) typing.remove();

        addMessage(data.reply, "ai");
    });
}


// 🔥 MESSAGE HANDLER
function addMessage(text, sender){

    let messageDiv = document.createElement("div");

    if(sender === "user"){
        messageDiv.className = "message user-message";

        messageDiv.innerHTML = `
            <div class="bubble">${text}</div>
        `;
    }
    else{
        messageDiv.className = "message ai-message";

        messageDiv.innerHTML = `
            <img src="/static/images/profile.jpg" class="avatar">
            <div class="bubble">${text}</div>
        `;
    }

    document.getElementById("chatbox").appendChild(messageDiv);

    scrollChat();
}


// 🔥 AUTO SCROLL
function scrollChat(){
    let chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}


// 🔥 ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function(){
    let input = document.getElementById("userInput");

    input.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            sendMessage();
        }
    });
});


// 🔥 FAQ HANDLER
function askFAQ(question){
    document.getElementById("userInput").value = question;
    sendMessage();
}