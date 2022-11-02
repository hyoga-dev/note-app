



let container;
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

    newArr = arr[arr.length - prev] 
    localStorage.setItem("arr", newArr)
    localStorage.setItem("container", container.innerHTML)

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

    } else {
      alert("Can't redo")
    }
}