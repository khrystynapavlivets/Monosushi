import './polyfills.server.mjs';
import{a as Le,b as Ge,c as X,e as Z,f as ee,g as te,i as M,j as ie}from"./chunk-HUYRFWYQ.mjs";import{a as W}from"./chunk-LHM45PHD.mjs";import{$ as de,S as Me,V as Te,X as Oe,Y as Be,Z as Ne,_ as Ue,b as R,d as _,e as L,ea as je,f as G,g as z,h as Ae,i as H,j as Y,k as ke,l as Ve,m as Ie,n as ce,o as K,p as J,q as Q,xa as qe,ya as $e,za as Re}from"./chunk-IYCWGQYF.mjs";import{a as Se,e as Fe,p as we,r as Ee,s as Pe,t as De,v as _e}from"./chunk-KXDFEOLO.mjs";import{$ as ae,Ab as ge,Bb as B,Cb as N,Db as o,Eb as a,Fb as m,Ib as x,Lb as p,Mb as d,Rc as xe,Ub as u,Uc as ve,Vb as y,Wb as D,Xc as ye,Ya as V,Yb as A,Yc as $,Zb as re,Zc as k,_b as w,aa as le,ab as c,ac as U,bb as g,cc as be,dc as q,ea as ne,ka as P,la as ue,sb as S,ta as h,ua as f,ub as s,vb as F,xb as I,zb as b}from"./chunk-Z2HTR7MJ.mjs";import{a as Ce,i as j}from"./chunk-3CVZQN5Z.mjs";var it=()=>["discount"],ot=()=>["category"],nt=()=>["product"],rt=()=>["order"],se=(()=>{let n=class n{constructor(e,t){this.router=e,this.accountService=t}ngOnInit(){}logOut(){this.router.navigate(["/"]),localStorage.removeItem("currentUser"),this.accountService.isUserLogin$.next(!0)}};n.\u0275fac=function(t){return new(t||n)(g(Ee),g(Re))},n.\u0275cmp=P({type:n,selectors:[["app-admin"]],standalone:!0,features:[A],decls:16,vars:8,consts:[[1,"admin_panel","d-flex","flex-column"],["id","v-pills-tab","role","tablist","aria-orientation","vertical",1,"nav","nav-pills","my-5","ms-5"],["id","v-pills-tab","role","tablist","aria-orientation","vertical",1,"nav","nav-pills","d-flex","flex-column"],["routerLinkActive","active","type","button",1,"nav-link",3,"routerLink"],["type","button",1,"btn-out","my-3",3,"click"],["id","v-pills-tabContent",1,"tab-content","ms-5","ps-5","w-75","d-flex","flex-column"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),u(4,"\u0410\u043A\u0446\u0456\u0457"),a(),o(5,"button",3),u(6,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"),a(),o(7,"button",3),u(8,"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438"),a(),o(9,"button",3),u(10,"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"),a(),o(11,"button",4),p("click",function(){return l.logOut()}),o(12,"b"),u(13,"\u0412\u0418\u0425\u0406\u0414"),a()()(),o(14,"div",5),m(15,"router-outlet"),a()()()),t&2&&(c(3),s("routerLink",re(4,it)),c(2),s("routerLink",re(5,ot)),c(2),s("routerLink",re(6,nt)),c(2),s("routerLink",re(7,rt)))},dependencies:[k,Pe,De,we,Fe],styles:[".admin_panel[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:20px 50px;background-color:#fff;color:#000;border-color:#b5d8f7;outline:none;border-bottom:1px solid lightgray;border-right:1px solid lightgray;border-left:1px solid transparent;border-radius:0%;box-sizing:border-box;transition:.35s}.admin_panel[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#b5d8f7}.active[_ngcontent-%COMP%]{border:2px solid #b5d8f7;border-radius:5px;border-color:#b5d8f7;border-top:1px solid none;border-bottom:1px solid lightgray;border-right:1px solid lightgray;border-top:3px solid #b5d8f7;border-left:1px solid white;border-right:1px solid transparent;font-weight:700;padding:20px 40px;box-sizing:border-box}.btn-out[_ngcontent-%COMP%]{width:70%;border-radius:10px;border:2px solid #b5d8f7;background-color:#b5d8f7;transition:.35s;cursor:pointer;padding:14px 16px;font-size:17px;margin:0 auto}.btn-out[_ngcontent-%COMP%]:hover{background-color:initial;color:#000}"]});let i=n;return i})();var me=(()=>{let n=class n{constructor(e,t){this.http=e,this.afs=t,this.url=$e.BACKEND_URL,this.api={categories:`${this.url}/categories`},this.categoryCollection=Me(this.afs,"categories")}getAllFirebase(){return Oe(this.categoryCollection,{idField:"id"})}getOneFirebase(e){let t=de(this.afs,`categories/${e}`);return Be(t,{idField:"id"})}createFirebase(e){return Ne(this.categoryCollection,e)}updateFirebase(e,t){let l=de(this.afs,`categories/${t}`);return je(l,Ce({},e))}deleteFirebase(e){let t=de(this.afs,`categories/${e}`);return Ue(t)}};n.\u0275fac=function(t){return new(t||n)(ne(Se),ne(Te))},n.\u0275prov=ae({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var at=(i,n)=>n.id,He=i=>({color:i});function lt(i,n){if(i&1){let r=x();o(0,"div",15)(1,"input",16),p("change",function(t){h(r);let l=d(2);return f(l.upload(t))}),a()(),o(2,"div",17),m(3,"div",18),a()}if(i&2){let r=d(2);c(3),F("width",r.uploadPercent,"%")}}function ut(i,n){if(i&1){let r=x();m(0,"img",19),o(1,"button",20),p("click",function(){h(r);let t=d(2);return f(t.deleteImage())}),u(2," \u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418 "),a()}if(i&2){let r=d(2);s("src",r.valueByControl("imagePath"),V)}}function ct(i,n){if(i&1){let r=x();o(0,"div",2)(1,"form",8),p("ngSubmit",function(){h(r);let t=d();return f(t.addCategory())}),o(2,"div",9)(3,"div",10),m(4,"input",11),a(),o(5,"div",10),m(6,"input",12),o(7,"div",13),u(8,"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0448\u043B\u044F\u0445"),a()()(),S(9,lt,4,2)(10,ut,3,1),o(11,"button",14),u(12),a()()()}if(i&2){let r=d();c(),s("formGroup",r.categoryForm),c(8),b(9,r.isUploaded?-1:9),c(),b(10,r.isUploaded?10:-1),c(),F("background-color",r.primaryColor),s("disabled",r.categoryForm.invalid||!r.isUploaded),c(),D(" ",r.editStatus?"\u0417\u0411\u0415\u0420\u0415\u0413\u0422\u0418":"\u0414\u041E\u0414\u0410\u0422\u0418"," ")}}function dt(i,n){i&1&&(o(0,"span"),u(1,"..."),a())}function st(i,n){if(i&1){let r=x();o(0,"tr")(1,"td"),u(2),a(),o(3,"td"),u(4),U(5,"slice"),S(6,dt,2,0,"span"),a(),o(7,"td",21),u(8),a(),o(9,"td"),m(10,"img",22),a(),o(11,"td")(12,"button",23),p("click",function(){let t=h(r).$implicit,l=d();return f(l.editCategory(t))})("click",function(){h(r);let t=d();return f(t.AddCategoryForm())}),u(13," \u0420\u0415\u0414\u0410\u0413\u0423\u0412\u0410\u0422\u0418 "),a(),o(14,"button",24),p("click",function(){let t=h(r).$implicit,l=d();return f(l.deleteCategory(t))}),u(15," \u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418 "),a()()()}if(i&2){let r=n.$implicit,e=d();c(2),y(r.id),c(2),D(" ",q(5,12,r.name,0,70)," "),c(2),b(6,r.name.length>70?6:-1),c(2),D(" ",r.path," "),c(2),s("src",r.imagePath,V),c(2),I(w(16,He,e.primaryColor)),c(2),I(w(18,He,e.primaryColor)),F("cursor",e.editStatus?"not-allowed":"pointer"),s("disabled",e.editStatus)}}var pe=(()=>{let n=class n{constructor(e,t,l,C){this.fb=e,this.categoryService=t,this.storage=l,this.toaster=C,this.adminCategories=[],this.editStatus=!1,this.isUploaded=!1,this.addCategoryForm=!0,this.primaryColor="#b5d8f7"}ngOnInit(){this.initCategoryForm(),this.loadCategories()}toggleAddCategoryForm(){this.addCategoryForm=!this.addCategoryForm}AddCategoryForm(){this.addCategoryForm=!1}initCategoryForm(){this.categoryForm=this.fb.group({name:[null,_.required],path:[null,_.required],imagePath:[,_.required]})}loadCategories(){this.categoryService.getAllFirebase().subscribe(e=>{this.adminCategories=e})}addCategory(){this.editStatus?this.categoryService.updateFirebase(this.categoryForm.value,this.currentCategoryId).then(()=>{this.loadCategories(),this.toaster.success("Category successfully updated")}):this.categoryService.createFirebase(this.categoryForm.value).then(()=>{this.toaster.success("Category successfully created")}),this.editStatus=!1,this.categoryForm.reset(),this.isUploaded=!1,this.uploadPercent=0}editCategory(e){this.categoryForm.patchValue({name:e.name,path:e.path,imagePath:e.imagePath}),this.editStatus=!0,this.currentCategoryId=e.id,this.isUploaded=!0}deleteCategory(e){this.categoryService.deleteFirebase(e.id).then(()=>{this.loadCategories(),this.toaster.success("Category successfully deleted")})}upload(e){let t=e.target.files[0];this.uploadFile("images",t.name,t).then(l=>{this.categoryForm.patchValue({imagePath:l}),this.isUploaded=!0}).catch(l=>{console.log(l)})}uploadFile(e,t,l){return j(this,null,function*(){let C=`${e}/${t}`,E="";if(l)try{let v=M(this.storage,C),T=ie(v,l);Z(T).subscribe(oe=>{this.uploadPercent=oe.progress}),yield T,E=yield te(v)}catch(v){console.error(v)}else console.log("wrong format");return Promise.resolve(E)})}deleteImage(){let e=M(this.storage,this.valueByControl("imagePath"));ee(e).then(()=>{console.log("File deleted"),this.isUploaded=!1,this.uploadPercent=0,this.categoryForm.patchValue({imagePath:null})})}valueByControl(e){return this.categoryForm.get(e)?.value}};n.\u0275fac=function(t){return new(t||n)(g(K),g(me),g(X),g(W))},n.\u0275cmp=P({type:n,selectors:[["app-admin-category"]],standalone:!0,features:[A],decls:22,vars:1,consts:[[1,"container-fluid","d-flex","flex-column"],["type","button",1,"btnAddCategoryForm","fw-bold",3,"click"],[1,"py-3"],[1,"my-5",2,"display","grid","place-items","center","width","100%"],[1,"table"],["scope","col",2,"width","10%"],["scope","col",2,"width","20%"],["scope","col",2,"width","40%"],[3,"ngSubmit","formGroup"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-3",2,"width","48%"],["formControlName","name","name","name","type","text","placeholder","*\u041D\u0410\u0417\u0412\u0410","required","",1,"form-control",2,"height","3.5rem"],["formControlName","path","name","path","type","text","placeholder","*\u0428\u043B\u044F\u0445","required","",1,"form-control",2,"height","3.5rem"],[1,"invalid-feedback"],["type","submit",1,"btn","fw-bold","my-3","w-100","border-0","btnSaveAdd",3,"disabled"],[1,"mb-3"],["type","file","required","",1,"form-control",3,"change"],[1,"progress","mb-3"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped"],["width","100px","alt","",1,"m-3",3,"src"],["type","button",1,"btn","fw-bold",3,"click"],[1,"fw-medium"],["alt","","height","50px",3,"src"],["type","button",1,"btn","btnEdDel","fw-bold",2,"color","primaryColor",3,"click"],["type","button",1,"btn","btnEdDel","fw-bold",3,"click","disabled"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"div")(2,"button",1),p("click",function(){return l.toggleAddCategoryForm()}),u(3," \u0414\u041E\u0414\u0410\u0422\u0418 \u041A\u0410\u0422\u0415\u0413\u041E\u0420\u0406\u042E "),a(),S(4,ct,13,7,"div",2),o(5,"div",3)(6,"table",4)(7,"thead")(8,"tr")(9,"th",5),u(10,"\u2116"),a(),o(11,"th",6),u(12,"\u041D\u0410\u0417\u0412\u0410"),a(),o(13,"th",7),u(14,"\u0428\u041B\u042F\u0425"),a(),o(15,"th",6),u(16,"\u041A\u0410\u0420\u0422\u0418\u041D\u041A\u0410"),a(),o(17,"th",6),u(18,"\u0414\u0406\u0407"),a()()(),o(19,"tbody"),B(20,st,16,20,"tr",null,at),a()()()()()),t&2&&(c(4),b(4,l.addCategoryForm?-1:4),c(16),N(l.adminCategories))},dependencies:[k,$,J,z,R,L,G,ce,Q,H,Y],styles:[".btnAddCategoryForm[_ngcontent-%COMP%]{width:198px;height:40px;background-color:#fff;border-radius:5px;border:2px solid #b5d8f7}.btnAddCategoryForm[_ngcontent-%COMP%]:hover{background-color:#b5d8f7}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:2px solid #b5d8f7}.btnEdDel[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let i=n;return i})();var We=(()=>{let n=class n{constructor(e){this.storage=e,this.uploadPercent=0}uploadFile(e,t,l){return j(this,null,function*(){let C=`${e}/${t}`,E="";if(l)try{let v=M(this.storage,C),T=ie(v,l);Z(T).subscribe(oe=>{this.uploadPercent=oe.progress}),yield T,E=yield te(v)}catch(v){console.error(v)}else console.log("wrong format");return Promise.resolve(E)})}deleteUploadFile(e){let t=M(this.storage,e);return ee(t)}};n.\u0275fac=function(t){return new(t||n)(ne(X))},n.\u0275prov=ae({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var pt=i=>({show:i}),ht=i=>({"background-color":i}),Xe=i=>({color:i});function ft(i,n){if(i&1&&(o(0,"option",15),u(1),a()),i&2){let r=n.$implicit;s("ngValue",r),c(),y(r.name)}}function gt(i,n){if(i&1){let r=x();o(0,"div",20)(1,"input",25),p("change",function(t){h(r);let l=d(2);return f(l.upload(t))}),a()(),o(2,"div",26),m(3,"div",27),a()}if(i&2){let r=d(2);c(3),F("width",r.uploadPercent,"%")}}function _t(i,n){if(i&1){let r=x();m(0,"img",28),o(1,"Button",29),p("click",function(){h(r);let t=d(2);return f(t.deleteImage())}),u(2,"delete"),a()}if(i&2){let r=d(2);s("src",r.valueByControl("imagePath"),V)}}function Ct(i,n){if(i&1){let r=x();o(0,"div",3)(1,"div",11)(2,"form",12),p("ngSubmit",function(){h(r);let t=d();return f(t.addProduct())}),o(3,"div",13)(4,"select",14,0),B(6,ft,2,2,"option",15,ge),a()(),o(8,"div",16)(9,"div",17),m(10,"input",18),a(),o(11,"div",17),m(12,"input",19),a()(),o(13,"div",20),m(14,"textarea",21),a(),o(15,"div",16)(16,"div",17),m(17,"input",22),a(),o(18,"div",17),m(19,"input",23),a()(),S(20,gt,4,2)(21,_t,3,1),o(22,"button",24),u(23),a()()()()}if(i&2){let r=d();s("ngClass",w(7,pt,r.isOpen)),c(2),s("formGroup",r.productForm),c(4),N(r.adminCategories),c(14),b(20,r.isUploaded?-1:20),c(),b(21,r.isUploaded?21:-1),c(),s("disabled",r.productForm.invalid)("ngStyle",w(9,ht,r.primaryColor)),c(),D(" ",r.editStatus?"\u0417\u0411\u0415\u0420\u0415\u0413\u0422\u0418":"\u0414\u041E\u0414\u0410\u0422\u0418"," ")}}function bt(i,n){i&1&&(o(0,"span"),u(1,"..."),a())}function xt(i,n){if(i&1){let r=x();o(0,"tr")(1,"td"),u(2),a(),o(3,"td"),u(4),a(),o(5,"td"),u(6),a(),o(7,"td"),u(8),U(9,"slice"),S(10,bt,2,0,"span"),a(),o(11,"td"),u(12),a(),o(13,"td"),u(14),a(),o(15,"td"),m(16,"img",30),a(),o(17,"td")(18,"button",31),p("click",function(){let t=h(r).$implicit,l=d();return f(l.editProduct(t))}),u(19," \u0420\u0415\u0414\u0410\u0413\u0423\u0412\u0410\u0422\u0418 "),a(),o(20,"button",32),p("click",function(){let t=h(r).$implicit,l=d();return f(l.deleteProduct(t))}),u(21," \u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418 "),a()()()}if(i&2){let r=n.$implicit,e=d();c(2),y(r.id),c(2),y(r.category.name),c(2),y(r.name),c(2),D(" ",q(9,15,r.description,0,30)," "),c(2),b(10,r.description.length>20?10:-1),c(2),y(r.weight),c(2),y(r.price),c(2),s("src",r.imagePath,V),c(2),I(w(19,Xe,e.primaryColor)),c(2),I(w(21,Xe,e.primaryColor)),F("cursor",e.editStatus?"not-allowed":"pointer"),s("disabled",e.editStatus)}}var he=(()=>{let n=class n{constructor(e,t,l,C,E){this.fb=e,this.categoryService=t,this.productService=l,this.imageService=C,this.toaster=E,this.adminCategories=[],this.adminProducts=[],this.editStatus=!1,this.uploadPercent=0,this.isUploaded=!1,this.isOpen=!1,this.primaryColor="#b5d8f7",this.addProductForm=!0}ngOnInit(){this.initProductForm(),this.loadCategories(),this.loadProduct()}initProductForm(){this.productForm=this.fb.group({category:[null,_.required],name:[null,_.required],path:[null,_.required],description:[null,_.required],weight:[null,_.required],price:[null,_.required],imagePath:[null,_.required],count:[1]})}loadCategories(){this.categoryService.getAllFirebase().subscribe(e=>{this.adminCategories=e,this.productForm.patchValue({category:this.adminCategories[0].id})})}loadProduct(){this.productService.getAllFirebase().subscribe(e=>{this.adminProducts=e})}addProduct(){this.editStatus?this.productService.updateFirebase(this.productForm.value,this.currentProductId).then(()=>{this.loadProduct(),this.toaster.success("Product successfully updated"),this.isOpen=!1,this.editStatus=!1}):this.productService.createFirebase(this.productForm.value).then(()=>{this.toaster.success("Product successfully created"),this.isOpen=!1,this.editStatus=!1}),this.editStatus=!1,this.isUploaded=!1,this.productForm.reset()}editProduct(e){let t=this.adminCategories.find(l=>l.name===e.category.name);this.productForm.patchValue({category:t,name:e.name,path:e.path,description:e.description,weight:e.weight,price:e.price,imagePath:e.imagePath}),this.isOpen=!0,this.isUploaded=!0,this.editStatus=!0,this.currentProductId=e.id}deleteProduct(e){this.productService.deleteFirebase(e.id).then(()=>{this.loadProduct(),this.toaster.success("Product successfully deleted")})}upload(e){let t=e.target.files[0];this.imageService.uploadFile("images",t.name,t).then(l=>{this.productForm.patchValue({imagePath:l}),this.isUploaded=!0}).catch(l=>{console.log(l)})}deleteImage(){this.imageService.deleteUploadFile(this.valueByControl("imagePath")).then(()=>{this.isUploaded=!1,this.uploadPercent=0,this.productForm.patchValue({imagePath:null})}).catch(e=>{console.log(e)})}valueByControl(e){return this.productForm.get(e)?.value}toggleOpenForm(){this.isOpen=!this.isOpen}AddProductForm(){this.addProductForm=!1}};n.\u0275fac=function(t){return new(t||n)(g(K),g(me),g(Le),g(We),g(W))},n.\u0275cmp=P({type:n,selectors:[["app-admin-product"]],standalone:!0,features:[A],decls:27,vars:2,consts:[["category",""],[1,"container-fluid","d-flex","flex-column"],[1,"btnAddProductForm","fw-bold",3,"click"],["id","collapseExample",1,"collapse",3,"ngClass"],[1,"col-12","mt-5"],[1,"table"],["scope","col"],["scope","col",1,"col-2"],["scope","col",1,"col-4"],["scope","col",1,"col-3"],["scope","col",1,"col-1"],[1,"col-12"],[3,"ngSubmit","formGroup"],[1,"col","mb-3","my-3"],["formControlName","category","name","productCategory",1,"form-select"],["selected","",3,"ngValue"],[1,"row"],[1,"col","mb-3"],["formControlName","name","name","name","type","text","id","name","placeholder","*\u041D\u0430\u0437\u0432\u0430",1,"form-control"],["formControlName","path","name","path","type","text","id","path","placeholder","*\u0428\u043B\u044F\u0445",1,"form-control"],[1,"mb-3"],["formControlName","description","name","description","id","description","placeholder","*\u0406\u043D\u0433\u0440\u0435\u0434\u0456\u0454\u043D\u0442\u0438",1,"form-control"],["formControlName","weight","name","weight","type","text","id","weight","placeholder","*\u0412\u0430\u0433\u0430",1,"form-control"],["formControlName","price","name","price","type","number","id","price","placeholder","*\u0426\u0456\u043D\u0430",1,"form-control"],["type","submit",1,"btn","border-0","w-100","btnSaveAdd",3,"disabled","ngStyle"],["type","file","id","formFile",1,"form-control",3,"change"],[1,"progress","mb-3"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped"],["width","100px","alt","",1,"m-3",3,"src"],["type","button",1,"btn","btn-danger",3,"click"],["alt","","height","50px",3,"src"],["type","button",1,"btn","btnEdDel","fw-bold",2,"color","primaryColor",3,"click"],["type","button",1,"btn","btnEdDel","fw-bold",3,"click","disabled"]],template:function(t,l){t&1&&(o(0,"div",1)(1,"button",2),p("click",function(){return l.toggleOpenForm()}),u(2),a(),S(3,Ct,24,11,"div",3),o(4,"div",4)(5,"table",5)(6,"thead")(7,"tr")(8,"th",6),u(9,"\u2116"),a(),o(10,"th",7),u(11,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"),a(),o(12,"th",8),u(13,"\u041D\u0430\u0437\u0432\u0430"),a(),o(14,"th",9),u(15,"\u041E\u043F\u0438\u0441"),a(),o(16,"th",10),u(17,"\u0412\u0430\u0433\u0430"),a(),o(18,"th",10),u(19,"\u0426\u0456\u043D\u0430"),a(),o(20,"th",7),u(21,"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"),a(),o(22,"th",10),u(23,"\u0414\u0456\u0457"),a()()(),o(24,"tbody"),B(25,xt,22,23,"tr",null,ge),a()()()()),t&2&&(c(2),D(" ",l.isOpen?"\u041E\u041D\u041E\u0412\u0418\u0422\u0418 \u041F\u0420\u041E\u0414\u0423\u041A\u0422":"\u0414\u041E\u0414\u0410\u0422\u0418 \u041F\u0420\u041E\u0414\u0423\u041A\u0422"," "),c(),b(3,l.isOpen?3:-1),c(22),N(l.adminProducts))},dependencies:[J,z,Ve,Ie,R,Ae,ke,L,G,k,xe,ve,$,Q,H,Y],styles:[".btnAddProductForm[_ngcontent-%COMP%]{width:198px;height:40px;background-color:#fff;border-radius:5px;border:2px solid #b5d8f7}.btnAddProductForm[_ngcontent-%COMP%]:hover{background-color:#b5d8f7}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:2px solid #b5d8f7}.btnEdDel[_ngcontent-%COMP%]:hover{text-decoration:underline}.btnSaveAdd[_ngcontent-%COMP%]{outline:2px solid #b5d8f7}"]});let i=n;return i})();var vt=(i,n)=>n.id,Ze=i=>({color:i});function yt(i,n){if(i&1){let r=x();o(0,"div",12)(1,"input",15),p("change",function(t){h(r);let l=d(2);return f(l.upload(t))}),a()(),o(2,"div",16),m(3,"div",17),a()}if(i&2){let r=d(2);c(3),F("width",r.uploadPercent,"%")}}function St(i,n){if(i&1){let r=x();m(0,"img",18),o(1,"button",19),p("click",function(){h(r);let t=d(2);return f(t.deleteImage())}),u(2,"\u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418"),a()}if(i&2){let r=d(2);s("src",r.valueByControl("imagePath"),V),c(),F("background-color",r.primaryColor)}}function Ft(i,n){if(i&1){let r=x();o(0,"div",3)(1,"form",7),p("ngSubmit",function(){h(r);let t=d();return f(t.addDiscount())}),o(2,"div",8)(3,"div",9),m(4,"input",10),a(),o(5,"div",9),m(6,"input",11),a()(),o(7,"div",12),m(8,"textarea",13),a(),S(9,yt,4,2)(10,St,3,3),o(11,"button",14),p("click",function(){h(r);let t=d();return f(t.addDiscount())}),u(12),a()()()}if(i&2){let r=d();c(),s("formGroup",r.discountForm),c(8),b(9,r.isUploaded?-1:9),c(),b(10,r.isUploaded?10:-1),c(),F("background-color",r.primaryColor),s("disabled",r.discountForm.invalid),c(),y(r.editStatus?"\u0417\u0411\u0415\u0420\u0415\u0413\u0422\u0418":"\u0414\u041E\u0414\u0410\u0422\u0418")}}function wt(i,n){i&1&&(o(0,"span"),u(1,"..."),a())}function Et(i,n){if(i&1){let r=x();o(0,"tr")(1,"td"),u(2),U(3,"date"),a(),o(4,"td"),u(5),a(),o(6,"td"),u(7),a(),o(8,"td"),u(9),U(10,"slice"),S(11,wt,2,0,"span"),a(),o(12,"td"),m(13,"img",20),a(),o(14,"td")(15,"button",21),p("click",function(){let t=h(r).$implicit,l=d();return f(l.editDiscount(t))}),u(16,"\u0420\u0415\u0414\u0410\u0413\u0423\u0412\u0410\u0422\u0418"),a(),o(17,"button",22),p("click",function(){let t=h(r).$implicit,l=d();return f(l.deleteDiscount(t))}),u(18,"\u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418"),a()()()}if(i&2){let r=n.$implicit,e=d();c(2),y(be(3,13,e.currentDate,"dd.MM.YY")),c(3),y(r.name),c(2),y(r.title),c(2),D(" ",q(10,16,r.description,0,70)," "),c(2),b(11,r.description.length>70?11:-1),c(2),s("src",r.imagePath,V),c(2),I(w(20,Ze,e.primaryColor)),c(2),I(w(22,Ze,e.primaryColor)),F("cursor",e.editStatus?"not-allowed":"pointer"),s("disabled",e.editStatus)}}var fe=(()=>{let n=class n{constructor(e,t,l,C){this.discountService=e,this.fb=t,this.storage=l,this.toaster=C,this.editStatus=!1,this.addDiscountForm=!0,this.currentDate=new Date,this.isUploaded=!1,this.primaryColor="#b5d8f7"}ngOnInit(){this.initDiscountForm(),this.loadDiscounts()}toggleAddDiscountForm(){this.addDiscountForm=!this.addDiscountForm}initDiscountForm(){this.discountForm=this.fb.group({name:[null,_.required],title:[null,_.required],description:[null,_.required],imagePath:[null,_.required]})}loadDiscounts(){this.discountService.getAllFirebase().subscribe(e=>{this.adminDiscounts=e})}addDiscount(){this.editStatus?this.discountService.updateFirebase(this.discountForm.value,this.currentDiscountId).then(()=>{this.loadDiscounts(),this.toaster.success("Discount successfully updated")}):this.discountService.createFirebase(this.discountForm.value).then(()=>{this.toaster.success("Discount successfully created")}),this.editStatus=!1,this.discountForm.reset(),this.isUploaded=!1,this.uploadPercent=0}editDiscount(e){this.discountForm.patchValue({name:e.name,title:e.title,description:e.description,imagePath:e.imagePath}),this.editStatus=!0,this.currentDiscountId=e.id,this.isUploaded=!0}deleteDiscount(e){this.discountService.deleteFirebase(e.id).then(()=>{this.loadDiscounts(),this.toaster.success("Discount successfully deleted")})}upload(e){let t=e.target.files[0];this.uploadFile("images",t.name,t).then(l=>{this.discountForm.patchValue({imagePath:l}),this.isUploaded=!0}).catch(l=>{console.log(l)})}uploadFile(e,t,l){return j(this,null,function*(){let C=`${e}/${t}`,E="";if(l)try{let v=M(this.storage,C),T=ie(v,l);Z(T).subscribe(oe=>{this.uploadPercent=oe.progress}),yield T,E=yield te(v)}catch(v){console.error(v)}else console.log("wrong format");return Promise.resolve(E)})}deleteImage(){let e=M(this.storage,this.valueByControl("imagePath"));ee(e).then(()=>{console.log("File deleted"),this.isUploaded=!1,this.uploadPercent=0,this.discountForm.patchValue({imagePath:null})})}valueByControl(e){return this.discountForm.get(e)?.value}};n.\u0275fac=function(t){return new(t||n)(g(Ge),g(K),g(X),g(W))},n.\u0275cmp=P({type:n,selectors:[["app-admin-discount"]],standalone:!0,features:[A],decls:24,vars:1,consts:[[1,"container-fluid","d-flex","flex-column"],[1,""],["type","button",1,"btnAddDiscountForm","fw-bold",3,"click"],[1,"py-3"],[1,"my-5",2,"display","grid","place-items","center","width","100%"],[1,"table"],["scope","col"],[3,"ngSubmit","formGroup"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-3",2,"width","48%"],["formControlName","name","name","name","placeholder","*\u041D\u0430\u0437\u0432\u0430","required","",1,"form-control"],["formControlName","title","name","title","placeholder","*\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A","required","",1,"form-control"],[1,"mb-3"],["formControlName","description","name","description","placeholder","*\u041E\u043F\u0438\u0441","required","",1,"form-control"],["type","button",1,"btn","fw-bold","my-3","w-100",3,"click","disabled"],["type","file","required","",1,"form-control",3,"change"],[1,"progress","mb-3"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped"],["width","100px","alt","",1,"m-3",3,"src"],["type","button",1,"btn","fw-bold",3,"click"],["alt","","height","50px",3,"src"],["type","button",1,"btn","btnEdDel","fw-bold",2,"color","primaryColor",3,"click"],["type","button",1,"btn","btnEdDel","fw-bold",3,"click","disabled"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return l.toggleAddDiscountForm()}),u(3,"\u0414\u041E\u0414\u0410\u0422\u0418 \u0410\u041A\u0426\u0406\u042E"),a(),S(4,Ft,13,7,"div",3),o(5,"div",4)(6,"table",5)(7,"thead")(8,"tr")(9,"th",6),u(10,"\u0414\u0430\u0442\u0430"),a(),o(11,"th",6),u(12,"\u041D\u0430\u0437\u0432\u0430"),a(),o(13,"th",6),u(14,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),a(),o(15,"th",6),u(16,"\u041E\u043F\u0438\u0441"),a(),o(17,"th",6),u(18,"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"),a(),o(19,"th",6),u(20,"\u0414\u0456\u0457"),a()()(),o(21,"tbody"),B(22,Et,19,24,"tr",null,vt),a()()()()()),t&2&&(c(4),b(4,l.addDiscountForm?-1:4),c(18),N(l.adminDiscounts))},dependencies:[k,$,ye,J,z,R,L,G,ce,Q,H,Y],styles:[".btnAddDiscountForm[_ngcontent-%COMP%]{width:198px;height:40px;background-color:#fff;border-radius:5px;border:2px solid #b5d8f7}.btnAddDiscountForm[_ngcontent-%COMP%]:hover{background-color:#b5d8f7}"]});let i=n;return i})();var et=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=P({type:n,selectors:[["app-admin-order"]],standalone:!0,features:[A],decls:2,vars:0,template:function(t,l){t&1&&(o(0,"p"),u(1,"admin-order works!"),a())}});let i=n;return i})();var Pt=[{path:"",component:se,children:[{path:"category",component:pe},{path:"product",component:he},{path:"discount",component:fe},{path:"order",component:et},{path:"",pathMatch:"full",redirectTo:"category"}]}],tt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=ue({type:n}),n.\u0275inj=le({imports:[_e.forChild(Pt),_e]});let i=n;return i})();var Fi=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=ue({type:n}),n.\u0275inj=le({imports:[k,tt,qe,se,pe,he,fe]});let i=n;return i})();export{Fi as AdminModule};
