"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{460:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),u=t(689),o=t(562),v="CastList_container__9Z7Yv",p="CastList_member__1FOxS",l=t(184),f=function(e){var r=e.idMovie,t=(0,i.useState)([]),c=(0,a.Z)(t,2),u=c[0],f=c[1],h=(0,i.useState)(!0),d=(0,a.Z)(h,2),m=d[0],x=d[1],g=(0,i.useState)(null),w=(0,a.Z)(g,2),Z=w[0],b=w[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(r);case 3:t=e.sent,f(t),x(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching cast data:",e.t0),b(e.t0),x(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),m?(0,l.jsx)("div",{children:"Loading cast data..."}):Z?(0,l.jsxs)("div",{children:["Error fetching cast data: ",Z.message]}):(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)("h2",{children:"Cast"}),(0,l.jsx)("ul",{children:u.slice(0,5).map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.profile_path),alt:e.name}),(0,l.jsx)("p",{className:p,children:e.name}),(0,l.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})},h="MovieDetailsPage_container__l5vtn",d=function(){var e=(0,u.UO)().movieId,r=(0,i.useState)({cast:[]}),t=(0,a.Z)(r,2),c=t[0],v=t[1],p=(0,i.useState)(!0),d=(0,a.Z)(p,2),m=d[0],x=d[1],g=(0,i.useState)(null),w=(0,a.Z)(g,2),Z=w[0],b=w[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.Y5)(e);case 3:t=r.sent,v(t),x(!1),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching movie data:",r.t0),b(r.t0),x(!1);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),m?(0,l.jsx)("div",{children:"Loading movie data..."}):Z?(0,l.jsxs)("div",{children:["Error fetching movie data: ",Z.message]}):(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h1",{children:"Movie Details Page"}),(0,l.jsx)(f,{idMovie:c.cast})]})}},562:function(e,r,t){t.d(r,{Hx:function(){return v},Y5:function(){return u},uV:function(){return o},wr:function(){return i}});var n=t(861),a=t(757),c=t.n(a),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"a930ab26c84d78c11b4064b5c7257e43"};var i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/movie/day");case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/credits?"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/reviews?"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=460.bdf8dd58.chunk.js.map