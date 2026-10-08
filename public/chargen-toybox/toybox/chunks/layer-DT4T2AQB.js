import{a as G,b as J}from"./chunk-EMRGDJE7.js";import{b as Y,d as j,e as F,f as Q,g as Z}from"./chunk-REYH3XM5.js";import{c as A}from"./chunk-OYAUKGGD.js";import{a as _,c as $,d as M,e as U,f as q,g as H}from"./chunk-IS57XJVY.js";import{a as X}from"./chunk-WNI6WUEP.js";import{a as I,b as W,c as R,e as V}from"./chunk-3CDEPU2A.js";import"./chunk-I3M5WXFC.js";import"./chunk-DCANE7XH.js";var re={"bottom-left":"Lower left","bottom-right":"Lower right","top-left":"Upper left","top-right":"Upper right"},ee=`
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
  .dock .menu .title { font-size: .75rem; color: var(--soft); }`;function te(r,{toggle:x,body:c,store:i,corner:d}){let y=r.defaultView,f=new AbortController,p=(t,a,n)=>t.addEventListener(a,n,{signal:f.signal}),o=r.createElement("div");o.className="dock",o.setAttribute("part","dock"),o.innerHTML=`
    <div class="head">
      <span class="grip" title="Drag to move the Draw button" aria-hidden="true">\u283F</span>
      <button type="button" class="btn place" aria-expanded="false" aria-label="Where the Draw button sits" title="Where the Draw button sits">\u22EF</button>
    </div>
    <div class="menu" role="group" aria-label="Where the Draw button sits" hidden>
      <span class="title">Draw button in the</span>
      ${_.map(t=>`<label class="check"><input type="radio" name="corner" value="${t}"> ${re[t]} corner</label>`).join("")}
      <button type="button" class="btn reset" title="Put the Draw button back in its corner">Reset position</button>
    </div>
    <div class="body"></div>`;let s=t=>o.querySelector(t),u=s(".head");u.insertBefore(x,s(".place")),s(".body").append(...c);let m=q(i.read())??{corner:$(d,"<draw-layer>"),spot:null},v=()=>({width:r.documentElement.clientWidth,height:r.documentElement.clientHeight}),C=()=>{let{width:t,height:a}=u.getBoundingClientRect();return{width:t,height:a}};function w(){let{open:t,css:a}=U(m,v(),C());Object.assign(o.style,a),o.dataset.openX=t.x,o.dataset.openY=t.y;for(let n of o.querySelectorAll('input[name="corner"]'))n.checked=n.value===m.corner}function g(t,a=!0){m={...m,...t},w(),a&&i.write(H(m))}X(s(".grip"),{signal:f.signal,start:()=>{o.classList.add("moving");let{left:t,top:a}=u.getBoundingClientRect();return{x:t,y:a}},move:(t,a,n)=>g({spot:M({x:n.x+t,y:n.y+a},v(),C())},!1),end:()=>{o.classList.remove("moving"),g({})}});let h=s(".place");function l(t){s(".menu").hidden=!t,h.setAttribute("aria-expanded",String(t))}return p(h,"click",()=>l(s(".menu").hidden)),p(s(".menu"),"change",t=>{g({corner:$(t.target.value,"the corner menu"),spot:null}),l(!1)}),p(s(".reset"),"click",()=>{g({spot:null}),l(!1)}),p(s(".menu"),"keydown",t=>{t.key==="Escape"&&(l(!1),h.focus())}),p(y,"resize",()=>w()),w(),{el:o,setDrawing(t){o.classList.toggle("drawing",t)},setCorner(t){g({corner:$(t,"<draw-layer>"),spot:null},!1)},place:()=>structuredClone(m),destroy(){f.abort()}}}var T=1e3,ae=`
  :host { display: block; }
  :host([hidden]) { display: none; }
  ${I}
  ${W}
  ${Q}
  ${ee}
  .row { display: flex; flex-wrap: wrap; align-items: center; gap: .3rem .8rem; }
  .savestate { font-size: .75rem; color: var(--soft); }
  @media print { .toybox { display: none !important; } }`,se=`
  :host { position: absolute; inset: 0; z-index: 2147480000; pointer-events: none; overflow: hidden; }
  :host([data-drawing="1"]) { pointer-events: auto; cursor: crosshair; touch-action: none; }
  svg { display: block; width: 100%; height: 100%; }
  @media screen { :host([data-show="0"]) svg { visibility: hidden; } }
  @media print { :host([data-print="0"]) { display: none !important; } }`,ie=r=>r?.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r?.tagName??"");function we(r,x){let c=r.ownerDocument,i=c.defaultView,d=r.target,y=V(i,r.toyboxKey);x.querySelector("style").textContent=ae;let f=new AbortController,p=(e,b,D,oe={})=>e.addEventListener(b,D,{...oe,signal:f.signal}),o=c.createElement("div");o.setAttribute("data-toybox-ink",r.toyboxKey);let s=o.attachShadow({mode:"open"});s.innerHTML=`<style>${se}</style>`;let u=Y(c,"ink",`0 0 ${T} ${T}`);u.setAttribute("preserveAspectRatio","none"),s.append(u);let m=i.getComputedStyle(d).position,v=!!m&&m!=="static",C=d.style.position;v||(d.style.position="relative"),d.append(o);let w=()=>{let{width:e,height:b}=d.getBoundingClientRect();e>0&&b>0&&u.setAttribute("viewBox",`0 0 ${T} ${(T*b/e).toFixed(2)}`)},g=new i.ResizeObserver(w);g.observe(d),w();let h=!1,l=x.ownerDocument.createElement("span");l.className="savestate",l.setAttribute("aria-live","polite");let t=J(i,y,()=>({strokes:n.dump()}),e=>{l.textContent=e}),a=Z(c,{toggleLabel:r.label,onDraw:e=>{o.dataset.drawing=e?"1":"0",k.setDrawing(e)},onUndo:()=>n.undo(),onRedo:()=>n.redo(),onClear:()=>n.clear(),sampleAt:e=>F(i,{x:e.clientX,y:e.clientY,root:c,skip:b=>b===o,ink:{svg:u,strokes:n.history.strokes}})});a.watchPicks(o);let n=new j(u,{name:r.toyboxKey,brush:a.brush,onChange:()=>{h&&t.changed(),r.dispatchEvent(new i.CustomEvent("ink-change",{detail:{strokes:n.count},bubbles:!0,composed:!0}))}}),S=c.createElement("span");S.className="row",S.innerHTML=`<label class="check"><input type="checkbox" class="show"> Show scribbles</label>
    <label class="check"><input type="checkbox" class="print"> Print scribbles</label>`;let k=te(c,{toggle:a.toggle,body:[a.el,S,l],store:R(i,`draw-layer.place.${y}`),corner:r.corner});x.append(k.el);let B=r.togglesScope==="browser"?"browser":y,N=R(i,`draw-layer.show.${B}`),z=R(i,`draw-layer.print.${B}`),E=S.querySelector(".show"),L=S.querySelector(".print");function K(e){E.checked=e,o.dataset.show=e?"1":"0"}function O(e){L.checked=e,o.dataset.print=e?"1":"0"}p(E,"change",()=>{K(E.checked),N.write(E.checked?"1":"0")}),p(L,"change",()=>{O(L.checked),z.write(L.checked?"1":"0")}),K(N.read()!=="0"),O(z.read()!=="0"),o.dataset.drawing="0",p(c,"keydown",e=>{if(!a.drawing||ie(e.target))return;let b=e.ctrlKey||e.metaKey,D=e.key.toLowerCase();b&&D==="z"?(e.preventDefault(),e.shiftKey?n.redo():n.undo()):b&&D==="y"&&(e.preventDefault(),n.redo())});let P=G(y).then(e=>{e!==void 0&&n.load(A(e,`saved scribbles for ${r.toyboxKey}`).strokes),h=!0}).catch(e=>{throw l.textContent=`Saved scribbles could not be read (${e.message}); autosave is off.`,e});return P.catch(()=>{}),{restored:()=>P,strokes:()=>n.dump(),clear:()=>n.clear(),setDraw:e=>a.setDraw(e),setShow:K,setPrint:O,overlay:()=>o,flush:()=>t.flush(),saveState:()=>({strokes:n.dump()}),checkState:e=>A(e,r.toyboxKey),loadState(e){n.load(A(e,r.toyboxKey).strokes),h=!0,t.changed()},destroy(){t.flush(),f.abort(),a.destroy(),n.destroy(),g.disconnect(),o.remove(),v||(d.style.position=C),k.destroy(),k.el.remove()},attributeChanged(e){e==="corner"?k.setCorner(r.corner):e==="label"&&a.setToggleLabel(r.label)},place:()=>k.place()}}export{se as OVERLAY_CSS,T as UNITS,we as mount};
