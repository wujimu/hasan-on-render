"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5346],{5346:(b,g,s)=>{s.r(g),s.d(g,{AlbumPageModule:()=>C});var m=s(4755),p=s(5030),i=s(7002),h=s(4294),u=s(5861),t=s(2223);let f=(()=>{class o{constructor(e){this.modalCtl=e}ngOnInit(){}cancel(){return this.modalCtl.dismiss(null,"cancel")}confirm(){return this.modalCtl.dismiss(this.name,"confirm")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.IN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-picture-zoom"]],inputs:{photo:"photo"},decls:19,vars:5,consts:[["slot","start"],["color","medium",3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["alt","Silhouette of mountains",3,"src"],["color","primary"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),t.NdJ("click",function(){return n.cancel()}),t._uU(4,"Cancel"),t.qZA()(),t._UZ(5,"ion-title"),t.TgZ(6,"ion-buttons",2)(7,"ion-button",3),t.NdJ("click",function(){return n.confirm()}),t.qZA()()()(),t.TgZ(8,"ion-content",4)(9,"ion-card"),t._UZ(10,"ion-img",5),t.TgZ(11,"ion-card-header")(12,"ion-card-title"),t._uU(13),t.qZA(),t.TgZ(14,"ion-card-subtitle"),t._uU(15),t.qZA()(),t.TgZ(16,"ion-card-content")(17,"ion-text",6),t._uU(18),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("strong",!0),t.xp6(3),t.Q6J("src",n.photo.original),t.xp6(3),t.hij("By: ",n.photo.photographer,""),t.xp6(2),t.Oqu(n.photo.alt),t.xp6(3),t.hij("id: ",n.photo.photographer_id,""))},dependencies:[i.YG,i.Sm,i.PM,i.FN,i.Zi,i.tO,i.Dq,i.W2,i.Gu,i.Xz,i.yW,i.wd,i.sr]}),o})();var P=s(6534);let v=(()=>{class o{constructor(){this.cache=new Map}getData(e,n){var r=this;return(0,u.Z)(function*(){const a=r.getCachedData(e);if(void 0!==a)return a;try{const d=(yield P.Z.get(e,n)).data;return r.cacheData(e,d),r.storeData(e,d),d}catch(c){return console.error(c),null}})()}clearCache(e){e?(this.cache.delete(e),localStorage.removeItem(e)):(this.cache.clear(),localStorage.clear())}getCachedData(e){const n=this.cache.get(e);if(void 0!==n)return n;const r=localStorage.getItem(e);if(null!==r){const a=JSON.parse(r);return this.cacheData(e,a),a}}cacheData(e,n){this.cache.set(e,n)}storeData(e,n){const r=JSON.stringify(n);localStorage.setItem(e,r)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),S=(()=>{class o{preload(e){return new Promise((n,r)=>{const a=new Image;a.onload=n,a.onerror=r,a.src=e})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const y=["grid"];function _(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"ion-img",8),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openModal(a))}),t.qZA()()}if(2&o){const e=l.$implicit;t.xp6(1),t.Q6J("src",e.medium)}}const Z=[{path:"",component:(()=>{class o{constructor(e,n,r,a){this.apiService=e,this.modalController=n,this.imagesService=r,this.location=a,this.itemsPerSlide=30,this.itemsPerColumn=1,this.apiKey="042sbtq1iJEYJyFFeJc0U5AXIYwhjq0tCEZldD9ozc1zDv8M5NEXsRPp",this.photos=[],this.perPage=100,this.currentPage=1}openModal(e){var n=this;return(0,u.Z)(function*(){(yield n.modalController.create({component:f,breakpoints:[0,.3,.5,.8],initialBreakpoint:.9,componentProps:{photo:e}})).present()})()}dismiss(){this.modalController.dismiss()}getImages(){var e=this;return(0,u.Z)(function*(){try{const a=(yield e.apiService.getData(`https://api.pexels.com/v1/search?query=team&per_page=${e.perPage}&page=${e.currentPage++}`,{headers:{Authorization:e.apiKey}})).photos.map(c=>({original:c.src.original,medium:c.src.medium,large:c.src.large2x,landscape:c.src.landscape,tiny:c.src.tiny,photographer:c.photographer,photographer_id:c.photographer_id,alt:c.alt}));for(;a.length;)e.photos.push(a.shift())}catch(r){console.error(r)}e.updateGrid()})()}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.location.go("/"),yield e.getImages()})()}onScroll(e){var n=this;return(0,u.Z)(function*(){const r=yield e.target.getScrollElement();r.scrollHeight<=r.clientHeight+r.scrollTop+50&&n.loadMorePhotos()})()}handleScrollEnd(){}handleScrollStart(){}loadMorePhotos(){var e=this;return(0,u.Z)(function*(){yield e.getImages()})()}updateGrid(){this.itemsPerColumn=Math.ceil(this.photos.length/this.itemsPerSlide),this.grid.nativeElement.style.gridTemplateRows=`repeat(auto-fill, minmax(${300/this.itemsPerColumn}%, 1fr)`}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(i.IN),t.Y36(S),t.Y36(m.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-album"]],viewQuery:function(e,n){if(1&e&&(t.Gf(y,7),t.Gf(i.Xz,5)),2&e){let r;t.iGM(r=t.CRH())&&(n.grid=r.first),t.iGM(r=t.CRH())&&(n.ionImg=r.first)}},decls:11,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"oll",2,"height","100%",3,"fullscreen","scrollEvents","ionScroll","ionScrollStart","ionScrollEnd"],[1,"gallery"],[1,"grid"],["grid",""],["class","item",4,"ngFor","ngForOf"],[1,"item"],["alt","Photo",3,"src","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"album"),t.qZA()()(),t.TgZ(6,"ion-content",2),t.NdJ("ionScroll",function(a){return n.onScroll(a)})("ionScrollStart",function(){return n.handleScrollStart()})("ionScrollEnd",function(){return n.handleScrollEnd()}),t.TgZ(7,"div",3)(8,"div",4,5),t.YNc(10,_,2,1,"div",6),t.qZA()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0)("scrollEvents",!0),t.xp6(4),t.Q6J("ngForOf",n.photos))},dependencies:[m.sg,i.Sm,i.W2,i.Gu,i.Xz,i.fG,i.wd,i.sr],styles:[".gallery[_ngcontent-%COMP%]{height:100%;justify-content:center;align-items:center}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:5px;overflow-y:auto;height:auto}.item[_ngcontent-%COMP%]{position:relative;height:0;padding-bottom:100%;overflow:hidden}.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;object-fit:cover}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(Z),h.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,p.u5,i.Pc,A]}),o})()}}]);