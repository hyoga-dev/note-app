import { getId, qs } from "./utility.js";

const select = document.getSelection()
const bold = qs(".bold")
const italic = qs(".italic")
const paragraph = getId("paragraph")

const faBold = qs('.fa-bold')
const faItalic = qs('.fa-italic')
const faParagraph = qs('.fa-p')

export default function detectCursor(e) {
  let ranges = [];

  for (let i = 0; i < select.rangeCount; i++) {
  ranges[i] = select.getRangeAt(i);
}

  if (ranges[0] == undefined) return
  if (e.target.id == "container") {
    bold.classList.remove('dark-back')
    faBold.classList.remove('dark-color')
    italic.classList.remove('dark-back')
    faItalic.classList.remove('dark-color')
    paragraph.classList.remove('dark-back')
    faParagraph.classList.remove('dark-color')

    // bold.style.backgroundColor = "var(--back-color)"
    // faBold.style.color = "var(--dark-text)"
    // italic.style.backgroundColor = "var(--back-color)"
    // faItalic.style.color = "var(--dark-text)"
    // paragraph.style.backgroundColor = "var(--back-color)"
    // faParagraph.style.color = "var(--dark-text)"
    return
  }

  const firstParent = ranges[0].endContainer.parentNode.nodeName
  const secondParent = ranges[0].endContainer.parentNode.parentNode.nodeName
  const thirdParent = ranges[0].endContainer.parentNode.parentNode.parentNode.nodeName
  // const fourtParent = ranges[0].endContainer.parentNode.parentNode.parentNode.parentNode.nodeName
  // if (fourtParent == null) return

  const parent = [firstParent, secondParent, thirdParent]
  const parentName = ['B', 'I', 'P']
  const selector = [[bold, faBold], [italic, faItalic], [paragraph, faParagraph]]

  for (const pNameIndex in parentName) {
    for (const pIndex in parent) {
      if (parent[pIndex] == parentName[pNameIndex]) {
        selector[pNameIndex][0].classList.add('dark-back')
        selector[pNameIndex][1].classList.add('dark-color')
        // selector[pNameIndex][0].style.backgroundColor = "var(--dark-text)"
        // selector[pNameIndex][1].style.color = "var(--back-color)"
        break;
      } else {
        selector[pNameIndex][0].classList.remove('dark-back')
        selector[pNameIndex][1].classList.remove('dark-color')
        // selector[pNameIndex][0].style.backgroundColor = "var(--back-color)"
        // selector[pNameIndex][1].style.color = "var(--dark-text)"
      }
      // console.log(parent[pIndex])
    }
  }

  // parentName.forEach((pName, pNameIndex)  => {
  //   parent.forEach((p, index) => {
      
  //     if (p == pName) {
  //       selector[pNameIndex][0].style.backgroundColor = "black"
  //       selector[pNameIndex][1].style.color = "var(--back-color)"
  //       return
  //     }  
      
  //   }) 
  // })
  
  // selector[pNameIndex][0].style.backgroundColor = "var(--back-color)"
  // selector[pNameIndex][1].style.color = "var(--dark-text)"
  // return console.log("not found")


  // if (firstParent == "B" || secondParent == "B") {
  //   bold.style.backgroundColor = "var(--dark-text)"
  //   faBold.style.color = "var(--back-color)"
  // } else if (thirdParent == "B" || fourtParent == "B") {
  //   bold.style.backgroundColor = "var(--dark-text)"
  //   faBold.style.color = "var(--back-color)"
  // } else {
  //   bold.style.backgroundColor = "var(--back-color)"
  //   faBold.style.color = "var(--dark-text)"
  // }

  // if (firstParent == "I" || secondParent == "I") {
  //   italic.style.backgroundColor = "var(--dark-text)"
  //   faItalic.style.color = "var(--back-color)"
  // } else if (thirdParent == "I" || fourtParent == "I") {
  //   italic.style.backgroundColor = "var(--dark-text)"
  //   faItalic.style.color = "var(--back-color)"
  // } else {
  //   italic.style.backgroundColor = "var(--back-color)"
  //   faItalic.style.color = "var(--dark-text)"
  // }


  // switch (firstParent) {
  //   case "B":
  //     bold.style.backgroundColor = "var(--dark-text)"
  //     faBold.style.color = "var(--back-color)"
  //   case "I": 
  //     italic.style.backgroundColor = "var(--dark-text)"
  //     faItalic.style.color = "var(--back-color)"
  //     break
  //   default : 
  //     italic.style.backgroundColor = "var(--back-color)"
  //     faItalic.style.color = "var(--dark-text)"
  //     bold.style.backgroundColor = "var(--back-color)"
  //     faBold.style.color = "var(--dark-text)"
  // }



  // console.log(ranges[0])
}