import { qs } from "../utility.js";

let copied;

export default function paste(e, copiedText) {
  if (copiedText != undefined) {
    if (copied == this.copiedText) this.copiedText = copied.cloneNode(true)
    qs(".container").appendChild(this.copiedText)
    
    const x = e.clientX
    const y = e.clientY
  
    this.copiedText.style.left = x - 40 + "px"
    this.copiedText.style.top = y - 40 + "px"
    this.copiedText.style.cursor = "default";
    
    this.copiedText.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      
      const x = e.clientX
      const y = e.clientY
      
      this.menu.style.top = y + "px"
      this.menu.style.left = x + "px"
      this.menu.style.display = "block";
    })
    
    
    
    copied = this.copiedText
  }
  localStorage.setItem("container", document.getElementById("container").innerHTML)
}