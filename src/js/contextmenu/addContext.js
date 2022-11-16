import { qsa } from "../utility.js";

export default function addContext (e) {
    
  const secondClass = e.target.className.split(" ")[1]

  if (e.target.id == "delete" || secondClass == "side-delete") {
    this.removeSelected()
    
  } else if (e.target.id == "copy") {
    e.preventDefault();
    if (document.activeElement.tagName != "BODY") {
      this.copiedText = document.activeElement.cloneNode(true);
    }
  } else if (e.target.id == "paste") {
    this.paste(e)
    this.refreshEvent()
    this.refreshFly()

  } else if (e.target.id == "lock") {
    // this.selectBox.setAttribute("contenteditable", false)
    // const left = getComputedStyle(this.selectBox).getPropertyValue("left")
    // this.selectBox.classList.add("lock")
    // this.selectBox.classList.remove("box")
    // const lock = qs("lock")
    // lock.style.setProperty("left", `20px !important`)

  } else if (e.target.id == "unlock") {
    // this.selectBox.setAttribute("contenteditable", true)
    // this.selectBox.classList.remove("lock")
    // this.selectBox.classList.add("box")
    // this.refreshEvent()
    // this.refreshFly()

  } else if (e.target.id == "unlockall") {
    this.unlockAll()

  } else if (secondClass == "side-copy") {
    // console.log("hai")
    this.copiedText = document.activeElement.cloneNode(true)
  } else if (secondClass == "side-delete") {
    e.preventDefault()
    this.removeSelected()
  }

  this.menu.style.display = 'none';

}