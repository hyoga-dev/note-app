import { getId,  qs } from "./utility.js";




export default function() {
  // * add setting


const settingContainer = qs(".setting-container")
const setting = getId("setting")
// const color = getId("color")
// const bgColor = getId("bg-color")
const settingCon =  qs(".setting-container")
// const settingMod = qs(".setting-modal")
const sweet = qs(".switch") 
const sweetButton = qs(".switch-button") 
const root = qs(":root")
const addBtn = getId("add-btn")
const textColor = getId("text-color")
const backColor = getId("back-color")
const olIcon = getId("ol-icon")
let clicked = 'true'

settingContainer.onclick = (e) => {
  if (e.target.className == "setting-container" || e.target.id == "close") {
    settingCon.style.transform = "translate(100%, 0)";
    settingCon.style.opacity = "0";
    settingCon.style.backdropFilter = "blur(0)";
  }
}

setting.onclick = () => {
  settingCon.style.transform = "translate(0, 0)";
  settingCon.style.opacity = "1";
  settingCon.style.backdropFilter = "blur(2px)";
}

sweet.onclick = darkMode

if (localStorage.getItem('clicked') != null) {
  clicked = localStorage.getItem('clicked')
}
darkMode()


function darkMode() {
  if (clicked == 'false') {
    sweetButton.classList.add("switch-button-on")
    addBtn.setAttribute("src", "/src/asset/add-button-dark.svg")
    textColor.setAttribute("src", "/src/asset/text-color-dark.svg")
    backColor.setAttribute("src", "/src/asset/bg-color-dark.svg")
    olIcon.setAttribute("src", "/src/asset/ol dark.svg")
    root.style.setProperty("--dark-text", "#f7f7f7")
    root.style.setProperty("--back-color", "#33373a")
    root.style.setProperty("--normal-text", "#e1e7ee")
    root.style.setProperty("--container-color", "#212223")

    localStorage.setItem('clicked', clicked)
    clicked = 'true'
    return
  } else if (clicked == 'true') {
    sweetButton.classList.remove("switch-button-on")
    addBtn.setAttribute("src", "/src/asset/add-button.svg")
    textColor.setAttribute("src", "/src/asset/text-color.svg")
    backColor.setAttribute("src", "/src/asset/back-color.svg")
    olIcon.setAttribute("src", "/src/asset/ol.svg")
    root.style.setProperty("--dark-text", "#4e6d89")
    root.style.setProperty("--back-color", "#f7f7f7")
    root.style.setProperty("--normal-text", "#8199aa")
    root.style.setProperty("--container-color", "#e1e7ee")
    
    localStorage.setItem('clicked', clicked)
    clicked = 'false'
  }
}
}