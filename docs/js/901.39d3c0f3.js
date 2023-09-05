"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[901],{223:function(t,e,n){n.d(e,{BH:function(){return v},L:function(){return c},LL:function(){return I},P0:function(){return m},Sg:function(){return w},ZR:function(){return T},aH:function(){return y},eu:function(){return _},hl:function(){return E},m9:function(){return N},vZ:function(){return S}});n(1703),n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(l=64)),i.push(n[u],n[h],n[l],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,a=s?n[t.charAt(r)]:0;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;++r;const h=r<t.length,l=h?n[t.charAt(r)]:64;if(++r,null==e||null==a||null==u||null==l)throw new o;const f=e<<2|a>>4;if(i.push(f),64!==u){const t=a<<4&240|u>>2;if(i.push(t),64!==l){const t=u<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_KEY:'"AIzaSyDTV5FH25uhufL7TyVnKqK9LRS5Yn26cE4",',VUE_APP_APP_ID:'"1:1017734536453:web:6a744311c6fb4abf6a2b6c",',VUE_APP_APP_MEASUREMENTID:'"G-YNK4MYE5H9",',VUE_APP_AUTH_DOMAIN:'"protfilo2023.firebaseapp.com",',VUE_APP_DATABASE_URL:'"https://protfilo2023-default-rtdb.firebaseio.com",',VUE_APP_MESSAGING_SENDER_ID:'"1017734536453",',VUE_APP_PROJECT_ID:'"protfilo2023",',VUE_APP_STORAGE_BUCKET:'"protfilo2023.appspot.com",',BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return l()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){try{return"object"===typeof indexedDB}catch(t){return!1}}function _(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?A(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new T(i,o,n);return a}}function A(t,e){return t.replace(C,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(D(n)&&D(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function D(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){return t&&t._delegate?t._delegate:t}},3901:function(t,e,n){n.d(e,{db:function(){return u},t:function(){return h}});var i=n(7077),r="firebase",s="10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app");var o=n(4287),a=n(1294);const c={apiKey:"AIzaSyDTV5FH25uhufL7TyVnKqK9LRS5Yn26cE4",authDomain:"protfilo2023.firebaseapp.com",databaseURL:"https://protfilo2023-default-rtdb.firebaseio.com",projectId:"protfilo2023",storageBucket:"protfilo2023.appspot.com",messagingSenderId:"1017734536453",appId:"1:1017734536453:web:6a744311c6fb4abf6a2b6c",measurementId:"G-YNK4MYE5H9"};(0,i.ZF)(c);const u=(0,o.ad)(),h=(0,a.cF)()},7077:function(t,e,n){n.d(e,{Jn:function(){return gt},qX:function(){return lt},Xd:function(){return ht},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});n(7658);var i=n(7142),r=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(b(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function E(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(T(this),e),b(l.get(this))}:function(...e){return b(t.apply(T(this),e))}:function(e,...n){const i=t.call(T(this),e,...n);return d.set(i,e.sort?e.sort():[e]),b(i)}}function _(t){return"function"===typeof t?E(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function b(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=b(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(b(o.result),t.oldVersion,t.newVersion,b(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],S=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=C.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return S.set(e,s),s}w((t=>({...t,get:(e,n,i)=>D(e,n)||t.get(e,n,i),has:(e,n)=>!!D(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const k="@firebase/app",O="0.9.15",L=new r.Yd("@firebase/app"),P="@firebase/app-compat",x="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",V="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",K="@firebase/functions-compat",q="@firebase/installations",z="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",W="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="10.1.0",st="[DEFAULT]",ot={[k]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[x]:"fire-analytics-compat",[V]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[K]:"fire-fn-compat",[q]:"fire-iid",[z]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[W]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(ct.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=rt;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new i.H0(o);for(const i of ct.values())c.addComponent(i);const u=new pt(n,r,c);return at.set(o,u),u}function yt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}ht(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",Et=1,_t="firebase-heartbeat-store";let bt=null;function Tt(){return bt||(bt=I(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),bt}async function It(t){try{const e=await Tt(),n=await e.transaction(_t).objectStore(_t).get(Ct(t));return n}catch(e){if(e instanceof s.ZR)L.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});L.warn(t.message)}}}async function At(t,e){try{const n=await Tt(),i=n.transaction(_t,"readwrite"),r=i.objectStore(_t);await r.put(e,Ct(t)),await i.done}catch(n){if(n instanceof s.ZR)L.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});L.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1024,Dt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=kt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function kt(t,e=St){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){ht(new i.wA("platform-logger",(t=>new N(t)),"PRIVATE")),ht(new i.wA("heartbeat",(t=>new Nt(t)),"PRIVATE")),vt(k,O,t),vt(k,O,"esm2017"),vt("fire-js","")}Pt("")},7142:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return r}});n(1703);var i=n(223);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return r}});n(1703),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},4287:function(t,e,n){n.d(e,{ET:function(){return th},hJ:function(){return Cu},ad:function(){return Ru}});n(1703),n(8675),n(3408),n(4590),n(3462),n(1439),n(7585),n(5315),n(7658),n(2801);var i,r=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},h=h||{},l=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function b(){this.s=this.s,this.o=this.o}var T=0;b.prototype.s=!1,b.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},b.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",(()=>{}),e),l.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function N(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return-1!=R().indexOf(t)}function O(t){return O[" "](t),t}function L(t,e){var n=Ei;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}O[" "]=function(){};var P,x,M=k("Opera"),U=k("Trident")||k("MSIE"),V=k("Edge"),F=V||U,B=k("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),j=-1!=R().toLowerCase().indexOf("webkit")&&!k("Edge");function $(){var t=l.document;return t?t.documentMode:void 0}t:{var H="",K=function(){var t=R();return B?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(H=K?K[1]:""),U){var q=$();if(null!=q&&q>parseFloat(H)){P=String(q);break t}}P=H}if(l.document&&U){var z=$();x=z||(parseInt(P,10)||void 0)}else x=void 0;var G=x;function Q(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{O(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:X[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.$.h.call(this)}}_(Q,S);var X={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<it.length;e++)n=it[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=I(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}st.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function ht(t,e,n,i,r){if(i&&i.once)return dt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,i,r);return null}return n=Et(n),t&&t[W]?t.O(e,n,d(i)?!!i.capture:!!i,r):lt(t,e,n,!1,i,r)}function lt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=d(r)?!!r.capture:!!r,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=ft(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)D||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,i,r);return null}return n=Et(n),t&&t[W]?t.P(e,n,d(i)?!!i.capture:!!i,r):lt(t,e,n,!0,i,r)}function pt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);else i=d(i)?!!i.capture:!!i,n=Et(n),t&&t[W]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,i,r),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,r)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[W])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new Q(e,this);var n=t.listener,i=t.la||t.src;t.ia&&gt(t),t=n.call(i,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Et(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){b.call(this),this.i=new st(this),this.S=this,this.J=null}function bt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"===typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;e=new S(i,t),rt(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Tt(o,i,!0,e)&&r}if(o=e.g=t,r=Tt(o,i,!0,e)&&r,r=Tt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Tt(o,i,!1,e)&&r}function Tt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}_(_t,b),_t.prototype[W]=!0,_t.prototype.removeEventListener=function(t,e,n,i){pt(this,t,e,n,i)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Z(n[i]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},_t.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var It=l.JSON.stringify;class At{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ct(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class St{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt=new At((()=>new Nt),(t=>t.reset()));class Nt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kt(t){l.setTimeout((()=>{throw t}),0)}let Ot,Lt=!1,Pt=new St,xt=()=>{const t=l.Promise.resolve(void 0);Ot=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){kt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lt=!1};function Ut(t,e){_t.call(this),this.h=t||1,this.g=e||l,this.j=w(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ft(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Bt(t){t.g=Ft((()=>{t.g=null,t.i&&(t.i=!1,Bt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ut,_t),i=Ut.prototype,i.ga=!1,i.T=null,i.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),bt(this,"tick"),this.ga&&(Vt(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Ut.$.N.call(this),Vt(this),delete this.g};class jt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){b.call(this),this.h=t,this.g={}}_($t,b);var Ht=[];function Kt(t,e,n,i){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var r=0;r<n.length;r++){var s=ht(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function zt(){this.g=!0}function Gt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Xt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(i?" "+i:"")}))}function Wt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return It(n)}catch(a){return e}}$t.prototype.N=function(){$t.$.N.call(this),qt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},zt.prototype.Ea=function(){this.g=!1},zt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){S.call(this,Jt.Ta,t)}function ne(t){const e=te();bt(e,new ee(e))}function ie(t,e){S.call(this,Jt.STAT_EVENT,t),this.stat=e}function re(t){const e=te();bt(e,new ie(e,t))}function se(t,e){S.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",_(ee,S),Jt.STAT_EVENT="statevent",_(ie,S),Jt.Ua="timingevent",_(se,S);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function he(t){return t.h||(t.h=t.i())}function le(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){S.call(this,"d")}function ge(){S.call(this,"c")}function me(){}function ye(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new $t(this),this.P=we,t=F?125:void 0,this.V=new Ut(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}_(pe,S),_(ge,S),_(me,ue),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var we=45e3,Ee={},_e={};function be(t,e,n){t.L=1,t.v=Ke(Fe(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Se(t),t.A=Fe(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),rn(n.i,"t",i),t.C=0,n=t.l.J,t.h=new ve,t.g=ui(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jt(w(t.Pa,t,t.g),t.O)),Kt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ae(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=Ce(t,n),i==_e){4==e&&(t.o=4,re(14),r=!1),Xt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ee){t.o=4,re(15),Xt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Xt(t.j,t.m,i,null),Oe(t,i)}Ie(t)&&i!=_e&&i!=Ee&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,re(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ei(e),e.M=!0,re(11))):(Xt(t.j,t.m,n,"[Invalid Chunked Response]"),ke(t),Re(t))}function Ce(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?_e:(n=Number(e.substring(n,i)),isNaN(n)?Ee:(i+=1,i+n>e.length?_e:(e=e.slice(i,i+n),t.C=i+n,e)))}function Se(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function Ne(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.H||t.J||ri(t.l,t)}function ke(t){Ne(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),qt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Oe(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ii(n),zn(n)}ti(n),re(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=ln(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else oi(n,11)}else if((t.K||n.g==t)&&ii(n),!N(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=u[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(i.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,He(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=ci(i,i.J?i.pa:null,i.Y),o.K){pn(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(Ne(a),Se(a)),i.g=o}else Zn(i);0<n.j.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||oi(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?oi(n,7):qn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function Le(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function xe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),i=Le(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}i=ye.prototype,i.setTimeout=function(t){this.P=t},i.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},i.Pa=function(t){try{if(t==this.g)t:{const h=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||Fn(this.g)))){this.J||4!=h||7==e||ne(8==e||0>=f?3:2),Ne(this);var n=this.g.da();this.ca=n;e:if(Ie(this)){var i=Fn(this.g);t="";var r=i.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ke(this),Re(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,re(12),ke(this),Re(this);break t}Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oe(this,n)}this.S?(Ae(this,h,o),F&&this.i&&3==h&&(Kt(this.U,this.V,"tick",this.mb),this.V.start())):(Xt(this.j,this.m,o,null),Oe(this,o)),4==h&&ke(this),this.i&&!this.J&&(4==h?ri(this.l,this):(this.i=!1,Se(this)))}else Bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),ke(this),Re(this)}}}catch(h){}},i.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Ne(this),Ae(this,t,e),this.i&&4!=t&&Se(this))}},i.cancel=function(){this.J=!0,ke(this)},i.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Wt(this.j,this.A),2!=this.L&&(ne(),re(17)),ke(this),this.o=2,Re(this)):De(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ue(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,Be(this,t.j),this.s=t.s,this.g=t.g,je(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,Be(this,e[1]||"",!0),this.s=qe(e[2]||""),this.g=qe(e[3]||"",!0),je(this,e[4]),this.l=qe(e[5]||"",!0),$e(this,e[6]||"",!0),this.o=qe(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Fe(t){return new Ve(t)}function Be(t,e,n){t.j=n?qe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=ze(e,Ye)),t.i=new Ze(e,t.h))}function He(t,e,n){t.i.set(e,n)}function Ke(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ze(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ze(e,Qe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ze(e,Qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ze(n,"/"==n.charAt(0)?We:Xe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ze(n,Je)),t.join("")};var Qe=/[#\/\?@]/g,Xe=/[#\?:]/g,We=/[#\?]/g,Ye=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ue(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),A(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}i=Ze.prototype,i.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){tn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},i.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ka&&l.g.Ka()&&l.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function hn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ln(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return A(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const i=n||"";try{xe(t,(function(t,n){let r=t;d(t)&&(r=It(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function wn(t,e){const n=new zt;if(l.Image){const i=new Image;i.onload=E(En,n,i,"TestLoadImage: loaded",!0,e),i.onerror=E(En,n,i,"TestLoadImage: error",!1,e),i.onabort=E(En,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=E(En,n,i,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function En(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function _n(t){this.l=t.fc||null,this.j=t.ob||!1}function bn(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ue),_n.prototype.g=function(){return new bn(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(bn,_t);var Tn=0;function In(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=bn.prototype,i.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||l).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Tn},i.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):Cn(this),3==this.readyState&&In(this)}},i.Za=function(t){this.g&&(this.response=this.responseText=t,An(this))},i.Ya=function(t){this.g&&(this.response=t,An(this))},i.ka=function(){this.g&&An(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Sn=l.JSON.parse;function Dn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}_(Dn,_t);var Nn="",Rn=/^https?$/i,kn=["POST","PUT"];function On(t){return U&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Ln(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Mn(t)}function Pn(t){t.F||(t.F=!0,bt(t,"complete"),bt(t,"error"))}function xn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Ft(t.La,0,t);else if(bt(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.I).match(Me)[1]||null;!r&&l.self&&l.self.location&&(r=l.self.location.protocol.slice(0,-1)),i=!Rn.test(r?r.toLowerCase():"")}n=i}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Pn(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Un(t);const i=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||bt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Un(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Xi){return null}}function Bn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(N(t[i]))continue;var n=Rt(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function jn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):He(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ga=0,this.j=[],this.l=new zt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,t),this.hb=Hn("retryDelaySeedMs",1e4,t),this.eb=Hn("forwardChannelMaxRetries",2,t),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function qn(t){if(Gn(t),3==t.H){var e=t.W++,n=Fe(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=Ke(Fe(n)),n=!1,l.navigator&&l.navigator.sendBeacon)try{n=l.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=ui(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Se(e)}ai(t)}function zn(t){t.g&&(ei(t),t.g.cancel(),t.g=null)}function Gn(t){zn(t),t.u&&(l.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Qn(t){if(!hn(t.i)&&!t.m){t.m=!0;var e=t.Na;Ot||xt(),Lt||(Ot(),Lt=!0),Pt.add(e,t),t.C=0}}function Xn(t,e){return!(ln(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),si(t,t.C)),t.C++,!0))}function Wn(t,e){var n;n=e?e.m:t.W++;const i=Fe(t.I);He(i,"SID",t.K),He(i,"RID",n),He(i,"AID",t.V),Yn(t,i),t.o&&t.s&&$n(i,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),be(n,i,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){He(e,n,t)})),t.h&&xe({},(function(t,n){He(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var i=t.h?w(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const c=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{vn(c,t,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ot||xt(),Lt||(Ot(),Lt=!0),Pt.add(e,t),t.A=0}}function ti(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),si(t,t.A)),t.A++,!0)}function ei(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function ni(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Fe(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ke(Fe(e)),n.s=null,n.S=!0,Te(n,t)}function ii(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function ri(t,e){var n=null;if(t.g==e){ii(t),ei(t),t.g=null;var i=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=te(),bt(i,new se(i,n)),Qn(t)}else Zn(t);else if(r=e.o,3==r||0==r&&0<e.ca||!(1==i&&Xn(t,e)||2==i&&ti(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:oi(t,5);break;case 4:oi(t,10);break;case 3:oi(t,6);break;default:oi(t,2)}}function si(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function oi(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=w(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Be(n,"https"),Ke(n)),wn(n.toString(),i)}else re(2);t.H=0,t.h&&t.h.za(e),ai(t),Gn(t)}function ai(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(C(t.ma,e),C(t.ma,t.j),t.i.i.length=0,A(t.j),t.j.length=0),t.h.ya()}}function ci(t,e,n){var i=n instanceof Ve?Fe(n):new Ve(n);if(""!=i.g)e&&(i.g=e+"."+i.g),je(i,i.m);else{var r=l.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ve(null);i&&Be(s,i),e&&(s.g=e),r&&je(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&He(i,n,e),He(i,"VER",t.ra),Yn(t,i),i}function ui(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Dn(new _n({ob:!0})):new Dn(t.va),e.Oa(t.J),e}function hi(){}function li(){if(U&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fi(t,e){_t.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}function di(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pi(){ge.call(this),this.status=1}function gi(t){this.g=t}function mi(){this.blockSize=-1}function yi(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vi(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function wi(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}i=Dn.prototype,i.Oa=function(t){this.M=t},i.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?he(this.u):he(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Ln(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=l.FormData&&t instanceof l.FormData,!(0<=I(kn,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Un(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ft(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ln(this,s)}},i.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),Mn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),Dn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?xn(this):this.kb())},i.kb=function(){xn(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Sn(e)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Kn.prototype,i.ra=8,i.H=1,i.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ye(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),rt(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,r,e),n=Fe(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jn(s)))+"&"+e:this.o&&$n(n,this.o,s)),dn(this.i,r),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),r.aa=!0,be(r,n,null)):be(r,n,e),this.H=2}}else 3==this.H&&(t?Wn(this,t):0==this.j.length||hn(this.i)||Wn(this))},i.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,re(10),zn(this),ni(this))},i.ib=function(){null!=this.v&&(this.v=null,zn(this),ti(this),re(19))},i.pb=function(t){t?(this.l.info("Successfully pinged google.com"),re(2)):(this.l.info("Failed to ping google.com"),re(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},i=hi.prototype,i.Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},li.prototype.g=function(t,e){return new fi(t,e)},_(fi,_t),fi.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ci(t,null,t.Y),Qn(t)},fi.prototype.close=function(){qn(this.g)},fi.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=It(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Qn(e)},fi.prototype.N=function(){this.g.h=null,delete this.j,qn(this.g),delete this.g,fi.$.N.call(this)},_(di,pe),_(pi,ge),_(gi,hi),gi.prototype.Ba=function(){bt(this.g,"a")},gi.prototype.Aa=function(t){bt(this.g,new di(t))},gi.prototype.za=function(t){bt(this.g,new pi)},gi.prototype.ya=function(){bt(this.g,"b")},_(yi,mi),yi.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yi.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)vi(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){vi(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){vi(this,i),r=0;break}}this.h=r,this.i+=e},yi.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var Ei={};function _i(t){return-128<=t&&128>t?L(t,(function(t){return new wi([0|t],0>t?-1:0)})):new wi([0|t],0>t?-1:0)}function bi(t){if(isNaN(t)||!isFinite(t))return Ai;if(0>t)return Ri(bi(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ii;return new wi(e,0)}function Ti(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Ri(Ti(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bi(Math.pow(e,8)),i=Ai,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=bi(Math.pow(e,s)),i=i.R(s).add(bi(o))):(i=i.R(n),i=i.add(bi(o)))}return i}var Ii=4294967296,Ai=_i(0),Ci=_i(1),Si=_i(16777216);function Di(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Ni(t){return-1==t.h}function Ri(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new wi(n,~t.h).add(Ci)}function ki(t,e){return t.add(Ri(e))}function Oi(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Li(t,e){this.g=t,this.h=e}function Pi(t,e){if(Di(e))throw Error("division by zero");if(Di(t))return new Li(Ai,Ai);if(Ni(t))return e=Pi(Ri(t),e),new Li(Ri(e.g),Ri(e.h));if(Ni(e))return e=Pi(t,Ri(e)),new Li(Ri(e.g),e.h);if(30<t.g.length){if(Ni(t)||Ni(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ci,i=e;0>=i.X(t);)n=xi(n),i=xi(i);var r=Mi(n,1),s=Mi(i,1);for(i=Mi(i,2),n=Mi(n,2);!Di(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Mi(i,1),n=Mi(n,1)}return e=ki(t,r.R(e)),new Li(r,e)}for(r=Ai;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=bi(n),o=s.R(e);Ni(o)||0<o.X(t);)n-=i,s=bi(n),o=s.R(e);Di(s)&&(s=Ci),r=r.add(s),t=ki(t,o)}return new Li(r,t)}function xi(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new wi(n,t.h)}function Mi(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new wi(r,t.h)}i=wi.prototype,i.ea=function(){if(Ni(this))return-Ri(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ii+i)*e,e*=Ii}return t},i.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Di(this))return"0";if(Ni(this))return"-"+Ri(this).toString(t);for(var e=bi(Math.pow(t,6)),n=this,i="";;){var r=Pi(n,e).g;n=ki(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Di(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},i.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.X=function(t){return t=ki(this,t),Ni(t)?-1:Di(t)?0:1},i.abs=function(){return Ni(this)?Ri(this):this},i.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new wi(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(t){if(Di(this)||Di(t))return Ai;if(Ni(this))return Ni(t)?Ri(this).R(Ri(t)):Ri(Ri(this).R(t));if(Ni(t))return Ri(this.R(Ri(t)));if(0>this.X(Si)&&0>t.X(Si))return bi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,Oi(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Oi(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Oi(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Oi(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new wi(n,0)},i.gb=function(t){return Pi(this,t).h},i.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new wi(n,this.h&t.h)},i.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new wi(n,this.h|t.h)},i.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new wi(n,this.h^t.h)},li.prototype.createWebChannel=li.prototype.g,fi.prototype.send=fi.prototype.u,fi.prototype.open=fi.prototype.m,fi.prototype.close=fi.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",le.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,Dn.prototype.listenOnce=Dn.prototype.P,Dn.prototype.getLastError=Dn.prototype.Sa,Dn.prototype.getLastErrorCode=Dn.prototype.Ia,Dn.prototype.getStatus=Dn.prototype.da,Dn.prototype.getResponseJson=Dn.prototype.Wa,Dn.prototype.getResponseText=Dn.prototype.ja,Dn.prototype.send=Dn.prototype.ha,Dn.prototype.setWithCredentials=Dn.prototype.Oa,yi.prototype.digest=yi.prototype.l,yi.prototype.reset=yi.prototype.reset,yi.prototype.update=yi.prototype.j,wi.prototype.add=wi.prototype.add,wi.prototype.multiply=wi.prototype.R,wi.prototype.modulo=wi.prototype.gb,wi.prototype.compare=wi.prototype.X,wi.prototype.toNumber=wi.prototype.ea,wi.prototype.toString=wi.prototype.toString,wi.prototype.getBits=wi.prototype.D,wi.fromNumber=bi,wi.fromString=Ti;var Ui=u.createWebChannelTransport=function(){return new li},Vi=u.getStatEventTarget=function(){return te()},Fi=u.ErrorCode=ae,Bi=u.EventType=ce,ji=u.Event=Jt,$i=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hi=u.FetchXmlHttpFactory=_n,Ki=u.WebChannel=le,qi=u.XhrIo=Dn,zi=(u.Md5=yi,u.Integer=wi);const Gi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qi.UNAUTHENTICATED=new Qi(null),Qi.GOOGLE_CREDENTIALS=new Qi("google-credentials-uid"),Qi.FIRST_PARTY=new Qi("first-party-uid"),Qi.MOCK_USER=new Qi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xi="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new o.Yd("@firebase/firestore");function Yi(){return Wi.logLevel}function Ji(t,...e){if(Wi.logLevel<=o["in"].DEBUG){const n=e.map(er);Wi.debug(`Firestore (${Xi}): ${t}`,...n)}}function Zi(t,...e){if(Wi.logLevel<=o["in"].ERROR){const n=e.map(er);Wi.error(`Firestore (${Xi}): ${t}`,...n)}}function tr(t,...e){if(Wi.logLevel<=o["in"].WARN){const n=e.map(er);Wi.warn(`Firestore (${Xi}): ${t}`,...n)}}function er(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw Zi(e),new Error(e)}function ir(t,e){t||nr()}function rr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class or extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ur{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qi.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class lr{constructor(t){this.t=t,this.currentUser=Qi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ar,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ji("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ji("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ar)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ji("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ir("string"==typeof e.accessToken),new cr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ir(null===t||"string"==typeof t),new Qi(t)}}class fr{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Qi.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fr(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Qi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gr{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ji("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ji("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ji("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Ji("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ir("string"==typeof t.token),this.R=t.token,new pr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=mr(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function vr(t,e){return t<e?-1:t>e?1:0}function wr(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new or(sr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new or(sr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new or(sr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new or(sr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Er.fromMillis(Date.now())}static fromDate(t){return Er.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Er(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vr(this.nanoseconds,t.nanoseconds):vr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){this.timestamp=t}static fromTimestamp(t){return new _r(t)}static min(){return new _r(new Er(0,0))}static max(){return new _r(new Er(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n){void 0===e?e=0:e>t.length&&nr(),void 0===n?n=t.length-e:n>t.length-e&&nr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===br.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof br?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tr extends br{construct(t,e,n){return new Tr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new or(sr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Tr(e)}static emptyPath(){return new Tr([])}}const Ir=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ar extends br{construct(t,e,n){return new Ar(t,e,n)}static isValidIdentifier(t){return Ir.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ar.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ar(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new or(sr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new or(sr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new or(sr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new or(sr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ar(e)}static emptyPath(){return new Ar([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t){this.path=t}static fromPath(t){return new Cr(Tr.fromString(t))}static fromName(t){return new Cr(Tr.fromString(t).popFirst(5))}static empty(){return new Cr(Tr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Tr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Tr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Cr(new Tr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Sr.UNKNOWN_ID=-1;function Dr(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=_r.fromTimestamp(1e9===i?new Er(n+1,0):new Er(n,i));return new Rr(r,Cr.empty(),e)}function Nr(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Rr(_r.min(),Cr.empty(),-1)}static max(){return new Rr(_r.max(),Cr.empty(),-1)}}function kr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Cr.comparator(t.documentKey,e.documentKey),0!==n?n:vr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t){if(t.code!==sr.FAILED_PRECONDITION||t.message!==Or)throw t;Ji("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&nr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new xr(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof xr?e:xr.resolve(e)}catch(t){return xr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):xr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):xr.reject(e)}static resolve(t){return new xr(((e,n)=>{e(t)}))}static reject(t){return new xr(((e,n)=>{n(t)}))}static waitFor(t){return new xr(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=xr.resolve(!1);for(const n of t)e=e.next((t=>t?xr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new xr(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new xr(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Vr(t){return null==t}function Fr(t){return 0===t&&1/t==-1/0}function Br(t){return"number"==typeof t&&Number.isInteger(t)&&!Fr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.ae=-1;const jr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$r=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Hr=$r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.comparator=t,this.root=e||Xr.EMPTY}insert(t,e){return new Gr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xr.BLACK,null,null))}remove(t){return new Gr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qr(this.root,t,this.comparator,!0)}}class Qr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xr{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Xr.RED,this.left=null!=i?i:Xr.EMPTY,this.right=null!=r?r:Xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Xr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Xr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw nr();if(this.right.isRed())throw nr();const t=this.left.check();if(t!==this.right.check())throw nr();return t+(this.isRed()?0:1)}}Xr.EMPTY=null,Xr.RED=!0,Xr.BLACK=!1,Xr.EMPTY=new class{constructor(){this.size=0}get key(){throw nr()}get value(){throw nr()}get color(){throw nr()}get left(){throw nr()}get right(){throw nr()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Xr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{constructor(t){this.comparator=t,this.data=new Gr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yr(this.data.getIterator())}getIteratorFrom(t){return new Yr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Wr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Wr(this.comparator);return e.data=t,e}}class Yr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(t){this.fields=t,t.sort(Ar.comparator)}static empty(){return new Jr([])}unionWith(t){let e=new Wr(Ar.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Jr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zr("Invalid base64 string: "+t):t}}(t);return new ts(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ts(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const es=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(ir(!!t),"string"==typeof t){let e=0;const n=es.exec(t);if(ir(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:is(t.seconds),nanos:is(t.nanos)}}function is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rs(t){return"string"==typeof t?ts.fromBase64String(t):ts.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function os(t){const e=t.mapValue.fields.__previous_value__;return ss(e)?os(e):e}function as(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new Er(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class us{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof us&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ss(t)?4:bs(t)?9007199254740991:10:nr()}function fs(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ns(t.timestampValue),i=ns(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return rs(t.bytesValue).isEqual(rs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return is(t.geoPointValue.latitude)===is(e.geoPointValue.latitude)&&is(t.geoPointValue.longitude)===is(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return is(t.integerValue)===is(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=is(t.doubleValue),i=is(e.doubleValue);return n===i?Fr(n)===Fr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return wr(t.arrayValue.values||[],e.arrayValue.values||[],fs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Kr(n)!==Kr(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!fs(n[r],i[r])))return!1;return!0}(t,e);default:return nr()}}function ds(t,e){return void 0!==(t.values||[]).find((t=>fs(t,e)))}function ps(t,e){if(t===e)return 0;const n=ls(t),i=ls(e);if(n!==i)return vr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return vr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=is(t.integerValue||t.doubleValue),i=is(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return gs(t.timestampValue,e.timestampValue);case 4:return gs(as(t),as(e));case 5:return vr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=rs(t),i=rs(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=vr(n[r],i[r]);if(0!==t)return t}return vr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=vr(is(t.latitude),is(e.latitude));return 0!==n?n:vr(is(t.longitude),is(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ps(n[r],i[r]);if(t)return t}return vr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===hs.mapValue&&e===hs.mapValue)return 0;if(t===hs.mapValue)return 1;if(e===hs.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=vr(i[o],s[o]);if(0!==t)return t;const e=ps(n[i[o]],r[s[o]]);if(0!==e)return e}return vr(i.length,s.length)}(t.mapValue,e.mapValue);default:throw nr()}}function gs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return vr(t,e);const n=ns(t),i=ns(e),r=vr(n.seconds,i.seconds);return 0!==r?r:vr(n.nanos,i.nanos)}function ms(t){return ys(t)}function ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ns(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return rs(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Cr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=ys(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${ys(t.fields[r])}`;return n+"}"}(t.mapValue):nr()}function vs(t){return!!t&&"integerValue"in t}function ws(t){return!!t&&"arrayValue"in t}function Es(t){return!!t&&"mapValue"in t}function _s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=_s(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.value=t}static empty(){return new Ts({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_s(e)}setAll(t){let e=Ar.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=_s(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){qr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Ts(_s(this.value))}}function Is(t){const e=[];return qr(t.fields,((t,n)=>{const i=new Ar([t]);if(Es(n)){const t=Is(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Jr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class As{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new As(t,0,_r.min(),_r.min(),_r.min(),Ts.empty(),0)}static newFoundDocument(t,e,n,i){return new As(t,1,e,_r.min(),n,i,0)}static newNoDocument(t,e){return new As(t,2,e,_r.min(),_r.min(),Ts.empty(),0)}static newUnknownDocument(t,e){return new As(t,3,e,_r.min(),_r.min(),Ts.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(_r.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ts.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ts.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_r.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof As&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e){this.position=t,this.inclusive=e}}function Ss(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Cr.comparator(Cr.fromName(o.referenceValue),n.key):ps(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ds(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{}class Os extends ks{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Bs(t,e,n):"array-contains"===e?new Ks(t,n):"in"===e?new qs(t,n):"not-in"===e?new zs(t,n):"array-contains-any"===e?new Gs(t,n):new Os(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new js(t,n):new $s(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ps(e,this.value)):null!==e&&ls(this.value)===ls(e)&&this.matchesComparison(ps(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return nr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ls extends ks{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ls(t,e)}matches(t){return Ps(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ps(t){return"and"===t.op}function xs(t){return Ms(t)&&Ps(t)}function Ms(t){for(const e of t.filters)if(e instanceof Ls)return!1;return!0}function Us(t){if(t instanceof Os)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(xs(t))return t.filters.map((t=>Us(t))).join(",");{const e=t.filters.map((t=>Us(t))).join(",");return`${t.op}(${e})`}}function Vs(t,e){return t instanceof Os?function(t,e){return e instanceof Os&&t.op===e.op&&t.field.isEqual(e.field)&&fs(t.value,e.value)}(t,e):t instanceof Ls?function(t,e){return e instanceof Ls&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Vs(n,e.filters[i])),!0)}(t,e):void nr()}function Fs(t){return t instanceof Os?function(t){return`${t.field.canonicalString()} ${t.op} ${ms(t.value)}`}(t):t instanceof Ls?function(t){return t.op.toString()+" {"+t.getFilters().map(Fs).join(" ,")+"}"}(t):"Filter"}class Bs extends Os{constructor(t,e,n){super(t,e,n),this.key=Cr.fromName(n.referenceValue)}matches(t){const e=Cr.comparator(t.key,this.key);return this.matchesComparison(e)}}class js extends Os{constructor(t,e){super(t,"in",e),this.keys=Hs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $s extends Os{constructor(t,e){super(t,"not-in",e),this.keys=Hs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Hs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Cr.fromName(t.referenceValue)))}class Ks extends Os{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ws(e)&&ds(e.arrayValue,this.value)}}class qs extends Os{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ds(this.value.arrayValue,e)}}class zs extends Os{constructor(t,e){super(t,"not-in",e)}matches(t){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ds(this.value.arrayValue,e)}}class Gs extends Os{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ds(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.he=null}}function Xs(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Qs(t,e,n,i,r,s,o)}function Ws(t){const e=rr(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Us(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ms(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ms(t))).join(",")),e.he=t}return e.he}function Ys(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Vs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ds(t.startAt,e.startAt)&&Ds(t.endAt,e.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Zs(t,e,n,i,r,s,o,a){return new Js(t,e,n,i,r,s,o,a)}function to(t){return new Js(t)}function eo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function no(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function io(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ro(t){return null!==t.collectionGroup}function so(t){const e=rr(t);if(null===e.Pe){e.Pe=[];const t=io(e),n=no(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Ns(t)),e.Pe.push(new Ns(Ar.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ns(Ar.keyField(),t))}}}return e.Pe}function oo(t){const e=rr(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Xs(e.path,e.collectionGroup,so(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of so(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Ns(r.field,e))}const n=e.endAt?new Cs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Cs(e.startAt.position,e.startAt.inclusive):null;e.Ie=Xs(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.Ie}function ao(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function co(t,e){return Ys(oo(t),oo(e))&&t.limitType===e.limitType}function uo(t){return`${Ws(oo(t))}|lt:${t.limitType}`}function ho(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Fs(t))).join(", ")}]`),Vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ms(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ms(t))).join(",")),`Target(${e})`}(oo(t))}; limitType=${t.limitType})`}function lo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Cr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of so(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ss(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,so(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ss(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,so(t),e))}(t,e)}function fo(t){return(e,n)=>{let i=!1;for(const r of so(t)){const t=po(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function po(t,e,n){const i=t.field.isKeyField()?Cr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ps(i,r):nr()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return nr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){qr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return zr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Gr(Cr.comparator);function yo(){return mo}const vo=new Gr(Cr.comparator);function wo(...t){let e=vo;for(const n of t)e=e.insert(n.key,n);return e}function Eo(t){let e=vo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function _o(){return To()}function bo(){return To()}function To(){return new go((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Io=new Gr(Cr.comparator),Ao=new Wr(Cr.comparator);function Co(...t){let e=Ao;for(const n of t)e=e.add(n);return e}const So=new Wr(vr);function Do(){return So}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function Ro(t){return{integerValue:""+t}}function ko(t,e){return Br(e)?Ro(e):No(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function Lo(t,e,n){return t instanceof Mo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ss(e)&&(e=os(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Uo?Vo(t,e):t instanceof Fo?Bo(t,e):function(t,e){const n=xo(t,e),i=$o(n)+$o(t.Te);return vs(n)&&vs(t.Te)?Ro(i):No(t.serializer,i)}(t,e)}function Po(t,e,n){return t instanceof Uo?Vo(t,e):t instanceof Fo?Bo(t,e):n}function xo(t,e){return t instanceof jo?function(t){return vs(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Mo extends Oo{}class Uo extends Oo{constructor(t){super(),this.elements=t}}function Vo(t,e){const n=Ho(e);for(const i of t.elements)n.some((t=>fs(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Fo extends Oo{constructor(t){super(),this.elements=t}}function Bo(t,e){let n=Ho(e);for(const i of t.elements)n=n.filter((t=>!fs(t,i)));return{arrayValue:{values:n}}}class jo extends Oo{constructor(t,e){super(),this.serializer=t,this.Te=e}}function $o(t){return is(t.integerValue||t.doubleValue)}function Ho(t){return ws(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Uo&&e instanceof Uo||t instanceof Fo&&e instanceof Fo?wr(t.elements,e.elements,fs):t instanceof jo&&e instanceof jo?fs(t.Te,e.Te):t instanceof Mo&&e instanceof Mo}(t.transform,e.transform)}class qo{constructor(t,e){this.version=t,this.transformResults=e}}class zo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zo}static exists(t){return new zo(void 0,t)}static updateTime(t){return new zo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Go(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Qo{}function Xo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new sa(t.key,zo.none()):new ta(t.key,t.data,zo.none());{const n=t.data,i=Ts.empty();let r=new Wr(Ar.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ea(t.key,i,new Jr(r.toArray()),zo.none())}}function Wo(t,e,n){t instanceof ta?function(t,e,n){const i=t.value.clone(),r=ia(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ea?function(t,e,n){if(!Go(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ia(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(na(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,i){return t instanceof ta?function(t,e,n,i){if(!Go(t.precondition,e))return n;const r=t.value.clone(),s=ra(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof ea?function(t,e,n,i){if(!Go(t.precondition,e))return n;const r=ra(t.fieldTransforms,i,e),s=e.data;return s.setAll(na(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Go(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Jo(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=xo(i.transform,t||null);null!=r&&(null===n&&(n=Ts.empty()),n.set(i.field,r))}return n||null}function Zo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&wr(t,e,((t,e)=>Ko(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends Qo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ea extends Qo{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function na(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function ia(t,e,n){const i=new Map;ir(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Po(o,a,n[r]))}return i}function ra(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Lo(t,s,e))}return i}class sa extends Qo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oa extends Qo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Wo(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Yo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Yo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=bo();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Xo(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(_r.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Co())}isEqual(t){return this.batchId===t.batchId&&wr(this.mutations,t.mutations,((t,e)=>Zo(t,e)))&&wr(this.baseMutations,t.baseMutations,((t,e)=>Zo(t,e)))}}class ca{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){ir(t.mutations.length===n.length);let i=function(){return Io}();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new ca(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ha,la;function fa(t){switch(t){default:return nr();case sr.CANCELLED:case sr.UNKNOWN:case sr.DEADLINE_EXCEEDED:case sr.RESOURCE_EXHAUSTED:case sr.INTERNAL:case sr.UNAVAILABLE:case sr.UNAUTHENTICATED:return!1;case sr.INVALID_ARGUMENT:case sr.NOT_FOUND:case sr.ALREADY_EXISTS:case sr.PERMISSION_DENIED:case sr.FAILED_PRECONDITION:case sr.ABORTED:case sr.OUT_OF_RANGE:case sr.UNIMPLEMENTED:case sr.DATA_LOSS:return!0}}function da(t){if(void 0===t)return Zi("GRPC error has no .code"),sr.UNKNOWN;switch(t){case ha.OK:return sr.OK;case ha.CANCELLED:return sr.CANCELLED;case ha.UNKNOWN:return sr.UNKNOWN;case ha.DEADLINE_EXCEEDED:return sr.DEADLINE_EXCEEDED;case ha.RESOURCE_EXHAUSTED:return sr.RESOURCE_EXHAUSTED;case ha.INTERNAL:return sr.INTERNAL;case ha.UNAVAILABLE:return sr.UNAVAILABLE;case ha.UNAUTHENTICATED:return sr.UNAUTHENTICATED;case ha.INVALID_ARGUMENT:return sr.INVALID_ARGUMENT;case ha.NOT_FOUND:return sr.NOT_FOUND;case ha.ALREADY_EXISTS:return sr.ALREADY_EXISTS;case ha.PERMISSION_DENIED:return sr.PERMISSION_DENIED;case ha.FAILED_PRECONDITION:return sr.FAILED_PRECONDITION;case ha.ABORTED:return sr.ABORTED;case ha.OUT_OF_RANGE:return sr.OUT_OF_RANGE;case ha.UNIMPLEMENTED:return sr.UNIMPLEMENTED;case ha.DATA_LOSS:return sr.DATA_LOSS;default:return nr()}}(la=ha||(ha={}))[la.OK=0]="OK",la[la.CANCELLED=1]="CANCELLED",la[la.UNKNOWN=2]="UNKNOWN",la[la.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",la[la.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",la[la.NOT_FOUND=5]="NOT_FOUND",la[la.ALREADY_EXISTS=6]="ALREADY_EXISTS",la[la.PERMISSION_DENIED=7]="PERMISSION_DENIED",la[la.UNAUTHENTICATED=16]="UNAUTHENTICATED",la[la.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",la[la.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",la[la.ABORTED=10]="ABORTED",la[la.OUT_OF_RANGE=11]="OUT_OF_RANGE",la[la.UNIMPLEMENTED=12]="UNIMPLEMENTED",la[la.INTERNAL=13]="INTERNAL",la[la.UNAVAILABLE=14]="UNAVAILABLE",la[la.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new zi([4294967295,4294967295],0);(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();class pa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ma(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ya(t,e){return ga(t,e.toTimestamp())}function va(t){return ir(!!t),_r.fromTimestamp(function(t){const e=ns(t);return new Er(e.seconds,e.nanos)}(t))}function wa(t,e){return function(t){return new Tr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ea(t){const e=Tr.fromString(t);return ir(Oa(e)),e}function _a(t,e){return wa(t.databaseId,e.path)}function ba(t){const e=Ea(t);return 4===e.length?Tr.emptyPath():Ia(e)}function Ta(t){return new Tr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ia(t){return ir(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Aa(t,e,n){return{name:_a(t,e),fields:n.value.mapValue.fields}}function Ca(t,e){let n;if(e instanceof ta)n={update:Aa(t,e.key,e.value)};else if(e instanceof sa)n={delete:_a(t,e.key)};else if(e instanceof ea)n={update:Aa(t,e.key,e.data),updateMask:ka(e.fieldMask)};else{if(!(e instanceof oa))return nr();n={verify:_a(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Mo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Uo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Fo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jo)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw nr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ya(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:nr()}(t,e.precondition)),n}function Sa(t,e){return t&&t.length>0?(ir(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?va(t.updateTime):va(e);return n.isEqual(_r.min())&&(n=va(e)),new qo(n,t.transformResults||[])}(t,e)))):[]}function Da(t){let e=ba(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ir(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Na(t);return e instanceof Ls&&xs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ns(Ra(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Cs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Cs(n,e)}(n.endAt)),Zs(e,r,o,s,a,"F",c,u)}function Na(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ra(t.unaryFilter.field);return Os.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ra(t.unaryFilter.field);return Os.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ra(t.unaryFilter.field);return Os.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ra(t.unaryFilter.field);return Os.create(r,"!=",{nullValue:"NULL_VALUE"});default:return nr()}}(t):void 0!==t.fieldFilter?function(t){return Os.create(Ra(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ls.create(t.compositeFilter.filters.map((t=>Na(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return nr()}}(t.compositeFilter.op))}(t):nr()}function Ra(t){return Ar.fromServerFormat(t.fieldPath)}function ka(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Oa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.ct=t}}function Pa(t){const e=Da({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ao(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(is(t.integerValue));else if("doubleValue"in t){const n=is(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Fr(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(rs(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?bs(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):nr()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const i of Object.keys(n))this.Rt(i,e),this.It(n[i],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const i of n)this.It(i,e)}gt(t,e){this.Et(e,37),Cr.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}xa.bt=new xa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(){this.sn=new Ua}addToCollectionParentIndex(t,e){return this.sn.add(e),xr.resolve()}getCollectionParents(t,e){return xr.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return xr.resolve()}deleteFieldIndex(t,e){return xr.resolve()}getDocumentsMatchingTarget(t,e){return xr.resolve(null)}getIndexType(t,e){return xr.resolve(0)}getFieldIndexes(t,e){return xr.resolve([])}getNextCollectionGroupToUpdate(t){return xr.resolve(null)}getMinOffset(t,e){return xr.resolve(Rr.min())}getMinOffsetFromCollectionGroup(t,e){return xr.resolve(Rr.min())}updateCollectionGroup(t,e,n){return xr.resolve()}updateIndexEntries(t,e){return xr.resolve()}}class Ua{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Wr(Tr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Wr(Tr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Va{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Va(t,Va.DEFAULT_COLLECTION_PERCENTILE,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Va.DEFAULT_COLLECTION_PERCENTILE=10,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Va.DEFAULT=new Va(41943040,Va.DEFAULT_COLLECTION_PERCENTILE,Va.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Va.DISABLED=new Va(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Fa(0)}static On(){return new Fa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new go((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,As.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?xr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Yo(n.mutation,t,Jr.empty(),Er.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Co()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Co()){const i=_o();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=wo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=_o();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Co())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=yo();const s=To(),o=function(){return To()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof ea)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Yo(o.mutation,e,o.mutation.getFieldMask(),Er.now())):s.set(e.key,Jr.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ja(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=To();let i=new Gr(((t,e)=>t-e)),r=Co();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Jr.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Co()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=bo();c.forEach((t=>{if(!r.has(t)){const i=Xo(e.get(t),n.get(t));null!==i&&u.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return xr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Cr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ro(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):xr.resolve(_o());let o=-1,a=r;return s.next((e=>xr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?xr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Co()))).next((t=>({batchId:o,changes:Eo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Cr(e)).next((t=>{let e=wo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=wo();return this.indexManager.getCollectionParents(t,i).next((s=>xr.forEach(s,(s=>{const o=function(t,e){return new Js(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,As.newInvalidDocument(i)))}));let n=wo();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Yo(s.mutation,r,Jr.empty(),Er.now()),lo(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return xr.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(t){return{id:t.id,version:t.version,createTime:va(t.createTime)}}(e)),xr.resolve()}getNamedQuery(t,e){return xr.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(t){return{name:t.name,query:Pa(t.bundledQuery),readTime:va(t.readTime)}}(e)),xr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.overlays=new Gr(Cr.comparator),this.cr=new Map}getOverlay(t,e){return xr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=_o();return xr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),xr.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.cr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),xr.resolve()}getOverlaysForCollection(t,e,n){const i=_o(),r=e.length+1,s=new Cr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return xr.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Gr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=_o(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=_o(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return xr.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.cr.get(i.largestBatchId).delete(n.key);this.cr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ua(e,n));let r=this.cr.get(e);void 0===r&&(r=Co(),this.cr.set(e,r)),this.cr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.lr=new Wr(za.hr),this.Pr=new Wr(za.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new za(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new za(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new Cr(new Tr([])),n=new za(e,t),i=new za(e,t+1),r=[];return this.Pr.forEachInRange([n,i],(t=>{this.Er(t),r.push(t.key)})),r}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new Cr(new Tr([])),n=new za(e,t),i=new za(e,t+1);let r=Co();return this.Pr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new za(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class za{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return Cr.comparator(t.key,e.key)||vr(t.mr,e.mr)}static Ir(t,e){return vr(t.mr,e.mr)||Cr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Wr(za.hr)}checkEmpty(t){return xr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new aa(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.pr=this.pr.add(new za(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return xr.resolve(s)}lookupMutationBatch(t,e){return xr.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.wr(n),r=i<0?0:i;return xr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return xr.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return xr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new za(e,0),i=new za(e,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([n,i],(t=>{const e=this.yr(t.mr);r.push(e)})),xr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Wr(vr);return e.forEach((t=>{const e=new za(t,0),i=new za(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,i],(t=>{n=n.add(t.mr)}))})),xr.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Cr.isDocumentKey(r)||(r=r.child(""));const s=new za(new Cr(r),0);let o=new Wr(vr);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.mr)),!0)}),s),xr.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ir(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return xr.forEach(e.mutations,(i=>{const r=new za(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new za(e,0),i=this.pr.firstAfterOrEqual(n);return xr.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,xr.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){this.Dr=t,this.docs=function(){return new Gr(Cr.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return xr.resolve(n?n.document.mutableCopy():As.newInvalidDocument(e))}getEntries(t,e){let n=yo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():As.newInvalidDocument(t))})),xr.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=yo();const s=e.path,o=new Cr(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||kr(Nr(o),n)<=0||(i.has(o.key)||lo(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return xr.resolve(r)}getAllFromCollectionGroup(t,e,n,i){nr()}vr(t,e){return xr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Xa(this)}getSize(t){return xr.resolve(this.size)}}class Xa extends Ba{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(n)})),xr.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this.persistence=t,this.Cr=new go((t=>Ws(t)),Ys),this.lastRemoteSnapshotVersion=_r.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new qa,this.targetCount=0,this.Or=Fa.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),xr.resolve()}getLastRemoteSnapshotVersion(t){return xr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return xr.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),xr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),xr.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Fa(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,xr.resolve()}updateTargetData(t,e){return this.Ln(e),xr.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,xr.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),xr.waitFor(r).next((()=>i))}getTargetCount(t){return xr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return xr.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),xr.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),xr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),xr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return xr.resolve(n)}containsKey(t,e){return xr.resolve(this.Mr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Ur(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Wa(this),this.indexManager=new Ma,this.remoteDocumentCache=function(t){return new Qa(t)}((t=>this.referenceDelegate.qr(t))),this.serializer=new La(e),this.Qr=new Ha(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new Ga(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Ji("MemoryPersistence","Starting transaction:",t);const i=new Ja(this.Br.next());return this.referenceDelegate.Kr(),n(i).next((t=>this.referenceDelegate.$r(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ur(t,e){return xr.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class Ja extends Lr{constructor(t){super(),this.currentSequenceNumber=t}}class Za{constructor(t){this.persistence=t,this.Wr=new qa,this.Gr=null}static zr(t){return new Za(t)}get jr(){if(this.Gr)return this.Gr;throw nr()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),xr.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),xr.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),xr.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xr.forEach(this.jr,(n=>{const i=Cr.fromPath(n);return this.Hr(t,i).next((t=>{t||e.removeEntry(i,_r.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return xr.or([()=>xr.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=i}static qi(t,e){let n=Co(),i=Co();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new tc(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.$i(t,e).next((r=>r||this.Ui(t,e,i,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(eo(e))return xr.resolve(null);let n=oo(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=ao(e,null,"F"),n=oo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Co(...i);return this.Ki.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,i);return this.zi(e,s,r,n.readTime)?this.$i(t,ao(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,i){return eo(e)||i.isEqual(_r.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((r=>{const s=this.Gi(e,r);return this.zi(e,s,n,i)?this.Wi(t,e):(Yi()<=o["in"].DEBUG&&Ji("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ho(e)),this.ji(t,s,e,Dr(i,-1)))}))}Gi(t,e){let n=new Wr(fo(t));return e.forEach(((e,i)=>{lo(t,i)&&(n=n.add(i))})),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(t,e){return Yi()<=o["in"].DEBUG&&Ji("QueryEngine","Using full collection scan to execute query:",ho(e)),this.Ki.getDocumentsMatchingQuery(t,e,Rr.min())}ji(t,e,n,i){return this.Ki.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new Gr(vr),this.Yi=new go((t=>Ws(t)),Ys),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $a(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function ic(t,e,n,i){return new nc(t,e,n,i)}async function rc(t,e){const n=rr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Co();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function sc(t,e){const n=rr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=xr.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ir(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Co();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function oc(t){const e=rr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function ac(t,e){const n=rr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class cc{constructor(){this.activeTargetIds=Do()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uc{constructor(){this.Hs=new cc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new cc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{Ys(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Ji("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Ji("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc=null;function dc(){return null===fc?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="WebChannelConnection";class yc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${i}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Ro(){return!1}Vo(t,e,n,i,r){const s=dc(),o=this.mo(t,e);Ji("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,i,r),this.po(t,o,a,n).then((e=>(Ji("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw tr("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,i,r,s){return this.Vo(t,e,n,i,r)}fo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=pc[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,i){const r=dc();return new Promise(((s,o)=>{const a=new qi;a.setWithCredentials(!0),a.listenOnce(Bi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Fi.NO_ERROR:const e=a.getResponseJson();Ji(mc,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case Fi.TIMEOUT:Ji(mc,`RPC '${t}' ${r} timed out`),o(new or(sr.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const n=a.getStatus();if(Ji(mc,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(sr).indexOf(e)>=0?e:sr.UNKNOWN}(e.status);o(new or(t,e.message))}else o(new or(sr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new or(sr.UNAVAILABLE,"Connection failed."));break;default:nr()}}finally{Ji(mc,`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);Ji(mc,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const i=dc(),r=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ui(),o=Vi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Hi({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=r.join("");Ji(mc,`Creating RPC '${t}' stream ${i}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,f=!1;const d=new gc({so:e=>{f?Ji(mc,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(l||(Ji(mc,`Opening RPC '${t}' stream ${i} transport.`),h.open(),l=!0),Ji(mc,`RPC '${t}' stream ${i} sending:`,e),h.send(e))},oo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,Ki.EventType.OPEN,(()=>{f||Ji(mc,`RPC '${t}' stream ${i} transport opened.`)})),p(h,Ki.EventType.CLOSE,(()=>{f||(f=!0,Ji(mc,`RPC '${t}' stream ${i} transport closed`),d.Po())})),p(h,Ki.EventType.ERROR,(e=>{f||(f=!0,tr(mc,`RPC '${t}' stream ${i} transport errored:`,e),d.Po(new or(sr.UNAVAILABLE,"The operation could not be completed")))})),p(h,Ki.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];ir(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Ji(mc,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=ha[t];if(void 0!==e)return da(e)}(e),r=o.message;void 0===n&&(n=sr.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Po(new or(n,r)),h.close()}else Ji(mc,`RPC '${t}' stream ${i} received:`,r),d.Io(r)}})),p(o,ji.STAT_EVENT,(e=>{e.stat===$i.PROXY?Ji(mc,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===$i.NOPROXY&&Ji(mc,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.ho()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){return new pa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-n);i>0&&Ji("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,n,i,r,s,o,a){this.ii=t,this.Bo=n,this.Lo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ec(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===sr.RESOURCE_EXHAUSTED?(Zi(e.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===sr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new or(sr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Ji("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Ji("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bc extends _c{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(ir(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=Sa(t.writeResults,t.commitTime),n=va(t.commitTime);return this.listener.u_(n,e)}return ir(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Ta(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ca(this.serializer,t)))};this.Ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new or(sr.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Vo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===sr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new or(sr.UNKNOWN,t.toString())}))}yo(t,e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.yo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===sr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new or(sr.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class Ic{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Zi(e),this.d_=!1):Ji("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{Dc(this)&&(Ji("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=rr(t);e.y_.add(4),await Sc(e),e.b_.set("Unknown"),e.y_.delete(4),await Cc(e)}(this))}))})),this.b_=new Ic(n,i)}}async function Cc(t){if(Dc(t))for(const e of t.w_)await e(!0)}async function Sc(t){for(const e of t.w_)await e(!1)}function Dc(t){return 0===rr(t).y_.size}async function Nc(t,e,n){if(!Mr(e))throw e;t.y_.add(1),await Sc(t),t.b_.set("Offline"),n||(n=()=>oc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ji("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Cc(t)}))}function Rc(t,e){return e().catch((n=>Nc(t,n,e)))}async function kc(t){const e=rr(t),n=$c(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Oc(e);)try{const t=await ac(e.localStore,i);if(null===t){0===e.g_.length&&n.zo();break}i=t.batchId,Lc(e,t)}catch(t){await Nc(e,t)}Pc(e)&&xc(e)}function Oc(t){return Dc(t)&&t.g_.length<10}function Lc(t,e){t.g_.push(e);const n=$c(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Pc(t){return Dc(t)&&!$c(t).$o()&&t.g_.length>0}function xc(t){$c(t).start()}async function Mc(t){$c(t).l_()}async function Uc(t){const e=$c(t);for(const n of t.g_)e.a_(n.mutations)}async function Vc(t,e,n){const i=t.g_.shift(),r=ca.from(i,e,n);await Rc(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await kc(t)}async function Fc(t,e){e&&$c(t).__&&await async function(t,e){if(function(t){return fa(t)&&t!==sr.ABORTED}(e.code)){const n=t.g_.shift();$c(t).Go(),await Rc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await kc(t)}}(t,e),Pc(t)&&xc(t)}async function Bc(t,e){const n=rr(t);n.asyncQueue.verifyOperationInProgress(),Ji("RemoteStore","RemoteStore received new credentials");const i=Dc(n);n.y_.add(3),await Sc(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Cc(n)}async function jc(t,e){const n=rr(t);e?(n.y_.delete(2),await Cc(n)):e||(n.y_.add(2),await Sc(n),n.b_.set("Unknown"))}function $c(t){return t.C_||(t.C_=function(t,e,n){const i=rr(t);return i.P_(),new bc(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:Mc.bind(null,t),uo:Fc.bind(null,t),c_:Uc.bind(null,t),u_:Vc.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await kc(t)):(await t.C_.stop(),t.g_.length>0&&(Ji("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Hc{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Hc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new or(sr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(t,e){if(Zi("AsyncQueue",`${e}: ${t}`),Mr(t))return new or(sr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.queries=new go((t=>uo(t)),co),this.onlineState="Unknown",this.O_=new Set}}function zc(t){t.O_.forEach((t=>{t.next()}))}class Gc{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new go((t=>uo(t)),co),this.da=new Map,this.Aa=new Set,this.Ra=new Gr(Cr.comparator),this.Va=new Map,this.ma=new qa,this.fa={},this.ga=new Map,this.pa=Fa.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Qc(t,e,n){const i=nu(t);try{const t=await function(t,e){const n=rr(t),i=Er.now(),r=e.reduce(((t,e)=>t.add(e.key)),Co());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=yo(),c=Co();return n.Xi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Jo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ea(t.key,e,Is(e.value.mapValue),zo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Eo(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.fa[t.currentUser.toKey()];i||(i=new Gr(vr)),i=i.insert(e,n),t.fa[t.currentUser.toKey()]=i}(i,t.batchId,n),await tu(i,t.changes),await kc(i.remoteStore)}catch(t){const e=Kc(t,"Failed to persist write");n.reject(e)}}function Xc(t,e,n){const i=rr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Ea.forEach(((n,i)=>{const r=i.view.N_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=rr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.N_(e)&&(i=!0)})),i&&zc(n)}(i.eventManager,e),t.length&&i.Ta.r_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Wc(t,e){const n=rr(t),i=e.batch.batchId;try{const t=await sc(n.localStore,e);Zc(n,i,null),Jc(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await tu(n,t)}catch(t){await Pr(t)}}async function Yc(t,e,n){const i=rr(t);try{const t=await function(t,e){const n=rr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ir(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Zc(i,e,n),Jc(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await tu(i,t)}catch(n){await Pr(n)}}function Jc(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function Zc(t,e,n){const i=rr(t);let r=i.fa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.fa[i.currentUser.toKey()]=r}}async function tu(t,e,n){const i=rr(t),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach(((t,a)=>{o.push(i.wa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=tc.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ta.r_(r),await async function(t,e){const n=rr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>xr.forEach(e,(e=>xr.forEach(e.Li,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>xr.forEach(e.ki,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Mr(t))throw t;Ji("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,r)}}}(i.localStore,s))}async function eu(t,e){const n=rr(t);if(!n.currentUser.isEqual(e)){Ji("SyncEngine","User change. New user:",e.toKey());const t=await rc(n.localStore,e);n.currentUser=e,function(t,e){t.ga.forEach((t=>{t.forEach((t=>{t.reject(new or(sr.CANCELLED,e))}))})),t.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await tu(n,t.ts)}}function nu(t){const e=rr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yc.bind(null,e),e}class iu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=wc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ic(this.persistence,new ec,t.initialUser,this.serializer)}createPersistence(t){return new Ya(Za.zr,this.serializer)}createSharedClientState(t){return new uc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ru{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=eu.bind(null,this.syncEngine),await jc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qc}()}createDatastore(t){const e=wc(t.databaseInfo.databaseId),n=function(t){return new yc(t)}(t.databaseInfo);return function(t,e,n,i){return new Tc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Ac(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Xc(this.syncEngine,t,0)),function(){return lc.v()?new lc:new hc}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Gc(t,e,n,i,r,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=rr(t);Ji("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await Sc(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Qi.UNAUTHENTICATED,this.clientId=yr.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ji("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ji("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new or(sr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Kc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ou(t,e){t.asyncQueue.verifyOperationInProgress(),Ji("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await rc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function au(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uu(t);Ji("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Bc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Bc(e.remoteStore,n))),t._onlineComponents=e}function cu(t){return"FirebaseError"===t.name?t.code===sr.FAILED_PRECONDITION||t.code===sr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function uu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ji("FirestoreClient","Using user provided OfflineComponentProvider");try{await ou(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cu(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await ou(t,new iu)}}else Ji("FirestoreClient","Using default OfflineComponentProvider"),await ou(t,new iu);return t._offlineComponents}async function hu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ji("FirestoreClient","Using user provided OnlineComponentProvider"),await au(t,t._uninitializedComponentsProvider._online)):(Ji("FirestoreClient","Using default OnlineComponentProvider"),await au(t,new ru))),t._onlineComponents}function lu(t){return hu(t).then((t=>t.syncEngine))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const du=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e,n){if(!n)throw new or(sr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gu(t,e,n,i){if(!0===e&&!0===i)throw new or(sr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mu(t){if(!Cr.isDocumentKey(t))throw new or(sr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yu(t){if(Cr.isDocumentKey(t))throw new or(sr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":nr()}function wu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new or(sr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new or(sr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new or(sr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new or(sr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new or(sr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new or(sr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new or(sr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _u{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new or(sr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new or(sr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ur;switch(t.type){case"firstParty":return new dr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new or(sr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=du.get(t);e&&(Ji("ComponentProvider","Removing Datastore"),du.delete(t),e.terminate())}(this),Promise.resolve()}}function bu(t,e,n,i={}){var r;const s=(t=wu(t,_u))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Qi.MOCK_USER;else{e=(0,a.Sg)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new or(sr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qi(s)}t._authCredentials=new hr(new cr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tu(this.firestore,t,this._query)}}class Iu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Au(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Iu(this.firestore,t,this._key)}}class Au extends Tu{constructor(t,e,n){super(t,e,to(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Iu(this.firestore,null,new Cr(t))}withConverter(t){return new Au(this.firestore,t,this._path)}}function Cu(t,e,...n){if(t=(0,a.m9)(t),pu("collection","path",e),t instanceof _u){const i=Tr.fromString(e,...n);return yu(i),new Au(t,null,i)}{if(!(t instanceof Iu||t instanceof Au))throw new or(sr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Tr.fromString(e,...n));return yu(i),new Au(t.firestore,null,i)}}function Su(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=yr.V()),pu("doc","path",e),t instanceof _u){const i=Tr.fromString(e,...n);return mu(i),new Iu(t,null,new Cr(i))}{if(!(t instanceof Iu||t instanceof Au))throw new or(sr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Tr.fromString(e,...n));return mu(i),new Iu(t.firestore,t instanceof Au?t.converter:null,new Cr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ec(this,"async_queue_retry"),this.Xa=()=>{const t=vc();t&&Ji("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=vc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=vc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new ar;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Mr(t))throw t;Ji("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=Hc.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(i),i}eu(){this.Ha&&nr()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Nu extends _u{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new Du}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ou(this),this._firestoreClient.terminate()}}function Ru(t,e){const n="object"==typeof t?t:(0,r.Mq)(),i="string"==typeof t?t:e||"(default)",s=(0,r.qX)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.P0)("firestore");t&&bu(s,...t)}return s}function ku(t){return t._firestoreClient||Ou(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ou(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new cs(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,fu(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new su(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lu(ts.fromBase64String(t))}catch(t){throw new or(sr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Lu(ts.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new or(sr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ar(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xu{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new or(sr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new or(sr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vr(this._lat,t._lat)||vr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=/^__.*__$/;class Vu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ea(t,this.data,this.fieldMask,e,this.fieldTransforms):new ta(t,this.data,e,this.fieldTransforms)}}function Fu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nr()}}class Bu{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.au(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Bu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.Pu(t),i}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Yu(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(Fu(this.uu)&&Uu.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class ju{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||wc(t)}Ru(t,e,n,i=!1){return new Bu({uu:t,methodName:e,Au:n,path:Ar.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $u(t){const e=t._freezeSettings(),n=wc(t._databaseId);return new ju(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hu(t,e,n,i,r,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,r);Gu("Data must be an object, but it was:",o,i);const a=qu(i,o);let c,u;if(s.merge)c=new Jr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Qu(e,i,n);if(!o.contains(r))throw new or(sr.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ju(t,r)||t.push(r)}c=new Jr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Vu(new Ts(a),c,u)}function Ku(t,e){if(zu(t=(0,a.m9)(t)))return Gu("Unsupported field value:",e,t),qu(t,e);if(t instanceof xu)return function(t,e){if(!Fu(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ku(r,e.Tu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ko(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Er.fromDate(t);return{timestampValue:ga(e.serializer,n)}}if(t instanceof Er){const n=new Er(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ga(e.serializer,n)}}if(t instanceof Mu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Lu)return{bytesValue:ma(e.serializer,t._byteString)};if(t instanceof Iu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Eu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${vu(t)}`)}(t,e)}function qu(t,e){const n={};return zr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,((t,i)=>{const r=Ku(i,e.lu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function zu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Er||t instanceof Mu||t instanceof Lu||t instanceof Iu||t instanceof xu)}function Gu(t,e,n){if(!zu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=vu(n);throw"an object"===i?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function Qu(t,e,n){if((e=(0,a.m9)(e))instanceof Pu)return e._internalPath;if("string"==typeof e)return Wu(t,e);throw Yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xu=new RegExp("[~\\*/\\[\\]]");function Wu(t,e,n){if(e.search(Xu)>=0)throw Yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pu(...e.split("."))._internalPath}catch(_){throw Yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yu(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new or(sr.INVALID_ARGUMENT,a+t+c)}function Ju(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zu(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function th(t,e){const n=wu(t.firestore,Nu),i=Su(t),r=Zu(t.converter,e);return eh(n,[Hu($u(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,zo.exists(!1))]).then((()=>i))}function eh(t,e){return function(t,e){const n=new ar;return t.asyncQueue.enqueueAndForget((async()=>Qc(await lu(t),e,n))),n.promise}(ku(t),e)}!function(t,e=!0){!function(t){Xi=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Nu(new lr(t.getProvider("auth-internal")),new gr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new or(sr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Gi,"4.1.0",t),(0,r.KN)(Gi,"4.1.0","esm2017")}()},1294:function(t,e,n){n.d(e,{Jt:function(){return Rt},cF:function(){return Ot},iH:function(){return kt}});n(2801),n(7658),n(8675),n(3408),n(4590),n(3462),n(1439),n(7585),n(5315),n(1703);var i=n(7077),r=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends r.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var l,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,t)}function g(t){return new h(l.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,t)}function v(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(t){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function E(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _(){return new h(l.CANCELED,"User canceled the upload/download.")}function b(t){return new h(l.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function A(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function C(t){return new h(l.INVALID_ARGUMENT,t)}function S(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function D(t){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(t){throw new h(l.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(l||(l={}));class R{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=R.makeFromUrl(t,e)}catch(i){return new R(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const h="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${h}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${i}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:r},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<w.length;o++){const e=w[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new R(t,r),e.postModify(n);break}}if(null==n)throw b(t);return n}}class k{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...t){u||(u=!0,e.apply(null,t))}function l(e){r=setTimeout((()=>{r=null,t(d,c())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void h.call(null,t,...e);const n=c()||o;if(n)return f(),void h.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),l(r)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==r?(t||(a=2),clearTimeout(r),l(0)):t||(a=1)))}return l(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function x(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t,e,n,i){if(i<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function F(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t,e){const n=t>=500&&t<600,i=[408,429],r=-1!==i.indexOf(t),s=-1!==e.indexOf(t);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class j{constructor(t,e,n,i,r,s,o,a,c,u,h,l=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new $(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,r=n.getStatus();if(!e||B(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new $(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new $(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());P(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=p();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?S():_();i(t)}else{const t=E();i(t)}};this.canceled_?e(!1,new $(!1,null,!0)):this.backoffId_=O(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ${constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function H(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function K(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function q(t,e){e&&(t["X-Firebase-GMPID"]=e)}function z(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function G(t,e,n,i,r,s,o=!0){const a=F(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return q(u,e),H(u,n),K(u,s),z(u,i),new j(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){let e;try{e=JSON.parse(t)}catch(n){return null}return x(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function W(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function Y(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){return e}class Z{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||J}}let tt=null;function et(t){return!M(t)||t.length<2?t:Y(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Z("bucket")),t.push(new Z("generation")),t.push(new Z("metageneration")),t.push(new Z("name","fullPath",!0));const n=new Z("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new Z("size");return r.xform=i,t.push(r),t.push(new Z("timeCreated")),t.push(new Z("updated")),t.push(new Z("md5Hash",null,!0)),t.push(new Z("cacheControl",null,!0)),t.push(new Z("contentDisposition",null,!0)),t.push(new Z("contentEncoding",null,!0)),t.push(new Z("contentLanguage",null,!0)),t.push(new Z("contentType",null,!0)),t.push(new Z("metadata","customMetadata",!0)),tt=t,tt}function it(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new R(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function rt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return it(i,t),i}function st(t,e,n){const i=Q(e);if(null===i)return null;const r=i;return rt(t,r,n)}function ot(t,e,n,i){const r=Q(e);if(null===r)return null;if(!M(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=V(a,n,i),u=F({alt:"media",token:e});return c+u}));return c[0]}class at{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){if(!t)throw p()}function ut(t,e){function n(n,i){const r=st(t,i,e);return ct(null!==r),ot(r,i,t.host,t._protocol)}return n}function ht(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?m(t.bucket):403===e.getStatus()?w(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function lt(t){const e=ht(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=g(t.path)),r.serverResponse=i.serverResponse,r}return n}function ft(t,e,n){const i=e.fullServerUrl(),r=V(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new at(r,s,ut(t,n),o);return a.errorHandler=lt(e),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let dt=null;class pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class gt extends pt{initXhr(){this.xhr_.responseType="text"}}function mt(){return dt?dt():new gt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e){this._service=t,this._location=e instanceof R?e:R.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new yt(t,e)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const t=X(this._location.path);if(null===t)return null;const e=new R(this._location.bucket,t);return new yt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw D(t)}}function vt(t){t._throwIfRoot("getDownloadURL");const e=ft(t.storage,t._location,nt());return t.storage.makeRequestWithTokens(e,mt).then((t=>{if(null===t)throw A();return t}))}function wt(t,e){const n=W(t._location.path,e),i=new R(t._location.bucket,n);return new yt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return/^[A-Za-z]+:\/\//.test(t)}function _t(t,e){return new yt(t,e)}function bt(t,e){if(t instanceof Ct){const n=t;if(null==n._bucket)throw I();const i=new yt(n,n._bucket);return null!=e?bt(i,e):i}return void 0!==e?wt(t,e):t}function Tt(t,e){if(e&&Et(e)){if(t instanceof Ct)return _t(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return bt(t,e)}function It(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:R.makeFromBucketSpec(n,t)}function At(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken="string"===typeof s?s:(0,r.Sg)(s,t.app.options.projectId))}class Ct{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=i?R.makeFromBucketSpec(i,this._host):It(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=It(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new yt(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new k(S());{const s=G(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const St="@firebase/storage",Dt="0.11.2",Nt="storage";function Rt(t){return t=(0,r.m9)(t),vt(t)}function kt(t,e){return t=(0,r.m9)(t),Tt(t,e)}function Ot(t=(0,i.Mq)(),e){t=(0,r.m9)(t);const n=(0,i.qX)(t,Nt),s=n.getImmediate({identifier:e}),o=(0,r.P0)("storage");return o&&Lt(s,...o),s}function Lt(t,e,n,i={}){At(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(n,r,s,e,i.Jn)}function xt(){(0,i.Xd)(new s.wA(Nt,Pt,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(St,Dt,""),(0,i.KN)(St,Dt,"esm2017")}xt()}}]);
//# sourceMappingURL=901.39d3c0f3.js.map