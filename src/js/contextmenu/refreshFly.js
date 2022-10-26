import flyingEffect from "../fly/flyingEffect.js";
import saveCorner from "../fly/saveCorner.js";
import { qsa } from "../utility.js";

const rotateSpeed = 1.3;
let a, b, rectLeft, rectTop,  arr, moved;

// let content = localStorage.getItem("arr").split(",")






export default function fly() {
  
  let bix = qsa(".box");
  for (let i = 0; i < bix.length; i++) {
    
    const box = qsa(".box")[i];
    
    

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
      if (a - rectLeft < width - 2 || b - rectTop < height - 2 ) {
        e.preventDefault()

        // <-- indexing
        arr = [];
        for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
          index = parseInt(getComputedStyle(document.querySelectorAll(".box")[k]).getPropertyValue("z-index"));
          arr.push(index);
        } 
        let max = Math.max(...arr);
        
        
        // <-- normalise index
        if (max < 100) {
          box.style.zIndex = max + 1;
          localStorage.setItem(`index${i}`, max);
        } else {
          for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
            // console.log(localStorage.getItem(`index${k}`));
            localStorage.setItem(`index${k}`, localStorage.getItem(`index${k}`) - 10);
            document.querySelectorAll(".box")[k].style.zIndex = localStorage.getItem(`index${k}`);
          }}
        window.addEventListener("mousemove", fly);
        window.addEventListener("mouseup", flyDown);



      }
    }



    // hapus(box)


  
    //  ================================================================
    //  ========================= Fly ==================================
    //  ================================================================
    function fly(e) {
  
      moved = true;
      // box.style.cursor = "move";
      box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";

      const mouseHor = e.clientX - (a - rectLeft),
            mouseVer = e.clientY - (b - rectTop);
  
      box.style.left = `${mouseHor}px`;
      box.style.top = `${mouseVer}px`;
  
      localStorage.setItem(`top${[i]}`, mouseVer + "px");
      localStorage.setItem(`left${[i]}`, mouseHor + "px");
  
      flyingEffect(e, box, rotateSpeed)
    }




  
    //  ===================================================================
    //  ========================= FlyDown =================================
    //  ===================================================================
    function flyDown() {
      // let container = document.getElementById("container")

      if (moved != true) {
        box.focus()
      }
      moved = false
      // box.style.cursor = "pointer";
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
      
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);
      
      saveCorner(box)
    }
  }
  
  }