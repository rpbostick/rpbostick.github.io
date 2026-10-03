import{a as Re}from"./chunk-WNI6WUEP.js";import{a as ye,b as J,c as xe,d as we,e as ve,f as Y,g as I,h as Se,i as j,j as G,k as De,l as Ee,m as ze,n as ke,o as Ce,p as Me,q as $e}from"./chunk-4RRQYAXX.js";import{a as B,c as ge}from"./chunk-XTBY6X2W.js";import{b as be,c as U}from"./chunk-L5VCWBLG.js";import{a as fe,b as he}from"./chunk-PU46EIHF.js";import{b as me}from"./chunk-IL75OGFX.js";import"./chunk-I3M5WXFC.js";import"./chunk-6DHFEWGX.js";var tt={1:[5],2:[3,7],3:[3,5,7],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]},Oe=[4,6,8,10,12,20],ot=1100,nt=90,it=o=>Oe.includes(o)?`d${o}`:"dn";function K(o,e,i,r){let n=o.createElement("div");if(e===6&&r!=="numeral"){n.className=`face pips-${r}`;for(let d=1;d<=9;d++){let s=o.createElement("span");tt[i].includes(d)&&(s.className="pip"),n.append(s)}return n}return n.className=`face numeral${i.length>2?" wider":i.length>1?" wide":""}`,n.textContent=i,n}function rt(o,e,i,r){let n=o.createElement("div");return n.className=`die ${it(e)}${i}`,n.style.setProperty("--i",r),n.style.setProperty("--spin",`${(Math.random()<.5?-1:1)*(540+Math.floor(Math.random()*360))}deg`),Oe.includes(e)||(n.dataset.sides=`d${e}`),n}function at(o){return o.flatMap(e=>e.pair?[{sides:10,face:e.pair[0],d100:"tens",dropped:e.dropped},{sides:10,face:e.pair[1],d100:"ones",dropped:e.dropped}]:[{sides:e.sides,face:e.face,dropped:e.dropped}])}function Le(o){let e=1+Math.floor(Math.random()*o.sides);return o.d100==="tens"?String(e%10*10).padStart(2,"0"):o.d100==="ones"?String(e%10):String(e)}async function Ne(o,e,{pipStyle:i,animate:r,win:n}){let d=o.ownerDocument,s=at(e),c=s.map((u,h)=>{let l=rt(d,u.sides,u.d100?` d100-${u.d100}`:"",h);return l.append(K(d,u.sides,r?Le(u):u.face,i)),l});if(o.replaceChildren(...c),r){for(let h of c)h.classList.add("tumbling");let u=n.setInterval(()=>{c.forEach((h,l)=>h.replaceChildren(K(d,s[l].sides,Le(s[l]),i)))},nt);await new Promise(h=>n.setTimeout(h,ot)),n.clearInterval(u);for(let h of c)h.classList.remove("tumbling")}c.forEach((u,h)=>{u.replaceChildren(K(d,s[h].sides,s[h].face,i)),u.classList.toggle("dropped",s[h].dropped)})}var lt="dice-box.es.min.js",dt=[4,6,8,10,12,20,100],Ae=o=>({theme:o.theme3d,themeColor:o.color3d,scale:o.scale3d,throwForce:o.throwForce}),V=o=>J(o).every(e=>dt.includes(e.sides));async function qe({importModule:o,base:e,container:i,settings:r}){let n=new URL(lt,e),d=await o(n.href),s=d&&d.default;if(typeof s!="function")throw new Error(`${n.href} did not export the DiceBox class`);if(!i.id)throw new Error("the 3D dice container needs an id for dice-box's selector");let c=new s({container:`#${i.id}`,origin:n.origin,assetPath:new URL("assets/",n).pathname,...Ae(r)});return await c.init(),{async update(u){await c.updateConfig(Ae(u))},async roll(u,{quick:h}){if(!V(u))throw new Error("this roll has a die with no 3D model");await c.updateConfig({suspendSimulation:h});let l=J(u),S=l.map(b=>b.sides===100?{qty:b.qty*2,sides:10}:{qty:b.qty,sides:b.sides}),y=await c.roll(S);return l.map((b,f)=>{let m=y.filter(x=>x.groupId===f).map(x=>x.value);return b.sides!==100?m:Array.from({length:b.qty},(x,E)=>we(m[2*E],m[2*E+1]).value)})},show(){c.show()},hide(){c.clear(),c.hide()}}}function Ie({load3d:o,report:e}){let i="2d",r="2d",n=null,d=null;async function s(c){if(c!=="2d"&&c!=="3d")throw new Error(`unknown dice mode ${c}`);if(r=c,c==="2d")return d&&d.hide(),i="2d",i;n=n||o();try{d=await n}catch(u){return n=null,r==="3d"&&e(u),r=i="2d",i}return r!=="3d"||(d.show(),i="3d"),i}return{set:s,mode:()=>i,box:()=>i==="3d"?d:null}}var pt=/^#[0-9a-f]{6}$/i,k={mode:{choices:[["2d","2D dice"],["3d","3D dice"]]},quick:{type:"boolean"},dieColor:{type:"color"},pipColor:{type:"color"},pipStyle:{choices:[["round","Round pips"],["square","Square pips"],["numeral","Numbers"]]},theme3d:{choices:[["default","Default (takes the color)"]]},color3d:{type:"color"},sound:{type:"boolean"},throwForce:{type:"range",min:1,max:15,step:.5},scale3d:{type:"range",min:3,max:10,step:.5}};function ut(o){return{mode:"2d",quick:!!o,dieColor:"#f4ecd8",pipColor:"#3b2a7a",pipStyle:"round",theme3d:"default",color3d:"#7a2a3b",sound:!1,throwForce:5,scale3d:6}}function je(o,e){let i=k[o];return i.choices?i.choices.some(([r])=>r===e):i.type==="boolean"?typeof e=="boolean":i.type==="color"?typeof e=="string"&&pt.test(e):typeof e=="number"&&e>=i.min&&e<=i.max}function Te(o,e){let i=ut(e);if(typeof o!="string")return i;let r;try{r=JSON.parse(o)}catch{return i}if(!r||typeof r!="object")return i;for(let n of Object.keys(k))je(n,r[n])&&(i[n]=r[n]);return i}function Pe(o,e,i){if(!Object.hasOwn(k,e))throw new Error(`no dice setting ${e}`);if(!je(e,i))throw new Error(`${JSON.stringify(i)} is not a value for the dice setting ${e}`);return{...o,[e]:i}}var Z=new WeakMap;function Fe(o,e){let i=o.AudioContext||o.webkitAudioContext;if(!i)return;Z.has(o)||Z.set(o,new i);let r=Z.get(o),n=r.sampleRate,d=Math.floor(n*.05);for(let s=0;s<Math.min(e,6);s++){let c=r.createBuffer(1,d,n),u=c.getChannelData(0);for(let y=0;y<d;y++)u[y]=(Math.random()*2-1)*(1-y/d)**3;let h=r.createBufferSource(),l=r.createBiquadFilter();l.type="bandpass",l.frequency.value=1800+Math.random()*1400;let S=r.createGain();S.gain.value=.35,h.buffer=c,h.connect(l).connect(S).connect(r.destination),h.start(r.currentTime+s*.035)}}var We=`
  :host { display: contents; }
  ${fe}
  ${he}
  .tray { position: fixed; z-index: 2147482000; display: flex; flex-direction: column; overflow: hidden;
    min-width: 280px; min-height: 420px; max-width: 100vw; max-height: 100vh; resize: both;
    background: var(--card); border: 1px solid var(--soft); border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,.3); }
  .tray.minimized { min-height: 0; resize: none; }
  .tray.minimized .body, .tray.minimized .grip { display: none; }
  .tray.moving { user-select: none; }
  .bar { display: flex; align-items: center; gap: .3rem; padding: .3rem .5rem; border-bottom: 1px solid var(--faint);
    cursor: move; touch-action: none; user-select: none; }
  .bar h2 { flex: 1; margin: 0; font-size: .95rem; font-weight: 500; }
  .bar .btn { padding: .05rem .45rem; }
  .body { flex: 1; min-height: 0; display: flex; flex-direction: column; gap: .35rem; padding: .4rem .5rem .6rem; overflow-y: auto; }
  .log { flex: 1 1 30%; min-height: 2.6rem; margin: 0; padding: .2rem .3rem; overflow-y: auto; list-style: none;
    font-size: .8rem; border: 1px solid var(--faint); border-radius: 8px; background: var(--paper); }
  .log li { padding: .15rem 0; border-bottom: 1px dotted var(--faint); display: flex; flex-wrap: wrap; gap: .1rem .4rem; align-items: baseline; }
  .log li:last-child { border-bottom: 0; }
  .log .time { color: var(--soft); font-variant-numeric: tabular-nums; }
  .log .what { font-weight: 600; }
  .log .faces { display: inline-flex; flex-wrap: wrap; gap: .2rem; }
  .log .f { min-width: 1.4em; text-align: center; border: 1px solid var(--faint); border-radius: 4px; padding: 0 .2em; }
  .log .f.dropped { opacity: .45; text-decoration: line-through; }
  .log .groups { color: var(--soft); }
  .log .total { font-weight: 700; }
  .log .band { padding: 0 .35em; border-radius: 4px; background: var(--faint); }
  .log .band-critical, .log .band-full { background: var(--accent); color: var(--paper); }
  .log .note { color: var(--soft); font-style: italic; }
  .logbar { display: flex; justify-content: flex-end; }
  .logbar .btn { font-size: .75rem; padding: 0 .4rem; }
  .stage { position: relative; flex: 2 1 40%; min-height: 80px; border-radius: 8px; overflow: hidden;
    background: radial-gradient(circle at 50% 40%, var(--paper), var(--faint)); }
  .stage2d { position: absolute; inset: 0; display: flex; flex-wrap: wrap; align-content: center; justify-content: center;
    gap: .6rem; padding: .6rem; overflow: auto; }
  .stage[data-showing="3d"] .stage2d { visibility: hidden; }
  .stage[data-showing="2d"] ::slotted(*) { visibility: hidden; }
  ::slotted([slot="stage3d"]) { position: absolute; inset: 0; }
  .pool { display: flex; align-items: center; gap: .35rem; }
  .pool output { flex: 1; min-height: 1.6rem; padding: .15rem .45rem; border: 1px dashed var(--soft); border-radius: 6px;
    font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
  .pool output:empty::before { content: 'Pick dice, then Roll'; color: var(--soft); }
  .buttons { display: grid; grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr)); gap: .3rem; }
  .buttons .btn { padding: .3rem 0; }
  .modifier { display: flex; align-items: center; gap: .3rem; }
  .modifier .value { min-width: 3.2rem; }
  .modifier .value.set { border-color: var(--accent); }
  .dn, .notation { display: flex; align-items: center; gap: .35rem; }
  .dn input { width: 5.5rem; }
  .notation input { flex: 1; min-width: 0; }
  .grip { position: absolute; right: 0; bottom: 0; width: 22px; height: 22px; cursor: nwse-resize; touch-action: none;
    background: linear-gradient(135deg, transparent 0 45%, var(--soft) 45% 52%, transparent 52% 64%, var(--soft) 64% 71%, transparent 71%); }
  .launcher { position: fixed; z-index: 2147482000; bottom: 16px; padding: .4rem .8rem; border-radius: 999px;
    box-shadow: 0 4px 16px rgba(0,0,0,.25); }
  .launcher.right { right: 16px; }
  .launcher.left { left: 16px; }
  dialog.settings { border: 1px solid var(--soft); border-radius: 10px; background: var(--card); color: var(--ink); max-width: 22rem; }
  dialog.settings::backdrop { background: rgba(0,0,0,.3); }
  dialog.settings h3 { margin: 0 0 .5rem; font-size: 1rem; font-weight: 500; }
  dialog.settings label { display: flex; justify-content: space-between; align-items: center; gap: .8rem; margin: .3rem 0; font-size: .85rem; }
  dialog.settings .actions { display: flex; justify-content: flex-end; margin-top: .6rem; }

  /* 2D dice */
  .die { --size: 54px; position: relative; width: var(--size); height: var(--size); display: grid; place-items: center;
    background: var(--die-color, #f4ecd8); color: var(--pip-color, #3b2a7a); font-weight: 700; font-size: 1.3rem;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,.35)); }
  .die.d6 { border-radius: 10px; }
  .die.d4 { clip-path: polygon(50% 4%, 97% 92%, 3% 92%); padding-top: 22%; }
  .die.d8 { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
  .die.d10 { clip-path: polygon(50% 0, 100% 42%, 50% 100%, 0 42%); }
  .die.d12 { clip-path: polygon(50% 0, 98% 36%, 80% 95%, 20% 95%, 2% 36%); }
  .die.d20 { clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%); }
  .die.dn { clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%); }
  .die.dn::after { content: attr(data-sides); position: absolute; bottom: 7%; font-size: .55rem; font-weight: 500; opacity: .75; }
  .die.dropped { opacity: .4; }
  .die .face.numeral.wide { font-size: 1.05rem; }
  .die .face.numeral.wider { font-size: .8rem; }
  .die .face[class*="pips-"] { display: grid; grid-template: repeat(3, 1fr) / repeat(3, 1fr); width: 74%; height: 74%; }
  .die .face[class*="pips-"] span { display: grid; place-items: center; }
  .die .face[class*="pips-"] .pip::before { content: ''; width: 9px; height: 9px; background: currentColor; }
  .die .face.pips-round .pip::before { border-radius: 50%; }
  .die.tumbling { animation: tumble 1100ms cubic-bezier(.2,.7,.3,1) both; animation-delay: calc(var(--i) * 40ms); }
  @keyframes tumble { from { transform: translate(-30px, -40px) rotate(var(--spin)); } to { transform: none; } }
  @media (prefers-reduced-motion: reduce) { .die.tumbling { animation: none; } }
  @media print { .tray, .launcher, dialog { display: none !important; } }
`;var ft={w:384,h:768},_e={w:280,h:420},Q=16,Be=["left","right"],He=(o,e,i)=>Math.min(Math.max(o,e),i);function L(o,e,i=0){let r=Math.min(Math.max(o.w,_e.w),e.width),n=Math.min(Math.max(o.h,_e.h),e.height),d=o.minimized&&i>0?i-n:0;return{...o,w:r,h:n,x:He(o.x,0,e.width-r),y:He(o.y,d,e.height-n)}}function T(o,e){if(!Be.includes(e))throw new Error(`unknown tray side ${JSON.stringify(e)}`);let{w:i,h:r}=ft,n=e==="left"?Q:o.width-i-Q,d=o.height-r-Q;return L({x:n,y:d,w:i,h:r,open:!0,minimized:!1},o)}function ee(o,e,i){if(!Be.some(d=>{let s=T(e,d);return o.x===s.x&&o.y===s.y&&o.w===s.w&&o.h===s.h}))return o;let n=T(e,i);return{...o,x:n.x,y:n.y}}var X={x:"number",y:"number",w:"number",h:"number",open:"boolean",minimized:"boolean"};function Ue(o){if(typeof o!="string")return null;let e;try{e=JSON.parse(o)}catch{return null}return!e||typeof e!="object"?null:Object.entries(X).every(([r,n])=>typeof e[r]===n&&(n!=="number"||Number.isFinite(e[r])))?Object.fromEntries(Object.keys(X).map(r=>[r,e[r]])):null}var Je=o=>JSON.stringify(Object.fromEntries(Object.keys(X).map(e=>[e,o[e]])));function Ye({win:o,els:e,store:i,side:r}){let n=new AbortController,d=(f,m,x)=>f.addEventListener(m,x,{signal:n.signal}),s=()=>({width:o.innerWidth,height:o.innerHeight}),c=()=>e.bar.offsetHeight+e.tray.offsetHeight-e.tray.clientHeight,u=Ue(i.read()),h=u?L(u,s(),c()):T(s(),r),l=L(ee(h,s(),r),s(),c());function S(){let{tray:f}=e;f.hidden=!l.open,e.open.hidden=l.open,f.classList.toggle("minimized",l.minimized),f.style.left=`${l.x}px`,f.style.width=`${l.w}px`,f.style.top=`${l.minimized?l.y+l.h-c():l.y}px`,f.style.height=l.minimized?"":`${l.h}px`,e.minimize.setAttribute("aria-expanded",String(!l.minimized)),e.minimize.title=l.minimized?"Restore the dice tray":"Minimize the dice tray",e.minimize.setAttribute("aria-label",e.minimize.title)}function y(f,m=!0){l=L({...l,...f},s(),c()),S(),m&&i.write(Je(l))}function b(f,m){Re(f,{signal:n.signal,start:()=>(e.tray.classList.add("moving"),{...l}),move:(x,E,P)=>y(m(x,E,P),!1),end:()=>{e.tray.classList.remove("moving"),y({})}})}return b(e.bar,(f,m,x)=>({x:x.x+f,y:x.y+m})),b(e.grip,(f,m,x)=>({w:Math.min(x.w+f,o.innerWidth-x.x),h:Math.min(x.h+m,o.innerHeight-x.y)})),d(e.minimize,"click",()=>y({minimized:!l.minimized})),d(e.close,"click",()=>{y({open:!1}),e.open.focus()}),d(e.open,"click",()=>{y({open:!0,minimized:!1}),e.bar.focus()}),d(o,"resize",()=>y({},!1)),S(),{reveal(){(!l.open||l.minimized)&&y({open:!0,minimized:!1})},open(){y({open:!0,minimized:!1})},close(){y({open:!1})},resized(f,m){!l.minimized&&l.open&&(f!==l.w||m!==l.h)&&y({w:f,h:m})},setSide(f){let m=ee(l,s(),f);m!==l&&y({x:m.x,y:m.y})},state:()=>({...l}),detach(){n.abort()}}}var Ge=500,gt={mode:"3D dice (loads on first use)",quick:"Quick roll (no tumbling)",dieColor:"2D die colour",pipColor:"2D pip colour",pipStyle:"2D d6 faces",theme3d:"3D theme",color3d:"3D die colour",sound:"Sound",throwForce:"3D throw strength",scale3d:"3D dice size"},bt=`
  <section class="tray" part="tray" aria-label="Dice tray" hidden>
    <header class="bar" part="bar" tabindex="-1">
      <h2>Dice</h2>
      <button type="button" class="btn settings-open" title="Dice settings" aria-label="Dice settings">\u2699</button>
      <button type="button" class="btn minimize">\u2013</button>
      <button type="button" class="btn close" title="Close the dice tray" aria-label="Close the dice tray">\xD7</button>
    </header>
    <div class="body">
      <ol class="log" part="log" aria-live="polite" aria-label="Rolls"></ol>
      <div class="logbar"><button type="button" class="btn clear-log">Clear log</button></div>
      <div class="stage" part="stage" data-showing="2d"><div class="stage2d"></div><slot name="stage3d"></slot></div>
      <div class="pool" part="pool">
        <output class="pool-text" aria-live="polite"></output>
        <button type="button" class="btn roll-pool" disabled>Roll</button>
        <button type="button" class="btn clear-pool" disabled>Clear</button>
      </div>
      <div class="buttons" part="buttons"></div>
      <div class="modifier">
        <span>Modifier</span>
        <button type="button" class="btn mod-down" aria-label="Modifier down">\u2212</button>
        <button type="button" class="btn value" title="Reset the modifier">+0</button>
        <button type="button" class="btn mod-up" aria-label="Modifier up">+</button>
      </div>
      <form class="dn" hidden>
        <label class="check">Sides <input class="field" type="number" min="${2}" max="${1e3}" step="1" value="7" required></label>
        <button type="submit" class="btn">Add die</button>
      </form>
      <form class="notation">
        <input class="field" type="text" placeholder="2d6+1d8+3, 4d6kh3" aria-label="Dice notation" spellcheck="false" autocomplete="off">
        <button type="submit" class="btn">Roll</button>
      </form>
    </div>
    <div class="grip" part="resize-handle" title="Resize"></div>
  </section>
  <button type="button" class="btn launcher" part="launcher" hidden>\u{1F3B2} Dice</button>
  <dialog class="settings" part="settings">
    <form method="dialog">
      <h3>Dice settings</h3>
      <div class="fields"></div>
      <div class="actions"><button class="btn" value="close">Done</button></div>
    </form>
  </dialog>`,yt=0;function xt(o,e){let i=k[e],r=o.createElement("label");r.append(gt[e]);let n;if(e==="mode")n=Object.assign(o.createElement("input"),{type:"checkbox"});else if(i.choices){n=o.createElement("select");for(let[d,s]of i.choices)n.append(Object.assign(o.createElement("option"),{value:d,textContent:s}))}else n=Object.assign(o.createElement("input"),{type:i.type==="boolean"?"checkbox":i.type}),i.type==="range"&&Object.assign(n,{min:i.min,max:i.max,step:i.step});return n.dataset.setting=e,r.append(n),r}function qt(o,e){let i=o.ownerDocument,r=i.defaultView;e.querySelector("style").textContent=We,e.insertAdjacentHTML("beforeend",bt);let n=t=>e.querySelector(t),d=new AbortController,s=(t,a,p)=>t.addEventListener(a,p,{signal:d.signal}),c=n(".tray"),u=n(".log"),h=n(".stage"),l=n(".stage2d"),S=n(".launcher"),y=n("dialog.settings"),b=i.createElement("div");b.slot="stage3d",b.id=`toybox-dice-3d-${++yt}`,b.style.cssText="position:absolute;inset:0",b.hidden=!0,o.append(b);let f=()=>o.side,m=Ye({win:r,store:B(r,`dice-tray.window.${ge(r,o.id||"dice-tray")}`),side:f(),els:{tray:c,bar:n(".bar"),grip:n(".grip"),minimize:n(".minimize"),close:n(".close"),open:S}}),x=()=>{S.className=`btn launcher ${f()}`};x();let E=new r.ResizeObserver(()=>{c.offsetWidth&&c.offsetHeight&&m.resized(c.offsetWidth,c.offsetHeight)});E.observe(c);let P=r.matchMedia("(prefers-reduced-motion: reduce)").matches,ne=B(r,"dice-tray.settings"),w=Te(ne.read(),P),F=n(".fields");for(let t of Object.keys(k))F.append(xt(i,t));let Ke=[...F.querySelectorAll("[data-setting]")],Ve=t=>{let a=t.dataset.setting;return a==="mode"?t.checked?"3d":"2d":t.type==="checkbox"?t.checked:k[a].type==="range"?Number(t.value):t.value};function O(){for(let t of Ke){let a=w[t.dataset.setting];t.dataset.setting==="mode"?t.checked=a==="3d":t.type==="checkbox"?t.checked=a:t.value=String(a)}l.style.setProperty("--die-color",w.dieColor),l.style.setProperty("--pip-color",w.pipColor)}function ie(t,a){w=Pe(w,t,a),ne.write(JSON.stringify(w)),O();let p=_.box();p&&t!=="mode"&&p.update(w).catch(v=>M(`3D dice settings: ${v.message}`))}s(F,"change",t=>{let a=t.target.dataset.setting;if(!a)return;let p=Ve(t.target);a==="mode"?se(p):ie(a,p)}),s(n(".settings-open"),"click",()=>{O(),y.showModal()});let C=[],D=(t,a)=>Object.assign(i.createElement("span"),{className:t,textContent:a});function re(t){for(u.append(t);u.children.length>Ge;)u.firstElementChild.remove();u.scrollTop=u.scrollHeight}function Ze(t){let a=i.createElement("li");a.setAttribute("aria-label",Me(t));let p=D("faces","");for(let v of t.faces)p.append(D(v.dropped?"f dropped":"f",v.face));a.append(D("time",t.time),D("what",t.what),p),t.groups&&a.append(D("groups",t.groups)),a.append(D("total",`= ${t.total}`)),t.band&&a.append(D(`band band-${t.band.toLowerCase().replace(/\s+/g,"-")}`,t.band)),re(a)}function ae(t){C.push(t),C.length>Ge&&C.shift(),Ze(t)}function M(t){let a=i.createElement("li");a.className="note",a.append(D("time",ke(new Date)),D("what",t)),re(a)}function W(){C.length=0,u.replaceChildren()}s(n(".clear-log"),"click",W);let _=Ie({load3d:async()=>{b.hidden=!1;let t=await qe({importModule:a=>import(a),base:me("dice-box/"),container:b,settings:w});for(let a of b.querySelectorAll("canvas"))a.style.cssText="width:100%;height:100%;display:block";return t},report:t=>M(`3D dice could not load here (${t.message}); rolling 2D dice.`)});async function se(t){let a=await _.set(t);b.hidden=a!=="3d",h.dataset.showing=a,a!==w.mode?ie("mode",a):O()}let le=Promise.resolve();async function Qe(t,a){if(a!==void 0&&!U().includes(a))throw new Error(`no band set "${a}"; the sets are ${U().join(", ")}`);let p=ye(t.notation),v=_.box(),q=!!v&&V(p);v&&!q&&M(`${t.notation} has a die with no 3D model; rolled in 2D.`),h.dataset.showing=q?"3d":"2d";let et=q?await v.roll(p,{quick:w.quick}):xe(p),$=ze(t,p,et),ce=be(a,$.total,$);q||await Ne(l,$.dice,{pipStyle:w.pipStyle,animate:!w.quick,win:r}),w.sound&&Fe(r,$.dice.length);let pe=Ce($,ce,new Date);ae(pe);let ue={...$,band:ce,entry:pe};return o.dispatchEvent(new r.CustomEvent("roll",{detail:ue,bubbles:!0,composed:!0})),ue}function H(t,a){m.reveal();let p=le.then(()=>Qe(t(),a));return le=p.catch(v=>M(v.message)),p}let g=I(),Xe=n(".pool-text"),R=n(".modifier .value");function z(){Xe.textContent=De(g),n(".roll-pool").disabled=G(g),n(".clear-pool").disabled=G(g)&&g.modifier===0,R.textContent=g.modifier<0?`\u2212${-g.modifier}`:`+${g.modifier}`,R.classList.toggle("set",g.modifier!==0),R.setAttribute("aria-label",`Modifier: ${R.textContent}. Click to reset.`)}function de(t){try{g=Se(g,t)}catch(a){M(a.message)}z()}let N=n(".buttons");for(let t of ve)N.append(Object.assign(i.createElement("button"),{type:"button",className:"btn",textContent:`d${t}`,title:`Add a d${t} to the pool`})),N.lastElementChild.dataset.die=String(t);let A=Object.assign(i.createElement("button"),{type:"button",className:"btn dn-open",textContent:"dN",title:"A die with any number of sides"});return A.setAttribute("aria-expanded","false"),N.append(A),s(N,"click",t=>{let a=t.target.closest("button");if(a){if(a===A){let p=n(".dn");p.hidden=!p.hidden,A.setAttribute("aria-expanded",String(!p.hidden)),p.hidden||p.querySelector("input").focus();return}de(Number(a.dataset.die))}}),s(n(".dn"),"submit",t=>{t.preventDefault();let a=t.target.querySelector("input"),p=Number(a.value);if(!Number.isInteger(p)||p<2||p>1e3){M(`a die has ${2} to ${1e3} sides, not ${a.value||"none"}`);return}de(p)}),s(n(".mod-down"),"click",()=>{g=j(g,g.modifier-1),z()}),s(n(".mod-up"),"click",()=>{g=j(g,g.modifier+1),z()}),s(R,"click",()=>{g=j(g,0),z()}),s(n(".clear-pool"),"click",()=>{g=I(),z()}),s(n(".roll-pool"),"click",()=>{let t=g;g=I(),z(),H(()=>Ee(t)).catch(()=>{})}),s(n(".notation"),"submit",t=>{t.preventDefault();let a=t.target.querySelector("input");H(()=>Y(a.value)).catch(()=>{})}),z(),O(),w.mode==="3d"&&se("3d"),{roll(t,{label:a,bands:p}={}){return H(()=>Y(t,a),p)},open:()=>m.open(),close:()=>m.close(),clearLog:W,log:()=>C.map(t=>structuredClone(t)),saveState:()=>o.hasAttribute("save-log")?{log:C.map(t=>structuredClone(t))}:null,loadState(t){if(t===null)return;if(!t||!Array.isArray(t.log))throw new Error("dice tray: the saved state must be { log: [entries] }");let a=t.log.map((p,v)=>$e(p,`dice tray log[${v}]`));W(),a.forEach(ae)},pool:()=>structuredClone(g),windowState:()=>m.state(),attributeChanged(t){t==="side"&&(m.setSide(f()),x())},destroy(){d.abort(),m.detach(),E.disconnect(),b.remove(),e.querySelectorAll(".tray, .launcher, dialog").forEach(t=>t.remove())}}}export{qt as mount};
