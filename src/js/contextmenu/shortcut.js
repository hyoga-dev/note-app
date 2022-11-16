import { redo, undo } from "../undoRedo.js";
import { qsa } from "../utility.js";
// import removeSelected from "./removeSelected";


export default function shortCut(e) {
  const ctrl = e.ctrlKey;
  const shift = e.shiftKey;
  // const alt = e.altKey
  const keys = e.key;




// ==========================================
if (ctrl && shift) {
  if (keys == "C" || keys == "c") {
    e.preventDefault();
    if (document.activeElement.tagName != "BODY") {
      this.copiedText = document.activeElement.cloneNode(true);
    }
  }
} // ==========================================


// ==========================================
  if (ctrl && shift) {
    if (keys == "V" || keys == "v") {
      e.preventDefault();
      this.pasteKey();
      this.refreshEvent();
      this.refreshFly()
    }
  } // ==========================================


// ==========================================
  if (ctrl) {
    if (keys == "l" || keys == "L") {
      e.preventDefault();
      const selected = qsa(".selected")
      selected.forEach(selected => {
        selected.setAttribute("contenteditable", false);
      }) 

    }
  } // ==========================================

// ==========================================
  if (ctrl) {
    if (keys == "a" || keys == "A") {
      e.preventDefault();
      const card = qsa(".box")
      card.forEach(card => {
        card.classList.add("selected")
      }) 

    }
  } // ==========================================
  

// ==========================================
  if (ctrl && shift) {
    if (keys == "l" || keys == "L") {
      e.preventDefault();
      this.unlockAll();
    }
  } // ==========================================


// ==========================================
if (keys == "Delete") {
  this.removeSelected();
} // ==========================================

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

if (ctrl) {
  if (keys == "z" || keys == "Z") {
    if (document.activeElement.tagName == "BODY") {
      undo()
    }
  }
}

if (ctrl) {
  if (keys == "y" || keys == "Y") {
    if (document.activeElement.tagName == "BODY") {
      redo()
    }
  }
}


}
