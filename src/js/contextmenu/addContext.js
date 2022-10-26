export default function addContext (e) {
    
  const firstClass = e.target.className.split(" ")[0]

  if (e.target.id == "delete") {
    if (document.activeElement.tagName != "BODY") document.activeElement.remove()
    this.removeSelected()
    
  } else if (e.target.id == "copy") {
    this.copiedText = this.select.cloneNode(true)

  } else if (e.target.id == "paste") {
    this.paste(e, this.copiedText)
    this.refreshEvent()

  } else if (e.target.id == "lock") {
    document.activeElement.setAttribute("contenteditable", false)

  } else if (e.target.id == "unlock") {
    this.unlock()

  } else if (e.target.id == "unlockall") {
    this.unlockAll()
  }

  if (firstClass == "box") {
    e.target.classList.add("selected")
  }



  this.menu.style.display = 'none';

}