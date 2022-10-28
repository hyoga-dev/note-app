
import { getId, qsa } from "./utility.js"
import selectAll from "./docRightClick/selectAll.js"
import addContext from "./docRightClick/addContext.js"



export default class DocumentRightClick {
  constructor (menu, card, contextMenu) {
    this.menu = getId(menu)
    this.card = qsa(card)
    this.cardName = card
    this.contextMenu = contextMenu
    this.prevEvent
    this.rightBox = (e) => {
      const className = e.target.className

      if (className == "container") {
        e.preventDefault()
        const x = e.clientX
        const y = e.clientY
      
        this.menu.style.top = y + "px"
        this.menu.style.left = x + "px"
        this.menu.style.display = 'block';

        this.select = e.target
      }
    }

    this.clickRight = this.rightBox.bind(this)
  }

  docRightClick () {
    document.addEventListener("contextmenu", this.clickRight)
  }
}

DocumentRightClick.prototype.selectAll = selectAll
DocumentRightClick.prototype.addContext = addContext