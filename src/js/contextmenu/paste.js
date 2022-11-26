import fly from "../fly/fly-card.js";
import setBefore from "../setBefore.js";
import { getStyleInt, qs } from "../utility.js";

let copied;

export function paste(e) {
  if (this.copiedText.length > 1) return this.pasteKey()
  this.copiedText = this.copiedText[0]
  if (this.copiedText != undefined) {
    if (copied == this.copiedText) this.copiedText = copied.cloneNode(true)
    qs(".container").appendChild(this.copiedText)
    
    const x = e.clientX
    const y = e.clientY
  
    this.copiedText.style.left = x - 40 + "px"
    this.copiedText.style.top = y - 40 + "px"
    this.copiedText.style.cursor = "default";
    this.copiedText.style.zIndex = getStyleInt(this.copiedText, "z-index") + 1;

    addMenu(this.copiedText, this.menu)
    copied = this.copiedText
    this.refreshEvent()
    fly(copied)
  }
  localStorage.setItem("container", document.getElementById("container").innerHTML)
  setBefore()
}

export function pasteKey () {
  const copied = []
  if (this.copiedText == undefined) return
    this.copiedText.forEach( (copiedText) => {
      qs(".container").appendChild(copiedText)
      
      let top = parseInt(getComputedStyle(copiedText).getPropertyValue("top"))
      let left = parseInt(getComputedStyle(copiedText).getPropertyValue("left"))

      copiedText.style.top = top + 20 + "px";
      copiedText.style.left = left + 20 + "px";
      copiedText.style.cursor = "default";   
      copiedText.style.zIndex = getStyleInt(copiedText, "z-index") + 1;
      
      addMenu(copiedText, this.menu)
      fly(copiedText)
      copied.push(copiedText.cloneNode(true))
    })
    this.copiedText = copied
    this.refreshEvent()
    localStorage.setItem("container", document.getElementById("container").innerHTML)
    setBefore()
}

function addMenu(parent, menu) {
  parent.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    
    const x = e.clientX
    const y = e.clientY
    
    menu.style.top = y + "px"
    menu.style.left = x + "px"
    menu.style.display = "block";
  })
}