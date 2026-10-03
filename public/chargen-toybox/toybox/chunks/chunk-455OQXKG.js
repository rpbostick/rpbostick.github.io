import{b as ue}from"./chunk-KPNFRMDV.js";import{b as ae}from"./chunk-I3M5WXFC.js";var Le={SIM_RESOLUTION:128,DYE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10,BACK_COLOR:{r:0,g:0,b:0},BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function se(o){let e={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=o.getContext("webgl2",e),x=!!n;if(x||(n=o.getContext("webgl",e)||o.getContext("experimental-webgl",e)),!n)return null;let u,v;if(x)n.getExtension("EXT_color_buffer_float"),v=n.getExtension("OES_texture_float_linear");else if(u=n.getExtension("OES_texture_half_float"),v=n.getExtension("OES_texture_half_float_linear"),!u)return null;n.clearColor(0,0,0,1);let p=x?n.HALF_FLOAT:u.HALF_FLOAT_OES,R,m,l;return x?(R=F(n,n.RGBA16F,n.RGBA,p),m=F(n,n.RG16F,n.RG,p),l=F(n,n.R16F,n.RED,p)):(R=F(n,n.RGBA,n.RGBA,p),m=F(n,n.RGBA,n.RGBA,p),l=F(n,n.RGBA,n.RGBA,p)),!R||!m||!l?null:{gl:n,ext:{formatRGBA:R,formatRG:m,formatR:l,halfFloatTexType:p,supportLinearFiltering:v}}}function F(o,e,n,x){if(!Ae(o,e,n,x))switch(e){case o.R16F:return F(o,o.RG16F,o.RG,x);case o.RG16F:return F(o,o.RGBA16F,o.RGBA,x);default:return null}return{internalFormat:e,format:n}}function Ae(o,e,n,x){let u=o.createTexture();o.bindTexture(o.TEXTURE_2D,u),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,e,4,4,0,n,x,null);let v=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,v),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,u,0),o.checkFramebufferStatus(o.FRAMEBUFFER)==o.FRAMEBUFFER_COMPLETE}function Fe(o){if(o.length==0)return 0;let e=0;for(let n=0;n<o.length;n++)e=(e<<5)-e+o.charCodeAt(n),e|=0;return e}var Y={baseVertex:`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }`,blurVertex:`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }`,blur:`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }`,copy:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }`,clear:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }`,color:`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }`,display:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }`,bloomPrefilter:`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }`,bloomBlur:`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }`,bloomFinal:`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }`,sunraysMask:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }`,sunrays:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }`,splat:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }`,advection:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,divergence:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }`,curl:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }`,vorticity:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }`,pressure:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }`,gradientSubtract:`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }`};function ce(o,{gl:e,ext:n},x){let u={...Le};n.supportLinearFiltering||(u.DYE_RESOLUTION=256,u.SHADING=!1,u.BLOOM=!1,u.SUNRAYS=!1);function v(r,i,t){let a=(t??[]).map(f=>`#define ${f}
`).join(""),s=e.createShader(r);if(e.shaderSource(s,a+i),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS))throw new Error(`fluid shader: ${e.getShaderInfoLog(s)}`);return s}function p(r,i){let t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,i),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw new Error(`fluid program: ${e.getProgramInfoLog(t)}`);return t}function R(r){let i=[],t=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let a=0;a<t;a++){let s=e.getActiveUniform(r,a).name;i[s]=e.getUniformLocation(r,s)}return i}class m{constructor(i,t){this.vertexShader=i,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let t=0;for(let s=0;s<i.length;s++)t+=Fe(i[s]);let a=this.programs[t];if(a==null){let s=v(e.FRAGMENT_SHADER,this.fragmentShaderSource,i);a=p(this.vertexShader,s),this.programs[t]=a}a!=this.activeProgram&&(this.uniforms=R(a),this.activeProgram=a)}bind(){e.useProgram(this.activeProgram)}}class l{constructor(i,t){this.program=p(i,t),this.uniforms=R(this.program)}bind(){e.useProgram(this.program)}}let d=v(e.VERTEX_SHADER,Y.baseVertex),g=v(e.VERTEX_SHADER,Y.blurVertex),S=(r,i)=>v(e.FRAGMENT_SHADER,Y[r],i),T=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(r,i=!1)=>{r==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,r.width,r.height),e.bindFramebuffer(e.FRAMEBUFFER,r.fbo)),i&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}),E,c,V,H,b,W,O=[],I,ee,K=ve(64),w=new l(g,S("blur")),re=new l(d,S("copy")),k=new l(d,S("clear")),te=new l(d,S("color")),C=new l(d,S("bloomPrefilter")),P=new l(d,S("bloomBlur")),M=new l(d,S("bloomFinal")),ie=new l(d,S("sunraysMask")),q=new l(d,S("sunrays")),U=new l(d,S("splat")),D=new l(d,S("advection",n.supportLinearFiltering?null:["MANUAL_FILTERING"])),$=new l(d,S("divergence")),j=new l(d,S("curl")),B=new l(d,S("vorticity")),z=new l(d,S("pressure")),X=new l(d,S("gradientSubtract")),L=new m(d,Y.display);function G(r){let i=e.drawingBufferWidth/e.drawingBufferHeight;i<1&&(i=1/i);let t=Math.round(r),a=Math.round(r*i);return e.drawingBufferWidth>e.drawingBufferHeight?{width:a,height:t}:{width:t,height:a}}function y(r,i,t,a,s,f){e.activeTexture(e.TEXTURE0);let h=e.createTexture();e.bindTexture(e.TEXTURE_2D,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,r,i,0,a,s,null);let _=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,_),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,h,0),e.viewport(0,0,r,i),e.clear(e.COLOR_BUFFER_BIT),{texture:h,fbo:_,width:r,height:i,texelSizeX:1/r,texelSizeY:1/i,attach(A){return e.activeTexture(e.TEXTURE0+A),e.bindTexture(e.TEXTURE_2D,h),A}}}function J(r,i,t,a,s,f){let h=y(r,i,t,a,s,f),_=y(r,i,t,a,s,f);return{width:r,height:i,texelSizeX:h.texelSizeX,texelSizeY:h.texelSizeY,get read(){return h},set read(A){h=A},get write(){return _},set write(A){_=A},swap(){let A=h;h=_,_=A}}}function me(r,i,t,a,s,f,h){let _=y(i,t,a,s,f,h);return re.bind(),e.uniform1i(re.uniforms.uTexture,r.attach(0)),T(_),_}function oe(r,i,t,a,s,f,h){return r.width==i&&r.height==t||(r.read=me(r.read,i,t,a,s,f,h),r.write=y(i,t,a,s,f,h),r.width=i,r.height=t,r.texelSizeX=1/i,r.texelSizeY=1/t),r}function ve(r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT);let t=new Uint8Array(r*r*3);for(let a=0;a<t.length;a++)t[a]=Math.floor(Math.random()*256);return e.texImage2D(e.TEXTURE_2D,0,e.RGB,r,r,0,e.RGB,e.UNSIGNED_BYTE,t),{texture:i,width:r,height:r,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,i),a}}}function Q(){let r=G(u.SIM_RESOLUTION),i=G(u.DYE_RESOLUTION),t=n.halfFloatTexType,a=n.formatRGBA,s=n.formatRG,f=n.formatR,h=n.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),E==null?E=J(i.width,i.height,a.internalFormat,a.format,t,h):E=oe(E,i.width,i.height,a.internalFormat,a.format,t,h),c==null?c=J(r.width,r.height,s.internalFormat,s.format,t,h):c=oe(c,r.width,r.height,s.internalFormat,s.format,t,h),V=y(r.width,r.height,f.internalFormat,f.format,t,e.NEAREST),H=y(r.width,r.height,f.internalFormat,f.format,t,e.NEAREST),b=J(r.width,r.height,f.internalFormat,f.format,t,e.NEAREST),le(),he()}function le(){let r=G(u.BLOOM_RESOLUTION),i=n.halfFloatTexType,t=n.formatRGBA,a=n.supportLinearFiltering?e.LINEAR:e.NEAREST;W=y(r.width,r.height,t.internalFormat,t.format,i,a),O.length=0;for(let s=0;s<u.BLOOM_ITERATIONS;s++){let f=r.width>>s+1,h=r.height>>s+1;if(f<2||h<2)break;O.push(y(f,h,t.internalFormat,t.format,i,a))}}function he(){let r=G(u.SUNRAYS_RESOLUTION),i=n.halfFloatTexType,t=n.formatR,a=n.supportLinearFiltering?e.LINEAR:e.NEAREST;I=y(r.width,r.height,t.internalFormat,t.format,i,a),ee=y(r.width,r.height,t.internalFormat,t.format,i,a)}function de(){let r=[];u.SHADING&&r.push("SHADING"),u.BLOOM&&r.push("BLOOM"),u.SUNRAYS&&r.push("SUNRAYS"),L.setKeywords(r)}function Te(r){e.disable(e.BLEND),j.bind(),e.uniform2f(j.uniforms.texelSize,c.texelSizeX,c.texelSizeY),e.uniform1i(j.uniforms.uVelocity,c.read.attach(0)),T(H),B.bind(),e.uniform2f(B.uniforms.texelSize,c.texelSizeX,c.texelSizeY),e.uniform1i(B.uniforms.uVelocity,c.read.attach(0)),e.uniform1i(B.uniforms.uCurl,H.attach(1)),e.uniform1f(B.uniforms.curl,u.CURL),e.uniform1f(B.uniforms.dt,r),T(c.write),c.swap(),$.bind(),e.uniform2f($.uniforms.texelSize,c.texelSizeX,c.texelSizeY),e.uniform1i($.uniforms.uVelocity,c.read.attach(0)),T(V),k.bind(),e.uniform1i(k.uniforms.uTexture,b.read.attach(0)),e.uniform1f(k.uniforms.value,u.PRESSURE),T(b.write),b.swap(),z.bind(),e.uniform2f(z.uniforms.texelSize,c.texelSizeX,c.texelSizeY),e.uniform1i(z.uniforms.uDivergence,V.attach(0));for(let t=0;t<u.PRESSURE_ITERATIONS;t++)e.uniform1i(z.uniforms.uPressure,b.read.attach(1)),T(b.write),b.swap();X.bind(),e.uniform2f(X.uniforms.texelSize,c.texelSizeX,c.texelSizeY),e.uniform1i(X.uniforms.uPressure,b.read.attach(0)),e.uniform1i(X.uniforms.uVelocity,c.read.attach(1)),T(c.write),c.swap(),D.bind(),e.uniform2f(D.uniforms.texelSize,c.texelSizeX,c.texelSizeY),n.supportLinearFiltering||e.uniform2f(D.uniforms.dyeTexelSize,c.texelSizeX,c.texelSizeY);let i=c.read.attach(0);e.uniform1i(D.uniforms.uVelocity,i),e.uniform1i(D.uniforms.uSource,i),e.uniform1f(D.uniforms.dt,r),e.uniform1f(D.uniforms.dissipation,u.VELOCITY_DISSIPATION),T(c.write),c.swap(),n.supportLinearFiltering||e.uniform2f(D.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),e.uniform1i(D.uniforms.uVelocity,c.read.attach(0)),e.uniform1i(D.uniforms.uSource,E.read.attach(1)),e.uniform1f(D.uniforms.dissipation,u.DENSITY_DISSIPATION),T(E.write),E.swap()}function xe(r){u.BLOOM&&Re(E.read,W),u.SUNRAYS&&(Se(E.read,E.write,I),De(I,ee,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),pe(r,{r:u.BACK_COLOR.r/255,g:u.BACK_COLOR.g/255,b:u.BACK_COLOR.b/255}),Ee(r)}function pe(r,i){te.bind(),e.uniform4f(te.uniforms.color,i.r,i.g,i.b,1),T(r)}function Ee(r){let i=r==null?e.drawingBufferWidth:r.width,t=r==null?e.drawingBufferHeight:r.height;L.bind(),u.SHADING&&e.uniform2f(L.uniforms.texelSize,1/i,1/t),e.uniform1i(L.uniforms.uTexture,E.read.attach(0)),u.BLOOM&&(e.uniform1i(L.uniforms.uBloom,W.attach(1)),e.uniform1i(L.uniforms.uDithering,K.attach(2)),e.uniform2f(L.uniforms.ditherScale,i/K.width,t/K.height)),u.SUNRAYS&&e.uniform1i(L.uniforms.uSunrays,I.attach(3)),T(r)}function Re(r,i){if(O.length<2)return;let t=i;e.disable(e.BLEND),C.bind();let a=u.BLOOM_THRESHOLD*u.BLOOM_SOFT_KNEE+1e-4;e.uniform3f(C.uniforms.curve,u.BLOOM_THRESHOLD-a,a*2,.25/a),e.uniform1f(C.uniforms.threshold,u.BLOOM_THRESHOLD),e.uniform1i(C.uniforms.uTexture,r.attach(0)),T(t),P.bind();for(let s=0;s<O.length;s++){let f=O[s];e.uniform2f(P.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(P.uniforms.uTexture,t.attach(0)),T(f),t=f}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let s=O.length-2;s>=0;s--){let f=O[s];e.uniform2f(P.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(P.uniforms.uTexture,t.attach(0)),e.viewport(0,0,f.width,f.height),T(f),t=f}e.disable(e.BLEND),M.bind(),e.uniform2f(M.uniforms.texelSize,t.texelSizeX,t.texelSizeY),e.uniform1i(M.uniforms.uTexture,t.attach(0)),e.uniform1f(M.uniforms.intensity,u.BLOOM_INTENSITY),T(i)}function Se(r,i,t){e.disable(e.BLEND),ie.bind(),e.uniform1i(ie.uniforms.uTexture,r.attach(0)),T(i),q.bind(),e.uniform1f(q.uniforms.weight,u.SUNRAYS_WEIGHT),e.uniform1i(q.uniforms.uTexture,i.attach(0)),T(t)}function De(r,i,t){w.bind();for(let a=0;a<t;a++)e.uniform2f(w.uniforms.texelSize,r.texelSizeX,0),e.uniform1i(w.uniforms.uTexture,r.attach(0)),T(i),e.uniform2f(w.uniforms.texelSize,0,r.texelSizeY),e.uniform1i(w.uniforms.uTexture,i.attach(0)),T(r)}function ye(r){let i=o.width/o.height;return i>1?r*i:r}function ne(r,i,t,a,s){U.bind(),e.uniform1i(U.uniforms.uTarget,c.read.attach(0)),e.uniform1f(U.uniforms.aspectRatio,o.width/o.height),e.uniform2f(U.uniforms.point,r,i),e.uniform3f(U.uniforms.color,t,a,0),e.uniform1f(U.uniforms.radius,ye(u.SPLAT_RADIUS/100)),T(c.write),c.swap(),e.uniform1i(U.uniforms.uTarget,E.read.attach(0)),e.uniform3f(U.uniforms.color,s.r,s.g,s.b),T(E.write),E.swap()}function _e(r){for(let i=0;i<r;i++){let t=x();ne(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),{r:t.r*10,g:t.g*10,b:t.b*10})}}let N=new Map,Z=0,be=r=>{let i=o.width/o.height;return i<1?r*i:r},Ue=r=>{let i=o.width/o.height;return i>1?r/i:r};return de(),Q(),{config:u,resize(){Q()},splash(r=Math.floor(Math.random()*20)+5){_e(r)},clearDye(){E=null,c=null,Q()},pointerDown(r,i,t){N.set(r,{texcoordX:i/o.width,texcoordY:1-t/o.height,deltaX:0,deltaY:0,moved:!1,color:x()})},pointerMove(r,i,t){let a=N.get(r);if(!a)return;let s=a.texcoordX,f=a.texcoordY;a.texcoordX=i/o.width,a.texcoordY=1-t/o.height,a.deltaX=be(a.texcoordX-s),a.deltaY=Ue(a.texcoordY-f),a.moved=Math.abs(a.deltaX)>0||Math.abs(a.deltaY)>0},pointerUp(r){N.delete(r)},frame(r,i){if(Z+=r*u.COLOR_UPDATE_SPEED,Z>=1){Z%=1;for(let t of N.values())t.color=x()}for(let t of N.values())t.moved&&(t.moved=!1,ne(t.texcoordX,t.texcoordY,t.deltaX*u.SPLAT_FORCE,t.deltaY*u.SPLAT_FORCE,t.color));i&&r>0&&Te(r),xe(null)}}}function Oe(o,e,n){let x=Math.floor(o*6),u=o*6-x,v=n*(1-e),p=n*(1-u*e),R=n*(1-(1-u)*e),[m,l,d]=[[n,R,v],[p,n,v],[v,n,R],[v,p,n],[R,v,n],[n,v,p]][x%6];return{r:m,g:l,b:d}}var fe={rainbow:()=>Math.random(),"oil and water":()=>Math.random()<.5?.07+Math.random()*.05:.55+Math.random()*.08,lava:()=>Math.random()*.1,sea:()=>.42+Math.random()*.2},Ie=ae(ue("oil-and-water"),o=>{let e=o.canvas({context:null}),n="oil and water",x=()=>{let m=Oe(fe[n](),1,1);return{r:m.r*.15,g:m.g*.15,b:m.b*.15}},u=se(e.canvas);if(!u)return o.add(o.element("p",{className:"toy-message",textContent:"This toy needs WebGL with half-float textures, which this browser does not offer."})).setAttribute?.("role","status"),o.onFrame(()=>{}),{reset(){}};let v=ce(e.canvas,u,x);function p(){v.clearDye(),v.splash()}v.splash(),o.onResize(()=>v.resize()),o.controls([{label:"Colours",options:Object.keys(fe).map(m=>[m,m[0].toUpperCase()+m.slice(1)]),value:n,onChange(m){n=m}},{label:"Splash",onClick(){v.splash(),o.redraw()}}]);let R=m=>m*e.ratio;return o.drag(e.canvas,{down({x:m,y:l,id:d}){v.pointerDown(d,R(m),R(l))},move({x:m,y:l,id:d},g){g&&(v.pointerMove(d,R(m),R(l)),o.redraw())},up({id:m}){v.pointerUp(m)}}),o.onFrame(m=>v.frame(m,o.running)),{reset:p,destroy(){u.gl.getExtension("WEBGL_lose_context")?.loseContext()}}});export{Ie as a};
