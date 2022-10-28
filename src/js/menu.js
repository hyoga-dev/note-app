

import addContext from "./contextmenu/addContext.js";
import duplicate from "./contextmenu/duplicate.js";
import eventHandler from "./contextmenu/eventHandler.js";
import paste from "./contextmenu/paste.js";
import pasteKey from "./contextmenu/pasteKey.js";
import refreshEvent from "./contextmenu/refreshEvent.js";
import removeSelected from "./contextmenu/removeSelected.js";
import shortCut from "./contextmenu/shortcut.js";
import unlock from "./contextmenu/unlock.js";
import unlockAll from "./contextmenu/unlockAll.js";
import unselect from "./contextmenu/unselect.js";
import { getId, qsa } from "./utility.js"
import refreshFly from "./contextmenu/refreshFly.js"
import flyEffect from "./contextmenu/flyEffect.js"
// import flyingEffect from "./fly/flyingEffect.js";
// let copied;


export default class Menu {
  constructor (menu, card) {
    this.menu = getId(menu)
    this.card = qsa(card)
    this.cardName = card
    this.prevEvent;

    this.rightBox = function (e) {
        e.preventDefault()
        const x = e.clientX
        const y = e.clientY
      
        this.menu.style.top = y + "px"
        this.menu.style.left = x + "px"
        this.menu.style.display = 'block';

        this.select = e.target
        // console.log(this.select)
    } 
    this.clickRight = this.rightBox.bind(this)
  }
}

Menu.prototype.flyEffect = flyEffect
Menu.prototype.refreshFly = refreshFly
Menu.prototype.addContext = addContext
Menu.prototype.duplicate = duplicate
Menu.prototype.pasteKey = pasteKey
Menu.prototype.paste = paste
Menu.prototype.unlockAll = unlockAll
Menu.prototype.unlock = unlock
Menu.prototype.removeSelected = removeSelected
Menu.prototype.unselect = unselect
Menu.prototype.refreshEvent = refreshEvent
Menu.prototype.shortCut = shortCut
Menu.prototype.eventHandler = eventHandler
