import { qs } from "../utility.js";
// import fly from "../fly/fly-card.js"
// import refreshFly from "./refreshFly.js"

let copied;

export default function paste(e, copiedText) {
  if (copiedText != undefined) {
    if (copied == this.copiedText) this.copiedText = copied.cloneNode(true)
    qs(".container").appendChild(this.copiedText)
    
    const x = e.clientX
    const y = e.clientY
  
    this.copiedText.style.top = y - 40 + "px"
    this.copiedText.style.left = x - 40 + "px"

    this.copiedText.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      
      const x = e.clientX
      const y = e.clientY
      
      this.menu.style.top = y + "px"
      this.menu.style.left = x + "px"
      this.menu.style.display = "block";
    })
    
    this.refreshFly()


    copied = this.copiedText
}

}