
// const fltd = 10;
let a, b, rectLeft, rectTop, prevEvent, currentEvent;


// * FlyUp
export default function flyUp(e) {
  a = e.clientX;
  b = e.clientY;
  
  rectLeft = Math.floor(box.getBoundingClientRect().left);
  rectTop = Math.floor(box.getBoundingClientRect().top);
  currentEvent = e;

  box.style.cursor = "grabbing";
  box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";

  window.addEventListener("mousemove", fly);
  window.addEventListener("mouseup", flyDown);
} 



// * FlyDown
function flyDown() {
  box.style.cursor = "grab";
  box.style.boxShadow = "none";

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



// * Fly
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

    document.getElementById("demo").innerText = "movement Y : " + movementX;
    document.getElementById("demo2").innerText = "movement X : " + movementY;
    // const top = getComputedStyle(box).getPropertyValue('top')
    // const left = getComputedStyle(box).getPropertyValue('left')
    
    console.log("Y is : ", movementY)
    console.log("X is : ", movementX)

    // document.getElementById("demo").innerText = left;
    // document.getElementById("demo2").innerText = "Top is: " + top;

    prevEvent = currentEvent;
  }
  wosh();
}

