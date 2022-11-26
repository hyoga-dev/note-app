import { qsa } from "../utility.js"

export default function refreshEvent() {
  qsa(".box").forEach(x => {
    x.addEventListener("contextmenu", this.clickRight)
  })
}