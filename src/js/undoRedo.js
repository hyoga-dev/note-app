



let container;
// let innerContainer = [];
const demo = document.getElementById("demo")
const anu = [1,2,3]
let newArr;
let prev = 1;
let num = 0;


if (localStorage.getItem("arr") == null) {
  localStorage.setItem("arr", anu) 
} else {
  num = localStorage.getItem("arr")
}

const arr = localStorage.getItem("arr").split(",").map( Number )





export function undo() {

  container = document.getElementById("container")
  if (prev < arr.length) {
    prev++
    demo.innerHTML =  "Current number: " + arr[arr.length - prev];

    // const newArr = arr.slice(0, arr.length - prev + 1) 
    newArr = arr[arr.length - prev] 
    localStorage.setItem("arr", newArr)
    localStorage.setItem("container", container.innerHTML)
    console.log(newArr)
    // console.log("index: ",prev)
    // console.log("the arr is:", arr[arr.length - prev])

  } else {
    alert("Can't undo")
  }

  
}




export function redo() {
    if ( prev >= 2 ) {
      prev--
      demo.innerHTML =  "Current number: " + arr[arr.length - prev];

      newArr = arr[arr.length - prev] 
      localStorage.setItem("arr", newArr)
      localStorage.setItem("container", container.html)
      console.log(newArr)
      // console.log("index: ",prev)
      // console.log("the arr is:", arr[arr.length - prev])  

    } else {
      alert("Can't redo")
    }
}