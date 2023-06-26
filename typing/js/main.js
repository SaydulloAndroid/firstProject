const text = document.querySelector(".text")
const input = document.querySelector(".input-text");
const time = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const footer = document.querySelector(".footer");


var word;
var times = 10;
var score = 0;
var level = "Easy"

const randomWord = ()=>{
    var random = Math.floor(Math.random()*words.length)
    word = words[random]
    text.textContent = word
}

randomWord();

input.addEventListener("input", ()=>{
    if(input.value == word){
        randomWord();
        score++
        scoreEl.textContent = score
        input.value = ""
        

    }
})

setInterval(()=>{
    if(times>0){
        times--
    time.textContent = `00:0${times}`
        if(times<5){
            footer.classList.add("bg-warning");
        }
    } else if(times == 0){
        footer.classList.add("bg-danger")
        input.disabled = true
    }
}, 1000)

