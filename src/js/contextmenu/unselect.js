


import { qsa } from "../utility.js"


export default function unselect(e) {
  const secondClass = e.target.className.split(" ")[1]
  const box = e.target.className.split(" ").filter(val => {
    return val === "box";
  })
  const selected = qsa(".selected")
  const shift = e.shiftKey
  // if (e.button === 0) {
  if (box == "box" || box == "" ) {
      

    // const findClicked = x.getAttribute('class').split(" ").filter(val => {
    //   return val == 'clicked'
    // })[0]
    // console.log(this.targetParent)

    // if (e.button == 2 ) {
    //   // x.classList.add("selected") 

    //   // console.log(findClicked)
    //   return
    // }




    for (const x of selected) {

      x.classList.add('clicked')

      if (e.target.id != "d-select-all" && secondClass != "side-delete") {
        if (e.target.id != "d-delete" && e.target.id != "delete" ) {
          if (!shift && e.target.id != "copy") {
            if (e.target.id != 'lock' && e.target.id != 'unlock') {
              // console.log('X',x,'target', e.target)
              x.classList.remove('clicked')
              x.classList.remove('selected') 
              // return
            }
          }
        }
      }

    }

  }
  // } 
}