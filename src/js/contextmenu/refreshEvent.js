import { qsa } from "../utility.js"

export default function refreshEvent() {
  // this.card = qsa(this.cardName)
  qsa(".box").forEach(x => {
    x.addEventListener("contextmenu", this.clickRight)
    // qsa(".box").forEach( item => {
    //   item.addEventListener("mousedown", e => this.targetParent = e.currentTarget)
    //   // console.log(e.currentTarget)
    // })
  })
}