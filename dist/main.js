(()=>{"use strict";let e,t;function o(o,l,n){if(t=o,e&&t){const o=1.5*Math.floor(t.screenX-e.screenX),r=-1.5*Math.floor(t.screenY-e.screenY);o<25&&o>-25&&r<25&&r>-25&&(l.style.transform=`rotateX(${r/n}deg) rotateY(${o/n}deg)`)}e=t}let l=document.querySelectorAll(".box");function n(e){for(let t=0;t<l.length;t++){const o=parseInt(getComputedStyle(e).getPropertyValue("top")),l=parseInt(getComputedStyle(e).getPropertyValue("left")),n=document.querySelector(".container"),r=parseInt(getComputedStyle(e).getPropertyValue("width")),a=parseInt(getComputedStyle(e).getPropertyValue("height")),s=parseInt(getComputedStyle(n).getPropertyValue("height")),c=parseInt(getComputedStyle(n).getPropertyValue("width"));if(o<0&&l>c-r)return e.style.top="0",e.style.left=c-r+"px",localStorage.setItem(`top${t}`,"0"),localStorage.setItem(`left${t}`,c-r+"px"),void localStorage.setItem("container",n.innerHTML);if(o>s-a&&l<0)return e.style.top=s-a+"px",e.style.left="0",localStorage.setItem(`top${t}`,s-a+"px"),localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",n.innerHTML);if(o>s-a&&l>c-r)return e.style.top=s-a+"px",e.style.left=c-r+"px",localStorage.setItem(`top${t}`,s-a+"px"),localStorage.setItem(`left${t}`,c-r+"px"),void localStorage.setItem("container",n.innerHTML);if(o<0&&l<0)return e.style.top="0",e.style.left="0",localStorage.setItem(`top${t}`,"0"),localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",n.innerHTML);if(o<0)return e.style.top="0",localStorage.setItem(`top${t}`,"0"),void localStorage.setItem("container",n.innerHTML);if(l<0)return e.style.left="0",localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",n.innerHTML);if(o>s-a)return e.style.top=s-a+"px",localStorage.setItem(`top${t}`,s-a+"px"),void localStorage.setItem("container",n.innerHTML);if(l>c-r)return e.style.left=c-r+"px",localStorage.setItem(`left${t}`,c-r+"px"),void localStorage.setItem("container",n.innerHTML);localStorage.setItem("container",n.innerHTML)}}let r,a,s,c,i,d=3,u=document.getElementById("btn"),m=0,g=document.querySelector(".grab-container"),p=document.querySelectorAll(".box");document.getElementById("btn").addEventListener("mousedown",(function(){let e=setInterval((()=>{m++}),10);u.addEventListener("mousemove",(function t(){m>2&&(clearInterval(e),g.classList.remove("slide-left"),function(e){let t,l,r,a,s,c,i;localStorage.getItem("boxNum")>3&&(d=localStorage.getItem("boxNum")),console.log(d),d++,localStorage.setItem("boxNum",d);const u=document.createElement("div"),m=document.createTextNode(d);u.appendChild(m),u.classList.add("box"),u.style.opacity="0",u.style.zIndex="100",container.appendChild(u);let g=document.querySelectorAll(".box"),p=g[g.length-1];t=e.clientX,l=e.clientY;const y=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("top")),f=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("left"));function x(e){p.style.cursor="grabbing",p.style.boxShadow="0 30px 50px 0 rgba(0, 0, 0, 0.19)",p.style.opacity="1",window.addEventListener("mouseup",S);let n=e.clientX-(t-r),s=e.clientY-(l-a);p.style.left=`${n}px`,p.style.top=`${s}px`,o(e,p,1.3)}function S(){p.style.cursor="grab",p.style.boxShadow="none",p.style.transform="rotateX(0) rotateY(0)";const e=document.querySelector("#btn");e.style.backgroundColor="#f0f0f0",e.addEventListener("mouseenter",(()=>{e.style.backgroundColor="rgb(219, 224, 230)"})),e.addEventListener("mouseleave",(()=>{e.style.backgroundColor="#f0f0f0"})),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",S),n(p)}p.style.left=f-100+"px",p.style.top=y-50+"px",r=Math.floor(p.getBoundingClientRect().left),a=Math.floor(p.getBoundingClientRect().top),window.addEventListener("mousemove",x);for(let I=0;I<document.querySelectorAll(".box").length;I++){let v=document.querySelectorAll(".box")[I];function b(e){v=document.querySelectorAll(".box")[I];let o=parseInt(getComputedStyle(v).getPropertyValue("z-index"));t=e.clientX,l=e.clientY,i=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)o=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),i.push(o);let n=Math.max(...i);if(r=Math.floor(v.getBoundingClientRect().left),a=Math.floor(v.getBoundingClientRect().top),n<100)v.style.zIndex=n+1,localStorage.setItem(`index${I}`,n);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",w),window.addEventListener("mouseup",L)}function w(e){v=document.querySelectorAll(".box")[I],v.style.cursor="grabbing",v.style.boxShadow="0 30px 50px 0 rgba(0, 0, 0, 0.19)";let o=e.clientX-(t-r),n=e.clientY-(l-a);v.style.left=`${o}px`,v.style.top=`${n}px`,localStorage.setItem(`top${[I]}`,n+"px"),localStorage.setItem(`left${[I]}`,o+"px"),function(){if(c=e,s&&c){const e=1.5*Math.floor(c.screenX-s.screenX),t=-1.5*Math.floor(c.screenY-s.screenY);e<25&&e>-25&&t<25&&t>-25&&(v.style.transform=`rotateX(${t/1.3}deg) rotateY(${e/1.3}deg)`)}s=c}()}function L(){v=document.querySelectorAll(".box"),v=document.querySelectorAll(".box")[I],v.style.cursor="grab",v.style.boxShadow="none",v.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",L),n(v)}v.addEventListener("mousedown",b)}}(event),m=0,u.removeEventListener("mousemove",t))})),u.addEventListener("mouseup",(function(){function e(){g.classList.remove("slide-left"),window.removeEventListener("click",e)}g.classList.add("slide-left"),setTimeout((()=>{g.classList.remove("slide-left")}),5e3),setTimeout((()=>{window.addEventListener("click",e)}),0)})),window.addEventListener("mouseup",(function t(){clearInterval(e),m=0,window.removeEventListener("mouseup",t)}))})),function(){for(let e=0;e<p.length;e++){let t=document.querySelectorAll(".box")[e];function l(o){let l=parseInt(getComputedStyle(t).getPropertyValue("z-index"));r=o.clientX,a=o.clientY,i=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)l=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),i.push(l);let n=Math.max(...i);if(s=Math.floor(t.getBoundingClientRect().left),c=Math.floor(t.getBoundingClientRect().top),n<100)t.style.zIndex=n+1,localStorage.setItem(`index${e}`,n);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",d),window.addEventListener("mouseup",u)}function d(l){t.style.cursor="grabbing",t.style.boxShadow="0 30px 50px 0 rgba(0, 0, 0, 0.19)";const n=l.clientX-(r-s),i=l.clientY-(a-c);t.style.left=`${n}px`,t.style.top=`${i}px`,localStorage.setItem(`top${[e]}`,i+"px"),localStorage.setItem(`left${[e]}`,n+"px"),o(l,t,1.3)}function u(){t.style.cursor="grab",t.style.boxShadow="none",t.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",u),n(t)}t.addEventListener("mousedown",l)}}()})();