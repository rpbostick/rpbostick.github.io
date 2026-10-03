import{a as M,b as X,c as Y,d as J,e as K,f as Q}from"./chunk-74E4O3GB.js";import{b as w,d as F,e as W,f as q,g as G}from"./chunk-I6C6VYEJ.js";import"./chunk-XTBY6X2W.js";import{a as V,b as Z}from"./chunk-OYAUKGGD.js";import{a as H,b as j}from"./chunk-PU46EIHF.js";import{a as _}from"./chunk-I3M5WXFC.js";import"./chunk-6DHFEWGX.js";var P=1e3,ee=3,D=new WeakMap;function oe(t,r,o){return o<=0?[[0,0],[t,0],[t,r],[0,r]]:[[o,0],[t-o,0],[t-o,o],[t,o],[t,r-o],[t-o,r-o],[t-o,r],[o,r],[o,r-o],[0,r-o],[0,o],[o,o]]}var se=`
  ${H}
  ${j}
  ${q}
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
  .box.picking svg.ink { pointer-events: auto; cursor: crosshair; }
  .pic-outline { fill: none; stroke: #7aa6e0; stroke-width: 3; stroke-dasharray: 8 5; vector-effect: non-scaling-stroke; }
  .pic-handle { fill: #7aa6e0; cursor: nwse-resize; }`;function ge(t,{notch:r=0,theme:o,state:k}={}){let c=t.ownerDocument,u=c.defaultView,p=t.getBoundingClientRect();if(!p.width||!p.height)throw new Error("toybox.editImage: the image box has no size on the page");k&&(Z(k.images,"editImage state.images"),V(k.strokes,"editImage state.strokes"),D.set(t,{images:k.images,strokes:k.strokes}));let m=P,y=Number((P*p.height/p.width).toFixed(2)),te=r*P/p.width,a=Math.round(m*.3),$=`${-a} ${-a} ${m+2*a} ${y+2*a}`,R=oe(m,y,te),A=R.map(([i,f])=>`${i},${f}`).join(" "),O={x:0,y:0,w:m,h:y},L=o??(u.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(!Object.hasOwn(_,L))throw new Error(`toybox.editImage: theme "${L}": use light or dark`);let x=c.createElement("div");x.setAttribute("data-toybox-image-editor","");let S=x.attachShadow({mode:"open"});S.innerHTML=`<div class="toybox" data-theme="${L}"><style>${se}</style>
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
      <div class="stage"><div class="box" style="aspect-ratio:${m+2*a}/${y+2*a}"></div></div>
    </div></div>`;let l=i=>S.querySelector(i),h=l(".box"),C=w(c,"pics",$),T=w(c,"ink",$),N=w(c,"dim",$);N.innerHTML=`<path fill-rule="evenodd" d="M${-a},${-a}h${m+2*a}v${y+2*a}h${-(m+2*a)}Z M${A.split(" ").join(" L")}Z"/><polygon class="frame" points="${A}"/>`,h.append(C,N,T);let b=G(c,{tools:["pen","highlighter","eraser","move"],drawToggle:!1,onUndo:()=>d.undo(),onRedo:()=>d.redo(),onClear:()=>d.clear(),onPicking:i=>h.classList.toggle("picking",i),sampleAt:i=>W(u,{x:i.clientX,y:i.clientY,root:S,skip:f=>!!f.closest("svg.ink, svg.pics, svg.dim"),ink:{svg:T,strokes:d.history.strokes},pictures:{svg:C,images:g.images}})});b.watchPicks(h),l(".tools-slot").replaceWith(b.el),b.el.addEventListener("click",()=>h.classList.toggle("moving",b.tool==="move"));let g=new Q(C,{onChange:()=>{},movable:()=>b.tool==="move"}),d=new F(T,{name:"image",brush:b.brush,onChange:()=>{}}),U=D.get(t);g.load(U?.images??[]),d.load(U?.strokes??[]);let z=()=>Y(u,{box:O,width:Math.round(p.width*ee),height:Math.round(p.height*ee),images:g.list(),ink:d.markup(),clip:R}),E=async i=>g.add(await X(u,i),O);return new Promise(i=>{let f=new AbortController,n=(e,s,B)=>e.addEventListener(s,B,{signal:f.signal}),I=e=>{f.abort(),b.destroy(),d.destroy(),g.destroy(),x.remove(),t.focus?.(),i(e)};n(l(".cancel"),"click",()=>I(null)),n(l(".done"),"click",async()=>{let e=g.list(),s=d.dump(),v=!e.length&&!s.length?null:K(await z());t.localName==="img"?v?t.src=v:t.removeAttribute("src"):(t.style.backgroundImage=v?`url("${v}")`:"",t.style.backgroundSize=v?"100% 100%":""),D.set(t,{images:e,strokes:s}),I({src:v,images:e,strokes:s})}),n(l(".copy"),"click",async()=>{let e=z().then(s=>J(s,"image/png"));await u.navigator.clipboard.write([new u.ClipboardItem({"image/png":e})])}),n(l(".delete"),"click",()=>g.removeSelected()),n(l(".empty"),"click",()=>{g.load([]),d.clear()}),n(l(".file input"),"change",e=>{let s=e.target.files[0];e.target.value="",s&&E(s)}),n(h,"dragover",e=>e.preventDefault()),n(h,"drop",e=>{let s=M(e.dataTransfer);s&&(e.preventDefault(),E(s))}),n(c,"paste",e=>{let s=M(e.clipboardData);s&&(e.preventDefault(),E(s))}),n(c,"keydown",e=>{e.key==="Escape"&&I(null)}),c.body.append(x),l(".done").focus()})}export{ge as editImage,oe as notchedPolygon};
