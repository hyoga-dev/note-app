import dragMe from "./js/fly/dragMe.js";
import fly from "./js/fly/fly-card.js";
import DocumentRightClick from "./js/documentRightClick.js";
import Menu from "./js/menu.js";
import selectOnDrag from "./js/selectOnDrag.js";
import setting from "./js/setting.js";
import color from "./js/color.js";
import addClick from "./js/addClick.js";
import setBefore from "./js/setBefore.js";
import { qsa, getId, qs } from "./js/utility.js";
import toPdf from "./js/toPdf.js";
import detectCursor from "./js/detectCursor.js";

const btn = getId("btn")
const pdfBtn = getId("to-pdf")
btn.addEventListener("mousedown", dragMe)
pdfBtn.addEventListener("click", toPdf)
container.addEventListener('keyup', detectCursor)
container.addEventListener('click', detectCursor)

document.onkeyup = () => {
  localStorage.setItem("container", getId('container').innerHTML)
}





const linkBtn = document.getElementById('link')
const imgBtn = getId('image')
const linkPop = qs('.add-link-pop')
const imgPop = qs('.image')
const linkInput = document.getElementById('input-link')
const imageInput = document.getElementById('input-image')
const addLinkBtn = document.getElementById('add-link-btn')
const addImageBtn = document.getElementById('add-image-btn')
const select = document.getSelection();
const box = qsa('.box')
const anchor = document.getElementsByTagName('a')
const img = document.getElementsByTagName('IMG')
let activeElem;
let link = [] ;

linkBtn.addEventListener('mousedown', unhideLinkPop)
imgBtn.addEventListener('mousedown', unhideImgPop)
addLinkBtn.addEventListener('mousedown', addLink)
addImageBtn.addEventListener('mousedown', addImage)

function unhideLinkPop(e) {
  e.preventDefault()
  
  for (let i = 0; i < select.rangeCount; i++) {
    link[i] = select.getRangeAt(i);
  }

  linkPop.classList.toggle('unhide')
}

function unhideImgPop(e) {
  e.preventDefault()
  
  for (let i = 0; i < select.rangeCount; i++) {
    link[i] = select.getRangeAt(i);
  }

  imgPop.classList.toggle('unhide')
}

function addLink(e) {
  e.preventDefault()
  select.removeAllRanges()
  select.addRange(link[0])
  
  let linkValue = linkInput.value
  if (!/^https:\/\//.test(linkInput.value) && !/^http:\/\//.test(linkInput.value)) {
    linkValue = 'https://' + linkInput.value
  }

  document.execCommand("createLink", false, linkValue)
  for (const item of anchor) {
    item.setAttribute('title', 'Ctrl +  Alt + click to open')
  }
  
  linkInput.value = '';
  // linkPop.classList.remove('unhide')
}

function addImage(e) {
  e.preventDefault()
  select.removeAllRanges()
  select.addRange(link[0])
  

  document.execCommand("insertImage", false, imageInput.value)
  for (const item of img) {
    if (item.id == '') {
      item.style.width = '100%'
      item.style.objectFit = 'contain'
    }
  }
  
  imageInput.value = '';
}

  document.addEventListener("keydown", (e) => {
    const ctrl = e.ctrlKey
    const alt = e.altKey
    if (alt && ctrl) {
      activeElem = document.activeElement
      box.forEach( item => {
        item.setAttribute('contenteditable', false)
      })
    
      anchor.forEach( item => {
        item.style.cursor = 'pointer'
        item.removeEventListener('click', preventLink)
      })
    }
  })
  
  
  document.addEventListener("keyup", (e) => {

    anchor.forEach( item => {
      item.style.cursor = 'default'
      item.addEventListener('click', preventLink)
    })

    if (activeElem == undefined) return
    if (document.activeElement.tagName == "BODY") return
    box.forEach( item => {
      item.setAttribute('contenteditable', true)
    })
    activeElem.focus()
  })

  anchor.forEach( item => {
    item.style.cursor = 'default'
    item.addEventListener('click', preventLink)
  })

  function preventLink(e) {
      e.preventDefault()
      return
  }


















const bgBtn = getId('bg-color')
let col = []

bgBtn.addEventListener("click", getBgRange)

function getBgRange(e) {
  e.preventDefault()
  
  for (let i = 0; i < select.rangeCount; i++) {
    col[i] = select.getRangeAt(i);
  }
}




const bgColor = getId("col-inp-back")
bgColor.addEventListener("change", addBgColor)

function addBgColor() {
  if (col[0] == undefined) return
  select.removeAllRanges()
  select.addRange(col[0])
  document.execCommand("backColor", false, bgColor.value)
  document.execCommand("foreColor", false, '#ffffff')
}


// ---------------------------------------------------------
const foreBtn = getId('color')
// let col = []

foreBtn.addEventListener("click", getForeRange)

function getForeRange(e) {
  e.preventDefault()
  
  for (let i = 0; i < select.rangeCount; i++) {
    col[i] = select.getRangeAt(i);
  }
}




const foreColor = getId("col-inp")
foreColor.addEventListener("change", addForeColor)

function addForeColor() {
  if (col[0] == undefined) return
  select.removeAllRanges()
  select.addRange(col[0])
  // document.execCommand("backColor", false, bgColor.value)
  document.execCommand("foreColor", false, foreColor.value)
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


