import setBefore from "../setBefore.js";
import { qsa } from "../utility.js";

export default function addContext (e) {
    
  const secondClass = e.target.className.split(" ")[1]
  if (e.target.id == "delete" || secondClass == "side-delete") {
    this.removeSelected()
  } else if (e.target.id == "copy") {
    e.preventDefault();

    const txt = []
    qsa('.selected').forEach( item => {
      txt.push(item.cloneNode(true));
    })
    this.copiedText = txt

  } else if (e.target.id == "paste") {
    this.paste(e)
    this.refreshEvent()
  } else if (e.target.id == "lock") {
    e.preventDefault()
    const selected = qsa(".selected")
    selected.forEach(item => {
      if (item.getAttribute('data-lock') == 'true') {
        item.classList.remove("selected")
      } 
      item.setAttribute('contenteditable', false)
      item.setAttribute('data-lock', true)
    }) 
    localStorage.setItem("container", container.innerHTML)
    setBefore()
  } else if (e.target.id == "unlock") {
    e.preventDefault()
    const selected = qsa(".selected")
    selected.forEach(item => {
      if (item.getAttribute('data-lock') == 'true') {
        item.classList.add("selected")
      } 
      item.setAttribute('contenteditable', true)
      item.setAttribute('data-lock', false)
    })
  } else if (secondClass == "side-copy") {
    e.preventDefault();

    const txt = []
    qsa('.selected').forEach( item => {
      txt.push(item.cloneNode(true));
    })
    this.copiedText = txt
  } else if (secondClass == "side-delete") {
    e.preventDefault()
    this.removeSelected()
  } 

  this.menu.style.display = 'none';
}