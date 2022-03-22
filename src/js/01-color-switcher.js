const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
let timerId = null;

buttonStart.addEventListener("click", ()=>{
    
    timerId=setInterval(()=>{
      const body = document.querySelector("body");
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStart.setAttribute("disabled", "");
    console.log(buttonStart);
}
)
buttonStop.addEventListener("click", ()=>{
    clearInterval(timerId);
    buttonStart.removeAttribute("disabled");
    console.log(buttonStart);
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
