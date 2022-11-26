export function getId(selector, parent = document) {
  return parent.getElementById(selector)
}


export function qs(selector, p = document) {
  return p.querySelector(selector)
}

export function qsa(selector, p = document) {
  return [...p.querySelectorAll(selector)]
}

export function addGlobalEvent(type, selector, callback, options, parent = document) {
  parent.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  },
  options
  )
}

export function addEvent(event, callback, parent = document) {
  parent.addEventListener(event, callback)
}

export function getStyle(selector, property) {
  return getComputedStyle(selector).getPropertyValue(property)
}

export function getStyleInt(selector, property) {
  return parseInt(getComputedStyle(selector).getPropertyValue(property))
}

export function addEditor (e, editor, val) {
  e.preventDefault()
  document.execCommand(editor, false, val)
}






const bold = getId("bold")
const faBold = qs('.fa-bold')

export function addImage(e, modifier) {
  e.preventDefault()
  const select = document.getSelection()
  const elem = document.createElement(modifier)
  const mod = container.querySelectorAll(modifier)
    
  let ranges = [];

  for (let i = 0; i < select.rangeCount; i++) {
    ranges[i] = select.getRangeAt(i);
  }
  
  const firstParent = ranges[0].endContainer.parentNode.nodeName
  

  
  
  if (firstParent == modifier.toUpperCase()) {
    bold.style.backgroundColor = "var(--back-color)";
    faBold.style.color = "var(--dark-text)";

    const txt = `</${modifier}>${ranges[0].toString()}<${modifier}>`
    ranges[0].deleteContents()
    ranges[0].innerHTML = txt
  } else {
    const copied = ranges[0].extractContents()
    bold.style.backgroundColor = "var(--dark-text)";
    faBold.style.color = "var(--back-color)";
    elem.appendChild(copied); 
    ranges[0].insertNode(elem)
  }
  
  mod.forEach(x => {
    if (x.innerHTML == "") {
      x.remove()  
    }
  })

}

