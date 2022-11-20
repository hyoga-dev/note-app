import { getId } from "./utility.js"
let before = []

export default function setBefore() {
  if (sessionStorage.getItem("before") != null) {
    before = JSON.parse(sessionStorage.getItem("before"))
  }

  before.unshift(getId("container").innerHTML)
  sessionStorage.setItem("before", JSON.stringify(before))
  sessionStorage.setItem("moved", "moved")
  getId("redo").style.opacity = "0.5"
  getId("undo").style.opacity = "1"
}