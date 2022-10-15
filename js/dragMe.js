import addCard from "./add-card.js"

let btn = document.getElementById("btn")
let counter = 0;

export default function dragMe() {

let more = () => {
  counter++
  console.log(counter)
}

let some = setInterval(more, 10)
btn.addEventListener("mousemove", dragOut)
window.addEventListener("mouseup", onlyClicked)

function onlyClicked() {
  clearInterval(some)
  console.log("Drag me")
  counter = 0
  btn.removeEventListener("mousemove", onlyClicked)
}

function dragOut() {
  if (counter > 2) {
    clearInterval(some)
    addCard(event)
    counter = 0
    btn.removeEventListener("mousemove", dragOut) 
  }
}


}