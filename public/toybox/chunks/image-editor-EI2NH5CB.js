import{a as C,b as G,c as J,d as K,e as Q,f as X}from"./chunk-CCR33JA5.js";import{b as x,d as F,e as Z,f as q}from"./chunk-QIIEW4X7.js";import{a as W,b as V}from"./chunk-OYAUKGGD.js";import{a as H,b as j}from"./chunk-3CDEPU2A.js";import{a as B}from"./chunk-I3M5WXFC.js";import"./chunk-DCANE7XH.js";var E=1e3,Y=3,I=new WeakMap;function te(t,i,o){return o<=0?[[0,0],[t,0],[t,i],[0,i]]:[[o,0],[t-o,0],[t-o,o],[t,o],[t,i-o],[t-o,i-o],[t-o,i],[o,i],[o,i-o],[0,i-o],[0,o],[o,o]]}var oe=`
  ${H}
  ${j}
  ${Z}
  .editor { position: fixed; inset: 0; z-index: 2147483600; display: flex; flex-direction: column; background: rgba(20,18,16,.85); }
  .ebar { display: flex; flex-wrap: wrap; align-items: center; gap: .35rem .6rem; padding: .5rem .8rem; background: var(--card);
    border-bottom: 1px solid var(--soft); }
  .ebar strong { font-weight: 600; }
  .ebar .hint { font-size: .75rem; color: var(--soft); }
  .ebar .file input { display: none; }
  .ebar .done { border-color: var(--accent); }
  .stage { flex: 1; min-height: 0; display: grid; place-items: center; padding: 1rem; }
  .box { position: relative; max-width: 100%; max-height: 100%; height: 100%; }
  .box svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; }
  .box svg.dim { pointer-events: none; }
  .box svg.dim path { fill: rgba(0,0,0,.55); }
  .box svg.dim .frame { fill: none; stroke: #fff; stroke-width: 3; vector-effect: non-scaling-stroke; }
  .box.moving svg.ink { pointer-events: none; }
  .pic-outline { fill: none; stroke: #7aa6e0; stroke-width: 3; stroke-dasharray: 8 5; vector-effect: non-scaling-stroke; }
  .pic-handle { fill: #7aa6e0; cursor: nwse-resize; }`;function le(t,{notch:i=0,theme:o,state:h}={}){let n=t.ownerDocument,f=n.defaultView,d=t.getBoundingClientRect();if(!d.width||!d.height)throw new Error("toybox.editImage: the image box has no size on the page");h&&(V(h.images,"editImage state.images"),W(h.strokes,"editImage state.strokes"),I.set(t,{images:h.images,strokes:h.strokes}));let g=E,v=Number((E*d.height/d.width).toFixed(2)),ee=i*E/d.width,s=Math.round(g*.3),$=`${-s} ${-s} ${g+2*s} ${v+2*s}`,M=te(g,v,ee),D=M.map(([m,w])=>`${m},${w}`).join(" "),P={x:0,y:0,w:g,h:v},S=o??(f.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(!Object.hasOwn(B,S))throw new Error(`toybox.editImage: theme "${S}": use light or dark`);let y=n.createElement("div");y.setAttribute("data-toybox-image-editor","");let R=y.attachShadow({mode:"open"});R.innerHTML=`<div class="toybox" data-theme="${S}"><style>${oe}</style>
    <div class="editor" role="dialog" aria-modal="true" aria-label="Image editor">
      <div class="ebar">
        <strong>Image</strong>
        <span class="hint">Paste (Ctrl+V) or drop a picture, or</span>
        <label class="btn file">Add picture <input type="file" accept="image/*"></label>
        <span class="tools-slot"></span>
        <button type="button" class="btn copy">Copy as PNG</button>
        <button type="button" class="btn delete">Delete picture</button>
        <button type="button" class="btn empty">Remove image</button>
        <button type="button" class="btn cancel">Cancel</button>
        <button type="button" class="btn done">Done</button>
      </div>
      <div class="stage"><div class="box" style="aspect-ratio:${g+2*s}/${v+2*s}"></div></div>
    </div></div>`;let c=m=>R.querySelector(m),k=c(".box"),O=x(n,"pics",$),A=x(n,"ink",$),N=x(n,"dim",$);N.innerHTML=`<path fill-rule="evenodd" d="M${-s},${-s}h${g+2*s}v${v+2*s}h${-(g+2*s)}Z M${D.split(" ").join(" L")}Z"/><polygon class="frame" points="${D}"/>`,k.append(O,N,A);let b=q(n,{tools:["pen","highlighter","eraser","move"],drawToggle:!1,onUndo:()=>l.undo(),onRedo:()=>l.redo(),onClear:()=>l.clear()});c(".tools-slot").replaceWith(b.el),b.el.addEventListener("click",()=>k.classList.toggle("moving",b.tool==="move"));let p=new X(O,{onChange:()=>{},movable:()=>b.tool==="move"}),l=new F(A,{name:"image",brush:b.brush,onChange:()=>{}}),U=I.get(t);p.load(U?.images??[]),l.load(U?.strokes??[]);let z=()=>J(f,{box:P,width:Math.round(d.width*Y),height:Math.round(d.height*Y),images:p.list(),ink:l.markup(),clip:M}),L=async m=>p.add(await G(f,m),P);return new Promise(m=>{let w=new AbortController,r=(e,a,_)=>e.addEventListener(a,_,{signal:w.signal}),T=e=>{w.abort(),b.destroy(),l.destroy(),p.destroy(),y.remove(),t.focus?.(),m(e)};r(c(".cancel"),"click",()=>T(null)),r(c(".done"),"click",async()=>{let e=p.list(),a=l.dump(),u=!e.length&&!a.length?null:Q(await z());t.localName==="img"?u?t.src=u:t.removeAttribute("src"):(t.style.backgroundImage=u?`url("${u}")`:"",t.style.backgroundSize=u?"100% 100%":""),I.set(t,{images:e,strokes:a}),T({src:u,images:e,strokes:a})}),r(c(".copy"),"click",async()=>{let e=z().then(a=>K(a,"image/png"));await f.navigator.clipboard.write([new f.ClipboardItem({"image/png":e})])}),r(c(".delete"),"click",()=>p.removeSelected()),r(c(".empty"),"click",()=>{p.load([]),l.clear()}),r(c(".file input"),"change",e=>{let a=e.target.files[0];e.target.value="",a&&L(a)}),r(k,"dragover",e=>e.preventDefault()),r(k,"drop",e=>{let a=C(e.dataTransfer);a&&(e.preventDefault(),L(a))}),r(n,"paste",e=>{let a=C(e.clipboardData);a&&(e.preventDefault(),L(a))}),r(n,"keydown",e=>{e.key==="Escape"&&T(null)}),n.body.append(y),c(".done").focus()})}export{le as editImage,te as notchedPolygon};
