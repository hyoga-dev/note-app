// import flyingEffect from "./flyEffect.js";
import saveCorner from "../fly/saveCorner.js";
import { qsa, getId } from "../utility.js";
let a, b, rectLeft, rectTop,  arr, moved, prevEvent;
let newArr = []






export default function fly() {
  let bix = qsa(".box");
  
    
  const box = qsa(".box")[bix.length - 1];
  box.addEventListener("mousedown", flyUp);// flying card


  box.addEventListener("keydown", () => {
    box.style.height = "auto";
  }); 
  
  box.addEventListener("focus", ()=>{
    box.removeEventListener('mousedown', flyUp)
    box.style.cursor = "text";
  })
  
  box.addEventListener("blur", ()=>{
    box.addEventListener  ('mousedown', flyUp)
    box.style.cursor = "default";
  })





  
  // =========================================================================
  // ========================= FlyUp =========================================
  // =========================================================================
  function flyUp(e) {

    box.style.resize = "both";
    let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
    let width = parseInt(getComputedStyle(box).getPropertyValue("width"));
    let height = parseInt(getComputedStyle(box).getPropertyValue("height"));
    rectLeft = Math.floor(box.getBoundingClientRect().left);
    rectTop = Math.floor(box.getBoundingClientRect().top);
    a = e.clientX;
    b = e.clientY;
    if (a - rectLeft < width + 20 || b - rectTop < height + 20) {
      e.preventDefault()

      // <-- indexing
      const shift = e.shiftKey
      if (!shift) {
        arr = [];
        for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
          index = parseInt(getComputedStyle(document.querySelectorAll(".box")[k]).getPropertyValue("z-index"));
          arr.push(index);
        } 
        let max = Math.max(...arr);
        box.style.zIndex = max + 1;
      }


      window.addEventListener("mousemove", fly);
      window.addEventListener("mouseup", flyDown);



    }
  }






  //  ================================================================
  //  ========================= Fly ==================================
  //  ================================================================
  function fly(e) {

    moved = true;
    box.style.boxShadow = "0 30px 50px 0 var(--box-border)";

    const mouseHor = e.clientX - (a - rectLeft);
    const mouseVer = e.clientY - (b - rectTop);

    box.style.left = `${mouseHor}px`;
    box.style.top = `${mouseVer}px`;

    // localStorage.setItem(`top${[i]}`, mouseVer + "px");
    // localStorage.setItem(`left${[i]}`, mouseHor + "px");

    const currentEvent = e;
    if (prevEvent && currentEvent) {
      var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
      var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
  
      const mx = movementX * 1.5;
      const my = movementY * -1.5;
      if (mx < 25 && mx > -25 && my < 25 && my > -25) {
        box.style.transform = `rotateX(${my / 1.3}deg) rotateY(${mx / 1.3}deg)`;
      }  
    }
    prevEvent = currentEvent;
    // this.flyEffect(e, box)
  }




  //  ===================================================================
  //  ========================= FlyDown =================================
  //  ===================================================================
  function flyDown() {


    box.style.boxShadow = "none";
    box.style.transform = `rotateX(0) rotateY(0)`;

    if (moved != true) {
      container.style.userSelect = "auto";
      box.setAttribute('contenteditable', '')
      box.focus()
      box.classList.add("selected")
    } else {
      box.setAttribute('contenteditable', 'false')
      container.style.userSelect = "none";

      if (sessionStorage.getItem("before") != null) {
        newArr = JSON.parse(sessionStorage.getItem("before"))
      }
  
      newArr.unshift(getId("container").innerHTML)
      sessionStorage.setItem("before", JSON.stringify(newArr))
      sessionStorage.setItem("after", "moved")
      getId("redo").style.opacity = "0.5"
      getId("undo").style.opacity = "1"
    }

    moved = false

    
    window.removeEventListener("mousemove", fly);
    window.removeEventListener("mouseup", flyDown);
    
    saveCorner(box)

  }
}
  
// }