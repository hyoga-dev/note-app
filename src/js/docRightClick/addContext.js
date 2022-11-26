import { getDb, updateDb } from "../transferData.js"
import { redo, undo } from "../undoRedo.js"
import { qsa } from "../utility.js"


export default function addContext () {
  document.addEventListener("mousedown", (e) => {

    if (e.target.id == "d-paste") {
      this.contextMenu.paste(e)
    } if (e.target.id == "d-select-all") {
      this.selectAll(e)
    } if (e.target.id == "d-delete") {
      this.contextMenu.removeSelected()
    }  if (e.target.id == "context-undo") {
      undo()
    } if (e.target.id == "context-redo") {
      redo()
    } if (e.target.id == "unlock-all") {
      qsa('.box').forEach( item => {
        item.setAttribute('data-lock', false)
      })
      localStorage.setItem("container", container.innerHTML)
    } if (e.target.id == "save") {
      if (localStorage.getItem("uid") != null) {
        updateDb(localStorage.getItem("uid"), container.innerHTML)
        alert("saved")
      }
    } if (e.target.id == "load") {
      if (localStorage.getItem("uid") != null) {
        getDb(localStorage.getItem("uid"))
      }
    }

    this.menu.style.display = 'none';
  }, false)
}