(this.webpackJsonpcreactive=this.webpackJsonpcreactive||[]).push([[0],{43:function(n,e,t){n.exports=t(77)},77:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),i=t(38),c=t.n(i),o=t(5),l=t(15),s=t(23),u=function(n,e){for(var t={},r=function(){var r=i[a];t=Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},r,(function(t){return n(e[r](t))})))},a=0,i=Object.keys(e);a<i.length;a++)r();return t},p=function(n,e){var t=e.payload;switch(e.type){case"setItems":return Object(o.a)(Object(o.a)({},n),{},{items:t});case"setFilters":return Object(o.a)(Object(o.a)({},n),{},{filters:t});case"setPreviewId":return Object(o.a)(Object(o.a)({},n),{},{previewId:t});default:return n}},b={setItems:function(n){return{type:"setItems",payload:n}},setFilter:function(n){return{type:"setFilters",payload:n}},setPreviewId:function(n){return{type:"setPreviewId",payload:n}}},d=function(n,e){var t=e.payload;switch(e.type){case"setItems":return Object(o.a)(Object(o.a)({},n),{},{items:t});case"setFilters":return Object(o.a)(Object(o.a)({},n),{},{filters:t});case"setPreviewId":return Object(o.a)(Object(o.a)({},n),{},{previewId:t});default:return n}},g={setItems:function(n){return{type:"setItems",payload:n}},setFilter:function(n){return{type:"setFilters",payload:n}},setPreviewId:function(n){return{type:"setPreviewId",payload:n}}},f={gallery:{items:[],previewId:null,filters:{tag:null}},drummery:{items:[],previewId:null,filters:{tag:null}}},m=function(n,e){return{gallery:p(n.gallery,e),drummery:d(n.drummery,e)}},h=function(n){return{gallery:u(n,b),drummery:u(n,g)}},j=Object(r.createContext)(),O=function(){var n=Object(r.useContext)(j),e=Object(l.a)(n,2),t=e[0],a=e[1];return{state:t,actions:h(a),getters:{}}},x=function(n){var e=n.reducer,t=n.initialState,i=n.children;return a.a.createElement(j.Provider,{value:Object(r.useReducer)(e,t)},i)},v=function(n){return a.a.createElement(x,Object(o.a)({initialState:f,reducer:m},n))},y=t(21),w=t(6),k=t(10),L=t.n(k),E=t(18),I=t(28);t(49),t(78);I.a.initializeApp({apiKey:"AIzaSyAyx-df9Cu8urdFWuGQ6MvpHTQ0TP4DQMA",authDomain:"creactive-83d83.firebaseapp.com",projectId:"creactive-83d83",storageBucket:"creactive-83d83.appspot.com",messagingSenderId:"830095493844",appId:"1:830095493844:web:7bdcbb60815ea28028c941",measurementId:"G-V83CR1NW09"});var C=I.a.firestore(),D=(I.a.database(),C.collection("photos")),P=C.collection("drums"),S={fetchPhotos:function(){var n=Object(E.a)(L.a.mark((function n(){var e;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.next=3,D.get().then((function(n){n.forEach((function(n){var t=n.data(),r=t.title,a=t.description,i=t.url,c=t.vertical;e.push({id:n.id,title:r,description:a,url:i,vertical:c})}))}));case 3:return n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),fetchDrumSnippets:function(){var n=Object(E.a)(L.a.mark((function n(){var e;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.next=3,P.get().then((function(n){n.forEach(function(){var n=Object(E.a)(L.a.mark((function n(t){var r,a,i,c,o;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.data(),a=r.title,i=r.description,c=r.tags,o=r.patterns,e.push({id:t.id,title:a,description:i,tags:c,patterns:o});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}));case 3:return n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),fetchPatterns:function(){var n=Object(E.a)(L.a.mark((function n(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===e||void 0===e?void 0:e.length){n.next=2;break}return n.abrupt("return",[]);case 2:return n.next=4,Promise.all(e.map((function(n){return n.get()})));case 4:return t=n.sent,n.abrupt("return",t.map((function(n){return n.data()})));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},A=t(4),z=t(3),F=t(7);t.p;t.p;t.p;t.p;t.p;t.p;t.p;var M,B=["svgRef","title"];function N(){return(N=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function R(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var T,H,Q,G,J,W,K,V,Z,_,q,U,X,Y,$,nn,en,tn,rn,an,cn,on,ln,sn,un,pn,bn,dn,gn,fn,mn,hn,jn,On=function(n){var e=n.svgRef,t=n.title,r=R(n,B);return a.a.createElement("svg",N({viewBox:"0 0 32 32",width:24,height:24,ref:e},r),t?a.a.createElement("title",null,t):null,M||(M=a.a.createElement("g",{"data-name":"Layer 2",id:"Layer_2"},a.a.createElement("path",{d:"M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"}))))},xn=a.a.forwardRef((function(n,e){return a.a.createElement(On,N({svgRef:e},n))})),vn=(t.p,["color","right","up","down"]),yn=["align","valign","wide","wrap","grow"],wn=["align","valign"],kn=["filled","ninja"],Ln={red:"#ED3C19",orange:"#D95D39",orangeDark:"#AB3F21",orangeLight:"#DE7254",yellow:"#F9C926",yellowDark:"#DBA906",yellowLight:"#FBD760",green:"#2E8269",greenDark:"#205A4A",greenLight:"#35977A",greenLighter:"#69A197",white:"#F1FAEA",black:"#1B1B1A",grayLighter:"#D0DCDB",grayLight:"#7DA19E",gray:"#455F5D",grayDark:"#2B3B3A",darken:function(n){return Ln["".concat(Object.keys(Ln).find((function(e){return Ln[e]===n})),"Dark")]||n},lighten:function(n){return Ln["".concat(Object.keys(Ln).find((function(e){return Ln[e]===n})),"Light")]||n}},En=function(n){var e=n.color,t=void 0===e?Ln.white:e,r=n.right,a=void 0!==r&&r,i=n.up,c=void 0!==i&&i,o=n.down,l=void 0!==o&&o,s=Object(F.a)(n,vn);return Object(z.b)(xn,Object.assign({css:Object(z.a)(T||(T=Object(A.a)(["\n        transform: rotate(\n          ","deg\n        );\n        fill: ",";\n      "])),90*Number(c)+180*Number(a)+270*Number(l),t)},s))},In=function(n){var e=n.align,t=void 0===e?"":e,r=n.valign,a=void 0===r?"":r,i=n.wide,c=void 0!==i&&i,o=n.wrap,l=void 0!==o&&o,s=n.grow,u=void 0===s?"":s,p=Object(F.a)(n,yn);return Object(z.b)("div",Object.assign({css:Object(z.a)(H||(H=Object(A.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: ",";\n    ","\n    width: ",";\n    ","\n  "])),t||"space-between",a||"flex-start",u&&"flex-grow: ".concat(u,";"),c?"100%":"auto",l&&"flex-wrap: wrap;")},p))},Cn=function(n){var e=n.align,t=n.valign,r=Object(F.a)(n,wn);return Object(z.b)("div",Object.assign({css:Object(z.a)(Q||(Q=Object(A.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: ",";\n      align-items: ",";\n    "])),t||"flex-start",e||"flex-start")},r))},Dn=function(n){return Object(z.b)("div",Object.assign({css:Object(z.a)(G||(G=Object(A.a)(["\n      font-family: 'Consolas';\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      color: ",";\n      width: 100%;\n      padding: 0;\n      margin: 0 auto;\n      position: relative;\n\n      p, button, a, label, span, div, h1, h2, h3, h4, h5 {\n        font-family: 'Consolas';\n      }\n\n      main {\n        padding: 24px 0 48px;\n\n        @media (min-width: 768px) {\n          padding: 64px 0 48px;\n        }\n      }\n\n      header {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        z-index: 999;\n\n        @media (min-width: 768px) {\n          top: 0;\n          bottom: unset;\n        }\n      }\n\n      div {\n        box-sizing: border-box;\n      }\n\n      label {\n        display: inline-flex;\n        flex-direction: column;\n        color: ",";\n\n        span:first-of-type {\n          min-height: 19px;\n        }\n      }\n\n      textarea,\n      input {\n        background: ",";\n        color: ",";\n        border-radius: 4px;\n        border: 2px solid ",";\n        padding: 8px;\n        min-width: 24px;\n        font: 700 24px Consolas;\n        line-height: 36px;\n\n        &::placeholder {\n          color: ",";\n          font-weight: 400;\n        }\n\n        &:focus {\n          outline: "," auto 1px;\n        }\n      }\n\n      input {\n        height: 24px;\n      }\n\n      input:disabled {\n        color: ",";\n      }\n\n      .InputDisabled {\n        background: ",";\n        opacity: 0.8;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n      }\n\n      input[type='checkbox'] {\n        width: 24px;\n        height: 24px;\n      }\n\n      p {\n        font-size: 18px;\n        line-height: 24px;\n        letter-spacing: -0.6px;\n        font-weight: 300;\n        margin: 0 0 12px;\n        color: ",";\n      }\n\n      a {\n        cursor: pointer;\n      }\n    "])),Ln.black,Ln.grayLight,Ln.grayDark,Ln.grayLighter,Ln.grayLight,Ln.gray,Ln.yellowDark,Ln.grayLight,Ln.gray,Ln.grayLighter)},n))},Pn=function(n){var e=n.checked,t=n.onClick,r=n.children,a=n.ariaLabel,i=n.className;return Object(z.b)(Sn,{ninja:!0,"aria-label":a,role:"checkbox",onClick:t,css:Object(z.a)(J||(J=Object(A.a)(["\n      align-items: center;\n    "])))},Object(z.b)("div",{css:Object(z.a)(W||(W=Object(A.a)(["\n        border-radius: 50%;\n        border: 2px solid ",";\n        width: 24px;\n        height: 24px;\n        margin-right: 16px;\n        position: relative;\n\n        ","\n      "])),Ln.yellow,e&&"\n          :after {\n            background: ".concat(Ln.yellow,";\n            position: absolute;\n            margin: 3px;\n            top: 0;\n            left: 0;\n            content: '';\n            border-radius: 50%;\n            height: 14px;\n            width: 14px;\n          }\n\n          @media (min-width: 768px) {\n            :hover:after {\n              background: ").concat(Ln.yellow,";\n              opacity: 50%;\n              position: absolute;\n              margin: 3px;\n              top: 0;\n              left: 0;\n              content: '';\n              border-radius: 50%;\n              height: 14px;\n              width: 14px;\n            }\n          }\n        ")),className:i}),r)},Sn=function(n){var e=n.filled,t=n.ninja,r=Object(F.a)(n,kn);return t?Object(z.b)("button",Object.assign({css:Object(z.a)(K||(K=Object(A.a)(["\n        background: none;\n        border: none;\n        display: flex;\n        margin: 0;\n        padding: 0;\n        cursor: pointer;\n        color: ",";\n      "])),Ln.white)},r)):Object(z.b)("button",Object.assign({css:Object(z.a)(V||(V=Object(A.a)(["      \n    border-radius: 4px;\n    border: ",";\n    font: 500 24px Consolas;\n    line-height: 36px;\n    background: ",";\n    font-weight: 700;\n    outline: none;\n    display: flex;\n    justify-content: center;\n    padding: 3px 16px;\n    cursor: pointer;\n\n    :hover {\n      background ","\n    }\n  "])),"1px solid ".concat(e?Ln.yellowLight:Ln.grayLight),e?Ln.yellowLight:"none",e?Ln.yellow:Ln.black+"44")},r))},An=t(39),zn=t.n(An),Fn=Object(r.createContext)(null),Mn=function(n){var e=n.children,t=Object(r.useRef)(null);return Object(r.useEffect)((function(){return function(){var n;return null===(n=t.current)||void 0===n?void 0:n.stopPlayLoop}}),[]),Object(z.b)(Fn.Provider,{value:t},e,Object(z.b)("div",{css:Object(z.a)(Z||(Z=Object(A.a)(["\n        text-align: right;\n        margin: 32px 16px 0;\n\n        @media(min-width: 768px) {\n          position: fixed;\n          bottom: 0; \n          right: 16px;\n          margin: 0;\n        }\n        "])))},Object(z.b)(zn.a,{ref:t,appElementName:"root",drums:[227,3311,3310,173]})))},Bn=function(n){return Object(z.b)("div",Object.assign({css:Object(z.a)(_||(_=Object(A.a)(["\n      display: flex;\n      align-items: flex-start;\n      padding: 0 8px;\n      width: 100%;\n      max-width: 1392px;\n      margin: 0 auto;\n\n      @media (min-width: 768px) {\n        padding: 12px 8px 0;\n      }\n    "])))},n))},Nn=function(n){return Object(z.b)("div",Object.assign({css:Object(z.a)(q||(q=Object(A.a)(["\n      display: flex;\n      flex-direction: column;\n      padding: 0 8px;\n      width: 100%;\n\n      @media (min-width: 768px) {\n        width: 40%;\n      }\n\n      @media (min-width: 1024px) {\n        width: 50%;\n      }\n    "])))},n))},Rn=function(n){var e=(0,n.useDrummeryContext)(),t=e.items,r=e.previewId,a=e.setPreviewId,i=e.meta,c=t.find((function(n){return n.id===r}));return Object(z.b)(Bn,null,Object(z.b)(Nn,null,i.loading?Object(z.b)("p",null,"Loading..."):t.map((function(n){return Object(z.b)(Jn,{key:n.id,item:n,onClick:function(){return a(n.id)},selected:n.id===r})}))),c&&Object(z.b)(ee,{onClick:function(){return a(null)},item:c}))},Tn=function(n){var e=n.tags,t=n.dimmed;return(null===e||void 0===e?void 0:e.length)?Object(z.b)("ul",{css:Object(z.a)(U||(U=Object(A.a)(["\n      list-style: none;\n      margin: 0 -4px;\n      padding: 0;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n    "])))},e.map((function(n){return Object(z.b)("li",{key:n,css:Object(z.a)(X||(X=Object(A.a)(["\n          ",";\n          margin: 0 4px 8px;\n          color: ",";\n          padding: 3px 6px;\n          background: ",";\n          border: 1px solid ","66;\n          ",";\n          text-shadow: 0 0 1px ","44;\n          border-radius: 4px;\n          font-size: 14px;\n          line-height: 14px;\n\n          ","\n        "])),!t&&"cursor: pointer",t?Ln.grayLight:Ln.black,t?"transparent":Ln.yellowLight,t?Ln.grayDark:Ln.yellowLight,!t&&"font-weight: 700",Ln.gray,!t&&":hover {\n            background: ".concat(Ln.yellow,";\n          }"))},n)}))):null},Hn=["onClick","selected"],Qn=function(n){var e=n.onClick,t=n.selected,r=Object(F.a)(n,Hn);return Object(z.b)(Sn,Object.assign({ninja:!0,onClick:e,css:Object(z.a)(Y||(Y=Object(A.a)(["\n        color: ",";\n        margin: 0 0 12px;\n        border-radius: 4px;\n        line-height: 14px;\n        position: relative;\n        height: min-content;\n        width: 100%;\n        background: ",";\n        padding: 12px 8px;\n        border: 2px solid ",";\n\n        :hover {\n          background: ","cc;\n        }\n\n        ","66;\n      "])),Ln.grayLighter,Ln.gray,Ln.gray,Ln.gray,t&&"border-color: ".concat(Ln.grayLight))},r))},Gn=function(n){return Object(z.b)("h4",Object.assign({css:Object(z.a)($||($=Object(A.a)(["\n      margin: 8px 0 0;\n      font-size: 18px;\n      line-height: 24px;\n    "])))},n))},Jn=function(n){var e=n.item,t=e.title,r=e.tags,a=n.onClick,i=n.selected,c=void 0!==i&&i;return Object(z.b)(Qn,{onClick:a,selected:c},Object(z.b)(Cn,null,Object(z.b)(Tn,{dimmed:!0,tags:r}),Object(z.b)(Gn,null,t)))},Wn=function(n){var e=n.playLoop,t=n.stopLoop,r=n.metronome,a=n.setMetronome,i=n.tempo,c=n.setTempo;return Object(z.b)(In,{align:"flex-start",wrap:!0,css:Object(z.a)(nn||(nn=Object(A.a)(["\n      margin: 24px 16px 0;\n\n      @media (min-width: 768px) {\n        margin: 24px 32px 0;\n        justify-content: space-between;\n      }\n\n      > * {\n        margin-bottom: 24px;\n      }\n    "])))},Object(z.b)(In,null,Object(z.b)(Sn,{filled:!0,onClick:e},"Play"),Object(z.b)(Sn,{filled:!0,onClick:t,css:Object(z.a)(en||(en=Object(A.a)(["\n        margin: 0 64px 0 8px;\n      "])))},"Stop")),Object(z.b)(In,null,Object(z.b)("input",{type:"text",size:"2",maxLength:3,value:i,onChange:function(n){var e=Number(n.target.value);NaN!==e&&c(e)}}),Object(z.b)("span",{css:Object(z.a)(tn||(tn=Object(A.a)(["\n          align-self: flex-end;\n          font-size: 24px;\n          line-height: 44px;\n          margin-left: 8px;\n        "])))},"BPM")),Object(z.b)(Pn,{checked:r,onClick:function(){return a(!r)},css:Object(z.a)(rn||(rn=Object(A.a)(["\n        margin: 0 8px 0 16px;\n      "])))},Object(z.b)("label",{css:Object(z.a)(an||(an=Object(A.a)(["\n          align-self: flex-end;\n          font-size: 24px;\n          line-height: 44px;\n          margin-right: 0 !important;\n        "])))},"metronome")))},Kn=function(n){var e=n.title,t=n.pattern,r=n.muted,a=n.setMuted;return Object(z.b)("div",{css:Object(z.a)(cn||(cn=Object(A.a)(["\n      padding: 18px 16px 24px;\n      border-bottom: 2px solid ","44;\n      width: 100%;\n\n      @media (min-width: 768px) {\n        padding: 24px 32px;\n      }\n    "])),Ln.grayLight)},Object(z.b)(In,{align:"flex-start",valign:"center",css:Object(z.a)(on||(on=Object(A.a)(["\n        margin-bottom: 8px;\n      "])))},Object(z.b)(Pn,{ariaLabel:"".concat(e," track ").concat(r?"off":"on"),onClick:function(){return a(!r)},checked:!r}),Object(z.b)("div",{css:Object(z.a)(ln||(ln=Object(A.a)(["\n          color: ",";\n        "])),Ln.gray)},e)),t&&Object(z.b)(Vn,{pattern:t}))},Vn=function(n){var e,t=n.pattern,r=t.length;t.length%9===0?r=9:t.length%8===0?r=8:t.length%6===0&&(r=6);var a="|".concat(null===t||void 0===t||null===(e=t.match(RegExp(".{1,".concat(r,"}"),"g")))||void 0===e?void 0:e.join("|"),"|");return Object(z.b)("div",{css:Object(z.a)(sn||(sn=Object(A.a)(["\n        font-size: 24px;\n        line-height: 36px;\n        max-width: 252px;\n\n        @media (min-width: 768px) {\n          font-size: 22px;\n          max-width: 452px;\n          line-height: 48px;\n        }\n\n        @media (min-width: 1440px) {\n          font-size: 40px;\n          line-height: 48px;\n          max-width: 816px;\n        }\n      "])))},a)},Zn=t(42),_n=function(n){var e,t,a,i=n.tracks,c=void 0===i?[]:i,o=n.initialMetronome,s=void 0===o||o,u=n.initialTempo,p=void 0===u?110:u,b=Object(r.useContext)(Fn),d=Object(r.useState)(p),g=Object(l.a)(d,2),f=g[0],m=g[1],h=Object(r.useState)({}),j=Object(l.a)(h,2),O=j[0],x=j[1],v=Object(r.useState)(s),y=Object(l.a)(v,2),w=y[0],k=y[1],L=Object(r.useState)(!1),E=Object(l.a)(L,2),I=E[0],C=E[1];Object(r.useEffect)((function(){I&&f>=40&&f<=200&&z()}),[f,O,w]);var D=null!==(e=null===(t=c.sort(qn)[0])||void 0===t||null===(a=t.pattern)||void 0===a?void 0:a.length)&&void 0!==e?e:0,P=D%3==0?3:4,S=function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",a=null!==(e=null===(t=c.find((function(e){return e.instrument===n})))||void 0===t?void 0:t.pattern)&&void 0!==e?e:null;if(!a)return[];for(var i=a.repeat(D/a.length),o=[],l=0;l<i.length;l+=1)o.push(i[l]===r);return o},A=[!O.bell&&S("bell"),!O.sangban&&S("sangban","o"),!O.sangban&&S("sangban","x"),w&&Object(Zn.a)(Array(D)).map((function(n,e){return e%P===0})),!O.dundunba&&S("dundunba","o"),!O.dundunba&&S("dundunba","x"),!O.kenkeni&&S("kenkeni","o"),!O.kenkeni&&S("kenkeni","x"),!O.kenkeni2&&S("kenkeni2","o"),!O.kenkeni2&&S("kenkeni2","x")],z=function(){var n,e,t=Xn(A,D);null===(n=b.current)||void 0===n||n.setEchoLevel(.05),null===(e=b.current)||void 0===e||e.startPlayLoop(t,P/4*f,1/16),C(!0)};return{playLoop:z,stopLoop:function(){var n;null===(n=b.current)||void 0===n||n.stopPlayLoop(),C(!1)},metronome:w,setMetronome:k,tempo:f,setTempo:m,muted:O,setMuted:x,loopLength:D}},qn=function(n,e){var t,r,a,i;return(null!==(t=null===(r=e.pattern)||void 0===r?void 0:r.length)&&void 0!==t?t:0)-(null!==(a=null===(i=n.pattern)||void 0===i?void 0:i.length)&&void 0!==a?a:0)},Un=[227,3310,3311,173,3312,3313,3314,3315,3316,3317],Xn=function(n,e){for(var t=Array(),r=function(){var e=[];Un.forEach((function(t,r){n[r]&&n[r][a]&&e.push(t)})),t.push([e,[]])},a=0;a<e;a++)r();return t},Yn=function(n){var e=n.tracks,t=n.metronome,r=void 0===t||t,a=n.tempo,i=_n({tracks:e,initialMetronome:r,initialTempo:void 0===a?110:a}),c=i.playLoop,l=i.stopLoop,u=i.tempo,p=i.setTempo,b=i.muted,d=i.setMuted,g=i.metronome,f=i.setMetronome,m=i.loopLength;return Object(z.b)($n,null,e.map((function(n,e){var t=n.title,r=n.instrument,a=n.pattern;return Object(z.b)(Kn,{key:"".concat(t).concat(r).concat(e),title:t,pattern:null===a||void 0===a?void 0:a.repeat(m/a.length),muted:b[r],setMuted:function(n){return d(Object(o.a)(Object(o.a)({},b),{},Object(s.a)({},r,n)))}})})),Object(z.b)(Wn,{playLoop:c,stopLoop:l,metronome:g,setMetronome:f,tempo:u,setTempo:p}))},$n=function(n){return Object(z.b)(Cn,Object.assign({css:Object(z.a)(un||(un=Object(A.a)(["\n      width: calc(100% + 24px);\n      background: ",";\n      color: ",";\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 24px;\n      margin: 0 -12px 24px;\n\n      @media (min-width: 768px) {\n        border-radius: 4px;\n        margin: 0 0 24px;\n        width: 100%;\n      }\n    "])),Ln.black,Ln.grayLight)},n))},ne=["children"],ee=function(n){var e=n.onClick,t=n.item,r=t.title,a=t.description,i=t.tags,c=t.patterns;return Object(z.b)(re,null,Object(z.b)(ce,{onClick:e}),Object(z.b)(Tn,{tags:i}),Object(z.b)(ae,{title:r}),Object(z.b)(ie,{description:a}),Object(z.b)(te,{patterns:c}))},te=function(n){var e=n.patterns;return Object(z.b)("div",null,Object(z.b)("h3",{css:Object(z.a)(pn||(pn=Object(A.a)(["\n        color: ",";\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n        font-size: 24px;\n        line-height: 48px;\n        margin: 24px 0;\n      "])),Ln.grayLight)},"Patterns"),Object(z.b)(Yn,{tracks:e}))},re=function(n){var e=n.children,t=Object(F.a)(n,ne);return Object(z.b)(Cn,Object.assign({valign:"center",css:Object(z.a)(bn||(bn=Object(A.a)(["\n        color: ",";\n        padding: 0;\n        margin: 0 16px;\n        font-size: 12px;\n        line-height: 14px;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        width: 100%;\n      "])),Ln.black)},t),Object(z.b)(Cn,{css:Object(z.a)(dn||(dn=Object(A.a)(["\n          background: ",";\n          width: 100%;\n\n          @media (max-width: 767px) {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            padding: 24px 12px;\n            overflow-y: auto;\n          }\n        "])),Ln.grayDark)},e))},ae=function(n){var e=n.title;return e?Object(z.b)("h2",{css:Object(z.a)(gn||(gn=Object(A.a)(["\n        margin: 0;\n        padding: 0;\n        font-size: 40px;\n        line-height: 1.5;\n        color: ",";\n        font-variant: all-small-caps;\n      "])),Ln.white)},e):null},ie=function(n){var e=n.description;return e?Object(z.b)("p",{css:Object(z.a)(fn||(fn=Object(A.a)(["\n        text-align: left;\n        margin-bottom: 24px !important;\n      "])))},e):null},ce=function(n){return Object(z.b)(Sn,Object.assign({ninja:!0,css:Object(z.a)(mn||(mn=Object(A.a)(["\n      color: ",";\n      margin: 0 0 24px;\n      padding: 12px 0;\n      display: flex;\n      align-items: center;\n      font-family: Consolas;\n      font-weight: 700;\n\n      @media (min-width: 768px) {\n        display: none;\n      }\n    "])),Ln.grayLighter)},n),Object(z.b)(En,{right:!0,color:Ln.grayLighter,css:Object(z.a)(hn||(hn=Object(A.a)(["\n        margin-right: 8px;\n      "])))}),Object(z.b)("span",{css:Object(z.a)(jn||(jn=Object(A.a)(["\n        text-transform: uppercase;\n      "])))},"back to list"))},oe=function(){!function(n){var e=n.DataService,t=function(){var n=O(),t=n.state.gallery,a=t.items,i=t.previewId,c=n.actions.gallery,o=c.setItems,s=c.setPreviewId,u=Object(r.useState)(!0),p=Object(l.a)(u,2),b=p[0],d=p[1];return Object(r.useEffect)((function(){(function(){var n=Object(E.a)(L.a.mark((function n(){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.fetchPhotos();case 3:t=n.sent,o(t),d(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Failed to fetch data.\n",n.t0),d(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}})()()}),[]),{items:a,previewId:i,setPreviewId:s,meta:{loading:b}}}}({DataService:S});var n=function(n){var e=n.DataService,t=function(){var n=O(),t=n.state.drummery,a=t.items,i=t.previewId,c=n.actions.drummery,o=c.setItems,s=c.setPreviewId,u=Object(r.useState)(!0),p=Object(l.a)(u,2),b=p[0],d=p[1];return Object(r.useEffect)((function(){var n=!1;return function(){var t=Object(E.a)(L.a.mark((function t(){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fetchDrumSnippets();case 3:(r=t.sent).forEach(function(){var n=Object(E.a)(L.a.mark((function n(t){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.fetchPatterns(t.patterns);case 2:t.patterns=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n||(o(r),d(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Failed to fetch data.\n",t.t0),n||d(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()(),function(){n=!0}}),[]),{items:a,previewId:i,setPreviewId:s,meta:{loading:b}}};return function(){return a.a.createElement(Mn,null,a.a.createElement(Rn,{useDrummeryContext:t}))}}({DataService:S});return a.a.createElement(y.a,{basename:"/"},a.a.createElement("main",null,a.a.createElement(w.b,{path:"/drums",component:n}),a.a.createElement(w.a,{to:"/drums"})))},le=function(){return a.a.createElement(v,null,a.a.createElement(Dn,null,a.a.createElement(oe,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(le,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1a9b24d1.chunk.js.map