import{a as b}from"./chunk-PBDDY2LF.js";import{a as E}from"./chunk-IXE6IFMO.js";import{A as N,F as R,G as A,H as Y,Oa as V,Pa as B,ba as U,ga as D,ka as L,m as k,na as G,q as x,qa as q,s as z,u as g,v as S,w as j,x as F,z as I}from"./chunk-FJQ5UOIL.js";import{$b as v,Gb as a,Hb as s,Ib as c,Ob as _,Vc as m,Xb as h,a as M,b as C,db as O,e as P,eb as l,fa as p,pa as w,qa as d,xb as y}from"./chunk-4QRX75KM.js";var u=(()=>{let t=class t{constructor(i,n,r,o,f,W){this.fb=i,this.accountService=n,this.router=r,this.auth=o,this.afs=f,this.toaster=W}ngOnInit(){this.initAuthForm()}initAuthForm(){this.authForm=this.fb.group({email:[null,[g.required,g.email]],password:[null,[g.required]]})}loginUser(){let{email:i,password:n}=this.authForm.value;this.login(i,n).then(()=>{this.toaster.success("User successfully login")}).catch(r=>{this.toaster.error(r.message)})}login(i,n){return P(this,null,function*(){let r=yield D(this.auth,i,n);G(q(this.afs,"users",r.user.uid)).subscribe(o=>{let f=C(M({},o),{uid:r.user.uid});localStorage.setItem("currentUser",JSON.stringify(f)),o&&o.role===b.USER?this.router.navigate(["/cabinet"]):o&&o.role===b.ADMIN&&this.router.navigate(["/admin"]),this.accountService.isUserLogin$.next(!0)},o=>{console.log("error",o)})})}};t.\u0275fac=function(n){return new(n||t)(l(R),l(B),l(k),l(U),l(L),l(E))},t.\u0275cmp=w({type:t,selectors:[["app-authorization"]],standalone:!0,features:[v],decls:21,vars:1,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],["data-tilt","",1,"login100-pic","js-tilt"],["src","https://static.vecteezy.com/system/resources/previews/020/101/791/non_2x/admin-login-blue-gradient-concept-icon-administrator-account-learning-management-system-access-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg","alt","IMG"],[1,"login100-form","validate-form",3,"formGroup"],[1,"login100-form-title"],["data-validate","Valid email is required: ex@abc.xyz",1,"wrap-input100","validate-input"],["formControlName","email","type","text","name","email","placeholder","Email",1,"input100"],[1,"focus-input100"],[1,"symbol-input100"],["aria-hidden","true",1,"fa","fa-envelope"],["data-validate","Password is required",1,"wrap-input100","validate-input"],["formControlName","password","type","password","name","pass","placeholder","Password",1,"input100"],["aria-hidden","true",1,"fa","fa-lock"],[1,"container-login100-form-btn"],["type","button",1,"login100-form-btn",3,"click"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,"img",4),s(),a(5,"form",5)(6,"span",6),h(7,"Admin Login"),s(),a(8,"div",7),c(9,"input",8)(10,"span",9),a(11,"span",10),c(12,"i",11),s()(),a(13,"div",12),c(14,"input",13)(15,"span",9),a(16,"span",10),c(17,"i",14),s()(),a(18,"div",15)(19,"button",16),_("click",function(){return r.loginUser()}),h(20,"Login"),s()()()()()()),n&2&&(O(5),y("formGroup",r.authForm))},dependencies:[A,F,z,S,j,Y,I,N,m],styles:['.btn[_ngcontent-%COMP%]{background-color:#b5d8f7}a[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:14px;line-height:1.7;color:#666;margin:0;transition:all .4s;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s}a[_ngcontent-%COMP%]:focus{outline:none!important}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#57b846}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}p[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:14px;line-height:1.7;color:#666;margin:0}ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{margin:0;list-style-type:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{outline:none;border:none}textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus{border-color:transparent!important}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:transparent}input[_ngcontent-%COMP%]:focus:-moz-placeholder{color:transparent}input[_ngcontent-%COMP%]:focus::-moz-placeholder{color:transparent}input[_ngcontent-%COMP%]:focus:-ms-input-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus:-moz-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus::-moz-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder{color:transparent}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#999}input[_ngcontent-%COMP%]:-moz-placeholder{color:#999}input[_ngcontent-%COMP%]::-moz-placeholder{color:#999}input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#999}textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#999}textarea[_ngcontent-%COMP%]:-moz-placeholder{color:#999}textarea[_ngcontent-%COMP%]::-moz-placeholder{color:#999}textarea[_ngcontent-%COMP%]:-ms-input-placeholder{color:#999}button[_ngcontent-%COMP%]{outline:none!important;border:none;background:transparent}button[_ngcontent-%COMP%]:hover{cursor:pointer}iframe[_ngcontent-%COMP%]{border:none!important}.txt1[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:13px;line-height:1.5;color:#999}.txt2[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:13px;line-height:1.5;color:#666}.limiter[_ngcontent-%COMP%]{width:100%;margin:0 auto}.container-login100[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:absolute;inset:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:15px;background:#000;background:-webkit-linear-gradient(to right,#434343,#000000);background:linear-gradient(to right,#434343,#000)}.wrap-login100[_ngcontent-%COMP%]{width:960px;background:#fff;border-radius:10px;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;min-height:80vh}.login100-pic[_ngcontent-%COMP%]{width:316px}.login100-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.login100-form[_ngcontent-%COMP%]{width:290px}.login100-form-title[_ngcontent-%COMP%]{font-family:Poppins-Bold;font-size:24px;color:#333;line-height:1.2;text-align:center;width:100%;display:block;padding-bottom:54px}.wrap-input100[_ngcontent-%COMP%]{position:relative;width:100%;z-index:1;margin-bottom:10px}.input100[_ngcontent-%COMP%]{font-family:Poppins-Medium;font-size:15px;line-height:1.5;color:#666;display:block;width:100%;background:#e6e6e6;height:50px;border-radius:25px;padding:0 30px}.focus-input100[_ngcontent-%COMP%]{display:block;position:absolute;border-radius:25px;bottom:0;left:0;z-index:-1;width:100%;height:100%;box-shadow:0 0;color:#57b846cc}.input100[_ngcontent-%COMP%]:focus + .focus-input100[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_anim-shadow .5s ease-in-out forwards;animation:_ngcontent-%COMP%_anim-shadow .5s ease-in-out forwards}@-webkit-keyframes _ngcontent-%COMP%_anim-shadow{to{box-shadow:0 0 70px 25px;opacity:0}}@keyframes _ngcontent-%COMP%_anim-shadow{to{box-shadow:0 0 70px 25px;opacity:0}}.symbol-input100[_ngcontent-%COMP%]{font-size:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;align-items:center;position:absolute;border-radius:25px;bottom:0;left:0;width:100%;height:100%;padding-left:35px;pointer-events:none;color:#666;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.input100[_ngcontent-%COMP%]:focus + .focus-input100[_ngcontent-%COMP%] + .symbol-input100[_ngcontent-%COMP%]{color:#57b846;padding-left:28px}.container-login100-form-btn[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center;padding-top:20px}.login100-form-btn[_ngcontent-%COMP%]{font-family:Montserrat-Bold;font-size:15px;line-height:1.5;color:#fff;text-transform:uppercase;width:100%;height:50px;border-radius:25px;background:#57b846;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;padding:0 25px;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.login100-form-btn[_ngcontent-%COMP%]:hover{background:#333}@media (max-width: 992px){.wrap-login100[_ngcontent-%COMP%]{padding:177px 90px 33px 85px}.login100-pic[_ngcontent-%COMP%]{width:35%}.login100-form[_ngcontent-%COMP%]{width:50%}}@media (max-width: 768px){.wrap-login100[_ngcontent-%COMP%]{padding:100px 80px 33px}.login100-pic[_ngcontent-%COMP%]{display:none}.login100-form[_ngcontent-%COMP%]{width:100%}}@media (max-width: 576px){.wrap-login100[_ngcontent-%COMP%]{padding:100px 15px 33px}}.validate-input[_ngcontent-%COMP%]{position:relative}.alert-validate[_ngcontent-%COMP%]:before{content:attr(data-validate);position:absolute;max-width:70%;background-color:#fff;border:1px solid #c80000;border-radius:13px;padding:4px 25px 4px 10px;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);right:8px;pointer-events:none;font-family:Poppins-Medium;color:#c80000;font-size:13px;line-height:1.4;text-align:left;visibility:hidden;opacity:0;-webkit-transition:opacity .4s;-o-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.alert-validate[_ngcontent-%COMP%]:after{content:"\\f06a";font-family:FontAwesome;display:block;position:absolute;color:#c80000;font-size:15px;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);right:13px}.alert-validate[_ngcontent-%COMP%]:hover:before{visibility:visible;opacity:1}@media (max-width: 992px){.alert-validate[_ngcontent-%COMP%]:before{visibility:visible;opacity:1}}']});let e=t;return e})();var $=[{path:"",component:u}],J=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[x.forChild($),x]});let e=t;return e})();var ht=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[m,J,V,u]});let e=t;return e})();export{ht as AuthorizationModule};
