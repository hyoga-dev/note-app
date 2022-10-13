

var prevEvent, currentEvent;
document.documentElement.onmousemove=function(event){
  currentEvent=event;
}

// var prevSpeed = 0;

setInterval(function(){
  // console.log(prevEvent)
  if(prevEvent && currentEvent){
    var movementX=Math.floor(currentEvent.screenX-prevEvent.screenX);
    var movementY=Math.floor(currentEvent.screenY-prevEvent.screenY);
    // var movement=Math.sqrt(movementX*movementX+movementY*movementY);

    if (movementX > 50 && movementY > 50) {
      
      document.getElementById("movementXY").innerText =( movementX + movementY )/ 2;

    }

    document.getElementById("movementX").innerText=movementX;
    document.getElementById("movementY").innerText=movementY;
  }
  prevEvent=currentEvent;
},100);


































// var prevEvent, currentEvent;
// document.documentElement.onmousemove=function(event){
//   currentEvent=event;
// }

// var maxSpeed = 0,
//     prevSpeed = 0, 
//     maxPositiveAcc = 0,
//     maxNegativeAcc = 0;
// setInterval(function(){
//   // console.log(prevEvent)
//   if(prevEvent && currentEvent){
//     var movementX=Math.floor(currentEvent.screenX-prevEvent.screenX);
//     var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
//     var movement=Math.sqrt(movementX*movementX+movementY*movementY);
    
//     document.getElementById("movementX").innerText=movementX;
//     document.getElementById("movementY").innerText=movementY;
//     document.getElementById("movement").innerText=Math.round(movement);
    
//     speed=movement/100ms= movement/0.1s= 10*movement/s
//     var speed = 10*movement;//current speed
    
//     document.getElementById("speed").innerText=Math.round(speed);
//     document.getElementById("maxSpeed").innerText=Math.round(
//       speed>maxSpeed?(maxSpeed=speed):maxSpeed
//     );
    
//     var acceleration = 10*(speed-prevSpeed);
    
//     document.getElementById("acceleration").innerText=Math.round(
//       acceleration
//     );
    
//     if(acceleration>0){
//       document.getElementById("maxPositiveAcceleration").innerText=Math.round(
//       acceleration>maxPositiveAcc?(maxPositiveAcc=acceleration):maxPositiveAcc
//     );
//     }
//     else{
//       document.getElementById("maxNegativeAcceleration").innerText=Math.round(
//       acceleration<maxNegativeAcc?(maxNegativeAcc=acceleration):maxNegativeAcc
//     );
//     }
//   }
  
//   prevEvent=currentEvent;
//   prevSpeed=speed;
// },100);