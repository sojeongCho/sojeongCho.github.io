(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(19),j=c.n(r),o=(c(61),c(26)),l=c(17),d=c(93),b=c(95),h=c(94),O=c(54),u=c(91),x=c(92),p=(c(62),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),m=c(33),f=c(6),g=c(34),v=(c(63),c(3)),N=g.a.div(n||(n=Object(m.a)(["\n    padding : 20px;\n"]))),k=g.a.h4(i||(i=Object(m.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.fcolor}));function S(){return Object(v.jsx)("div",{className:"my_alert_red",children:Object(v.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})}function B(e){return Object(v.jsxs)("p",{children:["\uc7ac\uace0: ",e.jeago[e.i]]})}var w=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(f.g)().id,r=Object(f.f)(),j=Object(s.useState)(""),d=Object(l.a)(j,2),b=d[0],h=d[1],O=e.shoes.find((function(e){return e.id==a}));return Object(s.useEffect)((function(){var e=setTimeout((function(){return i(!1),function(){clearTimeout(e)}}),2e3)}),[n]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)(N,{children:[Object(v.jsx)(k,{className:"red",fcolor:"blue",children:"Detail"}),Object(v.jsx)(k,{fcolor:"red",children:"Detail"})]}),b,Object(v.jsx)("input",{onChange:function(e){h(e.target.value)}}),n?Object(v.jsx)(S,{}):null,Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(O.id+1)+".jpg",width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:O.title}),Object(v.jsx)("p",{children:O.content}),Object(v.jsx)("p",{children:O.price}),Object(v.jsx)(B,{jeago:e.jeago,i:O.id}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){!function(t){var c=Object(o.a)(e.jeago);c[t]--,e.setJeago(c)}(O.id)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){r.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},y=c(51),C=c.n(y),L=c(15);function F(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.shoes.id+1)+".jpg",width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}function T(){return Object(v.jsx)("div",{className:"load",children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4"})}var D=function(){var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),a=Object(l.a)(i,2),r=a[0],j=a[1],m=Object(s.useState)([10,11,12]),g=Object(l.a)(m,2),N=g[0],k=g[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)(d.a,{bg:"dark",variant:"dark",children:[Object(v.jsx)(d.a.Brand,{children:Object(v.jsx)(L.b,{to:"/",children:"Navbar"})}),Object(v.jsxs)(b.a,{className:"mr-auto",children:[Object(v.jsx)(b.a.Link,{as:L.b,to:"/",children:"Home"}),Object(v.jsx)(b.a.Link,{as:L.b,to:"/detail",children:"Detail"}),Object(v.jsx)(b.a.Link,{href:"#pricing",children:"Pricing"})]}),Object(v.jsxs)(h.a,{inline:!0,children:[Object(v.jsx)(O.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(v.jsx)(u.a,{variant:"outline-info",children:"Search"})]})]}),Object(v.jsxs)(f.c,{children:[Object(v.jsxs)(f.a,{exact:!0,path:"/",children:[Object(v.jsxs)(x.a,{className:"background",children:[Object(v.jsx)("h1",{children:"Hello, world!"}),Object(v.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(v.jsx)("p",{children:Object(v.jsx)(u.a,{variant:"primary",children:"Learn more"})})]}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(v.jsxs)(L.b,{className:"col-md-4",to:"/detail/"+e.id,children:[Object(v.jsx)(F,{shoes:e})," "]})}))}),!1===r?null:Object(v.jsx)(T,{}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){j(!0),C.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){var t=Object(o.a)(c);e.data.map((function(e,c){t.length-1<e.id&&t.push(e)})),n(t),j(!1)})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(v.jsx)(f.a,{path:"/detail/:id",children:Object(v.jsx)(w,{shoes:c,jeago:N,setJeago:k})}),Object(v.jsx)(f.a,{path:"/:id",children:Object(v.jsx)("div",{children:"\uc544\ubb34\uac70\ub098\uc801\uc5c8\uc744\ub54c \uc5ec\uae30 \ubcf4\uc5ec\uc8fc\uc138\uc694"})})]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(L.a,{children:Object(v.jsx)(D,{})})}),document.getElementById("root")),J()}},[[88,1,2]]]);
//# sourceMappingURL=main.0abb7715.chunk.js.map