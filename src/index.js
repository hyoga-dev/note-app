
import dragMe from "./js/fly/dragMe.js";
import fly from "./js/fly/fly-card.js";

import addEditor from "./js/addEditor.js";





const btn = document.getElementById("btn")
btn.addEventListener("mousedown", dragMe)




fly()



import DocumentRightClick from "./js/documentRightClick.js";
import Menu from "./js/menu.js";

const cm = new Menu("context-menu", ".box")
cm.refreshEvent()
cm.eventHandler()

const rc = new DocumentRightClick("document-context-menu", "document-menu", cm)
rc.docRightClick()
rc.addContext()











const bold = document.getElementById("bold")
bold.addEventListener("mousedown", () => addEditor(event, "bold") )

const h1 = document.getElementById("h1")
h1.addEventListener("mousedown", () => addEditor(event, "formatBlock", "h1") )

// const h3 = document.getElementById("h3")
// h3.addEventListener("mousedown", () => addEditor(event, "formatBlock", "h3") )

const paragraph = document.getElementById("paragraph")
paragraph.addEventListener("mousedown", () => addEditor(event, "formatBlock", "p") )

const italic = document.getElementById("italic")
italic.addEventListener("mousedown", () => addEditor(event, "italic") )

const justifyRight = document.getElementById("align-right")
justifyRight.addEventListener("mousedown", () => addEditor(event, "justifyRight") )

const justifyCenter = document.getElementById("align-center")
justifyCenter.addEventListener("mousedown", () => addEditor(event, "justifyCenter") )

const justifyLeft = document.getElementById("align-left")
justifyLeft.addEventListener("mousedown", () => addEditor(event, "justifyLeft") )

const justifyFull = document.getElementById("align-full")
justifyFull.addEventListener("mousedown", () => addEditor(event, "justifyFull") )




const insertUnorderedList = document.getElementById("ul")
insertUnorderedList.addEventListener("mousedown", () => addEditor(event, "insertUnorderedList") )

const insertOrderedList = document.getElementById("ol")
insertOrderedList.addEventListener("mousedown", () => addEditor(event, "insertOrderedList") )

// const redo = document.getElementById("redo")
// redo.addEventListener("mousedown", () => addEditor(event, "redo") )

// const undo = document.getElementById("undo")
// undo.addEventListener("mousedown", () => addEditor(event, "undo") )

// const insertHorizontalRule = document.getElementById("hr")
// insertHorizontalRule.addEventListener("mousedown", () => addEditor(event, "insertHorizontalRule") )
























function getScrollHeight(elm){
  var savedValue = elm.value
  elm.value = ''
  elm._baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
}

function onExpandableTextareaInput({ target:elm }){
  // make sure the input event originated from a textarea and it's desired to be auto-expandable
  if( !elm.classList.contains('box') || !elm.nodeName == 'TEXTAREA' ) return
  
  var minRows = elm.getAttribute('data-min-rows')|0, rows;
  !elm._baseScrollHeight && getScrollHeight(elm)

  elm.rows = minRows
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
  elm.rows = minRows + rows
}


// global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)

