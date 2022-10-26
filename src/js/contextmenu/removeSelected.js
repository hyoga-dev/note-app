import { qsa } from "../utility.js"


export default function removeSelected() {
    const selected = qsa(".selected")
    selected.forEach(x => {
      x.remove()
    })
  }