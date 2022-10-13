export function flyDown() {
    
  box.style.cursor = "grab";
  box.style.boxShadow = "none";
  let index1 = getComputedStyle(bix[0]).getPropertyValue("z-index")
  let index2 = getComputedStyle(bix[1]).getPropertyValue("z-index")
  let index3 = getComputedStyle(bix[2]).getPropertyValue("z-index")
  let index4 = getComputedStyle(bix[3]).getPropertyValue("z-index")

  document.getElementById("demo").innerHTML = "Box number : " + 0 + ", have index of: " + index1;
  document.getElementById("demo2").innerHTML = "Box number : " + 1 + ", have index of: " + index2;
  document.getElementById("demo3").innerHTML = "Box number : " + 2 + ", have index of: " + index3;
  document.getElementById("demo4").innerHTML = "Box number : " + 3 + ", have index of: " + index4;

  window.removeEventListener("mousemove", fly);
  window.removeEventListener("mouseup", flyDown);

  const top = parseInt(getComputedStyle(box).getPropertyValue('top')),
        left = parseInt(getComputedStyle(box).getPropertyValue('left')) ,
        container = document.querySelector(".container"),
        boxWidth = parseInt(getComputedStyle(box).getPropertyValue('width')), 
        boxHeight = parseInt(getComputedStyle(box).getPropertyValue('height')), 
        conHeight = parseInt(getComputedStyle(container).getPropertyValue("height")),
        conWidth = parseInt(getComputedStyle(container).getPropertyValue("width"));

  if (top < 0 &&  left > conWidth - boxWidth) {
    box.style.top = `0`;
    box.style.left = `${conWidth - boxWidth}px`;
    return

  } else if (top > conHeight - boxHeight &&  left < 0) {
    box.style.top = `${conHeight - boxHeight}px`;
    box.style.left = `0`;
    console.log(2)
    return

  } else if (top > conHeight - boxHeight &&  left > conWidth - boxWidth) {
    box.style.top = `${conHeight - boxHeight}px`;
    box.style.left = `${conWidth - boxWidth}px`;
    console.log(2)
    return

  } else if (top < 0 && left < 0) {
    box.style.top = "0";
    box.style.left = "0";
    return

  } else if ( top < 0) {
    box.style.top = "0" 
    return

  } else if (left < 0) {
    box.style.left = "0"
    return

  } else if (top > conHeight - boxHeight) {
    box.style.top = `${conHeight - boxHeight}px` 
    return

  } else if (left > conWidth - boxWidth) {
    box.style.left = `${conWidth - boxWidth}px` 
    return
  }
}