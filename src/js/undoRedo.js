import fly from "./fly/fly-card.js";
import Menu from "./menu.js";
// import DocumentRightClick from "./documentRightClick.js";


// export default function() {


const undoBtn = document.getElementById("undo")
const redoBtn = document.getElementById("redo")
// undoBtn.addEventListener("click", undo)
// redoBtn.addEventListener("click", redo)

let after = []
const container2 = document.getElementById("container")


export function undo() {
  const cm = new Menu("context-menu", ".box")
  const bef = JSON.parse(sessionStorage.getItem("before")) 
  const before = bef.slice(0, bef.length)

  redoBtn.style.opacity = "1"
  if (before.length <= 1) {
    undoBtn.style.opacity = "0.5"
    return
  }
  after.unshift(before[0])
  before.shift()
  container2.innerHTML = before[0]
  sessionStorage.setItem("before", JSON.stringify(before))
  sessionStorage.setItem("after", "not-moved")
  fly()
  cm.refreshEvent()
  // const after = JSON.parse(sessionStorage.getItem("after")) 
}

export function redo() {
  const cm = new Menu("context-menu", ".box")
  const bef = JSON.parse(sessionStorage.getItem("before")) 
  const before = bef.slice(0, bef.length)
  undoBtn.style.opacity = "1"

  if (after.length <= 0) {
    redoBtn.style.opacity = "0.5"
    return
  } if (sessionStorage.getItem("after") == "moved") {
    after = []
    redoBtn.style.opacity = "0.5"
    return
  }

  container2.innerHTML = after[0]
  before.push(after[0])
  after.shift()
  sessionStorage.setItem("before", JSON.stringify(before))
  fly()
  cm.refreshEvent()
}

// }