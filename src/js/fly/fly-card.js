import setBefore from "../setBefore.js";
import { qsa, getStyleInt } from "../utility.js";
import flyingEffect from "./flyingEffect.js";
import saveCorner from "./saveCorner.js";

let x, y, rectLeft, rectTop,  arr, max, index;
let moved = false






export default function fly(box, sibling = ".box") {
  // console.count()
  // const newstBox = qsa(".box");
  // console.log(newstBox.length)

  // for (let i = 0; i < newstBox.length; i++) {
    // const box = newstBox

    box.addEventListener("mousedown", flyUp);// flying card

    box.addEventListener("keydown", () => {
      box.style.height = "auto";
    });

    box.addEventListener("focus", ()=>{
      // console.log("focused")
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
      if (e.altKey && e.ctrlKey) return
      if (box.getAttribute('data-lock') == 'true') return

      const shift = e.shiftKey
      const width = getStyleInt(box, "width");
      const height = getStyleInt(box, "height");

      rectLeft = Math.floor(box.getBoundingClientRect().left);
      rectTop = Math.floor(box.getBoundingClientRect().top);
      x = e.clientX;
      y = e.clientY;
      arr = [];

      if (x - rectLeft < width + 20 || y - rectTop < height + 20) {
        e.preventDefault()
        for (let k = 0; k < qsa(sibling).length; k++) {
          index = getStyleInt(qsa(sibling)[k], "z-index");
          arr.push(index);
        }

        max = Math.max(...arr);
        localStorage.setItem('max', max)

        if (!shift) {
          // if (max < 100) {
            box.style.zIndex = max + 1;
          // }
          //  else {
          //   for (let k = 0; k < qsa(sibling).length; k++) {
          //     localStorage.setItem(`index${k}`, localStorage.getItem(`index${k}`) - 10);
          //     qsa(sibling)[k].style.zIndex = localStorage.getItem(`index${k}`);
          //   }
          // }
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
      box.style.boxShadow = "0 30px 50px 0 var(--shadow)";

      const mouseHor = e.clientX - (x - rectLeft);
      const mouseVer = e.clientY - (y - rectTop);
  
      box.style.left = `${mouseHor}px`;
      box.style.top = `${mouseVer}px`;

      flyingEffect(e, box)
    }




  
    //  ===================================================================
    //  ========================= FlyDown =================================
    //  ===================================================================
    function flyDown() {
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
      if (moved == false) {
        container.style.userSelect = "auto";
        box.setAttribute('contenteditable', '')
        box.focus()
        box.classList.add("selected")
      } else {
        box.setAttribute('contenteditable', 'false')
        setBefore()
      }
      moved = false
      
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);
      
      saveCorner(box)
    }
  // }
}