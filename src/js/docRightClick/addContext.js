// import Fly from "../fly.js"
// const fly = new Fly()


export default function addContext () {
  document.addEventListener("mousedown", (e) => {

    if (e.target.id == "d-paste") {
      this.contextMenu.paste(e, this.contextMenu.copiedText)
      this.contextMenu.refreshFly()
      this.contextMenu.refreshEvent()
      // fly.eventHandler()
      // console.log(this.fly)

    } if (e.target.id == "d-select-all") {
      this.selectAll(e)
    } if (e.target.id == "d-delete") {
      // if (document.activeElement.tagName != "BODY") document.activeElement.remove()
      // console.log(e.target.id)
      this.contextMenu.removeSelected()
    } if (e.target.id == "unlockall") {
      this.contextMenu.unlockAll()
    }  

    this.menu.style.display = 'none';
  }, false)
}