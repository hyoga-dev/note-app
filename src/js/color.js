import { getId, getStyle, qs, qsa } from "./utility.js";



export default function () {
  // * fore color and back color

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`


const colorPaletteBg = qs(".color-palette-bg")
const colorChangeBg = getId("bg-color")
const colorLeftBg = colorChangeBg.getBoundingClientRect().left
const colorItemBg = qsa(".color-item-bg")


// colorPaletteBg.style.left = colorLeftBg - 74 + "px";
// colorPaletteBg.style.top =  "80px";

colorChangeBg.addEventListener("click", () => colorPaletteBg.style.display = "grid" )
document.addEventListener("click", hideBg)


function hideBg(e) {
  const target = e.target
  const secondClass = target.className.split(" ")[1]
  const firstClass = target.className.split(" ")[0]
  if (target.className != "color-palette-bg" && secondClass != "color-item-bg") {
    if (target.id != "bg-color" && target.alt != "text-back-color") {
      if (firstClass != 'color-input')
      colorPaletteBg.style.display = "none";  
    }
  }
}

colorItemBg.forEach(item => {
  const bgColor = getStyle(item, "background-color")
  item.addEventListener("mousedown", e => {
    e.preventDefault()
    if (item.getAttribute('data-clear') == 'true') {
      // document.execCommand("backColor", false, 'var(--back-color)')
      document.execCommand("removeFormat", false)
      return
    }

    

    document.execCommand("backColor", false, rgb2hex(bgColor))
    if (rgb2hex(bgColor) != "#e1e54a") {
      document.execCommand("foreColor", false, "#ffffff")
    } else {
      document.execCommand("foreColor", false, "#dd5845")
    }
  })
})





const colorPalette = qs(".color-palette")
const colorChange = getId("color")
// const colorLeft = colorChange.getBoundingClientRect().left
const colorItem = qsa(".color-item")
const addLinkPop = qs(".add-link-pop")
const addImgPop = qs(".image")
// const link = getId("link")



// colorPalette.style.left = colorLeft - 74 + "px";
// colorPalette.style.top =  "80px";

colorChange.addEventListener("click", () => colorPalette.style.display = "grid" )
document.addEventListener("click", hide)


function hide(e) {
  const target = e.target
  const secondClass = target.className.split(" ")[1]
  if (target.className != "color-palette" && secondClass != "color-item") {
    if (target.id != "color" && target.alt != "text-color") {
      colorPalette.style.display = "none";  
    }
  }
  if (target.id != 'link' && secondClass != 'fa-link') {
    if (target !== addLinkPop && target.id != 'input-link') {
      addLinkPop.classList.remove('unhide') 
    }
  } 
  if (target.id != 'image' && secondClass != 'fa-image'){
    if (target != addImgPop && target.id != 'input-image') {
      addImgPop.classList.remove('unhide') 
    }
  }
}

colorItem.forEach(item => {
  const bgColor = getStyle(item, "background-color")
  item.addEventListener("mousedown", e => {
    e.preventDefault()
    if (item.getAttribute('data-clear') == 'true') {
      // document.execCommand("backColor", false, 'var(--back-color)')
      document.execCommand("removeFormat", false)
      return
    }
    
    document.execCommand("foreColor", false, rgb2hex(bgColor))
  })
})
}