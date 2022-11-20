// import { qsa } from "../utility.js";

import flyCard from "../fly/fly-card.js";

export default function addContext (e) {
    
  const secondClass = e.target.className.split(" ")[1]

  if (e.target.id == "delete" || secondClass == "side-delete") {
    this.removeSelected()
    
  } else if (e.target.id == "copy") {
    e.preventDefault();
    this.copiedText = this.selectBox.cloneNode(true);
    // if (document.activeElement.tagName != "BODY") {
    //   // this.copiedText = document.activeElement.cloneNode(true);
    // }
  } else if (e.target.id == "paste") {
    this.paste(e)
    this.refreshEvent()
    // this.refreshFly()

  } else if (e.target.id == "lock") {
    // this.selectBox.setAttribute("contenteditable", false)

  } else if (e.target.id == "unlock") {
    // this.selectBox.setAttribute("contenteditable", true)

  } else if (e.target.id == "unlockall") {
    this.unlockAll()

  } else if (secondClass == "side-copy") {
    this.copiedText = document.activeElement.cloneNode(true)

  } else if (secondClass == "side-delete") {
    e.preventDefault()
    this.removeSelected()
  }

  this.menu.style.display = 'none';

}