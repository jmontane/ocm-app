"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(ve,Q,h)=>{h.r(Q),h.d(Q,{ion_modal:()=>ae});var D=h(9671),l=h(2361),$=h(6254),W=h(207),z=h(1878),g=h(3756),X=h(1316),G=h(7208),I=h(599),de=h(2854),le=h(4318),c=h(9442),q=h(8685),ee=h(3139);h(3509);const te=function(){var e=(0,D.Z)(function*(t,o){"function"!=typeof t.canDismiss||!(yield t.canDismiss())||(o.isRunning()?o.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(o,n){return e.apply(this,arguments)}}(),V=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,oe=(e,t)=>(0,g.l)(400,e/Math.abs(1.1*t),500),H=(e,t)=>{const o=1/(1-t);return e*o+-t*o},ne=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=void 0===o||o<t,s=n?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,c.c)("backdropAnimation").fromTo("opacity",0,s);return n&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},re=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=`calc(var(--backdrop-opacity) * ${H(t,o)})`,s=[{offset:0,opacity:n},{offset:1,opacity:0}],r=[{offset:0,opacity:n},{offset:o,opacity:0},{offset:1,opacity:0}],i=(0,c.c)("backdropAnimation").keyframes(0!==o?r:s);return{wrapperAnimation:(0,c.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:i}},se=(e,t)=>{const{presentingEl:o,currentBreakpoint:n}=t,s=(0,g.g)(e),{wrapperAnimation:r,backdropAnimation:i}=void 0!==n?ne(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};i.addElement(s.querySelector("ion-backdrop")),r.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,c.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(o){const p=window.innerWidth<768,S="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,C=(0,g.g)(o),x=(0,c.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),b=document.body;if(p){const y=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",w=`translateY(${S?"-10px":y}) scale(0.93)`;x.afterStyles({transform:w}).beforeAddWrite(()=>b.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"}]),a.addAnimation(x)}else if(a.addAnimation(i),S){const u=`translateY(-10px) scale(${S?.93:1})`;x.afterStyles({transform:u}).addElement(C.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);const d=(0,c.c)().afterStyles({transform:u}).addElement(C.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);a.addAnimation([x,d])}else r.fromTo("opacity","0","1")}else a.addAnimation(i);return a},ie=(e,t,o=500)=>{const{presentingEl:n,currentBreakpoint:s}=t,r=(0,g.g)(e),{wrapperAnimation:i,backdropAnimation:a}=void 0!==s?re(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const p=(0,c.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(i);if(n){const S=window.innerWidth<768,C="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,x=(0,g.g)(n),b=(0,c.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(u=>{1===u&&(n.style.setProperty("overflow",""),Array.from(y.querySelectorAll("ion-modal")).filter(w=>void 0!==w.presentingElement).length<=1&&y.style.setProperty("background-color",""))}),y=document.body;if(S){const u=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",Y=`translateY(${C?"-10px":u}) scale(0.93)`;b.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:Y,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),p.addAnimation(b)}else if(p.addAnimation(a),C){const d=`translateY(-10px) scale(${C?.93:1})`;b.addElement(x.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:d},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const w=(0,c.c)().addElement(x.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:d},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);p.addAnimation([b,w])}else i.fromTo("opacity","1","0")}else p.addAnimation(a);return p},fe=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:r}=void 0!==o?ne(t):{backdropAnimation:(0,c.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,c.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,s])},ge=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,g.g)(e),{wrapperAnimation:s,backdropAnimation:r}=void 0!==o?re(t):{backdropAnimation:(0,c.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,c.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelector(".modal-wrapper")),(0,c.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,s])},ae=class{constructor(e){(0,l.r)(this,e),this.didPresent=(0,l.e)(this,"ionModalDidPresent",7),this.willPresent=(0,l.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,l.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,l.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,l.e)(this,"didPresent",7),this.willPresentShorthand=(0,l.e)(this,"willPresent",7),this.willDismissShorthand=(0,l.e)(this,"willDismiss",7),this.didDismissShorthand=(0,l.e)(this,"didDismiss",7),this.modalIndex=xe++,this.coreDelegate=(0,z.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:n}=this;n&&n();const s=void 0!==t?document.getElementById(t):null;s&&(this.destroyTriggerInteraction=((i,a)=>{const p=()=>{a.present()};return i.addEventListener("click",p),()=>{i.removeEventListener("click",p)}})(s,o))},this.onBackdropTap=()=>{this.dismiss(void 0,I.B)},this.onLifecycle=t=>{const o=this.usersElement,n=ke[t.type];if(o&&n){const s=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(s)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,D.Z)(function*(){t.gesture?t.gesture.enable(e):e&&(yield t.initSwipeToClose())})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,o)=>t-o))}connectedCallback(){(0,I.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:o}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,G.p)("Your breakpoints array must include the initialBreakpoint value."),o&&(0,G.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,g.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(){var e=this;return(0,D.Z)(function*(){const{canDismiss:t}=e;return void 0===t||("function"==typeof t?t():t)})()}present(){var e=this;return(0,D.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:o,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,z.a)(n,e.el,e.component,["ion-page"],t,o),yield(0,le.e)(e.usersElement),(0,l.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,I.d)(e,"modalEnter",se,fe,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():(e.swipeToClose||void 0!==e.canDismiss&&void 0!==e.presentingElement)&&(yield e.initSwipeToClose()),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,g.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(X.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;return(0,D.Z)(function*(){if("ios"!==(0,$.b)(e))return;const{el:t}=e,o=e.leaveAnimation||$.c.get("modalLeave",ie),n=e.animation=o(t,{presentingEl:e.presentingElement}),s=(0,W.f)(t);if(!s)return void(0,W.p)(t);const r=yield(0,W.g)(s);e.gesture=((e,t,o,n,s)=>{const r=e.offsetHeight;let i=!1,a=!1;const S=!!t.querySelector("ion-refresher"),x=!(0,W.i)(t)||t.scrollY,b=()=>{(0,W.i)(t)?t.scrollY=!1:t.style.setProperty("overflow","hidden")},N=(0,ee.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:f=>{const m=f.event.target;return null===m||!m.closest||(m.closest("ion-content")?!S&&0===o.scrollTop:null===m.closest("ion-footer"))},onStart:f=>{const{deltaY:m}=f;a=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&b(),n.progressStart(!0,i?1:0)},onMove:f=>{const{deltaY:m}=f;m>0&&b();const v=f.deltaY/r,_=v>=0&&a,B=_?.2:.9999,K=_?V(v/B):v,P=(0,g.l)(1e-4,K,B);n.progressStep(P)},onEnd:f=>{const m=f.velocityY,v=f.deltaY/r,_=v>=0&&a,B=_?.2:.9999,K=_?V(v/B):v,P=(0,g.l)(1e-4,K,B),M=!_&&(f.deltaY+1e3*m)/r>=.5;let j=M?-.001:.001;M?(n.easing("cubic-bezier(0.32, 0.72, 0, 1)"),j+=(0,q.g)([0,0],[.32,.72],[0,1],[1,1],P)[0]):(n.easing("cubic-bezier(1, 0, 0.68, 0.28)"),j+=(0,q.g)([0,0],[1,0],[.68,.28],[1,1],P)[0]);const F=oe(M?v*r:(1-P)*r,m);i=M,N.enable(!1),(0,W.i)(t)?t.scrollY=x:t.style.removeProperty("overflow"),n.onFinish(()=>{M||N.enable(!0)}).progressEnd(M?1:0,j,F),_&&P>B/4?te(e,n):M&&s()}});return N})(t,s,r,n,()=>{e.gestureAnimationDismissing=!0,e.animation.onFinish((0,D.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),e.gesture.enable(!0)})()}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:o}=this;if(!e||void 0===t)return;const n=this.enterAnimation||$.c.get("modalEnter",se),s=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:o});s.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:i}=((e,t,o,n,s,r,i=[],a,p,S)=>{const b={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==s?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},y=e.querySelector("ion-content"),u=o.clientHeight;let d=n,w=0,Y=!1;const f=r.childAnimations.find(k=>"wrapperAnimation"===k.id),m=r.childAnimations.find(k=>"backdropAnimation"===k.id),v=i[i.length-1],_=i[0],B=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},K=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};f&&m&&(f.keyframes([...b.WRAPPER_KEYFRAMES]),m.keyframes([...b.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-d),d>s?B():K()),y&&d!==v&&(y.scrollY=!1);const F=k=>{const{breakpoint:O,canDismiss:A,breakpointOffset:T}=k,L=A&&0===O,E=L?d:O,R=0!==E;d=0,f&&m&&(f.keyframes([{offset:0,transform:`translateY(${100*T}%)`},{offset:1,transform:`translateY(${100*(1-E)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${H(1-T,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${H(E,s)})`}]),r.progressStep(0)),Z.enable(!1),r.onFinish(()=>{R&&(f&&m?(0,g.r)(()=>{f.keyframes([...b.WRAPPER_KEYFRAMES]),m.keyframes([...b.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-E),d=E,S(d),y&&d===i[i.length-1]&&(y.scrollY=!0),d>s?B():K(),Z.enable(!0)}):Z.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),L?te(e,r):R||p()},Z=(0,ee.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:k=>{const O=k.event.target.closest("ion-content");return d=a(),!(1===d&&O)},onStart:()=>{Y=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===_,y&&(y.scrollY=!1),(0,g.r)(()=>{e.focus()}),r.progressStart(!0,1-d)},onMove:k=>{const A=i.length>1?1-i[1]:void 0,T=1-d+k.deltaY/u,L=void 0!==A&&T>=A&&Y,E=L?.95:.9999,R=L&&void 0!==A?A+V((T-A)/(E-A)):T;w=(0,g.l)(1e-4,R,E),r.progressStep(w)},onEnd:k=>{const T=d-(k.deltaY+100*k.velocityY)/u,L=i.reduce((E,R)=>Math.abs(R-T)<Math.abs(E-T)?R:E);F({breakpoint:L,breakpointOffset:w,canDismiss:Y})}});return{gesture:Z,moveSheetToBreakpoint:F}})(this.el,this.backdropEl,e,t,o,s,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=r,this.moveSheetToBreakpoint=i,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,D.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var o=this;return(0,D.Z)(function*(){if(o.gestureAnimationDismissing&&"gesture"!==t||"handler"!==t&&!(yield o.checkCanDismiss()))return!1;typeof window<"u"&&o.keyboardOpenCallback&&window.removeEventListener(X.KEYBOARD_DID_OPEN,o.keyboardOpenCallback),void 0!==o.currentTransition&&(yield o.currentTransition);const n=I.h.get(o)||[];o.currentTransition=(0,I.f)(o,e,t,"modalLeave",ie,ge,{presentingEl:o.presentingElement,currentBreakpoint:o.currentBreakpoint||o.initialBreakpoint,backdropBreakpoint:o.backdropBreakpoint});const s=yield o.currentTransition;if(s){const{delegate:r}=o.getDelegate();yield(0,z.d)(r,o.usersElement),(0,l.c)(()=>o.el.classList.remove("show-modal")),o.animation&&o.animation.destroy(),o.gesture&&o.gesture.destroy(),n.forEach(i=>i.destroy())}return o.currentTransition=void 0,o.animation=void 0,s})()}onDidDismiss(){return(0,I.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,I.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,D.Z)(function*(){if(!t.isSheetModal)return void(0,G.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,G.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:o,moveSheetToBreakpoint:n,canDismiss:s,breakpoints:r}=t;o!==e&&n&&n({breakpoint:e,breakpointOffset:1-o,canDismiss:void 0!==s&&!0!==s&&0===r[0]})})()}getCurrentBreakpoint(){var e=this;return(0,D.Z)(function*(){return e.currentBreakpoint})()}render(){const{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:n}=this,s=!1!==e&&t,r=(0,$.b)(this),{modalId:i}=this,a=void 0!==o&&"ios"===r;return(0,l.h)(l.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[r]:!0,"modal-default":!a&&!t,"modal-card":a,"modal-sheet":t,"overlay-hidden":!0},(0,de.g)(this.cssClass)),id:i,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,l.h)("ion-backdrop",{ref:p=>this.backdropEl=p,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===r&&(0,l.h)("div",{class:"modal-shadow"}),(0,l.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:p=>this.wrapperEl=p},s&&(0,l.h)("div",{class:"modal-handle",part:"handle"}),(0,l.h)("slot",null)))}get el(){return(0,l.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},ke={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let xe=0;ae.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);