import setBefore from "../setBefore.js"
import { qsa } from "../utility.js"


export default function removeSelected() {
    const selected = qsa(".selected")
    selected.forEach(x => {
      x.remove()
    })
    localStorage.setItem("container", document.getElementById('container').innerHTML)
    setBefore()
}