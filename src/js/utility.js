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