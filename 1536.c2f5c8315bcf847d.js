"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1536],{1536:(v,l,a)=>{a.r(l),a.d(l,{ion_tab:()=>d,ion_tabs:()=>c});var s=a(9671),n=a(2361),h=a(1878);const d=class{constructor(e){(0,n.r)(this,e),this.loaded=!1,this.active=!1}componentWillLoad(){var e=this;return(0,s.Z)(function*(){e.active&&(yield e.setActive())})()}setActive(){var e=this;return(0,s.Z)(function*(){yield e.prepareLazyLoaded(),e.active=!0})()}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,h.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:t,component:i}=this;return(0,n.h)(n.H,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":void 0===i,"tab-hidden":!t}},(0,n.h)("slot",null))}get el(){return(0,n.i)(this)}static get watchers(){return{active:["changeActive"]}}};d.style=":host(.tab-hidden){display:none !important}";const c=class{constructor(e){(0,n.r)(this,e),this.ionNavWillLoad=(0,n.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,n.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,n.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=t=>{const{href:i,tab:r}=t.detail;if(this.useRouter&&void 0!==i){const u=document.querySelector("ion-router");u&&u.push(i)}else this.select(r)}}componentWillLoad(){var e=this;return(0,s.Z)(function*(){if(e.useRouter||(e.useRouter=!!document.querySelector("ion-router")&&!e.el.closest("[no-router]")),!e.useRouter){const t=e.tabs;t.length>0&&(yield e.select(t[0]))}e.ionNavWillLoad.emit()})()}componentWillRender(){const e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}select(e){var t=this;return(0,s.Z)(function*(){const i=o(t.tabs,e);return!!t.shouldSwitch(i)&&(yield t.setActive(i),yield t.notifyRouter(),t.tabSwitch(),!0)})()}getTab(e){var t=this;return(0,s.Z)(function*(){return o(t.tabs,e)})()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(e){var t=this;return(0,s.Z)(function*(){const i=o(t.tabs,e);return t.shouldSwitch(i)?(yield t.setActive(i),{changed:!0,element:t.selectedTab,markVisible:()=>t.tabSwitch()}):{changed:!1,element:t.selectedTab}})()}getRouteId(){var e=this;return(0,s.Z)(function*(){var t;const i=null===(t=e.selectedTab)||void 0===t?void 0:t.tab;return void 0!==i?{id:i,element:e.selectedTab}:void 0})()}setActive(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}tabSwitch(){const e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}notifyRouter(){if(this.useRouter){const e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return(0,n.h)(n.H,{onIonTabButtonClick:this.onTabClicked},(0,n.h)("slot",{name:"top"}),(0,n.h)("div",{class:"tabs-inner"},(0,n.h)("slot",null)),(0,n.h)("slot",{name:"bottom"}))}get el(){return(0,n.i)(this)}},o=(e,t)=>{const i="string"==typeof t?e.find(r=>r.tab===t):t;return i||console.error(`tab with id: "${i}" does not exist`),i};c.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);