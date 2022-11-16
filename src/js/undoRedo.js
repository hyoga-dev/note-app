import fly from "./fly/fly-card.js";
import Menu from "./menu.js";
// import DocumentRightClick from "./documentRightClick.js";


export default function() {

const cm = new Menu("context-menu", ".box")
// cm.eventHandler()
  
// const rc = new DocumentRightClick("document-context-menu", "document-menu", cm)
// rc.docRightClick()
// rc.addContext()


const undoBtn = document.getElementById("undo")
const redoBtn = document.getElementById("redo")
undoBtn.addEventListener("click", undo)
redoBtn.addEventListener("click", redo)

let after = []
const container2 = document.getElementById("container")

// console.log(before, after)

function undo() {
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
  console.log(before)
  sessionStorage.setItem("before", JSON.stringify(before))
  sessionStorage.setItem("after", "not-moved")
  fly()
  cm.refreshEvent()
  // const after = JSON.parse(sessionStorage.getItem("after")) 
}

function redo() {
  const bef = JSON.parse(sessionStorage.getItem("before")) 
  const before = bef.slice(0, bef.length)

  if (after.length <= 0) {
    redoBtn.style.opacity = "0.5"
    return
  }

  if (sessionStorage.getItem("after") == "moved") {
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

}