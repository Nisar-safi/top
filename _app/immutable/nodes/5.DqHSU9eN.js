import{s as Dt,n as Xe}from"../chunks/scheduler.Bmg8oFKD.js";import{S as It,i as wt,e as r,a as b,s as m,c as i,b as _,l as C,d as E,f as v,g as k,m as f,q as Ot,h as fe,j as e,r as Rt}from"../chunks/index.gV_602PJ.js";import{e as q,u as Ue,d as We}from"../chunks/each.CB-MDMkp.js";async function jt({params:c}){const l=(await(await fetch("https://flipbackend.bitcoincash.network/v1/flipstarter")).json()).find(d=>Gt(d.title)===c.slug);return l?{campaign:l}:{status:404,error:new Error("Not found")}}function Gt(c){return c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}const Jt=Object.freeze(Object.defineProperty({__proto__:null,load:jt},Symbol.toStringTag,{value:"Module"}));function Et(c,o,t){const l=c.slice();return l[2]=o[t],l[4]=t,l}function Lt(c,o,t){const l=c.slice();return l[5]=o[t],l[4]=t,l}function yt(c,o,t){const l=c.slice();return l[7]=o[t],l[4]=t,l}function St(c,o,t){const l=c.slice();return l[9]=o[t],l}function Nt(c){let o,t,l='<i class="fas fa-tag"></i>',d,g=c[9].name+"",p;return{c(){o=r("span"),t=r("span"),t.innerHTML=l,d=m(),p=b(g),this.h()},l(u){o=i(u,"SPAN",{class:!0});var a=_(o);t=i(a,"SPAN",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-9fiira"&&(t.innerHTML=l),d=k(a),p=E(a,g),a.forEach(v),this.h()},h(){f(t,"class","icon svelte-1umrrnx"),f(o,"class","tag is-info m-1")},m(u,a){fe(u,o,a),e(o,t),e(o,d),e(o,p)},p:Xe,d(u){u&&v(o)}}}function Pt(c,o){let t,l,d=o[4]+1+"",g,p;return{key:c,first:null,c(){t=r("a"),l=b("#"),g=b(d),p=m(),this.h()},l(u){t=i(u,"A",{class:!0,href:!0,target:!0});var a=_(t);l=E(a,"#"),g=E(a,d),p=k(a),a.forEach(v),this.h()},h(){f(t,"class","mb-2"),f(t,"href",o[7].url),f(t,"target","_blank"),this.first=t},m(u,a){fe(u,t,a),e(t,l),e(t,g),e(t,p)},p(u,a){o=u},d(u){u&&v(t)}}}function Vt(c,o){let t,l,d=o[4]+1+"",g,p;return{key:c,first:null,c(){t=r("a"),l=b("#"),g=b(d),p=m(),this.h()},l(u){t=i(u,"A",{href:!0,class:!0,target:!0});var a=_(t);l=E(a,"#"),g=E(a,d),p=k(a),a.forEach(v),this.h()},h(){f(t,"href",o[5].url),f(t,"class","is-link ml-2"),f(t,"target","_blank"),this.first=t},m(u,a){fe(u,t,a),e(t,l),e(t,g),e(t,p)},p(u,a){o=u},d(u){u&&v(t)}}}function At(c,o){let t,l,d,g='<i class="fas fa-image"></i>',p,u=o[4]+1+"",a,N;return{key:c,first:null,c(){t=r("p"),l=r("a"),d=r("span"),d.innerHTML=g,p=b(" #"),a=b(u),N=m(),this.h()},l(M){t=i(M,"P",{});var V=_(t);l=i(V,"A",{href:!0,class:!0,target:!0});var z=_(l);d=i(z,"SPAN",{class:!0,"data-svelte-h":!0}),C(d)!=="svelte-1yvmzkl"&&(d.innerHTML=g),p=E(z," #"),a=E(z,u),z.forEach(v),N=k(V),V.forEach(v),this.h()},h(){f(d,"class","icon svelte-1umrrnx"),f(l,"href",o[2].image),f(l,"class","is-link mb-3"),f(l,"target","_blank"),this.first=t},m(M,V){fe(M,t,V),e(t,l),e(l,d),e(l,p),e(l,a),e(t,N)},p(M,V){o=M},d(M){M&&v(t)}}}function qt(c){let o,t,l,d,g,p,u,a,N,M,V='<i class="fas fa-fire mr-3"></i>',z=c[0].title+"",Te,xe,O,U,Ye="Status:",Ce,B,Ze='<i class="fas fa-info-circle"></i>',et=c[0].status+"",Me,He,R,W,tt="Funded Transaction:",be,F,st='<i class="fas fa-hand-holding-usd"></i>',lt=c[0].funded_tx+"",Ee,Le,$,at='<span class="icon svelte-1umrrnx"><i class="fas fa-info"></i></span>Details',ye,A,X,nt="Description:",Se,J,rt='<i class="fas fa-align-left"></i>',Ne,it=c[0].description+"",Pe,Ve,K,Y,ot=`<span class="icon svelte-1umrrnx"><i class="fas fa-coins"></i></span>
                    Requesting:`,Ae,Z,ct=c[0].amount/1e8+"",De,Ie,we,j,ee,ft='<span class="icon svelte-1umrrnx"><i class="fas fa-tags"></i></span> Categories:',Oe,Re,P,te,ht='<strong><span class="icon mr-1 svelte-1umrrnx"><i class="fas fa-bullhorn"></i></span>View Announcement:</strong>',je,L=[],ut=new Map,Ge,G,D,se,vt='<strong><span class="icon svelte-1umrrnx"><i class="fas fa-archive"></i></span>Archive Copy:</strong>',qe,y=[],dt=new Map,ze,I,le,_t='<span class="icon svelte-1umrrnx"><i class="fas fa-images"></i></span>Screenshots:',Be,S=[],gt=new Map,Fe,ae,w,Q,pt='<i class="fas fa-external-link-alt"></i>',$e,ne=q(c[0].categories),x=[];for(let s=0;s<ne.length;s+=1)x[s]=Nt(St(c,ne,s));let he=q(c[0].announcements);const mt=s=>s[7];for(let s=0;s<he.length;s+=1){let h=yt(c,he,s),n=mt(h);ut.set(n,L[s]=Pt(n,h))}let ue=q(c[0].archives);const kt=s=>s[5];for(let s=0;s<ue.length;s+=1){let h=Lt(c,ue,s),n=kt(h);dt.set(n,y[s]=Vt(n,h))}let ve=q(c[0].screenshots);const Tt=s=>s[2];for(let s=0;s<ve.length;s+=1){let h=Et(c,ve,s),n=Tt(h);gt.set(n,S[s]=At(n,h))}return{c(){o=r("main"),t=r("section"),l=r("div"),d=r("div"),g=r("div"),p=r("div"),u=r("div"),a=r("div"),N=r("h1"),M=r("span"),M.innerHTML=V,Te=b(z),xe=m(),O=r("p"),U=r("strong"),U.textContent=Ye,Ce=m(),B=r("span"),B.innerHTML=Ze,Me=b(et),He=m(),R=r("p"),W=r("strong"),W.textContent=tt,be=m(),F=r("span"),F.innerHTML=st,Ee=b(lt),Le=m(),$=r("h2"),$.innerHTML=at,ye=m(),A=r("p"),X=r("strong"),X.textContent=nt,Se=m(),J=r("span"),J.innerHTML=rt,Ne=m(),Pe=b(it),Ve=m(),K=r("p"),Y=r("strong"),Y.innerHTML=ot,Ae=m(),Z=r("strong"),De=b(ct),Ie=b(" BCH"),we=m(),j=r("div"),ee=r("strong"),ee.innerHTML=ft,Oe=m();for(let s=0;s<x.length;s+=1)x[s].c();Re=m(),P=r("div"),te=r("p"),te.innerHTML=ht,je=m();for(let s=0;s<L.length;s+=1)L[s].c();Ge=m(),G=r("div"),D=r("div"),se=r("div"),se.innerHTML=vt,qe=m();for(let s=0;s<y.length;s+=1)y[s].c();ze=m(),I=r("div"),le=r("strong"),le.innerHTML=_t,Be=m();for(let s=0;s<S.length;s+=1)S[s].c();Fe=m(),ae=r("div"),w=r("a"),Q=r("span"),Q.innerHTML=pt,$e=b(`
                  Visit Campaign`),this.h()},l(s){o=i(s,"MAIN",{});var h=_(o);t=i(h,"SECTION",{class:!0});var n=_(t);l=i(n,"DIV",{class:!0});var ie=_(l);d=i(ie,"DIV",{class:!0});var xt=_(d);g=i(xt,"DIV",{class:!0});var Ct=_(g);p=i(Ct,"DIV",{class:!0,style:!0});var Mt=_(p);u=i(Mt,"DIV",{class:!0});var Ht=_(u);a=i(Ht,"DIV",{class:!0});var T=_(a);N=i(T,"H1",{class:!0});var Je=_(N);M=i(Je,"SPAN",{class:!0,"data-svelte-h":!0}),C(M)!=="svelte-w2gw03"&&(M.innerHTML=V),Te=E(Je,z),Je.forEach(v),xe=k(T),O=i(T,"P",{});var oe=_(O);U=i(oe,"STRONG",{"data-svelte-h":!0}),C(U)!=="svelte-1ftu2mm"&&(U.textContent=Ye),Ce=k(oe),B=i(oe,"SPAN",{class:!0,"data-svelte-h":!0}),C(B)!=="svelte-5omiy3"&&(B.innerHTML=Ze),Me=E(oe,et),oe.forEach(v),He=k(T),R=i(T,"P",{});var ce=_(R);W=i(ce,"STRONG",{"data-svelte-h":!0}),C(W)!=="svelte-6az4q2"&&(W.textContent=tt),be=k(ce),F=i(ce,"SPAN",{class:!0,"data-svelte-h":!0}),C(F)!=="svelte-td0eje"&&(F.innerHTML=st),Ee=E(ce,lt),ce.forEach(v),Le=k(T),$=i(T,"H2",{class:!0,"data-svelte-h":!0}),C($)!=="svelte-rvjawu"&&($.innerHTML=at),ye=k(T),A=i(T,"P",{});var re=_(A);X=i(re,"STRONG",{"data-svelte-h":!0}),C(X)!=="svelte-1scoy10"&&(X.textContent=nt),Se=k(re),J=i(re,"SPAN",{class:!0,"data-svelte-h":!0}),C(J)!=="svelte-16k0mrv"&&(J.innerHTML=rt),Ne=k(re),Pe=E(re,it),re.forEach(v),Ve=k(T),K=i(T,"P",{});var de=_(K);Y=i(de,"STRONG",{"data-svelte-h":!0}),C(Y)!=="svelte-1d01xcg"&&(Y.innerHTML=ot),Ae=k(de),Z=i(de,"STRONG",{});var Ke=_(Z);De=E(Ke,ct),Ie=E(Ke," BCH"),Ke.forEach(v),de.forEach(v),we=k(T),j=i(T,"DIV",{});var _e=_(j);ee=i(_e,"STRONG",{"data-svelte-h":!0}),C(ee)!=="svelte-65khb4"&&(ee.innerHTML=ft),Oe=k(_e);for(let H=0;H<x.length;H+=1)x[H].l(_e);_e.forEach(v),Re=k(T),P=i(T,"DIV",{class:!0,id:!0});var ge=_(P);te=i(ge,"P",{"data-svelte-h":!0}),C(te)!=="svelte-n1dmq5"&&(te.innerHTML=ht),je=k(ge);for(let H=0;H<L.length;H+=1)L[H].l(ge);ge.forEach(v),Ge=k(T),G=i(T,"DIV",{class:!0});var pe=_(G);D=i(pe,"DIV",{class:!0});var me=_(D);se=i(me,"DIV",{"data-svelte-h":!0}),C(se)!=="svelte-k5wzxh"&&(se.innerHTML=vt),qe=k(me);for(let H=0;H<y.length;H+=1)y[H].l(me);me.forEach(v),ze=k(pe),I=i(pe,"DIV",{class:!0});var ke=_(I);le=i(ke,"STRONG",{"data-svelte-h":!0}),C(le)!=="svelte-vq5k3s"&&(le.innerHTML=_t),Be=k(ke);for(let H=0;H<S.length;H+=1)S[H].l(ke);ke.forEach(v),pe.forEach(v),Fe=k(T),ae=i(T,"DIV",{class:!0});var bt=_(ae);w=i(bt,"A",{class:!0,href:!0,target:!0});var Qe=_(w);Q=i(Qe,"SPAN",{class:!0,"data-svelte-h":!0}),C(Q)!=="svelte-nstg2b"&&(Q.innerHTML=pt),$e=E(Qe,`
                  Visit Campaign`),Qe.forEach(v),bt.forEach(v),T.forEach(v),Ht.forEach(v),Mt.forEach(v),Ct.forEach(v),xt.forEach(v),ie.forEach(v),n.forEach(v),h.forEach(v),this.h()},h(){f(M,"class","icon svelte-1umrrnx"),f(N,"class","title is-4"),f(B,"class","icon svelte-1umrrnx"),f(F,"class","icon svelte-1umrrnx"),f($,"class","subtitle is-5"),f(J,"class","icon svelte-1umrrnx"),f(P,"class","buttons mt-3 svelte-1umrrnx"),f(P,"id","margin"),f(D,"class","is-flex mb-3"),f(I,"class","is-flex"),f(G,"class","container"),f(Q,"class","icon mr-1 svelte-1umrrnx"),f(w,"class","button is-primary"),f(w,"href",c[0].url),f(w,"target","_blank"),f(ae,"class","mt-3 is-flex is-justify-content-center is-align-items-center"),f(a,"class","content"),f(u,"class","card-content"),f(p,"class","card"),Ot(p,"margin","1rem"),f(g,"class","column is-10"),f(d,"class","columns is-centered is-multiline"),f(l,"class","container"),f(t,"class","section")},m(s,h){fe(s,o,h),e(o,t),e(t,l),e(l,d),e(d,g),e(g,p),e(p,u),e(u,a),e(a,N),e(N,M),e(N,Te),e(a,xe),e(a,O),e(O,U),e(O,Ce),e(O,B),e(O,Me),e(a,He),e(a,R),e(R,W),e(R,be),e(R,F),e(R,Ee),e(a,Le),e(a,$),e(a,ye),e(a,A),e(A,X),e(A,Se),e(A,J),e(A,Ne),e(A,Pe),e(a,Ve),e(a,K),e(K,Y),e(K,Ae),e(K,Z),e(Z,De),e(Z,Ie),e(a,we),e(a,j),e(j,ee),e(j,Oe);for(let n=0;n<x.length;n+=1)x[n]&&x[n].m(j,null);e(a,Re),e(a,P),e(P,te),e(P,je);for(let n=0;n<L.length;n+=1)L[n]&&L[n].m(P,null);e(a,Ge),e(a,G),e(G,D),e(D,se),e(D,qe);for(let n=0;n<y.length;n+=1)y[n]&&y[n].m(D,null);e(G,ze),e(G,I),e(I,le),e(I,Be);for(let n=0;n<S.length;n+=1)S[n]&&S[n].m(I,null);e(a,Fe),e(a,ae),e(ae,w),e(w,Q),e(w,$e)},p(s,[h]){if(h&1){ne=q(s[0].categories);let n;for(n=0;n<ne.length;n+=1){const ie=St(s,ne,n);x[n]?x[n].p(ie,h):(x[n]=Nt(ie),x[n].c(),x[n].m(j,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=ne.length}h&1&&(he=q(s[0].announcements),L=Ue(L,h,mt,1,s,he,ut,P,We,Pt,null,yt)),h&1&&(ue=q(s[0].archives),y=Ue(y,h,kt,1,s,ue,dt,D,We,Vt,null,Lt)),h&1&&(ve=q(s[0].screenshots),S=Ue(S,h,Tt,1,s,ve,gt,I,We,At,null,Et))},i:Xe,o:Xe,d(s){s&&v(o),Rt(x,s);for(let h=0;h<L.length;h+=1)L[h].d();for(let h=0;h<y.length;h+=1)y[h].d();for(let h=0;h<S.length;h+=1)S[h].d()}}}function zt(c,o,t){let{data:l}=o;const{campaign:d}=l;return console.log("data is comming from params ",l),c.$$set=g=>{"data"in g&&t(1,l=g.data)},[d,l]}class Kt extends It{constructor(o){super(),wt(this,o,zt,qt,Dt,{data:1})}}export{Kt as component,Jt as universal};
