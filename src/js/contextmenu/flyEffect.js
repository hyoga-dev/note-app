// let prevEvent;
 
 
 export default function (e, box) {
  // for (let i = 0; i < outBox.length; i++) {
    const currentEvent = e;
    if (this.prevEvent && currentEvent) {
      var movementX = Math.floor(currentEvent.screenX - this.prevEvent.screenX);
      var movementY = Math.floor(currentEvent.screenY - this.prevEvent.screenY);
  
      const mx = movementX * 1.5;
      const my = movementY * -1.5;
      if (mx < 25 && mx > -25 && my < 25 && my > -25) {
        box.style.transform = `rotateX(${my / 1.3}deg) rotateY(${mx / 1.3}deg)`;
      }  
      // console.log(currentEvent.screenY)
      console.log("prev   : " + this.prevEvent.screenX)
      console.log("current: " + currentEvent.screenX)
    }
  // }
  this.prevEvent = currentEvent;
}