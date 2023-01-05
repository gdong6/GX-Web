(function(){"use strict";var e={2103:function(e,t,i){var a=i(9242),n=i(3396),s=i(7139),o=i.p+"img/logo.6afb8ff4.png",l=i.p+"img/search-icon.285a6b34.svg";const r={class:"top-bar"},c={class:"menu-icon-container"},h=(0,n._)("span",{class:"line-1"},null,-1),d=(0,n._)("span",{class:"line-2"},null,-1),p=[h,d],u=(0,n._)("li",null,[(0,n._)("div",{class:"logo-container"},[(0,n._)("span",{style:{display:"inline-block","font-size":"22px",color:"black","font-family":"'Poppins',sans-serif","font-weight":"700","margin-left":"0","padding-left":"0"}}," GX Web")])],-1),f={style:{"padding-right":"20px"}},g={class:"left-section"},m=(0,n._)("div",null,[(0,n._)("img",{class:"logo",src:o})],-1),v=(0,n._)("div",{style:{display:"inline-block","font-size":"22px",color:"black","font-family":"'Poppins',sans-serif","font-weight":"700","margin-left":"0","padding-left":"0"}}," GX Web",-1),b=(0,n._)("span",null,"Home",-1),y=(0,n._)("span",null,"Project",-1),w=(0,n._)("span",null,"Thought",-1),k=(0,n._)("span",null,"Link",-1),x={class:"right-section"},_=(0,n._)("div",{class:"link-search"},null,-1),B=(0,n._)("div",{class:"search-bar"},[(0,n._)("form",{action:""},[(0,n._)("input",{type:"text",placeholder:"Search in GX Web"})])],-1),A=(0,n.uE)('<div class="quick-links"><h2>Quick Links</h2><ul><li><a href="#">Visiting GX Website FAQ</a></li><li><a href="#">About me</a></li><li><a href="/project">My Projects</a></li><li><a href="/thought">My daydream thoughts</a></li><li><a href="/link">Links to other sites</a></li></ul></div>',1);function C(e,t,i,a,o,h){const d=(0,n.up)("router-link"),C=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",r,[(0,n._)("ul",{class:(0,s.C_)(o.expand?"top-bar-mobile active":"top-bar-mobile")},[(0,n._)("li",null,[(0,n._)("div",c,[(0,n._)("div",{class:"menu-icon",onClick:t[0]||(t[0]=e=>o.expand=!o.expand)},p)])]),u,(0,n._)("li",f,[(0,n._)("button",{onClick:t[1]||(t[1]=(...e)=>h.toggleLikeButton&&h.toggleLikeButton(...e)),class:(0,s.C_)(o.likeButtonSelected?"like-button-true":"like-button-false")},"Like",2)])],2),(0,n._)("div",{class:(0,s.C_)(o.searchButtonClicked?"top-bar-container hide":"top-bar-container")},[(0,n._)("div",g,[m,(0,n.Wm)(d,{to:"/",class:"top-bar-link"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n._)("div",{class:(0,s.C_)(o.expand?"center-section expand":"center-section")},[(0,n._)("div",null,[(0,n.Wm)(d,{to:"/",class:"top-bar-link"},{default:(0,n.w5)((()=>[b])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"GX-Web/project",class:"top-bar-link"},{default:(0,n.w5)((()=>[y])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"GX-Web/thought",class:"top-bar-link"},{default:(0,n.w5)((()=>[w])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"GX-Web/link",class:"top-bar-link"},{default:(0,n.w5)((()=>[k])),_:1})]),(0,n._)("img",{src:l,class:"top-bar-link",onClick:t[2]||(t[2]=(...e)=>h.opensearch&&h.opensearch(...e)),style:{height:"17px"}})],2),(0,n._)("div",x,[(0,n._)("button",{onClick:t[3]||(t[3]=(...e)=>h.toggleLikeButton&&h.toggleLikeButton(...e)),class:(0,s.C_)(o.likeButtonSelected?"like-button-true":"like-button-false")},"Like",2)])],2)]),(0,n._)("div",{class:(0,s.C_)(o.searchButtonClicked?"search-container ":"search-container hide")},[_,B,(0,n._)("div",{class:"link-close",onClick:t[4]||(t[4]=(...e)=>h.closesearch&&h.closesearch(...e))}),A],2),(0,n._)("div",{class:(0,s.C_)(o.searchButtonClicked?"overlay show":"overlay"),onClick:t[5]||(t[5]=(...e)=>h.closesearch&&h.closesearch(...e))},null,2),(0,n.Wm)(C,{IsEnglish:o.IsEnglish},null,8,["IsEnglish"])],64)}var j={data(){return{IsEnglish:!0,likeButtonSelected:!1,dismissSecs:5,dismissCountDown:0,searchButtonClicked:!1,windowWidth:window.innerWidth,mobileVerison:!1,expand:!1}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{toggleLikeButton(){this.likeButtonSelected=!this.likeButtonSelected,console.log("clicked")},opensearch(){this.searchButtonClicked=!0},closesearch(){this.searchButtonClicked=!1},handleResize(){window.innerWidth<768?(this.mobileVerison=!0,console.log("active")):(this.mobileVerison=!1,console.log("de active"))}}},W=i(89);const z=(0,W.Z)(j,[["render",C]]);var S=z,E=i(678),H=i.p+"img/splash.7cdb0baa.jpg",L=i.p+"img/mondotaLake.b9f9a8d8.jpeg",M=i.p+"img/chad.b275920a.jpeg",P=i.p+"img/statestreet.37ad2315.jpeg",G=i.p+"img/cornell.2f7b8609.jpeg";const I=(0,n.uE)('<div class="home"><div class="splash"><img class="splash-image" src="'+H+'"><div class="helloworld"> hello world!</div></div><div class="banner"><span><a href="https://i.pinimg.com/originals/a4/09/d0/a409d0b146eeacaca184ad3e5ad879ad.jpg" target="_blank" style="text-decoration:none;color:black;font-family:Arial, Helvetica, sans-serif;">&lt; “Give people wonderful tools, and they&#39;ll do wonderful things” /&gt;</a></span></div><h1 class="text-main">Always believe that something wonderful is about to happen.</h1><h2 class="text-main-sub" style="margin:5% 20%;text-align:center;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw100;"> This is my personal motto. When we encouter any obstacles, we should keep calm and carry on. It might be easy to say than done, but we still should keep this faith. At last, hope peace always be with us. One World, One Family. 和平永存，天下一家。 </h2><h2 class="sub-title"> Days in Madison </h2><div class="card-main"><img src="'+L+'" style="height:100%;width:100%;border-radius:40px;object-fit:cover;"></div><div class="card-line2"><div class="card-line2-left" style="margin-right:5px;"><img src="'+M+'"></div><div class="card-line2-right" style="margin-left:5px;"><img src="'+P+'"></div></div><h2 class="sub-title"> New adventure at Cornell </h2><div class="card-main" style="height:500px;"><img src="'+G+'" style="height:100%;width:100%;border-radius:40px;object-fit:cover;"></div><h2 class="sub-title" style="margin:0px;padding:0;"> CS Courses </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Machine Learning </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Artificial Intelligence </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Computer Graphics </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Database </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Physics Based Modeling </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Moblie System </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> Alogrithm </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> ... </h2><h2 class="sub-title" style="margin:0px;padding:0;"> Skills </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;line-height:50px;"> Java, JavaScript, C, Python, React, ReactNative, Vue, MERN, SpringBoot, Anroid Studio, Xcode, SQL, Git, Linux </h2><h2 class="text-main-sub" style="margin:15px 20%;text-align:left;font-family:Arial, Helvetica, sans-serif;font-weight:600;font-size:vw200;"> ... </h2><div style="padding-bottom:50px;"></div></div>',1);function O(e,t,i,a,s,o){const l=(0,n.up)("BottomBar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[I,(0,n.Wm)(l)],64)}const D={class:"bottom"},N=(0,n.uE)('<div class="bottom-up"><h5 style="padding-top:30px;"> I haven&#39;t think up what infomation that I should put it here, so just say Have a nice day! </h5><h5> Thank you for visit my website. </h5></div><span style="display:flex;height:1px;margin:0% 10%;background-color:rgb(211, 211, 211);align-items:center;"></span><div class="bottom-down"><div style="display:inline-block;font-size:15px;color:grey;font-family:&#39;Poppins&#39;,sans-serif;font-weight:700;margin-left:0;padding-left:0;"> GX Web</div><div style="font-size:10px;color:grey;font-family:Poppins&#39;,sans-serif;font-weight:400;margin-left:100px;padding-left:10px;"> Created by GX using Vue3 + HTML + CSS</div><div style="font-size:10px;color:grey;font-family:Poppins&#39;,sans-serif;font-weight:400;margin-left:100px;padding-left:10px;"> 2022 JUN</div></div>',3),R=[N];function T(e,t){return(0,n.wg)(),(0,n.iD)("div",D,R)}const F={},X=(0,W.Z)(F,[["render",T]]);var V=X,Z={props:["IsEnglish"],components:{BottomBar:V}};const U=(0,W.Z)(Z,[["render",O]]);var Y=U,J=i.p+"img/bluebook.4628ad4a.png",Q=i.p+"img/Amazon.1f64ac96.png",q=i.p+"img/NFTApp.f2b7bf54.png",K=i.p+"img/demicApp.c84c6529.png",$=i.p+"img/Foodapp.6ca4f500.png",ee=i.p+"img/CS407poster.8f4c2211.png";const te=(0,n.uE)('<div class="project"><div class="neon">&lt;Project/&gt;</div><div class="card"><h2> More details on Github</h2><h3><a href="https://github.com/gdong6" target="_blank"> gdong6.github</a></h3></div><div class="card"><h2> BlueBook </h2><h3> A MERN based project. <br>MongoDB, Express, React.js, Node.js, MUI, axios... </h3><img src="'+J+'" style="height:100%;width:80%;border-radius:10px;object-fit:cover;margin:50px;"></div><div class="card"><h2> Amazon Mockup</h2><h3><a href="https://mockup-4e938.web.app/" target="_blank"> Click here to try</a> <br> This a fully functional FULL Stack amazon mockup. Powered by React, MUI, Elements, Stripe, Firebase and some other libaries. </h3><img src="'+Q+'" style="height:100%;width:80%;border-radius:10px;object-fit:cover;margin:50px;"></div><div class="card"><h2> NFT React Native App</h2><h3><a href="https://fancy-grass-1726.on.fleek.co/" target="_blank"> Click here to try</a> <br> A NFT mobile app created by using React Native. </h3><img src="'+q+'" style="height:100%;width:80%;border-radius:10px;object-fit:cover;margin:50px;"></div><div class="card"><h2> Demic App Website</h2><h3><a href="http://demicapp.com" target="_blank"> Demic app</a> <br> Using React as Framework to build this dynamic website </h3><img src="'+K+'" style="height:100%;width:80%;border-radius:10px;object-fit:cover;margin:50px;"></div><div class="card"><h2> Food recommendation app</h2><img src="'+$+'" style="height:40%;width:40%;border-radius:20px;object-fit:cover;margin-left:50px;"><h3> • Developed an android app which help people find healthier food around them <br> • Implemented Agile software development under advised by Epic stuff members <br> • Designed file system and crawling food menu data from website <br> • Food &amp; Activity recommendation mechanism based on different user’s preference </h3></div><div class="card"><h2> Online study room app</h2><img src="'+ee+'" style="height:100%;width:100%;border-radius:30px;object-fit:cover;"></div><div style="padding-bottom:50px;"></div></div>',1);function ie(e,t,i,a,s,o){const l=(0,n.up)("BottomBar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[te,(0,n.Wm)(l)],64)}var ae={props:["IsEnglish"],components:{BottomBar:V}};const ne=(0,W.Z)(ae,[["render",ie]]);var se=ne,oe=i.p+"img/light-bulb.f61d59da.svg";const le=(0,n.uE)('<div class="thought"><div class="splash-thought"><h1>Thought</h1><img src="'+oe+'"></div><div class="idea"><h1>May Peace Prevail on Earth</h1></div><div class="idea"><h1>Java and Python are the best languages!</h1></div><div class="idea"><h1>为天地立心       为生民立命</h1><h1>为往圣继绝学 为万世开太平</h1></div><div class="idea"><h1>...</h1></div></div>',1);function re(e,t,i,a,s,o){const l=(0,n.up)("BottomBar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[le,(0,n.Wm)(l)],64)}var ce={props:["IsEnglish"],components:{BottomBar:V}};const he=(0,W.Z)(ce,[["render",re]]);var de=he;const pe=(0,n.uE)('<div class="link"><div class="splash-link"><h1>Links &gt;</h1></div><div class="link-card"><h2><a href="https://cnsawatcher.com" target="_blank"> CNSA Watcher</a></h2><h2> An amazing fan-run website that aims to provide a comprehensive and up-to-date view of the latest launches and missions of the China National Space Administration (CNSA) </h2></div><div class="link-card"><h2><a href="https://www.macrumors.com" target="_blank"> MacRumors</a></h2><h2> The best website for Apple fans. Gathering all the latest news about apple&#39;s unveiled devices. </h2></div><div class="link-card"><h2><a href="https://apps.sentinel-hub.com/sentinel-playground" target="_blank"> Sentinel-hub</a></h2><h2> See the latest good definition satellite image of every places on earth. </h2></div><div class="link-card"><h2><a href="https://www.symbolab.com/" target="_blank"> Symbolab</a></h2><h2> A great math website that solve almost every equation! </h2></div><div class="link-card"><h2> more websites will be here... </h2></div></div>',1);function ue(e,t,i,a,s,o){const l=(0,n.up)("BottomBar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[pe,(0,n.Wm)(l)],64)}var fe={props:["IsEnglish"],components:{BottomBar:V}};const ge=(0,W.Z)(fe,[["render",ue]]);var me=ge;const ve=[{path:"/",name:"home",component:Y},{path:"/project",name:"project",component:se},{path:"/thought",name:"thought",component:de},{path:"/link",name:"link",component:me}],be=(0,E.p7)({history:(0,E.PO)("/GX-Web/"),routes:ve});var ye=be,we=i(65),ke=(0,we.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const xe=(0,a.ri)(S);xe.use(ke),xe.use(ye),xe.mount("#app")}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,a,n,s){if(!a){var o=1/0;for(h=0;h<e.length;h++){a=e[h][0],n=e[h][1],s=e[h][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](a[r])}))?a.splice(r--,1):(l=!1,s<o&&(o=s));if(l){e.splice(h--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[a,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/GX-Web/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,s,o=a[0],l=a[1],r=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(r)var h=r(i)}for(t&&t(a);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(h)},a=self["webpackChunkvue3_website"]=self["webpackChunkvue3_website"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(2103)}));a=i.O(a)})();
//# sourceMappingURL=app.848b3684.js.map