import dragMe from "./js/fly/dragMe.js";
import fly from "./js/fly/fly-card.js";
import DocumentRightClick from "./js/documentRightClick.js";
import Menu from "./js/menu.js";
import selectOnDrag from "./js/selectOnDrag.js";
import setting from "./js/setting.js";
import color from "./js/color.js";
import addClick from "./js/addClick.js";
import setBefore from "./js/setBefore.js";
import { qsa, getId } from "./js/utility.js";
import toPdf from "./js/toPdf.js";

const btn = getId("btn")
const pdfBtn = getId("to-pdf")
btn.addEventListener("mousedown", dragMe)
pdfBtn.addEventListener("click", toPdf)

document.onkeyup = () => {
  localStorage.setItem("container", getId('container').innerHTML)
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
getId("undo").style.opacity = "0.5"


