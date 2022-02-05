(this.webpackJsonpcreactive=this.webpackJsonpcreactive||[]).push([[0],{43:function(n,e,t){n.exports=t(76)},76:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),i=t(40),c=t.n(i),o=t(5),l=t(9),u=t(23),s=function(n,e){for(var t={},r=function(){var r=i[a];t=Object(o.a)(Object(o.a)({},t),{},Object(u.a)({},r,(function(t){return n(e[r](t))})))},a=0,i=Object.keys(e);a<i.length;a++)r();return t},d=function(n,e){var t=e.payload;switch(e.type){case"setItems":return Object(o.a)(Object(o.a)({},n),{},{items:t});case"setFilters":return Object(o.a)(Object(o.a)({},n),{},{filters:t});case"setPreviewId":return Object(o.a)(Object(o.a)({},n),{},{previewId:t});default:return n}},p={setItems:function(n){return{type:"setItems",payload:n}},setFilter:function(n){return{type:"setFilters",payload:n}},setPreviewId:function(n){return{type:"setPreviewId",payload:n}}},b=function(n,e){var t=e.payload;switch(e.type){case"setItems":return Object(o.a)(Object(o.a)({},n),{},{items:t});case"setSearchTerm":return Object(o.a)(Object(o.a)({},n),{},{searchTerm:t});case"setPreviewId":return Object(o.a)(Object(o.a)({},n),{},{previewId:t});default:return n}},g={setItems:function(n){return{type:"setItems",payload:n}},setSearchTerm:function(n){return{type:"setSearchTerm",payload:n}},setPreviewId:function(n){return{type:"setPreviewId",payload:n}}},f={gallery:{items:[],previewId:null,filters:{tag:null}},drummery:{items:[],previewId:null,searchTerm:""}},m=function(n,e){return{gallery:d(n.gallery,e),drummery:b(n.drummery,e)}},h=function(n){return{gallery:s(n,p),drummery:s(n,g)}},O=Object(r.createContext)(),j=function(){var n=Object(r.useContext)(O),e=Object(l.a)(n,2),t=e[0],a=e[1];return{state:t,actions:h(a),getters:{}}},x=function(n){var e=n.reducer,t=n.initialState,i=n.children;return a.a.createElement(O.Provider,{value:Object(r.useReducer)(e,t)},i)},v=function(n){return a.a.createElement(x,Object(o.a)({initialState:f,reducer:m},n))},y=t(29),w=t(7),k=t(18),L=t(13),E=t.n(L),C=t(20),S=t(30);t(49),t(77);S.a.initializeApp({apiKey:"AIzaSyAyx-df9Cu8urdFWuGQ6MvpHTQ0TP4DQMA",authDomain:"creactive-83d83.firebaseapp.com",projectId:"creactive-83d83",storageBucket:"creactive-83d83.appspot.com",messagingSenderId:"830095493844",appId:"1:830095493844:web:7bdcbb60815ea28028c941",measurementId:"G-V83CR1NW09"});var I,D=S.a.firestore(),P=(S.a.database(),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],i=t[1];Object(r.useEffect)((function(){return function(){return a&&clearTimeout(a)}}),[a]);var c=function(e,t){return i(setTimeout(e,"undefined"===typeof t?n:t))};return[a,c]}),z=function(n,e){return[function(n){var e=localStorage.getItem(n);return e?JSON.parse(e):null}(n)||e,function(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(t){console.error("localStorage error:",t)}}]},A=D.collection("photos"),T=D.collection("drums"),M={fetchPhotos:function(){var n=Object(C.a)(E.a.mark((function n(){var e;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.next=3,A.get().then((function(n){n.forEach((function(n){var t=n.data(),r=t.title,a=t.description,i=t.url,c=t.vertical;e.push({id:n.id,title:r,description:a,url:i,vertical:c})}))}));case 3:return n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),fetchDrumSnippets:function(){var n=Object(C.a)(E.a.mark((function n(){var e,t,r,a,i,c,o,u,s,d=arguments;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d.length>0&&void 0!==d[0]&&d[0],e=[],t=z("drums",[]),r=Object(l.a)(t,2),a=r[0],i=r[1],c=z("drumsFetchedAt",0),o=Object(l.a)(c,2),u=o[0],s=o[1],!(u<Date.now()-864e4)){n.next=15;break}return n.prev=5,n.next=8,T.get().then((function(n){n.forEach(function(){var n=Object(C.a)(E.a.mark((function n(t){var r,a,i,c,o,l,u;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=t.data(),i=a.title,c=a.description,o=a.tags,l=a.tempo,u=a.createdAt,e.push({id:t.id,title:i,description:c,tags:o,patterns:[],tempo:l,createdAt:null!==(r=null===u||void 0===u?void 0:u.seconds)&&void 0!==r?r:0});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}));case 8:i(e),s(Date.now()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),console.error("Fetch items error: ",n.t0);case 15:return n.abrupt("return",e.length?e:a);case 16:case"end":return n.stop()}}),n,null,[[5,12]])})));return function(){return n.apply(this,arguments)}}(),fetchPatterns:function(){var n=Object(C.a)(E.a.mark((function n(e){var t,r,a,i,c,o,u,s,d;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=z("drums",[]),r=Object(l.a)(t,2),a=r[0],i=r[1],c=a.findIndex((function(n){return n.id===e.id})),n.prev=2,n.next=5,T.doc(e.id).get();case 5:if(n.t2=u=n.sent.data(),n.t1=null===n.t2,n.t1){n.next=9;break}n.t1=void 0===u;case 9:if(!n.t1){n.next=13;break}n.t3=void 0,n.next=14;break;case 13:n.t3=u.patterns;case 14:if(n.t4=o=n.t3,n.t0=null!==n.t4,!n.t0){n.next=18;break}n.t0=void 0!==o;case 18:if(!n.t0){n.next=22;break}n.t5=o,n.next=23;break;case 22:n.t5=[];case 23:if(0!==(s=n.t5).length){n.next=26;break}return n.abrupt("return",[]);case 26:return n.next=28,Promise.all(s.map((function(n){return n.get()})));case 28:d=n.sent,a[c].patterns=d.map((function(n){return n.data()})),i(Object(k.a)(a)),n.next=36;break;case 33:n.prev=33,n.t6=n.catch(2),console.error("Fetch patterns error: ",n.t6);case 36:return n.abrupt("return",a[c].patterns);case 37:case"end":return n.stop()}}),n,null,[[2,33]])})));return function(e){return n.apply(this,arguments)}}()},B=t(4),R=t(3),F=t(41),N=t.n(F),H=Object(r.createContext)(null),J=function(n){var e=n.children,t=Object(r.useRef)(null);return Object(r.useEffect)((function(){return function(){var n;return null===(n=t.current)||void 0===n?void 0:n.stopPlayLoop}}),[]),Object(R.b)(H.Provider,{value:t},e,Object(R.b)("div",{css:Object(R.a)(I||(I=Object(B.a)(["\n          text-align: right;\n          margin: 32px 16px 0;\n          pointer-events: none;\n\n          @media (min-width: 768px) {\n            position: fixed;\n            bottom: 0;\n            right: 16px;\n            margin: 0;\n          }\n        "])))},Object(R.b)(N.a,{ref:t,appElementName:"root",drums:[227,3311,3310,173]})))},Q=function(n){var e=n.DataService;return function(){return a.a.createElement(J,null,a.a.createElement(ve,{useDrummeryContext:function(){return function(n){var e=j(),t=e.state.drummery,a=t.items,i=t.previewId,c=t.searchTerm,o=e.actions.drummery,u=o.setItems,s=o.setPreviewId,d=o.setSearchTerm,p=Object(r.useState)(!0),b=Object(l.a)(p,2),g=b[0],f=b[1],m=Object(r.useState)(a),h=Object(l.a)(m,2),O=h[0],x=h[1],v=null===a||void 0===a?void 0:a.sort((function(n,e){return e.createdAt-n.createdAt}))[0],y=a.find((function(n){return n.id===i}));return Object(r.useEffect)((function(){var e=!1,t=function(){var t=Object(C.a)(E.a.mark((function t(){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.fetchDrumSnippets();case 3:r=t.sent,e||(u(r),x(r),f(!1)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to fetch data.\n",t.t0),e||f(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return f(!0),s(null),t(),function(){e=!0}}),[]),Object(r.useEffect)((function(){c||x(a);var n=c.toLowerCase();x(Object(k.a)(a.filter((function(e){var t=e.tags,r=e.title;return(null===t||void 0===t?void 0:t.includes(n))||(null===r||void 0===r?void 0:r.toLowerCase().includes(n))}))))}),[c,a]),Object(r.useEffect)((function(){var e=!1;return function(){var t=Object(C.a)(E.a.mark((function t(){var r,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=12;break}if(r=Object(k.a)(a),c=r.map((function(n){return n.id})).indexOf(i),!r[c].patterns.length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,n.fetchPatterns(r[c]);case 7:if(o=t.sent,!e){t.next=10;break}return t.abrupt("return");case 10:r[c].patterns=o,u(r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[i]),{items:O.sort(G),featuredItem:v,previewItem:y,setPreviewId:s,setSearchTerm:d,meta:{loading:g}}}(e)}}))}},G=function(n,e){return n.title.toLowerCase()===e.title.toLowerCase()?0:n.title.toLowerCase()<e.title.toLowerCase()?-1:1},W=t(12);t.p;var K,V,Z=["svgRef","title"];function _(){return(_=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function q(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var U=function(n){var e=n.svgRef,t=n.title,r=q(n,Z);return a.a.createElement("svg",_({height:24,viewBox:"0 0 24 24",width:24,ref:e},r),t?a.a.createElement("title",null,t):null,K||(K=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),V||(V=a.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))},X=a.a.forwardRef((function(n,e){return a.a.createElement(U,_({svgRef:e},n))}));t.p;t.p;var Y,$,nn=["svgRef","title"];function en(){return(en=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function tn(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var rn=function(n){var e=n.svgRef,t=n.title,r=tn(n,nn);return a.a.createElement("svg",en({height:24,viewBox:"0 0 24 24",width:24,ref:e},r),t?a.a.createElement("title",null,t):null,Y||(Y=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),$||($=a.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))},an=a.a.forwardRef((function(n,e){return a.a.createElement(rn,en({svgRef:e},n))}));t.p;t.p;t.p;t.p;var cn,on=["svgRef","title"];function ln(){return(ln=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function un(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var sn,dn,pn,bn,gn,fn,mn,hn,On,jn,xn,vn,yn,wn,kn,Ln,En,Cn,Sn,In,Dn,Pn,zn,An,Tn,Mn,Bn,Rn,Fn,Nn,Hn,Jn,Qn,Gn,Wn,Kn,Vn,Zn,_n,qn,Un,Xn,Yn,$n,ne,ee,te=function(n){var e=n.svgRef,t=n.title,r=un(n,on);return a.a.createElement("svg",ln({viewBox:"0 0 32 32",width:24,height:24,ref:e},r),t?a.a.createElement("title",null,t):null,cn||(cn=a.a.createElement("g",{"data-name":"Layer 2",id:"Layer_2"},a.a.createElement("path",{d:"M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"}))))},re=a.a.forwardRef((function(n,e){return a.a.createElement(te,ln({svgRef:e},n))})),ae=(t.p,["color"]),ie=["color","right","up","down"],ce=["align","valign","wide","wrap","grow"],oe=["align","valign"],le=["filled","ninja"],ue={red:"#ED3C19",orange:"#D95D39",orangeDark:"#AB3F21",orangeLight:"#DE7254",yellow:"#F9C926",yellowDark:"#DBA906",yellowLight:"#FBD760",green:"#2E8269",greenDark:"#205A4A",greenLight:"#35977A",greenLighter:"#69A197",white:"#F1FAEA",black:"#1B1B1A",grayLighter:"#D0DCDB",grayLight:"#7DA19E",gray:"#455F5D",grayDark:"#2B3B3A",darken:function(n){return ue["".concat(Object.keys(ue).find((function(e){return ue[e]===n})),"Dark")]||n},lighten:function(n){return ue["".concat(Object.keys(ue).find((function(e){return ue[e]===n})),"Light")]||n}},se=function(n){var e=n.color,t=void 0===e?ue.white:e,r=Object(W.a)(n,ae);return Object(R.b)(X,Object.assign({css:Object(R.a)(sn||(sn=Object(B.a)(["\n        fill: ",";\n      "])),t)},r))},de=function(n){var e=n.color,t=void 0===e?ue.white:e;return Object(R.b)(an,{css:Object(R.a)(dn||(dn=Object(B.a)(["\n        fill: ",";\n      "])),t)})},pe=function(n){var e=n.color,t=void 0===e?ue.white:e,r=n.right,a=void 0!==r&&r,i=n.up,c=void 0!==i&&i,o=n.down,l=void 0!==o&&o,u=Object(W.a)(n,ie);return Object(R.b)(re,Object.assign({css:Object(R.a)(pn||(pn=Object(B.a)(["\n        transform: rotate(\n          ","deg\n        );\n        fill: ",";\n      "])),90*Number(c)+180*Number(a)+270*Number(l),t)},u))},be=function(n){var e=n.align,t=void 0===e?"":e,r=n.valign,a=void 0===r?"":r,i=n.wide,c=void 0!==i&&i,o=n.wrap,l=void 0!==o&&o,u=n.grow,s=void 0===u?"":u,d=Object(W.a)(n,ce);return Object(R.b)("div",Object.assign({css:Object(R.a)(bn||(bn=Object(B.a)(["\n      display: flex;\n      justify-content: ",";\n      align-items: ",";\n      ","\n      width: ",";\n      ","\n    "])),t||"space-between",a||"flex-start",s&&"flex-grow: ".concat(s,";"),c?"100%":"auto",l&&"flex-wrap: wrap;")},d))},ge=function(n){var e=n.align,t=n.valign,r=Object(W.a)(n,oe);return Object(R.b)("div",Object.assign({css:Object(R.a)(gn||(gn=Object(B.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: ",";\n      align-items: ",";\n    "])),t||"flex-start",e||"flex-start")},r))},fe=function(n){return Object(R.b)("div",Object.assign({css:Object(R.a)(fn||(fn=Object(B.a)(["\n      font-family: 'Consolas';\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      color: ",";\n      width: 100%;\n      padding: 0;\n      margin: 0 auto;\n      position: relative;\n\n      p,\n      button,\n      a,\n      label,\n      span,\n      div,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5 {\n        font-family: 'Consolas';\n      }\n\n      main {\n        padding: 24px 0 48px;\n\n        @media (min-width: 768px) {\n          padding: 64px 0 48px;\n        }\n      }\n\n      header {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        z-index: 999;\n\n        @media (min-width: 768px) {\n          top: 0;\n          bottom: unset;\n        }\n      }\n\n      div {\n        box-sizing: border-box;\n      }\n\n      label {\n        display: inline-flex;\n        flex-direction: column;\n        color: ",";\n\n        span:first-of-type {\n          min-height: 19px;\n        }\n      }\n\n      textarea,\n      input {\n        background: ",";\n        color: ",";\n        border-radius: 4px;\n        border: 2px solid ",";\n        padding: 8px;\n        min-width: 24px;\n        font: 700 24px Consolas;\n        line-height: 36px;\n\n        &::placeholder {\n          color: ",";\n          font-weight: 400;\n        }\n\n        &:focus {\n          outline: "," auto 1px;\n        }\n      }\n\n      input {\n        height: 24px;\n      }\n\n      input:disabled {\n        color: ",";\n      }\n\n      .InputDisabled {\n        background: ",";\n        opacity: 0.8;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n      }\n\n      input[type='checkbox'] {\n        width: 24px;\n        height: 24px;\n      }\n\n      p {\n        font-size: 18px;\n        line-height: 24px;\n        letter-spacing: -0.6px;\n        font-weight: 300;\n        margin: 0 0 12px;\n        color: ",";\n      }\n\n      a {\n        cursor: pointer;\n      }\n    "])),ue.black,ue.grayLight,ue.grayDark,ue.grayLighter,ue.grayLight,ue.gray,ue.yellowDark,ue.grayLight,ue.gray,ue.grayLighter)},n))},me=function(n){var e=n.checked,t=n.onClick,r=n.children,a=n.ariaLabel,i=n.className,c=n.disabled;return Object(R.b)(he,{ninja:!0,"aria-label":a,role:"checkbox",onClick:t,css:Object(R.a)(mn||(mn=Object(B.a)(["\n      align-items: center;\n    "]))),disabled:c},Object(R.b)("div",{css:Object(R.a)(hn||(hn=Object(B.a)(["\n        border-radius: 50%;\n        border: 2px solid ",";\n        width: 24px;\n        height: 24px;\n        margin-right: 16px;\n        position: relative;\n\n        ","\n        @media (min-width: 768px) {\n          :hover {\n            border-color: ",";\n          }\n        }\n\n        ","\n      "])),ue.yellow,e&&"\n          :after {\n            background: ".concat(ue.yellow,";\n            position: absolute;\n            margin: 3px;\n            top: 0;\n            left: 0;\n            content: '';\n            border-radius: 50%;\n            height: 14px;\n            width: 14px;\n          }\n        "),ue.grayLight,c&&"\n        cursor: arrow;\n        border-color: ".concat(ue.grayLight," !important;\n        :after{\n           background: ").concat(ue.grayLight," !important;\n        }\n        ")),className:i}),r)},he=function(n){var e=n.filled,t=n.ninja,r=Object(W.a)(n,le);return t?Object(R.b)("button",Object.assign({css:Object(R.a)(On||(On=Object(B.a)(["\n        background: none;\n        border: none;\n        display: flex;\n        margin: 0;\n        padding: 0;\n        ","\n        color: ",";\n      "])),!r.disabled&&"cursor: pointer;",ue.white)},r)):Object(R.b)("button",Object.assign({css:Object(R.a)(jn||(jn=Object(B.a)(["      \n    border-radius: 4px;\n    border: ",";\n    font: 500 24px Consolas;\n    line-height: 36px;\n    background: ",";\n    font-weight: 700;\n    outline: none;\n    display: flex;\n    justify-content: center;\n    padding: 3px 16px;\n    ","\n\n    :hover {\n      background ","\n    }\n\n    ","\n  "])),"1px solid ".concat(e?ue.yellowLight:ue.grayLight),e?ue.yellowLight:"none",!r.disabled&&"cursor: pointer;",e?ue.yellow:ue.black+"44",r.disabled&&"\n      background: ".concat(e?ue.gray:"none",";\n      border-color: ").concat(ue.gray,";\n    "))},r))},Oe=function(n){return Object(R.b)("h3",Object.assign({css:Object(R.a)(xn||(xn=Object(B.a)(["\n      color: ",";\n      text-transform: uppercase;\n      letter-spacing: 1.5px;\n      font-size: 18px;\n      line-height: 36px;\n      margin: 24px 0 6px;\n    "])),ue.gray)},n))},je=function(n){return Object(R.b)("div",Object.assign({css:Object(R.a)(vn||(vn=Object(B.a)(["\n      display: flex;\n      align-items: flex-start;\n      padding: 0 8px;\n      width: 100%;\n      max-width: 1392px;\n      margin: 0 auto;\n\n      @media (min-width: 768px) {\n        padding: 12px 8px 0;\n      }\n    "])))},n))},xe=function(n){return Object(R.b)("div",Object.assign({css:Object(R.a)(yn||(yn=Object(B.a)(["\n      display: flex;\n      flex-direction: column;\n      padding: 0 8px;\n      width: 100%;\n\n      @media (min-width: 768px) {\n        width: 40%;\n      }\n\n      @media (min-width: 1024px) {\n        width: 50%;\n      }\n    "])))},n))},ve=function(n){var e=(0,n.useDrummeryContext)(),t=e.items,r=e.featuredItem,i=e.previewItem,c=e.setPreviewId,o=e.setSearchTerm,l=e.meta.loading,u=Object(k.a)(Array(9)).map((function(n,e){return{id:"p-".concat(e)}}));return Object(R.b)(je,null,Object(R.b)(xe,null,r&&Object(R.b)(a.a.Fragment,null,Object(R.b)(Oe,null,"Recently added"),Object(R.b)(Ce,{featured:!0,key:r.id,item:r,onClick:function(){return c(r.id===(null===i||void 0===i?void 0:i.id)?null:r.id)}})),Object(R.b)(Oe,null,"All rhythms"),(t.length?t:u).map((function(n){return Object(R.b)(Ce,{key:n.id,item:n,loading:l,onClick:function(){return c(n.id===(null===i||void 0===i?void 0:i.id)?null:n.id)},selected:n.id===(null===i||void 0===i?void 0:i.id)})}))),i&&Object(R.b)(Fe,{onClose:function(){return c(null)},item:i,onTagClick:o}))},ye=function(n){var e=n.tags,t=n.dimmed,r=n.onClick;return(null===e||void 0===e?void 0:e.length)?Object(R.b)("ul",{css:Object(R.a)(wn||(wn=Object(B.a)(["\n        list-style: none;\n        margin: 0 -4px;\n        padding: 0;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n\n        ","\n      "])),t&&"\n        height: 30px;\n        overflow: hidden;\n      ")},e.map((function(n){return Object(R.b)("li",{role:t?"list-item":"button","aria-label":n,onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){return t?null:r(n)})),key:n,css:Object(R.a)(kn||(kn=Object(B.a)(["\n            ",";\n            margin: 0 4px 8px;\n            color: ",";\n            padding: 3px 6px;\n            background: ",";\n            border: 1px solid ","66;\n            ",";\n            text-shadow: 0 0 4px ","44;\n            box-shadow: 0 0 4px 0 ","44;\n            border-radius: 4px;\n            font-size: 14px;\n            line-height: 14px;\n\n            ","\n          "])),!t&&"cursor: pointer",t?ue.grayLight:ue.black,t?"transparent":ue.yellowLight,t?ue.grayDark:ue.yellowLight,!t&&"font-weight: 700",ue.gray,ue.gray,!t&&":hover {\n              background: ".concat(ue.yellow,";\n            }"))},n)}))):null},we=["onClick","selected","loading","featured"],ke=function(n){var e=n.onClick,t=n.selected,r=n.loading,a=n.featured,i=Object(W.a)(n,we);return Object(R.b)(he,Object.assign({ninja:!0,onClick:e,css:Object(R.a)(Ln||(Ln=Object(B.a)(["\n        color: ",";\n        margin: 0 0 12px;\n        border-radius: 4px;\n        line-height: 14px;\n        position: relative;\n        height: min-content;\n        width: 100%;\n        min-width: 240px;\n        ","\n        background: ",";\n        ","\n        padding: 12px 8px;\n        border: 2px solid ",";\n        transition: transform 150ms ease-out;\n\n        ","\n\n        :hover {\n          background: ","cc;\n        }\n      "])),ue.grayLighter,r&&"pointer-events: none;",a?ue.yellow+"0B":r?ue.gray+"22":t?ue.gray:ue.gray+"44",a&&"box-shadow: 0 0 3px ".concat(ue.yellow,"BB;"),r?ue.gray+"44":ue.gray+"66",t&&"transform: scale(1.03);",ue.gray)},i))},Le=function(n){return Object(R.b)("h4",Object.assign({css:Object(R.a)(En||(En=Object(B.a)(["\n      margin: 8px 8px 0;\n      font-size: 18px;\n      line-height: 24px;\n      text-align: left;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      text-shadow: 0 0 4px ","88;\n    "])),ue.black)},n))},Ee=function(){return Object(R.b)("div",{css:Object(R.a)(Cn||(Cn=Object(B.a)(["\n      height: 90px;\n      width: 100%;\n    "])))})},Ce=function(n){var e=n.featured,t=void 0!==e&&e,r=n.item,a=r.title,i=r.tags,c=n.loading,o=void 0!==c&&c,l=n.onClick,u=n.selected,s=void 0!==u&&u;return Object(R.b)(ke,{onClick:l,loading:o,selected:s,featured:t},o?Object(R.b)(Ee,null):Object(R.b)(ge,null,Object(R.b)(ye,{dimmed:!0,tags:i}),Object(R.b)(Le,null,a)))},Se=function(n){var e=n.playLoop,t=n.stopLoop,r=n.metronome,a=n.setMetronome,i=n.tempo,c=n.setTempo,o=n.disabled;return Object(R.b)(be,{align:"flex-start",wrap:!0,css:Object(R.a)(Sn||(Sn=Object(B.a)(["\n      margin: 24px 16px 0;\n\n      @media (min-width: 768px) {\n        margin: 24px 32px 0;\n        justify-content: space-between;\n      }\n\n      > * {\n        margin-bottom: 24px;\n      }\n    "])))},Object(R.b)(be,null,Object(R.b)(he,{filled:!0,onClick:e,disabled:o},"Play"),Object(R.b)(he,{filled:!0,onClick:t,css:Object(R.a)(In||(In=Object(B.a)(["\n          margin: 0 64px 0 8px;\n        "]))),disabled:o},"Stop")),Object(R.b)(be,null,Object(R.b)("input",{type:"text",maxLength:3,value:i,disabled:o,css:Object(R.a)(Dn||(Dn=Object(B.a)(["\n          width: 44px;\n        "]))),onChange:function(n){var e=Number(n.target.value);isNaN(e)||c(e)}}),Object(R.b)("span",{css:Object(R.a)(Pn||(Pn=Object(B.a)(["\n          align-self: flex-end;\n          font-size: 24px;\n          line-height: 44px;\n          margin-left: 8px;\n        "])))},"BPM")),Object(R.b)(me,{checked:r,disabled:o,onClick:function(){return a(!r)},css:Object(R.a)(zn||(zn=Object(B.a)(["\n        margin: 0 8px 0 16px;\n      "])))},Object(R.b)("label",{css:Object(R.a)(An||(An=Object(B.a)(["\n          align-self: flex-end;\n          font-size: 24px;\n          line-height: 44px;\n          margin-right: 0 !important;\n        "])))},"metronome")))},Ie=function(n){var e=n.title,t=n.pattern,r=n.muted,a=n.setMuted;return Object(R.b)("div",{css:Object(R.a)(Tn||(Tn=Object(B.a)(["\n      padding: 18px 16px 24px;\n      border-bottom: 2px solid ","44;\n      width: 100%;\n\n      @media (min-width: 1024px) {\n        padding: 24px 16px;\n      }\n\n      @media (min-width: 1024px) {\n        padding: 24px;\n      }\n    "])),ue.grayLight)},Object(R.b)(be,{align:"flex-start",valign:"center",css:Object(R.a)(Mn||(Mn=Object(B.a)(["\n        margin-bottom: 8px;\n      "])))},Object(R.b)(me,{ariaLabel:"".concat(e," track ").concat(r?"off":"on"),onClick:function(){return a(!r)},checked:!r,disabled:!t}),Object(R.b)("div",{css:Object(R.a)(Bn||(Bn=Object(B.a)(["\n          color: ",";\n        "])),ue.gray)},e)),t?Object(R.b)(De,{pattern:t}):Object(R.b)("div",{css:Object(R.a)(Rn||(Rn=Object(B.a)(["\n          height: 72px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: ",";\n          @media (min-width: 768px) {\n            height: 48px;\n          }\n        "])),ue.gray)},"..."))},De=function(n){var e,t=n.pattern,r=t.length;t.length%6===0?r=6:t.length%8===0?r=8:t.length%9===0&&(r=9);var a="|".concat(null===t||void 0===t||null===(e=t.match(RegExp(".{1,".concat(r,"}"),"g")))||void 0===e?void 0:e.join("|"),"|");return Object(R.b)("div",{css:Object(R.a)(Fn||(Fn=Object(B.a)(["\n        height: 48px;\n        font-size: 24px;\n        line-height: 36px;\n        max-width: 252px;\n\n        @media (min-width: 768px) {\n          font-size: 22px;\n          max-width: 452px;\n          line-height: 48px;\n        }\n\n        @media (min-width: 1440px) {\n          font-size: 40px;\n          line-height: 48px;\n          max-width: 816px;\n        }\n      "])))},a)},Pe=function(n){var e,t,a,i=n.tracks,c=void 0===i?[]:i,o=n.initialMetronome,u=void 0===o||o,s=n.initialTempo,d=void 0===s?110:s,p=Object(r.useContext)(H),b=Object(r.useState)(d),g=Object(l.a)(b,2),f=g[0],m=g[1],h=Object(r.useState)({}),O=Object(l.a)(h,2),j=O[0],x=O[1],v=Object(r.useState)(u),y=Object(l.a)(v,2),w=y[0],L=y[1],E=Object(r.useState)(!1),C=Object(l.a)(E,2),S=C[0],I=C[1];Object(r.useEffect)((function(){f!==d&&m(d),w!==u&&L(u),j!=={}&&x({}),0===c.length?M():S&&T()}),[c]),Object(r.useEffect)((function(){S&&f>=40&&f<=200&&T()}),[f,j,w]);var D=null!==(e=null===(t=c.sort(ze)[0])||void 0===t||null===(a=t.pattern)||void 0===a?void 0:a.length)&&void 0!==e?e:0,P=D%3===0?3:4,z=function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",a=null!==(e=null===(t=c.find((function(e){return e.instrument===n})))||void 0===t?void 0:t.pattern)&&void 0!==e?e:null;if(!a)return[];for(var i=a.repeat(D/a.length),o=[],l=0;l<i.length;l+=1)o.push(i[l]===r);return o},A=[!j.bell&&z("bell"),!j.sangban&&z("sangban","o"),!j.sangban&&z("sangban","x"),w&&Object(k.a)(Array(D)).map((function(n,e){return e%P===0})),!j.dundunba&&z("dundunba","o"),!j.dundunba&&z("dundunba","x"),!j.kenkeni&&z("kenkeni","o"),!j.kenkeni&&z("kenkeni","x"),!j.kenkeni2&&z("kenkeni2","o"),!j.kenkeni2&&z("kenkeni2","x")],T=function(){var n,e,t=Te(A,D);null===(n=p.current)||void 0===n||n.setEchoLevel(.05),null===(e=p.current)||void 0===e||e.startPlayLoop(t,P/4*f,1/16),I(!0)},M=function(){var n;null===(n=p.current)||void 0===n||n.stopPlayLoop(),I(!1)};return{playLoop:T,stopLoop:M,metronome:w,setMetronome:L,tempo:f,setTempo:m,muted:j,setMuted:x,loopLength:D}},ze=function(n,e){var t,r,a,i;return(null!==(t=null===(r=e.pattern)||void 0===r?void 0:r.length)&&void 0!==t?t:0)-(null!==(a=null===(i=n.pattern)||void 0===i?void 0:i.length)&&void 0!==a?a:0)},Ae=[227,3310,3311,173,3312,3313,3314,3315,3316,3317],Te=function(n,e){for(var t=[],r=function(){var e=[];Ae.forEach((function(t,r){n[r]&&n[r][a]&&e.push(t)})),t.push([e,[]])},a=0;a<e;a++)r();return t},Me=function(n){var e=n.tracks,t=n.metronome,r=void 0===t||t,a=n.tempo,i=Pe({tracks:e,initialMetronome:r,initialTempo:void 0===a?110:a}),c=i.playLoop,l=i.stopLoop,s=i.tempo,d=i.setTempo,p=i.muted,b=i.setMuted,g=i.metronome,f=i.setMetronome,m=i.loopLength;return Object(R.b)(Be,null,e.length?e.map((function(n,e){var t=n.title,r=n.instrument,a=n.pattern;return Object(R.b)(Ie,{key:"".concat(t).concat(r).concat(e),title:t,pattern:null===a||void 0===a?void 0:a.repeat(m/a.length),muted:p[r],setMuted:function(n){return b(Object(o.a)(Object(o.a)({},p),{},Object(u.a)({},r,n)))}})})):Object(k.a)(Array(3)).map((function(n,e){return Object(R.b)(Ie,{key:"track-".concat(e)})})),Object(R.b)(Se,{playLoop:c,stopLoop:l,metronome:g,setMetronome:f,tempo:s,setTempo:d,disabled:!e.length}))},Be=function(n){return Object(R.b)(ge,Object.assign({css:Object(R.a)(Nn||(Nn=Object(B.a)(["\n      width: 100vw;\n      background: ",";\n      color: ",";\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 24px;\n      margin: 0 -12px 24px;\n\n      @media (min-width: 768px) {\n        border-radius: 4px;\n        margin: 0 0 24px;\n        width: 100%;\n      }\n    "])),ue.black,ue.grayLight)},n))},Re=["children"],Fe=function(n){var e=n.onTagClick,t=n.onClose,r=n.item,a=r.title,i=r.description,c=r.tags,o=r.patterns,l=r.tempo;return Object(R.b)(He,null,Object(R.b)(Ge,{onClick:t}),Object(R.b)(ye,{tags:c,onClick:e}),Object(R.b)(Je,{title:a}),Object(R.b)(Qe,{description:i}),Object(R.b)(Ne,{patterns:o,tempo:l}))},Ne=function(n){var e=n.patterns,t=n.tempo;return Object(R.b)("div",null,Object(R.b)("h3",{css:Object(R.a)(Hn||(Hn=Object(B.a)(["\n        color: ",";\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n        font-size: 24px;\n        line-height: 48px;\n        margin: 24px 0 6px;\n      "])),ue.gray)},"Patterns"),Object(R.b)(Me,{tracks:e,tempo:t}))},He=function(n){var e=n.children,t=Object(W.a)(n,Re);return Object(R.b)(ge,Object.assign({valign:"center",css:Object(R.a)(Jn||(Jn=Object(B.a)(["\n      color: ",";\n      padding: 0;\n      font-size: 12px;\n      line-height: 14px;\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n      width: 100%;\n\n      @media (min-width: 768px) {\n        margin: 0 0 0 8px;\n      }\n\n      @media (min-width: 1024px) {\n        margin: 0 16px 0 24px;\n      }\n\n      @media (min-width: 1440px) {\n        margin: 0 16px 0 40px;\n      }\n    "])),ue.black)},t),Object(R.b)(ge,{css:Object(R.a)(Qn||(Qn=Object(B.a)(["\n        background: ",";\n        width: 100%;\n\n        @media (max-width: 767px) {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100vw;\n          height: 100vh;\n          padding: 24px 12px;\n          overflow-y: auto;\n        }\n      "])),ue.grayDark)},e))},Je=function(n){var e=n.title;return e?Object(R.b)("h2",{css:Object(R.a)(Gn||(Gn=Object(B.a)(["\n        margin: 0;\n        padding: 0;\n        font-size: 32px;\n        line-height: 1.5;\n        color: ",";\n        text-transform: uppercase;\n        letter-spacing: 0.8px;\n        text-shadow: 0 0 4px ","88;\n\n        @media (min-width: 768px) {\n          font-size: 40px;\n          letter-spacing: 1.4px;\n        }\n      "])),ue.white,ue.black)},e):null},Qe=function(n){var e=n.description;return e?Object(R.b)("p",{css:Object(R.a)(Wn||(Wn=Object(B.a)(["\n        text-align: left;\n        margin-bottom: 24px !important;\n      "])))},e):null},Ge=function(n){return Object(R.b)(he,Object.assign({ninja:!0,css:Object(R.a)(Kn||(Kn=Object(B.a)(["\n      color: ",";\n      margin: 0 0 24px;\n      padding: 12px 0;\n      display: flex;\n      align-items: center;\n      font-weight: 700;\n\n      @media (min-width: 768px) {\n        display: none;\n      }\n    "])),ue.grayLighter)},n),Object(R.b)(pe,{right:!0,color:ue.grayLighter,css:Object(R.a)(Vn||(Vn=Object(B.a)(["\n        margin-right: 8px;\n      "])))}),Object(R.b)("span",{css:Object(R.a)(Zn||(Zn=Object(B.a)(["\n        text-transform: uppercase;\n      "])))},"back to list"))},We=function(){var n=j(),e=n.state.drummery.searchTerm,t=n.actions.drummery.setSearchTerm,a=P(500),i=Object(l.a)(a,2),c=i[0],o=i[1],u=Object(r.useState)(e),s=Object(l.a)(u,2),d=s[0],p=s[1];return Object(r.useEffect)((function(){return p(e)}),[e]),{searchTerm:d,search:function(n){p(n),c&&clearTimeout(c),o((function(){return t(n)}))},reset:function(){return t("")}}},Ke=function(n){return Object(R.b)(be,Object.assign({valign:"center",css:Object(R.a)(_n||(_n=Object(B.a)(["\n      background: ",";\n      color: ",";\n      padding: 2px 16px;\n      box-shadow: 0 0 4px #000;\n      width: 100%;\n    "])),ue.black,ue.white)},n),Object(R.b)(be,Object.assign({wide:!0,valign:"center",css:Object(R.a)(qn||(qn=Object(B.a)(["\n        margin: 0 auto;\n        max-width: 1360px;\n      "])))},n)))},Ve=function(){return Object(R.b)("div",{css:Object(R.a)(Un||(Un=Object(B.a)(["\n      content: '|';\n      color: ",";\n      padding: 0 4px;\n      pointer-events: none;\n      cursor: normal;\n    "])),ue.grayLight)},"|")},Ze=function(){return Object(R.b)("nav",{css:Object(R.a)(Xn||(Xn=Object(B.a)(["\n      display: inline-flex;\n      margin: 0;\n      font-size: 24px;\n      line-height: 1.5;\n      font-variant: all-small-caps;\n      letter-spacing: 2px;\n\n      a {\n        padding: 0 6px;\n        text-decoration: none !important;\n        color: ",";\n      }\n\n      a:hover {\n        color: ",";\n      }\n    "])),ue.grayLight,ue.grayLighter)},Object(R.b)("h1",{css:Object(R.a)(Yn||(Yn=Object(B.a)(["\n        color: ",";\n        margin: 0;\n        font-size: inherit;\n        padding: 0 6px;\n      "])),ue.orangeDark)},"szd"),Object(R.b)(Ve,null),Object(R.b)(y.b,{to:"/drums"},"drums"))},_e=function(n){var e=n.term,t=n.onChange,r=n.reset;return Object(R.b)(be,{valign:"center"},Object(R.b)("input",{type:"text",maxLength:20,placeholder:"tag or rhythm...",value:e,onChange:function(n){return t(n.target.value)},css:Object(R.a)($n||($n=Object(B.a)(["\n        margin: 4px 0;\n        border: none !important;\n        background: ","88 !important;\n        height: 16px !important;\n        font-size: 16px !important;\n        line-height: 24px !important;\n        padding: 4px 8px;\n        width: 116px;\n\n        @media (min-width: 768px) {\n          width: 184px;\n        }\n      "])),ue.grayDark)}),Object(R.b)(he,{ninja:!0,onClick:e?r:null,css:Object(R.a)(ne||(ne=Object(B.a)(["\n        text-decoratio: underline;\n        margin: 4px;\n        padding: 4px;\n        border-radius: 50%;\n\n        :hover {\n          background: ","88;\n        }\n\n        :active {\n          background: ","cc;\n        }\n      "])),ue.grayDark,ue.grayDark)},e?Object(R.b)(de,{color:ue.grayLight}):Object(R.b)(se,{color:ue.grayLight})))},qe=function(n){var e=(0,n.useHeaderContext)(),t=e.searchTerm,r=e.search,a=e.reset;return Object(R.b)(Ke,null,Object(R.b)("div",{css:Object(R.a)(ee||(ee=Object(B.a)(["\n          width: 133px;\n          @media (max-width: 767px) {\n            display: none;\n          }\n        "])))}),Object(R.b)(_e,{term:t,onChange:r,reset:a}),Object(R.b)(Ze,null))},Ue=function(){var n=function(){return a.a.createElement(qe,{useHeaderContext:We})},e=Q({DataService:M});return a.a.createElement(y.a,{basename:"/"},a.a.createElement("header",null,a.a.createElement(n,null)),a.a.createElement("main",null,a.a.createElement(w.b,{path:"/drums",component:e}),a.a.createElement(w.a,{to:"/drums"})))},Xe=function(){return a.a.createElement(v,null,a.a.createElement(fe,null,a.a.createElement(Ue,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Xe,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fd714b06.chunk.js.map