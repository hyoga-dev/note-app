import { qsa } from "../utility.js"


export default function selectAll() {
  this.card = qsa(".box")
  
  this.card.forEach(x => {
    x.classList.add("selected")
  })
}