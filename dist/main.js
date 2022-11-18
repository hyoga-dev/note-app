(()=>{"use strict";let e;function t(t,o){const n=t;if(e&&n){const t=1.5*Math.floor(n.screenX-e.screenX),s=-1.5*Math.floor(n.screenY-e.screenY);t<25&&t>-25&&s<25&&s>-25&&(o.style.transform=`rotateX(${s/1.3}deg) rotateY(${t/1.3}deg)`)}e=n}let o,n,s,l=document.querySelectorAll(".box");function r(e){for(let t=0;t<l.length;t++){const t=parseInt(getComputedStyle(e).getPropertyValue("top")),o=parseInt(getComputedStyle(e).getPropertyValue("left")),n=document.querySelector(".container"),s=parseInt(getComputedStyle(e).getPropertyValue("width")),l=parseInt(getComputedStyle(e).getPropertyValue("height")),r=parseInt(getComputedStyle(n).getPropertyValue("height")),i=parseInt(getComputedStyle(n).getPropertyValue("width"));if(t<0&&o>i-s)return e.style.top="0",e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);if(t>r-l&&o<0)return e.style.top=r-l+"px",e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t>r-l&&o>i-s)return e.style.top=r-l+"px",e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);if(t<0&&o<0)return e.style.top="0",e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t<0)return e.style.top="0",void localStorage.setItem("container",n.innerHTML);if(o<0)return e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t>r-l)return e.style.top=r-l+"px",void localStorage.setItem("container",n.innerHTML);if(o>i-s)return e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);localStorage.setItem("container",n.innerHTML)}}function i(e,t=document){return t.getElementById(e)}function c(e,t=document){return t.querySelector(e)}function d(e,t=document){return[...t.querySelectorAll(e)]}function a(e,t){return getComputedStyle(e).getPropertyValue(t)}let u,m,p,y,f,g,h=document.querySelectorAll(".box"),v=[];function x(){for(let e=0;e<h.length;e++){const o=document.querySelectorAll(".box")[e];function n(e){o.style.resize="both";let t=parseInt(getComputedStyle(o).getPropertyValue("z-index")),n=parseInt(getComputedStyle(o).getPropertyValue("width")),r=parseInt(getComputedStyle(o).getPropertyValue("height"));if(p=Math.floor(o.getBoundingClientRect().left),y=Math.floor(o.getBoundingClientRect().top),u=e.clientX,m=e.clientY,u-p<n-2||m-y<r-2){e.preventDefault(),f=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)t=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),f.push(t);let n=Math.max(...f);if(!e.shiftKey)if(n<100)o.style.zIndex=n+1;else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",s),window.addEventListener("mouseup",l)}}function s(e){g=!0,o.style.boxShadow="0 30px 50px 0 var(--box-border)";const n=e.clientX-(u-p),s=e.clientY-(m-y);o.style.left=`${n}px`,o.style.top=`${s}px`,t(e,o)}function l(){o.style.boxShadow="none",o.style.transform="rotateX(0) rotateY(0)",1!=g?(container.style.userSelect="auto",o.setAttribute("contenteditable",""),o.focus(),o.classList.add("selected")):(o.setAttribute("contenteditable","false"),container.style.userSelect="none",null!=sessionStorage.getItem("before")&&(v=JSON.parse(sessionStorage.getItem("before"))),v.unshift(i("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(v)),sessionStorage.setItem("after","moved"),i("redo").style.opacity="0.5",i("undo").style.opacity="1"),g=!1,window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",l),r(o)}o.addEventListener("mousedown",n),o.addEventListener("keydown",(()=>{o.style.height="auto"})),o.addEventListener("focus",(()=>{o.removeEventListener("mousedown",n),o.style.cursor="text"})),o.addEventListener("blur",(()=>{o.addEventListener("mousedown",n),o.style.cursor="default"}))}}const b=document.getElementById("undo"),E=document.getElementById("redo");let S=[];const L=document.getElementById("container");function I(){const e=new N("context-menu",".box"),t=JSON.parse(sessionStorage.getItem("before")),o=t.slice(0,t.length);E.style.opacity="1",o.length<=1?b.style.opacity="0.5":(S.unshift(o[0]),o.shift(),L.innerHTML=o[0],sessionStorage.setItem("before",JSON.stringify(o)),sessionStorage.setItem("after","not-moved"),x(),e.refreshEvent())}function w(){const e=new N("context-menu",".box"),t=JSON.parse(sessionStorage.getItem("before")),o=t.slice(0,t.length);if(b.style.opacity="1",S.length<=0)E.style.opacity="0.5";else{if("moved"==sessionStorage.getItem("after"))return S=[],void(E.style.opacity="0.5");L.innerHTML=S[0],o.push(S[0]),S.shift(),sessionStorage.setItem("before",JSON.stringify(o)),x(),e.refreshEvent()}}let C,k,T,B,A,M,Y,P=[];class N{constructor(e,t){this.menu=i(e),this.card=d(t),this.cardName=t,this.prevEvent,this.rightBox=function(e){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target,this.selectBox=e.currentTarget},this.clickRight=this.rightBox.bind(this)}}N.prototype.flyEffect=function(e,t){const o=e;if(this.prevEvent&&o){const e=1.5*Math.floor(o.screenX-this.prevEvent.screenX),n=-1.5*Math.floor(o.screenY-this.prevEvent.screenY);e<25&&e>-25&&n<25&&n>-25&&(t.style.transform=`rotateX(${n/1.3}deg) rotateY(${e/1.3}deg)`)}this.prevEvent=o},N.prototype.refreshFly=function(){let e=d(".box");const t=d(".box")[e.length-1];function o(e){t.style.resize="both";let o=parseInt(getComputedStyle(t).getPropertyValue("z-index")),l=parseInt(getComputedStyle(t).getPropertyValue("width")),r=parseInt(getComputedStyle(t).getPropertyValue("height"));if(T=Math.floor(t.getBoundingClientRect().left),B=Math.floor(t.getBoundingClientRect().top),C=e.clientX,k=e.clientY,C-T<l-2||k-B<r-2){if(e.preventDefault(),!e.shiftKey){A=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)o=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),A.push(o);let e=Math.max(...A);t.style.zIndex=e+1}window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)}}function n(e){M=!0,t.style.boxShadow="0 30px 50px 0 var(--box-border)";const o=e.clientX-(C-T),n=e.clientY-(k-B);t.style.left=`${o}px`,t.style.top=`${n}px`;const s=e;if(Y&&s){const e=1.5*Math.floor(s.screenX-Y.screenX),o=-1.5*Math.floor(s.screenY-Y.screenY);e<25&&e>-25&&o<25&&o>-25&&(t.style.transform=`rotateX(${o/1.3}deg) rotateY(${e/1.3}deg)`)}Y=s}function s(){t.style.boxShadow="none",t.style.transform="rotateX(0) rotateY(0)",1!=M?(container.style.userSelect="auto",t.setAttribute("contenteditable",""),t.focus(),t.classList.add("selected")):(t.setAttribute("contenteditable","false"),container.style.userSelect="none",null!=sessionStorage.getItem("before")&&(P=JSON.parse(sessionStorage.getItem("before"))),P.unshift(i("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(P)),sessionStorage.setItem("after","moved"),i("redo").style.opacity="0.5",i("undo").style.opacity="1"),M=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s),r(t)}t.addEventListener("mousedown",o),t.addEventListener("keydown",(()=>{t.style.height="auto"})),t.addEventListener("focus",(()=>{t.removeEventListener("mousedown",o),t.style.cursor="text"})),t.addEventListener("blur",(()=>{t.addEventListener("mousedown",o),t.style.cursor="default"}))},N.prototype.addContext=function(e){const t=e.target.className.split(" ")[1];"delete"==e.target.id||"side-delete"==t?this.removeSelected():"copy"==e.target.id?(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0))):"paste"==e.target.id?(this.paste(e),this.refreshEvent(),this.refreshFly()):"lock"==e.target.id||"unlock"==e.target.id||("unlockall"==e.target.id?this.unlockAll():"side-copy"==t?this.copiedText=document.activeElement.cloneNode(!0):"side-delete"==t&&(e.preventDefault(),this.removeSelected())),this.menu.style.display="none"},N.prototype.duplicate=function(){if("BODY"!=document.activeElement.tagName){if(this.copiedText=document.activeElement.cloneNode(!0),null!=this.copiedText){o==this.copiedText&&(this.copiedText=o.cloneNode(!0)),c(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),o=this.copiedText}}else alert("You are not selecting anything")},N.prototype.pasteKey=function(){if(null!=this.copiedText){s==this.copiedText&&(this.copiedText=s.cloneNode(!0)),c(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),s=this.copiedText,localStorage.setItem("container",document.getElementById("container").innerHTML)}},N.prototype.paste=function(e){if(null!=this.copiedText){n==this.copiedText&&(this.copiedText=n.cloneNode(!0)),c(".container").appendChild(this.copiedText);const t=e.clientX,o=e.clientY;this.copiedText.style.left=t-40+"px",this.copiedText.style.top=o-40+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),n=this.copiedText}localStorage.setItem("container",document.getElementById("container").innerHTML)},N.prototype.unlockAll=function(){this.card=d(this.cardName),this.card.forEach((e=>{if("false"==e.getAttribute("contenteditable")){e.classList.add("selected");const t=()=>document.addEventListener("mouseup",o),o=()=>{document.removeEventListener("mouseup",o)};setTimeout(t,200)}e.setAttribute("contenteditable",!0)}))},N.prototype.unlock=function(){this.select.setAttribute("contenteditable",!0),this.select.classList.add("selected")},N.prototype.removeSelected=function(){d(".selected").forEach((e=>{e.remove()})),localStorage.setItem("container",document.getElementById("container").innerHTML)},N.prototype.unselect=function(e){const t=e.target.className.split(" ")[1],o=e.target.className.split(" ").filter((e=>"box"===e)),n=d(".selected"),s=e.shiftKey;"box"!=o&&""!=o||n.forEach((o=>{"d-select-all"!=e.target.id&&"side-delete"!=t&&"d-delete"!=e.target.id&&"delete"!=e.target.id&&(s||o.classList.remove("selected"))}))},N.prototype.refreshEvent=function(){d(".box").forEach((e=>{e.addEventListener("contextmenu",this.clickRight)}))},N.prototype.shortCut=function(e){const t=e.ctrlKey,o=e.shiftKey,n=e.key;if(t&&o&&("C"!=n&&"c"!=n||(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0)))),t&&o&&("V"!=n&&"v"!=n||(e.preventDefault(),this.pasteKey(),this.refreshEvent(),this.refreshFly())),!t||"l"!=n&&"L"!=n||(e.preventDefault(),d(".selected").forEach((e=>{e.setAttribute("contenteditable",!1)}))),!t||"a"!=n&&"A"!=n||(e.preventDefault(),d(".box").forEach((e=>{e.classList.add("selected")}))),t&&o&&("l"!=n&&"L"!=n||(e.preventDefault(),this.unlockAll())),"Delete"==n&&this.removeSelected(),"ArrowDown"==n){const t=d(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t+5+"px"})))}if("ArrowUp"==n){const t=d(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t-5+"px"})))}if("ArrowRight"==n){const t=d(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t+5+"px"})))}if("ArrowLeft"==n){const t=d(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t-5+"px"})))}t&&("z"!=n&&"Z"!=n||"BODY"==document.activeElement.tagName&&I()),t&&("y"!=n&&"Y"!=n||"BODY"==document.activeElement.tagName&&w())},N.prototype.eventHandler=function(){document.addEventListener("mousedown",this.unselect),document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("mousedown",(e=>this.addContext(e))),document.activeElement.addEventListener("keydown",(e=>this.shortCut(e)))};const X=i("container");let D,V=[],$=document.getElementById("btn"),H=0,q=document.querySelector(".grab-container");function R(e,t,o){e.preventDefault(),document.execCommand(t,!1,o)}class z{constructor(e,t,o){this.menu=i(e),this.card=d(t),this.cardName=t,this.contextMenu=o,this.prevEvent,this.rightBox=e=>{if("container"==e.target.className){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target}},this.clickRight=this.rightBox.bind(this)}docRightClick(){document.addEventListener("contextmenu",this.clickRight)}}z.prototype.selectAll=function(){this.card=d(".box"),this.card.forEach((e=>{e.classList.add("selected")}))},z.prototype.addContext=function(){document.addEventListener("mousedown",(e=>{"d-paste"==e.target.id&&(this.contextMenu.paste(e,this.contextMenu.copiedText),this.contextMenu.refreshFly(),this.contextMenu.refreshEvent()),"d-select-all"==e.target.id&&this.selectAll(e),"d-delete"==e.target.id&&this.contextMenu.removeSelected(),"unlockall"==e.target.id&&this.contextMenu.unlockAll(),"context-undo"==e.target.id&&I(),"context-redo"==e.target.id&&w(),this.menu.style.display="none"}),!1)},document.getElementById("btn").addEventListener("mousedown",(function(){function e(){q.classList.remove("slide-left"),D=!0,function(e){let o,n,s,l,c,d,a,u;const m=document.createElement("div");m.classList.add("box"),m.style.opacity="0",m.style.zIndex="100",X.appendChild(m);let p=document.querySelectorAll(".box"),y=p[p.length-1];y.setAttribute("placeholder","type here..."),y.setAttribute("Spellcheck",!1),y.style.resize="both",o=e.clientX,n=e.clientY;const f=document.getElementById("btn"),g=parseInt(f.getBoundingClientRect().left),h=parseInt(f.getBoundingClientRect().top),v=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("top")),x=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("left"));function b(e){y.style.cursor="grabbing",y.style.boxShadow="0 30px 50px 0 var(--box-border)",y.style.opacity="1",window.addEventListener("mouseup",E);let r=e.clientX-(o-s),i=e.clientY-(n-l);y.style.left=`${r}px`,y.style.top=`${i}px`,t(e,y)}function E(){y.style.cursor="default",y.style.boxShadow="none",y.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",E),localStorage.setItem("container",document.getElementById("container").innerHTML),r(y)}y.style.left=x-86+"px",y.style.top=`${v}px`,s=Math.floor(g-60),l=Math.floor(h-25),window.addEventListener("mousemove",b);for(let S=0;S<document.querySelectorAll(".box").length;S++){let L=document.querySelectorAll(".box")[S];function I(e){let t=parseInt(getComputedStyle(L).getPropertyValue("z-index")),r=parseInt(getComputedStyle(L).getPropertyValue("width")),i=parseInt(getComputedStyle(L).getPropertyValue("height"));if(s=Math.floor(L.getBoundingClientRect().left),l=Math.floor(L.getBoundingClientRect().top),o=e.clientX,n=e.clientY,o-s<r-2||n-l<i-2){e.preventDefault(),a=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)t=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),a.push(t);let o=Math.max(...a);if(!e.shiftKey)if(o<100)L.style.zIndex=o+1,localStorage.setItem(`index${S}`,o);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",w),window.addEventListener("mouseup",k)}}function w(e){u=!0,L.style.boxShadow="0 30px 50px 0 var(--box-border)";let t=e.clientX-(o-s),r=e.clientY-(n-l);L.style.left=`${t}px`,L.style.top=`${r}px`,function(){if(d=e,c&&d){const e=1.5*Math.floor(d.screenX-c.screenX),t=-1.5*Math.floor(d.screenY-c.screenY);e<25&&e>-25&&t<25&&t>-25&&(L.style.transform=`rotateX(${t/1.3}deg) rotateY(${e/1.3}deg)`)}c=d}()}L.addEventListener("mousedown",I),L.addEventListener("focus",(()=>{L.removeEventListener("mousedown",I),L.style.cursor="text"})),L.addEventListener("blur",(()=>{L.addEventListener("mousedown",I),L.style.cursor="default"}));const C=new N("context-menu",".box");function k(){L.style.boxShadow="none",L.style.transform="rotateX(0) rotateY(0)",1!=u?(X.style.userSelect="auto",L.setAttribute("contenteditable",""),L.focus(),L.classList.add("selected")):(L.setAttribute("contenteditable","false"),X.style.userSelect="none",null!=sessionStorage.getItem("before")&&(V=JSON.parse(sessionStorage.getItem("before"))),V.unshift(i("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(V)),sessionStorage.setItem("after","moved"),i("redo").style.opacity="0.5",i("undo").style.opacity="1"),u=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",k),r(L),C.eventHandler(),C.refreshEvent()}}}(event),H=0,$.removeEventListener("mousemove",e)}$.addEventListener("mousemove",e),$.addEventListener("mouseup",(function(){function e(){q.classList.remove("slide-left"),window.removeEventListener("click",e)}q.classList.add("slide-left"),setTimeout((()=>{q.classList.remove("slide-left")}),5e3),setTimeout((()=>{window.addEventListener("click",e)}),0)})),window.addEventListener("mouseup",(function t(){D||$.removeEventListener("mousemove",e),D=!1,window.removeEventListener("mouseup",t)}))})),document.onkeyup=()=>{localStorage.setItem("container",document.getElementById("container").innerHTML)};const O=document.getElementById("undo"),J=document.getElementById("redo");O.addEventListener("click",I),J.addEventListener("click",w),x();const K=new N("context-menu",".box");K.refreshEvent(),K.eventHandler();const F=new z("document-context-menu","document-menu",K);F.docRightClick(),F.addContext(),document.getElementById("bold").addEventListener("mousedown",(()=>R(event,"bold"))),document.getElementById("h1").addEventListener("mousedown",(()=>R(event,"formatBlock","h1"))),document.getElementById("paragraph").addEventListener("mousedown",(()=>R(event,"formatBlock","p"))),document.getElementById("italic").addEventListener("mousedown",(()=>R(event,"italic"))),document.getElementById("align-right").addEventListener("mousedown",(()=>R(event,"justifyRight"))),document.getElementById("align-center").addEventListener("mousedown",(()=>R(event,"justifyCenter"))),document.getElementById("align-left").addEventListener("mousedown",(()=>R(event,"justifyLeft"))),document.getElementById("align-full").addEventListener("mousedown",(()=>R(event,"justifyFull"))),document.getElementById("ul").addEventListener("mousedown",(()=>R(event,"insertUnorderedList"))),document.getElementById("ol").addEventListener("mousedown",(()=>R(event,"insertOrderedList"))),function(){const e=e=>`#${e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map((e=>parseInt(e,10).toString(16).padStart(2,"0"))).join("")}`,t=c(".color-palette-bg"),o=i("bg-color"),n=o.getBoundingClientRect().left,s=d(".color-item-bg");t.style.left=n-74+"px",t.style.top="80px",o.addEventListener("click",(()=>t.style.display="grid")),document.addEventListener("click",(function(e){const o=e.target,n=o.className.split(" ")[1];"color-palette-bg"!=o.className&&"color-item-bg"!=n&&"bg-color"!=o.id&&"text-back-color"!=o.alt&&(t.style.display="none")})),s.forEach((t=>{const o=a(t,"background-color");t.addEventListener("mousedown",(t=>{t.preventDefault(),document.execCommand("backColor",!1,e(o)),"#e1e54a"!=e(o)?document.execCommand("foreColor",!1,"#ffffff"):document.execCommand("foreColor",!1,"#dd5845")}))}));const l=c(".color-palette"),r=i("color"),u=r.getBoundingClientRect().left,m=d(".color-item");l.style.left=u-74+"px",l.style.top="80px",r.addEventListener("click",(()=>l.style.display="grid")),document.addEventListener("click",(function(e){const t=e.target,o=t.className.split(" ")[1];"color-palette"!=t.className&&"color-item"!=o&&"color"!=t.id&&"text-color"!=t.alt&&(l.style.display="none")})),m.forEach((t=>{const o=a(t,"background-color");t.addEventListener("mousedown",(t=>{t.preventDefault(),document.execCommand("foreColor",!1,e(o))}))}))}(),function(){const e=c(".setting-container"),t=i("setting"),o=c(".setting-container"),n=c(".switch"),s=c(".switch-button"),l=c(":root"),r=i("profile-name"),d=i("add-btn"),a=i("profile"),u=i("text-color"),m=i("back-color"),p=i("ol-icon"),y=c("hr");let f="true";function g(){if("false"==f)return s.classList.add("switch-button-on"),d.setAttribute("src","/src/asset/add-button-dark.svg"),u.setAttribute("src","/src/asset/text-color-dark.svg"),m.setAttribute("src","/src/asset/bg-color-dark.svg"),a.setAttribute("src","/src/asset/profile-dark.svg"),p.setAttribute("src","/src/asset/ol dark.svg"),r.innerHTML="Bambang",y.style.color="#7e6340",l.style.setProperty("--dark-text","#ddd"),l.style.setProperty("--back-color","#33373a"),l.style.setProperty("--normal-text","#aaa"),l.style.setProperty("--container-color","#212223"),localStorage.setItem("clicked",f),void(f="true");"true"==f&&(s.classList.remove("switch-button-on"),d.setAttribute("src","/src/asset/add-button.svg"),u.setAttribute("src","/src/asset/text-color.svg"),m.setAttribute("src","/src/asset/back-color.svg"),a.setAttribute("src","/src/asset/profile-pic.svg"),p.setAttribute("src","/src/asset/ol.svg"),r.innerHTML="John doe",y.style.color="#e1e7ee",l.style.setProperty("--dark-text","#4e6d89"),l.style.setProperty("--back-color","#f7f7f7"),l.style.setProperty("--normal-text","#8199aa"),l.style.setProperty("--container-color","#e1e7ee"),localStorage.setItem("clicked",f),f="false")}e.onclick=e=>{"setting-container"!=e.target.className&&"close"!=e.target.id||(o.style.transform="translate(100%, 0)",o.style.opacity="0",o.style.backdropFilter="blur(0)")},t.onclick=()=>{o.style.transform="translate(0, 0)",o.style.opacity="1",o.style.backdropFilter="blur(2px)"},n.onclick=g,null!=localStorage.getItem("clicked")&&(f=localStorage.getItem("clicked")),g()}(),function(){const e=document.getElementById("select-drag");let t;function o(o){const n=o.clientX,l=o.clientY,r=e.getBoundingClientRect(),i=n-r.left,c=l-r.top;if(e.style.width=i+"px",e.style.height=c+"px",e.style.display="block",e.style.zIndex="999",n<t[0]){e.style.left=n+"px";const o=t[0]-n;e.style.width=o+"px"}if(l<t[1]){e.style.top=l+"px";const o=t[1]-l;e.style.height=o+"px"}document.querySelectorAll(".box").forEach((e=>{r.right>s(e)[0][0]&&r.bottom>s(e)[1][0]&&r.left<s(e)[0][1]&&r.top<s(e)[1][1]&&e.classList.add("selected"),(r.left>s(e)[0][1]||r.right<s(e)[0][0])&&e.classList.remove("selected"),(r.top>s(e)[1][1]||r.bottom<s(e)[1][0])&&e.classList.remove("selected")}))}function n(){const t=e.getBoundingClientRect();document.querySelectorAll(".box").forEach((e=>{t.right>s(e)[0][0]&&t.bottom>s(e)[1][0]?t.left<s(e)[0][1]&&t.top<s(e)[1][1]&&e.classList.add("selected"):e.blur()})),e.style.width="0",e.style.height="0",e.style.zIndex="-1",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)}function s(e){let t=e.getBoundingClientRect();return[[t.left,t.right],[t.top,t.bottom]]}document.onmousedown=s=>{if("container"==s.target.className&&(t=[s.clientX,s.clientY],0===s.button)){const t=s.clientX,l=s.clientY;e.getBoundingClientRect(),e.style.left=t+"px",e.style.top=l+"px",document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}}()})();