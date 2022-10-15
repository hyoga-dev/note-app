import addCard from "./add-card.js";

let btn = document.getElementById("btn");
let counter = 0;
let grabCon = document.querySelector(".grab-container");



// ----------------------------------------------------
export default function dragMe() {
  let more = () => {
    counter++;
    console.log(counter);
  };

  let some = setInterval(more, 10);
  btn.addEventListener("mousemove", dragOut);
  btn.addEventListener("mouseup", grabMe);
  window.addEventListener("mouseup", onlyClicked);

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
    console.log("Drag me"); 
    clearInterval(some);
    
    counter = 0;
    window.removeEventListener("mouseup", onlyClicked);
  }

  
  
  // ------------------------------------------------------
  function dragOut() {
    if (counter > 2) {
      clearInterval(some);
      grabCon.classList.remove("slide-left")

      addCard(event);
      counter = 0;
      btn.removeEventListener("mousemove", dragOut);
    }
  }
}
