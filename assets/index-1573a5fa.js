var M=Object.defineProperty;var W=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(W(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _(){}function I(e){return e()}function N(){return Object.create(null)}function p(e){e.forEach(I)}function T(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function $(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function S(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function K(){return F(" ")}function P(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function R(e){return Array.from(e.childNodes)}function A(e,t){e.value=t??""}let x;function h(e){x=e}const a=[],j=[];let d=[];const C=[],U=Promise.resolve();let w=!1;function V(){w||(w=!0,U.then(B))}function v(e){d.push(e)}const b=new Set;let l=0;function B(){if(l!==0)return;const e=x;do{try{for(;l<a.length;){const t=a[l];l++,h(t),z(t.$$)}}catch(t){throw a.length=0,l=0,t}for(h(null),a.length=0,l=0;j.length;)j.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];b.has(n)||(b.add(n),n())}d.length=0}while(a.length);for(;C.length;)C.pop()();w=!1,b.clear(),h(e)}function z(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}function G(e){const t=[],n=[];d.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),d=t}const H=new Set;function J(e,t){e&&e.i&&(H.delete(e),e.i(t))}function Q(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),v(()=>{const i=e.$$.on_mount.map(I).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),o.forEach(v)}function X(e,t){const n=e.$$;n.fragment!==null&&(G(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(a.push(e),V(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,r,o,i,u,f=[-1]){const m=x;h(e);const s=e.$$={fragment:null,ctx:[],props:i,update:_,not_equal:o,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:N(),dirty:f,skip_bound:!1,root:t.target||m.$$.root};u&&u(s.root);let E=!1;if(s.ctx=n?n(e,t.props||{},(c,O,...k)=>{const L=k.length?k[0]:O;return s.ctx&&o(s.ctx[c],s.ctx[c]=L)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](L),E&&Y(e,c)),O}):[],s.update(),E=!0,p(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const c=R(t.target);s.fragment&&s.fragment.l(c),c.forEach(g)}else s.fragment&&s.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor),B()}h(m)}class ee{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){X(this,1),this.$destroy=_}$on(t,n){if(!T(n))return _;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(te);function ne(e){let t,n,r,o,i;return{c(){t=S("input"),n=K(),r=S("button"),r.textContent="Salut"},m(u,f){$(u,t,f),A(t,e[0]),$(u,n,f),$(u,r,f),o||(i=[P(t,"input",e[2]),P(r,"click",e[1])],o=!0)},p(u,[f]){f&1&&t.value!==u[0]&&A(t,u[0])},i:_,o:_,d(u){u&&(g(t),g(n),g(r)),o=!1,p(i)}}}function re(e,t,n){let{email:r=""}=t;function o(){console.log(r),Telegram.WebApp.sendData(r),Telegram.WebApp.close()}function i(){r=this.value,n(0,r)}return e.$$set=u=>{"email"in u&&n(0,r=u.email)},[r,o,i]}class oe extends ee{constructor(t){super(),Z(this,t,re,ne,q,{email:0})}}new oe({target:document.body});
