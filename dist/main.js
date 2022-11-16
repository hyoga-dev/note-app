(()=>{"use strict";let e;function t(t,o){const n=t;if(e&&n){const t=1.5*Math.floor(n.screenX-e.screenX),s=-1.5*Math.floor(n.screenY-e.screenY);t<25&&t>-25&&s<25&&s>-25&&(o.style.transform=`rotateX(${s/1.3}deg) rotateY(${t/1.3}deg)`)}e=n}let o,n,s,l,r,i,c,d,a,u,p=document.querySelectorAll(".box");function m(e){for(let t=0;t<p.length;t++){const t=parseInt(getComputedStyle(e).getPropertyValue("top")),o=parseInt(getComputedStyle(e).getPropertyValue("left")),n=document.querySelector(".container"),s=parseInt(getComputedStyle(e).getPropertyValue("width")),l=parseInt(getComputedStyle(e).getPropertyValue("height")),r=parseInt(getComputedStyle(n).getPropertyValue("height")),i=parseInt(getComputedStyle(n).getPropertyValue("width"));if(t<0&&o>i-s)return e.style.top="0",e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);if(t>r-l&&o<0)return e.style.top=r-l+"px",e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t>r-l&&o>i-s)return e.style.top=r-l+"px",e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);if(t<0&&o<0)return e.style.top="0",e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t<0)return e.style.top="0",void localStorage.setItem("container",n.innerHTML);if(o<0)return e.style.left="0",void localStorage.setItem("container",n.innerHTML);if(t>r-l)return e.style.top=r-l+"px",void localStorage.setItem("container",n.innerHTML);if(o>i-s)return e.style.left=i-s+"px",void localStorage.setItem("container",n.innerHTML);localStorage.setItem("container",n.innerHTML)}}function y(e,t=document){return t.getElementById(e)}function f(e,t=document){return t.querySelector(e)}function g(e,t=document){return[...t.querySelectorAll(e)]}function h(e,t){return getComputedStyle(e).getPropertyValue(t)}let v=[];class x{constructor(e,t){this.menu=y(e),this.card=g(t),this.cardName=t,this.prevEvent,this.rightBox=function(e){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target,this.selectBox=e.currentTarget},this.clickRight=this.rightBox.bind(this)}}x.prototype.flyEffect=function(e,t){const o=e;if(this.prevEvent&&o){const e=1.5*Math.floor(o.screenX-this.prevEvent.screenX),n=-1.5*Math.floor(o.screenY-this.prevEvent.screenY);e<25&&e>-25&&n<25&&n>-25&&(t.style.transform=`rotateX(${n/1.3}deg) rotateY(${e/1.3}deg)`)}this.prevEvent=o},x.prototype.refreshFly=function(){let e=g(".box");const t=g(".box")[e.length-1];function o(e){t.style.resize="both";let o=parseInt(getComputedStyle(t).getPropertyValue("z-index")),a=parseInt(getComputedStyle(t).getPropertyValue("width")),u=parseInt(getComputedStyle(t).getPropertyValue("height"));if(i=Math.floor(t.getBoundingClientRect().left),c=Math.floor(t.getBoundingClientRect().top),l=e.clientX,r=e.clientY,l-i<a-2||r-c<u-2){if(e.preventDefault(),!e.shiftKey){d=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)o=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),d.push(o);let e=Math.max(...d);t.style.zIndex=e+1}window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)}}function n(e){a=!0,t.style.boxShadow="0 30px 50px 0 var(--box-border)";const o=e.clientX-(l-i),n=e.clientY-(r-c);t.style.left=`${o}px`,t.style.top=`${n}px`;const s=e;if(u&&s){const e=1.5*Math.floor(s.screenX-u.screenX),o=-1.5*Math.floor(s.screenY-u.screenY);e<25&&e>-25&&o<25&&o>-25&&(t.style.transform=`rotateX(${o/1.3}deg) rotateY(${e/1.3}deg)`)}u=s}function s(){1!=a?(container.style.userSelect="auto",t.setAttribute("contenteditable",""),t.focus(),t.classList.add("selected")):(t.setAttribute("contenteditable","false"),container.style.userSelect="none"),a=!1,t.style.boxShadow="none",t.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s),m(t),null!=sessionStorage.getItem("before")&&(v=JSON.parse(sessionStorage.getItem("before"))),v.unshift(y("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(v)),sessionStorage.setItem("after","moved"),y("redo").style.opacity="0.5",y("undo").style.opacity="1"}t.addEventListener("mousedown",o),t.addEventListener("keydown",(()=>{t.style.height="auto"})),t.addEventListener("focus",(()=>{t.removeEventListener("mousedown",o),t.style.cursor="text"})),t.addEventListener("blur",(()=>{t.addEventListener("mousedown",o),t.style.cursor="default"}))},x.prototype.addContext=function(e){const t=e.target.className.split(" ")[1];"delete"==e.target.id||"side-delete"==t?this.removeSelected():"copy"==e.target.id?(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0))):"paste"==e.target.id?(this.paste(e),this.refreshEvent(),this.refreshFly()):"lock"==e.target.id||"unlock"==e.target.id||("unlockall"==e.target.id?this.unlockAll():"side-copy"==t&&(this.copiedText=document.activeElement.cloneNode(!0))),this.menu.style.display="none"},x.prototype.duplicate=function(){if("BODY"!=document.activeElement.tagName){if(this.copiedText=document.activeElement.cloneNode(!0),null!=this.copiedText){o==this.copiedText&&(this.copiedText=o.cloneNode(!0)),f(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),o=this.copiedText}}else alert("You are not selecting anything")},x.prototype.pasteKey=function(){if(null!=this.copiedText){s==this.copiedText&&(this.copiedText=s.cloneNode(!0)),f(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),s=this.copiedText,localStorage.setItem("container",document.getElementById("container").innerHTML)}},x.prototype.paste=function(e){if(null!=this.copiedText){n==this.copiedText&&(this.copiedText=n.cloneNode(!0)),f(".container").appendChild(this.copiedText);const t=e.clientX,o=e.clientY;this.copiedText.style.left=t-40+"px",this.copiedText.style.top=o-40+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),n=this.copiedText}localStorage.setItem("container",document.getElementById("container").innerHTML)},x.prototype.unlockAll=function(){this.card=g(this.cardName),this.card.forEach((e=>{if("false"==e.getAttribute("contenteditable")){e.classList.add("selected");const t=()=>document.addEventListener("mouseup",o),o=()=>{document.removeEventListener("mouseup",o)};setTimeout(t,200)}e.setAttribute("contenteditable",!0)}))},x.prototype.unlock=function(){this.select.setAttribute("contenteditable",!0),this.select.classList.add("selected")},x.prototype.removeSelected=function(){g(".selected").forEach((e=>{e.remove()})),localStorage.setItem("container",document.getElementById("container").innerHTML)},x.prototype.unselect=function(e){const t=e.target.className.split(" ").filter((e=>"box"===e)),o=g(".selected"),n=e.shiftKey;"box"!=t&&""!=t||o.forEach((t=>{"d-select-all"!=e.target.id&&"d-delete"!=e.target.id&&"delete"!=e.target.id&&(n||t.classList.remove("selected"))}))},x.prototype.refreshEvent=function(){g(".box").forEach((e=>{e.addEventListener("contextmenu",this.clickRight)}))},x.prototype.shortCut=function(e){const t=e.ctrlKey,o=e.shiftKey,n=e.key;if(t&&o&&("C"!=n&&"c"!=n||(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0)))),t&&o&&("V"!=n&&"v"!=n||(e.preventDefault(),this.pasteKey(),this.refreshEvent(),this.refreshFly())),!t||"l"!=n&&"L"!=n||(e.preventDefault(),g(".selected").forEach((e=>{e.setAttribute("contenteditable",!1)}))),!t||"a"!=n&&"A"!=n||(e.preventDefault(),g(".box").forEach((e=>{e.classList.add("selected")}))),t&&o&&("l"!=n&&"L"!=n||(e.preventDefault(),this.unlockAll())),"Delete"==n&&this.removeSelected(),"ArrowDown"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t+5+"px"})))}if("ArrowUp"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t-5+"px"})))}if("ArrowRight"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t+5+"px"})))}if("ArrowLeft"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t-5+"px"})))}},x.prototype.eventHandler=function(){document.addEventListener("mousedown",this.unselect),document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("mousedown",(e=>this.addContext(e))),document.activeElement.addEventListener("keydown",(e=>this.shortCut(e)))};const b=y("container");let E,S,L,I,w,C,k,T=[],A=document.getElementById("btn"),B=0,M=document.querySelector(".grab-container"),P=document.querySelectorAll(".box"),Y=[];function X(){for(let e=0;e<P.length;e++){const o=document.querySelectorAll(".box")[e];function n(e){o.style.resize="both";let t=parseInt(getComputedStyle(o).getPropertyValue("z-index")),n=parseInt(getComputedStyle(o).getPropertyValue("width")),r=parseInt(getComputedStyle(o).getPropertyValue("height"));if(I=Math.floor(o.getBoundingClientRect().left),w=Math.floor(o.getBoundingClientRect().top),S=e.clientX,L=e.clientY,S-I<n-2||L-w<r-2){e.preventDefault(),C=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)t=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),C.push(t);let n=Math.max(...C);if(!e.shiftKey)if(n<100)o.style.zIndex=n+1;else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",s),window.addEventListener("mouseup",l)}}function s(e){k=!0,o.style.boxShadow="0 30px 50px 0 var(--box-border)";const n=e.clientX-(S-I),s=e.clientY-(L-w);o.style.left=`${n}px`,o.style.top=`${s}px`,t(e,o)}function l(){1!=k?(container.style.userSelect="auto",o.setAttribute("contenteditable",""),o.focus(),o.classList.add("selected")):(o.setAttribute("contenteditable","false"),container.style.userSelect="none"),k=!1,o.style.boxShadow="none",o.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",l),m(o),null!=sessionStorage.getItem("before")&&(Y=JSON.parse(sessionStorage.getItem("before"))),Y.unshift(y("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(Y)),sessionStorage.setItem("after","moved"),y("redo").style.opacity="0.5",y("undo").style.opacity="1"}o.addEventListener("mousedown",n),o.addEventListener("keydown",(()=>{o.style.height="auto"})),o.addEventListener("focus",(()=>{o.removeEventListener("mousedown",n),o.style.cursor="text"})),o.addEventListener("blur",(()=>{o.addEventListener("mousedown",n),o.style.cursor="default"}))}}function N(e,t,o){e.preventDefault(),document.execCommand(t,!1,o)}class V{constructor(e,t,o){this.menu=y(e),this.card=g(t),this.cardName=t,this.contextMenu=o,this.prevEvent,this.rightBox=e=>{if("container"==e.target.className){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target}},this.clickRight=this.rightBox.bind(this)}docRightClick(){document.addEventListener("contextmenu",this.clickRight)}}V.prototype.selectAll=function(){this.card=g(".box"),this.card.forEach((e=>{e.classList.add("selected")}))},V.prototype.addContext=function(){document.addEventListener("mousedown",(e=>{"d-paste"==e.target.id&&(this.contextMenu.paste(e,this.contextMenu.copiedText),this.contextMenu.refreshFly(),this.contextMenu.refreshEvent()),"d-select-all"==e.target.id&&this.selectAll(e),"d-delete"==e.target.id&&this.contextMenu.removeSelected(),"unlockall"==e.target.id&&this.contextMenu.unlockAll(),this.menu.style.display="none"}),!1)},document.getElementById("btn").addEventListener("mousedown",(function(){function e(){M.classList.remove("slide-left"),E=!0,function(e){let o,n,s,l,r,i,c,d;const a=document.createElement("div");a.classList.add("box"),a.style.opacity="0",a.style.zIndex="100",b.appendChild(a);let u=document.querySelectorAll(".box"),p=u[u.length-1];p.setAttribute("placeholder","type here..."),p.setAttribute("Spellcheck",!1),p.style.resize="both",o=e.clientX,n=e.clientY;const f=document.getElementById("btn"),g=parseInt(f.getBoundingClientRect().left),h=parseInt(f.getBoundingClientRect().top),v=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("top")),E=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("left"));function S(e){p.style.cursor="grabbing",p.style.boxShadow="0 30px 50px 0 var(--box-border)",p.style.opacity="1",window.addEventListener("mouseup",L);let r=e.clientX-(o-s),i=e.clientY-(n-l);p.style.left=`${r}px`,p.style.top=`${i}px`,t(e,p)}function L(){p.style.cursor="default",p.style.boxShadow="none",p.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",L),localStorage.setItem("container",document.getElementById("container").innerHTML),m(p)}p.style.left=E-86+"px",p.style.top=`${v}px`,s=Math.floor(g-60),l=Math.floor(h-25),window.addEventListener("mousemove",S);for(let I=0;I<document.querySelectorAll(".box").length;I++){let w=document.querySelectorAll(".box")[I];function C(e){let t=parseInt(getComputedStyle(w).getPropertyValue("z-index")),r=parseInt(getComputedStyle(w).getPropertyValue("width")),i=parseInt(getComputedStyle(w).getPropertyValue("height"));if(s=Math.floor(w.getBoundingClientRect().left),l=Math.floor(w.getBoundingClientRect().top),o=e.clientX,n=e.clientY,o-s<r-2||n-l<i-2){e.preventDefault(),c=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)t=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),c.push(t);let o=Math.max(...c);if(!e.shiftKey)if(o<100)w.style.zIndex=o+1,localStorage.setItem(`index${I}`,o);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",k),window.addEventListener("mouseup",B)}}function k(e){d=!0,w.style.boxShadow="0 30px 50px 0 var(--box-border)";let t=e.clientX-(o-s),c=e.clientY-(n-l);w.style.left=`${t}px`,w.style.top=`${c}px`,function(){if(i=e,r&&i){const e=1.5*Math.floor(i.screenX-r.screenX),t=-1.5*Math.floor(i.screenY-r.screenY);e<25&&e>-25&&t<25&&t>-25&&(w.style.transform=`rotateX(${t/1.3}deg) rotateY(${e/1.3}deg)`)}r=i}()}w.addEventListener("mousedown",C),w.addEventListener("focus",(()=>{w.removeEventListener("mousedown",C),w.style.cursor="text"})),w.addEventListener("blur",(()=>{w.addEventListener("mousedown",C),w.style.cursor="default"}));const A=new x("context-menu",".box");function B(){1!=d?(b.style.userSelect="auto",w.setAttribute("contenteditable",""),w.focus(),w.classList.add("selected")):(w.setAttribute("contenteditable","false"),b.style.userSelect="none"),d=!1,w=document.querySelectorAll(".box"),w=document.querySelectorAll(".box")[I],w.style.boxShadow="none",w.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",B),m(w),A.eventHandler(),A.refreshEvent(),null!=sessionStorage.getItem("before")&&(T=JSON.parse(sessionStorage.getItem("before"))),T.unshift(y("container").innerHTML),sessionStorage.setItem("before",JSON.stringify(T)),sessionStorage.setItem("after","moved"),y("redo").style.opacity="0.5",y("undo").style.opacity="1"}}}(event),B=0,A.removeEventListener("mousemove",e)}A.addEventListener("mousemove",e),A.addEventListener("mouseup",(function(){function e(){M.classList.remove("slide-left"),window.removeEventListener("click",e)}M.classList.add("slide-left"),setTimeout((()=>{M.classList.remove("slide-left")}),5e3),setTimeout((()=>{window.addEventListener("click",e)}),0)})),window.addEventListener("mouseup",(function t(){E||A.removeEventListener("mousemove",e),E=!1,window.removeEventListener("mouseup",t)}))})),document.onkeyup=()=>{localStorage.setItem("container",document.getElementById("container").innerHTML)},function(){const e=new x("context-menu",".box"),t=document.getElementById("undo"),o=document.getElementById("redo");t.addEventListener("click",(function(){const l=JSON.parse(sessionStorage.getItem("before")),r=l.slice(0,l.length);o.style.opacity="1",r.length<=1?t.style.opacity="0.5":(n.unshift(r[0]),r.shift(),s.innerHTML=r[0],console.log(r),sessionStorage.setItem("before",JSON.stringify(r)),sessionStorage.setItem("after","not-moved"),X(),e.refreshEvent())})),o.addEventListener("click",(function(){const t=JSON.parse(sessionStorage.getItem("before")),l=t.slice(0,t.length);if(!(n.length<=0))return"moved"==sessionStorage.getItem("after")?(n=[],void(o.style.opacity="0.5")):(s.innerHTML=n[0],l.push(n[0]),n.shift(),sessionStorage.setItem("before",JSON.stringify(l)),X(),void e.refreshEvent());o.style.opacity="0.5"}));let n=[];const s=document.getElementById("container")}(),X();const D=new x("context-menu",".box");D.refreshEvent(),D.eventHandler();const $=new V("document-context-menu","document-menu",D);$.docRightClick(),$.addContext(),document.getElementById("bold").addEventListener("mousedown",(()=>N(event,"bold"))),document.getElementById("h1").addEventListener("mousedown",(()=>N(event,"formatBlock","h1"))),document.getElementById("paragraph").addEventListener("mousedown",(()=>N(event,"formatBlock","p"))),document.getElementById("italic").addEventListener("mousedown",(()=>N(event,"italic"))),document.getElementById("align-right").addEventListener("mousedown",(()=>N(event,"justifyRight"))),document.getElementById("align-center").addEventListener("mousedown",(()=>N(event,"justifyCenter"))),document.getElementById("align-left").addEventListener("mousedown",(()=>N(event,"justifyLeft"))),document.getElementById("align-full").addEventListener("mousedown",(()=>N(event,"justifyFull"))),document.getElementById("ul").addEventListener("mousedown",(()=>N(event,"insertUnorderedList"))),document.getElementById("ol").addEventListener("mousedown",(()=>N(event,"insertOrderedList"))),function(){const e=e=>`#${e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map((e=>parseInt(e,10).toString(16).padStart(2,"0"))).join("")}`,t=f(".color-palette-bg"),o=y("bg-color"),n=o.getBoundingClientRect().left,s=g(".color-item-bg");t.style.left=n-74+"px",t.style.top="80px",o.addEventListener("click",(()=>t.style.display="grid")),document.addEventListener("click",(function(e){const o=e.target,n=o.className.split(" ")[1];"color-palette-bg"!=o.className&&"color-item-bg"!=n&&"bg-color"!=o.id&&"text-back-color"!=o.alt&&(t.style.display="none")})),s.forEach((t=>{const o=h(t,"background-color");t.addEventListener("mousedown",(t=>{t.preventDefault(),document.execCommand("backColor",!1,e(o)),"#e1e54a"!=e(o)?document.execCommand("foreColor",!1,"#ffffff"):document.execCommand("foreColor",!1,"#dd5845")}))}));const l=f(".color-palette"),r=y("color"),i=r.getBoundingClientRect().left,c=g(".color-item");l.style.left=i-74+"px",l.style.top="80px",r.addEventListener("click",(()=>l.style.display="grid")),document.addEventListener("click",(function(e){const t=e.target,o=t.className.split(" ")[1];"color-palette"!=t.className&&"color-item"!=o&&"color"!=t.id&&"text-color"!=t.alt&&(l.style.display="none")})),c.forEach((t=>{const o=h(t,"background-color");t.addEventListener("mousedown",(t=>{t.preventDefault(),document.execCommand("foreColor",!1,e(o))}))}))}(),function(){const e=f(".setting-container"),t=y("setting"),o=f(".setting-container"),n=f(".switch"),s=f(".switch-button"),l=f(":root"),r=y("text-color"),i=y("back-color"),c=y("ol-icon");let d="true";function a(){if("false"==d)return s.classList.add("switch-button-on"),r.setAttribute("src","/src/asset/text-color-dark.svg"),i.setAttribute("src","/src/asset/bg-color-dark.svg"),c.setAttribute("src","/src/asset/ol dark.svg"),l.style.setProperty("--dark-text","#f7f7f7"),l.style.setProperty("--back-color","#4e6d89"),l.style.setProperty("--normal-text","#e1e7ee"),l.style.setProperty("--container-color","#4b667e"),localStorage.setItem("clicked",d),void(d="true");"true"==d&&(s.classList.remove("switch-button-on"),r.setAttribute("src","/src/asset/text-color.svg"),i.setAttribute("src","/src/asset/back-color.svg"),c.setAttribute("src","/src/asset/ol.svg"),l.style.setProperty("--dark-text","#4e6d89"),l.style.setProperty("--back-color","#f7f7f7"),l.style.setProperty("--normal-text","#8199aa"),l.style.setProperty("--container-color","#e1e7ee"),localStorage.setItem("clicked",d),d="false")}e.onclick=e=>{"setting-container"!=e.target.className&&"close"!=e.target.id||(o.style.transform="translate(100%, 0)",o.style.opacity="0",o.style.backdropFilter="blur(0)")},t.onclick=()=>{o.style.transform="translate(0, 0)",o.style.opacity="1",o.style.backdropFilter="blur(2px)"},n.onclick=a,null!=localStorage.getItem("clicked")&&(d=localStorage.getItem("clicked")),a()}(),function(){const e=document.getElementById("select-drag");let t;function o(o){const n=o.clientX,l=o.clientY,r=e.getBoundingClientRect(),i=n-r.left,c=l-r.top;if(e.style.width=i+"px",e.style.height=c+"px",e.style.display="block",e.style.zIndex="999",n<t[0]){e.style.left=n+"px";const o=t[0]-n;e.style.width=o+"px"}if(l<t[1]){e.style.top=l+"px";const o=t[1]-l;e.style.height=o+"px"}document.querySelectorAll(".box").forEach((e=>{r.right>s(e)[0][0]&&r.bottom>s(e)[1][0]&&r.left<s(e)[0][1]&&r.top<s(e)[1][1]&&e.classList.add("selected"),(r.left>s(e)[0][1]||r.right<s(e)[0][0])&&e.classList.remove("selected"),(r.top>s(e)[1][1]||r.bottom<s(e)[1][0])&&e.classList.remove("selected")}))}function n(){const t=e.getBoundingClientRect();document.querySelectorAll(".box").forEach((e=>{t.right>s(e)[0][0]&&t.bottom>s(e)[1][0]?t.left<s(e)[0][1]&&t.top<s(e)[1][1]&&e.classList.add("selected"):e.blur()})),e.style.width="0",e.style.height="0",e.style.zIndex="-1",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)}function s(e){let t=e.getBoundingClientRect();return[[t.left,t.right],[t.top,t.bottom]]}document.onmousedown=s=>{if("container"==s.target.className&&(t=[s.clientX,s.clientY],0===s.button)){const t=s.clientX,l=s.clientY;e.getBoundingClientRect(),e.style.left=t+"px",e.style.top=l+"px",document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)}}}()})();