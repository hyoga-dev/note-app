import addCard from "./add-card.js";

let btn = document.getElementById("btn");
let counter = 0;
let grabCon = document.querySelector(".grab-container");
let moved;


// ----------------------------------------------------
export default function dragMe() {

  btn.addEventListener("mousemove", dragOut);
  btn.addEventListener("mouseup", grabMe);
  window.addEventListener("mouseup", onlyClicked);



  // ----------------------------------------------------
  function grabMe() {
    grabCon.classList.add("slide-left")

    
    setTimeout(()=> {
      grabCon.classList.remove("slide-left")
    }, 5000)
    setTimeout(() => {
      window.addEventListener("click", gone)
    }, 0)

    function gone() {
      grabCon.classList.remove("slide-left")
      window.removeEventListener("click", gone);
    }
  }

  
  
  // -----------------------------------------------------
  function onlyClicked() {
    if (!moved) {
      btn.removeEventListener("mousemove", dragOut);
    }

    moved = false;
    window.removeEventListener("mouseup", onlyClicked);
  }

  
  
  // ------------------------------------------------------
  function dragOut() {
      grabCon.classList.remove("slide-left")
      moved = true

      addCard(event);
      counter = 0;
      btn.removeEventListener("mousemove", dragOut);
  }
}
