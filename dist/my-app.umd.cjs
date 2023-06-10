(function(S){typeof define=="function"&&define.amd?define(S):S()})(function(){"use strict";function S(){}function Yt(e){return e()}function be(){return Object.create(null)}function X(e){e.forEach(Yt)}function Mt(e){return typeof e=="function"}function $t(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function un(e){return Object.keys(e).length===0}"WeakMap"in(typeof window<"u"?window:typeof globalThis<"u"?globalThis:global);function x(e,t){e.appendChild(t)}function W(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function Zt(e){return document.createTextNode(e)}function q(){return Zt(" ")}function dn(){return Zt("")}function jt(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function fn(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pn(e){return Array.from(e.childNodes)}function mn(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ot(e,t){e.value=t??""}function zt(e){const t={};for(const n of e)t[n.name]=n.value;return t}let xt;function _t(e){xt=e}function hn(){if(!xt)throw new Error("Function called outside component initialization");return xt}function $e(e){hn().$$.on_mount.push(e)}const ot=[],xe=[];let it=[];const _e=[],gn=Promise.resolve();let te=!1;function bn(){te||(te=!0,gn.then(lt))}function ee(e){it.push(e)}const ne=new Set;let st=0;function lt(){if(st!==0)return;const e=xt;do{try{for(;st<ot.length;){const t=ot[st];st++,_t(t),$n(t.$$)}}catch(t){throw ot.length=0,st=0,t}for(_t(null),ot.length=0,st=0;xe.length;)xe.pop()();for(let t=0;t<it.length;t+=1){const n=it[t];ne.has(n)||(ne.add(n),n())}it.length=0}while(ot.length);for(;_e.length;)_e.pop()();te=!1,ne.clear(),_t(e)}function $n(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ee)}}function xn(e){const t=[],n=[];it.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),it=t}const It=new Set;let Z;function ve(){Z={r:0,c:[],p:Z}}function ye(){Z.r||X(Z.c),Z=Z.p}function J(e,t){e&&e.i&&(It.delete(e),e.i(t))}function tt(e,t,n,r){if(e&&e.o){if(It.has(e))return;It.add(e),Z.c.push(()=>{It.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}[...["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]];function re(e){e&&e.c()}function Tt(e,t,n,r){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),r||ee(()=>{const o=e.$$.on_mount.map(Yt).filter(Mt);e.$$.on_destroy?e.$$.on_destroy.push(...o):X(o),e.$$.on_mount=[]}),a.forEach(ee)}function Pt(e,t){const n=e.$$;n.fragment!==null&&(xn(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _n(e,t){e.$$.dirty[0]===-1&&(ot.push(e),bn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ht(e,t,n,r,i,a,o,s=[-1]){const c=xt;_t(e);const l=e.$$={fragment:null,ctx:[],props:a,update:S,not_equal:i,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:be(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(u,p,...m)=>{const g=m.length?m[0]:p;return l.ctx&&i(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),d&&_n(e,u)),p}):[],l.update(),d=!0,X(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=pn(t.target);l.fragment&&l.fragment.l(u),u.forEach(Y)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),Tt(e,t.target,t.anchor,t.customElement),lt()}_t(c)}let vt;typeof HTMLElement=="function"&&(vt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(Yt).filter(Mt);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){X(this.$$.on_disconnect)}$destroy(){Pt(this,1),this.$destroy=S}$on(e,t){if(!Mt(t))return S;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!un(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});function vn(e){let t,n,r,i,a,o,s,c,l,d;return{c(){t=C("nav"),n=C("div"),r=C("span"),r.textContent="NAGP Svelte Assignment",i=q(),a=C("form"),o=C("button"),o.textContent="Logout",s=q(),c=C("style"),c.textContent=`.header {
      background-color: #13294b;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
        inset 0 -1px 0 rgba(255, 255, 255, 0.15);
    }

    .logout-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .logout-btn .btn-outline-primary {
      color: #fff;
      border-color: #fff;
    }`,this.c=S,_(r,"class","navbar-text text-white"),_(o,"class","btn btn-outline-primary my-2 my-sm-0"),_(o,"type","submit"),_(a,"class","form-inline logout-btn"),_(n,"class","container"),_(t,"class","navbar navbar-light justify-content-between header")},m(u,p){W(u,t,p),x(t,n),x(n,r),x(n,i),x(n,a),x(a,o),x(t,s),x(t,c),l||(d=jt(o,"click",function(){Mt(e[0])&&e[0].apply(this,arguments)}),l=!0)},p(u,[p]){e=u},i:S,o:S,d(u){u&&Y(t),l=!1,d()}}}function yn(e,t,n){let{logout:r}=t;return e.$$set=i=>{"logout"in i&&n(0,r=i.logout)},[r]}class we extends vt{constructor(t){super(),Ht(this,{target:this.shadowRoot,props:zt(this.attributes),customElement:!0},yn,vn,$t,{logout:0},null),t&&(t.target&&W(t.target,this,t.anchor),t.props&&(this.$set(t.props),lt()))}static get observedAttributes(){return["logout"]}get logout(){return this.$$.ctx[0]}set logout(t){this.$$set({logout:t}),lt()}}customElements.define("my-navbar",we);const ct=[];function wn(e,t=S){let n;const r=new Set;function i(s){if($t(e,s)&&(e=s,n)){const c=!ct.length;for(const l of r)l[1](),ct.push(l,e);if(c){for(let l=0;l<ct.length;l+=2)ct[l][0](ct[l+1]);ct.length=0}}}function a(s){i(s(e))}function o(s,c=S){const l=[s,c];return r.add(l),r.size===1&&(n=t(i)||S),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}const oe=wn(!1);function En(e){let t,n;return{c(){t=C("div"),n=Zt(e[0]),this.c=S,_(t,"class","alert alert-danger"),_(t,"role","alert")},m(r,i){W(r,t,i),x(t,n)},p(r,[i]){i&1&&mn(n,r[0])},i:S,o:S,d(r){r&&Y(t)}}}function kn(e,t,n){let{message:r=""}=t;return e.$$set=i=>{"message"in i&&n(0,r=i.message)},[r]}class Ee extends vt{constructor(t){super(),Ht(this,{target:this.shadowRoot,props:zt(this.attributes),customElement:!0},kn,En,$t,{message:0},null),t&&(t.target&&W(t.target,this,t.anchor),t.props&&(this.$set(t.props),lt()))}static get observedAttributes(){return["message"]}get message(){return this.$$.ctx[0]}set message(t){this.$$set({message:t}),lt()}}customElements.define("new-alert-component",Ee);function ke(e){let t,n;return t=new Ee({props:{message:"Invalid email or password."}}),{c(){re(t.$$.fragment)},m(r,i){Tt(t,r,i),n=!0},i(r){n||(J(t.$$.fragment,r),n=!0)},o(r){tt(t.$$.fragment,r),n=!1},d(r){Pt(t,r)}}}function Cn(e){let t,n,r,i,a,o,s,c,l,d,u,p,m,g,$,v,y,A,L,M,k,j,D,E=e[2]&&ke();return{c(){t=C("div"),n=C("div"),r=C("div"),i=C("h4"),i.textContent="Sign in",a=q(),o=C("form"),s=C("div"),c=C("input"),l=q(),d=C("label"),d.textContent="Email address",u=q(),p=C("div"),m=C("input"),g=q(),$=C("label"),$.textContent="Password",v=q(),E&&E.c(),y=q(),A=C("div"),A.innerHTML='<button type="submit" class="btn btn-primary">Login</button>',L=q(),M=C("style"),M.textContent=`.login-container {
      display: flex;
      align-items: center;
      height: 100vh;
    }
    .card {
      width: 400px;
      margin: 0 auto;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      color: #47d7ac;
      font-weight: 500;
    }

    .login-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .login-btn .btn-primary {
      margin-top: 30px;
      background-color: #13294b;
      border-color: #13294b;
    }`,this.c=S,_(i,"class","card-title text-center mb-4"),_(c,"type","email"),_(c,"class","form-control"),_(c,"id","email"),_(c,"placeholder","Enter email"),c.required=!0,_(d,"for","email"),_(d,"class","form-label"),_(s,"class","form-floating mb-3"),_(m,"type","password"),_(m,"class","form-control"),_(m,"id","password"),_(m,"placeholder","Enter password"),m.required=!0,_($,"for","password"),_($,"class","form-label"),_(p,"class","form-floating mb-3"),_(A,"class","d-grid login-btn"),_(r,"class","card-body"),_(n,"class","card"),_(t,"class","login-container")},m(T,B){W(T,t,B),x(t,n),x(n,r),x(r,i),x(r,a),x(r,o),x(o,s),x(s,c),Ot(c,e[0]),x(s,l),x(s,d),x(o,u),x(o,p),x(p,m),Ot(m,e[1]),x(p,g),x(p,$),x(o,v),E&&E.m(o,null),x(o,y),x(o,A),x(t,L),x(t,M),k=!0,j||(D=[jt(c,"input",e[4]),jt(m,"input",e[5]),jt(o,"submit",fn(e[3]))],j=!0)},p(T,[B]){B&1&&c.value!==T[0]&&Ot(c,T[0]),B&2&&m.value!==T[1]&&Ot(m,T[1]),T[2]?E?B&4&&J(E,1):(E=ke(),E.c(),J(E,1),E.m(o,y)):E&&(ve(),tt(E,1,1,()=>{E=null}),ye())},i(T){k||(J(E),k=!0)},o(T){tt(E),k=!1},d(T){T&&Y(t),E&&E.d(),j=!1,X(D)}}}function Fn(e,t,n){let r="",i="",a=!1,o=!1;const s=()=>{r==="surajsachan@gmail.com"&&i==="password"?(o=!0,localStorage.setItem("isLoggedIn","true"),n(2,a=!1),oe.set(o)):n(2,a=!0)};$e(()=>{oe.subscribe(d=>{o=d})});function c(){r=this.value,n(0,r)}function l(){i=this.value,n(1,i)}return[r,i,a,s,c,l]}class Ce extends vt{constructor(t){super(),Ht(this,{target:this.shadowRoot,props:zt(this.attributes),customElement:!0},Fn,Cn,$t,{},null),t&&t.target&&W(t.target,this,t.anchor)}}customElements.define("my-login",Ce);function N(){}const Ln=e=>e;function ie(e){return e()}function Fe(){return Object.create(null)}function V(e){e.forEach(ie)}function Bt(e){return typeof e=="function"}function at(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Dt;function Wt(e,t){return Dt||(Dt=document.createElement("a")),Dt.href=t,e===Dt.href}function Nn(e){return Object.keys(e).length===0}function Sn(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Le(e,t,n){e.$$.on_destroy.push(Sn(t,n))}function Rn(e,t,n){return e.set(n),t}const Ne=typeof window<"u";let An=Ne?()=>window.performance.now():()=>Date.now(),se=Ne?e=>requestAnimationFrame(e):N;const ut=new Set;function Se(e){ut.forEach(t=>{t.c(e)||(ut.delete(t),t.f())}),ut.size!==0&&se(Se)}function Mn(e){let t;return ut.size===0&&se(Se),{promise:new Promise(n=>{ut.add(t={c:e,f:n})}),abort(){ut.delete(t)}}}function f(e,t){e.appendChild(t)}function Re(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function jn(e){const t=h("style");return On(Re(e),t),t.sheet}function On(e,t){return f(e.head||e,t),t.sheet}function F(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function et(e){return document.createTextNode(e)}function w(){return et(" ")}function zn(){return et("")}function K(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function In(e){return Array.from(e.childNodes)}function qt(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ae(e,t){e.value=t??""}function dt(e,t,n){for(let r=0;r<e.options.length;r+=1){const i=e.options[r];if(i.__value===t){i.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ce(e){const t=e.querySelector(":checked");return t&&t.__value}function Tn(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}function yt(e){const t={};for(const n of e)t[n.name]=n.value;return t}const Jt=new Map;let Gt=0;function Pn(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Hn(e,t){const n={stylesheet:jn(t),rules:{}};return Jt.set(e,n),n}function Me(e,t,n,r,i,a,o,s=0){const c=16.666/r;let l=`{
`;for(let v=0;v<=1;v+=c){const y=t+(n-t)*a(v);l+=v*100+`%{${o(y,1-y)}}
`}const d=l+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Pn(d)}_${s}`,p=Re(e),{stylesheet:m,rules:g}=Jt.get(p)||Hn(p,e);g[u]||(g[u]=!0,m.insertRule(`@keyframes ${u} ${d}`,m.cssRules.length));const $=e.style.animation||"";return e.style.animation=`${$?`${$}, `:""}${u} ${r}ms linear ${i}ms 1 both`,Gt+=1,u}function Bn(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?a=>a.indexOf(t)<0:a=>a.indexOf("__svelte")===-1),i=n.length-r.length;i&&(e.style.animation=r.join(", "),Gt-=i,Gt||Dn())}function Dn(){se(()=>{Gt||(Jt.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&R(t)}),Jt.clear())})}let wt;function Et(e){wt=e}function ae(){if(!wt)throw new Error("Function called outside component initialization");return wt}function je(e){ae().$$.on_mount.push(e)}function Wn(e,t){return ae().$$.context.set(e,t),t}function qn(e){return ae().$$.context.get(e)}const ft=[],Oe=[];let pt=[];const ze=[],Jn=Promise.resolve();let ue=!1;function Gn(){ue||(ue=!0,Jn.then(nt))}function Q(e){pt.push(e)}const de=new Set;let mt=0;function nt(){if(mt!==0)return;const e=wt;do{try{for(;mt<ft.length;){const t=ft[mt];mt++,Et(t),Un(t.$$)}}catch(t){throw ft.length=0,mt=0,t}for(Et(null),ft.length=0,mt=0;Oe.length;)Oe.pop()();for(let t=0;t<pt.length;t+=1){const n=pt[t];de.has(n)||(de.add(n),n())}pt.length=0}while(ft.length);for(;ze.length;)ze.pop()();ue=!1,de.clear(),Et(e)}function Un(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function Vn(e){const t=[],n=[];pt.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),pt=t}let kt;function Kn(){return kt||(kt=Promise.resolve(),kt.then(()=>{kt=null})),kt}function fe(e,t,n){e.dispatchEvent(Tn(`${t?"intro":"outro"}${n}`))}const Ut=new Set;let G;function Vt(){G={r:0,c:[],p:G}}function Kt(){G.r||V(G.c),G=G.p}function z(e,t){e&&e.i&&(Ut.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(Ut.has(e))return;Ut.add(e),G.c.push(()=>{Ut.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Qn={duration:0};function Ie(e,t,n,r){const i={direction:"both"};let a=t(e,n,i),o=r?0:1,s=null,c=null,l=null;function d(){l&&Bn(e,l)}function u(m,g){const $=m.b-o;return g*=Math.abs($),{a:o,b:m.b,d:$,duration:g,start:m.start,end:m.start+g,group:m.group}}function p(m){const{delay:g=0,duration:$=300,easing:v=Ln,tick:y=N,css:A}=a||Qn,L={start:An()+g,b:m};m||(L.group=G,G.r+=1),s||c?c=L:(A&&(d(),l=Me(e,o,m,$,g,v,A)),m&&y(0,1),s=u(L,$),Q(()=>fe(e,m,"start")),Mn(M=>{if(c&&M>c.start&&(s=u(c,$),c=null,fe(e,s.b,"start"),A&&(d(),l=Me(e,o,s.b,s.duration,0,v,a.css))),s){if(M>=s.end)y(o=s.b,1-o),fe(e,s.b,"end"),c||(s.b?d():--s.group.r||V(s.group.c)),s=null;else if(M>=s.start){const k=M-s.start;o=s.a+s.d*v(k/s.duration),y(o,1-o)}}return!!(s||c)}))}return{run(m){Bt(a)?Kn().then(()=>{a=a(i),p(m)}):p(m)},end(){d(),s=c=null}}}function Qt(e){e&&e.c()}function Ct(e,t,n,r){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),r||Q(()=>{const o=e.$$.on_mount.map(ie).filter(Bt);e.$$.on_destroy?e.$$.on_destroy.push(...o):V(o),e.$$.on_mount=[]}),a.forEach(Q)}function Ft(e,t){const n=e.$$;n.fragment!==null&&(Vn(n.after_update),V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xn(e,t){e.$$.dirty[0]===-1&&(ft.push(e),Gn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Lt(e,t,n,r,i,a,o,s=[-1]){const c=wt;Et(e);const l=e.$$={fragment:null,ctx:[],props:a,update:N,not_equal:i,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fe(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(u,p,...m)=>{const g=m.length?m[0]:p;return l.ctx&&i(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),d&&Xn(e,u)),p}):[],l.update(),d=!0,V(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=In(t.target);l.fragment&&l.fragment.l(u),u.forEach(R)}else l.fragment&&l.fragment.c();t.intro&&z(e.$$.fragment),Ct(e,t.target,t.anchor,t.customElement),nt()}Et(c)}let ht;typeof HTMLElement=="function"&&(ht=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(ie).filter(Bt);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){V(this.$$.on_disconnect)}$destroy(){Ft(this,1),this.$destroy=N}$on(e,t){if(!Bt(t))return N;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Nn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});const gt=[];function Te(e,t=N){let n;const r=new Set;function i(s){if(at(e,s)&&(e=s,n)){const c=!gt.length;for(const l of r)l[1](),gt.push(l,e);if(c){for(let l=0;l<gt.length;l+=2)gt[l][0](gt[l+1]);gt.length=0}}}function a(s){i(s(e))}function o(s,c=N){const l=[s,c];return r.add(l),r.size===1&&(n=t(i)||N),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}const Nt=Te([]);function Yn(e){let t,n;return{c(){t=h("div"),n=et(e[0]),this.c=N,b(t,"class","alert alert-danger"),b(t,"role","alert")},m(r,i){F(r,t,i),f(t,n)},p(r,[i]){i&1&&qt(n,r[0])},i:N,o:N,d(r){r&&R(t)}}}function Zn(e,t,n){let{message:r=""}=t;return e.$$set=i=>{"message"in i&&n(0,r=i.message)},[r]}class Pe extends ht{constructor(t){super(),Lt(this,{target:this.shadowRoot,props:yt(this.attributes),customElement:!0},Zn,Yn,at,{message:0},null),t&&(t.target&&F(t.target,this,t.anchor),t.props&&(this.$set(t.props),nt()))}static get observedAttributes(){return["message"]}get message(){return this.$$.ctx[0]}set message(t){this.$$set({message:t}),nt()}}customElements.define("alert-component",Pe);function He(e,t,n){const r=e.slice();return r[18]=t[n],r}function Be(e){let t,n;return t=new Pe({props:{message:"File/Folder with this name already exists."}}),{c(){Qt(t.$$.fragment)},m(r,i){Ct(t,r,i),n=!0},i(r){n||(z(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){Ft(t,r)}}}function De(e){let t,n,r,i,a,o,s=e[6],c=[];for(let l=0;l<s.length;l+=1)c[l]=We(He(e,s,l));return{c(){t=h("div"),n=h("select");for(let l=0;l<c.length;l+=1)c[l].c();r=w(),i=h("label"),i.textContent="Folder",b(n,"class","form-select"),b(n,"id","folder"),n.disabled=e[5],e[4]===void 0&&Q(()=>e[13].call(n)),b(i,"for","folder"),b(t,"class","form-floating mb-3")},m(l,d){F(l,t,d),f(t,n);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(n,null);dt(n,e[4],!0),f(t,r),f(t,i),a||(o=K(n,"change",e[13]),a=!0)},p(l,d){if(d&64){s=l[6];let u;for(u=0;u<s.length;u+=1){const p=He(l,s,u);c[u]?c[u].p(p,d):(c[u]=We(p),c[u].c(),c[u].m(n,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=s.length}d&32&&(n.disabled=l[5]),d&80&&dt(n,l[4])},d(l){l&&R(t),le(c,l),a=!1,o()}}}function We(e){let t,n=e[18].name+"",r,i;return{c(){t=h("option"),r=et(n),t.__value=i=e[18].name,t.value=t.__value},m(a,o){F(a,t,o),f(t,r)},p(a,o){o&64&&n!==(n=a[18].name+"")&&qt(r,n),o&64&&i!==(i=a[18].name)&&(t.__value=i,t.value=t.__value)},d(a){a&&R(t)}}}function tr(e){let t,n,r,i,a,o,s,c,l,d,u,p,m,g,$,v,y,A,L,M,k,j,D,E,T,B,pe,St,rn,Rt,At,on,rt,sn,Xt,ln,me,cn,he,bt,ge,an,O=e[3]&&Be(),P=e[2]==="child"&&De(e);return{c(){t=h("div"),n=h("div"),r=h("div"),r.innerHTML="<h3>Create Files or Folders</h3>",i=w(),O&&O.c(),a=w(),o=h("div"),s=h("input"),c=w(),l=h("label"),l.textContent="Name",d=w(),u=h("div"),p=h("select"),m=h("option"),m.textContent="File",g=h("option"),g.textContent="Folder",$=w(),v=h("label"),v.textContent="Type",y=w(),A=h("div"),L=h("select"),M=h("option"),M.textContent="Root",k=h("option"),k.textContent="Child",j=w(),D=h("label"),D.textContent="Select Level",E=w(),P&&P.c(),T=w(),B=h("div"),pe=h("div"),St=h("button"),St.textContent="Reset",rn=w(),Rt=h("div"),At=h("button"),At.textContent="Cancel",on=w(),rt=h("button"),sn=et("Save"),ln=w(),me=h("div"),cn=w(),he=h("style"),he.textContent=`.left-tab {
      padding-right: 1.5rem !important;
    }
    .form-container {
      width: 80%;
    }

    .form-heading {
      margin-bottom: 40px;
    }

    .form-heading h3 {
      color: #47d7ac;
    }

    .action-btns {
      margin-top: 40px;
    }

    .action-btns .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .action-btns .btn-primary {
      background-color: #13294b;
      border-color: #13294b;
    }

    .action-btns .btn-outline-primary {
      border-color: #13294b;
      color: #13294b;
    }

    .action-btns .btn-primary.disabled,
    .action-btns .btn-primary:disabled {
      background-color: #13294b;
    }

    @media only screen and (max-width: 1050px) {
      .form-container {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      .form-container {
        margin-bottom: 20px;
      }

      .left-tab {
        padding-right: 0;
      }
    }`,this.c=N,b(r,"class","form-heading"),b(s,"type","text"),b(s,"class","form-control"),b(s,"id","name"),b(s,"placeholder","Enter file or Folder name"),b(l,"for","name"),b(o,"class","form-floating mb-3"),m.__value="file",m.value=m.__value,g.__value="folder",g.value=g.__value,b(p,"class","form-select"),b(p,"id","type"),e[1]===void 0&&Q(()=>e[11].call(p)),b(v,"for","type"),b(u,"class","form-floating mb-3"),M.__value="root",M.value=M.__value,k.__value="child",k.value=k.__value,b(L,"class","form-select"),b(L,"id","level"),L.disabled=e[5],e[2]===void 0&&Q(()=>e[12].call(L)),b(D,"for","level"),b(A,"class","form-floating mb-3"),b(St,"class","btn btn-outline-primary ms-1"),b(At,"class","btn btn-outline-primary me-1"),rt.disabled=Xt=!e[0],b(rt,"class","btn btn-primary ms-1"),b(B,"class","d-flex justify-content-between action-btns"),b(me,"class","d-flex justify-content-center mt-1"),b(n,"class","form-container"),b(t,"class","col-md-7 left-tab")},m(I,U){F(I,t,U),f(t,n),f(n,r),f(n,i),O&&O.m(n,null),f(n,a),f(n,o),f(o,s),Ae(s,e[0]),f(o,c),f(o,l),f(n,d),f(n,u),f(u,p),f(p,m),f(p,g),dt(p,e[1],!0),f(u,$),f(u,v),f(n,y),f(n,A),f(A,L),f(L,M),f(L,k),dt(L,e[2],!0),f(A,j),f(A,D),f(n,E),P&&P.m(n,null),f(n,T),f(n,B),f(B,pe),f(pe,St),f(B,rn),f(B,Rt),f(Rt,At),f(Rt,on),f(Rt,rt),f(rt,sn),f(n,ln),f(n,me),f(t,cn),f(t,he),bt=!0,ge||(an=[K(s,"input",e[10]),K(p,"change",e[11]),K(L,"change",e[12]),K(St,"click",e[9]),K(At,"click",e[8]),K(rt,"click",e[7])],ge=!0)},p(I,[U]){I[3]?O?U&8&&z(O,1):(O=Be(),O.c(),z(O,1),O.m(n,a)):O&&(Vt(),H(O,1,1,()=>{O=null}),Kt()),U&1&&s.value!==I[0]&&Ae(s,I[0]),U&2&&dt(p,I[1]),(!bt||U&32)&&(L.disabled=I[5]),U&4&&dt(L,I[2]),I[2]==="child"?P?P.p(I,U):(P=De(I),P.c(),P.m(n,T)):P&&(P.d(1),P=null),(!bt||U&1&&Xt!==(Xt=!I[0]))&&(rt.disabled=Xt)},i(I){bt||(z(O),bt=!0)},o(I){H(O),bt=!1},d(I){I&&R(t),O&&O.d(),P&&P.d(),ge=!1,V(an)}}}function er(e,t,n){let r="",i="file",a="root",o=!1,s="",c=[],l=!0,d=[];function u(){const k=c.filter(j=>j.type==="folder").length;n(5,l=k===0)}function p(k){return k.some(j=>j.name===r)}function m(){const k={name:r,type:i,children:[]},j=s?c.find(({name:D})=>D===s):null;if(p(j?j.children:c))return n(3,o=!0),!1;n(3,o=!1),j?j.children.push(k):c.push(k),Nt.update(D=>{const E=[...D];return localStorage.setItem("store",JSON.stringify(E)),E}),u(),$()}const g=()=>{n(3,o=!1),$()},$=()=>{n(0,r=""),n(1,i="file"),n(2,a="root"),n(4,s="")},v=()=>{localStorage.removeItem("store"),Nt.set([])};je(()=>{Nt.subscribe(k=>{c=k,n(6,d=c.filter(j=>j.type==="folder")),u()})});function y(){r=this.value,n(0,r)}function A(){i=ce(this),n(1,i)}function L(){a=ce(this),n(2,a)}function M(){s=ce(this),n(4,s),n(6,d)}return[r,i,a,o,s,l,d,m,g,v,y,A,L,M]}class qe extends ht{constructor(t){super(),Lt(this,{target:this.shadowRoot,props:yt(this.attributes),customElement:!0},er,tr,at,{},null),t&&t.target&&F(t.target,this,t.anchor)}}customElements.define("form-component",qe);function nr(e){const t=e-1;return t*t*t+1}function Je(e){return e/=.5,e<1?.5*e*e:(e--,-.5*(e*(e-2)-1))}function Ge(e,{delay:t=0,duration:n=400,easing:r=nr,axis:i="y"}={}){const a=getComputedStyle(e),o=+a.opacity,s=i==="y"?"height":"width",c=parseFloat(a[s]),l=i==="y"?["top","bottom"]:["left","right"],d=l.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),u=parseFloat(a[`padding${d[0]}`]),p=parseFloat(a[`padding${d[1]}`]),m=parseFloat(a[`margin${d[0]}`]),g=parseFloat(a[`margin${d[1]}`]),$=parseFloat(a[`border${d[0]}Width`]),v=parseFloat(a[`border${d[1]}Width`]);return{delay:t,duration:n,easing:r,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*o};${s}: ${y*c}px;padding-${l[0]}: ${y*u}px;padding-${l[1]}: ${y*p}px;margin-${l[0]}: ${y*m}px;margin-${l[1]}: ${y*g}px;border-${l[0]}-width: ${y*$}px;border-${l[1]}-width: ${y*v}px;`}}function Ue(e,t,n){const r=e.slice();return r[7]=t[n],r}function Ve(e){let t,n,r,i,a,o=e[1].name+"",s,c,l,d;function u(g,$){return g[1].type=="folder"?or:rr}let p=u(e),m=p(e);return{c(){t=h("div"),n=h("div"),r=h("h3"),m.c(),i=w(),a=h("span"),s=et(o),b(n,"class",c="text "+(e[1].type=="folder"?e[2]:"")),b(t,"class","header")},m(g,$){F(g,t,$),f(t,n),f(n,r),m.m(r,null),f(r,i),f(r,a),f(a,s),l||(d=K(t,"click",e[4]),l=!0)},p(g,$){p!==(p=u(g))&&(m.d(1),m=p(g),m&&(m.c(),m.m(r,i))),$&2&&o!==(o=g[1].name+"")&&qt(s,o),$&6&&c!==(c="text "+(g[1].type=="folder"?g[2]:""))&&b(n,"class",c)},d(g){g&&R(t),m.d(),l=!1,d()}}}function rr(e){let t,n;return{c(){t=h("img"),Wt(t.src,n="./assets/file.svg")||b(t,"src",n),b(t,"alt","file")},m(r,i){F(r,t,i)},d(r){r&&R(t)}}}function or(e){let t,n;return{c(){t=h("img"),Wt(t.src,n="./assets/folder.svg")||b(t,"src",n),b(t,"alt","folder")},m(r,i){F(r,t,i)},d(r){r&&R(t)}}}function Ke(e){let t,n,r,i,a=e[1].children,o=[];for(let s=0;s<a.length;s+=1)o[s]=Qe(Ue(e,a,s));return{c(){t=h("div"),n=h("ul");for(let s=0;s<o.length;s+=1)o[s].c();b(t,"class","details")},m(s,c){F(s,t,c),f(t,n);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,null);i=!0},p(s,c){if(e=s,c&2){a=e[1].children;let l;for(l=0;l<a.length;l+=1){const d=Ue(e,a,l);o[l]?o[l].p(d,c):(o[l]=Qe(d),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=a.length}},i(s){i||(Q(()=>{i&&(r||(r=Ie(t,Ge,{duration:150,easing:Je},!0)),r.run(1))}),i=!0)},o(s){r||(r=Ie(t,Ge,{duration:150,easing:Je},!1)),r.run(0),i=!1},d(s){s&&R(t),le(o,s),s&&r&&r.end()}}}function ir(e){let t,n;return{c(){t=h("img"),Wt(t.src,n="./assets/file.svg")||b(t,"src",n),b(t,"alt","file")},m(r,i){F(r,t,i)},d(r){r&&R(t)}}}function sr(e){let t,n;return{c(){t=h("img"),Wt(t.src,n="./assets/folder.svg")||b(t,"src",n),b(t,"alt","folder")},m(r,i){F(r,t,i)},d(r){r&&R(t)}}}function Qe(e){let t,n,r,i,a=e[7].name+"",o,s,c;function l(p,m){return p[7].type=="folder"?sr:ir}let d=l(e),u=d(e);return{c(){t=h("li"),n=h("div"),u.c(),r=w(),i=h("h3"),o=et(a),c=w(),b(n,"class",s="text "+(e[7].type=="folder"?"accordion-button collapsed":""))},m(p,m){F(p,t,m),f(t,n),u.m(n,null),f(n,r),f(n,i),f(i,o),f(t,c)},p(p,m){d!==(d=l(p))&&(u.d(1),u=d(p),u&&(u.c(),u.m(n,r))),m&2&&a!==(a=p[7].name+"")&&qt(o,a),m&2&&s!==(s="text "+(p[7].type=="folder"?"accordion-button collapsed":""))&&b(n,"class",s)},d(p){p&&R(t),u.d()}}}function lr(e){let t,n,r,i,a,o=e[1]&&e[1].name&&Ve(e),s=e[0]&&e[1].children&&e[1].children.length&&Ke(e);return{c(){t=h("div"),o&&o.c(),n=w(),s&&s.c(),r=w(),i=h("style"),i.textContent=`div.header {\r
      display: flex;\r
      width: 100%;\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
      color: #fff;\r
      cursor: pointer;\r
    }\r
\r
    .result-container .accordion-button {\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
    }\r
\r
    .result-container .accordion-button:not(.collapsed) {\r
      background-color: #47d7ac;\r
      border-bottom-left-radius: 0;\r
      border-bottom-right-radius: 0;\r
    }\r
\r
    div.header .text {\r
      flex: 1;\r
      padding: 12px 20px;\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }\r
\r
    div.header:hover h3 {\r
      color: #fff;\r
    }\r
\r
    div.details {\r
      background-color: #47d7ac;\r
      padding: 1rem;\r
    }\r
\r
    div.details ul {\r
      list-style-type: none;\r
    }\r
\r
    .accordion {\r
      margin-bottom: 5px;\r
    }\r
\r
    .accordion h3 {\r
      font-size: 16px;\r
      margin-bottom: 0;\r
      color: #13294b;\r
      display: flex;\r
      align-items: center;\r
      font-weight: 400;\r
    }\r
\r
    div.details .text.accordion-button {\r
      padding: 0;\r
    }\r
\r
    .accordion h3 img,\r
    div.details .text img {\r
      width: 24px;\r
      height: 24px;\r
      margin-right: 10px;\r
    }\r
\r
    div.details .text {\r
      text-align: left;\r
      cursor: pointer;\r
      display: flex;\r
      align-items: center;\r
    }\r
\r
    h4,\r
    h2 {\r
      cursor: pointer;\r
    }\r
\r
    .text span {\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }`,this.c=N,b(t,"class","accordion")},m(c,l){F(c,t,l),o&&o.m(t,null),f(t,n),s&&s.m(t,null),f(t,r),f(t,i),a=!0},p(c,[l]){c[1]&&c[1].name?o?o.p(c,l):(o=Ve(c),o.c(),o.m(t,n)):o&&(o.d(1),o=null),c[0]&&c[1].children&&c[1].children.length?s?(s.p(c,l),l&3&&z(s,1)):(s=Ke(c),s.c(),z(s,1),s.m(t,r)):s&&(Vt(),H(s,1,1,()=>{s=null}),Kt())},i(c){a||(z(s),a=!0)},o(c){H(s),a=!1},d(c){c&&R(t),o&&o.d(),s&&s.d()}}}const Xe={},cr=()=>qn(Xe),Ye=()=>{const e={current:Te(null)};return Wn(Xe,e),e};function ar(e,t,n){let r,i,{open:a=!1}=t,{folder:o}=t;const{current:s}=cr();Le(e,s,d=>n(5,i=d));const c={};Ye();function l(){o.type!=="file"&&(n(0,a=!a),a&&Rn(s,i=c,i))}return e.$$set=d=>{"open"in d&&n(0,a=d.open),"folder"in d&&n(1,o=d.folder)},e.$$.update=()=>{e.$$.dirty&32&&i!==c&&n(0,a=!1),e.$$.dirty&3&&n(2,r=a&&o.children&&o.children.length?"accordion-button":"accordion-button collapsed")},[a,o,r,s,l,i]}class Ze extends ht{constructor(t){super(),Lt(this,{target:this.shadowRoot,props:yt(this.attributes),customElement:!0},ar,lr,at,{open:0,folder:1},null),t&&(t.target&&F(t.target,this,t.anchor),t.props&&(this.$set(t.props),nt()))}static get observedAttributes(){return["open","folder"]}get open(){return this.$$.ctx[0]}set open(t){this.$$set({open:t}),nt()}get folder(){return this.$$.ctx[1]}set folder(t){this.$$set({folder:t}),nt()}}customElements.define("item-component",Ze);function tn(e,t,n){const r=e.slice();return r[1]=t[n],r}function ur(e){let t;return{c(){t=h("div"),t.textContent="No files and folders are created!",b(t,"class","alert alert-light"),b(t,"role","alert")},m(n,r){F(n,t,r)},p:N,i:N,o:N,d(n){n&&R(t)}}}function dr(e){let t,n,r=e[0],i=[];for(let o=0;o<r.length;o+=1)i[o]=en(tn(e,r,o));const a=o=>H(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();t=zn()},m(o,s){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,s);F(o,t,s),n=!0},p(o,s){if(s&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=tn(o,r,c);i[c]?(i[c].p(l,s),z(i[c],1)):(i[c]=en(l),i[c].c(),z(i[c],1),i[c].m(t.parentNode,t))}for(Vt(),c=r.length;c<i.length;c+=1)a(c);Kt()}},i(o){if(!n){for(let s=0;s<r.length;s+=1)z(i[s]);n=!0}},o(o){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)H(i[s]);n=!1},d(o){le(i,o),o&&R(t)}}}function en(e){let t,n;return t=new Ze({props:{folder:e[1]}}),{c(){Qt(t.$$.fragment)},m(r,i){Ct(t,r,i),n=!0},p(r,i){const a={};i&1&&(a.folder=r[1]),t.$set(a)},i(r){n||(z(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){Ft(t,r)}}}function fr(e){let t,n,r,i,a,o,s,c,l,d;const u=[dr,ur],p=[];function m(g,$){var v;return(v=g[0])!=null&&v.length?0:1}return o=m(e),s=p[o]=u[o](e),{c(){t=h("div"),n=h("div"),r=h("h4"),r.textContent="File & Folder Structure",i=w(),a=h("div"),s.c(),c=w(),l=h("style"),l.textContent=`.right-tab {
      padding-left: 1.5rem;
    }
    .result-container {
      padding: 20px;
      background-color: #13294b;
      color: #fff;
      border-radius: 10px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
    }
    .result-container h4 {
      font-weight: 300;
      margin-bottom: 20px;
    }
    .accordian-container {
      overflow: auto;
    }

    @media only screen and (max-width: 768px) {
      .ps-4 {
        padding-left: 0 !important;
      }
    }`,this.c=N,b(a,"class","accordian-container"),b(n,"class","result-container"),b(t,"class","col-md-5 right-tab")},m(g,$){F(g,t,$),f(t,n),f(n,r),f(n,i),f(n,a),p[o].m(a,null),f(t,c),f(t,l),d=!0},p(g,[$]){let v=o;o=m(g),o===v?p[o].p(g,$):(Vt(),H(p[v],1,1,()=>{p[v]=null}),Kt(),s=p[o],s?s.p(g,$):(s=p[o]=u[o](g),s.c()),z(s,1),s.m(a,null))},i(g){d||(z(s),d=!0)},o(g){H(s),d=!1},d(g){g&&R(t),p[o].d()}}}function pr(e,t,n){let r;return Le(e,Nt,i=>n(0,r=i)),Ye(),[r]}class nn extends ht{constructor(t){super(),Lt(this,{target:this.shadowRoot,props:yt(this.attributes),customElement:!0},pr,fr,at,{},null),t&&t.target&&F(t.target,this,t.anchor)}}customElements.define("result-component",nn);function mr(e){let t,n,r,i,a,o,s,c;return r=new qe({}),a=new nn({}),{c(){t=h("div"),n=h("div"),Qt(r.$$.fragment),i=w(),Qt(a.$$.fragment),o=w(),s=h("style"),s.textContent=`@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    body {
      background-color: #000;
    }

    .svelte-component-wrapper {
      font-family: "Roboto", sans-serif;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 70px;
      padding: 30px 30px 30px 50px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      min-width: 420px;
    }`,this.c=N,b(n,"class","row"),b(t,"class","container svelte-component-wrapper")},m(l,d){F(l,t,d),f(t,n),Ct(r,n,null),f(n,i),Ct(a,n,null),f(t,o),f(t,s),c=!0},p:N,i(l){c||(z(r.$$.fragment,l),z(a.$$.fragment,l),c=!0)},o(l){H(r.$$.fragment,l),H(a.$$.fragment,l),c=!1},d(l){l&&R(t),Ft(r),Ft(a)}}}function hr(e){return je(()=>{const t=localStorage.getItem("store");if(t){const n=JSON.parse(t);Nt.set(n)}}),[]}class gr extends ht{constructor(t){super(),Lt(this,{target:this.shadowRoot,props:yt(this.attributes),customElement:!0},hr,mr,at,{},null),t&&t.target&&F(t.target,this,t.anchor)}}customElements.define("file-folder-component",gr);function br(e){let t,n;return t=new Ce({}),{c(){re(t.$$.fragment)},m(r,i){Tt(t,r,i),n=!0},p:S,i(r){n||(J(t.$$.fragment,r),n=!0)},o(r){tt(t.$$.fragment,r),n=!1},d(r){Pt(t,r)}}}function $r(e){let t,n,r,i;return t=new we({props:{logout:e[1]}}),{c(){re(t.$$.fragment),n=q(),r=C("file-folder-component")},m(a,o){Tt(t,a,o),W(a,n,o),W(a,r,o),i=!0},p:S,i(a){i||(J(t.$$.fragment,a),i=!0)},o(a){tt(t.$$.fragment,a),i=!1},d(a){Pt(t,a),a&&Y(n),a&&Y(r)}}}function xr(e){let t,n,r,i;const a=[$r,br],o=[];function s(c,l){return c[0]?0:1}return t=s(e),n=o[t]=a[t](e),{c(){n.c(),r=dn(),this.c=S},m(c,l){o[t].m(c,l),W(c,r,l),i=!0},p(c,[l]){let d=t;t=s(c),t===d?o[t].p(c,l):(ve(),tt(o[d],1,1,()=>{o[d]=null}),ye(),n=o[t],n?n.p(c,l):(n=o[t]=a[t](c),n.c()),J(n,1),n.m(r.parentNode,r))},i(c){i||(J(n),i=!0)},o(c){tt(n),i=!1},d(c){o[t].d(c),c&&Y(r)}}}function _r(e,t,n){let r=!1;const i=()=>{n(0,r=!1),localStorage.clear()};return $e(()=>{oe.subscribe(a=>{n(0,r=a)}),n(0,r=localStorage.getItem("isLoggedIn")==="true")}),[r,i]}class vr extends vt{constructor(t){super();const n=document.createElement("style");n.textContent='@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");',this.shadowRoot.appendChild(n),Ht(this,{target:this.shadowRoot,props:zt(this.attributes),customElement:!0},_r,xr,$t,{},null),t&&t.target&&W(t.target,this,t.anchor)}}customElements.define("my-app",vr)});
