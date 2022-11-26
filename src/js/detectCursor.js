import { getId, qs } from "./utility.js";

const select = document.getSelection()
const bold = qs(".bold")
const italic = qs(".italic")
const paragraph = getId("paragraph")
// const h1 = qs(".h1")

const faBold = qs('.fa-bold')
const faItalic = qs('.fa-italic')
const faParagraph = qs('.fa-p')
// const faH1 = qs('.fa-h')

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
    // h1.classList.remove('dark-back')
    // faH1.classList.remove('dark-color')
    return
  }

  const firstParent = ranges[0].endContainer.parentNode.nodeName
  const secondParent = ranges[0].endContainer.parentNode.parentNode.nodeName
  const thirdParent = ranges[0].endContainer.parentNode.parentNode.parentNode.nodeName
  // const fourtParent = ranges[0].endContainer.parentNode.parentNode.parentNode.parentNode.nodeName
  // if (firstParent == undefined || secondParent == undefined) return

  const parent = [firstParent, secondParent, thirdParent]
  const parentName = ['B', 'I', 'P']
  const selector = [[bold, faBold], [italic, faItalic], [paragraph, faParagraph]]

  for (const pNameIndex in parentName) {
    for (const pIndex in parent) {
      if (parent[pIndex] == parentName[pNameIndex]) {
        selector[pNameIndex][0].classList.add('dark-back')
        selector[pNameIndex][1].classList.add('dark-color')
        break;
      } else {
        selector[pNameIndex][0].classList.remove('dark-back')
        selector[pNameIndex][1].classList.remove('dark-color')
      }
    }
  }

}