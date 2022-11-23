
export default function eventHandler() {
  document.addEventListener("contextmenu", e => e.preventDefault())
  document.addEventListener("mousedown", e => this.addContext(e))
  document.activeElement.addEventListener("keydown", e => this.shortCut(e))
}