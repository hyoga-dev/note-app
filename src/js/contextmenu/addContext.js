export default function addContext (e) {
    
  // const firstClass = e.target.className.split(" ")[0]
  const secondClass = e.target.className.split(" ")[1]

  if (e.target.id == "delete" || secondClass == "side-delete") {
    if (document.activeElement.tagName != "BODY") document.activeElement.remove()
    this.removeSelected()
    
  } else if (e.target.id == "copy") {
    e.preventDefault();
    // console.log(document.activeElement.tagName)
    if (document.activeElement.tagName != "BODY") {
      this.copiedText = document.activeElement.cloneNode(true);
    }

  } else if (e.target.id == "paste") {
    this.paste(e, this.copiedText)
    this.refreshEvent()
    this.refreshFly()


  } else if (e.target.id == "lock") {
    document.activeElement.setAttribute("contenteditable", false)

  } else if (e.target.id == "unlock") {
    this.unlock()

  } else if (e.target.id == "unlockall") {
    this.unlockAll()

  } else if (secondClass == "side-copy") {
    this.copiedText = document.activeElement.cloneNode(true)
  }




  this.menu.style.display = 'none';

}