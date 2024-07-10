import{k as q,l as $,m as z,n as T,p as G}from"./chunk-FKG3ARH3.js";import{$ as b,$a as m,Ea as X,Ma as w,Na as E,Oa as f,Pa as U,Q as R,Qa as _,R as j,Ra as o,Sa as d,Ta as x,Ua as O,Va as F,Wa as V,Xa as I,Ya as u,Za as W,_a as N,aa as D,bb as K,cb as Z,ha as y,ia as C,oa as A,sa as H,xa as p,ya as k}from"./chunk-UKGNGN7I.js";var a=typeof window<"u"&&window||{},Se=a.document,xe=a.location,Ie=a.gc?()=>a.gc():()=>null,be=a.performance?a.performance:null,ye=a.Event,Ce=a.MouseEvent,ke=a.KeyboardEvent,we=a.EventTarget,Ee=a.History,Ve=a.Location,Te=a.EventListener;var v;function Q(){let r=a.document.createElement("span");r.innerText="testing bs version",r.classList.add("d-none"),r.classList.add("pl-1"),a.document.head.appendChild(r);let t=a.getComputedStyle(r).paddingLeft;return t&&parseFloat(t)?(a.document.head.removeChild(r),"bs4"):(a.document.head.removeChild(r),"bs5")}function se(){return v||(v=Q()),v==="bs4"}function ne(){return v||(v=Q()),v==="bs5"}function J(){return{isBs4:se(),isBs5:ne()}}var P=class{constructor(){this.length=0,this.asArray=[]}get(t){if(this.length===0||t<0||t>=this.length)return;let i=this.head;for(let e=0;e<t;e++)i=i?.next;return i?.value}add(t,i=this.length){if(i<0||i>this.length)throw new Error("Position is out of the list");let e={value:t,next:void 0,previous:void 0};if(this.length===0)this.head=e,this.tail=e,this.current=e;else if(i===0&&this.head)e.next=this.head,this.head.previous=e,this.head=e;else if(i===this.length&&this.tail)this.tail.next=e,e.previous=this.tail,this.tail=e;else{let s=this.getNode(i-1),n=s?.next;s&&n&&(s.next=e,n.previous=e,e.previous=s,e.next=n)}this.length++,this.createInternalArrayRepresentation()}remove(t=0){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");if(t===0&&this.head)this.head=this.head.next,this.head?this.head.previous=void 0:this.tail=void 0;else if(t===this.length-1&&this.tail?.previous)this.tail=this.tail.previous,this.tail.next=void 0;else{let i=this.getNode(t);i?.next&&i.previous&&(i.next.previous=i.previous,i.previous.next=i.next)}this.length--,this.createInternalArrayRepresentation()}set(t,i){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");let e=this.getNode(t);e&&(e.value=i,this.createInternalArrayRepresentation())}toArray(){return this.asArray}findAll(t){let i=this.head,e=[];if(!i)return e;for(let s=0;s<this.length;s++){if(!i)return e;t(i.value,s)&&e.push({index:s,value:i.value}),i=i.next}return e}push(...t){return t.forEach(i=>{this.add(i)}),this.length}pop(){if(this.length===0)return;let t=this.tail;return this.remove(this.length-1),t?.value}unshift(...t){return t.reverse(),t.forEach(i=>{this.add(i,0)}),this.length}shift(){if(this.length===0)return;let t=this.head?.value;return this.remove(),t}forEach(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return;t(i.value,e),i=i.next}}indexOf(t){let i=this.head,e=-1;for(let s=0;s<this.length;s++){if(!i)return e;if(i.value===t){e=s;break}i=i.next}return e}some(t){let i=this.head,e=!1;for(;i&&!e;){if(t(i.value)){e=!0;break}i=i.next}return e}every(t){let i=this.head,e=!0;for(;i&&e;)t(i.value)||(e=!1),i=i.next;return e}toString(){return"[Linked List]"}find(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return;if(t(i.value,e))return i.value;i=i.next}}findIndex(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return-1;if(t(i.value,e))return e;i=i.next}return-1}getNode(t){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");let i=this.head;for(let e=0;e<t;e++)i=i?.next;return i}createInternalArrayRepresentation(){let t=[],i=this.head;for(;i;)t.push(i.value),i=i.next;this.asArray=t}};var Pe=typeof console>"u"||!("warn"in console);var Y=["*"],le=r=>({display:r});function oe(r,t){if(r&1){let i=V();o(0,"li",7),I("click",function(){let s=y(i).index,n=u(2);return C(n.selectSlide(s))}),d()}if(r&2){let i=t.$implicit;_("active",i.active===!0)}}function ae(r,t){if(r&1&&(O(0),o(1,"ol",5),w(2,oe,1,2,"li",6),d(),F()),r&2){let i=u();p(2),f("ngForOf",i.indicatorsSlides())}}function de(r,t){if(r&1){let i=V();o(0,"button",9),I("click",function(){let s=y(i).index,n=u(2);return C(n.selectSlide(s))}),d()}if(r&2){let i=t.$implicit,e=t.index,s=u(2);_("active",i.active===!0),E("data-bs-target","#carousel"+s.currentId)("data-bs-slide-to",e)}}function he(r,t){if(r&1&&(O(0),o(1,"div",5),w(2,de,1,4,"button",8),d(),F()),r&2){let i=u();p(2),f("ngForOf",i.indicatorsSlides())}}function ce(r,t){if(r&1){let i=V();o(0,"a",10),I("click",function(){y(i);let s=u();return C(s.previousSlide())}),x(1,"span",11),o(2,"span",12),m(3,"Previous"),d()()}if(r&2){let i=u();_("disabled",i.checkDisabledClass("prev")),E("data-bs-target","#carousel"+i.currentId)}}function ue(r,t){if(r&1){let i=V();o(0,"a",13),I("click",function(){y(i);let s=u();return C(s.nextSlide())}),x(1,"span",14),o(2,"span",12),m(3,"Next"),d()()}if(r&2){let i=u();_("disabled",i.checkDisabledClass("next")),E("data-bs-target","#carousel"+i.currentId)}}var fe=(()=>{let t=class t{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();function me(r,t){let i=r.length;for(;i--;)if(t(r[i],i,r))return i;return-1}function ge(r,t){let i=[],e=Math.ceil(r.length/t),s=0;for(;s<e;){let n=r.splice(0,s===e-1&&t<r.length?r.length:t);i.push(n),s++}return i}function pe(r){return typeof r=="number"||Object.prototype.toString.call(r)==="[object Number]"}var h=function(r){return r[r.UNKNOWN=0]="UNKNOWN",r[r.NEXT=1]="NEXT",r[r.PREV=2]="PREV",r}(h||{}),ve=1,M=(()=>{let t=class t{set activeSlide(e){this.multilist||(pe(e)&&(this.customActiveSlide=e),this._slides.length&&e!==this._currentActiveSlide&&this._select(e))}get activeSlide(){return this._currentActiveSlide||0}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isFirstSlideVisible(){let e=this.getVisibleIndexes();return!e||e instanceof Array&&!e.length?!1:e.includes(0)}get isLastSlideVisible(){let e=this.getVisibleIndexes();return!e||e instanceof Array&&!e.length?!1:e.includes(this._slides.length-1)}get _bsVer(){return J()}constructor(e,s,n){this.ngZone=s,this.platformId=n,this.noWrap=!1,this.noPause=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.isAnimated=!1,this.activeSlideChange=new A(!1),this.slideRangeChange=new A,this.startFromIndex=0,this._interval=5e3,this._slides=new P,this._currentVisibleSlidesIndex=0,this.isPlaying=!1,this.destroyed=!1,this.currentId=0,this.getActive=l=>l.active,this.makeSlidesConsistent=l=>{l.forEach((S,g)=>S.item.order=g)},Object.assign(this,e),this.currentId=ve++}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=ge(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides()),this.customActiveSlide&&!this.multilist&&this._select(this.customActiveSlide)},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),!this.multilist&&this.isAnimated&&(e.isAnimated=!0),!this.multilist&&this._slides.length===1&&(this._currentActiveSlide=void 0,this.customActiveSlide||(this.activeSlide=0),this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){let s=this._slides.indexOf(e);if(this._currentActiveSlide===s){let n;this._slides.length>1&&(n=this.isLast(s)?this.noWrap?s-1:0:s),this._slides.remove(s),setTimeout(()=>{this._select(n)},0)}else{this._slides.remove(s);let n=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=n,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(h.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(h.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(h.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return me(this.slides,this.getActive)}move(e,s=!1){let n=this.getFirstVisibleIndex(),l=this.getLastVisibleIndex();this.noWrap&&(e===h.NEXT&&this.isLast(l)||e===h.PREV&&n===0)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,s)||0)}keydownPress(e){if(e.keyCode===13||e.key==="Enter"||e.keyCode===32||e.key==="Space"){this.nextSlide(),e.preventDefault();return}if(e.keyCode===37||e.key==="LeftArrow"){this.previousSlide();return}if(e.keyCode===39||e.key==="RightArrow"){this.nextSlide();return}}onMouseLeave(){this.pauseOnFocus||this.play()}onMouseUp(){this.pauseOnFocus||this.play()}pauseFocusIn(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())}pauseFocusOut(){this.play()}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return e===0}indicatorsSlides(){return this.slides.filter((e,s)=>!this.indicatorsByChunk||s%this.itemsPerSlide===0)}selectInitialSlides(){let e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){let s=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...s].slice(s.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(s=>s.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,s){let n=0;if(!(!s&&this.isLast(this.activeSlide)&&e!==h.PREV&&this.noWrap)){switch(e){case h.NEXT:if(typeof this._currentActiveSlide>"u"){n=0;break}if(!this.isLast(this._currentActiveSlide)){n=this._currentActiveSlide+1;break}n=!s&&this.noWrap?this._currentActiveSlide:0;break;case h.PREV:if(typeof this._currentActiveSlide>"u"){n=0;break}if(this._currentActiveSlide>0){n=this._currentActiveSlide-1;break}if(!s&&this.noWrap){n=this._currentActiveSlide;break}n=this._slides.length-1;break;default:throw new Error("Unknown direction")}return n}}mapSlidesAndIndexes(){return this.slides.slice().map((e,s)=>({index:s,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),!this.singleSlideOffset)this.selectRangeByNestedIndex(e);else{let s=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,n=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(s,n),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(l=>l.item.active=!0)}this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){if(!this._chunkedSlides)return;let s=this._chunkedSlides.map((n,l)=>({index:l,list:n})).find(n=>n.list.find(l=>l.index===e)!==void 0);s&&(this._currentVisibleSlidesIndex=s.index,this._chunkedSlides[s.index].forEach(n=>{n.item.active=!0}))}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset&&this._slidesWithIndexes?this._slidesWithIndexes.map(n=>n.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return this._chunkedSlides?this._currentVisibleSlidesIndex===this._chunkedSlides.length-1:!1}isVisibleSlideListFirst(){return this._currentVisibleSlidesIndex===0}moveSliderByOneItem(e){let s,n,l,S;if(this.noWrap){s=this.getFirstVisibleIndex(),n=this.getLastVisibleIndex(),l=e===h.NEXT?s:n,S=e!==h.NEXT?s-1:this.isLast(n)?0:n+1;let c=this._slides.get(l);c&&(c.active=!1);let L=this._slides.get(S);L&&(L.active=!0);let B=this.mapSlidesAndIndexes().filter(ie=>ie.item.active);this.makeSlidesConsistent(B),this.singleSlideOffset&&(this._slidesWithIndexes=B),this.slideRangeChange.emit(this.getVisibleIndexes());return}if(!this._slidesWithIndexes||!this._slidesWithIndexes[0])return;let g;if(s=this._slidesWithIndexes[0].index,n=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===h.NEXT){this._slidesWithIndexes.shift(),g=this.isLast(n)?0:n+1;let c=this._slides.get(g);c&&this._slidesWithIndexes.push({index:g,item:c})}else{this._slidesWithIndexes.pop(),g=this.isFirst(s)?this._slides.length-1:s-1;let c=this._slides.get(g);c&&(this._slidesWithIndexes=[{index:g,item:c},...this._slidesWithIndexes])}this.hideSlides(),this._slidesWithIndexes.forEach(c=>c.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(c=>c.index))}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this.noWrap?this._currentVisibleSlidesIndex=e===h.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===h.NEXT?this._currentVisibleSlidesIndex=this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._currentVisibleSlidesIndex=this._chunkedSlides?this._chunkedSlides.length-1:0:this._currentVisibleSlidesIndex=this._currentVisibleSlidesIndex-1,this._chunkedSlides&&this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(s=>s.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){if(!this.singleSlideOffset&&this._chunkedSlides)return this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index);if(this._slidesWithIndexes)return this._slidesWithIndexes.map(e=>e.index)}_select(e){if(isNaN(e)){this.pause();return}if(!this.multilist&&typeof this._currentActiveSlide<"u"){let n=this._slides.get(this._currentActiveSlide);typeof n<"u"&&(n.active=!1)}let s=this._slides.get(e);typeof s<"u"&&(this._currentActiveSlide=e,s.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();let e=+this.interval;!isNaN(e)&&e>0&&G(this.platformId)&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>window.setInterval(()=>{let s=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&s>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}checkDisabledClass(e){return e==="prev"?this.activeSlide===0&&this.noWrap&&!this.multilist||this.isFirstSlideVisible&&this.noWrap&&this.multilist:this.isLast(this.activeSlide)&&this.noWrap&&!this.multilist||this.isLastSlideVisible&&this.noWrap&&this.multilist}};t.\u0275fac=function(s){return new(s||t)(k(fe),k(X),k(H))},t.\u0275cmp=b({type:t,selectors:[["carousel"]],inputs:{noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators",pauseOnFocus:"pauseOnFocus",indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",isAnimated:"isAnimated",activeSlide:"activeSlide",startFromIndex:"startFromIndex",interval:"interval"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:Y,decls:7,vars:8,consts:[["tabindex","0",1,"carousel","slide",3,"mouseenter","mouseleave","mouseup","keydown","focusin","focusout","id"],[4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev","href","javascript:void(0);","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next","href","javascript:void(0);","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["type","button","aria-current","true",3,"active","click",4,"ngFor","ngForOf"],["type","button","aria-current","true",3,"click"],["href","javascript:void(0);","tabindex","0","role","button",1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],[1,"sr-only","visually-hidden"],["href","javascript:void(0);","tabindex","0","role","button",1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(s,n){s&1&&(W(),o(0,"div",0),I("mouseenter",function(){return n.pause()})("mouseleave",function(){return n.onMouseLeave()})("mouseup",function(){return n.onMouseUp()})("keydown",function(S){return n.keydownPress(S)})("focusin",function(){return n.pauseFocusIn()})("focusout",function(){return n.pauseFocusOut()}),w(1,ae,3,1,"ng-container",1)(2,he,3,1,"ng-container",1),o(3,"div",2),N(4),d(),w(5,ce,4,3,"a",3)(6,ue,4,3,"a",4),d()),s&2&&(f("id","carousel"+n.currentId),p(),f("ngIf",!n._bsVer.isBs5&&n.showIndicators&&n.slides.length>1),p(),f("ngIf",n._bsVer.isBs5&&n.showIndicators&&n.slides.length>1),p(),f("ngStyle",Z(6,le,n.multilist?"flex":"block")),p(2),f("ngIf",n.slides.length>1),p(),f("ngIf",n.slides.length>1))},dependencies:[q,$,z],encapsulation:2});let r=t;return r})(),ee=(()=>{let t=class t{constructor(e){this.active=!1,this.itemWidth="100%",this.order=0,this.isAnimated=!1,this.addClass=!0,this.multilist=!1,this.carousel=e}ngOnInit(){this.carousel.addSlide(this),this.itemWidth=`${100/this.carousel.itemsPerSlide}%`,this.multilist=this.carousel?.itemsPerSlide>1}ngOnDestroy(){this.carousel.removeSlide(this)}};t.\u0275fac=function(s){return new(s||t)(k(M))},t.\u0275cmp=b({type:t,selectors:[["slide"]],hostVars:15,hostBindings:function(s,n){s&2&&(E("aria-hidden",!n.active),U("width",n.itemWidth)("order",n.order),_("multilist-margin",n.multilist)("active",n.active)("carousel-animation",n.isAnimated)("item",n.addClass)("carousel-item",n.addClass))},inputs:{active:"active"},ngContentSelectors:Y,decls:2,vars:2,consts:[[1,"item"]],template:function(s,n){s&1&&(W(),o(0,"div",0),N(1),d()),s&2&&_("active",n.active)},styles:[".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]});let r=t;return r})(),te=(()=>{let t=class t{static forRoot(){return{ngModule:t,providers:[]}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=D({type:t}),t.\u0275inj=j({imports:[T]});let r=t;return r})();var Ke=(()=>{let t=class t{ngOnInit(){}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=b({type:t,selectors:[["app-home"]],standalone:!0,features:[K],decls:18,vars:0,consts:[["src","../../../assets/food.jpg","alt","first slide",2,"display","block","width","100%"],[1,"carousel-caption","d-none","d-md-block"],["src","../../../assets/traveling.jpg","alt","third slide",2,"display","block","width","100%"],[1,"container","mt-3"]],template:function(s,n){s&1&&(o(0,"carousel")(1,"slide"),x(2,"img",0),o(3,"div",1)(4,"h2"),m(5,"Food Blogs"),d(),o(6,"h3"),m(7,"Nulla vitae elit libero, a pharetra augue mollis interdum."),d()()(),o(8,"slide"),x(9,"img",2),o(10,"div",1)(11,"h2"),m(12,"Travel Blogs"),d(),o(13,"h3"),m(14,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."),d()()()(),o(15,"div",3)(16,"h1"),m(17,"Featured Content"),d()())},dependencies:[T,te,ee,M],styles:["h1[_ngcontent-%COMP%]{text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:700}carousel[_ngcontent-%COMP%]{height:420px}"]});let r=t;return r})();export{Ke as default};