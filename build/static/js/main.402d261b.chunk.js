(this.webpackJsonpcriptomonedas=this.webpackJsonpcriptomonedas||[]).push([[0],{25:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c,a,s,i,r,o,l,d,j,b,u,p,m=t(1),f=t.n(m),O=t(18),x=t.n(O),h=(t(25),t(5)),v=t(2),g=t(3),k=t.p+"static/media/cryptomonedas.51f1d2ed.png",w=t(6),y=t.n(w),N=t(8),S=t(0),E=g.a.label(c||(c=Object(v.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]))),C=g.a.select(a||(a=Object(v.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n"]))),z=function(e,n,t){var c=Object(m.useState)(n),a=Object(h.a)(c,2),s=a[0],i=a[1];return[s,function(){return Object(S.jsxs)(m.Fragment,{children:[Object(S.jsx)(E,{children:e}),Object(S.jsxs)(C,{onChange:function(e){return i(e.target.value)},value:s,children:[Object(S.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(e){return Object(S.jsx)("option",{value:e.code,children:e.name},e.code)}))]})]})},i]},D=g.a.label(s||(s=Object(v.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 2.4rem;\n    margin-top: 2rem;\n    display: block;\n"]))),A=g.a.select(i||(i=Object(v.a)(["\n    width: 100%;\n    display: block;\n    padding: 1rem;\n    -webkit-appearance: none;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.2rem;\n    color: #000;\n"]))),I=function(e,n,t){var c=Object(m.useState)(n),a=Object(h.a)(c,2),s=a[0],i=a[1];return[s,function(){return Object(S.jsxs)(m.Fragment,{children:[Object(S.jsx)(D,{children:e}),Object(S.jsxs)(A,{onChange:function(e){return i(e.target.value)},value:s,children:[Object(S.jsx)("option",{value:"",children:"- Seleccione -"}),t.map((function(e){return Object(S.jsx)("option",{value:e.CoinInfo.Name,children:e.CoinInfo.FullName},e.CoinInfo.Id)}))]})]})},i]},F=t(9),L=t.n(F),P=g.a.p(r||(r=Object(v.a)(["\n    background-color: #b7322c;\n    padding: 1rem;\n    color: white;\n    font-size: 30px;\n    text-transform: uppercase;\n    font-weight: bold;\n    text-align: center;\n    font-family: 'Bebas Neue', cursive;\n"]))),U=function(e){var n=e.mensaje;return Object(S.jsxs)(P,{children:["  ",n,"  "]})},B=g.a.input(o||(o=Object(v.a)(["\n    margin-top: 20px;\n    font-weight: bold;\n    font-size: 20px;\n    padding: 10px;\n    background-color: #66a2fe;\n    border: none;\n    width: 100%;\n    border-radius: 10px;\n    color: #fff;\n    transition: background-color .3s ease;\n\n    &:hover{\n        background-color: #326ac0;\n        cursor: pointer;\n    }\n"]))),R=function(e){var n=e.saveResult,t=e.saveShowResult,c=e.saveLoading,a=Object(m.useState)([]),s=Object(h.a)(a,2),i=s[0],r=s[1],o=z("Elige tu Moneda","",[{code:"USD",name:"Dolar de Estados Unidos"},{code:"MXN",name:"Peso Mexicano"},{code:"EUR",name:"Euro"},{code:"GBP",name:"Libra Esterlina"}]),l=Object(h.a)(o,2),d=l[0],j=l[1],b=I("Elige tu Criptomoneda","",i),u=Object(h.a)(b,2),p=u[0],f=u[1],O=Object(m.useState)(!1),x=Object(h.a)(O,2),v=x[0],g=x[1];Object(m.useEffect)((function(){(function(){var e=Object(N.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,L.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,r(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(S.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),""!==d&&""!==p)?(g(!1),function(){var e=Object(N.a)(y.a.mark((function e(){var t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(p,"&tsyms=").concat(d),e.next=3,L.a.get(t);case 3:c=e.sent,n(c.data.DISPLAY[p][d]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),c(!0),setTimeout((function(){c(!1),t(!0)}),3e3)):g(!0)},children:[v?Object(S.jsx)(U,{mensaje:"Ambos campos son obligatorios"}):null,Object(S.jsx)(j,{}),Object(S.jsx)(f,{}),Object(S.jsx)(B,{type:"submit",value:"Calcular"})]})},T=g.a.div(l||(l=Object(v.a)(["\n    color: #fff;\n    font-size: 18px!important;\n    font-family: Arial, Helvetica, sans-serif;\n"]))),H=g.a.p(d||(d=Object(v.a)(["\n    font-size: 30px!important;\n    /* margin-bottom: 0; */\n    span{\n            font-weight: bold;\n        }\n"]))),M=g.a.p(j||(j=Object(v.a)(["\n        span{\n            font-weight: bold;\n        }\n"]))),G=function(e){var n=e.result,t=n.LOWDAY,c=n.PRICE,a=n.HIGHDAY,s=n.CHANGEPCT24HOUR,i=n.LASTUPDATE;return Object(S.jsxs)(T,{children:[Object(S.jsxs)(H,{children:["El precio es: ",Object(S.jsx)("span",{children:c})," "]}),Object(S.jsxs)(M,{children:["El precio mas alto del dia: ",Object(S.jsx)("span",{children:a})," ",Object(S.jsx)("br",{}),"El precio mas bajo del dia: ",Object(S.jsx)("span",{children:t}),"  ",Object(S.jsx)("br",{}),"Variacion ultimas 24 horas: ",Object(S.jsxs)("span",{children:[s,"%"]})," ",Object(S.jsx)("br",{}),"Ultima actualizacion: ",Object(S.jsx)("span",{children:i})]})]})},Y=(t(49),function(){return Object(S.jsxs)("div",{className:"sk-circle",children:[Object(S.jsx)("div",{className:"sk-circle1 sk-child"}),Object(S.jsx)("div",{className:"sk-circle2 sk-child"}),Object(S.jsx)("div",{className:"sk-circle3 sk-child"}),Object(S.jsx)("div",{className:"sk-circle4 sk-child"}),Object(S.jsx)("div",{className:"sk-circle5 sk-child"}),Object(S.jsx)("div",{className:"sk-circle6 sk-child"}),Object(S.jsx)("div",{className:"sk-circle7 sk-child"}),Object(S.jsx)("div",{className:"sk-circle8 sk-child"}),Object(S.jsx)("div",{className:"sk-circle9 sk-child"}),Object(S.jsx)("div",{className:"sk-circle10 sk-child"}),Object(S.jsx)("div",{className:"sk-circle11 sk-child"}),Object(S.jsx)("div",{className:"sk-circle12 sk-child"})]})}),J=g.a.div(b||(b=Object(v.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width: 992px){\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    column-gap: 2rem;\n  }\n"]))),V=g.a.img(u||(u=Object(v.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]))),W=g.a.h1(p||(p=Object(v.a)(["\nfont-family: 'Bebas Neue', cursive;\ncolor: #fff;\ntext-align: left;\nfont-weight: 700;\nfont-size: 50px;\nmargin-bottom: 50px;\nmargin-top: 80px;\n\n&::after{\n  content: '';\n  width: 100px;\n  height: 6px;\n  background-color: #66A2FE;\n  display: block;\n}\n"])));var X=function(){var e,n=Object(m.useState)({}),t=Object(h.a)(n,2),c=t[0],a=t[1],s=Object(m.useState)(!1),i=Object(h.a)(s,2),r=i[0],o=i[1],l=Object(m.useState)(!1),d=Object(h.a)(l,2),j=d[0],b=d[1];return e=!1!==r?Object(S.jsx)(G,{result:c}):null,Object(S.jsxs)(J,{children:[Object(S.jsx)("div",{children:Object(S.jsx)(V,{src:k,alt:"imagen-crypto"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(W,{children:"Cotiza tu criptomoneda al instante"}),Object(S.jsx)(R,{saveResult:a,saveShowResult:o,saveLoading:b}),j?Object(S.jsx)(Y,{}):null,j?null:e]})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),s(e),i(e)}))};x.a.render(Object(S.jsx)(f.a.StrictMode,{children:Object(S.jsx)(X,{})}),document.getElementById("root")),q()}},[[50,1,2]]]);
//# sourceMappingURL=main.402d261b.chunk.js.map