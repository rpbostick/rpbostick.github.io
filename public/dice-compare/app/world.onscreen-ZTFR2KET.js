import{$ as mi,A as te,B as hi,C as u,D as ie,E as Pe,F as je,G as F,H as v,I as se,J as Me,K as Ue,L as di,M as Qe,N as ci,O as ui,P as Z,Q as gt,R as fi,S as U,T as Ft,U as vt,V as Ke,W as pi,X as K,Y as qe,Z as X,_ as Be,a as k,aa as $,b as Ze,ba as Ve,c as Ce,ca as _i,d as ft,da as be,e as ri,ea as St,f as si,fa as gi,g as S,ga as $e,h as ue,ha as Nt,i as Fe,ia as Je,j as wt,ja as P,k as pt,ka as fe,l as Te,la as et,m as Ot,ma as Xe,n as Ie,na as De,o as mt,p as ai,q as ni,r as Ne,s as _t,t as Re,u as oi,v as ye,w as x,x as li,y as xe,z as R}from"./chunk-CDIIRXRP.js";import{a as vi}from"./chunk-7PQVMPHI.js";import"./chunk-IYWUY3VA.js";var Pi=Object.defineProperty,bi=(a,e,t)=>e in a?Pi(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Le=(a,e,t)=>(bi(a,typeof e!="symbol"?e+"":e,t),t),ii=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)},C=(a,e,t)=>(ii(a,e,"read from private field"),t?t.call(a):e.get(a)),J=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},re=(a,e,t,i)=>(ii(a,e,"write to private field"),i?i.call(a,t):e.set(a,t),t),tt=(a,e,t,i)=>({set _(s){re(a,e,s,t)},get _(){return C(a,e,i)}}),Di=(a,e,t)=>(ii(a,e,"access private method"),t),ht=class{constructor(e){if(this._keys=[],this._isDirty=!0,this._areLightsDirty=!0,this._areLightsDisposed=!1,this._areAttributesDirty=!0,this._areTexturesDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._arePrePassDirty=!0,this._areImageProcessingDirty=!0,this._normals=!1,this._uvs=!1,this._needNormals=!1,this._needUVs=!1,this._externalProperties=e,e)for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this._setDefaultValue(t)}get isDirty(){return this._isDirty}markAsProcessed(){this._isDirty=!1,this._areAttributesDirty=!1,this._areTexturesDirty=!1,this._areFresnelDirty=!1,this._areLightsDirty=!1,this._areLightsDisposed=!1,this._areMiscDirty=!1,this._arePrePassDirty=!1,this._areImageProcessingDirty=!1}markAsUnprocessed(){this._isDirty=!0}markAllAsDirty(){this._areTexturesDirty=!0,this._areAttributesDirty=!0,this._areLightsDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._areImageProcessingDirty=!0,this._isDirty=!0}markAsImageProcessingDirty(){this._areImageProcessingDirty=!0,this._isDirty=!0}markAsLightDirty(e=!1){this._areLightsDirty=!0,this._areLightsDisposed=this._areLightsDisposed||e,this._isDirty=!0}markAsAttributesDirty(){this._areAttributesDirty=!0,this._isDirty=!0}markAsTexturesDirty(){this._areTexturesDirty=!0,this._isDirty=!0}markAsFresnelDirty(){this._areFresnelDirty=!0,this._isDirty=!0}markAsMiscDirty(){this._areMiscDirty=!0,this._isDirty=!0}markAsPrePassDirty(){this._arePrePassDirty=!0,this._isDirty=!0}rebuild(){this._keys.length=0;for(let e of Object.keys(this))e[0]!=="_"&&this._keys.push(e);if(this._externalProperties)for(let e in this._externalProperties)this._keys.indexOf(e)===-1&&this._keys.push(e)}isEqual(e){if(this._keys.length!==e._keys.length)return!1;for(let t=0;t<this._keys.length;t++){let i=this._keys[t];if(this[i]!==e[i])return!1}return!0}cloneTo(e){this._keys.length!==e._keys.length&&(e._keys=this._keys.slice(0));for(let t=0;t<this._keys.length;t++){let i=this._keys[t];e[i]=this[i]}}reset(){this._keys.forEach(e=>this._setDefaultValue(e))}_setDefaultValue(e){var t,i,s,r,n;let o=(s=(i=(t=this._externalProperties)===null||t===void 0?void 0:t[e])===null||i===void 0?void 0:i.type)!==null&&s!==void 0?s:typeof this[e],h=(n=(r=this._externalProperties)===null||r===void 0?void 0:r[e])===null||n===void 0?void 0:n.default;switch(o){case"number":this[e]=h??0;break;case"string":this[e]=h??"";break;default:this[e]=h??!1;break}}toString(){let e="";for(let t=0;t<this._keys.length;t++){let i=this._keys[t],s=this[i];switch(typeof s){case"number":case"string":e+="#define "+i+" "+s+`
`;break;default:s&&(e+="#define "+i+`
`);break}}return e}};function Li(a){return new X(a,!0,{preserveDrawingBuffer:!0,stencil:!0})}var de=class{getDescription(){return""}apply(e,t){return!0}constructor(e=0){this.priority=e}},st=class extends de{getDescription(){return"Reducing render target texture size to "+this.maximumSize}constructor(e=0,t=1024,i=.5){super(e),this.priority=e,this.maximumSize=t,this.step=i}apply(e,t){let i=!0;for(let s=0;s<e.textures.length;s++){let r=e.textures[s];if(!r.canRescale||r.getContext)continue;let n=r.getSize();Math.max(n.width,n.height)>this.maximumSize&&(r.scale(this.step),i=!1)}return i}},At=class extends de{getDescription(){return"Setting hardware scaling level to "+this._currentScale}constructor(e=0,t=2,i=.25){super(e),this.priority=e,this.maximumScale=t,this.step=i,this._currentScale=-1,this._directionOffset=1}apply(e,t){return this._currentScale===-1&&(this._currentScale=e.getEngine().getHardwareScalingLevel(),this._currentScale>this.maximumScale&&(this._directionOffset=-1)),this._currentScale+=this._directionOffset*this.step,e.getEngine().setHardwareScalingLevel(this._currentScale),this._directionOffset===1?this._currentScale>=this.maximumScale:this._currentScale<=this.maximumScale}},at=class extends de{getDescription(){return"Turning shadows on/off"}apply(e,t){return e.shadowsEnabled=t.isInImprovementMode,!0}},nt=class extends de{getDescription(){return"Turning post-processes on/off"}apply(e,t){return e.postProcessesEnabled=t.isInImprovementMode,!0}},ot=class extends de{getDescription(){return"Turning lens flares on/off"}apply(e,t){return e.lensFlaresEnabled=t.isInImprovementMode,!0}},Bt=class extends de{getDescription(){return this.onGetDescription?this.onGetDescription():"Running user defined callback"}apply(e,t){return this.onApply?this.onApply(e,t):!0}},lt=class extends de{getDescription(){return"Turning particles on/off"}apply(e,t){return e.particlesEnabled=t.isInImprovementMode,!0}},Ct=class extends de{getDescription(){return"Turning render targets off"}apply(e,t){return e.renderTargetsEnabled=t.isInImprovementMode,!0}},ke=class a extends de{constructor(){super(...arguments),this._canBeMerged=e=>{if(!(e instanceof Xe))return!1;let t=e;return!(t.isDisposed()||!t.isVisible||!t.isEnabled()||t.instances.length>0||t.skeleton||t.hasLODLevels||t.getTotalVertices()===0)}}static get UpdateSelectionTree(){return a._UpdateSelectionTree}static set UpdateSelectionTree(e){a._UpdateSelectionTree=e}getDescription(){return"Merging similar meshes together"}apply(e,t,i){let s=e.meshes.slice(0),r=s.length;for(let o=0;o<r;o++){let h=new Array,l=s[o];if(this._canBeMerged(l)){h.push(l);for(let c=o+1;c<r;c++){let d=s[c];this._canBeMerged(d)&&d.material===l.material&&d.checkCollisions===l.checkCollisions&&(h.push(d),r--,s.splice(c,1),c--)}h.length<2||Xe.MergeMeshes(h,void 0,!0)}}let n=e;return n.createOrUpdateSelectionOctree&&(i!=null?i&&n.createOrUpdateSelectionOctree():a.UpdateSelectionTree&&n.createOrUpdateSelectionOctree()),!0}};ke._UpdateSelectionTree=!1;var dt=class a{constructor(e=60,t=2e3){this.targetFrameRate=e,this.trackerDuration=t,this.optimizations=new Array}addOptimization(e){return this.optimizations.push(e),this}addCustomOptimization(e,t,i=0){let s=new Bt(i);return s.onApply=e,s.onGetDescription=t,this.optimizations.push(s),this}static LowDegradationAllowed(e){let t=new a(e),i=0;return t.addOptimization(new ke(i)),t.addOptimization(new at(i)),t.addOptimization(new ot(i)),i++,t.addOptimization(new nt(i)),t.addOptimization(new lt(i)),i++,t.addOptimization(new st(i,1024)),t}static ModerateDegradationAllowed(e){let t=new a(e),i=0;return t.addOptimization(new ke(i)),t.addOptimization(new at(i)),t.addOptimization(new ot(i)),i++,t.addOptimization(new nt(i)),t.addOptimization(new lt(i)),i++,t.addOptimization(new st(i,512)),i++,t.addOptimization(new Ct(i)),i++,t.addOptimization(new At(i,2)),t}static HighDegradationAllowed(e){let t=new a(e),i=0;return t.addOptimization(new ke(i)),t.addOptimization(new at(i)),t.addOptimization(new ot(i)),i++,t.addOptimization(new nt(i)),t.addOptimization(new lt(i)),i++,t.addOptimization(new st(i,256)),i++,t.addOptimization(new Ct(i)),i++,t.addOptimization(new At(i,4)),t}},Vt=class a{get isInImprovementMode(){return this._improvementMode}set isInImprovementMode(e){this._improvementMode=e}get currentPriorityLevel(){return this._currentPriorityLevel}get currentFrameRate(){return this._currentFrameRate}get targetFrameRate(){return this._targetFrameRate}set targetFrameRate(e){this._targetFrameRate=e}get trackerDuration(){return this._trackerDuration}set trackerDuration(e){this._trackerDuration=e}get optimizations(){return this._options.optimizations}constructor(e,t,i=!0,s=!1){if(this._isRunning=!1,this._currentPriorityLevel=0,this._targetFrameRate=60,this._trackerDuration=2e3,this._currentFrameRate=0,this._improvementMode=!1,this.onSuccessObservable=new k,this.onNewOptimizationAppliedObservable=new k,this.onFailureObservable=new k,t?this._options=t:this._options=new dt,this._options.targetFrameRate&&(this._targetFrameRate=this._options.targetFrameRate),this._options.trackerDuration&&(this._trackerDuration=this._options.trackerDuration),i){let r=0;for(let n of this._options.optimizations)n.priority=r++}this._improvementMode=s,this._scene=e||ft.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(()=>{this._sceneDisposeObserver=null,this.dispose()})}stop(){this._isRunning=!1}reset(){this._currentPriorityLevel=0}start(){this._isRunning||(this._isRunning=!0,this._scene.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)}))}_checkCurrentState(){if(!this._isRunning)return;let e=this._scene,t=this._options;if(this._currentFrameRate=Math.round(e.getEngine().getFps()),this._improvementMode&&this._currentFrameRate<=this._targetFrameRate||!this._improvementMode&&this._currentFrameRate>=this._targetFrameRate){this._isRunning=!1,this.onSuccessObservable.notifyObservers(this);return}let i=!0,s=!0;for(let r=0;r<t.optimizations.length;r++){let n=t.optimizations[r];n.priority===this._currentPriorityLevel&&(s=!1,i=i&&n.apply(e,this),this.onNewOptimizationAppliedObservable.notifyObservers(n))}if(s){this._isRunning=!1,this.onFailureObservable.notifyObservers(this);return}i&&this._currentPriorityLevel++,e.executeWhenReady(()=>{setTimeout(()=>{this._checkCurrentState()},this._trackerDuration)})}dispose(){this.stop(),this.onSuccessObservable.clear(),this.onFailureObservable.clear(),this.onNewOptimizationAppliedObservable.clear(),this._sceneDisposeObserver&&this._scene.onDisposeObservable.remove(this._sceneDisposeObserver)}static OptimizeAsync(e,t,i,s){let r=new a(e,t||dt.ModerateDegradationAllowed(),!1);return i&&r.onSuccessObservable.add(()=>{i()}),s&&r.onFailureObservable.add(()=>{s()}),r.start(),r}};function wi(a){let{engine:e}=a,t=new qe(e);t.clearColor=new Pe(0,0,0,0),t.pointerMovePredicate=()=>!1,t.pointerDownPredicate=()=>!1,t.pointerUpPredicate=()=>!1,t.clearCachedVertexData(),t.themeData={};let i=dt.LowDegradationAllowed();return i.optimizations=i.optimizations.splice(1),i.targetFrameRate=60,Vt.OptimizeAsync(t,i),t}var Se=class a extends ${constructor(e,t,i,s=!0){super(e,t,i,s),this._tmpUpVector=x.Zero(),this._tmpTargetVector=x.Zero(),this.cameraDirection=new x(0,0,0),this.cameraRotation=new ye(0,0),this.ignoreParentScaling=!1,this.updateUpVectorFromRotation=!1,this._tmpQuaternion=new xe,this.rotation=new x(0,0,0),this.speed=2,this.noRotationConstraint=!1,this.invertRotation=!1,this.inverseRotationSpeed=.2,this.lockedTarget=null,this._currentTarget=x.Zero(),this._initialFocalDistance=1,this._viewMatrix=R.Zero(),this._camMatrix=R.Zero(),this._cameraTransformMatrix=R.Zero(),this._cameraRotationMatrix=R.Zero(),this._referencePoint=new x(0,0,1),this._transformedReferencePoint=x.Zero(),this._defaultUp=x.Up(),this._cachedRotationZ=0,this._cachedQuaternionRotationZ=0}getFrontPosition(e){this.getWorldMatrix();let t=this.getTarget().subtract(this.position);return t.normalize(),t.scaleInPlace(e),this.globalPosition.add(t)}_getLockedTargetPosition(){if(!this.lockedTarget)return null;if(this.lockedTarget.absolutePosition){let e=this.lockedTarget;e.computeWorldMatrix().getTranslationToRef(e.absolutePosition)}return this.lockedTarget.absolutePosition||this.lockedTarget}storeState(){return this._storedPosition=this.position.clone(),this._storedRotation=this.rotation.clone(),this.rotationQuaternion&&(this._storedRotationQuaternion=this.rotationQuaternion.clone()),super.storeState()}_restoreStateValues(){return super._restoreStateValues()?(this.position=this._storedPosition.clone(),this.rotation=this._storedRotation.clone(),this.rotationQuaternion&&(this.rotationQuaternion=this._storedRotationQuaternion.clone()),this.cameraDirection.copyFromFloats(0,0,0),this.cameraRotation.copyFromFloats(0,0),!0):!1}_initCache(){super._initCache(),this._cache.lockedTarget=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotation=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotationQuaternion=new xe(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}_updateCache(e){e||super._updateCache();let t=this._getLockedTargetPosition();t?this._cache.lockedTarget?this._cache.lockedTarget.copyFrom(t):this._cache.lockedTarget=t.clone():this._cache.lockedTarget=null,this._cache.rotation.copyFrom(this.rotation),this.rotationQuaternion&&this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)}_isSynchronizedViewMatrix(){if(!super._isSynchronizedViewMatrix())return!1;let e=this._getLockedTargetPosition();return(this._cache.lockedTarget?this._cache.lockedTarget.equals(e):!e)&&(this.rotationQuaternion?this.rotationQuaternion.equals(this._cache.rotationQuaternion):this._cache.rotation.equals(this.rotation))}_computeLocalCameraSpeed(){let e=this.getEngine();return this.speed*Math.sqrt(e.getDeltaTime()/(e.getFps()*100))}setTarget(e){this.upVector.normalize(),this._initialFocalDistance=e.subtract(this.position).length(),this.position.z===e.z&&(this.position.z+=Re),this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance),R.LookAtLHToRef(this.position,e,this._defaultUp,this._camMatrix),this._camMatrix.invert(),this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);let t=e.subtract(this.position);t.x>=0?this.rotation.y=-Math.atan(t.z/t.x)+Math.PI/2:this.rotation.y=-Math.atan(t.z/t.x)-Math.PI/2,this.rotation.z=0,isNaN(this.rotation.x)&&(this.rotation.x=0),isNaN(this.rotation.y)&&(this.rotation.y=0),isNaN(this.rotation.z)&&(this.rotation.z=0),this.rotationQuaternion&&xe.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}get target(){return this.getTarget()}set target(e){this.setTarget(e)}getTarget(){return this._currentTarget}_decideIfNeedsToMove(){return Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0}_updatePosition(){if(this.parent){this.parent.getWorldMatrix().invertToRef(te.Matrix[0]),x.TransformNormalToRef(this.cameraDirection,te.Matrix[0],te.Vector3[0]),this.position.addInPlace(te.Vector3[0]);return}this.position.addInPlace(this.cameraDirection)}_checkInputs(){let e=this.invertRotation?-this.inverseRotationSpeed:1,t=this._decideIfNeedsToMove(),i=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;t&&this._updatePosition(),i&&(this.rotationQuaternion&&this.rotationQuaternion.toEulerAnglesToRef(this.rotation),this.rotation.x+=this.cameraRotation.x*e,this.rotation.y+=this.cameraRotation.y*e,this.noRotationConstraint||(this.rotation.x>1.570796&&(this.rotation.x=1.570796),this.rotation.x<-1.570796&&(this.rotation.x=-1.570796)),this.rotationQuaternion&&this.rotation.lengthSquared()&&xe.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)),t&&(Math.abs(this.cameraDirection.x)<this.speed*Re&&(this.cameraDirection.x=0),Math.abs(this.cameraDirection.y)<this.speed*Re&&(this.cameraDirection.y=0),Math.abs(this.cameraDirection.z)<this.speed*Re&&(this.cameraDirection.z=0),this.cameraDirection.scaleInPlace(this.inertia)),i&&(Math.abs(this.cameraRotation.x)<this.speed*Re&&(this.cameraRotation.x=0),Math.abs(this.cameraRotation.y)<this.speed*Re&&(this.cameraRotation.y=0),this.cameraRotation.scaleInPlace(this.inertia)),super._checkInputs()}_updateCameraRotationMatrix(){this.rotationQuaternion?this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix):R.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix)}_rotateUpVectorWithCameraRotationMatrix(){return x.TransformNormalToRef(this._defaultUp,this._cameraRotationMatrix,this.upVector),this}_getViewMatrix(){return this.lockedTarget&&this.setTarget(this._getLockedTargetPosition()),this._updateCameraRotationMatrix(),this.rotationQuaternion&&this._cachedQuaternionRotationZ!=this.rotationQuaternion.z?(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedQuaternionRotationZ=this.rotationQuaternion.z):this._cachedRotationZ!==this.rotation.z&&(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedRotationZ=this.rotation.z),x.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint),this.position.addToRef(this._transformedReferencePoint,this._currentTarget),this.updateUpVectorFromRotation&&(this.rotationQuaternion?St.Y.rotateByQuaternionToRef(this.rotationQuaternion,this.upVector):(xe.FromEulerVectorToRef(this.rotation,this._tmpQuaternion),St.Y.rotateByQuaternionToRef(this._tmpQuaternion,this.upVector))),this._computeViewMatrix(this.position,this._currentTarget,this.upVector),this._viewMatrix}_computeViewMatrix(e,t,i){if(this.ignoreParentScaling){if(this.parent){let s=this.parent.getWorldMatrix();x.TransformCoordinatesToRef(e,s,this._globalPosition),x.TransformCoordinatesToRef(t,s,this._tmpTargetVector),x.TransformNormalToRef(i,s,this._tmpUpVector),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e),this._tmpTargetVector.copyFrom(t),this._tmpUpVector.copyFrom(i);this.getScene().useRightHandedSystem?R.LookAtRHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix):R.LookAtLHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix);return}if(this.getScene().useRightHandedSystem?R.LookAtRHToRef(e,t,i,this._viewMatrix):R.LookAtLHToRef(e,t,i,this._viewMatrix),this.parent){let s=this.parent.getWorldMatrix();this._viewMatrix.invert(),this._viewMatrix.multiplyToRef(s,this._viewMatrix),this._viewMatrix.getTranslationToRef(this._globalPosition),this._viewMatrix.invert(),this._markSyncedWithParent()}else this._globalPosition.copyFrom(e)}createRigCamera(e,t){if(this.cameraRigMode!==$.RIG_MODE_NONE){let i=new a(e,this.position.clone(),this.getScene());return i.isRigCamera=!0,i.rigParent=this,(this.cameraRigMode===$.RIG_MODE_VR||this.cameraRigMode===$.RIG_MODE_WEBVR)&&(this.rotationQuaternion||(this.rotationQuaternion=new xe),i._cameraRigParams={},i.rotationQuaternion=new xe),i.mode=this.mode,i.orthoLeft=this.orthoLeft,i.orthoRight=this.orthoRight,i.orthoTop=this.orthoTop,i.orthoBottom=this.orthoBottom,i}return null}_updateRigCameras(){let e=this._rigCameras[0],t=this._rigCameras[1];switch(this.computeWorldMatrix(),this.cameraRigMode){case $.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case $.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case $.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:case $.RIG_MODE_STEREOSCOPIC_OVERUNDER:case $.RIG_MODE_STEREOSCOPIC_INTERLACED:{let i=this.cameraRigMode===$.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?1:-1,s=this.cameraRigMode===$.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?-1:1;this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*i,e),this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*s,t);break}case $.RIG_MODE_VR:e.rotationQuaternion?(e.rotationQuaternion.copyFrom(this.rotationQuaternion),t.rotationQuaternion.copyFrom(this.rotationQuaternion)):(e.rotation.copyFrom(this.rotation),t.rotation.copyFrom(this.rotation)),e.position.copyFrom(this.position),t.position.copyFrom(this.position);break}super._updateRigCameras()}_getRigCamPositionAndTarget(e,t){this.getTarget().subtractToRef(this.position,a._TargetFocalPoint),a._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);let i=a._TargetFocalPoint.addInPlace(this.position);R.TranslationToRef(-i.x,-i.y,-i.z,a._TargetTransformMatrix),a._TargetTransformMatrix.multiplyToRef(R.RotationAxis(t.upVector,e),a._RigCamTransformMatrix),R.TranslationToRef(i.x,i.y,i.z,a._TargetTransformMatrix),a._RigCamTransformMatrix.multiplyToRef(a._TargetTransformMatrix,a._RigCamTransformMatrix),x.TransformCoordinatesToRef(this.position,a._RigCamTransformMatrix,t.position),t.setTarget(i)}getClassName(){return"TargetCamera"}};Se._RigCamTransformMatrix=new R;Se._TargetTransformMatrix=new R;Se._TargetFocalPoint=new x;u([Qe()],Se.prototype,"rotation",void 0);u([v()],Se.prototype,"speed",void 0);u([ci("lockedTargetId")],Se.prototype,"lockedTarget",void 0);function Oi(a){let{scene:e}=a,t,i=36.5;return t=new Se("TargetCamera1",new x(0,i,0),e),t.fov=.25,t.minZ=5,t.maxZ=i+1,t.setTarget(x.Zero()),t}var O=class a extends Be{get range(){return this._range}set range(e){this._range=e,this._inverseSquaredRange=1/(this.range*this.range)}get intensityMode(){return this._intensityMode}set intensityMode(e){this._intensityMode=e,this._computePhotometricScale()}get radius(){return this._radius}set radius(e){this._radius=e,this._computePhotometricScale()}get shadowEnabled(){return this._shadowEnabled}set shadowEnabled(e){this._shadowEnabled!==e&&(this._shadowEnabled=e,this._markMeshesAsLightDirty())}get includedOnlyMeshes(){return this._includedOnlyMeshes}set includedOnlyMeshes(e){this._includedOnlyMeshes=e,this._hookArrayForIncludedOnly(e)}get excludedMeshes(){return this._excludedMeshes}set excludedMeshes(e){this._excludedMeshes=e,this._hookArrayForExcluded(e)}get excludeWithLayerMask(){return this._excludeWithLayerMask}set excludeWithLayerMask(e){this._excludeWithLayerMask=e,this._resyncMeshes()}get includeOnlyWithLayerMask(){return this._includeOnlyWithLayerMask}set includeOnlyWithLayerMask(e){this._includeOnlyWithLayerMask=e,this._resyncMeshes()}get lightmapMode(){return this._lightmapMode}set lightmapMode(e){this._lightmapMode!==e&&(this._lightmapMode=e,this._markMeshesAsLightDirty())}constructor(e,t){super(e,t),this.diffuse=new ie(1,1,1),this.specular=new ie(1,1,1),this.falloffType=a.FALLOFF_DEFAULT,this.intensity=1,this._range=Number.MAX_VALUE,this._inverseSquaredRange=0,this._photometricScale=1,this._intensityMode=a.INTENSITYMODE_AUTOMATIC,this._radius=1e-5,this.renderPriority=0,this._shadowEnabled=!0,this._excludeWithLayerMask=0,this._includeOnlyWithLayerMask=0,this._lightmapMode=0,this._shadowGenerators=null,this._excludedMeshesIds=new Array,this._includedOnlyMeshesIds=new Array,this._isLight=!0,this.getScene().addLight(this),this._uniformBuffer=new fi(this.getScene().getEngine(),void 0,void 0,e),this._buildUniformLayout(),this.includedOnlyMeshes=new Array,this.excludedMeshes=new Array,this._resyncMeshes()}transferTexturesToEffect(e,t){return this}_bindLight(e,t,i,s,r=!0){var n;let o=e.toString(),h=!1;if(this._uniformBuffer.bindToEffect(i,"Light"+o),this._renderId!==t.getRenderId()||this._lastUseSpecular!==s||!this._uniformBuffer.useUbo){this._renderId=t.getRenderId(),this._lastUseSpecular=s;let l=this.getScaledIntensity();this.transferToEffect(i,o),this.diffuse.scaleToRef(l,je.Color3[0]),this._uniformBuffer.updateColor4("vLightDiffuse",je.Color3[0],this.range,o),s&&(this.specular.scaleToRef(l,je.Color3[1]),this._uniformBuffer.updateColor4("vLightSpecular",je.Color3[1],this.radius,o)),h=!0}if(this.transferTexturesToEffect(i,o),t.shadowsEnabled&&this.shadowEnabled&&r){let l=(n=this.getShadowGenerator(t.activeCamera))!==null&&n!==void 0?n:this.getShadowGenerator();l&&(l.bindShadowLight(o,i),h=!0)}h?this._uniformBuffer.update():this._uniformBuffer.bindUniformBuffer()}getClassName(){return"Light"}toString(e){let t="Name: "+this.name;if(t+=", type: "+["Point","Directional","Spot","Hemispheric"][this.getTypeID()],this.animations)for(let i=0;i<this.animations.length;i++)t+=", animation[0]: "+this.animations[i].toString(e);return t}_syncParentEnabledState(){super._syncParentEnabledState(),this.isDisposed()||this._resyncMeshes()}setEnabled(e){super.setEnabled(e),this._resyncMeshes()}getShadowGenerator(e=null){var t;return this._shadowGenerators===null?null:(t=this._shadowGenerators.get(e))!==null&&t!==void 0?t:null}getShadowGenerators(){return this._shadowGenerators}getAbsolutePosition(){return x.Zero()}canAffectMesh(e){return e?!(this.includedOnlyMeshes&&this.includedOnlyMeshes.length>0&&this.includedOnlyMeshes.indexOf(e)===-1||this.excludedMeshes&&this.excludedMeshes.length>0&&this.excludedMeshes.indexOf(e)!==-1||this.includeOnlyWithLayerMask!==0&&!(this.includeOnlyWithLayerMask&e.layerMask)||this.excludeWithLayerMask!==0&&this.excludeWithLayerMask&e.layerMask):!0}dispose(e,t=!1){if(this._shadowGenerators){let i=this._shadowGenerators.values();for(let s=i.next();s.done!==!0;s=i.next())s.value.dispose();this._shadowGenerators=null}if(this.getScene().stopAnimation(this),this._parentContainer){let i=this._parentContainer.lights.indexOf(this);i>-1&&this._parentContainer.lights.splice(i,1),this._parentContainer=null}for(let i of this.getScene().meshes)i._removeLightSource(this,!0);this._uniformBuffer.dispose(),this.getScene().removeLight(this),super.dispose(e,t)}getTypeID(){return 0}getScaledIntensity(){return this._photometricScale*this.intensity}clone(e,t=null){let i=a.GetConstructorFromName(this.getTypeID(),e,this.getScene());if(!i)return null;let s=Z.Clone(i,this);return e&&(s.name=e),t&&(s.parent=t),s.setEnabled(this.isEnabled()),this.onClonedObservable.notifyObservers(s),s}serialize(){let e=Z.Serialize(this);return e.uniqueId=this.uniqueId,e.type=this.getTypeID(),this.parent&&this.parent._serializeAsParent(e),this.excludedMeshes.length>0&&(e.excludedMeshesIds=[],this.excludedMeshes.forEach(t=>{e.excludedMeshesIds.push(t.id)})),this.includedOnlyMeshes.length>0&&(e.includedOnlyMeshesIds=[],this.includedOnlyMeshes.forEach(t=>{e.includedOnlyMeshesIds.push(t.id)})),Z.AppendSerializedAnimations(this,e),e.ranges=this.serializeAnimationRanges(),e.isEnabled=this.isEnabled(),e}static GetConstructorFromName(e,t,i){return Be.Construct("Light_Type_"+e,t,i)||null}static Parse(e,t){let i=a.GetConstructorFromName(e.type,e.name,t);if(!i)return null;let s=Z.Parse(i,e,t);if(e.excludedMeshesIds&&(s._excludedMeshesIds=e.excludedMeshesIds),e.includedOnlyMeshesIds&&(s._includedOnlyMeshesIds=e.includedOnlyMeshesIds),e.parentId!==void 0&&(s._waitingParentId=e.parentId),e.parentInstanceIndex!==void 0&&(s._waitingParentInstanceIndex=e.parentInstanceIndex),e.falloffType!==void 0&&(s.falloffType=e.falloffType),e.lightmapMode!==void 0&&(s.lightmapMode=e.lightmapMode),e.animations){for(let r=0;r<e.animations.length;r++){let n=e.animations[r],o=mt("BABYLON.Animation");o&&s.animations.push(o.Parse(n))}Be.ParseAnimationRanges(s,e,t)}return e.autoAnimate&&t.beginAnimation(s,e.autoAnimateFrom,e.autoAnimateTo,e.autoAnimateLoop,e.autoAnimateSpeed||1),e.isEnabled!==void 0&&s.setEnabled(e.isEnabled),s}_hookArrayForExcluded(e){let t=e.push;e.push=(...s)=>{let r=t.apply(e,s);for(let n of s)n._resyncLightSource(this);return r};let i=e.splice;e.splice=(s,r)=>{let n=i.apply(e,[s,r]);for(let o of n)o._resyncLightSource(this);return n};for(let s of e)s._resyncLightSource(this)}_hookArrayForIncludedOnly(e){let t=e.push;e.push=(...s)=>{let r=t.apply(e,s);return this._resyncMeshes(),r};let i=e.splice;e.splice=(s,r)=>{let n=i.apply(e,[s,r]);return this._resyncMeshes(),n},this._resyncMeshes()}_resyncMeshes(){for(let e of this.getScene().meshes)e._resyncLightSource(this)}_markMeshesAsLightDirty(){for(let e of this.getScene().meshes)e.lightSources.indexOf(this)!==-1&&e._markSubMeshesAsLightDirty()}_computePhotometricScale(){this._photometricScale=this._getPhotometricScale(),this.getScene().resetCachedMaterial()}_getPhotometricScale(){let e=0,t=this.getTypeID(),i=this.intensityMode;switch(i===a.INTENSITYMODE_AUTOMATIC&&(t===a.LIGHTTYPEID_DIRECTIONALLIGHT?i=a.INTENSITYMODE_ILLUMINANCE:i=a.INTENSITYMODE_LUMINOUSINTENSITY),t){case a.LIGHTTYPEID_POINTLIGHT:case a.LIGHTTYPEID_SPOTLIGHT:switch(i){case a.INTENSITYMODE_LUMINOUSPOWER:e=1/(4*Math.PI);break;case a.INTENSITYMODE_LUMINOUSINTENSITY:e=1;break;case a.INTENSITYMODE_LUMINANCE:e=this.radius*this.radius;break}break;case a.LIGHTTYPEID_DIRECTIONALLIGHT:switch(i){case a.INTENSITYMODE_ILLUMINANCE:e=1;break;case a.INTENSITYMODE_LUMINANCE:{let s=this.radius;s=Math.max(s,.001),e=2*Math.PI*(1-Math.cos(s));break}}break;case a.LIGHTTYPEID_HEMISPHERICLIGHT:e=1;break}return e}_reorderLightsInScene(){let e=this.getScene();this._renderPriority!=0&&(e.requireLightSorting=!0),this.getScene().sortLightsByPriority()}};O.FALLOFF_DEFAULT=K.FALLOFF_DEFAULT;O.FALLOFF_PHYSICAL=K.FALLOFF_PHYSICAL;O.FALLOFF_GLTF=K.FALLOFF_GLTF;O.FALLOFF_STANDARD=K.FALLOFF_STANDARD;O.LIGHTMAP_DEFAULT=K.LIGHTMAP_DEFAULT;O.LIGHTMAP_SPECULAR=K.LIGHTMAP_SPECULAR;O.LIGHTMAP_SHADOWSONLY=K.LIGHTMAP_SHADOWSONLY;O.INTENSITYMODE_AUTOMATIC=K.INTENSITYMODE_AUTOMATIC;O.INTENSITYMODE_LUMINOUSPOWER=K.INTENSITYMODE_LUMINOUSPOWER;O.INTENSITYMODE_LUMINOUSINTENSITY=K.INTENSITYMODE_LUMINOUSINTENSITY;O.INTENSITYMODE_ILLUMINANCE=K.INTENSITYMODE_ILLUMINANCE;O.INTENSITYMODE_LUMINANCE=K.INTENSITYMODE_LUMINANCE;O.LIGHTTYPEID_POINTLIGHT=K.LIGHTTYPEID_POINTLIGHT;O.LIGHTTYPEID_DIRECTIONALLIGHT=K.LIGHTTYPEID_DIRECTIONALLIGHT;O.LIGHTTYPEID_SPOTLIGHT=K.LIGHTTYPEID_SPOTLIGHT;O.LIGHTTYPEID_HEMISPHERICLIGHT=K.LIGHTTYPEID_HEMISPHERICLIGHT;u([Me()],O.prototype,"diffuse",void 0);u([Me()],O.prototype,"specular",void 0);u([v()],O.prototype,"falloffType",void 0);u([v()],O.prototype,"intensity",void 0);u([v()],O.prototype,"range",null);u([v()],O.prototype,"intensityMode",null);u([v()],O.prototype,"radius",null);u([v()],O.prototype,"_renderPriority",void 0);u([F("_reorderLightsInScene")],O.prototype,"renderPriority",void 0);u([v("shadowEnabled")],O.prototype,"_shadowEnabled",void 0);u([v("excludeWithLayerMask")],O.prototype,"_excludeWithLayerMask",void 0);u([v("includeOnlyWithLayerMask")],O.prototype,"_includeOnlyWithLayerMask",void 0);u([v("lightmapMode")],O.prototype,"_lightmapMode",void 0);var we=class extends O{constructor(){super(...arguments),this._needProjectionMatrixCompute=!0}_setPosition(e){this._position=e}get position(){return this._position}set position(e){this._setPosition(e)}_setDirection(e){this._direction=e}get direction(){return this._direction}set direction(e){this._setDirection(e)}get shadowMinZ(){return this._shadowMinZ}set shadowMinZ(e){this._shadowMinZ=e,this.forceProjectionMatrixCompute()}get shadowMaxZ(){return this._shadowMaxZ}set shadowMaxZ(e){this._shadowMaxZ=e,this.forceProjectionMatrixCompute()}computeTransformedInformation(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=x.Zero()),x.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=x.Zero()),x.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1}getDepthScale(){return 50}getShadowDirection(e){return this.transformedDirection?this.transformedDirection:this.direction}getAbsolutePosition(){return this.transformedPosition?this.transformedPosition:this.position}setDirectionToTarget(e){return this.direction=x.Normalize(e.subtract(this.position)),this.direction}getRotation(){this.direction.normalize();let e=x.Cross(this.direction,St.Y),t=x.Cross(e,this.direction);return x.RotationFromAxis(e,t,this.direction)}needCube(){return!1}needProjectionMatrixCompute(){return this._needProjectionMatrixCompute}forceProjectionMatrixCompute(){this._needProjectionMatrixCompute=!0}_initCache(){super._initCache(),this._cache.position=x.Zero()}_isSynchronized(){return!!this._cache.position.equals(this.position)}computeWorldMatrix(e){return!e&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=R.Identity()),R.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)}getDepthMinZ(e){return this.shadowMinZ!==void 0?this.shadowMinZ:e.minZ}getDepthMaxZ(e){return this.shadowMaxZ!==void 0?this.shadowMaxZ:e.maxZ}setShadowProjectionMatrix(e,t,i){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(t,i,e):this._setDefaultShadowProjectionMatrix(e,t,i),this}_syncParentEnabledState(){super._syncParentEnabledState(),(!this.parent||!this.parent.getWorldMatrix)&&(this.transformedPosition=null,this.transformedDirection=null)}};u([Qe()],we.prototype,"position",null);u([Qe()],we.prototype,"direction",null);u([v()],we.prototype,"shadowMinZ",null);u([v()],we.prototype,"shadowMaxZ",null);Be.AddNodeConstructor("Light_Type_1",(a,e)=>()=>new ne(a,x.Zero(),e));var ne=class extends we{get shadowFrustumSize(){return this._shadowFrustumSize}set shadowFrustumSize(e){this._shadowFrustumSize=e,this.forceProjectionMatrixCompute()}get shadowOrthoScale(){return this._shadowOrthoScale}set shadowOrthoScale(e){this._shadowOrthoScale=e,this.forceProjectionMatrixCompute()}get orthoLeft(){return this._orthoLeft}set orthoLeft(e){this._orthoLeft=e}get orthoRight(){return this._orthoRight}set orthoRight(e){this._orthoRight=e}get orthoTop(){return this._orthoTop}set orthoTop(e){this._orthoTop=e}get orthoBottom(){return this._orthoBottom}set orthoBottom(e){this._orthoBottom=e}constructor(e,t,i){super(e,i),this._shadowFrustumSize=0,this._shadowOrthoScale=.1,this.autoUpdateExtends=!0,this.autoCalcShadowZBounds=!1,this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE,this.position=t.scale(-1),this.direction=t}getClassName(){return"DirectionalLight"}getTypeID(){return O.LIGHTTYPEID_DIRECTIONALLIGHT}_setDefaultShadowProjectionMatrix(e,t,i){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(e):this._setDefaultAutoExtendShadowProjectionMatrix(e,t,i)}_setDefaultFixedFrustumShadowProjectionMatrix(e){let t=this.getScene().activeCamera;t&&R.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:t.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:t.maxZ,e,this.getScene().getEngine().isNDCHalfZRange)}_setDefaultAutoExtendShadowProjectionMatrix(e,t,i){let s=this.getScene().activeCamera;if(!s)return;if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){let c=x.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;let d=Number.MAX_VALUE,f=Number.MIN_VALUE;for(let p=0;p<i.length;p++){let g=i[p];if(!g)continue;let _=g.getBoundingInfo().boundingBox;for(let m=0;m<_.vectorsWorld.length;m++)x.TransformCoordinatesToRef(_.vectorsWorld[m],t,c),c.x<this._orthoLeft&&(this._orthoLeft=c.x),c.y<this._orthoBottom&&(this._orthoBottom=c.y),c.x>this._orthoRight&&(this._orthoRight=c.x),c.y>this._orthoTop&&(this._orthoTop=c.y),this.autoCalcShadowZBounds&&(c.z<d&&(d=c.z),c.z>f&&(f=c.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=d,this._shadowMaxZ=f)}let r=this._orthoRight-this._orthoLeft,n=this._orthoTop-this._orthoBottom,o=this.shadowMinZ!==void 0?this.shadowMinZ:s.minZ,h=this.shadowMaxZ!==void 0?this.shadowMaxZ:s.maxZ,l=this.getScene().getEngine().useReverseDepthBuffer;R.OrthoOffCenterLHToRef(this._orthoLeft-r*this.shadowOrthoScale,this._orthoRight+r*this.shadowOrthoScale,this._orthoBottom-n*this.shadowOrthoScale,this._orthoTop+n*this.shadowOrthoScale,l?h:o,l?o:h,e,this.getScene().getEngine().isNDCHalfZRange)}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}transferToEffect(e,t){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,t),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,t),this)}transferToNodeMaterialEffect(e,t){return this.computeTransformedInformation()?(e.setFloat3(t,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(e.setFloat3(t,this.direction.x,this.direction.y,this.direction.z),this)}getDepthMinZ(e){let t=this._scene.getEngine();return!t.useReverseDepthBuffer&&t.isNDCHalfZRange?0:1}getDepthMaxZ(e){let t=this._scene.getEngine();return t.useReverseDepthBuffer&&t.isNDCHalfZRange?0:1}prepareLightSpecificDefines(e,t){e["DIRLIGHT"+t]=!0}};u([v()],ne.prototype,"shadowFrustumSize",null);u([v()],ne.prototype,"shadowOrthoScale",null);u([v()],ne.prototype,"autoUpdateExtends",void 0);u([v()],ne.prototype,"autoCalcShadowZBounds",void 0);u([v("orthoLeft")],ne.prototype,"_orthoLeft",void 0);u([v("orthoRight")],ne.prototype,"_orthoRight",void 0);u([v("orthoTop")],ne.prototype,"_orthoTop",void 0);u([v("orthoBottom")],ne.prototype,"_orthoBottom",void 0);Be.AddNodeConstructor("Light_Type_3",(a,e)=>()=>new He(a,x.Zero(),e));var He=class extends O{constructor(e,t,i){super(e,i),this.groundColor=new ie(0,0,0),this.direction=t||x.Up()}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}getClassName(){return"HemisphericLight"}setDirectionToTarget(e){return this.direction=x.Normalize(e.subtract(x.Zero())),this.direction}getShadowGenerator(){return null}transferToEffect(e,t){let i=x.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",i.x,i.y,i.z,0,t),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),t),this}transferToNodeMaterialEffect(e,t){let i=x.Normalize(this.direction);return e.setFloat3(t,i.x,i.y,i.z),this}computeWorldMatrix(){return this._worldMatrix||(this._worldMatrix=R.Identity()),this._worldMatrix}getTypeID(){return O.LIGHTTYPEID_HEMISPHERICLIGHT}prepareLightSpecificDefines(e,t){e["HEMILIGHT"+t]=!0}};u([Me()],He.prototype,"groundColor",void 0);u([Qe()],He.prototype,"direction",void 0);var It=class a{constructor(e,t){this.width=e,this.height=t}toString(){return`{W: ${this.width}, H: ${this.height}}`}getClassName(){return"Size"}getHashCode(){let e=this.width|0;return e=e*397^(this.height|0),e}copyFrom(e){this.width=e.width,this.height=e.height}copyFromFloats(e,t){return this.width=e,this.height=t,this}set(e,t){return this.copyFromFloats(e,t)}multiplyByFloats(e,t){return new a(this.width*e,this.height*t)}clone(){return new a(this.width,this.height)}equals(e){return e?this.width===e.width&&this.height===e.height:!1}get surface(){return this.width*this.height}static Zero(){return new a(0,0)}add(e){return new a(this.width+e.width,this.height+e.height)}subtract(e){return new a(this.width-e.width,this.height-e.height)}static Lerp(e,t,i){let s=e.width+(t.width-e.width)*i,r=e.height+(t.height-e.height)*i;return new a(s,r)}},Xt=class a{get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get coordinatesMode(){return 0}get isCube(){return this._texture?this._texture.isCube:!1}set isCube(e){this._texture&&(this._texture.isCube=e)}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}getClassName(){return"ThinTexture"}static _IsRenderTargetWrapper(e){return e?._shareDepth!==void 0}constructor(e){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=It.Zero(),this._cachedBaseSize=It.Zero(),this._initialSamplingMode=2,this._texture=a._IsRenderTargetWrapper(e)?e.texture:e,this._texture&&(this._engine=this._texture.getEngine())}isReady(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1}delayLoad(){}getInternalTexture(){return this._texture}getSize(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize}getBaseSize(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)}get samplingMode(){return this._texture?this._texture.samplingMode:this._initialSamplingMode}updateSamplingMode(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)}releaseInternalTexture(){this._texture&&(this._texture.dispose(),this._texture=null)}dispose(){this._texture&&(this.releaseInternalTexture(),this._engine=null)}},z=class a extends Xt{set hasAlpha(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get hasAlpha(){return this._hasAlpha}set getAlphaFromRGB(e){this._getAlphaFromRGB!==e&&(this._getAlphaFromRGB=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get getAlphaFromRGB(){return this._getAlphaFromRGB}set coordinatesIndex(e){this._coordinatesIndex!==e&&(this._coordinatesIndex=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesIndex(){return this._coordinatesIndex}set coordinatesMode(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesMode(){return this._coordinatesMode}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get isCube(){return this._texture?this._texture.isCube:this._isCube}set isCube(e){this._texture?this._texture.isCube=e:this._isCube=e}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}get gammaSpace(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer}set gammaSpace(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()}get isRGBD(){return this._texture!=null&&this._texture._isRGBD}set isRGBD(e){this._texture&&(this._texture._isRGBD=e)}get noMipmap(){return!1}get lodGenerationOffset(){return this._texture?this._texture._lodGenerationOffset:0}set lodGenerationOffset(e){this._texture&&(this._texture._lodGenerationOffset=e)}get lodGenerationScale(){return this._texture?this._texture._lodGenerationScale:0}set lodGenerationScale(e){this._texture&&(this._texture._lodGenerationScale=e)}get linearSpecularLOD(){return this._texture?this._texture._linearSpecularLOD:!1}set linearSpecularLOD(e){this._texture&&(this._texture._linearSpecularLOD=e)}get irradianceTexture(){return this._texture?this._texture._irradianceTexture:null}set irradianceTexture(e){this._texture&&(this._texture._irradianceTexture=e)}get uid(){return this._uid||(this._uid=ni()),this._uid}toString(){return this.name}getClassName(){return"BaseTexture"}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get isBlocking(){return!0}get loadingError(){return this._loadingError}get errorObject(){return this._errorObject}constructor(e,t=null){super(null),this.metadata=null,this.reservedDataStore=null,this._hasAlpha=!1,this._getAlphaFromRGB=!1,this.level=1,this._coordinatesIndex=0,this.optimizeUVAllocation=!0,this._coordinatesMode=0,this.wrapR=1,this.anisotropicFilteringLevel=a.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,this._isCube=!1,this._gammaSpace=!0,this.invertZ=!1,this.lodLevelInAlpha=!1,this.isRenderTarget=!1,this._prefiltered=!1,this._forceSerialize=!1,this.animations=new Array,this.onDisposeObservable=new k,this._onDisposeObserver=null,this._scene=null,this._uid=null,this._parentContainer=null,this._loadingError=!1,e?a._IsScene(e)?this._scene=e:this._engine=e:this._scene=ft.LastCreatedScene,this._scene&&(this.uniqueId=this._scene.getUniqueId(),this._scene.addTexture(this),this._engine=this._scene.getEngine()),this._texture=t,this._uid=null}getScene(){return this._scene}_getEngine(){return this._engine}checkTransformsAreIdentical(e){return e!==null}getTextureMatrix(){return R.IdentityReadOnly}getReflectionTextureMatrix(){return R.IdentityReadOnly}isReadyOrNotBlocking(){return!this.isBlocking||this.isReady()||this.loadingError}scale(e){}get canRescale(){return!1}_getFromCache(e,t,i,s,r,n){let o=this._getEngine();if(!o)return null;let h=o._getUseSRGBBuffer(!!r,t),l=o.getLoadedTexturesCache();for(let c=0;c<l.length;c++){let d=l[c];if((r===void 0||h===d._useSRGBBuffer)&&(s===void 0||s===d.invertY)&&d.url===e&&d.generateMipMaps===!t&&(!i||i===d.samplingMode)&&(n===void 0||n===d.isCube))return d.incrementReferences(),d}return null}_rebuild(){}clone(){return null}get textureType(){return this._texture&&this._texture.type!==void 0?this._texture.type:0}get textureFormat(){return this._texture&&this._texture.format!==void 0?this._texture.format:5}_markAllSubMeshesAsTexturesDirty(){let e=this.getScene();e&&e.markAllMaterialsAsDirty(1)}readPixels(e=0,t=0,i=null,s=!0,r=!1,n=0,o=0,h=Number.MAX_VALUE,l=Number.MAX_VALUE){if(!this._texture)return null;let c=this._getEngine();if(!c)return null;let d=this.getSize(),f=d.width,p=d.height;t!==0&&(f=f/Math.pow(2,t),p=p/Math.pow(2,t),f=Math.round(f),p=Math.round(p)),h=Math.min(f,h),l=Math.min(p,l);try{return this._texture.isCube?c._readTexturePixels(this._texture,h,l,e,t,i,s,r,n,o):c._readTexturePixels(this._texture,h,l,-1,t,i,s,r,n,o)}catch{return null}}_readPixelsSync(e=0,t=0,i=null,s=!0,r=!1){if(!this._texture)return null;let n=this.getSize(),o=n.width,h=n.height,l=this._getEngine();if(!l)return null;t!=0&&(o=o/Math.pow(2,t),h=h/Math.pow(2,t),o=Math.round(o),h=Math.round(h));try{return this._texture.isCube?l._readTexturePixelsSync(this._texture,o,h,e,t,i,s,r):l._readTexturePixelsSync(this._texture,o,h,-1,t,i,s,r)}catch{return null}}get _lodTextureHigh(){return this._texture?this._texture._lodTextureHigh:null}get _lodTextureMid(){return this._texture?this._texture._lodTextureMid:null}get _lodTextureLow(){return this._texture?this._texture._lodTextureLow:null}dispose(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);let e=this._scene.textures.indexOf(this);if(e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){let t=this._parentContainer.textures.indexOf(this);t>-1&&this._parentContainer.textures.splice(t,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,super.dispose()}serialize(e=!1){if(!this.name&&!e)return null;let t=Z.Serialize(this);return Z.AppendSerializedAnimations(this,t),t}static WhenAllReady(e,t){let i=e.length;if(i===0){t();return}for(let s=0;s<e.length;s++){let r=e[s];if(r.isReady())--i===0&&t();else{let n=r.onLoadObservable;n?n.addOnce(()=>{--i===0&&t()}):--i===0&&t()}}}static _IsScene(e){return e.getClassName()==="Scene"}};z.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4;u([v()],z.prototype,"uniqueId",void 0);u([v()],z.prototype,"name",void 0);u([v()],z.prototype,"metadata",void 0);u([v("hasAlpha")],z.prototype,"_hasAlpha",void 0);u([v("getAlphaFromRGB")],z.prototype,"_getAlphaFromRGB",void 0);u([v()],z.prototype,"level",void 0);u([v("coordinatesIndex")],z.prototype,"_coordinatesIndex",void 0);u([v()],z.prototype,"optimizeUVAllocation",void 0);u([v("coordinatesMode")],z.prototype,"_coordinatesMode",void 0);u([v()],z.prototype,"wrapU",null);u([v()],z.prototype,"wrapV",null);u([v()],z.prototype,"wrapR",void 0);u([v()],z.prototype,"anisotropicFilteringLevel",void 0);u([v()],z.prototype,"isCube",null);u([v()],z.prototype,"is3D",null);u([v()],z.prototype,"is2DArray",null);u([v()],z.prototype,"gammaSpace",null);u([v()],z.prototype,"invertZ",void 0);u([v()],z.prototype,"lodLevelInAlpha",void 0);u([v()],z.prototype,"lodGenerationOffset",null);u([v()],z.prototype,"lodGenerationScale",null);u([v()],z.prototype,"linearSpecularLOD",null);u([se()],z.prototype,"irradianceTexture",null);u([v()],z.prototype,"isRenderTarget",void 0);function Mi(a,e,t=!1){let i=e.width,s=e.height;if(a instanceof Float32Array){let h=a.byteLength/a.BYTES_PER_ELEMENT,l=new Uint8Array(h);for(;--h>=0;){let c=a[h];c<0?c=0:c>1&&(c=1),l[h]=c*255}a=l}let r=document.createElement("canvas");r.width=i,r.height=s;let n=r.getContext("2d");if(!n)return null;let o=n.createImageData(i,s);if(o.data.set(a),n.putImageData(o,0,0),t){let h=document.createElement("canvas");h.width=i,h.height=s;let l=h.getContext("2d");return l?(l.translate(0,s),l.scale(1,-1),l.drawImage(r,0,0),h.toDataURL("image/png")):null}return r.toDataURL("image/png")}function Fi(a,e=0,t=0){let i=a.getInternalTexture();if(!i)return null;let s=a._readPixelsSync(e,t);return s?Mi(s,a.getSize(),i.invertY):null}async function Ni(a,e=0,t=0){let i=a.getInternalTexture();if(!i)return null;let s=await a.readPixels(e,t);return s?Mi(s,a.getSize(),i.invertY):null}var E=class a extends z{get noMipmap(){return this._noMipmap}get mimeType(){return this._mimeType}set isBlocking(e){this._isBlocking=e}get isBlocking(){return this._isBlocking}get invertY(){return this._invertY}constructor(e,t,i,s,r=a.TRILINEAR_SAMPLINGMODE,n=null,o=null,h=null,l=!1,c,d,f,p,g){var _,m,T,A,L,D,V,I,y;super(t),this.url=null,this.uOffset=0,this.vOffset=0,this.uScale=1,this.vScale=1,this.uAng=0,this.vAng=0,this.wAng=0,this.uRotationCenter=.5,this.vRotationCenter=.5,this.wRotationCenter=.5,this.homogeneousRotationInUVTransform=!1,this.inspectableCustomProperties=null,this._noMipmap=!1,this._invertY=!1,this._rowGenerationMatrix=null,this._cachedTextureMatrix=null,this._projectionModeMatrix=null,this._t0=null,this._t1=null,this._t2=null,this._cachedUOffset=-1,this._cachedVOffset=-1,this._cachedUScale=0,this._cachedVScale=0,this._cachedUAng=-1,this._cachedVAng=-1,this._cachedWAng=-1,this._cachedReflectionProjectionMatrixId=-1,this._cachedURotationCenter=-1,this._cachedVRotationCenter=-1,this._cachedWRotationCenter=-1,this._cachedHomogeneousRotationInUVTransform=!1,this._cachedReflectionTextureMatrix=null,this._cachedReflectionUOffset=-1,this._cachedReflectionVOffset=-1,this._cachedReflectionUScale=0,this._cachedReflectionVScale=0,this._cachedReflectionCoordinatesMode=-1,this._buffer=null,this._deleteBuffer=!1,this._format=null,this._delayedOnLoad=null,this._delayedOnError=null,this.onLoadObservable=new k,this._isBlocking=!0,this.name=e||"",this.url=e;let w,N=!1,W=null;typeof i=="object"&&i!==null?(w=(_=i.noMipmap)!==null&&_!==void 0?_:!1,s=(m=i.invertY)!==null&&m!==void 0?m:!be.UseOpenGLOrientationForUV,r=(T=i.samplingMode)!==null&&T!==void 0?T:a.TRILINEAR_SAMPLINGMODE,n=(A=i.onLoad)!==null&&A!==void 0?A:null,o=(L=i.onError)!==null&&L!==void 0?L:null,h=(D=i.buffer)!==null&&D!==void 0?D:null,l=(V=i.deleteBuffer)!==null&&V!==void 0?V:!1,c=i.format,d=i.mimeType,f=i.loaderOptions,p=i.creationFlags,N=(I=i.useSRGBBuffer)!==null&&I!==void 0?I:!1,W=(y=i.internalTexture)!==null&&y!==void 0?y:null):w=!!i,this._noMipmap=w,this._invertY=s===void 0?!be.UseOpenGLOrientationForUV:s,this._initialSamplingMode=r,this._buffer=h,this._deleteBuffer=l,this._mimeType=d,this._loaderOptions=f,this._creationFlags=p,this._useSRGBBuffer=N,this._forcedExtension=g,c&&(this._format=c);let ge=this.getScene(),H=this._getEngine();if(!H)return;H.onBeforeTextureInitObservable.notifyObservers(this);let ee=()=>{this._texture&&(this._texture._invertVScale&&(this.vScale*=-1,this.vOffset+=1),this._texture._cachedWrapU!==null&&(this.wrapU=this._texture._cachedWrapU,this._texture._cachedWrapU=null),this._texture._cachedWrapV!==null&&(this.wrapV=this._texture._cachedWrapV,this._texture._cachedWrapV=null),this._texture._cachedWrapR!==null&&(this.wrapR=this._texture._cachedWrapR,this._texture._cachedWrapR=null)),this.onLoadObservable.hasObservers()&&this.onLoadObservable.notifyObservers(this),n&&n(),!this.isBlocking&&ge&&ge.resetCachedMaterial()},oe=(Q,ce)=>{this._loadingError=!0,this._errorObject={message:Q,exception:ce},o&&o(Q,ce),a.OnTextureLoadErrorObservable.notifyObservers(this)};if(!this.url&&!W){this._delayedOnLoad=ee,this._delayedOnError=oe;return}if(this._texture=W??this._getFromCache(this.url,w,r,this._invertY,N),this._texture)if(this._texture.isReady)Ot.SetImmediate(()=>ee());else{let Q=this._texture.onLoadedObservable.add(ee);this._texture.onErrorObservable.add(ce=>{var Lt;oe(ce.message,ce.exception),(Lt=this._texture)===null||Lt===void 0||Lt.onLoadedObservable.remove(Q)})}else if(!ge||!ge.useDelayedTextureLoading){try{this._texture=H.createTexture(this.url,w,this._invertY,ge,r,ee,oe,this._buffer,void 0,this._format,this._forcedExtension,d,f,p,N)}catch(Q){throw oe("error loading",Q),Q}l&&(this._buffer=null)}else this.delayLoadState=4,this._delayedOnLoad=ee,this._delayedOnError=oe}updateURL(e,t=null,i,s){this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith("data:"))&&(this.name=e),this.url=e,this._buffer=t,this._forcedExtension=s,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()}delayLoad(){if(this.delayLoadState!==4)return;let e=this.getScene();e&&(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?Ot.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}_prepareRowForTextureGeneration(e,t,i,s){e*=this._cachedUScale,t*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,t-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,x.TransformCoordinatesFromFloatsToRef(e,t,i,this._rowGenerationMatrix,s),s.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,s.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,s.z+=this.wRotationCenter}checkTransformsAreIdentical(e){return e!==null&&this.uOffset===e.uOffset&&this.vOffset===e.vOffset&&this.uScale===e.uScale&&this.vScale===e.vScale&&this.uAng===e.uAng&&this.vAng===e.vAng&&this.wAng===e.wAng}getTextureMatrix(e=1){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=R.Zero(),this._rowGenerationMatrix=new R,this._t0=x.Zero(),this._t1=x.Zero(),this._t2=x.Zero()),R.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(R.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,te.Matrix[0]),R.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,te.Matrix[1]),R.ScalingToRef(this._cachedUScale,this._cachedVScale,0,te.Matrix[2]),R.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,te.Matrix[3]),te.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(te.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(te.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(te.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),R.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));let t=this.getScene();return t?(this.optimizeUVAllocation&&t.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)),this._cachedTextureMatrix):this._cachedTextureMatrix}getReflectionTextureMatrix(){let e=this.getScene();if(!e)return this._cachedReflectionTextureMatrix;if(this.uOffset===this._cachedReflectionUOffset&&this.vOffset===this._cachedReflectionVOffset&&this.uScale===this._cachedReflectionUScale&&this.vScale===this._cachedReflectionVScale&&this.coordinatesMode===this._cachedReflectionCoordinatesMode)if(this.coordinatesMode===a.PROJECTION_MODE){if(this._cachedReflectionProjectionMatrixId===e.getProjectionMatrix().updateFlag)return this._cachedReflectionTextureMatrix}else return this._cachedReflectionTextureMatrix;this._cachedReflectionTextureMatrix||(this._cachedReflectionTextureMatrix=R.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=R.Zero());let t=this._cachedReflectionCoordinatesMode!==this.coordinatesMode;switch(this._cachedReflectionUOffset=this.uOffset,this._cachedReflectionVOffset=this.vOffset,this._cachedReflectionUScale=this.uScale,this._cachedReflectionVScale=this.vScale,this._cachedReflectionCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case a.PLANAR_MODE:{R.IdentityToRef(this._cachedReflectionTextureMatrix),this._cachedReflectionTextureMatrix[0]=this.uScale,this._cachedReflectionTextureMatrix[5]=this.vScale,this._cachedReflectionTextureMatrix[12]=this.uOffset,this._cachedReflectionTextureMatrix[13]=this.vOffset;break}case a.PROJECTION_MODE:{R.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);let i=e.getProjectionMatrix();this._cachedReflectionProjectionMatrixId=i.updateFlag,i.multiplyToRef(this._projectionModeMatrix,this._cachedReflectionTextureMatrix);break}default:R.IdentityToRef(this._cachedReflectionTextureMatrix);break}return t&&e.markAllMaterialsAsDirty(1,i=>i.getActiveTextures().indexOf(this)!==-1),this._cachedReflectionTextureMatrix}clone(){let e={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return Z.Clone(()=>new a(this._texture?this._texture.url:null,this.getScene(),e),this)}serialize(){var e,t;let i=this.name;a.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");let s=super.serialize(a._SerializeInternalTextureUniqueId);return s?((a.SerializeBuffers||a.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(s.base64String=this._buffer,s.name=s.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?s.base64String="data:image/png;base64,"+ri(this._buffer):(a.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(s.base64String=!this._engine||this._engine._features.supportSyncTextureRead?Fi(this):Ni(this))),s.invertY=this._invertY,s.samplingMode=this.samplingMode,s._creationFlags=this._creationFlags,s._useSRGBBuffer=this._useSRGBBuffer,a._SerializeInternalTextureUniqueId&&(s.internalTextureUniqueId=(t=(e=this._texture)===null||e===void 0?void 0:e.uniqueId)!==null&&t!==void 0?t:void 0),this.name=i,s):null}getClassName(){return"Texture"}dispose(){super.dispose(),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null,this._buffer=null}static Parse(e,t,i){if(e.customType){let o=ai.Instantiate(e.customType).Parse(e,t,i);return e.samplingMode&&o.updateSamplingMode&&o._samplingMode&&o._samplingMode!==e.samplingMode&&o.updateSamplingMode(e.samplingMode),o}if(e.isCube&&!e.isRenderTarget)return a._CubeTextureParser(e,t,i);let s=e.internalTextureUniqueId!==void 0;if(!e.name&&!e.isRenderTarget&&!s)return null;let r;if(s){let o=t.getEngine().getLoadedTexturesCache();for(let h of o)if(h.uniqueId===e.internalTextureUniqueId){r=h;break}}let n=o=>{var h;if(o&&o._texture&&(o._texture._cachedWrapU=null,o._texture._cachedWrapV=null,o._texture._cachedWrapR=null),e.samplingMode){let l=e.samplingMode;o&&o.samplingMode!==l&&o.updateSamplingMode(l)}if(o&&e.animations)for(let l=0;l<e.animations.length;l++){let c=e.animations[l],d=mt("BABYLON.Animation");d&&o.animations.push(d.Parse(c))}s&&!r&&((h=o?._texture)===null||h===void 0||h._setUniqueId(e.internalTextureUniqueId))};return Z.Parse(()=>{var o,h,l;let c=!0;if(e.noMipmap&&(c=!1),e.mirrorPlane){let d=a._CreateMirror(e.name,e.renderTargetSize,t,c);return d._waitingRenderList=e.renderList,d.mirrorPlane=pi.FromArray(e.mirrorPlane),n(d),d}else if(e.isRenderTarget){let d=null;if(e.isCube){if(t.reflectionProbes)for(let f=0;f<t.reflectionProbes.length;f++){let p=t.reflectionProbes[f];if(p.name===e.name)return p.cubeTexture}}else d=a._CreateRenderTargetTexture(e.name,e.renderTargetSize,t,c,(o=e._creationFlags)!==null&&o!==void 0?o:0),d._waitingRenderList=e.renderList;return n(d),d}else{let d;if(e.base64String&&!r)d=a.CreateFromBase64String(e.base64String,e.base64String,t,!c,e.invertY,e.samplingMode,()=>{n(d)},(h=e._creationFlags)!==null&&h!==void 0?h:0,(l=e._useSRGBBuffer)!==null&&l!==void 0?l:!1),d.name=e.name;else{let f;e.name&&e.name.indexOf("://")>0?f=e.name:f=i+e.name,e.url&&(e.url.startsWith("data:")||a.UseSerializedUrlIfAny)&&(f=e.url);let p={noMipmap:!c,invertY:e.invertY,samplingMode:e.samplingMode,onLoad:()=>{n(d)},internalTexture:r};d=new a(f,t,p)}return d}},e,t)}static CreateFromBase64String(e,t,i,s,r,n=a.TRILINEAR_SAMPLINGMODE,o=null,h=null,l=5,c){return new a("data:"+t,i,s,r,n,o,h,e,!1,l,void 0,void 0,c)}static LoadFromDataString(e,t,i,s=!1,r,n=!0,o=a.TRILINEAR_SAMPLINGMODE,h=null,l=null,c=5,d){return e.substr(0,5)!=="data:"&&(e="data:"+e),new a(e,i,r,n,o,h,l,t,s,c,void 0,void 0,d)}};E.SerializeBuffers=!0;E.ForceSerializeBuffers=!1;E.OnTextureLoadErrorObservable=new k;E._SerializeInternalTextureUniqueId=!1;E._CubeTextureParser=(a,e,t)=>{throw Ce("CubeTexture")};E._CreateMirror=(a,e,t,i)=>{throw Ce("MirrorTexture")};E._CreateRenderTargetTexture=(a,e,t,i,s)=>{throw Ce("RenderTargetTexture")};E.NEAREST_SAMPLINGMODE=1;E.NEAREST_NEAREST_MIPLINEAR=8;E.BILINEAR_SAMPLINGMODE=2;E.LINEAR_LINEAR_MIPNEAREST=11;E.TRILINEAR_SAMPLINGMODE=3;E.LINEAR_LINEAR_MIPLINEAR=3;E.NEAREST_NEAREST_MIPNEAREST=4;E.NEAREST_LINEAR_MIPNEAREST=5;E.NEAREST_LINEAR_MIPLINEAR=6;E.NEAREST_LINEAR=7;E.NEAREST_NEAREST=1;E.LINEAR_NEAREST_MIPNEAREST=9;E.LINEAR_NEAREST_MIPLINEAR=10;E.LINEAR_LINEAR=2;E.LINEAR_NEAREST=12;E.EXPLICIT_MODE=0;E.SPHERICAL_MODE=1;E.PLANAR_MODE=2;E.CUBIC_MODE=3;E.PROJECTION_MODE=4;E.SKYBOX_MODE=5;E.INVCUBIC_MODE=6;E.EQUIRECTANGULAR_MODE=7;E.FIXED_EQUIRECTANGULAR_MODE=8;E.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9;E.CLAMP_ADDRESSMODE=0;E.WRAP_ADDRESSMODE=1;E.MIRROR_ADDRESSMODE=2;E.UseSerializedUrlIfAny=!1;u([v()],E.prototype,"url",void 0);u([v()],E.prototype,"uOffset",void 0);u([v()],E.prototype,"vOffset",void 0);u([v()],E.prototype,"uScale",void 0);u([v()],E.prototype,"vScale",void 0);u([v()],E.prototype,"uAng",void 0);u([v()],E.prototype,"vAng",void 0);u([v()],E.prototype,"wAng",void 0);u([v()],E.prototype,"uRotationCenter",void 0);u([v()],E.prototype,"vRotationCenter",void 0);u([v()],E.prototype,"wRotationCenter",void 0);u([v()],E.prototype,"homogeneousRotationInUVTransform",void 0);u([v()],E.prototype,"isBlocking",null);Ie("BABYLON.Texture",E);Z._TextureParser=E.Parse;var zt=class{get depthStencilTexture(){return this._depthStencilTexture}get depthStencilTextureWithStencil(){return this._depthStencilTextureWithStencil}get isCube(){return this._isCube}get isMulti(){return this._isMulti}get is2DArray(){return this.layers>0}get size(){return this.width}get width(){return this._size.width||this._size}get height(){return this._size.height||this._size}get layers(){return this._size.layers||0}get texture(){var e,t;return(t=(e=this._textures)===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:null}get textures(){return this._textures}get faceIndices(){return this._faceIndices}get layerIndices(){return this._layerIndices}get samples(){return this._samples}setSamples(e,t=!0,i=!1){if(this.samples===e&&!i)return e;let s=this._isMulti?this._engine.updateMultipleRenderTargetTextureSampleCount(this,e,t):this._engine.updateRenderTargetTextureSampleCount(this,e);return this._samples=e,s}constructor(e,t,i,s){this._textures=null,this._faceIndices=null,this._layerIndices=null,this._samples=1,this._attachments=null,this._generateStencilBuffer=!1,this._generateDepthBuffer=!1,this._depthStencilTextureWithStencil=!1,this._isMulti=e,this._isCube=t,this._size=i,this._engine=s,this._depthStencilTexture=null}setTextures(e){Array.isArray(e)?this._textures=e:e?this._textures=[e]:this._textures=null}setTexture(e,t=0,i=!0){this._textures||(this._textures=[]),this._textures[t]&&i&&this._textures[t].dispose(),this._textures[t]=e}setLayerAndFaceIndices(e,t){this._layerIndices=e,this._faceIndices=t}setLayerAndFaceIndex(e=0,t,i){this._layerIndices||(this._layerIndices=[]),this._faceIndices||(this._faceIndices=[]),t!==void 0&&t>=0&&(this._layerIndices[e]=t),i!==void 0&&i>=0&&(this._faceIndices[e]=i)}createDepthStencilTexture(e=0,t=!0,i=!1,s=1,r=14,n){var o;return(o=this._depthStencilTexture)===null||o===void 0||o.dispose(),this._depthStencilTextureWithStencil=i,this._depthStencilTexture=this._engine.createDepthStencilTexture(this._size,{bilinearFiltering:t,comparisonFunction:e,generateStencil:i,isCube:this._isCube,samples:s,depthTextureFormat:r,label:n},this),this._depthStencilTexture}_shareDepth(e){this._depthStencilTexture&&(e._depthStencilTexture&&e._depthStencilTexture.dispose(),e._depthStencilTexture=this._depthStencilTexture,this._depthStencilTexture.incrementReferences())}_swapAndDie(e){this.texture&&this.texture._swapAndDie(e),this._textures=null,this.dispose(!0)}_cloneRenderTargetWrapper(){var e,t,i,s,r,n,o,h;let l=null;if(this._isMulti){let c=this.textures;if(c&&c.length>0){let d=!1,f=c.length,p=c[c.length-1]._source;(p===Fe.Depth||p===Fe.DepthStencil)&&(d=!0,f--);let g=[],_=[],m=[],T=[],A=[],L=[],D=[],V={};for(let w=0;w<f;++w){let N=c[w];g.push(N.samplingMode),_.push(N.type),m.push(N.format),V[N.uniqueId]!==void 0?(T.push(-1),D.push(0)):(V[N.uniqueId]=w,N.is2DArray?(T.push(35866),D.push(N.depth)):N.isCube?(T.push(34067),D.push(0)):N.is3D?(T.push(32879),D.push(N.depth)):(T.push(3553),D.push(0))),this._faceIndices&&A.push((e=this._faceIndices[w])!==null&&e!==void 0?e:0),this._layerIndices&&L.push((t=this._layerIndices[w])!==null&&t!==void 0?t:0)}let I={samplingModes:g,generateMipMaps:c[0].generateMipMaps,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:this._generateStencilBuffer,generateDepthTexture:d,types:_,formats:m,textureCount:f,targetTypes:T,faceIndex:A,layerIndex:L,layerCounts:D},y={width:this.width,height:this.height};l=this._engine.createMultipleRenderTarget(y,I);for(let w=0;w<f;++w){if(T[w]!==-1)continue;let N=V[c[w].uniqueId];l.setTexture(l.textures[N],w)}}}else{let c={};if(c.generateDepthBuffer=this._generateDepthBuffer,c.generateMipMaps=(s=(i=this.texture)===null||i===void 0?void 0:i.generateMipMaps)!==null&&s!==void 0?s:!1,c.generateStencilBuffer=this._generateStencilBuffer,c.samplingMode=(r=this.texture)===null||r===void 0?void 0:r.samplingMode,c.type=(n=this.texture)===null||n===void 0?void 0:n.type,c.format=(o=this.texture)===null||o===void 0?void 0:o.format,this.isCube)l=this._engine.createRenderTargetCubeTexture(this.width,c);else{let d={width:this.width,height:this.height,layers:this.is2DArray?(h=this.texture)===null||h===void 0?void 0:h.depth:void 0};l=this._engine.createRenderTargetTexture(d,c)}l.texture.isReady=!0}return l}_swapRenderTargetWrapper(e){if(this._textures&&e._textures)for(let t=0;t<this._textures.length;++t)this._textures[t]._swapAndDie(e._textures[t],!1),e._textures[t].isReady=!0;this._depthStencilTexture&&e._depthStencilTexture&&(this._depthStencilTexture._swapAndDie(e._depthStencilTexture),e._depthStencilTexture.isReady=!0),this._textures=null,this._depthStencilTexture=null}_rebuild(){let e=this._cloneRenderTargetWrapper();if(e){if(this._depthStencilTexture){let t=this._depthStencilTexture.samplingMode,i=t===2||t===3||t===11;e.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction,i,this._depthStencilTextureWithStencil,this._depthStencilTexture.samples)}this.samples>1&&e.setSamples(this.samples),e._swapRenderTargetWrapper(this),e.dispose()}}releaseTextures(){var e,t;if(this._textures)for(let i=0;(t=i<((e=this._textures)===null||e===void 0?void 0:e.length))!==null&&t!==void 0&&t;++i)this._textures[i].dispose();this._textures=null}dispose(e=!1){var t;e||((t=this._depthStencilTexture)===null||t===void 0||t.dispose(),this._depthStencilTexture=null,this.releaseTextures()),this._engine._releaseRenderTargetWrapper(this)}},Wt=class extends zt{constructor(e,t,i,s,r){super(e,t,i,s),this._framebuffer=null,this._depthStencilBuffer=null,this._MSAAFramebuffer=null,this._colorTextureArray=null,this._depthStencilTextureArray=null,this._context=r}_cloneRenderTargetWrapper(){let e=null;return this._colorTextureArray&&this._depthStencilTextureArray?(e=this._engine.createMultiviewRenderTargetTexture(this.width,this.height),e.texture.isReady=!0):e=super._cloneRenderTargetWrapper(),e}_swapRenderTargetWrapper(e){super._swapRenderTargetWrapper(e),e._framebuffer=this._framebuffer,e._depthStencilBuffer=this._depthStencilBuffer,e._MSAAFramebuffer=this._MSAAFramebuffer,e._colorTextureArray=this._colorTextureArray,e._depthStencilTextureArray=this._depthStencilTextureArray,this._framebuffer=this._depthStencilBuffer=this._MSAAFramebuffer=this._colorTextureArray=this._depthStencilTextureArray=null}_shareDepth(e){super._shareDepth(e);let t=this._context,i=this._depthStencilBuffer,s=e._MSAAFramebuffer||e._framebuffer;e._depthStencilBuffer&&t.deleteRenderbuffer(e._depthStencilBuffer),e._depthStencilBuffer=this._depthStencilBuffer,this._engine._bindUnboundFramebuffer(s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,i),this._engine._bindUnboundFramebuffer(null)}_bindTextureRenderTarget(e,t=0,i,s=0){var r,n,o,h;if(!e._hardwareTexture)return;let l=this._framebuffer,c=this._engine._currentFramebuffer;if(this._engine._bindUnboundFramebuffer(l),this._engine.webGLVersion>1){let d=this._context,f=d["COLOR_ATTACHMENT"+t];e.is2DArray||e.is3D?(i=(n=i??((r=this.layerIndices)===null||r===void 0?void 0:r[t]))!==null&&n!==void 0?n:0,d.framebufferTextureLayer(d.FRAMEBUFFER,f,e._hardwareTexture.underlyingResource,s,i)):e.isCube?(i=(h=i??((o=this.faceIndices)===null||o===void 0?void 0:o[t]))!==null&&h!==void 0?h:0,d.framebufferTexture2D(d.FRAMEBUFFER,f,d.TEXTURE_CUBE_MAP_POSITIVE_X+i,e._hardwareTexture.underlyingResource,s)):d.framebufferTexture2D(d.FRAMEBUFFER,f,d.TEXTURE_2D,e._hardwareTexture.underlyingResource,s)}else{let d=this._context,f=d["COLOR_ATTACHMENT"+t+"_WEBGL"],p=i!==void 0?d.TEXTURE_CUBE_MAP_POSITIVE_X+i:d.TEXTURE_2D;d.framebufferTexture2D(d.FRAMEBUFFER,f,p,e._hardwareTexture.underlyingResource,s)}this._engine._bindUnboundFramebuffer(c)}setTexture(e,t=0,i=!0){super.setTexture(e,t,i),this._bindTextureRenderTarget(e,t)}setLayerAndFaceIndices(e,t){var i,s;if(super.setLayerAndFaceIndices(e,t),!this.textures||!this.layerIndices||!this.faceIndices)return;let r=(s=(i=this._attachments)===null||i===void 0?void 0:i.length)!==null&&s!==void 0?s:this.textures.length;for(let n=0;n<r;n++){let o=this.textures[n];o&&(o.is2DArray||o.is3D?this._bindTextureRenderTarget(o,n,this.layerIndices[n]):o.isCube?this._bindTextureRenderTarget(o,n,this.faceIndices[n]):this._bindTextureRenderTarget(o,n))}}setLayerAndFaceIndex(e=0,t,i){if(super.setLayerAndFaceIndex(e,t,i),!this.textures||!this.layerIndices||!this.faceIndices)return;let s=this.textures[e];s.is2DArray||s.is3D?this._bindTextureRenderTarget(this.textures[e],e,this.layerIndices[e]):s.isCube&&this._bindTextureRenderTarget(this.textures[e],e,this.faceIndices[e])}dispose(e=!1){let t=this._context;e||(this._colorTextureArray&&(this._context.deleteTexture(this._colorTextureArray),this._colorTextureArray=null),this._depthStencilTextureArray&&(this._context.deleteTexture(this._depthStencilTextureArray),this._depthStencilTextureArray=null)),this._framebuffer&&(t.deleteFramebuffer(this._framebuffer),this._framebuffer=null),this._depthStencilBuffer&&(t.deleteRenderbuffer(this._depthStencilBuffer),this._depthStencilBuffer=null),this._MSAAFramebuffer&&(t.deleteFramebuffer(this._MSAAFramebuffer),this._MSAAFramebuffer=null),super.dispose(e)}};Te.prototype._createHardwareRenderTargetWrapper=function(a,e,t){let i=new Wt(a,e,t,this,this._gl);return this._renderTargetWrapperCache.push(i),i};Te.prototype.createRenderTargetTexture=function(a,e){var t,i;let s=this._createHardwareRenderTargetWrapper(!1,!1,a),r=!0,n=!1,o=!1,h,l=1;e!==void 0&&typeof e=="object"&&(r=(t=e.generateDepthBuffer)!==null&&t!==void 0?t:!0,n=!!e.generateStencilBuffer,o=!!e.noColorAttachment,h=e.colorAttachment,l=(i=e.samples)!==null&&i!==void 0?i:1);let c=h||(o?null:this._createInternalTexture(a,e,!0,Fe.RenderTarget)),d=a.width||a,f=a.height||a,p=this._currentFramebuffer,g=this._gl,_=g.createFramebuffer();return this._bindUnboundFramebuffer(_),s._depthStencilBuffer=this._setupFramebufferDepthAttachments(n,r,d,f),c&&!c.is2DArray&&g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,c._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(p),s._framebuffer=_,s._generateDepthBuffer=r,s._generateStencilBuffer=n,s.setTextures(c),this.updateRenderTargetTextureSampleCount(s,l),s};Te.prototype.createDepthStencilTexture=function(a,e,t){if(e.isCube){let i=a.width||a;return this._createDepthStencilCubeTexture(i,e,t)}else return this._createDepthStencilTexture(a,e,t)};Te.prototype._createDepthStencilTexture=function(a,e,t){let i=this._gl,s=a.layers||0,r=s!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new wt(this,Fe.DepthStencil);if(!this._caps.depthTextureExtension)return Ze.Error("Depth texture is not supported by your browser or hardware."),n;let o={bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1,...e};if(this._bindTextureDirectly(r,n,!0),this._setupDepthStencilTexture(n,a,o.generateStencil,o.comparisonFunction===0?!1:o.bilinearFiltering,o.comparisonFunction,o.samples),o.depthTextureFormat!==void 0){if(o.depthTextureFormat!==15&&o.depthTextureFormat!==16&&o.depthTextureFormat!==17&&o.depthTextureFormat!==13&&o.depthTextureFormat!==14&&o.depthTextureFormat!==18)return Ze.Error("Depth texture format is not supported."),n;n.format=o.depthTextureFormat}else n.format=o.generateStencil?13:16;let h=n.format===17||n.format===13||n.format===18;t._depthStencilTexture=n,t._depthStencilTextureWithStencil=h;let l=i.UNSIGNED_INT;n.format===15?l=i.UNSIGNED_SHORT:n.format===17||n.format===13?l=i.UNSIGNED_INT_24_8:n.format===14?l=i.FLOAT:n.format===18&&(l=i.FLOAT_32_UNSIGNED_INT_24_8_REV);let c=h?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,d=c;this.webGLVersion>1&&(n.format===15?d=i.DEPTH_COMPONENT16:n.format===16?d=i.DEPTH_COMPONENT24:n.format===17||n.format===13?d=i.DEPTH24_STENCIL8:n.format===14?d=i.DEPTH_COMPONENT32F:n.format===18&&(d=i.DEPTH32F_STENCIL8)),n.is2DArray?i.texImage3D(r,0,d,n.width,n.height,s,0,c,l,null):i.texImage2D(r,0,d,n.width,n.height,0,c,l,null),this._bindTextureDirectly(r,null),this._internalTexturesCache.push(n);let f=t;if(f._depthStencilBuffer){let p=this._currentFramebuffer;this._bindUnboundFramebuffer(f._framebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.STENCIL_ATTACHMENT,i.RENDERBUFFER,null),this._bindUnboundFramebuffer(p),i.deleteRenderbuffer(f._depthStencilBuffer),f._depthStencilBuffer=null}return n};Te.prototype.updateRenderTargetTextureSampleCount=function(a,e){if(this.webGLVersion<2||!a||!a.texture)return 1;if(a.samples===e)return e;let t=this._gl;e=Math.min(e,this.getCaps().maxMSAASamples),a._depthStencilBuffer&&(t.deleteRenderbuffer(a._depthStencilBuffer),a._depthStencilBuffer=null),a._MSAAFramebuffer&&(t.deleteFramebuffer(a._MSAAFramebuffer),a._MSAAFramebuffer=null);let i=a.texture._hardwareTexture;if(i.releaseMSAARenderBuffers(),e>1&&typeof t.renderbufferStorageMultisample=="function"){let s=t.createFramebuffer();if(!s)throw new Error("Unable to create multi sampled framebuffer");a._MSAAFramebuffer=s,this._bindUnboundFramebuffer(a._MSAAFramebuffer);let r=this._createRenderBuffer(a.texture.width,a.texture.height,e,-1,this._getRGBAMultiSampleBufferFormat(a.texture.type),t.COLOR_ATTACHMENT0,!1);if(!r)throw new Error("Unable to create multi sampled framebuffer");i.addMSAARenderBuffer(r)}else this._bindUnboundFramebuffer(a._framebuffer);return a.texture.samples=e,a._samples=e,a._depthStencilBuffer=this._setupFramebufferDepthAttachments(a._generateStencilBuffer,a._generateDepthBuffer,a.texture.width,a.texture.height,e),this._bindUnboundFramebuffer(null),e};Te.prototype.createRenderTargetCubeTexture=function(a,e){let t=this._createHardwareRenderTargetWrapper(!1,!0,a),i={generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5,...e};i.generateStencilBuffer=i.generateDepthBuffer&&i.generateStencilBuffer,(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1);let s=this._gl,r=new wt(this,Fe.RenderTarget);this._bindTextureDirectly(s.TEXTURE_CUBE_MAP,r,!0);let n=this._getSamplingParameters(i.samplingMode,i.generateMipMaps);i.type===1&&!this._caps.textureFloat&&(i.type=0,Ze.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAG_FILTER,n.mag),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MIN_FILTER,n.min),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);for(let h=0;h<6;h++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,this._getRGBABufferInternalSizedFormat(i.type,i.format),a,a,0,this._getInternalFormat(i.format),this._getWebGLTextureType(i.type),null);let o=s.createFramebuffer();return this._bindUnboundFramebuffer(o),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(i.generateStencilBuffer,i.generateDepthBuffer,a,a),i.generateMipMaps&&s.generateMipmap(s.TEXTURE_CUBE_MAP),this._bindTextureDirectly(s.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=o,t._generateDepthBuffer=i.generateDepthBuffer,t._generateStencilBuffer=i.generateStencilBuffer,r.width=a,r.height=a,r.isReady=!0,r.isCube=!0,r.samples=1,r.generateMipMaps=i.generateMipMaps,r.samplingMode=i.samplingMode,r.type=i.type,r.format=i.format,this._internalTexturesCache.push(r),t.setTextures(r),t};var yi="postprocessVertexShader",Ui=`attribute vec2 position;
uniform vec2 scale;
varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;S.ShadersStore[yi]=Ui;var yt={positions:[1,1,-1,1,-1,-1,1,-1],indices:[0,1,2,0,2,3]},kt=class{constructor(e,t=yt){var i,s;this._fullscreenViewport=new mi(0,0,1,1);let r=(i=t.positions)!==null&&i!==void 0?i:yt.positions,n=(s=t.indices)!==null&&s!==void 0?s:yt.indices;this.engine=e,this._vertexBuffers={[U.PositionKind]:new U(e,r,U.PositionKind,!1,!1,2)},this._indexBuffer=e.createIndexBuffer(n),this._onContextRestoredObserver=e.onContextRestoredObservable.add(()=>{this._indexBuffer=e.createIndexBuffer(n);for(let o in this._vertexBuffers)this._vertexBuffers[o]._rebuild()})}setViewport(e=this._fullscreenViewport){this.engine.setViewport(e)}bindBuffers(e){this.engine.bindBuffers(this._vertexBuffers,this._indexBuffer,e)}applyEffectWrapper(e){this.engine.setState(!0),this.engine.depthCullingState.depthTest=!1,this.engine.stencilState.stencilTest=!1,this.engine.enableEffect(e._drawWrapper),this.bindBuffers(e.effect),e.onApplyObservable.notifyObservers({})}restoreStates(){this.engine.depthCullingState.depthTest=!0,this.engine.stencilState.stencilTest=!0}draw(){this.engine.drawElementsType(0,0,6)}_isRenderTargetTexture(e){return e.renderTarget!==void 0}render(e,t=null){if(!e.effect.isReady())return;this.setViewport();let i=t===null?null:this._isRenderTargetTexture(t)?t.renderTarget:t;i&&this.engine.bindFramebuffer(i),this.applyEffectWrapper(e),this.draw(),i&&this.engine.unBindFramebuffer(i),this.restoreStates()}dispose(){let e=this._vertexBuffers[U.PositionKind];e&&(e.dispose(),delete this._vertexBuffers[U.PositionKind]),this._indexBuffer&&this.engine._releaseBuffer(this._indexBuffer),this._onContextRestoredObserver&&(this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)}},Gt=class{get effect(){return this._drawWrapper.effect}set effect(e){this._drawWrapper.effect=e}constructor(e){this.onApplyObservable=new k;let t,i=e.uniformNames||[];e.vertexShader?t={fragmentSource:e.fragmentShader,vertexSource:e.vertexShader,spectorName:e.name||"effectWrapper"}:(i.push("scale"),t={fragmentSource:e.fragmentShader,vertex:"postprocess",spectorName:e.name||"effectWrapper"},this.onApplyObservable.add(()=>{this.effect.setFloat2("scale",1,1)}));let s=e.defines?e.defines.join(`
`):"";this._drawWrapper=new pt(e.engine),e.useShaderStore?(t.fragment=t.fragmentSource,t.vertex||(t.vertex=t.vertexSource),delete t.fragmentSource,delete t.vertexSource,this.effect=e.engine.createEffect(t,e.attributeNames||["position"],i,e.samplerNames,s,void 0,e.onCompiled,void 0,void 0,e.shaderLanguage)):(this.effect=new ue(t,e.attributeNames||["position"],i,e.samplerNames,e.engine,s,void 0,e.onCompiled,void 0,void 0,void 0,e.shaderLanguage),this._onContextRestoredObserver=e.engine.onContextRestoredObservable.add(()=>{this.effect._pipelineContext=null,this.effect._wasPreviouslyReady=!1,this.effect._prepareEffect()}))}dispose(){this._onContextRestoredObserver&&(this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null),this.effect.dispose()}},Ai="passPixelShader",Ci=`varying vec2 vUV;
uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;S.ShadersStore[Ai]=Ci;var Si={name:Ai,shader:Ci},Ge=class a{static _CreateDumpRenderer(){if(!a._DumpToolsEngine){let e=document.createElement("canvas"),t=new Te(e,!1,{preserveDrawingBuffer:!0,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!1,antialias:!1,failIfMajorPerformanceCaveat:!1});t.getCaps().parallelShaderCompile=void 0;let i=new kt(t),s=new Gt({engine:t,name:Si.name,fragmentShader:Si.shader,samplerNames:["textureSampler"]});a._DumpToolsEngine={canvas:e,engine:t,renderer:i,wrapper:s}}return a._DumpToolsEngine}static async DumpFramebuffer(e,t,i,s,r="image/png",n){let o=await i.readPixels(0,0,e,t),h=new Uint8Array(o.buffer);a.DumpData(e,t,h,s,r,n,!0)}static DumpDataAsync(e,t,i,s="image/png",r,n=!1,o=!1,h){return new Promise(l=>{a.DumpData(e,t,i,c=>l(c),s,r,n,o,h)})}static DumpData(e,t,i,s,r="image/png",n,o=!1,h=!1,l){let c=a._CreateDumpRenderer();if(c.engine.setSize(e,t,!0),i instanceof Float32Array){let f=new Uint8Array(i.length),p=i.length;for(;p--;){let g=i[p];f[p]=g<0?0:g>1?1:Math.round(g*255)}i=f}let d=c.engine.createRawTexture(i,e,t,5,!1,!o,1);c.renderer.setViewport(),c.renderer.applyEffectWrapper(c.wrapper),c.wrapper.effect._bindTexture("textureSampler",d),c.renderer.draw(),h?Ne.ToBlob(c.canvas,f=>{let p=new FileReader;p.onload=g=>{let _=g.target.result;s&&s(_)},p.readAsArrayBuffer(f)},r,l):Ne.EncodeScreenshotCanvasData(c.canvas,s,r,n,l),d.dispose()}static Dispose(){a._DumpToolsEngine&&(a._DumpToolsEngine.wrapper.dispose(),a._DumpToolsEngine.renderer.dispose(),a._DumpToolsEngine.engine.dispose()),a._DumpToolsEngine=null}},Bi=()=>{Ne.DumpData=Ge.DumpData,Ne.DumpDataAsync=Ge.DumpDataAsync,Ne.DumpFramebuffer=Ge.DumpFramebuffer};Bi();var he=class a extends E{get renderList(){return this._renderList}set renderList(e){this._unObserveRenderList&&(this._unObserveRenderList(),this._unObserveRenderList=null),e&&(this._unObserveRenderList=oi(e,this._renderListHasChanged)),this._renderList=e}get postProcesses(){return this._postProcesses}get _prePassEnabled(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled}set onAfterUnbind(e){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}set onClear(e){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(e)}get renderPassIds(){return this._renderPassIds}get currentRefreshId(){return this._currentRefreshId}setMaterialForRendering(e,t){let i;Array.isArray(e)?i=e:i=[e];for(let s=0;s<i.length;++s)for(let r=0;r<this._renderPassIds.length;++r)i[s].setMaterialForRenderPass(this._renderPassIds[r],t!==void 0?Array.isArray(t)?t[r]:t:void 0)}get isMulti(){var e,t;return(t=(e=this._renderTarget)===null||e===void 0?void 0:e.isMulti)!==null&&t!==void 0?t:!1}get renderTargetOptions(){return this._renderTargetOptions}get renderTarget(){return this._renderTarget}_onRatioRescale(){this._sizeRatio&&this.resize(this._initialSizeParameter)}set boundingBoxSize(e){if(this._boundingBoxSize&&this._boundingBoxSize.equals(e))return;this._boundingBoxSize=e;let t=this.getScene();t&&t.markAllMaterialsAsDirty(1)}get boundingBoxSize(){return this._boundingBoxSize}get depthStencilTexture(){var e,t;return(t=(e=this._renderTarget)===null||e===void 0?void 0:e._depthStencilTexture)!==null&&t!==void 0?t:null}constructor(e,t,i,s=!1,r=!0,n=0,o=!1,h=E.TRILINEAR_SAMPLINGMODE,l=!0,c=!1,d=!1,f=5,p=!1,g,_,m=!1,T=!1){var A,L,D,V,I,y;let w;if(typeof s=="object"){let W=s;s=!!W.generateMipMaps,r=(A=W.doNotChangeAspectRatio)!==null&&A!==void 0?A:!0,n=(L=W.type)!==null&&L!==void 0?L:0,o=!!W.isCube,h=(D=W.samplingMode)!==null&&D!==void 0?D:E.TRILINEAR_SAMPLINGMODE,l=(V=W.generateDepthBuffer)!==null&&V!==void 0?V:!0,c=!!W.generateStencilBuffer,d=!!W.isMulti,f=(I=W.format)!==null&&I!==void 0?I:5,p=!!W.delayAllocation,g=W.samples,_=W.creationFlags,m=!!W.noColorAttachment,T=!!W.useSRGBBuffer,w=W.colorAttachment}if(super(null,i,!s,void 0,h,void 0,void 0,void 0,void 0,f),this._unObserveRenderList=null,this._renderListHasChanged=(W,ge)=>{var H;let ee=this._renderList?this._renderList.length:0;(ge===0&&ee>0||ee===0)&&((H=this.getScene())===null||H===void 0||H.meshes.forEach(oe=>{oe._markSubMeshesAsLightDirty()}))},this.renderParticles=!0,this.renderSprites=!1,this.forceLayerMaskCheck=!1,this.ignoreCameraViewport=!1,this.onBeforeBindObservable=new k,this.onAfterUnbindObservable=new k,this.onBeforeRenderObservable=new k,this.onAfterRenderObservable=new k,this.onClearObservable=new k,this.onResizeObservable=new k,this._cleared=!1,this.skipInitialClear=!1,this._currentRefreshId=-1,this._refreshRate=1,this._samples=1,this._canRescale=!0,this._renderTarget=null,this.boundingBoxPosition=x.Zero(),i=this.getScene(),!i)return;let N=this.getScene().getEngine();this._coordinatesMode=E.PROJECTION_MODE,this.renderList=new Array,this.name=e,this.isRenderTarget=!0,this._initialSizeParameter=t,this._renderPassIds=[],this._isCubeData=o,this._processSizeParameter(t),this.renderPassId=this._renderPassIds[0],this._resizeObserver=N.onResizeObservable.add(()=>{}),this._generateMipMaps=!!s,this._doNotChangeAspectRatio=r,this._renderingManager=new vt(i),this._renderingManager._useSceneAutoClearSetup=!0,!d&&(this._renderTargetOptions={generateMipMaps:s,type:n,format:(y=this._format)!==null&&y!==void 0?y:void 0,samplingMode:this.samplingMode,generateDepthBuffer:l,generateStencilBuffer:c,samples:g,creationFlags:_,noColorAttachment:m,useSRGBBuffer:T,colorAttachment:w,label:this.name},this.samplingMode===E.NEAREST_SAMPLINGMODE&&(this.wrapU=E.CLAMP_ADDRESSMODE,this.wrapV=E.CLAMP_ADDRESSMODE),p||(o?(this._renderTarget=i.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions),this.coordinatesMode=E.INVCUBIC_MODE,this._textureMatrix=R.Identity()):this._renderTarget=i.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,g!==void 0&&(this.samples=g)))}createDepthStencilTexture(e=0,t=!0,i=!1,s=1,r=14){var n;(n=this._renderTarget)===null||n===void 0||n.createDepthStencilTexture(e,t,i,s,r)}_releaseRenderPassId(){if(this._scene){let e=this._scene.getEngine();for(let t=0;t<this._renderPassIds.length;++t)e.releaseRenderPassId(this._renderPassIds[t])}this._renderPassIds=[]}_createRenderPassId(){this._releaseRenderPassId();let e=this._scene.getEngine(),t=this._isCubeData?6:this.getRenderLayers()||1;for(let i=0;i<t;++i)this._renderPassIds[i]=e.createRenderPassId(`RenderTargetTexture - ${this.name}#${i}`)}_processSizeParameter(e){if(e.ratio){this._sizeRatio=e.ratio;let t=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(t.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(t.getRenderHeight(),this._sizeRatio)}}else this._size=e;this._createRenderPassId()}get samples(){var e,t;return(t=(e=this._renderTarget)===null||e===void 0?void 0:e.samples)!==null&&t!==void 0?t:this._samples}set samples(e){this._renderTarget&&(this._samples=this._renderTarget.setSamples(e))}resetRefreshCounter(){this._currentRefreshId=-1}get refreshRate(){return this._refreshRate}set refreshRate(e){this._refreshRate=e,this.resetRefreshCounter()}addPostProcess(e){if(!this._postProcessManager){let t=this.getScene();if(!t)return;this._postProcessManager=new Ft(t),this._postProcesses=new Array}this._postProcesses.push(e),this._postProcesses[0].autoClear=!1}clearPostProcesses(e=!1){if(this._postProcesses){if(e)for(let t of this._postProcesses)t.dispose();this._postProcesses=[]}}removePostProcess(e){if(!this._postProcesses)return;let t=this._postProcesses.indexOf(e);t!==-1&&(this._postProcesses.splice(t,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}_shouldRender(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)}getRenderSize(){return this.getRenderWidth()}getRenderWidth(){return this._size.width?this._size.width:this._size}getRenderHeight(){return this._size.width?this._size.height:this._size}getRenderLayers(){return this._size.layers||0}disableRescaling(){this._canRescale=!1}get canRescale(){return this._canRescale}scale(e){let t=Math.max(1,this.getRenderSize()*e);this.resize(t)}getReflectionTextureMatrix(){return this.isCube?this._textureMatrix:super.getReflectionTextureMatrix()}resize(e){var t;let i=this.isCube;(t=this._renderTarget)===null||t===void 0||t.dispose(),this._renderTarget=null;let s=this.getScene();s&&(this._processSizeParameter(e),i?this._renderTarget=s.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._renderTarget=s.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))}render(e=!1,t=!1){this._render(e,t)}isReadyForRendering(){return this._render(!1,!1,!0)}_render(e=!1,t=!1,i=!1){var s;let r=this.getScene();if(!r)return i;let n=r.getEngine();if(this.useCameraPostProcesses!==void 0&&(e=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(let d=0;d<this._waitingRenderList.length;d++){let f=this._waitingRenderList[d],p=r.getMeshById(f);p&&this.renderList.push(p)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];let d=this.getScene();if(!d)return i;let f=d.meshes;for(let p=0;p<f.length;p++){let g=f[p];this.renderListPredicate(g)&&this.renderList.push(g)}}let o=n.currentRenderPassId;this.onBeforeBindObservable.notifyObservers(this);let h=(s=this.activeCamera)!==null&&s!==void 0?s:r.activeCamera,l=r.activeCamera;h&&(h!==r.activeCamera&&(r.setTransformMatrix(h.getViewMatrix(),h.getProjectionMatrix(!0)),r.activeCamera=h),n.setViewport(h.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1;let c=i;if(i){r.getViewMatrix()||r.updateTransformMatrix();let d=this.is2DArray?this.getRenderLayers():this.isCube?6:1;for(let f=0;f<d&&c;f++){let p=null,g=this.renderList?this.renderList:r.getActiveMeshes().data,_=this.renderList?this.renderList.length:r.getActiveMeshes().length;n.currentRenderPassId=this._renderPassIds[f],this.onBeforeRenderObservable.notifyObservers(f),this.getCustomRenderList&&(p=this.getCustomRenderList(f,g,_)),p||(p=g),this._doNotChangeAspectRatio||r.updateTransformMatrix(!0);for(let m=0;m<p.length&&c;++m){let T=p[m];if(!(!T.isEnabled()||T.isBlocked||!T.isVisible||!T.subMeshes)){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(T,this.refreshRate,i)){c=!1;continue}}else if(!T.isReady(!0)){c=!1;continue}}}this.onAfterRenderObservable.notifyObservers(f),(this.is2DArray||this.isCube)&&(r.incrementRenderId(),r.resetCachedMaterial())}}else if(this.is2DArray&&!this.isMulti)for(let d=0;d<this.getRenderLayers();d++)this._renderToTarget(0,e,t,d,h),r.incrementRenderId(),r.resetCachedMaterial();else if(this.isCube&&!this.isMulti)for(let d=0;d<6;d++)this._renderToTarget(d,e,t,void 0,h),r.incrementRenderId(),r.resetCachedMaterial();else this._renderToTarget(0,e,t,void 0,h);return this.onAfterUnbindObservable.notifyObservers(this),n.currentRenderPassId=o,l&&(r.activeCamera=l,(r.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==r.activeCamera)&&r.setTransformMatrix(r.activeCamera.getViewMatrix(),r.activeCamera.getProjectionMatrix(!0)),n.setViewport(r.activeCamera.viewport)),r.resetCachedMaterial(),c}_bestReflectionRenderTargetDimension(e,t){let i=e*t,s=X.NearestPOT(i+16384/(128+i));return Math.min(X.FloorPOT(e),s)}_prepareRenderingManager(e,t,i,s){let r=this.getScene();if(!r)return;this._renderingManager.reset();let n=r.getRenderId();for(let o=0;o<t;o++){let h=e[o];if(h&&!h.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(h,this.refreshRate,!1)){this.resetRefreshCounter();continue}}else if(!h.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!h._internalAbstractMeshDataInfo._currentLODIsUpToDate&&r.activeCamera&&(h._internalAbstractMeshDataInfo._currentLOD=r.customLODSelector?r.customLODSelector(h,this.activeCamera||r.activeCamera):h.getLOD(this.activeCamera||r.activeCamera),h._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!h._internalAbstractMeshDataInfo._currentLOD)continue;let l=h._internalAbstractMeshDataInfo._currentLOD;l._preActivateForIntermediateRendering(n);let c;if(s&&i?c=(h.layerMask&i.layerMask)===0:c=!1,h.isEnabled()&&h.isVisible&&h.subMeshes&&!c&&(l!==h&&l._activate(n,!0),h._activate(n,!0)&&h.subMeshes.length)){h.isAnInstance?h._internalAbstractMeshDataInfo._actAsRegularMesh&&(l=h):l._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,l._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(let d=0;d<l.subMeshes.length;d++){let f=l.subMeshes[d];this._renderingManager.dispatch(f,l)}}}}for(let o=0;o<r.particleSystems.length;o++){let h=r.particleSystems[o],l=h.emitter;!h.isStarted()||!l||l.position&&!l.isEnabled()||this._renderingManager.dispatchParticles(h)}}_bindFrameBuffer(e=0,t=0){let i=this.getScene();if(!i)return;let s=i.getEngine();this._renderTarget&&s.bindFramebuffer(this._renderTarget,this.isCube?e:void 0,void 0,void 0,this.ignoreCameraViewport,0,t)}_unbindFrameBuffer(e,t){this._renderTarget&&e.unBindFramebuffer(this._renderTarget,this.isCube,()=>{this.onAfterRenderObservable.notifyObservers(t)})}_prepareFrame(e,t,i,s){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!s||!e.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(t,i)}_renderToTarget(e,t,i,s=0,r=null){var n,o,h,l,c,d;let f=this.getScene();if(!f)return;let p=f.getEngine();if((n=p._debugPushGroup)===null||n===void 0||n.call(p,`render to face #${e} layer #${s}`,1),this._prepareFrame(f,e,s,t),this.is2DArray?(p.currentRenderPassId=this._renderPassIds[s],this.onBeforeRenderObservable.notifyObservers(s)):(p.currentRenderPassId=this._renderPassIds[e],this.onBeforeRenderObservable.notifyObservers(e)),p.snapshotRendering&&p.snapshotRenderingMode===1)this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(p):this.skipInitialClear||p.clear(this.clearColor||f.clearColor,!0,!0,!0);else{let g=null,_=this.renderList?this.renderList:f.getActiveMeshes().data,m=this.renderList?this.renderList.length:f.getActiveMeshes().length;this.getCustomRenderList&&(g=this.getCustomRenderList(this.is2DArray?s:e,_,m)),g?this._prepareRenderingManager(g,g.length,r,this.forceLayerMaskCheck):(this._defaultRenderListPrepared||(this._prepareRenderingManager(_,m,r,!this.renderList||this.forceLayerMaskCheck),this._defaultRenderListPrepared=!0),g=_);for(let A of f._beforeRenderTargetClearStage)A.action(this,e,s);this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(p):this.skipInitialClear||p.clear(this.clearColor||f.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||f.updateTransformMatrix(!0);for(let A of f._beforeRenderTargetDrawStage)A.action(this,e,s);this._renderingManager.render(this.customRenderFunction,g,this.renderParticles,this.renderSprites);for(let A of f._afterRenderTargetDrawStage)A.action(this,e,s);let T=(h=(o=this._texture)===null||o===void 0?void 0:o.generateMipMaps)!==null&&h!==void 0?h:!1;this._texture&&(this._texture.generateMipMaps=!1),this._postProcessManager?this._postProcessManager._finalizeFrame(!1,(l=this._renderTarget)!==null&&l!==void 0?l:void 0,e,this._postProcesses,this.ignoreCameraViewport):t&&f.postProcessManager._finalizeFrame(!1,(c=this._renderTarget)!==null&&c!==void 0?c:void 0,e);for(let A of f._afterRenderTargetPostProcessStage)A.action(this,e,s);this._texture&&(this._texture.generateMipMaps=T),this._doNotChangeAspectRatio||f.updateTransformMatrix(!0),i&&Ge.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),p)}this._unbindFrameBuffer(p,e),this._texture&&this.isCube&&e===5&&p.generateMipMapsForCubemap(this._texture),(d=p._debugPopGroup)===null||d===void 0||d.call(p,1)}setRenderingOrder(e,t=null,i=null,s=null){this._renderingManager.setRenderingOrder(e,t,i,s)}setRenderingAutoClearDepthStencil(e,t){this._renderingManager.setRenderingAutoClearDepthStencil(e,t),this._renderingManager._useSceneAutoClearSetup=!1}clone(){let e=this.getSize(),t=new a(this.name,e,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return t.hasAlpha=this.hasAlpha,t.level=this.level,t.coordinatesMode=this.coordinatesMode,this.renderList&&(t.renderList=this.renderList.slice(0)),t}serialize(){if(!this.name)return null;let e=super.serialize();if(e.renderTargetSize=this.getRenderSize(),e.renderList=[],this.renderList)for(let t=0;t<this.renderList.length;t++)e.renderList.push(this.renderList[t].id);return e}disposeFramebufferObjects(){var e;(e=this._renderTarget)===null||e===void 0||e.dispose(!0)}releaseInternalTexture(){var e;(e=this._renderTarget)===null||e===void 0||e.releaseTextures(),this._texture=null}dispose(){var e;this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this._releaseRenderPassId(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;let t=this.getScene();if(!t)return;let i=t.customRenderTargets.indexOf(this);i>=0&&t.customRenderTargets.splice(i,1);for(let s of t.cameras)i=s.customRenderTargets.indexOf(this),i>=0&&s.customRenderTargets.splice(i,1);(e=this._renderTarget)===null||e===void 0||e.dispose(),this._renderTarget=null,this._texture=null,super.dispose()}_rebuild(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()}freeRenderingGroups(){this._renderingManager&&this._renderingManager.freeRenderingGroups()}getViewCount(){return 1}};he.REFRESHRATE_RENDER_ONCE=0;he.REFRESHRATE_RENDER_ONEVERYFRAME=1;he.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2;E._CreateRenderTargetTexture=(a,e,t,i,s)=>new he(a,e,t,i);var G=class a{static RegisterShaderCodeProcessing(e,t){if(!t){delete a._CustomShaderCodeProcessing[e??""];return}a._CustomShaderCodeProcessing[e??""]=t}static _GetShaderCodeProcessing(e){var t;return(t=a._CustomShaderCodeProcessing[e])!==null&&t!==void 0?t:a._CustomShaderCodeProcessing[""]}get samples(){return this._samples}set samples(e){this._samples=Math.min(e,this._engine.getCaps().maxMSAASamples),this._textures.forEach(t=>{t.setSamples(this._samples)})}getEffectName(){return this._fragmentUrl}set onActivate(e){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),e&&(this._onActivateObserver=this.onActivateObservable.add(e))}set onSizeChanged(e){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(e)}set onApply(e){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}get inputTexture(){return this._textures.data[this._currentRenderTextureInd]}set inputTexture(e){this._forcedOutputTexture=e}restoreDefaultInputTexture(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())}getCamera(){return this._camera}get texelSize(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)}constructor(e,t,i,s,r,n,o=1,h,l,c=null,d=0,f="postprocess",p,g=!1,_=5,m=si.GLSL){this._parentContainer=null,this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.forceAutoClearInAlphaMode=!1,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this.externalTextureSamplerBinding=!1,this._textures=new _t(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new ye(1,1),this._texelSize=ye.Zero(),this.onActivateObservable=new k,this.onSizeChangedObservable=new k,this.onApplyObservable=new k,this.onBeforeRenderObservable=new k,this.onAfterRenderObservable=new k,this.name=e,n!=null?(this._camera=n,this._scene=n.getScene(),n.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):h&&(this._engine=h,this._engine.postProcesses.push(this)),this._options=r,this.renderTargetSamplingMode=o||1,this._reusable=l||!1,this._textureType=d,this._textureFormat=_,this._shaderLanguage=m,this._samplers=s||[],this._samplers.push("textureSampler"),this._fragmentUrl=t,this._vertexUrl=f,this._parameters=i||[],this._parameters.push("scale"),this._indexParameters=p,this._drawWrapper=new pt(this._engine),g||this.updateEffect(c)}getClassName(){return"PostProcess"}getEngine(){return this._engine}getEffect(){return this._drawWrapper.effect}shareOutputWith(e){return this._disposeTextures(),this._shareOutputWithPostProcess=e,this}useOwnOutput(){this._textures.length==0&&(this._textures=new _t(2)),this._shareOutputWithPostProcess=null}updateEffect(e=null,t=null,i=null,s,r,n,o,h){var l,c;let d=a._GetShaderCodeProcessing(this.name);if(d!=null&&d.defineCustomBindings){let f=(l=t?.slice())!==null&&l!==void 0?l:[];f.push(...this._parameters);let p=(c=i?.slice())!==null&&c!==void 0?c:[];p.push(...this._samplers),e=d.defineCustomBindings(this.name,e,f,p),t=f,i=p}this._postProcessDefines=e,this._drawWrapper.effect=this._engine.createEffect({vertex:o??this._vertexUrl,fragment:h??this._fragmentUrl},{attributes:["position"],uniformsNames:t||this._parameters,uniformBuffersNames:[],samplers:i||this._samplers,defines:e!==null?e:"",fallbacks:null,onCompiled:r??null,onError:n??null,indexParameters:s||this._indexParameters,processCodeAfterIncludes:d!=null&&d.processCodeAfterIncludes?(f,p)=>d.processCodeAfterIncludes(this.name,f,p):null,processFinalCode:d!=null&&d.processFinalCode?(f,p)=>d.processFinalCode(this.name,f,p):null,shaderLanguage:this._shaderLanguage},this._engine)}isReusable(){return this._reusable}markTextureDirty(){this.width=-1}_createRenderTargetTexture(e,t,i=0){for(let r=0;r<this._textureCache.length;r++)if(this._textureCache[r].texture.width===e.width&&this._textureCache[r].texture.height===e.height&&this._textureCache[r].postProcessChannel===i&&this._textureCache[r].texture._generateDepthBuffer===t.generateDepthBuffer&&this._textureCache[r].texture.samples===t.samples)return this._textureCache[r].texture;let s=this._engine.createRenderTargetTexture(e,t);return this._textureCache.push({texture:s,postProcessChannel:i,lastUsedRenderId:-1}),s}_flushTextureCache(){let e=this._renderId;for(let t=this._textureCache.length-1;t>=0;t--)if(e-this._textureCache[t].lastUsedRenderId>100){let i=!1;for(let s=0;s<this._textures.length;s++)if(this._textures.data[s]===this._textureCache[t].texture){i=!0;break}i||(this._textureCache[t].texture.dispose(),this._textureCache.splice(t,1))}}_resize(e,t,i,s,r){this._textures.length>0&&this._textures.reset(),this.width=e,this.height=t;let n=null;for(let l=0;l<i._postProcesses.length;l++)if(i._postProcesses[l]!==null){n=i._postProcesses[l];break}let o={width:this.width,height:this.height},h={generateMipMaps:s,generateDepthBuffer:r||n===this,generateStencilBuffer:(r||n===this)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat,samples:this._samples,label:"PostProcessRTT-"+this.name};this._textures.push(this._createRenderTargetTexture(o,h,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(o,h,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)}activate(e,t=null,i){var s,r;e=e||this._camera;let n=e.getScene(),o=n.getEngine(),h=o.getCaps().maxTextureSize,l=(t?t.width:this._engine.getRenderWidth(!0))*this._options|0,c=(t?t.height:this._engine.getRenderHeight(!0))*this._options|0,d=e.parent;d&&(d.leftCamera==e||d.rightCamera==e)&&(l/=2);let f=this._options.width||l,p=this._options.height||c,g=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){let m=o.currentViewport;m&&(f*=m.width,p*=m.height)}(g||this.alwaysForcePOT)&&(this._options.width||(f=o.needPOTTextures?X.GetExponentOfTwo(f,h,this.scaleMode):f),this._options.height||(p=o.needPOTTextures?X.GetExponentOfTwo(p,h,this.scaleMode):p)),(this.width!==f||this.height!==p)&&this._resize(f,p,e,g,i),this._textures.forEach(m=>{m.samples!==this.samples&&this._engine.updateRenderTargetTextureSampleCount(m,this.samples)}),this._flushTextureCache(),this._renderId++}let _;if(this._shareOutputWithPostProcess)_=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)_=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{_=this.inputTexture;let m;for(let T=0;T<this._textureCache.length;T++)if(this._textureCache[T].texture===_){m=this._textureCache[T];break}m&&(m.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(l/f,c/p),this._engine.bindFramebuffer(_,0,l,c,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(_,0,void 0,void 0,this.forceFullscreenViewport)),(r=(s=this._engine)._debugInsertMarker)===null||r===void 0||r.call(s,`post process ${this.name} input`),this.onActivateObservable.notifyObservers(e),this.autoClear&&(this.alphaMode===0||this.forceAutoClearInAlphaMode)&&this._engine.clear(this.clearColor?this.clearColor:n.clearColor,n._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),_}get isSupported(){return this._drawWrapper.effect.isSupported}get aspectRatio(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height}isReady(){var e,t;return(t=(e=this._drawWrapper.effect)===null||e===void 0?void 0:e.isReady())!==null&&t!==void 0?t:!1}apply(){var e,t,i;if(!(!((e=this._drawWrapper.effect)===null||e===void 0)&&e.isReady()))return null;this._engine.enableEffect(this._drawWrapper),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);let s;return this._shareOutputWithPostProcess?s=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?s=this._forcedOutputTexture:s=this.inputTexture,this.externalTextureSamplerBinding||this._drawWrapper.effect._bindTexture("textureSampler",s?.texture),this._drawWrapper.effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._drawWrapper.effect),(i=(t=a._GetShaderCodeProcessing(this.name))===null||t===void 0?void 0:t.bindCustomBindings)===null||i===void 0||i.call(t,this.name,this._drawWrapper.effect),this._drawWrapper.effect}_disposeTextures(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()}_disposeTextureCache(){for(let e=this._textureCache.length-1;e>=0;e--)this._textureCache[e].texture.dispose();this._textureCache.length=0}setPrePassRenderer(e){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=e.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1}dispose(e){e=e||this._camera,this._disposeTextures();let t;if(this._scene&&(t=this._scene.postProcesses.indexOf(this),t!==-1&&this._scene.postProcesses.splice(t,1)),this._parentContainer){let i=this._parentContainer.postProcesses.indexOf(this);i>-1&&this._parentContainer.postProcesses.splice(i,1),this._parentContainer=null}if(t=this._engine.postProcesses.indexOf(this),t!==-1&&this._engine.postProcesses.splice(t,1),!!e){if(e.detachPostProcess(this),t=e._postProcesses.indexOf(this),t===0&&e._postProcesses.length>0){let i=this._camera._getFirstPostProcess();i&&i.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}}serialize(){let e=Z.Serialize(this),t=this.getCamera()||this._scene&&this._scene.activeCamera;return e.customType="BABYLON."+this.getClassName(),e.cameraId=t?t.id:null,e.reusable=this._reusable,e.textureType=this._textureType,e.fragmentUrl=this._fragmentUrl,e.parameters=this._parameters,e.samplers=this._samplers,e.options=this._options,e.defines=this._postProcessDefines,e.textureFormat=this._textureFormat,e.vertexUrl=this._vertexUrl,e.indexParameters=this._indexParameters,e}clone(){let e=this.serialize();e._engine=this._engine,e.cameraId=null;let t=a.Parse(e,this._scene,"");return t?(t.onActivateObservable=this.onActivateObservable.clone(),t.onSizeChangedObservable=this.onSizeChangedObservable.clone(),t.onApplyObservable=this.onApplyObservable.clone(),t.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),t.onAfterRenderObservable=this.onAfterRenderObservable.clone(),t._prePassEffectConfiguration=this._prePassEffectConfiguration,t):null}static Parse(e,t,i){let s=mt(e.customType);if(!s||!s._Parse)return null;let r=t?t.getCameraById(e.cameraId):null;return s._Parse(e,r,t,i)}static _Parse(e,t,i,s){return Z.Parse(()=>new a(e.name,e.fragmentUrl,e.parameters,e.samplers,e.options,t,e.renderTargetSamplingMode,e._engine,e.reusable,e.defines,e.textureType,e.vertexUrl,e.indexParameters,!1,e.textureFormat),e,i,s)}};G._CustomShaderCodeProcessing={};u([v()],G.prototype,"uniqueId",void 0);u([v()],G.prototype,"name",void 0);u([v()],G.prototype,"width",void 0);u([v()],G.prototype,"height",void 0);u([v()],G.prototype,"renderTargetSamplingMode",void 0);u([ui()],G.prototype,"clearColor",void 0);u([v()],G.prototype,"autoClear",void 0);u([v()],G.prototype,"forceAutoClearInAlphaMode",void 0);u([v()],G.prototype,"alphaMode",void 0);u([v()],G.prototype,"alphaConstants",void 0);u([v()],G.prototype,"enablePixelPerfectMode",void 0);u([v()],G.prototype,"forceFullscreenViewport",void 0);u([v()],G.prototype,"scaleMode",void 0);u([v()],G.prototype,"alwaysForcePOT",void 0);u([v("samples")],G.prototype,"_samples",void 0);u([v()],G.prototype,"adaptScaleToCurrentViewport",void 0);Ie("BABYLON.PostProcess",G);var Vi="kernelBlurVaryingDeclaration",Xi="varying vec2 sampleCoord{X};";S.IncludesShadersStore[Vi]=Xi;var zi="packingFunctions",Wi=`vec4 pack(float depth)
{
const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);
const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);
vec4 res=fract(depth*bit_shift);
res-=res.xxyz*bit_mask;
return res;
}
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}`;S.IncludesShadersStore[zi]=Wi;var ki="kernelBlurFragment",Gi=`#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;S.IncludesShadersStore[ki]=Gi;var Hi="kernelBlurFragment2",Yi=`#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});
computedWeight=KERNEL_DEP_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;S.IncludesShadersStore[Hi]=Yi;var Zi="kernelBlurPixelShader",ji=`uniform sampler2D textureSampler;
uniform vec2 delta;
varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;
float sampleCoC(in vec2 offset) {
float coc=texture2D(circleOfConfusionSampler,offset).r;
return coc; 
}
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;S.ShadersStore[Zi]=ji;var Qi="kernelBlurVertex",Ki="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";S.IncludesShadersStore[Qi]=Ki;var qi="kernelBlurVertexShader",$i=`attribute vec2 position;
uniform vec2 delta;
varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;S.ShadersStore[qi]=$i;var Ae=class a extends G{set kernel(e){this._idealKernel!==e&&(e=Math.max(e,1),this._idealKernel=e,this._kernel=this._nearestBestKernel(e),this._blockCompilation||this._updateParameters())}get kernel(){return this._idealKernel}set packedFloat(e){this._packedFloat!==e&&(this._packedFloat=e,this._blockCompilation||this._updateParameters())}get packedFloat(){return this._packedFloat}getClassName(){return"BlurPostProcess"}constructor(e,t,i,s,r,n=E.BILINEAR_SAMPLINGMODE,o,h,l=0,c="",d=!1,f=5){super(e,"kernelBlur",["delta","direction"],["circleOfConfusionSampler"],s,r,n,o,h,null,l,"kernelBlur",{varyingCount:0,depCount:0},!0,f),this._blockCompilation=d,this._packedFloat=!1,this._staticDefines="",this._staticDefines=c,this.direction=t,this.onApplyObservable.add(p=>{this._outputTexture?p.setFloat2("delta",1/this._outputTexture.width*this.direction.x,1/this._outputTexture.height*this.direction.y):p.setFloat2("delta",1/this.width*this.direction.x,1/this.height*this.direction.y)}),this.kernel=i}updateEffect(e=null,t=null,i=null,s,r,n){this._updateParameters(r,n)}_updateParameters(e,t){let i=this._kernel,s=(i-1)/2,r=[],n=[],o=0;for(let m=0;m<i;m++){let T=m/(i-1),A=this._gaussianWeight(T*2-1);r[m]=m-s,n[m]=A,o+=A}for(let m=0;m<n.length;m++)n[m]/=o;let h=[],l=[],c=[];for(let m=0;m<=s;m+=2){let T=Math.min(m+1,Math.floor(s));if(m===T)c.push({o:r[m],w:n[m]});else{let A=T===s,L=n[m]+n[T]*(A?.5:1),D=r[m]+1/(1+n[m]/n[T]);D===0?(c.push({o:r[m],w:n[m]}),c.push({o:r[m+1],w:n[m+1]})):(c.push({o:D,w:L}),c.push({o:-D,w:L}))}}for(let m=0;m<c.length;m++)l[m]=c[m].o,h[m]=c[m].w;r=l,n=h;let d=this.getEngine().getCaps().maxVaryingVectors,f=Math.max(d,0)-1,p=Math.min(r.length,f),g="";g+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(g+=`#define CENTER_WEIGHT ${this._glslFloat(n[p-1])}\r
`,p--);for(let m=0;m<p;m++)g+=`#define KERNEL_OFFSET${m} ${this._glslFloat(r[m])}\r
`,g+=`#define KERNEL_WEIGHT${m} ${this._glslFloat(n[m])}\r
`;let _=0;for(let m=f;m<r.length;m++)g+=`#define KERNEL_DEP_OFFSET${_} ${this._glslFloat(r[m])}\r
`,g+=`#define KERNEL_DEP_WEIGHT${_} ${this._glslFloat(n[m])}\r
`,_++;this.packedFloat&&(g+="#define PACKEDFLOAT 1"),this._blockCompilation=!1,super.updateEffect(g,null,null,{varyingCount:p,depCount:_},e,t)}_nearestBestKernel(e){let t=Math.round(e);for(let i of[t,t-1,t+1,t-2,t+2])if(i%2!==0&&Math.floor(i/2)%2===0&&i>0)return Math.max(i,3);return Math.max(t,3)}_gaussianWeight(e){let t=.3333333333333333,i=Math.sqrt(2*Math.PI)*t,s=-(e*e/(2*t*t));return 1/i*Math.exp(s)}_glslFloat(e,t=8){return e.toFixed(t).replace(/0+$/,"")}static _Parse(e,t,i,s){return Z.Parse(()=>new a(e.name,e.direction,e.kernel,e.options,t,e.renderTargetSamplingMode,i.getEngine(),e.reusable,e.textureType,void 0,!1),e,i,s)}};u([v("kernel")],Ae.prototype,"_kernel",void 0);u([v("packedFloat")],Ae.prototype,"_packedFloat",void 0);u([di()],Ae.prototype,"direction",void 0);Ie("BABYLON.BlurPostProcess",Ae);var ct=class{constructor(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}unBindMesh(){this._mesh=null}addFallback(e,t){this._defines[e]||(e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e),this._defines[e]=new Array),this._defines[e].push(t)}addCPUSkinningFallback(e,t){this._mesh=t,e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e)}get hasMoreFallbacks(){return this._currentRank<=this._maxRank}reduce(e,t){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,e=e.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),t._bonesComputationForcedToCPU=!0;let i=this._mesh.getScene();for(let s=0;s<i.meshes.length;s++){let r=i.meshes[s];if(!r.material){!this._mesh.material&&r.computeBonesUsingShaders&&r.numBoneInfluencers>0&&(r.computeBonesUsingShaders=!1);continue}if(!(!r.computeBonesUsingShaders||r.numBoneInfluencers===0)){if(r.material.getEffect()===t)r.computeBonesUsingShaders=!1;else if(r.subMeshes){for(let n of r.subMeshes)if(n.effect===t){r.computeBonesUsingShaders=!1;break}}}}}else{let i=this._defines[this._currentRank];if(i)for(let s=0;s<i.length;s++)e=e.replace("#define "+i[s],"");this._currentRank++}return e}},Ji="bayerDitherFunctions",er=`float bayerDither2(vec2 _P) {
return mod(2.0*_P.y+_P.x+1.0,4.0);
}
float bayerDither4(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);
}
float bayerDither8(vec2 _P) {
vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);
}
`;S.IncludesShadersStore[Ji]=er;var tr="shadowMapFragmentExtraDeclaration",ir=`#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform float softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;
varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;S.IncludesShadersStore[tr]=ir;var rr="clipPlaneFragmentDeclaration",sr=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;S.IncludesShadersStore[rr]=sr;var ar="clipPlaneFragment",nr=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{
discard;
}
#endif
`;S.IncludesShadersStore[ar]=nr;var or="shadowMapFragment",lr=`float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;S.IncludesShadersStore[or]=lr;var hr="shadowMapPixelShader",dr=`#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
float alphaFromAlphaTexture=texture2D(diffuseSampler,vUV).a;
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM) discard;
#endif
#endif
#include<shadowMapFragment>
}`;S.ShadersStore[hr]=dr;var cr="bonesDeclaration",ur=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;
attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;
attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform sampler2D boneSampler;
uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{
float offset=index *4.0;
float dx=1.0/boneTextureWidth;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));
return mat4(m0,m1,m2,m3);
}
#endif
#endif
#endif
`;S.IncludesShadersStore[cr]=ur;var fr="bakedVertexAnimationDeclaration",pr=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;
uniform vec2 bakedVertexAnimationTextureSizeInverted;
uniform vec4 bakedVertexAnimationSettings;
uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{
float offset=index*4.0;
float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;
float dx=bakedVertexAnimationTextureSizeInverted.x;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));
return mat4(m0,m1,m2,m3);
}
#endif
`;S.IncludesShadersStore[fr]=pr;var mr="morphTargetsVertexGlobalDeclaration",_r=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
precision mediump sampler2DArray; 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];
uniform vec3 morphTargetTextureInfo;
uniform sampler2DArray morphTargets;
vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);
float x=vertexIndex-y*morphTargetTextureInfo.y;
vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);
return texture(morphTargets,textureUV).xyz;
}
#endif
#endif
`;S.IncludesShadersStore[mr]=_r;var gr="morphTargetsVertexDeclaration",vr=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#endif
#endif
`;S.IncludesShadersStore[gr]=vr;var Sr="helperFunctions",Er=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}
mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{
vec3 nearZeroSection=0.0773993808*color;
vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{
vec3 nearZeroSection=12.92*color;
vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;
float remainingSection=pow(0.947867299*(color+0.055),2.4);
return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;
float remainingSection=1.055*pow(color,0.41666)-0.055;
return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{
return value*value;
}
vec3 square(vec3 value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}
float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float normVariance=varianceAmount/255.0;
float dither=mix(-normVariance,normVariance,rand);
return dither;
}
const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D =max(rgbdMaxRange/maxRGB,1.);
D =clamp(floor(D)/255.0,0.,1.);
vec3 rgb=color.rgb*D;
rgb=toGammaSpace(rgb);
return vec4(clamp(rgb,0.,1.),D); 
}
vec3 fromRGBD(vec4 rgbd) {
rgbd.rgb=toLinearSpace(rgbd.rgb);
return rgbd.rgb/rgbd.a;
}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {
vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;
vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);
float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);
vec3 intersectPositionWS=vertexPos+origVec*distance;
return intersectPositionWS-cubePos;
}
`;S.IncludesShadersStore[Sr]=Er;var Tr="sceneVertexDeclaration",xr=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;
uniform mat4 projection;
uniform vec4 vEyePosition;
`;S.IncludesShadersStore[Tr]=xr;var Mr="meshVertexDeclaration",Ar=`uniform mat4 world;
uniform float visibility;
`;S.IncludesShadersStore[Mr]=Ar;var Cr="shadowMapVertexDeclaration",Ir=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;S.IncludesShadersStore[Cr]=Ir;var Rr="sceneUboDeclaration",Pr=`layout(std140,column_major) uniform;
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;
mat4 projection;
vec4 vEyePosition;
};
`;S.IncludesShadersStore[Rr]=Pr;var br="meshUboDeclaration",Dr=`#ifdef WEBGL2
uniform mat4 world;
uniform float visibility;
#else
layout(std140,column_major) uniform;
uniform Mesh
{
mat4 world;
float visibility;
};
#endif
#define WORLD_UBO
`;S.IncludesShadersStore[br]=Dr;var Lr="shadowMapUboDeclaration",wr=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;S.IncludesShadersStore[Lr]=wr;var Or="shadowMapVertexExtraDeclaration",Fr=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;S.IncludesShadersStore[Or]=Fr;var Nr="clipPlaneVertexDeclaration",yr=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif
`;S.IncludesShadersStore[Nr]=yr;var Ur="morphTargetsVertexGlobal",Br=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;S.IncludesShadersStore[Ur]=Br;var Vr="morphTargetsVertex",Xr=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE 
vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
positionUpdated+=(readVector3FromRawSampler({X},vertexID)-position)*morphTargetInfluences[{X}];
vertexID+=1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler({X},vertexID) -normal)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler({X},vertexID).xy-uv)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler({X},vertexID) -tangent.xyz)*morphTargetInfluences[{X}];
#endif
#else
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;S.IncludesShadersStore[Vr]=Xr;var zr="instancesVertex",Wr=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;S.IncludesShadersStore[zr]=Wr;var kr="bonesVertex",Gr=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;S.IncludesShadersStore[kr]=Gr;var Hr="bakedVertexAnimation",Yr=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;
float VATEndFrame=BVASNAME.y;
float VATOffsetFrame=BVASNAME.z;
float VATSpeed=BVASNAME.w;
float totalFrames=VATEndFrame-VATStartFrame+1.0;
float time=bakedVertexAnimationTime*VATSpeed/totalFrames;
float frameCorrection=time<1.0 ? 0.0 : 1.0;
float numOfFrames=totalFrames-frameCorrection;
float VATFrameNum=fract(time)*numOfFrames;
VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);
VATFrameNum=floor(VATFrameNum);
VATFrameNum+=VATStartFrame+frameCorrection;
mat4 VATInfluence;
VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;
}
#endif
`;S.IncludesShadersStore[Hr]=Yr;var Zr="shadowMapVertexNormalBias",jr=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;
vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);
float sinNLSM=sqrt(1.0-ndlSM*ndlSM);
float normalBiasSM=biasAndScaleSM.y*sinNLSM;
worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;S.IncludesShadersStore[Zr]=jr;var Qr="shadowMapVertexMetric",Kr=`#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;
gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;S.IncludesShadersStore[Qr]=Kr;var qr="clipPlaneVertex",$r=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;S.IncludesShadersStore[qr]=$r;var Jr="shadowMapVertexShader",es=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));
vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;S.ShadersStore[Jr]=es;var ts="depthBoxBlurPixelShader",is=`varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
vec4 colorDepth=vec4(0.0);
for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);
gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));
}`;S.ShadersStore[ts]=is;var rs="shadowMapFragmentSoftTransparentShadow",ss=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alpha) discard;
#endif
`;S.IncludesShadersStore[rs]=ss;var B=class a{get bias(){return this._bias}set bias(e){this._bias=e}get normalBias(){return this._normalBias}set normalBias(e){this._normalBias=e}get blurBoxOffset(){return this._blurBoxOffset}set blurBoxOffset(e){this._blurBoxOffset!==e&&(this._blurBoxOffset=e,this._disposeBlurPostProcesses())}get blurScale(){return this._blurScale}set blurScale(e){this._blurScale!==e&&(this._blurScale=e,this._disposeBlurPostProcesses())}get blurKernel(){return this._blurKernel}set blurKernel(e){this._blurKernel!==e&&(this._blurKernel=e,this._disposeBlurPostProcesses())}get useKernelBlur(){return this._useKernelBlur}set useKernelBlur(e){this._useKernelBlur!==e&&(this._useKernelBlur=e,this._disposeBlurPostProcesses())}get depthScale(){return this._depthScale!==void 0?this._depthScale:this._light.getDepthScale()}set depthScale(e){this._depthScale=e}_validateFilter(e){return e}get filter(){return this._filter}set filter(e){if(e=this._validateFilter(e),this._light.needCube()){if(e===a.FILTER_BLUREXPONENTIALSHADOWMAP){this.useExponentialShadowMap=!0;return}else if(e===a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP){this.useCloseExponentialShadowMap=!0;return}else if(e===a.FILTER_PCF||e===a.FILTER_PCSS){this.usePoissonSampling=!0;return}}if((e===a.FILTER_PCF||e===a.FILTER_PCSS)&&!this._scene.getEngine()._features.supportShadowSamplers){this.usePoissonSampling=!0;return}this._filter!==e&&(this._filter=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get usePoissonSampling(){return this.filter===a.FILTER_POISSONSAMPLING}set usePoissonSampling(e){let t=this._validateFilter(a.FILTER_POISSONSAMPLING);!e&&this.filter!==a.FILTER_POISSONSAMPLING||(this.filter=e?t:a.FILTER_NONE)}get useExponentialShadowMap(){return this.filter===a.FILTER_EXPONENTIALSHADOWMAP}set useExponentialShadowMap(e){let t=this._validateFilter(a.FILTER_EXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_EXPONENTIALSHADOWMAP||(this.filter=e?t:a.FILTER_NONE)}get useBlurExponentialShadowMap(){return this.filter===a.FILTER_BLUREXPONENTIALSHADOWMAP}set useBlurExponentialShadowMap(e){let t=this._validateFilter(a.FILTER_BLUREXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_BLUREXPONENTIALSHADOWMAP||(this.filter=e?t:a.FILTER_NONE)}get useCloseExponentialShadowMap(){return this.filter===a.FILTER_CLOSEEXPONENTIALSHADOWMAP}set useCloseExponentialShadowMap(e){let t=this._validateFilter(a.FILTER_CLOSEEXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_CLOSEEXPONENTIALSHADOWMAP||(this.filter=e?t:a.FILTER_NONE)}get useBlurCloseExponentialShadowMap(){return this.filter===a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP}set useBlurCloseExponentialShadowMap(e){let t=this._validateFilter(a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);!e&&this.filter!==a.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP||(this.filter=e?t:a.FILTER_NONE)}get usePercentageCloserFiltering(){return this.filter===a.FILTER_PCF}set usePercentageCloserFiltering(e){let t=this._validateFilter(a.FILTER_PCF);!e&&this.filter!==a.FILTER_PCF||(this.filter=e?t:a.FILTER_NONE)}get filteringQuality(){return this._filteringQuality}set filteringQuality(e){this._filteringQuality!==e&&(this._filteringQuality=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get useContactHardeningShadow(){return this.filter===a.FILTER_PCSS}set useContactHardeningShadow(e){let t=this._validateFilter(a.FILTER_PCSS);!e&&this.filter!==a.FILTER_PCSS||(this.filter=e?t:a.FILTER_NONE)}get contactHardeningLightSizeUVRatio(){return this._contactHardeningLightSizeUVRatio}set contactHardeningLightSizeUVRatio(e){this._contactHardeningLightSizeUVRatio=e}get darkness(){return this._darkness}set darkness(e){this.setDarkness(e)}getDarkness(){return this._darkness}setDarkness(e){return e>=1?this._darkness=1:e<=0?this._darkness=0:this._darkness=e,this}get transparencyShadow(){return this._transparencyShadow}set transparencyShadow(e){this.setTransparencyShadow(e)}setTransparencyShadow(e){return this._transparencyShadow=e,this}getShadowMap(){return this._shadowMap}getShadowMapForRendering(){return this._shadowMap2?this._shadowMap2:this._shadowMap}getClassName(){return a.CLASSNAME}addShadowCaster(e,t=!0){if(!this._shadowMap)return this;if(this._shadowMap.renderList||(this._shadowMap.renderList=[]),this._shadowMap.renderList.indexOf(e)===-1&&this._shadowMap.renderList.push(e),t)for(let i of e.getChildMeshes())this._shadowMap.renderList.indexOf(i)===-1&&this._shadowMap.renderList.push(i);return this}removeShadowCaster(e,t=!0){if(!this._shadowMap||!this._shadowMap.renderList)return this;let i=this._shadowMap.renderList.indexOf(e);if(i!==-1&&this._shadowMap.renderList.splice(i,1),t)for(let s of e.getChildren())this.removeShadowCaster(s);return this}getLight(){return this._light}_getCamera(){var e;return(e=this._camera)!==null&&e!==void 0?e:this._scene.activeCamera}get mapSize(){return this._mapSize}set mapSize(e){this._mapSize=e,this._light._markMeshesAsLightDirty(),this.recreateShadowMap()}constructor(e,t,i,s){this.onBeforeShadowMapRenderObservable=new k,this.onAfterShadowMapRenderObservable=new k,this.onBeforeShadowMapRenderMeshObservable=new k,this.onAfterShadowMapRenderMeshObservable=new k,this._bias=5e-5,this._normalBias=0,this._blurBoxOffset=1,this._blurScale=2,this._blurKernel=1,this._useKernelBlur=!1,this._filter=a.FILTER_NONE,this._filteringQuality=a.QUALITY_HIGH,this._contactHardeningLightSizeUVRatio=.1,this._darkness=0,this._transparencyShadow=!1,this.enableSoftTransparentShadow=!1,this.useOpacityTextureForTransparentShadow=!1,this.frustumEdgeFalloff=0,this.forceBackFacesOnly=!1,this._lightDirection=x.Zero(),this._viewMatrix=R.Zero(),this._projectionMatrix=R.Zero(),this._transformMatrix=R.Zero(),this._cachedPosition=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cachedDirection=new x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._currentFaceIndex=0,this._currentFaceIndexCache=0,this._defaultTextureMatrix=R.Identity(),this._mapSize=e,this._light=t,this._scene=t.getScene(),this._camera=s??null;let r=t._shadowGenerators;r||(r=t._shadowGenerators=new Map),r.set(this._camera,this),this.id=t.id,this._useUBO=this._scene.getEngine().supportsUniformBuffers,this._useUBO&&(this._sceneUBOs=[],this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for Shadow Generator (light "${this._light.name}")`))),a._SceneComponentInitialization(this._scene);let n=this._scene.getEngine().getCaps();i?n.textureFloatRender&&n.textureFloatLinearFiltering?this._textureType=1:n.textureHalfFloatRender&&n.textureHalfFloatLinearFiltering?this._textureType=2:this._textureType=0:n.textureHalfFloatRender&&n.textureHalfFloatLinearFiltering?this._textureType=2:n.textureFloatRender&&n.textureFloatLinearFiltering?this._textureType=1:this._textureType=0,this._initializeGenerator(),this._applyFilterValues()}_initializeGenerator(){this._light._markMeshesAsLightDirty(),this._initializeShadowMap()}_createTargetRenderTexture(){let e=this._scene.getEngine();e._features.supportDepthStencilTexture?(this._shadowMap=new he(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube(),void 0,!1,!1),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0)):this._shadowMap=new he(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube())}_initializeShadowMap(){if(this._createTargetRenderTexture(),this._shadowMap===null)return;this._shadowMap.wrapU=E.CLAMP_ADDRESSMODE,this._shadowMap.wrapV=E.CLAMP_ADDRESSMODE,this._shadowMap.anisotropicFilteringLevel=1,this._shadowMap.updateSamplingMode(E.BILINEAR_SAMPLINGMODE),this._shadowMap.renderParticles=!1,this._shadowMap.ignoreCameraViewport=!0,this._storedUniqueId&&(this._shadowMap.uniqueId=this._storedUniqueId),this._shadowMap.customRenderFunction=this._renderForShadowMap.bind(this),this._shadowMap.customIsReadyFunction=()=>!0;let e=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.add(()=>{var s;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(s=e._debugPushGroup)===null||s===void 0||s.call(e,`shadow map generation for pass id ${e.currentRenderPassId}`,1)}),this._shadowMap.onBeforeRenderObservable.add(s=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[0]),this._currentFaceIndex=s,this._filter===a.FILTER_PCF&&e.setColorWrite(!1),this.getTransformMatrix(),this._scene.setTransformMatrix(this._viewMatrix,this._projectionMatrix),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onAfterUnbindObservable.add(()=>{var s,r;if(this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._currentSceneUBO),this._scene.updateTransformMatrix(),this._filter===a.FILTER_PCF&&e.setColorWrite(!0),!this.useBlurExponentialShadowMap&&!this.useBlurCloseExponentialShadowMap){(s=e._debugPopGroup)===null||s===void 0||s.call(e,1);return}let n=this.getShadowMapForRendering();n&&(this._scene.postProcessManager.directRender(this._blurPostProcesses,n.renderTarget,!0),e.unBindFramebuffer(n.renderTarget,!0),(r=e._debugPopGroup)===null||r===void 0||r.call(e,1))});let t=new Pe(0,0,0,0),i=new Pe(1,1,1,1);this._shadowMap.onClearObservable.add(s=>{this._filter===a.FILTER_PCF?s.clear(i,!1,!0,!1):this.useExponentialShadowMap||this.useBlurExponentialShadowMap?s.clear(t,!0,!0,!1):s.clear(i,!0,!0,!1)}),this._shadowMap.onResizeObservable.add(s=>{this._storedUniqueId=this._shadowMap.uniqueId,this._mapSize=s.getRenderSize(),this._light._markMeshesAsLightDirty(),this.recreateShadowMap()});for(let s=vt.MIN_RENDERINGGROUPS;s<vt.MAX_RENDERINGGROUPS;s++)this._shadowMap.setRenderingAutoClearDepthStencil(s,!1)}_initializeBlurRTTAndPostProcesses(){let e=this._scene.getEngine(),t=this._mapSize/this.blurScale;(!this.useKernelBlur||this.blurScale!==1)&&(this._shadowMap2=new he(this._light.name+"_shadowMap2",t,this._scene,!1,!0,this._textureType,void 0,void 0,!1),this._shadowMap2.wrapU=E.CLAMP_ADDRESSMODE,this._shadowMap2.wrapV=E.CLAMP_ADDRESSMODE,this._shadowMap2.updateSamplingMode(E.BILINEAR_SAMPLINGMODE)),this.useKernelBlur?(this._kernelBlurXPostprocess=new Ae(this._light.name+"KernelBlurX",new ye(1,0),this.blurKernel,1,null,E.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.width=t,this._kernelBlurXPostprocess.height=t,this._kernelBlurXPostprocess.externalTextureSamplerBinding=!0,this._kernelBlurXPostprocess.onApplyObservable.add(i=>{i.setTexture("textureSampler",this._shadowMap)}),this._kernelBlurYPostprocess=new Ae(this._light.name+"KernelBlurY",new ye(0,1),this.blurKernel,1,null,E.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.autoClear=!1,this._kernelBlurYPostprocess.autoClear=!1,this._textureType===0&&(this._kernelBlurXPostprocess.packedFloat=!0,this._kernelBlurYPostprocess.packedFloat=!0),this._blurPostProcesses=[this._kernelBlurXPostprocess,this._kernelBlurYPostprocess]):(this._boxBlurPostprocess=new G(this._light.name+"DepthBoxBlur","depthBoxBlur",["screenSize","boxOffset"],[],1,null,E.BILINEAR_SAMPLINGMODE,e,!1,"#define OFFSET "+this._blurBoxOffset,this._textureType),this._boxBlurPostprocess.externalTextureSamplerBinding=!0,this._boxBlurPostprocess.onApplyObservable.add(i=>{i.setFloat2("screenSize",t,t),i.setTexture("textureSampler",this._shadowMap)}),this._boxBlurPostprocess.autoClear=!1,this._blurPostProcesses=[this._boxBlurPostprocess])}_renderForShadowMap(e,t,i,s){let r;if(s.length)for(r=0;r<s.length;r++)this._renderSubMeshForShadowMap(s.data[r]);for(r=0;r<e.length;r++)this._renderSubMeshForShadowMap(e.data[r]);for(r=0;r<t.length;r++)this._renderSubMeshForShadowMap(t.data[r]);if(this._transparencyShadow)for(r=0;r<i.length;r++)this._renderSubMeshForShadowMap(i.data[r],!0);else for(r=0;r<i.length;r++)i.data[r].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}_bindCustomEffectForRenderSubMeshForShadowMap(e,t,i){t.setMatrix("viewProjection",this.getTransformMatrix())}_renderSubMeshForShadowMap(e,t=!1){var i,s;let r=e.getRenderingMesh(),n=e.getEffectiveMesh(),o=this._scene,h=o.getEngine(),l=e.getMaterial();if(n._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!l||e.verticesCount===0||e._renderId===o.getRenderId())return;let c=n._getWorldMatrixDeterminant()<0,d=(i=r.overrideMaterialSideOrientation)!==null&&i!==void 0?i:l.sideOrientation;c&&(d=d===0?1:0);let f=d===0;h.setState(l.backFaceCulling,void 0,void 0,f,l.cullBackFaces);let p=r._getInstancesRenderList(e._id,!!e.getReplacementMesh());if(p.mustReturn)return;let g=h.getCaps().instancedArrays&&(p.visibleInstances[e._id]!==null&&p.visibleInstances[e._id]!==void 0||r.hasThinInstances);if(!(this.customAllowRendering&&!this.customAllowRendering(e)))if(this.isReady(e,g,t)){e._renderId=o.getRenderId();let _=l.shadowDepthWrapper,m=(s=_?.getEffect(e,this,h.currentRenderPassId))!==null&&s!==void 0?s:e._getDrawWrapper(),T=pt.GetEffect(m);h.enableEffect(m),g||r._bind(e,T,l.fillMode),this.getTransformMatrix(),T.setFloat3("biasAndScaleSM",this.bias,this.normalBias,this.depthScale),this.getLight().getTypeID()===O.LIGHTTYPEID_DIRECTIONALLIGHT?T.setVector3("lightDataSM",this._cachedDirection):T.setVector3("lightDataSM",this._cachedPosition);let A=this._getCamera();if(A&&T.setFloat2("depthValuesSM",this.getLight().getDepthMinZ(A),this.getLight().getDepthMinZ(A)+this.getLight().getDepthMaxZ(A)),t&&this.enableSoftTransparentShadow&&T.setFloat("softTransparentShadowSM",n.visibility*l.alpha),_)e._setMainDrawWrapperOverride(m),_.standalone?_.baseMaterial.bindForSubMesh(n.getWorldMatrix(),r,e):l.bindForSubMesh(n.getWorldMatrix(),r,e),e._setMainDrawWrapperOverride(null);else{if(this._opacityTexture&&(T.setTexture("diffuseSampler",this._opacityTexture),T.setMatrix("diffuseMatrix",this._opacityTexture.getTextureMatrix()||this._defaultTextureMatrix)),r.useBones&&r.computeBonesUsingShaders&&r.skeleton){let D=r.skeleton;if(D.isUsingTextureForMatrices){let V=D.getTransformMatrixTexture(r);if(!V)return;T.setTexture("boneSampler",V),T.setFloat("boneTextureWidth",4*(D.bones.length+1))}else T.setMatrices("mBones",D.getTransformMatrices(r))}P.BindMorphTargetParameters(r,T),r.morphTargetManager&&r.morphTargetManager.isUsingTextureForTargets&&r.morphTargetManager._bind(T),Je(T,l,o)}!this._useUBO&&!_&&this._bindCustomEffectForRenderSubMeshForShadowMap(e,T,n),P.BindSceneUniformBuffer(T,this._scene.getSceneUniformBuffer()),this._scene.getSceneUniformBuffer().bindUniformBuffer();let L=n.getWorldMatrix();g&&(n.getMeshUniformBuffer().bindToEffect(T,"Mesh"),n.transferToEffect(L)),this.forceBackFacesOnly&&h.setState(!0,0,!1,!0,l.cullBackFaces),this.onBeforeShadowMapRenderMeshObservable.notifyObservers(r),this.onBeforeShadowMapRenderObservable.notifyObservers(T),r._processRendering(n,e,T,l.fillMode,p,g,(D,V)=>{n!==r&&!D?(r.getMeshUniformBuffer().bindToEffect(T,"Mesh"),r.transferToEffect(V)):(n.getMeshUniformBuffer().bindToEffect(T,"Mesh"),n.transferToEffect(D?V:L))}),this.forceBackFacesOnly&&h.setState(!0,0,!1,!1,l.cullBackFaces),this.onAfterShadowMapRenderObservable.notifyObservers(T),this.onAfterShadowMapRenderMeshObservable.notifyObservers(r)}else this._shadowMap&&this._shadowMap.resetRefreshCounter()}_applyFilterValues(){this._shadowMap&&(this.filter===a.FILTER_NONE||this.filter===a.FILTER_PCSS?this._shadowMap.updateSamplingMode(E.NEAREST_SAMPLINGMODE):this._shadowMap.updateSamplingMode(E.BILINEAR_SAMPLINGMODE))}forceCompilation(e,t){let i={useInstances:!1,...t},s=this.getShadowMap();if(!s){e&&e(this);return}let r=s.renderList;if(!r){e&&e(this);return}let n=new Array;for(let l of r)n.push(...l.subMeshes);if(n.length===0){e&&e(this);return}let o=0,h=()=>{var l,c;if(!(!this._scene||!this._scene.getEngine())){for(;this.isReady(n[o],i.useInstances,(c=(l=n[o].getMaterial())===null||l===void 0?void 0:l.needAlphaBlendingForMesh(n[o].getMesh()))!==null&&c!==void 0?c:!1);)if(o++,o>=n.length){e&&e(this);return}setTimeout(h,16)}};h()}forceCompilationAsync(e){return new Promise(t=>{this.forceCompilation(()=>{t()},e)})}_isReadyCustomDefines(e,t,i){}_prepareShadowDefines(e,t,i,s){i.push("#define SM_LIGHTTYPE_"+this._light.getClassName().toUpperCase()),i.push("#define SM_FLOAT "+(this._textureType!==0?"1":"0")),i.push("#define SM_ESM "+(this.useExponentialShadowMap||this.useBlurExponentialShadowMap?"1":"0")),i.push("#define SM_DEPTHTEXTURE "+(this.usePercentageCloserFiltering||this.useContactHardeningShadow?"1":"0"));let r=e.getMesh();return i.push("#define SM_NORMALBIAS "+(this.normalBias&&r.isVerticesDataPresent(U.NormalKind)?"1":"0")),i.push("#define SM_DIRECTIONINLIGHTDATA "+(this.getLight().getTypeID()===O.LIGHTTYPEID_DIRECTIONALLIGHT?"1":"0")),i.push("#define SM_USEDISTANCE "+(this._light.needCube()?"1":"0")),i.push("#define SM_SOFTTRANSPARENTSHADOW "+(this.enableSoftTransparentShadow&&s?"1":"0")),this._isReadyCustomDefines(i,e,t),i}isReady(e,t,i){var s;let r=e.getMaterial(),n=r?.shadowDepthWrapper;if(this._opacityTexture=null,!r)return!1;let o=[];if(this._prepareShadowDefines(e,t,o,i),n){if(!n.isReadyForSubMesh(e,o,this,t,this._scene.getEngine().currentRenderPassId))return!1}else{let h=e._getDrawWrapper(void 0,!0),l=h.effect,c=h.defines,d=[U.PositionKind],f=e.getMesh();this.normalBias&&f.isVerticesDataPresent(U.NormalKind)&&(d.push(U.NormalKind),o.push("#define NORMAL"),f.nonUniformScaling&&o.push("#define NONUNIFORMSCALING"));let p=r.needAlphaTesting();if((p||r.needAlphaBlending())&&(this.useOpacityTextureForTransparentShadow?this._opacityTexture=r.opacityTexture:this._opacityTexture=r.getAlphaTestTexture(),this._opacityTexture)){if(!this._opacityTexture.isReady())return!1;let A=(s=r.alphaCutOff)!==null&&s!==void 0?s:a.DEFAULT_ALPHA_CUTOFF;o.push("#define ALPHATEXTURE"),p&&o.push(`#define ALPHATESTVALUE ${A}${A%1===0?".":""}`),f.isVerticesDataPresent(U.UVKind)&&(d.push(U.UVKind),o.push("#define UV1")),f.isVerticesDataPresent(U.UV2Kind)&&this._opacityTexture.coordinatesIndex===1&&(d.push(U.UV2Kind),o.push("#define UV2"))}let g=new ct;if(f.useBones&&f.computeBonesUsingShaders&&f.skeleton){d.push(U.MatricesIndicesKind),d.push(U.MatricesWeightsKind),f.numBoneInfluencers>4&&(d.push(U.MatricesIndicesExtraKind),d.push(U.MatricesWeightsExtraKind));let A=f.skeleton;o.push("#define NUM_BONE_INFLUENCERS "+f.numBoneInfluencers),f.numBoneInfluencers>0&&g.addCPUSkinningFallback(0,f),A.isUsingTextureForMatrices?o.push("#define BONETEXTURE"):o.push("#define BonesPerMesh "+(A.bones.length+1))}else o.push("#define NUM_BONE_INFLUENCERS 0");let _=f.morphTargetManager,m=0;if(_&&_.numInfluencers>0&&(o.push("#define MORPHTARGETS"),m=_.numInfluencers,o.push("#define NUM_MORPH_INFLUENCERS "+m),_.isUsingTextureForTargets&&o.push("#define MORPHTARGETS_TEXTURE"),P.PrepareAttributesForMorphTargetsInfluencers(d,f,m)),Nt(r,this._scene,o),t&&(o.push("#define INSTANCES"),P.PushAttributesForInstances(d),e.getRenderingMesh().hasThinInstances&&o.push("#define THIN_INSTANCES")),this.customShaderOptions&&this.customShaderOptions.defines)for(let A of this.customShaderOptions.defines)o.indexOf(A)===-1&&o.push(A);let T=o.join(`
`);if(c!==T){c=T;let A="shadowMap",L=["world","mBones","viewProjection","diffuseMatrix","lightDataSM","depthValuesSM","biasAndScaleSM","morphTargetInfluences","boneTextureWidth","softTransparentShadowSM","morphTargetTextureInfo","morphTargetTextureIndices"],D=["diffuseSampler","boneSampler","morphTargets"],V=["Scene","Mesh"];if($e(L),this.customShaderOptions){if(A=this.customShaderOptions.shaderName,this.customShaderOptions.attributes)for(let y of this.customShaderOptions.attributes)d.indexOf(y)===-1&&d.push(y);if(this.customShaderOptions.uniforms)for(let y of this.customShaderOptions.uniforms)L.indexOf(y)===-1&&L.push(y);if(this.customShaderOptions.samplers)for(let y of this.customShaderOptions.samplers)D.indexOf(y)===-1&&D.push(y)}let I=this._scene.getEngine();l=I.createEffect(A,{attributes:d,uniformsNames:L,uniformBuffersNames:V,samplers:D,defines:T,fallbacks:g,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:m}},I),h.setEffect(l,c)}if(!l.isReady())return!1}return(this.useBlurExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(!this._blurPostProcesses||!this._blurPostProcesses.length)&&this._initializeBlurRTTAndPostProcesses(),!(this._kernelBlurXPostprocess&&!this._kernelBlurXPostprocess.isReady()||this._kernelBlurYPostprocess&&!this._kernelBlurYPostprocess.isReady()||this._boxBlurPostprocess&&!this._boxBlurPostprocess.isReady())}prepareDefines(e,t){let i=this._scene,s=this._light;!i.shadowsEnabled||!s.shadowEnabled||(e["SHADOW"+t]=!0,this.useContactHardeningShadow?(e["SHADOWPCSS"+t]=!0,this._filteringQuality===a.QUALITY_LOW?e["SHADOWLOWQUALITY"+t]=!0:this._filteringQuality===a.QUALITY_MEDIUM&&(e["SHADOWMEDIUMQUALITY"+t]=!0)):this.usePercentageCloserFiltering?(e["SHADOWPCF"+t]=!0,this._filteringQuality===a.QUALITY_LOW?e["SHADOWLOWQUALITY"+t]=!0:this._filteringQuality===a.QUALITY_MEDIUM&&(e["SHADOWMEDIUMQUALITY"+t]=!0)):this.usePoissonSampling?e["SHADOWPOISSON"+t]=!0:this.useExponentialShadowMap||this.useBlurExponentialShadowMap?e["SHADOWESM"+t]=!0:(this.useCloseExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(e["SHADOWCLOSEESM"+t]=!0),s.needCube()&&(e["SHADOWCUBE"+t]=!0))}bindShadowLight(e,t){let i=this._light;if(!this._scene.shadowsEnabled||!i.shadowEnabled)return;let s=this._getCamera();if(!s)return;let r=this.getShadowMap();r&&(i.needCube()||t.setMatrix("lightMatrix"+e,this.getTransformMatrix()),this._filter===a.FILTER_PCF?(t.setDepthStencilTexture("shadowSampler"+e,this.getShadowMapForRendering()),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),r.getSize().width,1/r.getSize().width,this.frustumEdgeFalloff,e)):this._filter===a.FILTER_PCSS?(t.setDepthStencilTexture("shadowSampler"+e,this.getShadowMapForRendering()),t.setTexture("depthSampler"+e,this.getShadowMapForRendering()),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/r.getSize().width,this._contactHardeningLightSizeUVRatio*r.getSize().width,this.frustumEdgeFalloff,e)):(t.setTexture("shadowSampler"+e,this.getShadowMapForRendering()),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),this.blurScale/r.getSize().width,this.depthScale,this.frustumEdgeFalloff,e)),i._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(s),this.getLight().getDepthMinZ(s)+this.getLight().getDepthMaxZ(s),e))}getTransformMatrix(){let e=this._scene;if(this._currentRenderId===e.getRenderId()&&this._currentFaceIndexCache===this._currentFaceIndex)return this._transformMatrix;this._currentRenderId=e.getRenderId(),this._currentFaceIndexCache=this._currentFaceIndex;let t=this._light.position;if(this._light.computeTransformedInformation()&&(t=this._light.transformedPosition),x.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex),this._lightDirection),Math.abs(x.Dot(this._lightDirection,x.Up()))===1&&(this._lightDirection.z=1e-13),this._light.needProjectionMatrixCompute()||!this._cachedPosition||!this._cachedDirection||!t.equals(this._cachedPosition)||!this._lightDirection.equals(this._cachedDirection)){this._cachedPosition.copyFrom(t),this._cachedDirection.copyFrom(this._lightDirection),R.LookAtLHToRef(t,t.add(this._lightDirection),x.Up(),this._viewMatrix);let i=this.getShadowMap();if(i){let s=i.renderList;s&&this._light.setShadowProjectionMatrix(this._projectionMatrix,this._viewMatrix,s)}this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix)}return this._transformMatrix}recreateShadowMap(){let e=this._shadowMap;if(!e)return;let t=e.renderList;if(this._disposeRTTandPostProcesses(),this._initializeGenerator(),this.filter=this._filter,this._applyFilterValues(),t){this._shadowMap.renderList||(this._shadowMap.renderList=[]);for(let i of t)this._shadowMap.renderList.push(i)}else this._shadowMap.renderList=null}_disposeBlurPostProcesses(){this._shadowMap2&&(this._shadowMap2.dispose(),this._shadowMap2=null),this._boxBlurPostprocess&&(this._boxBlurPostprocess.dispose(),this._boxBlurPostprocess=null),this._kernelBlurXPostprocess&&(this._kernelBlurXPostprocess.dispose(),this._kernelBlurXPostprocess=null),this._kernelBlurYPostprocess&&(this._kernelBlurYPostprocess.dispose(),this._kernelBlurYPostprocess=null),this._blurPostProcesses=[]}_disposeRTTandPostProcesses(){this._shadowMap&&(this._shadowMap.dispose(),this._shadowMap=null),this._disposeBlurPostProcesses()}_disposeSceneUBOs(){if(this._sceneUBOs){for(let e of this._sceneUBOs)e.dispose();this._sceneUBOs=[]}}dispose(){if(this._disposeRTTandPostProcesses(),this._disposeSceneUBOs(),this._light){if(this._light._shadowGenerators){let e=this._light._shadowGenerators.entries();for(let t=e.next();t.done!==!0;t=e.next()){let[i,s]=t.value;s===this&&this._light._shadowGenerators.delete(i)}this._light._shadowGenerators.size===0&&(this._light._shadowGenerators=null)}this._light._markMeshesAsLightDirty()}this.onBeforeShadowMapRenderMeshObservable.clear(),this.onBeforeShadowMapRenderObservable.clear(),this.onAfterShadowMapRenderMeshObservable.clear(),this.onAfterShadowMapRenderObservable.clear()}serialize(){var e;let t={},i=this.getShadowMap();if(!i)return t;if(t.className=this.getClassName(),t.lightId=this._light.id,t.cameraId=(e=this._camera)===null||e===void 0?void 0:e.id,t.id=this.id,t.mapSize=i.getRenderSize(),t.forceBackFacesOnly=this.forceBackFacesOnly,t.darkness=this.getDarkness(),t.transparencyShadow=this._transparencyShadow,t.frustumEdgeFalloff=this.frustumEdgeFalloff,t.bias=this.bias,t.normalBias=this.normalBias,t.usePercentageCloserFiltering=this.usePercentageCloserFiltering,t.useContactHardeningShadow=this.useContactHardeningShadow,t.contactHardeningLightSizeUVRatio=this.contactHardeningLightSizeUVRatio,t.filteringQuality=this.filteringQuality,t.useExponentialShadowMap=this.useExponentialShadowMap,t.useBlurExponentialShadowMap=this.useBlurExponentialShadowMap,t.useCloseExponentialShadowMap=this.useBlurExponentialShadowMap,t.useBlurCloseExponentialShadowMap=this.useBlurExponentialShadowMap,t.usePoissonSampling=this.usePoissonSampling,t.depthScale=this.depthScale,t.blurBoxOffset=this.blurBoxOffset,t.blurKernel=this.blurKernel,t.blurScale=this.blurScale,t.useKernelBlur=this.useKernelBlur,t.renderList=[],i.renderList)for(let s=0;s<i.renderList.length;s++){let r=i.renderList[s];t.renderList.push(r.id)}return t}static Parse(e,t,i){let s=t.getLightById(e.lightId),r=e.cameraId!==void 0?t.getCameraById(e.cameraId):null,n=i?i(e.mapSize,s,r):new a(e.mapSize,s,void 0,r),o=n.getShadowMap();for(let h=0;h<e.renderList.length;h++)t.getMeshesById(e.renderList[h]).forEach(function(l){o&&(o.renderList||(o.renderList=[]),o.renderList.push(l))});return e.id!==void 0&&(n.id=e.id),n.forceBackFacesOnly=!!e.forceBackFacesOnly,e.darkness!==void 0&&n.setDarkness(e.darkness),e.transparencyShadow&&n.setTransparencyShadow(!0),e.frustumEdgeFalloff!==void 0&&(n.frustumEdgeFalloff=e.frustumEdgeFalloff),e.bias!==void 0&&(n.bias=e.bias),e.normalBias!==void 0&&(n.normalBias=e.normalBias),e.usePercentageCloserFiltering?n.usePercentageCloserFiltering=!0:e.useContactHardeningShadow?n.useContactHardeningShadow=!0:e.usePoissonSampling?n.usePoissonSampling=!0:e.useExponentialShadowMap?n.useExponentialShadowMap=!0:e.useBlurExponentialShadowMap?n.useBlurExponentialShadowMap=!0:e.useCloseExponentialShadowMap?n.useCloseExponentialShadowMap=!0:e.useBlurCloseExponentialShadowMap?n.useBlurCloseExponentialShadowMap=!0:e.useVarianceShadowMap?n.useExponentialShadowMap=!0:e.useBlurVarianceShadowMap&&(n.useBlurExponentialShadowMap=!0),e.contactHardeningLightSizeUVRatio!==void 0&&(n.contactHardeningLightSizeUVRatio=e.contactHardeningLightSizeUVRatio),e.filteringQuality!==void 0&&(n.filteringQuality=e.filteringQuality),e.depthScale&&(n.depthScale=e.depthScale),e.blurScale&&(n.blurScale=e.blurScale),e.blurBoxOffset&&(n.blurBoxOffset=e.blurBoxOffset),e.useKernelBlur&&(n.useKernelBlur=e.useKernelBlur),e.blurKernel&&(n.blurKernel=e.blurKernel),n}};B.CLASSNAME="ShadowGenerator";B.FILTER_NONE=0;B.FILTER_EXPONENTIALSHADOWMAP=1;B.FILTER_POISSONSAMPLING=2;B.FILTER_BLUREXPONENTIALSHADOWMAP=3;B.FILTER_CLOSEEXPONENTIALSHADOWMAP=4;B.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP=5;B.FILTER_PCF=6;B.FILTER_PCSS=7;B.QUALITY_HIGH=0;B.QUALITY_MEDIUM=1;B.QUALITY_LOW=2;B.DEFAULT_ALPHA_CUTOFF=.5;B._SceneComponentInitialization=a=>{throw Ce("ShadowGeneratorSceneComponent")};var as="depthPixelShader",ns=`#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;S.ShadersStore[as]=ns;var os="instancesDeclaration",ls=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
attribute vec4 previousWorld0;
attribute vec4 previousWorld1;
attribute vec4 previousWorld2;
attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
uniform mat4 previousWorld;
#endif
#endif
`;S.IncludesShadersStore[os]=ls;var hs="depthVertexShader",ds=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;
uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;
varying vec4 vViewPos;
#endif
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
}
`;S.ShadersStore[hs]=ds;var Rt=class a{setMaterialForRendering(e,t){this._depthMap.setMaterialForRendering(e,t)}constructor(e,t=1,i=null,s=!1,r=E.TRILINEAR_SAMPLINGMODE,n=!1,o){this.enabled=!0,this.forceDepthWriteTransparentMeshes=!1,this.useOnlyInActiveCamera=!1,this.reverseCulling=!1,this._scene=e,this._storeNonLinearDepth=s,this._storeCameraSpaceZ=n,this.isPacked=t===0,this.isPacked?this.clearColor=new Pe(1,1,1,1):this.clearColor=new Pe(n?1e8:1,0,0,1),a._SceneComponentInitialization(this._scene);let h=e.getEngine();this._camera=i,r!==E.NEAREST_SAMPLINGMODE&&(t===1&&!h._caps.textureFloatLinearFiltering&&(r=E.NEAREST_SAMPLINGMODE),t===2&&!h._caps.textureHalfFloatLinearFiltering&&(r=E.NEAREST_SAMPLINGMODE));let l=this.isPacked||!h._features.supportExtendedTextureFormats?5:6;this._depthMap=new he(o??"DepthRenderer",{width:h.getRenderWidth(),height:h.getRenderHeight()},this._scene,!1,!0,t,!1,r,void 0,void 0,void 0,l),this._depthMap.wrapU=E.CLAMP_ADDRESSMODE,this._depthMap.wrapV=E.CLAMP_ADDRESSMODE,this._depthMap.refreshRate=1,this._depthMap.renderParticles=!1,this._depthMap.renderList=null,this._depthMap.activeCamera=this._camera,this._depthMap.ignoreCameraViewport=!0,this._depthMap.useCameraPostProcesses=!1,this._depthMap.onClearObservable.add(d=>{d.clear(this.clearColor,!0,!0,!0)}),this._depthMap.onBeforeBindObservable.add(()=>{var d;(d=h._debugPushGroup)===null||d===void 0||d.call(h,"depth renderer",1)}),this._depthMap.onAfterUnbindObservable.add(()=>{var d;(d=h._debugPopGroup)===null||d===void 0||d.call(h,1)}),this._depthMap.customIsReadyFunction=(d,f,p)=>{if((p||f===0)&&d.subMeshes)for(let g=0;g<d.subMeshes.length;++g){let _=d.subMeshes[g],m=_.getRenderingMesh(),T=m._getInstancesRenderList(_._id,!!_.getReplacementMesh()),A=h.getCaps().instancedArrays&&(T.visibleInstances[_._id]!==null&&T.visibleInstances[_._id]!==void 0||m.hasThinInstances);if(!this.isReady(_,A))return!1}return!0};let c=d=>{var f,p;let g=d.getRenderingMesh(),_=d.getEffectiveMesh(),m=this._scene,T=m.getEngine(),A=d.getMaterial();if(_._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!A||_.infiniteDistance||A.disableDepthWrite||d.verticesCount===0||d._renderId===m.getRenderId())return;let L=_._getWorldMatrixDeterminant()<0,D=(f=g.overrideMaterialSideOrientation)!==null&&f!==void 0?f:A.sideOrientation;L&&(D=D===0?1:0);let V=D===0;T.setState(A.backFaceCulling,0,!1,V,this.reverseCulling?!A.cullBackFaces:A.cullBackFaces);let I=g._getInstancesRenderList(d._id,!!d.getReplacementMesh());if(I.mustReturn)return;let y=T.getCaps().instancedArrays&&(I.visibleInstances[d._id]!==null&&I.visibleInstances[d._id]!==void 0||g.hasThinInstances),w=this._camera||m.activeCamera;if(this.isReady(d,y)&&w){d._renderId=m.getRenderId();let N=(p=_._internalAbstractMeshDataInfo._materialForRenderPass)===null||p===void 0?void 0:p[T.currentRenderPassId],W=d._getDrawWrapper();!W&&N&&(W=N._getDrawWrapper());let ge=w.mode===$.ORTHOGRAPHIC_CAMERA;if(!W)return;let H=W.effect;T.enableEffect(W),y||g._bind(d,H,A.fillMode),N?N.bindForSubMesh(_.getWorldMatrix(),_,d):(H.setMatrix("viewProjection",m.getTransformMatrix()),H.setMatrix("world",_.getWorldMatrix()),this._storeCameraSpaceZ&&H.setMatrix("view",m.getViewMatrix()));let ee,oe;if(ge?(ee=!T.useReverseDepthBuffer&&T.isNDCHalfZRange?0:1,oe=T.useReverseDepthBuffer&&T.isNDCHalfZRange?0:1):(ee=T.useReverseDepthBuffer&&T.isNDCHalfZRange?w.minZ:T.isNDCHalfZRange?0:w.minZ,oe=T.useReverseDepthBuffer&&T.isNDCHalfZRange?0:w.maxZ),H.setFloat2("depthValues",ee,ee+oe),!N){if(A.needAlphaTesting()){let Q=A.getAlphaTestTexture();Q&&(H.setTexture("diffuseSampler",Q),H.setMatrix("diffuseMatrix",Q.getTextureMatrix()))}if(g.useBones&&g.computeBonesUsingShaders&&g.skeleton){let Q=g.skeleton;if(Q.isUsingTextureForMatrices){let ce=Q.getTransformMatrixTexture(g);if(!ce)return;H.setTexture("boneSampler",ce),H.setFloat("boneTextureWidth",4*(Q.bones.length+1))}else H.setMatrices("mBones",Q.getTransformMatrices(g))}Je(H,A,m),P.BindMorphTargetParameters(g,H),g.morphTargetManager&&g.morphTargetManager.isUsingTextureForTargets&&g.morphTargetManager._bind(H)}g._processRendering(_,d,H,A.fillMode,I,y,(Q,ce)=>H.setMatrix("world",ce))}};this._depthMap.customRenderFunction=(d,f,p,g)=>{let _;if(g.length)for(_=0;_<g.length;_++)c(g.data[_]);for(_=0;_<d.length;_++)c(d.data[_]);for(_=0;_<f.length;_++)c(f.data[_]);if(this.forceDepthWriteTransparentMeshes)for(_=0;_<p.length;_++)c(p.data[_]);else for(_=0;_<p.length;_++)p.data[_].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}}isReady(e,t){var i;let s=this._scene.getEngine(),r=e.getMesh(),n=r.getScene(),o=(i=r._internalAbstractMeshDataInfo._materialForRenderPass)===null||i===void 0?void 0:i[s.currentRenderPassId];if(o)return o.isReadyForSubMesh(r,e,t);let h=e.getMaterial();if(!h||h.disableDepthWrite)return!1;let l=[],c=[U.PositionKind];if(h&&h.needAlphaTesting()&&h.getAlphaTestTexture()&&(l.push("#define ALPHATEST"),r.isVerticesDataPresent(U.UVKind)&&(c.push(U.UVKind),l.push("#define UV1")),r.isVerticesDataPresent(U.UV2Kind)&&(c.push(U.UV2Kind),l.push("#define UV2"))),r.useBones&&r.computeBonesUsingShaders){c.push(U.MatricesIndicesKind),c.push(U.MatricesWeightsKind),r.numBoneInfluencers>4&&(c.push(U.MatricesIndicesExtraKind),c.push(U.MatricesWeightsExtraKind)),l.push("#define NUM_BONE_INFLUENCERS "+r.numBoneInfluencers),l.push("#define BonesPerMesh "+(r.skeleton?r.skeleton.bones.length+1:0));let m=e.getRenderingMesh().skeleton;m!=null&&m.isUsingTextureForMatrices&&l.push("#define BONETEXTURE")}else l.push("#define NUM_BONE_INFLUENCERS 0");let d=r.morphTargetManager,f=0;d&&d.numInfluencers>0&&(f=d.numInfluencers,l.push("#define MORPHTARGETS"),l.push("#define NUM_MORPH_INFLUENCERS "+f),d.isUsingTextureForTargets&&l.push("#define MORPHTARGETS_TEXTURE"),P.PrepareAttributesForMorphTargetsInfluencers(c,r,f)),t&&(l.push("#define INSTANCES"),P.PushAttributesForInstances(c),e.getRenderingMesh().hasThinInstances&&l.push("#define THIN_INSTANCES")),this._storeNonLinearDepth&&l.push("#define NONLINEARDEPTH"),this._storeCameraSpaceZ&&l.push("#define STORE_CAMERASPACE_Z"),this.isPacked&&l.push("#define PACKED"),Nt(h,n,l);let p=e._getDrawWrapper(void 0,!0),g=p.defines,_=l.join(`
`);if(g!==_){let m=["world","mBones","boneTextureWidth","viewProjection","view","diffuseMatrix","depthValues","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"];$e(m),p.setEffect(s.createEffect("depth",c,m,["diffuseSampler","morphTargets","boneSampler"],_,void 0,void 0,void 0,{maxSimultaneousMorphTargets:f}),_)}return p.effect.isReady()}getDepthMap(){return this._depthMap}dispose(){let e=[];for(let t in this._scene._depthRenderer)this._scene._depthRenderer[t]===this&&e.push(t);if(e.length>0){this._depthMap.dispose();for(let t of e)delete this._scene._depthRenderer[t]}}};Rt._SceneComponentInitialization=a=>{throw Ce("DepthRendererSceneComponent")};var cs="minmaxReduxPixelShader",us=`varying vec2 vUV;
uniform sampler2D textureSampler;
#if defined(INITIAL)
uniform sampler2D sourceTexture;
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
float f1=texelFetch(sourceTexture,coord,0).r;
float f2=texelFetch(sourceTexture,coord+ivec2(1,0),0).r;
float f3=texelFetch(sourceTexture,coord+ivec2(1,1),0).r;
float f4=texelFetch(sourceTexture,coord+ivec2(0,1),0).r;
float minz=min(min(min(f1,f2),f3),f4);
#ifdef DEPTH_REDUX
float maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#else
float maxz=max(max(max(f1,f2),f3),f4);
#endif
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(MAIN)
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
vec2 f1=texelFetch(textureSampler,coord,0).rg;
vec2 f2=texelFetch(textureSampler,coord+ivec2(1,0),0).rg;
vec2 f3=texelFetch(textureSampler,coord+ivec2(1,1),0).rg;
vec2 f4=texelFetch(textureSampler,coord+ivec2(0,1),0).rg;
float minz=min(min(min(f1.x,f2.x),f3.x),f4.x);
float maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(ONEBEFORELAST)
uniform ivec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*vec2(texSize-1));
vec2 f1=texelFetch(textureSampler,coord % texSize,0).rg;
vec2 f2=texelFetch(textureSampler,(coord+ivec2(1,0)) % texSize,0).rg;
vec2 f3=texelFetch(textureSampler,(coord+ivec2(1,1)) % texSize,0).rg;
vec2 f4=texelFetch(textureSampler,(coord+ivec2(0,1)) % texSize,0).rg;
float minz=min(f1.x,f2.x);
float maxz=max(f1.y,f2.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(LAST)
void main(void)
{
glFragColor=vec4(0.);
if (true) { 
discard;
}
}
#endif
`;S.ShadersStore[cs]=us;var Ht=class{constructor(e){this.onAfterReductionPerformed=new k,this._forceFullscreenViewport=!0,this._activated=!1,this._camera=e,this._postProcessManager=new Ft(e.getScene()),this._onContextRestoredObserver=e.getEngine().onContextRestoredObservable.add(()=>{this._postProcessManager._rebuild()})}get sourceTexture(){return this._sourceTexture}setSourceTexture(e,t,i=2,s=!0){if(e===this._sourceTexture)return;this.dispose(!1),this._sourceTexture=e,this._reductionSteps=[],this._forceFullscreenViewport=s;let r=this._camera.getScene(),n=new G("Initial reduction phase","minmaxRedux",["texSize"],["sourceTexture"],1,null,1,r.getEngine(),!1,"#define INITIAL"+(t?`
#define DEPTH_REDUX`:""),i,void 0,void 0,void 0,7);n.autoClear=!1,n.forceFullscreenViewport=s;let o=this._sourceTexture.getRenderWidth(),h=this._sourceTexture.getRenderHeight();n.onApply=((c,d)=>f=>{f.setTexture("sourceTexture",this._sourceTexture),f.setFloat2("texSize",c,d)})(o,h),this._reductionSteps.push(n);let l=1;for(;o>1||h>1;){o=Math.max(Math.round(o/2),1),h=Math.max(Math.round(h/2),1);let c=new G("Reduction phase "+l,"minmaxRedux",["texSize"],null,{width:o,height:h},null,1,r.getEngine(),!1,"#define "+(o==1&&h==1?"LAST":o==1||h==1?"ONEBEFORELAST":"MAIN"),i,void 0,void 0,void 0,7);if(c.autoClear=!1,c.forceFullscreenViewport=s,c.onApply=((d,f)=>p=>{d==1||f==1?p.setInt2("texSize",d,f):p.setFloat2("texSize",d,f)})(o,h),this._reductionSteps.push(c),l++,o==1&&h==1){let d=(f,p,g)=>{let _=new Float32Array(4*f*p),m={min:0,max:0};return()=>{r.getEngine()._readTexturePixels(g.inputTexture.texture,f,p,-1,0,_,!1),m.min=_[0],m.max=_[1],this.onAfterReductionPerformed.notifyObservers(m)}};c.onAfterRenderObservable.add(d(o,h,c))}}}get refreshRate(){return this._sourceTexture?this._sourceTexture.refreshRate:-1}set refreshRate(e){this._sourceTexture&&(this._sourceTexture.refreshRate=e)}get activated(){return this._activated}activate(){this._onAfterUnbindObserver||!this._sourceTexture||(this._onAfterUnbindObserver=this._sourceTexture.onAfterUnbindObservable.add(()=>{var e,t;let i=this._camera.getScene().getEngine();(e=i._debugPushGroup)===null||e===void 0||e.call(i,"min max reduction",1),this._reductionSteps[0].activate(this._camera),this._postProcessManager.directRender(this._reductionSteps,this._reductionSteps[0].inputTexture,this._forceFullscreenViewport),i.unBindFramebuffer(this._reductionSteps[0].inputTexture,!1),(t=i._debugPopGroup)===null||t===void 0||t.call(i,1)}),this._activated=!0)}deactivate(){!this._onAfterUnbindObserver||!this._sourceTexture||(this._sourceTexture.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=null,this._activated=!1)}dispose(e=!0){if(e&&(this.onAfterReductionPerformed.clear(),this._onContextRestoredObserver&&(this._camera.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)),this.deactivate(),this._reductionSteps){for(let t=0;t<this._reductionSteps.length;++t)this._reductionSteps[t].dispose();this._reductionSteps=null}this._postProcessManager&&e&&this._postProcessManager.dispose(),this._sourceTexture=null}},Yt=class extends Ht{get depthRenderer(){return this._depthRenderer}constructor(e){super(e)}setDepthRenderer(e=null,t=2,i=!0){let s=this._camera.getScene();this._depthRenderer&&(delete s._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null),e===null&&(s._depthRenderer||(s._depthRenderer={}),e=this._depthRenderer=new Rt(s,t,this._camera,!1,1),e.enabled=!1,this._depthRendererId="minmax"+this._camera.id,s._depthRenderer[this._depthRendererId]=e),super.setSourceTexture(e.getDepthMap(),!0,t,i)}setSourceTexture(e,t,i=2,s=!0){super.setSourceTexture(e,t,i,s)}activate(){this._depthRenderer&&(this._depthRenderer.enabled=!0),super.activate()}deactivate(){super.deactivate(),this._depthRenderer&&(this._depthRenderer.enabled=!1)}dispose(e=!0){if(super.dispose(e),this._depthRenderer&&e){let t=this._depthRenderer.getDepthMap().getScene();t&&delete t._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null}}},Ei=x.Up(),fs=x.Zero(),Y=new x,ze=new x,Et=new R,_e=class a extends B{_validateFilter(e){return e===B.FILTER_NONE||e===B.FILTER_PCF||e===B.FILTER_PCSS?e:(console.error('Unsupported filter "'+e+'"!'),B.FILTER_NONE)}get numCascades(){return this._numCascades}set numCascades(e){e=Math.min(Math.max(e,a.MIN_CASCADES_COUNT),a.MAX_CASCADES_COUNT),e!==this._numCascades&&(this._numCascades=e,this.recreateShadowMap(),this._recreateSceneUBOs())}get freezeShadowCastersBoundingInfo(){return this._freezeShadowCastersBoundingInfo}set freezeShadowCastersBoundingInfo(e){this._freezeShadowCastersBoundingInfoObservable&&e&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),!this._freezeShadowCastersBoundingInfoObservable&&!e&&(this._freezeShadowCastersBoundingInfoObservable=this._scene.onBeforeRenderObservable.add(this._computeShadowCastersBoundingInfo.bind(this))),this._freezeShadowCastersBoundingInfo=e,e&&this._computeShadowCastersBoundingInfo()}_computeShadowCastersBoundingInfo(){if(this._scbiMin.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._scbiMax.copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._shadowMap&&this._shadowMap.renderList){let e=this._shadowMap.renderList;for(let i=0;i<e.length;i++){let s=e[i];if(!s)continue;let r=s.getBoundingInfo(),n=r.boundingBox;this._scbiMin.minimizeInPlace(n.minimumWorld),this._scbiMax.maximizeInPlace(n.maximumWorld)}let t=this._scene.meshes;for(let i=0;i<t.length;i++){let s=t[i];if(!s||!s.isVisible||!s.isEnabled||!s.receiveShadows)continue;let r=s.getBoundingInfo(),n=r.boundingBox;this._scbiMin.minimizeInPlace(n.minimumWorld),this._scbiMax.maximizeInPlace(n.maximumWorld)}}this._shadowCastersBoundingInfo.reConstruct(this._scbiMin,this._scbiMax)}get shadowCastersBoundingInfo(){return this._shadowCastersBoundingInfo}set shadowCastersBoundingInfo(e){this._shadowCastersBoundingInfo=e}setMinMaxDistance(e,t){this._minDistance===e&&this._maxDistance===t||(e>t&&(e=0,t=1),e<0&&(e=0),t>1&&(t=1),this._minDistance=e,this._maxDistance=t,this._breaksAreDirty=!0)}get minDistance(){return this._minDistance}get maxDistance(){return this._maxDistance}getClassName(){return a.CLASSNAME}getCascadeMinExtents(e){return e>=0&&e<this._numCascades?this._cascadeMinExtents[e]:null}getCascadeMaxExtents(e){return e>=0&&e<this._numCascades?this._cascadeMaxExtents[e]:null}get shadowMaxZ(){return this._getCamera()?this._shadowMaxZ:0}set shadowMaxZ(e){let t=this._getCamera();if(!t){this._shadowMaxZ=e;return}this._shadowMaxZ===e||e<t.minZ||e>t.maxZ||(this._shadowMaxZ=e,this._light._markMeshesAsLightDirty(),this._breaksAreDirty=!0)}get debug(){return this._debug}set debug(e){this._debug=e,this._light._markMeshesAsLightDirty()}get depthClamp(){return this._depthClamp}set depthClamp(e){this._depthClamp=e}get cascadeBlendPercentage(){return this._cascadeBlendPercentage}set cascadeBlendPercentage(e){this._cascadeBlendPercentage=e,this._light._markMeshesAsLightDirty()}get lambda(){return this._lambda}set lambda(e){let t=Math.min(Math.max(e,0),1);this._lambda!=t&&(this._lambda=t,this._breaksAreDirty=!0)}getCascadeViewMatrix(e){return e>=0&&e<this._numCascades?this._viewMatrices[e]:null}getCascadeProjectionMatrix(e){return e>=0&&e<this._numCascades?this._projectionMatrices[e]:null}getCascadeTransformMatrix(e){return e>=0&&e<this._numCascades?this._transformMatrices[e]:null}setDepthRenderer(e){this._depthRenderer=e,this._depthReducer&&this._depthReducer.setDepthRenderer(this._depthRenderer)}get autoCalcDepthBounds(){return this._autoCalcDepthBounds}set autoCalcDepthBounds(e){let t=this._getCamera();if(t){if(this._autoCalcDepthBounds=e,!e){this._depthReducer&&this._depthReducer.deactivate(),this.setMinMaxDistance(0,1);return}this._depthReducer||(this._depthReducer=new Yt(t),this._depthReducer.onAfterReductionPerformed.add(i=>{let s=i.min,r=i.max;s>=r&&(s=0,r=1),(s!=this._minDistance||r!=this._maxDistance)&&this.setMinMaxDistance(s,r)}),this._depthReducer.setDepthRenderer(this._depthRenderer)),this._depthReducer.activate()}}get autoCalcDepthBoundsRefreshRate(){var e,t,i;return(i=(t=(e=this._depthReducer)===null||e===void 0?void 0:e.depthRenderer)===null||t===void 0?void 0:t.getDepthMap().refreshRate)!==null&&i!==void 0?i:-1}set autoCalcDepthBoundsRefreshRate(e){var t;!((t=this._depthReducer)===null||t===void 0)&&t.depthRenderer&&(this._depthReducer.depthRenderer.getDepthMap().refreshRate=e)}splitFrustum(){this._breaksAreDirty=!0}_splitFrustum(){let e=this._getCamera();if(!e)return;let t=e.minZ,i=e.maxZ,s=i-t,r=this._minDistance,n=this._shadowMaxZ<i&&this._shadowMaxZ>=t?Math.min((this._shadowMaxZ-t)/(i-t),this._maxDistance):this._maxDistance,o=t+r*s,h=t+n*s,l=h-o,c=h/o;for(let d=0;d<this._cascades.length;++d){let f=(d+1)/this._numCascades,p=o*c**f,g=o+l*f,_=this._lambda*(p-g)+g;this._cascades[d].prevBreakDistance=d===0?r:this._cascades[d-1].breakDistance,this._cascades[d].breakDistance=(_-t)/s,this._viewSpaceFrustumsZ[d]=_,this._frustumLengths[d]=(this._cascades[d].breakDistance-this._cascades[d].prevBreakDistance)*s}this._breaksAreDirty=!1}_computeMatrices(){let e=this._scene;if(!this._getCamera())return;x.NormalizeToRef(this._light.getShadowDirection(0),this._lightDirection),Math.abs(x.Dot(this._lightDirection,x.Up()))===1&&(this._lightDirection.z=1e-13),this._cachedDirection.copyFrom(this._lightDirection);let t=e.getEngine().useReverseDepthBuffer;for(let i=0;i<this._numCascades;++i){this._computeFrustumInWorldSpace(i),this._computeCascadeFrustum(i),this._cascadeMaxExtents[i].subtractToRef(this._cascadeMinExtents[i],Y),this._frustumCenter[i].addToRef(this._lightDirection.scale(this._cascadeMinExtents[i].z),this._shadowCameraPos[i]),R.LookAtLHToRef(this._shadowCameraPos[i],this._frustumCenter[i],Ei,this._viewMatrices[i]);let s=0,r=Y.z,n=this._shadowCastersBoundingInfo;n.update(this._viewMatrices[i]),r=Math.min(r,n.boundingBox.maximumWorld.z),!this._depthClamp||this.filter===B.FILTER_PCSS?s=Math.min(s,n.boundingBox.minimumWorld.z):s=Math.max(s,n.boundingBox.minimumWorld.z),R.OrthoOffCenterLHToRef(this._cascadeMinExtents[i].x,this._cascadeMaxExtents[i].x,this._cascadeMinExtents[i].y,this._cascadeMaxExtents[i].y,t?r:s,t?s:r,this._projectionMatrices[i],e.getEngine().isNDCHalfZRange),this._cascadeMinExtents[i].z=s,this._cascadeMaxExtents[i].z=r,this._viewMatrices[i].multiplyToRef(this._projectionMatrices[i],this._transformMatrices[i]),x.TransformCoordinatesToRef(fs,this._transformMatrices[i],Y),Y.scaleInPlace(this._mapSize/2),ze.copyFromFloats(Math.round(Y.x),Math.round(Y.y),Math.round(Y.z)),ze.subtractInPlace(Y).scaleInPlace(2/this._mapSize),R.TranslationToRef(ze.x,ze.y,0,Et),this._projectionMatrices[i].multiplyToRef(Et,this._projectionMatrices[i]),this._viewMatrices[i].multiplyToRef(this._projectionMatrices[i],this._transformMatrices[i]),this._transformMatrices[i].copyToArray(this._transformMatricesAsArray,i*16)}}_computeFrustumInWorldSpace(e){let t=this._getCamera();if(!t)return;let i=this._cascades[e].prevBreakDistance,s=this._cascades[e].breakDistance,r=this._scene.getEngine().isNDCHalfZRange;t.getViewMatrix();let n=R.Invert(t.getTransformationMatrix()),o=this._scene.getEngine().useReverseDepthBuffer?4:0;for(let h=0;h<a._FrustumCornersNDCSpace.length;++h)Y.copyFrom(a._FrustumCornersNDCSpace[(h+o)%a._FrustumCornersNDCSpace.length]),r&&Y.z===-1&&(Y.z=0),x.TransformCoordinatesToRef(Y,n,this._frustumCornersWorldSpace[e][h]);for(let h=0;h<a._FrustumCornersNDCSpace.length/2;++h)Y.copyFrom(this._frustumCornersWorldSpace[e][h+4]).subtractInPlace(this._frustumCornersWorldSpace[e][h]),ze.copyFrom(Y).scaleInPlace(i),Y.scaleInPlace(s),Y.addInPlace(this._frustumCornersWorldSpace[e][h]),this._frustumCornersWorldSpace[e][h+4].copyFrom(Y),this._frustumCornersWorldSpace[e][h].addInPlace(ze)}_computeCascadeFrustum(e){if(this._cascadeMinExtents[e].copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cascadeMaxExtents[e].copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._frustumCenter[e].copyFromFloats(0,0,0),!!this._getCamera()){for(let t=0;t<this._frustumCornersWorldSpace[e].length;++t)this._frustumCenter[e].addInPlace(this._frustumCornersWorldSpace[e][t]);if(this._frustumCenter[e].scaleInPlace(1/this._frustumCornersWorldSpace[e].length),this.stabilizeCascades){let t=0;for(let i=0;i<this._frustumCornersWorldSpace[e].length;++i){let s=this._frustumCornersWorldSpace[e][i].subtractToRef(this._frustumCenter[e],Y).length();t=Math.max(t,s)}t=Math.ceil(t*16)/16,this._cascadeMaxExtents[e].copyFromFloats(t,t,t),this._cascadeMinExtents[e].copyFromFloats(-t,-t,-t)}else{let t=this._frustumCenter[e];this._frustumCenter[e].addToRef(this._lightDirection,Y),R.LookAtLHToRef(t,Y,Ei,Et);for(let i=0;i<this._frustumCornersWorldSpace[e].length;++i)x.TransformCoordinatesToRef(this._frustumCornersWorldSpace[e][i],Et,Y),this._cascadeMinExtents[e].minimizeInPlace(Y),this._cascadeMaxExtents[e].maximizeInPlace(Y)}}}_recreateSceneUBOs(){if(this._disposeSceneUBOs(),this._sceneUBOs)for(let e=0;e<this._numCascades;++e)this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for CSM Shadow Generator (light "${this._light.name}" cascade #${e})`))}static get IsSupported(){let e=ft.LastCreatedEngine;return e?e._features.supportCSM:!1}constructor(e,t,i,s){if(!a.IsSupported){Ze.Error("CascadedShadowMap is not supported by the current engine.");return}super(e,t,i,s),this.usePercentageCloserFiltering=!0}_initializeGenerator(){var e,t,i,s,r,n,o,h,l,c,d,f,p,g,_,m,T,A,L,D;this.penumbraDarkness=(e=this.penumbraDarkness)!==null&&e!==void 0?e:1,this._numCascades=(t=this._numCascades)!==null&&t!==void 0?t:a.DEFAULT_CASCADES_COUNT,this.stabilizeCascades=(i=this.stabilizeCascades)!==null&&i!==void 0?i:!1,this._freezeShadowCastersBoundingInfoObservable=(s=this._freezeShadowCastersBoundingInfoObservable)!==null&&s!==void 0?s:null,this.freezeShadowCastersBoundingInfo=(r=this.freezeShadowCastersBoundingInfo)!==null&&r!==void 0?r:!1,this._scbiMin=(n=this._scbiMin)!==null&&n!==void 0?n:new x(0,0,0),this._scbiMax=(o=this._scbiMax)!==null&&o!==void 0?o:new x(0,0,0),this._shadowCastersBoundingInfo=(h=this._shadowCastersBoundingInfo)!==null&&h!==void 0?h:new _i(new x(0,0,0),new x(0,0,0)),this._breaksAreDirty=(l=this._breaksAreDirty)!==null&&l!==void 0?l:!0,this._minDistance=(c=this._minDistance)!==null&&c!==void 0?c:0,this._maxDistance=(d=this._maxDistance)!==null&&d!==void 0?d:1,this._currentLayer=(f=this._currentLayer)!==null&&f!==void 0?f:0,this._shadowMaxZ=(_=(p=this._shadowMaxZ)!==null&&p!==void 0?p:(g=this._getCamera())===null||g===void 0?void 0:g.maxZ)!==null&&_!==void 0?_:1e4,this._debug=(m=this._debug)!==null&&m!==void 0?m:!1,this._depthClamp=(T=this._depthClamp)!==null&&T!==void 0?T:!0,this._cascadeBlendPercentage=(A=this._cascadeBlendPercentage)!==null&&A!==void 0?A:.1,this._lambda=(L=this._lambda)!==null&&L!==void 0?L:.5,this._autoCalcDepthBounds=(D=this._autoCalcDepthBounds)!==null&&D!==void 0?D:!1,this._recreateSceneUBOs(),super._initializeGenerator()}_createTargetRenderTexture(){let e=this._scene.getEngine(),t={width:this._mapSize,height:this._mapSize,layers:this.numCascades};this._shadowMap=new he(this._light.name+"_CSMShadowMap",t,this._scene,!1,!0,this._textureType,!1,void 0,!1,!1,void 0),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0)}_initializeShadowMap(){if(super._initializeShadowMap(),this._shadowMap===null)return;this._transformMatricesAsArray=new Float32Array(this._numCascades*16),this._viewSpaceFrustumsZ=new Array(this._numCascades),this._frustumLengths=new Array(this._numCascades),this._lightSizeUVCorrection=new Array(this._numCascades*2),this._depthCorrection=new Array(this._numCascades),this._cascades=[],this._viewMatrices=[],this._projectionMatrices=[],this._transformMatrices=[],this._cascadeMinExtents=[],this._cascadeMaxExtents=[],this._frustumCenter=[],this._shadowCameraPos=[],this._frustumCornersWorldSpace=[];for(let t=0;t<this._numCascades;++t){this._cascades[t]={prevBreakDistance:0,breakDistance:0},this._viewMatrices[t]=R.Zero(),this._projectionMatrices[t]=R.Zero(),this._transformMatrices[t]=R.Zero(),this._cascadeMinExtents[t]=new x,this._cascadeMaxExtents[t]=new x,this._frustumCenter[t]=new x,this._shadowCameraPos[t]=new x,this._frustumCornersWorldSpace[t]=new Array(a._FrustumCornersNDCSpace.length);for(let i=0;i<a._FrustumCornersNDCSpace.length;++i)this._frustumCornersWorldSpace[t][i]=new x}let e=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.clear(),this._shadowMap.onBeforeRenderObservable.clear(),this._shadowMap.onBeforeRenderObservable.add(t=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[t]),this._currentLayer=t,this._filter===B.FILTER_PCF&&e.setColorWrite(!1),this._scene.setTransformMatrix(this.getCascadeViewMatrix(t),this.getCascadeProjectionMatrix(t)),this._useUBO&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onBeforeBindObservable.add(()=>{var t;this._currentSceneUBO=this._scene.getSceneUniformBuffer(),(t=e._debugPushGroup)===null||t===void 0||t.call(e,`cascaded shadow map generation for pass id ${e.currentRenderPassId}`,1),this._breaksAreDirty&&this._splitFrustum(),this._computeMatrices()}),this._splitFrustum()}_bindCustomEffectForRenderSubMeshForShadowMap(e,t){t.setMatrix("viewProjection",this.getCascadeTransformMatrix(this._currentLayer))}_isReadyCustomDefines(e){e.push("#define SM_DEPTHCLAMP "+(this._depthClamp&&this._filter!==B.FILTER_PCSS?"1":"0"))}prepareDefines(e,t){super.prepareDefines(e,t);let i=this._scene,s=this._light;if(!i.shadowsEnabled||!s.shadowEnabled)return;e["SHADOWCSM"+t]=!0,e["SHADOWCSMDEBUG"+t]=this.debug,e["SHADOWCSMNUM_CASCADES"+t]=this.numCascades,e["SHADOWCSM_RIGHTHANDED"+t]=i.useRightHandedSystem;let r=this._getCamera();r&&this._shadowMaxZ<r.maxZ&&(e["SHADOWCSMUSESHADOWMAXZ"+t]=!0),this.cascadeBlendPercentage===0&&(e["SHADOWCSMNOBLEND"+t]=!0)}bindShadowLight(e,t){let i=this._light;if(!this._scene.shadowsEnabled||!i.shadowEnabled)return;let s=this._getCamera();if(!s)return;let r=this.getShadowMap();if(!r)return;let n=r.getSize().width;if(t.setMatrices("lightMatrix"+e,this._transformMatricesAsArray),t.setArray("viewFrustumZ"+e,this._viewSpaceFrustumsZ),t.setFloat("cascadeBlendFactor"+e,this.cascadeBlendPercentage===0?1e4:1/this.cascadeBlendPercentage),t.setArray("frustumLengths"+e,this._frustumLengths),this._filter===B.FILTER_PCF)t.setDepthStencilTexture("shadowSampler"+e,r),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),n,1/n,this.frustumEdgeFalloff,e);else if(this._filter===B.FILTER_PCSS){for(let o=0;o<this._numCascades;++o)this._lightSizeUVCorrection[o*2+0]=o===0?1:(this._cascadeMaxExtents[0].x-this._cascadeMinExtents[0].x)/(this._cascadeMaxExtents[o].x-this._cascadeMinExtents[o].x),this._lightSizeUVCorrection[o*2+1]=o===0?1:(this._cascadeMaxExtents[0].y-this._cascadeMinExtents[0].y)/(this._cascadeMaxExtents[o].y-this._cascadeMinExtents[o].y),this._depthCorrection[o]=o===0?1:(this._cascadeMaxExtents[o].z-this._cascadeMinExtents[o].z)/(this._cascadeMaxExtents[0].z-this._cascadeMinExtents[0].z);t.setDepthStencilTexture("shadowSampler"+e,r),t.setTexture("depthSampler"+e,r),t.setArray2("lightSizeUVCorrection"+e,this._lightSizeUVCorrection),t.setArray("depthCorrection"+e,this._depthCorrection),t.setFloat("penumbraDarkness"+e,this.penumbraDarkness),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/n,this._contactHardeningLightSizeUVRatio*n,this.frustumEdgeFalloff,e)}else t.setTexture("shadowSampler"+e,r),i._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),n,1/n,this.frustumEdgeFalloff,e);i._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(s),this.getLight().getDepthMinZ(s)+this.getLight().getDepthMaxZ(s),e)}getTransformMatrix(){return this.getCascadeTransformMatrix(0)}dispose(){super.dispose(),this._freezeShadowCastersBoundingInfoObservable&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),this._depthReducer&&(this._depthReducer.dispose(),this._depthReducer=null)}serialize(){let e=super.serialize(),t=this.getShadowMap();if(!t)return e;if(e.numCascades=this._numCascades,e.debug=this._debug,e.stabilizeCascades=this.stabilizeCascades,e.lambda=this._lambda,e.cascadeBlendPercentage=this.cascadeBlendPercentage,e.depthClamp=this._depthClamp,e.autoCalcDepthBounds=this.autoCalcDepthBounds,e.shadowMaxZ=this._shadowMaxZ,e.penumbraDarkness=this.penumbraDarkness,e.freezeShadowCastersBoundingInfo=this._freezeShadowCastersBoundingInfo,e.minDistance=this.minDistance,e.maxDistance=this.maxDistance,e.renderList=[],t.renderList)for(let i=0;i<t.renderList.length;i++){let s=t.renderList[i];e.renderList.push(s.id)}return e}static Parse(e,t){let i=B.Parse(e,t,(s,r,n)=>new a(s,r,void 0,n));return e.numCascades!==void 0&&(i.numCascades=e.numCascades),e.debug!==void 0&&(i.debug=e.debug),e.stabilizeCascades!==void 0&&(i.stabilizeCascades=e.stabilizeCascades),e.lambda!==void 0&&(i.lambda=e.lambda),e.cascadeBlendPercentage!==void 0&&(i.cascadeBlendPercentage=e.cascadeBlendPercentage),e.depthClamp!==void 0&&(i.depthClamp=e.depthClamp),e.autoCalcDepthBounds!==void 0&&(i.autoCalcDepthBounds=e.autoCalcDepthBounds),e.shadowMaxZ!==void 0&&(i.shadowMaxZ=e.shadowMaxZ),e.penumbraDarkness!==void 0&&(i.penumbraDarkness=e.penumbraDarkness),e.freezeShadowCastersBoundingInfo!==void 0&&(i.freezeShadowCastersBoundingInfo=e.freezeShadowCastersBoundingInfo),e.minDistance!==void 0&&e.maxDistance!==void 0&&i.setMinMaxDistance(e.minDistance,e.maxDistance),i}};_e._FrustumCornersNDCSpace=[new x(-1,1,-1),new x(1,1,-1),new x(1,-1,-1),new x(-1,-1,-1),new x(-1,1,1),new x(1,1,1),new x(1,-1,1),new x(-1,-1,1)];_e.CLASSNAME="CascadedShadowGenerator";_e.DEFAULT_CASCADES_COUNT=4;_e.MIN_CASCADES_COUNT=2;_e.MAX_CASCADES_COUNT=4;_e._SceneComponentInitialization=a=>{throw Ce("ShadowGeneratorSceneComponent")};hi.AddParser(Ke.NAME_SHADOWGENERATOR,(a,e)=>{if(a.shadowGenerators!==void 0&&a.shadowGenerators!==null)for(let t=0,i=a.shadowGenerators.length;t<i;t++){let s=a.shadowGenerators[t];s.className===_e.CLASSNAME?_e.Parse(s,e):B.Parse(s,e)}});var Zt=class{constructor(e){this.name=Ke.NAME_SHADOWGENERATOR,this.scene=e}register(){this.scene._gatherRenderTargetsStage.registerStep(Ke.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR,this,this._gatherRenderTargets)}rebuild(){}serialize(e){e.shadowGenerators=[];let t=this.scene.lights;for(let i of t){let s=i.getShadowGenerators();if(s){let r=s.values();for(let n=r.next();n.done!==!0;n=r.next()){let o=n.value;e.shadowGenerators.push(o.serialize())}}}}addFromContainer(e){}removeFromContainer(e,t){}dispose(){}_gatherRenderTargets(e){let t=this.scene;if(this.scene.shadowsEnabled)for(let i=0;i<t.lights.length;i++){let s=t.lights[i],r=s.getShadowGenerators();if(s.isEnabled()&&s.shadowEnabled&&r){let n=r.values();for(let o=n.next();o.done!==!0;o=n.next()){let h=o.value.getShadowMap();t.textures.indexOf(h)!==-1&&e.push(h)}}}}};B._SceneComponentInitialization=a=>{let e=a._getComponent(Ke.NAME_SHADOWGENERATOR);e||(e=new Zt(a),a._addComponent(e))};var ps={enableShadows:!0};function Ti(a=ps){let{enableShadows:e,shadowTransparency:t,intensity:i,scene:s}=a,r=new ne("DirectionalLight",new x(-.3,-1,.4),s);r.position=new x(-50,65,-50),r.intensity=.65*i;let n=new He("HemisphericLight",new x(1,1,0),s);return n.intensity=.4*i,e&&(r.shadowMinZ=1,r.shadowMaxZ=70,r.shadowGenerator=new B(2048,r),r.shadowGenerator.useCloseExponentialShadowMap=!0,r.shadowGenerator.darkness=t),{directional:r,hemispheric:n}}function Ii(a){let e=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],t=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],i=[],s=[],r=a.width||a.size||1,n=a.height||a.size||1,o=a.depth||a.size||1,h=a.wrap||!1,l=a.topBaseAt===void 0?1:a.topBaseAt,c=a.bottomBaseAt===void 0?0:a.bottomBaseAt;l=(l+4)%4,c=(c+4)%4;let d=[2,0,3,1],f=[2,0,1,3],p=d[l],g=f[c],_=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(h){e=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],_=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];let I=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],y=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]],w=[17,18,19,16],N=[22,23,20,21];for(;p>0;)I.unshift(I.pop()),w.unshift(w.pop()),p--;for(;g>0;)y.unshift(y.pop()),N.unshift(N.pop()),g--;I=I.flat(),y=y.flat(),_=_.concat(I).concat(y),e.push(w[0],w[2],w[3],w[0],w[1],w[2]),e.push(N[0],N[2],N[3],N[0],N[1],N[2])}let m=[r/2,n/2,o/2];s=_.reduce((I,y,w)=>I.concat(y*m[w%3]),[]);let T=a.sideOrientation===0?0:a.sideOrientation||Ve.DEFAULTSIDE,A=a.faceUV||new Array(6),L=a.faceColors,D=[];for(let I=0;I<6;I++)A[I]===void 0&&(A[I]=new li(0,0,1,1)),L&&L[I]===void 0&&(L[I]=new Pe(1,1,1,1));for(let I=0;I<6;I++)if(i.push(A[I].z,be.UseOpenGLOrientationForUV?1-A[I].w:A[I].w),i.push(A[I].x,be.UseOpenGLOrientationForUV?1-A[I].w:A[I].w),i.push(A[I].x,be.UseOpenGLOrientationForUV?1-A[I].y:A[I].y),i.push(A[I].z,be.UseOpenGLOrientationForUV?1-A[I].y:A[I].y),L)for(let y=0;y<4;y++)D.push(L[I].r,L[I].g,L[I].b,L[I].a);Ve._ComputeSides(T,s,e,t,i,a.frontUVs,a.backUVs);let V=new Ve;if(V.indices=e,V.positions=s,V.normals=t,V.uvs=i,L){let I=T===Ve.DOUBLESIDE?D.concat(D):D;V.colors=I}return V}function We(a,e={},t=null){let i=new Xe(a,t);return e.sideOrientation=Xe._GetDefaultSideOrientation(e.sideOrientation),i._originalBuilderSideOrientation=e.sideOrientation,Ii(e).applyToMesh(i,e.updatable),i}Ve.CreateBox=Ii;Xe.CreateBox=(a,e,t=null,i,s)=>We(a,{size:e,sideOrientation:s,updatable:i},t);var Pt=class{constructor(){this.previousWorldMatrices={},this.previousBones={}}static AddUniforms(e){e.push("previousWorld","previousViewProjection","mPreviousBones")}static AddSamplers(e){}bindForSubMesh(e,t,i,s,r){if(t.prePassRenderer&&t.prePassRenderer.enabled&&t.prePassRenderer.currentRTisSceneRT&&t.prePassRenderer.getIndex(2)!==-1){this.previousWorldMatrices[i.uniqueId]||(this.previousWorldMatrices[i.uniqueId]=s.clone()),this.previousViewProjection||(this.previousViewProjection=t.getTransformMatrix().clone(),this.currentViewProjection=t.getTransformMatrix().clone());let n=t.getEngine();this.currentViewProjection.updateFlag!==t.getTransformMatrix().updateFlag?(this._lastUpdateFrameId=n.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection),this.currentViewProjection.copyFrom(t.getTransformMatrix())):this._lastUpdateFrameId!==n.frameId&&(this._lastUpdateFrameId=n.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection)),e.setMatrix("previousWorld",this.previousWorldMatrices[i.uniqueId]),e.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[i.uniqueId]=s.clone()}}},bt=class extends et{constructor(e,t,i=!0){super(e,t),this._normalMatrix=new R,this._storeEffectOnSubMeshes=i}getEffect(){return this._storeEffectOnSubMeshes?this._activeEffect:super.getEffect()}isReady(e,t){return e?!this._storeEffectOnSubMeshes||!e.subMeshes||e.subMeshes.length===0?!0:this.isReadyForSubMesh(e,e.subMeshes[0],t):!1}_isReadyForSubMesh(e){let t=e.materialDefines;return!!(!this.checkReadyOnEveryCall&&e.effect&&t&&t._renderId===this.getScene().getRenderId())}bindOnlyWorldMatrix(e){this._activeEffect.setMatrix("world",e)}bindOnlyNormalMatrix(e){this._activeEffect.setMatrix("normalMatrix",e)}bind(e,t){t&&this.bindForSubMesh(e,t,t.subMeshes[0])}_afterBind(e,t=null){super._afterBind(e,t),this.getScene()._cachedEffect=t,t&&(t._forceRebindOnNextCall=!1)}_mustRebind(e,t,i=1){return e.isCachedMaterialInvalid(this,t,i)}dispose(e,t,i){this._activeEffect=void 0,super.dispose(e,t,i)}},b=class{static get DiffuseTextureEnabled(){return this._DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){this._DiffuseTextureEnabled!==e&&(this._DiffuseTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get DetailTextureEnabled(){return this._DetailTextureEnabled}static set DetailTextureEnabled(e){this._DetailTextureEnabled!==e&&(this._DetailTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get DecalMapEnabled(){return this._DecalMapEnabled}static set DecalMapEnabled(e){this._DecalMapEnabled!==e&&(this._DecalMapEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get AmbientTextureEnabled(){return this._AmbientTextureEnabled}static set AmbientTextureEnabled(e){this._AmbientTextureEnabled!==e&&(this._AmbientTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get OpacityTextureEnabled(){return this._OpacityTextureEnabled}static set OpacityTextureEnabled(e){this._OpacityTextureEnabled!==e&&(this._OpacityTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get ReflectionTextureEnabled(){return this._ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){this._ReflectionTextureEnabled!==e&&(this._ReflectionTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get EmissiveTextureEnabled(){return this._EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){this._EmissiveTextureEnabled!==e&&(this._EmissiveTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get SpecularTextureEnabled(){return this._SpecularTextureEnabled}static set SpecularTextureEnabled(e){this._SpecularTextureEnabled!==e&&(this._SpecularTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get BumpTextureEnabled(){return this._BumpTextureEnabled}static set BumpTextureEnabled(e){this._BumpTextureEnabled!==e&&(this._BumpTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get LightmapTextureEnabled(){return this._LightmapTextureEnabled}static set LightmapTextureEnabled(e){this._LightmapTextureEnabled!==e&&(this._LightmapTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get RefractionTextureEnabled(){return this._RefractionTextureEnabled}static set RefractionTextureEnabled(e){this._RefractionTextureEnabled!==e&&(this._RefractionTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get ColorGradingTextureEnabled(){return this._ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){this._ColorGradingTextureEnabled!==e&&(this._ColorGradingTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get FresnelEnabled(){return this._FresnelEnabled}static set FresnelEnabled(e){this._FresnelEnabled!==e&&(this._FresnelEnabled=e,X.MarkAllMaterialsAsDirty(4))}static get ClearCoatTextureEnabled(){return this._ClearCoatTextureEnabled}static set ClearCoatTextureEnabled(e){this._ClearCoatTextureEnabled!==e&&(this._ClearCoatTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get ClearCoatBumpTextureEnabled(){return this._ClearCoatBumpTextureEnabled}static set ClearCoatBumpTextureEnabled(e){this._ClearCoatBumpTextureEnabled!==e&&(this._ClearCoatBumpTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get ClearCoatTintTextureEnabled(){return this._ClearCoatTintTextureEnabled}static set ClearCoatTintTextureEnabled(e){this._ClearCoatTintTextureEnabled!==e&&(this._ClearCoatTintTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get SheenTextureEnabled(){return this._SheenTextureEnabled}static set SheenTextureEnabled(e){this._SheenTextureEnabled!==e&&(this._SheenTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get AnisotropicTextureEnabled(){return this._AnisotropicTextureEnabled}static set AnisotropicTextureEnabled(e){this._AnisotropicTextureEnabled!==e&&(this._AnisotropicTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get ThicknessTextureEnabled(){return this._ThicknessTextureEnabled}static set ThicknessTextureEnabled(e){this._ThicknessTextureEnabled!==e&&(this._ThicknessTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get RefractionIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set RefractionIntensityTextureEnabled(e){this._RefractionIntensityTextureEnabled!==e&&(this._RefractionIntensityTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get TranslucencyIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set TranslucencyIntensityTextureEnabled(e){this._TranslucencyIntensityTextureEnabled!==e&&(this._TranslucencyIntensityTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}static get IridescenceTextureEnabled(){return this._IridescenceTextureEnabled}static set IridescenceTextureEnabled(e){this._IridescenceTextureEnabled!==e&&(this._IridescenceTextureEnabled=e,X.MarkAllMaterialsAsDirty(1))}};b._DiffuseTextureEnabled=!0;b._DetailTextureEnabled=!0;b._DecalMapEnabled=!0;b._AmbientTextureEnabled=!0;b._OpacityTextureEnabled=!0;b._ReflectionTextureEnabled=!0;b._EmissiveTextureEnabled=!0;b._SpecularTextureEnabled=!0;b._BumpTextureEnabled=!0;b._LightmapTextureEnabled=!0;b._RefractionTextureEnabled=!0;b._ColorGradingTextureEnabled=!0;b._FresnelEnabled=!0;b._ClearCoatTextureEnabled=!0;b._ClearCoatBumpTextureEnabled=!0;b._ClearCoatTintTextureEnabled=!0;b._SheenTextureEnabled=!0;b._AnisotropicTextureEnabled=!0;b._ThicknessTextureEnabled=!0;b._RefractionIntensityTextureEnabled=!0;b._TranslucencyIntensityTextureEnabled=!0;b._IridescenceTextureEnabled=!0;var ms="decalFragmentDeclaration",_s=`#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;S.IncludesShadersStore[ms]=_s;var gs="defaultFragmentDeclaration",vs=`uniform vec4 vEyePosition;
uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
uniform vec3 vEmissiveColor;
uniform vec3 vAmbientColor;
uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;
uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;
uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;
uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;
uniform vec4 emissiveRightColor;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;
uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;S.IncludesShadersStore[gs]=vs;var Ss="defaultUboDeclaration",Es=`layout(std140,column_major) uniform;
uniform Material
{
vec4 diffuseLeftColor;
vec4 diffuseRightColor;
vec4 opacityParts;
vec4 reflectionLeftColor;
vec4 reflectionRightColor;
vec4 refractionLeftColor;
vec4 refractionRightColor;
vec4 emissiveLeftColor;
vec4 emissiveRightColor;
vec2 vDiffuseInfos;
vec2 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vReflectionInfos;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec2 vSpecularInfos;
vec3 vBumpInfos;
mat4 diffuseMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 reflectionMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 specularMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
float pointSize;
float alphaCutOff;
mat4 refractionMatrix;
vec4 vRefractionInfos;
vec3 vRefractionPosition;
vec3 vRefractionSize;
vec4 vSpecularColor;
vec3 vEmissiveColor;
vec4 vDiffuseColor;
vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;S.IncludesShadersStore[Ss]=Es;var Ts="prePassDeclaration",xs=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;S.IncludesShadersStore[Ts]=xs;var Ms="oitDeclaration",As=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;
layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;
uniform sampler2D oitDepthSampler;
uniform sampler2D oitFrontColorSampler;
#endif
`;S.IncludesShadersStore[Ms]=As;var Cs="mainUVVaryingDeclaration",Is=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;S.IncludesShadersStore[Cs]=Is;var Rs="lightFragmentDeclaration",Ps=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif
`;S.IncludesShadersStore[Rs]=Ps;var bs="lightUboDeclaration",Ds=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X}; 
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;S.IncludesShadersStore[bs]=Ds;var Ls="lightsFragmentFunctions",ws=`struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};
lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 lightVectorW;
float attenuation=1.0;
if (lightData.w==0.)
{
vec3 direction=lightData.xyz-vPositionW;
attenuation=max(0.,1.0-length(direction)/range);
lightVectorW=normalize(direction);
}
else
{
lightVectorW=normalize(-lightData.xyz);
}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {
lightingInfo result;
vec3 direction=lightData.xyz-vPositionW;
vec3 lightVectorW=normalize(direction);
float attenuation=max(0.,1.0-length(direction)/range);
float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));
if (cosAngle>=lightDirection.w)
{
cosAngle=max(0.,pow(cosAngle,lightData.w));
attenuation*=cosAngle;
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor*attenuation;
#endif
return result;
}
result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;
}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {
lightingInfo result;
float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);
float specComp=max(0.,dot(vNormal,angleW));
specComp=pow(specComp,max(1.,glossiness));
result.specular=specComp*specularColor;
#endif
return result;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return textureColor;
}`;S.IncludesShadersStore[Ls]=ws;var Os="shadowsFragmentFunctions",Fs=`#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness); 
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture2D(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);
shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);
shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);
shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);
offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));
shadow=mix(darkness,1.,shadow);
if (numBlocker<1.0) {
return 1.0;
}
else
{
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];
offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;S.IncludesShadersStore[Os]=Fs;var Ns="samplerFragmentDeclaration",ys=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;S.IncludesShadersStore[Ns]=ys;var Us="fresnelFunction",Bs=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{
float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);
return clamp(fresnelTerm,0.,1.);
}
#endif
`;S.IncludesShadersStore[Us]=Bs;var Vs="reflectionFunction",Xs=`vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0); 
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0); 
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;S.IncludesShadersStore[Vs]=Xs;var zs="imageProcessingDeclaration",Ws=`#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;
uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;
uniform vec4 vCameraColorCurveNeutral;
uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;S.IncludesShadersStore[zs]=Ws;var ks="imageProcessingFunctions",Gs=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{
float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);
float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;
sliceUV.x+=sliceInteger*sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice0Color=texture2D(colorTransform,sliceUV);
sliceUV.x+=sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice1Color=texture2D(colorTransform,sliceUV);
vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;
}
#endif
#ifdef TONEMAPPING_ACES
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);
const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);
vec3 RRTAndODTFit(vec3 v)
{
vec3 a=v*(v+0.0245786)-0.000090537;
vec3 b=v*(0.983729*v+0.4329510)+0.238081;
return a/b;
}
vec3 ACESFitted(vec3 color)
{
color=ACESInputMat*color;
color=RRTAndODTFit(color);
color=ACESOutputMat*color;
color=saturate(color);
return color;
}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;
viewportXY=viewportXY*2.0-1.0;
vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);
float vignetteTerm=dot(vignetteXY1,vignetteXY1);
float vignette=pow(vignetteTerm,vignetteSettings2.w);
vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);
result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#ifdef TONEMAPPING
#ifdef TONEMAPPING_ACES
result.rgb=ACESFitted(result.rgb);
#else
const float tonemappingCalibration=1.590579;
result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
#endif
result.rgb=toGammaSpace(result.rgb);
result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);
if (contrast<1.0) {
result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);
} else {
result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);
}
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);
vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));
vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;
result.rgb*=colorCurve.rgb;
result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);
float dither=mix(-ditherIntensity,ditherIntensity,rand);
result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;
}`;S.IncludesShadersStore[ks]=Gs;var Hs="bumpFragmentMainFunctions",Ys=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{
mat4 ret=inverse(wMatrix);
ret=transpose(ret);
ret[0][3]=0.;
ret[1][3]=0.;
ret[2][3]=0.;
ret[3]=vec4(0.,0.,0.,1.);
return ret;
}
#else
mat4 toNormalMatrix(mat4 m)
{
float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;
mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;
return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);
}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{
vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);
vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;
tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;
float det=max(dot(tangent,tangent),dot(bitangent,bitangent));
float invmax=det==0.0 ? 0.0 : inversesqrt(det);
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;S.IncludesShadersStore[Hs]=Ys;var Zs="bumpFragmentFunctions",js=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;
vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;
float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
bool keepWorking=true;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;
if (!keepWorking)
{
}
else if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;
keepWorking=false;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{
float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif
`;S.IncludesShadersStore[Zs]=js;var Qs="logDepthDeclaration",Ks=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif
`;S.IncludesShadersStore[Qs]=Ks;var qs="fogFragmentDeclaration",$s=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR==vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif
`;S.IncludesShadersStore[qs]=$s;var Js="bumpFragment",ea=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;
mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;S.IncludesShadersStore[Js]=ea;var ta="decalFragment",ia=`#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;S.IncludesShadersStore[ta]=ia;var ra="depthPrePass",sa=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif
`;S.IncludesShadersStore[ra]=sa;var aa="lightFragment",na=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;S.IncludesShadersStore[aa]=na;var oa="logDepthFragment",la=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;S.IncludesShadersStore[oa]=la;var ha="fogFragment",da=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;S.IncludesShadersStore[ha]=da;var ca="oitFragment",ua=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));
vec2 full=unpackHalf2x16(halfFloat);
fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);
vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;
vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);
depth.rg=vec2(-MAX_DEPTH);
frontColor=lastFrontColor;
backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;
float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;
float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;
}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);
return;
}
#endif
`;S.IncludesShadersStore[ca]=ua;var fa="defaultPixelShader",pa=`#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#define RECIPROCAL_PI2 0.15915494
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
vec4 baseColor=vec4(1.,1.,1.,1.);
vec3 diffuseColor=vDiffuseColor.rgb;
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(-cross(dFdx(vPositionW),dFdy(vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef DECAL
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;
vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);
specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
float glossiness=0.;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;
vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);
if (dot(refractionVector,viewDirectionW)<1.0) {
refractionColor=refractionLookup;
}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;
reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);
refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);
alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);
alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);
emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);
diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);
color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
gl_FragData[0]=color; 
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULARTERM)
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {
frontColor.rgb+=color.rgb*color.a*alphaMultiplier;
frontColor.a=1.0-alphaMultiplier*(1.0-color.a);
} else {
backColor+=color;
}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;S.ShadersStore[fa]=pa;var ma="decalVertexDeclaration",_a=`#ifdef DECAL
uniform vec4 vDecalInfos;
uniform mat4 decalMatrix;
#endif
`;S.IncludesShadersStore[ma]=_a;var ga="defaultVertexDeclaration",va=`uniform mat4 viewProjection;
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;S.IncludesShadersStore[ga]=va;var Sa="uvAttributeDeclaration",Ea=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;S.IncludesShadersStore[Sa]=Ea;var Ta="prePassVertexDeclaration",xa=`#ifdef PREPASS
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif
`;S.IncludesShadersStore[Ta]=xa;var Ma="samplerVertexDeclaration",Aa=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;S.IncludesShadersStore[Ma]=Aa;var Ca="bumpVertexDeclaration",Ia=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;S.IncludesShadersStore[Ca]=Ia;var Ra="fogVertexDeclaration",Pa=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;S.IncludesShadersStore[Ra]=Pa;var ba="lightVxFragmentDeclaration",Da=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;S.IncludesShadersStore[ba]=Da;var La="lightVxUboDeclaration",wa=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;S.IncludesShadersStore[La]=wa;var Oa="prePassVertex",Fa=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;S.IncludesShadersStore[Oa]=Fa;var Na="uvVariableDeclaration",ya=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;S.IncludesShadersStore[Na]=ya;var Ua="samplerVertexImplementation",Ba=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));
}
#ifdef UV2
else if (v_INFONAME_==1.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));
}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));
}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));
}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));
}
#endif
#endif
`;S.IncludesShadersStore[Ua]=Ba;var Va="bumpVertex",Xa=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;S.IncludesShadersStore[Va]=Xa;var za="fogVertex",Wa=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;S.IncludesShadersStore[za]=Wa;var ka="shadowsVertex",Ga=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;S.IncludesShadersStore[ka]=Ga;var Ha="vertexColorMixing",Ya=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;S.IncludesShadersStore[Ha]=Ya;var Za="pointCloudVertex",ja=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;S.IncludesShadersStore[Za]=ja;var Qa="logDepthVertex",Ka=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;S.IncludesShadersStore[Qa]=Ka;var qa="defaultVertexShader",$a=`#include<__decl__defaultVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
vPositionW=vec3(worldPos);
#include<prePassVertex>
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<pointCloudVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;S.ShadersStore[qa]=$a;var Ja=new RegExp("^([gimus]+)!"),ut=class a{constructor(e){this._plugins=[],this._activePlugins=[],this._activePluginsForExtraEvents=[],this._material=e,this._scene=e.getScene(),this._engine=this._scene.getEngine()}_addPlugin(e){for(let s=0;s<this._plugins.length;++s)if(this._plugins[s].name===e.name)throw`Plugin "${e.name}" already added to the material "${this._material.name}"!`;if(this._material._uniformBufferLayoutBuilt)throw`The plugin "${e.name}" can't be added to the material "${this._material.name}" because this material has already been used for rendering! Please add plugins to materials before any rendering with this material occurs.`;let t=e.getClassName();a._MaterialPluginClassToMainDefine[t]||(a._MaterialPluginClassToMainDefine[t]="MATERIALPLUGIN_"+ ++a._MaterialPluginCounter),this._material._callbackPluginEventGeneric=this._handlePluginEvent.bind(this),this._plugins.push(e),this._plugins.sort((s,r)=>s.priority-r.priority),this._codeInjectionPoints={};let i={};i[a._MaterialPluginClassToMainDefine[t]]={type:"boolean",default:!0};for(let s of this._plugins)s.collectDefines(i),this._collectPointNames("vertex",s.getCustomCode("vertex")),this._collectPointNames("fragment",s.getCustomCode("fragment"));this._defineNamesFromPlugins=i}_activatePlugin(e){this._activePlugins.indexOf(e)===-1&&(this._activePlugins.push(e),this._activePlugins.sort((t,i)=>t.priority-i.priority),this._material._callbackPluginEventIsReadyForSubMesh=this._handlePluginEventIsReadyForSubMesh.bind(this),this._material._callbackPluginEventPrepareDefinesBeforeAttributes=this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this),this._material._callbackPluginEventPrepareDefines=this._handlePluginEventPrepareDefines.bind(this),this._material._callbackPluginEventBindForSubMesh=this._handlePluginEventBindForSubMesh.bind(this),e.registerForExtraEvents&&(this._activePluginsForExtraEvents.push(e),this._activePluginsForExtraEvents.sort((t,i)=>t.priority-i.priority),this._material._callbackPluginEventHasRenderTargetTextures=this._handlePluginEventHasRenderTargetTextures.bind(this),this._material._callbackPluginEventFillRenderTargetTextures=this._handlePluginEventFillRenderTargetTextures.bind(this),this._material._callbackPluginEventHardBindForSubMesh=this._handlePluginEventHardBindForSubMesh.bind(this)))}getPlugin(e){for(let t=0;t<this._plugins.length;++t)if(this._plugins[t].name===e)return this._plugins[t];return null}_handlePluginEventIsReadyForSubMesh(e){let t=!0;for(let i of this._activePlugins)t=t&&i.isReadyForSubMesh(e.defines,this._scene,this._engine,e.subMesh);e.isReadyForSubMesh=t}_handlePluginEventPrepareDefinesBeforeAttributes(e){for(let t of this._activePlugins)t.prepareDefinesBeforeAttributes(e.defines,this._scene,e.mesh)}_handlePluginEventPrepareDefines(e){for(let t of this._activePlugins)t.prepareDefines(e.defines,this._scene,e.mesh)}_handlePluginEventHardBindForSubMesh(e){for(let t of this._activePluginsForExtraEvents)t.hardBindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventBindForSubMesh(e){for(let t of this._activePlugins)t.bindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventHasRenderTargetTextures(e){let t=!1;for(let i of this._activePluginsForExtraEvents)if(t=i.hasRenderTargetTextures(),t)break;e.hasRenderTargetTextures=t}_handlePluginEventFillRenderTargetTextures(e){for(let t of this._activePluginsForExtraEvents)t.fillRenderTargetTextures(e.renderTargets)}_handlePluginEvent(e,t){var i;switch(e){case fe.GetActiveTextures:{let s=t;for(let r of this._activePlugins)r.getActiveTextures(s.activeTextures);break}case fe.GetAnimatables:{let s=t;for(let r of this._activePlugins)r.getAnimatables(s.animatables);break}case fe.HasTexture:{let s=t,r=!1;for(let n of this._activePlugins)if(r=n.hasTexture(s.texture),r)break;s.hasTexture=r;break}case fe.Disposed:{let s=t;for(let r of this._plugins)r.dispose(s.forceDisposeTextures);break}case fe.GetDefineNames:{let s=t;s.defineNames=this._defineNamesFromPlugins;break}case fe.PrepareEffect:{let s=t;for(let r of this._activePlugins)s.fallbackRank=r.addFallbacks(s.defines,s.fallbacks,s.fallbackRank),r.getAttributes(s.attributes,this._scene,s.mesh);this._uniformList.length>0&&s.uniforms.push(...this._uniformList),this._samplerList.length>0&&s.samplers.push(...this._samplerList),this._uboList.length>0&&s.uniformBuffersNames.push(...this._uboList),s.customCode=this._injectCustomCode(s.customCode);break}case fe.PrepareUniformBuffer:{let s=t;this._uboDeclaration="",this._vertexDeclaration="",this._fragmentDeclaration="",this._uniformList=[],this._samplerList=[],this._uboList=[];for(let r of this._plugins){let n=r.getUniforms();if(n){if(n.ubo)for(let o of n.ubo){if(o.size&&o.type){let h=(i=o.arraySize)!==null&&i!==void 0?i:0;s.ubo.addUniform(o.name,o.size,h),this._uboDeclaration+=`${o.type} ${o.name}${h>0?`[${h}]`:""};\r
`}this._uniformList.push(o.name)}n.vertex&&(this._vertexDeclaration+=n.vertex+`\r
`),n.fragment&&(this._fragmentDeclaration+=n.fragment+`\r
`)}r.getSamplers(this._samplerList),r.getUniformBuffersNames(this._uboList)}break}}}_collectPointNames(e,t){if(t)for(let i in t)this._codeInjectionPoints[e]||(this._codeInjectionPoints[e]={}),this._codeInjectionPoints[e][i]=!0}_injectCustomCode(e){return(t,i)=>{var s;e&&(i=e(t,i)),this._uboDeclaration&&(i=i.replace("#define ADDITIONAL_UBO_DECLARATION",this._uboDeclaration)),this._vertexDeclaration&&(i=i.replace("#define ADDITIONAL_VERTEX_DECLARATION",this._vertexDeclaration)),this._fragmentDeclaration&&(i=i.replace("#define ADDITIONAL_FRAGMENT_DECLARATION",this._fragmentDeclaration));let r=(s=this._codeInjectionPoints)===null||s===void 0?void 0:s[t];if(!r)return i;for(let n in r){let o="";for(let h of this._activePlugins){let l=h.getCustomCode(t);l!=null&&l[n]&&(o+=l[n]+`\r
`)}if(o.length>0)if(n.charAt(0)==="!"){n=n.substring(1);let h="g";if(n.charAt(0)==="!")h="",n=n.substring(1);else{let f=Ja.exec(n);f&&f.length>=2&&(h=f[1],n=n.substring(h.length+1))}h.indexOf("g")<0&&(h+="g");let l=i,c=new RegExp(n,h),d=c.exec(l);for(;d!==null;){let f=o;for(let p=0;p<d.length;++p)f=f.replace("$"+p,d[p]);i=i.replace(d[0],f),d=c.exec(l)}}else{let h="#define "+n;i=i.replace(h,`\r
`+o+`\r
`+h)}}return i}}};ut._MaterialPluginClassToMainDefine={};ut._MaterialPluginCounter=0;var Ye=class{_enable(e){e&&this._pluginManager._activatePlugin(this)}constructor(e,t,i,s,r=!0,n=!1){this.priority=500,this.registerForExtraEvents=!1,this._material=e,this.name=t,this.priority=i,e.pluginManager||(e.pluginManager=new ut(e),e.onDisposeObservable.add(()=>{e.pluginManager=void 0})),this._pluginDefineNames=s,this._pluginManager=e.pluginManager,r&&this._pluginManager._addPlugin(this),n&&this._enable(!0),this.markAllDefinesAsDirty=e._dirtyCallbacks[63]}getClassName(){return"MaterialPluginBase"}isReadyForSubMesh(e,t,i,s){return!0}hardBindForSubMesh(e,t,i,s){}bindForSubMesh(e,t,i,s){}dispose(e){}getCustomCode(e){return null}collectDefines(e){if(this._pluginDefineNames)for(let t of Object.keys(this._pluginDefineNames)){if(t[0]==="_")continue;let i=typeof this._pluginDefineNames[t];e[t]={type:i==="number"?"number":i==="string"?"string":i==="boolean"?"boolean":"object",default:this._pluginDefineNames[t]}}}prepareDefinesBeforeAttributes(e,t,i){}prepareDefines(e,t,i){}hasTexture(e){return!1}hasRenderTargetTextures(){return!1}fillRenderTargetTextures(e){}getActiveTextures(e){}getAnimatables(e){}addFallbacks(e,t,i){return i}getSamplers(e){}getAttributes(e,t,i){}getUniformBuffersNames(e){}getUniforms(){return{}}copyTo(e){Z.Clone(()=>e,this)}serialize(){return Z.Serialize(this)}parse(e,t,i){Z.Parse(()=>this,e,t,i)}};u([v()],Ye.prototype,"name",void 0);u([v()],Ye.prototype,"priority",void 0);u([v()],Ye.prototype,"registerForExtraEvents",void 0);var jt=class extends ht{constructor(){super(...arguments),this.DETAIL=!1,this.DETAILDIRECTUV=0,this.DETAIL_NORMALBLENDMETHOD=0}},Ee=class extends Ye{_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}constructor(e,t=!0){super(e,"DetailMap",140,new jt,t),this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=et.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}isReadyForSubMesh(e,t,i){return this._isEnabled?!(e._areTexturesDirty&&t.texturesEnabled&&i.getCaps().standardDerivatives&&this._texture&&b.DetailTextureEnabled&&!this._texture.isReady()):!0}prepareDefines(e,t){if(this._isEnabled){e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;let i=t.getEngine();e._areTexturesDirty&&(i.getCaps().standardDerivatives&&this._texture&&b.DetailTextureEnabled&&this._isEnabled?(P.PrepareDefinesForMergedUV(this._texture,e,"DETAIL"),e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):e.DETAIL=!1)}else e.DETAIL=!1}bindForSubMesh(e,t){if(!this._isEnabled)return;let i=this._material.isFrozen;(!e.useUbo||!i||!e.isSync)&&this._texture&&b.DetailTextureEnabled&&(e.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),P.BindTextureMatrix(this._texture,e,"detail")),t.texturesEnabled&&this._texture&&b.DetailTextureEnabled&&e.setTexture("detailSampler",this._texture)}hasTexture(e){return this._texture===e}getActiveTextures(e){this._texture&&e.push(this._texture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture)}dispose(e){var t;e&&((t=this._texture)===null||t===void 0||t.dispose())}getClassName(){return"DetailMapConfiguration"}getSamplers(e){e.push("detailSampler")}getUniforms(){return{ubo:[{name:"vDetailInfos",size:4,type:"vec4"},{name:"detailMatrix",size:16,type:"mat4"}]}}};u([se("detailTexture"),F("_markAllSubMeshesAsTexturesDirty")],Ee.prototype,"texture",void 0);u([v()],Ee.prototype,"diffuseBlendLevel",void 0);u([v()],Ee.prototype,"roughnessBlendLevel",void 0);u([v()],Ee.prototype,"bumpLevel",void 0);u([v(),F("_markAllSubMeshesAsTexturesDirty")],Ee.prototype,"normalBlendMethod",void 0);u([v(),F("_markAllSubMeshesAsTexturesDirty")],Ee.prototype,"isEnabled",void 0);var Ut={effect:null,subMesh:null},Qt=class extends ht{constructor(e){super(e),this.MAINUV1=!1,this.MAINUV2=!1,this.MAINUV3=!1,this.MAINUV4=!1,this.MAINUV5=!1,this.MAINUV6=!1,this.DIFFUSE=!1,this.DIFFUSEDIRECTUV=0,this.BAKED_VERTEX_ANIMATION_TEXTURE=!1,this.AMBIENT=!1,this.AMBIENTDIRECTUV=0,this.OPACITY=!1,this.OPACITYDIRECTUV=0,this.OPACITYRGB=!1,this.REFLECTION=!1,this.EMISSIVE=!1,this.EMISSIVEDIRECTUV=0,this.SPECULAR=!1,this.SPECULARDIRECTUV=0,this.BUMP=!1,this.BUMPDIRECTUV=0,this.PARALLAX=!1,this.PARALLAXOCCLUSION=!1,this.SPECULAROVERALPHA=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.ALPHAFROMDIFFUSE=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.DIFFUSEFRESNEL=!1,this.OPACITYFRESNEL=!1,this.REFLECTIONFRESNEL=!1,this.REFRACTIONFRESNEL=!1,this.EMISSIVEFRESNEL=!1,this.FRESNEL=!1,this.NORMAL=!1,this.TANGENT=!1,this.UV1=!1,this.UV2=!1,this.UV3=!1,this.UV4=!1,this.UV5=!1,this.UV6=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.BONETEXTURE=!1,this.BONES_VELOCITY_ENABLED=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.INSTANCESCOLOR=!1,this.GLOSSINESS=!1,this.ROUGHNESS=!1,this.EMISSIVEASILLUMINATION=!1,this.LINKEMISSIVEWITHDIFFUSE=!1,this.REFLECTIONFRESNELFROMSPECULAR=!1,this.LIGHTMAP=!1,this.LIGHTMAPDIRECTUV=0,this.OBJECTSPACE_NORMALMAP=!1,this.USELIGHTMAPASSHADOWMAP=!1,this.REFLECTIONMAP_3D=!1,this.REFLECTIONMAP_SPHERICAL=!1,this.REFLECTIONMAP_PLANAR=!1,this.REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFRACTIONMAP_CUBIC=!1,this.REFLECTIONMAP_PROJECTION=!1,this.REFLECTIONMAP_SKYBOX=!1,this.REFLECTIONMAP_EXPLICIT=!1,this.REFLECTIONMAP_EQUIRECTANGULAR=!1,this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_OPPOSITEZ=!1,this.INVERTCUBICMAP=!1,this.LOGARITHMICDEPTH=!1,this.REFRACTION=!1,this.REFRACTIONMAP_3D=!1,this.REFLECTIONOVERALPHA=!1,this.TWOSIDEDLIGHTING=!1,this.SHADOWFLOAT=!1,this.MORPHTARGETS=!1,this.MORPHTARGETS_NORMAL=!1,this.MORPHTARGETS_TANGENT=!1,this.MORPHTARGETS_UV=!1,this.NUM_MORPH_INFLUENCERS=0,this.MORPHTARGETS_TEXTURE=!1,this.NONUNIFORMSCALING=!1,this.PREMULTIPLYALPHA=!1,this.ALPHATEST_AFTERALLALPHACOMPUTATIONS=!1,this.ALPHABLEND=!0,this.PREPASS=!1,this.PREPASS_IRRADIANCE=!1,this.PREPASS_IRRADIANCE_INDEX=-1,this.PREPASS_ALBEDO_SQRT=!1,this.PREPASS_ALBEDO_SQRT_INDEX=-1,this.PREPASS_DEPTH=!1,this.PREPASS_DEPTH_INDEX=-1,this.PREPASS_NORMAL=!1,this.PREPASS_NORMAL_INDEX=-1,this.PREPASS_POSITION=!1,this.PREPASS_POSITION_INDEX=-1,this.PREPASS_VELOCITY=!1,this.PREPASS_VELOCITY_INDEX=-1,this.PREPASS_REFLECTIVITY=!1,this.PREPASS_REFLECTIVITY_INDEX=-1,this.SCENE_MRT_COUNT=0,this.RGBDLIGHTMAP=!1,this.RGBDREFLECTION=!1,this.RGBDREFRACTION=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=!1,this.TONEMAPPING_ACES=!1,this.CONTRAST=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.MULTIVIEW=!1,this.ORDER_INDEPENDENT_TRANSPARENCY=!1,this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!1,this.CAMERA_ORTHOGRAPHIC=!1,this.CAMERA_PERSPECTIVE=!1,this.IS_REFLECTION_LINEAR=!1,this.IS_REFRACTION_LINEAR=!1,this.EXPOSURE=!1,this.rebuild()}setReflectionMode(e){let t=["REFLECTIONMAP_CUBIC","REFLECTIONMAP_EXPLICIT","REFLECTIONMAP_PLANAR","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_PROJECTION","REFLECTIONMAP_SKYBOX","REFLECTIONMAP_SPHERICAL","REFLECTIONMAP_EQUIRECTANGULAR","REFLECTIONMAP_EQUIRECTANGULAR_FIXED","REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED"];for(let i of t)this[i]=i===e}},M=class a extends bt{get imageProcessingConfiguration(){return this._imageProcessingConfiguration}set imageProcessingConfiguration(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()}_attachImageProcessingConfiguration(e){e!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),e?this._imageProcessingConfiguration=e:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()})))}get isPrePassCapable(){return!this.disableDepthWrite}get cameraColorCurvesEnabled(){return this.imageProcessingConfiguration.colorCurvesEnabled}set cameraColorCurvesEnabled(e){this.imageProcessingConfiguration.colorCurvesEnabled=e}get cameraColorGradingEnabled(){return this.imageProcessingConfiguration.colorGradingEnabled}set cameraColorGradingEnabled(e){this.imageProcessingConfiguration.colorGradingEnabled=e}get cameraToneMappingEnabled(){return this._imageProcessingConfiguration.toneMappingEnabled}set cameraToneMappingEnabled(e){this._imageProcessingConfiguration.toneMappingEnabled=e}get cameraExposure(){return this._imageProcessingConfiguration.exposure}set cameraExposure(e){this._imageProcessingConfiguration.exposure=e}get cameraContrast(){return this._imageProcessingConfiguration.contrast}set cameraContrast(e){this._imageProcessingConfiguration.contrast=e}get cameraColorGradingTexture(){return this._imageProcessingConfiguration.colorGradingTexture}set cameraColorGradingTexture(e){this._imageProcessingConfiguration.colorGradingTexture=e}get cameraColorCurves(){return this._imageProcessingConfiguration.colorCurves}set cameraColorCurves(e){this._imageProcessingConfiguration.colorCurves=e}get canRenderToMRT(){return!0}constructor(e,t){super(e,t),this._diffuseTexture=null,this._ambientTexture=null,this._opacityTexture=null,this._reflectionTexture=null,this._emissiveTexture=null,this._specularTexture=null,this._bumpTexture=null,this._lightmapTexture=null,this._refractionTexture=null,this.ambientColor=new ie(0,0,0),this.diffuseColor=new ie(1,1,1),this.specularColor=new ie(1,1,1),this.emissiveColor=new ie(0,0,0),this.specularPower=64,this._useAlphaFromDiffuseTexture=!1,this._useEmissiveAsIllumination=!1,this._linkEmissiveWithDiffuse=!1,this._useSpecularOverAlpha=!1,this._useReflectionOverAlpha=!1,this._disableLighting=!1,this._useObjectSpaceNormalMap=!1,this._useParallax=!1,this._useParallaxOcclusion=!1,this.parallaxScaleBias=.05,this._roughness=0,this.indexOfRefraction=.98,this.invertRefractionY=!0,this.alphaCutOff=.4,this._useLightmapAsShadowmap=!1,this._useReflectionFresnelFromSpecular=!1,this._useGlossinessFromSpecularMapAlpha=!1,this._maxSimultaneousLights=4,this._invertNormalMapX=!1,this._invertNormalMapY=!1,this._twoSidedLighting=!1,this._renderTargets=new _t(16),this._worldViewProjectionMatrix=R.Zero(),this._globalAmbientColor=new ie(0,0,0),this._cacheHasRenderTargetTextures=!1,this.detailMap=new Ee(this),this._attachImageProcessingConfiguration(null),this.prePassConfiguration=new Pt,this.getRenderTargetTextures=()=>(this._renderTargets.reset(),a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&this._renderTargets.push(this._reflectionTexture),a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&this._renderTargets.push(this._refractionTexture),this._eventInfo.renderTargets=this._renderTargets,this._callbackPluginEventFillRenderTargetTextures(this._eventInfo),this._renderTargets)}get hasRenderTargetTextures(){return a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget||a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget?!0:this._cacheHasRenderTargetTextures}getClassName(){return"StandardMaterial"}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()}needAlphaBlending(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromDiffuseTexture()||this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled}needAlphaTesting(){return this._forceAlphaTest?!0:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===et.MATERIAL_ALPHATEST)}_shouldUseAlphaFromDiffuseTexture(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha&&this._useAlphaFromDiffuseTexture&&this._transparencyMode!==et.MATERIAL_OPAQUE}_hasAlphaChannel(){return this._diffuseTexture!=null&&this._diffuseTexture.hasAlpha||this._opacityTexture!=null}getAlphaTestTexture(){return this._diffuseTexture}isReadyForSubMesh(e,t,i=!1){if(this._uniformBufferLayoutBuilt||this.buildUniformLayout(),t.effect&&this.isFrozen&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===i)return!0;t.materialDefines||(this._callbackPluginEventGeneric(fe.GetDefineNames,this._eventInfo),t.materialDefines=new Qt(this._eventInfo.defineNames));let s=this.getScene(),r=t.materialDefines;if(this._isReadyForSubMesh(t))return!0;let n=s.getEngine();r._needNormals=P.PrepareDefinesForLights(s,e,r,!0,this._maxSimultaneousLights,this._disableLighting),P.PrepareDefinesForMultiview(s,r);let o=this.needAlphaBlendingForMesh(e)&&this.getScene().useOrderIndependentTransparency;if(P.PrepareDefinesForPrePass(s,r,this.canRenderToMRT&&!o),P.PrepareDefinesForOIT(s,r,o),r._areTexturesDirty){this._eventInfo.hasRenderTargetTextures=!1,this._callbackPluginEventHasRenderTargetTextures(this._eventInfo),this._cacheHasRenderTargetTextures=this._eventInfo.hasRenderTargetTextures,r._needUVs=!1;for(let l=1;l<=6;++l)r["MAINUV"+l]=!1;if(s.texturesEnabled){if(r.DIFFUSEDIRECTUV=0,r.BUMPDIRECTUV=0,r.AMBIENTDIRECTUV=0,r.OPACITYDIRECTUV=0,r.EMISSIVEDIRECTUV=0,r.SPECULARDIRECTUV=0,r.LIGHTMAPDIRECTUV=0,this._diffuseTexture&&a.DiffuseTextureEnabled)if(this._diffuseTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._diffuseTexture,r,"DIFFUSE");else return!1;else r.DIFFUSE=!1;if(this._ambientTexture&&a.AmbientTextureEnabled)if(this._ambientTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._ambientTexture,r,"AMBIENT");else return!1;else r.AMBIENT=!1;if(this._opacityTexture&&a.OpacityTextureEnabled)if(this._opacityTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._opacityTexture,r,"OPACITY"),r.OPACITYRGB=this._opacityTexture.getAlphaFromRGB;else return!1;else r.OPACITY=!1;if(this._reflectionTexture&&a.ReflectionTextureEnabled)if(this._reflectionTexture.isReadyOrNotBlocking()){switch(r._needNormals=!0,r.REFLECTION=!0,r.ROUGHNESS=this._roughness>0,r.REFLECTIONOVERALPHA=this._useReflectionOverAlpha,r.INVERTCUBICMAP=this._reflectionTexture.coordinatesMode===E.INVCUBIC_MODE,r.REFLECTIONMAP_3D=this._reflectionTexture.isCube,r.REFLECTIONMAP_OPPOSITEZ=r.REFLECTIONMAP_3D&&this.getScene().useRightHandedSystem?!this._reflectionTexture.invertZ:this._reflectionTexture.invertZ,r.RGBDREFLECTION=this._reflectionTexture.isRGBD,this._reflectionTexture.coordinatesMode){case E.EXPLICIT_MODE:r.setReflectionMode("REFLECTIONMAP_EXPLICIT");break;case E.PLANAR_MODE:r.setReflectionMode("REFLECTIONMAP_PLANAR");break;case E.PROJECTION_MODE:r.setReflectionMode("REFLECTIONMAP_PROJECTION");break;case E.SKYBOX_MODE:r.setReflectionMode("REFLECTIONMAP_SKYBOX");break;case E.SPHERICAL_MODE:r.setReflectionMode("REFLECTIONMAP_SPHERICAL");break;case E.EQUIRECTANGULAR_MODE:r.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR");break;case E.FIXED_EQUIRECTANGULAR_MODE:r.setReflectionMode("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");break;case E.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:r.setReflectionMode("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");break;case E.CUBIC_MODE:case E.INVCUBIC_MODE:default:r.setReflectionMode("REFLECTIONMAP_CUBIC");break}r.USE_LOCAL_REFLECTIONMAP_CUBIC=!!this._reflectionTexture.boundingBoxSize}else return!1;else r.REFLECTION=!1,r.REFLECTIONMAP_OPPOSITEZ=!1;if(this._emissiveTexture&&a.EmissiveTextureEnabled)if(this._emissiveTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._emissiveTexture,r,"EMISSIVE");else return!1;else r.EMISSIVE=!1;if(this._lightmapTexture&&a.LightmapTextureEnabled)if(this._lightmapTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._lightmapTexture,r,"LIGHTMAP"),r.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,r.RGBDLIGHTMAP=this._lightmapTexture.isRGBD;else return!1;else r.LIGHTMAP=!1;if(this._specularTexture&&a.SpecularTextureEnabled)if(this._specularTexture.isReadyOrNotBlocking())P.PrepareDefinesForMergedUV(this._specularTexture,r,"SPECULAR"),r.GLOSSINESS=this._useGlossinessFromSpecularMapAlpha;else return!1;else r.SPECULAR=!1;if(s.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&a.BumpTextureEnabled){if(this._bumpTexture.isReady())P.PrepareDefinesForMergedUV(this._bumpTexture,r,"BUMP"),r.PARALLAX=this._useParallax,r.PARALLAXOCCLUSION=this._useParallaxOcclusion;else return!1;r.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap}else r.BUMP=!1,r.PARALLAX=!1,r.PARALLAXOCCLUSION=!1;if(this._refractionTexture&&a.RefractionTextureEnabled)if(this._refractionTexture.isReadyOrNotBlocking())r._needUVs=!0,r.REFRACTION=!0,r.REFRACTIONMAP_3D=this._refractionTexture.isCube,r.RGBDREFRACTION=this._refractionTexture.isRGBD,r.USE_LOCAL_REFRACTIONMAP_CUBIC=!!this._refractionTexture.boundingBoxSize;else return!1;else r.REFRACTION=!1;r.TWOSIDEDLIGHTING=!this._backFaceCulling&&this._twoSidedLighting}else r.DIFFUSE=!1,r.AMBIENT=!1,r.OPACITY=!1,r.REFLECTION=!1,r.EMISSIVE=!1,r.LIGHTMAP=!1,r.BUMP=!1,r.REFRACTION=!1;r.ALPHAFROMDIFFUSE=this._shouldUseAlphaFromDiffuseTexture(),r.EMISSIVEASILLUMINATION=this._useEmissiveAsIllumination,r.LINKEMISSIVEWITHDIFFUSE=this._linkEmissiveWithDiffuse,r.SPECULAROVERALPHA=this._useSpecularOverAlpha,r.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,r.ALPHATEST_AFTERALLALPHACOMPUTATIONS=this.transparencyMode!==null,r.ALPHABLEND=this.transparencyMode===null||this.needAlphaBlendingForMesh(e)}if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=r,this._eventInfo.subMesh=t,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh)return!1;if(r._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(r),r.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,r.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}r._areFresnelDirty&&(a.FresnelEnabled?(this._diffuseFresnelParameters||this._opacityFresnelParameters||this._emissiveFresnelParameters||this._refractionFresnelParameters||this._reflectionFresnelParameters)&&(r.DIFFUSEFRESNEL=this._diffuseFresnelParameters&&this._diffuseFresnelParameters.isEnabled,r.OPACITYFRESNEL=this._opacityFresnelParameters&&this._opacityFresnelParameters.isEnabled,r.REFLECTIONFRESNEL=this._reflectionFresnelParameters&&this._reflectionFresnelParameters.isEnabled,r.REFLECTIONFRESNELFROMSPECULAR=this._useReflectionFresnelFromSpecular,r.REFRACTIONFRESNEL=this._refractionFresnelParameters&&this._refractionFresnelParameters.isEnabled,r.EMISSIVEFRESNEL=this._emissiveFresnelParameters&&this._emissiveFresnelParameters.isEnabled,r._needNormals=!0,r.FRESNEL=!0):r.FRESNEL=!1),P.PrepareDefinesForMisc(e,s,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e)||this._forceAlphaTest,r),P.PrepareDefinesForFrameBoundValues(s,n,this,r,i,null,t.getRenderingMesh().hasThinInstances),this._eventInfo.defines=r,this._eventInfo.mesh=e,this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo),P.PrepareDefinesForAttributes(e,r,!0,!0,!0),this._callbackPluginEventPrepareDefines(this._eventInfo);let h=!1;if(r.isDirty){let l=r._areLightsDisposed;r.markAsProcessed();let c=new ct;r.REFLECTION&&c.addFallback(0,"REFLECTION"),r.SPECULAR&&c.addFallback(0,"SPECULAR"),r.BUMP&&c.addFallback(0,"BUMP"),r.PARALLAX&&c.addFallback(1,"PARALLAX"),r.PARALLAXOCCLUSION&&c.addFallback(0,"PARALLAXOCCLUSION"),r.SPECULAROVERALPHA&&c.addFallback(0,"SPECULAROVERALPHA"),r.FOG&&c.addFallback(1,"FOG"),r.POINTSIZE&&c.addFallback(0,"POINTSIZE"),r.LOGARITHMICDEPTH&&c.addFallback(0,"LOGARITHMICDEPTH"),P.HandleFallbacksForShadows(r,c,this._maxSimultaneousLights),r.SPECULARTERM&&c.addFallback(0,"SPECULARTERM"),r.DIFFUSEFRESNEL&&c.addFallback(1,"DIFFUSEFRESNEL"),r.OPACITYFRESNEL&&c.addFallback(2,"OPACITYFRESNEL"),r.REFLECTIONFRESNEL&&c.addFallback(3,"REFLECTIONFRESNEL"),r.EMISSIVEFRESNEL&&c.addFallback(4,"EMISSIVEFRESNEL"),r.FRESNEL&&c.addFallback(4,"FRESNEL"),r.MULTIVIEW&&c.addFallback(0,"MULTIVIEW");let d=[U.PositionKind];r.NORMAL&&d.push(U.NormalKind),r.TANGENT&&d.push(U.TangentKind);for(let D=1;D<=6;++D)r["UV"+D]&&d.push(`uv${D===1?"":D}`);r.VERTEXCOLOR&&d.push(U.ColorKind),P.PrepareAttributesForBones(d,e,r,c),P.PrepareAttributesForInstances(d,r),P.PrepareAttributesForMorphTargets(d,e,r),P.PrepareAttributesForBakedVertexAnimation(d,e,r);let f="default",p=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","visibility","vFogInfos","vFogColor","pointSize","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","vLightmapInfos","vRefractionInfos","mBones","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix","normalMatrix","lightmapMatrix","refractionMatrix","diffuseLeftColor","diffuseRightColor","opacityParts","reflectionLeftColor","reflectionRightColor","emissiveLeftColor","emissiveRightColor","refractionLeftColor","refractionRightColor","vReflectionPosition","vReflectionSize","vRefractionPosition","vRefractionSize","logarithmicDepthConstant","vTangentSpaceParams","alphaCutOff","boneTextureWidth","morphTargetTextureInfo","morphTargetTextureIndices"],g=["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","lightmapSampler","refractionCubeSampler","refraction2DSampler","boneSampler","morphTargets","oitDepthSampler","oitFrontColorSampler"],_=["Material","Scene","Mesh"];this._eventInfo.fallbacks=c,this._eventInfo.fallbackRank=0,this._eventInfo.defines=r,this._eventInfo.uniforms=p,this._eventInfo.attributes=d,this._eventInfo.samplers=g,this._eventInfo.uniformBuffersNames=_,this._eventInfo.customCode=void 0,this._eventInfo.mesh=e,this._callbackPluginEventGeneric(fe.PrepareEffect,this._eventInfo),Pt.AddUniforms(p),gt&&(gt.PrepareUniforms(p,r),gt.PrepareSamplers(g,r)),P.PrepareUniformsAndSamplersList({uniformsNames:p,uniformBuffersNames:_,samplers:g,defines:r,maxSimultaneousLights:this._maxSimultaneousLights}),$e(p);let m={};this.customShaderNameResolve&&(f=this.customShaderNameResolve(f,p,_,g,r,d,m));let T=r.toString(),A=t.effect,L=s.getEngine().createEffect(f,{attributes:d,uniformsNames:p,uniformBuffersNames:_,samplers:g,defines:T,fallbacks:c,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:r.NUM_MORPH_INFLUENCERS},processFinalCode:m.processFinalCode,processCodeAfterIncludes:this._eventInfo.customCode,multiTarget:r.PREPASS},n);if(this._eventInfo.customCode=void 0,L)if(this._onEffectCreatedObservable&&(Ut.effect=L,Ut.subMesh=t,this._onEffectCreatedObservable.notifyObservers(Ut)),this.allowShaderHotSwapping&&A&&!L.isReady()){if(L=A,r.markAsUnprocessed(),h=this.isFrozen,l)return r._areLightsDisposed=!0,!1}else s.resetCachedMaterial(),t.setEffect(L,r,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(r._renderId=s.getRenderId(),t.effect._wasPreviouslyReady=!h,t.effect._wasPreviouslyUsingInstances=i,this._checkScenePerformancePriority(),!0)}buildUniformLayout(){let e=this._uniformBuffer;e.addUniform("diffuseLeftColor",4),e.addUniform("diffuseRightColor",4),e.addUniform("opacityParts",4),e.addUniform("reflectionLeftColor",4),e.addUniform("reflectionRightColor",4),e.addUniform("refractionLeftColor",4),e.addUniform("refractionRightColor",4),e.addUniform("emissiveLeftColor",4),e.addUniform("emissiveRightColor",4),e.addUniform("vDiffuseInfos",2),e.addUniform("vAmbientInfos",2),e.addUniform("vOpacityInfos",2),e.addUniform("vReflectionInfos",2),e.addUniform("vReflectionPosition",3),e.addUniform("vReflectionSize",3),e.addUniform("vEmissiveInfos",2),e.addUniform("vLightmapInfos",2),e.addUniform("vSpecularInfos",2),e.addUniform("vBumpInfos",3),e.addUniform("diffuseMatrix",16),e.addUniform("ambientMatrix",16),e.addUniform("opacityMatrix",16),e.addUniform("reflectionMatrix",16),e.addUniform("emissiveMatrix",16),e.addUniform("lightmapMatrix",16),e.addUniform("specularMatrix",16),e.addUniform("bumpMatrix",16),e.addUniform("vTangentSpaceParams",2),e.addUniform("pointSize",1),e.addUniform("alphaCutOff",1),e.addUniform("refractionMatrix",16),e.addUniform("vRefractionInfos",4),e.addUniform("vRefractionPosition",3),e.addUniform("vRefractionSize",3),e.addUniform("vSpecularColor",4),e.addUniform("vEmissiveColor",3),e.addUniform("vDiffuseColor",4),e.addUniform("vAmbientColor",3),super.buildUniformLayout()}bindForSubMesh(e,t,i){var s;let r=this.getScene(),n=i.materialDefines;if(!n)return;let o=i.effect;if(!o)return;this._activeEffect=o,t.getMeshUniformBuffer().bindToEffect(o,"Mesh"),t.transferToEffect(e),this._uniformBuffer.bindToEffect(o,"Material"),this.prePassConfiguration.bindForSubMesh(this._activeEffect,r,t,e,this.isFrozen),this._eventInfo.subMesh=i,this._callbackPluginEventHardBindForSubMesh(this._eventInfo),n.OBJECTSPACE_NORMALMAP&&(e.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));let h=o._forceRebindOnNextCall||this._mustRebind(r,o,t.visibility);P.BindBonesParameters(t,o);let l=this._uniformBuffer;if(h){if(this.bindViewProjection(o),!l.useUbo||!this.isFrozen||!l.isSync||o._forceRebindOnNextCall){if(a.FresnelEnabled&&n.FRESNEL&&(this.diffuseFresnelParameters&&this.diffuseFresnelParameters.isEnabled&&(l.updateColor4("diffuseLeftColor",this.diffuseFresnelParameters.leftColor,this.diffuseFresnelParameters.power),l.updateColor4("diffuseRightColor",this.diffuseFresnelParameters.rightColor,this.diffuseFresnelParameters.bias)),this.opacityFresnelParameters&&this.opacityFresnelParameters.isEnabled&&l.updateColor4("opacityParts",new ie(this.opacityFresnelParameters.leftColor.toLuminance(),this.opacityFresnelParameters.rightColor.toLuminance(),this.opacityFresnelParameters.bias),this.opacityFresnelParameters.power),this.reflectionFresnelParameters&&this.reflectionFresnelParameters.isEnabled&&(l.updateColor4("reflectionLeftColor",this.reflectionFresnelParameters.leftColor,this.reflectionFresnelParameters.power),l.updateColor4("reflectionRightColor",this.reflectionFresnelParameters.rightColor,this.reflectionFresnelParameters.bias)),this.refractionFresnelParameters&&this.refractionFresnelParameters.isEnabled&&(l.updateColor4("refractionLeftColor",this.refractionFresnelParameters.leftColor,this.refractionFresnelParameters.power),l.updateColor4("refractionRightColor",this.refractionFresnelParameters.rightColor,this.refractionFresnelParameters.bias)),this.emissiveFresnelParameters&&this.emissiveFresnelParameters.isEnabled&&(l.updateColor4("emissiveLeftColor",this.emissiveFresnelParameters.leftColor,this.emissiveFresnelParameters.power),l.updateColor4("emissiveRightColor",this.emissiveFresnelParameters.rightColor,this.emissiveFresnelParameters.bias))),r.texturesEnabled){if(this._diffuseTexture&&a.DiffuseTextureEnabled&&(l.updateFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),P.BindTextureMatrix(this._diffuseTexture,l,"diffuse")),this._ambientTexture&&a.AmbientTextureEnabled&&(l.updateFloat2("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level),P.BindTextureMatrix(this._ambientTexture,l,"ambient")),this._opacityTexture&&a.OpacityTextureEnabled&&(l.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),P.BindTextureMatrix(this._opacityTexture,l,"opacity")),this._hasAlphaChannel()&&l.updateFloat("alphaCutOff",this.alphaCutOff),this._reflectionTexture&&a.ReflectionTextureEnabled&&(l.updateFloat2("vReflectionInfos",this._reflectionTexture.level,this.roughness),l.updateMatrix("reflectionMatrix",this._reflectionTexture.getReflectionTextureMatrix()),this._reflectionTexture.boundingBoxSize)){let c=this._reflectionTexture;l.updateVector3("vReflectionPosition",c.boundingBoxPosition),l.updateVector3("vReflectionSize",c.boundingBoxSize)}if(this._emissiveTexture&&a.EmissiveTextureEnabled&&(l.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),P.BindTextureMatrix(this._emissiveTexture,l,"emissive")),this._lightmapTexture&&a.LightmapTextureEnabled&&(l.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),P.BindTextureMatrix(this._lightmapTexture,l,"lightmap")),this._specularTexture&&a.SpecularTextureEnabled&&(l.updateFloat2("vSpecularInfos",this._specularTexture.coordinatesIndex,this._specularTexture.level),P.BindTextureMatrix(this._specularTexture,l,"specular")),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&a.BumpTextureEnabled&&(l.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,1/this._bumpTexture.level,this.parallaxScaleBias),P.BindTextureMatrix(this._bumpTexture,l,"bump"),r._mirroredCameraPosition?l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):l.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1)),this._refractionTexture&&a.RefractionTextureEnabled){let c=1;if(this._refractionTexture.isCube||(l.updateMatrix("refractionMatrix",this._refractionTexture.getReflectionTextureMatrix()),this._refractionTexture.depth&&(c=this._refractionTexture.depth)),l.updateFloat4("vRefractionInfos",this._refractionTexture.level,this.indexOfRefraction,c,this.invertRefractionY?-1:1),this._refractionTexture.boundingBoxSize){let d=this._refractionTexture;l.updateVector3("vRefractionPosition",d.boundingBoxPosition),l.updateVector3("vRefractionSize",d.boundingBoxSize)}}}this.pointsCloud&&l.updateFloat("pointSize",this.pointSize),n.SPECULARTERM&&l.updateColor4("vSpecularColor",this.specularColor,this.specularPower),l.updateColor3("vEmissiveColor",a.EmissiveTextureEnabled?this.emissiveColor:ie.BlackReadOnly),l.updateColor4("vDiffuseColor",this.diffuseColor,this.alpha),r.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor),l.updateColor3("vAmbientColor",this._globalAmbientColor)}r.texturesEnabled&&(this._diffuseTexture&&a.DiffuseTextureEnabled&&o.setTexture("diffuseSampler",this._diffuseTexture),this._ambientTexture&&a.AmbientTextureEnabled&&o.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&a.OpacityTextureEnabled&&o.setTexture("opacitySampler",this._opacityTexture),this._reflectionTexture&&a.ReflectionTextureEnabled&&(this._reflectionTexture.isCube?o.setTexture("reflectionCubeSampler",this._reflectionTexture):o.setTexture("reflection2DSampler",this._reflectionTexture)),this._emissiveTexture&&a.EmissiveTextureEnabled&&o.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&a.LightmapTextureEnabled&&o.setTexture("lightmapSampler",this._lightmapTexture),this._specularTexture&&a.SpecularTextureEnabled&&o.setTexture("specularSampler",this._specularTexture),this._bumpTexture&&r.getEngine().getCaps().standardDerivatives&&a.BumpTextureEnabled&&o.setTexture("bumpSampler",this._bumpTexture),this._refractionTexture&&a.RefractionTextureEnabled&&(this._refractionTexture.isCube?o.setTexture("refractionCubeSampler",this._refractionTexture):o.setTexture("refraction2DSampler",this._refractionTexture))),this.getScene().useOrderIndependentTransparency&&this.needAlphaBlendingForMesh(t)&&this.getScene().depthPeelingRenderer.bind(o),this._eventInfo.subMesh=i,this._callbackPluginEventBindForSubMesh(this._eventInfo),Je(o,this,r),this.bindEyePosition(o)}else r.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0);(h||!this.isFrozen)&&(r.lightsEnabled&&!this._disableLighting&&P.BindLights(r,t,o,n,this._maxSimultaneousLights),(r.fogEnabled&&t.applyFog&&r.fogMode!==qe.FOGMODE_NONE||this._reflectionTexture||this._refractionTexture||t.receiveShadows||n.PREPASS)&&this.bindView(o),P.BindFogParameters(r,t,o),n.NUM_MORPH_INFLUENCERS&&P.BindMorphTargetParameters(t,o),n.BAKED_VERTEX_ANIMATION_TEXTURE&&((s=t.bakedVertexAnimationManager)===null||s===void 0||s.bind(o,n.INSTANCES)),this.useLogarithmicDepth&&P.BindLogDepth(n,o,r),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect)),this._afterBind(t,this._activeEffect),l.update()}getAnimatables(){let e=super.getAnimatables();return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&e.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&e.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&e.push(this._emissiveTexture),this._specularTexture&&this._specularTexture.animations&&this._specularTexture.animations.length>0&&e.push(this._specularTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&e.push(this._lightmapTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&e.push(this._refractionTexture),e}getActiveTextures(){let e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._ambientTexture&&e.push(this._ambientTexture),this._opacityTexture&&e.push(this._opacityTexture),this._reflectionTexture&&e.push(this._reflectionTexture),this._emissiveTexture&&e.push(this._emissiveTexture),this._specularTexture&&e.push(this._specularTexture),this._bumpTexture&&e.push(this._bumpTexture),this._lightmapTexture&&e.push(this._lightmapTexture),this._refractionTexture&&e.push(this._refractionTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTexture===e||this._ambientTexture===e||this._opacityTexture===e||this._reflectionTexture===e||this._emissiveTexture===e||this._specularTexture===e||this._bumpTexture===e||this._lightmapTexture===e||this._refractionTexture===e)}dispose(e,t){var i,s,r,n,o,h,l,c,d;t&&((i=this._diffuseTexture)===null||i===void 0||i.dispose(),(s=this._ambientTexture)===null||s===void 0||s.dispose(),(r=this._opacityTexture)===null||r===void 0||r.dispose(),(n=this._reflectionTexture)===null||n===void 0||n.dispose(),(o=this._emissiveTexture)===null||o===void 0||o.dispose(),(h=this._specularTexture)===null||h===void 0||h.dispose(),(l=this._bumpTexture)===null||l===void 0||l.dispose(),(c=this._lightmapTexture)===null||c===void 0||c.dispose(),(d=this._refractionTexture)===null||d===void 0||d.dispose()),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(e,t)}clone(e){let t=Z.Clone(()=>new a(e,this.getScene()),this);return t.name=e,t.id=e,this.stencil.copyTo(t.stencil),t}static Parse(e,t,i){let s=Z.Parse(()=>new a(e.name,t),e,t,i);return e.stencil&&s.stencil.parse(e.stencil,t,i),s}static get DiffuseTextureEnabled(){return b.DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){b.DiffuseTextureEnabled=e}static get DetailTextureEnabled(){return b.DetailTextureEnabled}static set DetailTextureEnabled(e){b.DetailTextureEnabled=e}static get AmbientTextureEnabled(){return b.AmbientTextureEnabled}static set AmbientTextureEnabled(e){b.AmbientTextureEnabled=e}static get OpacityTextureEnabled(){return b.OpacityTextureEnabled}static set OpacityTextureEnabled(e){b.OpacityTextureEnabled=e}static get ReflectionTextureEnabled(){return b.ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){b.ReflectionTextureEnabled=e}static get EmissiveTextureEnabled(){return b.EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){b.EmissiveTextureEnabled=e}static get SpecularTextureEnabled(){return b.SpecularTextureEnabled}static set SpecularTextureEnabled(e){b.SpecularTextureEnabled=e}static get BumpTextureEnabled(){return b.BumpTextureEnabled}static set BumpTextureEnabled(e){b.BumpTextureEnabled=e}static get LightmapTextureEnabled(){return b.LightmapTextureEnabled}static set LightmapTextureEnabled(e){b.LightmapTextureEnabled=e}static get RefractionTextureEnabled(){return b.RefractionTextureEnabled}static set RefractionTextureEnabled(e){b.RefractionTextureEnabled=e}static get ColorGradingTextureEnabled(){return b.ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){b.ColorGradingTextureEnabled=e}static get FresnelEnabled(){return b.FresnelEnabled}static set FresnelEnabled(e){b.FresnelEnabled=e}};u([se("diffuseTexture")],M.prototype,"_diffuseTexture",void 0);u([F("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"diffuseTexture",void 0);u([se("ambientTexture")],M.prototype,"_ambientTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientTexture",void 0);u([se("opacityTexture")],M.prototype,"_opacityTexture",void 0);u([F("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"opacityTexture",void 0);u([se("reflectionTexture")],M.prototype,"_reflectionTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectionTexture",void 0);u([se("emissiveTexture")],M.prototype,"_emissiveTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"emissiveTexture",void 0);u([se("specularTexture")],M.prototype,"_specularTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"specularTexture",void 0);u([se("bumpTexture")],M.prototype,"_bumpTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"bumpTexture",void 0);u([se("lightmapTexture")],M.prototype,"_lightmapTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"lightmapTexture",void 0);u([se("refractionTexture")],M.prototype,"_refractionTexture",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"refractionTexture",void 0);u([Me("ambient")],M.prototype,"ambientColor",void 0);u([Me("diffuse")],M.prototype,"diffuseColor",void 0);u([Me("specular")],M.prototype,"specularColor",void 0);u([Me("emissive")],M.prototype,"emissiveColor",void 0);u([v()],M.prototype,"specularPower",void 0);u([v("useAlphaFromDiffuseTexture")],M.prototype,"_useAlphaFromDiffuseTexture",void 0);u([F("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"useAlphaFromDiffuseTexture",void 0);u([v("useEmissiveAsIllumination")],M.prototype,"_useEmissiveAsIllumination",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useEmissiveAsIllumination",void 0);u([v("linkEmissiveWithDiffuse")],M.prototype,"_linkEmissiveWithDiffuse",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"linkEmissiveWithDiffuse",void 0);u([v("useSpecularOverAlpha")],M.prototype,"_useSpecularOverAlpha",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useSpecularOverAlpha",void 0);u([v("useReflectionOverAlpha")],M.prototype,"_useReflectionOverAlpha",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useReflectionOverAlpha",void 0);u([v("disableLighting")],M.prototype,"_disableLighting",void 0);u([F("_markAllSubMeshesAsLightsDirty")],M.prototype,"disableLighting",void 0);u([v("useObjectSpaceNormalMap")],M.prototype,"_useObjectSpaceNormalMap",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useObjectSpaceNormalMap",void 0);u([v("useParallax")],M.prototype,"_useParallax",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallax",void 0);u([v("useParallaxOcclusion")],M.prototype,"_useParallaxOcclusion",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallaxOcclusion",void 0);u([v()],M.prototype,"parallaxScaleBias",void 0);u([v("roughness")],M.prototype,"_roughness",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"roughness",void 0);u([v()],M.prototype,"indexOfRefraction",void 0);u([v()],M.prototype,"invertRefractionY",void 0);u([v()],M.prototype,"alphaCutOff",void 0);u([v("useLightmapAsShadowmap")],M.prototype,"_useLightmapAsShadowmap",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useLightmapAsShadowmap",void 0);u([Ue("diffuseFresnelParameters")],M.prototype,"_diffuseFresnelParameters",void 0);u([F("_markAllSubMeshesAsFresnelDirty")],M.prototype,"diffuseFresnelParameters",void 0);u([Ue("opacityFresnelParameters")],M.prototype,"_opacityFresnelParameters",void 0);u([F("_markAllSubMeshesAsFresnelAndMiscDirty")],M.prototype,"opacityFresnelParameters",void 0);u([Ue("reflectionFresnelParameters")],M.prototype,"_reflectionFresnelParameters",void 0);u([F("_markAllSubMeshesAsFresnelDirty")],M.prototype,"reflectionFresnelParameters",void 0);u([Ue("refractionFresnelParameters")],M.prototype,"_refractionFresnelParameters",void 0);u([F("_markAllSubMeshesAsFresnelDirty")],M.prototype,"refractionFresnelParameters",void 0);u([Ue("emissiveFresnelParameters")],M.prototype,"_emissiveFresnelParameters",void 0);u([F("_markAllSubMeshesAsFresnelDirty")],M.prototype,"emissiveFresnelParameters",void 0);u([v("useReflectionFresnelFromSpecular")],M.prototype,"_useReflectionFresnelFromSpecular",void 0);u([F("_markAllSubMeshesAsFresnelDirty")],M.prototype,"useReflectionFresnelFromSpecular",void 0);u([v("useGlossinessFromSpecularMapAlpha")],M.prototype,"_useGlossinessFromSpecularMapAlpha",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useGlossinessFromSpecularMapAlpha",void 0);u([v("maxSimultaneousLights")],M.prototype,"_maxSimultaneousLights",void 0);u([F("_markAllSubMeshesAsLightsDirty")],M.prototype,"maxSimultaneousLights",void 0);u([v("invertNormalMapX")],M.prototype,"_invertNormalMapX",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapX",void 0);u([v("invertNormalMapY")],M.prototype,"_invertNormalMapY",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapY",void 0);u([v("twoSidedLighting")],M.prototype,"_twoSidedLighting",void 0);u([F("_markAllSubMeshesAsTexturesDirty")],M.prototype,"twoSidedLighting",void 0);u([v()],M.prototype,"useLogarithmicDepth",null);Ie("BABYLON.StandardMaterial",M);qe.DefaultMaterialFactory=a=>new M("default material",a);var en="imageProcessingCompatibility",tn=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;S.IncludesShadersStore[en]=tn;var rn="shadowOnlyPixelShader",sn=`precision highp float;
uniform vec4 vEyePosition;
uniform float alpha;
uniform vec3 shadowColor;
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);
lightingInfo info;
float shadow=1.;
float glossiness=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;S.ShadersStore[rn]=sn;var an="shadowOnlyVertexShader",nn=`precision highp float;
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;
uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
gl_Position=viewProjection*worldPos;
vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;S.ShadersStore[an]=nn;var Kt=class extends ht{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}},Dt=class a extends bt{constructor(e,t){super(e,t),this._needAlphaBlending=!0,this.shadowColor=ie.Black()}needAlphaBlending(){return this._needAlphaBlending}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}get activeLight(){return this._activeLight}set activeLight(e){this._activeLight=e}_getFirstShadowLightForMesh(e){for(let t of e.lightSources)if(t.shadowEnabled)return t;return null}isReadyForSubMesh(e,t,i){var s;if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===i)return!0;t.materialDefines||(t.materialDefines=new Kt);let r=t.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(t))return!0;let o=n.getEngine();if(this._activeLight){for(let l of e.lightSources)if(l.shadowEnabled){if(this._activeLight===l)break;let c=e.lightSources.indexOf(this._activeLight);c!==-1&&(e.lightSources.splice(c,1),e.lightSources.splice(0,0,this._activeLight));break}}P.PrepareDefinesForFrameBoundValues(n,o,this,r,!!i),P.PrepareDefinesForMisc(e,n,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),r),r._needNormals=P.PrepareDefinesForLights(n,e,r,!1,1);let h=(s=this._getFirstShadowLightForMesh(e))===null||s===void 0?void 0:s.getShadowGenerator();if(this._needAlphaBlending=!0,h&&h.getClassName&&h.getClassName()==="CascadedShadowGenerator"){let l=h;this._needAlphaBlending=!l.autoCalcDepthBounds}if(P.PrepareDefinesForAttributes(e,r,!1,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();let l=new ct;r.FOG&&l.addFallback(1,"FOG"),P.HandleFallbacksForShadows(r,l,1),r.NUM_BONE_INFLUENCERS>0&&l.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;let c=[U.PositionKind];r.NORMAL&&c.push(U.NormalKind),P.PrepareAttributesForBones(c,e,r,l),P.PrepareAttributesForInstances(c,r);let d="shadowOnly",f=r.toString(),p=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones"],g=new Array,_=new Array;$e(p),P.PrepareUniformsAndSamplersList({uniformsNames:p,uniformBuffersNames:_,samplers:g,defines:r,maxSimultaneousLights:1}),t.setEffect(n.getEngine().createEffect(d,{attributes:c,uniformsNames:p,uniformBuffersNames:_,samplers:g,defines:f,fallbacks:l,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},o),r,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(r._renderId=n.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!i,!0)}bindForSubMesh(e,t,i){let s=this.getScene(),r=i.materialDefines;if(!r)return;let n=i.effect;if(n){if(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",s.getTransformMatrix()),P.BindBonesParameters(t,this._activeEffect),this._mustRebind(s,n)&&(Je(n,this,s),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),s.bindEyePosition(n)),s.lightsEnabled){P.BindLights(s,t,this._activeEffect,r,1);let o=this._getFirstShadowLightForMesh(t);o&&(o._renderId=-1)}(s.fogEnabled&&t.applyFog&&s.fogMode!==qe.FOGMODE_NONE||r.SHADOWCSM0)&&this._activeEffect.setMatrix("view",s.getViewMatrix()),P.BindFogParameters(s,t,this._activeEffect),this._afterBind(t,this._activeEffect)}}clone(e){return Z.Clone(()=>new a(e,this.getScene()),this)}serialize(){let e=super.serialize();return e.customType="BABYLON.ShadowOnlyMaterial",e}getClassName(){return"ShadowOnlyMaterial"}static Parse(e,t,i){return Z.Parse(()=>new a(e.name,t),e,t,i)}};Ie("BABYLON.ShadowOnlyMaterial",Dt);var on={aspect:300/150,enableDebugging:!1,enableShadows:!0},qt=class{constructor(e){Le(this,"size",9.5),this.config={...on,...e},this.create()}create(e){this.destroy(),Object.assign(this.config,e);let{aspect:t,enableDebugging:i,enableShadows:s}=this.config,r=30;this.box=new gi("diceBox");let n=new Dt("shadowOnly",this.config.scene);n.alpha=s?1:0,i&&(n=new M("diceBox_material"),n.alpha=.7,n.diffuseColor=new ie(1,1,0));let o=We("ground",{width:this.size*2,height:1,depth:this.size*2},this.config.scene);if(o.scaling=new x(t,1,1),o.material=n,o.receiveShadows=!0,o.setParent(this.box),i){let h=We("wallTop",{width:this.size,height:r,depth:1},this.config.scene);h.position.y=r/2,h.position.z=this.size/-2,h.scaling=new x(t,1,1),h.material=n,h.setParent(this.box);let l=We("wallRight",{width:1,height:r,depth:this.size},this.config.scene);l.position.x=this.size*t/2,l.position.y=r/2,l.material=n,l.setParent(this.box);let c=We("wallBottom",{width:this.size,height:r,depth:1},this.config.scene);c.position.y=r/2,c.position.z=this.size/2,c.scaling=new x(t,1,1),c.material=n,c.setParent(this.box);let d=We("wallLeft",{width:1,height:r,depth:this.size},this.config.scene);d.position.x=this.size*t/-2,d.position.y=r/2,d.material=n,d.setParent(this.box)}}destroy(){this.box&&this.box.dispose()}},$t=class{constructor(){}},Oe=class a extends M{AttachAfterBind(e,t){if(this._newUniformInstances)for(let i in this._newUniformInstances){let s=i.toString().split("-");s[0]=="vec2"?t.setVector2(s[1],this._newUniformInstances[i]):s[0]=="vec3"?t.setVector3(s[1],this._newUniformInstances[i]):s[0]=="vec4"?t.setVector4(s[1],this._newUniformInstances[i]):s[0]=="mat4"?t.setMatrix(s[1],this._newUniformInstances[i]):s[0]=="float"&&t.setFloat(s[1],this._newUniformInstances[i])}if(this._newSamplerInstances)for(let i in this._newSamplerInstances){let s=i.toString().split("-");s[0]=="sampler2D"&&this._newSamplerInstances[i].isReady&&this._newSamplerInstances[i].isReady()&&t.setTexture(s[1],this._newSamplerInstances[i])}}ReviewUniform(e,t){if(e=="uniform"&&this._newUniforms)for(let i=0;i<this._newUniforms.length;i++)this._customUniform[i].indexOf("sampler")==-1&&t.push(this._newUniforms[i].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let i=0;i<this._newUniforms.length;i++)this._customUniform[i].indexOf("sampler")!=-1&&t.push(this._newUniforms[i].replace(/\[\d*\]/g,""));return t}Builder(e,t,i,s,r,n){if(n&&this._customAttributes&&this._customAttributes.length>0&&n.push(...this._customAttributes),this.ReviewUniform("uniform",t),this.ReviewUniform("sampler",s),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,a.ShaderIndexer++;let o="custom_"+a.ShaderIndexer,h=this._afterBind.bind(this);return this._afterBind=(l,c)=>{if(c){this.AttachAfterBind(l,c);try{h(l,c)}catch{}}},ue.ShadersStore[o+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(ue.ShadersStore[o+"VertexShader"]=ue.ShadersStore[o+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),ue.ShadersStore[o+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:"").replace("#define CUSTOM_FRAGMENT_MAIN_END",this.CustomParts.Fragment_MainEnd?this.CustomParts.Fragment_MainEnd:""),this.CustomParts.Fragment_Before_Fog&&(ue.ShadersStore[o+"PixelShader"]=ue.ShadersStore[o+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=o,o}constructor(e,t){super(e,t),this.CustomParts=new $t,this.customShaderNameResolve=this.Builder,this.FragmentShader=ue.ShadersStore.defaultPixelShader,this.VertexShader=ue.ShadersStore.defaultVertexShader}AddUniform(e,t,i){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),i&&(t.indexOf("sampler")!=-1?this._newSamplerInstances[t+"-"+e]=i:this._newUniformInstances[t+"-"+e]=i),this._customUniform.push("uniform "+t+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Fragment_Custom_Diffuse(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}};Oe.ShaderIndexer=1;Ie("BABYLON.CustomMaterial",Oe);Oe.prototype.clone=function(a){let e=this,t=Z.Clone(()=>new Oe(a,this.getScene()),this);return t.name=a,t.id=a,t.CustomParts.Fragment_Begin=e.CustomParts.Fragment_Begin,t.CustomParts.Fragment_Definitions=e.CustomParts.Fragment_Definitions,t.CustomParts.Fragment_MainBegin=e.CustomParts.Fragment_MainBegin,t.CustomParts.Fragment_Custom_Diffuse=e.CustomParts.Fragment_Custom_Diffuse,t.CustomParts.Fragment_Before_Lights=e.CustomParts.Fragment_Before_Lights,t.CustomParts.Fragment_Before_Fog=e.CustomParts.Fragment_Before_Fog,t.CustomParts.Fragment_Custom_Alpha=e.CustomParts.Fragment_Custom_Alpha,t.CustomParts.Fragment_Before_FragColor=e.CustomParts.Fragment_Before_FragColor,t.CustomParts.Vertex_Begin=e.CustomParts.Vertex_Begin,t.CustomParts.Vertex_Definitions=e.CustomParts.Vertex_Definitions,t.CustomParts.Vertex_MainBegin=e.CustomParts.Vertex_MainBegin,t.CustomParts.Vertex_Before_PositionUpdated=e.CustomParts.Vertex_Before_PositionUpdated,t.CustomParts.Vertex_Before_NormalUpdated=e.CustomParts.Vertex_Before_NormalUpdated,t.CustomParts.Vertex_After_WorldPosComputed=e.CustomParts.Vertex_After_WorldPosComputed,t.CustomParts.Vertex_MainEnd=e.CustomParts.Vertex_MainEnd,t};var Jt=class{constructor(e){Le(this,"loadedThemes",{}),Le(this,"themeData",{}),this.scene=e.scene}async loadStandardMaterial(e){let{theme:t,material:i}=e,s=new M(t,this.scene);i.diffuseTexture&&(s.diffuseTexture=await this.getTexture("diffuse",e)),i.bumpTexture&&(s.bumpTexture=await this.getTexture("bump",e)),i.specularTexture&&(s.specularTexture=await this.getTexture("specular",e)),s.allowShaderHotSwapping=!1}async loadColorMaterial(e){let{theme:t,material:i}=e,s=new Oe(t+"_light",this.scene),r=vi(e);i.diffuseTexture&&i.diffuseTexture.light&&(r.material.diffuseTexture=e.material.diffuseTexture.light,s.diffuseTexture=await this.getTexture("diffuse",r)),i.bumpTexture&&(s.bumpTexture=await this.getTexture("bump",e)),i.specularTexture&&(s.specularTexture=await this.getTexture("specular",e)),s.allowShaderHotSwapping=!1,s.Vertex_Definitions(`
      attribute vec3 customColor;
      varying vec3 vColor;
    `).Vertex_MainEnd(`
      vColor = customColor;
    `).Fragment_Definitions(`
      varying vec3 vColor;
    `).Fragment_Custom_Diffuse(`
      baseColor.rgb = mix(vColor.rgb, baseColor.rgb, baseColor.a);
    `),s.AddAttribute("customColor");let n=s.clone(t+"_dark");i.diffuseTexture&&i.diffuseTexture.dark&&(r.material.diffuseTexture=e.material.diffuseTexture.dark,n.diffuseTexture=await this.getTexture("diffuse",r)),n.AddAttribute("customColor")}async getTexture(e,t){let{basePath:i,material:s,theme:r}=t,n,o=e+"Level",h=e+"Texture";try{switch(e){case"diffuse":n=await this.importTextureAsync(`${i}/${s[h]}`,r),s[o]&&(n.level=s[o]);break;case"bump":n=await this.importTextureAsync(`${i}/${s[h]}`,r),s[o]&&(n.level=s[o]);break;case"specular":n=await this.importTextureAsync(`${i}/${s[h]}`,r),s.specularPower&&(n.specularPower=s.specularPower);break;default:throw new Error(`Texture type: ${e} is not supported`)}}catch(l){console.error(l)}return n}async importTextureAsync(e,t){return new Promise((i,s)=>{let r=e.match(/^(.*\/)(.*)$/),n=new E(e,this.scene,void 0,!0,void 0,()=>i(n),()=>s(`Unable to load texture '${r[2]}' for theme: '${t}'. Check that your assetPath is configured correctly and that the files exist at path: '${r[1]}'`))}).catch(i=>console.error(i))}async load(e){let{material:t}=e;t.type==="color"?await this.loadColorMaterial(e):t.type==="standard"?await this.loadStandardMaterial(e):console.error(`Material type: ${t.type} not supported`)}},j,it,ve,rt,pe,le,q,ei,me,Tt,xt,ae,Mt,ti,Ri,xi=class{constructor(e){J(this,ti),Le(this,"config"),Le(this,"initialized",!1),J(this,j,{}),J(this,it,0),J(this,ve,0),J(this,rt,[]),J(this,pe,void 0),J(this,le,void 0),J(this,q,void 0),J(this,ei,void 0),J(this,me,void 0),J(this,Tt,void 0),J(this,xt,void 0),J(this,ae,void 0),J(this,Mt,{}),Le(this,"noop",()=>{}),Le(this,"diceBufferView",new Float32Array(8e3)),this.onInitComplete=e.onInitComplete||this.noop,this.onThemeLoaded=e.onThemeLoaded||this.noop,this.onRollResult=e.onRollResult||this.noop,this.onRollComplete=e.onRollComplete||this.noop,this.onDieRemoved=e.onDieRemoved||this.noop,this.initialized=this.initScene(e)}async initScene(e){re(this,pe,e.canvas),C(this,pe).width=e.width,C(this,pe).height=e.height,this.config=e.options,re(this,le,Li(C(this,pe))),re(this,q,wi({engine:C(this,le)})),re(this,ei,Oi({engine:C(this,le),scene:C(this,q)})),re(this,me,Ti({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:C(this,q)})),re(this,Tt,new qt({enableShadows:this.config.enableShadows,aspect:C(this,pe).width/C(this,pe).height,lights:C(this,me),scene:C(this,q)})),re(this,xt,new Jt({scene:C(this,q)})),this.onInitComplete()}connect(e){re(this,ae,e),C(this,ae).postMessage({action:"initBuffer",diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer]),C(this,ae).onmessage=t=>{t.data.action==="updates"?this.updatesFromPhysics(t.data.diceBuffer):console.error("action from physicsWorker not found in offscreen worker")}}updateConfig(e){let t=this.config;this.config=e,t.enableShadows!==this.config.enableShadows&&(Object.values(C(this,me)).forEach(i=>i.dispose()),re(this,me,Ti({enableShadows:this.config.enableShadows,shadowTransparency:this.config.shadowTransparency,intensity:this.config.lightIntensity,scene:C(this,q)}))),t.scale!==this.config.scale&&Object.values(C(this,j)).forEach(({mesh:i})=>{var s;if(i){let{x:r=1,y:n=1,z:o=1}=(s=i?.metadata)==null?void 0:s.baseScale;i.scaling=new x(this.config.scale*r,this.config.scale*n,this.config.scale*o)}}),t.shadowTransparency!==this.config.shadowTransparency&&(C(this,me).directional.shadowGenerator.darkness=this.config.shadowTransparency),t.lightIntensity!==this.config.lightIntensity&&(C(this,me).directional.intensity=.65*this.config.lightIntensity,C(this,me).hemispheric.intensity=.4*this.config.lightIntensity)}render(e){C(this,le).runRenderLoop(this.renderLoop.bind(this)),C(this,ae).postMessage({action:"resumeSimulation",newStartPoint:e})}renderLoop(){C(this,ve)&&C(this,ve)===Object.keys(C(this,j)).length?(C(this,le).stopRenderLoop(),C(this,ae).postMessage({action:"stopSimulation"}),this.onRollComplete()):C(this,q).render()}async loadTheme(e){let{theme:t,basePath:i,material:s,meshFilePath:r,meshName:n}=e;if(await C(this,xt).load({theme:t,basePath:i,material:s}),!Object.keys(C(this,Mt)).includes(n)){C(this,Mt)[n]=r;let o=await De.loadModels({meshFilePath:r,meshName:n},C(this,q));if(!o)throw new Error("No colliders returned from the 3D mesh file. Low poly colliders are expected to be in the same file as the high poly dice and the mesh name contains the word 'collider'");C(this,ae).postMessage({action:"loadModels",options:{colliders:o,meshName:n}})}this.onThemeLoaded({id:t})}clear(){!Object.keys(C(this,j)).length&&!C(this,ve)||(this.diceBufferView.byteLength&&this.diceBufferView.fill(0),C(this,rt).forEach(e=>clearTimeout(e)),C(this,le).stopRenderLoop(),Object.values(C(this,j)).forEach(e=>{e.mesh&&e.mesh.dispose()}),re(this,j,{}),re(this,it,0),re(this,ve,0),C(this,q).render())}add(e){De.loadDie(e,C(this,q)).then(t=>{C(this,rt).push(setTimeout(()=>{Di(this,ti,Ri).call(this,t)},tt(this,it)._++*this.config.delay))})}addNonDie(e){C(this,le).activeRenderLoops.length===0&&this.render(!1);let{id:t,value:i,...s}=e,r={id:t,value:i,config:s};C(this,j)[t]=r,setTimeout(()=>{C(this,rt).push(setTimeout(()=>{this.handleAsleep(r)},tt(this,it)._++*this.config.delay))},10)}remove(e){let t=C(this,j)[e.id];t.hasOwnProperty("d10Instance")&&(C(this,j)[t.d10Instance.id].mesh&&(C(this,j)[t.d10Instance.id].mesh.dispose(),C(this,ae).postMessage({action:"removeDie",id:t.d10Instance.id})),delete C(this,j)[t.d10Instance.id],tt(this,ve)._--),C(this,j)[e.id].mesh&&C(this,j)[e.id].mesh.dispose(),delete C(this,j)[e.id],tt(this,ve)._--,C(this,q).render(),this.onDieRemoved(e.rollId)}updatesFromPhysics(e){this.diceBufferView=new Float32Array(e);let t=1;for(let i=0,s=this.diceBufferView[0];i<s;i++){if(!Object.keys(C(this,j)).length)continue;let r=C(this,j)[`${this.diceBufferView[t]}`];if(!r){console.log("Error: die not available in scene to animate");break}if(this.diceBufferView[t+1]===-1)this.handleAsleep(r);else{let n=this.diceBufferView[t+1],o=this.diceBufferView[t+2],h=this.diceBufferView[t+3],l=this.diceBufferView[t+4],c=this.diceBufferView[t+5],d=this.diceBufferView[t+6],f=this.diceBufferView[t+7];r.mesh.position.set(n,o,h),r.mesh.rotationQuaternion.set(l,c,d,f)}t=t+8}requestAnimationFrame(()=>{C(this,ae).postMessage({action:"stepSimulation",diceBuffer:this.diceBufferView.buffer},[this.diceBufferView.buffer])})}async handleAsleep(e){var t,i;if(e.asleep=!0,await De.getRollResult(e,C(this,q)),e.d10Instance||e.dieParent){if((t=e?.d10Instance)!=null&&t.asleep||(i=e?.dieParent)!=null&&i.asleep){let s=e.config.sides===100?e:e.dieParent,r=e.config.sides===10?e:e.d10Instance;s.rawValue&&(s.value=s.rawValue),s.rawValue=s.value,s.value=s.value+r.value,this.onRollResult({rollId:s.config.rollId,value:s.value})}}else e.config.sides===10&&e.value===0&&(e.value=10),this.onRollResult({rollId:e.config.rollId,value:e.value});tt(this,ve)._++}resize(e){let t=C(this,pe).width=e.width,i=C(this,pe).height=e.height;C(this,Tt).create({aspect:t/i}),C(this,le).resize()}};j=new WeakMap,it=new WeakMap,ve=new WeakMap,rt=new WeakMap,pe=new WeakMap,le=new WeakMap,q=new WeakMap,ei=new WeakMap,me=new WeakMap,Tt=new WeakMap,xt=new WeakMap,ae=new WeakMap,Mt=new WeakMap,ti=new WeakSet,Ri=async function(a){C(this,le).activeRenderLoops.length===0&&this.render(a.newStartPoint);let e={...a,assetPath:this.config.assetPath,enableShadows:this.config.enableShadows,scale:this.config.scale,lights:C(this,me)},t=new De(e,C(this,q));return C(this,j)[t.id]=t,C(this,ae).postMessage({action:"addDie",options:{sides:a.sides,scale:this.config.scale,id:t.id,newStartPoint:a.newStartPoint,theme:a.theme,meshName:a.meshName}}),a.sides===100&&a.data!=="single"&&(t.d10Instance=await De.loadDie({...e,dieType:"d10",sides:10,id:t.id+1e4},C(this,q)).then(i=>{let s=new De(i,C(this,q));return s.dieParent=t,s}),C(this,j)[`${t.d10Instance.id}`]=t.d10Instance,C(this,ae).postMessage({action:"addDie",options:{sides:10,scale:this.config.scale,id:t.d10Instance.id,theme:a.theme,meshName:a.meshName}})),t};export{xi as default};
