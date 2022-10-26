import { qs } from "../utility.js";

let copied;


export default function duplicate () {
  if (document.activeElement.tagName != "BODY") {
    this.copiedText = document.activeElement.cloneNode(true)
    if (this.copiedText != undefined) {
      if (copied == this.copiedText) this.copiedText = copied.cloneNode(true)
      qs(".container").appendChild(this.copiedText)
      
      const top = parseInt(getComputedStyle(this.copiedText).getPropertyValue("top"))
      const left = parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"))
      this.copiedText.style.top = top + 20 + "px";
      this.copiedText.style.left = left + 20 + "px";

      this.copiedText.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        
        const x = e.clientX
        const y = e.clientY
      
        this.menu.style.top = y + "px"
        this.menu.style.left = x + "px"
        this.menu.style.display = 'block';
      })

    copied = this.copiedText

    }
  } else {
    alert("You are not selecting anything")
  }

  
}