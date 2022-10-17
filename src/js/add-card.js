import flyingEffect from "./flyingEffect.js";
import saveCorner from "./saveCorner.js";

// import fly from "./fly-card.js"
const rotateSpeed = 1.3;
let boxNum = 3;





export default function addCard(e) {




  let a, b, rectLeft, rectTop, prevEvent, currentEvent, arr;

  if (localStorage.getItem("boxNum") > 3) { boxNum = localStorage.getItem("boxNum")}
  console.log(boxNum);
  boxNum++;

  localStorage.setItem("boxNum", boxNum);
  const para = document.createElement("div");
  const node = document.createTextNode(boxNum);

  para.appendChild(node);
  para.classList.add("box");
  para.style.opacity = "0";
  para.style.zIndex = "100";

  container.appendChild(para);

  let box = document.querySelectorAll(".box");
  let boxLength = box.length - 1;
  let newBox = box[boxLength];
  a = e.clientX;
  b = e.clientY;
  const btnTop = parseInt(
    getComputedStyle(document.getElementById("btn")).getPropertyValue("top")
  );
  const btnLeft = parseInt(
    getComputedStyle(document.getElementById("btn")).getPropertyValue("left")
  );

  newBox.style.left = `${btnLeft - 100}px`;
  newBox.style.top = `${btnTop - 50}px`;

  rectLeft = Math.floor(newBox.getBoundingClientRect().left);
  rectTop = Math.floor(newBox.getBoundingClientRect().top);

  window.addEventListener("mousemove", newFly);







  function newFly(e) {
    newBox.style.cursor = "grabbing";
    newBox.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";
    newBox.style.opacity = "1";
    window.addEventListener("mouseup", newFlyDown);

    let mouseHor = e.clientX - (a - rectLeft),
      mouseVer = e.clientY - (b - rectTop);

    newBox.style.left = `${mouseHor}px`;
    newBox.style.top = `${mouseVer}px`;

    flyingEffect(e, newBox, rotateSpeed);
  }






  function newFlyDown() {
    newBox.style.cursor = "grab";
    newBox.style.boxShadow = "none";
    newBox.style.transform = `rotateX(0) rotateY(0)`;
    const btn = document.querySelector("#btn");
    btn.style.backgroundColor = "#f0f0f0";
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "rgb(219, 224, 230)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#f0f0f0";
    });

    window.removeEventListener("mousemove", newFly);
    window.removeEventListener("mouseup", newFlyDown);

    saveCorner(newBox);
  }













  for (let j = 0; j < document.querySelectorAll(".box").length; j++) {
    let box = document.querySelectorAll(".box")[j];
    box.addEventListener("mousedown", flyUp); // flying card





    // =========================================================================
    // ========================= FlyUp =========================================
    // =========================================================================
    function flyUp(e) {
      box = document.querySelectorAll(".box")[j];

      let index = parseInt(getComputedStyle(box).getPropertyValue("z-index"));
      a = e.clientX;
      b = e.clientY;

      // <-- indexing
      arr = [];
      // add index order
      for (let k = 0; k < document.querySelectorAll(".box").length; k++) {
        index = parseInt(
          getComputedStyle(
            document.querySelectorAll(".box")[k]
          ).getPropertyValue("z-index")
        );
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
          // console.log(localStorage.getItem(`index${k}`));
          localStorage.setItem(
            `index${k}`,
            localStorage.getItem(`index${k}`) - 10
          );
          document.querySelectorAll(".box")[k].style.zIndex =
            localStorage.getItem(`index${k}`);
        }
      }
      // normalise index -->

      // add fly effect --
      // box.style.cursor = "grabbing";
      // box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";

      // add event handler
      window.addEventListener("mousemove", fly);
      window.addEventListener("mouseup", flyDown);
    }





    // =========================================================================
    // ========================= Fly ===========================================
    // =========================================================================
    function fly(e) {
      box = document.querySelectorAll(".box")[j];

      box.style.cursor = "grabbing";
      box.style.boxShadow = "0 30px 50px 0 rgba(0, 0, 0, 0.19)";

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


      // flyingEffect(e, box, rotateSpeed);
    }





    // =========================================================================
    // ============================ FlyDown ====================================
    // =========================================================================
    function flyDown() {
      box = document.querySelectorAll(".box");
      box = document.querySelectorAll(".box")[j];
      box.style.cursor = "grab";
      box.style.boxShadow = "none";
      box.style.transform = `rotateX(0) rotateY(0)`;

      window.removeEventListener("mousemove", fly);
      window.removeEventListener("mouseup", flyDown);

      saveCorner(box);
    }



  }
}