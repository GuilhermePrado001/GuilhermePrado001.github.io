(this.webpackJsonpsquad=this.webpackJsonpsquad||[]).push([[0],{225:function(e,t,a){},226:function(e,t,a){},231:function(e,t,a){},248:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},365:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),s=a.n(c),r=a(32),i=a.n(r),l=(a(224),a(51)),j=a(35);a(225);var d=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("footer",{className:"site-page-footer",children:Object(n.jsx)("span",{children:"2020 - All rights reserved"})})})};a(226);var o=function(e){var t=e.logo,a=e.title,c=t?Object(n.jsx)("img",{src:t,alt:"logo",className:"app-logo"}):"";return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("header",{className:"site-page-header",children:[Object(n.jsx)(l.b,{to:"/",children:c}),Object(n.jsx)("div",{className:"app-title",children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("span",{children:a})})})]})})},u=a(64),b=a(41),m=a(420),O=a(421),h=a(422),x=a(423),p=a(413),g=a(419),f=a(414),v=a(94),A=a(58),y=a(416),N=a(53);a(231);var w=function(e){var t=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{className:"card-title",children:t})})},P=a(92),C=a.n(P),T=a(117),L=a(191),I=a.n(L).a.create({baseURL:"https://api-football-v1.p.rapidapi.com/v2",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE","Access-Control-Allow-Headers":"*","Access-Control-Max-Age":86400,"x-rapidapi-key":"3116346c98msh933694b60985b3fp1c1bfdjsn4a92b141f86d","x-rapidapi-host":"api-football-v1.p.rapidapi.com",useQueryString:!0}}),W=function(){var e=Object(T.a)(C.a.mark((function e(){var t,a,n,c=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=c.length>0&&void 0!==c[0]?c[0]:null)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.prev=3,e.next=6,I.get("/players/search/".concat(t));case 6:return a=e.sent,n=a.data,e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),F=Object(c.createContext)();function G(e){var t=e.children,a=Object(c.useState)([]),s=Object(b.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)([]),j=Object(b.a)(l,2),d=j[0],o=j[1];return Object(n.jsx)(F.Provider,{value:{teamList:r,setTeamList:i,ageAvg:d,setAgeAvg:o},children:t})}var S=function(e){if(!e)return null;var t=e.split(" ");if(1==t.length){var a=t[0].substring(0,1);return a.concat(a)}var n=t[0].substring(0,1),c=t[t.length-1].substring(0,1);return n.concat(c)},H=function(e){for(var t,a=1,n=0,c=0;c<e.length;c++){for(var s=c;s<e.length;s++)e[c].player_name==e[s].player_name&&n++,a<n&&(a=n,t=e[c].player_name);n=0}return t},k=function(e){for(var t,a=Number.POSITIVE_INFINITY,n=0,c=0;c<e.length;c++){for(var s=0;s<e.length;s++)e[c].player_name==e[s].player_name&&n++;a>n&&(a=n,t=e[c].player_name),n=0}return t},Y=function(e,t){return e.ageAvg>t.ageAvg?-1:e.ageAvg<t.ageAvg?1:0},D=(a(248),a(415));var R=function(e){var t=e.data,a=e.columns;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(D.a,{scroll:{y:480},columns:a,dataSource:t,pagination:!1},"table")})},X=(a(361),a(69));a(362);var B=function(e){var t=e.name,a=e.avg;return Object(n.jsxs)("div",{className:"card-info",children:[Object(n.jsx)("span",{className:"team-name-avg",children:t}),Object(n.jsx)("span",{className:"team-age-avg",children:a})]})};var M=function(){var e=Object(c.useContext)(F).ageAvg,t=Object(c.useState)([]),a=Object(b.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){var t=[];e.map((function(e){var a=function(e){if(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];var n=t/e.length;return n?n.toFixed(1):0}}(e.ageList);t.push({index:e.index,name:e.name,ageAvg:a})})),r(t.sort(Y))}),[e]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(v.a,{justify:"center",children:[Object(n.jsxs)(A.a,{lg:{span:11,offset:1},xs:{span:16},children:[Object(n.jsx)("span",{className:"avarage-title",children:"Highest avg age"}),s.length>0?Object(n.jsx)(y.a,{className:"radius-modify avarage-card",bordered:!0,children:s.slice(0,5).map((function(e,t){return Object(n.jsx)(l.b,{className:"reset-link",to:"/config/".concat(e.index),children:Object(n.jsx)(B,{name:e.name,avg:e.ageAvg},t)},t)}))}):Object(n.jsx)(y.a,{children:Object(n.jsx)(X.a,{image:X.a.PRESENTED_IMAGE_SIMPLE})})]}),Object(n.jsxs)(A.a,{lg:{span:11,offset:1},xs:{span:16},children:[Object(n.jsx)("span",{className:"avarage-title",children:"Lowest avg age"}),s.length>0?Object(n.jsx)(y.a,{className:"radius-modify avarage-card",bordered:!0,children:s.slice(5,10).map((function(e,t){return Object(n.jsx)(l.b,{className:"reset-link",to:"/config/".concat(e.index),children:Object(n.jsx)(B,{name:e.name,avg:e.ageAvg},t)},t)}))}):Object(n.jsx)(y.a,{children:Object(n.jsx)(X.a,{image:X.a.PRESENTED_IMAGE_SIMPLE})})]})]})})},Z=(a(365),null);var z=function(){var e=[{title:"Name",dataIndex:"teamName",sorter:function(e,t){return e.teamName.localeCompare(t.first_name)},width:170},{title:"Description",dataIndex:"description",sorter:function(e,t){return e.description.localeCompare(t.description)},render:function(e,t,a){return T(e,t,a)}}],t=Object(c.useContext)(F),a=t.teamList,s=t.setTeamList,r=t.ageAvg,i=t.setAgeAvg,j=Object(c.useState)([]),d=Object(b.a)(j,2),o=d[0],P=d[1];Object(c.useEffect)((function(){Z=null,C()}),[a]);var C=function(){Z=a.map((function(e){return e.players})),P([].concat.apply([],Z))},T=function(e,t){return Object(n.jsxs)("div",{className:"column-description",children:[Object(n.jsx)("span",{children:e}),Object(n.jsxs)("div",{className:"actions",children:[Object(n.jsx)(p.a,{title:"Are you sure delete this team?",onConfirm:function(){L(t.index),g.b.success("You removed the ".concat(t.teamName," team"))},okText:"Yes",cancelText:"No",children:Object(n.jsx)(f.a,{title:"Delete",content:"Click to remove an item",children:Object(n.jsx)(m.a,{className:"icon-action"})})}),Object(n.jsx)(f.a,{title:"Share",content:"Click to share an item",children:Object(n.jsx)(O.a,{className:"icon-action"})}),Object(n.jsx)(f.a,{title:"Edit",content:"Click to edit an item",children:Object(n.jsx)(l.b,{className:"reset-link",to:"/edit/".concat(t.index),children:Object(n.jsx)(h.a,{className:"icon-action"})})})]})]})},L=function(e){var t=Object(u.a)(a),n=Object(u.a)(r);s(t.filter((function(t){return t.index!==e}))),i(n.filter((function(t){return t.index!==e})))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"site-page-myteams",children:Object(n.jsxs)(v.a,{justify:"center",children:[Object(n.jsx)(A.a,{lg:{span:11},xs:{span:22},children:Object(n.jsx)(y.a,{title:Object(n.jsx)(w,{title:"My Team"}),className:"radius-modify teams-card",bordered:!0,extra:Object(n.jsx)(l.b,{to:"/create",children:Object(n.jsx)(N.a,{className:"addBtn radius-modify",children:Object(n.jsx)(x.a,{className:"plus-icon"})})}),children:Object(n.jsx)(R,{data:a,columns:e})})}),Object(n.jsxs)(A.a,{lg:{span:11,offset:1},xs:{span:22},children:[Object(n.jsx)(y.a,{title:Object(n.jsx)(w,{title:"Top 5"}),className:"radius-modify top-five-card",bordered:!0,children:Object(n.jsx)(M,{})}),Object(n.jsx)(y.a,{className:"radius-modify most-picked-card",bordered:!0,children:Object(n.jsxs)("div",{className:"most-picked-container",children:[Object(n.jsxs)("div",{className:"most-container",children:[Object(n.jsx)("span",{className:"text-label",children:"Most picked player"}),Object(n.jsx)(f.a,{content:H(o),title:"Most picked player",children:Object(n.jsx)("div",{className:"picked mostPicked",children:Object(n.jsx)("span",{children:H(o)?S(H(o)):null})})})]}),Object(n.jsxs)("div",{className:"less-container",children:[Object(n.jsx)("span",{className:"text-label",children:"Less picked player"}),Object(n.jsx)(f.a,{content:k(o),title:"Less picked player",children:Object(n.jsx)("div",{className:"picked lessPicked",children:Object(n.jsx)("span",{children:k(o)?S(k(o)):null})})})]})]})})]})]})})})},E=(a(372),a(417)),U=a(418),K=a(133),Q=a(107),J=a(203),V=a(212),q=a.n(V);a(373),a(374);var _=function(e){var t=e.draggable,a=e.name,c=e.age,s=e.nacionality,r=e.playerData,i=e.index,l=e.id;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{id:l,draggable:t,onDragStart:function(e){!function(e,t){t.currentId="player-".concat(i),e.dataTransfer.setData("text",JSON.stringify(t))}(e,r)},className:"player-card",children:[Object(n.jsxs)("div",{className:"player-field",children:[Object(n.jsx)("span",{className:"player-label",children:"Name: "}),Object(n.jsx)("span",{className:"player-card-name player-data",children:a}),Object(n.jsx)("span",{className:"player-label",children:"Age: "}),Object(n.jsx)("span",{className:"player-card-age player-data",children:c})]}),Object(n.jsx)("span",{className:"player-label",children:"Nacionality: "}),Object(n.jsx)("span",{className:"player-card-nacionality player-data",children:s})]})})},$=a(206),ee=a.n($),te=(a(375),a(207)),ae=["3 - 2 - 2 - 3","3 - 2 - 3 - 1","3 - 4 - 3","3 - 5 - 2","4 - 2 - 3 - 1","4 - 3 - 1 - 1","4 - 3 - 2","4 - 4 - 2","4 - 5 - 1","5 - 4 - 1"],ne=[],ce=null,se=null,re=function(){var e=E.a.useForm(),t=Object(b.a)(e,1)[0],a=Object(j.f)(),s=Object(c.useState)([]),r=Object(b.a)(s,2),i=r[0],l=r[1],d=Object(c.useState)([]),o=Object(b.a)(d,2),m=o[0],O=o[1],h=Object(c.useState)(!1),p=Object(b.a)(h,2),g=p[0],f=p[1],y=Object(c.useState)([]),w=Object(b.a)(y,2),P=w[0],L=w[1],I=Object(c.useState)(!0),G=Object(b.a)(I,2),H=G[0],k=G[1],Y=Object(c.useState)(null),D=Object(b.a)(Y,2),R=D[0],B=D[1],M=Object(c.useState)([]),Z=Object(b.a)(M,2),z=Z[0],V=Z[1],$=Object(c.useContext)(F),re=$.teamList,ie=$.setTeamList,le=$.ageAvg,je=$.setAgeAvg;Object(c.useEffect)((function(){ne=[],ce=null,se=null;var e=new URL(window.location.href);oe(e)}),[]);var de=Object(te.debounce)(function(){var e=Object(T.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l([]),""!==t.target.value){e.next=4;break}return e.abrupt("return");case 4:return f(!0),e.next=7,W(t.target.value);case 7:a=e.sent,f(!1),l([a]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),1e3),oe=function(e){(e.pathname.includes("/config")||e.pathname.includes("/edit"))&&(se=e.pathname.split("/")[2],ce=re.map((function(e){if(e.index==se)return e})),t.setFieldsValue(ce[se]),L(ce[se].formation.trim().split("-")),O(ce[se].players),V(ce[se].tags),setTimeout((function(){document.querySelectorAll(".line").forEach((function(e,t){e.firstChild.innerText=S(ce[se].players[t].player_name),ne.push(ce[se].players[t].age)}))}),100))},ue=function(e){e.preventDefault()},be=function(e){e.preventDefault();var t=JSON.parse(e.dataTransfer.getData("text"));t&&(ne.push(t.age),O([].concat(Object(u.a)(m),[t])),document.getElementById(t.currentId).style.display="none","svg"===e.target.tagName?e.target.parentNode.parentNode.innerText=S(t.player_name):"path"===e.target.tagName?e.target.parentNode.parentNode.parentNode.innerText=S(t.player_name):e.target.firstChild.innerText=S(t.player_name))},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e)return Object(n.jsx)(n.Fragment,{children:Object(u.a)(Array(e)).map((function(e,a){return Object(n.jsx)("div",{onDrop:function(e){return be(e)},onDragOver:function(e){return ue(e)},className:"line line-".concat(t),children:Object(n.jsx)("span",{children:Object(n.jsx)(x.a,{})})},a)}))})};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(E.a,{form:t,layout:"vertical",onFinish:function(e){if(e.players=m,e.tags=z,t=e.players,P.reduce((function(e,t){return+e+ +t}),0)!=t.length)return B(!0);var t;B(!1);var n=new URL(window.location.href);if(n.pathname.includes("/edit")||n.pathname.includes("/config"))return function(e){var t=Object(u.a)(re);e.index=se;var a=le.filter((function(e){return e.index!==t[se].index}));t[se]=e,je([].concat(Object(u.a)(a),[{index:e.index,name:e.teamName,ageList:ne}])),ie(t)}(e),void a.push("/");e.index=re.length,je([].concat(Object(u.a)(le),[{index:e.index,name:e.teamName,ageList:ne}])),ie([].concat(Object(u.a)(re),[e])),a.push("/")},onFinishFailed:function(e){t.scrollToField(e.errorFields[0].name)},children:[Object(n.jsx)(v.a,{justify:"center",children:Object(n.jsx)("span",{className:"form-session-team label-teams",children:"TEAM INFORMATION"})}),Object(n.jsxs)(v.a,{justify:"center",children:[Object(n.jsxs)(A.a,{lg:{span:8},xs:{span:16},children:[Object(n.jsx)(E.a.Item,{name:"teamName",className:"label-teams",label:"Team Name",rules:[{required:!0,message:"Please input your team name!"}],children:Object(n.jsx)(U.a,{placeholder:"Insert team name",name:"teamName"})}),Object(n.jsx)(E.a.Item,{name:"description",label:"Description",className:"label-teams",children:Object(n.jsx)(q.a,{name:"description",rows:7})})]}),Object(n.jsxs)(A.a,{lg:{span:8,offset:1},xs:{span:16},children:[Object(n.jsx)(E.a.Item,{className:"label-teams",label:"Team Website",name:"website",rules:[{required:!0,message:"Please input your Website!"},{type:"url",message:"This field must be a valid url."}],children:Object(n.jsx)(U.a,{placeholder:"http://myteam.com",name:"website"})}),Object(n.jsx)(E.a.Item,{className:"label-teams",label:"Team Type",name:"team-type",rules:[{required:!0,message:"Please choose your team type!"}],children:Object(n.jsxs)(K.a.Group,{name:"team-type",children:[Object(n.jsx)(K.a,{value:"Real",children:"Real"}),Object(n.jsx)(K.a,{value:"Fantasy",children:"Fantasy"})]})}),Object(n.jsx)(ee.a,{value:z,onChange:function(e){V(e)},addKeys:[191,13]})]})]}),Object(n.jsx)(v.a,{justify:"center",children:Object(n.jsx)("span",{className:"form-session-conf label-teams",children:"CONFIGURE SQUAD"})}),Object(n.jsx)(v.a,{justify:"center",children:Object(n.jsxs)("div",{className:"custom-wrapper",children:[Object(n.jsxs)(A.a,{lg:{span:8},children:[Object(n.jsx)(E.a.Item,{className:"label-teams",label:"Formation",name:"formation",rules:[{required:!0,message:"Please select your team roster!"}],children:Object(n.jsx)(Q.a,{onChange:function(e){!function(e){ne=[],O([]),k(!1);var t=e.trim().split("-");L(t),setTimeout((function(){k(!0)}))}(e)},children:ae.map((function(e,t){return Object(n.jsx)(Q.a.Option,{value:e,children:e},t)}))})}),Object(n.jsx)("div",{className:"escalation-squad",children:H&&P.length>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"lineUp",children:me(+P[0],"one")}),Object(n.jsx)("div",{className:"lineUp",children:me(+P[1],"two")}),Object(n.jsx)("div",{className:"lineUp",children:me(+P[2],"three")}),4===P.length?Object(n.jsx)("div",{className:"lineUp",children:me(+P[3],"four")}):null]}):null}),R?Object(n.jsx)("div",{className:"my-custom-validate ant-form-item-explain ant-form-item-explain-error",children:Object(n.jsx)("div",{role:"alert",children:"Please complete your escalation!"})}):null,Object(n.jsx)(E.a.Item,{children:Object(n.jsx)(N.a,{className:"submit-button",type:"primary",htmlType:"submit",children:"Save"})})]}),Object(n.jsxs)(A.a,{lg:{span:8,offset:1},children:[Object(n.jsx)(E.a.Item,{className:"label-teams",label:"Search Players",children:Object(n.jsx)(U.a,{onChange:de,placeholder:"Type for search a player"})}),Object(n.jsx)("div",{className:"squad",children:i.length>0&&0!==i[0].api.results?i[0].api.players.map((function(e,t){return Object(n.jsx)(_,{name:e.player_name,age:e.age,nacionality:e.nationality,id:"player-".concat(t),draggable:"true",playerData:e,index:t},t)})):g?Object(n.jsx)(J.a,{className:"spin-loadin",spinning:g,delay:500}):Object(n.jsx)(X.a,{image:X.a.PRESENTED_IMAGE_SIMPLE})})]})]})})]})})};var ie=function(e){var t=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y.a,{className:"create-card",title:t,children:Object(n.jsx)(re,{})})})};a(411);var le=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(o,{logo:"data:image/png;base64,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",title:"Squad Management Tool"}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",render:function(){return Object(n.jsx)(z,{})},exact:!0}),Object(n.jsx)(j.a,{path:"/create",render:function(){return Object(n.jsx)(ie,{title:Object(n.jsx)(w,{title:"Create Team"})})},exact:!0}),Object(n.jsx)(j.a,{path:"/edit/:index",render:function(){return Object(n.jsx)(ie,{title:Object(n.jsx)(w,{title:"Edit your Team"})})},exact:!0}),Object(n.jsx)(j.a,{path:"/config/:team",render:function(){return Object(n.jsx)(ie,{title:Object(n.jsx)(w,{title:"Config your Team"})})},exact:!0})]})}),Object(n.jsx)(d,{})]})})};var je=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(G,{children:Object(n.jsx)(le,{})})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,424)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(je,{})}),document.getElementById("root")),de()}},[[412,1,2]]]);
//# sourceMappingURL=main.e3a04567.chunk.js.map