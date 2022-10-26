export default function unlock() {
  this.select.setAttribute("contenteditable", true)
  this.select.classList.add("selected")

  const unOutline = () => document.addEventListener("mouseup", outline)
  const outline = () => {
    this.select.classList.remove("selected")
    document.removeEventListener("mouseup", outline)
  }
  setTimeout(unOutline, 200) 
}