(()=>{"use strict";function e(){const e={todo:t(".todo"),progress:t(".progress"),done:t(".done")};localStorage.setItem("tasks",JSON.stringify(e))}function t(e){const t=[];return document.querySelectorAll(`${e} .task .text`).forEach((e=>{t.push(e.textContent)})),t}function n(e,t){const n=o(e);t.appendChild(n)}function o(e){const t=document.createElement("div");t.classList.add("task");const n=document.createElement("span");n.classList.add("text"),n.textContent=e;const o=document.createElement("button");o.classList.add("close");const r=document.createElement("span");return r.classList.add("cross"),r.textContent="×",o.appendChild(r),t.appendChild(n),t.appendChild(o),o.addEventListener("click",s),o.addEventListener("mousedown",(e=>{e.stopPropagation()})),t}function s(t){t.preventDefault(),t.currentTarget.closest(".task").remove(),e()}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".adding"),s=document.querySelector(".todo"),r=document.querySelector(".progress"),c=document.querySelector(".done");function d(e){const t=e.currentTarget.closest(".container"),n=document.querySelector(".formWrapper");n&&n.remove();const o=document.createElement("div");o.classList.add("formWrapper");const d=document.createElement("form");d.classList.add("myForm");const l=document.createElement("textarea");l.classList.add("text_field"),l.placeholder="enter a title for this card ...",l.addEventListener("mousedown",(e=>{e.stopPropagation()}));const i=document.createElement("button");i.classList.add("formBtn","create"),i.textContent="Add Card";const u=document.createElement("button");u.classList.add("cross","close_form"),u.textContent="✕",d.appendChild(l),d.appendChild(i),d.appendChild(u),o.appendChild(d),t.querySelector(".todo")?(i.classList.add("toDoColumn"),s.appendChild(o)):t.querySelector(".progress")?(i.classList.add("processColumn"),r.appendChild(o)):t.querySelector(".done")&&(i.classList.add("doneColumn"),c.appendChild(o)),u.addEventListener("click",(e=>{e.preventDefault(),o.remove()})),i.addEventListener("click",a)}function a(t){t.preventDefault();const n=t.currentTarget,d=document.querySelector(".formWrapper"),a=document.querySelector(".text_field");if(""===a.value.trim())return;const l=o(a.value);n.classList.contains("toDoColumn")?s.appendChild(l):n.classList.contains("processColumn")?r.appendChild(l):n.classList.contains("doneColumn")&&c.appendChild(l),d.remove(),e()}t.forEach((e=>{e.addEventListener("click",d)})),function(e,t,o){const s=JSON.parse(localStorage.getItem("tasks"));s&&(s.todo.forEach((t=>{n(t,e)})),s.progress.forEach((e=>{n(e,t)})),s.done.forEach((e=>{n(e,o)})))}(s,r,c)})),document.addEventListener("DOMContentLoaded",(()=>{let t,n,o;const s=document.querySelector(".main-container");function r(){const e=document.querySelector(".placeholder");e&&e.remove()}function c(e){t.style.top=e.clientY-o+"px",t.style.left=e.clientX-n+"px",r();const s=function(){const e=document.createElement("div");return e.classList.add("placeholder"),e.style.width=t.offsetWidth+"px",e.style.height=t.offsetHeight+"px",e}(),c=e.target,d=c.closest(".task");if(d)d.closest(".tasks").insertBefore(s,d);else{const e=c.querySelector(".tasks");if(!e)return;e.appendChild(s)}}function d(n){console.log(n);const o=n.target,a=o.closest(".task");if(a)a.closest(".tasks").insertBefore(t,a);else{const e=o.querySelector(".tasks");if(!e)return;e.appendChild(t)}t.classList.remove("dragged"),t=void 0,r(),s.removeEventListener("mouseup",d),s.removeEventListener("mouseover",c),e()}s.addEventListener("mousedown",(function(e){if(e.preventDefault(),t=e.target.closest(".task"),!t)return;const{left:r,top:a}=t.getBoundingClientRect();n=e.clientX-r,o=e.clientY-a,t.classList.add("dragged"),t.style.cursor="grab",s.addEventListener("mouseup",d),s.addEventListener("mouseover",c)}))}))})();
//# sourceMappingURL=main.js.map