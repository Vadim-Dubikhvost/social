(this["webpackJsonpreact-camasutra"]=this["webpackJsonpreact-camasutra"]||[]).push([[0],{13:function(e,t,n){e.exports={user:"User_user__3B6kM",user__img:"User_user__img__2uwJY",user__block:"User_user__block__3CHUW",user__follow:"User_user__follow__Pksp_",about:"User_about__2nlc7",about__inner:"User_about__inner__sVFY1",about__country:"User_about__country__2mSZb"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(52),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9b316602-a8f1-4f4d-8709-29375184c41c"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},userFollow:function(e){return a.post("follow/ ".concat(e)).then((function(e){return e.data}))},userUnFollow:function(e){return a.delete("follow/ ".concat(e)).then((function(e){return e.data}))}},i={setSelectedUser:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},setStatus:function(e){return a.put("profile/status/",{status:e}).then((function(e){return e.data}))}},c={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},18:function(e,t,n){e.exports={pagination:"Paginator_pagination__1gJ1w",page:"Paginator_page__2FAO5",selected:"Paginator_selected__a1fd-",pag:"Paginator_pag__336sz",arrows:"Paginator_arrows__2WDWQ"}},19:function(e,t,n){e.exports={login:"Login_login__mtRuA",login__header:"Login_login__header__1SLoc",login__userpass:"Login_login__userpass__3fhPe",login__remember:"Login_login__remember__3ncv9",login__btn:"Login_login__btn__10EA1",login__input:"Login_login__input__15i5X"}},24:function(e,t,n){e.exports={header:"Header_header__2xYZa",header__inner:"Header_header__inner__2Fvon",header__logo:"Header_header__logo__2A3To",header__intro:"Header_header__intro__3MZXQ",header__login:"Header_header__login__1Wesa",logout:"Header_logout__3W9OC"}},26:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.91f583c7.svg",a=n(54),s=n.n(a),i=n(1);t.a=function(e){return Object(i.jsx)("div",{className:s.a.preloader,children:Object(i.jsx)("img",{src:r,alt:""})})}},28:function(e,t,n){e.exports={formControl:"Forms_formControl__2svQW",error:"Forms_error__3cCW6",errorText:"Forms_errorText__15otq"}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},a=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),a=n(56),s=(n(0),n(28)),i=n.n(s),c=n(1),o=["input","meta"],u=function(e){return function(t){var n=t.input,s=t.meta,u=Object(a.a)(t,o),l=s.touched&&s.error;return Object(c.jsxs)("div",{className:i.a.control,children:[Object(c.jsx)("div",{className:i.a.formControl+" "+(l?i.a.error:""),children:Object(c.jsx)(e,Object(r.a)(Object(r.a)({},n),u))}),Object(c.jsx)("div",{className:i.a.errorText+" "+(l?i.a.error:""),children:l&&Object(c.jsxs)("span",{children:[" ",s.error," "]})})]})}}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return h}));var r=n(4),a=n.n(r),s=n(9),i=n(27),c=n(3),o=n(14),u="SoCial/profile/ADD-POST",l="SoCial/profile/SET_USER_PROFILE",d="SoCial/profile/SET_STATUS",f={posts:[{id:1,message:"Hello!",likesCount:23},{id:2,message:"Nice to meet you on my profile!",likesCount:11},{id:3,message:"It`s my first post!",likesCount:35}],profile:null,status:""},b=function(e){return{type:u,postData:e}},j=function(e){return{type:d,status:e}},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setSelectedUser(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(j(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setStatus(e);case 2:0===t.sent.resultCode&&n(j(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:5,message:t.postData,likesCount:0}])});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(27),a=n(3),s="SEND-MESSAGE",i="DELETE_MESSAGE",c={dialogs:[{id:1,name:"Vadim"},{id:2,name:"Olia"},{id:3,name:"Vlad"},{id:4,name:"Maksim"},{id:5,name:"Yurii"},{id:6,name:"Pasha"},{id:7,name:"Yulia"},{id:8,name:"Natali"},{id:9,name:"Anton"}],messages:[{id:1,message:"Sorry"},{id:2,message:"This page isn`t already done"},{id:3,message:"I haven`t a API for it now =["}],newMessageText:""},o=function(e){return{type:s,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});case i:return Object(a.a)(Object(a.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.messageId}))});default:return e}}},53:function(e,t,n){e.exports={users:"Users_users__3EMZA"}},54:function(e,t,n){e.exports={preloader:"Preloader_preloader__1clvJ"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(3),a=n(20),s=n(21),i=n(23),c=n(22),o=n(0),u=n.n(o),l=n(16),d=n(5),f=n(1),b=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(b)(t)}},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},7:function(e,t,n){e.exports={nav:"Navbar_nav__2zLWK",nav__link:"Navbar_nav__link__23STJ",nav__button:"Navbar_nav__button__29Ed_",active:"Navbar_active__1gGEj"}},93:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},a=n(0),s=n.n(a),i=n(33),c=n.n(i),o=(n(62),n(20)),u=n(21),l=n(23),d=n(22),f=(n(63),n(64),n(1)),b=function(){return Object(f.jsx)("div",{className:"",children:"Music"})},j=(n(66),function(){return Object(f.jsx)("div",{className:"",children:"Settings"})}),_=(n(67),function(){return Object(f.jsx)("div",{className:"",children:"News"})}),p=n(7),h=n.n(p),g=n(8),m=function(){return Object(f.jsxs)("nav",{className:h.a.nav,children:[Object(f.jsx)(g.b,{to:"/news",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"News"})}),Object(f.jsx)(g.b,{to:"/profile",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"Profile"})}),Object(f.jsx)(g.b,{to:"/dialogs",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"Messages"})}),Object(f.jsx)(g.b,{to:"/users",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"Users"})}),Object(f.jsx)(g.b,{to:"/music",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"Music"})}),Object(f.jsx)(g.b,{to:"/settings",className:h.a.nav__link,activeClassName:h.a.active,children:Object(f.jsx)("div",{className:h.a.nav__button,children:"Settings"})})]})},O=n(5),v=n(16),x=n(4),w=n.n(x),N=n(9),C=n(27),S=n(3),y=n(14),U=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},k="SoCial/users/FOLLOW",P="SoCial/users/UNFOLLOW",A="SoCial/users/SET_USERS",E="SoCial/users/SET_CURRENT_PAGE",I="SoCial/users/SET_TOTAL_USERS_COUNT",F="SoCial/users/TOGGLE_IS_FETCHING",T="SoCial/users/TOGGLE_IS_FOLLOWING_USER",M={users:[],totalItemsCount:0,pageSize:3,currentPage:1,isFetching:!1,followingUsers:[]},L=function(e){return{type:k,userId:e}},z=function(e){return{type:P,userId:e}},R=function(e){return{type:A,users:e}},D=function(e){return{type:E,page:e}},W=function(e){return{type:I,totalCount:e}},G=function(e){return{type:F,isFetching:e}},H=function(e,t){return{type:T,isFetching:e,userId:t}},J=function(){var e=Object(N.a)(w.a.mark((function e(t,n,r,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(H(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(S.a)(Object(S.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!0})});case P:return Object(S.a)(Object(S.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!1})});case A:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case E:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.page});case I:return Object(S.a)(Object(S.a)({},e),{},{totalItemsCount:t.totalCount});case F:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case T:return Object(S.a)(Object(S.a)({},e),{},{followingUsers:t.isFetching?[].concat(Object(C.a)(e.followingUsers),[t.userId]):e.followingUsers.filter((function(e){return e!==t.userId}))});default:return e}},Z=n(53),V=n.n(Z),X=n(13),B=n.n(X),Q=n.p+"static/media/Logo_4.3233213a.png",q=function(e){var t=e.users,n=e.follow,r=e.unfollow,a=e.followingUsers;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:B.a.user,children:[Object(f.jsx)("div",{className:B.a.user__photo,children:Object(f.jsx)(g.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:Q,alt:"",className:B.a.user__img})})}),Object(f.jsxs)("div",{className:B.a.user__block,children:[Object(f.jsxs)("div",{className:B.a.about,children:[Object(f.jsxs)("div",{className:B.a.about__inner,children:[Object(f.jsx)("div",{className:B.a.about__name,children:t.name}),Object(f.jsx)("div",{className:B.a.about__status,children:t.status})]}),Object(f.jsxs)("div",{className:B.a.about__location,children:[Object(f.jsxs)("div",{className:B.a.about__city,children:["props.location.cityName",","]}),Object(f.jsx)("div",{className:B.a.about__country,children:"props.location.country"})]})]}),Object(f.jsx)("div",{className:B.a.user__follow,children:t.followed?Object(f.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})})]})]})})},K=n(51),$=n(18),ee=n.n($),te=n.p+"static/media/leftarrow.ceb49992.svg",ne=n.p+"static/media/rightarrow1.da2a7013.svg",re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,i=e.portionSize,c=void 0===i?5:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/c),b=Object(a.useState)(Math.ceil(r/c)),j=Object(K.a)(b,2),_=j[0],p=j[1],h=(_-1)*c+1,g=_*c;return console.log(_),Object(f.jsxs)("div",{className:ee.a.pagination,children:[_>1&&Object(f.jsx)("button",{className:ee.a.pag,onClick:function(){p(_-1)},children:Object(f.jsx)("img",{src:te,className:ee.a.arrows})}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(f.jsxs)("span",{className:r===e?ee.a.selected+" "+ee.a.page:ee.a.page,onClick:function(){s(e,_)},children:[" ",e," "]},e)})),d>_&&Object(f.jsx)("button",{className:ee.a.pag,onClick:function(){p(_+1),console.log(_)},children:Object(f.jsx)("img",{src:ne,className:ee.a.arrows})})]})},ae=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.users,i=e.follow,c=e.unfollow,o=e.followingUsers;e.currentPortion;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:V.a.users,children:s.map((function(e){return Object(f.jsx)(q,{users:e,follow:i,unfollow:c,followingUsers:o},e.id)}))}),Object(f.jsx)(re,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:a})]})},se=n(26),ie=n(17),ce=(n(57),n(92),function(e){return e.usersPage.users}),oe=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.totalItemsCount},le=function(e){return e.usersPage.pageSize},de=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingUsers},be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t,n){var r=e.props.pageSize;e.props.getAllUsers(t,r,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getAllUsers(t,n)}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:this.props.isFetching?Object(f.jsx)(se.a,{}):Object(f.jsx)(ae,{users:this.props.users,totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.userFollowed,unfollow:this.props.userUnfollowed,onPageChanged:this.onPageChanged,followingUsers:this.props.followingUsers})})}}]),n}(s.a.Component),je=Object(ie.c)(Object(v.b)((function(e){return{users:ce(e),currentPage:oe(e),totalItemsCount:ue(e),pageSize:le(e),isFetching:de(e),followingUsers:fe(e)}}),{follow:L,unfollow:z,setUsers:R,setTotalUsersCount:W,getAllUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return function(){var n=Object(N.a)(w.a.mark((function n(r){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(D(e)),r(G(!0)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(G(!1)),r(R(a.items)),r(W(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},userFollowed:function(e){return function(){var t=Object(N.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,L,y.c.userFollow.bind(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},userUnfollowed:function(e){return function(){var t=Object(N.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(n,e,z,y.c.userUnFollow.bind(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(be),_e="SoCial/auth/SET_USER_AUTH",pe="ERROR",he={id:null,email:null,login:null,isAuth:!1,errorMessage:"",failedAuth:!1},ge=function(e,t,n,r){return{type:_e,data:{id:e,email:t,login:n,isAuth:r}}},me=function(e,t){return{type:pe,failedAuth:e,message:t}},Oe=function(){return function(){var e=Object(N.a)(w.a.mark((function e(t){var n,r,a,s,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,i=r.email,t(ge(a,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(S.a)(Object(S.a)({},e),t.data);case pe:return Object(S.a)(Object(S.a)({},e),{},{errorMessage:t.message,failedAuth:t.failedAuth});default:return e}},xe=n(24),we=n.n(xe),Ne=function(e){return Object(f.jsxs)("header",{className:we.a.header,children:[Object(f.jsxs)("div",{className:we.a.header__inner,children:[Object(f.jsx)("img",{src:Q,alt:"",className:we.a.header__logo}),Object(f.jsx)("div",{className:we.a.header__intro,children:"So...Cial"})]}),Object(f.jsx)("div",{className:we.a.header__login,children:e.isAuth?Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:e.login})," ",Object(f.jsx)("button",{className:we.a.logout,onClick:e.logout,children:"Logout"})," "]}):Object(f.jsx)(g.b,{to:"/login",children:"Login"})})]})},Ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(Ne,Object(S.a)({},this.props))}}]),n}(s.a.Component),Se=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ce),ye=n(30),Ue=n(29),ke=n(40),Pe=n(19),Ae=n.n(Pe),Ee=function(e){var t=e.onSubmit,n=e.failedAuth,r=e.errorMessage,a=Object(ke.a)("input");return Object(f.jsx)(ye.b,{onSubmit:t,children:function(e){var t=e.handleSubmit,s=e.submitting,i=e.pristine;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsx)("div",{className:"login-page__login",children:Object(f.jsx)(ye.a,{className:Ae.a.login__userlogin+" "+Ae.a.login__input,name:"login",component:a,placeholder:"Login",validate:Object(Ue.b)(Ue.c)})}),Object(f.jsx)("div",{className:"login-page__password",children:Object(f.jsx)(ye.a,{className:Ae.a.login__userpass+" "+Ae.a.login__input,type:"password",name:"password",component:a,placeholder:"Password",validate:Object(Ue.b)(Ue.c)})}),Object(f.jsxs)("div",{className:"login-page__remember",children:[Object(f.jsx)(ye.a,{className:Ae.a.login__remember,name:"rememberMe",component:"input",type:"checkbox"}),"Remember me"]}),n&&Object(f.jsx)("span",{children:r}),Object(f.jsx)("div",{className:"login-page__button",children:Object(f.jsx)("button",{className:Ae.a.login__btn,type:"submit",disabled:s||i,children:"Login"})})]})}})},Ie=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,errorMessage:e.auth.errorMessage,failedAuth:e.auth.failedAuth}}),{login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(N.a)(w.a.mark((function r(a){var s;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(Oe()):a(me(!0,s.messages[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=function(){var t=Object(N.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.login(n.login,n.password,n.rememberMe),n.login=n.password=n.rememberMe=void 0;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.isAuth?Object(f.jsx)(O.a,{to:"/profile"}):Object(f.jsxs)("div",{className:Ae.a.login,children:[Object(f.jsx)("div",{className:Ae.a.login__header,children:"Login"}),Object(f.jsx)(Ee,{onSubmit:t,errorMessage:e.errorMessage,failedAuth:e.failedAuth})]})})),Fe="INITIALIZE_SUCCESS",Te={initialized:!1},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Le=n(50),ze=n(41),Re=n(55),De=Object(ie.b)({profilePage:ze.b,dialogsPage:Le.a,usersPage:Y,auth:ve,app:Me}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.c,Ge=Object(ie.d)(De,We(Object(ie.a)(Re.a)));window.store=Ge;var He=Ge,Je=function(e){return function(t){return Object(f.jsx)(s.a.Suspense,{fallback:Object(f.jsx)(se.a,{}),children:Object(f.jsx)(e,Object(S.a)({},t))})}},Ye=s.a.lazy((function(){return n.e(4).then(n.bind(null,105))})),Ze=s.a.lazy((function(){return n.e(3).then(n.bind(null,104))})),Ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(Se,{}),Object(f.jsx)(m,{}),Object(f.jsxs)("div",{className:"wrapper__content",children:[Object(f.jsx)(O.b,{path:"/news",component:_}),Object(f.jsx)(O.b,{path:"/profile/:userId?",render:Je(Ze)}),Object(f.jsx)(O.b,{path:"/dialogs",render:Je(Ye)}),Object(f.jsx)(O.b,{path:"/users",render:function(){return Object(f.jsx)(je,{})}}),Object(f.jsx)(O.b,{path:"/login",render:function(){return Object(f.jsx)(Ie,{})}}),Object(f.jsx)(O.b,{path:"/music",component:b}),Object(f.jsx)(O.b,{path:"/settings",component:j})]})]}):Object(f.jsx)(se.a,{})}}]),n}(s.a.Component),Xe=Object(ie.c)(O.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Ve),Be=function(e){return Object(f.jsx)(g.a,{children:Object(f.jsx)(v.a,{store:He,children:Object(f.jsx)(Xe,{})})})};c.a.render(Object(f.jsx)(Be,{}),document.getElementById("root")),r()}},[[93,1,2]]]);
//# sourceMappingURL=main.f2aa3e41.chunk.js.map