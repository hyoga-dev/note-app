let outBox = document.querySelectorAll(".box");

export default function (box) {
  for (let i = 0; i < outBox.length; i++) {

    // box = box[i]

    const top = parseInt(getComputedStyle(box).getPropertyValue("top"));
    const left = parseInt(getComputedStyle(box).getPropertyValue("left"));
    const container = document.querySelector(".container");
    const editable = document.querySelector("#editable");
    
    const boxWidth = parseInt(getComputedStyle(box).getPropertyValue("width"));
    const boxHeight = parseInt(getComputedStyle(box).getPropertyValue("height"));
    const conHeight = parseInt(getComputedStyle(container).getPropertyValue("height"));
    const conWidth = parseInt(getComputedStyle(container).getPropertyValue("width"));
  
      if (top < 0 && left > conWidth - boxWidth) {
        box.style.top = `0`;
        box.style.left = `${conWidth - boxWidth}px`;
        localStorage.setItem(`top${i}`, `0`);
        localStorage.setItem(`left${i}`, `${conWidth - boxWidth}px`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (top > conHeight - boxHeight && left < 0) {
        box.style.top = `${conHeight - boxHeight}px`;
        box.style.left = `0`;
        localStorage.setItem(`top${i}`, `${conHeight - boxHeight}px`);
        localStorage.setItem(`left${i}`, `0`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (top > conHeight - boxHeight && left > conWidth - boxWidth) {
        box.style.top = `${conHeight - boxHeight}px`;
        box.style.left = `${conWidth - boxWidth}px`;
        localStorage.setItem(`top${i}`, `${conHeight - boxHeight}px`);
        localStorage.setItem(`left${i}`, `${conWidth - boxWidth}px`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (top < 0 && left < 0) {
        box.style.top = "0";
        box.style.left = "0";
        localStorage.setItem(`top${i}`, `0`);
        localStorage.setItem(`left${i}`, `0`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (top < 0) {
        box.style.top = "0";
        localStorage.setItem(`top${i}`, `0`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (left < 0) {
        box.style.left = "0";
        localStorage.setItem(`left${i}`, `0`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (top > conHeight - boxHeight) {
        box.style.top = `${conHeight - boxHeight}px`;
        localStorage.setItem(`top${i}`, `${conHeight - boxHeight}px`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      } else if (left > conWidth - boxWidth) {
        box.style.left = `${conWidth - boxWidth}px`;
        localStorage.setItem(`left${i}`, `${conWidth - boxWidth}px`);
        localStorage.setItem("container", editable.innerHTML)
        return;
      }
    localStorage.setItem("container", editable.innerHTML)
  }

}