


import { qsa } from "../utility.js"


export default function unselect(e) {
  // console.log(e.target.id)
  const box = e.target.className.split(" ").filter(val => {
    return val === "box";
  })
  const selected = qsa(".selected")
  const shift = e.shiftKey

  if (box == "box" || box == "" ) {
    
    selected.forEach(x => {
      if (e.target.id != "d-select-all") {
        if (!shift) {
          x.classList.remove("selected")
        }
      }

      if (box == "box") {
        e.target.classList.add("selected")
      }

      

    })
  } 
}