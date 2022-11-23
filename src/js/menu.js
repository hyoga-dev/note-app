

import addContext from "./contextmenu/addContext.js";
import eventHandler from "./contextmenu/eventHandler.js";
import refreshEvent from "./contextmenu/refreshEvent.js";
import removeSelected from "./contextmenu/removeSelected.js";
import shortCut from "./contextmenu/shortcut.js";
import unselect from "./contextmenu/unselect.js";
import { paste, pasteKey } from "./contextmenu/paste.js";
import { getId, qsa } from "./utility.js"


export default class Menu {
  constructor (menu, card) {
    this.menu = getId(menu)
    this.card = qsa(card)
    this.cardName = card
    this.prevEvent;

    this.rightBox = function (e) {
        e.preventDefault()
        document.activeElement.blur()
        e.currentTarget.classList.add("selected")

        const x = e.clientX
        const y = e.clientY
      
        this.menu.style.top = y + "px"
        this.menu.style.left = x + "px"
        this.menu.style.display = 'block';

        this.select = e.target
        this.selectBox = e.currentTarget
        // console.log(this.selectBox)
    } 
    this.clickRight = this.rightBox.bind(this)
  }
}

Menu.prototype.addContext = addContext
Menu.prototype.pasteKey = pasteKey
Menu.prototype.shortCut = shortCut
Menu.prototype.paste = paste
Menu.prototype.removeSelected = removeSelected
Menu.prototype.refreshEvent = refreshEvent
Menu.prototype.eventHandler = eventHandler
Menu.prototype.unselect = unselect
