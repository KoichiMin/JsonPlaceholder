"use strict"

const btn = document.getElementById("buttonToDo")
const message = document.getElementById("message")
const toDo = document.getElementById("ToDo")
window.onload = () => {
    btn.onclick = () =>{
        const existingH1 = message.querySelector("h1");
        if (existingH1) {
            message.removeChild(existingH1);
        }
        fetch(`https://jsonplaceholder.typicode.com/todos/${toDo.value}`)    
            .then(response => response.json())
            .then(data => {
                
                const h1 = document.createElement("h1");
                h1.textContent = JSON.stringify(data);
                message.appendChild(h1);
            })
    }
}