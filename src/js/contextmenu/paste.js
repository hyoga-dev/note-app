import fly from "../fly/fly-card.js";
import setBefore from "../setBefore.js";
import { getStyleInt, qs } from "../utility.js";

let copied;

export function paste(e) {
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
  if (this.copiedText != undefined) {
    if (copied == this.copiedText) this.copiedText = copied.cloneNode(true)
    qs(".container").appendChild(this.copiedText)
    
    const top = parseInt(getComputedStyle(this.copiedText).getPropertyValue("top"))
    const left = parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"))
    this.copiedText.style.top = top + 20 + "px";
    this.copiedText.style.left = left + 20 + "px";
    this.copiedText.style.cursor = "default";   
    this.copiedText.style.zIndex = getStyleInt(this.copiedText, "z-index") + 1;

    addMenu(this.copiedText, this.menu)
    copied = this.copiedText  
    this.refreshEvent()
    fly(copied)

    
    localStorage.setItem("container", document.getElementById("container").innerHTML)
    setBefore()
}
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