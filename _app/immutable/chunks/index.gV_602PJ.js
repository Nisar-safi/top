var E=Object.defineProperty;var j=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,f as w,h as B,i as A,j as C,k as b,l as I,m as L,p as N,q as P,v as T,w as q}from"./scheduler.Bmg8oFKD.js";let $=!1;function H(){$=!0}function M(){$=!1}function O(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let i=0;i<t.length;i++){const a=t[i].claim_order,o=(s>0&&t[n[s]].claim_order<=a?s+1:O(1,s,_=>t[n[_]].claim_order,a))-1;r[i]=n[o]+1;const c=o+1;n[c]=i,s=Math.max(c,s)}const u=[],l=[];let f=t.length-1;for(let i=n[s]+1;i!=0;i=r[i-1]){for(u.push(t[i-1]);f>=i;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);u.reverse(),l.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<l.length;i++){for(;a<u.length&&l[i].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;e.insertBefore(l[i],o)}}function D(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?D(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,r,s=!1){W(e);const u=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const i=n(f);return i===void 0?e.splice(l,1):e[l]=i,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const i=n(f);return i===void 0?e.splice(l,1):e[l]=i,s?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return r()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function F(e,t,n,r){return S(e,s=>s.nodeName===t,s=>{const u=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||u.push(f.name)}u.forEach(l=>s.removeAttribute(l))},()=>r(t))}function se(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>x(t),!0)}function fe(e){return G(e," ")}function ue(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t){e.value=t??""}function oe(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function de(e,t){return new e(t)}const m=new Set;let d;function _e(){d={r:0,c:[],p:d}}function me(){d.r||h(d.c),d=d.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function $e(e){e&&e.c()}function pe(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),b(()=>{const u=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),s.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,r,s,u,l=null,f=[-1]){const i=L;N(e);const a=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&s(a.ctx[c],a.ctx[c]=v)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](v),o&&X(e,c)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){H();const c=V(t.target);a.fragment&&a.fragment.l(c),c.forEach(R)}else a.fragment&&a.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),M(),B()}N(i)}class xe{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{K as A,Q as B,xe as S,x as a,V as b,se as c,G as d,U as e,R as f,fe as g,ee as h,ye as i,D as j,ue as k,le as l,ae as m,re as n,ce as o,ie as p,oe as q,te as r,ne as s,J as t,he as u,me as v,_e as w,de as x,$e as y,pe as z};
