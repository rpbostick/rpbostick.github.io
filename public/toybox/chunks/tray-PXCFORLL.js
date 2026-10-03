import{a as xe,b as U,c as we,d as ve,e as Se,f as H,g as q,h as De,i as O,j as J,k as Ee,l as Ce,m as ke,n as Re,o as $e,p as ze,q as Me}from"./chunk-4RRQYAXX.js";import{a as ge,c as he,e as be,g as ye,h as B}from"./chunk-2MSCG6NQ.js";import"./chunk-WNI6WUEP.js";import{a as ue,b as fe,c as W,e as me}from"./chunk-3CDEPU2A.js";import{b as pe}from"./chunk-IL75OGFX.js";import"./chunk-I3M5WXFC.js";import"./chunk-DCANE7XH.js";var Qe={1:[5],2:[3,7],3:[3,5,7],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]},Ne=[4,6,8,10,12,20],Xe=1100,et=90,tt=n=>Ne.includes(n)?`d${n}`:"dn";function Y(n,o,i,a){let t=n.createElement("div");if(o===6&&a!=="numeral"){t.className=`face pips-${a}`;for(let s=1;s<=9;s++){let l=n.createElement("span");Qe[i].includes(s)&&(l.className="pip"),t.append(l)}return t}return t.className=`face numeral${i.length>2?" wider":i.length>1?" wide":""}`,t.textContent=i,t}function ot(n,o,i,a){let t=n.createElement("div");return t.className=`die ${tt(o)}${i}`,t.style.setProperty("--i",a),t.style.setProperty("--spin",`${(Math.random()<.5?-1:1)*(540+Math.floor(Math.random()*360))}deg`),Ne.includes(o)||(t.dataset.sides=`d${o}`),t}function nt(n){return n.flatMap(o=>o.pair?[{sides:10,face:o.pair[0],d100:"tens",dropped:o.dropped},{sides:10,face:o.pair[1],d100:"ones",dropped:o.dropped}]:[{sides:o.sides,face:o.face,dropped:o.dropped}])}function Le(n){let o=1+Math.floor(Math.random()*n.sides);return n.d100==="tens"?String(o%10*10).padStart(2,"0"):n.d100==="ones"?String(o%10):String(o)}async function Ae(n,o,{pipStyle:i,animate:a,win:t}){let s=n.ownerDocument,l=nt(o),d=l.map((u,c)=>{let f=ot(s,u.sides,u.d100?` d100-${u.d100}`:"",c);return f.append(Y(s,u.sides,a?Le(u):u.face,i)),f});if(n.replaceChildren(...d),a){for(let c of d)c.classList.add("tumbling");let u=t.setInterval(()=>{d.forEach((c,f)=>c.replaceChildren(Y(s,l[f].sides,Le(l[f]),i)))},et);await new Promise(c=>t.setTimeout(c,Xe)),t.clearInterval(u);for(let c of d)c.classList.remove("tumbling")}d.forEach((u,c)=>{u.replaceChildren(Y(s,l[c].sides,l[c].face,i)),u.classList.toggle("dropped",l[c].dropped)})}var rt="dice-box.es.min.js",at=[4,6,8,10,12,20,100],Ie=n=>({theme:n.theme3d,themeColor:n.color3d,scale:n.scale3d,throwForce:n.throwForce}),G=n=>U(n).every(o=>at.includes(o.sides));async function qe({importModule:n,base:o,container:i,settings:a}){let t=new URL(rt,o),s=await n(t.href),l=s&&s.default;if(typeof l!="function")throw new Error(`${t.href} did not export the DiceBox class`);if(!i.id)throw new Error("the 3D dice container needs an id for dice-box's selector");let d=new l({container:`#${i.id}`,origin:t.origin,assetPath:new URL("assets/",t).pathname,...Ie(a)});return await d.init(),{async update(u){await d.updateConfig(Ie(u))},async roll(u,{quick:c}){if(!G(u))throw new Error("this roll has a die with no 3D model");await d.updateConfig({suspendSimulation:c});let f=U(u),h=f.map(g=>g.sides===100?{qty:g.qty*2,sides:10}:{qty:g.qty,sides:g.sides}),v=await d.roll(h);return f.map((g,$)=>{let x=v.filter(S=>S.groupId===$).map(S=>S.value);return g.sides!==100?x:Array.from({length:g.qty},(S,z)=>ve(x[2*z],x[2*z+1]).value)})},show(){d.show()},hide(){d.clear(),d.hide()}}}function Oe({load3d:n,report:o}){let i="2d",a="2d",t=null,s=null;async function l(d){if(d!=="2d"&&d!=="3d")throw new Error(`unknown dice mode ${d}`);if(a=d,d==="2d")return s&&s.hide(),i="2d",i;t=t||n();try{s=await t}catch(u){return t=null,a==="3d"&&o(u),a=i="2d",i}return a!=="3d"||(s.show(),i="3d"),i}return{set:l,mode:()=>i,box:()=>i==="3d"?s:null}}var lt=/^#[0-9a-f]{6}$/i,E={mode:{choices:[["2d","2D dice"],["3d","3D dice"]]},quick:{type:"boolean"},dieColor:{type:"color"},pipColor:{type:"color"},pipStyle:{choices:[["round","Round pips"],["square","Square pips"],["numeral","Numbers"]]},theme3d:{choices:[["default","Default (takes the color)"]]},color3d:{type:"color"},sound:{type:"boolean"},throwForce:{type:"range",min:1,max:15,step:.5},scale3d:{type:"range",min:3,max:10,step:.5}};function dt(n){return{mode:"2d",quick:!!n,dieColor:"#f4ecd8",pipColor:"#3b2a7a",pipStyle:"round",theme3d:"default",color3d:"#7a2a3b",sound:!1,throwForce:5,scale3d:6}}function Te(n,o){let i=E[n];return i.choices?i.choices.some(([a])=>a===o):i.type==="boolean"?typeof o=="boolean":i.type==="color"?typeof o=="string"&&lt.test(o):typeof o=="number"&&o>=i.min&&o<=i.max}function Pe(n,o){let i=dt(o);if(typeof n!="string")return i;let a;try{a=JSON.parse(n)}catch{return i}if(!a||typeof a!="object")return i;for(let t of Object.keys(E))Te(t,a[t])&&(i[t]=a[t]);return i}function je(n,o,i){if(!Object.hasOwn(E,o))throw new Error(`no dice setting ${o}`);if(!Te(o,i))throw new Error(`${JSON.stringify(i)} is not a value for the dice setting ${o}`);return{...n,[o]:i}}var V=new WeakMap;function Fe(n,o){let i=n.AudioContext||n.webkitAudioContext;if(!i)return;V.has(n)||V.set(n,new i);let a=V.get(n),t=a.sampleRate,s=Math.floor(t*.05);for(let l=0;l<Math.min(o,6);l++){let d=a.createBuffer(1,s,t),u=d.getChannelData(0);for(let v=0;v<s;v++)u[v]=(Math.random()*2-1)*(1-v/s)**3;let c=a.createBufferSource(),f=a.createBiquadFilter();f.type="bandpass",f.frequency.value=1800+Math.random()*1400;let h=a.createGain();h.gain.value=.35,c.buffer=d,c.connect(f).connect(h).connect(a.destination),c.start(a.currentTime+l*.035)}}var _e=`
  :host { display: contents; }
  ${ue}
  ${fe}
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
`;var pt={w:384,h:768},K={w:280,h:420},Z=16,We=["left","right"],ut=(n,o,i=0)=>ge(n,o,{min:K,barHeight:i,anchor:"bottom"});function T(n,o){if(!We.includes(o))throw new Error(`unknown tray side ${JSON.stringify(o)}`);let{w:i,h:a}=pt,t=o==="left"?Z:n.width-i-Z,s=n.height-a-Z;return ut({x:t,y:s,w:i,h:a,open:!0,minimized:!1},n)}function Q(n,o,i){if(!We.some(s=>{let l=T(o,s);return n.x===l.x&&n.y===l.y&&n.w===l.w&&n.h===l.h}))return n;let t=T(o,i);return{...n,x:t.x,y:t.y}}var{parse:St,serialize:Dt}=he;function Be({win:n,els:o,store:i,side:a}){let t=()=>({width:n.innerWidth,height:n.innerHeight}),s=be({win:n,els:{box:o.tray,bar:o.bar,grip:o.grip,minimize:o.minimize,close:o.close},store:i,place:c=>T(c,a),min:K,anchor:"bottom",name:"the dice tray",onChange:c=>{o.open.hidden=c.open},onClose:()=>o.open.focus()}),l=s.state(),d=Q(l,t(),a);d!==l&&s.set({x:d.x,y:d.y},!1);let u=()=>{s.open(),o.bar.focus()};return o.open.addEventListener("click",u),{reveal(){let{open:c,minimized:f}=s.state();(!c||f)&&s.open()},open:()=>s.open(),close:()=>s.close(),resized(c,f){let h=s.state();!h.minimized&&h.open&&(c!==h.w||f!==h.h)&&s.set({w:c,h:f})},setSide(c){let f=s.state(),h=Q(f,t(),c);h!==f&&s.set({x:h.x,y:h.y})},state:()=>s.state(),detach(){o.open.removeEventListener("click",u),s.detach()}}}var Ue=500,mt={mode:"3D dice (loads on first use)",quick:"Quick roll (no tumbling)",dieColor:"2D die colour",pipColor:"2D pip colour",pipStyle:"2D d6 faces",theme3d:"3D theme",color3d:"3D die colour",sound:"Sound",throwForce:"3D throw strength",scale3d:"3D dice size"},gt=`
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
  </dialog>`,ht=0;function bt(n,o){let i=E[o],a=n.createElement("label");a.append(mt[o]);let t;if(o==="mode")t=Object.assign(n.createElement("input"),{type:"checkbox"});else if(i.choices){t=n.createElement("select");for(let[s,l]of i.choices)t.append(Object.assign(n.createElement("option"),{value:s,textContent:l}))}else t=Object.assign(n.createElement("input"),{type:i.type==="boolean"?"checkbox":i.type}),i.type==="range"&&Object.assign(t,{min:i.min,max:i.max,step:i.step});return t.dataset.setting=o,a.append(t),a}function qt(n,o){let i=n.ownerDocument,a=i.defaultView;o.querySelector("style").textContent=_e,o.insertAdjacentHTML("beforeend",gt);let t=e=>o.querySelector(e),s=new AbortController,l=(e,r,p)=>e.addEventListener(r,p,{signal:s.signal}),d=t(".tray"),u=t(".log"),c=t(".stage"),f=t(".stage2d"),h=t(".launcher"),v=t("dialog.settings"),g=i.createElement("div");g.slot="stage3d",g.id=`toybox-dice-3d-${++ht}`,g.style.cssText="position:absolute;inset:0",g.hidden=!0,n.append(g);let $=()=>n.side,x=Be({win:a,store:W(a,`dice-tray.window.${me(a,n.id||"dice-tray")}`),side:$(),els:{tray:d,bar:t(".bar"),grip:t(".grip"),minimize:t(".minimize"),close:t(".close"),open:h}}),S=()=>{h.className=`btn launcher ${$()}`};S();let z=new a.ResizeObserver(()=>{d.offsetWidth&&d.offsetHeight&&x.resized(d.offsetWidth,d.offsetHeight)});z.observe(d);let He=a.matchMedia("(prefers-reduced-motion: reduce)").matches,te=W(a,"dice-tray.settings"),b=Pe(te.read(),He),P=t(".fields");for(let e of Object.keys(E))P.append(bt(i,e));let Je=[...P.querySelectorAll("[data-setting]")],Ye=e=>{let r=e.dataset.setting;return r==="mode"?e.checked?"3d":"2d":e.type==="checkbox"?e.checked:E[r].type==="range"?Number(e.value):e.value};function L(){for(let e of Je){let r=b[e.dataset.setting];e.dataset.setting==="mode"?e.checked=r==="3d":e.type==="checkbox"?e.checked=r:e.value=String(r)}f.style.setProperty("--die-color",b.dieColor),f.style.setProperty("--pip-color",b.pipColor)}function oe(e,r){b=je(b,e,r),te.write(JSON.stringify(b)),L();let p=F.box();p&&e!=="mode"&&p.update(b).catch(y=>k(`3D dice settings: ${y.message}`))}l(P,"change",e=>{let r=e.target.dataset.setting;if(!r)return;let p=Ye(e.target);r==="mode"?re(p):oe(r,p)}),l(t(".settings-open"),"click",()=>{L(),v.showModal()});let C=[],w=(e,r)=>Object.assign(i.createElement("span"),{className:e,textContent:r});function ne(e){for(u.append(e);u.children.length>Ue;)u.firstElementChild.remove();u.scrollTop=u.scrollHeight}function Ge(e){let r=i.createElement("li");r.setAttribute("aria-label",ze(e));let p=w("faces","");for(let y of e.faces)p.append(w(y.dropped?"f dropped":"f",y.face));r.append(w("time",e.time),w("what",e.what),p),e.groups&&r.append(w("groups",e.groups)),r.append(w("total",`= ${e.total}`)),e.band&&r.append(w(`band band-${e.band.toLowerCase().replace(/\s+/g,"-")}`,e.band)),ne(r)}function ie(e){C.push(e),C.length>Ue&&C.shift(),Ge(e)}function k(e){let r=i.createElement("li");r.className="note",r.append(w("time",Re(new Date)),w("what",e)),ne(r)}function j(){C.length=0,u.replaceChildren()}l(t(".clear-log"),"click",j);let F=Oe({load3d:async()=>{g.hidden=!1;let e=await qe({importModule:r=>import(r),base:pe("dice-box/"),container:g,settings:b});for(let r of g.querySelectorAll("canvas"))r.style.cssText="width:100%;height:100%;display:block";return e},report:e=>k(`3D dice could not load here (${e.message}); rolling 2D dice.`)});async function re(e){let r=await F.set(e);g.hidden=r!=="3d",c.dataset.showing=r,r!==b.mode?oe("mode",r):L()}let ae=Promise.resolve();async function Ve(e,r){if(r!==void 0&&!B().includes(r))throw new Error(`no band set "${r}"; the sets are ${B().join(", ")}`);let p=xe(e.notation),y=F.box(),I=!!y&&G(p);y&&!I&&k(`${e.notation} has a die with no 3D model; rolled in 2D.`),c.dataset.showing=I?"3d":"2d";let Ke=I?await y.roll(p,{quick:b.quick}):we(p),R=ke(e,p,Ke),le=ye(r,R.total,R);I||await Ae(f,R.dice,{pipStyle:b.pipStyle,animate:!b.quick,win:a}),b.sound&&Fe(a,R.dice.length);let de=$e(R,le,new Date);ie(de);let ce={...R,band:le,entry:de};return n.dispatchEvent(new a.CustomEvent("roll",{detail:ce,bubbles:!0,composed:!0})),ce}function _(e,r){x.reveal();let p=ae.then(()=>Ve(e(),r));return ae=p.catch(y=>k(y.message)),p}let m=q(),Ze=t(".pool-text"),M=t(".modifier .value");function D(){Ze.textContent=Ee(m),t(".roll-pool").disabled=J(m),t(".clear-pool").disabled=J(m)&&m.modifier===0,M.textContent=m.modifier<0?`\u2212${-m.modifier}`:`+${m.modifier}`,M.classList.toggle("set",m.modifier!==0),M.setAttribute("aria-label",`Modifier: ${M.textContent}. Click to reset.`)}function se(e){try{m=De(m,e)}catch(r){k(r.message)}D()}let N=t(".buttons");for(let e of Se)N.append(Object.assign(i.createElement("button"),{type:"button",className:"btn",textContent:`d${e}`,title:`Add a d${e} to the pool`})),N.lastElementChild.dataset.die=String(e);let A=Object.assign(i.createElement("button"),{type:"button",className:"btn dn-open",textContent:"dN",title:"A die with any number of sides"});return A.setAttribute("aria-expanded","false"),N.append(A),l(N,"click",e=>{let r=e.target.closest("button");if(r){if(r===A){let p=t(".dn");p.hidden=!p.hidden,A.setAttribute("aria-expanded",String(!p.hidden)),p.hidden||p.querySelector("input").focus();return}se(Number(r.dataset.die))}}),l(t(".dn"),"submit",e=>{e.preventDefault();let r=e.target.querySelector("input"),p=Number(r.value);if(!Number.isInteger(p)||p<2||p>1e3){k(`a die has ${2} to ${1e3} sides, not ${r.value||"none"}`);return}se(p)}),l(t(".mod-down"),"click",()=>{m=O(m,m.modifier-1),D()}),l(t(".mod-up"),"click",()=>{m=O(m,m.modifier+1),D()}),l(M,"click",()=>{m=O(m,0),D()}),l(t(".clear-pool"),"click",()=>{m=q(),D()}),l(t(".roll-pool"),"click",()=>{let e=m;m=q(),D(),_(()=>Ce(e)).catch(()=>{})}),l(t(".notation"),"submit",e=>{e.preventDefault();let r=e.target.querySelector("input");_(()=>H(r.value)).catch(()=>{})}),D(),L(),b.mode==="3d"&&re("3d"),{roll(e,{label:r,bands:p}={}){return _(()=>H(e,r),p)},open:()=>x.open(),close:()=>x.close(),clearLog:j,log:()=>C.map(e=>structuredClone(e)),saveState:()=>n.hasAttribute("save-log")?{log:C.map(e=>structuredClone(e))}:null,loadState(e){if(e===null)return;if(!e||!Array.isArray(e.log))throw new Error("dice tray: the saved state must be { log: [entries] }");let r=e.log.map((p,y)=>Me(p,`dice tray log[${y}]`));j(),r.forEach(ie)},pool:()=>structuredClone(m),windowState:()=>x.state(),attributeChanged(e){e==="side"&&(x.setSide($()),S())},destroy(){s.abort(),x.detach(),z.disconnect(),g.remove(),o.querySelectorAll(".tray, .launcher, dialog").forEach(e=>e.remove())}}}export{qt as mount};
