import fly from "./fly/fly-card.js";
import Menu from "./menu.js";
import { qsa } from "./utility.js";

const undoBtn = document.getElementById("undo")
const redoBtn = document.getElementById("redo")
const container2 = document.getElementById("container")
let after = []


// ------------------------------------------------------
export function undo() {
  const bef = JSON.parse(sessionStorage.getItem("before")) 
  const cm = new Menu("context-menu", ".box")
  const before = bef.slice(0, bef.length)

  redoBtn.style.opacity = "1"

  if (before.length <= 1) {
    undoBtn.style.opacity = "0.5"
    return
  } if (sessionStorage.getItem("moved") == "moved") {
    after = []
    sessionStorage.setItem("moved", "not-moved")
  }

  after.unshift(before[0])
  before.shift()
  container2.innerHTML = before[0]
  sessionStorage.setItem("before", JSON.stringify(before))
  cm.refreshEvent()
  qsa(".box").forEach( box => {
    fly(box)
  })
  if (before.length <= 1) {
    undoBtn.style.opacity = "0.5"
  }
}

// ------------------------------------------------------
export function redo() {
  if (sessionStorage.getItem("moved") == "moved") return
  const cm = new Menu("context-menu", ".box")
  const bef = JSON.parse(sessionStorage.getItem("before")) 
  const before = bef.slice(0, bef.length)
  
  undoBtn.style.opacity = "1"
  if (after.length <= 0) {
    redoBtn.style.opacity = "0.5"
    return
  }

  container2.innerHTML = after[0]
  before.unshift(after[0])
  after.shift()
  sessionStorage.setItem("before", JSON.stringify(before))
  cm.refreshEvent()
  qsa(".box").forEach( box => {
    fly(box)
  })
  
  if (after.length <= 0) {
    redoBtn.style.opacity = "0.5"
    return
  }
}
