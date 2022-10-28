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
    }

    this.menu.style.display = 'none';
  }, false)
}