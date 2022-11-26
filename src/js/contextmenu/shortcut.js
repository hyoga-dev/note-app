import { updateDb } from "../transferData.js";
import { redo, undo } from "../undoRedo.js";
import { qsa } from "../utility.js";


export default function shortCut(e) {
  const ctrl = e.ctrlKey;
  const shift = e.shiftKey;
  const keys = e.key;


  if (keys == "Delete") {
    this.removeSelected();
  }
  
  if (ctrl) {
    if (keys == "s" || keys == "S") {
      e.preventDefault();
      if (localStorage.getItem("uid") != null) {
        updateDb(localStorage.getItem("uid"), container.innerHTML)
        alert("saved")
      }

    } if (keys == "a" || keys == "A") {
      e.preventDefault();
      const box = qsa(".box")
      box.forEach(item => {
        item.classList.add("selected")
      }) 

    } if (keys == "l" || keys == "L") {
      e.preventDefault();
      qsa('.selected').forEach( item => {
        item.classList.remove("selected")
        item.setAttribute('contenteditable', false)
        item.setAttribute('data-lock', true)
      })
    } 
    // if (keys == "l" || keys == "L") {
    //   e.preventDefault();
    //   qsa('.box').forEach( item => {
    //     item.setAttribute('data-lock', false)
    //   })
    //   localStorage.setItem("container", container.innerHTML)
    // } 


    // not executed when focus on box
    if (document.activeElement.tagName != "BODY") return
    if (keys == "z" || keys == "Z") {
        undo()
    } if (keys == "y" || keys == "Y") {
        redo()
    } 
  } 

  if (ctrl && shift) {
    if (keys == "C" || keys == "c") {
      e.preventDefault();
      
      const txt = []
      qsa('.selected').forEach( item => {
        txt.push(item.cloneNode(true));
      })
      this.copiedText = txt
      
    } if (keys == "V" || keys == "v") {
      e.preventDefault();
      this.pasteKey();

    } if (keys == "l" || keys == "L") {
      e.preventDefault();
      const box = qsa(".box")
      box.forEach(item => {
        if (item.getAttribute('data-lock') == 'true') {
          item.classList.add("selected")
        } 
        item.setAttribute('data-lock', false)
        // console.log(item)
      }) 

    } 
  } 

  
  qsa('.selected').forEach( item => {
    if (item.getAttribute('data-lock') == 'true') return

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


    // if (document.activeElement.tagName != "BODY") return
    
  })

}
