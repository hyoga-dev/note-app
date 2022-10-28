 
// let outBox = document.querySelectorAll(".box");
 
let prevEvent;
 
 
 export default function (e, box) {
  // for (let i = 0; i < outBox.length; i++) {
    const currentEvent = e;
    if (prevEvent && currentEvent) {
      var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
      var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
  
      const mx = movementX * 1.5;
      const my = movementY * -1.5;
      if (mx < 25 && mx > -25 && my < 25 && my > -25) {
        box.style.transform = `rotateX(${my / 1.3}deg) rotateY(${mx / 1.3}deg)`;
      }  
      // console.log("Flying effect FLY: " + mx)
    }
  // }

  prevEvent = currentEvent;
}