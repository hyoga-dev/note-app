
// importing
// import fly from "./js/fly.js";

// init
const bix = document.querySelectorAll(".box");
let a, b, rectLeft, rectTop, prevEvent, currentEvent;

// even handler


for (let i = 0; i < bix.length; i++ ) {
  
  let box = bix[i]
  // console.log(box)  
  
  
  box.addEventListener("mousedown", flyUp); // flying card
  // box.innerHTML = "Bambang";
  





// * FlyDown =================================================================
  function flyUp(e) {
    let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"))
    a = e.clientX;
    b = e.clientY;
    
    let text = ""
    
    for (let j = 0; j < bix.length; j++) {
  
      let bux = bix[j]
      index = parseInt(getComputedStyle(bux).getPropertyValue("z-index"))
      console.log(index)
      
    }

    rectLeft = Math.floor(box.getBoundingClientRect().left);
    rectTop = Math.floor(box.getBoundingClientRect().top);
    // currentEvent = e;
  
    document.getElementById("demo2").innerHTML = "Fly : " + text;

    box.style.zIndex = index + 1; 
    box.style.cursor = "grabbing";
    box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
  
    window.addEventListener("mousemove", fly);
    window.addEventListener("mouseup", flyDown);
  } 
  






   // * Fly =================================================================
   function fly(e) {
    const mouseHor = e.clientX,
          mouseVer = e.clientY;
  
    box.style.left = `${mouseHor - (a - rectLeft)}px`;
    box.style.top = `${mouseVer - (b - rectTop)}px`;
  
    // * Wosh
    function wosh() {
  
      currentEvent = e;
      if (prevEvent && currentEvent) {
        var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
        var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
  
        const mx = movementX * 1.5;
        const my = movementY * -1.5;
        if (mx < 40 && mx > -40 && my < 40 && my > -40) {
          box.style.transform = `rotateX(${my / 1.2}deg) rotateY(${mx / 1.2}deg)`;
        } 
      }

      prevEvent = currentEvent;
    }
    wosh();
  }
  






  // * FlyDown =================================================================
  function flyDown() {
    box.style.cursor = "grab";
    box.style.boxShadow = "none";
    let index = getComputedStyle(box).getPropertyValue("z-index")

    document.getElementById("demo").innerHTML = "Drop : " + index;

    // box.style.zIndex = "auto"; 

  
    window.removeEventListener("mousemove", fly);
    window.removeEventListener("mouseup", flyDown);
  
    const top = parseInt(getComputedStyle(box).getPropertyValue('top')),
          left = parseInt(getComputedStyle(box).getPropertyValue('left')) ,
          container = document.querySelector(".container"),
          boxWidth = parseInt(getComputedStyle(box).getPropertyValue('width')), 
          boxHeight = parseInt(getComputedStyle(box).getPropertyValue('height')), 
          conHeight = parseInt(getComputedStyle(container).getPropertyValue("height")),
          conWidth = parseInt(getComputedStyle(container).getPropertyValue("width"));
  
    if (top < 0 &&  left > conWidth - boxWidth) {
      box.style.top = `0`;
      box.style.left = `${conWidth - boxWidth}px`;
      return
  
    } else if (top > conHeight - boxHeight &&  left < 0) {
      box.style.top = `${conHeight - boxHeight}px`;
      box.style.left = `0`;
      console.log(2)
      return
  
    } else if (top > conHeight - boxHeight &&  left > conWidth - boxWidth) {
      box.style.top = `${conHeight - boxHeight}px`;
      box.style.left = `${conWidth - boxWidth}px`;
      console.log(2)
      return
  
    } else if (top < 0 && left < 0) {
      box.style.top = "0";
      box.style.left = "0";
      return
  
    } else if ( top < 0) {
      box.style.top = "0" 
      return
  
    } else if (left < 0) {
      box.style.left = "0"
      return
  
    } else if (top > conHeight - boxHeight) {
      box.style.top = `${conHeight - boxHeight}px` 
      return
  
    } else if (left > conWidth - boxWidth) {
      box.style.left = `${conWidth - boxWidth}px` 
      return
    }
  }
}


























































// document.addEventListener("onmousemove", (event) => {
//   currentEvent = event;
// })

// setInterval(function () {
//   // console.log(prevEvent)
//   if (prevEvent && currentEvent) {
//     var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
//     var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
//     // var movement=Math.sqrt(movementX*movementX+movementY*movementY);
//     let rot= []
//     movementX > 25 && movementY > 25 ? rot = [-1,1] 
//     : movementX < -25 && movementY > 25 ? rot = [-1,-1] 
//     : movementX < -25 && movementY < -25 ? rot = [1,-1] 
//     : movementX > 25 && movementY < -25 ? rot = [1,1] 
//     : rot = [0,0]
    
//     box.style.transform = `rotate3d(${rot[0]}, ${rot[1]}, 0, 20deg )`;
//   }
//   prevEvent = currentEvent;
// }, 100);
















// const fltd = 10;
// let a, b, rectLeft, rectTop;

// function flyUp(e) {
//   a = e.clientX;
//   b = e.clientY;

//   rectLeft = Math.floor(box.getBoundingClientRect().left);
//   rectTop = Math.floor(box.getBoundingClientRect().top);
  
//   // box.style.transform += `translate(${fltd}px, -${fltd}px)`; 
//   // box.style.transform += `scale(105%)`; 
//   box.style.cursor = "grabbing";
//   box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)"
  
//   document.addEventListener("mousemove", fly)
//   document.addEventListener("mouseup", flyDown);
// }

// function flyDown() {
//   box.style.cursor = "grab";
//   // box.style.transform += `scale(95%)`; 
//   box.style.boxShadow = "none"
//   // box.style.transform += `translate(-${fltd}px, ${fltd}px)`;
  
//   document.removeEventListener("mousemove", fly)
//   document.removeEventListener("mouseup", flyDown)
// }

// function fly(e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   // const b = x - rect
//   // const b = box.clientY;
//   // console.log(x," ",y)
//   // console.log(rect)
//   box.style.left = `${x - (a - rectLeft + fltd)}px`
//   box.style.top = `${y - (b - rectTop + fltd)}px`
// }