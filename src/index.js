
import dragMe from "./js/dragMe.js";
import fly from "./js/fly-card.js";





let btn = document.getElementById("btn")
// let undoBtn = document.getElementById("undo")
// let redoBtn = document.getElementById("redo")
// let refBtn = document.getElementById("ref")

btn.addEventListener("mousedown", dragMe)
// btn.addEventListener("focus", fokus)
// btn.addEventListener("blur", belur)
// undoBtn.addEventListener("mousedown", undo)
// redoBtn.addEventListener("mousedown", redo)
// refBtn.addEventListener("mousedown", ref)






// function fokus() {
//   btn.removeEventListener("mousedown", dragMe)


// }


// function belur() {
//   btn.addEventListener("mousedown", dragMe)
// }
















function getScrollHeight(elm){
  var savedValue = elm.value
  elm.value = ''
  elm._baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
}

function onExpandableTextareaInput({ target:elm }){
  // make sure the input event originated from a textarea and it's desired to be auto-expandable
  if( !elm.classList.contains('box') || !elm.nodeName == 'TEXTAREA' ) return
  
  var minRows = elm.getAttribute('data-min-rows')|0, rows;
  !elm._baseScrollHeight && getScrollHeight(elm)

  elm.rows = minRows
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
  elm.rows = minRows + rows
}


// global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)



// let container = document.getElementById("container");
// const content = []
// let newArr;
// let prev; 




// if (localStorage.getItem("prev") == null) {
//   prev = 0;
// } else {
//   prev = localStorage.getItem("prev")
// }

fly()


// // ----------------------------------------------------------------------
// if (localStorage.getItem("arr") == null) {
//   localStorage.setItem("arr", content) 
// }

// let arr = localStorage.getItem("arr").split(",")
  
  
  

// // ----------------------------------------------------------------------
//   function undo() {
//     if (localStorage.getItem("prev") == 0){
//       prev = localStorage.getItem("prev")
//     }

//     localStorage.setItem("prev", 1)
//     let arr = localStorage.getItem("arr").split(",")
//     container = document.getElementById("container")
    
    
//     if (prev < arr.length) {
//       prev++
//       console.log("Prev is: ",  prev)
  
//       // const newArr = arr.slice(0, arr.length - prev + 1) 
//       newArr = arr[arr.length - (prev + 1)]
//       // let arru = arr.slice(0, arr.length - prev)

//       console.log(newArr)

//     } else {
//       alert("Can't undo")
//     }
  
// }
  
  
  
  
// // ----------------------------------------------------------------------
//   function redo() {
//       if ( prev >= 2 ) {
//         prev--
//         // demo.innerHTML =  "Current number: " + arr[arr.length - prev];
  
//         newArr = arr[arr.length - prev] 
//         localStorage.setItem("arr", newArr)
//         // localStorage.setItem("container", container.innerHTML)
//         console.log(newArr)
//         // console.log("index: ",prev)
//         // console.log("the arr is:", arr[arr.length - prev])  
  
//       } else {
//         alert("Can't redo")
//       }
//   }

  
//   // ----------------------------------------------------------------------
//   function ref() {
//     const btn = document.getElementById("btn")
//     btn.removeEventListener("mousedown",  dragMe)
//     btn.addEventListener("mousedown",  dragMe)
//     console.log(btn)
//   }