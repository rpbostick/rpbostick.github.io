import{A as Te,b as Xe,c as ye,d as Je,e as Ke,f as et,g as Me,h as xe,i as R,j as p,k as q,l as g,m as W,n as ze,o as S,p as L,q as I,r as Z,s as tt,t as rt,v as nt,w as O,x as it,y as st}from"./chunk-PEADZF56.js";import{a as He,b as _e,d as fe,e as ve,f as Ye,g as Ge,h as we,i as P,j as U,l as k,m as $,n as $e,o as Ze,p as ne,q as E,r as z,s as T}from"./chunk-72M2FWL4.js";var fr=class extends E{traverseAlg(e){let t=0;for(let r of e.childAlgNodes())t+=this.traverseAlgNode(r);return t}traverseGrouping(e){return this.traverseAlg(e.alg)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 0}traverseLineComment(e){return 0}},at=z(fr);function vr(e){return e.endsWith("v")||["x","y","z"].includes(e)?"Rotation":e.startsWith("2")||["M","E","S"].includes(e)?"Inner":"Outer"}var X;function wr(){if(X)return X;X={};let e=[...Object.keys(ye.moves),...Object.keys(ye.derivedMoves)];for(let t of e)X[t]=vr(t);return X}var ot={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function yr(e,t){let r=ot[e];if(!r)throw new Error(`Invalid metric for 3x3x3: ${e}`);let n=wr(),i=t.quantum.toString();if(!(i in n))throw new Error(`Invalid move for 3x3x3 ${e}: ${i}`);let s=n[i],{constantFactor:a,amountFactor:l,zeroAmount:c}=r[s];return t.amount===0?c:a+l*Math.abs(t.amount)}var J=class extends E{constructor(e){super(),this.metric=e}metric;traverseAlg(e){let t=0;for(let r of e.childAlgNodes())t+=this.traverseAlgNode(r);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return this.metric(e)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 0}traverseNewline(e){return 0}traverseLineComment(e){return 0}},Mr=class extends E{traverseAlg(e){let t=0;for(let r of e.childAlgNodes())t+=this.traverseAlgNode(r);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 1}traverseLineComment(e){return 1}};function lt(e){return"A"<=e&&e<="Z"}function xr(e){let t=e.family;return lt(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function zr(e){return 1}function ct(e){let t=e.family;return lt(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function Tr(e){return Math.abs(e.amount)*ct(e)}var Gi=z(J,[xr]),Sr=z(J,[zr]),Ar=z(J,[Tr]),br=z(J,[ct]),ut=z(Mr,[]);function dt(e,t,r){if(e.id==="3x3x3"){if(t in ot)return z(J,[n=>yr(t,n)])(r)}else switch(t){case"ETM":return Sr(r);case"RBTM":{if(e.pg)return br(r);break}case"RBQTM":{if(e.pg)return Ar(r);break}}throw new Error("Unsupported puzzle or metric.")}function B(e){switch(Math.abs(e)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var Nt=class extends E{constructor(e=B){super(),this.durationForAmount=e}durationForAmount;traverseAlg(e){let t=0;for(let r of e.childAlgNodes())t+=this.traverseAlgNode(r);return t}traverseGrouping(e){return e.amount*this.traverseAlg(e.alg)}traverseMove(e){return this.durationForAmount(e.amount)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return this.durationForAmount(1)}traverseNewline(e){return this.durationForAmount(1)}traverseLineComment(e){return this.durationForAmount(0)}},kr=class{constructor(e,t){this.kpuzzle=e,this.moves=new T(t.experimentalExpand())}kpuzzle;moves;durationFn=new Nt(B);getAnimLeaf(e){return Array.from(this.moves.childAlgNodes())[e]}indexToMoveStartTimestamp(e){let t=new T(Array.from(this.moves.childAlgNodes()).slice(0,e));return this.durationFn.traverseAlg(t)}timestampToIndex(e){let t=0,r;for(r=0;r<this.numAnimatedLeaves();r++)if(t+=this.durationFn.traverseMove(this.getAnimLeaf(r)),t>=e)return r;return r}patternAtIndex(e){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(e))}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let r of Array.from(this.moves.childAlgNodes()).slice(0,e))t=t.applyMove(r);return t}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return at(this.moves)}moveDuration(e){return this.durationFn.traverseMove(this.getAnimLeaf(e))}},V=class{constructor(e,t,r,n,i=[]){this.moveCount=e,this.duration=t,this.forward=r,this.backward=n,this.children=i}moveCount;duration;forward;backward;children},Lr=class extends E{constructor(e){super(),this.kpuzzle=e,this.identity=e.identityTransformation(),this.dummyLeaf=new V(0,0,this.identity,this.identity,[])}kpuzzle;identity;dummyLeaf;durationFn=new Nt(B);cache={};traverseAlg(e){let t=0,r=0,n=this.identity,i=[];for(let s of e.childAlgNodes()){let a=this.traverseAlgNode(s);t+=a.moveCount,r+=a.duration,n===this.identity?n=a.forward:n=n.applyTransformation(a.forward),i.push(a)}return new V(t,r,n,n.invert(),i)}traverseGrouping(e){let t=this.traverseAlg(e.alg);return this.mult(t,e.amount,[t])}traverseMove(e){let t=e.toString(),r=this.cache[t];if(r)return r;let n=this.kpuzzle.moveToTransformation(e);return r=new V(1,this.durationFn.traverseAlgNode(e),n,n.invert()),this.cache[t]=r,r}traverseCommutator(e){let t=this.traverseAlg(e.A),r=this.traverseAlg(e.B),n=t.forward.applyTransformation(r.forward),i=t.backward.applyTransformation(r.backward),s=n.applyTransformation(i),a=new V(2*(t.moveCount+r.moveCount),2*(t.duration+r.duration),s,s.invert(),[t,r]);return this.mult(a,1,[a,t,r])}traverseConjugate(e){let t=this.traverseAlg(e.A),r=this.traverseAlg(e.B),i=t.forward.applyTransformation(r.forward).applyTransformation(t.backward),s=new V(2*t.moveCount+r.moveCount,2*t.duration+r.duration,i,i.invert(),[t,r]);return this.mult(s,1,[s,t,r])}traversePause(e){return e.experimentalNISSGrouping?this.dummyLeaf:new V(1,this.durationFn.traverseAlgNode(e),this.identity,this.identity)}traverseNewline(e){return this.dummyLeaf}traverseLineComment(e){return this.dummyLeaf}mult(e,t,r){let n=Math.abs(t),i=e.forward.selfMultiply(t);return new V(e.moveCount*n,e.duration*n,i,i.invert(),r)}},w=class{constructor(e,t){this.apd=e,this.back=t}apd;back},Ir=class extends ne{constructor(e,t,r){super(),this.kpuzzle=e,this.algOrAlgNode=t,this.apd=r,this.i=-1,this.dur=-1,this.goalIndex=-1,this.goalDuration=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new w(this.apd,!1)}kpuzzle;algOrAlgNode;apd;move;moveDuration;back;st;root;i;dur;goalIndex;goalDuration;moveByIndex(e){return this.i>=0&&this.i===e?this.move!==void 0:this.dosearch(e,1/0)}moveByDuration(e){return this.dur>=0&&this.dur<e&&this.dur+this.moveDuration>=e?this.move!==void 0:this.dosearch(1/0,e)}dosearch(e,t){return this.goalIndex=e,this.goalDuration=t,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(T)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(e,t){if(!this.firstcheck(t))return!1;let r=t.back?e.experimentalNumChildAlgNodes()-1:0;for(let n of _e(e.childAlgNodes(),t.back?-1:1)){if(this.traverseAlgNode(n,new w(t.apd.children[r],t.back)))return!0;r+=t.back?-1:1}return!1}traverseGrouping(e,t){if(!this.firstcheck(t))return!1;let r=this.domult(t,e.amount);return this.traverseAlg(e.alg,new w(t.apd.children[0],r))}traverseMove(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseCommutator(e,t){if(!this.firstcheck(t))return!1;let r=this.domult(t,1);return r?this.traverseAlg(e.B,new w(t.apd.children[2],!r))||this.traverseAlg(e.A,new w(t.apd.children[1],!r))||this.traverseAlg(e.B,new w(t.apd.children[2],r))||this.traverseAlg(e.A,new w(t.apd.children[1],r)):this.traverseAlg(e.A,new w(t.apd.children[1],r))||this.traverseAlg(e.B,new w(t.apd.children[2],r))||this.traverseAlg(e.A,new w(t.apd.children[1],!r))||this.traverseAlg(e.B,new w(t.apd.children[2],!r))}traverseConjugate(e,t){if(!this.firstcheck(t))return!1;let r=this.domult(t,1);return r?this.traverseAlg(e.A,new w(t.apd.children[1],!r))||this.traverseAlg(e.B,new w(t.apd.children[2],r))||this.traverseAlg(e.A,new w(t.apd.children[1],r)):this.traverseAlg(e.A,new w(t.apd.children[1],r))||this.traverseAlg(e.B,new w(t.apd.children[2],r))||this.traverseAlg(e.A,new w(t.apd.children[1],!r))}traversePause(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseNewline(e,t){return!1}traverseLineComment(e,t){return!1}firstcheck(e){return e.apd.moveCount+this.i<=this.goalIndex&&e.apd.duration+this.dur<this.goalDuration?this.keepgoing(e):!0}domult(e,t){let r=e.back;if(t===0)return r;t<0&&(r=!r,t=-t);let n=e.apd.children[0],i=Math.min(Math.floor((this.goalIndex-this.i)/n.moveCount),Math.ceil((this.goalDuration-this.dur)/n.duration-1));return i>0&&this.keepgoing(new w(n,r),i),r}keepgoing(e,t=1){return this.i+=t*e.apd.moveCount,this.dur+=t*e.apd.duration,t!==1?e.back?this.st=this.st.applyTransformation(e.apd.backward.selfMultiply(t)):this.st=this.st.applyTransformation(e.apd.forward.selfMultiply(t)):e.back?this.st=this.st.applyTransformation(e.apd.backward):this.st=this.st.applyTransformation(e.apd.forward),!1}},Dr=16;function Cr(e,t){let r=new ve,n=new ve;for(let i of e.childAlgNodes())n.push(i),n.experimentalNumAlgNodes()>=t&&(r.push(new $(n.toAlg())),n.reset());return r.push(new $(n.toAlg())),r.toAlg()}var Er=class extends E{traverseAlg(e){let t=e.experimentalNumChildAlgNodes();return t<Dr?e:Cr(e,Math.ceil(Math.sqrt(t)))}traverseGrouping(e){return new $(this.traverseAlg(e.alg),e.amount)}traverseMove(e){return e}traverseCommutator(e){return new fe(this.traverseAlg(e.A),this.traverseAlg(e.B))}traverseConjugate(e){return new fe(this.traverseAlg(e.A),this.traverseAlg(e.B))}traversePause(e){return e}traverseNewline(e){return e}traverseLineComment(e){return e}},Nr=z(Er),ht=class{constructor(e,t){this.kpuzzle=e;let r=new Lr(this.kpuzzle),n=Nr(t);this.decoration=r.traverseAlg(n),this.walker=new Ir(this.kpuzzle,n,this.decoration)}kpuzzle;decoration;walker;getAnimLeaf(e){if(this.walker.moveByIndex(e)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");let t=this.walker.move;return this.walker.back?t.invert():t}return null}indexToMoveStartTimestamp(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw new Error(`Out of algorithm: index ${e}`)}indexToMovesInProgress(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw new Error(`Out of algorithm: index ${e}`)}patternAtIndex(e,t){return this.walker.moveByIndex(e),(t??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(e){return this.walker.moveByIndex(e),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(e){return this.walker.moveByDuration(e),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(e){return this.walker.moveByIndex(e),this.walker.moveDuration}};var Pr=class extends p{getDefaultValue(){return"auto"}},ie="http://www.w3.org/2000/svg",mt="data-copy-id",pt=0;function Rr(){return pt+=1,`svg${pt.toString()}`}var Or={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},Fr=class{constructor(e,t,r,n=!1){if(this.kpuzzle=e,this.showUnknownOrientations=n,!t)throw new Error(`No SVG definition for puzzle type: ${e.name()}`);this.svgID=Rr(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=t;let i=this.wrapperElement.querySelector("svg");if(!i)throw new Error("Could not get SVG element");if(this.svgElement=i,ie!==i.namespaceURI)throw new Error("Unexpected XML namespace");i.style.maxWidth="100%",i.style.maxHeight="100%",this.gradientDefs=document.createElementNS(ie,"defs"),i.insertBefore(this.gradientDefs,i.firstChild);for(let s of e.definition.orbits)for(let a=0;a<s.numPieces;a++)for(let l=0;l<s.numOrientations;l++){let c=this.elementID(s.orbitName,a,l),o=this.elementByID(c),m=o?.style.fill;r?(()=>{let d=r.orbits;if(!d)return;let f=d[s.orbitName];if(!f)return;let v=f.pieces[a];if(!v)return;let y=v.facelets[l];if(!y)return;let D=typeof y=="string"?y:y?.mask,A=Or[D];typeof A=="string"?m=A:A&&(m=A[m])})():m=o?.style.fill,this.originalColors[c]=m,this.gradients[c]=this.newGradient(c,m),this.gradientDefs.appendChild(this.gradients[c]),o?.setAttribute("style",`fill: url(#grad-${this.svgID}-${c})`)}for(let s of Array.from(i.querySelectorAll(`[${mt}]`))){let a=s.getAttribute(mt);s.setAttribute("style",`fill: url(#grad-${this.svgID}-${a})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}kpuzzle;showUnknownOrientations;wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;drawPattern(e,t,r){this.draw(e,t,r)}draw(e,t,r){let n=t?.experimentalToTransformation();if(!e)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(let i of e.kpuzzle.definition.orbits){let s=e.patternData[i.orbitName],a=n?n.transformationData[i.orbitName]:null;for(let l=0;l<i.numPieces;l++)for(let c=0;c<i.numOrientations;c++){let o=this.elementID(i.orbitName,l,c),m=this.elementID(i.orbitName,s.pieces[l],(i.numOrientations-s.orientation[l]+c)%i.numOrientations),d=!1;if(a){let f=this.elementID(i.orbitName,a.permutation[l],(i.numOrientations-a.orientationDelta[l]+c)%i.numOrientations);m===f&&(d=!0),r=r||0;let v=100*(1-r*r*(2-r*r));this.gradients[o].children[0].setAttribute("stop-color",this.originalColors[m]),this.gradients[o].children[0].setAttribute("offset",`${Math.max(v-5,0)}%`),this.gradients[o].children[1].setAttribute("offset",`${Math.max(v-5,0)}%`),this.gradients[o].children[2].setAttribute("offset",`${v}%`),this.gradients[o].children[3].setAttribute("offset",`${v}%`),this.gradients[o].children[3].setAttribute("stop-color",this.originalColors[f])}else d=!0;d&&(this.showUnknownOrientations&&s.orientationMod?.[l]===1?(this.gradients[o].children[0].setAttribute("stop-color","#000"),this.gradients[o].children[0].setAttribute("offset","5%"),this.gradients[o].children[1].setAttribute("offset","5%"),this.gradients[o].children[2].setAttribute("offset","20%"),this.gradients[o].children[3].setAttribute("offset","20%"),this.gradients[o].children[3].setAttribute("stop-color",this.originalColors[m])):(this.gradients[o].children[0].setAttribute("stop-color",this.originalColors[m]),this.gradients[o].children[0].setAttribute("offset","100%"),this.gradients[o].children[1].setAttribute("offset","100%"),this.gradients[o].children[2].setAttribute("offset","100%"),this.gradients[o].children[3].setAttribute("offset","100%")))}}}newGradient(e,t){let r=document.createElementNS(ie,"radialGradient");r.setAttribute("id",`grad-${this.svgID}-${e}`),r.setAttribute("r","70.7107%");let n=[{offset:0,color:t},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:t}];for(let i of n){let s=document.createElementNS(ie,"stop");s.setAttribute("offset",`${i.offset}%`),s.setAttribute("stop-color",i.color),s.setAttribute("stop-opacity","1"),r.appendChild(s)}return r}elementID(e,t,r){return`${e}-l${t}-o${r}`}elementByID(e){return this.wrapperElement.querySelector(`#${e}`)}},ee=class{constructor(e,t,r){this.elem=e,this.prefix=t,this.validSuffixes=r}elem;prefix;validSuffixes;#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(e){if(!this.validSuffixes.includes(e))throw new Error(`Invalid suffix: ${e}`);let t=`${this.prefix}${e}`,r=this.#e!==t;return r&&(this.clearValue(),this.elem.contentWrapper.classList.add(t),this.#e=t),r}};function Le(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function gt(e,t,r){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1;return!0}function Ie(e,t,r){return $e(e,r-t,t)}var jr=class{constructor(e){this.model=e,e.tempoScale.addFreshListener(t=>{this.tempoScale=t})}model;catchingUp=!1;pendingFrame=!1;tempoScale=1;scheduler=new Z(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(e){this.scheduler.requestAnimFrame();let t=this.tempoScale*(e-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=e,this.model.catchUpMove.set((async()=>{let r=await this.model.catchUpMove.get();if(r.move===null)return r;let n=r.amount+t;return n>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:r.move,amount:n})})())}},Vr=class{constructor(e,t){this.delegate=t,this.model=e,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new jr(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}delegate;playing=!1;direction=1;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new Z(this.animFrame.bind(this));async onPlayingProp(e){e.playing!==this.playing&&(e.playing?this.play(e):this.pause())}async onCatchUpMoveProp(e){let t=e.move!==null;t!==this.catchUpHelper.catchingUp&&(t?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(e){this.model.timestampRequest.set("start"),this.pause(),e?.flash&&this.delegate.flash()}jumpToEnd(e){this.model.timestampRequest.set("end"),this.pause(),e?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}play(e){(async()=>{let t=e?.direction??1,r=await this.model.coarseTimelineInfo.get();(e?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(t===1&&r.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),t===-1&&r.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:t,untilBoundary:e?.untilBoundary??"entire-timeline",loop:e?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()})()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}#r=new xe;async animFrame(e){this.playing&&this.scheduler.requestAnimFrame();let t=this.lastDatestamp,r=await this.#r.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[n,i,s,a,l]=r;if(!n.playing){this.playing=!1;return}let c=l.earliestEnd;(l.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(c=s.end);let o=l.latestStart;(l.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(o=s.start);let m=(e-t)*this.direction*a;m=Math.max(m,1),m*=n.direction;let d=i+m,f=null;d>=c?n.loop?d=Ie(d,s.start,s.end):(d===s.end?f="end":d=c,this.playing=!1,this.model.playingInfo.set({playing:!1})):d<=o&&(n.loop?d=Ie(d,s.start,s.end):(d===s.start?f="start":d=o,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=e,this.lastTimestampPromise=Promise.resolve(d),this.model.timestampRequest.set(f??d)}},Br=class{constructor(e,t){this.model=e,this.animationController=new Vr(e,t)}model;animationController;jumpToStart(e){this.animationController.jumpToStart(e)}jumpToEnd(e){this.animationController.jumpToEnd(e)}togglePlay(e){typeof e>"u"&&this.animationController.playPause(),e?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let e=document.createElement("a");e.href=await this.model.twizzleLink(),e.target="_blank",e.click()}},Ur={"bottom-row":!0,none:!0},qr=class extends p{getDefaultValue(){return"auto"}},Ne=new L;Ne.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Pt=new L;Pt.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hint-facelets-none .hint-facelet {
  display: none;
}
`);var Rt=class extends I{constructor(e,t,r,n,i){super(),this.model=e,this.kpuzzle=t,this.svgSource=r,this.options=n,this.puzzleLoader=i,this.addCSS(Pt),this.resetSVG(),this.#r.addListener(this.model.puzzleID,s=>{i?.id!==s&&this.disconnect()}),this.#r.addListener(this.model.twistySceneModel.hintFacelet,s=>{this.setHintFacelet(s)}),this.#r.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}model;kpuzzle;svgSource;options;puzzleLoader;svgWrapper;scheduler=new Z(this.render.bind(this));#e=null;#r=new W;disconnect(){this.#r.disconnect()}onPositionChange(e){try{if(e.movesInProgress.length>0){let t=e.movesInProgress[0].move,r=t;e.movesInProgress[0].direction===-1&&(r=t.invert());let n=e.pattern.applyMove(r);this.svgWrapper?.draw(e.pattern,n,e.movesInProgress[0].fraction)}else this.svgWrapper?.draw(e.pattern),this.#e=e}catch(t){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",this.puzzleLoader?.id,t),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(e){this.resetSVG(e)}resetSVG(e){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new Fr(this.kpuzzle,this.svgSource,e),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}hintFaceletsClassListManager=new ee(this,"hint-facelets-",Object.keys(tt));setHintFacelet(e){this.hintFaceletsClassListManager.setValue(e==="auto"?"floating":e)}render(){}};S.define("twisty-2d-puzzle",Rt);var Wr=class{constructor(e,t,r,n){this.model=e,this.schedulable=t,this.puzzleLoader=r,this.effectiveVisualization=n,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async i=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(i)})}model;schedulable;puzzleLoader;effectiveVisualization;#e=new W;disconnect(){this.#e.disconnect()}scheduleRender(){}#r=null;async twisty2DPuzzle(){return this.#r??=(async()=>{let e=this.effectiveVisualization==="experimental-2D-LL-face"?this.puzzleLoader.llFaceSVG():this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new Rt(this.model,await this.puzzleLoader.kpuzzle(),await e,{},this.puzzleLoader)})()}},Ot=class extends I{constructor(e,t){super(),this.model=e,this.effectiveVisualization=t}model;effectiveVisualization;#e=new W;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(Ne),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#r;async scene(){return this.#r??=(async()=>new(await O).ThreeScene)()}scheduleRender(){this.#t?.scheduleRender()}#t;currentTwisty2DPuzzleWrapper(){return this.#t}async setCurrentTwisty2DPuzzleWrapper(e){let t=this.#t;this.#t=e,t?.disconnect();let r=e.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await r)}async onPuzzleLoader(e){this.#t?.disconnect();let t=new Wr(this.model.twistyPlayerModel,this,e,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(t)}};S.define("twisty-2d-scene-wrapper",Ot);var Ft=class{#e;reject;promise;constructor(){this.promise=new Promise((e,t)=>{this.#e=e,this.reject=t})}handleNewValue(e){this.#e(e)}},jt=class extends EventTarget{constructor(e,t,r,n){super(),this.model=e,this.schedulable=t,this.puzzleLoader=r,this.visualizationStrategy=n,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,i=>{this.puzzleLoader.id!==i.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async i=>{try{(await this.twisty3DPuzzle()).onPositionChange(i),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async i=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:i==="auto"?"floating":i}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async i=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:i!=="none"}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async i=>{(await this.twisty3DPuzzle()).setStickeringMask(i),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async i=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:i}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.hintFaceletsElevation,async i=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFaceletsElevation:i}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async i=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(i[0].specialBehaviour==="picture",i[1],i[2]),this.scheduleRender())})}model;schedulable;puzzleLoader;visualizationStrategy;#e=new W;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}#r=null;async twisty3DPuzzle(){return this.#r??=(async()=>{if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){let[e,t,r,n,i,s]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get(),this.model.twistySceneModel.faceletScale.get(),this.model.twistySceneModel.hintFaceletsElevation.get()]);return(await O).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:e,hintSprite:t,experimentalStickeringMask:r,initialHintFaceletsAnimation:n,faceletScale:i,hintFaceletsElevation:s})}else{let[e,t,r,n]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),i=(await O).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,e==="auto"?"floating":e,n,this.puzzleLoader.id==="kilominx");return i.then(s=>s.experimentalUpdateTexture(!0,t??void 0,r??void 0)),i}})()}async raycastMove(e,t){let r=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in r)){console.info("not PG3D! skipping raycast");return}let n=r.experimentalGetControlTargets(),[i,s]=await Promise.all([e,this.model.twistySceneModel.movePressCancelOptions.get()]),a=i.intersectObjects(n);if(a.length>0){let l=r.getClosestMoveToAxis(a[0].point,t);l?this.model.experimentalAddMove(l.move,{cancel:s}):console.info("Skipping move!")}}},De=class extends I{constructor(e){super(),this.model=e}model;#e=new ee(this,"back-view-",["auto","none","side-by-side","top-right"]);#r=new W;disconnect(){this.#r.disconnect()}async connectedCallback(){this.addCSS(Ne);let e=new Te(this.model,this);this.addVantage(e),this.model&&(this.#r.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#r.addListener(this.model.backView,this.setBackView.bind(this))),this.scheduleRender()}#t=null;setBackView(e){let t=["side-by-side","top-right"].includes(e),r=this.#t!==null;this.#e.setValue(e),t?r||(this.#t=new Te(this.model,this,{backView:!0}),this.addVantage(this.#t),this.scheduleRender()):this.#t&&(this.removeVantage(this.#t),this.#t=null)}async onPress(e){let t=this.#n;if(!t){console.info("no wrapper; skipping scene wrapper press!");return}let r=(async()=>{let[n,{ThreeRaycaster:i,ThreeVector2:s}]=await Promise.all([e.detail.cameraPromise,(async()=>{let{ThreeRaycaster:c,ThreeVector2:o}=await O;return{ThreeRaycaster:c,ThreeVector2:o}})()]),a=new i,l=new s(e.detail.pressInfo.normalizedX,e.detail.pressInfo.normalizedY);return a.setFromCamera(l,n),a})();await t.raycastMove(r,{invert:!e.detail.pressInfo.rightClick,depth:e.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":e.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}#i;async scene(){return this.#i??=(async()=>new(await O).ThreeScene)()}#s=new Set;addVantage(e){e.addEventListener("press",this.onPress.bind(this)),this.#s.add(e),this.contentWrapper.appendChild(e)}removeVantage(e){this.#s.delete(e),e.remove(),e.disconnect(),this.#n?.disconnect()}experimentalVantages(){return this.#s.values()}scheduleRender(){for(let e of this.#s)e.scheduleRender()}#n=null;async setCurrentTwisty3DPuzzleWrapper(e,t){let r=this.#n;try{this.#n=t,r?.disconnect(),e.add(await t.twisty3DPuzzle())}finally{r&&e.remove(await r.twisty3DPuzzle())}this.#a.handleNewValue(t)}#a=new Ft;async experimentalTwisty3DPuzzleWrapper(){return this.#n||this.#a.promise}#o=new xe;async onPuzzle(e){if(e[1]==="2D")return;this.#n?.disconnect();let[t,r]=await this.#o.queue(Promise.all([this.scene(),new jt(this.model,this,e[0],e[1])]));this.setCurrentTwisty3DPuzzleWrapper(t,r)}};S.define("twisty-3d-scene-wrapper",De);var F=typeof document>"u"?null:document,Qr=F?.fullscreenEnabled||!!F?.webkitFullscreenEnabled;function Hr(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function ft(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function _r(e){return e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen()}var Yr=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],Gr=class extends g{derive(e){return{fullscreen:{enabled:Qr,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!e.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!e.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(e.coarseTimelineInfo.atStart&&e.coarseTimelineInfo.atEnd),icon:e.coarseTimelineInfo.playing?"pause":"play",title:e.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!e.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!e.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:e.viewerLink==="none"}}}},Vt=new L;Vt.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var Bt=new L;Bt.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var vt={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},Ut=class extends I{constructor(e,t,r){super(),this.model=e,this.controller=t,this.defaultFullscreenElement=r}model;controller;defaultFullscreenElement;buttons=null;connectedCallback(){this.addCSS(Vt);let e={};for(let t in vt){let r=new qt;e[t]=r,r.htmlButton.addEventListener("click",()=>this.#e(t)),this.addElement(r)}this.buttons=e,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(e){switch(e){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{this.controller?.jumpToStart({flash:!0});break}case"play-step-backwards":{this.controller?.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{this.controller?.togglePlay();break}case"play-step":{this.controller?.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{this.controller?.jumpToEnd({flash:!0});break}case"twizzle-link":{this.controller?.visitTwizzleLink();break}default:throw new Error("Missing command")}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(ft()===this.defaultFullscreenElement)Hr();else{this.buttons?.fullscreen.setIcon("exit-fullscreen"),_r(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let e=()=>{ft()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon("enter-fullscreen"),globalThis.removeEventListener("fullscreenchange",e))};globalThis.addEventListener("fullscreenchange",e)}}async update(e){for(let t in vt){let r=this.buttons[t],n=e[t];r.htmlButton.disabled=!n.enabled,r.htmlButton.title=n.title,r.setIcon(n.icon),r.hidden=!!n.hidden}}updateColorScheme(e){for(let t of Object.values(this.buttons??{}))t.updateColorScheme(e)}};S.define("twisty-buttons",Ut);var qt=class extends I{htmlButton=document.createElement("button");updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}connectedCallback(){this.addCSS(Bt),this.addElement(this.htmlButton)}#e=new ee(this,"svg-",Yr);setIcon(e){this.#e.setValue(e)}};S.define("twisty-button",qt);var Wt=new L;Wt.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);var $r=!1,ue=!1;F?.addEventListener("mousedown",e=>{e.which&&(ue=!0)},!0);F?.addEventListener("mouseup",e=>{e.which&&(ue=!1)},!0);var Ce=0,le=0;F?.addEventListener("mousedown",()=>{le++},!1);F?.addEventListener("mousemove",Qt,!1);F?.addEventListener("mouseenter",Qt,!1);function Qt(e){Ce=e.pageY}var wt=0,yt=0,Se=!1,Ae=0,Ht=class extends I{constructor(e,t){super(),this.model=e,this.controller=t}model;controller;async onDetailedTimelineInfo(e){let t=await this.inputElem();t.min=e.timeRange.start.toString(),t.max=e.timeRange.end.toString(),t.disabled=t.min===t.max,t.value=e.timestamp.toString()}async connectedCallback(){this.addCSS(Wt),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}#e=null;async inputElem(){return this.#e??=(async()=>{let e=document.createElement("input");return e.type="range",e.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),e.addEventListener("input",this.onInput.bind(this)),e.addEventListener("keydown",this.onKeypress.bind(this)),e})()}async onInput(e){if(Se)return;let t=await this.inputElem();await this.slowDown(e,t);let r=parseInt(t.value,10);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(r)}onKeypress(e){switch(e.key){case"ArrowLeft":case"ArrowRight":{this.controller?.animationController.play({direction:e.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),e.preventDefault();break}case" ":{this.controller?.togglePlay(),e.preventDefault();break}}}async slowDown(e,t){if($r&&ue){let r=t.getBoundingClientRect(),n=r.top+r.height/2;console.log(n,e,Ce,ue);let i=Math.abs(n-Ce),s=1;i>64&&(s=Math.max(2**(-(i-64)/64),1/32));let a=parseInt(t.value,10);if(console.log("cl",Ae,le,a),Ae===le){let l=(a-yt)*s;console.log("delta",l,i),Se=!0;let c=a;c=wt+l*s+(a-wt)*Math.min(1,(1/2)**(i*i/64)),t.value=c.toString(),console.log(s),Se=!1,this.contentWrapper.style.opacity=s.toString()}else Ae=le;yt=a}}};S.define("twisty-scrubber",Ht);var Zr=null;async function Mt(e,t){let[{ThreePerspectiveCamera:r,ThreeScene:n},i,s,a,l,c,o]=await Promise.all([(async()=>{let{ThreePerspectiveCamera:M,ThreeScene:pe}=await O;return{ThreePerspectiveCamera:M,ThreeScene:pe}})(),await e.puzzleLoader.get(),await e.visualizationStrategy.get(),await e.twistySceneModel.stickeringRequest.get(),await e.twistySceneModel.stickeringMaskRequest.get(),await e.legacyPosition.get(),await e.twistySceneModel.orbitCoordinates.get()]),m=t?.width??2048,d=t?.height??2048,f=m/d,v=Zr??=await(async()=>new r(20,f,.1,20))(),y=new n,D=new jt(e,{scheduleRender:()=>{}},i,s);y.add(await D.twisty3DPuzzle()),await st(v,o);let C=(await it(m,d,y,v)).toDataURL(),N=await _t(e);return{dataURL:C,download:async M=>{Yt(C,M??N)}}}async function _t(e){let[t,r]=await Promise.all([e.puzzleID.get(),e.alg.get()]);return`[${t}]${r.alg.experimentalNumChildAlgNodes()===0?"":` ${r.alg.toString()}`}`}function Yt(e,t,r="png"){let n=document.createElement("a");n.href=e,n.download=`${t}.${r}`,n.click()}var Gt=new L;Gt.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var xt=class extends p{getDefaultValue(){return null}},Ee=class extends R{getDefaultValue(){return null}derive(e){return typeof e=="string"?new URL(e,location.href):e}},K=class $t{warnings;errors;constructor(t){this.warnings=Object.freeze(t?.warnings??[]),this.errors=Object.freeze(t?.errors??[]),Object.freeze(this)}add(t){return new $t({warnings:this.warnings.concat(t?.warnings??[]),errors:this.errors.concat(t?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info("\u{1F60E} No issues!")}};function Zt(e){try{let t=T.fromString(e),r=[];return t.toString()!==e&&r.push("Alg is non-canonical!"),{alg:t,issues:new K({warnings:r})}}catch(t){return{alg:new T,issues:new K({errors:[`Malformed alg: ${t.toString()}`]})}}}function Xr(e,t){return e.alg.isIdentical(t.alg)&&Le(e.issues.warnings,t.issues.warnings)&&Le(e.issues.errors,t.issues.errors)}var zt=class extends R{getDefaultValue(){return{alg:new T,issues:new K}}canReuseValue(e,t){return Xr(e,t)}async derive(e){return typeof e=="string"?Zt(e):{alg:e,issues:new K}}},Jr=class extends g{derive(e){return e.kpuzzle.algToTransformation(e.setupAlg.alg)}},Kr=class extends g{derive(e){if(e.setupTransformation)return e.setupTransformation;switch(e.setupAnchor){case"start":return e.setupAlgTransformation;case"end":{let r=e.indexer.transformationAtIndex(e.indexer.numAnimatedLeaves()).invert();return e.setupAlgTransformation.applyTransformation(r)}default:throw new Error("Unimplemented!")}}},en=class extends p{getDefaultValue(){return null}},tn=class extends p{getDefaultValue(){return{move:null,amount:0}}canReuseValue(e,t){return e.move===t.move&&e.amount===t.amount}},rn=class extends g{derive(e){return{patternIndex:e.currentMoveInfo.patternIndex,movesFinishing:e.currentMoveInfo.movesFinishing.map(t=>t.move),movesFinished:e.currentMoveInfo.movesFinished.map(t=>t.move)}}canReuseValue(e,t){return e.patternIndex===t.patternIndex&&gt(e.movesFinishing,t.movesFinishing,(r,n)=>r.isIdentical(n))&&gt(e.movesFinished,t.movesFinished,(r,n)=>r.isIdentical(n))}},nn=class extends g{derive(e){function t(r){return e.detailedTimelineInfo.atEnd&&e.catchUpMove.move!==null&&r.currentMoves.push({move:e.catchUpMove.move,direction:-1,fraction:1-e.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),r}if(e.indexer.currentMoveInfo)return t(e.indexer.currentMoveInfo(e.detailedTimelineInfo.timestamp));{let r=e.indexer.timestampToIndex(e.detailedTimelineInfo.timestamp),n={patternIndex:r,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(e.indexer.numAnimatedLeaves()>0){let i=e.indexer.getAnimLeaf(r)?.as(k);if(!i)return t(n);let s=e.indexer.indexToMoveStartTimestamp(r),a=e.indexer.moveDuration(r),l=a?(e.detailedTimelineInfo.timestamp-s)/a:0,c=s+a,o={move:i,direction:1,fraction:l,startTimestamp:s,endTimestamp:c};l===0?n.movesStarting.push(o):l===1?n.movesFinishing.push(o):(n.currentMoves.push(o),n.latestStart=Math.max(n.latestStart,s),n.earliestEnd=Math.min(n.earliestEnd,c))}return t(n)}}},sn=class extends g{derive(e){let t=e.indexer.transformationAtIndex(e.currentLeavesSimplified.patternIndex);t=e.anchoredStart.applyTransformation(t);for(let r of e.currentLeavesSimplified.movesFinishing)t=t.applyMove(r);for(let r of e.currentLeavesSimplified.movesFinished)t=t.applyMove(r);return t.toKPattern()}},Tt={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function an(e,t){return Tt[e.family[0].toLowerCase()]===Tt[t.family[0].toLowerCase()]}var on=class extends E{traverseAlg(e){let t=[];for(let r of e.childAlgNodes())t.push(this.traverseAlgNode(r));return Array.prototype.concat(...t)}traverseGroupingOnce(e){if(e.experimentalIsEmpty())return[];let t=[];for(let i of e.childAlgNodes()){if(!(i.is(k)||i.is(Ye)||i.is(Ge)))return this.traverseAlg(e);let s=i.as(k);s&&t.push(s)}let r=B(t[0].amount);for(let i=0;i<t.length-1;i++){for(let s=1;s<t.length;s++)if(!an(t[i],t[s]))return this.traverseAlg(e);r=Math.max(r,B(t[i].amount))}let n=t.map(i=>({animLeafAlgNode:i,msUntilNext:0,duration:r}));return n[n.length-1].msUntilNext=r,n}traverseGrouping(e){let t=[],r=e.amount>0?e.alg:e.alg.invert();for(let n=0;n<Math.abs(e.amount);n++)t.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...t)}traverseMove(e){let t=B(e.amount);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseCommutator(e){let t=[],r=[e.A,e.B,e.A.invert(),e.B.invert()];for(let n of r)t.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...t)}traverseConjugate(e){let t=[],r=[e.A,e.B,e.A.invert()];for(let n of r)t.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...t)}traversePause(e){if(e.experimentalNISSGrouping)return[];let t=B(1);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseNewline(e){return[]}traverseLineComment(e){return[]}},ln=z(on);function cn(e){let t=0;return ln(e).map(n=>{let i={animLeaf:n.animLeafAlgNode,start:t,end:t+n.duration};return t+=n.msUntilNext,i})}var be=class{constructor(e,t,r){this.kpuzzle=e,this.animLeaves=r?.animationTimelineLeaves??cn(t)}kpuzzle;animLeaves;getAnimLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]?.animLeaf??null}getAnimationTimelineLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]}indexToMoveStartTimestamp(e){let t=0;return this.animLeaves.length>0&&(t=this.animLeaves[Math.min(e,this.animLeaves.length-1)].start),t}timestampToIndex(e){let t=0;for(t=0;t<this.animLeaves.length;t++)if(this.animLeaves[t].start>=e)return Math.max(0,t-1);return Math.max(0,t-1)}timestampToPosition(e,t){let r=this.currentMoveInfo(e),n=t??this.kpuzzle.identityTransformation().toKPattern();for(let i of this.animLeaves.slice(0,r.patternIndex)){let s=i.animLeaf.as(k);s!==null&&(n=n.applyMove(s))}return{pattern:n,movesInProgress:r.currentMoves}}currentMoveInfo(e){let t=1/0;for(let o of this.animLeaves)if(o.start<=e&&o.end>=e)t=Math.min(t,o.start);else if(o.start>e)break;let r=[],n=[],i=[],s=[],a=-1/0,l=1/0,c=0;for(let o of this.animLeaves)if(o.end<=t){if(!isFinite(t)&&o.start>e)break;c++}else{if(o.start>e)break;{let m=o.animLeaf.as(k);if(m!==null){let d=(e-o.start)/(o.end-o.start),f=!1;d>1&&(d=1,f=!0);let v={move:m,direction:1,fraction:d,startTimestamp:o.start,endTimestamp:o.end};switch(d){case 0:{n.push(v);break}case 1:{f?s.push(v):i.push(v);break}default:r.push(v),a=Math.max(a,o.start),l=Math.min(l,o.end)}}}}return{patternIndex:c,currentMoves:r,latestStart:a,earliestEnd:l,movesStarting:n,movesFinishing:i,movesFinished:s}}patternAtIndex(e,t){let r=t??this.kpuzzle.defaultPattern();for(let n=0;n<this.animLeaves.length&&n<e;n++){let s=this.animLeaves[n].animLeaf.as(k);s!==null&&(r=r.applyMove(s))}return r}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let r of this.animLeaves.slice(0,e)){let n=r.animLeaf.as(k);n!==null&&(t=t.applyMove(n))}return t}algDuration(){let e=0;for(let t of this.animLeaves)e=Math.max(e,t.end);return e}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(e){let t=this.getAnimationTimelineLeaf(e);return t.end-t.start}},un=1024,dn=class extends g{derive(e){switch(e.indexerConstructorRequest){case"auto":return e.animationTimelineLeaves!==null||ut(e.alg.alg)<=un&&e.puzzle==="3x3x3"&&e.visualizationStrategy==="Cube3D"?be:ht;case"tree":return ht;case"simple":return kr;case"simultaneous":return be;default:throw new Error("Invalid indexer request!")}}},hn=class extends p{getDefaultValue(){return"auto"}},mn=class extends g{derive(e){return new e.indexerConstructor(e.kpuzzle,e.algWithIssues.alg,{animationTimelineLeaves:e.animationTimelineLeaves})}},pn=class extends g{derive(e){return{pattern:e.currentPattern,movesInProgress:e.currentMoveInfo.currentMoves}}},gn=!0,St=class extends g{async derive(e){try{return gn&&e.kpuzzle.algToTransformation(e.algWithIssues.alg),e.algWithIssues}catch(t){return{alg:new T,issues:new K({errors:[`Invalid alg for puzzle: ${t.toString()}`]})}}}},fn=class extends p{getDefaultValue(){return"start"}},vn=class extends p{getDefaultValue(){return null}},wn=class extends g{async derive(e){return e.puzzleLoader.kpuzzle()}},yn=class extends p{getDefaultValue(){return q}},Mn=class extends g{async derive(e){return e.puzzleLoader.id}},xn=class extends p{getDefaultValue(){return q}},zn=class extends g{derive(e){if(e.puzzleIDRequest&&e.puzzleIDRequest!==q){let t=Me[e.puzzleIDRequest];return t||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${e.puzzleIDRequest}`]}),t}return e.puzzleDescriptionRequest&&e.puzzleDescriptionRequest!==q?Ke(e.puzzleDescriptionRequest):et}},Tn=class extends g{derive(e){return{playing:e.playingInfo.playing,atStart:e.detailedTimelineInfo.atStart,atEnd:e.detailedTimelineInfo.atEnd}}canReuseValue(e,t){return e.playing===t.playing&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Sn=class extends g{derive(e){let t=this.#e(e),r=!1,n=!1;return t>=e.timeRange.end&&(n=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(r=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:r,atEnd:n}}#e(e){switch(e.timestampRequest){case"auto":return e.setupAnchor==="start"&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case"start":return e.timeRange.start;case"end":return e.timeRange.end;case"anchor":return e.setupAnchor==="start"?e.timeRange.start:e.timeRange.end;case"opposite-anchor":return e.setupAnchor==="start"?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},An=class extends R{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(e,t){let r=await t,n=Object.assign({},r);return Object.assign(n,e),n}canReuseValue(e,t){return e.direction===t.direction&&e.playing===t.playing&&e.untilBoundary===t.untilBoundary&&e.loop===t.loop}},bn=class extends R{getDefaultValue(){return 1}derive(e){return e<0?1:e}},kn={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},Ln=class extends p{getDefaultValue(){return"auto"}set(e){let t=this.get();super.set((async()=>this.validInput(await e)?e:t)())}validInput(e){return!!(typeof e=="number"||kn[e])}},In=class extends g{derive(e){return{start:0,end:e.indexer.algDuration()}}},Dn=class extends p{getDefaultValue(){return"auto"}},Cn=class extends p{getDefaultValue(){return"auto"}},En=class extends g{derive(e){switch(e.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":case"tri_quad":case"loopover":return"2D";case"3x3x3":switch(e.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return e.visualizationRequest}default:switch(e.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":case"experimental-2D-LL-face":return["2x2x2","4x4x4","megaminx"].includes(e.puzzleID)?"experimental-2D-LL":"2D";default:return e.visualizationRequest}}}},Nn=class extends p{getDefaultValue(){return"auto"}},Pn=class extends p{getDefaultValue(){return"auto"}},Rn=class extends p{getDefaultValue(){return"auto"}},On=class extends p{getDefaultValue(){return"auto"}},Fn=null;async function jn(){return Fn??=new(await O).ThreeTextureLoader}var At=class extends g{async derive(e){let{spriteURL:t}=e;return t===null?null:new Promise(async(r,n)=>{let i=()=>{console.warn("Could not load sprite:",t.toString()),r(null)};try{(await jn()).load(t.toString(),r,i,i)}catch{i()}})}},Vn={facelets:["regular","regular","regular","regular","regular"]};async function Bn(e){let{definition:t}=await e.kpuzzle(),r={orbits:{}};for(let n of t.orbits)r.orbits[n.orbitName]={pieces:new Array(n.numPieces).fill(Vn)};return r}var Un=class extends g{getDefaultValue(){return{orbits:{}}}async derive(e){return e.stickeringMaskRequest?e.stickeringMaskRequest:e.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:e.puzzleLoader.stickeringMask?.(e.stickeringRequest??"full")??Bn(e.puzzleLoader)}},qn={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation",M:"Mystery","@":"Regular"};function Wn(e){let t={orbits:{}},r=e.split(",");for(let n of r){let[i,s,...a]=n.split(":");if(a.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${n}\``);let l=[];t.orbits[i]={pieces:l};for(let c of s){let o=qn[c];l.push(Xe(o))}}return t}var Qn=class extends R{getDefaultValue(){return null}derive(e){return e===null?null:typeof e=="string"?Wn(e):e}},Hn=class extends p{getDefaultValue(){return null}},_n=class extends p{getDefaultValue(){return"auto"}},Yn=class extends p{getDefaultValue(){return{}}},Gn=class extends p{getDefaultValue(){return"auto"}},$n=class extends p{getDefaultValue(){return"auto"}},Zn=class extends g{derive(e){return e.colorSchemeRequest==="dark"?"dark":"light"}},Xn=class extends p{getDefaultValue(){return"auto"}},Jn=class extends p{getDefaultValue(){return null}},Kn=35,ei=class extends p{getDefaultValue(){return Kn}};function Xt(e,t){return e.latitude===t.latitude&&e.longitude===t.longitude&&e.distance===t.distance}var ti=class extends R{getDefaultValue(){return"auto"}canReuseValue(e,t){return e===t||Xt(e,t)}async derive(e,t){if(e==="auto")return"auto";let r=await t;r==="auto"&&(r={});let n=Object.assign({},r);return Object.assign(n,e),typeof n.latitude<"u"&&(n.latitude=Math.min(Math.max(n.latitude,-90),90)),typeof n.longitude<"u"&&(n.longitude=Ie(n.longitude,180,-180)),n}},ri=class extends g{canReuseValue(e,t){return Xt(e,t)}async derive(e){if(e.orbitCoordinatesRequest==="auto")return kt(e.puzzleID,e.strategy);let t=Object.assign(Object.assign({},kt(e.puzzleID,e.strategy),e.orbitCoordinatesRequest));if(Math.abs(t.latitude)<=e.latitudeLimit)return t;{let{latitude:r,longitude:n,distance:i}=t;return{latitude:e.latitudeLimit*Math.sign(r),longitude:n,distance:i}}}},ni={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},ii={latitude:35,longitude:30,distance:6},bt={latitude:35,longitude:30,distance:6.25},si={latitude:Math.atan(1/2)*nt,longitude:0,distance:6.7},ai={latitude:26.56505117707799,longitude:0,distance:6};function kt(e,t){if(e[1]==="x")return t==="Cube3D"?ii:bt;switch(e){case"megaminx":case"gigaminx":return si;case"pyraminx":case"master_tetraminx":return ai;case"skewb":return bt;default:return ni}}var oi=class{constructor(e){this.twistyPlayerModel=e,this.orbitCoordinates=new ri({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:e.puzzleID,strategy:e.visualizationStrategy}),this.stickeringMask=new Un({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:e.puzzleLoader})}twistyPlayerModel;background=new $n;colorSchemeRequest=new Xn;dragInput=new _n;foundationDisplay=new Pn;foundationStickerSpriteURL=new Ee;fullscreenElement=new Jn;hintFacelet=new rt;hintStickerSpriteURL=new Ee;initialHintFaceletsAnimation=new On;hintFaceletsElevation=new Rn;latitudeLimit=new ei;movePressInput=new Gn;movePressCancelOptions=new Yn;orbitCoordinatesRequest=new ti;stickeringMaskRequest=new Qn;stickeringRequest=new Hn;faceletScale=new Nn;colorScheme=new Zn({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new At({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new At({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask},li={errors:[]},ci=class extends p{getDefaultValue(){return li}reset(){this.set(this.getDefaultValue())}canReuseValue(e,t){return Le(e.errors,t.errors)}},ui=class{userVisibleErrorTracker=new ci;alg=new zt;backView=new Pr;controlPanel=new qr;catchUpMove=new tn;indexerConstructorRequest=new hn;playingInfo=new An;puzzleDescriptionRequest=new yn;puzzleIDRequest=new xn;setupAnchor=new fn;setupAlg=new zt;setupTransformation=new vn;tempoScale=new bn;timestampRequest=new Ln;viewerLink=new Dn;visualizationFormat=new Cn;title=new xt;videoURL=new Ee;competitionID=new xt;animationTimelineLeavesRequest=new en;puzzleLoader=new zn({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new wn({puzzleLoader:this.puzzleLoader});puzzleID=new Mn({puzzleLoader:this.puzzleLoader});puzzleAlg=new St({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new St({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new En({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new dn({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest,animationTimelineLeaves:this.animationTimelineLeavesRequest});setupAlgTransformation=new Jr({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new mn({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle,animationTimelineLeaves:this.animationTimelineLeavesRequest});anchorTransformation=new Kr({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new In({indexer:this.indexer});detailedTimelineInfo=new Sn({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new Tn({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new nn({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new Gr({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new rn({currentMoveInfo:this.currentMoveInfo});currentPattern=new sn({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new pn({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new oi(this);async twizzleLink(){let[e,t,r,n,i,s,a,l]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),c=e==="experimental-twizzle-explorer",o=new URL(`https://alpha.twizzle.net/${c?"explore":"edit"}/`);return n.alg.experimentalIsEmpty()||o.searchParams.set("alg",n.alg.toString()),i.alg.experimentalIsEmpty()||o.searchParams.set("setup-alg",i.alg.toString()),s!=="start"&&o.searchParams.set("setup-anchor",s),a!=="full"&&a!==null&&o.searchParams.set("experimental-stickering",a),c&&r!==q?o.searchParams.set("puzzle-description",r):t!=="3x3x3"&&o.searchParams.set("puzzle",t),l&&o.searchParams.set("title",l),o.toString()}experimentalAddAlgLeaf(e,t){let r=e.as(k);r?this.experimentalAddMove(r,t):this.alg.set((async()=>{let i=(await this.alg.get()).alg.concat(new T([e]));return this.timestampRequest.set("end"),i})())}experimentalAddMove(e,t){let r=typeof e=="string"?new k(e):e;this.alg.set((async()=>{let[{alg:n},i]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=Ze(n,r,{...t,...await Je(i)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:r,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let e=(await this.alg.get()).alg,t=Array.from(e.childAlgNodes()),[r]=t.splice(-1);if(!r)return e;this.timestampRequest.set("end");let n=r.as(k);return n&&this.catchUpMove.set({move:n.invert(),amount:0}),new T(t)})())}};function h(e){return new Error(`Cannot get \`.${e}\` directly from a \`TwistyPlayer\`.`)}var di=class extends I{experimentalModel=new ui;set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw h("alg")}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw h("setup")}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw h("anchor")}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw h("puzzle")}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw h("experimentalPuzzleDescription")}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw h("timestamp")}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw h("hintFacelets")}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw h("experimentalStickering")}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw h("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw h("experimentalFaceletScale")}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw h("backView")}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw h("background")}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw h("colorScheme")}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw h("controlPanel")}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw h("visualization")}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw h("experimentalTitle")}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw h("experimentalVideoURL")}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw h("experimentalCompetitionID")}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw h("viewerLink")}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw h("experimentalMovePressInput")}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw h("experimentalMovePressCancelOptions")}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw h("cameraLatitude")}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw h("cameraLongitude")}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw h("cameraDistance")}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw h("cameraLatitudeLimit")}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw h("indexer")}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw h("tempoScale")}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw h("experimentalSprite")}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw h("experimentalHintSprite")}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw h("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw h("experimentalInitialHintFaceletsAnimation")}set experimentalHintFaceletsElevation(e){this.experimentalModel.twistySceneModel.hintFaceletsElevation.set(e)}get experimentalHintFaceletsElevation(){throw h("experimentalHintFaceletsElevation")}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw h("experimentalDragInput")}experimentalGet=new hi(this.experimentalModel)},hi=class{constructor(e){this.model=e}model;async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},ke="data-",de={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-facelet-scale":"experimentalFaceletScale","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","experimental-hint-facelets-elevation":"experimentalHintFaceletsElevation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},mi=Object.fromEntries(Object.values(de).map(e=>[e,!0])),pi={experimentalMovePressCancelOptions:!0},Lt,Jt=Symbol("intersectedCallback");function gi(e){Lt??=new IntersectionObserver((t,r)=>{for(let n of t)n.isIntersecting&&n.intersectionRect.height>0&&(n.target[Jt](),r.unobserve(n.target))}),Lt.observe(e)}var _=class extends di{controller=new Br(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(e={}){super();for(let[t,r]of Object.entries(e)){if(!(mi[t]||pi[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=r}}#e=new ee(this,"controls-",["auto"].concat(Object.keys(Ur)));#r=document.createElement("div");#t=document.createElement("div");#i=!1;connectedCallback(){this.addCSS(Gt),gi(this)}async[Jt](){if(this.#i)return;this.#i=!0,this.addElement(this.#r).classList.add("visualization-wrapper"),this.addElement(this.#t).classList.add("error-elem"),this.#t.textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(t=>{let r=t.errors[0]??null;this.contentWrapper.classList.toggle("error",!!r),r&&(this.#t.textContent=r)});let e=new Ht(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new Ut(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(t=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(t)),this.contentWrapper.classList.toggle("checkered-transparent",t==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(t=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(t))}),this.experimentalModel.controlPanel.addFreshListener(t=>{this.#e.setValue(t)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#l.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#s="auto";experimentalSetFlashLevel(e){this.#s=e}flash(){this.#s==="auto"&&this.#n?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"})}#n=null;#a=new Ft;#o=null;#l(e){if(e!==this.#o){this.#n?.remove(),this.#n?.disconnect();let t;switch(e){case"2D":case"experimental-2D-LL":case"experimental-2D-LL-face":{t=new Ot(this.experimentalModel.twistySceneModel,e);break}case"Cube3D":case"PG3D":{t=new De(this.experimentalModel),this.#a.handleNewValue(t);break}default:throw new Error("Invalid visualization")}this.#r.appendChild(t),this.#n=t,this.#o=e}}async experimentalCurrentVantages(){this.connectedCallback();let e=this.#n;return e instanceof De?e.experimentalVantages():[]}async experimentalCurrentCanvases(){let e=await this.experimentalCurrentVantages(),t=[];for(let r of e)t.push((await r.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();let r=await(await this.#a.promise).experimentalTwisty3DPuzzleWrapper(),n=r.twisty3DPuzzle(),i=(async()=>{await n,await new Promise(s=>setTimeout(s,0))})();if(e){let s=new Z(async()=>{});r.addEventListener("render-scheduled",async()=>{s.requestIsPending()||(s.requestAnimFrame(),await i,e())})}return n}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){let e=[];for(let t of Object.keys(de))e.push(t,ke+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,r){e.startsWith(ke)&&(e=e.slice(ke.length));let n=de[e];n&&(this[n]=r)}async experimentalScreenshot(e){return(await Mt(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if(["2D","experimental-2D-LL","experimental-2D-LL-face"].includes(await this.experimentalModel.visualizationStrategy.get())){let r=await this.#n.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),n=new XMLSerializer().serializeToString(r.svgWrapper.svgElement),i=URL.createObjectURL(new Blob([n]));Yt(i,e??await _t(this.experimentalModel),"svg")}else await(await Mt(this.experimentalModel)).download(e)}};S.define("twisty-player",_);var fi=class extends ne{traverseAlg(e,t){let r=[],n=0;for(let i of e.childAlgNodes()){let s=this.traverseAlgNode(i,{numMovesSoFar:t.numMovesSoFar+n});r.push(s.tokens),n+=s.numLeavesInside}return{tokens:Array.prototype.concat(...r),numLeavesInside:n}}traverseGrouping(e,t){let r=this.traverseAlg(e.alg,t);return{tokens:r.tokens,numLeavesInside:r.numLeavesInside*e.amount}}traverseMove(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseCommutator(e,t){let r=this.traverseAlg(e.A,t),n=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+r.numLeavesInside});return{tokens:r.tokens.concat(n.tokens),numLeavesInside:r.numLeavesInside*2+n.numLeavesInside}}traverseConjugate(e,t){let r=this.traverseAlg(e.A,t),n=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+r.numLeavesInside});return{tokens:r.tokens.concat(n.tokens),numLeavesInside:r.numLeavesInside*2+n.numLeavesInside*2}}traversePause(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseNewline(e,t){return{tokens:[],numLeavesInside:0}}traverseLineComment(e,t){return{tokens:[],numLeavesInside:0}}},vi=z(fi),wi=class extends p{getDefaultValue(){return""}},yi=class extends g{derive(e){return Zt(e.value)}},Mi=class extends R{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(e,t){let{selectionStart:r,selectionEnd:n}=e,i=await t,s=e.selectionStart===i.selectionStart&&e.selectionEnd!==(await t).selectionEnd;return{selectionStart:r,selectionEnd:n,endChangedMostRecently:s}}},xi=class extends g{derive(e){return e.selectionInfo.endChangedMostRecently?e.selectionInfo.selectionEnd:e.selectionInfo.selectionStart}},zi=class extends g{derive(e){return vi(e.algWithIssues.alg,{numMovesSoFar:0}).tokens}},Ti=class extends g{derive(e){function t(n){if(n===null)return null;let i;return e.targetChar<n.leaf[P]?i="before":e.targetChar===n.leaf[P]?i="start":e.targetChar<n.leaf[U]?i="inside":e.targetChar===n.leaf[U]?i="end":i="after",{leafInfo:n,where:i}}let r=null;for(let n of e.leafTokens){if(e.targetChar<n.leaf[P]&&r!==null)return t(r);if(e.targetChar<=n.leaf[U])return t(n);r=n}return t(r)}},Si=class{valueProp=new wi;selectionProp=new Mi;targetCharProp=new xi({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new yi({value:this.valueProp});leafTokensProp=new zi({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new Ti({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})},Ai="//";function bi(e){try{return T.fromString(e)}catch{return null}}function Kt(e,t){let r=e.indexOf(t);return r===-1?[e,""]:[e.slice(0,r),e.slice(r)]}function It(e){let t=[];for(let r of e.split(`
`)){let[n,i]=Kt(r,Ai);n=n.replaceAll("\u2019","'"),t.push(n+i)}return t.join(`
`)}function ki(e,t){let{value:r}=e,{selectionStart:n,selectionEnd:i}=e,s=r.slice(0,n),a=r.slice(i);t=t.replaceAll(`\r
`,`
`);let l=s.match(/\/\/[^\n]*$/),c=r[n-1]==="/"&&t[0]==="/",o=l||c,m=t.match(/\/\/[^\n]*$/),d=t;if(o){let[A,C]=Kt(t,`
`);d=A+It(C)}else d=It(t);let f=!o&&n!==0&&![`
`," "].includes(d[0])&&![`
`," "].includes(r[n-1]),v=!m&&i!==r.length&&![`
`," "].includes(d.at(-1))&&![`
`," "].includes(r[i]);function y(A,C){let N=A+d+C,M=!!bi(s+N+a);return M&&(d=N),M}f&&v&&y(" "," ")||f&&y(" ","")||v&&y(""," "),F?.execCommand("insertText",!1,d)||e.setRangeText(d,n,i,"end")}var er=new L;er.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var se="for-twisty-player",Dt="placeholder",Ct="twisty-player-prop",Li=class extends I{model=new Si;#e=document.createElement("textarea");#r=document.createElement("div");#t=document.createElement("span");#i=document.createElement("span");#s=document.createElement("span");#n=new ee(this,"valid-for-puzzle-",["none","warning","error"]);#a=null;#o;get#l(){return this.#a===null?null:this.#a.experimentalModel[this.#o]}debugNeverRequestTimestamp=!1;constructor(e){super(),this.#r.classList.add("carbon-copy"),this.addElement(this.#r),this.#e.rows=1,this.addElement(this.#e),this.#t.classList.add("prefix"),this.#r.appendChild(this.#t),this.#i.classList.add("highlight"),this.#r.appendChild(this.#i),this.#s.classList.add("suffix"),this.#r.appendChild(this.#s),this.#e.placeholder="Alg",this.#e.setAttribute("spellcheck","false"),this.addCSS(er),this.#e.addEventListener("input",()=>{this.#c=!0,this.onInput()}),this.#e.addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),e?.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),this.#o=e?.twistyPlayerProp??"alg",e?.twistyPlayerProp==="alg"&&this.model.leafToHighlight.addFreshListener(t=>{t&&this.highlightLeaf(t.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener("paste",e=>{let t=e.clipboardData?.getData("text");t&&(ki(this.#e,t),e.preventDefault(),this.onInput())})}set algString(e){this.#e.value=e,this.onInput()}get algString(){return this.#e.value}set placeholder(e){this.#e.placeholder=e}#c=!1;onInput(){this.#i.hidden=!0,this.highlightLeaf(null);let e=this.#e.value.trimEnd();this.model.valueProp.set(e),this.#l?.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#o!=="alg")return;let{selectionStart:e,selectionEnd:t}=this.#e;this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){this.#n.setValue(e)}#u(e){return e.endsWith(`
`)?`${e} `:e}#d=null;highlightLeaf(e){if(e===null){this.#t.textContent="",this.#i.textContent="",this.#s.textContent=this.#u(this.#e.value);return}e!==this.#d&&(this.#d=e,this.#t.textContent=this.#e.value.slice(0,e[P]),this.#i.textContent=this.#e.value.slice(e[P],e[U]),this.#s.textContent=this.#u(this.#e.value.slice(e[U])),this.#i.hidden=!1)}get twistyPlayer(){return this.#a}set twistyPlayer(e){if(this.#a){console.warn("twisty-player reassignment/clearing is not supported");return}this.#a=e,e&&((async()=>this.algString=this.#l?(await this.#l.get()).alg.toString():"")(),this.#o==="alg"&&(this.#a?.experimentalModel.puzzleAlg.addFreshListener(t=>{if(t.issues.errors.length===0){this.setAlgIssueClassForPuzzle(t.issues.warnings.length===0?"none":"warning");let r=t.alg,n=T.fromString(this.algString);r.isIdentical(n)||(this.algString=r.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async t=>{if(t===null)return;let[r,n]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(n==="auto"&&!this.#c)return;let i=r.indexToMoveStartTimestamp(t.leafInfo.idx),s=r.moveDuration(t.leafInfo.idx),a;switch(t.where){case"before":{a=i;break}case"start":case"inside":{a=i+s/4;break}case"end":case"after":{a=i+s;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(a)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async t=>{let n=(await e.experimentalModel.indexer.get()).getAnimLeaf(t.patternIndex);this.highlightLeaf(n)})))}attributeChangedCallback(e,t,r){switch(e){case se:{let n=document.getElementById(r);if(!n){console.warn(`${se}= elem does not exist`);return}if(!(n instanceof _)){console.warn(`${se}=is not a twisty-player`);return}this.twistyPlayer=n;return}case Dt:{this.placeholder=r;return}case Ct:{if(this.#a)throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");this.#o=r;return}}}static get observedAttributes(){return[se,Dt,Ct]}};S.define("twisty-alg-editor",Li);async function Ii(e){return new Promise((t,r)=>{try{let n=document.getElementById(e);n&&t(n);let i=new MutationObserver(s=>{for(let a of s)a.attributeName==="id"&&a.target instanceof Element&&a.target.getAttribute("id")===e&&(t(a.target),i.disconnect())});i.observe(document.body,{attributeFilter:["id"],subtree:!0})}catch(n){r(n)}})}var tr=new L;tr.replaceSync(`
:host {
  display: inline;
  --comment-opacity: 0.4;
  --active-background-shade: rgba(66, 133, 244);
}

.wrapper {
  display: inline;
  --current-color: currentColor
}

a {
  color: currentColor;

  &:not(:hover) {
    text-decoration: none;
  }

  &:hover {
    background: color-mix(in oklab, currentColor 20%, transparent);
  }

  &:active {
    color: currentColor;
    animation: 1s linear flash;
  }
}

@keyframes flash {
  from { opacity: 0.5; }
  to { opacity: 1; }
}

twisty-alg-leaf-elem.twisty-alg-line-comment {
  opacity: var(--comment-opacity);
}

.current-move {
  background: color-mix(in oklab, var(--active-background-shade) 30%, transparent);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);var Di=.25,Q=class extends ze{constructor(e,t,r,n,i,s){if(super(),this.algOrAlgNode=n,this.classList.add(e),s){let a=this.appendChild(document.createElement("a"));a.href="#",a.textContent=t,a.addEventListener("click",l=>{l.preventDefault(),r.twistyAlgViewer.jumpToIndex(r.earliestMoveIndex,i)})}else this.appendChild(document.createElement("span")).textContent=t}algOrAlgNode;pathToIndex(e){return[]}setCurrentMove(e){this.classList.toggle("current-move",e)}};S.define("twisty-alg-leaf-elem",Q);var H=class extends ze{constructor(e,t){super(),this.algOrAlgNode=t,this.classList.add(e)}algOrAlgNode;queue=[];addString(e){let t=document.createElement("span");t.textContent=e,this.queue.push(t)}addElem(e){return this.queue.push(e.element),e.moveCount}flushQueue(e=1){for(let t of rr(this.queue,e))this.append(t);this.queue=[]}pathToIndex(e){return[]}};S.define("twisty-alg-wrapper-elem",H);function Ci(e){return e===1?-1:1}function Ei(e,t){return t<0?Ci(e):e}function rr(e,t){if(t===1)return e;let r=Array.from(e);return r.reverse(),r}var Ni=class extends ne{traverseAlg(e,t){let r=0,n=new H("twisty-alg-alg",e),i=!0;for(let s of He(e.childAlgNodes(),t.direction))i||n.addString(" "),i=!1,s.as(we)?.experimentalNISSGrouping&&n.addString("^("),s.as($)?.experimentalNISSPlaceholder||(r+=n.addElem(this.traverseAlgNode(s,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}))),s.as(we)?.experimentalNISSGrouping&&n.addString(")");return n.flushQueue(t.direction),{moveCount:r,element:n}}traverseGrouping(e,t){let r=e.experimentalAsSquare1Tuple(),n=Ei(t.direction,e.amount),i=0,s=new H("twisty-alg-grouping",e);return s.addString("("),r?(i+=s.addElem({moveCount:1,element:new Q("twisty-alg-move",r[0].amount.toString(),t,r[0],!0,!0)}),s.addString(", "),i+=s.addElem({moveCount:1,element:new Q("twisty-alg-move",r[1].amount.toString(),t,r[1],!0,!0)})):i+=s.addElem(this.traverseAlg(e.alg,{earliestMoveIndex:t.earliestMoveIndex+i,twistyAlgViewer:t.twistyAlgViewer,direction:n})),s.addString(`)${e.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:i*Math.abs(e.amount),element:s}}traverseMove(e,t){let r=new Q("twisty-alg-move",e.toString(),t,e,!0,!0);return t.twistyAlgViewer.highlighter.addMove(e[P],r),{moveCount:1,element:r}}traverseCommutator(e,t){let r=0,n=new H("twisty-alg-commutator",e);n.addString("["),n.flushQueue();let[i,s]=rr([e.A,e.B],t.direction);return r+=n.addElem(this.traverseAlg(i,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),n.addString(", "),r+=n.addElem(this.traverseAlg(s,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),n.flushQueue(t.direction),n.addString("]"),n.flushQueue(),{moveCount:r*2,element:n}}traverseConjugate(e,t){let r=0,n=new H("twisty-alg-conjugate",e);n.addString("[");let i=n.addElem(this.traverseAlg(e.A,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}));return r+=i,n.addString(": "),r+=n.addElem(this.traverseAlg(e.B,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),n.addString("]"),n.flushQueue(),{moveCount:r+i,element:n}}traversePause(e,t){return e.experimentalNISSGrouping?this.traverseAlg(e.experimentalNISSGrouping.alg,t):{moveCount:1,element:new Q("twisty-alg-pause",".",t,e,!0,!0)}}traverseNewline(e,t){let r=new H("twisty-alg-newline",e);return r.append(document.createElement("br")),{moveCount:0,element:r}}traverseLineComment(e,t){return{moveCount:0,element:new Q("twisty-alg-line-comment",`//${e.text}`,t,e,!1,!1)}}},Pi=z(Ni),Ri=class{moveCharIndexMap=new Map;currentElem=null;addMove(e,t){this.moveCharIndexMap.set(e,t)}set(e){let t=e?this.moveCharIndexMap.get(e[P])??null:null;this.currentElem!==t&&(this.currentElem?.setCurrentMove(!1),t?.setCurrentMove(!0),this.currentElem=t)}},nr=class extends I{highlighter=new Ri;#e;#r;#t=null;lastClickTimestamp=null;constructor(e){super({mode:"open"}),this.addCSS(tr),e?.twistyPlayer&&(this.twistyPlayer=e?.twistyPlayer)}connectedCallback(){}setAlg(e){this.#r?.isIdentical(e)||(this.#e=Pi(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.#r=e,this.contentWrapper.textContent="",this.contentWrapper.appendChild(this.#e))}get twistyPlayer(){return this.#t}set twistyPlayer(e){this.#i(e)}async#i(e){if(this.#t){console.warn("twisty-player reassignment is not supported");return}if(e===null)throw new Error("clearing twistyPlayer is not supported");this.#t=e,this.#t.experimentalModel.alg.addFreshListener(t=>{this.setAlg(t.alg)}),e.experimentalModel.currentMoveInfo.addFreshListener(t=>{let r=t.currentMoves[0];if(r??=t.movesStarting[0],r??=t.movesFinishing[0],!r)this.highlighter.set(null);else{let n=r.move;this.highlighter.set(n)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(t=>{t.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(e,t){let r=this.#t;if(r){r.pause();let n=(async()=>{let i=await r.experimentalModel.indexer.get(),s=t?i.moveDuration(e)*Di:0;return i.indexToMoveStartTimestamp(e)+i.moveDuration(e)-s})();r.experimentalModel.timestampRequest.set(await n),this.lastClickTimestamp===await n?(r.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await n}}async attributeChangedCallback(e,t,r){if(e==="for"){let n=document.getElementById(r);if(n||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),n=await Ii(r),!(n instanceof _)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=n}}static get observedAttributes(){return["for"]}};S.define("twisty-alg-viewer",nr);var ce=new L;ce.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var ir=new L;ir.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function Oi(e="",t=location.href){let r={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},n=new URL(t).searchParams,i={};for(let[s,a]of Object.entries(r)){let l=n.get(e+s);if(l!==null){let c=de[a];i[c]=l}}return i}var ae="outer block moves (e.g. R, Rw, or 4r)",oe="inner block moves (e.g. M or 2-5r)",Et={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${oe} count as 2 turns
\u2022 ${ae} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${oe} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${ae} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${oe} count as 1 turn
\u2022 ${ae} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${oe} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${ae} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
\u2022 all moves (including rotations) count as 1 turn`},Fi={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},ji=class extends I{constructor(e){super({mode:"open"}),this.options=e}options;twistyPlayer=null;a=null;#e(){if(this.contentWrapper.textContent="",this.a){let t=this.contentWrapper.appendChild(document.createElement("span"));t.textContent="\u2757\uFE0F",t.title="Could not show a player for link",this.addElement(this.a)}this.removeCSS(ce);let e=this.shadow.adoptedStyleSheets.indexOf(ce);typeof e<"u"&&this.shadow.adoptedStyleSheets.splice(e,e+1),this.#r?.remove()}#r;#t;#i;#s;async connectedCallback(){if(this.#i=this.addElement(document.createElement("div")),this.#i.classList.add("responsive-wrapper"),this.options?.colorScheme==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.addCSS(ce),this.options?.cdnForumTweaks&&this.addCSS(ir),this.a=this.querySelector("a"),!this.a)return;let e=Oi("",this.a.href),t=this.a?.href,{hostname:r,pathname:n}=new URL(t);if(r!=="alpha.twizzle.net"){this.#e();return}if(["/edit/","/explore/"].includes(n)){let i=n==="/explore/";if(e.puzzle&&!(e.puzzle in Me)){let l=(await import("./puzzle-geometry-VYCJMA37.js")).getPuzzleDescriptionString(e.puzzle);delete e.puzzle,e.experimentalPuzzleDescription=l}if(this.twistyPlayer=this.#i.appendChild(new _({background:this.options?.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:this.options?.colorScheme==="dark"?"dark":"light",...e,viewerLink:i?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,e.experimentalTitle&&(this.twistyPlayer.experimentalTitle=e.experimentalTitle),this.#t=this.#i.appendChild(document.createElement("div")),this.#t.classList.add("scrollable-region"),e.experimentalTitle&&this.#n(e.experimentalTitle).classList.add("title"),e.experimentalSetupAlg){this.#n("Setup",async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let l=this.#t.appendChild(document.createElement("div"));l.classList.add("setup-alg"),l.textContent=new T(e.experimentalSetupAlg).toString()}let s=this.#n("Moves",async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#s=s.appendChild(Vi(this.twistyPlayer.experimentalModel)),this.#s.classList.add("move-count"),this.#t.appendChild(new nr({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else this.#e()}#n(e,t){let r=this.#t.appendChild(document.createElement("div"));r.classList.add("heading");let n=r.appendChild(document.createElement("span"));if(n.textContent=e,t){n.textContent+=" ";let i=n.appendChild(document.createElement("a"));i.textContent="\u{1F4CB}",i.href="#",i.title="Copy to clipboard";async function s(a){i.textContent=a,await new Promise(l=>setTimeout(l,2e3)),i.textContent===a&&(i.textContent="\u{1F4CB}")}i.addEventListener("click",async a=>{a.preventDefault(),i.textContent="\u{1F4CB}\u2026";let l=await t();if(l)try{await navigator.clipboard.writeText(l),s("\u{1F4CB}\u2705")}catch(c){throw s("\u{1F4CB}\u274C"),c}else s("\u{1F4CB}\u274C")})}return r}};S.define("twizzle-link",ji);function Vi(e,t=document.createElement("span")){async function r(){let[n,i]=await Promise.all([e.puzzleAlg.get(),e.puzzleLoader.get()]);if(n.issues.errors.length!==0){t.textContent="";return}let s=!0;function a(l){s?s=!1:t.append(")(");let c=t.appendChild(document.createElement("span")),o=dt(i,l,n.alg);c.append(`${Fi[l]}: `);let m=c.appendChild(document.createElement("span"));m.textContent=o.toString(),m.classList.add("move-number"),c.setAttribute("data-before",Et[l]??""),c.setAttribute("title",Et[l]??"")}t.textContent="(",i.id==="3x3x3"?(a("OBTM"),a("OBQTM"),a("RBTM")):i.pg&&(a("RBTM"),a("RBQTM")),a("ETM"),t.append(")")}return e.puzzleAlg.addFreshListener(r),e.puzzleID.addFreshListener(r),t}var Pe=[{family:"U",title:"U: up face"},{family:"D",title:"D: down face"},{family:"L",title:"L: left face"},{family:"R",title:"R: right face"},{family:"F",title:"F: front face"},{family:"B",title:"B: back face"}],Re=[{family:"x",title:"x: whole cube, turned like R"},{family:"y",title:"y: whole cube, turned like U"},{family:"z",title:"z: whole cube, turned like F"},{family:"M",title:"M: middle slice, between L and R, turned like L"},{family:"E",title:"E: equator slice, between U and D, turned like D"},{family:"S",title:"S: standing slice, between F and B, turned like F"}],lr=new Map([...Pe,...Re].map(e=>[e.family.toLowerCase(),e.family]));function Oe(e,t){if(![...lr.values()].includes(e))throw new Error(`twisty page: unknown turn ${e}`);return t?`${e}'`:e}function cr({key:e,shiftKey:t=!1,ctrlKey:r=!1,metaKey:n=!1,altKey:i=!1}){if(i)return null;if(r||n)return e.toLowerCase()==="z"&&!t?{undo:!0}:null;let s=lr.get(e.toLowerCase());return s?{move:Oe(s,t)}:null}var sr=["U","D","L","R","F","B"],ar={U:0,D:0,L:1,R:1,F:2,B:2},or=["","'","2"];function ur(e=25,t=Math.random){let r=[],n=-1;for(;r.length<e;){let i=sr[Math.floor(t()*sr.length)];ar[i]!==n&&(n=ar[i],r.push(i+or[Math.floor(t()*or.length)]))}return r.join(" ")}var Bi={ignorePuzzleOrientation:!0,ignoreCenterOrientation:!0},he=class{#e;#r;#t="";#i=[];#s=!1;#n=null;#a=null;constructor(t,r=()=>performance.now()){this.#e=t,this.#r=r}scramble(t){this.#o(t),this.#s=!0}reset(){this.#o("")}#o(t){this.#t=t,this.#i=[],this.#s=!1,this.#n=null,this.#a=null}setMoves(t){return this.#i=[...t],this.#s&&this.#n===null&&t.length>0&&(this.#n=this.#r()),!this.#s||!this.solved?!1:(this.#s=!1,this.#a=this.#r(),!0)}get moves(){return[...this.#i]}get count(){return this.#i.length}get scrambled(){return this.#s}get solved(){return this.#e.defaultPattern().applyAlg(this.#t).applyAlg(this.#i.join(" ")).experimentalIsSolved(Bi)}elapsed(){return this.#n===null?null:(this.#a??this.#r())-this.#n}};function Fe(e){let t=Math.floor(e/100),r=Math.floor(t/600),n=(t%600/10).toFixed(1);return r>0?`${r}:${n.padStart(4,"0")}`:n}var me="twisty-cube",dr="toybox.twisty-cube.help-seen",hr="toybox.twisty-cube.timer",Ui=/^[UDLRFBxyzMES]['2]?$/,qi=3e3;function mr({win:e,doc:t,cube:r,kpuzzle:n,storage:i,host:s,scrambleAlg:a=ur,now:l}){let c=new he(n,l),o=u=>{let x=t.querySelector(u);if(!x)throw new Error(`twisty page: no ${u}`);return x},m=o("#count"),d=o("#timer"),f=o("#timer-on"),v=o("#solved"),y=o("#help"),D=null,A=null;function C(u,x){for(let{family:qe,title:ge}of x){let G=t.createElement("span");G.className="turn",G.title=ge;let We=t.createElement("b");We.textContent=qe,G.append(We);for(let[pr,gr,Qe]of[[!1,"\u27F3","clockwise"],[!0,"\u27F2","counter-clockwise"]]){let re=Oe(qe,pr),j=t.createElement("button");j.type="button",j.textContent=gr,j.dataset.move=re,j.title=`${ge}, ${Qe} (${re})`,j.setAttribute("aria-label",`${re}: ${ge.split(": ")[1]}, ${Qe}`),j.addEventListener("click",()=>N(re)),G.append(j)}u.append(G)}}C(o("#faces"),Pe),C(o("#more"),Re);function N(u){if(!Ui.test(u))throw new Error(`twisty page: not a move this page makes: ${u}`);r.turn(u)}function M(){m.textContent=`Moves: ${c.count}`;let u=c.elapsed();d.hidden=!f.checked,d.textContent=u===null?c.scrambled?"0.0":"":Fe(u);let x=f.checked&&u!==null&&c.scrambled;x&&D===null&&(D=e.setInterval(M,100)),!x&&D!==null&&(e.clearInterval(D),D=null)}function pe(){let u=c.elapsed();v.textContent=`Solved! ${c.count} moves${f.checked&&u!==null?`, ${Fe(u)} s`:""}`,v.hidden=!1,e.clearTimeout(A),A=e.setTimeout(()=>{v.hidden=!0},qi),s?.postMessage({toy:me,type:"solved",moves:c.count,ms:u},"*")}r.onMoves(u=>{c.setMoves(u)&&pe(),M()});function Ve(){let u=a();c.scramble(u),v.hidden=!0,r.scramble(u),M()}function Be(){c.reset(),v.hidden=!0,r.reset(),M()}function te(u,{focus:x=!1}={}){y.hidden=!u,o("#help-button").setAttribute("aria-expanded",String(u)),u&&x&&o("#help-close").focus()}o("#undo").addEventListener("click",()=>r.undo()),o("#scramble").addEventListener("click",Ve),o("#reset").addEventListener("click",Be),o("#help-button").addEventListener("click",()=>te(y.hidden,{focus:!0})),o("#help-close").addEventListener("click",()=>te(!1)),f.checked=i.getItem(hr)!=="off",f.addEventListener("change",()=>{i.setItem(hr,f.checked?"on":"off"),M()}),o("#stage").addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("keydown",u=>{if(u.key==="Escape"&&!y.hidden){te(!1);return}if(u.repeat||u.target?.closest?.("input, textarea, select"))return;let x=cr(u);x&&(u.preventDefault(),x.undo?r.undo():N(x.move))});function Ue(u){switch(u.type){case"scramble":Ve();break;case"reset":Be();break;case"pause":r.pause();break;case"resume":break;case"move":N(u.move);break;case"undo":r.undo();break;default:throw new Error(`twisty page: unknown message ${u.type}`)}}return e.addEventListener("message",u=>{!s||u.source!==s||u.data?.toy!==me||Ue(u.data)}),i.getItem(dr)===null&&(i.setItem(dr,"1"),te(!0)),M(),{session:c,receive:Ue}}var Y=new URLSearchParams(location.search).get("theme");if(Y!==null&&Y!=="light"&&Y!=="dark")throw new Error(`twisty page: unknown theme ${Y}`);var Wi=Y?Y==="dark":matchMedia("(prefers-color-scheme: dark)").matches,b=new _({puzzle:"3x3x3",alg:"",background:"none",controlPanel:"none",hintFacelets:"none",tempoScale:2,visualization:"PG3D",experimentalMovePressInput:"basic"});b.style.width="100%";b.style.height="100%";document.querySelector("#stage").append(b);document.documentElement.dataset.theme=Wi?"dark":"light";var je=window.parent!==window;je&&document.body.classList.add("embedded");var Qi={turn:e=>b.experimentalAddMove(e),undo:()=>b.experimentalRemoveFinalChild(),scramble:e=>{b.experimentalSetupAlg=e,b.alg=""},reset:()=>{b.experimentalSetupAlg="",b.alg=""},pause:()=>b.pause(),onMoves:e=>b.experimentalModel.alg.addFreshListener(({alg:t})=>e([...t.childAlgNodes()].map(String)))},Hi=await b.experimentalModel.kpuzzle.get();mr({win:window,doc:document,cube:Qi,kpuzzle:Hi,storage:localStorage,host:je?window.parent:null});je&&window.parent.postMessage({toy:me,type:"ready"},"*");
