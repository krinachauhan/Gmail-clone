"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[504],{7444:(e,t,n)=>{n.d(t,{FN:()=>o,Rb:()=>s,_3:()=>a});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",o="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},5687:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(5043),o=n(6213);const s=async(e,t,n)=>await(0,o.A)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(n),data:t}),i=e=>{const[t,n]=(0,a.useState)(null),[o,i]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),i(""),l(!0);try{let o=await s(e,t,a);n(o.data)}catch(o){i(o.message)}finally{l(!1)}},response:t,error:o,isLoading:r}}},1504:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var a=n(5043),o=n(4535),s=n(2314),i=n(6446),r=n(5263),l=n(645),d=n(3287),c=n(9484),m=n(746),h=n(6973),p=n(2069),g=n(8120),x=n(4149),u=n(7444),f=n(579);const j=(0,o.Ay)(s.A)({backgroundColor:"#F5F5F5",boxShadow:"none"}),y=(0,o.Ay)(i.A)({backgroundColor:"#EAF1FB",marginLeft:80,borderRadius:8,minWidth:690,maxWidth:720,height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px","& > div":{width:"100%",padding:"0 10px"}}),A=(0,o.Ay)(i.A)({width:"100%",display:"flex",justifyContent:"end","& > svg":{marginLeft:20}});const b=function(e){let{toggleDrawer:t}=e;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(j,{position:"static",children:(0,f.jsxs)(r.A,{children:[(0,f.jsx)(d.A,{color:"action",onClick:t}),(0,f.jsx)("img",{src:u._3,alt:"logo",style:{width:110,marginLeft:15}}),(0,f.jsxs)(y,{children:[(0,f.jsx)(c.A,{color:"action"}),(0,f.jsx)(l.Ay,{placeholder:"Search Mail"}),(0,f.jsx)(m.A,{color:"action"})]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(h.A,{color:"action"}),(0,f.jsx)(p.A,{color:"action"}),(0,f.jsx)(g.A,{color:"action"}),(0,f.jsx)(x.A,{color:"action"})]})]})})})};var v=n(4109),w=n(1906),S=n(5721),k=n(1322),C=n(5824),D=n(1418),F=n(9320),E=n(5874),T=n(4571),B=n(3768),M=n(2559);const P=[{name:"inbox",title:"Inbox",icon:D.A},{name:"starred",title:"Starred",icon:F.A},{name:"sent",title:"Sent",icon:E.A},{name:"drafts",title:"Drafts",icon:T.A},{name:"bin",title:"Bin",icon:B.A},{name:"allmail",title:"All Mail",icon:M.A}];var R=n(1485),H=n(5865),O=n(7347),_=n(3438),W=n(5687),L=n(3697);const z={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},N=(0,o.Ay)(i.A)({display:"flex",justifyContent:"space-between",padding:"18px 15px",background:"#f2f6fc","& > p":{fontSize:14,fontWight:500}}),I=(0,o.Ay)(i.A)({display:"flex",flexDirection:"column",padding:"0 15px","& > div":{fontSize:14,BorderBottom:"1px solid #F5F5F5",MarginTop:10}}),K=(0,o.Ay)(i.A)({display:"flex",justifyContent:"space-between",padding:"10px 15px",alignItems:"center"}),Y=(0,o.Ay)(w.A)({background:"#0057D0",color:"#fff",fontWeight:500,textTransform:"none",borderRadius:18,width:100}),G=e=>{let{openDialog:t,setOpenDialog:n}=e;const[o,s]=(0,a.useState)({}),i=(0,W.A)(L.y.saveSentEmail),r=(0,W.A)(L.y.saveDraftEmails),d=e=>{s({...o,[e.target.name]:e.target.value}),console.log(o)},c={Host:"smtp.elasticemail.com",Username:"myvote3211@yopmail.com",Password:"49AF3B6893BBA3EEB23756C7E08E76CD9818",Port:2525};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(R.A,{open:t,PaperProps:{sx:z},children:[(0,f.jsxs)(N,{children:[(0,f.jsx)(H.A,{children:"New Message"}),(0,f.jsx)(_.A,{fontSize:"small",onClick:e=>(e=>{e.preventDefault();const t={to:o.to,from:"myvote1233@gmail.com",subject:o.subject,body:o.body,date:new Date,attachment:"",name:"Krina Chauhan",starred:!1,type:"drafts"};r.call(t),r.error||(n(!1),s({}))})(e)})]}),(0,f.jsxs)(I,{children:[(0,f.jsx)(l.Ay,{placeholder:"Recipients",name:"to",onChange:e=>d(e)}),(0,f.jsx)(l.Ay,{placeholder:"Subject",name:"subject",onChange:e=>d(e)})]}),(0,f.jsx)(O.A,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:e=>d(e)}),(0,f.jsxs)(K,{children:[(0,f.jsx)(Y,{onClick:e=>(e=>{e.preventDefault(),window.Email&&window.Email.send({...c,To:o.to,From:"myvote1233@gmail.com",Subject:o.subject,Body:o.body}).then((e=>alert(e)));const t={to:o.to,from:"myvote1233@gmail.com",subject:o.subject,body:o.body,date:new Date,attachment:"",name:"Krina Chauhan",starred:!1,type:"sent"};i.call(t),i.error||(n(!1),s({})),n(!1)})(e),children:"Send"}),(0,f.jsx)(B.A,{onClick:()=>{n(!1)}})]})]})})};var J=n(3216),U=n(5475),q=n(9297);const Q=(0,o.Ay)(w.A)({background:"#c2e7ff",color:"#001d35",padding:16,borderRadius:16,minWidth:140,textTransform:"none"}),V=(0,o.Ay)(i.A)({fontFamily:"Arial, Helvetica, sans-serif",padding:8,"& > ul":{padding:"10px 0 0 5px",fontSize:15,fontWeight:500,cursor:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"& > ul > a > li > svg":{marginRight:20}});const X=function(){const[e,t]=(0,a.useState)(!1),{type:n}=(0,J.g)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(V,{children:[(0,f.jsxs)(Q,{onClick:()=>{t(!0)},children:[(0,f.jsx)(C.A,{})," Compose"]}),(0,f.jsx)(S.A,{children:P.map((e=>(0,f.jsx)(U.k2,{to:"".concat(q.J.emails.path,"/").concat(e.name),children:(0,f.jsxs)(k.Ay,{style:n===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,f.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)))}),(0,f.jsx)(G,{openDialog:e,setOpenDialog:t})]})})};const Z=function(e){let{openDrawer:t}=e;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v.Ay,{anchor:"left",open:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{marginTop:"64px",width:250,background:"#F5F5F5",borderRight:"none",height:"calc(100vh-64px"}},children:(0,f.jsx)(X,{})})})};var $=n(2465);const ee=()=>{const[e,t]=(0,a.useState)(!0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{toggleDrawer:()=>{t((e=>!e))}}),(0,f.jsxs)(i.A,{children:[(0,f.jsx)(Z,{openDrawer:e}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)($.A,{}),children:(0,f.jsx)(J.sv,{context:{openDrawer:e}})})]})]})}},3697:(e,t,n)=>{n.d(t,{y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailToBin:{endpoint:"bin",method:"POST"},toggleStarEmail:{endpoint:"starred",method:"POST"},deleteMail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=504.9dccfc28.chunk.js.map