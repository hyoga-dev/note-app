

export default function shortCut(e) {
  const ctrl = e.ctrlKey;
  const shift = e.shiftKey;
  // const alt = e.altKey
  const keys = e.key;




// ==========================================
if (ctrl && shift) {
  if (keys == "C" || keys == "c") {
    e.preventDefault();
    this.copiedText = document.activeElement.cloneNode(true);
  }
} // ==========================================


// ==========================================
  if (ctrl && shift) {
    if (keys == "V" || keys == "v") {
      e.preventDefault();
      this.refreshEvent();
      this.pasteKey(this.copiedText);
      this.refreshFly()
    }
  } // ==========================================


// ==========================================
  if (ctrl) {
    if (keys == "l" || keys == "L") {
      e.preventDefault();
      document.activeElement.setAttribute("contenteditable", false);
    }
  } // ==========================================
  

// ==========================================
  if (ctrl && shift) {
    if (keys == "l" || keys == "L") {
      e.preventDefault();
      this.unlockAll();
    }
  } // ==========================================


// ==========================================
if (keys == "Delete") {
  this.removeSelected();
} // ==========================================

}
