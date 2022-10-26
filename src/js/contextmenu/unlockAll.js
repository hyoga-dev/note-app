import { qsa } from "../utility.js"

export default function unlockAll() {
  this.card = qsa(this.cardName)
  this.card.forEach(x => {
    const attr = x.getAttribute("contenteditable")
    if ( attr == "false") {
      x.classList.add("selected")

      const unOutline = () => document.addEventListener("mouseup", outline)
      const outline = () => {
        // x.classList.remove("selected")
        document.removeEventListener("mouseup", outline)

      }
      setTimeout(unOutline, 200) 
    }
    x.setAttribute("contenteditable", true)
  })
}