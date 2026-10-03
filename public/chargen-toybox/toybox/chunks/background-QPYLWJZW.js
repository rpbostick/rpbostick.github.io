import{a as Q,b as tt}from"./chunk-XTBY6X2W.js";import{a as bt,d as K,e as wt,f as Z,g as vt,h as kt}from"./chunk-SB23LLYA.js";import{a as xt,b as yt}from"./chunk-PU46EIHF.js";import{a as st}from"./chunk-I3M5WXFC.js";import"./chunk-6DHFEWGX.js";var St=["Red","Orange","Yellow","Yellow-green","Green","Green-cyan","Cyan","Azure","Blue","Violet","Magenta","Rose"],U=["A","B","C","D","E","F"],R=St.length*U.length,pe=["light","dark"],me={light:{a:.8,f:.38},dark:{a:.93,f:.5}},ge=.13;function Ct(e){if(!pe.includes(e))throw new Error(`unknown theme ${JSON.stringify(e)}`)}function Tt({l:e,c:t,h:r}){let n=r*Math.PI/180,o=t*Math.cos(n),i=t*Math.sin(n),c=(e+.3963377774*o+.2158037573*i)**3,a=(e-.1055613458*o-.0638541728*i)**3,d=(e-.0894841775*o-1.291485548*i)**3;return[4.0767416621*c-3.3077115913*a+.2309699292*d,-1.2684380046*c+2.6097574011*a-.3413193965*d,-.0041960863*c-.7034186147*a+1.707614701*d]}var be=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,Et=e=>Tt(e).every(t=>t>=-1e-6&&t<=1+1e-6);function At(e){if(Et(e))return e;let t=0,r=e.c;for(let n=0;n<24;n++){let o=(t+r)/2;Et({...e,c:o})?t=o:r=o}return{...e,c:t}}function it(e){return Tt(At(e)).map(t=>Math.min(1,Math.max(0,be(Math.max(0,t)))))}function ct(e){return"#"+it(e).map(t=>Math.round(t*255).toString(16).padStart(2,"0")).join("")}function Mt(e){Ct(e);let{a:t,f:r}=me[e],n=(t-r)/(U.length-1),o=[];return St.forEach((i,c)=>{let a=(c+1)*30%360;for(let d=0;d<U.length;d++){let m=c%2===0?d:U.length-1-d,h=At({l:t-n*m,c:ge,h:a});o.push({...h,family:i,shade:U[m],name:`${i} ${U[m]}`,hex:ct(h)})}}),o}var et={light:Mt("light"),dark:Mt("dark")},Rt=e=>(e%R+R)%R,ot=e=>Rt(Math.round(e));function Lt(e,t){if(Ct(e),!Number.isFinite(t))throw new Error(`a loop position must be a number, not ${t}`);let r=et[e],n=Rt(t),o=Math.floor(n),i=n-o,c=r[o],a=r[(o+1)%r.length],d=(a.h-c.h+540)%360-180;return{l:c.l+(a.l-c.l)*i,c:c.c+(a.c-c.c)*i,h:((c.h+d*i)%360+360)%360}}var Pt=(e,t)=>et[e][ot(t)].name;var H={background:"background.effect",on:"background.on",interactive:"background.interactive"};function we(e,t){let r=wt().map(d=>d.id),n=tt(e,H.background,r,t[0]).read(),o=t.includes(n)?n:t[0],i=tt(e,H.on,["1","0","unset"],"unset").read(),c=e.matchMedia("(prefers-reduced-motion: reduce)").matches,a=tt(e,H.interactive,["1","0"],"1").read()==="1";return{background:o,on:i==="unset"?!c:i==="1",interactive:a}}function ve(e){let t=2*Math.PI/R,r=(n,o)=>`${(50+n*Math.sin(o)).toFixed(2)},${(50-n*Math.cos(o)).toFixed(2)}`;return et[e].map((n,o)=>{let i=o*t,c=i+t;return`<path d="${`M${r(48,i)}A48,48 0 0 1 ${r(48,c)}L${r(30,c)}A30,30 0 0 0 ${r(30,i)}Z`}" fill="${n.hex}" data-stop="${o}"><title>${n.name}</title></path>`}).join("")}var ke=`
  <button type="button" class="btn name" title="Show the next background"></button>
  <label class="check"><input type="checkbox" class="on"> Background</label>
  <label class="check full-only"><input type="checkbox" class="interactive"> Background reacts to the mouse</label>
  <label class="check full-only"><input type="checkbox" class="color-mode"> Color mode</label>
  <svg class="wheel full-only" viewBox="0 0 100 100" role="group" aria-label="Background colour (72 stops)"><g class="stops"></g>
    <circle class="marker" r="5" cx="50" cy="11"></circle></svg>
  <span class="hint" hidden>Wheel: colors \xB7 middle-click to stop \xB7 <output class="color-name"></output></span>`;function _t({win:e,box:t,layer:r,mode:n,effects:o,environment:i,mountView:c,onChange:a}){let d=t.ownerDocument,m=new AbortController,h=(l,y,P)=>l.addEventListener(y,P,{signal:m.signal});t.innerHTML=n==="none"?"":ke,t.dataset.mode=n;let u=l=>t.querySelector(l),{background:p,on:w,interactive:E}=we(e,o),f=!1,A=0,v="",M=null,g=()=>({background:p,on:w,interactive:E,colorMode:f,color:v,stop:A});function C(){if(n!=="none"){u(".name").textContent=vt(p),u(".on").checked=w,u(".interactive").checked=E,u(".color-mode").checked=f,u(".color-mode").disabled=!w,u(".hint").hidden=!(w&&f),u(".color-name").textContent=v;let{theme:l}=i();M!==l&&(u(".wheel .stops").innerHTML=ve(l),M=l);let y=(A+.5)/R*2*Math.PI,P=u(".wheel .marker");P.setAttribute("cx",(50+39*Math.sin(y)).toFixed(2)),P.setAttribute("cy",(50-39*Math.cos(y)).toFixed(2)),u(".wheel").classList.toggle("off",!w)}a(g())}let S=c(r,{background:p,on:w,interactive:E,colorMode:f,...i(),onColorMode(l,y,P){v=y,A=P,C()},onColorModeRequest:l=>T({colorMode:l})});function T(l){for(let y of Object.keys(l)){if(!["background","on","interactive","colorMode"].includes(y))throw new Error(`<toy-background>: no setting ${y}`);if(y!=="background"&&typeof l[y]!="boolean")throw new Error(`<toy-background>: ${y} must be true or false`)}if("background"in l){if(!o.includes(l.background))throw new Error(`<toy-background>: "${l.background}" is not one of its effects (${o.join(", ")})`);p=l.background,Q(e,H.background).write(p)}"on"in l&&(w=l.on,Q(e,H.on).write(w?"1":"0")),"interactive"in l&&(E=l.interactive,Q(e,H.interactive).write(E?"1":"0")),"colorMode"in l&&(f=l.colorMode),w||(f=!1),S.update({background:p,on:w,interactive:E,colorMode:f}),C()}return n!=="none"&&(h(u(".name"),"click",()=>T({background:kt(p,o)})),h(u(".on"),"change",l=>T({on:l.target.checked})),h(u(".interactive"),"change",l=>T({interactive:l.target.checked})),h(u(".color-mode"),"change",l=>T({colorMode:l.target.checked})),h(u(".wheel"),"click",l=>{let y=l.target.closest?.("[data-stop]");y&&w&&S.pick(Number(y.dataset.stop))})),C(),{set:T,state:g,update(){S.update(i()),C()},destroy(){m.abort(),S.unmount(),t.replaceChildren(),d.documentElement.classList.remove("toybox-background-color-mode")}}}var xe=`
  :host { display: block; }
  :host([hidden]) { display: none; }
  ${xt}
  ${yt}
  .layer { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
  .backdrop-layers, .backdrop-effect, .backdrop-wash { position: absolute; inset: 0; }
  .backdrop-effect > * { width: 100%; height: 100%; }
  .controls { display: flex; flex-wrap: wrap; align-items: center; gap: .4rem .8rem; }
  .controls[data-mode="none"] { display: none; }
  .controls[data-mode="compact"] .full-only { display: none; }
  .wheel { width: 64px; height: 64px; cursor: pointer; }
  .wheel.off { opacity: .4; cursor: default; }
  .wheel .marker { fill: none; stroke: var(--ink); stroke-width: 2.5; pointer-events: none; }
  .hint { font-size: .8rem; color: var(--soft); }
  @media print { .layer, .controls { display: none !important; } }`;function Ot(e,t,{mountView:r}){let n=e.ownerDocument,o=n.defaultView;t.querySelector("style").textContent=xe;let i=n.createElement("div");i.className="layer",i.setAttribute("aria-hidden","true"),i.setAttribute("part","layer");let c=n.createElement("div");c.className="controls",c.setAttribute("part","controls"),t.append(i,c,n.createElement("slot"));let a=!1,d=()=>{let u=o.getComputedStyle(e).getPropertyValue("--toybox-paper").trim();return{theme:e.environment().theme,paper:u||null,hidden:a}},m=()=>_t({win:o,box:c,layer:i,mode:e.controlsMode,effects:e.effects,environment:d,mountView:r,onChange:u=>e.dispatchEvent(new o.CustomEvent("background-change",{detail:u,bubbles:!0,composed:!0}))}),h=m();return{set:u=>h.set(u),state:()=>h.state(),environmentChanged:()=>h.update(),hiddenChanged(u){a=u,h.update()},attributeChanged(u){u!=="effects"&&u!=="controls"||(h.destroy(),h=m())},destroy(){h.destroy(),i.remove(),c.remove()}}}var ye=4e3,Ee=250,Me=8e3,Se=100,Ce=e=>1-(1-e)**3,nt=class{constructor(){this.reducedMotion=!1,this.position=0,this.lastFrame=null,this.stepping=!1,this.target=0,this.easeFrom=0,this.easeStart=0,this.lastTick=0}advance(t){let r=this.lastFrame===null?0:Math.min(Se,Math.max(0,t-this.lastFrame));if(this.lastFrame=t,this.stepping){let n=this.reducedMotion?1:Math.min(1,(t-this.easeStart)/Ee);this.position=n>=1?this.target:this.easeFrom+(this.target-this.easeFrom)*Ce(n),t-this.lastTick>=Me&&(this.stepping=!1)}else this.reducedMotion||(this.position+=r/ye);return this.position}step(t,r){if(t!==1&&t!==-1)throw new Error(`a color step is +1 or -1, not ${t}`);this.stepping?this.target+=t:(this.target=t>0?Math.floor(this.position+1e-9)+1:Math.ceil(this.position-1e-9)-1,this.stepping=!0),this.easeFrom=this.position,this.easeStart=r,this.lastTick=r}pick(t,r){if(!Number.isInteger(t)||t<0||t>=R)throw new Error(`a color stop is 0 to ${R-1}, not ${t}`);let n=(this.position%R+R)%R,o=((t-n)%R+R)%R;this.target=Math.round(this.position+(o>R/2?o-R:o)),this.stepping=!0,this.easeFrom=this.position,this.easeStart=r,this.lastTick=r}},Ft=100,Te=40,Ae=40;function It(e,t,r,n){let o=r===1?t*Te:r===2?t*n:t;if(o===0)return 0;Math.sign(o)!==Math.sign(e.pixels)&&(e.pixels=0),e.pixels+=o;let i=Math.trunc(e.pixels/Ft);return i!==0?(e.pixels-=i*Ft,i):Math.abs(o)>=Ae?(e.pixels=0,Math.sign(o)):0}function z(e,{scale:t=1,maxRatio:r=2}={}){let n=e.ownerDocument,o=n.defaultView,i=n.createElement("canvas");i.style.display="block",i.style.width="100%",i.style.height="100%",e.append(i);let c={canvas:i,ratio:1,fit(){c.ratio=Math.min(o.devicePixelRatio||1,r)*t;let a=Math.max(1,Math.round(e.clientWidth*c.ratio)),d=Math.max(1,Math.round(e.clientHeight*c.ratio));return i.width===a&&i.height===d?!1:(i.width=a,i.height=d,!0)}};return c.fit(),c}function V(e,t,r=30){let n=null,o=null,i=r,c=a=>{o!==null&&(i+=Math.min(100,Math.max(0,a-o))/1e3),o=a,t(i),n=e.requestAnimationFrame(c)};return{resume(){n===null&&(o=null,n=e.requestAnimationFrame(c))},pause(){n!==null&&(e.cancelAnimationFrame(n),n=null)},redraw(){n===null&&t(i)}}}function X(e){let t={x:0,y:0,on:0,targetX:0,targetY:0,inside:!1};return{state:t,set(r){if(!r){t.inside=!1;return}let n=e.getBoundingClientRect();t.targetX=r.x-n.left,t.targetY=r.y-n.top,!t.inside&&t.on<.01&&(t.x=t.targetX,t.y=t.targetY),t.inside=!0},step(){return t.x+=(t.targetX-t.x)*.15,t.y+=(t.targetY-t.y)*.15,t.on+=((t.inside?1:0)-t.on)*.08,t}}}var Re=`
attribute vec2 aPosition;
void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`,Le=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPointerOn;
uniform vec3 uColor[3];
uniform float uLight;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(cell), hash12(cell + vec2(1.0, 0.0)), u.x),
             mix(hash12(cell + vec2(0.0, 1.0)), hash12(cell + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  for (int octave = 0; octave < 5; octave++) {
    sum += amp * noise(p);
    p = turn * p * 2.03;
    amp *= 0.5;
  }
  return sum;
}

// The three colours round a loop: 0 \u2192 first, 1/3 \u2192 second, 2/3 \u2192 third, 1 \u2192 first again.
vec3 ramp(float t) {
  float k = fract(t) * 3.0;
  if (k < 1.0) return mix(uColor[0], uColor[1], k);
  if (k < 2.0) return mix(uColor[1], uColor[2], k - 1.0);
  return mix(uColor[2], uColor[0], k - 2.0);
}
`;function Nt(e,t,r){let n=e.createShader(t);if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error(`a background shader did not compile: ${e.getShaderInfoLog(n)}`);return n}function Pe(e,t){let r=e.createProgram();if(e.attachShader(r,Nt(e,e.VERTEX_SHADER,Re)),e.attachShader(r,Nt(e,e.FRAGMENT_SHADER,Le+t)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error(`a background shader did not link: ${e.getProgramInfoLog(r)}`);return r}function I(e,{scale:t=1,maxRatio:r=2}={}){return{mount(n,o){let i=n.ownerDocument.defaultView,c=z(n,{scale:t,maxRatio:r}),a=c.canvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});if(!a)throw c.canvas.remove(),new Error("this browser has no WebGL");let d=Pe(a,e);a.useProgram(d);let m=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,m),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW);let h=a.getAttribLocation(d,"aPosition");a.enableVertexAttribArray(h),a.vertexAttribPointer(h,2,a.FLOAT,!1,0,0);let u=Object.fromEntries(["uRes","uTime","uPointer","uPointerOn","uColor","uLight"].map(v=>[v,a.getUniformLocation(d,v)])),p=X(n),w=o.colors,f=V(i,v=>{c.fit();let{canvas:M}=c;a.viewport(0,0,M.width,M.height);let g=p.step();a.uniform2f(u.uRes,M.width,M.height),a.uniform1f(u.uTime,v),a.uniform2f(u.uPointer,g.x/Math.max(1,n.clientWidth),1-g.y/Math.max(1,n.clientHeight)),a.uniform1f(u.uPointerOn,g.on),a.uniform3fv(u.uColor,w.rgb.flat()),a.uniform1f(u.uLight,w.theme==="light"?1:0),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLES,0,3)}),A=new i.ResizeObserver(()=>f.redraw());return A.observe(n),f.redraw(),f.resume(),{setColors(v){w=v,f.redraw()},pointer:v=>p.set(v),pause:()=>f.pause(),resume:()=>f.resume(),destroy(){f.pause(),A.disconnect(),a.deleteBuffer(m),a.deleteProgram(d),a.getExtension("WEBGL_lose_context")?.loseContext(),c.canvas.remove()}}}}}var $t=I(`
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  float x = uv.x * aspect;
  float t = uTime * 0.06;
  float lift = uPointerOn * exp(-pow((uv.x - uPointer.x) * aspect * 2.5, 2.0)) * 0.12;
  vec3 light = vec3(0.0);
  float glow = 0.0;
  for (int i = 0; i < 3; i++) {
    float layer = float(i);
    float hem = 0.42 + 0.13 * layer + 0.22 * (fbm(vec2(x * 0.45 + layer * 7.3, t + layer * 1.7)) - 0.5) + lift;
    float above = uv.y - hem;
    // A sharp hem below, a long fade above it.
    float shape = above < 0.0 ? exp(above * 45.0) : exp(-above * (4.5 - layer));
    float rays = 0.55 + 0.45 * noise(vec2(x * 18.0 + layer * 11.0, t * 4.0));
    float strength = shape * rays * (0.75 - 0.15 * layer);
    light += uColor[i] * strength;
    glow += strength;
  }
  float alpha = clamp(glow * 0.75, 0.0, 0.9);
  vec3 color = light / max(glow, 0.001);
  gl_FragColor = vec4(color * alpha, alpha);
}`,{scale:.5});var Bt=I(`
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 1.6;
  float t = uTime * 0.05;
  vec2 flow = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - vec2(t, 0.0)));
  vec2 away = (uv - uPointer) * vec2(aspect, 1.0);
  float swirl = uPointerOn * exp(-dot(away, away) * 10.0);
  flow += swirl * vec2(-away.y, away.x) * 4.0;
  float thickness = fbm(p + 1.8 * flow + vec2(t * 0.5, -t * 0.3));
  vec3 bands = 0.5 + 0.5 * cos(6.2832 * (thickness * 2.2 + vec3(0.0, 0.33, 0.67)));
  float total = bands.r + bands.g + bands.b;
  vec3 color = (uColor[0] * bands.r + uColor[1] * bands.g + uColor[2] * bands.b) / max(total, 0.001);
  float sheen = pow(bands.r * bands.g * bands.b * 2.0, 2.0) * (1.0 - 0.6 * uLight);
  color = min(color + sheen, vec3(1.0));
  float alpha = 0.78 + 0.12 * sheen;
  gl_FragColor = vec4(color * alpha, alpha);
}`,{scale:.5});var lt=30,Dt=14,_e=16,Oe=60,Gt=140,Ut={mount(e,t){let r=e.ownerDocument.defaultView,n=z(e),o=n.canvas.getContext("2d");if(!o)throw new Error("this browser has no canvas 2D");let i=X(e),c=t.colors;function a(h){n.fit();let{canvas:u,ratio:p}=n,w=u.width/p,E=u.height/p,f=i.step();o.setTransform(p,0,0,p,0,0),o.clearRect(0,0,w,E);let A=o.createLinearGradient(0,0,w,E);c.hex.forEach((v,M)=>A.addColorStop(M/(c.hex.length-1),v)),o.strokeStyle=A,o.lineWidth=1.1,o.globalAlpha=c.theme==="light"?.75:.85;for(let v=-1,M=-lt;M<E+lt;v++,M+=lt){o.beginPath();for(let g=0;g<=w+Dt;g+=Dt){let C=M+_e*(.6*Math.sin(g*.0045+h*.45+v*.33)+.4*Math.sin(g*.012-h*.7+v*.21));if(f.on>.01){let S=g-f.x,T=C-f.y,l=Math.exp(-(S*S+T*T)/(Gt*Gt));C+=Math.sign(T||1)*Oe*l*f.on}g===0?o.moveTo(g,C):o.lineTo(g,C)}o.stroke()}}let d=V(r,a),m=new r.ResizeObserver(()=>d.redraw());return m.observe(e),d.redraw(),d.resume(),{setColors(h){c=h,d.redraw()},pointer:h=>i.set(h),pause:()=>d.pause(),resume:()=>d.resume(),destroy(){d.pause(),m.disconnect(),n.canvas.remove()}}}};var Ht=I(`
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 5.0;
  float t = uTime * 0.35;
  vec2 centre = vec2(sin(t * 0.7), cos(t * 0.5)) * 2.0;
  float sum = sin(p.x * 0.9 + t)
    + sin((p.y * 0.8 - t) * 0.9)
    + sin((p.x + p.y) * 0.55 + t * 0.6)
    + sin(length(p - centre) * 1.3 - t * 1.2);
  vec2 hand = (uPointer - 0.5) * vec2(aspect, 1.0) * 5.0;
  float reach = length(p - hand);
  sum += uPointerOn * 1.6 * sin(reach * 3.0 - uTime * 3.0) * exp(-reach * 0.6);
  vec3 color = ramp(sum * 0.12 + 0.5 + t * 0.02);
  float alpha = 0.85;
  gl_FragColor = vec4(color * alpha, alpha);
}`,{scale:.5});var zt=I(`
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float r0 = length(p);
  float wave0 = sin(r0 * 20.0 - uTime * 1.4) * exp(-r0 * 2.2);
  vec2 hand = (uPointer - 0.5) * vec2(aspect, 1.0);
  vec2 fromHand = p - hand;
  float r1 = length(fromHand);
  float wave1 = uPointerOn * sin(r1 * 34.0 - uTime * 4.0) * exp(-r1 * 7.0);
  vec2 bent = p + normalize(p + 1e-5) * wave0 * 0.012 + normalize(fromHand + 1e-5) * wave1 * 0.018;
  float cells = 14.0;
  vec2 grid = abs(fract(bent * cells) - 0.5);
  float line = 0.5 - max(grid.x, grid.y);
  float pixel = cells / uRes.y;
  float ink = 1.0 - smoothstep(pixel * 0.6, pixel * 1.8, line);
  float crest = clamp(0.5 + 0.5 * (wave0 + wave1), 0.0, 1.0);
  float fade = smoothstep(1.0, 0.15, r0);
  vec3 color = mix(uColor[0], uColor[1], crest);
  float alpha = ink * fade * (0.3 + 0.55 * crest) + (1.0 - ink) * fade * 0.12 * crest;
  color = mix(uColor[2], color, ink);
  gl_FragColor = vec4(color * alpha, alpha);
}`);var Vt=3,Fe=50,Xt=110;function Ie(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Ne(e){let t=Ie(20261002);return Array.from({length:e},()=>{let r=Math.sqrt(t())*.95+.02,n=Math.floor(t()*Vt);return{radius:r,angle:n/Vt*Math.PI*2+Math.log(r*8+1)*1.8+(t()-.5)*.9*(1-r*.5),size:1+t()*t()*2.2,tint:Math.floor(t()*3),phase:t()*Math.PI*2,pace:.6+t()*1.8}})}var Yt={mount(e,t){let r=e.ownerDocument.defaultView,n=z(e),o=n.canvas.getContext("2d");if(!o)throw new Error("this browser has no canvas 2D");let i=X(e),c=t.colors,a=[];function d(u){n.fit();let{canvas:p,ratio:w}=n,E=p.width/w,f=p.height/w,A=Math.min(1400,Math.round(E*f/1200));a.length!==A&&(a=Ne(A));let v=i.step();o.setTransform(w,0,0,w,0,0),o.clearRect(0,0,E,f);let M=E/2,g=f/2,C=Math.hypot(E,f)/2,S=o.createRadialGradient(M,g,0,M,g,C*.45);S.addColorStop(0,c.hex[0]),S.addColorStop(1,"transparent"),o.globalAlpha=.18,o.fillStyle=S,o.fillRect(0,0,E,f);for(let T=0;T<3;T++){o.fillStyle=c.hex[T];for(let l of a){if(l.tint!==T)continue;let y=l.angle+u*.02/(.25+l.radius),P=M+Math.cos(y)*l.radius*C,F=g+Math.sin(y)*l.radius*C*.8;if(v.on>.01){let Y=P-v.x,B=F-v.y,D=Math.hypot(Y,B)||1,q=Fe*v.on*Math.exp(-(D*D)/(Xt*Xt));P+=Y/D*q,F+=B/D*q}o.globalAlpha=.45+.55*(.5+.5*Math.sin(u*l.pace+l.phase)),o.fillRect(P-l.size/2,F-l.size/2,l.size,l.size)}}}let m=V(r,d),h=new r.ResizeObserver(()=>m.redraw());return h.observe(e),m.redraw(),m.resume(),{setColors(u){c=u,m.redraw()},pointer:u=>i.set(u),pause:()=>m.pause(),resume:()=>m.resume(),destroy(){m.pause(),h.disconnect(),n.canvas.remove()}}}};var qt={lines:Ut,aurora:$t,film:Bt,plasma:Ht,stars:Yt,ripples:zt};var $e="toy-drawer, toy-box, dice-tray, toy-background, draw-layer, toy-pages",Be=`[data-solid], ${$e}, dialog, [role=dialog], button, input, select, textarea, label, a, [contenteditable]`,$="toybox-background-grab",N="toybox-background-dragging",jt=`html.${$} { cursor: grab; }
html.${N}, html.${N} * { cursor: grabbing !important; user-select: none !important; -webkit-user-select: none !important; }`;function Jt(e,t){return t===1?!e:e}function De(e,t){return e===0&&t}function j(e){return!e||typeof e.closest!="function"?!1:e.closest(Be)===null}function Wt(e){let t=null,r=!0;function n(){t&&(t=null,e(null))}return{press(o,i,c,a,d){return!r||t||!De(a,d)?!1:(t={pointerId:o},e({x:i,y:c}),!0)},move(o,i,c){t&&t.pointerId===o&&e({x:i,y:c})},release(o){t&&t.pointerId===o&&n()},end:n,setEnabled(o){r=o,o||n()},get enabled(){return r},get dragging(){return t!==null}}}var Zt={light:st.light.paper,dark:st.dark.paper},Ge=e=>(e%360+360)%360,L=(e,t)=>({...e,h:Ge(e.h+t)}),rt=(e,t)=>({...e,l:Math.min(.99,Math.max(.05,t))}),O=(e,t,r)=>({l:t,c:r,h:e.h}),Kt={wash:{light:.2,dark:.3},colors:(e,t)=>[t,L(t,150),L(t,20)]},ut={lines:{wash:{light:.25,dark:.45},colors:(e,t)=>{let r=e==="light"?rt(t,t.l-.12):t;return[r,L(r,40),L(r,-40)]}},aurora:{wash:{light:.25,dark:.4},colors:(e,t)=>[t,L(t,150),L(t,20)]},film:{wash:{light:.45,dark:.35},colors:(e,t)=>e==="light"?[O(t,.9,.06),O(L(t,120),.85,.08),O(L(t,240),.85,.08)]:[O(t,.6,.1),O(L(t,120),.55,.11),O(L(t,240),.55,.11)]},plasma:{wash:{light:.35,dark:.4},colors:(e,t)=>e==="light"?[O(t,.82,.09),O(L(t,150),.76,.09),O(L(t,60),.92,.04)]:[O(t,.55,.11),O(L(t,150),.45,.1),O(L(t,60),.25,.04)]},stars:{wash:{light:.1,dark:.1},colors:(e,t)=>{let r=e==="light"?rt(t,.45):rt(t,Math.max(t.l,.8));return[r,L(r,60),L(r,-60)]}},ripples:{wash:{light:.1,dark:.15},colors:(e,t)=>{let r=e==="light"?rt(t,t.l-.15):t;return[r,L(r,30),O(r,e==="light"?.95:.2,.02)]}}};for(let{id:e}of bt)if(!ut[e])throw new Error(`no look for background ${e}`);function Qt(e){if(ut[e])return ut[e];let t=K(e)?.wash;if(t!==void 0)return{...Kt,wash:typeof t=="number"?{light:t,dark:t}:t};if(Z(e))return Kt;throw new Error(`unknown background ${JSON.stringify(e)}`)}function te(e){if(!(e in Zt))throw new Error(`unknown theme ${JSON.stringify(e)}`)}function ee(e,t,r=null){let n=Qt(e);return te(t),{background:r||Zt[t],wash:n.wash[t]}}function oe(e,t,r){let n=Qt(e);te(t);let o=n.colors(t,Lt(t,r));return{theme:t,hex:o.map(ct),rgb:o.map(it)}}var J=new nt,Ue="(prefers-reduced-motion: reduce)",re=["background","theme","paper","on","hidden","interactive","colorMode"];function ae(e){if(!Z(e.background))throw new Error(`unknown background ${JSON.stringify(e.background)}`);if(e.theme!=="light"&&e.theme!=="dark")throw new Error(`unknown theme ${JSON.stringify(e.theme)}`);if(e.paper!==null&&typeof e.paper!="string")throw new Error(`paper must be a colour or null, not ${JSON.stringify(e.paper)}`);for(let t of["on","hidden","interactive","colorMode"])if(typeof e[t]!="boolean")throw new Error(`${t} must be true or false, not ${JSON.stringify(e[t])}`);return e}function He(e,t,r){let n=i=>{let a=(r&&typeof r[i]=="function"?r:null)??(typeof t[i]=="function"?t:null);return a?(...d)=>a[i](...d):null},o=n("destroy");if(!o)throw new Error(`background "${e}" has no destroy(): give it on the definition or on what mount() returns`);return{destroy:o,setColors:n("setColors")??(()=>{}),pointer:n("pointer")??(()=>{}),pause:n("pause")??(()=>{}),resume:n("resume")??(()=>{})}}var dt=e=>`${e.theme}${e.hex.join("")}`;function se(e,t,{effects:r=qt}={}){let n=e.ownerDocument,o=n.defaultView,{onColorMode:i,onColorModeRequest:c}=t,a=ae(Object.fromEntries(re.map(s=>[s,t[s]]))),d=o.matchMedia(Ue),m=d.matches,h=n.visibilityState!=="hidden",u=null,p=null,w=null,E=null,f=null,A=!1,v=null,M=null,g=null,C=null,S=null,T=new AbortController,l=(s,b,k,_,G={})=>b.addEventListener(k,_,{...G,signal:s}),y=()=>a.on&&a.colorMode,P=()=>m||!h||a.hidden,F=()=>J.advance(o.performance.now()),Y=s=>i(y(),Pt(a.theme,s),ot(s));function B(s){return oe(a.background,a.theme,s)}function D(s){let b=r[s]??K(s);if(!b)throw new Error(`unknown background ${JSON.stringify(s)}`);return b}function q(){if(!p)return;let s=p;p=null,w=null,s.destroy()}function ie(){q(),u.effect.replaceChildren(),delete u.root.dataset.failed,E=null;let s=a.background,b=B(F());try{let k=D(s),_=k.mount(u.effect,{colors:b,theme:a.theme,reducedMotion:m});p=He(s,k,_),w=s,v=dt(b),A=!1,P()&&(p.pause(),A=!0)}catch(k){p=null,E=s,u.root.dataset.failed=s,o.console.error(`<toy-background>: the "${s}" background could not draw:`,k)}}function at(){if(!p)return;let s=P();s!==A&&(A=s,s?p.pause():p.resume())}function ft(){let s=F(),b=ot(s);if(b!==M&&(M=b,Y(s)),p){let k=B(s),_=dt(k);_!==v&&(v=_,p.setColors(k))}g=o.requestAnimationFrame(ft)}function ht(){let s=a.on&&h&&!a.hidden;s&&g===null&&(g=o.requestAnimationFrame(ft)),!s&&g!==null&&(o.cancelAnimationFrame(g),g=null)}function ce(){let s=n.createElement("div");s.className="backdrop-layers";let b=n.createElement("div");b.className="backdrop-effect";let k=n.createElement("div");k.className="backdrop-wash",s.append(b,k),e.append(s),u={root:s,effect:b,wash:k}}function le(){let s=ee(a.background,a.theme,a.paper);u.root.style.backgroundColor=s.background,u.wash.style.backgroundColor=s.background,u.wash.style.opacity=String(s.wash)}let ue=s=>p?.pointer(s);function de(){C=new AbortController;let{signal:s}=C,b=n.documentElement.classList,k=n.createElement("style");k.setAttribute("data-toybox-background",""),k.textContent=jt,(n.head??n.documentElement).append(k),f=Wt(ue);let _=()=>{f.end(),b.remove(N)};s.addEventListener("abort",()=>{_(),b.remove($),k.remove()}),l(s,o,"pointerdown",x=>{let gt=j(x.target);if(x.button===1){gt&&c(Jt(y(),x.button));return}f.press(x.pointerId,x.clientX,x.clientY,x.button,gt)&&(o.getSelection()?.removeAllRanges(),b.remove($),b.add(N))}),l(s,o,"pointermove",x=>{if(f.dragging){f.move(x.pointerId,x.clientX,x.clientY);return}b.toggle($,f.enabled&&j(x.target))});let G=x=>{f.release(x.pointerId),f.dragging||b.remove(N)};l(s,o,"pointerup",G),l(s,o,"pointercancel",G),l(s,o,"blur",_),l(s,n,"mouseout",x=>{x.relatedTarget===null&&(_(),b.remove($))}),l(s,o,"touchmove",x=>{f.dragging&&x.preventDefault()},{passive:!1});let W=x=>{x.button===1&&j(x.target)&&x.preventDefault()};for(let x of["mousedown","mouseup","auxclick"])l(s,o,x,W)}function fe(s){f.setEnabled(s),!s&&n.documentElement.classList.remove($,N)}function he(){S=new AbortController;let{signal:s}=S,b={pixels:0};l(s,o,"wheel",k=>{if(!j(k.target))return;k.preventDefault();let _=It(b,k.deltaY,k.deltaMode,o.innerHeight),G=o.performance.now();for(let W=0;W<Math.abs(_);W++)J.step(_>0?1:-1,G)},{passive:!1}),l(s,n,"keydown",k=>{k.key==="Escape"&&c(!1)}),n.documentElement.classList.add("toybox-background-color-mode"),s.addEventListener("abort",()=>n.documentElement.classList.remove("toybox-background-color-mode"))}function pt(){C?.abort(),C=null,S?.abort(),S=null,q(),E=null,u?.root.remove(),u=null}function mt(s){if(!a.on)pt();else{if(u||ce(),le(),C||de(),fe(a.interactive),w!==a.background&&E!==a.background)ie();else if(s&&s.theme!==a.theme&&p){let b=B(F());v=dt(b),p.setColors(b)}at()}y()&&!S&&he(),!y()&&S&&(S.abort(),S=null),ht(),(!s||s.theme!==a.theme||s.colorMode!==a.colorMode||s.on!==a.on)&&Y(F())}return J.reducedMotion=m,l(T.signal,d,"change",()=>{m=d.matches,J.reducedMotion=m,at()}),l(T.signal,n,"visibilitychange",()=>{h=n.visibilityState!=="hidden",at(),ht()}),mt(null),{update(s){let b=a;a=ae({...a,...Object.fromEntries(Object.entries(s).filter(([k])=>re.includes(k)))}),mt(b)},pick(s){J.pick(s,o.performance.now())},unmount(){T.abort(),g!==null&&o.cancelAnimationFrame(g),g=null,pt()}}}var No=(e,t)=>Ot(e,t,{mountView:se});export{No as mount};
