export default function (e, editor, val) {
  e.preventDefault()
  document.execCommand(editor, false, val)
}