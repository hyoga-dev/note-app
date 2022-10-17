


import dragMe from "./js/dragMe.js";
import fly from "./js/fly-card.js";
// import { undo, redo } from "./js/undoRedo.js";





let btn = document.getElementById("btn")
let undoBtn = document.getElementById("undo")
let redoBtn = document.getElementById("redo")
let refBtn = document.getElementById("ref")



undoBtn.addEventListener("mousedown", undo)
redoBtn.addEventListener("mousedown", redo)
refBtn.addEventListener("mousedown", ref)
btn.addEventListener("mousedown", dragMe)

// alert("hello")





let container = document.getElementById("container");
// let innerContainer = [];
const content = []
// content.push(container.innerHTML)
let newArr;
let prev; 



if (localStorage.getItem("prev") == null) {
  prev = 0;
} else {
  prev = localStorage.getItem("prev")
}

fly()
  

if (localStorage.getItem("arr") == null) {
  localStorage.setItem("arr", content) 
}

let arr = localStorage.getItem("arr").split(",")
  
  
  
  // console.log(arr)
  
  function undo() {
    // console.log(prev)
    if (localStorage.getItem("prev") == 0){
      prev = localStorage.getItem("prev")
    }

    localStorage.setItem("prev", 1)
    let arr = localStorage.getItem("arr").split(",")
    // console.log("Arr length: ", arr.length)
    container = document.getElementById("container")
    
    
    if (prev < arr.length) {
      prev++
      console.log("Prev is: ",  prev)
      // demo.innerHTML =  "Current number: " + arr[arr.length - prev];
  
      // const newArr = arr.slice(0, arr.length - prev + 1) 
      newArr = arr[arr.length - (prev + 1)]
      let arru = arr.slice(0, arr.length - prev)

      console.log(newArr)

    } else {
      alert("Can't undo")
    }
  
}
    // let btn = document.getElementById("btn")
      // console.log(btn)
  
  
  
  
  function redo() {
      if ( prev >= 2 ) {
        prev--
        // demo.innerHTML =  "Current number: " + arr[arr.length - prev];
  
        newArr = arr[arr.length - prev] 
        localStorage.setItem("arr", newArr)
        // localStorage.setItem("container", container.innerHTML)
        console.log(newArr)
        // console.log("index: ",prev)
        // console.log("the arr is:", arr[arr.length - prev])  
  
      } else {
        alert("Can't redo")
      }
  }

  

  function ref() {
    const btn = document.getElementById("btn")
    btn.removeEventListener("mousedown",  dragMe)
    btn.addEventListener("mousedown",  dragMe)
    console.log(btn)
  }