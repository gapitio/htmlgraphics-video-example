var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s="undefined"!=typeof window?t=>requestAnimationFrame(t):t;function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function $(t){i=t}const v=[],y=[],b=[],_=[],x=Promise.resolve();let w=!1;function k(t){b.push(t)}let T=!1;const E=new Set;function j(){if(!T){T=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];$(e),A(e.$$)}for($(null),v.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];E.has(e)||(E.add(e),e())}b.length=0}while(v.length);for(;_.length;)_.pop()();w=!1,T=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const N=new Set;function M(t,e){t&&t.i&&(N.delete(t),t.i(e))}function C(t,n,c,i){const{fragment:s,on_mount:u,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,c),i||k((()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(k)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(v.push(t),w||(w=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,r,c,s,u,l,f=[-1]){const d=i;$(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let h=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&L(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();r.intro&&M(e.$$.fragment),C(e,r.target,r.anchor,r.customElement),j()}$(d)}class P{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,r,c,i,$,v,y,b,_,x,w,T,E,j,A,N,M,C,D,L,O,P,q=!1,F=!0,S=B(e[0])+"",X=e[2]?"play":"pause",H=B(e[1])+"";function R(){cancelAnimationFrame(i),r.paused||(i=s(R),q=!0),e[8].call(r)}return{c(){n=l("div"),r=l("video"),r.innerHTML='<track kind="captions"/>',$=d(),v=l("div"),y=l("progress"),_=d(),x=l("div"),w=l("span"),T=f(S),E=d(),j=l("span"),A=f("click anywhere to "),N=f(X),M=f(" / drag to seek"),C=d(),D=l("span"),L=f(H),h(r,"poster","https://sveltejs.github.io/assets/caminandes-llamigos.jpg"),r.src!==(c="https://sveltejs.github.io/assets/caminandes-llamigos.mp4")&&h(r,"src","https://sveltejs.github.io/assets/caminandes-llamigos.mp4"),r.autoplay=!0,h(r,"class","svelte-1i78aco"),void 0===e[1]&&k((()=>e[9].call(r))),y.value=b=e[0]/e[1]||0,h(y,"class","svelte-1i78aco"),h(w,"class","time svelte-1i78aco"),h(j,"class","svelte-1i78aco"),h(D,"class","time svelte-1i78aco"),h(x,"class","info svelte-1i78aco"),h(v,"class","controls svelte-1i78aco"),g(v,"opacity",e[1]&&e[3]?1:0),h(n,"class","svelte-1i78aco")},m(t,o){var c;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,o),u(n,r),u(n,$),u(n,v),u(v,y),u(v,_),u(v,x),u(x,w),u(w,T),u(x,E),u(x,j),u(j,A),u(j,N),u(j,M),u(x,C),u(x,D),u(D,L),O||(P=[p(r,"mousemove",e[5]),p(r,"touchmove",(c=e[4],function(t){return t.preventDefault(),c.call(this,t)})),p(r,"mousedown",e[6]),p(r,"mouseup",e[7]),p(r,"timeupdate",R),p(r,"durationchange",e[9]),p(r,"play",e[10]),p(r,"pause",e[10])],O=!0)},p(t,[e]){!q&&1&e&&!isNaN(t[0])&&(r.currentTime=t[0]),q=!1,4&e&&F!==(F=t[2])&&r[F?"pause":"play"](),3&e&&b!==(b=t[0]/t[1]||0)&&(y.value=b),1&e&&S!==(S=B(t[0])+"")&&m(T,S),4&e&&X!==(X=t[2]?"play":"pause")&&m(N,X),2&e&&H!==(H=B(t[1])+"")&&m(L,H),10&e&&g(v,"opacity",t[1]&&t[3]?1:0)},i:t,o:t,d(t){t&&a(n),O=!1,o(P)}}}function B(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`}function F(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,c){function i(t){try{u(o.next(t))}catch(t){c(t)}}function s(t){try{u(o.throw(t))}catch(t){c(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}u((o=o.apply(t,e||[])).next())}))};let r,c,i,s=0,u=!0,a=!0;function l(t){if(clearTimeout(c),c=setTimeout((()=>{n(3,a=!1)}),2500),n(3,a=!0),!r)return;if("mousemove"===t.type&&1!==t.buttons)return;const e="touchmove"===t.type?function(t){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}(t).x:t.clientX,{left:o,right:i}=t.currentTarget.getBoundingClientRect();n(0,s=r*(e-o)/(i-o))}return[s,r,u,a,function(t){l(t)},function(t){l(t)},function(){i=Date.now()},function(t){return o(this,void 0,void 0,(function*(){Date.now()-i<300&&(u?yield t.currentTarget.play():t.currentTarget.pause())}))},function(){s=this.currentTime,n(0,s)},function(){r=this.duration,n(1,r)},function(){u=this.paused,n(2,u)}]}class S extends P{constructor(t){super(),O(this,t,F,q,c,{})}}function X(e){let n,o;return n=new S({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){C(n,t,e),o=!0},p:t,i(t){o||(M(n.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),(void 0).c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}return new class extends P{constructor(t){super(),O(this,t,null,X,c,{})}}({target:htmlNode.children[1]})}();
