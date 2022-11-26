import { getId,  qs } from "./utility.js";




export default function() {


const settingContainer = qs(".setting-container")
const setting = getId("setting")
const settingCon =  qs(".setting-container")
const sweet = qs(".switch") 
const sweetButton = qs(".switch-button") 
const root = qs(":root")
// const pName = getId("profile-name")
const addBtn = getId("add-btn")
// const profile = getId("profile")
const textColor = getId("text-color")
const backColor = getId("back-color")
const h3 = getId("h3")
const olIcon = getId("ol-icon")
const hr = qs("hr")
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
    h3.setAttribute("src", "/src/asset/h3-dark.svg")
    
    if (localStorage.getItem('username') == null) {
      pPicture.setAttribute("src", "/src/asset/profile-dark.svg")
    }

    // hr.style.color = '#7e6340'
    root.style.setProperty("--dark-text", "#ddd")
    root.style.setProperty("--mid-text", "#ccc")
    root.style.setProperty("--back-color", "#33373a")
    root.style.setProperty("--normal-text", "#aaa")
    root.style.setProperty("--container-color", "#212223")
    root.style.setProperty("--box-border", "rgba(255, 255, 255, 0.05)")

    localStorage.setItem('clicked', clicked)
    clicked = 'true'
    return
  } else if (clicked == 'true') {
    sweetButton.classList.remove("switch-button-on")
    addBtn.setAttribute("src", "/src/asset/add-button.svg")
    textColor.setAttribute("src", "/src/asset/text-color.svg")
    backColor.setAttribute("src", "/src/asset/back-color.svg")
    h3.setAttribute("src", "/src/asset/h3.svg")
    olIcon.setAttribute("src", "/src/asset/ol.svg")
    
    if (localStorage.getItem('username') == null){
      pPicture.setAttribute("src", "/src/asset/profile-pic.svg")
    }

    // hr.style.color = '#e1e7ee'
    root.style.setProperty("--dark-text", "#4e6d89")
    root.style.setProperty("--mid-text", "#6c889e")
    root.style.setProperty("--back-color", "#f7f7f7")
    root.style.setProperty("--normal-text", "#8199aa")
    root.style.setProperty("--container-color", "#e1e7ee")
    root.style.setProperty("--box-border", "rgba(0, 0, 0, 0.102)")
    
    localStorage.setItem('clicked', clicked)
    clicked = 'false'
  }
}
}