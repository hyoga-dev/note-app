import flyingEffect from "./flyingEffect.js";
import saveCorner from "./saveCorner.js";

let box = document.querySelectorAll(".box");
const rotateSpeed = 1.3;
let a, b, rectLeft, rectTop,  arr;





export default function() {
  
  for (let i = 0; i < box.length; i++) {
    
    let box = document.querySelectorAll(".box")[i];
    box.addEventListener("mousedown", flyUp); // flying card
  




    
    // =========================================================================
    // ========================= FlyUp =========================================
    // =========================================================================
    function flyUp(e) {

      let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
      a = e.clientX;
      b = e.clientY;
      
      // <-- indexing
      arr = [];
      for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
        index = parseInt(getComputedStyle(document.querySelectorAll(".box")[k]).getPropertyValue("z-index"));
        arr.push(index);
      } 

      let max = Math.max(...arr);
      rectLeft = Math.floor(box.getBoundingClientRect().left);
      rectTop = Math.floor(box.getBoundingClientRect().top);
      // indexing -->
  
      
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
      // normalise index -->
      
      // add fly effect --
      // box.style.cursor = "grabbing";
      // box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
  
      // add event handler
      window.addEventListener("mousemove", fly);
      window.addEventListener("mouseup", flyDown);
    }






  
    //  ================================================================
    //  ========================= Fly ==================================
    //  ================================================================
    function fly(e) {
  

      box.style.cursor = "grabbing";
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
      box.style.cursor = "grab";
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
      
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);
      
      saveCorner(box)
    }
  }
  
  }
  
  
  
  








  
  
  
  // let index1 = getComputedStyle(box[0]).getPropertyValue("z-index");
  // let index2 = getComputedStyle(box[1]).getPropertyValue("z-index");
  // let index3 = getComputedStyle(box[2]).getPropertyValue("z-index");
  // let index4 = getComputedStyle(box[3]).getPropertyValue("z-index");




      // document.getElementById("demo").innerHTML =
      //   "Box number : " + 0 + ", have index of: " + index1;
      // document.getElementById("demo2").innerHTML =
      //   "Box number : " + 1 + ", have index of: " + index2;
      // document.getElementById("demo3").innerHTML =
      //   "Box number : " + 2 + ", have index of: " + index3;
      // document.getElementById("demo4").innerHTML =
      //   "Box number : " + 3 + ", have index of: " + index4;