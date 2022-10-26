import { qsa } from "../utility.js"

export default function refreshEvent() {
  this.card = qsa(this.cardName)
  this.card.forEach(x => {
    x.addEventListener("contextmenu", this.clickRight)
  })
}