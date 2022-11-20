import { redo, undo } from "../undoRedo.js";
import { qsa } from "../utility.js";


export default function shortCut(e) {
  const ctrl = e.ctrlKey;
  const shift = e.shiftKey;
  const keys = e.key;




  if (ctrl && shift) {
    if (keys == "C" || keys == "c") {
      e.preventDefault();
      if (document.activeElement.tagName != "BODY") {
        this.copiedText = document.activeElement.cloneNode(true);
      }
    } if (keys == "V" || keys == "v") {
      e.preventDefault();
      this.pasteKey();
    } 
  } 

  if (ctrl) {
    if (keys == "l" || keys == "L") {
      e.preventDefault();
      const selected = qsa(".selected")
      selected.forEach(selected => {
        selected.setAttribute("contenteditable", false);
      }) 
    } if (keys == "a" || keys == "A") {
      e.preventDefault();
      const card = qsa(".box")
      card.forEach(card => {
        card.classList.add("selected")
      }) 
    } 
    
    if (document.activeElement.tagName != "BODY") return
    if (keys == "z" || keys == "Z") {
        undo()
    } if (keys == "y" || keys == "Y") {
        redo()
    } if (keys == "Delete") {
      this.removeSelected();
    }
  } 
  
  if (keys == "ArrowUp") {
    const selected = qsa(".selected")
    if (selected.length > 1) {
      e.preventDefault()
      selected.forEach(selected => {
        const top = parseInt(getComputedStyle(selected).getPropertyValue("top"))
        
        selected.style.top = top - 5 + "px"
      }) 
    }
  }
  
  if (keys == "ArrowDown") {
    const selected = qsa(".selected")
    if (selected.length > 1) {
      e.preventDefault()
      selected.forEach(selected => {
        const top = parseInt(getComputedStyle(selected).getPropertyValue("top"))
    
        selected.style.top = top + 5 + "px"
      }) 
    }
  }

  if (keys == "ArrowLeft") {
    const selected = qsa(".selected")
    if (selected.length > 1) {
      e.preventDefault()
      selected.forEach(selected => {
        const left = parseInt(getComputedStyle(selected).getPropertyValue("left"))
    
        selected.style.left = left - 5 + "px"
      }) 
    }
  }
  
  if (keys == "ArrowRight") {
    const selected = qsa(".selected")
    if (selected.length > 1) {
      e.preventDefault()
      selected.forEach(selected => {
        const left = parseInt(getComputedStyle(selected).getPropertyValue("left"))
    
        selected.style.left = left + 5 + "px"
      }) 
    }
  }
}
