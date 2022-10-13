
// importing
import fly from "./js/fly.js";

// init
const box = document.getElementById("box");

// even handler
box.addEventListener("mousedown", fly); // flying card

// main

























































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