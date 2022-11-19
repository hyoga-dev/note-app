


export default function () {
  // * select on drag

const select = document.getElementById("select-drag")
let startArea;



document.onmousedown = (e) => {
  if (e.target.className == "container") {
    startArea = [e.clientX, e.clientY]

    if (e.button === 0) { 
    const x = e.clientX
    const y = e.clientY
    // const selectPos = select.getBoundingClientRect()

    select.style.left = x + "px";
    select.style.top = y + "px";
    document.addEventListener("mousemove", dragging)
    document.addEventListener("mouseup", removeDragging)
    }
  }
}









function dragging(e) {
  const x = e.clientX
  const y = e.clientY
  const selectPos = select.getBoundingClientRect()

  const selectWidth = x - selectPos.left
  const selectHeight = y -  selectPos.top

  select.style.width = selectWidth + "px";
  select.style.height = selectHeight + "px";
  select.style.display = "block";
  select.style.zIndex = "999";

  if (x < startArea[0]) {
    select.style.left = x + "px";
    const selectWidthOver = startArea[0] - x
    select.style.width = selectWidthOver + "px";
  }
  
  if (y < startArea[1]) {
    select.style.top = y + "px";
    const selectHeightOver = startArea[1] - y
    select.style.height = selectHeightOver + "px";
  }

  const box = document.querySelectorAll(".box");

  box.forEach(elem => {
    if (selectPos.right > getPos(elem)[0][0] && selectPos.bottom > getPos(elem)[1][0]) {
      if (selectPos.left < getPos(elem)[0][1] && selectPos.top < getPos(elem)[1][1]) {
        elem.classList.add("selected")
      }
    } 
    
    
    
    if (selectPos.left > getPos(elem)[0][1] || selectPos.right < getPos(elem)[0][0] ) {
        elem.classList.remove("selected")
    }

    if (selectPos.top > getPos(elem)[1][1] || selectPos.bottom < getPos(elem)[1][0]) {
        elem.classList.remove("selected")
      }

  })
}




function removeDragging() {
  const selectPos = select.getBoundingClientRect()
  const box = document.querySelectorAll(".box");


  box.forEach(elem => {
    if (selectPos.right > getPos(elem)[0][0] && selectPos.bottom > getPos(elem)[1][0]) {
      if (selectPos.left < getPos(elem)[0][1] && selectPos.top < getPos(elem)[1][1])
      elem.classList.add("selected")
    } else {
      elem.blur()
    }
  })

  select.style.width = "0";
  select.style.height = "0";
  select.style.zIndex = "-1";
  document.removeEventListener("mousemove", dragging)
  document.removeEventListener("mouseup", removeDragging)
}










function getPos(elem) {
    let pos = elem.getBoundingClientRect()
    return [[pos.left, pos.right], [pos.top, pos.bottom]]
}
}