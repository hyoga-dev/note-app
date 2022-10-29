
import dragMe from "./js/fly/dragMe.js";
import fly from "./js/fly/fly-card.js";


import addEditor from "./js/addEditor.js";




const btn = document.getElementById("btn")
btn.addEventListener("mousedown", dragMe)




fly()


import DocumentRightClick from "./js/documentRightClick.js";
import Menu from "./js/menu.js";
import { getId, getStyle, qs, qsa } from "./js/utility.js";

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

// const color = document.getElementById("color")
// color.addEventListener("mousedown", () => addEditor(event, "foreColor", "#c47b5a") )

// const backColor = document.getElementById("color")
// backColor.addEventListener("mousedown", () => addEditor(event, "backColor", "#c47b5a") )

// const redo = document.getElementById("redo")
// redo.addEventListener("mousedown", () => addEditor(event, "redo") )

// const undo = document.getElementById("undo")
// undo.addEventListener("mousedown", () => addEditor(event, "undo") )

// const insertHorizontalRule = document.getElementById("hr")
// insertHorizontalRule.addEventListener("mousedown", () => addEditor(event, "insertHorizontalRule") )

















// window.addEventListener("resize", rez)

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`



const colorPaletteBg = qs(".color-palette-bg")
const colorChangeBg = getId("bg-color")
const colorLeftBg = colorChangeBg.getBoundingClientRect().left
const colorItemBg = qsa(".color-item-bg")


colorPaletteBg.style.left = colorLeftBg - 74 + "px";
colorPaletteBg.style.top =  "80px";

colorChangeBg.addEventListener("click", () => colorPaletteBg.style.display = "grid" )
document.addEventListener("click", hideBg)


function hideBg(e) {
  const target = e.target
  const secondClass = target.className.split(" ")[1]
  if (target.className != "color-palette-bg" && secondClass != "color-item-bg") {
    if (target.id != "bg-color" && target.alt != "text-back-color") {
      colorPaletteBg.style.display = "none";  
    }
  }
}

colorItemBg.forEach(item => {
  const bgColor = getStyle(item, "background-color")
  item.addEventListener("mousedown", e => {
    e.preventDefault()
    document.execCommand("backColor", false, rgb2hex(bgColor))
    if (rgb2hex(bgColor) != "#e1e54a") {
      console.log(rgb2hex(bgColor))
      document.execCommand("foreColor", false, "#ffffff")
    } else {
      document.execCommand("foreColor", false, "#dd5845")
    }
  })
})





const colorPalette = qs(".color-palette")
const colorChange = getId("color")
const colorLeft = colorChange.getBoundingClientRect().left
const colorItem = qsa(".color-item")



colorPalette.style.left = colorLeft - 74 + "px";
colorPalette.style.top =  "80px";

colorChange.addEventListener("click", () => colorPalette.style.display = "grid" )
document.addEventListener("click", hide)


function hide(e) {
  const target = e.target
  const secondClass = target.className.split(" ")[1]
  if (target.className != "color-palette" && secondClass != "color-item") {
    // alert(target.alt)
    if (target.id != "color" && target.alt != "text-color") {
      colorPalette.style.display = "none";  
    }
  }
}

colorItem.forEach(item => {
  const bgColor = getStyle(item, "background-color")
  // console.log(rgb2hex(bgColor))
  item.addEventListener("mousedown", e => {
    e.preventDefault()
    document.execCommand("foreColor", false, rgb2hex(bgColor))
  })
  // item.style.backgroundColor = 'black'
})














