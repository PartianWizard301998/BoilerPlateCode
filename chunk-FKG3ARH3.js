import{Aa as F,Ca as C,Ga as E,O as M,Q as a,R as L,T as D,V as l,W as h,aa as B,ba as g,lb as P,mb as k,na as m,oa as R,sa as O,wa as T,ya as c}from"./chunk-UKGNGN7I.js";var j=null;function y(){return j}function Ge(i){j??=i}var N=class{};var v=new D(""),_=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>h(Y),providedIn:"platform"});let i=t;return i})(),He=new D(""),Y=(()=>{let t=class t extends _{constructor(){super(),this._doc=h(v),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return y().getBaseHref(this._doc)}onPopState(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function I(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function $(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function d(i){return i&&i[0]!=="?"?"?"+i:i}var p=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>h(W),providedIn:"root"});let i=t;return i})(),G=new D(""),W=(()=>{let t=class t extends p{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return I(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(_),l(G,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ye=(()=>{let t=class t extends p{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=I(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(_),l(G,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let i=t;return i})(),Z=(()=>{let t=class t{constructor(e){this._subject=new R,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=X($(x(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+d(n))}normalize(e){return t.stripTrailingSlash(q(this._basePath,x(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=d,t.joinWithSlash=I,t.stripTrailingSlash=$,t.\u0275fac=function(n){return new(n||t)(l(p))},t.\u0275prov=a({token:t,factory:()=>K(),providedIn:"root"});let i=t;return i})();function K(){return new Z(l(p))}function q(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function x(i){return i.replace(/\/index.html$/,"")}function X(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function We(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var w=class{constructor(t,s,e,n){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ze=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,u)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new w(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)n.remove(o===null?void 0:o);else if(o!==null){let f=n.get(o);n.move(f,u),U(f,r)}});for(let r=0,o=n.length;r<o;r++){let f=n.get(r).context;f.index=r,f.count=o,f.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);U(o,r)})}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(c(E),c(F),c(P))},t.\u0275dir=g({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=t;return i})();function U(i,t){i.context.$implicit=t.item}var Ke=(()=>{let t=class t{constructor(e,n){this._viewContainer=e,this._context=new A,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){z("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){z("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(c(E),c(F))},t.\u0275dir=g({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let i=t;return i})(),A=class{constructor(){this.$implicit=null,this.ngIf=null}};function z(i,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${i} must be a TemplateRef, but received '${M(t)}'.`)}var qe=(()=>{let t=class t{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),u=r.indexOf("-")===-1?void 0:T.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,u):this._renderer.removeStyle(this._ngEl.nativeElement,r,u)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}};t.\u0275fac=function(n){return new(n||t)(c(m),c(k),c(C))},t.\u0275dir=g({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let i=t;return i})();var Xe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=B({type:t}),t.\u0275inj=L({});let i=t;return i})(),Q="browser",J="server";function ee(i){return i===Q}function Qe(i){return i===J}var Je=(()=>{let t=class t{};t.\u0275prov=a({token:t,providedIn:"root",factory:()=>ee(h(O))?new S(h(v),window):new b});let i=t;return i})(),S=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=te(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function te(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var b=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},V=class{};export{y as a,Ge as b,N as c,v as d,He as e,p as f,W as g,Ye as h,Z as i,We as j,Ze as k,Ke as l,qe as m,Xe as n,Q as o,ee as p,Qe as q,Je as r,V as s};
