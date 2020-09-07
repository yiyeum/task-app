(this["webpackJsonpyoutube-materials"]=this["webpackJsonpyoutube-materials"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(98),a(80)),i=a(10),s=a(30),m=a(134),d=a(108),u=a(147),g=a(155),b=a(4),y=a(72),h={root:{padding:"3% 11.5%",backgroundImage:"url(".concat(a.n(y).a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"top"},select:{width:"80%"}},E=Object(b.a)(h)((function(e){var t=e.classes,a=e.category,n=e.sortBy,o=e.setSortBy,c=e.list;return r.a.createElement(m.a,{container:!0,className:t.root},r.a.createElement(m.a,{item:!0,lg:8,md:8,sm:12,xs:12},r.a.createElement(d.a,{variant:"h4",color:"textPrimary"},"My Tasks"),r.a.createElement(d.a,{variant:"body1",color:"textSecondary"},function(){var e=c.filter((function(e){return e.done})).length;return"".concat(e," of ").concat(c.length," tasks")}())),r.a.createElement(m.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(u.a,{className:t.select,value:n,onChange:function(e){return o(e.target.value)}},r.a.createElement(g.a,{value:"all"},"All"),a.length>0&&a.map((function(e,t){return r.a.createElement(g.a,{value:e.name,key:t},e.name)})))))})),f=a(146),p=Object(b.a)({root:{backgroundColor:"#FAFAFA",padding:20,minHeight:"100vh",marginBottom:"95px",borderTopLeftRadius:90,borderTopRightRadius:90}})((function(e){var t=e.classes,a=e.list,n=e.sortBy,o=e.setList,c=e.setCategory,l=e.category,i=e.setSortBy,s=function(e,t){return e.length>0?"all"===t?e:e.filter((function(e){return e.category.name===t})):[]};return r.a.createElement("div",{className:t.root},s(a,n).length>0?s(a,n).map((function(e){return r.a.createElement(L,{item:e,setList:o,list:a,key:e.id,setCategory:c,category:l,setSortBy:i})})):r.a.createElement(f.a,{textAlign:"center",mt:20},r.a.createElement(G,null)))})),x=a(42),k=a(61),v=a(32),O=a(140),j=a(150),C=a(76),S=a.n(C),B={task:"",category:"",error:!1},N=Object(b.a)({root:{position:"fixed",bottom:0,padding:"2% 4%",boxShadow:"0 1px 6px 0 rgba(32, 33, 36, 0.28)",backgroundColor:"#ffffff"},txtField:{width:"90%"},btn:{width:"42px",borderRadius:"20px",minWidth:0},icon:{fontSize:30,color:"#757575"}})((function(e){var t=Object(n.useState)(B),a=Object(s.a)(t,2),o=a[0],c=a[1],l=e.classes,i=e.list,d=e.setList,u=e.category,g=e.setCategory,b=o.category.trim().charAt(0).toUpperCase()+o.category.trim().slice(1),y=u.filter((function(e){return e.name===b})),h="hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)",E=0!==o.task.trim().length,f=0!==o.category.trim().length,p=function(e){c(Object(v.a)(Object(v.a)({},o),{},Object(k.a)({},e.target.name,e.target.value)))};return r.a.createElement(m.a,{container:!0,className:l.root},r.a.createElement(m.a,{item:!0,lg:2,md:2,sm:2,xs:1},r.a.createElement(O.a,{"aria-label":"Add Task",variant:"outlined",className:l.btn,onClick:function(){E&&f?(d([].concat(Object(x.a)(i),[{id:(new Date).toString(),task:o.task,category:{name:b,hsl:y.length>0?y[0].hsl:h},done:!1,createdDate:new Date}])),function(){if(0===y.length){var e={name:b,hsl:h};g([].concat(Object(x.a)(u),[e]))}}(),c(B)):c(Object(v.a)(Object(v.a)({},o),{},{error:!0}))}},r.a.createElement(S.a,{className:l.icon}))),r.a.createElement(m.a,{item:!0,lg:7,md:7,sm:7,xs:8},r.a.createElement(j.a,{className:l.txtField,placeholder:"Task (max 50)",value:o.task,onChange:p,name:"task",required:!0,error:o.error&&!E,helperText:o.error&&!E&&"Pleae fill this field",inputProps:{maxLength:50}})),r.a.createElement(m.a,{item:!0,lg:3,md:3,sm:3,xs:3},r.a.createElement(j.a,{className:l.txtField,placeholder:"Category (max 20)",value:o.category,onChange:p,name:"category",required:!0,error:o.error&&!f,helperText:o.error&&!f&&"Pleae fill this field",inputProps:{maxLength:20}})))})),F=a(148),w=a(78),D=a.n(w),P=a(77),A=a.n(P),L=Object(b.a)({root:{borderBottom:"1px solid #E5E5E5",padding:20},checkboxGrid:{textAlign:"center"},icon:{color:"#757575"},tag:{backgroundColor:"#FFDEDE",padding:"3px 10px",borderRadius:10},done:{textDecoration:"line-through"}})((function(e){var t,a=e.classes,o=e.item,c=e.setList,l=e.list,i=e.setCategory,u=e.setSortBy,g=o.task,b=o.category,y=o.createdDate,h=o.done,E=Object(n.useState)(!1),p=Object(s.a)(E,2),k=p[0],j=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,className:a.root},r.a.createElement(m.a,{item:!0,lg:1,md:1,sm:1,className:a.checkboxGrid},r.a.createElement(F.a,{onChange:function(e){var t=l.findIndex((function(e){return e.id===o.id})),a=Object(v.a)(Object(v.a)({},o),{},{done:e.target.checked});c([].concat(Object(x.a)(l.slice(0,t)),[a],Object(x.a)(l.slice(t+1))))},checked:o.done})),r.a.createElement(m.a,{item:!0,lg:7,md:9,sm:9},r.a.createElement(f.a,{display:"inline-block"},r.a.createElement(d.a,{variant:"body1",color:"textPrimary",className:h?a.done:""},g)),r.a.createElement(f.a,{display:"inline-block",ml:5},r.a.createElement(I,{done:h,category:b})),r.a.createElement(f.a,{display:"block"},r.a.createElement(d.a,{variant:"caption",color:"textSecondary"},(t=y,A()(t).format("MMM Do, YYYY"))))),r.a.createElement(m.a,{item:!0,lg:1,md:1,sm:1},r.a.createElement(O.a,{onClick:function(){return j(!0)}},r.a.createElement(D.a,{className:a.icon})))),r.a.createElement(W,{open:k,setOpen:j,handleDelete:function(){1===l.filter((function(e){return e.category===o.category})).length&&(i(e.category.filter((function(e){return e.name!==o.category.name}))),u("all")),c(l.filter((function(e){return e.id!==o.id})))}}))})),M=a(151),T=a(141),R=a(142),Y=a(143),W=Object(b.a)((function(e){return{actionBtn:{color:e.palette.error.main}}}))((function(e){var t=e.open,a=e.setOpen,n=e.handleDelete,o=e.classes;return r.a.createElement(M.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"delete-task-dialog-title","aria-describedby":"delete-task-dialog-desc",fullWidth:!0,maxWidth:"sm"},r.a.createElement(T.a,{id:"delete-task-dialog-title"},"Delete a Task"),r.a.createElement(R.a,null,r.a.createElement(d.a,{color:"textPrimary"},"You have selected to delete this task."),r.a.createElement(d.a,{color:"textPrimary"},"Are you sure you want to delete this item?")),r.a.createElement(Y.a,null,r.a.createElement(O.a,{onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(O.a,{onClick:n,autoFocus:!0,className:o.actionBtn},"Yes, Delete it")))})),I=Object(b.a)({done:{textDecoration:"line-through"},tag:{padding:"3px 10px",borderRadius:10}})((function(e){var t=e.classes,a=e.category,n=e.done;return r.a.createElement("div",{className:t.tag,style:{backgroundColor:"".concat(a.hsl)}},r.a.createElement(d.a,{variant:"body2",color:"textPrimary",className:n?t.done:""},a.name))})),q=a(79),z=a.n(q),G=Object(b.a)({icon:{color:"#bdbdbd",fontSize:90}})((function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:t.icon}),r.a.createElement(d.a,{variant:"body1",color:"textSecondary"},"No tasks found"),r.a.createElement(d.a,{variant:"body1",color:"textSecondary"},"Sit back and relax!"))})),J=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),l=Object(s.a)(c,2),i=l[0],m=l[1],d=Object(n.useState)("all"),u=Object(s.a)(d,2),g=u[0],b=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{category:i,sortBy:g,setSortBy:b,list:a}),r.a.createElement(p,{list:a,sortBy:g,setList:o,setCategory:m,category:i,setSortBy:b}),r.a.createElement(N,{list:a,setList:o,category:i,setCategory:m}))};var H=function(){return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(81),$=Object(U.a)({palette:{primary:{main:"#7FF0B0"},secondary:{main:"#FFEC87"},text:{primary:"#373737",secondary:"#757575"},error:{main:"#d83b30"}}}),K=a(144);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K.a,{theme:$},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a.p+"static/media/bg.e0b71a0e.png"},93:function(e,t,a){e.exports=a(106)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.b1e78159.chunk.js.map