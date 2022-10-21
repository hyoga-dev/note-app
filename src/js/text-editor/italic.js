export default function bolding() {
  const val = window.getSelection()
  const range = val.getRangeAt(0)

  const newNode = document.createElement("em")

  newNode.appendChild(document.createTextNode(range))
  range.deleteContents()
  range.insertNode(newNode)
}