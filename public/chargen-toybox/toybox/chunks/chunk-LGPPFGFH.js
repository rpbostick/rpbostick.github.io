import{b as S}from"./chunk-KPNFRMDV.js";import{b as y}from"./chunk-I3M5WXFC.js";var l=256,g=20,w=.04,C=`
attribute vec2 vertex;
varying vec2 coord;
void main() {
  coord = vertex * 0.5 + 0.5;
  gl_Position = vec4(vertex, 0.0, 1.0);
}`,M=`
precision highp float;
const float PI = 3.141592653589793;
uniform sampler2D texture;
uniform vec2 center;
uniform float radius;
uniform float strength;
varying vec2 coord;
void main() {
  vec4 info = texture2D(texture, coord);
  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);
  drop = 0.5 - cos(drop * PI) * 0.5;
  info.r += drop * strength;
  gl_FragColor = info;
}`,O=`
precision highp float;
uniform sampler2D texture;
uniform vec2 delta;
varying vec2 coord;
void main() {
  vec4 info = texture2D(texture, coord);
  vec2 dx = vec2(delta.x, 0.0);
  vec2 dy = vec2(0.0, delta.y);
  float average = (
    texture2D(texture, coord - dx).r +
    texture2D(texture, coord - dy).r +
    texture2D(texture, coord + dx).r +
    texture2D(texture, coord + dy).r
  ) * 0.25;
  info.g += (average - info.r) * 2.0;
  info.g *= 0.995;
  info.r += info.g;
  gl_FragColor = info;
}`,B=`
precision highp float;
attribute vec2 vertex;
uniform vec2 topLeft;
uniform vec2 bottomRight;
uniform vec2 containerRatio;
varying vec2 ripplesCoord;
varying vec2 backgroundCoord;
void main() {
  backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);
  backgroundCoord.y = 1.0 - backgroundCoord.y;
  ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;
  gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);
}`,I=`
precision highp float;
uniform sampler2D samplerBackground;
uniform sampler2D samplerRipples;
uniform vec2 delta;
uniform float perturbance;
varying vec2 ripplesCoord;
varying vec2 backgroundCoord;
void main() {
  float height = texture2D(samplerRipples, ripplesCoord).r;
  float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;
  float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;
  vec3 dx = vec3(delta.x, heightX - height, 0.0);
  vec3 dy = vec3(0.0, heightY - height, delta.y);
  vec2 offset = -normalize(cross(dy, dx)).xz;
  float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);
  gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;
}`;function N(t){let r={};for(let a of["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear"]){let i=t.getExtension(a);i&&(r[a]=i)}if(!r.OES_texture_float)return null;let e=[{type:t.FLOAT,arrayType:Float32Array,linearSupport:"OES_texture_float_linear"in r}];r.OES_texture_half_float&&e.push({type:r.OES_texture_half_float.HALF_FLOAT_OES,arrayType:null,linearSupport:"OES_texture_half_float_linear"in r});let o=t.createTexture(),n=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,n),t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);let E=null;for(let a of e)if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,32,32,0,t.RGBA,a.type,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE){E=a;break}return t.deleteTexture(o),t.deleteFramebuffer(n),E}function v(t,r,e){let o=(i,s)=>{let u=t.createShader(i);if(t.shaderSource(u,s),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(`ripples shader: ${t.getShaderInfoLog(u)}`);return u},n=t.createProgram();if(t.attachShader(n,o(t.VERTEX_SHADER,r)),t.attachShader(n,o(t.FRAGMENT_SHADER,e)),t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS))throw new Error(`ripples program: ${t.getProgramInfoLog(n)}`);let E={},a=/uniform (\w+) (\w+)/g;for(let i of(r+e).matchAll(a))E[i[2]]=t.getUniformLocation(n,i[2]);return t.useProgram(n),t.enableVertexAttribArray(0),{id:n,locations:E}}function G(t){let r=t.element("canvas",{width:512,height:512}),e=r.getContext("2d"),o=t.theme==="dark",n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,o?"#0b2a3a":"#5fb3c9"),n.addColorStop(1,o?"#05141d":"#2f7f9a"),e.fillStyle=n,e.fillRect(0,0,512,512),e.globalAlpha=o?.08:.15,e.strokeStyle="#ffffff",e.lineWidth=6;for(let a=0;a<18;a+=1){e.beginPath();let i=a/18*560-20;e.moveTo(0,i);for(let s=0;s<=512;s+=32)e.lineTo(s,i+Math.sin(s/40+a)*12);e.stroke()}e.globalAlpha=1;let E=[[90,380,26,"#c8b89a"],[140,410,18,"#a89880"],[380,120,22,"#d8cbb0"],[420,160,14,"#9a8a72"],[300,430,30,"#bfae90"]];for(let[a,i,s,u]of E)e.fillStyle=o?"#3a3a3a":u,e.beginPath(),e.ellipse(a,i,s,s*.7,.3,0,Math.PI*2),e.fill();return r}var H=y(S("ripple-tank"),t=>{let r=t.canvas({context:null}),e=r.canvas.getContext("webgl",{premultipliedAlpha:!1})??r.canvas.getContext("experimental-webgl"),o=e?N(e):null;if(!o)return t.add(t.element("p",{className:"toy-message",textContent:"This toy needs WebGL with float textures, which this browser does not offer."})),t.onFrame(()=>{}),{reset(){}};o.linearSupport&&e.getExtension(o.type===e.FLOAT?"OES_texture_float_linear":"OES_texture_half_float_linear");let n=new Float32Array([1/l,1/l]),E=[],a=[],i=0,s=1,u=!1,x=0;function F(){let f=o.arrayType?new o.arrayType(l*l*4):null;for(let c=0;c<2;c+=1){let T=E[c]??e.createTexture(),p=a[c]??e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,p),e.bindTexture(e.TEXTURE_2D,T);let _=o.linearSupport?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,_),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,_),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,l,l,0,e.RGBA,o.type,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,T,0),E[c]=T,a[c]=p}}F();let b=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.STATIC_DRAW);let R=v(e,C,M),D=v(e,C,O);e.uniform2fv(D.locations.delta,n);let d=v(e,B,I);e.uniform2fv(d.locations.delta,n);let P=e.createTexture();e.bindTexture(e.TEXTURE_2D,P),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,G(t)),e.clearColor(0,0,0,0),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);let m=(f,c=0)=>{e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,f)},h=()=>{e.bindBuffer(e.ARRAY_BUFFER,b),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},U=()=>{i=1-i,s=1-s};function A(f,c,T,p){let _=Math.max(r.width,r.height);e.viewport(0,0,l,l),e.bindFramebuffer(e.FRAMEBUFFER,a[i]),m(E[s]),e.useProgram(R.id),e.uniform2fv(R.locations.center,new Float32Array([(2*f-r.width)/_,(r.height-2*c)/_])),e.uniform1f(R.locations.radius,T/_),e.uniform1f(R.locations.strength,p),h(),U()}function L(){e.viewport(0,0,l,l),e.bindFramebuffer(e.FRAMEBUFFER,a[i]),m(E[s]),e.useProgram(D.id),h(),U()}function X(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,r.canvas.width,r.canvas.height),e.enable(e.BLEND),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(d.id),m(P,0),m(E[0],1);let f=Math.max(r.canvas.width,r.canvas.height);e.uniform1f(d.locations.perturbance,w),e.uniform2fv(d.locations.topLeft,new Float32Array([0,0])),e.uniform2fv(d.locations.bottomRight,new Float32Array([1,1])),e.uniform2fv(d.locations.containerRatio,new Float32Array([r.canvas.width/f,r.canvas.height/f])),e.uniform1i(d.locations.samplerBackground,0),e.uniform1i(d.locations.samplerRipples,1),h(),e.disable(e.BLEND)}return t.drag(r.canvas,{down({x:f,y:c}){A(f,c,g*1.5,.14),t.redraw()},move({x:f,y:c}){t.running&&A(f,c,g,.01)}}),t.controls([{label:"Rain",onClick(f){u=!u,f.textContent=u?"Stop rain":"Rain"}}]),t.onFrame(f=>{if(f>0){if(u)for(x+=f;x>.15;)x-=.15,A(Math.random()*r.width,Math.random()*r.height,6+Math.random()*6,.04);let c=Math.max(1,Math.round(f*60));for(let T=0;T<c;T+=1)L()}X()}),{reset(){F(),i=0,s=1},destroy(){e.getExtension("WEBGL_lose_context")?.loseContext()}}});export{H as a};
