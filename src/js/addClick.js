// import signIn from "./auth/signIn.js"
// import logOut from "./auth/signOut.js"
import openFullscreen from "./fullscreen.js"
import { redo, undo } from "./undoRedo.js"
import { addEditor, getId, qs } from "./utility.js"

export default function addClick() {
  const bold = getId("bold")
  bold.addEventListener("mousedown", () => {
    qs(".bold").classList.toggle("dark-back")
    qs(".fa-bold").classList.toggle("dark-color")
    addEditor(event, "bold") 
  })
  
  const italic = getId("italic")
  italic.addEventListener("mousedown", () => {
    qs(".italic").classList.toggle("dark-back")
    qs(".fa-italic").classList.toggle("dark-color") 
    addEditor(event, "italic")
  })

  const paragraph = getId("paragraph")
  paragraph.addEventListener("mousedown", () => {
    addEditor(event, "formatBlock", "p")
    qs(".paragraph").classList.toggle("dark-back")
    qs(".fa-p").classList.toggle("dark-color") 
  })

  // const profileName = getId('profile-name')
  // profileName.addEventListener('click', signIn)
  
  // const signOut = getId('log-out')
  // signOut.addEventListener('click', logOut)

  const expandContainer = getId("expand-container")
  const expand = getId("expand")
  expand.addEventListener("click", openFullscreen)
  expandContainer.addEventListener("click", openFullscreen)

  const h1 = getId("h1")
  h1.addEventListener("mousedown", () => addEditor(event, "formatBlock","h1") )

  const h3 = document.querySelector(".h3")
  h3.addEventListener("mousedown", () => addEditor(event, "formatBlock","h3") )

  const justifyRight = getId("align-right")
  justifyRight.addEventListener("mousedown", () => addEditor(event, "justifyRight") )

  const justifyCenter = getId("align-center")
  justifyCenter.addEventListener("mousedown", () => addEditor(event, "justifyCenter") )

  const justifyLeft = getId("align-left")
  justifyLeft.addEventListener("mousedown", () => addEditor(event, "justifyLeft") )

  const justifyFull = getId("align-full")
  justifyFull.addEventListener("mousedown", () => addEditor(event, "justifyFull") )

  const insertUnorderedList = getId("ul")
  insertUnorderedList.addEventListener("mousedown", () => addEditor(event, "insertUnorderedList") )

  const insertOrderedList = getId("ol")
  insertOrderedList.addEventListener("mousedown", () => addEditor(event, "insertOrderedList") )

  const undoBtn = document.getElementById("undo")
  const redoBtn = document.getElementById("redo")

  undoBtn.addEventListener("click", undo)
  redoBtn.addEventListener("click", redo)
}