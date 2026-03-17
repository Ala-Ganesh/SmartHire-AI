function sendMessage(){

let input = document.getElementById("userInput").value

if(input.trim()==="") return

let chatbox = document.getElementById("chatbox")

chatbox.innerHTML += `<div class="user-message">${input}</div>`

document.getElementById("userInput").value=""

chatbox.innerHTML += `<div class="ai-message" id="typing">AI is typing...</div>`

chatbox.scrollTop = chatbox.scrollHeight

fetch("/ask",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({message:input})

})

.then(res=>res.json())

.then(data=>{

document.getElementById("typing").remove()

chatbox.innerHTML += `<div class="ai-message">${data.reply}</div>`

chatbox.scrollTop = chatbox.scrollHeight

})

}

function askFAQ(question){
document.getElementById("userInput").value = question
sendMessage()
}

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("userInput").addEventListener("keypress",function(event){

if(event.key==="Enter"){
event.preventDefault()
sendMessage()
}

})

})