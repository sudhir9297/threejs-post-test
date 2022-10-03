var Hv=Object.defineProperty;var Gv=(n,e,t)=>e in n?Hv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var mo=(n,e,t)=>(Gv(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Wv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hu={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),Eh=Symbol.iterator;function tx(n){return n===null||typeof n!="object"?null:(n=Eh&&n[Eh]||n["@@iterator"],typeof n=="function"?n:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Og={};function no(n,e,t){this.props=n,this.context=e,this.refs=Og,this.updater=t||Ig}no.prototype.isReactComponent={};no.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};no.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function kg(){}kg.prototype=no.prototype;function sf(n,e,t){this.props=n,this.context=e,this.refs=Og,this.updater=t||Ig}var of=sf.prototype=new kg;of.constructor=sf;Ng(of,no.prototype);of.isPureReactComponent=!0;var Th=Array.isArray,Fg=Object.prototype.hasOwnProperty,af={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function zg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fg.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wa,type:n,key:s,ref:o,props:r,_owner:af.current}}function nx(n,e){return{$$typeof:wa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function lf(n){return typeof n=="object"&&n!==null&&n.$$typeof===wa}function ix(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ah=/\/+/g;function Ou(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ix(""+n.key):e.toString(36)}function Sl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case wa:case jv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ou(o,0):i,Th(r)?(t="",n!=null&&(t=n.replace(Ah,"$&/")+"/"),Sl(r,e,t,"",function(u){return u})):r!=null&&(lf(r)&&(r=nx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ah,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Th(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ou(s,a);o+=Sl(s,e,t,l,r)}else if(l=tx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ou(s,a++),o+=Sl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(n,e,t){if(n==null)return n;var i=[],r=0;return Sl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function rx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Kt={current:null},wl={transition:null},sx={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:af};De.Children={map:Pa,forEach:function(n,e,t){Pa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pa(n,function(){e++}),e},toArray:function(n){return Pa(n,function(e){return e})||[]},only:function(n){if(!lf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};De.Component=no;De.Fragment=Xv;De.Profiler=qv;De.PureComponent=sf;De.StrictMode=Yv;De.Suspense=Qv;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;De.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ng({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Fg.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:wa,type:n.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(n){return n={$$typeof:Kv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$v,_context:n},n.Consumer=n};De.createElement=zg;De.createFactory=function(n){var e=zg.bind(null,n);return e.type=n,e};De.createRef=function(){return{current:null}};De.forwardRef=function(n){return{$$typeof:Zv,render:n}};De.isValidElement=lf;De.lazy=function(n){return{$$typeof:ex,_payload:{_status:-1,_result:n},_init:rx}};De.memo=function(n,e){return{$$typeof:Jv,type:n,compare:e===void 0?null:e}};De.startTransition=function(n){var e=wl.transition;wl.transition={};try{n()}finally{wl.transition=e}};De.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};De.useCallback=function(n,e){return Kt.current.useCallback(n,e)};De.useContext=function(n){return Kt.current.useContext(n)};De.useDebugValue=function(){};De.useDeferredValue=function(n){return Kt.current.useDeferredValue(n)};De.useEffect=function(n,e){return Kt.current.useEffect(n,e)};De.useId=function(){return Kt.current.useId()};De.useImperativeHandle=function(n,e,t){return Kt.current.useImperativeHandle(n,e,t)};De.useInsertionEffect=function(n,e){return Kt.current.useInsertionEffect(n,e)};De.useLayoutEffect=function(n,e){return Kt.current.useLayoutEffect(n,e)};De.useMemo=function(n,e){return Kt.current.useMemo(n,e)};De.useReducer=function(n,e,t){return Kt.current.useReducer(n,e,t)};De.useRef=function(n){return Kt.current.useRef(n)};De.useState=function(n){return Kt.current.useState(n)};De.useSyncExternalStore=function(n,e,t){return Kt.current.useSyncExternalStore(n,e,t)};De.useTransition=function(){return Kt.current.useTransition()};De.version="18.2.0";(function(n){n.exports=De})(hu);const ox=Wv(hu.exports);var Wc={},Bg={exports:{}},_n={},Vg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,I){var O=N.length;N.push(I);e:for(;0<O;){var J=O-1>>>1,K=N[J];if(0<r(K,I))N[J]=I,N[O]=K,O=J;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],O=N.pop();if(O!==I){N[0]=O;e:for(var J=0,K=N.length,re=K>>>1;J<re;){var ae=2*(J+1)-1,Se=N[ae],$=ae+1,Pe=N[$];if(0>r(Se,O))$<K&&0>r(Pe,Se)?(N[J]=Pe,N[$]=O,J=$):(N[J]=Se,N[ae]=O,J=ae);else if($<K&&0>r(Pe,O))N[J]=Pe,N[$]=O,J=$;else break e}}return I}function r(N,I){var O=N.sortIndex-I.sortIndex;return O!==0?O:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,p=!1,v=!1,h=!1,m=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=N)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function y(N){if(h=!1,x(N),!v)if(t(l)!==null)v=!0,W(w);else{var I=t(u);I!==null&&X(y,I.startTime-N)}}function w(N,I){v=!1,h&&(h=!1,g(S),S=-1),p=!0;var O=d;try{for(x(I),c=t(l);c!==null&&(!(c.expirationTime>I)||N&&!U());){var J=c.callback;if(typeof J=="function"){c.callback=null,d=c.priorityLevel;var K=J(c.expirationTime<=I);I=n.unstable_now(),typeof K=="function"?c.callback=K:c===t(l)&&i(l),x(I)}else i(l);c=t(l)}if(c!==null)var re=!0;else{var ae=t(u);ae!==null&&X(y,ae.startTime-I),re=!1}return re}finally{c=null,d=O,p=!1}}var M=!1,E=null,S=-1,A=5,P=-1;function U(){return!(n.unstable_now()-P<A)}function te(){if(E!==null){var N=n.unstable_now();P=N;var I=!0;try{I=E(!0,N)}finally{I?H():(M=!1,E=null)}}else M=!1}var H;if(typeof _=="function")H=function(){_(te)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,z=D.port2;D.port1.onmessage=te,H=function(){z.postMessage(null)}}else H=function(){m(te,0)};function W(N){E=N,M||(M=!0,H())}function X(N,I){S=m(function(){N(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,W(w))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var O=d;d=I;try{return N()}finally{d=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=d;d=N;try{return I()}finally{d=O}},n.unstable_scheduleCallback=function(N,I,O){var J=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?J+O:J):O=J,N){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,N={id:f++,callback:I,priorityLevel:N,startTime:O,expirationTime:K,sortIndex:-1},O>J?(N.sortIndex=O,e(u,N),t(l)===null&&N===t(u)&&(h?(g(S),S=-1):h=!0,X(y,O-J))):(N.sortIndex=K,e(l,N),v||p||(v=!0,W(w))),N},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(N){var I=d;return function(){var O=d;d=I;try{return N.apply(this,arguments)}finally{d=O}}}})(Hg);(function(n){n.exports=Hg})(Vg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg=hu.exports,gn=Vg.exports;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wg=new Set,Qo={};function Gr(n,e){Vs(n,e),Vs(n+"Capture",e)}function Vs(n,e){for(Qo[n]=e,n=0;n<e.length;n++)Wg.add(e[n])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},Lh={};function lx(n){return jc.call(Lh,n)?!0:jc.call(Ch,n)?!1:ax.test(n)?Lh[n]=!0:(Ch[n]=!0,!1)}function ux(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function cx(n,e,t,i){if(e===null||typeof e>"u"||ux(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new Zt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new Zt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new Zt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new Zt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new Zt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new Zt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new Zt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new Zt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new Zt(n,5,!1,n.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(uf,cf);Pt[e]=new Zt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(uf,cf);Pt[e]=new Zt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(uf,cf);Pt[e]=new Zt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new Zt(n,1,!1,n.toLowerCase(),null,!0,!0)});function df(n,e,t,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cx(e,t,r,i)&&(t=null),i||r===null?lx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ci=Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),_s=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function go(n){return n===null||typeof n!="object"?null:(n=Rh&&n[Rh]||n["@@iterator"],typeof n=="function"?n:null)}var it=Object.assign,ku;function Do(n){if(ku===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+n}var Fu=!1;function Uu(n,e){if(!n||Fu)return"";Fu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Do(n):""}function dx(n){switch(n.tag){case 5:return Do(n.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return n=Uu(n.type,!1),n;case 11:return n=Uu(n.type.render,!1),n;case 1:return n=Uu(n.type,!0),n;default:return""}}function $c(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case vs:return"Fragment";case _s:return"Portal";case Xc:return"Profiler";case ff:return"StrictMode";case Yc:return"Suspense";case qc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Xg:return(n.displayName||"Context")+".Consumer";case jg:return(n._context.displayName||"Context")+".Provider";case hf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pf:return e=n.displayName||null,e!==null?e:$c(n.type)||"Memo";case Vi:e=n._payload,n=n._init;try{return $c(n(e))}catch{}}return null}function fx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(e);case 8:return e===ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(n){var e=qg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ia(n){n._valueTracker||(n._valueTracker=hx(n))}function $g(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=qg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ol(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Kc(n,e){var t=e.checked;return it({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Ph(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=sr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kg(n,e){e=e.checked,e!=null&&df(n,"checked",e,!1)}function Zc(n,e){Kg(n,e);var t=sr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Qc(n,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Dh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Qc(n,e,t){(e!=="number"||Ol(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Io=Array.isArray;function Is(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+sr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Jc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return it({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ih(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Io(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:sr(t)}}function Zg(n,e){var t=sr(e.value),i=sr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Nh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Qg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Qg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Na,Jg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Jo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(n){px.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),zo[e]=zo[n]})});function e_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||zo.hasOwnProperty(n)&&zo[n]?(""+e).trim():e+"px"}function t_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=e_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var mx=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(n,e){if(e){if(mx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function nd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function mf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rd=null,Ns=null,Os=null;function Oh(n){if(n=Ea(n)){if(typeof rd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=vu(e),rd(n.stateNode,n.type,e))}}function n_(n){Ns?Os?Os.push(n):Os=[n]:Ns=n}function i_(){if(Ns){var n=Ns,e=Os;if(Os=Ns=null,Oh(n),e)for(n=0;n<e.length;n++)Oh(e[n])}}function r_(n,e){return n(e)}function s_(){}var zu=!1;function o_(n,e,t){if(zu)return n(e,t);zu=!0;try{return r_(n,e,t)}finally{zu=!1,(Ns!==null||Os!==null)&&(s_(),i_())}}function ea(n,e){var t=n.stateNode;if(t===null)return null;var i=vu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var sd=!1;if(Si)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){sd=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{sd=!1}function gx(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var Bo=!1,kl=null,Fl=!1,od=null,_x={onError:function(n){Bo=!0,kl=n}};function vx(n,e,t,i,r,s,o,a,l){Bo=!1,kl=null,gx.apply(_x,arguments)}function xx(n,e,t,i,r,s,o,a,l){if(vx.apply(this,arguments),Bo){if(Bo){var u=kl;Bo=!1,kl=null}else throw Error(ne(198));Fl||(Fl=!0,od=u)}}function Wr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function a_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function kh(n){if(Wr(n)!==n)throw Error(ne(188))}function yx(n){var e=n.alternate;if(!e){if(e=Wr(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return kh(r),n;if(s===i)return kh(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function l_(n){return n=yx(n),n!==null?u_(n):null}function u_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=u_(n);if(e!==null)return e;n=n.sibling}return null}var c_=gn.unstable_scheduleCallback,Fh=gn.unstable_cancelCallback,Sx=gn.unstable_shouldYield,wx=gn.unstable_requestPaint,dt=gn.unstable_now,Mx=gn.unstable_getCurrentPriorityLevel,gf=gn.unstable_ImmediatePriority,d_=gn.unstable_UserBlockingPriority,Ul=gn.unstable_NormalPriority,bx=gn.unstable_LowPriority,f_=gn.unstable_IdlePriority,pu=null,Qn=null;function Ex(n){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(pu,n,void 0,(n.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:Cx,Tx=Math.log,Ax=Math.LN2;function Cx(n){return n>>>=0,n===0?32:31-(Tx(n)/Ax|0)|0}var Oa=64,ka=4194304;function No(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=t&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Vn(e),r=1<<t,i|=n[t],e&=~r;return i}function Lx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Lx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ad(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function h_(){var n=Oa;return Oa<<=1,(Oa&4194240)===0&&(Oa=64),n}function Bu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ma(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Vn(e),n[e]=t}function Px(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Vn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function _f(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Vn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Xe=0;function p_(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var m_,vf,g_,__,v_,ld=!1,Fa=[],Ki=null,Zi=null,Qi=null,ta=new Map,na=new Map,Wi=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(n,e){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&vf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ix(n,e,t,i,r){switch(e){case"focusin":return Ki=vo(Ki,n,e,t,i,r),!0;case"dragenter":return Zi=vo(Zi,n,e,t,i,r),!0;case"mouseover":return Qi=vo(Qi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,vo(ta.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,vo(na.get(s)||null,n,e,t,i,r)),!0}return!1}function x_(n){var e=Er(n.target);if(e!==null){var t=Wr(e);if(t!==null){if(e=t.tag,e===13){if(e=a_(t),e!==null){n.blockedOn=e,v_(n.priority,function(){g_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ud(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);id=i,t.target.dispatchEvent(i),id=null}else return e=Ea(t),e!==null&&vf(e),n.blockedOn=t,!1;e.shift()}return!0}function zh(n,e,t){Ml(n)&&t.delete(e)}function Nx(){ld=!1,Ki!==null&&Ml(Ki)&&(Ki=null),Zi!==null&&Ml(Zi)&&(Zi=null),Qi!==null&&Ml(Qi)&&(Qi=null),ta.forEach(zh),na.forEach(zh)}function xo(n,e){n.blockedOn===e&&(n.blockedOn=null,ld||(ld=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Nx)))}function ia(n){function e(r){return xo(r,n)}if(0<Fa.length){xo(Fa[0],n);for(var t=1;t<Fa.length;t++){var i=Fa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ki!==null&&xo(Ki,n),Zi!==null&&xo(Zi,n),Qi!==null&&xo(Qi,n),ta.forEach(e),na.forEach(e),t=0;t<Wi.length;t++)i=Wi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Wi.length&&(t=Wi[0],t.blockedOn===null);)x_(t),t.blockedOn===null&&Wi.shift()}var ks=Ci.ReactCurrentBatchConfig,Bl=!0;function Ox(n,e,t,i){var r=Xe,s=ks.transition;ks.transition=null;try{Xe=1,xf(n,e,t,i)}finally{Xe=r,ks.transition=s}}function kx(n,e,t,i){var r=Xe,s=ks.transition;ks.transition=null;try{Xe=4,xf(n,e,t,i)}finally{Xe=r,ks.transition=s}}function xf(n,e,t,i){if(Bl){var r=ud(n,e,t,i);if(r===null)Ku(n,e,i,Vl,t),Uh(n,i);else if(Ix(r,n,e,t,i))i.stopPropagation();else if(Uh(n,i),e&4&&-1<Dx.indexOf(n)){for(;r!==null;){var s=Ea(r);if(s!==null&&m_(s),s=ud(n,e,t,i),s===null&&Ku(n,e,i,Vl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ku(n,e,i,null,t)}}var Vl=null;function ud(n,e,t,i){if(Vl=null,n=mf(i),n=Er(n),n!==null)if(e=Wr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=a_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Vl=n,null}function y_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mx()){case gf:return 1;case d_:return 4;case Ul:case bx:return 16;case f_:return 536870912;default:return 16}default:return 16}}var Xi=null,yf=null,bl=null;function S_(){if(bl)return bl;var n,e=yf,t=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return bl=r.slice(n,1<i?1-i:void 0)}function El(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function Bh(){return!1}function vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:Bh,this.isPropagationStopped=Bh,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=vn(io),ba=it({},io,{view:0,detail:0}),Fx=vn(ba),Vu,Hu,yo,mu=it({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(Vu=n.screenX-yo.screenX,Hu=n.screenY-yo.screenY):Hu=Vu=0,yo=n),Vu)},movementY:function(n){return"movementY"in n?n.movementY:Hu}}),Vh=vn(mu),Ux=it({},mu,{dataTransfer:0}),zx=vn(Ux),Bx=it({},ba,{relatedTarget:0}),Gu=vn(Bx),Vx=it({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=vn(Vx),Gx=it({},io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wx=vn(Gx),jx=it({},io,{data:0}),Hh=vn(jx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qx[n])?!!e[n]:!1}function wf(){return $x}var Kx=it({},ba,{key:function(n){if(n.key){var e=Xx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=El(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(n){return n.type==="keypress"?El(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?El(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zx=vn(Kx),Qx=it({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=vn(Qx),Jx=it({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),ey=vn(Jx),ty=it({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=vn(ty),iy=it({},mu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=vn(iy),sy=[9,13,27,32],Mf=Si&&"CompositionEvent"in window,Vo=null;Si&&"documentMode"in document&&(Vo=document.documentMode);var oy=Si&&"TextEvent"in window&&!Vo,w_=Si&&(!Mf||Vo&&8<Vo&&11>=Vo),Wh=String.fromCharCode(32),jh=!1;function M_(n,e){switch(n){case"keyup":return sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function ay(n,e){switch(n){case"compositionend":return b_(e);case"keypress":return e.which!==32?null:(jh=!0,Wh);case"textInput":return n=e.data,n===Wh&&jh?null:n;default:return null}}function ly(n,e){if(xs)return n==="compositionend"||!Mf&&M_(n,e)?(n=S_(),bl=yf=Xi=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!uy[n.type]:e==="textarea"}function E_(n,e,t,i){n_(i),e=Hl(e,"onChange"),0<e.length&&(t=new Sf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ho=null,ra=null;function cy(n){k_(n,0)}function gu(n){var e=ws(n);if($g(e))return n}function dy(n,e){if(n==="change")return e}var T_=!1;if(Si){var Wu;if(Si){var ju="oninput"in document;if(!ju){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),ju=typeof Yh.oninput=="function"}Wu=ju}else Wu=!1;T_=Wu&&(!document.documentMode||9<document.documentMode)}function qh(){Ho&&(Ho.detachEvent("onpropertychange",A_),ra=Ho=null)}function A_(n){if(n.propertyName==="value"&&gu(ra)){var e=[];E_(e,ra,n,mf(n)),o_(cy,e)}}function fy(n,e,t){n==="focusin"?(qh(),Ho=e,ra=t,Ho.attachEvent("onpropertychange",A_)):n==="focusout"&&qh()}function hy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gu(ra)}function py(n,e){if(n==="click")return gu(e)}function my(n,e){if(n==="input"||n==="change")return gu(e)}function gy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Wn=typeof Object.is=="function"?Object.is:gy;function sa(n,e){if(Wn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!jc.call(e,r)||!Wn(n[r],e[r]))return!1}return!0}function $h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kh(n,e){var t=$h(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$h(t)}}function C_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?C_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var n=window,e=Ol();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ol(n.document)}return e}function bf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function _y(n){var e=L_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&C_(t.ownerDocument.documentElement,t)){if(i!==null&&bf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Kh(t,s);var o=Kh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vy=Si&&"documentMode"in document&&11>=document.documentMode,ys=null,cd=null,Go=null,dd=!1;function Zh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dd||ys==null||ys!==Ol(i)||(i=ys,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&sa(Go,i)||(Go=i,i=Hl(cd,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ys)))}function za(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ss={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Xu={},R_={};Si&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function _u(n){if(Xu[n])return Xu[n];if(!Ss[n])return n;var e=Ss[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in R_)return Xu[n]=e[t];return n}var P_=_u("animationend"),D_=_u("animationiteration"),I_=_u("animationstart"),N_=_u("transitionend"),O_=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,e){O_.set(n,e),Gr(e,[n])}for(var Yu=0;Yu<Qh.length;Yu++){var qu=Qh[Yu],xy=qu.toLowerCase(),yy=qu[0].toUpperCase()+qu.slice(1);ur(xy,"on"+yy)}ur(P_,"onAnimationEnd");ur(D_,"onAnimationIteration");ur(I_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(N_,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Jh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,xx(i,e,void 0,n),n.currentTarget=null}function k_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,a,u),s=l}}}if(Fl)throw n=od,Fl=!1,od=null,n}function Ze(n,e){var t=e[gd];t===void 0&&(t=e[gd]=new Set);var i=n+"__bubble";t.has(i)||(F_(e,n,2,!1),t.add(i))}function $u(n,e,t){var i=0;e&&(i|=4),F_(t,n,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Ba]){n[Ba]=!0,Wg.forEach(function(t){t!=="selectionchange"&&(Sy.has(t)||$u(t,!1,n),$u(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,$u("selectionchange",!1,e))}}function F_(n,e,t,i){switch(y_(e)){case 1:var r=Ox;break;case 4:r=kx;break;default:r=xf}t=r.bind(null,e,t,n),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ku(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}o_(function(){var u=s,f=mf(t),c=[];e:{var d=O_.get(n);if(d!==void 0){var p=Sf,v=n;switch(n){case"keypress":if(El(t)===0)break e;case"keydown":case"keyup":p=Zx;break;case"focusin":v="focus",p=Gu;break;case"focusout":v="blur",p=Gu;break;case"beforeblur":case"afterblur":p=Gu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ey;break;case P_:case D_:case I_:p=Hx;break;case N_:p=ny;break;case"scroll":p=Fx;break;case"wheel":p=ry;break;case"copy":case"cut":case"paste":p=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gh}var h=(e&4)!==0,m=!h&&n==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var _=u,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,g!==null&&(y=ea(_,g),y!=null&&h.push(aa(_,y,x)))),m)break;_=_.return}0<h.length&&(d=new p(d,v,null,t,f),c.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==id&&(v=t.relatedTarget||t.fromElement)&&(Er(v)||v[wi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?Er(v):null,v!==null&&(m=Wr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(h=Vh,y="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(h=Gh,y="onPointerLeave",g="onPointerEnter",_="pointer"),m=p==null?d:ws(p),x=v==null?d:ws(v),d=new h(y,_+"leave",p,t,f),d.target=m,d.relatedTarget=x,y=null,Er(f)===u&&(h=new h(g,_+"enter",v,t,f),h.target=x,h.relatedTarget=m,y=h),m=y,p&&v)t:{for(h=p,g=v,_=0,x=h;x;x=Qr(x))_++;for(x=0,y=g;y;y=Qr(y))x++;for(;0<_-x;)h=Qr(h),_--;for(;0<x-_;)g=Qr(g),x--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=Qr(h),g=Qr(g)}h=null}else h=null;p!==null&&ep(c,d,p,h,!1),v!==null&&m!==null&&ep(c,m,v,h,!0)}}e:{if(d=u?ws(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=dy;else if(Xh(d))if(T_)w=my;else{w=hy;var M=fy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=py);if(w&&(w=w(n,u))){E_(c,w,t,f);break e}M&&M(n,d,u),n==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(M=u?ws(u):window,n){case"focusin":(Xh(M)||M.contentEditable==="true")&&(ys=M,cd=u,Go=null);break;case"focusout":Go=cd=ys=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Zh(c,t,f);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Zh(c,t,f)}var E;if(Mf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else xs?M_(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(w_&&t.locale!=="ko"&&(xs||S!=="onCompositionStart"?S==="onCompositionEnd"&&xs&&(E=S_()):(Xi=f,yf="value"in Xi?Xi.value:Xi.textContent,xs=!0)),M=Hl(u,S),0<M.length&&(S=new Hh(S,n,null,t,f),c.push({event:S,listeners:M}),E?S.data=E:(E=b_(t),E!==null&&(S.data=E)))),(E=oy?ay(n,t):ly(n,t))&&(u=Hl(u,"onBeforeInput"),0<u.length&&(f=new Hh("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=E))}k_(c,e)})}function aa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Hl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(n,t),s!=null&&i.unshift(aa(n,s,r)),s=ea(n,e),s!=null&&i.push(aa(n,s,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ea(t,s),l!=null&&o.unshift(aa(t,l,a))):r||(l=ea(t,s),l!=null&&o.push(aa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var wy=/\r\n?/g,My=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(wy,`
`).replace(My,"")}function Va(n,e,t){if(e=tp(e),tp(n)!==e&&t)throw Error(ne(425))}function Gl(){}var fd=null,hd=null;function pd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(Ty)}:md;function Ty(n){setTimeout(function(){throw n})}function Zu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ia(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ia(e)}function Ji(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ip(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ro,la="__reactProps$"+ro,wi="__reactContainer$"+ro,gd="__reactEvents$"+ro,Ay="__reactListeners$"+ro,Cy="__reactHandles$"+ro;function Er(n){var e=n[Zn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[wi]||t[Zn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ip(n);n!==null;){if(t=n[Zn])return t;n=ip(n)}return e}n=t,t=n.parentNode}return null}function Ea(n){return n=n[Zn]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function vu(n){return n[la]||null}var _d=[],Ms=-1;function cr(n){return{current:n}}function Qe(n){0>Ms||(n.current=_d[Ms],_d[Ms]=null,Ms--)}function $e(n,e){Ms++,_d[Ms]=n.current,n.current=e}var or={},Ut=cr(or),tn=cr(!1),kr=or;function Hs(n,e){var t=n.type.contextTypes;if(!t)return or;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function nn(n){return n=n.childContextTypes,n!=null}function Wl(){Qe(tn),Qe(Ut)}function rp(n,e,t){if(Ut.current!==or)throw Error(ne(168));$e(Ut,e),$e(tn,t)}function U_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,fx(n)||"Unknown",r));return it({},t,i)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,kr=Ut.current,$e(Ut,n),$e(tn,tn.current),!0}function sp(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=U_(n,e,kr),i.__reactInternalMemoizedMergedChildContext=n,Qe(tn),Qe(Ut),$e(Ut,n)):Qe(tn),$e(tn,t)}var fi=null,xu=!1,Qu=!1;function z_(n){fi===null?fi=[n]:fi.push(n)}function Ly(n){xu=!0,z_(n)}function dr(){if(!Qu&&fi!==null){Qu=!0;var n=0,e=Xe;try{var t=fi;for(Xe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}fi=null,xu=!1}catch(r){throw fi!==null&&(fi=fi.slice(n+1)),c_(gf,dr),r}finally{Xe=e,Qu=!1}}return null}var bs=[],Es=0,Xl=null,Yl=0,bn=[],En=0,Fr=null,mi=1,gi="";function xr(n,e){bs[Es++]=Yl,bs[Es++]=Xl,Xl=n,Yl=e}function B_(n,e,t){bn[En++]=mi,bn[En++]=gi,bn[En++]=Fr,Fr=n;var i=mi;n=gi;var r=32-Vn(i)-1;i&=~(1<<r),t+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-Vn(e)+r|t<<r|i,gi=s+n}else mi=1<<s|t<<r|i,gi=n}function Ef(n){n.return!==null&&(xr(n,1),B_(n,1,0))}function Tf(n){for(;n===Xl;)Xl=bs[--Es],bs[Es]=null,Yl=bs[--Es],bs[Es]=null;for(;n===Fr;)Fr=bn[--En],bn[En]=null,gi=bn[--En],bn[En]=null,mi=bn[--En],bn[En]=null}var hn=null,fn=null,Je=!1,zn=null;function V_(n,e){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function op(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,fn=Ji(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fr!==null?{id:mi,overflow:gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,fn=null,!0):!1;default:return!1}}function vd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xd(n){if(Je){var e=fn;if(e){var t=e;if(!op(n,e)){if(vd(n))throw Error(ne(418));e=Ji(t.nextSibling);var i=hn;e&&op(n,e)?V_(i,t):(n.flags=n.flags&-4097|2,Je=!1,hn=n)}}else{if(vd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,Je=!1,hn=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function Ha(n){if(n!==hn)return!1;if(!Je)return ap(n),Je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!pd(n.type,n.memoizedProps)),e&&(e=fn)){if(vd(n))throw H_(),Error(ne(418));for(;e;)V_(n,e),e=Ji(e.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fn=Ji(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fn=null}}else fn=hn?Ji(n.stateNode.nextSibling):null;return!0}function H_(){for(var n=fn;n;)n=Ji(n.nextSibling)}function Gs(){fn=hn=null,Je=!1}function Af(n){zn===null?zn=[n]:zn.push(n)}var Ry=Ci.ReactCurrentBatchConfig;function Fn(n,e){if(n&&n.defaultProps){e=it({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var ql=cr(null),$l=null,Ts=null,Cf=null;function Lf(){Cf=Ts=$l=null}function Rf(n){var e=ql.current;Qe(ql),n._currentValue=e}function yd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Fs(n,e){$l=n,Cf=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(en=!0),n.firstContext=null)}function Rn(n){var e=n._currentValue;if(Cf!==n)if(n={context:n,memoizedValue:e,next:null},Ts===null){if($l===null)throw Error(ne(308));Ts=n,$l.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return e}var Tr=null;function Pf(n){Tr===null?Tr=[n]:Tr.push(n)}function G_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Pf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Mi(n,i)}function Mi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Hi=!1;function Df(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function er(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(n,t)}return r=i.interleaved,r===null?(e.next=e,Pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(n,t)}function Tl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_f(n,t)}}function lp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Kl(n,e,t,i){var r=n.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,h=a;switch(d=e,p=t,h.tag){case 1:if(v=h.payload,typeof v=="function"){c=v.call(p,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=h.payload,d=typeof v=="function"?v.call(p,c,d):v,d==null)break e;c=it({},c,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=c):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,n.lanes=o,n.memoizedState=c}}function up(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var j_=new Gg.Component().refs;function Sd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:it({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yu={isMounted:function(n){return(n=n._reactInternals)?Wr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=jt(),r=nr(n),s=xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=er(n,s,r),e!==null&&(Hn(e,n,r,i),Tl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=jt(),r=nr(n),s=xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=er(n,s,r),e!==null&&(Hn(e,n,r,i),Tl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=jt(),i=nr(n),r=xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=er(n,r,i),e!==null&&(Hn(e,n,i,t),Tl(e,n,i))}};function cp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(t,i)||!sa(r,s):!0}function X_(n,e,t){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=nn(e)?kr:Ut.current,i=e.contextTypes,s=(i=i!=null)?Hs(n,r):or),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function dp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yu.enqueueReplaceState(e,e.state,null)}function wd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=j_,Df(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=nn(e)?kr:Ut.current,r.context=Hs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yu.enqueueReplaceState(r,r.state,null),Kl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function So(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===j_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Ga(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function fp(n){var e=n._init;return e(n._payload)}function Y_(n){function e(g,_){if(n){var x=g.deletions;x===null?(g.deletions=[_],g.flags|=16):x.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=ir(g,_),g.index=0,g.sibling=null,g}function s(g,_,x){return g.index=x,n?(x=g.alternate,x!==null?(x=x.index,x<_?(g.flags|=2,_):x):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,x,y){return _===null||_.tag!==6?(_=sc(x,g.mode,y),_.return=g,_):(_=r(_,x),_.return=g,_)}function l(g,_,x,y){var w=x.type;return w===vs?f(g,_,x.props.children,y,x.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vi&&fp(w)===_.type)?(y=r(_,x.props),y.ref=So(g,_,x),y.return=g,y):(y=Dl(x.type,x.key,x.props,null,g.mode,y),y.ref=So(g,_,x),y.return=g,y)}function u(g,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=oc(x,g.mode,y),_.return=g,_):(_=r(_,x.children||[]),_.return=g,_)}function f(g,_,x,y,w){return _===null||_.tag!==7?(_=Pr(x,g.mode,y,w),_.return=g,_):(_=r(_,x),_.return=g,_)}function c(g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=sc(""+_,g.mode,x),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return x=Dl(_.type,_.key,_.props,null,g.mode,x),x.ref=So(g,null,_),x.return=g,x;case _s:return _=oc(_,g.mode,x),_.return=g,_;case Vi:var y=_._init;return c(g,y(_._payload),x)}if(Io(_)||go(_))return _=Pr(_,g.mode,x,null),_.return=g,_;Ga(g,_)}return null}function d(g,_,x,y){var w=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:return x.key===w?l(g,_,x,y):null;case _s:return x.key===w?u(g,_,x,y):null;case Vi:return w=x._init,d(g,_,w(x._payload),y)}if(Io(x)||go(x))return w!==null?null:f(g,_,x,y,null);Ga(g,x)}return null}function p(g,_,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(x)||null,a(_,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return g=g.get(y.key===null?x:y.key)||null,l(_,g,y,w);case _s:return g=g.get(y.key===null?x:y.key)||null,u(_,g,y,w);case Vi:var M=y._init;return p(g,_,x,M(y._payload),w)}if(Io(y)||go(y))return g=g.get(x)||null,f(_,g,y,w,null);Ga(_,y)}return null}function v(g,_,x,y){for(var w=null,M=null,E=_,S=_=0,A=null;E!==null&&S<x.length;S++){E.index>S?(A=E,E=null):A=E.sibling;var P=d(g,E,x[S],y);if(P===null){E===null&&(E=A);break}n&&E&&P.alternate===null&&e(g,E),_=s(P,_,S),M===null?w=P:M.sibling=P,M=P,E=A}if(S===x.length)return t(g,E),Je&&xr(g,S),w;if(E===null){for(;S<x.length;S++)E=c(g,x[S],y),E!==null&&(_=s(E,_,S),M===null?w=E:M.sibling=E,M=E);return Je&&xr(g,S),w}for(E=i(g,E);S<x.length;S++)A=p(E,g,S,x[S],y),A!==null&&(n&&A.alternate!==null&&E.delete(A.key===null?S:A.key),_=s(A,_,S),M===null?w=A:M.sibling=A,M=A);return n&&E.forEach(function(U){return e(g,U)}),Je&&xr(g,S),w}function h(g,_,x,y){var w=go(x);if(typeof w!="function")throw Error(ne(150));if(x=w.call(x),x==null)throw Error(ne(151));for(var M=w=null,E=_,S=_=0,A=null,P=x.next();E!==null&&!P.done;S++,P=x.next()){E.index>S?(A=E,E=null):A=E.sibling;var U=d(g,E,P.value,y);if(U===null){E===null&&(E=A);break}n&&E&&U.alternate===null&&e(g,E),_=s(U,_,S),M===null?w=U:M.sibling=U,M=U,E=A}if(P.done)return t(g,E),Je&&xr(g,S),w;if(E===null){for(;!P.done;S++,P=x.next())P=c(g,P.value,y),P!==null&&(_=s(P,_,S),M===null?w=P:M.sibling=P,M=P);return Je&&xr(g,S),w}for(E=i(g,E);!P.done;S++,P=x.next())P=p(E,g,S,P.value,y),P!==null&&(n&&P.alternate!==null&&E.delete(P.key===null?S:P.key),_=s(P,_,S),M===null?w=P:M.sibling=P,M=P);return n&&E.forEach(function(te){return e(g,te)}),Je&&xr(g,S),w}function m(g,_,x,y){if(typeof x=="object"&&x!==null&&x.type===vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:e:{for(var w=x.key,M=_;M!==null;){if(M.key===w){if(w=x.type,w===vs){if(M.tag===7){t(g,M.sibling),_=r(M,x.props.children),_.return=g,g=_;break e}}else if(M.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vi&&fp(w)===M.type){t(g,M.sibling),_=r(M,x.props),_.ref=So(g,M,x),_.return=g,g=_;break e}t(g,M);break}else e(g,M);M=M.sibling}x.type===vs?(_=Pr(x.props.children,g.mode,y,x.key),_.return=g,g=_):(y=Dl(x.type,x.key,x.props,null,g.mode,y),y.ref=So(g,_,x),y.return=g,g=y)}return o(g);case _s:e:{for(M=x.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(g,_.sibling),_=r(_,x.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=oc(x,g.mode,y),_.return=g,g=_}return o(g);case Vi:return M=x._init,m(g,_,M(x._payload),y)}if(Io(x))return v(g,_,x,y);if(go(x))return h(g,_,x,y);Ga(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,x),_.return=g,g=_):(t(g,_),_=sc(x,g.mode,y),_.return=g,g=_),o(g)):t(g,_)}return m}var Ws=Y_(!0),q_=Y_(!1),Ta={},Jn=cr(Ta),ua=cr(Ta),ca=cr(Ta);function Ar(n){if(n===Ta)throw Error(ne(174));return n}function If(n,e){switch($e(ca,e),$e(ua,n),$e(Jn,Ta),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ed(e,n)}Qe(Jn),$e(Jn,e)}function js(){Qe(Jn),Qe(ua),Qe(ca)}function $_(n){Ar(ca.current);var e=Ar(Jn.current),t=ed(e,n.type);e!==t&&($e(ua,n),$e(Jn,t))}function Nf(n){ua.current===n&&(Qe(Jn),Qe(ua))}var tt=cr(0);function Zl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function Of(){for(var n=0;n<Ju.length;n++)Ju[n]._workInProgressVersionPrimary=null;Ju.length=0}var Al=Ci.ReactCurrentDispatcher,ec=Ci.ReactCurrentBatchConfig,Ur=0,nt=null,vt=null,Mt=null,Ql=!1,Wo=!1,da=0,Py=0;function Dt(){throw Error(ne(321))}function kf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Wn(n[t],e[t]))return!1;return!0}function Ff(n,e,t,i,r,s){if(Ur=s,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=n===null||n.memoizedState===null?Oy:ky,n=t(i,r),Wo){s=0;do{if(Wo=!1,da=0,25<=s)throw Error(ne(301));s+=1,Mt=vt=null,e.updateQueue=null,Al.current=Fy,n=t(i,r)}while(Wo)}if(Al.current=Jl,e=vt!==null&&vt.next!==null,Ur=0,Mt=vt=nt=null,Ql=!1,e)throw Error(ne(300));return n}function Uf(){var n=da!==0;return da=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?nt.memoizedState=Mt=n:Mt=Mt.next=n,Mt}function Pn(){if(vt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=vt.next;var e=Mt===null?nt.memoizedState:Mt.next;if(e!==null)Mt=e,vt=n;else{if(n===null)throw Error(ne(310));vt=n,n={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Mt===null?nt.memoizedState=Mt=n:Mt=Mt.next=n}return Mt}function fa(n,e){return typeof e=="function"?e(n):e}function tc(n){var e=Pn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=vt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Ur&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,nt.lanes|=f,zr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,nt.lanes|=s,zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function nc(n){var e=Pn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function K_(){}function Z_(n,e){var t=nt,i=Pn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,zf(e0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(t.flags|=2048,ha(9,J_.bind(null,t,i,r,e),void 0,null),Et===null)throw Error(ne(349));(Ur&30)!==0||Q_(t,e,r)}return r}function Q_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function J_(n,e,t,i){e.value=t,e.getSnapshot=i,t0(e)&&n0(n)}function e0(n,e,t){return t(function(){t0(e)&&n0(n)})}function t0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Wn(n,t)}catch{return!0}}function n0(n){var e=Mi(n,1);e!==null&&Hn(e,n,1,-1)}function hp(n){var e=Kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},e.queue=n,n=n.dispatch=Ny.bind(null,nt,n),[e.memoizedState,n]}function ha(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function i0(){return Pn().memoizedState}function Cl(n,e,t,i){var r=Kn();nt.flags|=n,r.memoizedState=ha(1|e,t,void 0,i===void 0?null:i)}function Su(n,e,t,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&kf(i,o.deps)){r.memoizedState=ha(e,t,s,i);return}}nt.flags|=n,r.memoizedState=ha(1|e,t,s,i)}function pp(n,e){return Cl(8390656,8,n,e)}function zf(n,e){return Su(2048,8,n,e)}function r0(n,e){return Su(4,2,n,e)}function s0(n,e){return Su(4,4,n,e)}function o0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function a0(n,e,t){return t=t!=null?t.concat([n]):null,Su(4,4,o0.bind(null,e,n),t)}function Bf(){}function l0(n,e){var t=Pn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function u0(n,e){var t=Pn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function c0(n,e,t){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,en=!0),n.memoizedState=t):(Wn(t,e)||(t=h_(),nt.lanes|=t,zr|=t,n.baseState=!0),e)}function Dy(n,e){var t=Xe;Xe=t!==0&&4>t?t:4,n(!0);var i=ec.transition;ec.transition={};try{n(!1),e()}finally{Xe=t,ec.transition=i}}function d0(){return Pn().memoizedState}function Iy(n,e,t){var i=nr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},f0(n))h0(e,t);else if(t=G_(n,e,t,i),t!==null){var r=jt();Hn(t,n,i,r),p0(t,e,i)}}function Ny(n,e,t){var i=nr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(f0(n))h0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,Pf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=G_(n,e,r,i),t!==null&&(r=jt(),Hn(t,n,i,r),p0(t,e,i))}}function f0(n){var e=n.alternate;return n===nt||e!==null&&e===nt}function h0(n,e){Wo=Ql=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function p0(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_f(n,t)}}var Jl={readContext:Rn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Oy={readContext:Rn,useCallback:function(n,e){return Kn().memoizedState=[n,e===void 0?null:e],n},useContext:Rn,useEffect:pp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Cl(4194308,4,o0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Cl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Cl(4,2,n,e)},useMemo:function(n,e){var t=Kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Kn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Iy.bind(null,nt,n),[i.memoizedState,n]},useRef:function(n){var e=Kn();return n={current:n},e.memoizedState=n},useState:hp,useDebugValue:Bf,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=hp(!1),e=n[0];return n=Dy.bind(null,n[1]),Kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=nt,r=Kn();if(Je){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Et===null)throw Error(ne(349));(Ur&30)!==0||Q_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,pp(e0.bind(null,i,s,n),[n]),i.flags|=2048,ha(9,J_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Kn(),e=Et.identifierPrefix;if(Je){var t=gi,i=mi;t=(i&~(1<<32-Vn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=da++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Py++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ky={readContext:Rn,useCallback:l0,useContext:Rn,useEffect:zf,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:u0,useReducer:tc,useRef:i0,useState:function(){return tc(fa)},useDebugValue:Bf,useDeferredValue:function(n){var e=Pn();return c0(e,vt.memoizedState,n)},useTransition:function(){var n=tc(fa)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:K_,useSyncExternalStore:Z_,useId:d0,unstable_isNewReconciler:!1},Fy={readContext:Rn,useCallback:l0,useContext:Rn,useEffect:zf,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:u0,useReducer:nc,useRef:i0,useState:function(){return nc(fa)},useDebugValue:Bf,useDeferredValue:function(n){var e=Pn();return vt===null?e.memoizedState=n:c0(e,vt.memoizedState,n)},useTransition:function(){var n=nc(fa)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:K_,useSyncExternalStore:Z_,useId:d0,unstable_isNewReconciler:!1};function Xs(n,e){try{var t="",i=e;do t+=dx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ic(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Md(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Uy=typeof WeakMap=="function"?WeakMap:Map;function m0(n,e,t){t=xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){tu||(tu=!0,Id=i),Md(n,e)},t}function g0(n,e,t){t=xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Md(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Md(n,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function mp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Qy.bind(null,n,e,t),e.then(n,n))}function gp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function _p(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=xi(-1,1),e.tag=2,er(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var zy=Ci.ReactCurrentOwner,en=!1;function Ht(n,e,t,i){e.child=n===null?q_(e,null,t,i):Ws(e,n.child,t,i)}function vp(n,e,t,i,r){t=t.render;var s=e.ref;return Fs(e,r),i=Ff(n,e,t,i,s,r),t=Uf(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,bi(n,e,r)):(Je&&t&&Ef(e),e.flags|=1,Ht(n,e,i,r),e.child)}function xp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,_0(n,e,s,i,r)):(n=Dl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:sa,t(o,i)&&n.ref===e.ref)return bi(n,e,r)}return e.flags|=1,n=ir(s,i),n.ref=e.ref,n.return=e,e.child=n}function _0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(sa(s,i)&&n.ref===e.ref)if(en=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(en=!0);else return e.lanes=n.lanes,bi(n,e,r)}return bd(n,e,t,i,r)}function v0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Cs,cn),cn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,$e(Cs,cn),cn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,$e(Cs,cn),cn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,$e(Cs,cn),cn|=i;return Ht(n,e,r,t),e.child}function x0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function bd(n,e,t,i,r){var s=nn(t)?kr:Ut.current;return s=Hs(e,s),Fs(e,r),t=Ff(n,e,t,i,s,r),i=Uf(),n!==null&&!en?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,bi(n,e,r)):(Je&&i&&Ef(e),e.flags|=1,Ht(n,e,t,r),e.child)}function yp(n,e,t,i,r){if(nn(t)){var s=!0;jl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Ll(n,e),X_(e,t,i),wd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=nn(t)?kr:Ut.current,u=Hs(e,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&dp(e,o,i,u),Hi=!1;var d=e.memoizedState;o.state=d,Kl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||tn.current||Hi?(typeof f=="function"&&(Sd(e,t,f,i),l=e.memoizedState),(a=Hi||cp(e,t,a,i,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=nn(t)?kr:Ut.current,l=Hs(e,l));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&dp(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,Kl(e,i,o,r);var v=e.memoizedState;a!==c||d!==v||tn.current||Hi?(typeof p=="function"&&(Sd(e,t,p,i),v=e.memoizedState),(u=Hi||cp(e,t,u,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Ed(n,e,t,i,s,r)}function Ed(n,e,t,i,r,s){x0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sp(e,t,!1),bi(n,e,s);i=e.stateNode,zy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ws(e,n.child,null,s),e.child=Ws(e,null,a,s)):Ht(n,e,a,s),e.memoizedState=i.state,r&&sp(e,t,!0),e.child}function y0(n){var e=n.stateNode;e.pendingContext?rp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(n,e.context,!1),If(n,e.containerInfo)}function Sp(n,e,t,i,r){return Gs(),Af(r),e.flags|=256,Ht(n,e,t,i),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Ad(n){return{baseLanes:n,cachePool:null,transitions:null}}function S0(n,e,t){var i=e.pendingProps,r=tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),$e(tt,r&1),n===null)return xd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,i,0,null),n=Pr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ad(t),e.memoizedState=Td,n):Vf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return By(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Pr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ad(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Td,i}return s=n.child,n=s.sibling,i=ir(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vf(n,e){return e=bu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Wa(n,e,t,i){return i!==null&&Af(i),Ws(e,n.child,null,t),n=Vf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function By(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ic(Error(ne(422))),Wa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ws(e,n.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Td,s);if((e.mode&1)===0)return Wa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=ic(s,i,void 0),Wa(n,e,o,i)}if(a=(o&n.childLanes)!==0,en||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(n,r),Hn(i,n,r,-1))}return Yf(),i=ic(Error(ne(421))),Wa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Jy.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,fn=Ji(r.nextSibling),hn=e,Je=!0,zn=null,n!==null&&(bn[En++]=mi,bn[En++]=gi,bn[En++]=Fr,mi=n.id,gi=n.overflow,Fr=e),e=Vf(e,i.children),e.flags|=4096,e)}function wp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),yd(n.return,e,t)}function rc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function w0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(n,e,i.children,t),i=tt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,t,e);else if(n.tag===19)wp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if($e(tt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Zl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),rc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Zl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}rc(e,!0,t,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function bi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),zr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=ir(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ir(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Vy(n,e,t){switch(e.tag){case 3:y0(e),Gs();break;case 5:$_(e);break;case 1:nn(e.type)&&jl(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(tt,tt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?S0(n,e,t):($e(tt,tt.current&1),n=bi(n,e,t),n!==null?n.sibling:null);$e(tt,tt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return w0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(tt,tt.current),i)break;return null;case 22:case 23:return e.lanes=0,v0(n,e,t)}return bi(n,e,t)}var M0,Cd,b0,E0;M0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Cd=function(){};b0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ar(Jn.current);var s=null;switch(t){case"input":r=Kc(n,r),i=Kc(n,i),s=[];break;case"select":r=it({},r,{value:void 0}),i=it({},i,{value:void 0}),s=[];break;case"textarea":r=Jc(n,r),i=Jc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Gl)}td(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};E0=function(n,e,t,i){t!==i&&(e.flags|=4)};function wo(n,e){if(!Je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function It(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Hy(n,e,t){var i=e.pendingProps;switch(Tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return nn(e.type)&&Wl(),It(e),null;case 3:return i=e.stateNode,js(),Qe(tn),Qe(Ut),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ha(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zn!==null&&(kd(zn),zn=null))),Cd(n,e),It(e),null;case 5:Nf(e);var r=Ar(ca.current);if(t=e.type,n!==null&&e.stateNode!=null)b0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return It(e),null}if(n=Ar(Jn.current),Ha(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[la]=s,n=(e.mode&1)!==0,t){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)Ze(Oo[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Ph(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":Ih(i,s),Ze("invalid",i)}td(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,n),r=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(t){case"input":Ia(i),Dh(i,s,!0);break;case"textarea":Ia(i),Nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Qg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Zn]=e,n[la]=i,M0(n,e,!1,!1),e.stateNode=n;e:{switch(o=nd(t,i),t){case"dialog":Ze("cancel",n),Ze("close",n),r=i;break;case"iframe":case"object":case"embed":Ze("load",n),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)Ze(Oo[r],n);r=i;break;case"source":Ze("error",n),r=i;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),r=i;break;case"details":Ze("toggle",n),r=i;break;case"input":Ph(n,i),r=Kc(n,i),Ze("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=it({},i,{value:void 0}),Ze("invalid",n);break;case"textarea":Ih(n,i),r=Jc(n,i),Ze("invalid",n);break;default:r=i}td(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Jo(n,l):typeof l=="number"&&Jo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",n):l!=null&&df(n,s,l,o))}switch(t){case"input":Ia(n),Dh(n,i,!1);break;case"textarea":Ia(n),Nh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+sr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Is(n,!!i.multiple,s,!1):i.defaultValue!=null&&Is(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Gl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(n&&e.stateNode!=null)E0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=Ar(ca.current),Ar(Jn.current),Ha(e)){if(i=e.stateNode,t=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:Va(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return It(e),null;case 13:if(Qe(tt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&fn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)H_(),Gs(),e.flags|=98560,s=!1;else if(s=Ha(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Zn]=e}else Gs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else zn!==null&&(kd(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(tt.current&1)!==0?xt===0&&(xt=3):Yf())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return js(),Cd(n,e),n===null&&oa(e.stateNode.containerInfo),It(e),null;case 10:return Rf(e.type._context),It(e),null;case 17:return nn(e.type)&&Wl(),It(e),null;case 19:if(Qe(tt),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)wo(s,!1);else{if(xt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Zl(n),o!==null){for(e.flags|=128,wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return $e(tt,tt.current&1|2),e.child}n=n.sibling}s.tail!==null&&dt()>Ys&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Zl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Je)return It(e),null}else 2*dt()-s.renderingStartTime>Ys&&t!==1073741824&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,t=tt.current,$e(tt,i?t&1|2:t&1),e):(It(e),null);case 22:case 23:return Xf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(cn&1073741824)!==0&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Gy(n,e){switch(Tf(e),e.tag){case 1:return nn(e.type)&&Wl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return js(),Qe(tn),Qe(Ut),Of(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(Qe(tt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Gs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Qe(tt),null;case 4:return js(),null;case 10:return Rf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var ja=!1,kt=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,de=null;function As(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ot(n,e,i)}else t.current=null}function Ld(n,e,t){try{t()}catch(i){ot(n,e,i)}}var Mp=!1;function jy(n,e){if(fd=Bl,n=L_(),bf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=n,d=null;t:for(;;){for(var p;c!==t||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(hd={focusedElem:n,selectionRange:t},Bl=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var h=v.memoizedProps,m=v.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Fn(e.type,h),m);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){ot(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return v=Mp,Mp=!1,v}function jo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ld(e,t,s)}r=r.next}while(r!==i)}}function wu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Rd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function T0(n){var e=n.alternate;e!==null&&(n.alternate=null,T0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Zn],delete e[la],delete e[gd],delete e[Ay],delete e[Cy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function A0(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||A0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(n=n.child,n!==null))for(Pd(n,e,t),n=n.sibling;n!==null;)Pd(n,e,t),n=n.sibling}function Dd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Dd(n,e,t),n=n.sibling;n!==null;)Dd(n,e,t),n=n.sibling}var Ct=null,Un=!1;function Pi(n,e,t){for(t=t.child;t!==null;)C0(n,e,t),t=t.sibling}function C0(n,e,t){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(pu,t)}catch{}switch(t.tag){case 5:kt||As(t,e);case 6:var i=Ct,r=Un;Ct=null,Pi(n,e,t),Ct=i,Un=r,Ct!==null&&(Un?(n=Ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ct.removeChild(t.stateNode));break;case 18:Ct!==null&&(Un?(n=Ct,t=t.stateNode,n.nodeType===8?Zu(n.parentNode,t):n.nodeType===1&&Zu(n,t),ia(n)):Zu(Ct,t.stateNode));break;case 4:i=Ct,r=Un,Ct=t.stateNode.containerInfo,Un=!0,Pi(n,e,t),Ct=i,Un=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ld(t,e,o),r=r.next}while(r!==i)}Pi(n,e,t);break;case 1:if(!kt&&(As(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){ot(t,e,a)}Pi(n,e,t);break;case 21:Pi(n,e,t);break;case 22:t.mode&1?(kt=(i=kt)||t.memoizedState!==null,Pi(n,e,t),kt=i):Pi(n,e,t);break;default:Pi(n,e,t)}}function Ep(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Wy),e.forEach(function(i){var r=eS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Dn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Un=!1;break e;case 3:Ct=a.stateNode.containerInfo,Un=!0;break e;case 4:Ct=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Ct===null)throw Error(ne(160));C0(s,o,r),Ct=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,n),e=e.sibling}function L0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(e,n),qn(n),i&4){try{jo(3,n,n.return),wu(3,n)}catch(h){ot(n,n.return,h)}try{jo(5,n,n.return)}catch(h){ot(n,n.return,h)}}break;case 1:Dn(e,n),qn(n),i&512&&t!==null&&As(t,t.return);break;case 5:if(Dn(e,n),qn(n),i&512&&t!==null&&As(t,t.return),n.flags&32){var r=n.stateNode;try{Jo(r,"")}catch(h){ot(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kg(r,s),nd(a,o);var u=nd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?t_(r,c):f==="dangerouslySetInnerHTML"?Jg(r,c):f==="children"?Jo(r,c):df(r,f,c,u)}switch(a){case"input":Zc(r,s);break;case"textarea":Zg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(h){ot(n,n.return,h)}}break;case 6:if(Dn(e,n),qn(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){ot(n,n.return,h)}}break;case 3:if(Dn(e,n),qn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(h){ot(n,n.return,h)}break;case 4:Dn(e,n),qn(n);break;case 13:Dn(e,n),qn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=dt())),i&4&&Ep(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(kt=(u=kt)||f,Dn(e,n),kt=u):Dn(e,n),qn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&(n.mode&1)!==0)for(de=n,f=n.child;f!==null;){for(c=de=f;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:jo(4,d,d.return);break;case 1:As(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(h){ot(i,t,h)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){Ap(c);continue}}p!==null?(p.return=d,de=p):Ap(c)}f=f.sibling}e:for(f=null,c=n;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e_("display",o))}catch(h){ot(n,n.return,h)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(h){ot(n,n.return,h)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===n)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Dn(e,n),qn(n),i&4&&Ep(n);break;case 21:break;default:Dn(e,n),qn(n)}}function qn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(A0(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=bp(n);Dd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bp(n);Pd(n,a,o);break;default:throw Error(ne(161))}}catch(l){ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Xy(n,e,t){de=n,R0(n)}function R0(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ja;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=ja;var u=kt;if(ja=o,(kt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Cp(r):l!==null?(l.return=o,de=l):Cp(r);for(;s!==null;)de=s,R0(s),s=s.sibling;de=r,ja=a,kt=u}Tp(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):Tp(n)}}function Tp(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:kt||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Fn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}up(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ia(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}kt||e.flags&512&&Rd(e)}catch(d){ot(e,e.return,d)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Ap(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Cp(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wu(4,e)}catch(l){ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ot(e,r,l)}}var s=e.return;try{Rd(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var Yy=Math.ceil,eu=Ci.ReactCurrentDispatcher,Hf=Ci.ReactCurrentOwner,Ln=Ci.ReactCurrentBatchConfig,Oe=0,Et=null,gt=null,Rt=0,cn=0,Cs=cr(0),xt=0,pa=null,zr=0,Mu=0,Gf=0,Xo=null,Qt=null,Wf=0,Ys=1/0,ci=null,tu=!1,Id=null,tr=null,Xa=!1,Yi=null,nu=0,Yo=0,Nd=null,Rl=-1,Pl=0;function jt(){return(Oe&6)!==0?dt():Rl!==-1?Rl:Rl=dt()}function nr(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:Ry.transition!==null?(Pl===0&&(Pl=h_()),Pl):(n=Xe,n!==0||(n=window.event,n=n===void 0?16:y_(n.type)),n)}function Hn(n,e,t,i){if(50<Yo)throw Yo=0,Nd=null,Error(ne(185));Ma(n,t,i),((Oe&2)===0||n!==Et)&&(n===Et&&((Oe&2)===0&&(Mu|=t),xt===4&&ji(n,Rt)),rn(n,i),t===1&&Oe===0&&(e.mode&1)===0&&(Ys=dt()+500,xu&&dr()))}function rn(n,e){var t=n.callbackNode;Rx(n,e);var i=zl(n,n===Et?Rt:0);if(i===0)t!==null&&Fh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Fh(t),e===1)n.tag===0?Ly(Lp.bind(null,n)):z_(Lp.bind(null,n)),Ey(function(){(Oe&6)===0&&dr()}),t=null;else{switch(p_(i)){case 1:t=gf;break;case 4:t=d_;break;case 16:t=Ul;break;case 536870912:t=f_;break;default:t=Ul}t=U0(t,P0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function P0(n,e){if(Rl=-1,Pl=0,(Oe&6)!==0)throw Error(ne(327));var t=n.callbackNode;if(Us()&&n.callbackNode!==t)return null;var i=zl(n,n===Et?Rt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=iu(n,i);else{e=i;var r=Oe;Oe|=2;var s=I0();(Et!==n||Rt!==e)&&(ci=null,Ys=dt()+500,Rr(n,e));do try{Ky();break}catch(a){D0(n,a)}while(1);Lf(),eu.current=s,Oe=r,gt!==null?e=0:(Et=null,Rt=0,e=xt)}if(e!==0){if(e===2&&(r=ad(n),r!==0&&(i=r,e=Od(n,r))),e===1)throw t=pa,Rr(n,0),ji(n,i),rn(n,dt()),t;if(e===6)ji(n,i);else{if(r=n.current.alternate,(i&30)===0&&!qy(r)&&(e=iu(n,i),e===2&&(s=ad(n),s!==0&&(i=s,e=Od(n,s))),e===1))throw t=pa,Rr(n,0),ji(n,i),rn(n,dt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:yr(n,Qt,ci);break;case 3:if(ji(n,i),(i&130023424)===i&&(e=Wf+500-dt(),10<e)){if(zl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=md(yr.bind(null,n,Qt,ci),e);break}yr(n,Qt,ci);break;case 4:if(ji(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yy(i/1960))-i,10<i){n.timeoutHandle=md(yr.bind(null,n,Qt,ci),i);break}yr(n,Qt,ci);break;case 5:yr(n,Qt,ci);break;default:throw Error(ne(329))}}}return rn(n,dt()),n.callbackNode===t?P0.bind(null,n):null}function Od(n,e){var t=Xo;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=iu(n,e),n!==2&&(e=Qt,Qt=t,e!==null&&kd(e)),n}function kd(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function qy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(n,e){for(e&=~Gf,e&=~Mu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Vn(e),i=1<<t;n[t]=-1,e&=~i}}function Lp(n){if((Oe&6)!==0)throw Error(ne(327));Us();var e=zl(n,0);if((e&1)===0)return rn(n,dt()),null;var t=iu(n,e);if(n.tag!==0&&t===2){var i=ad(n);i!==0&&(e=i,t=Od(n,i))}if(t===1)throw t=pa,Rr(n,0),ji(n,e),rn(n,dt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,yr(n,Qt,ci),rn(n,dt()),null}function jf(n,e){var t=Oe;Oe|=1;try{return n(e)}finally{Oe=t,Oe===0&&(Ys=dt()+500,xu&&dr())}}function Br(n){Yi!==null&&Yi.tag===0&&(Oe&6)===0&&Us();var e=Oe;Oe|=1;var t=Ln.transition,i=Xe;try{if(Ln.transition=null,Xe=1,n)return n()}finally{Xe=i,Ln.transition=t,Oe=e,(Oe&6)===0&&dr()}}function Xf(){cn=Cs.current,Qe(Cs)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,by(t)),gt!==null)for(t=gt.return;t!==null;){var i=t;switch(Tf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:js(),Qe(tn),Qe(Ut),Of();break;case 5:Nf(i);break;case 4:js();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:Rf(i.type._context);break;case 22:case 23:Xf()}t=t.return}if(Et=n,gt=n=ir(n.current,null),Rt=cn=e,xt=0,pa=null,Gf=Mu=zr=0,Qt=Xo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(t=Tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Tr=null}return n}function D0(n,e){do{var t=gt;try{if(Lf(),Al.current=Jl,Ql){for(var i=nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Ur=0,Mt=vt=nt=null,Wo=!1,da=0,Hf.current=null,t===null||t.return===null){xt=1,pa=e,gt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if((f.mode&1)===0&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=gp(o);if(p!==null){p.flags&=-257,_p(p,o,a,s,e),p.mode&1&&mp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var h=new Set;h.add(l),e.updateQueue=h}else v.add(l);break e}else{if((e&1)===0){mp(s,u,e),Yf();break e}l=Error(ne(426))}}else if(Je&&a.mode&1){var m=gp(o);if(m!==null){(m.flags&65536)===0&&(m.flags|=256),_p(m,o,a,s,e),Af(Xs(l,a));break e}}s=l=Xs(l,a),xt!==4&&(xt=2),Xo===null?Xo=[s]:Xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=m0(s,l,e);lp(s,g);break e;case 1:a=l;var _=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=g0(s,a,e);lp(s,y);break e}}s=s.return}while(s!==null)}O0(t)}catch(w){e=w,gt===t&&t!==null&&(gt=t=t.return);continue}break}while(1)}function I0(){var n=eu.current;return eu.current=Jl,n===null?Jl:n}function Yf(){(xt===0||xt===3||xt===2)&&(xt=4),Et===null||(zr&268435455)===0&&(Mu&268435455)===0||ji(Et,Rt)}function iu(n,e){var t=Oe;Oe|=2;var i=I0();(Et!==n||Rt!==e)&&(ci=null,Rr(n,e));do try{$y();break}catch(r){D0(n,r)}while(1);if(Lf(),Oe=t,eu.current=i,gt!==null)throw Error(ne(261));return Et=null,Rt=0,xt}function $y(){for(;gt!==null;)N0(gt)}function Ky(){for(;gt!==null&&!Sx();)N0(gt)}function N0(n){var e=F0(n.alternate,n,cn);n.memoizedProps=n.pendingProps,e===null?O0(n):gt=e,Hf.current=null}function O0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Hy(t,e,cn),t!==null){gt=t;return}}else{if(t=Gy(t,e),t!==null){t.flags&=32767,gt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xt=6,gt=null;return}}if(e=e.sibling,e!==null){gt=e;return}gt=e=n}while(e!==null);xt===0&&(xt=5)}function yr(n,e,t){var i=Xe,r=Ln.transition;try{Ln.transition=null,Xe=1,Zy(n,e,t,i)}finally{Ln.transition=r,Xe=i}return null}function Zy(n,e,t,i){do Us();while(Yi!==null);if((Oe&6)!==0)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Px(n,s),n===Et&&(gt=Et=null,Rt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Xa||(Xa=!0,U0(Ul,function(){return Us(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Ln.transition,Ln.transition=null;var o=Xe;Xe=1;var a=Oe;Oe|=4,Hf.current=null,jy(n,t),L0(t,n),_y(hd),Bl=!!fd,hd=fd=null,n.current=t,Xy(t),wx(),Oe=a,Xe=o,Ln.transition=s}else n.current=t;if(Xa&&(Xa=!1,Yi=n,nu=r),s=n.pendingLanes,s===0&&(tr=null),Ex(t.stateNode),rn(n,dt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,n=Id,Id=null,n;return(nu&1)!==0&&n.tag!==0&&Us(),s=n.pendingLanes,(s&1)!==0?n===Nd?Yo++:(Yo=0,Nd=n):Yo=0,dr(),null}function Us(){if(Yi!==null){var n=p_(nu),e=Ln.transition,t=Xe;try{if(Ln.transition=null,Xe=16>n?16:n,Yi===null)var i=!1;else{if(n=Yi,Yi=null,nu=0,(Oe&6)!==0)throw Error(ne(331));var r=Oe;for(Oe|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:jo(8,f,s)}var c=f.child;if(c!==null)c.return=f,de=c;else for(;de!==null;){f=de;var d=f.sibling,p=f.return;if(T0(f),f===u){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var v=s.alternate;if(v!==null){var h=v.child;if(h!==null){v.child=null;do{var m=h.sibling;h.sibling=null,h=m}while(h!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,de=g;break e}de=s.return}}var _=n.current;for(de=_;de!==null;){o=de;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,de=x;else e:for(o=_;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(w){ot(a,a.return,w)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(Oe=r,dr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(pu,n)}catch{}i=!0}return i}finally{Xe=t,Ln.transition=e}}return!1}function Rp(n,e,t){e=Xs(t,e),e=m0(n,e,1),n=er(n,e,1),e=jt(),n!==null&&(Ma(n,1,e),rn(n,e))}function ot(n,e,t){if(n.tag===3)Rp(n,n,t);else for(;e!==null;){if(e.tag===3){Rp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){n=Xs(t,n),n=g0(e,n,1),e=er(e,n,1),n=jt(),e!==null&&(Ma(e,1,n),rn(e,n));break}}e=e.return}}function Qy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=jt(),n.pingedLanes|=n.suspendedLanes&t,Et===n&&(Rt&t)===t&&(xt===4||xt===3&&(Rt&130023424)===Rt&&500>dt()-Wf?Rr(n,0):Gf|=t),rn(n,e)}function k0(n,e){e===0&&((n.mode&1)===0?e=1:(e=ka,ka<<=1,(ka&130023424)===0&&(ka=4194304)));var t=jt();n=Mi(n,e),n!==null&&(Ma(n,e,t),rn(n,t))}function Jy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),k0(n,t)}function eS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),k0(n,t)}var F0;F0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return en=!1,Vy(n,e,t);en=(n.flags&131072)!==0}else en=!1,Je&&(e.flags&1048576)!==0&&B_(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(n,e),n=e.pendingProps;var r=Hs(e,Ut.current);Fs(e,t),r=Ff(null,e,i,n,r,t);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=yu,e.stateNode=r,r._reactInternals=e,wd(e,i,n,t),e=Ed(null,e,i,!0,s,t)):(e.tag=0,Je&&s&&Ef(e),Ht(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),n=Fn(i,n),r){case 0:e=bd(null,e,i,n,t);break e;case 1:e=yp(null,e,i,n,t);break e;case 11:e=vp(null,e,i,n,t);break e;case 14:e=xp(null,e,i,Fn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),bd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),yp(n,e,i,r,t);case 3:e:{if(y0(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W_(n,e),Kl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(ne(423)),e),e=Sp(n,e,i,t,r);break e}else if(i!==r){r=Xs(Error(ne(424)),e),e=Sp(n,e,i,t,r);break e}else for(fn=Ji(e.stateNode.containerInfo.firstChild),hn=e,Je=!0,zn=null,t=q_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gs(),i===r){e=bi(n,e,t);break e}Ht(n,e,i,t)}e=e.child}return e;case 5:return $_(e),n===null&&xd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,pd(i,r)?o=null:s!==null&&pd(i,s)&&(e.flags|=32),x0(n,e),Ht(n,e,o,t),e.child;case 6:return n===null&&xd(e),null;case 13:return S0(n,e,t);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ws(e,null,i,t):Ht(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),vp(n,e,i,r,t);case 7:return Ht(n,e,e.pendingProps,t),e.child;case 8:return Ht(n,e,e.pendingProps.children,t),e.child;case 12:return Ht(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(ql,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!tn.current){e=bi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),yd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),yd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,t),r=Rn(r),i=i(r),e.flags|=1,Ht(n,e,i,t),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),xp(n,e,i,r,t);case 15:return _0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ll(n,e),e.tag=1,nn(i)?(n=!0,jl(e)):n=!1,Fs(e,t),X_(e,i,r),wd(e,i,r,t),Ed(null,e,i,!0,n,t);case 19:return w0(n,e,t);case 22:return v0(n,e,t)}throw Error(ne(156,e.tag))};function U0(n,e){return c_(n,e)}function tS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,e,t,i){return new tS(n,e,t,i)}function qf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nS(n){if(typeof n=="function")return qf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===hf)return 11;if(n===pf)return 14}return 2}function ir(n,e){var t=n.alternate;return t===null?(t=Tn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Dl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")qf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case vs:return Pr(t.children,r,s,e);case ff:o=8,r|=8;break;case Xc:return n=Tn(12,t,e,r|2),n.elementType=Xc,n.lanes=s,n;case Yc:return n=Tn(13,t,e,r),n.elementType=Yc,n.lanes=s,n;case qc:return n=Tn(19,t,e,r),n.elementType=qc,n.lanes=s,n;case Yg:return bu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jg:o=10;break e;case Xg:o=9;break e;case hf:o=11;break e;case pf:o=14;break e;case Vi:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Tn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Pr(n,e,t,i){return n=Tn(7,n,i,e),n.lanes=t,n}function bu(n,e,t,i){return n=Tn(22,n,i,e),n.elementType=Yg,n.lanes=t,n.stateNode={isHidden:!1},n}function sc(n,e,t){return n=Tn(6,n,null,e),n.lanes=t,n}function oc(n,e,t){return e=Tn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function iS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(n,e,t,i,r,s,o,a,l){return n=new iS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),n}function rS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function z0(n){if(!n)return or;n=n._reactInternals;e:{if(Wr(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(nn(t))return U_(n,t,e)}return e}function B0(n,e,t,i,r,s,o,a,l){return n=$f(t,i,!0,n,r,s,o,a,l),n.context=z0(null),t=n.current,i=jt(),r=nr(t),s=xi(i,r),s.callback=e!=null?e:null,er(t,s,r),n.current.lanes=r,Ma(n,r,i),rn(n,i),n}function Eu(n,e,t,i){var r=e.current,s=jt(),o=nr(r);return t=z0(t),e.context===null?e.context=t:e.pendingContext=t,e=xi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=er(r,e,o),n!==null&&(Hn(n,r,o,s),Tl(n,r,o)),o}function ru(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kf(n,e){Pp(n,e),(n=n.alternate)&&Pp(n,e)}function sS(){return null}var V0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zf(n){this._internalRoot=n}Tu.prototype.render=Zf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Eu(n,e,null,null)};Tu.prototype.unmount=Zf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Br(function(){Eu(null,n,null,null)}),e[wi]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var e=__();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Wi.length&&e!==0&&e<Wi[t].priority;t++);Wi.splice(t,0,n),t===0&&x_(n)}};function Qf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function oS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ru(o);s.call(u)}}var o=B0(e,i,n,0,null,!1,!1,"",Dp);return n._reactRootContainer=o,n[wi]=o.current,oa(n.nodeType===8?n.parentNode:n),Br(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ru(l);a.call(u)}}var l=$f(n,0,!1,null,null,!1,!1,"",Dp);return n._reactRootContainer=l,n[wi]=l.current,oa(n.nodeType===8?n.parentNode:n),Br(function(){Eu(e,l,t,i)}),l}function Cu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ru(o);a.call(l)}}Eu(e,o,n,r)}else o=oS(t,e,n,r,i);return ru(o)}m_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=No(e.pendingLanes);t!==0&&(_f(e,t|1),rn(e,dt()),(Oe&6)===0&&(Ys=dt()+500,dr()))}break;case 13:Br(function(){var i=Mi(n,1);if(i!==null){var r=jt();Hn(i,n,1,r)}}),Kf(n,1)}};vf=function(n){if(n.tag===13){var e=Mi(n,134217728);if(e!==null){var t=jt();Hn(e,n,134217728,t)}Kf(n,134217728)}};g_=function(n){if(n.tag===13){var e=nr(n),t=Mi(n,e);if(t!==null){var i=jt();Hn(t,n,e,i)}Kf(n,e)}};__=function(){return Xe};v_=function(n,e){var t=Xe;try{return Xe=n,e()}finally{Xe=t}};rd=function(n,e,t){switch(e){case"input":if(Zc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vu(i);if(!r)throw Error(ne(90));$g(i),Zc(i,r)}}}break;case"textarea":Zg(n,t);break;case"select":e=t.value,e!=null&&Is(n,!!t.multiple,e,!1)}};r_=jf;s_=Br;var aS={usingClientEntryPoint:!1,Events:[Ea,ws,vu,n_,i_,jf]},Mo={findFiberByHostInstance:Er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lS={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=l_(n),n===null?null:n.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{pu=Ya.inject(lS),Qn=Ya}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;_n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(ne(200));return rS(n,e,null,t)};_n.createRoot=function(n,e){if(!Qf(n))throw Error(ne(299));var t=!1,i="",r=V0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(n,1,!1,null,null,t,!1,i,r),n[wi]=e.current,oa(n.nodeType===8?n.parentNode:n),new Zf(e)};_n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=l_(e),n=n===null?null:n.stateNode,n};_n.flushSync=function(n){return Br(n)};_n.hydrate=function(n,e,t){if(!Au(e))throw Error(ne(200));return Cu(null,n,e,!0,t)};_n.hydrateRoot=function(n,e,t){if(!Qf(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=V0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=B0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[wi]=e.current,oa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Tu(e)};_n.render=function(n,e,t){if(!Au(e))throw Error(ne(200));return Cu(null,n,e,!1,t)};_n.unmountComponentAtNode=function(n){if(!Au(n))throw Error(ne(40));return n._reactRootContainer?(Br(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1};_n.unstable_batchedUpdates=jf;_n.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Au(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Cu(n,e,t,!1,i)};_n.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=_n})(Bg);var Ip=Bg.exports;Wc.createRoot=Ip.createRoot,Wc.hydrateRoot=Ip.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="144",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uS=0,Np=1,cS=2,H0=1,dS=2,ko=3,Ei=0,pn=1,_i=2,rr=0,zs=1,Fd=2,Op=3,kp=4,fS=5,ps=100,hS=101,pS=102,Fp=103,Up=104,mS=200,gS=201,_S=202,vS=203,G0=204,W0=205,xS=206,yS=207,SS=208,wS=209,MS=210,bS=0,ES=1,TS=2,Ud=3,AS=4,CS=5,LS=6,RS=7,j0=0,PS=1,DS=2,yi=0,IS=1,NS=2,OS=3,X0=4,kS=5,Y0=300,qs=301,$s=302,su=303,zd=304,Lu=306,ar=1e3,Jt=1001,ou=1002,ft=1003,Bd=1004,Vd=1005,et=1006,q0=1007,jr=1008,Vr=1009,FS=1010,US=1011,$0=1012,zS=1013,Cr=1014,Bn=1015,An=1016,BS=1017,VS=1018,Bs=1020,HS=1021,eh=1022,Wt=1023,GS=1024,WS=1025,Dr=1026,Ks=1027,jS=1028,XS=1029,YS=1030,qS=1031,$S=1033,ac=33776,lc=33777,uc=33778,cc=33779,zp=35840,Bp=35841,Vp=35842,Hp=35843,KS=36196,Gp=37492,Wp=37496,jp=37808,Xp=37809,Yp=37810,qp=37811,$p=37812,Kp=37813,Zp=37814,Qp=37815,Jp=37816,em=37817,tm=37818,nm=37819,im=37820,rm=37821,sm=36492,ma=2300,Zs=2301,dc=2302,om=2400,am=2401,lm=2402,ZS=2500,QS=1,K0=2,Ti=3e3,ze=3001,JS=3200,ew=3201,th=0,tw=1,di="srgb",Lr="srgb-linear",fc=7680,nw=519,Hd=35044,um="300 es",Gd=1035;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cm=1234567;const qo=Math.PI/180,ga=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function nh(n,e){return(n%e+e)%e}function iw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rw(n,e,t){return n!==e?(t-n)/(e-n):0}function $o(n,e,t){return(1-t)*n+t*e}function sw(n,e,t,i){return $o(n,e,1-Math.exp(-t*i))}function ow(n,e=1){return e-Math.abs(nh(n,e*2)-e)}function aw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function uw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cw(n,e){return n+Math.random()*(e-n)}function dw(n){return n*(.5-Math.random())}function fw(n){n!==void 0&&(cm=n);let e=cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hw(n){return n*qo}function pw(n){return n*ga}function Wd(n){return(n&n-1)===0&&n!==0}function Z0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function au(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mw(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),f=o((e+i)/2),c=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*c,l*d,a*u);break;case"YZY":n.set(l*d,a*f,l*c,a*u);break;case"ZXZ":n.set(l*c,l*d,a*f,a*u);break;case"XZX":n.set(a*f,l*v,l*p,a*u);break;case"YXY":n.set(l*p,a*f,l*v,a*u);break;case"ZYZ":n.set(l*v,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ih=Object.freeze({__proto__:null,DEG2RAD:qo,RAD2DEG:ga,generateUUID:Gn,clamp:Lt,euclideanModulo:nh,mapLinear:iw,inverseLerp:rw,lerp:$o,damp:sw,pingpong:ow,smoothstep:aw,smootherstep:lw,randInt:uw,randFloat:cw,randFloatSpread:dw,seededRandom:fw,degToRad:hw,radToDeg:pw,isPowerOfTwo:Wd,ceilPowerOfTwo:Z0,floorPowerOfTwo:au,setQuaternionFromProperEuler:mw,normalize:qe,denormalize:vi});class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(){Cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],p=i[5],v=i[8],h=r[0],m=r[3],g=r[6],_=r[1],x=r[4],y=r[7],w=r[2],M=r[5],E=r[8];return s[0]=o*h+a*_+l*w,s[3]=o*m+a*x+l*M,s[6]=o*g+a*y+l*E,s[1]=u*h+f*_+c*w,s[4]=u*m+f*x+c*M,s[7]=u*g+f*y+c*E,s[2]=d*h+p*_+v*w,s[5]=d*m+p*x+v*M,s[8]=d*g+p*y+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,d=a*l-f*s,p=u*s-o*l,v=t*c+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/v;return e[0]=c*h,e[1]=(r*u-f*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(f*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=p*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],f=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*f,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*f,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Q0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Il(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hc={[di]:{[Lr]:Ir},[Lr]:{[di]:Il}},In={legacyMode:!0,get workingColorSpace(){return Lr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(hc[e]&&hc[e][t]!==void 0){const i=hc[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},Nn={h:0,s:0,l:0},qa={h:0,s:0,l:0};function pc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function $a(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Lr){return this.r=e,this.g=t,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Lr){if(e=nh(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pc(o,s,e+1/3),this.g=pc(o,s,e),this.b=pc(o,s,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,t=di){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,In.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,In.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,f,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,In.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,In.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=di){const i=J0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Il(e.r),this.g=Il(e.g),this.b=Il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return In.fromWorkingColorSpace($a(this,_t),e),Lt(_t.r*255,0,255)<<16^Lt(_t.g*255,0,255)<<8^Lt(_t.b*255,0,255)<<0}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lr){In.fromWorkingColorSpace($a(this,_t),t);const i=_t.r,r=_t.g,s=_t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Lr){return In.fromWorkingColorSpace($a(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=di){return In.fromWorkingColorSpace($a(this,_t),e),e!==di?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=i,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(qa);const i=$o(Nn.h,qa.h,t),r=$o(Nn.s,qa.s,t),s=$o(Nn.l,qa.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ve.NAMES=J0;let es;class ev{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=_a("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tv{constructor(e=null){this.isSource=!0,this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ev.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gw=0;class Yt extends Xr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Jt,r=Jt,s=et,o=jr,a=Wt,l=Vr,u=1,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=Gn(),this.name="",this.source=new tv(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Y0;class je{constructor(e=0,t=0,i=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],p=l[5],v=l[9],h=l[2],m=l[6],g=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-h)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+h)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(g+1)/2,M=(f+d)/4,E=(c+h)/4,S=(v+m)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=E/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(c-h)*(c-h)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-h)/_,this.z=(d-f)/_,this.w=Math.acos((u+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xt extends Xr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:et,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nv extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _w extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=h;return}if(c!==h||l!==d||u!==p||f!==v){let m=1-a;const g=l*d+u*p+f*v+c*h,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),M=Math.atan2(w,g*_);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w}const y=a*_;if(l=l*m+d*y,u=u*m+p*y,f=f*m+v*y,c=c*m+h*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=w,u*=w,f*=w,c*=w}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+f*c+l*p-u*d,e[t+1]=l*v+f*d+u*c-a*p,e[t+2]=u*v+f*p+a*d-l*c,e[t+3]=f*v-a*c-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*c+u*p*v,this._y=u*p*c-d*f*v,this._z=u*f*v+d*p*c,this._w=u*f*c-d*p*v;break;case"YXZ":this._x=d*f*c+u*p*v,this._y=u*p*c-d*f*v,this._z=u*f*v-d*p*c,this._w=u*f*c+d*p*v;break;case"ZXY":this._x=d*f*c-u*p*v,this._y=u*p*c+d*f*v,this._z=u*f*v+d*p*c,this._w=u*f*c-d*p*v;break;case"ZYX":this._x=d*f*c-u*p*v,this._y=u*p*c+d*f*v,this._z=u*f*v-d*p*c,this._w=u*f*c+d*p*v;break;case"YZX":this._x=d*f*c+u*p*v,this._y=u*p*c+d*f*v,this._z=u*f*v-d*p*c,this._w=u*f*c-d*p*v;break;case"XZY":this._x=d*f*c-u*p*v,this._y=u*p*c-d*f*v,this._z=u*f*v+d*p*c,this._w=u*f*c+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],c=t[10],d=i+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),c=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=o*c+this._w*d,this._x=i*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,f=l*i+a*t-s*r,c=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+f*-a-c*-o,this.y=f*l+d*-o+c*-s-u*-a,this.z=c*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new R,dm=new Ai;class so{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],c=e[l+1],d=e[l+2];f<t&&(t=f),c<i&&(i=c),d<r&&(r=d),f>s&&(s=f),c>o&&(o=c),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),c=e.getY(l),d=e.getZ(l);f<t&&(t=f),c<i&&(i=c),d<r&&(r=d),f>s&&(s=f),c>o&&(o=c),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)gr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gr)}else i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox),_c.applyMatrix4(e.matrixWorld),this.union(_c);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Ka.subVectors(this.max,bo),ts.subVectors(e.a,bo),ns.subVectors(e.b,bo),is.subVectors(e.c,bo),Di.subVectors(ns,ts),Ii.subVectors(is,ns),_r.subVectors(ts,is);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-_r.z,_r.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,_r.z,0,-_r.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-_r.y,_r.x,0];return!vc(t,ts,ns,is,Ka)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,ts,ns,is,Ka))?!1:(Za.crossVectors(Di,Ii),t=[Za.x,Za.y,Za.z],vc(t,ts,ns,is,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new R,new R,new R,new R,new R,new R,new R,new R],gr=new R,_c=new so,ts=new R,ns=new R,is=new R,Di=new R,Ii=new R,_r=new R,bo=new R,Ka=new R,Za=new R,vr=new R;function vc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),u=t.dot(vr),f=i.dot(vr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const vw=new so,fm=new R,Qa=new R,xc=new R;class oo{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xc.subVectors(e,this.center);const t=xc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(xc.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Qa.set(0,0,1).multiplyScalar(e.radius):Qa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fm.copy(e.center).add(Qa)),this.expandByPoint(fm.copy(e.center).sub(Qa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new R,yc=new R,Ja=new R,Ni=new R,Sc=new R,el=new R,wc=new R;class rh{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.direction).multiplyScalar(t).add(this.origin),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(yc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=Ni.dot(this.direction),l=-Ni.dot(Ja),u=Ni.lengthSq(),f=Math.abs(1-o*o);let c,d,p,v;if(f>0)if(c=o*l-a,d=o*a-l,v=s*f,c>=0)if(d>=-v)if(d<=v){const h=1/f;c*=h,d*=h,p=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(c).add(this.origin),r&&r.copy(Ja).multiplyScalar(d).add(yc),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){Sc.subVectors(t,e),el.subVectors(i,e),wc.crossVectors(Sc,el);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(el.crossVectors(Ni,el));if(l<0)return null;const u=a*this.direction.dot(Sc.cross(Ni));if(u<0||l+u>o)return null;const f=-a*Ni.dot(wc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,f,c,d,p,v,h,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=f,g[10]=c,g[14]=d,g[3]=p,g[7]=v,g[11]=h,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*c,v=a*f,h=a*c;t[0]=l*f,t[4]=-l*c,t[8]=u,t[1]=p+v*u,t[5]=d-h*u,t[9]=-a*l,t[2]=h-d*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*c,v=u*f,h=u*c;t[0]=d+h*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*c,t[5]=o*f,t[9]=-a,t[2]=p*a-v,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*c,v=u*f,h=u*c;t[0]=d-h*a,t[4]=-o*c,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*f,t[9]=h-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*c,v=a*f,h=a*c;t[0]=l*f,t[4]=v*u-p,t[8]=d*u+h,t[1]=l*c,t[5]=h*u+d,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,h=a*u;t[0]=l*f,t[4]=h-d*c,t[8]=v*c+p,t[1]=c,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=p*c+v,t[10]=d-h*c}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,h=a*u;t[0]=l*f,t[4]=-c,t[8]=u*f,t[1]=d*c+h,t[5]=o*f,t[9]=p*c-v,t[2]=v*c-p,t[6]=a*f,t[10]=h*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xw,e,yw)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Oi.crossVectors(i,ln),Oi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Oi.crossVectors(i,ln)),Oi.normalize(),tl.crossVectors(ln,Oi),r[0]=Oi.x,r[4]=tl.x,r[8]=ln.x,r[1]=Oi.y,r[5]=tl.y,r[9]=ln.y,r[2]=Oi.z,r[6]=tl.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],p=i[13],v=i[2],h=i[6],m=i[10],g=i[14],_=i[3],x=i[7],y=i[11],w=i[15],M=r[0],E=r[4],S=r[8],A=r[12],P=r[1],U=r[5],te=r[9],H=r[13],D=r[2],z=r[6],W=r[10],X=r[14],N=r[3],I=r[7],O=r[11],J=r[15];return s[0]=o*M+a*P+l*D+u*N,s[4]=o*E+a*U+l*z+u*I,s[8]=o*S+a*te+l*W+u*O,s[12]=o*A+a*H+l*X+u*J,s[1]=f*M+c*P+d*D+p*N,s[5]=f*E+c*U+d*z+p*I,s[9]=f*S+c*te+d*W+p*O,s[13]=f*A+c*H+d*X+p*J,s[2]=v*M+h*P+m*D+g*N,s[6]=v*E+h*U+m*z+g*I,s[10]=v*S+h*te+m*W+g*O,s[14]=v*A+h*H+m*X+g*J,s[3]=_*M+x*P+y*D+w*N,s[7]=_*E+x*U+y*z+w*I,s[11]=_*S+x*te+y*W+w*O,s[15]=_*A+x*H+y*X+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],p=e[14],v=e[3],h=e[7],m=e[11],g=e[15];return v*(+s*l*c-r*u*c-s*a*d+i*u*d+r*a*p-i*l*p)+h*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+t*u*c-t*a*p-s*o*c+i*o*p+s*a*f-i*u*f)+g*(-r*a*f-t*l*c+t*a*d+r*o*c-i*o*d+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],p=e[11],v=e[12],h=e[13],m=e[14],g=e[15],_=c*m*u-h*d*u+h*l*p-a*m*p-c*l*g+a*d*g,x=v*d*u-f*m*u-v*l*p+o*m*p+f*l*g-o*d*g,y=f*h*u-v*c*u+v*a*p-o*h*p-f*a*g+o*c*g,w=v*c*l-f*h*l-v*a*d+o*h*d+f*a*m-o*c*m,M=t*_+i*x+r*y+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(h*d*s-c*m*s-h*r*p+i*m*p+c*r*g-i*d*g)*E,e[2]=(a*m*s-h*l*s+h*r*u-i*m*u-a*r*g+i*l*g)*E,e[3]=(c*l*s-a*d*s-c*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(f*m*s-v*d*s+v*r*p-t*m*p-f*r*g+t*d*g)*E,e[6]=(v*l*s-o*m*s-v*r*u+t*m*u+o*r*g-t*l*g)*E,e[7]=(o*d*s-f*l*s+f*r*u-t*d*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(v*c*s-f*h*s-v*i*p+t*h*p+f*i*g-t*c*g)*E,e[10]=(o*h*s-v*a*s+v*i*u-t*h*u-o*i*g+t*a*g)*E,e[11]=(f*a*s-o*c*s-f*i*u+t*c*u+o*i*p-t*a*p)*E,e[12]=w*E,e[13]=(f*h*r-v*c*r+v*i*d-t*h*d-f*i*m+t*c*m)*E,e[14]=(v*a*r-o*h*r-v*i*l+t*h*l+o*i*m-t*a*m)*E,e[15]=(o*c*r-f*a*r+f*i*l-t*c*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,c=a+a,d=s*u,p=s*f,v=s*c,h=o*f,m=o*c,g=a*c,_=l*u,x=l*f,y=l*c,w=i.x,M=i.y,E=i.z;return r[0]=(1-(h+g))*w,r[1]=(p+y)*w,r[2]=(v-x)*w,r[3]=0,r[4]=(p-y)*M,r[5]=(1-(d+g))*M,r[6]=(m+_)*M,r[7]=0,r[8]=(v+x)*E,r[9]=(m-_)*E,r[10]=(1-(d+h))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,f=1/o,c=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=c,On.elements[9]*=c,On.elements[10]*=c,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),c=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=c,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),c=(t+e)*l,d=(i+r)*u,p=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-c,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new R,On=new ke,xw=new R(0,0,0),yw=new R(1,1,1),Oi=new R,tl=new R,ln=new R,hm=new ke,pm=new Ai;class Aa{constructor(e=0,t=0,i=0,r=Aa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Aa.DefaultOrder="XYZ";Aa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sw=0;const mm=new R,ss=new Ai,si=new ke,nl=new R,Eo=new R,ww=new R,Mw=new Ai,gm=new R(1,0,0),_m=new R(0,1,0),vm=new R(0,0,1),bw={type:"added"},xm={type:"removed"};class at extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DefaultUp.clone();const e=new R,t=new Aa,i=new Ai,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Cn}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=at.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DefaultMatrixWorldAutoUpdate,this.layers=new iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nl.copy(e):nl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Eo,nl,this.up):si.lookAt(nl,Eo,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(si),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}at.DefaultUp=new R(0,1,0);at.DefaultMatrixAutoUpdate=!0;at.DefaultMatrixWorldAutoUpdate=!0;const kn=new R,oi=new R,Mc=new R,ai=new R,os=new R,as=new R,ym=new R,bc=new R,Ec=new R,Tc=new R;class hi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),oi.subVectors(i,t),Mc.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(oi),l=kn.dot(Mc),u=oi.dot(oi),f=oi.dot(Mc),c=o*u-a*a;if(c===0)return s.set(-2,-1,-1);const d=1/c,p=(u*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ai),l.set(0,0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),oi.subVectors(e,t),kn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return hi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),bc.subVectors(e,i);const l=os.dot(bc),u=as.dot(bc);if(l<=0&&u<=0)return t.copy(i);Ec.subVectors(e,r);const f=os.dot(Ec),c=as.dot(Ec);if(f>=0&&c<=f)return t.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(os,o);Tc.subVectors(e,s);const p=os.dot(Tc),v=as.dot(Tc);if(v>=0&&p<=v)return t.copy(s);const h=p*u-l*v;if(h<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(as,a);const m=f*v-p*c;if(m<=0&&c-f>=0&&p-v>=0)return ym.subVectors(s,r),a=(c-f)/(c-f+(p-v)),t.copy(r).addScaledVector(ym,a);const g=1/(m+h+d);return o=h*g,a=d*g,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ew=0;class ei extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=zs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=G0,this.blendDst=W0,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ud,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fc,this.stencilZFail=fc,this.stencilZPass=fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qi extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new R,il=new me;class mn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Hd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rv extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sv extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tw=0;const Mn=new ke,Ac=new at,ls=new R,un=new so,To=new so,wt=new R;class sn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?sv:rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(un.min,To.min),un.expandByPoint(wt),wt.addVectors(un.max,To.max),un.expandByPoint(wt)):(un.expandByPoint(To.min),un.expandByPoint(To.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)wt.fromBufferAttribute(a,u),l&&(ls.fromBufferAttribute(e,u),wt.add(ls)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let P=0;P<a;P++)u[P]=new R,f[P]=new R;const c=new R,d=new R,p=new R,v=new me,h=new me,m=new me,g=new R,_=new R;function x(P,U,te){c.fromArray(r,P*3),d.fromArray(r,U*3),p.fromArray(r,te*3),v.fromArray(o,P*2),h.fromArray(o,U*2),m.fromArray(o,te*2),d.sub(c),p.sub(c),h.sub(v),m.sub(v);const H=1/(h.x*m.y-m.x*h.y);!isFinite(H)||(g.copy(d).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(H),_.copy(p).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(H),u[P].add(g),u[U].add(g),u[te].add(g),f[P].add(_),f[U].add(_),f[te].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,U=y.length;P<U;++P){const te=y[P],H=te.start,D=te.count;for(let z=H,W=H+D;z<W;z+=3)x(i[z+0],i[z+1],i[z+2])}const w=new R,M=new R,E=new R,S=new R;function A(P){E.fromArray(s,P*3),S.copy(E);const U=u[P];w.copy(U),w.sub(E.multiplyScalar(E.dot(U))).normalize(),M.crossVectors(S,U);const H=M.dot(f[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=H}for(let P=0,U=y.length;P<U;++P){const te=y[P],H=te.start,D=te.count;for(let z=H,W=H+D;z<W;z+=3)A(i[z+0]),A(i[z+1]),A(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,f=new R,c=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),h=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,m),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,d=new u.constructor(l.length*f);let p=0,v=0;for(let h=0,m=l.length;h<m;h++){a.isInterleavedBufferAttribute?p=l[h]*a.data.stride+a.offset:p=l[h]*f;for(let g=0;g<f;g++)d[v++]=u[p++]}return new mn(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const d=u[f],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const p=u[c];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,p=c.length;d<p;d++)f.push(c[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new ke,us=new rh,Cc=new oo,ki=new R,Fi=new R,Ui=new R,Lc=new R,Rc=new R,Pc=new R,rl=new R,sl=new R,ol=new R,al=new me,ll=new me,ul=new me,Dc=new R,cl=new R;class Ft extends at{constructor(e=new sn,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)===!1)||(Sm.copy(s).invert(),us.copy(e.ray).applyMatrix4(Sm),i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,f=i.morphTargetsRelative,c=i.attributes.uv,d=i.attributes.uv2,p=i.groups,v=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,m=p.length;h<m;h++){const g=p[h],_=r[g.materialIndex],x=Math.max(g.start,v.start),y=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let w=x,M=y;w<M;w+=3){const E=a.getX(w),S=a.getX(w+1),A=a.getX(w+2);o=dl(this,_,e,us,l,u,f,c,d,E,S,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const h=Math.max(0,v.start),m=Math.min(a.count,v.start+v.count);for(let g=h,_=m;g<_;g+=3){const x=a.getX(g),y=a.getX(g+1),w=a.getX(g+2);o=dl(this,r,e,us,l,u,f,c,d,x,y,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,m=p.length;h<m;h++){const g=p[h],_=r[g.materialIndex],x=Math.max(g.start,v.start),y=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let w=x,M=y;w<M;w+=3){const E=w,S=w+1,A=w+2;o=dl(this,_,e,us,l,u,f,c,d,E,S,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const h=Math.max(0,v.start),m=Math.min(l.count,v.start+v.count);for(let g=h,_=m;g<_;g+=3){const x=g,y=g+1,w=g+2;o=dl(this,r,e,us,l,u,f,c,d,x,y,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Aw(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==_i,a),l===null)return null;cl.copy(a),cl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(cl);return u<t.near||u>t.far?null:{distance:u,point:cl.clone(),object:n}}function dl(n,e,t,i,r,s,o,a,l,u,f,c){ki.fromBufferAttribute(r,u),Fi.fromBufferAttribute(r,f),Ui.fromBufferAttribute(r,c);const d=n.morphTargetInfluences;if(s&&d){rl.set(0,0,0),sl.set(0,0,0),ol.set(0,0,0);for(let v=0,h=s.length;v<h;v++){const m=d[v],g=s[v];m!==0&&(Lc.fromBufferAttribute(g,u),Rc.fromBufferAttribute(g,f),Pc.fromBufferAttribute(g,c),o?(rl.addScaledVector(Lc,m),sl.addScaledVector(Rc,m),ol.addScaledVector(Pc,m)):(rl.addScaledVector(Lc.sub(ki),m),sl.addScaledVector(Rc.sub(Fi),m),ol.addScaledVector(Pc.sub(Ui),m)))}ki.add(rl),Fi.add(sl),Ui.add(ol)}n.isSkinnedMesh&&(n.boneTransform(u,ki),n.boneTransform(f,Fi),n.boneTransform(c,Ui));const p=Aw(n,e,t,i,ki,Fi,Ui,Dc);if(p){a&&(al.fromBufferAttribute(a,u),ll.fromBufferAttribute(a,f),ul.fromBufferAttribute(a,c),p.uv=hi.getUV(Dc,ki,Fi,Ui,al,ll,ul,new me)),l&&(al.fromBufferAttribute(l,u),ll.fromBufferAttribute(l,f),ul.fromBufferAttribute(l,c),p.uv2=hi.getUV(Dc,ki,Fi,Ui,al,ll,ul,new me));const v={a:u,b:f,c,normal:new R,materialIndex:0};hi.getNormal(ki,Fi,Ui,v.normal),p.face=v}return p}class ao extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(c,2));function v(h,m,g,_,x,y,w,M,E,S,A){const P=y/E,U=w/S,te=y/2,H=w/2,D=M/2,z=E+1,W=S+1;let X=0,N=0;const I=new R;for(let O=0;O<W;O++){const J=O*U-H;for(let K=0;K<z;K++){const re=K*P-te;I[h]=re*_,I[m]=J*x,I[g]=D,u.push(I.x,I.y,I.z),I[h]=0,I[m]=0,I[g]=M>0?1:-1,f.push(I.x,I.y,I.z),c.push(K/E),c.push(1-O/S),X+=1}}for(let O=0;O<S;O++)for(let J=0;J<E;J++){const K=d+J+z*O,re=d+J+z*(O+1),ae=d+(J+1)+z*(O+1),Se=d+(J+1)+z*O;l.push(K,re,Se),l.push(re,ae,Se),N+=6}a.addGroup(p,N,A),p+=N,d+=X}}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const r in i)e[r]=i[r]}return e}function Cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const lu={clone:Qs,merge:Ot};var Lw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lw,this.fragmentShader=Rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ov extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends ov{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=90,ds=1;class Pw extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Gt(cs,ds,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Gt(cs,ds,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new Gt(cs,ds,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new Gt(cs,ds,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new Gt(cs,ds,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const u=new Gt(cs,ds,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=c,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class av extends Yt{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dw extends Xt{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new av(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ao(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:rr});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===jr&&(t.minFilter=et),new Pw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ic=new R,Iw=new R,Nw=new Cn;class Sr{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ic.subVectors(i,t).cross(Iw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nw.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new oo,fl=new R;class sh{constructor(e=new Sr,t=new Sr,i=new Sr,r=new Sr,s=new Sr,o=new Sr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],f=i[6],c=i[7],d=i[8],p=i[9],v=i[10],h=i[11],m=i[12],g=i[13],_=i[14],x=i[15];return t[0].setComponents(a-r,c-l,h-d,x-m).normalize(),t[1].setComponents(a+r,c+l,h+d,x+m).normalize(),t[2].setComponents(a+s,c+u,h+p,x+g).normalize(),t[3].setComponents(a-s,c-u,h-p,x-g).normalize(),t[4].setComponents(a-o,c-f,h-v,x-_).normalize(),t[5].setComponents(a+o,c+f,h+v,x+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ow(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const c=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(f,p),n.bufferData(f,c,d),u.onUploadCallback();let v;if(c instanceof Float32Array)v=5126;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(c instanceof Int16Array)v=5122;else if(c instanceof Uint32Array)v=5125;else if(c instanceof Int32Array)v=5124;else if(c instanceof Int8Array)v=5120;else if(c instanceof Uint8Array)v=5121;else if(c instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,c){const d=f.array,p=f.updateRange;n.bindBuffer(c,u),p.count===-1?n.bufferSubData(c,0,d):(t?n.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c===void 0?i.set(u,r(u,f)):c.version<u.version&&(s(c.buffer,u,f),c.version=u.version)}return{get:o,remove:a,update:l}}class oh extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,d=t/l,p=[],v=[],h=[],m=[];for(let g=0;g<f;g++){const _=g*d-o;for(let x=0;x<u;x++){const y=x*c-s;v.push(y,-_,0),h.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+u*g,y=_+u*(g+1),w=_+1+u*(g+1),M=_+1+u*g;p.push(x,y,M),p.push(y,w,M)}this.setIndex(p),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(m,2))}static fromJSON(e){return new oh(e.width,e.height,e.widthSegments,e.heightSegments)}}var kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Fw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hw="vec3 transformed = vec3( position );",Gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ww=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,jw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,t1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,b1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,P1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,K1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,AM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,CM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,LM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,RM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,PM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,DM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:kw,alphamap_pars_fragment:Fw,alphatest_fragment:Uw,alphatest_pars_fragment:zw,aomap_fragment:Bw,aomap_pars_fragment:Vw,begin_vertex:Hw,beginnormal_vertex:Gw,bsdfs:Ww,iridescence_fragment:jw,bumpmap_pars_fragment:Xw,clipping_planes_fragment:Yw,clipping_planes_pars_fragment:qw,clipping_planes_pars_vertex:$w,clipping_planes_vertex:Kw,color_fragment:Zw,color_pars_fragment:Qw,color_pars_vertex:Jw,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:r1,displacementmap_vertex:s1,emissivemap_fragment:o1,emissivemap_pars_fragment:a1,encodings_fragment:l1,encodings_pars_fragment:u1,envmap_fragment:c1,envmap_common_pars_fragment:d1,envmap_pars_fragment:f1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:E1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:x1,lightmap_fragment:y1,lightmap_pars_fragment:S1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:M1,lights_pars_begin:b1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:C1,lights_phong_pars_fragment:L1,lights_physical_fragment:R1,lights_physical_pars_fragment:P1,lights_fragment_begin:D1,lights_fragment_maps:I1,lights_fragment_end:N1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:U1,map_fragment:z1,map_pars_fragment:B1,map_particle_fragment:V1,map_particle_pars_fragment:H1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:W1,morphcolor_vertex:j1,morphnormal_vertex:X1,morphtarget_pars_vertex:Y1,morphtarget_vertex:q1,normal_fragment_begin:$1,normal_fragment_maps:K1,normal_pars_fragment:Z1,normal_pars_vertex:Q1,normal_vertex:J1,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,output_fragment:sM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:uM,dithering_pars_fragment:cM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:_M,skinning_pars_vertex:vM,skinning_vertex:xM,skinnormal_vertex:yM,specularmap_fragment:SM,specularmap_pars_fragment:wM,tonemapping_fragment:MM,tonemapping_pars_fragment:bM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:CM,uv_vertex:LM,uv2_pars_fragment:RM,uv2_pars_vertex:PM,uv2_vertex:DM,worldpos_vertex:IM,background_vert:NM,background_frag:OM,cube_vert:kM,cube_frag:FM,depth_vert:UM,depth_frag:zM,distanceRGBA_vert:BM,distanceRGBA_frag:VM,equirect_vert:HM,equirect_frag:GM,linedashed_vert:WM,linedashed_frag:jM,meshbasic_vert:XM,meshbasic_frag:YM,meshlambert_vert:qM,meshlambert_frag:$M,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:QM,meshnormal_frag:JM,meshphong_vert:eb,meshphong_frag:tb,meshphysical_vert:nb,meshphysical_frag:ib,meshtoon_vert:rb,meshtoon_frag:sb,points_vert:ob,points_frag:ab,shadow_vert:lb,shadow_frag:ub,sprite_vert:cb,sprite_frag:db},se={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Cn},uv2Transform:{value:new Cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}}},dn={basic:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ve(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ot([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ot([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ve(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ot([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ot([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ot([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ot([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Cn},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:Ot([se.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ot([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ot([se.lights,se.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};dn.physical={uniforms:Ot([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function fb(n,e,t,i,r,s){const o=new ve(0);let a=r===!0?0:1,l,u,f=null,c=0,d=null;function p(h,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=e.get(_));const x=n.xr,y=x.getSession&&x.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?v(o,a):_&&_.isColor&&(v(_,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lu)?(u===void 0&&(u=new Ft(new ao(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Qs(dn.cube.uniforms),vertexShader:dn.cube.vertexShader,fragmentShader:dn.cube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(f!==_||c!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,c=_.version,d=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ft(new oh(2,2),new bt({name:"BackgroundMaterial",uniforms:Qs(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||c!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,c=_.version,d=n.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function v(h,m){t.buffers.color.setClear(h.r,h.g,h.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(h,m=1){o.set(h),a=m,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,v(o,a)},render:p}}function hb(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function c(D,z,W,X,N){let I=!1;if(o){const O=h(X,W,z);u!==O&&(u=O,p(u.object)),I=g(D,X,W,N),I&&_(D,X,W,N)}else{const O=z.wireframe===!0;(u.geometry!==X.id||u.program!==W.id||u.wireframe!==O)&&(u.geometry=X.id,u.program=W.id,u.wireframe=O,I=!0)}N!==null&&t.update(N,34963),(I||f)&&(f=!1,S(D,z,W,X),N!==null&&n.bindBuffer(34963,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function h(D,z,W){const X=W.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let I=N[z.id];I===void 0&&(I={},N[z.id]=I);let O=I[X];return O===void 0&&(O=m(d()),I[X]=O),O}function m(D){const z=[],W=[],X=[];for(let N=0;N<r;N++)z[N]=0,W[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:X,object:D,attributes:{},index:null}}function g(D,z,W,X){const N=u.attributes,I=z.attributes;let O=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){const ae=N[K];let Se=I[K];if(Se===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ae===void 0||ae.attribute!==Se||Se&&ae.data!==Se.data)return!0;O++}return u.attributesNum!==O||u.index!==X}function _(D,z,W,X){const N={},I=z.attributes;let O=0;const J=W.getAttributes();for(const K in J)if(J[K].location>=0){let ae=I[K];ae===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const Se={};Se.attribute=ae,ae&&ae.data&&(Se.data=ae.data),N[K]=Se,O++}u.attributes=N,u.attributesNum=O,u.index=X}function x(){const D=u.newAttributes;for(let z=0,W=D.length;z<W;z++)D[z]=0}function y(D){w(D,0)}function w(D,z){const W=u.newAttributes,X=u.enabledAttributes,N=u.attributeDivisors;W[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),N[D]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),N[D]=z)}function M(){const D=u.newAttributes,z=u.enabledAttributes;for(let W=0,X=z.length;W<X;W++)z[W]!==D[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function E(D,z,W,X,N,I){i.isWebGL2===!0&&(W===5124||W===5125)?n.vertexAttribIPointer(D,z,W,N,I):n.vertexAttribPointer(D,z,W,X,N,I)}function S(D,z,W,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=X.attributes,I=W.getAttributes(),O=z.defaultAttributeValues;for(const J in I){const K=I[J];if(K.location>=0){let re=N[J];if(re===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){const ae=re.normalized,Se=re.itemSize,$=t.get(re);if($===void 0)continue;const Pe=$.buffer,we=$.type,Me=$.bytesPerElement;if(re.isInterleavedBufferAttribute){const he=re.data,Ye=he.stride,Te=re.offset;if(he.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)w(K.location+_e,he.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let _e=0;_e<K.locationSize;_e++)y(K.location+_e);n.bindBuffer(34962,Pe);for(let _e=0;_e<K.locationSize;_e++)E(K.location+_e,Se/K.locationSize,we,ae,Ye*Me,(Te+Se/K.locationSize*_e)*Me)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)w(K.location+he,re.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<K.locationSize;he++)y(K.location+he);n.bindBuffer(34962,Pe);for(let he=0;he<K.locationSize;he++)E(K.location+he,Se/K.locationSize,we,ae,Se*Me,Se/K.locationSize*he*Me)}}else if(O!==void 0){const ae=O[J];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(K.location,ae);break;case 3:n.vertexAttrib3fv(K.location,ae);break;case 4:n.vertexAttrib4fv(K.location,ae);break;default:n.vertexAttrib1fv(K.location,ae)}}}}M()}function A(){te();for(const D in a){const z=a[D];for(const W in z){const X=z[W];for(const N in X)v(X[N].object),delete X[N];delete z[W]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const z=a[D.id];for(const W in z){const X=z[W];for(const N in X)v(X[N].object),delete X[N];delete z[W]}delete a[D.id]}function U(D){for(const z in a){const W=a[z];if(W[D.id]===void 0)continue;const X=W[D.id];for(const N in X)v(X[N].object),delete X[N];delete W[D.id]}}function te(){H(),f=!0,u!==l&&(u=l,p(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:te,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:M}}function pb(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,c){if(c===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,f,c),t.update(f,s,c)}this.setMode=o,this.render=a,this.renderInstances=l}function mb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,c=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),v=n.getParameter(34076),h=n.getParameter(34921),m=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,M=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:M}}function gb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Sr,a=new Cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d,p){const v=c.length!==0||d||i!==0||r;return r=d,t=f(c,p,0),i=c.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,u()},this.setState=function(c,d,p){const v=c.clippingPlanes,h=c.clipIntersection,m=c.clipShadows,g=n.get(c);if(!r||v===null||v.length===0||s&&!m)s?f(null):u();else{const _=s?0:i,x=_*4;let y=g.clippingState||null;l.value=y,y=f(v,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,p,v){const h=c!==null?c.length:0;let m=null;if(h!==0){if(m=l.value,v!==!0||m===null){const g=p+h*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,y=p;x!==h;++x,y+=4)o.copy(c[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,m}}function _b(n){let e=new WeakMap;function t(o,a){return a===su?o.mapping=qs:a===zd&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===su||a===zd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Dw(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ca extends ov{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,wm=[.125,.215,.35,.446,.526,.582],br=20,Nc=new Ca,Mm=new ve;let Oc=null;const wr=(1+Math.sqrt(5))/2,hs=1/wr,bm=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wr,hs),new R(0,wr,-hs),new R(hs,0,wr),new R(-hs,0,wr),new R(wr,hs,0),new R(-wr,hs,0)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:et,minFilter:et,generateMipmaps:!1,type:An,format:Wt,encoding:Ti,depthBuffer:!1},r=Em(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vb(s)),this._blurMaterial=xb(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,i,r){const a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(Mm),f.toneMapping=yi,f.autoClear=!1;const p=new qi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new Ft(new ao,p);let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(Mm),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;hl(r,_*x,g>2?x:0,x,x),f.setRenderTarget(r),h&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=c,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bm[(r-1)%bm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new Ft(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),h=s/v,m=isFinite(s)?1+Math.floor(f*h):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const g=[];let _=0;for(let E=0;E<br;++E){const S=E/h,A=Math.exp(-S*S/2);g.push(A),E===0?_+=A:E<m&&(_+=2*A)}for(let E=0;E<g.length;E++)g[E]=g[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-Ls?r-x+Ls:0),M=4*(this._cubeSize-y);hl(t,w,M,3*y,2*y),l.setRenderTarget(t),l.render(c,Nc)}}function vb(n){const e=[],t=[],i=[];let r=n;const s=n-Ls+1+wm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ls?l=wm[o-n+Ls-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],p=6,v=6,h=3,m=2,g=1,_=new Float32Array(h*v*p),x=new Float32Array(m*v*p),y=new Float32Array(g*v*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,S=M>2?0:-1,A=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];_.set(A,h*v*M),x.set(d,m*v*M);const P=[M,M,M,M,M,M];y.set(P,g*v*M)}const w=new sn;w.setAttribute("position",new mn(_,h)),w.setAttribute("uv",new mn(x,m)),w.setAttribute("faceIndex",new mn(y,g)),e.push(w),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Em(n,e,t){const i=new Xt(n,e,t);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xb(n,e,t){const i=new Float32Array(br),r=new R(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Tm(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Am(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===su||l===zd,f=l===qs||l===$s;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new jd(n)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||f&&c&&r(c)){t===null&&(t=new jd(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wb(n,e,t,i){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)e.update(d[v],34962);const p=c.morphAttributes;for(const v in p){const h=p[v];for(let m=0,g=h.length;m<g;m++)e.update(h[m],34962)}}function u(c){const d=[],p=c.index,v=c.attributes.position;let h=0;if(p!==null){const _=p.array;h=p.version;for(let x=0,y=_.length;x<y;x+=3){const w=_[x+0],M=_[x+1],E=_[x+2];d.push(w,M,M,E,E,w)}}else{const _=v.array;h=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const w=x+0,M=x+1,E=x+2;d.push(w,M,M,E,E,w)}}const m=new(Q0(d)?sv:rv)(d,1);m.version=h;const g=s.get(c);g&&e.remove(g),s.set(c,m)}function f(c){const d=s.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function Mb(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function c(d,p,v){if(v===0)return;let h,m;if(r)h=n,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,p,a,d*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=c}function bb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Eb(n,e){return n[0]-e[0]}function Tb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ab(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,c,d){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,h=v!==void 0?v.length:0;let m=s.get(f);if(m===void 0||m.count!==h){let z=function(){H.dispose(),s.delete(f),f.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();const x=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],S=f.morphAttributes.color||[];let A=0;x===!0&&(A=1),y===!0&&(A=2),w===!0&&(A=3);let P=f.attributes.position.count*A,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const te=new Float32Array(P*U*4*h),H=new nv(te,P,U,h);H.type=Bn,H.needsUpdate=!0;const D=A*4;for(let W=0;W<h;W++){const X=M[W],N=E[W],I=S[W],O=P*U*4*W;for(let J=0;J<X.count;J++){const K=J*D;x===!0&&(o.fromBufferAttribute(X,J),te[O+K+0]=o.x,te[O+K+1]=o.y,te[O+K+2]=o.z,te[O+K+3]=0),y===!0&&(o.fromBufferAttribute(N,J),te[O+K+4]=o.x,te[O+K+5]=o.y,te[O+K+6]=o.z,te[O+K+7]=0),w===!0&&(o.fromBufferAttribute(I,J),te[O+K+8]=o.x,te[O+K+9]=o.y,te[O+K+10]=o.z,te[O+K+11]=I.itemSize===4?o.w:1)}}m={count:h,texture:H,size:new me(P,U)},s.set(f,m),f.addEventListener("dispose",z)}let g=0;for(let x=0;x<p.length;x++)g+=p[x];const _=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let h=i[f.id];if(h===void 0||h.length!==v){h=[];for(let y=0;y<v;y++)h[y]=[y,0];i[f.id]=h}for(let y=0;y<v;y++){const w=h[y];w[0]=y,w[1]=p[y]}h.sort(Tb);for(let y=0;y<8;y++)y<v&&h[y][1]?(a[y][0]=h[y][0],a[y][1]=h[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Eb);const m=f.morphAttributes.position,g=f.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const w=a[y],M=w[0],E=w[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&f.getAttribute("morphTarget"+y)!==m[M]&&f.setAttribute("morphTarget"+y,m[M]),g&&f.getAttribute("morphNormal"+y)!==g[M]&&f.setAttribute("morphNormal"+y,g[M]),r[y]=E,_+=E):(m&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),g&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const x=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Cb(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);return r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const uv=new Yt,cv=new nv,dv=new _w,fv=new av,Cm=[],Lm=[],Rm=new Float32Array(16),Pm=new Float32Array(9),Dm=new Float32Array(4);function lo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ru(n,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Lb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function Db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Ib(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Dm.set(i),n.uniformMatrix2fv(this.addr,!1,Dm),$t(t,i)}}function Nb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Pm.set(i),n.uniformMatrix3fv(this.addr,!1,Pm),$t(t,i)}}function Ob(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Rm.set(i),n.uniformMatrix4fv(this.addr,!1,Rm),$t(t,i)}}function kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fb(n,e){const t=this.cache;qt(t,e)||(n.uniform2iv(this.addr,e),$t(t,e))}function Ub(n,e){const t=this.cache;qt(t,e)||(n.uniform3iv(this.addr,e),$t(t,e))}function zb(n,e){const t=this.cache;qt(t,e)||(n.uniform4iv(this.addr,e),$t(t,e))}function Bb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vb(n,e){const t=this.cache;qt(t,e)||(n.uniform2uiv(this.addr,e),$t(t,e))}function Hb(n,e){const t=this.cache;qt(t,e)||(n.uniform3uiv(this.addr,e),$t(t,e))}function Gb(n,e){const t=this.cache;qt(t,e)||(n.uniform4uiv(this.addr,e),$t(t,e))}function Wb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||uv,r)}function jb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dv,r)}function Xb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fv,r)}function Yb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cv,r)}function qb(n){switch(n){case 5126:return Lb;case 35664:return Rb;case 35665:return Pb;case 35666:return Db;case 35674:return Ib;case 35675:return Nb;case 35676:return Ob;case 5124:case 35670:return kb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ub;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Vb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Yb}}function $b(n,e){n.uniform1fv(this.addr,e)}function Kb(n,e){const t=lo(e,this.size,2);n.uniform2fv(this.addr,t)}function Zb(n,e){const t=lo(e,this.size,3);n.uniform3fv(this.addr,t)}function Qb(n,e){const t=lo(e,this.size,4);n.uniform4fv(this.addr,t)}function Jb(n,e){const t=lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eE(n,e){const t=lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tE(n,e){const t=lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nE(n,e){n.uniform1iv(this.addr,e)}function iE(n,e){n.uniform2iv(this.addr,e)}function rE(n,e){n.uniform3iv(this.addr,e)}function sE(n,e){n.uniform4iv(this.addr,e)}function oE(n,e){n.uniform1uiv(this.addr,e)}function aE(n,e){n.uniform2uiv(this.addr,e)}function lE(n,e){n.uniform3uiv(this.addr,e)}function uE(n,e){n.uniform4uiv(this.addr,e)}function cE(n,e,t){const i=e.length,r=Ru(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||uv,r[s])}function dE(n,e,t){const i=e.length,r=Ru(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||dv,r[s])}function fE(n,e,t){const i=e.length,r=Ru(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||fv,r[s])}function hE(n,e,t){const i=e.length,r=Ru(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||cv,r[s])}function pE(n){switch(n){case 5126:return $b;case 35664:return Kb;case 35665:return Zb;case 35666:return Qb;case 35674:return Jb;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return hE}}class mE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qb(t.type)}}class gE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=pE(t.type)}}class _E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Im(n,e){n.seq.push(e),n.map[e.id]=e}function vE(n,e,t){const i=n.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),o=kc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Im(t,u===void 0?new mE(a,n,e):new gE(a,n,e));break}else{let c=t.map[a];c===void 0&&(c=new _E(a),Im(t,c)),t=c}}}class Nl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let xE=0;function yE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function SE(n){switch(n){case Ti:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Om(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yE(n.getShaderSource(e),o)}else return r}function wE(n,e){const t=SE(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ME(n,e){let t;switch(e){case IS:t="Linear";break;case NS:t="Reinhard";break;case OS:t="OptimizedCineon";break;case X0:t="ACESFilmic";break;case kS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bE(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fo).join(`
`)}function EE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TE(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fo(n){return n!==""}function km(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(n){return n.replace(AE,CE)}function CE(n,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xd(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(n){return n.replace(LE,RE)}function RE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ko&&(e="SHADOWMAP_TYPE_VSM"),e}function DE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function NE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case j0:e="ENVMAP_BLENDING_MULTIPLY";break;case PS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function OE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PE(t),u=DE(t),f=IE(t),c=NE(t),d=OE(t),p=t.isWebGL2?"":bE(t),v=EE(s),h=r.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(Fo).join(`
`),m.length>0&&(m+=`
`),g=[p,v].filter(Fo).join(`
`),g.length>0&&(g+=`
`)):(m=[zm(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),g=[p,zm(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Le.tonemapping_pars_fragment:"",t.toneMapping!==yi?ME("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,wE("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Xd(o),o=km(o,t),o=Fm(o,t),a=Xd(a),a=km(a,t),a=Fm(a,t),o=Um(o),a=Um(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+m+o,y=_+g+a,w=Nm(r,35633,x),M=Nm(r,35632,y);if(r.attachShader(h,w),r.attachShader(h,M),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(w).trim(),U=r.getShaderInfoLog(M).trim();let te=!0,H=!0;if(r.getProgramParameter(h,35714)===!1){te=!1;const D=Om(r,w,"vertex"),z=Om(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+A+`
`+D+`
`+z)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||U==="")&&(H=!1);H&&(this.diagnostics={runnable:te,programLog:A,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:g}})}r.deleteShader(w),r.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new Nl(r,h)),E};let S;return this.getAttributes=function(){return S===void 0&&(S=TE(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=xE++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=M,this}let FE=0;class UE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zE(e),t.set(e,i)),i}}class zE{constructor(e){this.id=FE++,this.code=e,this.usedTimes=0}}function BE(n,e,t,i,r,s,o){const a=new iv,l=new UE,u=[],f=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,A,P,U,te){const H=U.fog,D=te.geometry,z=S.isMeshStandardMaterial?U.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),X=!!W&&W.mapping===Lu?W.image.height:null,N=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const I=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,O=I!==void 0?I.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let K,re,ae,Se;if(N){const Ye=dn[N];K=Ye.vertexShader,re=Ye.fragmentShader}else K=S.vertexShader,re=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const $=n.getRenderTarget(),Pe=S.alphaTest>0,we=S.clearcoat>0,Me=S.iridescence>0;return{isWebGL2:f,shaderID:N,shaderName:S.type,vertexShader:K,fragmentShader:re,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?n.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Ti,map:!!S.map,matcap:!!S.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:X,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===tw,tangentSpaceNormalMap:S.normalMapType===th,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===ze,clearcoat:we,clearcoatMap:we&&!!S.clearcoatMap,clearcoatRoughnessMap:we&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!S.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!S.iridescenceMap,iridescenceThicknessMap:Me&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===zs,alphaMap:!!S.alphaMap,alphaTest:Pe,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!D.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:c,skinning:te.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:yi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===pn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(A,S),_(A,S),A.push(n.outputEncoding)),A.push(S.customProgramCacheKey),A.join()}function g(S,A){S.push(A.precision),S.push(A.outputEncoding),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.combine),S.push(A.vertexUvs),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),S.push(a.mask)}function x(S){const A=v[S.type];let P;if(A){const U=dn[A];P=lu.clone(U.uniforms)}else P=S.uniforms;return P}function y(S,A){let P;for(let U=0,te=u.length;U<te;U++){const H=u[U];if(H.cacheKey===A){P=H,++P.usedTimes;break}}return P===void 0&&(P=new kE(n,A,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function E(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:E}}function VE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function HE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(c,d,p,v,h,m){let g=n[e];return g===void 0?(g={id:c.id,object:c,geometry:d,material:p,groupOrder:v,renderOrder:c.renderOrder,z:h,group:m},n[e]=g):(g.id=c.id,g.object=c,g.geometry=d,g.material=p,g.groupOrder=v,g.renderOrder=c.renderOrder,g.z=h,g.group=m),e++,g}function a(c,d,p,v,h,m){const g=o(c,d,p,v,h,m);p.transmission>0?i.push(g):p.transparent===!0?r.push(g):t.push(g)}function l(c,d,p,v,h,m){const g=o(c,d,p,v,h,m);p.transmission>0?i.unshift(g):p.transparent===!0?r.unshift(g):t.unshift(g)}function u(c,d){t.length>1&&t.sort(c||HE),i.length>1&&i.sort(d||Bm),r.length>1&&r.sort(d||Bm)}function f(){for(let c=e,d=n.length;c<d;c++){const p=n[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function GE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vm,n.set(i,[o])):r>=s.length?(o=new Vm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ve};break;case"SpotLight":t={position:new R,direction:new R,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function jE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XE=0;function YE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qE(n,e){const t=new WE,i=jE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new R);const s=new R,o=new ke,a=new ke;function l(f,c){let d=0,p=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let h=0,m=0,g=0,_=0,x=0,y=0,w=0,M=0,E=0,S=0;f.sort(YE);const A=c!==!0?Math.PI:1;for(let U=0,te=f.length;U<te;U++){const H=f[U],D=H.color,z=H.intensity,W=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=D.r*z*A,p+=D.g*z*A,v+=D.b*z*A;else if(H.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(H.sh.coefficients[N],z);else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity*A),H.castShadow){const I=H.shadow,O=i.get(H);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,r.directionalShadow[h]=O,r.directionalShadowMap[h]=X,r.directionalShadowMatrix[h]=H.shadow.matrix,y++}r.directional[h]=N,h++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(D).multiplyScalar(z*A),N.distance=W,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,r.spot[g]=N;const I=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,I.updateMatrices(H),H.castShadow&&S++),r.spotLightMatrix[g]=I.matrix,H.castShadow){const O=i.get(H);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,r.spotShadow[g]=O,r.spotShadowMap[g]=X,M++}g++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(D).multiplyScalar(z),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=N,_++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity*A),N.distance=H.distance,N.decay=H.decay,H.castShadow){const I=H.shadow,O=i.get(H);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=H.shadow.matrix,w++}r.point[m]=N,m++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(z*A),N.groundColor.copy(H.groundColor).multiplyScalar(z*A),r.hemi[x]=N,x++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const P=r.hash;(P.directionalLength!==h||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==M||P.numSpotMaps!==E)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=M+E-S,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=S,P.directionalLength=h,P.pointLength=m,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=M,P.numSpotMaps=E,r.version=XE++)}function u(f,c){let d=0,p=0,v=0,h=0,m=0;const g=c.matrixWorldInverse;for(let _=0,x=f.length;_<x;_++){const y=f[_];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(y.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),v++}else if(y.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:l,setupView:u,state:r}}function Hm(n,e){const t=new qE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(c){i.push(c)}function a(c){r.push(c)}function l(c){t.setup(i,c)}function u(c){t.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function $E(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Hm(n,e),t.set(s,[l])):o>=a.length?(l=new Hm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class KE extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eT(n,e,t){let i=new sh;const r=new me,s=new me,o=new je,a=new KE({depthPacking:ew}),l=new ZE,u={},f=t.maxTextureSize,c={0:pn,1:Ei,2:_i},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:QE,fragmentShader:JE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Ft(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0,this.render=function(y,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),P=n.state;P.setBlending(rr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,te=y.length;U<te;U++){const H=y[U],D=H.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const z=D.getFrameExtents();if(r.multiply(z),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null){const X=this.type!==ko?{minFilter:ft,magFilter:ft}:{};D.map=new Xt(r.x,r.y,X),D.map.texture.name=H.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const W=D.getViewportCount();for(let X=0;X<W;X++){const N=D.getViewport(X);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),P.viewport(o),D.updateMatrices(H,X),i=D.getFrustum(),x(w,M,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===ko&&g(D,M),D.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(E,S,A)};function g(y,w){const M=e.update(h);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Xt(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,M,d,h,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,M,p,h,null)}function _(y,w,M,E,S,A){let P=null;const U=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0?P=U:P=M.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const te=P.uuid,H=w.uuid;let D=u[te];D===void 0&&(D={},u[te]=D);let z=D[H];z===void 0&&(z=P.clone(),D[H]=z),P=z}return P.visible=w.visible,P.wireframe=w.wireframe,A===ko?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:c[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(M.matrixWorld),P.nearDistance=E,P.farDistance=S),P}function x(y,w,M,E,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===ko)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const U=e.update(y),te=y.material;if(Array.isArray(te)){const H=U.groups;for(let D=0,z=H.length;D<z;D++){const W=H[D],X=te[W.materialIndex];if(X&&X.visible){const N=_(y,X,E,M.near,M.far,S);n.renderBufferDirect(M,null,U,N,y,W)}}}else if(te.visible){const H=_(y,te,E,M.near,M.far,S);n.renderBufferDirect(M,null,U,H,y,null)}}const P=y.children;for(let U=0,te=P.length;U<te;U++)x(P[U],w,M,E,S)}}function tT(n,e,t){const i=t.isWebGL2;function r(){let k=!1;const ce=new je;let Y=null;const ue=new je(0,0,0,0);return{setMask:function(le){Y!==le&&!k&&(n.colorMask(le,le,le,le),Y=le)},setLocked:function(le){k=le},setClear:function(le,Fe,St,ct,Li){Li===!0&&(le*=ct,Fe*=ct,St*=ct),ce.set(le,Fe,St,ct),ue.equals(ce)===!1&&(n.clearColor(le,Fe,St,ct),ue.copy(ce))},reset:function(){k=!1,Y=null,ue.set(-1,0,0,0)}}}function s(){let k=!1,ce=null,Y=null,ue=null;return{setTest:function(le){le?Pe(2929):we(2929)},setMask:function(le){ce!==le&&!k&&(n.depthMask(le),ce=le)},setFunc:function(le){if(Y!==le){if(le)switch(le){case bS:n.depthFunc(512);break;case ES:n.depthFunc(519);break;case TS:n.depthFunc(513);break;case Ud:n.depthFunc(515);break;case AS:n.depthFunc(514);break;case CS:n.depthFunc(518);break;case LS:n.depthFunc(516);break;case RS:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Y=le}},setLocked:function(le){k=le},setClear:function(le){ue!==le&&(n.clearDepth(le),ue=le)},reset:function(){k=!1,ce=null,Y=null,ue=null}}}function o(){let k=!1,ce=null,Y=null,ue=null,le=null,Fe=null,St=null,ct=null,Li=null;return{setTest:function(rt){k||(rt?Pe(2960):we(2960))},setMask:function(rt){ce!==rt&&!k&&(n.stencilMask(rt),ce=rt)},setFunc:function(rt,ni,Sn){(Y!==rt||ue!==ni||le!==Sn)&&(n.stencilFunc(rt,ni,Sn),Y=rt,ue=ni,le=Sn)},setOp:function(rt,ni,Sn){(Fe!==rt||St!==ni||ct!==Sn)&&(n.stencilOp(rt,ni,Sn),Fe=rt,St=ni,ct=Sn)},setLocked:function(rt){k=rt},setClear:function(rt){Li!==rt&&(n.clearStencil(rt),Li=rt)},reset:function(){k=!1,ce=null,Y=null,ue=null,le=null,Fe=null,St=null,ct=null,Li=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,c=new WeakMap;let d={},p={},v=new WeakMap,h=[],m=null,g=!1,_=null,x=null,y=null,w=null,M=null,E=null,S=null,A=!1,P=null,U=null,te=null,H=null,D=null;const z=n.getParameter(35661);let W=!1,X=0;const N=n.getParameter(7938);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),W=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),W=X>=2);let I=null,O={};const J=n.getParameter(3088),K=n.getParameter(2978),re=new je().fromArray(J),ae=new je().fromArray(K);function Se(k,ce,Y){const ue=new Uint8Array(4),le=n.createTexture();n.bindTexture(k,le),n.texParameteri(k,10241,9728),n.texParameteri(k,10240,9728);for(let Fe=0;Fe<Y;Fe++)n.texImage2D(ce+Fe,0,6408,1,1,0,6408,5121,ue);return le}const $={};$[3553]=Se(3553,3553,1),$[34067]=Se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(2929),l.setFunc(Ud),At(!1),xn(Np),Pe(2884),lt(rr);function Pe(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function we(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function Me(k,ce){return p[k]!==ce?(n.bindFramebuffer(k,ce),p[k]=ce,i&&(k===36009&&(p[36160]=ce),k===36160&&(p[36009]=ce)),!0):!1}function he(k,ce){let Y=h,ue=!1;if(k)if(Y=v.get(ce),Y===void 0&&(Y=[],v.set(ce,Y)),k.isWebGLMultipleRenderTargets){const le=k.texture;if(Y.length!==le.length||Y[0]!==36064){for(let Fe=0,St=le.length;Fe<St;Fe++)Y[Fe]=36064+Fe;Y.length=le.length,ue=!0}}else Y[0]!==36064&&(Y[0]=36064,ue=!0);else Y[0]!==1029&&(Y[0]=1029,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ye(k){return m!==k?(n.useProgram(k),m=k,!0):!1}const Te={[ps]:32774,[hS]:32778,[pS]:32779};if(i)Te[Fp]=32775,Te[Up]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(Te[Fp]=k.MIN_EXT,Te[Up]=k.MAX_EXT)}const _e={[mS]:0,[gS]:1,[_S]:768,[G0]:770,[MS]:776,[SS]:774,[xS]:772,[vS]:769,[W0]:771,[wS]:775,[yS]:773};function lt(k,ce,Y,ue,le,Fe,St,ct){if(k===rr){g===!0&&(we(3042),g=!1);return}if(g===!1&&(Pe(3042),g=!0),k!==fS){if(k!==_||ct!==A){if((x!==ps||M!==ps)&&(n.blendEquation(32774),x=ps,M=ps),ct)switch(k){case zs:n.blendFuncSeparate(1,771,1,771);break;case Fd:n.blendFunc(1,1);break;case Op:n.blendFuncSeparate(0,769,0,1);break;case kp:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case zs:n.blendFuncSeparate(770,771,1,771);break;case Fd:n.blendFunc(770,1);break;case Op:n.blendFuncSeparate(0,769,0,1);break;case kp:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,w=null,E=null,S=null,_=k,A=ct}return}le=le||ce,Fe=Fe||Y,St=St||ue,(ce!==x||le!==M)&&(n.blendEquationSeparate(Te[ce],Te[le]),x=ce,M=le),(Y!==y||ue!==w||Fe!==E||St!==S)&&(n.blendFuncSeparate(_e[Y],_e[ue],_e[Fe],_e[St]),y=Y,w=ue,E=Fe,S=St),_=k,A=null}function zt(k,ce){k.side===_i?we(2884):Pe(2884);let Y=k.side===pn;ce&&(Y=!Y),At(Y),k.blending===zs&&k.transparent===!1?lt(rr):lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const ue=k.stencilWrite;u.setTest(ue),ue&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Pe(32926):we(32926)}function At(k){P!==k&&(k?n.frontFace(2304):n.frontFace(2305),P=k)}function xn(k){k!==uS?(Pe(2884),k!==U&&(k===Np?n.cullFace(1029):k===cS?n.cullFace(1028):n.cullFace(1032))):we(2884),U=k}function ht(k){k!==te&&(W&&n.lineWidth(k),te=k)}function Be(k,ce,Y){k?(Pe(32823),(H!==ce||D!==Y)&&(n.polygonOffset(ce,Y),H=ce,D=Y)):we(32823)}function yn(k){k?Pe(3089):we(3089)}function on(k){k===void 0&&(k=33984+z-1),I!==k&&(n.activeTexture(k),I=k)}function L(k,ce){I===null&&on();let Y=O[I];Y===void 0&&(Y={type:void 0,texture:void 0},O[I]=Y),(Y.type!==k||Y.texture!==ce)&&(n.bindTexture(k,ce||$[k]),Y.type=k,Y.texture=ce)}function b(){const k=O[I];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(k){re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),re.copy(k))}function oe(k){ae.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ae.copy(k))}function Ae(k,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let ue=Y.get(k);ue===void 0&&(ue=n.getUniformBlockIndex(ce,k.name),Y.set(k,ue))}function Ve(k,ce){const ue=c.get(ce).get(k);f.get(k)!==ue&&(n.uniformBlockBinding(ce,ue,k.__bindingPointIndex),f.set(k,ue))}function ut(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},I=null,O={},p={},v=new WeakMap,h=[],m=null,g=!1,_=null,x=null,y=null,w=null,M=null,E=null,S=null,A=!1,P=null,U=null,te=null,H=null,D=null,re.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Pe,disable:we,bindFramebuffer:Me,drawBuffers:he,useProgram:Ye,setBlending:lt,setMaterial:zt,setFlipSided:At,setCullFace:xn,setLineWidth:ht,setPolygonOffset:Be,setScissorTest:yn,activeTexture:on,bindTexture:L,unbindTexture:b,compressedTexImage2D:T,texImage2D:ge,texImage3D:fe,updateUBOMapping:Ae,uniformBlockBinding:Ve,texStorage2D:ye,texStorage3D:G,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:ie,scissor:pe,viewport:oe,reset:ut}}function nT(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,c=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,b){return g?new OffscreenCanvas(L,b):_a("canvas")}function x(L,b,T,j){let ee=1;if((L.width>j||L.height>j)&&(ee=j/Math.max(L.width,L.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ie=b?au:Math.floor,ye=ie(ee*L.width),G=ie(ee*L.height);h===void 0&&(h=_(ye,G));const ge=T?_(ye,G):h;return ge.width=ye,ge.height=G,ge.getContext("2d").drawImage(L,0,0,ye,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ye+"x"+G+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Wd(L.width)&&Wd(L.height)}function w(L){return a?!1:L.wrapS!==Jt||L.wrapT!==Jt||L.minFilter!==ft&&L.minFilter!==et}function M(L,b){return L.generateMipmaps&&b&&L.minFilter!==ft&&L.minFilter!==et}function E(L){n.generateMipmap(L)}function S(L,b,T,j,ee=!1){if(a===!1)return b;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=b;return b===6403&&(T===5126&&(ie=33326),T===5131&&(ie=33325),T===5121&&(ie=33321)),b===33319&&(T===5126&&(ie=33328),T===5131&&(ie=33327),T===5121&&(ie=33323)),b===6408&&(T===5126&&(ie=34836),T===5131&&(ie=34842),T===5121&&(ie=j===ze&&ee===!1?35907:32856),T===32819&&(ie=32854),T===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function A(L,b,T){return M(L,T)===!0||L.isFramebufferTexture&&L.minFilter!==ft&&L.minFilter!==et?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){return L===ft||L===Bd||L===Vd?9728:9729}function U(L){const b=L.target;b.removeEventListener("dispose",U),H(b),b.isVideoTexture&&v.delete(b)}function te(L){const b=L.target;b.removeEventListener("dispose",te),z(b)}function H(L){const b=i.get(L);if(b.__webglInit===void 0)return;const T=L.source,j=m.get(T);if(j){const ee=j[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(L),Object.keys(j).length===0&&m.delete(T)}i.remove(L)}function D(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const T=L.source,j=m.get(T);delete j[b.__cacheKey],o.memory.textures--}function z(L){const b=L.texture,T=i.get(L),j=i.get(b);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]),T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee]);else{if(n.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ee=0,ie=b.length;ee<ie;ee++){const ye=i.get(b[ee]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(b[ee])}i.remove(b),i.remove(L)}let W=0;function X(){W=0}function N(){const L=W;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),W+=1,L}function I(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.encoding),b.join()}function O(L,b){const T=i.get(L);if(L.isVideoTexture&&yn(L),L.isRenderTargetTexture===!1&&L.version>0&&T.__version!==L.version){const j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(T,L,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,T.__webglTexture)}function J(L,b){const T=i.get(L);if(L.version>0&&T.__version!==L.version){we(T,L,b);return}t.activeTexture(33984+b),t.bindTexture(35866,T.__webglTexture)}function K(L,b){const T=i.get(L);if(L.version>0&&T.__version!==L.version){we(T,L,b);return}t.activeTexture(33984+b),t.bindTexture(32879,T.__webglTexture)}function re(L,b){const T=i.get(L);if(L.version>0&&T.__version!==L.version){Me(T,L,b);return}t.activeTexture(33984+b),t.bindTexture(34067,T.__webglTexture)}const ae={[ar]:10497,[Jt]:33071,[ou]:33648},Se={[ft]:9728,[Bd]:9984,[Vd]:9986,[et]:9729,[q0]:9985,[jr]:9987};function $(L,b,T){if(T?(n.texParameteri(L,10242,ae[b.wrapS]),n.texParameteri(L,10243,ae[b.wrapT]),(L===32879||L===35866)&&n.texParameteri(L,32882,ae[b.wrapR]),n.texParameteri(L,10240,Se[b.magFilter]),n.texParameteri(L,10241,Se[b.minFilter])):(n.texParameteri(L,10242,33071),n.texParameteri(L,10243,33071),(L===32879||L===35866)&&n.texParameteri(L,32882,33071),(b.wrapS!==Jt||b.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,10240,P(b.magFilter)),n.texParameteri(L,10241,P(b.minFilter)),b.minFilter!==ft&&b.minFilter!==et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(b.type===Bn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===An&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Pe(L,b){let T=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",U));const j=b.source;let ee=m.get(j);ee===void 0&&(ee={},m.set(j,ee));const ie=I(b);if(ie!==L.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,T=!0),ee[ie].usedTimes++;const ye=ee[L.__cacheKey];ye!==void 0&&(ee[L.__cacheKey].usedTimes--,ye.usedTimes===0&&D(b)),L.__cacheKey=ie,L.__webglTexture=ee[ie].texture}return T}function we(L,b,T){let j=3553;b.isDataArrayTexture&&(j=35866),b.isData3DTexture&&(j=32879);const ee=Pe(L,b),ie=b.source;if(t.activeTexture(33984+T),t.bindTexture(j,L.__webglTexture),ie.version!==ie.__currentVersion||ee===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const ye=w(b)&&y(b.image)===!1;let G=x(b.image,ye,!1,f);G=on(b,G);const ge=y(G)||a,fe=s.convert(b.format,b.encoding);let pe=s.convert(b.type),oe=S(b.internalFormat,fe,pe,b.encoding,b.isVideoTexture);$(j,b,ge);let Ae;const Ve=b.mipmaps,ut=a&&b.isVideoTexture!==!0,k=ie.__currentVersion===void 0||ee===!0,ce=A(b,G,ge);if(b.isDepthTexture)oe=6402,a?b.type===Bn?oe=36012:b.type===Cr?oe=33190:b.type===Bs?oe=35056:oe=33189:b.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Dr&&oe===6402&&b.type!==$0&&b.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Cr,pe=s.convert(b.type)),b.format===Ks&&oe===6402&&(oe=34041,b.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Bs,pe=s.convert(b.type))),k&&(ut?t.texStorage2D(3553,1,oe,G.width,G.height):t.texImage2D(3553,0,oe,G.width,G.height,0,fe,pe,null));else if(b.isDataTexture)if(Ve.length>0&&ge){ut&&k&&t.texStorage2D(3553,ce,oe,Ve[0].width,Ve[0].height);for(let Y=0,ue=Ve.length;Y<ue;Y++)Ae=Ve[Y],ut?t.texSubImage2D(3553,Y,0,0,Ae.width,Ae.height,fe,pe,Ae.data):t.texImage2D(3553,Y,oe,Ae.width,Ae.height,0,fe,pe,Ae.data);b.generateMipmaps=!1}else ut?(k&&t.texStorage2D(3553,ce,oe,G.width,G.height),t.texSubImage2D(3553,0,0,0,G.width,G.height,fe,pe,G.data)):t.texImage2D(3553,0,oe,G.width,G.height,0,fe,pe,G.data);else if(b.isCompressedTexture){ut&&k&&t.texStorage2D(3553,ce,oe,Ve[0].width,Ve[0].height);for(let Y=0,ue=Ve.length;Y<ue;Y++)Ae=Ve[Y],b.format!==Wt?fe!==null?ut?t.compressedTexSubImage2D(3553,Y,0,0,Ae.width,Ae.height,fe,Ae.data):t.compressedTexImage2D(3553,Y,oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(3553,Y,0,0,Ae.width,Ae.height,fe,pe,Ae.data):t.texImage2D(3553,Y,oe,Ae.width,Ae.height,0,fe,pe,Ae.data)}else if(b.isDataArrayTexture)ut?(k&&t.texStorage3D(35866,ce,oe,G.width,G.height,G.depth),t.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,fe,pe,G.data)):t.texImage3D(35866,0,oe,G.width,G.height,G.depth,0,fe,pe,G.data);else if(b.isData3DTexture)ut?(k&&t.texStorage3D(32879,ce,oe,G.width,G.height,G.depth),t.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,fe,pe,G.data)):t.texImage3D(32879,0,oe,G.width,G.height,G.depth,0,fe,pe,G.data);else if(b.isFramebufferTexture){if(k)if(ut)t.texStorage2D(3553,ce,oe,G.width,G.height);else{let Y=G.width,ue=G.height;for(let le=0;le<ce;le++)t.texImage2D(3553,le,oe,Y,ue,0,fe,pe,null),Y>>=1,ue>>=1}}else if(Ve.length>0&&ge){ut&&k&&t.texStorage2D(3553,ce,oe,Ve[0].width,Ve[0].height);for(let Y=0,ue=Ve.length;Y<ue;Y++)Ae=Ve[Y],ut?t.texSubImage2D(3553,Y,0,0,fe,pe,Ae):t.texImage2D(3553,Y,oe,fe,pe,Ae);b.generateMipmaps=!1}else ut?(k&&t.texStorage2D(3553,ce,oe,G.width,G.height),t.texSubImage2D(3553,0,0,0,fe,pe,G)):t.texImage2D(3553,0,oe,fe,pe,G);M(b,ge)&&E(j),ie.__currentVersion=ie.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Me(L,b,T){if(b.image.length!==6)return;const j=Pe(L,b),ee=b.source;if(t.activeTexture(33984+T),t.bindTexture(34067,L.__webglTexture),ee.version!==ee.__currentVersion||j===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const ie=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,G=[];for(let Y=0;Y<6;Y++)!ie&&!ye?G[Y]=x(b.image[Y],!1,!0,u):G[Y]=ye?b.image[Y].image:b.image[Y],G[Y]=on(b,G[Y]);const ge=G[0],fe=y(ge)||a,pe=s.convert(b.format,b.encoding),oe=s.convert(b.type),Ae=S(b.internalFormat,pe,oe,b.encoding),Ve=a&&b.isVideoTexture!==!0,ut=ee.__currentVersion===void 0||j===!0;let k=A(b,ge,fe);$(34067,b,fe);let ce;if(ie){Ve&&ut&&t.texStorage2D(34067,k,Ae,ge.width,ge.height);for(let Y=0;Y<6;Y++){ce=G[Y].mipmaps;for(let ue=0;ue<ce.length;ue++){const le=ce[ue];b.format!==Wt?pe!==null?Ve?t.compressedTexSubImage2D(34069+Y,ue,0,0,le.width,le.height,pe,le.data):t.compressedTexImage2D(34069+Y,ue,Ae,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+Y,ue,0,0,le.width,le.height,pe,oe,le.data):t.texImage2D(34069+Y,ue,Ae,le.width,le.height,0,pe,oe,le.data)}}}else{ce=b.mipmaps,Ve&&ut&&(ce.length>0&&k++,t.texStorage2D(34067,k,Ae,G[0].width,G[0].height));for(let Y=0;Y<6;Y++)if(ye){Ve?t.texSubImage2D(34069+Y,0,0,0,G[Y].width,G[Y].height,pe,oe,G[Y].data):t.texImage2D(34069+Y,0,Ae,G[Y].width,G[Y].height,0,pe,oe,G[Y].data);for(let ue=0;ue<ce.length;ue++){const Fe=ce[ue].image[Y].image;Ve?t.texSubImage2D(34069+Y,ue+1,0,0,Fe.width,Fe.height,pe,oe,Fe.data):t.texImage2D(34069+Y,ue+1,Ae,Fe.width,Fe.height,0,pe,oe,Fe.data)}}else{Ve?t.texSubImage2D(34069+Y,0,0,0,pe,oe,G[Y]):t.texImage2D(34069+Y,0,Ae,pe,oe,G[Y]);for(let ue=0;ue<ce.length;ue++){const le=ce[ue];Ve?t.texSubImage2D(34069+Y,ue+1,0,0,pe,oe,le.image[Y]):t.texImage2D(34069+Y,ue+1,Ae,pe,oe,le.image[Y])}}}M(b,fe)&&E(34067),ee.__currentVersion=ee.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function he(L,b,T,j,ee){const ie=s.convert(T.format,T.encoding),ye=s.convert(T.type),G=S(T.internalFormat,ie,ye,T.encoding);i.get(b).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,G,b.width,b.height,b.depth,0,ie,ye,null):t.texImage2D(ee,0,G,b.width,b.height,0,ie,ye,null)),t.bindFramebuffer(36160,L),Be(b)?d.framebufferTexture2DMultisampleEXT(36160,j,ee,i.get(T).__webglTexture,0,ht(b)):n.framebufferTexture2D(36160,j,ee,i.get(T).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ye(L,b,T){if(n.bindRenderbuffer(36161,L),b.depthBuffer&&!b.stencilBuffer){let j=33189;if(T||Be(b)){const ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Bn?j=36012:ee.type===Cr&&(j=33190));const ie=ht(b);Be(b)?d.renderbufferStorageMultisampleEXT(36161,ie,j,b.width,b.height):n.renderbufferStorageMultisample(36161,ie,j,b.width,b.height)}else n.renderbufferStorage(36161,j,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,L)}else if(b.depthBuffer&&b.stencilBuffer){const j=ht(b);T&&Be(b)===!1?n.renderbufferStorageMultisample(36161,j,35056,b.width,b.height):Be(b)?d.renderbufferStorageMultisampleEXT(36161,j,35056,b.width,b.height):n.renderbufferStorage(36161,34041,b.width,b.height),n.framebufferRenderbuffer(36160,33306,36161,L)}else{const j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<j.length;ee++){const ie=j[ee],ye=s.convert(ie.format,ie.encoding),G=s.convert(ie.type),ge=S(ie.internalFormat,ye,G,ie.encoding),fe=ht(b);T&&Be(b)===!1?n.renderbufferStorageMultisample(36161,fe,ge,b.width,b.height):Be(b)?d.renderbufferStorageMultisampleEXT(36161,fe,ge,b.width,b.height):n.renderbufferStorage(36161,ge,b.width,b.height)}}n.bindRenderbuffer(36161,null)}function Te(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,ee=ht(b);if(b.depthTexture.format===Dr)Be(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,ee):n.framebufferTexture2D(36160,36096,3553,j,0);else if(b.depthTexture.format===Ks)Be(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,ee):n.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function _e(L){const b=i.get(L),T=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");Te(b.__webglFramebuffer,L)}else if(T){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=n.createRenderbuffer(),Ye(b.__webglDepthbuffer[j],L,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Ye(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function lt(L,b,T){const j=i.get(L);b!==void 0&&he(j.__webglFramebuffer,L,L.texture,36064,3553),T!==void 0&&_e(L)}function zt(L){const b=L.texture,T=i.get(L),j=i.get(b);L.addEventListener("dispose",te),L.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++);const ee=L.isWebGLCubeRenderTarget===!0,ie=L.isWebGLMultipleRenderTargets===!0,ye=y(L)||a;if(ee){T.__webglFramebuffer=[];for(let G=0;G<6;G++)T.__webglFramebuffer[G]=n.createFramebuffer()}else{if(T.__webglFramebuffer=n.createFramebuffer(),ie)if(r.drawBuffers){const G=L.texture;for(let ge=0,fe=G.length;ge<fe;ge++){const pe=i.get(G[ge]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Be(L)===!1){const G=ie?b:[b];T.__webglMultisampledFramebuffer=n.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer);for(let ge=0;ge<G.length;ge++){const fe=G[ge];T.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(36161,T.__webglColorRenderbuffer[ge]);const pe=s.convert(fe.format,fe.encoding),oe=s.convert(fe.type),Ae=S(fe.internalFormat,pe,oe,fe.encoding),Ve=ht(L);n.renderbufferStorageMultisample(36161,Ve,Ae,L.width,L.height),n.framebufferRenderbuffer(36160,36064+ge,36161,T.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(36161,null),L.depthBuffer&&(T.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(T.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,j.__webglTexture),$(34067,b,ye);for(let G=0;G<6;G++)he(T.__webglFramebuffer[G],L,b,36064,34069+G);M(b,ye)&&E(34067),t.unbindTexture()}else if(ie){const G=L.texture;for(let ge=0,fe=G.length;ge<fe;ge++){const pe=G[ge],oe=i.get(pe);t.bindTexture(3553,oe.__webglTexture),$(3553,pe,ye),he(T.__webglFramebuffer,L,pe,36064+ge,3553),M(pe,ye)&&E(3553)}t.unbindTexture()}else{let G=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?G=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,j.__webglTexture),$(G,b,ye),he(T.__webglFramebuffer,L,b,36064,G),M(b,ye)&&E(G),t.unbindTexture()}L.depthBuffer&&_e(L)}function At(L){const b=y(L)||a,T=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let j=0,ee=T.length;j<ee;j++){const ie=T[j];if(M(ie,b)){const ye=L.isWebGLCubeRenderTarget?34067:3553,G=i.get(ie).__webglTexture;t.bindTexture(ye,G),E(ye),t.unbindTexture()}}}function xn(L){if(a&&L.samples>0&&Be(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],T=L.width,j=L.height;let ee=16384;const ie=[],ye=L.stencilBuffer?33306:36096,G=i.get(L),ge=L.isWebGLMultipleRenderTargets===!0;if(ge)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,G.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,G.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,G.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){ie.push(36064+fe),L.depthBuffer&&ie.push(ye);const pe=G.__ignoreDepthValues!==void 0?G.__ignoreDepthValues:!1;if(pe===!1&&(L.depthBuffer&&(ee|=256),L.stencilBuffer&&(ee|=1024)),ge&&n.framebufferRenderbuffer(36008,36064,36161,G.__webglColorRenderbuffer[fe]),pe===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),ge){const oe=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,oe,0)}n.blitFramebuffer(0,0,T,j,0,0,T,j,ee,9728),p&&n.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ge)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,G.__webglColorRenderbuffer[fe]);const pe=i.get(b[fe]).__webglTexture;t.bindFramebuffer(36160,G.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,pe,0)}t.bindFramebuffer(36009,G.__webglMultisampledFramebuffer)}}function ht(L){return Math.min(c,L.samples)}function Be(L){const b=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yn(L){const b=o.render.frame;v.get(L)!==b&&(v.set(L,b),L.update())}function on(L,b){const T=L.encoding,j=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Gd||T!==Ti&&(T===ze?a===!1?e.has("EXT_sRGB")===!0&&j===Wt?(L.format=Gd,L.minFilter=et,L.generateMipmaps=!1):b=ev.sRGBToLinear(b):(j!==Wt||ee!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",T)),b}this.allocateTextureUnit=N,this.resetTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=re,this.rebindTextures=lt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Be}function iT(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Vr)return 5121;if(s===BS)return 32819;if(s===VS)return 32820;if(s===FS)return 5120;if(s===US)return 5122;if(s===$0)return 5123;if(s===zS)return 5124;if(s===Cr)return 5125;if(s===Bn)return 5126;if(s===An)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===HS)return 6406;if(s===Wt)return 6408;if(s===GS)return 6409;if(s===WS)return 6410;if(s===Dr)return 6402;if(s===Ks)return 34041;if(s===jS)return 6403;if(s===eh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===XS)return 36244;if(s===YS)return 33319;if(s===qS)return 33320;if(s===$S)return 36249;if(s===ac||s===lc||s===uc||s===cc)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zp||s===Bp||s===Vp||s===Hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===KS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gp||s===Wp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gp)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jp||s===Xp||s===Yp||s===qp||s===$p||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im||s===rm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jp)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===em)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tm)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nm)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===im)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rm)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sm)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Bs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class rT extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sT={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const m=t.getJointPose(h,i);if(u.joints[h.jointName]===void 0){const _=new $i;_.matrixAutoUpdate=!1,_.visible=!1,u.joints[h.jointName]=_,u.add(_)}const g=u.joints[h.jointName];m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class oT extends Yt{constructor(e,t,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:Dr,f!==Dr&&f!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Dr&&(i=Cr),i===void 0&&f===Ks&&(i=Bs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}class aT extends Xr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,f=null,c=null,d=null,p=null;const v=t.getContextAttributes();let h=null,m=null;const g=[],_=[],x=new Gt;x.layers.enable(1),x.viewport=new je;const y=new Gt;y.layers.enable(2),y.viewport=new je;const w=[x,y],M=new rT;M.layers.enable(1),M.layers.enable(2);let E=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=g[I];return O===void 0&&(O=new Fc,g[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=g[I];return O===void 0&&(O=new Fc,g[I]=O),O.getGripSpace()},this.getHand=function(I){let O=g[I];return O===void 0&&(O=new Fc,g[I]=O),O.getHandSpace()};function A(I){const O=_.indexOf(I.inputSource);if(O===-1)return;const J=g[O];J!==void 0&&J.dispatchEvent({type:I.type,data:I.inputSource})}function P(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",U);for(let I=0;I<g.length;I++){const O=_[I];O!==null&&(_[I]=null,g[I].disconnect(O))}E=null,S=null,e.setRenderTarget(h),d=null,c=null,f=null,r=null,m=null,N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",P),r.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:d}),m=new Xt(d.framebufferWidth,d.framebufferHeight,{format:Wt,type:Vr,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let O=null,J=null,K=null;v.depth&&(K=v.stencil?35056:33190,O=v.stencil?Ks:Dr,J=v.stencil?Bs:Cr);const re={colorFormat:32856,depthFormat:K,scaleFactor:s};f=new XRWebGLBinding(r,t),c=f.createProjectionLayer(re),r.updateRenderState({layers:[c]}),m=new Xt(c.textureWidth,c.textureHeight,{format:Wt,type:Vr,depthTexture:new oT(c.textureWidth,c.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const ae=e.properties.get(m);ae.__ignoreDepthValues=c.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),N.setContext(r),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(I){for(let O=0;O<I.removed.length;O++){const J=I.removed[O],K=_.indexOf(J);K>=0&&(_[K]=null,g[K].dispatchEvent({type:"disconnected",data:J}))}for(let O=0;O<I.added.length;O++){const J=I.added[O];let K=_.indexOf(J);if(K===-1){for(let ae=0;ae<g.length;ae++)if(ae>=_.length){_.push(J),K=ae;break}else if(_[ae]===null){_[ae]=J,K=ae;break}if(K===-1)break}const re=g[K];re&&re.dispatchEvent({type:"connected",data:J})}}const te=new R,H=new R;function D(I,O,J){te.setFromMatrixPosition(O.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);const K=te.distanceTo(H),re=O.projectionMatrix.elements,ae=J.projectionMatrix.elements,Se=re[14]/(re[10]-1),$=re[14]/(re[10]+1),Pe=(re[9]+1)/re[5],we=(re[9]-1)/re[5],Me=(re[8]-1)/re[0],he=(ae[8]+1)/ae[0],Ye=Se*Me,Te=Se*he,_e=K/(-Me+he),lt=_e*-Me;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(lt),I.translateZ(_e),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const zt=Se+_e,At=$+_e,xn=Ye-lt,ht=Te+(K-lt),Be=Pe*$/At*zt,yn=we*$/At*zt;I.projectionMatrix.makePerspective(xn,ht,Be,yn,zt,At)}function z(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;M.near=y.near=x.near=I.near,M.far=y.far=x.far=I.far,(E!==M.near||S!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,S=M.far);const O=I.parent,J=M.cameras;z(M,O);for(let re=0;re<J.length;re++)z(J[re],O);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),I.matrix.copy(M.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const K=I.children;for(let re=0,ae=K.length;re<ae;re++)K[re].updateMatrixWorld(!0);J.length===2?D(M,x,y):M.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){c!==null&&(c.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let W=null;function X(I,O){if(u=O.getViewerPose(l||o),p=O,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let K=!1;J.length!==M.cameras.length&&(M.cameras.length=0,K=!0);for(let re=0;re<J.length;re++){const ae=J[re];let Se=null;if(d!==null)Se=d.getViewport(ae);else{const Pe=f.getViewSubImage(c,ae);Se=Pe.viewport,re===0&&(e.setRenderTargetTextures(m,Pe.colorTexture,c.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(m))}let $=w[re];$===void 0&&($=new Gt,$.layers.enable(re),$.viewport=new je,w[re]=$),$.matrix.fromArray(ae.transform.matrix),$.projectionMatrix.fromArray(ae.projectionMatrix),$.viewport.set(Se.x,Se.y,Se.width,Se.height),re===0&&M.matrix.copy($.matrix),K===!0&&M.cameras.push($)}}for(let J=0;J<g.length;J++){const K=_[J],re=g[J];K!==null&&re!==void 0&&re.update(K,O,l||o)}W&&W(I,O),p=null}const N=new lv;N.setAnimationLoop(X),this.setAnimationLoop=function(I){W=I},this.dispose=function(){}}}function lT(n,e){function t(h,m){h.fogColor.value.copy(m.color),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function i(h,m,g,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(h,m):m.isMeshToonMaterial?(r(h,m),f(h,m)):m.isMeshPhongMaterial?(r(h,m),u(h,m)):m.isMeshStandardMaterial?(r(h,m),c(h,m),m.isMeshPhysicalMaterial&&d(h,m,x)):m.isMeshMatcapMaterial?(r(h,m),p(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),v(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(s(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?a(h,m,g,_):m.isSpriteMaterial?l(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.bumpMap&&(h.bumpMap.value=m.bumpMap,h.bumpScale.value=m.bumpScale,m.side===pn&&(h.bumpScale.value*=-1)),m.displacementMap&&(h.displacementMap.value=m.displacementMap,h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap),m.normalMap&&(h.normalMap.value=m.normalMap,h.normalScale.value.copy(m.normalScale),m.side===pn&&h.normalScale.value.negate()),m.specularMap&&(h.specularMap.value=m.specularMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function a(h,m,g,_){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*g,h.scale.value=_*.5,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function f(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function c(h,m){h.roughness.value=m.roughness,h.metalness.value=m.metalness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function d(h,m,g){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),h.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===pn&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap)}function p(h,m){m.matcap&&(h.matcap.value=m.matcap)}function v(h,m){h.referencePosition.value.copy(m.referencePosition),h.nearDistance.value=m.nearDistance,h.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function uT(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function u(_,x){let y=r[_.id];y===void 0&&(v(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(_,w);const M=e.render.frame;s[_.id]!==M&&(d(_),s[_.id]=M)}function f(_){const x=c();_.__bindingPointIndex=x;const y=n.createBuffer(),w=_.__size,M=_.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,M),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,y),y}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(35345,x);for(let M=0,E=y.length;M<E;M++){const S=y[M];if(p(S,M,w)===!0){const A=S.value,P=S.__offset;typeof A=="number"?(S.__data[0]=A,n.bufferSubData(35345,P,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):A.toArray(S.__data),n.bufferSubData(35345,P,S.__data))}}n.bindBuffer(35345,null)}function p(_,x,y){const w=_.value;if(y[x]===void 0)return typeof w=="number"?y[x]=w:y[x]=w.clone(),!0;if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const M=y[x];if(M.equals(w)===!1)return M.copy(w),!0}return!1}function v(_){const x=_.uniforms;let y=0;const w=16;let M=0;for(let E=0,S=x.length;E<S;E++){const A=x[E],P=h(A);if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,E>0){M=y%w;const U=w-M;M!==0&&U-P.boundary<0&&(y+=w-M,A.__offset=y)}y+=P.storage}return M=y%w,M>0&&(y+=w-M),_.__size=y,_.__cache={},this}function h(_){const x=_.value,y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function cT(){const n=_a("canvas");return n.style.display="block",n}function hv(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:cT(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=n.alpha!==void 0?n.alpha:!1;let c=null,d=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=yi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let m=!1,g=0,_=0,x=null,y=-1,w=null;const M=new je,E=new je;let S=null,A=e.width,P=e.height,U=1,te=null,H=null;const D=new je(0,0,A,P),z=new je(0,0,A,P);let W=!1;const X=new sh;let N=!1,I=!1,O=null;const J=new ke,K=new me,re=new R,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return x===null?U:1}let $=t;function Pe(C,B){for(let q=0;q<C.length;q++){const F=C[q],Z=e.getContext(F,B);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jf}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Ve,!1),e.addEventListener("webglcontextcreationerror",ut,!1),$===null){const B=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&B.shift(),$=Pe(B,C),$===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,Me,he,Ye,Te,_e,lt,zt,At,xn,ht,Be,yn,on,L,b,T,j,ee,ie,ye,G,ge,fe;function pe(){we=new Sb($),Me=new mb($,we,n),we.init(Me),G=new iT($,we,Me),he=new tT($,we,Me),Ye=new bb,Te=new VE,_e=new nT($,we,he,Te,Me,G,Ye),lt=new _b(h),zt=new yb(h),At=new Ow($,Me),ge=new hb($,we,At,Me),xn=new wb($,At,Ye,ge),ht=new Cb($,xn,At,Ye),ee=new Ab($,Me,_e),b=new gb(Te),Be=new BE(h,lt,zt,we,Me,ge,b),yn=new lT(h,Te),on=new GE,L=new $E(we,Me),j=new fb(h,lt,he,ht,f,o),T=new eT(h,ht,Me),fe=new uT($,Ye,Me,he),ie=new pb($,we,Ye,Me),ye=new Mb($,we,Ye,Me),Ye.programs=Be.programs,h.capabilities=Me,h.extensions=we,h.properties=Te,h.renderLists=on,h.shadowMap=T,h.state=he,h.info=Ye}pe();const oe=new aT(h,$);this.xr=oe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(A,P,!1))},this.getSize=function(C){return C.set(A,P)},this.setSize=function(C,B,q){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,P=B,e.width=Math.floor(C*U),e.height=Math.floor(B*U),q!==!1&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(A*U,P*U).floor()},this.setDrawingBufferSize=function(C,B,q){A=C,P=B,U=q,e.width=Math.floor(C*q),e.height=Math.floor(B*q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,B,q,F){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,B,q,F),he.viewport(M.copy(D).multiplyScalar(U).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,B,q,F){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,B,q,F),he.scissor(E.copy(z).multiplyScalar(U).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){he.setScissorTest(W=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(C=!0,B=!0,q=!0){let F=0;C&&(F|=16384),B&&(F|=256),q&&(F|=1024),$.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Ve,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),on.dispose(),L.dispose(),Te.dispose(),lt.dispose(),zt.dispose(),ht.dispose(),ge.dispose(),fe.dispose(),Be.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Fe),oe.removeEventListener("sessionend",St),O&&(O.dispose(),O=null),ct.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Ye.autoReset,B=T.enabled,q=T.autoUpdate,F=T.needsUpdate,Z=T.type;pe(),Ye.autoReset=C,T.enabled=B,T.autoUpdate=q,T.needsUpdate=F,T.type=Z}function ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function k(C){const B=C.target;B.removeEventListener("dispose",k),ce(B)}function ce(C){Y(C),Te.remove(C)}function Y(C){const B=Te.get(C).programs;B!==void 0&&(B.forEach(function(q){Be.releaseProgram(q)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,q,F,Z,xe){B===null&&(B=ae);const be=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=Uv(C,B,q,F,Z);he.setMaterial(F,be);let Ee=q.index;const Ge=q.attributes.position;if(Ee===null){if(Ge===void 0||Ge.count===0)return}else if(Ee.count===0)return;let Ie=1;F.wireframe===!0&&(Ee=xn.getWireframeAttribute(q),Ie=2),ge.setup(Z,F,Ce,q,Ee);let Ne,st=ie;Ee!==null&&(Ne=At.get(Ee),st=ye,st.setIndex(Ne));const pr=Ee!==null?Ee.count:Ge.count,$r=q.drawRange.start*Ie,Kr=q.drawRange.count*Ie,Yn=xe!==null?xe.start*Ie:0,He=xe!==null?xe.count*Ie:1/0,Zr=Math.max($r,Yn),pt=Math.min(pr,$r+Kr,Yn+He)-1,wn=Math.max(0,pt-Zr+1);if(wn!==0){if(Z.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*Se()),st.setMode(1)):st.setMode(4);else if(Z.isLine){let Ri=F.linewidth;Ri===void 0&&(Ri=1),he.setLineWidth(Ri*Se()),Z.isLineSegments?st.setMode(1):Z.isLineLoop?st.setMode(2):st.setMode(3)}else Z.isPoints?st.setMode(0):Z.isSprite&&st.setMode(4);if(Z.isInstancedMesh)st.renderInstances(Zr,wn,Z.count);else if(q.isInstancedBufferGeometry){const Ri=Math.min(q.instanceCount,q._maxInstanceCount);st.renderInstances(Zr,wn,Ri)}else st.render(Zr,wn)}},this.compile=function(C,B){function q(F,Z,xe){F.transparent===!0&&F.side===_i?(F.side=pn,F.needsUpdate=!0,Ra(F,Z,xe),F.side=Ei,F.needsUpdate=!0,Ra(F,Z,xe),F.side=_i):Ra(F,Z,xe)}d=L.get(C),d.init(),v.push(d),C.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(h.physicallyCorrectLights),C.traverse(function(F){const Z=F.material;if(Z)if(Array.isArray(Z))for(let xe=0;xe<Z.length;xe++){const be=Z[xe];q(be,C,F)}else q(Z,C,F)}),v.pop(),d=null};let ue=null;function le(C){ue&&ue(C)}function Fe(){ct.stop()}function St(){ct.start()}const ct=new lv;ct.setAnimationLoop(le),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(C){ue=C,oe.setAnimationLoop(C),C===null?ct.stop():ct.start()},oe.addEventListener("sessionstart",Fe),oe.addEventListener("sessionend",St),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,B,x),d=L.get(C,v.length),d.init(),v.push(d),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(J),I=this.localClippingEnabled,N=b.init(this.clippingPlanes,I,B),c=on.get(C,p.length),c.init(),p.push(c),Li(C,B,0,h.sortObjects),c.finish(),h.sortObjects===!0&&c.sort(te,H),N===!0&&b.beginShadows();const q=d.state.shadowsArray;if(T.render(q,C,B),N===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(c,C),d.setupLights(h.physicallyCorrectLights),B.isArrayCamera){const F=B.cameras;for(let Z=0,xe=F.length;Z<xe;Z++){const be=F[Z];rt(c,C,be,be.viewport)}}else rt(c,C,B);x!==null&&(_e.updateMultisampleRenderTarget(x),_e.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(h,C,B),ge.resetDefaultState(),y=-1,w=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,p.pop(),p.length>0?c=p[p.length-1]:c=null};function Li(C,B,q,F){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){F&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const be=ht.update(C),Ce=C.material;Ce.visible&&c.push(C,be,Ce,q,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ye.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ye.render.frame),!C.frustumCulled||X.intersectsObject(C))){F&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const be=ht.update(C),Ce=C.material;if(Array.isArray(Ce)){const Ee=be.groups;for(let Ge=0,Ie=Ee.length;Ge<Ie;Ge++){const Ne=Ee[Ge],st=Ce[Ne.materialIndex];st&&st.visible&&c.push(C,be,st,q,re.z,Ne)}}else Ce.visible&&c.push(C,be,Ce,q,re.z,null)}}const xe=C.children;for(let be=0,Ce=xe.length;be<Ce;be++)Li(xe[be],B,q,F)}function rt(C,B,q,F){const Z=C.opaque,xe=C.transmissive,be=C.transparent;d.setupLightsView(q),xe.length>0&&ni(Z,B,q),F&&he.viewport(M.copy(F)),Z.length>0&&Sn(Z,B,q),xe.length>0&&Sn(xe,B,q),be.length>0&&Sn(be,B,q),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ni(C,B,q){const F=Me.isWebGL2;O===null&&(O=new Xt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?An:Vr,minFilter:jr,samples:F&&s===!0?4:0})),h.getDrawingBufferSize(K),F?O.setSize(K.x,K.y):O.setSize(au(K.x),au(K.y));const Z=h.getRenderTarget();h.setRenderTarget(O),h.clear();const xe=h.toneMapping;h.toneMapping=yi,Sn(C,B,q),h.toneMapping=xe,_e.updateMultisampleRenderTarget(O),_e.updateRenderTargetMipmap(O),h.setRenderTarget(Z)}function Sn(C,B,q){const F=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,xe=C.length;Z<xe;Z++){const be=C[Z],Ce=be.object,Ee=be.geometry,Ge=F===null?be.material:F,Ie=be.group;Ce.layers.test(q.layers)&&Fv(Ce,B,q,Ee,Ge,Ie)}}function Fv(C,B,q,F,Z,xe){C.onBeforeRender(h,B,q,F,Z,xe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(h,B,q,F,C,xe),Z.transparent===!0&&Z.side===_i?(Z.side=pn,Z.needsUpdate=!0,h.renderBufferDirect(q,B,F,Z,C,xe),Z.side=Ei,Z.needsUpdate=!0,h.renderBufferDirect(q,B,F,Z,C,xe),Z.side=_i):h.renderBufferDirect(q,B,F,Z,C,xe),C.onAfterRender(h,B,q,F,Z,xe)}function Ra(C,B,q){B.isScene!==!0&&(B=ae);const F=Te.get(C),Z=d.state.lights,xe=d.state.shadowsArray,be=Z.state.version,Ce=Be.getParameters(C,Z.state,xe,B,q),Ee=Be.getProgramCacheKey(Ce);let Ge=F.programs;F.environment=C.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(C.isMeshStandardMaterial?zt:lt).get(C.envMap||F.environment),Ge===void 0&&(C.addEventListener("dispose",k),Ge=new Map,F.programs=Ge);let Ie=Ge.get(Ee);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===be)return Mh(C,Ce),Ie}else Ce.uniforms=Be.getUniforms(C),C.onBuild(q,Ce,h),C.onBeforeCompile(Ce,h),Ie=Be.acquireProgram(Ce,Ee),Ge.set(Ee,Ie),F.uniforms=Ce.uniforms;const Ne=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=b.uniform),Mh(C,Ce),F.needsLights=Bv(C),F.lightsStateVersion=be,F.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix);const st=Ie.getUniforms(),pr=Nl.seqWithValue(st.seq,Ne);return F.currentProgram=Ie,F.uniformsList=pr,Ie}function Mh(C,B){const q=Te.get(C);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Uv(C,B,q,F,Z){B.isScene!==!0&&(B=ae),_e.resetTextureUnits();const xe=B.fog,be=F.isMeshStandardMaterial?B.environment:null,Ce=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ti,Ee=(F.isMeshStandardMaterial?zt:lt).get(F.envMap||be),Ge=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ie=!!F.normalMap&&!!q.attributes.tangent,Ne=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,pr=!!q.morphAttributes.color,$r=F.toneMapped?h.toneMapping:yi,Kr=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yn=Kr!==void 0?Kr.length:0,He=Te.get(F),Zr=d.state.lights;if(N===!0&&(I===!0||C!==w)){const an=C===w&&F.id===y;b.setState(F,C,an)}let pt=!1;F.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Zr.state.version||He.outputEncoding!==Ce||Z.isInstancedMesh&&He.instancing===!1||!Z.isInstancedMesh&&He.instancing===!0||Z.isSkinnedMesh&&He.skinning===!1||!Z.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ee||F.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==b.numPlanes||He.numIntersection!==b.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Ie||He.morphTargets!==Ne||He.morphNormals!==st||He.morphColors!==pr||He.toneMapping!==$r||Me.isWebGL2===!0&&He.morphTargetsCount!==Yn)&&(pt=!0):(pt=!0,He.__version=F.version);let wn=He.currentProgram;pt===!0&&(wn=Ra(F,B,Z));let Ri=!1,po=!1,Du=!1;const Bt=wn.getUniforms(),mr=He.uniforms;if(he.useProgram(wn.program)&&(Ri=!0,po=!0,Du=!0),F.id!==y&&(y=F.id,po=!0),Ri||w!==C){if(Bt.setValue($,"projectionMatrix",C.projectionMatrix),Me.logarithmicDepthBuffer&&Bt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,po=!0,Du=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const an=Bt.map.cameraPosition;an!==void 0&&an.setValue($,re.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Bt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Z.isSkinnedMesh)&&Bt.setValue($,"viewMatrix",C.matrixWorldInverse)}if(Z.isSkinnedMesh){Bt.setOptional($,Z,"bindMatrix"),Bt.setOptional($,Z,"bindMatrixInverse");const an=Z.skeleton;an&&(Me.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Bt.setValue($,"boneTexture",an.boneTexture,_e),Bt.setValue($,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Iu=q.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0&&Me.isWebGL2===!0)&&ee.update(Z,q,F,wn),(po||He.receiveShadow!==Z.receiveShadow)&&(He.receiveShadow=Z.receiveShadow,Bt.setValue($,"receiveShadow",Z.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(mr.envMap.value=Ee,mr.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),po&&(Bt.setValue($,"toneMappingExposure",h.toneMappingExposure),He.needsLights&&zv(mr,Du),xe&&F.fog===!0&&yn.refreshFogUniforms(mr,xe),yn.refreshMaterialUniforms(mr,F,U,P,O),Nl.upload($,He.uniformsList,mr,_e)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Nl.upload($,He.uniformsList,mr,_e),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Bt.setValue($,"center",Z.center),Bt.setValue($,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue($,"normalMatrix",Z.normalMatrix),Bt.setValue($,"modelMatrix",Z.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const an=F.uniformsGroups;for(let Nu=0,Vv=an.length;Nu<Vv;Nu++)if(Me.isWebGL2){const bh=an[Nu];fe.update(bh,wn),fe.bind(bh,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function zv(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Bv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,B,q){Te.get(C.texture).__webglTexture=B,Te.get(C.depthTexture).__webglTexture=q;const F=Te.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const q=Te.get(C);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,q=0){x=C,g=B,_=q;let F=!0;if(C){const Ee=Te.get(C);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?_e.setupRenderTarget(C):Ee.__hasExternalTextures&&_e.rebindTextures(C,Te.get(C.texture).__webglTexture,Te.get(C.depthTexture).__webglTexture)}let Z=null,xe=!1,be=!1;if(C){const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(be=!0);const Ge=Te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Z=Ge[B],xe=!0):Me.isWebGL2&&C.samples>0&&_e.useMultisampledRTT(C)===!1?Z=Te.get(C).__webglMultisampledFramebuffer:Z=Ge,M.copy(C.viewport),E.copy(C.scissor),S=C.scissorTest}else M.copy(D).multiplyScalar(U).floor(),E.copy(z).multiplyScalar(U).floor(),S=W;if(he.bindFramebuffer(36160,Z)&&Me.drawBuffers&&F&&he.drawBuffers(C,Z),he.viewport(M),he.scissor(E),he.setScissorTest(S),xe){const Ee=Te.get(C.texture);$.framebufferTexture2D(36160,36064,34069+B,Ee.__webglTexture,q)}else if(be){const Ee=Te.get(C.texture),Ge=B||0;$.framebufferTextureLayer(36160,36064,Ee.__webglTexture,q||0,Ge)}y=-1},this.readRenderTargetPixels=function(C,B,q,F,Z,xe,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){he.bindFramebuffer(36160,Ce);try{const Ee=C.texture,Ge=Ee.format,Ie=Ee.type;if(Ge!==Wt&&G.convert(Ge)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===An&&(we.has("EXT_color_buffer_half_float")||Me.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ie!==Vr&&G.convert(Ie)!==$.getParameter(35738)&&!(Ie===Bn&&(Me.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-F&&q>=0&&q<=C.height-Z&&$.readPixels(B,q,F,Z,G.convert(Ge),G.convert(Ie),xe)}finally{const Ee=x!==null?Te.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(C,B,q=0){const F=Math.pow(2,-q),Z=Math.floor(B.image.width*F),xe=Math.floor(B.image.height*F);_e.setTexture2D(B,0),$.copyTexSubImage2D(3553,q,0,0,C.x,C.y,Z,xe),he.unbindTexture()},this.copyTextureToTexture=function(C,B,q,F=0){const Z=B.image.width,xe=B.image.height,be=G.convert(q.format),Ce=G.convert(q.type);_e.setTexture2D(q,0),$.pixelStorei(37440,q.flipY),$.pixelStorei(37441,q.premultiplyAlpha),$.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?$.texSubImage2D(3553,F,C.x,C.y,Z,xe,be,Ce,B.image.data):B.isCompressedTexture?$.compressedTexSubImage2D(3553,F,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):$.texSubImage2D(3553,F,C.x,C.y,be,Ce,B.image),F===0&&q.generateMipmaps&&$.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(C,B,q,F,Z=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,Ee=G.convert(F.format),Ge=G.convert(F.type);let Ie;if(F.isData3DTexture)_e.setTexture3D(F,0),Ie=32879;else if(F.isDataArrayTexture)_e.setTexture2DArray(F,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,F.flipY),$.pixelStorei(37441,F.premultiplyAlpha),$.pixelStorei(3317,F.unpackAlignment);const Ne=$.getParameter(3314),st=$.getParameter(32878),pr=$.getParameter(3316),$r=$.getParameter(3315),Kr=$.getParameter(32877),Yn=q.isCompressedTexture?q.mipmaps[0]:q.image;$.pixelStorei(3314,Yn.width),$.pixelStorei(32878,Yn.height),$.pixelStorei(3316,C.min.x),$.pixelStorei(3315,C.min.y),$.pixelStorei(32877,C.min.z),q.isDataTexture||q.isData3DTexture?$.texSubImage3D(Ie,Z,B.x,B.y,B.z,xe,be,Ce,Ee,Ge,Yn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ie,Z,B.x,B.y,B.z,xe,be,Ce,Ee,Yn.data)):$.texSubImage3D(Ie,Z,B.x,B.y,B.z,xe,be,Ce,Ee,Ge,Yn),$.pixelStorei(3314,Ne),$.pixelStorei(32878,st),$.pixelStorei(3316,pr),$.pixelStorei(3315,$r),$.pixelStorei(32877,Kr),Z===0&&F.generateMipmaps&&$.generateMipmap(Ie),he.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?_e.setTextureCube(C,0):C.isData3DTexture?_e.setTexture3D(C,0):C.isDataArrayTexture?_e.setTexture2DArray(C,0):_e.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){g=0,_=0,x=null,he.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class dT extends hv{}dT.prototype.isWebGL1Renderer=!0;class fT extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class hT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new R;class lh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gm=new R,Wm=new je,jm=new je,pT=new R,Xm=new ke;class mT extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;Wm.fromBufferAttribute(r.attributes.skinIndex,e),jm.fromBufferAttribute(r.attributes.skinWeight,e),Gm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=jm.getComponent(s);if(o!==0){const a=Wm.getComponent(s);Xm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(pT.copy(Gm).applyMatrix4(Xm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pv extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class uh extends Yt{constructor(e=null,t=1,i=1,r,s,o,a,l,u=ft,f=ft,c,d){super(null,o,a,l,u,f,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ym=new ke,gT=new ke;class ch{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gT;Ym.multiplyMatrices(a,t[s]),Ym.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Z0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new uh(t,e,e,Wt,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pv),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class mv extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qm=new R,$m=new R,Km=new ke,Uc=new rh,pl=new oo;class dh extends at{constructor(e=new sn,t=new mv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)qm.fromBufferAttribute(t,r-1),$m.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=qm.distanceTo($m);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Km.copy(r).invert(),Uc.copy(e.ray).applyMatrix4(Km);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new R,f=new R,c=new R,d=new R,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const g=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let x=g,y=_-1;x<y;x+=p){const w=v.getX(x),M=v.getX(x+1);if(u.fromBufferAttribute(m,w),f.fromBufferAttribute(m,M),Uc.distanceSqToSegment(u,f,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=g,y=_-1;x<y;x+=p){if(u.fromBufferAttribute(m,x),f.fromBufferAttribute(m,x+1),Uc.distanceSqToSegment(u,f,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Zm=new R,Qm=new R;class _T extends dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Zm.fromBufferAttribute(t,r),Qm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Qm);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vT extends dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gv extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new ke,Yd=new rh,ml=new oo,gl=new R;class xT extends at{constructor(e=new sn,t=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;Jm.copy(r).invert(),Yd.copy(e.ray).applyMatrix4(Jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,h=p;v<h;v++){const m=u.getX(v);gl.fromBufferAttribute(c,m),eg(gl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,h=p;v<h;v++)gl.fromBufferAttribute(c,v),eg(gl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eg(n,e,t,i,r,s,o){const a=Yd.distanceSqToPoint(n);if(a<t){const l=new R;Yd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class fh extends sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],c=new R,d=new R,p=[],v=[],h=[],m=[];for(let g=0;g<=i;g++){const _=[],x=g/i;let y=0;g==0&&o==0?y=.5/t:g==i&&l==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const M=w/t;c.x=-e*Math.cos(r+M*s)*Math.sin(o+x*a),c.y=e*Math.cos(o+x*a),c.z=e*Math.sin(r+M*s)*Math.sin(o+x*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),h.push(d.x,d.y,d.z),m.push(M+y,1-x),_.push(u++)}f.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const x=f[g][_+1],y=f[g][_],w=f[g+1][_],M=f[g+1][_+1];(g!==0||o>0)&&p.push(x,y,M),(g!==i-1||l<Math.PI)&&p.push(y,w,M)}this.setIndex(p),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(m,2))}static fromJSON(e){return new fh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hh extends sn{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],f=[],c=new R,d=new R,p=new R,v=new R,h=new R,m=new R,g=new R;for(let x=0;x<=i;++x){const y=x/i*s*Math.PI*2;_(y,s,o,e,p),_(y+.01,s,o,e,v),m.subVectors(v,p),g.addVectors(v,p),h.crossVectors(m,g),g.crossVectors(h,m),h.normalize(),g.normalize();for(let w=0;w<=r;++w){const M=w/r*Math.PI*2,E=-t*Math.cos(M),S=t*Math.sin(M);c.x=p.x+(E*g.x+S*h.x),c.y=p.y+(E*g.y+S*h.y),c.z=p.z+(E*g.z+S*h.z),l.push(c.x,c.y,c.z),d.subVectors(c,p).normalize(),u.push(d.x,d.y,d.z),f.push(x/i),f.push(w/r)}}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){const w=(r+1)*(x-1)+(y-1),M=(r+1)*x+(y-1),E=(r+1)*x+y,S=(r+1)*(x-1)+y;a.push(w,M,S),a.push(M,E,S)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function _(x,y,w,M,E){const S=Math.cos(x),A=Math.sin(x),P=w/y*x,U=Math.cos(P);E.x=M*(2+U)*.5*S,E.y=M*(2+U)*A*.5,E.z=M*Math.sin(P)*.5}}static fromJSON(e){return new hh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Nr extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yr extends Nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zi(n,e,t){return _v(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function _l(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _v(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yT(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function tg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function vv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class La{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ST extends La{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:om,endingEnd:om}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case am:s=e,a=2*t-i;break;case lm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case am:o=e,l=2*i-t;break;case lm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(i-t)/(r-t),h=v*v,m=h*v,g=-d*m+2*d*h-d*v,_=(1+d)*m+(-1.5-2*d)*h+(-.5+d)*v+1,x=(-1-p)*m+(1.5+p)*h+.5*v,y=p*m-p*h;for(let w=0;w!==a;++w)s[w]=g*o[f+w]+_*o[u+w]+x*o[l+w]+y*o[c+w];return s}}class wT extends La{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=(i-t)/(r-t),c=1-f;for(let d=0;d!==a;++d)s[d]=o[u+d]*c+o[l+d]*f;return s}}class MT extends La{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_l(t,this.TimeBufferType),this.values=_l(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_l(e.times,Array),values:_l(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new MT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ST(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=zi(i,s,o),this.values=zi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_v(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=zi(this.times),t=zi(this.values),i=this.getValueSize(),r=this.getInterpolation()===dc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(r)l=!0;else{const c=a*i,d=c-i,p=c+i;for(let v=0;v!==i;++v){const h=t[c+v];if(h!==t[d+v]||h!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[c+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=zi(e,0,o),this.values=zi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=zi(this.times,0),t=zi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Zs;class uo extends ti{}uo.prototype.ValueTypeName="bool";uo.prototype.ValueBufferType=Array;uo.prototype.DefaultInterpolation=ma;uo.prototype.InterpolantFactoryMethodLinear=void 0;uo.prototype.InterpolantFactoryMethodSmooth=void 0;class xv extends ti{}xv.prototype.ValueTypeName="color";class va extends ti{}va.prototype.ValueTypeName="number";class bT extends La{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let f=u+a;u!==f;u+=4)Ai.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Hr extends ti{InterpolantFactoryMethodLinear(e){return new bT(this.times,this.values,this.getValueSize(),e)}}Hr.prototype.ValueTypeName="quaternion";Hr.prototype.DefaultInterpolation=Zs;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends ti{}co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=ma;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class xa extends ti{}xa.prototype.ValueTypeName="vector";class ET{constructor(e,t=-1,i,r=ZS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(AT(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const f=yT(l);l=tg(l,1,f),u=tg(u,1,f),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new va(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],f=u.name.match(s);if(f&&f.length>1){const c=f[1];let d=r[c];d||(r[c]=d=[]),d.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,p,v,h){if(p.length!==0){const m=[],g=[];vv(p,m,g,v),m.length!==0&&h.push(new c(d,m,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let c=0;c<u.length;c++){const d=u[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let h=0;h<d[v].morphTargets.length;h++)p[d[v].morphTargets[h]]=-1;for(const h in p){const m=[],g=[];for(let _=0;_!==d[v].morphTargets.length;++_){const x=d[v];m.push(x.time),g.push(x.morphTarget===h?1:0)}r.push(new va(".morphTargetInfluence["+h+"]",m,g))}l=p.length*o}else{const p=".bones["+t[c].name+"]";i(xa,p+".position",d,"pos",r),i(Hr,p+".quaternion",d,"rot",r),i(xa,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function TT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return va;case"vector":case"vector2":case"vector3":case"vector4":return xa;case"color":return xv;case"quaternion":return Hr;case"bool":case"boolean":return uo;case"string":return co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function AT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=TT(n.type);if(n.times===void 0){const t=[],i=[];vv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class yv{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,d=u.length;c<d;c+=2){const p=u[c],v=u[c+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null}}}const CT=new yv;class fo{constructor(e){this.manager=e!==void 0?e:CT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const li={};class LT extends Error{constructor(e,t){super(e),this.response=t}}class ph extends fo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Js.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:i,onError:r});return}li[e]=[],li[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=li[e],c=u.body.getReader(),d=u.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let h=0;const m=new ReadableStream({start(g){_();function _(){c.read().then(({done:x,value:y})=>{if(x)g.close();else{h+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:h,total:p});for(let M=0,E=f.length;M<E;M++){const S=f[M];S.onProgress&&S.onProgress(w)}g.enqueue(y),_()}})}}});return new Response(m)}else throw new LT(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{Js.add(e,u);const f=li[e];delete li[e];for(let c=0,d=f.length;c<d;c++){const p=f[c];p.onLoad&&p.onLoad(u)}}).catch(u=>{const f=li[e];if(f===void 0)throw this.manager.itemError(e),u;delete li[e];for(let c=0,d=f.length;c<d;c++){const p=f[c];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RT extends fo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_a("img");function l(){f(),Js.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(c){f(),r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class PT extends fo{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new uh,a=new ph(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const u=s.parse(l);!u||(u.image!==void 0?o.image=u.image:u.data!==void 0&&(o.image.width=u.width,o.image.height=u.height,o.image.data=u.data),o.wrapS=u.wrapS!==void 0?u.wrapS:Jt,o.wrapT=u.wrapT!==void 0?u.wrapT:Jt,o.magFilter=u.magFilter!==void 0?u.magFilter:et,o.minFilter=u.minFilter!==void 0?u.minFilter:et,o.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.encoding!==void 0&&(o.encoding=u.encoding),u.flipY!==void 0&&(o.flipY=u.flipY),u.format!==void 0&&(o.format=u.format),u.type!==void 0&&(o.type=u.type),u.mipmaps!==void 0&&(o.mipmaps=u.mipmaps,o.minFilter=jr),u.mipmapCount===1&&(o.minFilter=et),u.generateMipmaps!==void 0&&(o.generateMipmaps=u.generateMipmaps),o.needsUpdate=!0,t&&t(o,u))},i,r),o}}class DT extends fo{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new RT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class mh extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ng=new ke,ig=new R,rg=new R;class gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ig.setFromMatrixPosition(e.matrixWorld),t.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rg),t.updateMatrixWorld(),ng.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class IT extends gh{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ga*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class NT extends mh{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DefaultUp),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new IT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sg=new ke,Ao=new R,zc=new R;class OT extends gh{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),zc.copy(i.position),zc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zc),i.updateMatrixWorld(),r.makeTranslation(-Ao.x,-Ao.y,-Ao.z),sg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sg)}}class kT extends mh{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new OT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FT extends gh{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sv extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DefaultUp),this.updateMatrix(),this.target=new at,this.shadow=new FT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Or{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class UT extends fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Js.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Js.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class zT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=og(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=og();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function og(){return(typeof performance>"u"?Date:performance).now()}const _h="\\[\\]\\.:\\/",BT=new RegExp("["+_h+"]","g"),vh="[^"+_h+"]",VT="[^"+_h.replace("\\.","")+"]",HT=/((?:WC+[\/:])*)/.source.replace("WC",vh),GT=/(WCOD+)?/.source.replace("WCOD",VT),WT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),jT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),XT=new RegExp("^"+HT+GT+WT+jT+"$"),YT=["material","materials","bones","map"];class qT{constructor(e,t,i){const r=i||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class We{constructor(e,t,i){this.path=t,this.parsedPath=i||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,i):new We(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BT,"")}static parseTrackName(e){const t=XT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);YT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=qT;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ag{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pi=$T();function $T(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):u<-14?(i[l]=1024>>-u-14,i[l|256]=1024>>-u-14|32768,r[l]=-u-1,r[l|256]=-u-1):u<=15?(i[l]=u+15<<10,i[l|256]=u+15<<10|32768,r[l]=13,r[l|256]=13):u<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,f=0;for(;(u&8388608)===0;)u<<=1,f-=8388608;u&=-8388609,f+=947912704,s[l]=u|f}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function KT(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Lt(n,-65504,65504),pi.floatView[0]=n;const e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function ZT(n){const e=n>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(n&1023)]+pi.exponentTable[e],pi.floatView[0]}var vl=Object.freeze({__proto__:null,toHalfFloat:KT,fromHalfFloat:ZT});class lg extends ao{constructor(e,t,i,r,s,o){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,i,r,s,o)}}class QT extends fh{constructor(e,t,i,r,s,o,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,i,r,s,o,a)}}class JT extends hh{constructor(e,t,i,r,s,o){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,i,r,s,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);class eA extends fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new pA(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Or.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ph(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={};if(typeof e=="string")s=e;else if(Or.decodeText(new Uint8Array(e,0,4))===wv){try{o[Re.KHR_BINARY_GLTF]=new mA(e)}catch(c){r&&r(c);return}s=o[Re.KHR_BINARY_GLTF].content}else s=Or.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new CA(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const c=this.pluginCallbacks[f](u);a[c.name]=c,o[c.name]=!0}if(l.extensionsUsed)for(let f=0;f<l.extensionsUsed.length;++f){const c=l.extensionsUsed[f],d=l.extensionsRequired||[];switch(c){case Re.KHR_MATERIALS_UNLIT:o[c]=new iA;break;case Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[c]=new vA;break;case Re.KHR_DRACO_MESH_COMPRESSION:o[c]=new gA(l,this.dracoLoader);break;case Re.KHR_TEXTURE_TRANSFORM:o[c]=new _A;break;case Re.KHR_MESH_QUANTIZATION:o[c]=new xA;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function tA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class nA{constructor(e){this.parser=e,this.name=Re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const f=new ve(16777215);l.color!==void 0&&f.fromArray(l.color);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Sv(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new kT(f),u.distance=c;break;case"spot":u=new NT(f),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class iA{constructor(){this.name=Re.KHR_MATERIALS_UNLIT}getMaterialType(){return qi}extendParams(e,t,i){const r=[];e.color=new ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,ze))}return Promise.all(r)}}class rA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class sA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(s)}}class oA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class aA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ze)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class lA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class uA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve(a[0],a[1],a[2]),Promise.all(s)}}class cA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class dA{constructor(e){this.parser=e,this.name=Re.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ze)),Promise.all(s)}}class fA{constructor(e){this.parser=e,this.name=Re.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class hA{constructor(e){this.parser=e,this.name=Re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pA{constructor(e){this.name=Re.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,f=r.count,c=r.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,c,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(f*c);return o.decodeGltfBuffer(new Uint8Array(p),f,c,d,r.mode,r.filter),p})})}else return null}}const wv="glTF",Co=12,ug={JSON:1313821514,BIN:5130562};class mA{constructor(e){this.name=Re.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Co);if(this.header={magic:Or.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Co,r=new DataView(e,Co);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===ug.JSON){const l=new Uint8Array(e,Co+s,o);this.content=Or.decodeText(l)}else if(a===ug.BIN){const l=Co+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Re.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const f in o){const c=$d[f]||f.toLowerCase();a[c]=o[f]}for(const f in e.attributes){const c=$d[f]||f.toLowerCase();if(o[f]!==void 0){const d=i.accessors[e.attributes[f]],p=ya[d.componentType];u[c]=p.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(c){r.decodeDracoFile(f,function(d){for(const p in d.attributes){const v=d.attributes[p],h=l[p];h!==void 0&&(v.normalized=h)}c(d)},a,u)})})}}class _A{constructor(){this.name=Re.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qd extends Nr{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new ve().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const u in a)l.uniforms[u]=a[u];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class vA{constructor(){this.name=Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return qd}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new ve(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const o=r.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(r.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",r.diffuseTexture,ze)),e.emissive=new ve(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new ve(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const o=r.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",o)),s.push(i.assignTexture(e,"specularMap",o,ze))}return Promise.all(s)}createMaterial(e){const t=new qd(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=th,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class xA{constructor(){this.name=Re.KHR_MESH_QUANTIZATION}}class Mv extends La{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,f=r-t,c=(i-t)/f,d=c*c,p=d*c,v=e*u,h=v-u,m=-2*p+3*d,g=p-d,_=1-m,x=g-d+c;for(let y=0;y!==a;y++){const w=o[h+y+a],M=o[h+y+l]*f,E=o[v+y+a],S=o[v+y]*f;s[y]=_*w+x*M+m*E+g*S}return s}}const yA=new Ai;class SA extends Mv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return yA.fromArray(s).normalize().toArray(s),s}}const ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ya={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cg={9728:ft,9729:et,9984:Bd,9985:q0,9986:Vd,9987:jr},dg={33071:Jt,33648:ou,10497:ar},fg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wA={CUBICSPLINE:void 0,LINEAR:Zs,STEP:ma},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),n.DefaultMaterial}function Lo(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bA(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,f=e.length;u<f;u++){const c=e[u];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(r=!0),c.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,f=e.length;u<f;u++){const c=e[u];if(i){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;o.push(d)}if(r){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const f=u[0],c=u[1],d=u[2];return i&&(n.morphAttributes.position=f),r&&(n.morphAttributes.normal=c),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function EA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TA(n){const e=n.extensions&&n.extensions[Re.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+hg(e.attributes):t=n.indices+":"+hg(n.attributes)+":"+n.mode,t}function hg(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Kd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class CA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tA,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new DT(this.options.manager):this.textureLoader=new UT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};Lo(s,a,r),Mr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,f]of o.children.entries())s(f,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Re.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Or.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=fg[r.type],u=ya[r.componentType],f=u.BYTES_PER_ELEMENT,c=f*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let h,m;if(p&&p!==c){const g=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let x=t.cache.get(_);x||(h=new u(a,g*p,r.count*p/f),x=new hT(h,p/f),t.cache.add(_,x)),m=new lh(x,l,d%p/f,v)}else a===null?h=new u(r.count*l):h=new u(a,d,r.count*l),m=new mn(h,l,v);if(r.sparse!==void 0){const g=fg.SCALAR,_=ya[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,w=new _(o[1],x,r.sparse.count*g),M=new u(o[2],y,r.sparse.count*l);a!==null&&(m=new mn(m.array.slice(),m.itemSize,m.normalized));for(let E=0,S=w.length;E<S;E++){const A=w[E];if(m.setX(A,M[E*l]),l>=2&&m.setY(A,M[E*l+1]),l>=3&&m.setZ(A,M[E*l+2]),l>=4&&m.setW(A,M[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(f){f.flipY=!1,o.name&&(f.name=o.name);const d=(s.samplers||{})[o.sampler]||{};return f.magFilter=cg[d.magFilter]||et,f.minFilter=cg[d.minFilter]||jr,f.wrapS=dg[d.wrapS]||ar,f.wrapT=dg[d.wrapT]||ar,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(c){u=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(c){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(h){const m=new Yt(h);m.needsUpdate=!0,d(m)}),t.load(Or.resolveURL(c,s.path),v,void 0,p)})}).then(function(c){return u===!0&&a.revokeObjectURL(l),c.userData.mimeType=o.mimeType||AA(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=f,f}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[Re.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Re.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new gv,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new mv,ei.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Nr}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const c=r[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=c.getMaterialType(),u.push(c.extendParams(a,s,t))}else if(l[Re.KHR_MATERIALS_UNLIT]){const c=r[Re.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),u.push(c.extendParams(a,s,t))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}c.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",c.baseColorTexture,ze)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=_i);const f=s.alphaMode||Bc.OPAQUE;if(f===Bc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===Bc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==qi&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}return s.occlusionTexture!==void 0&&o!==qi&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==qi&&(a.emissive=new ve().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==qi&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ze)),Promise.all(u).then(function(){let c;return o===qd?c=r[Re.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):c=new o(a),s.name&&(c.name=s.name),Mr(c,s),t.associations.set(c,{materials:e}),s.extensions&&Lo(r,c,s),c})}createUniqueName(e){const t=We.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],f=TA(u),c=r[f];if(c)o.push(c.promise);else{let d;u.extensions&&u.extensions[Re.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=pg(new sn,u,t),r[f]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const f=o[l].material===void 0?MA(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),f=l[l.length-1],c=[];for(let p=0,v=f.length;p<v;p++){const h=f[p],m=o[p];let g;const _=u[p];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new mT(h,_):new Ft(h,_),g.isSkinnedMesh===!0&&!g.geometry.attributes.skinWeight.normalized&&g.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?g.geometry=mg(g.geometry,QS):m.mode===ui.TRIANGLE_FAN&&(g.geometry=mg(g.geometry,K0));else if(m.mode===ui.LINES)g=new _T(h,_);else if(m.mode===ui.LINE_STRIP)g=new dh(h,_);else if(m.mode===ui.LINE_LOOP)g=new vT(h,_);else if(m.mode===ui.POINTS)g=new xT(h,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&EA(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Mr(g,s),m.extensions&&Lo(r,g,m),t.assignFinalMaterial(g),c.push(g)}for(let p=0,v=c.length;p<v;p++)t.associations.set(c[p],{meshes:e,primitives:p});if(c.length===1)return c[0];const d=new $i;t.associations.set(d,{meshes:e});for(let p=0,v=c.length;p<v;p++)d.add(c[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(ih.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ca(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const i=this.json.animations[e],r=[],s=[],o=[],a=[],l=[];for(let u=0,f=i.channels.length;u<f;u++){const c=i.channels[u],d=i.samplers[c.sampler],p=c.target,v=p.node,h=i.parameters!==void 0?i.parameters[d.input]:d.input,m=i.parameters!==void 0?i.parameters[d.output]:d.output;r.push(this.getDependency("node",v)),s.push(this.getDependency("accessor",h)),o.push(this.getDependency("accessor",m)),a.push(d),l.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const f=u[0],c=u[1],d=u[2],p=u[3],v=u[4],h=[];for(let g=0,_=f.length;g<_;g++){const x=f[g],y=c[g],w=d[g],M=p[g],E=v[g];if(x===void 0)continue;x.updateMatrix();let S;switch(Bi[E.path]){case Bi.weights:S=va;break;case Bi.rotation:S=Hr;break;case Bi.position:case Bi.scale:default:S=xa;break}const A=x.name?x.name:x.uuid,P=M.interpolation!==void 0?wA[M.interpolation]:Zs,U=[];Bi[E.path]===Bi.weights?x.traverse(function(H){H.morphTargetInfluences&&U.push(H.name?H.name:H.uuid)}):U.push(A);let te=w.array;if(w.normalized){const H=Kd(te.constructor),D=new Float32Array(te.length);for(let z=0,W=te.length;z<W;z++)D[z]=te[z]*H;te=D}for(let H=0,D=U.length;H<D;H++){const z=new S(U[H]+"."+Bi[E.path],y.array,te,P);M.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(X){const N=this instanceof Hr?SA:Mv;return new N(this.times,this.values,this.getValueSize()/3,X)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(z)}}const m=i.name?i.name:"animation_"+e;return new ET(m,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new pv:a.length>1?l=new $i:a.length===1?l=a[0]:l=new at,l!==a[0])for(let u=0,f=a.length;u<f;u++)l.add(a[u]);if(s.name&&(l.userData.name=s.name,l.name=o),Mr(l,s),s.extensions&&Lo(i,l,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],s=this,o=new $i;r.name&&(o.name=s.createUniqueName(r.name)),Mr(o,r),r.extensions&&Lo(i,o,r);const a=r.nodes||[],l=[];for(let u=0,f=a.length;u<f;u++)l.push(bv(a[u],o,t,s));return Promise.all(l).then(function(){const u=f=>{const c=new Map;for(const[d,p]of s.associations)(d instanceof ei||d instanceof Yt)&&c.set(d,p);return f.traverse(d=>{const p=s.associations.get(d);p!=null&&c.set(d,p)}),c};return s.associations=u(o),o})}}function bv(n,e,t,i){const r=t.nodes[n];return i.getDependency("node",n).then(function(s){if(r.skin===void 0)return s;let o;return i.getDependency("skin",r.skin).then(function(a){o=a;const l=[];for(let u=0,f=o.joints.length;u<f;u++)l.push(i.getDependency("node",o.joints[u]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const u=[],f=[];for(let c=0,d=a.length;c<d;c++){const p=a[c];if(p){u.push(p);const v=new ke;o.inverseBindMatrices!==void 0&&v.fromArray(o.inverseBindMatrices.array,c*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[c])}l.bind(new ch(u,f),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let l=0,u=a.length;l<u;l++){const f=a[l];o.push(bv(f,s,t,i))}}return Promise.all(o)})}function LA(n,e,t){const i=e.attributes,r=new so;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(u[0],u[1],u[2])),a.normalized){const f=Kd(ya[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new R,l=new R;for(let u=0,f=s.length;u<f;u++){const c=s[u];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const h=Kd(ya[d.componentType]);l.multiplyScalar(h)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new oo;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function pg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=$d[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Mr(n,e),LA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?bA(n,e.targets,t):n})}function mg(n,e){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===K0)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s}const gg={type:"change"},Vc={type:"start"},Hc={type:"end"};class RA extends Xr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Be),this._domElementKeyEvents=T},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gg),i.update(),s=r.NONE},this.update=function(){const T=new R,j=new Ai().setFromUnitVectors(e.up,new R(0,1,0)),ee=j.clone().invert(),ie=new R,ye=new Ai,G=2*Math.PI;return function(){const fe=i.object.position;T.copy(fe).sub(i.target),T.applyQuaternion(j),a.setFromVector3(T),i.autoRotate&&s===r.NONE&&E(w()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=i.minAzimuthAngle,oe=i.maxAzimuthAngle;return isFinite(pe)&&isFinite(oe)&&(pe<-Math.PI?pe+=G:pe>Math.PI&&(pe-=G),oe<-Math.PI?oe+=G:oe>Math.PI&&(oe-=G),pe<=oe?a.theta=Math.max(pe,Math.min(oe,a.theta)):a.theta=a.theta>(pe+oe)/2?Math.max(pe,a.theta):Math.min(oe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),T.setFromSpherical(a),T.applyQuaternion(ee),fe.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),u=1,c||ie.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o?(i.dispatchEvent(gg),ie.copy(i.object.position),ye.copy(i.object.quaternion),c=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",b),i.domElement.removeEventListener("pointerdown",Te),i.domElement.removeEventListener("wheel",ht),i.domElement.removeEventListener("touchstart",yn),i.domElement.removeEventListener("touchend",L),i.domElement.removeEventListener("touchmove",on),i.domElement.ownerDocument.removeEventListener("pointermove",_e),i.domElement.ownerDocument.removeEventListener("pointerup",lt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Be)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ag,l=new ag;let u=1;const f=new R;let c=!1;const d=new me,p=new me,v=new me,h=new me,m=new me,g=new me,_=new me,x=new me,y=new me;function w(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function E(T){l.theta-=T}function S(T){l.phi-=T}this.rotateLeft=E,this.rotateUp=S;const A=function(){const T=new R;return function(ee,ie){T.setFromMatrixColumn(ie,0),T.multiplyScalar(-ee),f.add(T)}}(),P=function(){const T=new R;return function(ee,ie){i.screenSpacePanning===!0?T.setFromMatrixColumn(ie,1):(T.setFromMatrixColumn(ie,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(ee),f.add(T)}}(),U=function(){const T=new R;return function(ee,ie){const ye=i.domElement;if(i.object.isPerspectiveCamera){const G=i.object.position;T.copy(G).sub(i.target);let ge=T.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),A(2*ee*ge/ye.clientHeight,i.object.matrix),P(2*ie*ge/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(A(ee*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),P(ie*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(T){i.object.isPerspectiveCamera?u/=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*T)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(T){i.object.isPerspectiveCamera?u*=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/T)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(T){d.set(T.clientX,T.clientY)}function z(T){_.set(T.clientX,T.clientY)}function W(T){h.set(T.clientX,T.clientY)}function X(T){p.set(T.clientX,T.clientY),v.subVectors(p,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;E(2*Math.PI*v.x/j.clientHeight),S(2*Math.PI*v.y/j.clientHeight),d.copy(p),i.update()}function N(T){x.set(T.clientX,T.clientY),y.subVectors(x,_),y.y>0?te(M()):y.y<0&&H(M()),_.copy(x),i.update()}function I(T){m.set(T.clientX,T.clientY),g.subVectors(m,h).multiplyScalar(i.panSpeed),U(g.x,g.y),h.copy(m),i.update()}function O(T){T.deltaY<0?H(M()):T.deltaY>0&&te(M()),i.update()}function J(T){let j=!1;switch(T.code){case i.keys.UP:U(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:U(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:U(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:U(-i.keyPanSpeed,0),j=!0;break}j&&(T.preventDefault(),i.update())}function K(T){if(T.touches.length==1)d.set(T.touches[0].pageX,T.touches[0].pageY);else{const j=.5*(T.touches[0].pageX+T.touches[1].pageX),ee=.5*(T.touches[0].pageY+T.touches[1].pageY);d.set(j,ee)}}function re(T){if(T.touches.length==1)h.set(T.touches[0].pageX,T.touches[0].pageY);else{const j=.5*(T.touches[0].pageX+T.touches[1].pageX),ee=.5*(T.touches[0].pageY+T.touches[1].pageY);h.set(j,ee)}}function ae(T){const j=T.touches[0].pageX-T.touches[1].pageX,ee=T.touches[0].pageY-T.touches[1].pageY,ie=Math.sqrt(j*j+ee*ee);_.set(0,ie)}function Se(T){i.enableZoom&&ae(T),i.enablePan&&re(T)}function $(T){i.enableZoom&&ae(T),i.enableRotate&&K(T)}function Pe(T){if(T.touches.length==1)p.set(T.touches[0].pageX,T.touches[0].pageY);else{const ee=.5*(T.touches[0].pageX+T.touches[1].pageX),ie=.5*(T.touches[0].pageY+T.touches[1].pageY);p.set(ee,ie)}v.subVectors(p,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;E(2*Math.PI*v.x/j.clientHeight),S(2*Math.PI*v.y/j.clientHeight),d.copy(p)}function we(T){if(T.touches.length==1)m.set(T.touches[0].pageX,T.touches[0].pageY);else{const j=.5*(T.touches[0].pageX+T.touches[1].pageX),ee=.5*(T.touches[0].pageY+T.touches[1].pageY);m.set(j,ee)}g.subVectors(m,h).multiplyScalar(i.panSpeed),U(g.x,g.y),h.copy(m)}function Me(T){const j=T.touches[0].pageX-T.touches[1].pageX,ee=T.touches[0].pageY-T.touches[1].pageY,ie=Math.sqrt(j*j+ee*ee);x.set(0,ie),y.set(0,Math.pow(x.y/_.y,i.zoomSpeed)),te(y.y),_.copy(x)}function he(T){i.enableZoom&&Me(T),i.enablePan&&we(T)}function Ye(T){i.enableZoom&&Me(T),i.enableRotate&&Pe(T)}function Te(T){if(i.enabled!==!1)switch(T.pointerType){case"mouse":case"pen":zt(T);break}}function _e(T){if(i.enabled!==!1)switch(T.pointerType){case"mouse":case"pen":At(T);break}}function lt(T){switch(T.pointerType){case"mouse":case"pen":xn();break}}function zt(T){T.preventDefault(),i.domElement.focus?i.domElement.focus():window.focus();let j;switch(T.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Jr.DOLLY:if(i.enableZoom===!1)return;z(T),s=r.DOLLY;break;case Jr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;W(T),s=r.PAN}else{if(i.enableRotate===!1)return;D(T),s=r.ROTATE}break;case Jr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;D(T),s=r.ROTATE}else{if(i.enablePan===!1)return;W(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&(i.domElement.ownerDocument.addEventListener("pointermove",_e),i.domElement.ownerDocument.addEventListener("pointerup",lt),i.dispatchEvent(Vc))}function At(T){if(i.enabled!==!1)switch(T.preventDefault(),s){case r.ROTATE:if(i.enableRotate===!1)return;X(T);break;case r.DOLLY:if(i.enableZoom===!1)return;N(T);break;case r.PAN:if(i.enablePan===!1)return;I(T);break}}function xn(T){i.domElement.ownerDocument.removeEventListener("pointermove",_e),i.domElement.ownerDocument.removeEventListener("pointerup",lt),i.enabled!==!1&&(i.dispatchEvent(Hc),s=r.NONE)}function ht(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE&&s!==r.ROTATE||(T.preventDefault(),i.dispatchEvent(Vc),O(T),i.dispatchEvent(Hc))}function Be(T){i.enabled===!1||i.enablePan===!1||J(T)}function yn(T){if(i.enabled!==!1){switch(T.preventDefault(),T.touches.length){case 1:switch(i.touches.ONE){case Gi.ROTATE:if(i.enableRotate===!1)return;K(T),s=r.TOUCH_ROTATE;break;case Gi.PAN:if(i.enablePan===!1)return;re(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Gi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(T),s=r.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vc)}}function on(T){if(i.enabled!==!1)switch(T.preventDefault(),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pe(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;we(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(T),i.update();break;default:s=r.NONE}}function L(T){i.enabled!==!1&&(i.dispatchEvent(Hc),s=r.NONE)}function b(T){i.enabled!==!1&&T.preventDefault()}i.domElement.addEventListener("contextmenu",b),i.domElement.addEventListener("pointerdown",Te),i.domElement.addEventListener("wheel",ht,{passive:!1}),i.domElement.addEventListener("touchstart",yn,{passive:!1}),i.domElement.addEventListener("touchend",L),i.domElement.addEventListener("touchmove",on,{passive:!1}),this.update()}}class PA{constructor(e,t){t=Object.assign({size:90,padding:8,bubbleSizePrimary:8,bubbleSizeSecondary:6,lineWidth:2,fontSize:"12px",fontFamily:"arial",fontWeight:"bold",color:"#222222",className:"obit-controls-gizmo",colors:{x:["#f73c3c","#942424"],y:["#6ccb26","#417a17"],z:["#178cf0","#0e5490"]}},t),this.lock=!1,this.lockX=!1,this.lockY=!1,this.update=()=>{if(!this.lock){s.updateMatrix(),o.extractRotation(s.matrix).invert();for(let D=0,z=d.length;D<z;D++)H(d[D],o);d.sort((D,z)=>D.position.z>z.position.z?1:-1),te(!0)}},this.dispose=()=>{r.removeEventListener("change",this.update),r.removeEventListener("start",()=>this.domElement.classList.add("inactive")),r.removeEventListener("end",()=>this.domElement.classList.remove("inactive")),this.domElement.removeEventListener("pointerdown",y,!1),this.domElement.removeEventListener("pointerenter",M,!1),this.domElement.removeEventListener("pointermove",E,!1),this.domElement.removeEventListener("click",A,!1),window.removeEventListener("pointermove",S,!1),window.removeEventListener("pointerup",w,!1),this.domElement.remove()};const i=this,r=e,s=e.object,o=new ke,a=new R,l=new me,u=new me,f=new me,c=new R(t.size/2,t.size/2,0),d=_();let p=null,v=!1,h,m,g;r.addEventListener("change",this.update),r.addEventListener("start",()=>this.domElement.classList.add("inactive")),r.addEventListener("end",()=>this.domElement.classList.remove("inactive"));function _(){const D=t.colors,z=t.lineWidth,W={primary:t.bubbleSizePrimary,secondary:t.bubbleSizeSecondary};return[{axis:"x",direction:new R(1,0,0),size:W.primary,color:D.x,line:z,label:"X",position:new R(0,0,0)},{axis:"y",direction:new R(0,1,0),size:W.primary,color:D.y,line:z,label:"Y",position:new R(0,0,0)},{axis:"z",direction:new R(0,0,1),size:W.primary,color:D.z,line:z,label:"Z",position:new R(0,0,0)},{axis:"-x",direction:new R(-1,0,0),size:W.secondary,color:D.x,position:new R(0,0,0)},{axis:"-y",direction:new R(0,-1,0),size:W.secondary,color:D.y,position:new R(0,0,0)},{axis:"-z",direction:new R(0,0,-1),size:W.secondary,color:D.z,position:new R(0,0,0)}]}function x(){const D=document.createElement("canvas");return D.width=t.size,D.height=t.size,D.classList.add(t.className),D.addEventListener("pointerdown",y,!1),D.addEventListener("pointerenter",M,!1),D.addEventListener("pointermove",E,!1),D.addEventListener("click",A,!1),h=D.getContext("2d"),D}function y(D){l.set(D.clientX,D.clientY),g=r.enabled,r.enabled=!1,window.addEventListener("pointermove",S,!1),window.addEventListener("pointerup",w,!1)}function w(){setTimeout(()=>v=!1,0),i.domElement.classList.remove("dragging"),r.enabled=g,window.removeEventListener("pointermove",S,!1),window.removeEventListener("pointerup",w,!1)}function M(){m=i.domElement.getBoundingClientRect()}function E(D){if(v||i.lock)return;const z=p;p=null,D&&a.set(D.clientX-m.left,D.clientY-m.top,0);for(let W=0,X=d.length;W<X;W++)a.distanceTo(d[W].position)<d[W].size&&(p=d[W]);z!==p&&te()}function S(D){i.lock||(v||i.domElement.classList.add("dragging"),v=!0,p=null,u.set(D.clientX,D.clientY),f.subVectors(u,l).multiplyScalar(.5),i.lockX||r.rotateLeft(2*Math.PI*f.x/i.domElement.height),i.lockY||r.rotateUp(2*Math.PI*f.y/i.domElement.height),l.copy(u),r.update())}function A(){if(v||!p)return;const D=p.direction.clone(),z=s.position.distanceTo(r.target);D.multiplyScalar(z);const W=400,X=performance.now(),N=1;function I(){const J=performance.now()-X,K=Math.min(J/W,N);if(s.position.lerp(D,K),r.update(),K!==N)return requestAnimationFrame(I);E()}I(),p=null}function P(D,z=10,W="#FF0000"){h.beginPath(),h.arc(D.x,D.y,z,0,2*Math.PI,!1),h.fillStyle=W,h.fill(),h.closePath()}function U(D,z,W=1,X="#FF0000"){h.beginPath(),h.moveTo(D.x,D.y),h.lineTo(z.x,z.y),h.lineWidth=W,h.strokeStyle=X,h.stroke(),h.closePath()}function te(D){D&&h.clearRect(0,0,i.domElement.width,i.domElement.height);for(let z=0,W=d.length;z<W;z++){const X=d[z],N=p===X,I=X.position.z>=-.01?X.color[0]:X.color[1];X.line&&U(c,X.position,X.line,I),P(X.position,X.size,N?"#FFFFFF":I),X.label&&(h.font=[t.fontWeight,t.fontSize,t.fontFamily].join(" "),h.fillStyle=t.color,h.textBaseline="middle",h.textAlign="center",h.fillText(X.label,X.position.x,X.position.y))}}function H(D){const z=D.direction.clone().applyMatrix4(o),W=D.size;D.position.set(z.x*(c.x-W/2-t.padding)+c.x,c.y-z.y*(c.y-W/2-t.padding),z.z)}this.domElement=x(),this.update()}}class DA extends PT{constructor(e){super(e),this.type=An}parse(e){const a=function(x,y){switch(x){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},c=`
`,d=function(x,y,w){y=y||1024;let E=x.pos,S=-1,A=0,P="",U=String.fromCharCode.apply(null,new Uint16Array(x.subarray(E,E+128)));for(;0>(S=U.indexOf(c))&&A<y&&E<x.byteLength;)P+=U,A+=U.length,E+=128,U+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(E,E+128)));return-1<S?(w!==!1&&(x.pos+=A+S+1),P+U.slice(0,S)):!1},p=function(x){const y=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,S=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,A={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,U;if(x.pos>=x.byteLength||!(P=d(x)))return a(1,"no header found");if(!(U=P.match(y)))return a(3,"bad initial token");for(A.valid|=1,A.programtype=U[1],A.string+=P+`
`;P=d(x),P!==!1;){if(A.string+=P+`
`,P.charAt(0)==="#"){A.comments+=P+`
`;continue}if((U=P.match(w))&&(A.gamma=parseFloat(U[1])),(U=P.match(M))&&(A.exposure=parseFloat(U[1])),(U=P.match(E))&&(A.valid|=2,A.format=U[1]),(U=P.match(S))&&(A.valid|=4,A.height=parseInt(U[1],10),A.width=parseInt(U[2],10)),A.valid&2&&A.valid&4)break}return A.valid&2?A.valid&4?A:a(3,"missing image size specifier"):a(3,"missing format specifier")},v=function(x,y,w){const M=y;if(M<8||M>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);if(M!==(x[2]<<8|x[3]))return a(3,"wrong scanline width");const E=new Uint8Array(4*y*w);if(!E.length)return a(4,"unable to allocate buffer space");let S=0,A=0;const P=4*M,U=new Uint8Array(4),te=new Uint8Array(P);let H=w;for(;H>0&&A<x.byteLength;){if(A+4>x.byteLength)return a(1);if(U[0]=x[A++],U[1]=x[A++],U[2]=x[A++],U[3]=x[A++],U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=M)return a(3,"bad rgbe scanline format");let D=0,z;for(;D<P&&A<x.byteLength;){z=x[A++];const X=z>128;if(X&&(z-=128),z===0||D+z>P)return a(3,"bad scanline data");if(X){const N=x[A++];for(let I=0;I<z;I++)te[D++]=N}else te.set(x.subarray(A,A+z),D),D+=z,A+=z}const W=M;for(let X=0;X<W;X++){let N=0;E[S]=te[X+N],N+=M,E[S+1]=te[X+N],N+=M,E[S+2]=te[X+N],N+=M,E[S+3]=te[X+N],S+=4}H--}return E},h=function(x,y,w,M){const E=x[y+3],S=Math.pow(2,E-128)/255;w[M+0]=x[y+0]*S,w[M+1]=x[y+1]*S,w[M+2]=x[y+2]*S,w[M+3]=1},m=function(x,y,w,M){const E=x[y+3],S=Math.pow(2,E-128)/255;w[M+0]=vl.toHalfFloat(Math.min(x[y+0]*S,65504)),w[M+1]=vl.toHalfFloat(Math.min(x[y+1]*S,65504)),w[M+2]=vl.toHalfFloat(Math.min(x[y+2]*S,65504)),w[M+3]=vl.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const _=p(g);if(_!==-1){const x=_.width,y=_.height,w=v(g.subarray(g.pos),x,y);if(w!==-1){let M,E,S;switch(this.type){case Bn:S=w.length/4;const A=new Float32Array(S*4);for(let U=0;U<S;U++)h(w,U*4,A,U*4);M=A,E=Bn;break;case An:S=w.length/4;const P=new Uint16Array(S*4);for(let U=0;U<S;U++)m(w,U*4,P,U*4);M=P,E=An;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:x,height:y,data:M,header:_.string,gamma:_.gamma,exposure:_.exposure,type:E}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(o,a){switch(o.type){case Bn:case An:o.encoding=Ti,o.minFilter=et,o.magFilter=et,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,i,r)}}const IA=(n,e,t,i)=>{const r=new jd(e);r.compileEquirectangularShader(),new DA(i).setDataType(An).load(n,s=>{var o=r.fromEquirectangular(s).texture;s.minFilter=et,s.magFilter=et,s.mapping=su,s.format=eh,s.needsUpdate=!0,t.environment=o,s.dispose(),r.dispose()})},uu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ho{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const NA=new Ca(-1,1,1,-1,0,1),xh=new sn;xh.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));xh.setAttribute("uv",new yt([0,2,0,0,2,0],2));class Rs{constructor(e){this._mesh=new Ft(xh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ps extends ho{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lu.clone(e.uniforms),this.material=new bt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class _g extends ho{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class OA extends ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kA{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new me);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],uu===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ps===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ps(uu),this.clock=new zT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_g!==void 0&&(o instanceof _g?i=!0:o instanceof OA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Ca(-1,1,1,-1,0,1);const Ev=new sn;Ev.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));Ev.setAttribute("uv",new yt([0,2,0,0,2,0],2));class FA extends ho{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const vg={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class eo extends ho{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new Xt(s,o);d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Xt(s,o);p.texture.name="UnrealBloomPass.v"+c,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}vg===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=vg;this.highPassUniforms=lu.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.texSize.value=new me(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,uu===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const f=uu;this.copyUniforms=lu.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new bt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Fd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new qi,this.fsQuad=new Rs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new me(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=eo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=eo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new bt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}eo.BlurDirectionX=new me(1,0);eo.BlurDirectionY=new me(0,1);const UA={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`},zA={uniforms:{tDiffuse:{value:null},intensity:{value:.075},noiseOffset:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		// 0: Addition, 1: Screen, 2: Overlay, 3: Soft Light, 4: Lighten-Only
		#define BLEND_MODE 0

		// What gray level noise should tend to.
		#define MEAN 0.0

		// Controls the contrast/variance of noise.
		#define VARIANCE 0.5

		varying vec2 vUv;
		uniform float intensity;
		uniform float noiseOffset;
		uniform sampler2D tDiffuse;

		vec3 channel_mix( vec3 a, vec3 b, vec3 w ) {

			return vec3(
				mix( a.r, b.r, w.r ),
				mix( a.g, b.g, w.g ),
				mix( a.b, b.b, w.b )
			);

		}

		float gaussian( float z, float u, float o ) {

			return (
				1.0 / ( o * sqrt( 2.0 * 3.1415 ) ) ) * exp( - ( ( ( z - u ) * ( z - u ) ) / ( 2.0 * ( o * o ) ) )
			);

		}

		vec3 madd( vec3 a, vec3 b, float w ) {

			return a + a * b * w;

		}

		vec3 screen( vec3 a, vec3 b, float w ) {

			return mix(
				a,
				vec3( 1.0 ) - ( vec3( 1.0 ) - a ) * ( vec3( 1.0 ) - b ),
				w
			);

		}

		vec3 overlay( vec3 a, vec3 b, float w ) {

			return mix(
				a,
				channel_mix(
					2.0 * a * b,
					vec3( 1.0 ) - 2.0 * ( vec3( 1.0 ) - a ) * ( vec3( 1.0 ) - b ),
					step( vec3( 0.5 ), a )
				),
				w
			);

		}

		vec3 soft_light( vec3 a, vec3 b, float w ) {

			return mix(
				a,
				pow(
					a,
					pow( vec3( 2.0 ), 2.0 * ( vec3( 0.5 ) - b) )
				),
				w
			);

		}

		void main() {

			vec4 color;

			vec2 uv = vUv;
			color = texture2D( tDiffuse, uv );

			float t = noiseOffset;
			float seed = dot( uv, vec2( 12.9898, 78.233 ) );
			float noise = fract( sin( seed ) * 43758.5453 + t );
			noise = gaussian( noise, float( MEAN ), float( VARIANCE ) * float( VARIANCE ) );

			// Ignore these mouse stuff if you're porting this
			// and just use an arbitrary intensity value.
			float w = intensity;
			vec3 grain = vec3( noise ) * ( 1.0 - color.rgb );

			// addition
			#if BLEND_MODE == 0
			color.rgb += grain * w;

			// screen
			#elif BLEND_MODE == 1
			color.rgb = screen(color.rgb, grain, w);

			// overlay
			#elif BLEND_MODE == 2
			color.rgb = overlay(color.rgb, grain, w);

			// soft light
			#elif BLEND_MODE == 3
			color.rgb = soft_light(color.rgb, grain, w);

			// lighten only
			#elif BLEND_MODE == 4
			color.rgb = max(color.rgb, grain * w);
			#endif

			gl_FragColor = color;

		}

	`},BA={defines:{BAND_MODE:2,CHROMA_SAMPLES:1},uniforms:{tDiffuse:{value:null},baseIor:{value:.075},bandOffset:{value:.003},jitterIntensity:{value:1},jitterOffset:{value:0}},vertexShader:`

		varying vec2 vUv;
		varying vec3 viewDir;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			viewDir = normalize( ( modelViewMatrix * vec4( position, 1.0 ) ).xyz );

		}

	`,fragmentShader:`

		varying vec2 vUv;
		varying vec3 viewDir;
		uniform float baseIor;
		uniform float bandOffset;
		uniform float jitterIntensity;
		uniform float jitterOffset;
		uniform sampler2D tDiffuse;

		#include <common>
		void main() {

			vec3 normal = vec3( ( 2.0 * vUv - vec2( 1.0 ) ), 1.0 );
			normal.z = 1.0;
			normal = normalize( normal );

			vec3 color;

			// if NO BANDS
			#if BAND_MODE == 0

			vec3 refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor );
			color = texture2D( tDiffuse, vUv + refracted.xy ).rgb;

			// if RGB or RYGCBV BANDS
			#else

			float index, randValue, offsetValue;
			float r, g, b, r_ior, g_ior, b_ior;
			vec3 r_refracted, g_refracted, b_refracted;
			vec4 r_sample, g_sample, b_sample;

			#if BAND_MODE == 2
			float y, c, v, y_ior, c_ior, v_ior;
			vec3 y_refracted, c_refracted, v_refracted;
			vec4 y_sample, c_sample, v_sample;
			#endif

			for ( int i = 0; i < CHROMA_SAMPLES; i ++ ) {

				index = float( i );
				randValue = rand( sin( index + 1. ) * gl_FragCoord.xy + vec2( jitterOffset, - jitterOffset ) ) - 0.5;
				offsetValue = index / float( CHROMA_SAMPLES ) + randValue * jitterIntensity;
				#if BAND_MODE == 1
				randValue *= 2.0;
				#endif

				// Paper describing functions for creating yellow, cyan, and violet bands and reforming
				// them into RGB:
				// https://web.archive.org/web/20061108181225/http://home.iitk.ac.in/~shankars/reports/dispersionraytrace.pdf
				r_ior = 1.0 + bandOffset * ( 0.0 + offsetValue );
				g_ior = 1.0 + bandOffset * ( 2.0 + offsetValue );
				b_ior = 1.0 + bandOffset * ( 4.0 + offsetValue );

				r_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / r_ior );
				g_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / g_ior );
				b_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / b_ior );

				r_sample = texture2D( tDiffuse, vUv + r_refracted.xy );
				g_sample = texture2D( tDiffuse, vUv + g_refracted.xy );
				b_sample = texture2D( tDiffuse, vUv + b_refracted.xy );

				#if BAND_MODE == 2
				y_ior = 1.0 + bandOffset * ( 1.0 + offsetValue );
				c_ior = 1.0 + bandOffset * ( 3.0 + offsetValue );
				v_ior = 1.0 + bandOffset * ( 5.0 + offsetValue );

				y_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / y_ior );
				c_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / c_ior );
				v_refracted = refract( vec3( 0.0, 0.0, - 1.0 ), normal, baseIor / v_ior );

				y_sample = texture2D( tDiffuse, vUv + y_refracted.xy );
				c_sample = texture2D( tDiffuse, vUv + c_refracted.xy );
				v_sample = texture2D( tDiffuse, vUv + v_refracted.xy );

				r = r_sample.r / 2.0;
				y = ( 2.0 * y_sample.r + 2.0 * y_sample.g - y_sample.b ) / 6.0;
				g = g_sample.g / 2.0;
				c = ( 2.0 * c_sample.g + 2.0 * c_sample.b - c_sample.r ) / 6.0;
				b = b_sample.b / 2.0;
				v = ( 2.0 * v_sample.b + 2.0 * v_sample.r - v_sample.g ) / 6.0;

				color.r += r + ( 2.0 * v + 2.0 * y - c ) / 3.0;
				color.g += g + ( 2.0 * y + 2.0 * c - v ) / 3.0;
				color.b += b + ( 2.0 * c + 2.0 * v - y ) / 3.0;
				#else
				color.r += r_sample.r;
				color.g += g_sample.g;
				color.b += b_sample.b;
				#endif

			}

			color /= float( CHROMA_SAMPLES );

			#endif

			gl_FragColor = vec4( color, 1.0 );

		}

	`},VA=""+new URL("scene.5ce5893e.glb",import.meta.url).href,HA=""+new URL("default.95d36db1.hdr",import.meta.url).href;class GA extends bt{constructor(...e){super(...e),["opacity","map","emissiveMap","roughnessMap","metalnessMap"].forEach(t=>{Object.defineProperty(this,t,{get(){if(t in this.uniforms)return this.uniforms[t].value},set(i){t in this.uniforms&&(this.uniforms[t].value=i)}})})}}class WA extends GA{constructor(...e){super(...e),this.modifiedDefines={},this.modifiedUniforms={}}setDefine(e,t){const i=this.defines,r=this.modifiedDefines;t==null?e in i&&(e in r||(r[e]=i[e]),delete i[e]):i[e]!==t&&(e in r||(e in i?r[e]=i[e]:r[e]=void 0),i[e]=t)}setTextureUniform(e,t){const i=this.uniforms,r=this.modifiedUniforms;e in r||(r[e]=i[e].value),i[e].value=t}finalize(){const e=this.modifiedDefines,t=this.defines;for(const s in e)e[s]===void 0?s in t&&(this.needsUpdate=!0):t[s]!==e[s]&&(this.needsUpdate=!0),delete e[s];const i=this.modifiedUniforms,r=this.uniforms;for(const s in i)i[s]!==r[s].value&&(this.needsUpdate=!0),delete i[s]}}const xg=new WeakMap;class Tv{constructor(e){this._replacementMaterial=new WA(e),this._replacementMaterials=new WeakMap,this.overrideUniforms={},this.overrideDefines={}}replace(e,t=!1,i=!0){const r=this;function s(l){if(!l.isMesh&&!l.isSkinnedMesh)return;if(!o.has(l)){const c=r.createMaterial(l);o.set(l,c)}const u=o.get(l);if(u===null)return;let f=l.material;i?a.set(l,f):f=a.get(l),f||console.error("ShaderReplacement : Material for object was not cached before replacing shader.",l),r.updateUniforms(l,f,u),u.finalize&&u.finalize(),l.material=u}const o=this._replacementMaterials,a=xg;if(Array.isArray(e))if(t)for(let l=0,u=e.length;l<u;l++)e[l].traverse(s);else for(let l=0,u=e.length;l<u;l++)s(e[l]);else t?e.traverse(s):s(e)}reset(e,t){function i(s){r.has(s)?(s.material=r.get(s),r.delete(s)):(s.isSkinnedMesh||s.isMesh)&&console.error("ShaderReplacement : Material for object was not cached before resetting.",s)}const r=xg;if(Array.isArray(e))if(t)for(let s=0,o=e.length;s<o;s++)i(e[s]);else for(let s=0,o=e.length;s<o;s++)e[s].traverse(i);else t?e.traverse(i):i(e)}createMaterial(e){return this._replacementMaterial.clone()}updateUniforms(e,t,i){const s=this._replacementMaterial.defines,o=t.defines,a=i.defines;if(i.side=t.side,i.flatShading=t.flatShading,i.skinning=t.skinning,o){for(const c in o)i.setDefine(c,o[c]);for(const c in a)c in o?i.setDefine(c,o[c]):i.setDefine(c,s[c])}const l=i.uniforms;if(t.isShaderMaterial){const c=t.uniforms;for(const d in l){const p=c[d],v=l[d];p&&p.value!==v.value&&(v.value&&v.value.isTexture||p.value&&p.value.isTexture?i.setTextureUniform(d,p.value):v.value=p.value)}}else for(const c in l){const d=l[c];c in t&&t[c]!==d.value&&(d.value&&d.value.isTexture||t[c]&&t[c].isTexture?i.setTextureUniform(c,t[c]):d.value=t[c])}const{overrideDefines:u,overrideUniforms:f}=this;for(const c in u)u[c]===null||u[c]===void 0?delete a[c]:a[c]!==u[c]&&(a[c]=u[c],i.needsUpdate=!0);for(const c in f)c in l&&(l[c].value=f[c].value)}dispose(){}}class jA extends Tv{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...dn.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:dn.normal.vertexShader,fragmentShader:`

				#define NORMAL
				uniform float opacity;
				#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
					varying vec3 vViewPosition;
				#endif
				#ifndef FLAT_SHADED
					varying vec3 vNormal;
					#ifdef USE_TANGENT
						varying vec3 vTangent;
						varying vec3 vBitangent;
					#endif
				#endif
				#include <packing>
				#include <uv_pars_fragment>
				#include <map_pars_fragment>
				#include <bumpmap_pars_fragment>
				#include <normalmap_pars_fragment>
				#include <alphamap_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>
				void main() {
					vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
					#include <clipping_planes_fragment>
					#include <logdepthbuf_fragment>
					#include <map_fragment>
					#include <alphamap_fragment>
					#include <alphatest_fragment>
					#include <normal_fragment_begin>
					#include <normal_fragment_maps>
					gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
				}
			`}),this.useNormalMaps=!1}createMaterial(...e){return super.createMaterial(...e)}updateUniforms(e,t,i){super.updateUniforms(e,t,i),i.setDefine("USE_NORMALMAP",this.useNormalMaps&&i.uniforms.normalMap.value?"":void 0),i.setDefine("TANGENTSPACE_NORMALMAP",this.useNormalMaps&&i.uniforms.normalMap.value?"":void 0),i.setDefine("ALPHATEST",i.uniforms.alphaTest.value?i.uniforms.alphaTest.value:void 0),i.setDefine("USE_ALPHAMAP",i.defines.ALPHATEST===0||!i.uniforms.alphaMap.value?void 0:""),i.setDefine("USE_MAP",i.defines.ALPHATEST===0||!i.uniforms.map.value?void 0:""),i.setDefine("USE_UV","USE_ALPHAMAP"in i.defines||"USE_MAP"in i.defines?"":void 0)}}class XA extends Tv{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...dn.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec3 vViewPosition;
				#include <common>
				#include <uv_pars_vertex>
				#include <displacementmap_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>
				void main() {
					#include <uv_vertex>
					#include <beginnormal_vertex>
					#include <morphnormal_vertex>
					#include <skinbase_vertex>
					#include <skinnormal_vertex>
					#include <defaultnormal_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <displacementmap_vertex>
					#include <project_vertex>
					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					vViewPosition = mvPosition.xyz;
				}
			`,fragmentShader:`
				uniform float opacity;
				varying vec3 vViewPosition;
				#include <uv_pars_fragment>
				#include <map_pars_fragment>
				#include <bumpmap_pars_fragment>
				#include <normalmap_pars_fragment>
				#include <alphamap_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>
				void main() {
					vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
					#include <clipping_planes_fragment>
					#include <logdepthbuf_fragment>
					#include <map_fragment>
					#include <alphamap_fragment>
					#include <alphatest_fragment>
					gl_FragColor = vec4( vViewPosition.z );
				}
			`}),this.invertSide=!1}updateUniforms(e,t,i){super.updateUniforms(e,t,i);let r;this.invertSide&&(i.side=i.side===Ei?pn:Ei),r=i.defines.ALPHATEST,i.uniforms.alphaTest.value===0?delete i.defines.ALPHATEST:i.defines.ALPHATEST=i.uniforms.alphaTest.value,r!==i.defines.ALPHATEST&&(i.needsUpdate=!0),r=i.defines.USE_ALPHAMAP,i.defines.ALPHATEST===0||!i.uniforms.alphaMap.value?delete i.defines.USE_ALPHAMAP:i.defines.USE_ALPHAMAP="",r!==i.defines.USE_ALPHAMAP&&(i.needsUpdate=!0),r=i.defines.USE_MAP,i.defines.ALPHATEST===0||!i.uniforms.map.value?delete i.defines.USE_MAP:i.defines.USE_MAP="",r!==i.defines.USE_MAP&&(i.needsUpdate=!0),r=i.defines.USE_UV,"USE_ALPHAMAP"in i.defines||"USE_MAP"in i.defines?i.defines.USE_UV="":delete i.defines.USE_UV,r!==i.defines.USE_UV&&(i.needsUpdate=!0)}}const YA={uniforms:{texture:{value:null}},vertexShader:`
		varying vec3 vViewPosition;
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vViewPosition = mvPosition.xyz;
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D texture;
		void main() {

			vec4 texVal = texture2D( texture, vUv );
			float depthVal = - texVal.r;
			depthVal = mod( depthVal, 1.0 );
			gl_FragColor = vec4( depthVal );

		}
	`},qA={uniforms:{tex:{value:null},displayRoughness:{value:0}},vertexShader:`
		varying vec3 vViewPosition;
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vViewPosition = mvPosition.xyz;
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D tex;
		uniform float displayRoughness;
		void main() {

			vec4 texVal = texture2D( tex, vUv );
			float roughness = texVal.a;
			vec3 packedNormal = texVal.xyz;
			vec3 unpackedNormal = ( packedNormal - 0.5 ) * 2.0;
			gl_FragColor = mix(
				vec4( unpackedNormal, 1.0 ),
				vec4( roughness, roughness, roughness, 1.0 ),
				displayRoughness
			);

		}
	`},$A={defines:{NUM_DIRECTIONS:32,NUM_STEPS:16,RADIUS:"2.0",ENABLE_FALLOFF:1,FALLOFF_START2:"0.16",FALLOFF_END2:"4.0",ENABLE_ROTATION_JITTER:1,ENABLE_RADIUS_JITTER:1,ENABLE_COLOR_BOUNCE:1,JITTER_TYPE:0},uniforms:{colorBuffer:{value:null},normalBuffer:{value:null},depthBuffer:{value:null},renderSize:{value:new me},blueNoiseTex:{value:null},blueNoiseSize:{value:1},clipInfo:{value:new je},projInfo:{value:new je},params:{value:new me},lightBounceIntensity:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}
	`,fragmentShader:`
		#define TWO_PI			6.2831853071795864
		#define HALF_PI			1.5707963267948966
		#define ONE_OVER_PI		0.3183098861837906

		#include <common>
		#include <packing>
		varying vec2 vUv;

		uniform sampler2D noiseTexture;
		uniform sampler2D normalBuffer;
		uniform sampler2D depthBuffer;
		uniform sampler2D colorBuffer;
		uniform vec2 renderSize;

		uniform vec4 projInfo;
		uniform vec4 clipInfo;
		uniform vec4 params;
		uniform float lightBounceIntensity;

		#if ENABLE_ROTATION_JITTER == 2 || ENABLE_RADIUS_JITTER == 2
		uniform float blueNoiseSize;
		uniform sampler2D blueNoiseTex;
		#endif

		float round( float f ) {

			return f < 0.5 ? floor( f ) : ceil( f );

		}

		vec2 round( vec2 v ) {

			v.x = round( v.x );
			v.y = round( v.y );
			return v;

		}

		vec3 UnpackNormal( vec4 d ) {

			return d.xyz * 2.0 - 1.0;

		}

		vec4 GetViewPosition( vec2 uv ) {

			float near = clipInfo.x;
			float far = clipInfo.y;

			vec2 basesize = renderSize;
			vec2 coord = ( uv / basesize );

			// d is expected to be [ 0.0, 1.0 ]
			float d = texture2D( depthBuffer, coord ).r;
			d = d == 0.0 ? far : d;
			d = ( abs( d ) - near ) / ( far - near );

			vec4 ret = vec4( 0.0 );
			ret.w = d;
			ret.z = near + d * ( far - near );
			ret.xy = ( uv * projInfo.xy + projInfo.zw ) * ret.z;

			return ret;

		}

		float Falloff( float dist2 ) {

			return 2.0 * clamp(
				( dist2 - FALLOFF_START2 ) / ( FALLOFF_END2 - FALLOFF_START2 ),
				0.0,
				1.0
			);

		}

		void main() {

			vec2 screenCoord = gl_FragCoord.xy;
			vec4 vpos = GetViewPosition( renderSize * vUv );

			// if it's the background
			if ( vpos.w == 1.0 ) {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0);
				return;

			}

			vec4 s;
			vec3 vnorm	= UnpackNormal( texture2D( normalBuffer, vUv ) );
			vec3 vdir	= normalize( - vpos.xyz );
			vec3 dir, ws;

			// calculation uses left handed system
			vnorm.z = - vnorm.z;

			vec2 noises	= vec2( 0.0 );
			vec2 offset;
			vec2 horizons = vec2( - 1.0, - 1.0 );

			// scale the search radius by the depth and camera FOV
			float radius = ( RADIUS * clipInfo.z ) / vpos.z;
			radius = max( float( NUM_STEPS ), radius );

			float stepSize	= radius / float( NUM_STEPS );
			float phi		= 0.0;
			float ao		= 0.0;
			float division	= noises.y * stepSize;
			float currStep	= 1.0 + division + 0.25 * stepSize * params.y;
			float dist2, invdist, falloff, cosh;

			#if ENABLE_COLOR_BOUNCE
			vec3 color = vec3( 0.0 );
			#endif

			#if ENABLE_ROTATION_JITTER == 1

			// Rotation jitter approach from
			// https://github.com/MaxwellGengYF/Unity-Ground-Truth-Ambient-Occlusion/blob/9cc30e0f31eb950a994c71866d79b2798d1c508e/Shaders/GTAO_Common.cginc#L152-L155
			float rotJitterOffset = PI * fract( 52.9829189 * fract( dot( screenCoord, vec2( 0.06711056, 0.00583715 ) ) ) );

			#elif ENABLE_ROTATION_JITTER == 2

			float rotJitterOffset = PI * texture2D( blueNoiseTex, gl_FragCoord.xy / blueNoiseSize ).r;

			#endif

			#if ENABLE_RADIUS_JITTER == 1

			float jitterMod = ( gl_FragCoord.x + gl_FragCoord.y ) * 0.25;
			float radiusJitterOffset = mod( jitterMod, 1.0 ) * stepSize * 0.25;

			#elif ENABLE_RADIUS_JITTER == 2

			float radiusJitterOffset = PI * texture2D( blueNoiseTex, gl_FragCoord.xy / blueNoiseSize ).g;

			#endif

			#pragma unroll_loop_start
			for ( int i = 0; i < NUM_DIRECTIONS; i ++ ) {

				phi = float( i ) * ( PI / float( NUM_DIRECTIONS ) ) + params.x * PI;

				#if ENABLE_ROTATION_JITTER != 0

				phi += rotJitterOffset;

				#endif

				currStep = 1.0 + 0.25 * stepSize * params.y;


				#if ENABLE_RADIUS_JITTER != 0

				currStep += radiusJitterOffset;

				#endif

				dir = vec3( cos( phi ), sin( phi ), 0.0 );
				horizons = vec2( - 1.0 );

				// calculate horizon angles
				for ( int j = 0; j < NUM_STEPS; ++ j ) {

					offset = round( dir.xy * currStep );

					// h1
					s = GetViewPosition( screenCoord + offset );
					ws = s.xyz - vpos.xyz;

					dist2 = dot( ws, ws );
					invdist = inversesqrt( dist2 );
					cosh = invdist * dot( ws, vdir );

					#if ENABLE_FALLOFF

					falloff = Falloff( dist2 );

					#endif

					horizons.x = max( horizons.x, cosh - falloff );

					#if ENABLE_COLOR_BOUNCE

					vec3 ptColor, ptDir;
					float alpha;
					ptColor = texture2D( colorBuffer, ( screenCoord + offset ) / renderSize ).rgb;
					ptDir = normalize( ws );
					alpha = saturate( length( ws ) / float( RADIUS ) );
					color += ptColor * saturate( dot( ptDir, vnorm ) ) * pow( ( 1.0 - alpha ), 2.0 );

					#endif

					// h2
					s = GetViewPosition( screenCoord - offset );
					ws = s.xyz - vpos.xyz;

					dist2 = dot( ws, ws );
					invdist = inversesqrt( dist2 );
					cosh = invdist * dot( ws, vdir );

					#if ENABLE_FALLOFF

					falloff = Falloff( dist2 );

					#endif

					horizons.y = max( horizons.y, cosh - falloff );

					// increment
					currStep += stepSize;

					#if ENABLE_COLOR_BOUNCE

					ptColor = texture2D( colorBuffer, ( screenCoord - offset ) / renderSize ).rgb;
					ptDir = normalize( ws );
					alpha = saturate( length( ws ) / float( RADIUS ) );
					color += ptColor * saturate( dot( ptDir, vnorm ) ) * pow( ( 1.0 - alpha ), 2.0 );

					#endif

				}

				horizons = acos( horizons );

				// calculate gamma
				vec3 bitangent	= normalize( cross( dir, vdir ) );
				vec3 tangent	= cross( vdir, bitangent );
				vec3 nx			= vnorm - bitangent * dot( vnorm, bitangent );

				float nnx		= length( nx );
				float invnnx	= 1.0 / ( nnx + 1e-6 );			// to avoid division with zero
				float cosxi		= dot( nx, tangent ) * invnnx;	// xi = gamma + HALF_PI
				float gamma		= acos( cosxi ) - HALF_PI;
				float cosgamma	= dot( nx, vdir ) * invnnx;
				float singamma2	= - 2.0 * cosxi;					// cos(x + HALF_PI) = -sin(x)

				// clamp to normal hemisphere
				horizons.x = gamma + max( - horizons.x - gamma, - HALF_PI );
				horizons.y = gamma + min( horizons.y - gamma, HALF_PI );

				// Riemann integral is additive
				ao += nnx * 0.25 * (
					( horizons.x * singamma2 + cosgamma - cos( 2.0 * horizons.x - gamma ) ) +
					( horizons.y * singamma2 + cosgamma - cos( 2.0 * horizons.y - gamma ) ) );

			}
			#pragma unroll_loop_end

			// PDF = 1 / pi and must normalize with pi because of Lambert
			ao = ao / float( NUM_DIRECTIONS );

			#if ENABLE_COLOR_BOUNCE

			color /= float( NUM_STEPS * NUM_DIRECTIONS ) * 2.0 / lightBounceIntensity;
			gl_FragColor = vec4( color, ao );

			#else

			gl_FragColor = vec4( 0.0, 0.0, 0.0, ao );

			#endif
		}

	`},KA={defines:{BLUR_ITERATIONS:5,BLUR_MODE:0,AO_ONLY:0,COLOR_ONLY:0,DEPTH_THRESHOLD:"5e-1"},uniforms:{fullSize:{value:new me},aoSize:{value:new me},normalBuffer:{value:null},depthBuffer:{value:null},colorBuffer:{value:null},gtaoBuffer:{value:null},intensity:{value:1},blurStride:{value:1},ambientColor:{value:new ve},ambientIntensity:{value:0}},vertexShader:`
		varying vec2 vUv;
		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}
	`,fragmentShader:`
		varying vec2 vUv;

		uniform vec3 ambientColor;
		uniform float ambientIntensity;

		uniform vec2 aoSize;
		uniform vec2 fullSize;
		uniform sampler2D colorBuffer;
		uniform sampler2D depthBuffer;
		uniform sampler2D normalBuffer;
		uniform sampler2D gtaoBuffer;
		uniform float intensity;
		uniform int blurStride;

		vec3 UnpackNormal( vec4 d ) {

			return d.xyz * 2.0 - 1.0;

		}

		vec3 MultiBounce( float ao, vec3 albedo ) {

			vec3 x = vec3( ao );

			vec3 a = 2.0404 * albedo - vec3( 0.3324 );
			vec3 b = -4.7951 * albedo + vec3( 0.6417 );
			vec3 c = 2.7552 * albedo + vec3( 0.6903 );

			return max( x, ( ( x * a + b ) * x + c ) * x );

		}

		void main() {

			vec4 color = texture2D( colorBuffer, vUv );

			// NO_BLUR
			#if BLUR_MODE == 0

			vec4 accumSample = texture2D( gtaoBuffer, vUv );

			#else

			vec2 currTexel = vUv * fullSize;
			vec2 currAoTexel = vUv * aoSize;

			// aoPixels per full size ones. Should be 1/2 at
			vec2 texelRatio = aoSize / fullSize;

			vec3 currNormal = UnpackNormal( texture2D( normalBuffer, vUv ) );
			float currDepth = texture2D( depthBuffer, vUv ).r;

			// TODO: pull this sampling out into a function
			vec4 accumSample = vec4( 0.0 );
			float totalWeight = 1e-10;
			float pixelOffset = - float( BLUR_ITERATIONS ) / 2.0;
			pixelOffset += mod( float( BLUR_ITERATIONS ), 2.0 ) == 0.0 ? 0.0 : 0.5;
			pixelOffset *= float( blurStride );

			// BOX_BLUR
			#if BLUR_MODE == 1

			#pragma unroll_loop_start
			for ( int x = 0; x < BLUR_ITERATIONS; x ++ ) {

				#pragma unroll_loop_start
				for ( int y = 0; y < BLUR_ITERATIONS; y ++ ) {

					vec2 step = vec2( float( x ), float( y ) ) * float( blurStride );

					// iterate over full res pixels
					vec2 offsetUv = currTexel + ( pixelOffset + step ) / texelRatio;
					offsetUv /= fullSize;

					// get the associated pixel in the AO buffer
					vec2 aoUv = currAoTexel + pixelOffset + step;
					aoUv /= aoSize;

					// if the pixels are close enough in space then blur them together
					float offsetDepth = texture2D( depthBuffer, offsetUv ).r;
					if ( abs( offsetDepth - currDepth ) <= DEPTH_THRESHOLD ) {

						// Weigh the sample based on normal similarity
						vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
						float weight = max( 0.0, dot( offsetNormal, currNormal ) );

						// square the weight to give pixels with a closer normal even higher priority
						weight *= weight;

						// accumulate
						vec4 val = texture2D( gtaoBuffer, aoUv );
						accumSample += val * weight;
						totalWeight += weight;

					}

				}
				#pragma unroll_loop_end

			}
			#pragma unroll_loop_end

			// CROSS_BLUR
			#elif BLUR_MODE == 2

			#pragma unroll_loop_start
			for ( int i = 0; i < BLUR_ITERATIONS; i ++ ) {

				vec2 offsetUv, aoUv;
				float offsetDepth;

				// X sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( pixelOffset + float( i * blurStride ), 0.0 ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( pixelOffset + float( i * blurStride ), 0.0 );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

				// TODO: this should not be here if on the center pixel
				// Y sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( 0.0, pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( 0.0, pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

			}
			#pragma unroll_loop_end

			// DIAGONAL_BLUR
			#elif BLUR_MODE == 3

			#pragma unroll_loop_start
			for ( int i = 0; i < BLUR_ITERATIONS; i ++ ) {

				vec2 offsetUv, aoUv;
				float offsetDepth;

				// X sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( pixelOffset + float( i * blurStride ), pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( pixelOffset + float( i * blurStride ), pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

				// TODO: this should not be here if on the center pixel
				// Y sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( - pixelOffset - float( i * blurStride ), pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( - pixelOffset - float( i * blurStride ), pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

			}
			#pragma unroll_loop_end

			#endif

			accumSample /= totalWeight;

			#endif

			float gtao = accumSample.a;

			#if COLOR_ONLY

			gl_FragColor = vec4( accumSample.rgb, 1.0 );

			#elif AO_ONLY

			vec3 rgb = mix( vec3( 1.0 ), vec3( accumSample.a ), intensity );
			gl_FragColor = vec4( rgb, 1.0 );

			#else

			vec3 rgb = mix( color.rgb, color.rgb * MultiBounce( gtao, color.rgb ), intensity );
			vec3 delta = color.rgb - rgb;
			vec3 ambient = ambientColor * delta * ambientIntensity;

			float colorFade = ( 1.0 - pow( 1.0 - gtao, 2.0 ) );
			gl_FragColor = vec4( rgb + ambient + accumSample.rgb * ( 0.75 + colorFade * 0.25 ), color.a );

			#endif

		}
		`};class ZA{constructor(){this.clearAlpha=0,this.clearColor=new ve,this.renderTarget=null,this.outputEncoding=Ti,this.overrideMaterial=null,this.shadowsEnabled=!1,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.background=null,this.autoUpdate=!0}copy(e,t){e&&(this.clearAlpha=e.getClearAlpha(),this.clearColor=e.getClearColor(this.clearColor),this.renderTarget=e.getRenderTarget(),this.shadowsEnabled=e.shadowMap.enabled,this.outputEncoding=e.outputEncoding,this.autoClear=e.autoClear,this.autoClearColor=e.autoClearColor,this.autoClearDepth=e.autoClearDepth,this.autoClearStencil=e.autoClearStencil),t&&(this.overrideMaterial=t.overrideMaterial,this.background=t.background,this.autoUpdate=t.autoUpdate)}restore(e,t){e&&(e.setClearAlpha(this.clearAlpha),e.setClearColor(this.clearColor),e.setRenderTarget(this.renderTarget),e.shadowMap.enabled=this.shadowsEnabled,e.outputEncoding=this.outputEncoding,e.autoClear=this.autoClear,e.autoClearColor=this.autoClearColor,e.autoClearDepth=this.autoClearDepth,e.autoClearStencil=this.autoClearStencil),t&&(t.overrideMaterial=this.overrideMaterial,t.background=this.background,t.autoUpdate=this.autoUpdate),this.renderTarget=null,this.overrideMaterial=null}}function QA(n,e=Math.random){for(let t=n.length-1;t>0;t--){const i=~~((e()-1e-6)*t),r=n[t];n[t]=n[i],n[i]=r}}function JA(n,e){n.fill(0);for(let t=0;t<e;t++)n[t]=1}class yg{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,r=-1;for(let s=0,o=t.length;s<o;s++){if(t[s]!==0)continue;const a=e[s];a<i&&(i=a,r=s)}return r}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,r=-1;for(let s=0,o=t.length;s<o;s++){if(t[s]!==1)continue;const a=e[s];a>i&&(i=a,r=s)}return r}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),i=2*t+1,r=new Float32Array(i*i),s=e*e;for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=(t+a)*i+o+t,u=o*o+a*a;r[l]=Math.E**(-u/(2*s))}this.lookupTable=r,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let r=0,s=e.length;r<s;r++)if(e[r]===0){const o=~~(r/i),a=r-o*i;this.updateScore(a,o,1),e[r]=1}else e[r]=0}updateScore(e,t,i){const{size:r,score:s,lookupTable:o}=this,a=this.radius,l=2*a+1;for(let u=-a;u<=a;u++)for(let f=-a;f<=a;f++){const c=(a+f)*l+u+a,d=o[c];let p=e+u;p=p<0?r+p:p%r;let v=t+f;v=v<0?r+v:v%r;const h=v*r+p;s[h]+=i*d}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),r=e-i*t;this.updateScore(r,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),r=e-i*t;this.updateScore(r,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class e2{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new yg(1),this.savedSamples=new yg(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:r,size:s}=this;e.resize(s),e.setSigma(i);const o=Math.floor(s*s*r),a=e.binaryPattern;console.time("Array Initialization"),JA(a,o),QA(a,this.random),console.timeEnd("Array Initialization"),console.time("Score Initialization");for(let c=0,d=a.length;c<d;c++)a[c]===1&&e.addPointIndex(c);for(console.timeEnd("Score Initialization"),console.time("Point Rearrangement");;){const c=e.findCluster();e.removePointIndex(c);const d=e.findVoid();if(c===d){e.addPointIndex(c);break}e.addPointIndex(d)}console.timeEnd("Point Rearrangement");const l=new Uint32Array(s*s);t.copy(e),console.time("Dither Array Phase 1");let u;for(u=e.count-1;u>=0;){const c=e.findCluster();e.removePointIndex(c),l[c]=u,u--}console.timeEnd("Dither Array Phase 1"),console.time("Dither Array Phase 2");const f=s*s;for(u=t.count;u<f/2;){const c=t.findVoid();t.addPointIndex(c),l[c]=u,u++}for(console.timeEnd("Dither Array Phase 2"),console.time("Samples Invert"),t.invert(),console.timeEnd("Samples Invert"),console.time("Dither Array Phase 3");u<f;){const c=t.findCluster();t.removePointIndex(c),l[c]=u,u++}return console.timeEnd("Dither Array Phase 3"),{data:l,maxValue:f}}}const Sg=new ZA,t2=new ve(0),cu=new e2;cu.size=32;const Av=new Uint8Array(32**2*4);for(let n=0,e=4;n<e;n++){const t=cu.generate(),i=t.data,r=t.maxValue;for(let s=0,o=i.length;s<o;s++){const a=255*(i[s]/r);Av[s*4+n]=a}}const to=new uh(Av,cu.size,cu.size,Wt);to.wrapS=ar;to.wrapT=ar;to.minFilter=et;to.needsUpdate=!0;class Ue extends ho{constructor(e,t){super(),this.enabled=!0,this.needsSwap=!0,this.scene=e,this.camera=t,this.debug={display:Ue.DEFAULT},this.renderTargetScale=1,this.enableJitter=!0,this.radiusJitter=0,this.rotationJitter=0,this.numSteps=8,this.numDirections=8,this.intensity=1,this.radius=2,this.directionOffset=0,this.stepOffset=0,this.blurMode=Ue.BOX_BLUR,this.blurIterations=4,this.blurStride=1,this.enableFalloff=!0,this.falloffStart=.4,this.falloffEnd=2,this.ambientColor=new ve,this.ambientIntensity=0,this.lightBounceIntensity=1,this._gtaoBuffer=new Xt(1,1,{format:Wt}),this._depthBuffer=new Xt(1,1,{minFilter:ft,magFilter:ft,format:eh,type:An}),this._depthReplacement=new XA,this._normalBuffer=new Xt(1,1,{minFilter:ft,magFilter:ft,format:Wt}),this._normalReplacement=new jA,this.gtaoQuad=new Rs(new bt($A)),this.debugPackedQuad=new Rs(new bt(qA)),this.debugDepthQuad=new Rs(new bt(YA)),this.compositeQuad=new Rs(new bt(KA))}dispose(){}setSize(e,t){const i=this.renderTargetScale,r=Math.floor(e*i),s=Math.floor(t*i);this._depthBuffer.setSize(e,t),this._normalBuffer.setSize(e,t),this._gtaoBuffer.setSize(r,s)}render(e,t,i){const r=this.renderToScreen?null:t,{scene:s,camera:o,debug:a,debugPackedQuad:l,debugDepthQuad:u,compositeQuad:f,gtaoQuad:c}=this,d=c.material;Sg.copy(e,s);const p=()=>{Sg.restore(e,s),v.reset(s,!0)},v=this._depthReplacement,h=this._depthBuffer;if(s.background=null,v.replace(s,!0,!0),e.setRenderTarget(h),e.setClearColor(t2,0),e.clear(),e.render(s,o),a.display===Ue.DEPTH){e.setRenderTarget(r),u.material.uniforms.texture.value=h.texture,u.render(e),p();return}const m=this._normalReplacement,g=this._normalBuffer;if(m.replace(s,!0,!1),e.setRenderTarget(g),e.clear(),e.render(s,o),a.display===Ue.NORMAL){e.setRenderTarget(r),e.clear(),l.material.uniforms.displayRoughness.value=0,l.material.uniforms.texture.value=g.texture,l.render(e),p();return}this.numSteps!==d.defines.NUM_STEPS&&(d.defines.NUM_STEPS=this.numSteps,d.needsUpdate=!0),this.numDirections!==d.defines.NUM_DIRECTIONS&&(d.defines.NUM_DIRECTIONS=this.numDirections,d.needsUpdate=!0),this.radius.toFixed(16)!==d.defines.RADIUS&&(d.defines.RADIUS=this.radius.toFixed(16),d.needsUpdate=!0),(Math.pow(this.falloffStart,2).toFixed(16)!==d.defines.FALLOFF_START2||Math.pow(this.falloffEnd,2).toFixed(16)!==d.defines.FALLOFF_END2||this.enableFalloff!==Boolean(d.defines.ENABLE_FALLOFF))&&(d.defines.FALLOFF_START2=Math.pow(this.falloffStart,2).toFixed(16),d.defines.FALLOFF_END2=Math.pow(this.falloffEnd,2).toFixed(16),d.defines.ENABLE_FALLOFF=this.enableFalloff?1:0,d.needsUpdate=!0),this.rotationJitter!==d.defines.ENABLE_ROTATION_JITTER&&(d.defines.ENABLE_ROTATION_JITTER=this.rotationJitter,d.needsUpdate=!0),this.radiusJitter!==d.defines.ENABLE_RADIUS_JITTER&&(d.defines.ENABLE_RADIUS_JITTER=this.radiusJitter,d.needsUpdate=!0),this.lightBounceIntensity!==0!==Boolean(d.defines.ENABLE_COLOR_BOUNCE)&&(d.defines.ENABLE_COLOR_BOUNCE=this.lightBounceIntensity!==0?1:0,d.needsUpdate=!0);const _=this._gtaoBuffer,x=Math.floor(_.texture.image.width),y=Math.floor(_.texture.image.height),w=o.projectionMatrix,M=ih.DEG2RAD*o.fov;d.uniforms.params.value.set(this.directionOffset,this.stepOffset),d.uniforms.projInfo.value.set(2/(x*w.elements[4*0+0]),2/(y*w.elements[4*1+1]),-1/w.elements[4*0+0],-1/w.elements[4*1+1]),d.uniforms.clipInfo.value.set(o.near,o.far,.5*(y/(2*Math.tan(M*.5))),0),d.uniforms.normalBuffer.value=g.texture,d.uniforms.depthBuffer.value=h.texture,d.uniforms.colorBuffer.value=i.texture,d.uniforms.lightBounceIntensity.value=this.lightBounceIntensity,d.uniforms.renderSize.value.set(Math.floor(_.texture.image.width),Math.floor(_.texture.image.height)),d.uniforms.blueNoiseTex.value=to,d.uniforms.blueNoiseSize.value=to.image.width,e.setRenderTarget(_),e.clear(),c.render(e);const E=f.material;E.uniforms.depthBuffer.value=h.texture,E.uniforms.normalBuffer.value=g.texture,E.uniforms.colorBuffer.value=i.texture,E.uniforms.gtaoBuffer.value=_.texture,E.uniforms.intensity.value=this.intensity,E.uniforms.aoSize.value.set(_.width,_.height),E.uniforms.fullSize.value.set(i.width,i.height),E.uniforms.blurStride.value=this.blurStride,E.uniforms.ambientColor.value.copy(this.ambientColor),E.uniforms.ambientIntensity.value=this.ambientIntensity,this.blurIterations!==E.defines.BLUR_ITERATIONS&&(E.defines.BLUR_ITERATIONS=this.blurIterations,E.needsUpdate=!0),this.blurMode!==E.defines.BLUR_MODE&&(E.defines.BLUR_MODE=this.blurMode,E.needsUpdate=!0),a.display===Ue.AO_SAMPLE?E.defines.AO_ONLY!==1&&(E.defines.AO_ONLY=1,E.needsUpdate=!0):E.defines.AO_ONLY!==0&&(E.defines.AO_ONLY=0,E.needsUpdate=!0),a.display===Ue.COLOR_SAMPLE?E.defines.COLOR_ONLY!==1&&(E.defines.COLOR_ONLY=1,E.needsUpdate=!0):E.defines.COLOR_ONLY!==0&&(E.defines.COLOR_ONLY=0,E.needsUpdate=!0),e.setRenderTarget(r),e.clear(),f.render(e),p()}}Ue.NO_JITTER=0;Ue.RANDOM_JITTER=1;Ue.BLUENOISE_JITTER=2;Ue.DEFAULT=0;Ue.DEPTH=1;Ue.NORMAL=2;Ue.AO_SAMPLE=3;Ue.COLOR_SAMPLE=4;Ue.NO_BLUR=0;Ue.BOX_BLUR=1;Ue.CROSS_BLUR=2;Ue.DIAGONAL_BLUR=3;function n2(n){if(!!n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Ds(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),u=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var f=n.hex.toString(16);f.length<6;)f="0"+f;return"#"+f}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var wg=Array.prototype.forEach,Ro=Array.prototype.slice,Q={BREAK:{},extend:function(e){return this.each(Ro.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(Ro.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=Ro.call(arguments);return function(){for(var t=Ro.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(!!e){if(wg&&e.forEach&&e.forEach===wg)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Ro.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},i2=[{litmus:Q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Ds},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Ds},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Ds},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Ds}}},{litmus:Q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Q.isObject,conversions:{RGBA_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)&&Q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)&&Q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Po=void 0,xl=void 0,Zd=function(){xl=!1;var e=arguments.length>1?Q.toArray(arguments):arguments[0];return Q.each(i2,function(t){if(t.litmus(e))return Q.each(t.conversions,function(i,r){if(Po=i.read(e),xl===!1&&Po!==!1)return xl=Po,Po.conversionName=r,Po.conversion=i,Q.BREAK}),Q.BREAK}),xl},Mg=void 0,du={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),u=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Mg=t*8)|e&~(255<<Mg)}},r2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jn=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Xn=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),lr=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},fr=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},hr=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},Tt=function(){function n(){if(jn(this,n),this.__state=Zd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Xn(n,[{key:"toString",value:function(){return Ds(this)}},{key:"toHexString",value:function(){return Ds(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function yh(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Tt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Tt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Sh(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Tt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Tt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Tt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=du.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")Q.extend(n.__state,du.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};Tt.recalculateHSV=function(n){var e=du.rgb_to_hsv(n.r,n.g,n.b);Q.extend(n.__state,{s:e.s,v:e.v}),Q.isNaN(e.h)?Q.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};Tt.COMPONENTS=["r","g","b","h","s","v","hex","a"];yh(Tt.prototype,"r",2);yh(Tt.prototype,"g",1);yh(Tt.prototype,"b",0);Sh(Tt.prototype,"h");Sh(Tt.prototype,"s");Sh(Tt.prototype,"v");Object.defineProperty(Tt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Tt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=du.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var qr=function(){function n(e,t){jn(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Xn(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),s2={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Cv={};Q.each(s2,function(n,e){Q.each(n,function(t){Cv[t]=e})});var o2=/(\d+(\.\d+)?)px/;function $n(n){if(n==="0"||Q.isUndefined(n))return 0;var e=n.match(o2);return Q.isNull(e)?0:parseFloat(e[1])}var V={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;Q.isUndefined(s)&&(s=!0),Q.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=Cv[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var f=a.initKeyboardEvent||a.initKeyEvent;Q.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),f(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Q.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),V},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),V},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return V},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return V},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return $n(t["border-left-width"])+$n(t["border-right-width"])+$n(t["padding-left"])+$n(t["padding-right"])+$n(t.width)},getHeight:function(e){var t=getComputedStyle(e);return $n(t["border-top-width"])+$n(t["border-bottom-width"])+$n(t["padding-top"])+$n(t["padding-bottom"])+$n(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Lv=function(n){fr(e,n);function e(t,i){jn(this,e);var r=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return V.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Xn(e,[{key:"setValue",value:function(i){var r=lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qr),a2=function(n){fr(e,n);function e(t,i,r){jn(this,e);var s=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),Q.isArray(o)){var l={};Q.each(o,function(u){l[u]=u}),o=l}return Q.each(o,function(u,f){var c=document.createElement("option");c.innerHTML=f,c.setAttribute("value",u),a.__select.appendChild(c)}),s.updateDisplay(),V.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return Xn(e,[{key:"setValue",value:function(i){var r=lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return V.isActive(this.__select)?this:(this.__select.value=this.getValue(),lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(qr),l2=function(n){fr(e,n);function e(t,i){jn(this,e);var r=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),V.bind(r.__input,"keyup",o),V.bind(r.__input,"change",o),V.bind(r.__input,"blur",a),V.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Xn(e,[{key:"updateDisplay",value:function(){return V.isActive(this.__input)||(this.__input.value=this.getValue()),lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qr);function bg(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Rv=function(n){fr(e,n);function e(t,i,r){jn(this,e);var s=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,Q.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=bg(s.__impliedStep),s}return Xn(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=bg(i),this}}]),e}(qr);function u2(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var fu=function(n){fr(e,n);function e(t,i,r){jn(this,e);var s=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var v=parseFloat(o.__input.value);Q.isNaN(v)||o.setValue(v)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function f(){u()}function c(v){var h=a-v.clientY;o.setValue(o.getValue()+h*o.__impliedStep),a=v.clientY}function d(){V.unbind(window,"mousemove",c),V.unbind(window,"mouseup",d),u()}function p(v){V.bind(window,"mousemove",c),V.bind(window,"mouseup",d),a=v.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),V.bind(s.__input,"change",l),V.bind(s.__input,"blur",f),V.bind(s.__input,"mousedown",p),V.bind(s.__input,"keydown",function(v){v.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Xn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():u2(this.getValue(),this.__precision),lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Rv);function Eg(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var Qd=function(n){fr(e,n);function e(t,i,r,s,o){jn(this,e);var a=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),V.bind(a.__background,"mousedown",u),V.bind(a.__background,"touchstart",d),V.addClass(a.__background,"slider"),V.addClass(a.__foreground,"slider-fg");function u(h){document.activeElement.blur(),V.bind(window,"mousemove",f),V.bind(window,"mouseup",c),f(h)}function f(h){h.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Eg(h.clientX,m.left,m.right,l.__min,l.__max)),!1}function c(){V.unbind(window,"mousemove",f),V.unbind(window,"mouseup",c),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(h){h.touches.length===1&&(V.bind(window,"touchmove",p),V.bind(window,"touchend",v),p(h))}function p(h){var m=h.touches[0].clientX,g=l.__background.getBoundingClientRect();l.setValue(Eg(m,g.left,g.right,l.__min,l.__max))}function v(){V.unbind(window,"touchmove",p),V.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Xn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",lr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Rv),Pv=function(n){fr(e,n);function e(t,i,r){jn(this,e);var s=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,V.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),V.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Xn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(qr),Jd=function(n){fr(e,n);function e(t,i){jn(this,e);var r=hr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new Tt(r.getValue()),r.__temp=new Tt(0);var s=r;r.domElement=document.createElement("div"),V.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",V.bind(r.__input,"keydown",function(h){h.keyCode===13&&c.call(this)}),V.bind(r.__input,"blur",c),V.bind(r.__selector,"mousedown",function(){V.addClass(this,"drag").bind(window,"mouseup",function(){V.removeClass(s.__selector,"drag")})}),V.bind(r.__selector,"touchstart",function(){V.addClass(this,"drag").bind(window,"touchend",function(){V.removeClass(s.__selector,"drag")})});var o=document.createElement("div");Q.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Q.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Q.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Q.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Q.extend(o.style,{width:"100%",height:"100%",background:"none"}),Tg(o,"top","rgba(0,0,0,0)","#000"),Q.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),d2(r.__hue_field),Q.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),V.bind(r.__saturation_field,"mousedown",a),V.bind(r.__saturation_field,"touchstart",a),V.bind(r.__field_knob,"mousedown",a),V.bind(r.__field_knob,"touchstart",a),V.bind(r.__hue_field,"mousedown",l),V.bind(r.__hue_field,"touchstart",l);function a(h){p(h),V.bind(window,"mousemove",p),V.bind(window,"touchmove",p),V.bind(window,"mouseup",u),V.bind(window,"touchend",u)}function l(h){v(h),V.bind(window,"mousemove",v),V.bind(window,"touchmove",v),V.bind(window,"mouseup",f),V.bind(window,"touchend",f)}function u(){V.unbind(window,"mousemove",p),V.unbind(window,"touchmove",p),V.unbind(window,"mouseup",u),V.unbind(window,"touchend",u),d()}function f(){V.unbind(window,"mousemove",v),V.unbind(window,"touchmove",v),V.unbind(window,"mouseup",f),V.unbind(window,"touchend",f),d()}function c(){var h=Zd(this.value);h!==!1?(s.__color.__state=h,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function p(h){h.type.indexOf("touch")===-1&&h.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),g=h.touches&&h.touches[0]||h,_=g.clientX,x=g.clientY,y=(_-m.left)/(m.right-m.left),w=1-(x-m.top)/(m.bottom-m.top);return w>1?w=1:w<0&&(w=0),y>1?y=1:y<0&&(y=0),s.__color.v=w,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function v(h){h.type.indexOf("touch")===-1&&h.preventDefault();var m=s.__hue_field.getBoundingClientRect(),g=h.touches&&h.touches[0]||h,_=g.clientY,x=1-(_-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return r}return Xn(e,[{key:"updateDisplay",value:function(){var i=Zd(this.getValue());if(i!==!1){var r=!1;Q.each(Tt.COMPONENTS,function(a){if(!Q.isUndefined(i[a])&&!Q.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&Q.extend(this.__color.__state,i)}Q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;Q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Tg(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(qr),c2=["-moz-","-o-","-webkit-","-ms-",""];function Tg(n,e,t,i){n.style.background="",Q.each(c2,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function d2(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var f2={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},h2=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,p2=function(e,t){var i=e[t];return Q.isArray(arguments[2])||Q.isObject(arguments[2])?new a2(e,t,arguments[2]):Q.isNumber(i)?Q.isNumber(arguments[2])&&Q.isNumber(arguments[3])?Q.isNumber(arguments[4])?new Qd(e,t,arguments[2],arguments[3],arguments[4]):new Qd(e,t,arguments[2],arguments[3]):Q.isNumber(arguments[4])?new fu(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new fu(e,t,{min:arguments[2],max:arguments[3]}):Q.isString(i)?new l2(e,t):Q.isFunction(i)?new Pv(e,t,""):Q.isBoolean(i)?new Lv(e,t):null};function m2(n){setTimeout(n,1e3/60)}var g2=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||m2,_2=function(){function n(){jn(this,n),this.backgroundElement=document.createElement("div"),Q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),V.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;V.bind(this.backgroundElement,"click",function(){e.hide()})}return Xn(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Q.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",V.unbind(t.domElement,"webkitTransitionEnd",r),V.unbind(t.domElement,"transitionend",r),V.unbind(t.domElement,"oTransitionEnd",r)};V.bind(this.domElement,"webkitTransitionEnd",i),V.bind(this.domElement,"transitionend",i),V.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-V.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-V.getHeight(this.domElement)/2+"px"}}]),n}(),v2=n2(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);f2.inject(v2);var Ag="dg",Cg=72,Lg=20,Sa="Default",Uo=function(){try{return!!window.localStorage}catch{return!1}}(),Ko=void 0,Rg=!0,ms=void 0,Gc=!1,Dv=[],Ke=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),V.addClass(this.domElement,Ag),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=Q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=Q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),Q.isUndefined(i.load)?i.load={preset:Sa}:i.preset&&(i.load.preset=i.preset),Q.isUndefined(i.parent)&&i.hideable&&Dv.push(this),i.resizable=Q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&Q.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=Uo&&localStorage.getItem(gs(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(d){t.parent?t.getRoot().preset=d:i.load.preset=d,w2(this),t.revert()}},width:{get:function(){return i.width},set:function(d){i.width=d,nf(t,d)}},name:{get:function(){return i.name},set:function(d){i.name=d,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(d){i.closed=d,i.closed?V.addClass(t.__ul,n.CLASS_CLOSED):V.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(d){Uo&&(r=d,d?V.bind(window,"unload",s):V.unbind(window,"unload",s),localStorage.setItem(gs(t,"isLocal"),d))}}}),Q.isUndefined(i.parent)){if(this.closed=i.closed||!1,V.addClass(this.domElement,n.CLASS_MAIN),V.makeSelectable(this.domElement,!1),Uo&&r){t.useLocalStorage=!0;var a=localStorage.getItem(gs(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,V.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(V.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(V.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),V.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);V.addClass(l,"controller-name"),o=wh(t,l);var u=function(d){return d.preventDefault(),t.closed=!t.closed,!1};V.addClass(this.__ul,n.CLASS_CLOSED),V.addClass(o,"title"),V.bind(o,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(Q.isUndefined(i.parent)&&(Rg&&(ms=document.createElement("div"),V.addClass(ms,Ag),V.addClass(ms,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ms),Rg=!1),ms.appendChild(this.domElement),V.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||nf(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},V.bind(window,"resize",this.__resizeHandler),V.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),V.bind(this.__ul,"transitionend",this.__resizeHandler),V.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&S2(this),s=function(){Uo&&localStorage.getItem(gs(t,"isLocal"))==="true"&&localStorage.setItem(gs(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function f(){var c=t.getRoot();c.width+=1,Q.defer(function(){c.width-=1})}i.parent||f()};Ke.toggleHide=function(){Gc=!Gc,Q.each(Dv,function(n){n.domElement.style.display=Gc?"none":""})};Ke.CLASS_AUTO_PLACE="a";Ke.CLASS_AUTO_PLACE_CONTAINER="ac";Ke.CLASS_MAIN="main";Ke.CLASS_CONTROLLER_ROW="cr";Ke.CLASS_TOO_TALL="taller-than-window";Ke.CLASS_CLOSED="closed";Ke.CLASS_CLOSE_BUTTON="close-button";Ke.CLASS_CLOSE_TOP="close-top";Ke.CLASS_CLOSE_BOTTOM="close-bottom";Ke.CLASS_DRAG="drag";Ke.DEFAULT_WIDTH=245;Ke.TEXT_CLOSED="Close Controls";Ke.TEXT_OPEN="Open Controls";Ke._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===Cg||n.keyCode===Cg)&&Ke.toggleHide()};V.bind(window,"keydown",Ke._keydownHandler,!1);Q.extend(Ke.prototype,{add:function(e,t){return Zo(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Zo(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Q.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ms.removeChild(this.domElement);var e=this;Q.each(this.__folders,function(t){e.removeFolder(t)}),V.unbind(window,"keydown",Ke._keydownHandler,!1),Pg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Ke(t);this.__folders[e]=i;var r=wh(this,i.domElement);return V.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Pg(e);var t=this;Q.each(e.__folders,function(i){e.removeFolder(i)}),Q.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=V.getOffset(e.__ul).top,i=0;Q.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=V.getHeight(r))}),window.innerHeight-t-Lg<i?(V.addClass(e.domElement,Ke.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Lg+"px"):(V.removeClass(e.domElement,Ke.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Q.debounce(function(){this.onResize()},50),remember:function(){if(Q.isUndefined(Ko)&&(Ko=new _2,Ko.domElement.innerHTML=h2),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Q.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&y2(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&nf(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=yl(this)),e.folders={},Q.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=yl(this),ef(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Sa]=yl(this,!0)),this.load.remembered[e]=yl(this),this.preset=e,tf(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Q.each(this.__controllers,function(t){this.getRoot().load.remembered?Iv(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Q.each(this.__folders,function(t){t.revert(t)}),e||ef(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Nv(this.__listening)},updateDisplay:function(){Q.each(this.__controllers,function(e){e.updateDisplay()}),Q.each(this.__folders,function(e){e.updateDisplay()})}});function wh(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function Pg(n){V.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&V.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function ef(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function x2(n,e,t){if(t.__li=e,t.__gui=n,Q.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Zo(n,t.object,t.property,{before:a,factoryArgs:[Q.toArray(arguments)]})}if(Q.isArray(o)||Q.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Zo(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Qd){var i=new fu(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),V.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof fu){var r=function(o){if(Q.isNumber(t.__min)&&Q.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Zo(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o};t.min=Q.compose(r,t.min),t.max=Q.compose(r,t.max)}else t instanceof Lv?(V.bind(e,"click",function(){V.fakeEvent(t.__checkbox,"click")}),V.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Pv?(V.bind(e,"click",function(){V.fakeEvent(t.__button,"click")}),V.bind(e,"mouseover",function(){V.addClass(t.__button,"hover")}),V.bind(e,"mouseout",function(){V.removeClass(t.__button,"hover")})):t instanceof Jd&&(V.addClass(e,"color"),t.updateDisplay=Q.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Q.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&ef(n.getRoot(),!0),s},t.setValue)}function Iv(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[Sa])o=s[Sa];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Zo(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new Jd(e,t);else{var s=[e,t].concat(i.factoryArgs);r=p2.apply(n,s)}i.before instanceof qr&&(i.before=i.before.__li),Iv(n,r),V.addClass(r.domElement,"c");var o=document.createElement("span");V.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=wh(n,a,i.before);return V.addClass(l,Ke.CLASS_CONTROLLER_ROW),r instanceof Jd?V.addClass(l,"color"):V.addClass(l,r2(r.getValue())),x2(n,l,r),n.__controllers.push(r),r}function gs(n,e){return document.location.href+"."+e}function tf(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function Dg(n,e){e.style.display=n.useLocalStorage?"block":"none"}function y2(n){var e=n.__save_row=document.createElement("li");V.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),V.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",V.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",V.addClass(i,"button"),V.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",V.addClass(r,"button"),V.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",V.addClass(s,"button"),V.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?Q.each(n.load.remembered,function(c,d){tf(n,d,d===n.preset)}):tf(n,Sa,!1),V.bind(o,"change",function(){for(var c=0;c<n.__preset_select.length;c++)n.__preset_select[c].innerHTML=n.__preset_select[c].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),Uo){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(gs(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Dg(n,a),V.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,Dg(n,a)})}var f=document.getElementById("dg-new-constructor");V.bind(f,"keydown",function(c){c.metaKey&&(c.which===67||c.keyCode===67)&&Ko.hide()}),V.bind(t,"click",function(){f.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Ko.show(),f.focus(),f.select()}),V.bind(i,"click",function(){n.save()}),V.bind(r,"click",function(){var c=prompt("Enter a new preset name.");c&&n.saveAs(c)}),V.bind(s,"click",function(){n.revert()})}function S2(n){var e=void 0;n.__resize_handle=document.createElement("div"),Q.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){V.removeClass(n.__closeButton,Ke.CLASS_DRAG),V.unbind(window,"mousemove",t),V.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,V.addClass(n.__closeButton,Ke.CLASS_DRAG),V.bind(window,"mousemove",t),V.bind(window,"mouseup",i),!1}V.bind(n.__resize_handle,"mousedown",r),V.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function nf(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function yl(n,e){var t={};return Q.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];Q.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function w2(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Nv(n){n.length!==0&&g2.call(window,function(){Nv(n)}),Q.each(n,function(e){e.updateDisplay()})}var M2=Ke,Ov={exports:{}},Pu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b2=hu.exports,E2=Symbol.for("react.element"),T2=Symbol.for("react.fragment"),A2=Object.prototype.hasOwnProperty,C2=b2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L2={key:!0,ref:!0,__self:!0,__source:!0};function kv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)A2.call(e,i)&&!L2.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:E2,type:n,key:s,ref:o,props:r,_owner:C2.current}}Pu.Fragment=T2;Pu.jsx=kv;Pu.jsxs=kv;(function(n){n.exports=Pu})(Ov);const rf=Ov.exports.jsx;class R2 extends ox.Component{constructor(t){super(t);mo(this,"InitialSetup",()=>{this.container=document.getElementById("container");const t=document.getElementById("container").getBoundingClientRect();this.sizes={width:t.width,height:t.height},this.canvas=document.querySelector("canvas.webgl"),this.scene=new fT,this.scene.background=new ve("#1c1c1c"),this.camera=new Gt(45,this.sizes.width/this.sizes.height,10,2e3),this.camera.position.set(2,300,700),this.scene.add(this.camera),this.manager=new yv,this.manager.onProgress=function(r,s,o){s/o*100===100&&console.log("scene loaded")},this.controls=new RA(this.camera,this.canvas),this.controls.addEventListener("change",()=>{}),this.controls.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.controlsGizmo=new PA(this.controls,{size:100,padding:8}),this.container.appendChild(this.controlsGizmo.domElement),this.renderer=new hv({canvas:this.canvas,antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=X0,this.renderer.toneMappingExposure=1,this.renderer.outputEncoding=ze,IA(HA,this.renderer,this.scene,this.manager),this.addObject(),this.postProcessing(),this.addGui(),window.addEventListener("resize",this.resize);const i=()=>{this.controls.update(),window.requestAnimationFrame(i),this.scene.update&&this.scene.update(),this.bloomPass.threshold=this.params.bloomThreshold,this.bloomPass.strength=this.params.bloomStrength,this.bloomPass.radius=this.params.bloomRadius,this.bloomPass.enabled=this.params.enableBloom,this.grainPass.enabled=this.params.enableNoise,this.grainPass.material.uniforms.noiseOffset.value+=this.params.noiseSpeed,this.grainPass.material.uniforms.intensity.value=this.params.noiseIntensity,this.distortPass.enabled=this.params.enableDistortion,this.distortPass.material.uniforms.baseIor.value=this.params.baseIor,this.distortPass.material.uniforms.bandOffset.value=this.params.bandOffset,this.distortPass.material.uniforms.jitterOffset.value+=.01,this.distortPass.material.uniforms.jitterIntensity.value=this.params.jitterIntensity,this.gtaoPass.debug.display=parseInt(this.params.display),this.gtaoPass.enabled=this.params.enabled,this.gtaoPass.singlePass=this.params.singlePass,this.gtaoPass.rotationJitter=parseInt(this.params.rotationJitter),this.gtaoPass.radiusJitter=parseInt(this.params.radiusJitter),this.gtaoPass.blurMode=parseFloat(this.params.blurMode),this.gtaoPass.blurIterations=this.params.blurIterations,this.gtaoPass.blurStride=this.params.blurStride,this.gtaoPass.numSteps=this.params.numSteps,this.gtaoPass.numDirections=this.params.numDirections,this.gtaoPass.intensity=this.params.intensity,this.gtaoPass.radius=this.params.radius,this.gtaoPass.falloffStart=this.params.falloffStart,this.gtaoPass.falloffEnd=this.params.falloffEnd,this.gtaoPass.enableFalloff=this.params.enableFalloff,this.gtaoPass.directionOffset=this.params.directionOffset,this.gtaoPass.stepOffset=this.params.stepOffset,this.gtaoPass.lightBounceIntensity=this.params.enableLightBounce?this.params.lightBounceIntensity:0,this.gtaoPass.ambientColor.setRGB(...this.params.ambientLightColor.map(r=>r/255)),this.gtaoPass.ambientIntensity=this.params.ambientLightIntensity,this.gtaoPass.debug.display,Ue.DEFAULT,this.composer.render()};i()});mo(this,"resize",()=>{this.sizes.width=this.container.offsetWidth,this.sizes.height=this.container.offsetHeight,this.renderer.setSize(this.sizes.width,this.sizes.height),this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix()});mo(this,"addObject",()=>{new eA(this.manager).load(VA,i=>{i.scene.position.set(0,-1,0),i.scene.traverse(r=>{r instanceof Ft&&(r.name.split("_").slice(0,2).join("_")==="light_plane"||r.name.split("_").slice(0,2).join("_")==="wallLamp_light"||r.name.split("_")[0]==="ceilingLight"||r.name.split("_")[0]==="lightPlane")&&(r.material.toneMapped=!1,r.material.emissive=new ve("#e2e2e2"),r.material.emissiveIntensity=10,r.material.needsUpdate=!0)}),this.scene.add(i.scene)})});mo(this,"postProcessing",()=>{const t=new Xt(this.sizes.width,this.sizes.height,{minFilter:et,magFilter:et,type:An,format:Wt,encoding:ze});t.samples=8,this.renderScene=new FA(this.scene,this.camera),this.bloomPass=new eo(new me(this.sizes.width,this.sizes.height),1,1,1);const i={uniforms:{tDiffuse:{type:"t",value:null},resolution:{value:new me(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)},power:{value:.5}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
          `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;

        vec2 barrelDistortion(vec2 coord, float amt) {
          vec2 cc = coord - 0.5;
          float dist = dot(cc, cc);
          return coord + cc * dist * amt;
        }
  
        float sat( float t )
        {
          return clamp( t, 0.0, 1.0 );
        }
  
        float linterp( float t ) {
          return sat( 1.0 - abs( 2.0*t - 1.0 ) );
        }
  
        float remap( float t, float a, float b ) {
          return sat( (t - a) / (b - a) );
        }
  
        vec4 spectrum_offset( float t ) {
          vec4 ret;
          float lo = step(t,0.5);
          float hi = 1.0-lo;
          float w = linterp( remap( t, 1.0/6.0, 5.0/6.0 ) );
          ret = vec4(lo,1.0,hi, 1.) * vec4(1.0-w, w, 1.0-w, 1.);
          return pow( ret, vec4(1.0/2.2) );
        }
  
        const float max_distort = 2.2;
        const int num_iter = 12;
        const float reci_num_iter_f = 1.0 / float(num_iter);
  
        void main()
        {	
          vec2 uv=(gl_FragCoord.xy/resolution.xy*.5)+.25;
  
          vec4 sumcol = vec4(0.0);
          vec4 sumw = vec4(0.0);	
          for ( int i=0; i<num_iter;++i )
          {
            float t = float(i) * reci_num_iter_f;
            vec4 w = spectrum_offset( t );
            sumw += w;
            sumcol += w * texture2D( tDiffuse, barrelDistortion(uv, .6 * max_distort*t ) );
          }
  
          gl_FragColor = sumcol / sumw;
        }
        `};new Ps(i),this.gammaCorrection=new Ps(UA),this.grainPass=new Ps(zA),this.distortPass=new Ps(BA),this.gtaoPass=new Ue(this.scene,this.camera),this.composer=new kA(this.renderer,t),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.renderScene),this.composer.addPass(this.grainPass),this.composer.addPass(this.distortPass),this.composer.addPass(this.gtaoPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.gammaCorrection)})}componentDidMount(){this.params={color:"#ffffff",emissiveColor:"#0ef8ec",emissiveIntensity:10,toneMapped:!1,enableBloom:!0,bloomStrength:1,bloomThreshold:1,bloomRadius:1,enableNoise:!1,noiseSpeed:.01,noiseIntensity:.005,enableDistortion:!1,baseIor:1,bandOffset:.001,jitterIntensity:.5,samples:8,distortionMode:"rgb",enabled:!0,rotationJitter:1,radiusJitter:0,directionOffset:0,stepOffset:0,numSteps:8,numDirections:1,intensity:1,radius:2,enableFalloff:!0,falloffStart:.4,falloffEnd:2,blurMode:Ue.BOX_BLUR,blurIterations:5,blurStride:1,display:Ue.DEFAULT,renderTargetScale:.5,scene:"pyramid",ambientLightColor:[255,255,255],ambientLightIntensity:0,enableLightBounce:!1,lightBounceIntensity:1},this.InitialSetup()}addGui(){const t=new M2,i=t.addFolder("Bloom");i.add(this.params,"enableBloom"),i.add(this.params,"bloomStrength").min(0).max(10).step(.001),i.add(this.params,"bloomThreshold").min(0).max(1).step(.01),i.add(this.params,"bloomRadius").min(-1).max(1).step(.01);const r=t.addFolder("Flim Grain");r.add(this.params,"enableNoise"),r.add(this.params,"noiseSpeed").min(0).max(.1).step(1e-5),r.add(this.params,"noiseIntensity").min(0).max(1).step(.001);const s=t.addFolder("distortion");s.add(this.params,"enableDistortion"),s.add(this.params,"baseIor").min(.75).max(1.25).step(.001),s.add(this.params,"bandOffset").min(-.02).max(.02).step(.001),s.add(this.params,"jitterIntensity").min(0).max(2).step(.01),s.add(this.params,"samples").min(1).max(20).step(1).onChange(c=>{this.distortPass.material.defines.CHROMA_SAMPLES=c,this.distortPass.material.needsUpdate=!0}),s.add(this.params,"distortionMode",["none","rgb","rygcbv"]).onChange(c=>{switch(c){case"none":this.distortPass.material.defines.BAND_MODE=0;break;case"rgb":this.distortPass.material.defines.BAND_MODE=1;break;case"rygcbv":this.distortPass.material.defines.BAND_MODE=2;break}this.distortPass.material.needsUpdate=!0});const o=t.addFolder("Gtao");o.add(this.params,"directionOffset").step(.01),o.add(this.params,"stepOffset").step(.01),o.add(this.params,"rotationJitter",{NONE:0,RANDOM:1,BLUE_NOISE:2}),o.add(this.params,"radiusJitter",{NONE:0,RANDOM:1,BLUE_NOISE:2}),o.add(this.params,"numSteps").step(1),o.add(this.params,"numDirections").step(1),o.add(this.params,"intensity").step(.01),o.add(this.params,"radius").step(.01),o.add(this.params,"enableFalloff"),o.add(this.params,"falloffStart").step(.01),o.add(this.params,"falloffEnd").step(.01),o.add(this.params,"renderTargetScale").step(.01).onChange(c=>{this.gtaoPass.renderTargetScale=c});const a=t.addFolder("blur");a.add(this.params,"blurMode",{NO_BLUR:Ue.NO_BLUR,BOX_BLUR:Ue.BOX_BLUR,CROSS_BLUR:Ue.CROSS_BLUR,DIAGONAL_BLUR:Ue.DIAGONAL_BLUR}),a.add(this.params,"blurIterations").min(1).max(20).step(1),a.add(this.params,"blurStride").min(1).max(5).step(1);const l=t.addFolder("ambient light");l.addColor(this.params,"ambientLightColor").name("color"),l.add(this.params,"ambientLightIntensity").name("intensity").min(0).max(10).step(.1);const u=t.addFolder("illumination");u.add(this.params,"enableLightBounce"),u.add(this.params,"lightBounceIntensity").min(0).max(5).step(.01),t.addFolder("debug").add(this.params,"display",{DEFAULT:Ue.DEFAULT,DEPTH:Ue.DEPTH,NORMAL:Ue.NORMAL,AO_SAMPLE:Ue.AO_SAMPLE,COLOR_SAMPLE:Ue.COLOR_SAMPLE}),this.gtaoPass.renderTargetScale=this.params.renderTargetScale,t.open()}createKnotScene(){const t=new $i,i=new Ft(new lg,new Nr({color:4473924,roughness:.8}));i.receiveShadow=!0,i.scale.set(50,.1,50),i.position.y=-1,t.add(i);const r=new Ft(new lg,new Nr({color:16746240,roughness:.8}));r.receiveShadow=!0,r.castShadow=!0,r.scale.set(.1,3,3),r.position.x=-1.25,t.add(r);const s=new Ft(new JT(1,.35,200,32,2,5),new Nr({color:13566751,roughness:1}));s.position.y=.1,s.castShadow=!0,s.scale.setScalar(.5),s.receiveShadow=!0,t.add(s);const o=new Sv(16777215,1);o.position.set(3,2,1),o.castShadow=!0;const a=o.shadow.camera;a.left=a.bottom=-3,a.right=a.top=3,o.shadow.mapSize.width=2048,o.shadow.mapSize.height=2048,t.add(o);const l=new Ft(new QT);return o.add(l),t.update=function(){const u=(Math.sin(window.performance.now()*.001)+1)/2,f=ih.lerp(-Math.PI/10,Math.PI/2,u);o.position.set(10,0,0),o.position.applyAxisAngle(new R(0,0,1),f)},t}render(){return rf("div",{id:"container",children:rf("canvas",{className:"webgl"})})}}Wc.createRoot(document.getElementById("root")).render(rf(R2,{}));
