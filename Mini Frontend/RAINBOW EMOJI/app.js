let emoji=document.querySelector("#emoji")
let emojis=["😍","😊","❤️","💕","🌟","🌠","🔥","🤗","🫠"]
emoji.addEventListener("mouseover",()=>{
    emoji.textContent=emojis[Math.floor(Math.random()*emojis.length)]
})