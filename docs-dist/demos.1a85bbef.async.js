"use strict";(self.webpackChunkuse_state_link=self.webpackChunkuse_state_link||[]).push([[433],{11353:function(p,P,n){n.r(P);var x=n(48305),h=n.n(x),U=n(50959),M=n(75245),L=n(37689),C=n(72377),A=n(23209),m=n(81187),f=n(11527),T=(0,M.Z)(9);P.default=function(){return(0,f.jsx)(L.ZP,{theme:{algorithm:C.Z.darkAlgorithm},children:(0,f.jsxs)(A.Z,{gap:"large",children:[(0,f.jsx)(v,{}),(0,f.jsx)(r,{})]})})};var v=function(){var s=T(),t=h()(s,2),i=t[0],_=t[1];return(0,f.jsxs)(m.ZP,{onClick:function(){return _(i+1)},type:"primary",children:[i,"\u52A0"]})},r=function(){var s=T(),t=h()(s,2),i=t[0],_=t[1];return(0,f.jsxs)(m.ZP,{onClick:function(){return _(i-1)},children:[i,"\u51CF"]})}},38635:function(p,P,n){n.r(P),n.d(P,{default:function(){return _}});var x=n(48305),h=n.n(x),U=n(50959),M=n(37689),L=n(72377),C=n(23209),A=n(81187),m=n(75245),f=function(a,l){var u=function(d){return function(E){return function(g){E(g),localStorage.setItem(a,JSON.stringify(g))}}};return{initialData:JSON.parse(localStorage.getItem(a))||l,middleWare:u}},T=function(a){return function(l){return function(u){console.log("before",a.get()),l(u),console.log("after",a.get()),console.log("======================")}}},v=n(11527),r=f("count",0),e=r.initialData,s=r.middleWare,t=(0,m.Z)(e,(0,m.P)(s,T)),i=(0,m.Z)(0),_=function(){var c=i(),a=h()(c,2),l=a[0],u=a[1],o=t(),d=h()(o,2),E=d[0],g=d[1],O=function(){u(l+1),g(E+1)},D=function(){return location.reload()};return(0,v.jsx)(M.ZP,{theme:{algorithm:L.Z.darkAlgorithm},children:(0,v.jsxs)(C.Z,{gap:"large",vertical:!0,children:[(0,v.jsxs)("div",{children:["A: ",l]}),(0,v.jsxs)("div",{children:["B: ",E]}),(0,v.jsxs)(C.Z,{gap:"small",children:[(0,v.jsx)(A.ZP,{onClick:O,type:"primary",children:"\u52A0"}),(0,v.jsx)(A.ZP,{onClick:D,children:"\u5237\u65B0\u9875\u9762"})]})]})})}},10080:function(p,P,n){n.r(P);var x=n(15558),h=n.n(x),U=n(48305),M=n.n(U),L=n(50959),C=n(75245),A=n(37689),m=n(72377),f=n(23209),T=n(95220),v=n(81187),r=n(39796),e=n(11527),s=(0,C.Z)([]),t=function(){var a=s(),l=M()(a,2),u=l[0],o=l[1],d=function(D){var j={id:new Date().getTime(),done:!1,value:D};o([].concat(h()(u),[j]))},E=function(D){var j=u.find(function(B){return B.id===D});if(j){var I=u.indexOf(j);I<0||(u.splice(I,1),o(u))}},g=function(D){var j=u.map(function(I){return I.id===D&&(I.done=!I.done),I});o(j)};return{list:u,add:d,remove:E,update:g}};P.default=function(){return(0,e.jsx)(A.ZP,{theme:{algorithm:m.Z.darkAlgorithm},children:(0,e.jsxs)(f.Z,{gap:"large",vertical:!0,children:[(0,e.jsx)(i,{}),(0,e.jsx)(_,{})]})})};var i=function(){var a=(0,L.useState)(""),l=M()(a,2),u=l[0],o=l[1],d=t(),E=function(){d.add(u),o("")};return(0,e.jsxs)(f.Z,{gap:"small",style:{width:300},children:[(0,e.jsx)(T.Z,{value:u,onChange:function(O){return o(O.target.value)}}),(0,e.jsx)(v.ZP,{onClick:E,children:"todo"})]})},_=function(){var a=t(),l=a.remove,u=a.update,o=a.list;return(0,e.jsx)("div",{children:o.map(function(d){return(0,e.jsxs)(f.Z,{gap:"small",align:"center",children:[(0,e.jsx)(r.Z,{onClick:function(){return u(d.id)},children:d.value}),(0,e.jsx)(v.ZP,{type:"link",onClick:function(){return l(d.id)},children:"\u5220\u9664"})]},d.id)})})}},75245:function(p,P,n){n.d(P,{P:function(){return T},Z:function(){return f}});var x=n(48305),h=n.n(x),U=n(50959),M=function(e){var s=(0,U.useRef)(!1),t;(0,U.useEffect)(function(){if(s.current===!0)return function(){t&&t()};s.current===!1&&(s.current=!0,t=e())},[])},L=n(15558),C=n.n(L);function A(r){return r.prototype?function(){return r.call.apply(r,[this].concat(C()(arguments)))}:function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return r.call.apply(r,[void 0].concat(s))}}function m(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Map,s=r instanceof Object;if(!s)return r;if(e.get(r))return e.get(r);var t={};r instanceof Array&&(t=[]),r instanceof Date&&(t=new Date(r-0)),r instanceof RegExp&&(t=new RegExp(r.source,r.flags)),r instanceof Function&&(t=A(r)),e.set(r,t);for(var i in r)r.hasOwnProperty(i)&&(t[i]=m(r[i],e));return t}var f=function(e,s){var t=e,i=[],_=function(){return m(t)},c=function(o){t=o,i.forEach(function(d){return d()})},a;s&&(a=s(_,c));var l=function(o){return i.push(o),function(){var d=i.indexOf(o);i.splice(d,1)}};return function(u){var o=(0,U.useState)({}),d=h()(o,2),E=d[0],g=d[1],O=a||c;return M(function(){u&&O(u);var D=l(function(){return g({})});return function(){return D()}}),[_(),O]}},T=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return function(i,_){s=s.map(function(l){return l({get:i,set:_})});var c=function(u){return function(o){_(o),u(o)}};s=[].concat(C()(s),[c]);var a=function(u){v(s,u)};return a}},v=function(e,s){var t=function i(_,c){var a=e[_],l=function(o){return i(_+1,o)};a&&a(l)(c)};t(0,s)}}}]);