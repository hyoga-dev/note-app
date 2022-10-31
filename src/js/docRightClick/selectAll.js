




import { qsa } from "../utility.js"




export default function selectAll() {
  // console.log(e.target.id)
  this.card = qsa(".box")
  
  this.card.forEach(x => {
    x.classList.add("selected")
  })
}