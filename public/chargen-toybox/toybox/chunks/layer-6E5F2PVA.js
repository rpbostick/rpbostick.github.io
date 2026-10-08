import{a as F,b as G}from"./chunk-EMRGDJE7.js";import{b as X,d as Y,e as J,f as Q}from"./chunk-QIIEW4X7.js";import{c as A}from"./chunk-OYAUKGGD.js";import{a as _,c as $,d as M,e as U,f as q,g as H}from"./chunk-IS57XJVY.js";import{a as j}from"./chunk-WNI6WUEP.js";import{a as I,b as W,c as R,e as V}from"./chunk-3CDEPU2A.js";import"./chunk-I3M5WXFC.js";import"./chunk-DCANE7XH.js";var ne={"bottom-left":"Lower left","bottom-right":"Lower right","top-left":"Upper left","top-right":"Upper right"},Z=`
  .dock { position: fixed; z-index: 2147482500; display: flex; flex-direction: column; align-items: flex-start; gap: .35rem;
    max-width: calc(100vw - ${32}px); }
  .dock[data-open-y="up"] { flex-direction: column-reverse; }
  .dock[data-open-x="left"] { align-items: flex-end; }
  .dock .head, .dock .body, .dock .menu { background: var(--card); border: 1px solid var(--faint); border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .18); }
  .dock .head { display: inline-flex; align-items: center; gap: .25rem; padding: .25rem; }
  .dock[data-open-x="left"] .head { flex-direction: row-reverse; }
  .dock .grip { align-self: stretch; display: flex; align-items: center; padding: 0 .2rem; color: var(--soft);
    cursor: grab; touch-action: none; user-select: none; -webkit-user-select: none; }
  .dock.moving .grip { cursor: grabbing; }
  .dock .body { display: flex; flex-direction: column; gap: .3rem; padding: .4rem .5rem; max-width: 40rem;
    max-height: calc(100vh - 7rem); overflow: auto; }
  .dock:not(.drawing) .body { display: none; }
  .dock .menu { display: grid; gap: .25rem; padding: .4rem .6rem; }
  .dock .menu .title { font-size: .75rem; color: var(--soft); }`;function ee(o,{toggle:v,body:l,store:i,corner:d}){let f=o.defaultView,y=new AbortController,p=(t,a,r)=>t.addEventListener(a,r,{signal:y.signal}),n=o.createElement("div");n.className="dock",n.setAttribute("part","dock"),n.innerHTML=`
    <div class="head">
      <span class="grip" title="Drag to move the Draw button" aria-hidden="true">\u283F</span>
      <button type="button" class="btn place" aria-expanded="false" aria-label="Where the Draw button sits" title="Where the Draw button sits">\u22EF</button>
    </div>
    <div class="menu" role="group" aria-label="Where the Draw button sits" hidden>
      <span class="title">Draw button in the</span>
      ${_.map(t=>`<label class="check"><input type="radio" name="corner" value="${t}"> ${ne[t]} corner</label>`).join("")}
      <button type="button" class="btn reset" title="Put the Draw button back in its corner">Reset position</button>
    </div>
    <div class="body"></div>`;let s=t=>n.querySelector(t),m=s(".head");m.insertBefore(v,s(".place")),s(".body").append(...l);let u=q(i.read())??{corner:$(d,"<draw-layer>"),spot:null},x=()=>({width:o.documentElement.clientWidth,height:o.documentElement.clientHeight}),C=()=>{let{width:t,height:a}=m.getBoundingClientRect();return{width:t,height:a}};function w(){let{open:t,css:a}=U(u,x(),C());Object.assign(n.style,a),n.dataset.openX=t.x,n.dataset.openY=t.y;for(let r of n.querySelectorAll('input[name="corner"]'))r.checked=r.value===u.corner}function b(t,a=!0){u={...u,...t},w(),a&&i.write(H(u))}j(s(".grip"),{signal:y.signal,start:()=>{n.classList.add("moving");let{left:t,top:a}=m.getBoundingClientRect();return{x:t,y:a}},move:(t,a,r)=>b({spot:M({x:r.x+t,y:r.y+a},x(),C())},!1),end:()=>{n.classList.remove("moving"),b({})}});let g=s(".place");function c(t){s(".menu").hidden=!t,g.setAttribute("aria-expanded",String(t))}return p(g,"click",()=>c(s(".menu").hidden)),p(s(".menu"),"change",t=>{b({corner:$(t.target.value,"the corner menu"),spot:null}),c(!1)}),p(s(".reset"),"click",()=>{b({spot:null}),c(!1)}),p(s(".menu"),"keydown",t=>{t.key==="Escape"&&(c(!1),g.focus())}),p(f,"resize",()=>w()),w(),{el:n,setDrawing(t){n.classList.toggle("drawing",t)},setCorner(t){b({corner:$(t,"<draw-layer>"),spot:null},!1)},place:()=>structuredClone(u),destroy(){y.abort()}}}var T=1e3,re=`
  :host { display: block; }
  :host([hidden]) { display: none; }
  ${I}
  ${W}
  ${J}
  ${Z}
  .row { display: flex; flex-wrap: wrap; align-items: center; gap: .3rem .8rem; }
  .savestate { font-size: .75rem; color: var(--soft); }
  @media print { .toybox { display: none !important; } }`,ae=`
  :host { position: absolute; inset: 0; z-index: 2147480000; pointer-events: none; overflow: hidden; }
  :host([data-drawing="1"]) { pointer-events: auto; cursor: crosshair; touch-action: none; }
  svg { display: block; width: 100%; height: 100%; }
  @media screen { :host([data-show="0"]) svg { visibility: hidden; } }
  @media print { :host([data-print="0"]) { display: none !important; } }`,se=o=>o?.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o?.tagName??"");function fe(o,v){let l=o.ownerDocument,i=l.defaultView,d=o.target,f=V(i,o.toyboxKey);v.querySelector("style").textContent=re;let y=new AbortController,p=(e,h,D,te={})=>e.addEventListener(h,D,{...te,signal:y.signal}),n=l.createElement("div");n.setAttribute("data-toybox-ink",o.toyboxKey);let s=n.attachShadow({mode:"open"});s.innerHTML=`<style>${ae}</style>`;let m=X(l,"ink",`0 0 ${T} ${T}`);m.setAttribute("preserveAspectRatio","none"),s.append(m);let u=i.getComputedStyle(d).position,x=!!u&&u!=="static",C=d.style.position;x||(d.style.position="relative"),d.append(n);let w=()=>{let{width:e,height:h}=d.getBoundingClientRect();e>0&&h>0&&m.setAttribute("viewBox",`0 0 ${T} ${(T*h/e).toFixed(2)}`)},b=new i.ResizeObserver(w);b.observe(d),w();let g=!1,c=v.ownerDocument.createElement("span");c.className="savestate",c.setAttribute("aria-live","polite");let t=G(i,f,()=>({strokes:r.dump()}),e=>{c.textContent=e}),a=Q(l,{toggleLabel:o.label,onDraw:e=>{n.dataset.drawing=e?"1":"0",k.setDrawing(e)},onUndo:()=>r.undo(),onRedo:()=>r.redo(),onClear:()=>r.clear()}),r=new Y(m,{name:o.toyboxKey,brush:a.brush,onChange:()=>{g&&t.changed(),o.dispatchEvent(new i.CustomEvent("ink-change",{detail:{strokes:r.count},bubbles:!0,composed:!0}))}}),S=l.createElement("span");S.className="row",S.innerHTML=`<label class="check"><input type="checkbox" class="show"> Show scribbles</label>
    <label class="check"><input type="checkbox" class="print"> Print scribbles</label>`;let k=ee(l,{toggle:a.toggle,body:[a.el,S,c],store:R(i,`draw-layer.place.${f}`),corner:o.corner});v.append(k.el);let B=o.togglesScope==="browser"?"browser":f,N=R(i,`draw-layer.show.${B}`),z=R(i,`draw-layer.print.${B}`),E=S.querySelector(".show"),L=S.querySelector(".print");function K(e){E.checked=e,n.dataset.show=e?"1":"0"}function O(e){L.checked=e,n.dataset.print=e?"1":"0"}p(E,"change",()=>{K(E.checked),N.write(E.checked?"1":"0")}),p(L,"change",()=>{O(L.checked),z.write(L.checked?"1":"0")}),K(N.read()!=="0"),O(z.read()!=="0"),n.dataset.drawing="0",p(l,"keydown",e=>{if(!a.drawing||se(e.target))return;let h=e.ctrlKey||e.metaKey,D=e.key.toLowerCase();h&&D==="z"?(e.preventDefault(),e.shiftKey?r.redo():r.undo()):h&&D==="y"&&(e.preventDefault(),r.redo())});let P=F(f).then(e=>{e!==void 0&&r.load(A(e,`saved scribbles for ${o.toyboxKey}`).strokes),g=!0}).catch(e=>{throw c.textContent=`Saved scribbles could not be read (${e.message}); autosave is off.`,e});return P.catch(()=>{}),{restored:()=>P,strokes:()=>r.dump(),clear:()=>r.clear(),setDraw:e=>a.setDraw(e),setShow:K,setPrint:O,overlay:()=>n,flush:()=>t.flush(),saveState:()=>({strokes:r.dump()}),checkState:e=>A(e,o.toyboxKey),loadState(e){r.load(A(e,o.toyboxKey).strokes),g=!0,t.changed()},destroy(){t.flush(),y.abort(),a.destroy(),r.destroy(),b.disconnect(),n.remove(),x||(d.style.position=C),k.destroy(),k.el.remove()},attributeChanged(e){e==="corner"?k.setCorner(o.corner):e==="label"&&a.setToggleLabel(o.label)},place:()=>k.place()}}export{ae as OVERLAY_CSS,T as UNITS,fe as mount};
