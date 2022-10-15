// import fly from "./fly-card.js"
const rotateSpeed = 1.3;
let boxNum = 3;

export default function addCard(e) {
  let a, b, rectLeft, rectTop, prevEvent, currentEvent, arr;
  boxNum++
  const para = document.createElement("div");
  const node = document.createTextNode(boxNum);
  
  para.appendChild(node);
  para.classList.add("box");
  para.style.opacity = '0';
  para.style.zIndex = '100';
  
  container.appendChild(para);

  

  let box = document.querySelectorAll(".box")
  let newBox = box[box.length - 1]
  a = e.clientX;
  b = e.clientY;
  const btnTop = parseInt( getComputedStyle(document.getElementById("btn")).getPropertyValue("top"))
  const btnLeft = parseInt( getComputedStyle(document.getElementById("btn")).getPropertyValue("left"))

  newBox.style.left = `${btnLeft - 100}px`;
  newBox.style.top = `${btnTop - 50}px`;

  rectLeft = Math.floor(newBox.getBoundingClientRect().left);
  rectTop = Math.floor(newBox.getBoundingClientRect().top);

  function fix() {
  
  const mouseHor = e.clientX ;
  const mouseVer = e.clientY ;
  
  newBox.style.left = `${mouseHor - 100}px`;
  newBox.style.top = `${mouseVer - 50}px`;
  console.log(rectLeft) 
  // newBox.addEventListener("mousedown", flyUp); // flying card
  
  }
  fix()





window.addEventListener("mousemove", newFly)



function newFly(e) {

  newBox.style.cursor = "grabbing";
  newBox.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
  newBox.style.opacity = "1";
  window.addEventListener("mouseup", newFlyDown);
  
  let mouseHor = e.clientX - (a - rectLeft),
      mouseVer = e.clientY - (b - rectTop);

  newBox.style.left = `${mouseHor}px`;
  newBox.style.top = `${mouseVer}px`;

  console.log(rectLeft)
  // localStorage.setItem(`top${[j]}`, mouseVer + "px");
  // localStorage.setItem(`left${[j]}`, mouseHor + "px");
  
  // * Wosh
  function wosh() {
    currentEvent = e;
    if (prevEvent && currentEvent) {
      var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
      var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);

      const mx = movementX * 1.5;
      const my = movementY * -1.5;
      if (mx < 25 && mx > -25 && my < 25 && my > -25) {
        newBox.style.transform = `rotateX(${my / rotateSpeed}deg) rotateY(${mx / rotateSpeed}deg)`;
      }
    }

    prevEvent = currentEvent;
  }
  wosh();

}



function newFlyDown() {

  newBox.style.cursor = "grab";
  newBox.style.boxShadow = "none";
  newBox.style.transform = `rotateX(0) rotateY(0)`;
  const btn = document.querySelector("#btn")
  btn.style.backgroundColor = "#f0f0f0";
  btn.addEventListener("mouseenter", () =>{
    btn.style.backgroundColor = "rgb(219, 224, 230)";
  })
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#f0f0f0";
  })
  
  window.removeEventListener("mousemove", newFly);
  window.removeEventListener("mouseup", newFlyDown);

  const top = parseInt(getComputedStyle(newBox).getPropertyValue("top"));
  const left = parseInt(getComputedStyle(newBox).getPropertyValue("left"));
  const container = document.querySelector(".container");
  const boxWidth = parseInt(getComputedStyle(newBox).getPropertyValue("width"));
  const boxHeight = parseInt(getComputedStyle(newBox).getPropertyValue("height"));
  const conHeight = parseInt(getComputedStyle(container).getPropertyValue("height"));
  const conWidth = parseInt(getComputedStyle(container).getPropertyValue("width"));
  
  if (top < 0 && left > conWidth - boxWidth) {
    newBox.style.top = `0`;
    newBox.style.left = `${conWidth - boxWidth}px`;
    // localStorage.setItem(`top${[j]}`, `0`);
    // localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
    return;
  } else if (top > conHeight - boxHeight && left < 0) {
    newBox.style.top = `${conHeight - boxHeight}px`;
    newBox.style.left = `0`;
    // localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
    // localStorage.setItem(`left${[j]}`, `0`);
    return;
  } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
    newBox.style.top = `${conHeight - boxHeight}px`;
    newBox.style.left = `${conWidth - boxWidth}px`;
    // localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
    // localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
    return;
  } else if (top < 0 && left < 0) {
    newBox.style.top = "0";
    newBox.style.left = "0";
    // localStorage.setItem(`top${[j]}`, `0`);
    // localStorage.setItem(`left${[j]}`, `0`);
    return;
  } else if (top < 0) {
    newBox.style.top = "0";
    // localStorage.setItem(`top${[j]}`, `0`);
    return;
  } else if (left < 0) {
    newBox.style.left = "0";
    // localStorage.setItem(`left${[j]}`, `0`);
    return;
  } else if (top > conHeight - boxHeight) {
    newBox.style.top = `${conHeight - boxHeight}px`;
    // localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
    return;
  } else if (left > conWidth - boxWidth) {
    newBox.style.left = `${conWidth - boxWidth}px`;
    // localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
    return;
  }

}

































// fly()

for (let j = 0; j < document.querySelectorAll(".box").length; j++ ){
  
  let box = document.querySelectorAll(".box")[j];
  box.addEventListener("mousedown", flyUp); // flying card
    
    // * =========================================================================
    // * ========================= FlyUp =========================================
    // * =========================================================================
    function flyUp(e) {
      box = document.querySelectorAll(".box")[j];
      let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
      a = e.clientX;
      b = e.clientY;
      
      // <-- indexing
      arr = [];
      // add index order
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
        localStorage.setItem(`index${j}`, max);
      } else {
        for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
          console.log(localStorage.getItem(`index${k}`));
          localStorage.setItem(`index${k}`, localStorage.getItem(`index${k}`) - 50);
          document.querySelectorAll(".box")[k].style.zIndex = localStorage.getItem(`index${k}`);
        }}
      // normalise index -->
      
      // add fly effect --
      box.style.cursor = "grabbing";
      box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
  
      // add event handler
      window.addEventListener("mousemove", fly);
      window.addEventListener("mouseup", flyDown);
      // ========================================================
      document.getElementById("demo5").innerHTML = "Arr : " + arr;
    }
  
    // * =========================================================================
    // * ========================= Fly ===========================================
    // * =========================================================================
    function fly(e) {
      box = document.querySelectorAll(".box")[j];
  
      let mouseHor = e.clientX - (a - rectLeft),
          mouseVer = e.clientY - (b - rectTop);
  
      box.style.left = `${mouseHor}px`;
      box.style.top = `${mouseVer}px`;
  
      localStorage.setItem(`top${[j]}`, mouseVer + "px");
      localStorage.setItem(`left${[j]}`, mouseHor + "px");
  
      // * Wosh
      function wosh() {
        currentEvent = e;
        if (prevEvent && currentEvent) {
          var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
          var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
  
          const mx = movementX * 1.5;
          const my = movementY * -1.5;
          if (mx < 25 && mx > -25 && my < 25 && my > -25) {
            box.style.transform = `rotateX(${my / rotateSpeed}deg) rotateY(${mx / rotateSpeed}deg)`;
          }
        }
  
        prevEvent = currentEvent;
      }
      wosh();
    }
  
    // * =========================================================================
    // * ============================ FlyDown ====================================
    // * =========================================================================
    function flyDown() {
      
      box = document.querySelectorAll(".box");
      box = document.querySelectorAll(".box")[j];
      box.style.cursor = "grab";
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;
  
  
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);
  
      const top = parseInt(getComputedStyle(box).getPropertyValue("top"));
      const left = parseInt(getComputedStyle(box).getPropertyValue("left"));
      const container = document.querySelector(".container");
      const boxWidth = parseInt(getComputedStyle(box).getPropertyValue("width"));
      const boxHeight = parseInt(getComputedStyle(box).getPropertyValue("height"));
      const conHeight = parseInt(getComputedStyle(container).getPropertyValue("height"));
      const conWidth = parseInt(getComputedStyle(container).getPropertyValue("width"));
  
        if (top < 0 && left > conWidth - boxWidth) {
          box.style.top = `0`;
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`top${[j]}`, `0`);
          localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
          return;
        } else if (top > conHeight - boxHeight && left < 0) {
          box.style.top = `${conHeight - boxHeight}px`;
          box.style.left = `0`;
          localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
          localStorage.setItem(`left${[j]}`, `0`);
          return;
        } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
          box.style.top = `${conHeight - boxHeight}px`;
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
          localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
          return;
        } else if (top < 0 && left < 0) {
          box.style.top = "0";
          box.style.left = "0";
          localStorage.setItem(`top${[j]}`, `0`);
          localStorage.setItem(`left${[j]}`, `0`);
          return;
        } else if (top < 0) {
          box.style.top = "0";
          localStorage.setItem(`top${[j]}`, `0`);
          return;
        } else if (left < 0) {
          box.style.left = "0";
          localStorage.setItem(`left${[j]}`, `0`);
          return;
        } else if (top > conHeight - boxHeight) {
          box.style.top = `${conHeight - boxHeight}px`;
          localStorage.setItem(`top${[j]}`, `${conHeight - boxHeight}px`);
          return;
        } else if (left > conWidth - boxWidth) {
          box.style.left = `${conWidth - boxWidth}px`;
          localStorage.setItem(`left${[j]}`, `${conWidth - boxWidth}px`);
          return;
        }
    }

  }
}