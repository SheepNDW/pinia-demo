import{o as h,c as d,a as e,t as M,p as V,b as k,d as t,e as a,w as n,u as m,R as p,f as H,F as $,r as f,g as C,h as L,i as x,j}from"./vendor.d72b56af.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function _(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=_(s);fetch(s.href,c)}};I();var A="/pinia-demo/assets/logo.da9b9095.svg";var u=(o,r)=>{const _=o.__vccOpts||o;for(const[i,s]of r)_[i]=s;return _};const E=o=>(V("data-v-9949253a"),o=o(),k(),o),S={class:"greetings"},O={class:"green"},P=E(()=>e("h3",null,[t(" You\u2019ve successfully created a project with "),e("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),t(" + "),e("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),t(". ")],-1)),D={props:{msg:{type:String,required:!0}},setup(o){return(r,_)=>(h(),d("div",S,[e("h1",O,M(o.msg),1),P]))}};var R=u(D,[["__scopeId","data-v-9949253a"]]);const T=e("img",{alt:"Vue logo",class:"logo",src:A,width:"125",height:"125"},null,-1),N={class:"wrapper"},W=t("Home"),q=t("Options API"),Y=t("Composition API"),B=t("Options Demo"),F={setup(o){return(r,_)=>(h(),d($,null,[e("header",null,[T,e("div",N,[a(R,{msg:"You did it!"}),e("nav",null,[a(m(p),{to:"/"},{default:n(()=>[W]),_:1}),a(m(p),{to:"/about"},{default:n(()=>[q]),_:1}),a(m(p),{to:"/aboutCom"},{default:n(()=>[Y]),_:1}),a(m(p),{to:"/options"},{default:n(()=>[B]),_:1})])])]),a(m(H))],64))}},G="modulepreload",w={},U="/pinia-demo/",z=function(r,_){return!_||_.length===0?r():Promise.all(_.map(i=>{if(i=`${U}${i}`,i in w)return;w[i]=!0;const s=i.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":G,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((b,y)=>{l.addEventListener("load",b),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>r())};const K={},J={class:"item"},Q={class:"details"};function X(o,r){return h(),d("div",J,[e("i",null,[f(o.$slots,"icon",{},void 0,!0)]),e("div",Q,[e("h3",null,[f(o.$slots,"heading",{},void 0,!0)]),f(o.$slots,"default",{},void 0,!0)])])}var v=u(K,[["render",X],["__scopeId","data-v-977bb0b6"]]);const Z={},t1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},e1=e("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),o1=[e1];function s1(o,r){return h(),d("svg",t1,o1)}var n1=u(Z,[["render",s1]]);const r1={},a1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},i1=e("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),c1=[i1];function _1(o,r){return h(),d("svg",a1,c1)}var l1=u(r1,[["render",_1]]);const h1={},d1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},u1=e("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),m1=[u1];function v1(o,r){return h(),d("svg",d1,m1)}var p1=u(h1,[["render",v1]]);const f1={},z1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},g1=e("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),w1=[g1];function $1(o,r){return h(),d("svg",z1,w1)}var b1=u(f1,[["render",$1]]);const y1={},M1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},V1=e("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),k1=[V1];function H1(o,r){return h(),d("svg",M1,k1)}var C1=u(y1,[["render",H1]]);const L1=t("Documentation"),x1=t(" Vue\u2019s "),j1=e("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),I1=t(" provides you with all information you need to get started. "),A1=t("Tooling"),E1=t(" This project is served and bundled with "),S1=e("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),O1=t(". The recommended IDE setup is "),P1=e("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),D1=t(" + "),R1=e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),T1=t(". If you need to test your components and web pages, check out "),N1=e("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),W1=t(" and "),q1=e("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),Y1=t(". "),B1=e("br",null,null,-1),F1=t(" More instructions are available in "),G1=e("code",null,"README.md",-1),U1=t(". "),K1=t("Ecosystem"),J1=t(" Get official tools and libraries for your project: "),Q1=e("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),X1=t(", "),Z1=e("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),tt=t(", "),et=e("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),ot=t(", and "),st=e("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),nt=t(". If you need more resources, we suggest paying "),rt=e("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),at=t(" a visit. "),it=t("Community"),ct=t(" Got stuck? Ask your question on "),_t=e("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),lt=t(", our official Discord server, or "),ht=e("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),dt=t(". You should also subscribe to "),ut=e("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),mt=t(" and follow the official "),vt=e("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),pt=t(" twitter account for latest news in the Vue world. "),ft=t("Support Vue"),zt=t(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),gt=e("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),wt=t(". "),$t={setup(o){return(r,_)=>(h(),d($,null,[a(v,null,{icon:n(()=>[a(n1)]),heading:n(()=>[L1]),default:n(()=>[x1,j1,I1]),_:1}),a(v,null,{icon:n(()=>[a(l1)]),heading:n(()=>[A1]),default:n(()=>[E1,S1,O1,P1,D1,R1,T1,N1,W1,q1,Y1,B1,F1,G1,U1]),_:1}),a(v,null,{icon:n(()=>[a(p1)]),heading:n(()=>[K1]),default:n(()=>[J1,Q1,X1,Z1,tt,et,ot,st,nt,rt,at]),_:1}),a(v,null,{icon:n(()=>[a(b1)]),heading:n(()=>[it]),default:n(()=>[ct,_t,lt,ht,dt,ut,mt,vt,pt]),_:1}),a(v,null,{icon:n(()=>[a(C1)]),heading:n(()=>[ft]),default:n(()=>[zt,gt,wt]),_:1})],64))}},bt={setup(o){return(r,_)=>(h(),d("main",null,[a($t)]))}},yt=C({history:L("/pinia-demo/"),routes:[{path:"/",name:"home",component:bt},{path:"/about",name:"about",component:()=>z(()=>import("./AboutView.71601d53.js"),["assets/AboutView.71601d53.js","assets/AboutView.5f315089.css","assets/user.ec01f008.js","assets/vendor.d72b56af.js"])},{path:"/options",component:()=>z(()=>import("./OptionsDemo.8f02acf7.js"),["assets/OptionsDemo.8f02acf7.js","assets/user.ec01f008.js","assets/vendor.d72b56af.js"])},{path:"/aboutCom",component:()=>z(()=>import("./AboutComposition.50b99041.js"),["assets/AboutComposition.50b99041.js","assets/AboutView.5f315089.css","assets/user.ec01f008.js","assets/vendor.d72b56af.js"])}]}),g=x(F);g.use(j());g.use(yt);g.mount("#app");export{u as _};