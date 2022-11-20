
import dragMe from "./js/fly/dragMe.js";
import fly from "./js/fly/fly-card.js";
import DocumentRightClick from "./js/documentRightClick.js";
import Menu from "./js/menu.js";
import selectOnDrag from "./js/selectOnDrag.js";
import setting from "./js/setting.js";
import color from "./js/color.js";
import addClick from "./js/addClick.js";
import setBefore from "./js/setBefore.js";
import { qsa } from "./js/utility.js";

const btn = document.getElementById("btn")
btn.addEventListener("mousedown", dragMe)

document.onkeyup = () => {
  localStorage.setItem("container", document.getElementById('container').innerHTML)
}






const cm = new Menu("context-menu", ".box")
cm.refreshEvent()
cm.eventHandler()

const rc = new DocumentRightClick("document-context-menu", "document-menu", cm)
rc.docRightClick()
rc.addContext()

qsa(".box").forEach( box => {
  fly(box)
})

addClick()
color()
setting()
selectOnDrag()
setBefore()
document.getElementById("undo").style.opacity = "0.5"


