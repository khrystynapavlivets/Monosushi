import{a as xt,b as Ct,e as vt,f as C,g as Dt,j as Lt,k as Bt,l as Mt,m as $t,n as H,o as Ft,p as qt,q as Ht,r as jt,s as zt,t as S,u as Gt,v as Vt,z as Wt}from"./chunk-6YGHSXIY.js";import{I as Q,a as J}from"./chunk-5KKJJZ46.js";import{Ea as Pt,e as K,ea as Z,fa as Ot,h as Et,ha as It,ja as Y,la as q,mb as Nt,qa as St,t as At,y as Ut}from"./chunk-5KAC4LNZ.js";var jn=(()=>{let t=class t{constructor(s){this.http=s,this.url=Q.BACKEND_URL,this.api={products:`${this.url}/products`}}getAll(){return this.http.get(this.api.products)}getAllByCategory(s){return this.http.get(`${this.api.products}?category.path=${s}`)}getOne(s){return this.http.get(`${this.api.products}/${s}`)}create(s){return this.http.post(this.api.products,s)}update(s,r){return this.http.patch(`${this.api.products}/${r}`,s)}delete(s){return this.http.delete(`${this.api.products}/${s}`)}};t.\u0275fac=function(r){return new(r||t)(Y(J))},t.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Vn=(()=>{let t=class t{constructor(s){this.http=s,this.url=Q.BACKEND_URL,this.api={discounts:`${this.url}/discounts`}}getAll(){return this.http.get(this.api.discounts)}getOne(s){return this.http.get(`${this.api.discounts}/${s}`)}create(s){return this.http.post(this.api.discounts,s)}update(s,r){return this.http.patch(`${this.api.discounts}/${r}`,s)}delete(s){return this.http.delete(`${this.api.discounts}/${s}`)}};t.\u0275fac=function(r){return new(r||t)(Y(J))},t.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ne="firebasestorage.googleapis.com",se="storageBucket",Ie=2*60*1e3,Se=10*60*1e3,Pe=1e3;var d=class e extends vt{constructor(t,n,s=0){super(it(t),`Firebase Storage: ${n} (${it(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,e.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return it(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},l=function(e){return e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment",e}(l||{});function it(e){return"storage/"+e}function _t(){let e="An unknown error occurred, please check the error payload for server response.";return new d(l.UNKNOWN,e)}function Ne(e){return new d(l.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function xe(e){return new d(l.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ce(){let e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(l.UNAUTHENTICATED,e)}function ve(){return new d(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function De(e){return new d(l.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function re(){return new d(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oe(){return new d(l.CANCELED,"User canceled the upload/download.")}function Le(e){return new d(l.INVALID_URL,"Invalid URL '"+e+"'.")}function Be(e){return new d(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Me(){return new d(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+se+"' property when initializing the app?")}function ie(){return new d(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $e(){return new d(l.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Fe(){return new d(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qe(e){return new d(l.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ut(e){return new d(l.INVALID_ARGUMENT,e)}function ae(){return new d(l.APP_DELETED,"The Firebase app was deleted.")}function He(e){return new d(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(e,t){return new d(l.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function j(e){throw new d(l.INTERNAL_ERROR,"Internal error: "+e)}var k=class e{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=e.makeFromUrl(t,n)}catch{return new e(t,"")}if(s.path==="")return s;throw Be(t)}static makeFromUrl(t,n){let s=null,r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}let i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}let h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${_}`,"i"),g={bucket:1,path:3},w=n===ne?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",A=new RegExp(`^https?://${w}/${r}/${p}`,"i"),T=[{regex:u,indices:a,postModify:o},{regex:m,indices:g,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){let N=T[b],x=N.regex.exec(t);if(x){let rt=x[N.indices.bucket],F=x[N.indices.path];F||(F=""),s=new e(rt,F),N.postModify(s);break}}if(s==null)throw Le(t);return s}},ct=class{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}};function je(e,t,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return u===2}let c=!1;function h(...p){c||(c=!0,t.apply(null,p))}function f(p){r=setTimeout(()=>{r=null,e(m,a())},p)}function _(){o&&clearTimeout(o)}function m(p,...A){if(c){_();return}if(p){_(),h.call(null,p,...A);return}if(a()||i){_(),h.call(null,p,...A);return}s<64&&(s*=2);let T;u===1?(u=2,T=0):T=(s+Math.random())*1e3,f(T)}let g=!1;function w(p){g||(g=!0,_(),!c&&(r!==null?(p||(u=2),clearTimeout(r),f(0)):p||(u=1)))}return f(0),o=setTimeout(()=>{i=!0,w(!0)},n),w}function ze(e){e(!1)}function Ge(e){return e!==void 0}function Ve(e){return typeof e=="function"}function We(e){return typeof e=="object"&&!Array.isArray(e)}function st(e){return typeof e=="string"||e instanceof String}function Kt(e){return mt()&&e instanceof Blob}function mt(){return typeof Blob<"u"}function Zt(e,t,n,s){if(s<t)throw ut(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw ut(`Invalid value for '${e}'. Expected ${n} or less.`)}function $(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ue(e){let t=encodeURIComponent,n="?";for(let s in e)if(e.hasOwnProperty(s)){let r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var L=function(e){return e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",e}(L||{});function ce(e,t){let n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}var lt=class{constructor(t,n,s,r,o,i,u,a,c,h,f,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){let t=(s,r)=>{if(r){s(!1,new D(!1,null,!0));return}let o=this.connectionFactory_();this.pendingConnection_=o;let i=u=>{let a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;let u=o.getErrorCode()===L.NO_ERROR,a=o.getStatus();if(!u||ce(a,this.additionalRetryCodes_)&&this.retry){let h=o.getErrorCode()===L.ABORT;s(!1,new D(!1,null,h));return}let c=this.successCodes_.indexOf(a)!==-1;s(!0,new D(c,o))})},n=(s,r)=>{let o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{let a=this.callback_(u,u.getResponse());Ge(a)?o(a):o()}catch(a){i(a)}else if(u!==null){let a=_t();a.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,a)):i(a)}else if(r.canceled){let a=this.appDelete_?ae():oe();i(a)}else{let a=re();i(a)}};this.canceled_?n(!1,new D(!1,null,!0)):this.backoffId_=je(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ze(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},D=class{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}};function Xe(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ke(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ze(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ye(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Je(e,t,n,s,r,o,i=!0){let u=ue(e.urlParams),a=e.url+u,c=Object.assign({},e.headers);return Ze(c,t),Xe(c,n),Ke(c,o),Ye(c,s),new lt(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}function Qe(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tn(...e){let t=Qe();if(t!==void 0){let n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(mt())return new Blob(e);throw new d(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function en(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}function nn(e){if(typeof atob>"u")throw qe("base-64");return atob(e)}var E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},G=class{constructor(t,n){this.data=t,this.contentType=n||null}};function sn(e,t){switch(e){case E.RAW:return new G(le(t));case E.BASE64:case E.BASE64URL:return new G(he(e,t));case E.DATA_URL:return new G(on(t),an(t))}throw _t()}function le(e){let t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{let o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function rn(e){let t;try{t=decodeURIComponent(e)}catch{throw z(E.DATA_URL,"Malformed data URL.")}return le(t)}function he(e,t){switch(e){case E.BASE64:{let r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw z(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{let r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw z(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nn(t)}catch(r){throw r.message.includes("polyfill")?r:z(e,"Invalid character found")}let s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}var et=class{constructor(t){this.base64=!1,this.contentType=null;let n=t.match(/^data:([^,]+)?,/);if(n===null)throw z(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let s=n[1]||null;s!=null&&(this.base64=un(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}};function on(e){let t=new et(e);return t.base64?he(E.BASE64,t.rest):rn(t.rest)}function an(e){return new et(e).contentType}function un(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}var nt=class e{constructor(t,n){let s=0,r="";Kt(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Kt(this.data_)){let s=this.data_,r=en(s,t,n);return r===null?null:new e(r)}else{let s=new Uint8Array(this.data_.buffer,t,n-t);return new e(s,!0)}}static getBlob(...t){if(mt()){let n=t.map(s=>s instanceof e?s.data_:s);return new e(tn.apply(null,n))}else{let n=t.map(i=>st(i)?sn(E.RAW,i).data:i.data_),s=0;n.forEach(i=>{s+=i.byteLength});let r=new Uint8Array(s),o=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)r[o++]=i[u]}),new e(r,!0)}}uploadData(){return this.data_}};function de(e){let t;try{t=JSON.parse(e)}catch{return null}return We(t)?t:null}function cn(e){if(e.length===0)return null;let t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ln(e,t){let n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function fe(e){let t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}function hn(e,t){return t}var R=class{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||hn}},tt=null;function dn(e){return!st(e)||e.length<2?e:fe(e)}function pe(){if(tt)return tt;let e=[];e.push(new R("bucket")),e.push(new R("generation")),e.push(new R("metageneration")),e.push(new R("name","fullPath",!0));function t(o,i){return dn(i)}let n=new R("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}let r=new R("size");return r.xform=s,e.push(r),e.push(new R("timeCreated")),e.push(new R("updated")),e.push(new R("md5Hash",null,!0)),e.push(new R("cacheControl",null,!0)),e.push(new R("contentDisposition",null,!0)),e.push(new R("contentEncoding",null,!0)),e.push(new R("contentLanguage",null,!0)),e.push(new R("contentType",null,!0)),e.push(new R("metadata","customMetadata",!0)),tt=e,tt}function fn(e,t){function n(){let s=e.bucket,r=e.fullPath,o=new k(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function pn(e,t,n){let s={};s.type="file";let r=n.length;for(let o=0;o<r;o++){let i=n[o];s[i.local]=i.xform(s,t[i.server])}return fn(s,e),s}function _e(e,t,n){let s=de(t);return s===null?null:pn(e,s,n)}function _n(e,t,n,s){let r=de(t);if(r===null||!st(r.downloadTokens))return null;let o=r.downloadTokens;if(o.length===0)return null;let i=encodeURIComponent;return o.split(",").map(c=>{let h=e.bucket,f=e.fullPath,_="/b/"+i(h)+"/o/"+i(f),m=$(_,n,s),g=ue({alt:"media",token:c});return m+g})[0]}function me(e,t){let n={},s=t.length;for(let r=0;r<s;r++){let o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}var I=class{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function O(e){if(!e)throw _t()}function gt(e,t){function n(s,r){let o=_e(e,r,t);return O(o!==null),o}return n}function mn(e,t){function n(s,r){let o=_e(e,r,t);return O(o!==null),_n(o,r,e.host,e._protocol)}return n}function W(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ve():r=Ce():n.getStatus()===402?r=xe(e.bucket):n.getStatus()===403?r=De(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function bt(e){let t=W(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Ne(e.path)),o.serverResponse=r.serverResponse,o}return n}function gn(e,t,n){let s=t.fullServerUrl(),r=$(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,u=new I(r,o,gt(e,n),i);return u.errorHandler=bt(t),u}function bn(e,t,n){let s=t.fullServerUrl(),r=$(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,u=new I(r,o,mn(e,n),i);return u.errorHandler=bt(t),u}function Rn(e,t){let n=t.fullServerUrl(),s=$(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(a,c){}let u=new I(s,r,i,o);return u.successCodes=[200,204],u.errorHandler=bt(t),u}function Tn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ge(e,t,n){let s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Tn(null,t)),s}function yn(e,t,n,s,r){let o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}let a=u();i["Content-Type"]="multipart/related; boundary="+a;let c=ge(t,s,r),h=me(c,n),f="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+a+"--",m=nt.getBlob(f,s,_);if(m===null)throw ie();let g={name:c.fullPath},w=$(o,e.host,e._protocol),p="POST",A=e.maxUploadRetryTime,U=new I(w,p,gt(e,n),A);return U.urlParams=g,U.headers=i,U.body=m.uploadData(),U.errorHandler=W(t),U}var B=class{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}};function Rt(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{O(!1)}return O(!!n&&(t||["active"]).indexOf(n)!==-1),n}function wn(e,t,n,s,r){let o=t.bucketOnlyServerUrl(),i=ge(t,s,r),u={name:i.fullPath},a=$(o,e.host,e._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},f=me(i,n),_=e.maxUploadRetryTime;function m(w){Rt(w);let p;try{p=w.getResponseHeader("X-Goog-Upload-URL")}catch{O(!1)}return O(st(p)),p}let g=new I(a,c,m,_);return g.urlParams=u,g.headers=h,g.body=f,g.errorHandler=W(t),g}function kn(e,t,n,s){let r={"X-Goog-Upload-Command":"query"};function o(c){let h=Rt(c,["active","final"]),f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{O(!1)}f||O(!1);let _=Number(f);return O(!isNaN(_)),new B(_,s.size(),h==="final")}let i="POST",u=e.maxUploadRetryTime,a=new I(n,i,o,u);return a.headers=r,a.errorHandler=W(t),a}var Yt=256*1024;function En(e,t,n,s,r,o,i,u){let a=new B(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw $e();let c=a.total-a.current,h=c;r>0&&(h=Math.min(h,r));let f=a.current,_=f+h,m="";h===0?m="finalize":c===h?m="upload, finalize":m="upload";let g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},w=s.slice(f,_);if(w===null)throw ie();function p(b,N){let x=Rt(b,["active","final"]),rt=a.current+h,F=s.size(),ot;return x==="final"?ot=gt(t,o)(b,N):ot=null,new B(rt,F,x==="final",ot)}let A="POST",U=t.maxUploadRetryTime,T=new I(n,A,p,U);return T.headers=g,T.body=w.uploadData(),T.progressCallback=u||null,T.errorHandler=W(e),T}var y={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function at(e){switch(e){case"running":case"pausing":case"canceling":return y.RUNNING;case"paused":return y.PAUSED;case"success":return y.SUCCESS;case"canceled":return y.CANCELED;case"error":return y.ERROR;default:return y.ERROR}}var ht=class{constructor(t,n,s){if(Ve(t)||n!=null||s!=null)this.next=t,this.error=n??void 0,this.complete=s??void 0;else{let o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}};function v(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}var Jt=null,dt=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(let o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}},ft=class extends dt{initXhr(){this.xhr_.responseType="text"}};function P(){return Jt?Jt():new ft}var pt=class{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=pe(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(l.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let o=this.isExponentialBackoffExpired();if(ce(r.status,[]))if(o)r=re();else{this.sleepTime=Math.max(this.sleepTime*2,Pe),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(l.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{let s=wn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,P,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let t=this._uploadUrl;this._resolveToken((n,s)=>{let r=kn(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(r,P,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let t=Yt*this._chunkMultiplier,n=new B(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=En(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}let u=this._ref.storage._makeRequest(i,P,r,o,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Yt*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{let s=gn(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,P,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{let s=yn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,P,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){let n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=oe(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){let t=at(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){let o=new ht(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){let n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(at(this._state)){case y.SUCCESS:v(this._resolve.bind(null,this.snapshot))();break;case y.CANCELED:case y.ERROR:let n=this._reject;v(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(at(this._state)){case y.RUNNING:case y.PAUSED:t.next&&v(t.next.bind(t,this.snapshot))();break;case y.SUCCESS:t.complete&&v(t.complete.bind(t))();break;case y.CANCELED:case y.ERROR:t.error&&v(t.error.bind(t,this._error))();break;default:t.error&&v(t.error.bind(t,this._error))()}}resume(){let t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){let t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){let t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}};var M=class e{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new e(t,n)}get root(){let t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fe(this._location.path)}get storage(){return this._service}get parent(){let t=cn(this._location.path);if(t===null)return null;let n=new k(this._location.bucket,t);return new e(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw He(t)}};function An(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new pt(e,new nt(t),n)}function Un(e){e._throwIfRoot("getDownloadURL");let t=bn(e.storage,e._location,pe());return e.storage.makeRequestWithTokens(t,P).then(n=>{if(n===null)throw Fe();return n})}function On(e){e._throwIfRoot("deleteObject");let t=Rn(e.storage,e._location);return e.storage.makeRequestWithTokens(t,P)}function In(e,t){let n=ln(e._location.path,t),s=new k(e._location.bucket,n);return new M(e.storage,s)}function Sn(e){return/^[A-Za-z]+:\/\//.test(e)}function Pn(e,t){return new M(e,t)}function be(e,t){if(e instanceof V){let n=e;if(n._bucket==null)throw Me();let s=new M(n,n._bucket);return t!=null?be(s,t):s}else return t!==void 0?In(e,t):e}function Nn(e,t){if(t&&Sn(t)){if(e instanceof V)return Pn(e,t);throw ut("To use ref(service, url), the first argument must be a Storage instance.")}else return be(e,t)}function Qt(e,t){let n=t?.[se];return n==null?null:k.makeFromBucketSpec(n,e)}function xn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Ct(r,e.app.options.projectId))}var V=class{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ne,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ie,this._maxUploadRetryTime=Se,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=Qt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=Qt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Zt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Zt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}_getAuthToken(){return K(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;let t=this._authProvider.getImmediate({optional:!0});if(t){let n=yield t.getToken();if(n!==null)return n.accessToken}return null})}_getAppCheckToken(){return K(this,null,function*(){let t=this._appCheckProvider.getImmediate({optional:!0});return t?(yield t.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new M(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new ct(ae());{let i=Je(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(t,n){return K(this,null,function*(){let[s,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()})}},te="@firebase/storage",ee="0.12.4";var Re="storage";function Tt(e,t,n){return e=C(e),An(e,t,n)}function yt(e){return e=C(e),Un(e)}function Te(e){return e=C(e),On(e)}function ye(e,t){return e=C(e),Nn(e,t)}function we(e=$t(),t){e=C(e);let s=Bt(e,Re).getImmediate({identifier:t}),r=xt("storage");return r&&ke(s,...r),s}function ke(e,t,n,s={}){xn(e,t,n,s)}function Cn(e,{instanceIdentifier:t}){let n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new V(n,s,r,t,Mt)}function vn(){Lt(new Dt(Re,Cn,"PUBLIC").setMultipleInstances(!0)),H(te,ee,""),H(te,ee,"esm2017")}vn();function Ee(e){return new Et(function(t){var n=null,s=!1,r=!1,o=null,i=function(c){n=c,a()},u=null,a=function(){u||(u=setTimeout(function(){u=null,n&&t.next(n),s&&t.complete(),r&&t.error(o)}))};t.add(function(){u&&clearTimeout(u)}),i(e.snapshot),t.add(e.on("state_changed",i)),t.add(At(e).subscribe({next:i,error:function(c){r=!0,o=c,a()},complete:function(){s=!0,a()}}))})}function Ae(e){return Ee(e).pipe(Ut(function(t){return{progress:t.bytesTransferred/t.totalBytes*100,snapshot:t}}))}var X=class{constructor(t){return t}},Ue="storage",wt=class{constructor(){return Ht(Ue)}};var kt=new It("angularfire2.storage-instances");function Bn(e,t){let n=qt(Ue,e,t);return n&&new X(n)}function Mn(e){return(t,n)=>{let s=t.runOutsideAngular(()=>e(n));return new X(s)}}var $n={provide:wt,deps:[[new q,kt]]},Fn={provide:X,useFactory:Bn,deps:[[new q,kt],Gt]},qn=(()=>{class e{constructor(){H("angularfire",Ft.full,"gcs")}static \u0275fac=function(s){return new(s||e)};static \u0275mod=St({type:e});static \u0275inj=Ot({providers:[Fn,$n]})}return e})();function ys(e,...t){return{ngModule:qn,providers:[{provide:kt,useFactory:Mn(e),multi:!0,deps:[Nt,Pt,zt,Vt,[new q,Wt],[new q,jt],...t]}]}}var ws=S(Ae,!0);var ks=S(Te,!0);var Es=S(yt,!0);var As=S(we,!0);var Us=S(ye,!0);var Os=S(Tt,!0);export{jn as a,Vn as b,X as c,ys as d,ws as e,ks as f,Es as g,As as h,Us as i,Os as j};