(this["webpackJsonpacme-fitness-v1"]=this["webpackJsonpacme-fitness-v1"]||[]).push([[0],{462:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(21),r=a.n(n),i=a(13),s=a(55),o=a(3),l=Object(c.createContext)(),j=function(e){var t=Object(c.useState)(!0),a=Object(i.a)(t,2),n=a[0],r=a[1],j=Object(c.useState)({age:null,sex:null,weight:null,height:null,activity:null}),b=Object(i.a)(j,2),d=b[0],u=b[1],h=Object(c.useState)(null),x=Object(i.a)(h,2),O=x[0],m=x[1],f=Object(c.useState)(null),g=Object(i.a)(f,2),p=g[0],v=g[1],y=Object(c.useState)([{id:"BMI",color:"hsl(327, 70%, 50%)",data:[]}]),C=Object(i.a)(y,2),N=C[0],D=C[1],A=Object(c.useState)(0),S=Object(i.a)(A,2),k=S[0],I=S[1],w=Object(c.useState)([]),H=Object(i.a)(w,2),B=H[0],G=H[1];Object(c.useEffect)((function(){var e=0;B.forEach((function(t){for(var a in t.data.foodNutrients)1008===t.data.foodNutrients[a].nutrientId&&(e+=t.data.foodNutrients[a].value/100*t.quantity)})),I(e)}),[B]),Object(c.useEffect)((function(){!function(){var e=0;e="male"===d.sex?66.47+13.75*d.weight+5.003*d.height-6.755*d.age:655.1+9.563*d.weight+1.85*d.height-4.676*d.age,"none"===d.activity?v(1.2*e):"light"===d.activity?v(1.375*e):"moderate"===d.activity?v(1.55*e):"very active"===d.activity?v(1.725*e):v(1.9*e)}(),Y(d.weight,d.height)}),[d]);var Y=function(e,t){var a,c=Object(s.a)(N),n=new Date,r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();n=i+"/"+r+"/"+o,a=Math.round(e/t/t*1e4),c[0].data.push({x:n,y:a}),D(c)};return Object(o.jsx)(l.Provider,{value:{isAuthenticated:n,currPage:O,userData:d,listData:B,consumedCalories:k,caloricGoal:p,BMIData:N,setIsAuthenticated:r,addItem:function(e){G((function(t){return[e].concat(Object(s.a)(t))}))},removeItem:function(e){G(B.filter((function(t,a){return e!==a})))},setUserData:u,setCaloricGoal:v,setListData:G,setConsumedCalories:I,setCurrPage:m,calcBMI:Y},children:e.children})},b=a(34),d=a(30),u=a(571),h=a(311),x=Object(h.a)({shadows:["none"],typography:{fontFamily:["-apple-system","Roboto","sans-serif"].join(","),allVariants:{color:"#333"},button:{textTransform:"none"}},palette:{primary:{main:"#0171B6"},secondary:{main:"#DB1A20"}}}),O=a(58),m=a(314),f=function(e){var t=e.isAuthenticated,a=e.component,c=Object(m.a)(e,["isAuthenticated","component"]);return Object(o.jsx)(d.b,Object(O.a)(Object(O.a)({},c),{},{render:function(e){return t?Object(o.jsx)(a,{}):Object(o.jsx)(d.a,{to:{pathname:"/welcome",state:{from:e.location}}})}}))},g=a(539),p=a(541),v=a(543),y=a(544),C=a(101),N=a(294),D=a.n(N),A=a(293),S=a.n(A),k=Object(g.a)({appBar:{marginBottom:"15px"},toolbar:{display:"flex",justifyContent:"space-between"},title:{color:"#fff","&:first-letter":{textTransform:"capitalize"}},white:{color:"#fff"}}),I=function(e){var t=e.toggleDrawer,a=Object(c.useContext)(l).currPage,n=k();return Object(o.jsx)(p.a,{position:"sticky",className:n.appBar,children:Object(o.jsxs)(v.a,{className:n.toolbar,children:["/search-food/result/"===Object(d.h)().pathname.slice(0,20)?Object(o.jsx)(b.b,{to:"/search-food",children:Object(o.jsx)(y.a,{edge:"start",children:Object(o.jsx)(S.a,{className:n.white})})}):null,Object(o.jsx)(C.a,{variant:"h6",edge:"center",className:n.title,children:a}),Object(o.jsx)(y.a,{edge:"end",onClick:t,className:n.white,children:Object(o.jsx)(D.a,{})})]})})},w=a(575),H=a(545),B=a(465),G=a(546),Y=a(547),L=a(295),M=a.n(L),F=a(202),E=a.n(F),W=a(296),K=a.n(W),z=a(297),q=a.n(z),J=a(298),P=a.n(J),T="data:image/png;base64,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",U=Object(g.a)((function(e){return{logoContainer:{marginTop:"20px",marginBottom:"50px"},link:{textDecoration:"none",color:e.palette.text.primary}}})),R=function(e){var t=e.toggleDrawer,a=e.menuOpen,c=U();return Object(o.jsxs)(w.a,{style:{width:"240px"},variant:"temporary",anchor:"right",open:a,ModalProps:{onBackdropClick:t},children:[Object(o.jsx)("div",{className:c.logoContainer,children:Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.acmefitness.com/",children:Object(o.jsx)("img",{src:T,alt:"ACME Fitness"})})}),Object(o.jsxs)(H.a,{children:[Object(o.jsx)(b.b,{to:"/",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{className:c.menuIcon,children:Object(o.jsx)(M.a,{})}),Object(o.jsx)(Y.a,{children:"Home"})]})}),Object(o.jsx)(b.b,{to:"/search-food",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{children:Object(o.jsx)(E.a,{})}),Object(o.jsx)(Y.a,{children:"Search Food"})]})}),Object(o.jsx)(b.b,{to:"/statistics",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{children:Object(o.jsx)(K.a,{})}),Object(o.jsx)(Y.a,{children:"Statistics"})]})}),Object(o.jsx)(b.b,{to:"/gym-equipment",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{children:Object(o.jsx)(q.a,{})}),Object(o.jsx)(Y.a,{children:"Gym Equipment"})]})}),Object(o.jsx)(b.b,{to:"/our-instructors",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{children:Object(o.jsx)(E.a,{})}),Object(o.jsx)(Y.a,{children:"Our Instructors"})]})}),Object(o.jsx)(b.b,{to:"/settings",className:c.link,children:Object(o.jsxs)(B.a,{button:!0,onClick:t,children:[Object(o.jsx)(G.a,{children:Object(o.jsx)(P.a,{})}),Object(o.jsx)(Y.a,{children:"Settings"})]})})]})]})},V=a(109),Q=a(550),X=a(572),Z=a(552),_=a(553),$=a(551),ee=a(554),te=a(555),ae=a(556),ce=a(557),ne=a(558),re=a(312),ie=Object(g.a)({pieContainer:{height:"300px",width:"350px",margin:"auto",marginBottom:"30px"}}),se=["#E7F69D","#64C2A6","#FEAE65","#F66D43"],oe=[{id:"legend",label:"Legend",value:1}],le=["#E7F69D"],je=function(){var e=Object(c.useContext)(l).listData,t=Object(c.useState)([{id:"protein",label:"Protein",value:0},{id:"fat",label:"Fat",value:0},{id:"carbohydrate",label:"Carbohydrate",value:0}]),a=Object(i.a)(t,2),n=a[0],r=a[1],j=ie();return Object(c.useEffect)((function(){var t=Object(s.a)(n);t[0].value=0,t[1].value=0,t[2].value=0,e.forEach((function(e){for(var a in e.data.foodNutrients)if(1003===e.data.foodNutrients[a].nutrientId)t[0].value+=Math.round(e.quantity*(e.data.foodNutrients[a].value/100));else if(1004===e.data.foodNutrients[a].nutrientId){Object(s.a)(n)[1].value+=Math.round(e.quantity*(e.data.foodNutrients[a].value/100))}else if(1005===e.data.foodNutrients[a].nutrientId){Object(s.a)(n)[2].value+=Math.round(e.quantity*(e.data.foodNutrients[a].value/100))}r(t)}))}),[e]),Object(o.jsx)("div",{className:j.pieContainer,children:Object(o.jsx)(re.a,{data:e.length>0?n:oe,margin:{top:20,right:20,bottom:70,left:20},padAngle:.7,cornerRadius:3,colors:e.length>0?se:le,enableRadialLabels:!1,sliceLabelsSkipAngle:10,sliceLabelsTextColor:"#333333",isInteractive:!0,legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemWidth:80,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})})},be=a(549),de=a(306),ue=a.n(de),he=Object(g.a)({list:{borderRadius:"5px",backgroundColor:"#fff",marginBottom:"20px"},listItem:{display:"flex"},title:{width:"45%","&:first-letter":{textTransform:"capitalize"}},quantity:{width:"15%"},calories:{width:"35%"},remove:{width:"5%"}}),xe=function(){var e=Object(c.useContext)(l),t=e.listData,a=e.removeItem,n=he(),r=t.map((function(e,c){var r=0;for(var i in e.data.foodNutrients)1008===e.data.foodNutrients[i].nutrientId&&(r=Math.round(e.data.foodNutrients[i].value/100*e.quantity));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(B.a,{className:n.listItem,e:!0,children:[Object(o.jsx)(Y.a,{className:n.title,children:e.data.lowercaseDescription}),Object(o.jsxs)(Y.a,{className:n.quantity,children:[e.quantity,"g"]}),Object(o.jsxs)(Y.a,{className:n.calories,children:[r,"Kcal"]}),Object(o.jsx)(y.a,{edge:"end",onClick:function(){return a(c)},size:"small",children:Object(o.jsx)(ue.a,{color:"secondary",j:!0})})]},c),c<t.length-1?Object(o.jsx)(be.a,{}):null]})}));return Object(o.jsx)(H.a,{className:n.list,children:t.length>0?r:Object(o.jsx)(B.a,{children:Object(o.jsx)(Y.a,{children:"You haven't eaten any food yet!"})})})},Oe=Object(g.a)((function(e){return{caloricGoalContainer:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#fff",borderRadius:"20px",padding:"10px 5px"},header:{fontSize:"40px",marginBottom:"10px"},caloricGoal:{fontSize:"16px"},eatSomething:{width:"100%",padding:"8px 0",marginBottom:"20px",color:"#fff"}}})),me=function(){var e=Object(c.useContext)(l),t=e.caloricGoal,a=e.setCurrPage,n=e.consumedCalories,r=Oe();return Object(c.useEffect)((function(){a("Home")})),Object(o.jsxs)(Q.a,{children:[Object(o.jsx)(C.a,{variant:"h3",className:r.header,children:"Today"}),Object(o.jsxs)("div",{className:r.caloricGoalContainer,children:[Object(o.jsx)(C.a,{variant:"h6",className:r.caloricGoal,children:"Caloric Goal:"}),Object(o.jsxs)(C.a,{variant:"h4",children:[Math.round(n),"/",Math.round(t)]})]}),Object(o.jsx)(je,{}),Object(o.jsx)(b.b,{to:"/search-food",className:r.link,children:Object(o.jsx)($.a,{variant:"contained",className:r.eatSomething,color:"primary",children:"Eat Something"})}),Object(o.jsx)(C.a,{variant:"h6",children:"Today's Food"}),Object(o.jsx)(xe,{})]})},fe=Object(g.a)((function(e){return{logoContainer:{width:"100%",display:"flex",justifyContent:"center",paddingTop:"20px"},logo:{width:"200px"},heading:{marginTop:"30px",textAlign:"center",marginBottom:"30px"},form:{display:"flex",flexDirection:"column",maxWidth:"80%",margin:"auto",backgroundColor:"#fff",borderRadius:"10px",padding:"20px"},formItem:{marginBottom:"10px"},submitBtn:{marginTop:"50px",color:"#fff"}}})),ge=function(){var e=Object(c.useContext)(l),t=e.setUserData,a=e.isAuthenticated,n=e.setIsAuthenticated,r=Object(c.useState)({age:"",sex:"",weight:"",height:"",activity:""}),s=Object(i.a)(r,2),j=s[0],b=s[1],u=Object(c.useState)(!1),h=Object(i.a)(u,2),x=h[0],m=h[1],f=fe(),g=Object(d.g)(),p=function(e){b(Object(O.a)(Object(O.a)({},j),{},Object(V.a)({},e.target.name,e.target.value)))},v=function(){m(!x)};return a?Object(o.jsx)(me,{}):Object(o.jsxs)(Q.a,{className:f.container,children:[Object(o.jsx)("div",{className:f.logoContainer,children:Object(o.jsx)("img",{src:T,alt:"ACME Fitness",className:f.logo})}),Object(o.jsx)(C.a,{variant:"h4",className:f.heading,children:"Welcome"}),Object(o.jsxs)("form",{className:f.form,onSubmit:function(e){e.preventDefault(),v()},children:[Object(o.jsx)(X.a,{type:"number",name:"age",label:"Age",required:!0,className:f.formItem,onChange:p,value:j.age}),Object(o.jsxs)(X.a,{select:!0,name:"sex",label:"Sex",required:!0,className:f.formItem,onChange:p,value:j.sex,children:[Object(o.jsx)(Z.a,{value:"Male",children:"Male"},"male"),Object(o.jsx)(Z.a,{value:"Female",children:"Female"},"female")]}),Object(o.jsx)(X.a,{type:"number",name:"weight",label:"Weight",InputProps:{startAdornment:Object(o.jsx)(_.a,{position:"start",children:"Kg"})},className:f.formItem,required:!0,onChange:p,value:j.weight}),Object(o.jsx)(X.a,{type:"number",name:"height",label:"Height",InputProps:{startAdornment:Object(o.jsx)(_.a,{position:"start",children:"Cm"})},className:f.formItem,required:!0,onChange:p,value:j.height}),Object(o.jsxs)(X.a,{select:!0,label:"Activity",name:"activity",required:!0,className:f.formItem,onChange:p,value:j.activity,children:[Object(o.jsx)(Z.a,{value:"none",children:"Little/no exercise"},"none"),Object(o.jsx)(Z.a,{value:"light",children:"Light exercise"},"light"),Object(o.jsx)(Z.a,{value:"moderate",children:"Moderate exercise (3-5 days/wk)"},"moderate"),Object(o.jsx)(Z.a,{value:"very active",children:"Very active (6-7 days/wk)"},"very active"),Object(o.jsx)(Z.a,{value:"extra active",children:"Extra active (very active & physical job)"},"extra active")]}),Object(o.jsx)($.a,{type:"submit",className:f.submitBtn,variant:"contained",color:"primary",children:"Next"})]}),Object(o.jsxs)(ee.a,{open:x,onClose:v,disableBackdropClick:!0,disableEscapeKeyDown:!0,children:[Object(o.jsx)(te.a,{children:"You're all set!"}),Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(ce.a,{children:"We will personalize your experience based on your information"}),Object(o.jsx)(ne.a,{children:Object(o.jsx)($.a,{onClick:function(e){n(!0),t({age:Number(j.age),sex:j.sex,weight:Number(j.weight),height:Number(j.height),activity:j.activity}),g.push("/")},children:"Ok"})})]})]})]})},pe=a(20),ve=a.n(pe),ye=a(75),Ce=a(559),Ne=a(161),De=a.n(Ne),Ae=Object(g.a)((function(e){return{resultsContainer:{padding:"10px",borderRadius:"5px",backgroundColor:"#fff"},form:{marginBottom:"30px"},spinnerContainer:{display:"flex",justifyContent:"center"}}})),Se=function(){var e=Object(c.useContext)(l).setCurrPage,t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),j=Object(i.a)(s,2),d=j[0],u=j[1],h=Object(c.useState)([]),x=Object(i.a)(h,2),O=x[0],m=x[1],f=Ae();Object(c.useEffect)((function(){e("Search Food")}));var g=function(){var e=Object(ye.a)(ve.a.mark((function e(t){var a,c,r;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,u(!0),a=n.replaceAll(" ","%20"),e.next=6,fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=kpgGjnKQtqTdZY5sRaJjPbAbfTCaHymb8l327r9d&query=".concat(a));case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,m(r.foods),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:u(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(Q.a,{children:[Object(o.jsx)("form",{className:f.form,onSubmit:g,children:Object(o.jsx)(X.a,{fullWidth:!0,placeholder:"Type food here",onChange:function(e){r(e.target.value)},value:n,autoFocus:!0})}),d?Object(o.jsx)("div",{className:f.spinnerContainer,children:Object(o.jsx)(Ce.a,{})}):null,O.length>0?Object(o.jsx)(H.a,{className:f.resultsContainer,children:O.map((function(e,t){return Object(o.jsx)(b.b,{to:{pathname:"/search-food/result/".concat(e.fdcId),state:e},children:Object(o.jsxs)(B.a,{button:!0,children:[Object(o.jsx)(Y.a,{children:e.lowercaseDescription}),Object(o.jsx)(De.a,{style:{fontSize:"small",color:"#333"},edge:"end"})]})},e.fdcId)}))}):null]})},ke=a(307),Ie=Object(g.a)({lineContainer:{height:"250px",width:"350px",margin:"auto",marginBottom:"20px"}}),we=function(){var e=Object(c.useContext)(l).BMIData,t=Ie();return Object(o.jsx)("div",{className:t.lineContainer,children:Object(o.jsx)(ke.a,{data:e,margin:{top:20,right:35,bottom:30,left:35},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2f",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"Dates",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"BMI",legendOffset:-40,legendPosition:"middle"},pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0})})},He=Object(g.a)((function(e){return{dialog:{width:"300px",margin:"auto"},textField:{marginBottom:"20px"}}})),Be=function(e){var t=e.isOpen,a=e.handleDialog,n=Object(c.useContext)(l),r=n.userData,s=n.setUserData,j=Object(c.useState)(null),b=Object(i.a)(j,2),d=b[0],u=b[1],h=Object(c.useState)(null),x=Object(i.a)(h,2),m=x[0],f=x[1],g=He();return Object(o.jsx)(ee.a,{open:t,className:g.dialog,children:Object(o.jsx)(ae.a,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Object(O.a)({},r);t.height=m,t.weight=d,s(t),a()},children:[Object(o.jsx)(X.a,{autoFocus:!0,fullWidth:!0,required:!0,placeholder:"Weight (Kg)",type:"number",className:g.textField,onChange:function(e){u(Number(e.target.value))},value:d}),Object(o.jsx)(X.a,{fullWidth:!0,required:!0,placeholder:"Height (Cm)",type:"number",onChange:function(e){f(Number(e.target.value))},value:m}),Object(o.jsxs)(ne.a,{children:[Object(o.jsx)($.a,{onClick:a,children:"Cancel"}),Object(o.jsx)($.a,{type:"submit",color:"primary",children:"OK"})]})]})})})},Ge=Object(g.a)((function(e){return{header:{fontSize:"30px"},BMIBtn:{width:"100%"}}})),Ye=function(){var e=Object(c.useContext)(l).setCurrPage,t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],s=function(){r(!n)},j=Ge();return Object(c.useEffect)((function(){e("Statistics")})),Object(o.jsxs)(Q.a,{children:[Object(o.jsx)(C.a,{variant:"h3",className:j.header,children:"Daily Intake Levels"}),Object(o.jsx)(je,{}),Object(o.jsx)(C.a,{variant:"h3",className:j.header,children:"BMI Progress"}),Object(o.jsx)(we,{}),Object(o.jsx)($.a,{variant:"contained",className:j.BMIBtn,color:"primary",onClick:s,children:"Take BMI"}),Object(o.jsx)(Be,{isOpen:n,handleDialog:s})]})},Le=a(573),Me=a(563),Fe=a(560),Ee=a(561),We=a(562),Ke=a(577),ze=Object(g.a)((function(e){return{cardContainer:{marginBottom:"15px",display:"flex",border:"1px solid #f6f6f6"},img:{width:"40%"},content:{width:"60%",display:"flex",flexDirection:"column",backgroundColor:"#fff"},rating:{marginTop:"auto",marginLeft:"auto"},viewDetails:{marginTop:"auto",marginLeft:"auto"}}})),qe=function(e){var t=e.img,a=e.title,c=ze();return Object(o.jsxs)(Fe.a,{className:c.cardContainer,children:[Object(o.jsx)(Ee.a,{image:t,title:"Treadmill",component:"img",className:c.img}),Object(o.jsxs)(We.a,{className:c.content,children:[Object(o.jsx)(C.a,{variant:"h5",children:a}),Object(o.jsx)(Ke.a,{name:"read-only",value:"4",readOnly:!0,className:c.rating}),Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:"#",className:c.viewDetails,children:Object(o.jsx)($.a,{variant:"contained",color:"primary",children:"View Details"})})]})]})},Je=a.p+"static/media/treadmill.1d863f39.jpg",Pe=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(qe,{img:Je,title:"Treadmill"}),Object(o.jsx)(qe,{img:Je,title:"Treadmill"}),Object(o.jsx)(qe,{img:Je,title:"Treadmill"}),Object(o.jsx)(qe,{img:Je,title:"Treadmill"}),Object(o.jsx)(qe,{img:Je,title:"Treadmill"})]})},Te=a.p+"static/media/bench.c5b4f941.jpg",Ue=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(qe,{img:Te,title:"Bench"}),Object(o.jsx)(qe,{img:Te,title:"Bench"}),Object(o.jsx)(qe,{img:Te,title:"Bench"}),Object(o.jsx)(qe,{img:Te,title:"Bench"})]})},Re=Object(g.a)((function(e){return{tabsContainer:{display:"flex",justifyContent:"center",marginBottom:"30px"},tab:{backgroundColor:"#fff"}}})),Ve=function(){var e=Object(c.useContext)(l).setCurrPage,t=Object(c.useState)(0),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Re();return Object(c.useEffect)((function(){e("Gym Equipment")})),Object(o.jsxs)(Q.a,{children:[Object(o.jsx)("div",{className:s.tabsContainer,children:Object(o.jsxs)(Le.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"secondary",children:[Object(o.jsx)(Me.a,{label:"Cardio",className:s.tab}),Object(o.jsx)(Me.a,{label:"Strength",className:s.tab})]})}),0===n?Object(o.jsx)(Pe,{}):Object(o.jsx)(Ue,{})]})},Qe=a(564),Xe=a(576),Ze=a.p+"static/media/instructor.e0218ce5.png",_e=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(B.a,{children:[Object(o.jsx)(Qe.a,{children:Object(o.jsx)(Xe.a,{alt:"Instructor",src:Ze})}),Object(o.jsx)(Y.a,{primary:"Instructor Name",secondary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),Object(o.jsx)(be.a,{})]})},$e=Object(g.a)((function(e){return{listContainer:{backgroundColor:"#fff",borderRadius:"5px"}}})),et=function(){var e=Object(c.useContext)(l).setCurrPage,t=$e();return Object(c.useEffect)((function(){e("Our Instructors")})),Object(o.jsx)(Q.a,{children:Object(o.jsxs)(H.a,{className:t.listContainer,children:[Object(o.jsx)(_e,{}),Object(o.jsx)(_e,{}),Object(o.jsx)(_e,{}),Object(o.jsx)(_e,{}),Object(o.jsx)(_e,{}),Object(o.jsx)(_e,{})]})})},tt=function(e){var t=e.isOpen,a=e.handleState;return Object(o.jsxs)(ee.a,{open:t,children:[Object(o.jsx)(te.a,{children:"Information has been updated"}),Object(o.jsx)(ae.a,{children:Object(o.jsx)(ne.a,{children:Object(o.jsx)($.a,{onClick:a,children:"Ok"})})})]})},at=function(e){var t=e.isOpen,a=e.handleState,n=Object(c.useContext)(l),r=n.setUserData,i=n.setIsAuthenticated,s=n.setListData,j=Object(d.g)();return Object(o.jsxs)(ee.a,{open:t,onClose:a,disableBackdropClick:!0,disableEscapeKeyDown:!0,children:[Object(o.jsx)(te.a,{children:"Warning"}),Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(ce.a,{children:"This will erease all your customization and data, returning everything to default"}),Object(o.jsxs)(ne.a,{children:[Object(o.jsx)($.a,{onClick:a,children:"Cancel"}),Object(o.jsx)($.a,{color:"secondary",onClick:function(){r({age:null,sex:null,weight:null,height:null,activity:null}),s([]),i(!1),j.push("/welcome")},children:"Ok"})]})]})]})},ct=Object(g.a)((function(e){return{form:{display:"flex",flexDirection:"column",maxWidth:"80%",margin:"auto",marginBottom:"60px",borderRadius:"10px",backgroundColor:"#fff",padding:"20px"},formItem:{marginBottom:"10px"},submit:{margin:"20px 0"},forwardArrow:{marginLeft:"auto"},resetBtn:{width:"100%",margin:"20px 0"}}})),nt=function(){var e=Object(c.useContext)(l),t=e.setCurrPage,a=e.setUserData,n=Object(c.useState)({age:"",sex:"",weight:"",height:"",activity:""}),r=Object(i.a)(n,2),s=r[0],j=r[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),u=d[0],h=d[1],x=Object(c.useState)(!1),m=Object(i.a)(x,2),f=m[0],g=m[1],p=ct(),v=function(e){j(Object(O.a)(Object(O.a)({},s),{},Object(V.a)({},e.target.name,e.target.value)))},y=function(){g(!f)};return Object(c.useEffect)((function(){t("Settings")})),Object(o.jsxs)(Q.a,{children:[Object(o.jsxs)("form",{className:p.form,onSubmit:function(e){e.preventDefault(),a({age:Number(s.age),sex:s.sex,weight:Number(s.weight),height:Number(s.height),activity:s.activity}),h(!0)},children:[Object(o.jsx)(X.a,{type:"number",label:"Age",required:!0,className:p.formItem,onChange:v,value:s.age}),Object(o.jsxs)(X.a,{select:!0,label:"Sex",required:!0,className:p.formItem,onChange:v,value:s.sex,children:[Object(o.jsx)(Z.a,{value:"Male",children:"Male"},"male"),Object(o.jsx)(Z.a,{value:"Female",children:"Female"},"female")]}),Object(o.jsx)(X.a,{type:"number",label:"Weight",InputProps:{startAdornment:Object(o.jsx)(_.a,{position:"start",children:"Kg"})},className:p.formItem,required:!0,onChange:v,value:s.weight}),Object(o.jsx)(X.a,{type:"number",label:"Height",InputProps:{startAdornment:Object(o.jsx)(_.a,{position:"start",children:"Cm"})},className:p.formItem,required:!0,onChange:v,value:s.height}),Object(o.jsxs)(X.a,{select:!0,label:"Activity",required:!0,className:p.formItem,onChange:v,value:s.activity,children:[Object(o.jsx)(Z.a,{value:"none",children:"Little/no exercise"},"none"),Object(o.jsx)(Z.a,{value:"light",children:"Light exercise"},"light"),Object(o.jsx)(Z.a,{value:"moderate",children:"Moderate exercise (3-5 days/wk)"},"moderate"),Object(o.jsx)(Z.a,{value:"very active",children:"Very active (6-7 days/wk)"},"very active"),Object(o.jsx)(Z.a,{value:"extra active",children:"Extra active (very active & physical job)"},"extra active")]}),Object(o.jsx)($.a,{type:"mubmit",variant:"contained",color:"primary",className:p.submit,children:"Change Information"})]}),Object(o.jsxs)(H.a,{children:[Object(o.jsx)(be.a,{}),Object(o.jsx)("a",{target:"_blank",href:"https://www.acmefitness.com/about-us",rel:"noopener noreferrer",children:Object(o.jsxs)(B.a,{button:!0,children:[Object(o.jsx)(Y.a,{children:"About Us"}),Object(o.jsx)(G.a,{children:Object(o.jsx)(De.a,{style:{fontSize:"small"},className:p.forwardArrow})})]})}),Object(o.jsx)(be.a,{})]}),Object(o.jsx)($.a,{variant:"contained",className:p.resetBtn,color:"secondary",onClick:y,children:"Reset App"}),Object(o.jsx)(tt,{isOpen:u,handleState:function(){h(!u)}}),Object(o.jsx)(at,{isOpen:f,handleState:y})]})},rt=a(565),it=a(566),st=a(567),ot=a(568),lt=a(569),jt=a(570),bt=Object(g.a)((function(e){return{description:{marginBottom:"10px"},eatBtn:{width:"100%",padding:"8px 0",marginBottom:"20px",color:"#fff"},tableContainer:{marginBottom:"30px",backgroundColor:"#fff",borderRadius:"5px"},tableHead:{fontWeight:600}}})),dt=function(){var e=Object(c.useContext)(l),t=e.setCurrPage,a=e.addItem,n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],j=r[1],b=Object(c.useState)(null),u=Object(i.a)(b,2),h=u[0],x=u[1],O=Object(d.h)().state,m=Object(d.g)(),f=bt();Object(c.useEffect)((function(){t(O.lowercaseDescription)}));var g=function(){j(!s)},p=function(){g(),a({data:O,quantity:Number(h)}),m.push("/")};return Object(o.jsxs)(Q.a,{children:[Object(o.jsx)(C.a,{variant:"h5",className:f.description,children:"Values per 100g"}),Object(o.jsx)(rt.a,{className:f.tableContainer,children:Object(o.jsxs)(it.a,{size:"small",children:[Object(o.jsx)(st.a,{children:Object(o.jsxs)(ot.a,{children:[Object(o.jsx)(lt.a,{className:f.tableHead,children:"Name"}),Object(o.jsx)(lt.a,{className:f.tableHead,children:"Amount"}),Object(o.jsx)(lt.a,{className:f.tableHead,children:"Unit"})]})}),Object(o.jsx)(jt.a,{children:O.foodNutrients.map((function(e,t){return Object(o.jsxs)(ot.a,{children:[Object(o.jsx)(lt.a,{children:e.nutrientName}),Object(o.jsx)(lt.a,{children:e.value}),Object(o.jsx)(lt.a,{children:e.unitName.toLowerCase()})]},t)}))})]})}),Object(o.jsx)($.a,{variant:"contained",color:"primary",onClick:g,className:f.eatBtn,children:"Eat"}),Object(o.jsxs)(ee.a,{open:s,onClose:g,children:[Object(o.jsx)(te.a,{children:"Enter Quantity"}),Object(o.jsx)(ae.a,{children:Object(o.jsxs)("form",{onSubmit:p,children:[Object(o.jsx)(X.a,{autoFocus:!0,fullWidth:!0,required:!0,placeholder:"g",type:"number",onChange:function(e){x(e.target.value)},value:h}),Object(o.jsxs)(ne.a,{children:[Object(o.jsx)($.a,{onClick:g,children:"Cancel"}),Object(o.jsx)($.a,{type:"submit",color:"primary",onClick:p,children:"Ok"})]})]})})]})]})},ut=function(){return Object(o.jsxs)(Q.a,{children:[Object(o.jsx)(C.a,{variant:"h2",children:"404"}),Object(o.jsx)(C.a,{variant:"h5",children:"The page that you are looking for does not exist"})]})},ht=function(){var e=Object(c.useContext)(l).isAuthenticated,t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],s=function(e){r(!n)};return Object(o.jsx)(u.a,{theme:x,children:Object(o.jsxs)(b.a,{basename:"/acme-fitness-v1.0",children:[e?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(I,{toggleDrawer:s}),Object(o.jsx)(R,{toggleDrawer:s,menuOpen:n})]}):null,Object(o.jsxs)(d.d,{children:[Object(o.jsx)(d.b,{exact:!0,path:"/welcome",render:function(){return e?Object(o.jsx)(d.a,{to:"/"}):Object(o.jsx)(ge,{})}}),Object(o.jsx)(f,{exact:!0,path:"/",component:me,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/search-food",component:Se,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/search-food/result/:id",component:dt,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/statistics",component:Ye,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/gym-equipment",component:Ve,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/our-instructors",component:et,isAuthenticated:e}),Object(o.jsx)(f,{exact:!0,path:"/settings",component:nt,isAuthenticated:e}),Object(o.jsx)(d.b,{path:"/",component:ut})]})]})})};a(462);r.a.render(Object(o.jsx)(j,{children:Object(o.jsx)(ht,{})}),document.getElementById("root"))}},[[463,1,2]]]);
//# sourceMappingURL=main.9418a689.chunk.js.map