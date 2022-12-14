import flyingEffect from "./flyingEffect.js";
import saveCorner from "./saveCorner.js";
import Menu from "../menu.js";
import { getId } from "../utility.js";
import fly from "./fly-card.js";



const cm = new Menu("context-menu", ".box")
const container = getId("container")
const rotateSpeed = 1.3;
let before = []




export default function addCard(e) {

  let a, b, rectLeft, rectTop
  // , prevEvent, currentEvent, arr, moved;
  const para = document.createElement("div");

  para.classList.add("box");
  para.style.opacity = "0";
  para.style.zIndex = localStorage.getItem('max') + 1;

  container.appendChild(para);



  let box = document.querySelectorAll(".box");
  let boxLength = box.length - 1;
  let newBox = box[boxLength];
  // newBox.setAttribute('data-min-rows', 2)
  newBox.setAttribute('placeholder', 'type here...')
  // newBox.setAttribute('contenteditable', '')
  newBox.setAttribute('Spellcheck', false)
  newBox.style.resize = "both";



  a = e.clientX;
  b = e.clientY;

  const btn = document.getElementById("btn")
  const btnRectLeft = parseInt(btn.getBoundingClientRect().left);
  const btnRectTop = parseInt(btn.getBoundingClientRect().top);

  const btnTop = parseInt(
    getComputedStyle(document.getElementById("btn")).getPropertyValue("top")
  );
  const btnLeft = parseInt(
    getComputedStyle(document.getElementById("btn")).getPropertyValue("left")
  );

  newBox.style.left = `${btnLeft - 86}px`;
  newBox.style.top = `${btnTop }px`;

  // rectLeft = Math.floor(newBox.getBoundingClientRect().left);
  // rectTop = Math.floor(newBox.getBoundingClientRect().top);

  rectLeft = Math.floor(btnRectLeft - 60);
  rectTop = Math.floor(btnRectTop - 25);

  window.addEventListener("mousemove", newFly);




  // ---------------------------------------------------------------
  function newFly(e) {
    newBox.style.cursor = "grabbing";
    newBox.style.boxShadow = "0 30px 50px 0 var(--shadow)";
    newBox.style.opacity = "1";
    window.addEventListener("mouseup", newFlyDown);

    let mouseHor = e.clientX - (a - rectLeft),
      mouseVer = e.clientY - (b - rectTop);
      
      newBox.style.left = `${mouseHor}px`;
      newBox.style.top = `${mouseVer}px`;
      
      flyingEffect(e, newBox, rotateSpeed);
  }
  
  
  
  
  
  
  // ---------------------------------------------------------------
  function newFlyDown() {
    newBox.style.cursor = "default";
    newBox.style.boxShadow = "none";
    newBox.style.transform = `rotateX(0) rotateY(0)`;
    
    window.removeEventListener("mousemove", newFly);
    window.removeEventListener("mouseup", newFlyDown);

    if (sessionStorage.getItem("before") != null) {
      before = JSON.parse(sessionStorage.getItem("before"))
    }

    before.unshift(getId("container").innerHTML)
    sessionStorage.setItem("before", JSON.stringify(before))
    sessionStorage.setItem("after", "moved")
    getId("redo").style.opacity = "0.5"
    getId("undo").style.opacity = "1"

    cm.refreshEvent()
    saveCorner(newBox);
  }


  

  
  
  

  
  
  
  
  fly(newBox)
  // ---------------------------------------------------------------
//   for (let j = 0; j < document.querySelectorAll(".box").length; j++) {
//     let box = document.querySelectorAll(".box")[j];
//     box.addEventListener("mousedown", flyUp); // flying card

//     // box.addEventListener("mousedown", flyUp); // flying card
//     // box.addEventListener("keydown", () => {
//     //   box.style.height = "auto";
//     // }); // flying card
//     box.addEventListener("focus", ()=>{
//       box.removeEventListener('mousedown', flyUp)
//       box.style.cursor = "text";
//     })
    
//     box.addEventListener("blur", ()=>{
//       box.addEventListener  ('mousedown', flyUp)
//       box.style.cursor = "default";
//     })

//     // hapus(box)

//     // =========================================================================
//     // ========================= FlyUp =========================================
//     // =========================================================================
//     function flyUp(e) {
//       // box = document.querySelectorAll(".box")[j];
      
      
//       let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
//       let width = parseInt(getComputedStyle(box).getPropertyValue("width"));
//       let height = parseInt(getComputedStyle(box).getPropertyValue("height"));
//       rectLeft = Math.floor(box.getBoundingClientRect().left);
//       rectTop = Math.floor(box.getBoundingClientRect().top);
//       a = e.clientX;
//       b = e.clientY;
//       if (a - rectLeft < width + 20 || b - rectTop < height + 20) {
//         e.preventDefault()

//       // <-- indexing
//       arr = [];
//       // add index order
//       for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
//         index = parseInt(
//           getComputedStyle(
//             document.querySelectorAll(".box")[k]
//           ).getPropertyValue("z-index")
//         );
//         arr.push(index);
//       }
//       let max = Math.max(...arr);
//       // indexing -->

//       // <-- normalise index
//       const shift = e.shiftKey
//       if (!shift) {
//         // if (max < 100) {
//           box.style.zIndex = max + 1;
//           // localStorage.setItem(`index${j}`, max);
//         // } 
//         // else {
//         //   for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
//         //     localStorage.setItem(
//         //       `index${k}`,
//         //       localStorage.getItem(`index${k}`) - 1
//         //     );
//         //     document.querySelectorAll(".box")[k].style.zIndex =
//         //       localStorage.getItem(`index${k}`);
//         //   }
//         // }
//       }
//       // normalise index -->

//       // add fly effect --
//       // box.style.cursor = "grabbing";
//       // box.style.boxShadow = "0 30px 50px 0 rgba(94, 118, 145, 0.342)";

//       // add event handler
//       window.addEventListener("mousemove", fly);
//       window.addEventListener("mouseup", flyDown);
//     }
//     }





//     // =========================================================================
//     // ========================= Fly ===========================================
//     // =========================================================================
//     function fly(e) {
//       // box = document.querySelectorAll(".box")[j];
//       moved = true;


//       // box.style.cursor = "grabbing";
//       box.style.boxShadow = "0 30px 50px 0 var(--shadow)";

//       let mouseHor = e.clientX - (a - rectLeft),
//           mouseVer = e.clientY - (b - rectTop);

//       box.style.left = `${mouseHor}px`;
//       box.style.top = `${mouseVer}px`;

//       // * Wosh
//       function wosh() {

//         currentEvent = e;
//         if (prevEvent && currentEvent) {
//           var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
//           var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);

//           const mx = movementX * 1.5;
//           const my = movementY * -1.5;
//           if (mx < 25 && mx > -25 && my < 25 && my > -25) {
//             box.style.transform = `rotateX(${my / rotateSpeed}deg) rotateY(${mx / rotateSpeed}deg)`;
//           }
//         }

//         prevEvent = currentEvent;
//       }
//       wosh();


//       // flyingEffect(e, box, rotateSpeed);
//     }


// const menu = new Menu("context-menu", ".box")
// // refreshEvent

//     // =========================================================================
//     // ============================ FlyDown ====================================
//     // =========================================================================
//     function flyDown() {
//       box.style.boxShadow = "none";
//       box.style.transform = `rotateX(0) rotateY(0)`;

//       if (moved != true) {
//         container.style.userSelect = "auto";
//         box.setAttribute('contenteditable', '')
//         box.focus()
//         box.classList.add("selected")
//       } else {
//         box.setAttribute('contenteditable', 'false')
//         container.style.userSelect = "none";

//         if (sessionStorage.getItem("before") != null) {
//           before = JSON.parse(sessionStorage.getItem("before"))
//         }
  
//         before.unshift(getId("container").innerHTML)
//         sessionStorage.setItem("before", JSON.stringify(before))
//         sessionStorage.setItem("after", "moved")
//         getId("redo").style.opacity = "0.5"
//         getId("undo").style.opacity = "1"
//       }
//       moved = false

//       // box = document.querySelectorAll(".box");
//       // box = document.querySelectorAll(".box")[j];
//       // box.style.cursor = "grab";
      
      
//       window.removeEventListener("mousemove", fly);
//       window.removeEventListener("mouseup", flyDown);

//       saveCorner(box);
//       // refreshEvent()
//       menu.eventHandler()
//       menu.refreshEvent()

      
//     }



//   }
}
