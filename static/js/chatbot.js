function scrollChat(){
let chatbox = document.getElementById("chatbox")
chatbox.scrollTop = chatbox.scrollHeight
}

function sendMessage(){

let input = document.getElementById("userInput").value

if(input.trim()==="") return

let chatbox = document.getElementById("chatbox")

chatbox.innerHTML += `<div class="user-message">${input}</div>`

scrollChat()

document.getElementById("userInput").value=""

chatbox.innerHTML += `<div class="ai-message" id="typing">AI is typing...</div>`

scrollChat()

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

scrollChat()

})

.catch(error=>{
console.log(error)
})

}

function askFAQ(question){

document.getElementById("userInput").value = question

sendMessage()

}

document.getElementById("userInput").addEventListener("keypress",function(event){

if(event.key==="Enter"){

event.preventDefault()

sendMessage()

}

})