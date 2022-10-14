





let box = document.querySelectorAll(".box");
let btn = document.getElementById("btn")

btn.addEventListener("click", add)



function add() {
  // let test = document.querySelectorAll(".box");
  let a, b, rectLeft, rectTop, prevEvent, currentEvent, arr;
  const para = document.createElement("div");
  const node = document.createTextNode("Hallo bambang");

  para.appendChild(node);
  para.classList.add("box");

  container.appendChild(para);
  // for (let j = 0; j < document.querySelectorAll(".box").length; j++ ){
  //   let box = document.querySelectorAll(".box")[j];
  //   console.log("Removing ", box)
  //   box.rsemoveEventListener("mousedown", flyUp); // flying card
  // }
  
  for (let j = 0; j < document.querySelectorAll(".box").length; j++ ){
    let box = document.querySelectorAll(".box")[j];
    // console.log("Add event")
    box.addEventListener("mousedown", flyUp); // flying card

    function flyUp(e) {
      // console.log("fly test")
      box = document.querySelectorAll(".box")[j];
      // console.log(box)
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
  
    // ============================ Fly ===================================
    function fly(e) {
      box = document.querySelectorAll(".box")[j];
  
      const mouseHor = e.clientX - (a - rectLeft),
        mouseVer = e.clientY - (b - rectTop);
  
      box.style.left = `${mouseHor}px`;
      box.style.top = `${mouseVer}px`;
  
      localStorage.setItem(`top${[j]}`, mouseVer + "px");
      localStorage.setItem(`left${[j]}`, mouseHor + "px");
  
      // console.log("Top: ", localStorage.top3)
      // console.log("Left", localStorage.left3)
  
      // * Wosh
      function wosh() {
        currentEvent = e;
        if (prevEvent && currentEvent) {
          var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
          var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);
  
          const mx = movementX * 1.5;
          const my = movementY * -1.5;
          if (mx < 40 && mx > -40 && my < 40 && my > -40) {
            box.style.transform = `rotateX(${my / 1.2}deg) rotateY(${
              mx / 1.2
            }deg)`;
          }
        }
  
        prevEvent = currentEvent;
      }
      wosh();
    }
  
    // * =========================================================================
    // * FlyDown =================================================================
    // * =========================================================================
    function flyDown() {
      // console.log(arr)
      
      box = document.querySelectorAll(".box");
      let index1 = getComputedStyle(box[0]).getPropertyValue("z-index");
      let index2 = getComputedStyle(box[1]).getPropertyValue("z-index");
      let index3 = getComputedStyle(box[2]).getPropertyValue("z-index");
      let index4 = getComputedStyle(box[3]).getPropertyValue("z-index");
      
      box = document.querySelectorAll(".box")[j];
      box.style.cursor = "grab";
      box.style.boxShadow = "none";
      // box = document.querySelectorAll(".box")[i];
  
      document.getElementById("demo").innerHTML =
        "Box number : " + 0 + ", have index of: " + index1;
      document.getElementById("demo2").innerHTML =
        "Box number : " + 1 + ", have index of: " + index2;
      document.getElementById("demo3").innerHTML =
        "Box number : " + 2 + ", have index of: " + index3;
      document.getElementById("demo4").innerHTML =
        "Box number : " + 3 + ", have index of: " + index4;
  
      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);
  
      const top = parseInt(getComputedStyle(box).getPropertyValue("top")),
        left = parseInt(getComputedStyle(box).getPropertyValue("left")),
        container = document.querySelector(".container"),
        boxWidth = parseInt(getComputedStyle(box).getPropertyValue("width")),
        boxHeight = parseInt(getComputedStyle(box).getPropertyValue("height")),
        conHeight = parseInt(
          getComputedStyle(container).getPropertyValue("height")
        ),
        conWidth = parseInt(
          getComputedStyle(container).getPropertyValue("width")
        );
  
      if (top < 0 && left > conWidth - boxWidth) {
        box.style.top = `0`;
        box.style.left = `${conWidth - boxWidth}px`;
        return;
      } else if (top > conHeight - boxHeight && left < 0) {
        box.style.top = `${conHeight - boxHeight}px`;
        box.style.left = `0`;
        console.log(2);
        return;
      } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
        box.style.top = `${conHeight - boxHeight}px`;
        box.style.left = `${conWidth - boxWidth}px`;
        console.log(2);
        return;
      } else if (top < 0 && left < 0) {
        box.style.top = "0";
        box.style.left = "0";
        return;
      } else if (top < 0) {
        box.style.top = "0";
        return;
      } else if (left < 0) {
        box.style.left = "0";
        return;
      } else if (top > conHeight - boxHeight) {
        box.style.top = `${conHeight - boxHeight}px`;
        return;
      } else if (left > conWidth - boxWidth) {
        box.style.left = `${conWidth - boxWidth}px`;
        return;
      }
    }

  }
}











for (let i = 0; i < box.length; i++) {
  

  let box = document.querySelectorAll(".box")[i];
  let a, b, rectLeft, rectTop, prevEvent, currentEvent, arr;


  box.addEventListener("mousedown", flyUp); // flying card

  // ============================== FlyUp ====================================
  function flyUp(e) {
    // console.log("fly test")
    box = document.querySelectorAll(".box")[i];
    // console.log(box)
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
      localStorage.setItem(`index${i}`, max);
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

  // ============================ Fly ===================================
  function fly(e) {
    box = document.querySelectorAll(".box")[i];

    const mouseHor = e.clientX - (a - rectLeft),
      mouseVer = e.clientY - (b - rectTop);

    box.style.left = `${mouseHor}px`;
    box.style.top = `${mouseVer}px`;

    localStorage.setItem(`top${[i]}`, mouseVer + "px");
    localStorage.setItem(`left${[i]}`, mouseHor + "px");

    // console.log("Top: ", localStorage.top3)
    // console.log("Left", localStorage.left3)

    // * Wosh
    function wosh() {
      currentEvent = e;
      if (prevEvent && currentEvent) {
        var movementX = Math.floor(currentEvent.screenX - prevEvent.screenX);
        var movementY = Math.floor(currentEvent.screenY - prevEvent.screenY);

        const mx = movementX * 1.5;
        const my = movementY * -1.5;
        if (mx < 40 && mx > -40 && my < 40 && my > -40) {
          box.style.transform = `rotateX(${my / 1.2}deg) rotateY(${
            mx / 1.2
          }deg)`;
        }
      }

      prevEvent = currentEvent;
    }
    wosh();
  }

  // * =========================================================================
  // * FlyDown =================================================================
  // * =========================================================================
  function flyDown() {
    // console.log(arr)
    
    box = document.querySelectorAll(".box");
    let index1 = getComputedStyle(box[0]).getPropertyValue("z-index");
    let index2 = getComputedStyle(box[1]).getPropertyValue("z-index");
    let index3 = getComputedStyle(box[2]).getPropertyValue("z-index");
    let index4 = getComputedStyle(box[3]).getPropertyValue("z-index");
    
    box = document.querySelectorAll(".box")[i];
    box.style.cursor = "grab";
    box.style.boxShadow = "none";
    // box = document.querySelectorAll(".box")[i];

    document.getElementById("demo").innerHTML =
      "Box number : " + 0 + ", have index of: " + index1;
    document.getElementById("demo2").innerHTML =
      "Box number : " + 1 + ", have index of: " + index2;
    document.getElementById("demo3").innerHTML =
      "Box number : " + 2 + ", have index of: " + index3;
    document.getElementById("demo4").innerHTML =
      "Box number : " + 3 + ", have index of: " + index4;

    window.removeEventListener("mousemove", fly);
    window.removeEventListener("mouseup", flyDown);

    const top = parseInt(getComputedStyle(box).getPropertyValue("top")),
      left = parseInt(getComputedStyle(box).getPropertyValue("left")),
      container = document.querySelector(".container"),
      boxWidth = parseInt(getComputedStyle(box).getPropertyValue("width")),
      boxHeight = parseInt(getComputedStyle(box).getPropertyValue("height")),
      conHeight = parseInt(
        getComputedStyle(container).getPropertyValue("height")
      ),
      conWidth = parseInt(
        getComputedStyle(container).getPropertyValue("width")
      );

    if (top < 0 && left > conWidth - boxWidth) {
      box.style.top = `0`;
      box.style.left = `${conWidth - boxWidth}px`;
      return;
    } else if (top > conHeight - boxHeight && left < 0) {
      box.style.top = `${conHeight - boxHeight}px`;
      box.style.left = `0`;
      console.log(2);
      return;
    } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
      box.style.top = `${conHeight - boxHeight}px`;
      box.style.left = `${conWidth - boxWidth}px`;
      console.log(2);
      return;
    } else if (top < 0 && left < 0) {
      box.style.top = "0";
      box.style.left = "0";
      return;
    } else if (top < 0) {
      box.style.top = "0";
      return;
    } else if (left < 0) {
      box.style.left = "0";
      return;
    } else if (top > conHeight - boxHeight) {
      box.style.top = `${conHeight - boxHeight}px`;
      return;
    } else if (left > conWidth - boxWidth) {
      box.style.left = `${conWidth - boxWidth}px`;
      return;
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
