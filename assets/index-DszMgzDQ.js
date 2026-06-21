(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function uE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qx={exports:{}},Ed={},Kx={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=Symbol.for("react.element"),cE=Symbol.for("react.portal"),fE=Symbol.for("react.fragment"),dE=Symbol.for("react.strict_mode"),hE=Symbol.for("react.profiler"),pE=Symbol.for("react.provider"),mE=Symbol.for("react.context"),gE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),xE=Symbol.for("react.lazy"),Q0=Symbol.iterator;function yE(n){return n===null||typeof n!="object"?null:(n=Q0&&n[Q0]||n["@@iterator"],typeof n=="function"?n:null)}var Zx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qx=Object.assign,Jx={};function fl(n,e,t){this.props=n,this.context=e,this.refs=Jx,this.updater=t||Zx}fl.prototype.isReactComponent={};fl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ey(){}ey.prototype=fl.prototype;function pg(n,e,t){this.props=n,this.context=e,this.refs=Jx,this.updater=t||Zx}var mg=pg.prototype=new ey;mg.constructor=pg;Qx(mg,fl.prototype);mg.isPureReactComponent=!0;var J0=Array.isArray,ty=Object.prototype.hasOwnProperty,gg={current:null},ny={key:!0,ref:!0,__self:!0,__source:!0};function iy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ty.call(e,i)&&!ny.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Gu,type:n,key:s,ref:o,props:r,_owner:gg.current}}function SE(n,e){return{$$typeof:Gu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function _g(n){return typeof n=="object"&&n!==null&&n.$$typeof===Gu}function ME(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var e_=/\/+/g;function Zd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ME(""+n.key):e.toString(36)}function rf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Gu:case cE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Zd(o,0):i,J0(r)?(t="",n!=null&&(t=n.replace(e_,"$&/")+"/"),rf(r,e,t,"",function(u){return u})):r!=null&&(_g(r)&&(r=SE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(e_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",J0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Zd(s,a);o+=rf(s,e,t,l,r)}else if(l=yE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Zd(s,a++),o+=rf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ju(n,e,t){if(n==null)return n;var i=[],r=0;return rf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function EE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},sf={transition:null},wE={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:sf,ReactCurrentOwner:gg};function ry(){throw Error("act(...) is not supported in production builds of React.")}gt.Children={map:Ju,forEach:function(n,e,t){Ju(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ju(n,function(){e++}),e},toArray:function(n){return Ju(n,function(e){return e})||[]},only:function(n){if(!_g(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};gt.Component=fl;gt.Fragment=fE;gt.Profiler=hE;gt.PureComponent=pg;gt.StrictMode=dE;gt.Suspense=_E;gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE;gt.act=ry;gt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Qx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ty.call(e,l)&&!ny.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Gu,type:n.type,key:r,ref:s,props:i,_owner:o}};gt.createContext=function(n){return n={$$typeof:mE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:pE,_context:n},n.Consumer=n};gt.createElement=iy;gt.createFactory=function(n){var e=iy.bind(null,n);return e.type=n,e};gt.createRef=function(){return{current:null}};gt.forwardRef=function(n){return{$$typeof:gE,render:n}};gt.isValidElement=_g;gt.lazy=function(n){return{$$typeof:xE,_payload:{_status:-1,_result:n},_init:EE}};gt.memo=function(n,e){return{$$typeof:vE,type:n,compare:e===void 0?null:e}};gt.startTransition=function(n){var e=sf.transition;sf.transition={};try{n()}finally{sf.transition=e}};gt.unstable_act=ry;gt.useCallback=function(n,e){return qn.current.useCallback(n,e)};gt.useContext=function(n){return qn.current.useContext(n)};gt.useDebugValue=function(){};gt.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};gt.useEffect=function(n,e){return qn.current.useEffect(n,e)};gt.useId=function(){return qn.current.useId()};gt.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};gt.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};gt.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};gt.useMemo=function(n,e){return qn.current.useMemo(n,e)};gt.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};gt.useRef=function(n){return qn.current.useRef(n)};gt.useState=function(n){return qn.current.useState(n)};gt.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};gt.useTransition=function(){return qn.current.useTransition()};gt.version="18.3.1";Kx.exports=gt;var ei=Kx.exports;const TE=uE(ei);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=ei,CE=Symbol.for("react.element"),RE=Symbol.for("react.fragment"),bE=Object.prototype.hasOwnProperty,PE=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LE={key:!0,ref:!0,__self:!0,__source:!0};function sy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bE.call(e,i)&&!LE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:CE,type:n,key:s,ref:o,props:r,_owner:PE.current}}Ed.Fragment=RE;Ed.jsx=sy;Ed.jsxs=sy;qx.exports=Ed;var ae=qx.exports,gp={},oy={exports:{}},Ui={},ay={exports:{}},ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,j){var b=L.length;L.push(j);e:for(;0<b;){var se=b-1>>>1,_e=L[se];if(0<r(_e,j))L[se]=j,L[b]=_e,b=se;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],b=L.pop();if(b!==j){L[0]=b;e:for(var se=0,_e=L.length,Fe=_e>>>1;se<Fe;){var q=2*(se+1)-1,ie=L[q],he=q+1,le=L[he];if(0>r(ie,b))he<_e&&0>r(le,ie)?(L[se]=le,L[he]=b,se=he):(L[se]=ie,L[q]=b,se=q);else if(he<_e&&0>r(le,b))L[se]=le,L[he]=b,se=he;else break e}}return j}function r(L,j){var b=L.sortIndex-j.sortIndex;return b!==0?b:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var j=t(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=L)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(u)}}function y(L){if(m=!1,x(L),!_)if(t(l)!==null)_=!0,G(w);else{var j=t(u);j!==null&&W(y,j.startTime-L)}}function w(L,j){_=!1,m&&(m=!1,h(R),R=-1),p=!0;var b=d;try{for(x(j),f=t(l);f!==null&&(!(f.expirationTime>j)||L&&!P());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var _e=se(f.expirationTime<=j);j=n.unstable_now(),typeof _e=="function"?f.callback=_e:f===t(l)&&i(l),x(j)}else i(l);f=t(l)}if(f!==null)var Fe=!0;else{var q=t(u);q!==null&&W(y,q.startTime-j),Fe=!1}return Fe}finally{f=null,d=b,p=!1}}var C=!1,M=null,R=-1,E=5,S=-1;function P(){return!(n.unstable_now()-S<E)}function N(){if(M!==null){var L=n.unstable_now();S=L;var j=!0;try{j=M(!0,L)}finally{j?z():(C=!1,M=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=N,z=function(){$.postMessage(null)}}else z=function(){g(N,0)};function G(L){M=L,C||(C=!0,z())}function W(L,j){R=g(function(){L(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,G(w))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var b=d;d=j;try{return L()}finally{d=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var b=d;d=L;try{return j()}finally{d=b}},n.unstable_scheduleCallback=function(L,j,b){var se=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?se+b:se):b=se,L){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=b+_e,L={id:c++,callback:j,priorityLevel:L,startTime:b,expirationTime:_e,sortIndex:-1},b>se?(L.sortIndex=b,e(u,L),t(l)===null&&L===t(u)&&(m?(h(R),R=-1):m=!0,W(y,b-se))):(L.sortIndex=_e,e(l,L),_||p||(_=!0,G(w))),L},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(L){var j=d;return function(){var b=d;d=j;try{return L.apply(this,arguments)}finally{d=b}}}})(ly);ay.exports=ly;var DE=ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=ei,Li=DE;function pe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,mu={};function Bo(n,e){ja(n,e),ja(n+"Capture",e)}function ja(n,e){for(mu[n]=e,n=0;n<e.length;n++)uy.add(e[n])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,UE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t_={},n_={};function NE(n){return _p.call(n_,n)?!0:_p.call(t_,n)?!1:UE.test(n)?n_[n]=!0:(t_[n]=!0,!1)}function FE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function OE(n,e,t,i){if(e===null||typeof e>"u"||FE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Rn[n]=new Kn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Rn[e]=new Kn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Rn[n]=new Kn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Rn[n]=new Kn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Rn[n]=new Kn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Rn[n]=new Kn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Rn[n]=new Kn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Rn[n]=new Kn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Rn[n]=new Kn(n,5,!1,n.toLowerCase(),null,!1,!1)});var vg=/[\-:]([a-z])/g;function xg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(vg,xg);Rn[e]=new Kn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(vg,xg);Rn[e]=new Kn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(vg,xg);Rn[e]=new Kn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Rn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Kn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Rn[n]=new Kn(n,1,!1,n.toLowerCase(),null,!0,!0)});function yg(n,e,t,i){var r=Rn.hasOwnProperty(e)?Rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OE(e,t,r,i)&&(t=null),i||r===null?NE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ts=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ga=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),yp=Symbol.for("react.suspense_list"),Eg=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),dy=Symbol.for("react.offscreen"),i_=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=i_&&n[i_]||n["@@iterator"],typeof n=="function"?n:null)}var qt=Object.assign,Qd;function Nl(n){if(Qd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+n}var Jd=!1;function eh(n,e){if(!n||Jd)return"";Jd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Nl(n):""}function kE(n){switch(n.tag){case 5:return Nl(n.type);case 16:return Nl("Lazy");case 13:return Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 2:case 15:return n=eh(n.type,!1),n;case 11:return n=eh(n.type.render,!1),n;case 1:return n=eh(n.type,!0),n;default:return""}}function Sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ga:return"Fragment";case ma:return"Portal";case vp:return"Profiler";case Sg:return"StrictMode";case xp:return"Suspense";case yp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fy:return(n.displayName||"Context")+".Consumer";case cy:return(n._context.displayName||"Context")+".Provider";case Mg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Eg:return e=n.displayName||null,e!==null?e:Sp(n.type)||"Memo";case fs:e=n._payload,n=n._init;try{return Sp(n(e))}catch{}}return null}function zE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sp(e);case 8:return e===Sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Os(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BE(n){var e=hy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tc(n){n._valueTracker||(n._valueTracker=BE(n))}function py(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=hy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Df(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mp(n,e){var t=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function r_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Os(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(n,e){e=e.checked,e!=null&&yg(n,"checked",e,!1)}function Ep(n,e){my(n,e);var t=Os(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?wp(n,e.type,t):e.hasOwnProperty("defaultValue")&&wp(n,e.type,Os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function s_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function wp(n,e,t){(e!=="number"||Df(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Fl=Array.isArray;function La(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Os(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Tp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function o_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(pe(92));if(Fl(t)){if(1<t.length)throw Error(pe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Os(t)}}function gy(n,e){var t=Os(e.value),i=Os(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function a_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _y(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ap(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_y(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nc,vy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function gu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HE=["Webkit","ms","Moz","O"];Object.keys(jl).forEach(function(n){HE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jl[e]=jl[n]})});function xy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jl.hasOwnProperty(n)&&jl[n]?(""+e).trim():e+"px"}function yy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var VE=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(n,e){if(e){if(VE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function Rp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=null;function wg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pp=null,Da=null,Ia=null;function l_(n){if(n=Yu(n)){if(typeof Pp!="function")throw Error(pe(280));var e=n.stateNode;e&&(e=Rd(e),Pp(n.stateNode,n.type,e))}}function Sy(n){Da?Ia?Ia.push(n):Ia=[n]:Da=n}function My(){if(Da){var n=Da,e=Ia;if(Ia=Da=null,l_(n),e)for(n=0;n<e.length;n++)l_(e[n])}}function Ey(n,e){return n(e)}function wy(){}var th=!1;function Ty(n,e,t){if(th)return n(e,t);th=!0;try{return Ey(n,e,t)}finally{th=!1,(Da!==null||Ia!==null)&&(wy(),My())}}function _u(n,e){var t=n.stateNode;if(t===null)return null;var i=Rd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(pe(231,e,typeof t));return t}var Lp=!1;if($r)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Lp=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Lp=!1}function GE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var $l=!1,If=null,Uf=!1,Dp=null,WE={onError:function(n){$l=!0,If=n}};function XE(n,e,t,i,r,s,o,a,l){$l=!1,If=null,GE.apply(WE,arguments)}function YE(n,e,t,i,r,s,o,a,l){if(XE.apply(this,arguments),$l){if($l){var u=If;$l=!1,If=null}else throw Error(pe(198));Uf||(Uf=!0,Dp=u)}}function Ho(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ay(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function u_(n){if(Ho(n)!==n)throw Error(pe(188))}function jE(n){var e=n.alternate;if(!e){if(e=Ho(n),e===null)throw Error(pe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return u_(r),n;if(s===i)return u_(r),e;s=s.sibling}throw Error(pe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(t.alternate!==i)throw Error(pe(190))}if(t.tag!==3)throw Error(pe(188));return t.stateNode.current===t?n:e}function Cy(n){return n=jE(n),n!==null?Ry(n):null}function Ry(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ry(n);if(e!==null)return e;n=n.sibling}return null}var by=Li.unstable_scheduleCallback,c_=Li.unstable_cancelCallback,$E=Li.unstable_shouldYield,qE=Li.unstable_requestPaint,en=Li.unstable_now,KE=Li.unstable_getCurrentPriorityLevel,Tg=Li.unstable_ImmediatePriority,Py=Li.unstable_UserBlockingPriority,Nf=Li.unstable_NormalPriority,ZE=Li.unstable_LowPriority,Ly=Li.unstable_IdlePriority,wd=null,Tr=null;function QE(n){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(wd,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:tw,JE=Math.log,ew=Math.LN2;function tw(n){return n>>>=0,n===0?32:31-(JE(n)/ew|0)|0}var ic=64,rc=4194304;function Ol(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ff(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ol(a):(s&=o,s!==0&&(i=Ol(s)))}else o=t&~r,o!==0?i=Ol(o):s!==0&&(i=Ol(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function nw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=nw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ip(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dy(){var n=ic;return ic<<=1,!(ic&4194240)&&(ic=64),n}function nh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function rw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ag(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Dt=0;function Iy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Uy,Cg,Ny,Fy,Oy,Up=!1,sc=[],ws=null,Ts=null,As=null,vu=new Map,xu=new Map,ps=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f_(n,e){switch(n){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":vu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(e.pointerId)}}function vl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yu(e),e!==null&&Cg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ow(n,e,t,i,r){switch(e){case"focusin":return ws=vl(ws,n,e,t,i,r),!0;case"dragenter":return Ts=vl(Ts,n,e,t,i,r),!0;case"mouseover":return As=vl(As,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return vu.set(s,vl(vu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xu.set(s,vl(xu.get(s)||null,n,e,t,i,r)),!0}return!1}function ky(n){var e=po(n.target);if(e!==null){var t=Ho(e);if(t!==null){if(e=t.tag,e===13){if(e=Ay(t),e!==null){n.blockedOn=e,Oy(n.priority,function(){Ny(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function of(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Np(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);bp=i,t.target.dispatchEvent(i),bp=null}else return e=Yu(t),e!==null&&Cg(e),n.blockedOn=t,!1;e.shift()}return!0}function d_(n,e,t){of(n)&&t.delete(e)}function aw(){Up=!1,ws!==null&&of(ws)&&(ws=null),Ts!==null&&of(Ts)&&(Ts=null),As!==null&&of(As)&&(As=null),vu.forEach(d_),xu.forEach(d_)}function xl(n,e){n.blockedOn===e&&(n.blockedOn=null,Up||(Up=!0,Li.unstable_scheduleCallback(Li.unstable_NormalPriority,aw)))}function yu(n){function e(r){return xl(r,n)}if(0<sc.length){xl(sc[0],n);for(var t=1;t<sc.length;t++){var i=sc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ws!==null&&xl(ws,n),Ts!==null&&xl(Ts,n),As!==null&&xl(As,n),vu.forEach(e),xu.forEach(e),t=0;t<ps.length;t++)i=ps[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ps.length&&(t=ps[0],t.blockedOn===null);)ky(t),t.blockedOn===null&&ps.shift()}var Ua=ts.ReactCurrentBatchConfig,Of=!0;function lw(n,e,t,i){var r=Dt,s=Ua.transition;Ua.transition=null;try{Dt=1,Rg(n,e,t,i)}finally{Dt=r,Ua.transition=s}}function uw(n,e,t,i){var r=Dt,s=Ua.transition;Ua.transition=null;try{Dt=4,Rg(n,e,t,i)}finally{Dt=r,Ua.transition=s}}function Rg(n,e,t,i){if(Of){var r=Np(n,e,t,i);if(r===null)dh(n,e,i,kf,t),f_(n,i);else if(ow(r,n,e,t,i))i.stopPropagation();else if(f_(n,i),e&4&&-1<sw.indexOf(n)){for(;r!==null;){var s=Yu(r);if(s!==null&&Uy(s),s=Np(n,e,t,i),s===null&&dh(n,e,i,kf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else dh(n,e,i,null,t)}}var kf=null;function Np(n,e,t,i){if(kf=null,n=wg(i),n=po(n),n!==null)if(e=Ho(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ay(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return kf=n,null}function zy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KE()){case Tg:return 1;case Py:return 4;case Nf:case ZE:return 16;case Ly:return 536870912;default:return 16}default:return 16}}var _s=null,bg=null,af=null;function By(){if(af)return af;var n,e=bg,t=e.length,i,r="value"in _s?_s.value:_s.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return af=r.slice(n,1<i?1-i:void 0)}function lf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function oc(){return!0}function h_(){return!1}function Ni(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oc:h_,this.isPropagationStopped=h_,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pg=Ni(dl),Xu=qt({},dl,{view:0,detail:0}),cw=Ni(Xu),ih,rh,yl,Td=qt({},Xu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yl&&(yl&&n.type==="mousemove"?(ih=n.screenX-yl.screenX,rh=n.screenY-yl.screenY):rh=ih=0,yl=n),ih)},movementY:function(n){return"movementY"in n?n.movementY:rh}}),p_=Ni(Td),fw=qt({},Td,{dataTransfer:0}),dw=Ni(fw),hw=qt({},Xu,{relatedTarget:0}),sh=Ni(hw),pw=qt({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),mw=Ni(pw),gw=qt({},dl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_w=Ni(gw),vw=qt({},dl,{data:0}),m_=Ni(vw),xw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Sw[n])?!!e[n]:!1}function Lg(){return Mw}var Ew=qt({},Xu,{key:function(n){if(n.key){var e=xw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=lf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(n){return n.type==="keypress"?lf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ww=Ni(Ew),Tw=qt({},Td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=Ni(Tw),Aw=qt({},Xu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),Cw=Ni(Aw),Rw=qt({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),bw=Ni(Rw),Pw=qt({},Td,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lw=Ni(Pw),Dw=[9,13,27,32],Dg=$r&&"CompositionEvent"in window,ql=null;$r&&"documentMode"in document&&(ql=document.documentMode);var Iw=$r&&"TextEvent"in window&&!ql,Hy=$r&&(!Dg||ql&&8<ql&&11>=ql),__=" ",v_=!1;function Vy(n,e){switch(n){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _a=!1;function Uw(n,e){switch(n){case"compositionend":return Gy(e);case"keypress":return e.which!==32?null:(v_=!0,__);case"textInput":return n=e.data,n===__&&v_?null:n;default:return null}}function Nw(n,e){if(_a)return n==="compositionend"||!Dg&&Vy(n,e)?(n=By(),af=bg=_s=null,_a=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hy&&e.locale!=="ko"?null:e.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Fw[n.type]:e==="textarea"}function Wy(n,e,t,i){Sy(i),e=zf(e,"onChange"),0<e.length&&(t=new Pg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Kl=null,Su=null;function Ow(n){tS(n,0)}function Ad(n){var e=ya(n);if(py(e))return n}function kw(n,e){if(n==="change")return e}var Xy=!1;if($r){var oh;if($r){var ah="oninput"in document;if(!ah){var y_=document.createElement("div");y_.setAttribute("oninput","return;"),ah=typeof y_.oninput=="function"}oh=ah}else oh=!1;Xy=oh&&(!document.documentMode||9<document.documentMode)}function S_(){Kl&&(Kl.detachEvent("onpropertychange",Yy),Su=Kl=null)}function Yy(n){if(n.propertyName==="value"&&Ad(Su)){var e=[];Wy(e,Su,n,wg(n)),Ty(Ow,e)}}function zw(n,e,t){n==="focusin"?(S_(),Kl=e,Su=t,Kl.attachEvent("onpropertychange",Yy)):n==="focusout"&&S_()}function Bw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ad(Su)}function Hw(n,e){if(n==="click")return Ad(e)}function Vw(n,e){if(n==="input"||n==="change")return Ad(e)}function Gw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dr=typeof Object.is=="function"?Object.is:Gw;function Mu(n,e){if(dr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!_p.call(e,r)||!dr(n[r],e[r]))return!1}return!0}function M_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function E_(n,e){var t=M_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=M_(t)}}function jy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?jy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $y(){for(var n=window,e=Df();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Df(n.document)}return e}function Ig(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ww(n){var e=$y(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&jy(t.ownerDocument.documentElement,t)){if(i!==null&&Ig(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=E_(t,s);var o=E_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Xw=$r&&"documentMode"in document&&11>=document.documentMode,va=null,Fp=null,Zl=null,Op=!1;function w_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Op||va==null||va!==Df(i)||(i=va,"selectionStart"in i&&Ig(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zl&&Mu(Zl,i)||(Zl=i,i=zf(Fp,"onSelect"),0<i.length&&(e=new Pg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=va)))}function ac(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var xa={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},lh={},qy={};$r&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Cd(n){if(lh[n])return lh[n];if(!xa[n])return n;var e=xa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in qy)return lh[n]=e[t];return n}var Ky=Cd("animationend"),Zy=Cd("animationiteration"),Qy=Cd("animationstart"),Jy=Cd("transitionend"),eS=new Map,T_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xs(n,e){eS.set(n,e),Bo(e,[n])}for(var uh=0;uh<T_.length;uh++){var ch=T_[uh],Yw=ch.toLowerCase(),jw=ch[0].toUpperCase()+ch.slice(1);Xs(Yw,"on"+jw)}Xs(Ky,"onAnimationEnd");Xs(Zy,"onAnimationIteration");Xs(Qy,"onAnimationStart");Xs("dblclick","onDoubleClick");Xs("focusin","onFocus");Xs("focusout","onBlur");Xs(Jy,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("cancel close invalid load scroll toggle".split(" ").concat(kl));function A_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,YE(i,e,void 0,n),n.currentTarget=null}function tS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;A_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;A_(r,a,u),s=l}}}if(Uf)throw n=Dp,Uf=!1,Dp=null,n}function Ft(n,e){var t=e[Vp];t===void 0&&(t=e[Vp]=new Set);var i=n+"__bubble";t.has(i)||(nS(e,n,2,!1),t.add(i))}function fh(n,e,t){var i=0;e&&(i|=4),nS(t,n,i,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Eu(n){if(!n[lc]){n[lc]=!0,uy.forEach(function(t){t!=="selectionchange"&&($w.has(t)||fh(t,!1,n),fh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[lc]||(e[lc]=!0,fh("selectionchange",!1,e))}}function nS(n,e,t,i){switch(zy(e)){case 1:var r=lw;break;case 4:r=uw;break;default:r=Rg}t=r.bind(null,e,t,n),r=void 0,!Lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function dh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=po(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ty(function(){var u=s,c=wg(t),f=[];e:{var d=eS.get(n);if(d!==void 0){var p=Pg,_=n;switch(n){case"keypress":if(lf(t)===0)break e;case"keydown":case"keyup":p=ww;break;case"focusin":_="focus",p=sh;break;case"focusout":_="blur",p=sh;break;case"beforeblur":case"afterblur":p=sh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Cw;break;case Ky:case Zy:case Qy:p=mw;break;case Jy:p=bw;break;case"scroll":p=cw;break;case"wheel":p=Lw;break;case"copy":case"cut":case"paste":p=_w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=g_}var m=(e&4)!==0,g=!m&&n==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=_u(v,h),y!=null&&m.push(wu(v,y,x)))),g)break;v=v.return}0<m.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==bp&&(_=t.relatedTarget||t.fromElement)&&(po(_)||_[qr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?po(_):null,_!==null&&(g=Ho(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=p_,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=g_,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:ya(p),x=_==null?d:ya(_),d=new m(y,v+"leave",p,t,c),d.target=g,d.relatedTarget=x,y=null,po(c)===u&&(m=new m(h,v+"enter",_,t,c),m.target=x,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,h=_,v=0,x=m;x;x=Xo(x))v++;for(x=0,y=h;y;y=Xo(y))x++;for(;0<v-x;)m=Xo(m),v--;for(;0<x-v;)h=Xo(h),x--;for(;v--;){if(m===h||h!==null&&m===h.alternate)break t;m=Xo(m),h=Xo(h)}m=null}else m=null;p!==null&&C_(f,d,p,m,!1),_!==null&&g!==null&&C_(f,g,_,m,!0)}}e:{if(d=u?ya(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=kw;else if(x_(d))if(Xy)w=Vw;else{w=Bw;var C=zw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=Hw);if(w&&(w=w(n,u))){Wy(f,w,t,c);break e}C&&C(n,d,u),n==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&wp(d,"number",d.value)}switch(C=u?ya(u):window,n){case"focusin":(x_(C)||C.contentEditable==="true")&&(va=C,Fp=u,Zl=null);break;case"focusout":Zl=Fp=va=null;break;case"mousedown":Op=!0;break;case"contextmenu":case"mouseup":case"dragend":Op=!1,w_(f,t,c);break;case"selectionchange":if(Xw)break;case"keydown":case"keyup":w_(f,t,c)}var M;if(Dg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _a?Vy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Hy&&t.locale!=="ko"&&(_a||R!=="onCompositionStart"?R==="onCompositionEnd"&&_a&&(M=By()):(_s=c,bg="value"in _s?_s.value:_s.textContent,_a=!0)),C=zf(u,R),0<C.length&&(R=new m_(R,n,null,t,c),f.push({event:R,listeners:C}),M?R.data=M:(M=Gy(t),M!==null&&(R.data=M)))),(M=Iw?Uw(n,t):Nw(n,t))&&(u=zf(u,"onBeforeInput"),0<u.length&&(c=new m_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}tS(f,e)})}function wu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function zf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_u(n,t),s!=null&&i.unshift(wu(n,s,r)),s=_u(n,e),s!=null&&i.push(wu(n,s,r))),n=n.return}return i}function Xo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function C_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=_u(t,s),l!=null&&o.unshift(wu(t,l,a))):r||(l=_u(t,s),l!=null&&o.push(wu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var qw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function R_(n){return(typeof n=="string"?n:""+n).replace(qw,`
`).replace(Kw,"")}function uc(n,e,t){if(e=R_(e),R_(n)!==e&&t)throw Error(pe(425))}function Bf(){}var kp=null,zp=null;function Bp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hp=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,Qw=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(n){return b_.resolve(null).then(n).catch(Jw)}:Hp;function Jw(n){setTimeout(function(){throw n})}function hh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),yu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);yu(e)}function Cs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function P_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hl=Math.random().toString(36).slice(2),yr="__reactFiber$"+hl,Tu="__reactProps$"+hl,qr="__reactContainer$"+hl,Vp="__reactEvents$"+hl,eT="__reactListeners$"+hl,tT="__reactHandles$"+hl;function po(n){var e=n[yr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qr]||t[yr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=P_(n);n!==null;){if(t=n[yr])return t;n=P_(n)}return e}n=t,t=n.parentNode}return null}function Yu(n){return n=n[yr]||n[qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ya(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(pe(33))}function Rd(n){return n[Tu]||null}var Gp=[],Sa=-1;function Ys(n){return{current:n}}function zt(n){0>Sa||(n.current=Gp[Sa],Gp[Sa]=null,Sa--)}function Nt(n,e){Sa++,Gp[Sa]=n.current,n.current=e}var ks={},zn=Ys(ks),si=Ys(!1),Po=ks;function $a(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function oi(n){return n=n.childContextTypes,n!=null}function Hf(){zt(si),zt(zn)}function L_(n,e,t){if(zn.current!==ks)throw Error(pe(168));Nt(zn,e),Nt(si,t)}function iS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,zE(n)||"Unknown",r));return qt({},t,i)}function Vf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,Po=zn.current,Nt(zn,n),Nt(si,si.current),!0}function D_(n,e,t){var i=n.stateNode;if(!i)throw Error(pe(169));t?(n=iS(n,e,Po),i.__reactInternalMemoizedMergedChildContext=n,zt(si),zt(zn),Nt(zn,n)):zt(si),Nt(si,t)}var kr=null,bd=!1,ph=!1;function rS(n){kr===null?kr=[n]:kr.push(n)}function nT(n){bd=!0,rS(n)}function js(){if(!ph&&kr!==null){ph=!0;var n=0,e=Dt;try{var t=kr;for(Dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}kr=null,bd=!1}catch(r){throw kr!==null&&(kr=kr.slice(n+1)),by(Tg,js),r}finally{Dt=e,ph=!1}}return null}var Ma=[],Ea=0,Gf=null,Wf=0,zi=[],Bi=0,Lo=null,Hr=1,Vr="";function ro(n,e){Ma[Ea++]=Wf,Ma[Ea++]=Gf,Gf=n,Wf=e}function sS(n,e,t){zi[Bi++]=Hr,zi[Bi++]=Vr,zi[Bi++]=Lo,Lo=n;var i=Hr;n=Vr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hr=1<<32-ur(e)+r|t<<r|i,Vr=s+n}else Hr=1<<s|t<<r|i,Vr=n}function Ug(n){n.return!==null&&(ro(n,1),sS(n,1,0))}function Ng(n){for(;n===Gf;)Gf=Ma[--Ea],Ma[Ea]=null,Wf=Ma[--Ea],Ma[Ea]=null;for(;n===Lo;)Lo=zi[--Bi],zi[Bi]=null,Vr=zi[--Bi],zi[Bi]=null,Hr=zi[--Bi],zi[Bi]=null}var bi=null,Ai=null,Bt=!1,sr=null;function oS(n,e){var t=Gi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function I_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bi=n,Ai=Cs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bi=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:Hr,overflow:Vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Gi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bi=n,Ai=null,!0):!1;default:return!1}}function Wp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xp(n){if(Bt){var e=Ai;if(e){var t=e;if(!I_(n,e)){if(Wp(n))throw Error(pe(418));e=Cs(t.nextSibling);var i=bi;e&&I_(n,e)?oS(i,t):(n.flags=n.flags&-4097|2,Bt=!1,bi=n)}}else{if(Wp(n))throw Error(pe(418));n.flags=n.flags&-4097|2,Bt=!1,bi=n}}}function U_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bi=n}function cc(n){if(n!==bi)return!1;if(!Bt)return U_(n),Bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Bp(n.type,n.memoizedProps)),e&&(e=Ai)){if(Wp(n))throw aS(),Error(pe(418));for(;e;)oS(n,e),e=Cs(e.nextSibling)}if(U_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(pe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Cs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=bi?Cs(n.stateNode.nextSibling):null;return!0}function aS(){for(var n=Ai;n;)n=Cs(n.nextSibling)}function qa(){Ai=bi=null,Bt=!1}function Fg(n){sr===null?sr=[n]:sr.push(n)}var iT=ts.ReactCurrentBatchConfig;function Sl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(pe(309));var i=t.stateNode}if(!i)throw Error(pe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(pe(284));if(!t._owner)throw Error(pe(290,n))}return n}function fc(n,e){throw n=Object.prototype.toString.call(e),Error(pe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function N_(n){var e=n._init;return e(n._payload)}function lS(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ls(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=Sh(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var w=x.type;return w===ga?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fs&&N_(w)===v.type)?(y=r(v,x.props),y.ref=Sl(h,v,x),y.return=h,y):(y=mf(x.type,x.key,x.props,null,h.mode,y),y.ref=Sl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Mh(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,w){return v===null||v.tag!==7?(v=Mo(x,h.mode,y,w),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ec:return x=mf(v.type,v.key,v.props,null,h.mode,x),x.ref=Sl(h,null,v),x.return=h,x;case ma:return v=Mh(v,h.mode,x),v.return=h,v;case fs:var y=v._init;return f(h,y(v._payload),x)}if(Fl(v)||gl(v))return v=Mo(v,h.mode,x,null),v.return=h,v;fc(h,v)}return null}function d(h,v,x,y){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ec:return x.key===w?l(h,v,x,y):null;case ma:return x.key===w?u(h,v,x,y):null;case fs:return w=x._init,d(h,v,w(x._payload),y)}if(Fl(x)||gl(x))return w!==null?null:c(h,v,x,y,null);fc(h,x)}return null}function p(h,v,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,w);case ma:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,w);case fs:var C=y._init;return p(h,v,x,C(y._payload),w)}if(Fl(y)||gl(y))return h=h.get(x)||null,c(v,h,y,w,null);fc(v,y)}return null}function _(h,v,x,y){for(var w=null,C=null,M=v,R=v=0,E=null;M!==null&&R<x.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=d(h,M,x[R],y);if(S===null){M===null&&(M=E);break}n&&M&&S.alternate===null&&e(h,M),v=s(S,v,R),C===null?w=S:C.sibling=S,C=S,M=E}if(R===x.length)return t(h,M),Bt&&ro(h,R),w;if(M===null){for(;R<x.length;R++)M=f(h,x[R],y),M!==null&&(v=s(M,v,R),C===null?w=M:C.sibling=M,C=M);return Bt&&ro(h,R),w}for(M=i(h,M);R<x.length;R++)E=p(M,h,R,x[R],y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?R:E.key),v=s(E,v,R),C===null?w=E:C.sibling=E,C=E);return n&&M.forEach(function(P){return e(h,P)}),Bt&&ro(h,R),w}function m(h,v,x,y){var w=gl(x);if(typeof w!="function")throw Error(pe(150));if(x=w.call(x),x==null)throw Error(pe(151));for(var C=w=null,M=v,R=v=0,E=null,S=x.next();M!==null&&!S.done;R++,S=x.next()){M.index>R?(E=M,M=null):E=M.sibling;var P=d(h,M,S.value,y);if(P===null){M===null&&(M=E);break}n&&M&&P.alternate===null&&e(h,M),v=s(P,v,R),C===null?w=P:C.sibling=P,C=P,M=E}if(S.done)return t(h,M),Bt&&ro(h,R),w;if(M===null){for(;!S.done;R++,S=x.next())S=f(h,S.value,y),S!==null&&(v=s(S,v,R),C===null?w=S:C.sibling=S,C=S);return Bt&&ro(h,R),w}for(M=i(h,M);!S.done;R++,S=x.next())S=p(M,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),C===null?w=S:C.sibling=S,C=S);return n&&M.forEach(function(N){return e(h,N)}),Bt&&ro(h,R),w}function g(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ga&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ec:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===ga){if(C.tag===7){t(h,C.sibling),v=r(C,x.props.children),v.return=h,h=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fs&&N_(w)===C.type){t(h,C.sibling),v=r(C,x.props),v.ref=Sl(h,C,x),v.return=h,h=v;break e}t(h,C);break}else e(h,C);C=C.sibling}x.type===ga?(v=Mo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=mf(x.type,x.key,x.props,null,h.mode,y),y.ref=Sl(h,v,x),y.return=h,h=y)}return o(h);case ma:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Mh(x,h.mode,y),v.return=h,h=v}return o(h);case fs:return C=x._init,g(h,v,C(x._payload),y)}if(Fl(x))return _(h,v,x,y);if(gl(x))return m(h,v,x,y);fc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Sh(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return g}var Ka=lS(!0),uS=lS(!1),Xf=Ys(null),Yf=null,wa=null,Og=null;function kg(){Og=wa=Yf=null}function zg(n){var e=Xf.current;zt(Xf),n._currentValue=e}function Yp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Na(n,e){Yf=n,Og=wa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ri=!0),n.firstContext=null)}function qi(n){var e=n._currentValue;if(Og!==n)if(n={context:n,memoizedValue:e,next:null},wa===null){if(Yf===null)throw Error(pe(308));wa=n,Yf.dependencies={lanes:0,firstContext:n}}else wa=wa.next=n;return e}var mo=null;function Bg(n){mo===null?mo=[n]:mo.push(n)}function cS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Bg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Kr(n,i)}function Kr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ds=!1;function Hg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Kr(n,t)}return r=i.interleaved,r===null?(e.next=e,Bg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Kr(n,t)}function uf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ag(n,t)}}function F_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function jf(n,e,t,i){var r=n.updateQueue;ds=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(d=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=qt({},f,d);break e;case 2:ds=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Io|=o,n.lanes=o,n.memoizedState=f}}function O_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var ju={},Ar=Ys(ju),Au=Ys(ju),Cu=Ys(ju);function go(n){if(n===ju)throw Error(pe(174));return n}function Vg(n,e){switch(Nt(Cu,e),Nt(Au,n),Nt(Ar,ju),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ap(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ap(e,n)}zt(Ar),Nt(Ar,e)}function Za(){zt(Ar),zt(Au),zt(Cu)}function dS(n){go(Cu.current);var e=go(Ar.current),t=Ap(e,n.type);e!==t&&(Nt(Au,n),Nt(Ar,t))}function Gg(n){Au.current===n&&(zt(Ar),zt(Au))}var Wt=Ys(0);function $f(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mh=[];function Wg(){for(var n=0;n<mh.length;n++)mh[n]._workInProgressVersionPrimary=null;mh.length=0}var cf=ts.ReactCurrentDispatcher,gh=ts.ReactCurrentBatchConfig,Do=0,jt=null,cn=null,xn=null,qf=!1,Ql=!1,Ru=0,rT=0;function bn(){throw Error(pe(321))}function Xg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dr(n[t],e[t]))return!1;return!0}function Yg(n,e,t,i,r,s){if(Do=s,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cf.current=n===null||n.memoizedState===null?lT:uT,n=t(i,r),Ql){s=0;do{if(Ql=!1,Ru=0,25<=s)throw Error(pe(301));s+=1,xn=cn=null,e.updateQueue=null,cf.current=cT,n=t(i,r)}while(Ql)}if(cf.current=Kf,e=cn!==null&&cn.next!==null,Do=0,xn=cn=jt=null,qf=!1,e)throw Error(pe(300));return n}function jg(){var n=Ru!==0;return Ru=0,n}function mr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?jt.memoizedState=xn=n:xn=xn.next=n,xn}function Ki(){if(cn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var e=xn===null?jt.memoizedState:xn.next;if(e!==null)xn=e,cn=n;else{if(n===null)throw Error(pe(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},xn===null?jt.memoizedState=xn=n:xn=xn.next=n}return xn}function bu(n,e){return typeof e=="function"?e(n):e}function _h(n){var e=Ki(),t=e.queue;if(t===null)throw Error(pe(311));t.lastRenderedReducer=n;var i=cn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,jt.lanes|=c,Io|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,dr(i,e.memoizedState)||(ri=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,jt.lanes|=s,Io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function vh(n){var e=Ki(),t=e.queue;if(t===null)throw Error(pe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);dr(s,e.memoizedState)||(ri=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function hS(){}function pS(n,e){var t=jt,i=Ki(),r=e(),s=!dr(i.memoizedState,r);if(s&&(i.memoizedState=r,ri=!0),i=i.queue,$g(_S.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||xn!==null&&xn.memoizedState.tag&1){if(t.flags|=2048,Pu(9,gS.bind(null,t,i,r,e),void 0,null),yn===null)throw Error(pe(349));Do&30||mS(t,e,r)}return r}function mS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function gS(n,e,t,i){e.value=t,e.getSnapshot=i,vS(e)&&xS(n)}function _S(n,e,t){return t(function(){vS(e)&&xS(n)})}function vS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dr(n,t)}catch{return!0}}function xS(n){var e=Kr(n,1);e!==null&&cr(e,n,1,-1)}function k_(n){var e=mr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bu,lastRenderedState:n},e.queue=n,n=n.dispatch=aT.bind(null,jt,n),[e.memoizedState,n]}function Pu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function yS(){return Ki().memoizedState}function ff(n,e,t,i){var r=mr();jt.flags|=n,r.memoizedState=Pu(1|e,t,void 0,i===void 0?null:i)}function Pd(n,e,t,i){var r=Ki();i=i===void 0?null:i;var s=void 0;if(cn!==null){var o=cn.memoizedState;if(s=o.destroy,i!==null&&Xg(i,o.deps)){r.memoizedState=Pu(e,t,s,i);return}}jt.flags|=n,r.memoizedState=Pu(1|e,t,s,i)}function z_(n,e){return ff(8390656,8,n,e)}function $g(n,e){return Pd(2048,8,n,e)}function SS(n,e){return Pd(4,2,n,e)}function MS(n,e){return Pd(4,4,n,e)}function ES(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function wS(n,e,t){return t=t!=null?t.concat([n]):null,Pd(4,4,ES.bind(null,e,n),t)}function qg(){}function TS(n,e){var t=Ki();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function AS(n,e){var t=Ki();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Xg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function CS(n,e,t){return Do&21?(dr(t,e)||(t=Dy(),jt.lanes|=t,Io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=t)}function sT(n,e){var t=Dt;Dt=t!==0&&4>t?t:4,n(!0);var i=gh.transition;gh.transition={};try{n(!1),e()}finally{Dt=t,gh.transition=i}}function RS(){return Ki().memoizedState}function oT(n,e,t){var i=Ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},bS(n))PS(e,t);else if(t=cS(n,e,t,i),t!==null){var r=$n();cr(t,n,i,r),LS(t,e,i)}}function aT(n,e,t){var i=Ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(bS(n))PS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,dr(a,o)){var l=e.interleaved;l===null?(r.next=r,Bg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=cS(n,e,r,i),t!==null&&(r=$n(),cr(t,n,i,r),LS(t,e,i))}}function bS(n){var e=n.alternate;return n===jt||e!==null&&e===jt}function PS(n,e){Ql=qf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function LS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ag(n,t)}}var Kf={readContext:qi,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},lT={readContext:qi,useCallback:function(n,e){return mr().memoizedState=[n,e===void 0?null:e],n},useContext:qi,useEffect:z_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ff(4194308,4,ES.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ff(4194308,4,n,e)},useInsertionEffect:function(n,e){return ff(4,2,n,e)},useMemo:function(n,e){var t=mr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=oT.bind(null,jt,n),[i.memoizedState,n]},useRef:function(n){var e=mr();return n={current:n},e.memoizedState=n},useState:k_,useDebugValue:qg,useDeferredValue:function(n){return mr().memoizedState=n},useTransition:function(){var n=k_(!1),e=n[0];return n=sT.bind(null,n[1]),mr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=jt,r=mr();if(Bt){if(t===void 0)throw Error(pe(407));t=t()}else{if(t=e(),yn===null)throw Error(pe(349));Do&30||mS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,z_(_S.bind(null,i,s,n),[n]),i.flags|=2048,Pu(9,gS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mr(),e=yn.identifierPrefix;if(Bt){var t=Vr,i=Hr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ru++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=rT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},uT={readContext:qi,useCallback:TS,useContext:qi,useEffect:$g,useImperativeHandle:wS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:AS,useReducer:_h,useRef:yS,useState:function(){return _h(bu)},useDebugValue:qg,useDeferredValue:function(n){var e=Ki();return CS(e,cn.memoizedState,n)},useTransition:function(){var n=_h(bu)[0],e=Ki().memoizedState;return[n,e]},useMutableSource:hS,useSyncExternalStore:pS,useId:RS,unstable_isNewReconciler:!1},cT={readContext:qi,useCallback:TS,useContext:qi,useEffect:$g,useImperativeHandle:wS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:AS,useReducer:vh,useRef:yS,useState:function(){return vh(bu)},useDebugValue:qg,useDeferredValue:function(n){var e=Ki();return cn===null?e.memoizedState=n:CS(e,cn.memoizedState,n)},useTransition:function(){var n=vh(bu)[0],e=Ki().memoizedState;return[n,e]},useMutableSource:hS,useSyncExternalStore:pS,useId:RS,unstable_isNewReconciler:!1};function ir(n,e){if(n&&n.defaultProps){e=qt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function jp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:qt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ld={isMounted:function(n){return(n=n._reactInternals)?Ho(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Ps(n),s=Yr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),uf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$n(),r=Ps(n),s=Yr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),uf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$n(),i=Ps(n),r=Yr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rs(n,r,i),e!==null&&(cr(e,n,i,t),uf(e,n,i))}};function B_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mu(t,i)||!Mu(r,s):!0}function DS(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=qi(s):(r=oi(e)?Po:zn.current,i=e.contextTypes,s=(i=i!=null)?$a(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function H_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ld.enqueueReplaceState(e,e.state,null)}function $p(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Hg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qi(s):(s=oi(e)?Po:zn.current,r.context=$a(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ld.enqueueReplaceState(r,r.state,null),jf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Qa(n,e){try{var t="",i=e;do t+=kE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function xh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function qp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function IS(n,e,t){t=Yr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Qf||(Qf=!0,sm=i),qp(n,e)},t}function US(n,e,t){t=Yr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){qp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){qp(n,e),typeof i!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function V_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new fT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=TT.bind(null,n,e,t),e.then(n,n))}function G_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function W_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yr(-1,1),e.tag=2,Rs(t,e,1))),t.lanes|=1),n)}var dT=ts.ReactCurrentOwner,ri=!1;function Wn(n,e,t,i){e.child=n===null?uS(e,null,t,i):Ka(e,n.child,t,i)}function X_(n,e,t,i,r){t=t.render;var s=e.ref;return Na(e,r),i=Yg(n,e,t,i,s,r),t=jg(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Bt&&t&&Ug(e),e.flags|=1,Wn(n,e,i,r),e.child)}function Y_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!i0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,NS(n,e,s,i,r)):(n=mf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Mu,t(o,i)&&n.ref===e.ref)return Zr(n,e,r)}return e.flags|=1,n=Ls(s,i),n.ref=e.ref,n.return=e,e.child=n}function NS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Mu(s,i)&&n.ref===e.ref)if(ri=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ri=!0);else return e.lanes=n.lanes,Zr(n,e,r)}return Kp(n,e,t,i,r)}function FS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Aa,xi),xi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Nt(Aa,xi),xi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Nt(Aa,xi),xi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Nt(Aa,xi),xi|=i;return Wn(n,e,r,t),e.child}function OS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Kp(n,e,t,i,r){var s=oi(t)?Po:zn.current;return s=$a(e,s),Na(e,r),t=Yg(n,e,t,i,s,r),i=jg(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Bt&&i&&Ug(e),e.flags|=1,Wn(n,e,t,r),e.child)}function j_(n,e,t,i,r){if(oi(t)){var s=!0;Vf(e)}else s=!1;if(Na(e,r),e.stateNode===null)df(n,e),DS(e,t,i),$p(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=qi(u):(u=oi(t)?Po:zn.current,u=$a(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&H_(e,o,i,u),ds=!1;var d=e.memoizedState;o.state=d,jf(e,i,o,r),l=e.memoizedState,a!==i||d!==l||si.current||ds?(typeof c=="function"&&(jp(e,t,c,i),l=e.memoizedState),(a=ds||B_(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ir(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=qi(l):(l=oi(t)?Po:zn.current,l=$a(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&H_(e,o,i,l),ds=!1,d=e.memoizedState,o.state=d,jf(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||si.current||ds?(typeof p=="function"&&(jp(e,t,p,i),_=e.memoizedState),(u=ds||B_(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Zp(n,e,t,i,s,r)}function Zp(n,e,t,i,r,s){OS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&D_(e,t,!1),Zr(n,e,s);i=e.stateNode,dT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ka(e,n.child,null,s),e.child=Ka(e,null,a,s)):Wn(n,e,a,s),e.memoizedState=i.state,r&&D_(e,t,!0),e.child}function kS(n){var e=n.stateNode;e.pendingContext?L_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&L_(n,e.context,!1),Vg(n,e.containerInfo)}function $_(n,e,t,i,r){return qa(),Fg(r),e.flags|=256,Wn(n,e,t,i),e.child}var Qp={dehydrated:null,treeContext:null,retryLane:0};function Jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function zS(n,e,t){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Nt(Wt,r&1),n===null)return Xp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ud(o,i,0,null),n=Mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Jp(t),e.memoizedState=Qp,n):Kg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ls(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=Mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Jp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Qp,i}return s=n.child,n=s.sibling,i=Ls(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Kg(n,e){return e=Ud({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dc(n,e,t,i){return i!==null&&Fg(i),Ka(e,n.child,null,t),n=Kg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function hT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=xh(Error(pe(422))),dc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ud({mode:"visible",children:i.children},r,0,null),s=Mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ka(e,n.child,null,o),e.child.memoizedState=Jp(o),e.memoizedState=Qp,s);if(!(e.mode&1))return dc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=xh(s,i,void 0),dc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ri||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Kr(n,r),cr(i,n,r,-1))}return n0(),i=xh(Error(pe(421))),dc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=AT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Cs(r.nextSibling),bi=e,Bt=!0,sr=null,n!==null&&(zi[Bi++]=Hr,zi[Bi++]=Vr,zi[Bi++]=Lo,Hr=n.id,Vr=n.overflow,Lo=e),e=Kg(e,i.children),e.flags|=4096,e)}function q_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Yp(n.return,e,t)}function yh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function BS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wn(n,e,i.children,t),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&q_(n,t,e);else if(n.tag===19)q_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Nt(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&$f(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),yh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&$f(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}yh(e,!0,t,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function df(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(pe(153));if(e.child!==null){for(n=e.child,t=Ls(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ls(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function pT(n,e,t){switch(e.tag){case 3:kS(e),qa();break;case 5:dS(e);break;case 1:oi(e.type)&&Vf(e);break;case 4:Vg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Nt(Xf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Nt(Wt,Wt.current&1),e.flags|=128,null):t&e.child.childLanes?zS(n,e,t):(Nt(Wt,Wt.current&1),n=Zr(n,e,t),n!==null?n.sibling:null);Nt(Wt,Wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return BS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Nt(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,FS(n,e,t)}return Zr(n,e,t)}var HS,em,VS,GS;HS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};em=function(){};VS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,go(Ar.current);var s=null;switch(t){case"input":r=Mp(n,r),i=Mp(n,i),s=[];break;case"select":r=qt({},r,{value:void 0}),i=qt({},i,{value:void 0}),s=[];break;case"textarea":r=Tp(n,r),i=Tp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Bf)}Cp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};GS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ml(n,e){if(!Bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Pn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function mT(n,e,t){var i=e.pendingProps;switch(Ng(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(e),null;case 1:return oi(e.type)&&Hf(),Pn(e),null;case 3:return i=e.stateNode,Za(),zt(si),zt(zn),Wg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(cc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr!==null&&(lm(sr),sr=null))),em(n,e),Pn(e),null;case 5:Gg(e);var r=go(Cu.current);if(t=e.type,n!==null&&e.stateNode!=null)VS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Pn(e),null}if(n=go(Ar.current),cc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yr]=e,i[Tu]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<kl.length;r++)Ft(kl[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":r_(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":o_(i,s),Ft("invalid",i)}Cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,n),r=["children",""+a]):mu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":tc(i),s_(i,s,!0);break;case"textarea":tc(i),a_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_y(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yr]=e,n[Tu]=i,HS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Rp(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<kl.length;r++)Ft(kl[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":r_(n,i),r=Mp(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=qt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":o_(n,i),r=Tp(n,i),Ft("invalid",n);break;default:r=i}Cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&gu(n,l):typeof l=="number"&&gu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&yg(n,s,l,o))}switch(t){case"input":tc(n),s_(n,i,!1);break;case"textarea":tc(n),a_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Os(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?La(n,!!i.multiple,s,!1):i.defaultValue!=null&&La(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Bf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pn(e),null;case 6:if(n&&e.stateNode!=null)GS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(t=go(Cu.current),go(Ar.current),cc(e)){if(i=e.stateNode,t=e.memoizedProps,i[yr]=e,(s=i.nodeValue!==t)&&(n=bi,n!==null))switch(n.tag){case 3:uc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&uc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yr]=e,e.stateNode=i}return Pn(e),null;case 13:if(zt(Wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Ai!==null&&e.mode&1&&!(e.flags&128))aS(),qa(),e.flags|=98560,s=!1;else if(s=cc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[yr]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pn(e),s=!1}else sr!==null&&(lm(sr),sr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Wt.current&1?dn===0&&(dn=3):n0())),e.updateQueue!==null&&(e.flags|=4),Pn(e),null);case 4:return Za(),em(n,e),n===null&&Eu(e.stateNode.containerInfo),Pn(e),null;case 10:return zg(e.type._context),Pn(e),null;case 17:return oi(e.type)&&Hf(),Pn(e),null;case 19:if(zt(Wt),s=e.memoizedState,s===null)return Pn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ml(s,!1);else{if(dn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=$f(n),o!==null){for(e.flags|=128,Ml(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Nt(Wt,Wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&en()>Ja&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304)}else{if(!i)if(n=$f(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ml(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Bt)return Pn(e),null}else 2*en()-s.renderingStartTime>Ja&&t!==1073741824&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=en(),e.sibling=null,t=Wt.current,Nt(Wt,i?t&1|2:t&1),e):(Pn(e),null);case 22:case 23:return t0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xi&1073741824&&(Pn(e),e.subtreeFlags&6&&(e.flags|=8192)):Pn(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function gT(n,e){switch(Ng(e),e.tag){case 1:return oi(e.type)&&Hf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Za(),zt(si),zt(zn),Wg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Gg(e),null;case 13:if(zt(Wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return zt(Wt),null;case 4:return Za(),null;case 10:return zg(e.type._context),null;case 22:case 23:return t0(),null;case 24:return null;default:return null}}var hc=!1,Nn=!1,_T=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Kt(n,e,i)}else t.current=null}function tm(n,e,t){try{t()}catch(i){Kt(n,e,i)}}var K_=!1;function vT(n,e){if(kp=Of,n=$y(),Ig(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(zp={focusedElem:n,selectionRange:t},Of=!1,Re=e;Re!==null;)if(e=Re,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Re=n;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?m:ir(e.type,m),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(y){Kt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}return _=K_,K_=!1,_}function Jl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&tm(e,t,s)}r=r.next}while(r!==i)}}function Dd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function nm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function WS(n){var e=n.alternate;e!==null&&(n.alternate=null,WS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yr],delete e[Tu],delete e[Vp],delete e[eT],delete e[tT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function XS(n){return n.tag===5||n.tag===3||n.tag===4}function Z_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||XS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function im(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Bf));else if(i!==4&&(n=n.child,n!==null))for(im(n,e,t),n=n.sibling;n!==null;)im(n,e,t),n=n.sibling}function rm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(rm(n,e,t),n=n.sibling;n!==null;)rm(n,e,t),n=n.sibling}var En=null,rr=!1;function is(n,e,t){for(t=t.child;t!==null;)YS(n,e,t),t=t.sibling}function YS(n,e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(wd,t)}catch{}switch(t.tag){case 5:Nn||Ta(t,e);case 6:var i=En,r=rr;En=null,is(n,e,t),En=i,rr=r,En!==null&&(rr?(n=En,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):En.removeChild(t.stateNode));break;case 18:En!==null&&(rr?(n=En,t=t.stateNode,n.nodeType===8?hh(n.parentNode,t):n.nodeType===1&&hh(n,t),yu(n)):hh(En,t.stateNode));break;case 4:i=En,r=rr,En=t.stateNode.containerInfo,rr=!0,is(n,e,t),En=i,rr=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tm(t,e,o),r=r.next}while(r!==i)}is(n,e,t);break;case 1:if(!Nn&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Kt(t,e,a)}is(n,e,t);break;case 21:is(n,e,t);break;case 22:t.mode&1?(Nn=(i=Nn)||t.memoizedState!==null,is(n,e,t),Nn=i):is(n,e,t);break;default:is(n,e,t)}}function Q_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new _T),e.forEach(function(i){var r=CT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Qi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,rr=!1;break e;case 3:En=a.stateNode.containerInfo,rr=!0;break e;case 4:En=a.stateNode.containerInfo,rr=!0;break e}a=a.return}if(En===null)throw Error(pe(160));YS(s,o,r),En=null,rr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Kt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jS(e,n),e=e.sibling}function jS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Qi(e,n),pr(n),i&4){try{Jl(3,n,n.return),Dd(3,n)}catch(m){Kt(n,n.return,m)}try{Jl(5,n,n.return)}catch(m){Kt(n,n.return,m)}}break;case 1:Qi(e,n),pr(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(Qi(e,n),pr(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{gu(r,"")}catch(m){Kt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&my(r,s),Rp(a,o);var u=Rp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?yy(r,f):c==="dangerouslySetInnerHTML"?vy(r,f):c==="children"?gu(r,f):yg(r,c,f,u)}switch(a){case"input":Ep(r,s);break;case"textarea":gy(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?La(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[Tu]=s}catch(m){Kt(n,n.return,m)}}break;case 6:if(Qi(e,n),pr(n),i&4){if(n.stateNode===null)throw Error(pe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Kt(n,n.return,m)}}break;case 3:if(Qi(e,n),pr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{yu(e.containerInfo)}catch(m){Kt(n,n.return,m)}break;case 4:Qi(e,n),pr(n);break;case 13:Qi(e,n),pr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jg=en())),i&4&&Q_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Nn=(u=Nn)||c,Qi(e,n),Nn=u):Qi(e,n),pr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Re=n,c=n.child;c!==null;){for(f=Re=c;Re!==null;){switch(d=Re,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jl(4,d,d.return);break;case 1:Ta(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Kt(i,t,m)}}break;case 5:Ta(d,d.return);break;case 22:if(d.memoizedState!==null){ev(f);continue}}p!==null?(p.return=d,Re=p):ev(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xy("display",o))}catch(m){Kt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Kt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qi(e,n),pr(n),i&4&&Q_(n);break;case 21:break;default:Qi(e,n),pr(n)}}function pr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(XS(t)){var i=t;break e}t=t.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(gu(r,""),i.flags&=-33);var s=Z_(n);rm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Z_(n);im(n,a,o);break;default:throw Error(pe(161))}}catch(l){Kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xT(n,e,t){Re=n,$S(n)}function $S(n,e,t){for(var i=(n.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nn;a=hc;var u=Nn;if(hc=o,(Nn=l)&&!u)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?tv(r):l!==null?(l.return=o,Re=l):tv(r);for(;s!==null;)Re=s,$S(s),s=s.sibling;Re=r,hc=a,Nn=u}J_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):J_(n)}}function J_(n){for(;Re!==null;){var e=Re;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||Dd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ir(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}O_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&yu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Nn||e.flags&512&&nm(e)}catch(d){Kt(e,e.return,d)}}if(e===n){Re=null;break}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}}function ev(n){for(;Re!==null;){var e=Re;if(e===n){Re=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Re=t;break}Re=e.return}}function tv(n){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Dd(4,e)}catch(l){Kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{nm(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{nm(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===n){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var yT=Math.ceil,Zf=ts.ReactCurrentDispatcher,Zg=ts.ReactCurrentOwner,ji=ts.ReactCurrentBatchConfig,Mt=0,yn=null,an=null,Tn=0,xi=0,Aa=Ys(0),dn=0,Lu=null,Io=0,Id=0,Qg=0,eu=null,ti=null,Jg=0,Ja=1/0,Fr=null,Qf=!1,sm=null,bs=null,pc=!1,vs=null,Jf=0,tu=0,om=null,hf=-1,pf=0;function $n(){return Mt&6?en():hf!==-1?hf:hf=en()}function Ps(n){return n.mode&1?Mt&2&&Tn!==0?Tn&-Tn:iT.transition!==null?(pf===0&&(pf=Dy()),pf):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:zy(n.type)),n):1}function cr(n,e,t,i){if(50<tu)throw tu=0,om=null,Error(pe(185));Wu(n,t,i),(!(Mt&2)||n!==yn)&&(n===yn&&(!(Mt&2)&&(Id|=t),dn===4&&ms(n,Tn)),ai(n,i),t===1&&Mt===0&&!(e.mode&1)&&(Ja=en()+500,bd&&js()))}function ai(n,e){var t=n.callbackNode;iw(n,e);var i=Ff(n,n===yn?Tn:0);if(i===0)t!==null&&c_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&c_(t),e===1)n.tag===0?nT(nv.bind(null,n)):rS(nv.bind(null,n)),Qw(function(){!(Mt&6)&&js()}),t=null;else{switch(Iy(i)){case 1:t=Tg;break;case 4:t=Py;break;case 16:t=Nf;break;case 536870912:t=Ly;break;default:t=Nf}t=nM(t,qS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function qS(n,e){if(hf=-1,pf=0,Mt&6)throw Error(pe(327));var t=n.callbackNode;if(Fa()&&n.callbackNode!==t)return null;var i=Ff(n,n===yn?Tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ed(n,i);else{e=i;var r=Mt;Mt|=2;var s=ZS();(yn!==n||Tn!==e)&&(Fr=null,Ja=en()+500,So(n,e));do try{ET();break}catch(a){KS(n,a)}while(!0);kg(),Zf.current=s,Mt=r,an!==null?e=0:(yn=null,Tn=0,e=dn)}if(e!==0){if(e===2&&(r=Ip(n),r!==0&&(i=r,e=am(n,r))),e===1)throw t=Lu,So(n,0),ms(n,i),ai(n,en()),t;if(e===6)ms(n,i);else{if(r=n.current.alternate,!(i&30)&&!ST(r)&&(e=ed(n,i),e===2&&(s=Ip(n),s!==0&&(i=s,e=am(n,s))),e===1))throw t=Lu,So(n,0),ms(n,i),ai(n,en()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:so(n,ti,Fr);break;case 3:if(ms(n,i),(i&130023424)===i&&(e=Jg+500-en(),10<e)){if(Ff(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$n(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Hp(so.bind(null,n,ti,Fr),e);break}so(n,ti,Fr);break;case 4:if(ms(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=en()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yT(i/1960))-i,10<i){n.timeoutHandle=Hp(so.bind(null,n,ti,Fr),i);break}so(n,ti,Fr);break;case 5:so(n,ti,Fr);break;default:throw Error(pe(329))}}}return ai(n,en()),n.callbackNode===t?qS.bind(null,n):null}function am(n,e){var t=eu;return n.current.memoizedState.isDehydrated&&(So(n,e).flags|=256),n=ed(n,e),n!==2&&(e=ti,ti=t,e!==null&&lm(e)),n}function lm(n){ti===null?ti=n:ti.push.apply(ti,n)}function ST(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!dr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ms(n,e){for(e&=~Qg,e&=~Id,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function nv(n){if(Mt&6)throw Error(pe(327));Fa();var e=Ff(n,0);if(!(e&1))return ai(n,en()),null;var t=ed(n,e);if(n.tag!==0&&t===2){var i=Ip(n);i!==0&&(e=i,t=am(n,i))}if(t===1)throw t=Lu,So(n,0),ms(n,e),ai(n,en()),t;if(t===6)throw Error(pe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,so(n,ti,Fr),ai(n,en()),null}function e0(n,e){var t=Mt;Mt|=1;try{return n(e)}finally{Mt=t,Mt===0&&(Ja=en()+500,bd&&js())}}function Uo(n){vs!==null&&vs.tag===0&&!(Mt&6)&&Fa();var e=Mt;Mt|=1;var t=ji.transition,i=Dt;try{if(ji.transition=null,Dt=1,n)return n()}finally{Dt=i,ji.transition=t,Mt=e,!(Mt&6)&&js()}}function t0(){xi=Aa.current,zt(Aa)}function So(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Zw(t)),an!==null)for(t=an.return;t!==null;){var i=t;switch(Ng(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hf();break;case 3:Za(),zt(si),zt(zn),Wg();break;case 5:Gg(i);break;case 4:Za();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:zg(i.type._context);break;case 22:case 23:t0()}t=t.return}if(yn=n,an=n=Ls(n.current,null),Tn=xi=e,dn=0,Lu=null,Qg=Id=Io=0,ti=eu=null,mo!==null){for(e=0;e<mo.length;e++)if(t=mo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}mo=null}return n}function KS(n,e){do{var t=an;try{if(kg(),cf.current=Kf,qf){for(var i=jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qf=!1}if(Do=0,xn=cn=jt=null,Ql=!1,Ru=0,Zg.current=null,t===null||t.return===null){dn=1,Lu=e,an=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=G_(o);if(p!==null){p.flags&=-257,W_(p,o,a,s,e),p.mode&1&&V_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){V_(s,u,e),n0();break e}l=Error(pe(426))}}else if(Bt&&a.mode&1){var g=G_(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),W_(g,o,a,s,e),Fg(Qa(l,a));break e}}s=l=Qa(l,a),dn!==4&&(dn=2),eu===null?eu=[s]:eu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=IS(s,l,e);F_(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(bs===null||!bs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=US(s,a,e);F_(s,y);break e}}s=s.return}while(s!==null)}JS(t)}catch(w){e=w,an===t&&t!==null&&(an=t=t.return);continue}break}while(!0)}function ZS(){var n=Zf.current;return Zf.current=Kf,n===null?Kf:n}function n0(){(dn===0||dn===3||dn===2)&&(dn=4),yn===null||!(Io&268435455)&&!(Id&268435455)||ms(yn,Tn)}function ed(n,e){var t=Mt;Mt|=2;var i=ZS();(yn!==n||Tn!==e)&&(Fr=null,So(n,e));do try{MT();break}catch(r){KS(n,r)}while(!0);if(kg(),Mt=t,Zf.current=i,an!==null)throw Error(pe(261));return yn=null,Tn=0,dn}function MT(){for(;an!==null;)QS(an)}function ET(){for(;an!==null&&!$E();)QS(an)}function QS(n){var e=tM(n.alternate,n,xi);n.memoizedProps=n.pendingProps,e===null?JS(n):an=e,Zg.current=null}function JS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=gT(t,e),t!==null){t.flags&=32767,an=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,an=null;return}}else if(t=mT(t,e,xi),t!==null){an=t;return}if(e=e.sibling,e!==null){an=e;return}an=e=n}while(e!==null);dn===0&&(dn=5)}function so(n,e,t){var i=Dt,r=ji.transition;try{ji.transition=null,Dt=1,wT(n,e,t,i)}finally{ji.transition=r,Dt=i}return null}function wT(n,e,t,i){do Fa();while(vs!==null);if(Mt&6)throw Error(pe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(pe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(rw(n,s),n===yn&&(an=yn=null,Tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pc||(pc=!0,nM(Nf,function(){return Fa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ji.transition,ji.transition=null;var o=Dt;Dt=1;var a=Mt;Mt|=4,Zg.current=null,vT(n,t),jS(t,n),Ww(zp),Of=!!kp,zp=kp=null,n.current=t,xT(t),qE(),Mt=a,Dt=o,ji.transition=s}else n.current=t;if(pc&&(pc=!1,vs=n,Jf=r),s=n.pendingLanes,s===0&&(bs=null),QE(t.stateNode),ai(n,en()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qf)throw Qf=!1,n=sm,sm=null,n;return Jf&1&&n.tag!==0&&Fa(),s=n.pendingLanes,s&1?n===om?tu++:(tu=0,om=n):tu=0,js(),null}function Fa(){if(vs!==null){var n=Iy(Jf),e=ji.transition,t=Dt;try{if(ji.transition=null,Dt=16>n?16:n,vs===null)var i=!1;else{if(n=vs,vs=null,Jf=0,Mt&6)throw Error(pe(331));var r=Mt;for(Mt|=4,Re=n.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Re=u;Re!==null;){var c=Re;switch(c.tag){case 0:case 11:case 15:Jl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Re=f;else for(;Re!==null;){c=Re;var d=c.sibling,p=c.return;if(WS(c),c===u){Re=null;break}if(d!==null){d.return=p,Re=d;break}Re=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Re=h;break e}Re=s.return}}var v=n.current;for(Re=v;Re!==null;){o=Re;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Re=x;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dd(9,a)}}catch(w){Kt(a,a.return,w)}if(a===o){Re=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Re=y;break e}Re=a.return}}if(Mt=r,js(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(wd,n)}catch{}i=!0}return i}finally{Dt=t,ji.transition=e}}return!1}function iv(n,e,t){e=Qa(t,e),e=IS(n,e,1),n=Rs(n,e,1),e=$n(),n!==null&&(Wu(n,1,e),ai(n,e))}function Kt(n,e,t){if(n.tag===3)iv(n,n,t);else for(;e!==null;){if(e.tag===3){iv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bs===null||!bs.has(i))){n=Qa(t,n),n=US(e,n,1),e=Rs(e,n,1),n=$n(),e!==null&&(Wu(e,1,n),ai(e,n));break}}e=e.return}}function TT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$n(),n.pingedLanes|=n.suspendedLanes&t,yn===n&&(Tn&t)===t&&(dn===4||dn===3&&(Tn&130023424)===Tn&&500>en()-Jg?So(n,0):Qg|=t),ai(n,e)}function eM(n,e){e===0&&(n.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var t=$n();n=Kr(n,e),n!==null&&(Wu(n,e,t),ai(n,t))}function AT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),eM(n,t)}function CT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),eM(n,t)}var tM;tM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||si.current)ri=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ri=!1,pT(n,e,t);ri=!!(n.flags&131072)}else ri=!1,Bt&&e.flags&1048576&&sS(e,Wf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;df(n,e),n=e.pendingProps;var r=$a(e,zn.current);Na(e,t),r=Yg(null,e,i,n,r,t);var s=jg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oi(i)?(s=!0,Vf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hg(e),r.updater=Ld,e.stateNode=r,r._reactInternals=e,$p(e,i,n,t),e=Zp(null,e,i,!0,s,t)):(e.tag=0,Bt&&s&&Ug(e),Wn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(df(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bT(i),n=ir(i,n),r){case 0:e=Kp(null,e,i,n,t);break e;case 1:e=j_(null,e,i,n,t);break e;case 11:e=X_(null,e,i,n,t);break e;case 14:e=Y_(null,e,i,ir(i.type,n),t);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),Kp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),j_(n,e,i,r,t);case 3:e:{if(kS(e),n===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fS(n,e),jf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qa(Error(pe(423)),e),e=$_(n,e,i,t,r);break e}else if(i!==r){r=Qa(Error(pe(424)),e),e=$_(n,e,i,t,r);break e}else for(Ai=Cs(e.stateNode.containerInfo.firstChild),bi=e,Bt=!0,sr=null,t=uS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),i===r){e=Zr(n,e,t);break e}Wn(n,e,i,t)}e=e.child}return e;case 5:return dS(e),n===null&&Xp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Bp(i,r)?o=null:s!==null&&Bp(i,s)&&(e.flags|=32),OS(n,e),Wn(n,e,o,t),e.child;case 6:return n===null&&Xp(e),null;case 13:return zS(n,e,t);case 4:return Vg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ka(e,null,i,t):Wn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),X_(n,e,i,r,t);case 7:return Wn(n,e,e.pendingProps,t),e.child;case 8:return Wn(n,e,e.pendingProps.children,t),e.child;case 12:return Wn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Nt(Xf,i._currentValue),i._currentValue=o,s!==null)if(dr(s.value,o)){if(s.children===r.children&&!si.current){e=Zr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Yp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Yp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Na(e,t),r=qi(r),i=i(r),e.flags|=1,Wn(n,e,i,t),e.child;case 14:return i=e.type,r=ir(i,e.pendingProps),r=ir(i.type,r),Y_(n,e,i,r,t);case 15:return NS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),df(n,e),e.tag=1,oi(i)?(n=!0,Vf(e)):n=!1,Na(e,t),DS(e,i,r),$p(e,i,r,t),Zp(null,e,i,!0,n,t);case 19:return BS(n,e,t);case 22:return FS(n,e,t)}throw Error(pe(156,e.tag))};function nM(n,e){return by(n,e)}function RT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gi(n,e,t,i){return new RT(n,e,t,i)}function i0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function bT(n){if(typeof n=="function")return i0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Mg)return 11;if(n===Eg)return 14}return 2}function Ls(n,e){var t=n.alternate;return t===null?(t=Gi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function mf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")i0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ga:return Mo(t.children,r,s,e);case Sg:o=8,r|=8;break;case vp:return n=Gi(12,t,e,r|2),n.elementType=vp,n.lanes=s,n;case xp:return n=Gi(13,t,e,r),n.elementType=xp,n.lanes=s,n;case yp:return n=Gi(19,t,e,r),n.elementType=yp,n.lanes=s,n;case dy:return Ud(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cy:o=10;break e;case fy:o=9;break e;case Mg:o=11;break e;case Eg:o=14;break e;case fs:o=16,i=null;break e}throw Error(pe(130,n==null?n:typeof n,""))}return e=Gi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Mo(n,e,t,i){return n=Gi(7,n,i,e),n.lanes=t,n}function Ud(n,e,t,i){return n=Gi(22,n,i,e),n.elementType=dy,n.lanes=t,n.stateNode={isHidden:!1},n}function Sh(n,e,t){return n=Gi(6,n,null,e),n.lanes=t,n}function Mh(n,e,t){return e=Gi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function PT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function r0(n,e,t,i,r,s,o,a,l){return n=new PT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hg(s),n}function LT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function iM(n){if(!n)return ks;n=n._reactInternals;e:{if(Ho(n)!==n||n.tag!==1)throw Error(pe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(oi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(n.tag===1){var t=n.type;if(oi(t))return iS(n,t,e)}return e}function rM(n,e,t,i,r,s,o,a,l){return n=r0(t,i,!0,n,r,s,o,a,l),n.context=iM(null),t=n.current,i=$n(),r=Ps(t),s=Yr(i,r),s.callback=e??null,Rs(t,s,r),n.current.lanes=r,Wu(n,r,i),ai(n,i),n}function Nd(n,e,t,i){var r=e.current,s=$n(),o=Ps(r);return t=iM(t),e.context===null?e.context=t:e.pendingContext=t,e=Yr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rs(r,e,o),n!==null&&(cr(n,r,o,s),uf(n,r,o)),o}function td(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function s0(n,e){rv(n,e),(n=n.alternate)&&rv(n,e)}function DT(){return null}var sM=typeof reportError=="function"?reportError:function(n){console.error(n)};function o0(n){this._internalRoot=n}Fd.prototype.render=o0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(pe(409));Nd(n,e,null,null)};Fd.prototype.unmount=o0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Uo(function(){Nd(null,n,null,null)}),e[qr]=null}};function Fd(n){this._internalRoot=n}Fd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ps.length&&e!==0&&e<ps[t].priority;t++);ps.splice(t,0,n),t===0&&ky(n)}};function a0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sv(){}function IT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=td(o);s.call(u)}}var o=rM(e,i,n,0,null,!1,!1,"",sv);return n._reactRootContainer=o,n[qr]=o.current,Eu(n.nodeType===8?n.parentNode:n),Uo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=td(l);a.call(u)}}var l=r0(n,0,!1,null,null,!1,!1,"",sv);return n._reactRootContainer=l,n[qr]=l.current,Eu(n.nodeType===8?n.parentNode:n),Uo(function(){Nd(e,l,t,i)}),l}function kd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=td(o);a.call(l)}}Nd(e,o,n,r)}else o=IT(t,e,n,r,i);return td(o)}Uy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ol(e.pendingLanes);t!==0&&(Ag(e,t|1),ai(e,en()),!(Mt&6)&&(Ja=en()+500,js()))}break;case 13:Uo(function(){var i=Kr(n,1);if(i!==null){var r=$n();cr(i,n,1,r)}}),s0(n,1)}};Cg=function(n){if(n.tag===13){var e=Kr(n,134217728);if(e!==null){var t=$n();cr(e,n,134217728,t)}s0(n,134217728)}};Ny=function(n){if(n.tag===13){var e=Ps(n),t=Kr(n,e);if(t!==null){var i=$n();cr(t,n,e,i)}s0(n,e)}};Fy=function(){return Dt};Oy=function(n,e){var t=Dt;try{return Dt=n,e()}finally{Dt=t}};Pp=function(n,e,t){switch(e){case"input":if(Ep(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rd(i);if(!r)throw Error(pe(90));py(i),Ep(i,r)}}}break;case"textarea":gy(n,t);break;case"select":e=t.value,e!=null&&La(n,!!t.multiple,e,!1)}};Ey=e0;wy=Uo;var UT={usingClientEntryPoint:!1,Events:[Yu,ya,Rd,Sy,My,e0]},El={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NT={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ts.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cy(n),n===null?null:n.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{wd=mc.inject(NT),Tr=mc}catch{}}Ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;Ui.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a0(e))throw Error(pe(200));return LT(n,e,null,t)};Ui.createRoot=function(n,e){if(!a0(n))throw Error(pe(299));var t=!1,i="",r=sM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=r0(n,1,!1,null,null,t,!1,i,r),n[qr]=e.current,Eu(n.nodeType===8?n.parentNode:n),new o0(e)};Ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(pe(188)):(n=Object.keys(n).join(","),Error(pe(268,n)));return n=Cy(e),n=n===null?null:n.stateNode,n};Ui.flushSync=function(n){return Uo(n)};Ui.hydrate=function(n,e,t){if(!Od(e))throw Error(pe(200));return kd(null,n,e,!0,t)};Ui.hydrateRoot=function(n,e,t){if(!a0(n))throw Error(pe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=sM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=rM(e,null,n,1,t??null,r,!1,s,o),n[qr]=e.current,Eu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Fd(e)};Ui.render=function(n,e,t){if(!Od(e))throw Error(pe(200));return kd(null,n,e,!1,t)};Ui.unmountComponentAtNode=function(n){if(!Od(n))throw Error(pe(40));return n._reactRootContainer?(Uo(function(){kd(null,null,n,!1,function(){n._reactRootContainer=null,n[qr]=null})}),!0):!1};Ui.unstable_batchedUpdates=e0;Ui.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Od(t))throw Error(pe(200));if(n==null||n._reactInternals===void 0)throw Error(pe(38));return kd(n,e,t,!1,i)};Ui.version="18.3.1-next-f1338f8080-20240426";function oM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oM)}catch(n){console.error(n)}}oM(),oy.exports=Ui;var FT=oy.exports,ov=FT;gp.createRoot=ov.createRoot,gp.hydrateRoot=ov.hydrateRoot;const hs=[{id:"intro",phase:"01",tag:"SUMMARY",title:"Shubh Khandelwal",content:"Robotics Software Engineer deploying ROS2-based autonomous systems for AGVs, UGVs, and industrial manipulators.",content2:`Combines C++ object-oriented design with mathematical modeling to translate algorithmic simulations into high-precision
               hardware execution, delivering scalable, production-ready solutions for advanced robotics initiatives.`,state:"MPU Initialization"},{id:"education",phase:"02",tag:"EDUCATION & SKILLS",title:"Educational Qualifications",timeline:[{title:"B.Tech. CSE — IIITDM Kancheepuram, Chennai — CGPA: 8.26",date:"November 2022 – June 2026"}],content:"Academic milestones and technical certifications.",content2:"My technical arsenal for algorithmic development, system integration, and testing.",skills:[{title:"ROS2, ROS, microROS, Rosserial, RTDE",date:"Robotics Frameworks"},{title:"Gazebo, Gazebo Sim, URSim",date:"Simulation Modules"},{title:"Arduino, ESP32 and STM32 boards",date:"Embedded Systems"},{title:"Pytorch, Tensorflow, Gymnasium, OpenCV",date:"Machine Learning Modules"},{title:"C++, CUDA C++, Python",date:"Languages"},{title:"Git, Github, CI/CD, Docker, CMake, Bash, Prompt Engineering",date:"Development Tools"}],state:"PCB Connection"},{id:"experience",phase:"03",tag:"EXPERIENCE",title:"Work Experience",content:"A track record of integrating systems and pushing features forward within engineering teams.",entries:[{label:"Impaqt Robotics",role:"Robotics Software Intern",date:"JULY 2025 – DECEMBER 2025",link:"https://www.linkedin.com/company/impaqt-robotics",bullets:["Integrated hardware interfaces with UR5, UR5e, UR10 and UR20 increasing efficiency by 20%.","Architected MoveIt2 motion planning pipelines and optimized OMPL trajectories for industrial manipulation tasks.","Implemented spline-based (B-spline, Catmull-Rom spline) trajectory generation for C2 continuous trajectories.","Developed task-level manipulation workflows (pick-place, palletizing) using MoveIt2 Task Constructor.","Validated pipelines using URSim and on real hardware; debugged controllers, planning and execution issues.","Designed and deployed dynamic HMIs for exporting pallet configurations, and performing palletization."]},{label:"Mars Rover Students",role:"Electronics Lead",date:"APRIL 2024 – MARCH 2025",link:"https://www.linkedin.com/company/mars-rover-students-club-iiitdm-kancheepuram",bullets:["Directed a cross-functional team of 20+ engineers to design, test, and deploy embedded control systems for rovers, enhancing operational reliability under competition constraints.","Programmed and optimized ROS nodes and firmware using C++ and Arduino, improving real-time rover response time and reducing positional drift by over 50%.","Spearheaded modular architecture redesign, decreasing system downtime by 60% during field tests through efficient error handling and hardware abstraction.","Enabled high-precision actuation by integrating encoder feedback and tuning PID to achieve 5cm localization error."]}],state:"Chassis Placement"},{id:"projects",phase:"04",tag:"PROJECTS",title:"Developed Projects",content:"Bridging the gap between robust back-end object-oriented code and seamless front-end control.",entries:[{label:"Spline-based Trajectory Generator",link:"https://github.com/ShUbHkHaNdElWaL493/Spline-Planner",bullets:["Architected a C++ path planning library using Catmull-Rom splines and B-splines for high-performance execution.","Integrated FORTRAN-based FITPACK libraries for faster and accurate spline fitting using CMake.","Tested the trajectory generation using UR manipulators, providing a smoothing tolerance of 5 mm."]},{label:"Autonomous Manipulator Control using RL",link:"https://github.com/ShUbHkHaNdElWaL493/skrl-ik",bullets:["Designed and simulated a 4-DoF robotic arm using Xacro, ROS2 Jazzy, Rviz and Gazebo Sim for real-time applications.","Developed reinforcement learning training environments using Gymnasium integrated with rclpy nodes.","Tested PPO, TRPO and DQN models, localizing the gripper to 1cm error and reducing simulation latency to less than 1s."]},{label:"4-Wheel-4-Steering-Rover Control",link:"https://github.com/ShUbHkHaNdElWaL493/4-Wheel-4-Steering-Rover-Control",bullets:["Engineered multi-mode control algorithms for Ackermann, Spot and Crab for mobile robotic platform.","Applied PID tuning to the drive system for reducing vibrations by 50% and enhancing motion control.","Integrated Neo-6M GPS and encoder feedback with the rover system for precise localization."]},{label:"Warehouse Automation",link:"https://github.com/ShUbHkHaNdElWaL493/Warehouse-Automation",bullets:["Implemented rigid path algorithms in a Differential Drive bot for warehouse automation to remove uncertainty.","Verified control over multiple environments using IR sensors and LiDAR SLAM for accurate localization.","Created an end-user interface using Flask, microROS and rclpy for system-level functionality control."]}],state:"Sensor Addition"},{id:"achievements",phase:"05",tag:"ACHIEVEMENTS",title:"Performance Benchmarks",content:"Highlights from my professional journey through robotics.",metrics:[{value:"IRC 2025: 16th globally",label:"International Rover Challenge 2025: Led the software-electronics integration efforts, and increased the team standing to 16th globally"},{value:"IRoC-U 2024: 6th nationwide",label:"ISRO Robotics Challenge URSC (IRoC-U) 2024: Showcased the rover at Bharat Mandapam, New Delhi in the presence of the President of India"},{value:"IRC 2024: 21st worldwide",label:"International Rover Challenge 2024: Qualified among top 52 teams worldwide and secured 21st rank globally"}],state:"Suspension Attachment"},{id:"contact",phase:"06",tag:"CONTACT",title:"Contact Information",content:"Looking forward to meeting new people and getting new experiences.",links:[{icon:"📧",label:"Send me an e-mail.",type:"email",href:"mailto:shubh4664@gmail.com"},{icon:"🔗",label:"My LinkedIn profile.",type:"linkedin",href:"https://www.linkedin.com/in/shubh--khandelwal/"},{icon:"💻",label:"My Github account.",type:"github",href:"https://github.com/ShUbHkHaNdElWaL493"}],state:"Rover Activation"}];function OT({phase:n,tag:e}){return ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"'Share Tech Mono', monospace",fontSize:10,letterSpacing:"0.2em",color:"#FF7A00",marginBottom:"1rem"},children:[ae.jsx("span",{style:{display:"inline-block",width:20,height:1,background:"#FF7A00"}}),n," — ",e]})}function av({label:n}){return ae.jsx("span",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:10,padding:"4px 10px",border:"1px solid rgba(255,122,0,0.3)",color:"#FFA500",letterSpacing:"0.08em",background:"rgba(255,122,0,0.05)",display:"inline-block"},children:n})}function gc({items:n}){return ae.jsx("div",{style:{margin:"1.4rem 0"},children:n.map((e,t)=>ae.jsxs("div",{style:{display:"flex",gap:16,paddingBottom:16,borderBottom:"1px solid rgba(255,122,0,0.07)",marginBottom:0},children:[ae.jsx("div",{style:{position:"relative",paddingTop:5},children:ae.jsx("div",{style:{width:8,height:8,border:"1px solid #FF7A00",borderRadius:"50%",flexShrink:0}})}),ae.jsxs("div",{children:[ae.jsx("div",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:15,fontWeight:600,color:"#fff"},children:e.title}),ae.jsx("div",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:12,color:"#4a5568",marginTop:2,letterSpacing:"0.08em"},children:e.date})]})]},t))})}function lv({items:n,columns:e=1}){return ae.jsx("div",{style:{display:"grid",gridTemplateColumns:e===2?"1fr 1fr":"1fr",gap:16,margin:"1.5rem 0"},children:n.map((t,i)=>{const r=t.link?"a":"div";return ae.jsxs(r,{href:t.link,target:t.link?"_blank":void 0,rel:t.link?"noopener noreferrer":void 0,style:{display:"block",padding:"1.4rem",background:"#111418",border:"1px solid rgba(255,122,0,0.12)",textDecoration:"none",color:"inherit",transition:"all 0.2s ease",cursor:t.link?"pointer":"default"},onMouseEnter:s=>{t.link&&(s.currentTarget.style.borderColor="#FF7A00",s.currentTarget.style.background="rgba(255,122,0,0.05)",s.currentTarget.style.transform=e===2?"translateY(-6px)":"translateX(6px)")},onMouseLeave:s=>{t.link&&(s.currentTarget.style.borderColor="rgba(255,122,0,0.12)",s.currentTarget.style.background="#111418",s.currentTarget.style.transform=e===2?"translateY(0px)":"translateX(0px)")},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[ae.jsx("h3",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:"1.3rem",fontWeight:600,color:"#fff",margin:0},children:t.label}),t.link&&ae.jsx("span",{style:{color:"#FF7A00",fontFamily:"'Share Tech Mono', monospace",fontSize:"11px",letterSpacing:"0.1em"}})]}),(t.role||t.date)&&ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,paddingBottom:10,borderBottom:"1px solid rgba(255,122,0,0.1)"},children:[ae.jsx("span",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:"0.95rem",color:"#FF7A00",letterSpacing:"0.05em"},children:t.role}),ae.jsx("span",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:"0.85rem",color:"#8a95a8",letterSpacing:"0.08em"},children:t.date})]}),t.bullets&&ae.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"#8a95a8",fontSize:"1.05rem",lineHeight:1.7},children:t.bullets.map((s,o)=>ae.jsx("li",{style:{paddingLeft:"0.2rem",marginBottom:"6px"},children:s},o))})]},i)})})}function Eh({items:n}){return ae.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:12,margin:"1.5rem 0"},children:n.map((e,t)=>ae.jsxs("div",{style:{background:"#111418",border:"1px solid rgba(255,122,0,0.12)",padding:"1rem"},children:[ae.jsx("div",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:"1.75rem",fontWeight:700,color:"#FF7A00"},children:e.value}),ae.jsx("div",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:12,color:"#4a5568",letterSpacing:"0.1em",marginTop:3},children:e.label})]},t))})}function uv({links:n}){return ae.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:"1.5rem"},children:n.map((e,t)=>ae.jsxs("a",{href:e.href,style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",border:"1px solid rgba(255,122,0,0.2)",background:"#111418",color:"#d0d8e8",textDecoration:"none",fontFamily:"'Share Tech Mono', monospace",fontSize:14,letterSpacing:"0.05em",transition:"all 0.2s"},onMouseEnter:i=>{i.currentTarget.style.borderColor="#FF7A00",i.currentTarget.style.color="#FF7A00",i.currentTarget.style.background="rgba(255,122,0,0.05)"},onMouseLeave:i=>{i.currentTarget.style.borderColor="rgba(255,122,0,0.2)",i.currentTarget.style.color="#d0d8e8",i.currentTarget.style.background="#111418"},children:[ae.jsx("span",{style:{color:"#FF7A00",width:20,textAlign:"center"},children:e.icon}),e.label]},t))})}const kT=ei.forwardRef(function({activePhase:e,sectionRefs:t},i){return ae.jsxs("div",{className:"left-pane",ref:i,children:[ae.jsxs("div",{style:{position:"sticky",top:0,padding:"1.5rem 1.5rem 1.5rem",borderBottom:"1px solid rgba(255,122,0,0.1)",background:"#07080a",zIndex:100},children:[ae.jsxs("h1",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:"2.1rem",fontWeight:900,letterSpacing:"-0.02em",lineHeight:1.1,color:"#fff",margin:0},children:["Shubh Khandelwal",ae.jsx("span",{style:{fontSize:"1.8rem",color:"#FF7A00",display:"block"},children:"Robotics Software Engineer"})]}),ae.jsxs("div",{style:{fontFamily:"'Share Tech Mono', monospace",fontSize:13,color:"#8a95a8",marginTop:8,letterSpacing:"0.08em"},children:["∷ ROS2 · MOTION PLANNING · MANIPULATORS · AGV · UGV",ae.jsx("br",{}),"∷ IIITDM KANCHEEPURAM"]})]}),hs.map((r,s)=>{const o=()=>{switch(s){case 0:return ae.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:"24px",flexWrap:"wrap-reverse",marginBottom:"0.8rem"},children:[ae.jsxs("div",{style:{flex:1,minWidth:"250px"},children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem",fontWeight:400},children:r.content}),r.content2&&ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem",fontWeight:400},children:r.content2}),r.links&&ae.jsx(uv,{links:r.links})]}),ae.jsx("div",{style:{width:"320px",height:"400px",borderRadius:"50%",flexShrink:0,border:"2px solid rgba(255,122,0,0.5)",boxShadow:"0 0 20px rgba(255,122,0,0.15)",overflow:"hidden",position:"relative",background:"rgba(255,122,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:ae.jsx("img",{src:"Shubh_Khandelwal.png",alt:"Shubh Khandelwal",style:{width:"100%",height:"100%",objectFit:"cover"}})})]});case 1:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.timeline&&ae.jsx(gc,{items:r.timeline}),ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content2}),r.skills&&ae.jsx(gc,{items:r.skills})]});case 2:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.entries&&ae.jsx(lv,{items:r.entries})]});case 3:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.entries&&ae.jsx(lv,{items:r.entries,columns:2})]});case 4:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.metrics&&ae.jsx(Eh,{items:r.metrics})]});case 5:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.timeline&&ae.jsx(gc,{items:r.timeline}),r.metrics&&ae.jsx(Eh,{items:r.metrics}),r.tags&&ae.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:"1.2rem"},children:r.tags.map(a=>ae.jsx(av,{label:a},a))}),r.links&&ae.jsx(uv,{links:r.links})]});default:return ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{style:{fontSize:18,lineHeight:1.8,color:"#8a95a8",marginBottom:"0.8rem"},children:r.content}),r.timeline&&ae.jsx(gc,{items:r.timeline}),r.metrics&&ae.jsx(Eh,{items:r.metrics}),r.tags&&ae.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:"1.2rem"},children:r.tags.map(a=>ae.jsx(av,{label:a},a))})]})}};return ae.jsxs("div",{ref:a=>t.current[s]=a,style:{padding:"3rem 2.5rem",borderBottom:"1px solid rgba(255,122,0,0.08)",minHeight:"85vh",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"},children:[ae.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:2,background:"linear-gradient(180deg, transparent, #FF7A00 50%, transparent)",opacity:e===s?1:0,transition:"opacity 0.5s ease"}}),ae.jsx(OT,{phase:r.phase,tag:r.tag}),ae.jsx("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:"24px",flexWrap:"wrap-reverse",marginBottom:"0.8rem",minWidth:"250px"},children:ae.jsx("h2",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:"1.85rem",fontWeight:700,color:"#fff",marginBottom:"0.6rem",lineHeight:1.15},children:r.title})}),o()]},r.id)}),ae.jsx("div",{style:{padding:"2rem 2.5rem",borderTop:"1px solid rgba(255,122,0,0.1)",fontFamily:"'Share Tech Mono', monospace",fontSize:12,color:"#8a95a8",letterSpacing:"0.08em"},children:"Shubh Khandelwal's Interactive 3-D Portfolio."})]})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const l0="167",zT=0,cv=1,BT=2,aM=1,lM=2,Nr=3,zs=0,li=1,Sr=2,Ds=0,Oa=1,um=2,fv=3,dv=4,HT=5,fo=100,VT=101,GT=102,WT=103,XT=104,YT=200,jT=201,$T=202,qT=203,cm=204,fm=205,KT=206,ZT=207,QT=208,JT=209,eA=210,tA=211,nA=212,iA=213,rA=214,sA=0,oA=1,aA=2,nd=3,lA=4,uA=5,cA=6,fA=7,u0=0,dA=1,hA=2,Is=0,pA=1,mA=2,gA=3,_A=4,vA=5,xA=6,yA=7,uM=300,el=301,tl=302,dm=303,hm=304,zd=306,pm=1e3,_o=1001,mm=1002,Wi=1003,SA=1004,_c=1005,or=1006,wh=1007,vo=1008,Qr=1009,cM=1010,fM=1011,Du=1012,c0=1013,No=1014,Gr=1015,$u=1016,f0=1017,d0=1018,nl=1020,dM=35902,hM=1021,pM=1022,lr=1023,mM=1024,gM=1025,ka=1026,il=1027,_M=1028,h0=1029,vM=1030,p0=1031,m0=1033,gf=33776,_f=33777,vf=33778,xf=33779,gm=35840,_m=35841,vm=35842,xm=35843,ym=36196,Sm=37492,Mm=37496,Em=37808,wm=37809,Tm=37810,Am=37811,Cm=37812,Rm=37813,bm=37814,Pm=37815,Lm=37816,Dm=37817,Im=37818,Um=37819,Nm=37820,Fm=37821,yf=36492,Om=36494,km=36495,xM=36283,zm=36284,Bm=36285,Hm=36286,MA=3200,EA=3201,g0=0,wA=1,gs="",gr="srgb",$s="srgb-linear",_0="display-p3",Bd="display-p3-linear",id="linear",Ot="srgb",rd="rec709",sd="p3",Yo=7680,hv=519,TA=512,AA=513,CA=514,yM=515,RA=516,bA=517,PA=518,LA=519,pv=35044,mv="300 es",Wr=2e3,od=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=Math.PI/180,Vm=180/Math.PI;function qu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function ni(n,e,t){return Math.max(e,Math.min(t,n))}function DA(n,e){return(n%e+e)%e}function Th(n,e,t){return(1-t)*n+t*e}function wl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,r,s,o,a,l,u){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],m=r[0],g=r[3],h=r[6],v=r[1],x=r[4],y=r[7],w=r[2],C=r[5],M=r[8];return s[0]=o*m+a*v+l*w,s[3]=o*g+a*x+l*C,s[6]=o*h+a*y+l*M,s[1]=u*m+c*v+f*w,s[4]=u*g+c*x+f*C,s[7]=u*h+c*y+f*M,s[2]=d*m+p*v+_*w,s[5]=d*g+p*x+_*C,s[8]=d*h+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new at;function SM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ad(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function IA(){const n=ad("canvas");return n.style.display="block",n}const gv={};function nu(n){n in gv||(gv[n]=!0,console.warn(n))}function UA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const _v=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vv=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[$s]:{transfer:id,primaries:rd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[gr]:{transfer:Ot,primaries:rd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bd]:{transfer:id,primaries:sd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(vv),fromReference:n=>n.applyMatrix3(_v)},[_0]:{transfer:Ot,primaries:sd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(vv),fromReference:n=>n.applyMatrix3(_v).convertLinearToSRGB()}},NA=new Set([$s,Bd]),Ct={enabled:!0,_workingColorSpace:$s,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!NA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Tl[e].toReference,r=Tl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Tl[n].primaries},getTransfer:function(n){return n===gs?id:Tl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Tl[e].luminanceCoefficients)}};function za(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ch(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jo;class FA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=ad("canvas")),jo.width=e.width,jo.height=e.height;const i=jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ad("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=za(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(za(t[i]/255)*255):t[i]=za(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OA=0;class MM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=qu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rh(r[o].image)):s.push(Rh(r[o]))}else s=Rh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kA=0;class ui extends pl{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,i=_o,r=_o,s=or,o=vo,a=lr,l=Qr,u=ui.DEFAULT_ANISOTROPY,c=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=qu(),this.name="",this.source=new MM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pm:e.x=e.x-Math.floor(e.x);break;case _o:e.x=e.x<0?0:1;break;case mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pm:e.y=e.y-Math.floor(e.y);break;case _o:e.y=e.y<0?0:1;break;case mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=uM;ui.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],m=l[2],g=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(h+1)/2,C=(c+d)/4,M=(f+m)/4,R=(_+g)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=R/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-m)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zA extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ui(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new MM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fo extends zA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class EM extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=_o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BA extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=_o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==d||u!==p||c!==_){let g=1-a;const h=l*d+u*p+c*_+f*m,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,h*v);g=Math.sin(g*C)/w,a=Math.sin(a*C)/w}const y=a*v;if(l=l*g+d*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-a*p,e[t+2]=u*_+c*p+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new F,xv=new Ku;class Zu{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ji):Ji.fromBufferAttribute(s,o),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),xc.subVectors(this.max,Al),$o.subVectors(e.a,Al),qo.subVectors(e.b,Al),Ko.subVectors(e.c,Al),rs.subVectors(qo,$o),ss.subVectors(Ko,qo),Ks.subVectors($o,Ko);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Ks.z,Ks.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Ks.z,0,-Ks.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Ks.y,Ks.x,0];return!Ph(t,$o,qo,Ko,xc)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,$o,qo,Ko,xc))?!1:(yc.crossVectors(rs,ss),t=[yc.x,yc.y,yc.z],Ph(t,$o,qo,Ko,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const br=[new F,new F,new F,new F,new F,new F,new F,new F],Ji=new F,vc=new Zu,$o=new F,qo=new F,Ko=new F,rs=new F,ss=new F,Ks=new F,Al=new F,xc=new F,yc=new F,Zs=new F;function Ph(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const HA=new Zu,Cl=new F,Lh=new F;class Hd{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const t=Cl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(Lh)),this.expandByPoint(Cl.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new F,Dh=new F,Sc=new F,os=new F,Ih=new F,Mc=new F,Uh=new F;class wM{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dh.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sc),a=os.dot(this.direction),l=-os.dot(Sc),u=os.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const m=1/c;f*=m,d*=m,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dh).addScaledVector(Sc,d),p}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),r=Pr.dot(Pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,i,r,s){Ih.subVectors(t,e),Mc.subVectors(i,e),Uh.crossVectors(Ih,Mc);let o=this.direction.dot(Uh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);const l=a*this.direction.dot(Mc.crossVectors(os,Mc));if(l<0)return null;const u=a*this.direction.dot(Ih.cross(os));if(u<0||l+u>o)return null;const c=-a*os.dot(Uh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,_,m,g){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,m,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=m,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),o=1/Zo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-m*u,t[9]=-a*l,t[2]=m-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+m,t[1]=l*f,t[5]=m*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,GA)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),as.crossVectors(i,gi),as.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),as.crossVectors(i,gi)),as.normalize(),Ec.crossVectors(gi,as),r[0]=as.x,r[4]=Ec.x,r[8]=gi.x,r[1]=as.y,r[5]=Ec.y,r[9]=gi.y,r[2]=as.z,r[6]=Ec.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],m=i[6],g=i[10],h=i[14],v=i[3],x=i[7],y=i[11],w=i[15],C=r[0],M=r[4],R=r[8],E=r[12],S=r[1],P=r[5],N=r[9],z=r[13],V=r[2],$=r[6],G=r[10],W=r[14],L=r[3],j=r[7],b=r[11],se=r[15];return s[0]=o*C+a*S+l*V+u*L,s[4]=o*M+a*P+l*$+u*j,s[8]=o*R+a*N+l*G+u*b,s[12]=o*E+a*z+l*W+u*se,s[1]=c*C+f*S+d*V+p*L,s[5]=c*M+f*P+d*$+p*j,s[9]=c*R+f*N+d*G+p*b,s[13]=c*E+f*z+d*W+p*se,s[2]=_*C+m*S+g*V+h*L,s[6]=_*M+m*P+g*$+h*j,s[10]=_*R+m*N+g*G+h*b,s[14]=_*E+m*z+g*W+h*se,s[3]=v*C+x*S+y*V+w*L,s[7]=v*M+x*P+y*$+w*j,s[11]=v*R+x*N+y*G+w*b,s[15]=v*E+x*z+y*W+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],m=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+m*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],m=e[13],g=e[14],h=e[15],v=f*g*u-m*d*u+m*l*p-a*g*p-f*l*h+a*d*h,x=_*d*u-c*g*u-_*l*p+o*g*p+c*l*h-o*d*h,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*h+o*f*h,w=_*f*l-c*m*l-_*a*d+o*m*d+c*a*g-o*f*g,C=t*v+i*x+r*y+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=v*M,e[1]=(m*d*s-f*g*s-m*r*p+i*g*p+f*r*h-i*d*h)*M,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*g*s-_*d*s+_*r*p-t*g*p-c*r*h+t*d*h)*M,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*h-t*l*h)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*h-t*f*h)*M,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*m*r-_*f*r+_*i*d-t*m*d-c*i*g+t*f*g)*M,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,m=o*c,g=o*f,h=a*f,v=l*u,x=l*c,y=l*f,w=i.x,C=i.y,M=i.z;return r[0]=(1-(m+h))*w,r[1]=(p+y)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+h))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(_+x)*M,r[9]=(g-v)*M,r[10]=(1-(d+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),a=Zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],er.copy(this);const u=1/s,c=1/o,f=1/a;return er.elements[0]*=u,er.elements[1]*=u,er.elements[2]*=u,er.elements[4]*=c,er.elements[5]*=c,er.elements[6]*=c,er.elements[8]*=f,er.elements[9]*=f,er.elements[10]*=f,t.setFromRotationMatrix(er),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Wr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===od)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*c;let _,m;if(a===Wr)_=(o+s)*f,m=-2*f;else if(a===od)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zo=new F,er=new $t,VA=new F(0,0,0),GA=new F(1,1,1),as=new F,Ec=new F,gi=new F,yv=new $t,Sv=new Ku;class hr{constructor(e=0,t=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ni(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ni(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ni(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class TM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WA=0;const Mv=new F,Qo=new Ku,Lr=new $t,wc=new F,Rl=new F,XA=new F,YA=new Ku,Ev=new F(1,0,0),wv=new F(0,1,0),Tv=new F(0,0,1),Av={type:"added"},jA={type:"removed"},Jo={type:"childadded",child:null},Nh={type:"childremoved",child:null};class An extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new F,t=new hr,i=new Ku,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new at}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new TM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(Ev,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Tv,e)}translateOnAxis(e,t){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ev,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wc.copy(e):wc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(Rl,wc,this.up):Lr.lookAt(wc,Rl,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(Lr),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Av),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jA),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Av),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,XA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,YA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new F(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new F,Dr=new F,Fh=new F,Ir=new F,ea=new F,ta=new F,Cv=new F,Oh=new F,kh=new F,zh=new F;class ar{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tr.subVectors(e,t),r.cross(tr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tr.subVectors(r,t),Dr.subVectors(i,t),Fh.subVectors(e,t);const o=tr.dot(tr),a=tr.dot(Dr),l=tr.dot(Fh),u=Dr.dot(Dr),c=Dr.dot(Fh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ir.x),l.addScaledVector(o,Ir.y),l.addScaledVector(a,Ir.z),l)}static isFrontFacing(e,t,i,r){return tr.subVectors(i,t),Dr.subVectors(e,t),tr.cross(Dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),tr.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),Oh.subVectors(e,i);const l=ea.dot(Oh),u=ta.dot(Oh);if(l<=0&&u<=0)return t.copy(i);kh.subVectors(e,r);const c=ea.dot(kh),f=ta.dot(kh);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ea,o);zh.subVectors(e,s);const p=ea.dot(zh),_=ta.dot(zh);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ta,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return Cv.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(Cv,a);const h=1/(g+m+d);return o=m*h,a=d*h,t.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const AM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ct.workingColorSpace){if(e=DA(e,1),t=ni(t,0,1),i=ni(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bh(o,s,e+1/3),this.g=Bh(o,s,e),this.b=Bh(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=gr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gr){const i=AM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=Ch(e.r),this.g=Ch(e.g),this.b=Ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gr){return Ct.fromWorkingColorSpace(Dn.copy(this),e),Math.round(ni(Dn.r*255,0,255))*65536+Math.round(ni(Dn.g*255,0,255))*256+Math.round(ni(Dn.b*255,0,255))}getHexString(e=gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=gr){Ct.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,r=Dn.b;return e!==gr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Tc);const i=Th(ls.h,Tc.h,t),r=Th(ls.s,Tc.s,t),s=Th(ls.l,Tc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new pt;pt.NAMES=AM;let $A=0;class Vo extends pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=qu(),this.name="",this.type="Material",this.blending=Oa,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cm,this.blendDst=fm,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=nd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cm&&(i.blendSrc=this.blendSrc),this.blendDst!==fm&&(i.blendDst=this.blendDst),this.blendEquation!==fo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class gn extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new F,Ac=new mt;class fr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ac.fromBufferAttribute(this,t),Ac.applyMatrix3(e),this.setXY(t,Ac.x,Ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),r=Qn(r,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pv&&(e.usage=this.usage),e}}class CM extends fr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class RM extends fr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends fr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qA=0;const Oi=new $t,Hh=new An,na=new F,_i=new Zu,bl=new Zu,mn=new F;class Zn extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=qu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SM(e)?RM:CM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bl.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(_i.min,bl.min),_i.expandByPoint(mn),mn.addVectors(_i.max,bl.max),_i.expandByPoint(mn)):(_i.expandByPoint(bl.min),_i.expandByPoint(bl.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)mn.fromBufferAttribute(a,u),l&&(na.fromBufferAttribute(e,u),mn.add(na)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new F,l[R]=new F;const u=new F,c=new F,f=new F,d=new mt,p=new mt,_=new mt,m=new F,g=new F;function h(R,E,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(m.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[R].add(m),a[E].add(m),a[S].add(m),l[R].add(g),l[E].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,E=v.length;R<E;++R){const S=v[R],P=S.start,N=S.count;for(let z=P,V=P+N;z<V;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new F,y=new F,w=new F,C=new F;function M(R){w.fromBufferAttribute(r,R),C.copy(w);const E=a[R];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(C,E);const P=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,E=v.length;R<E;++R){const S=v[R],P=S.start,N=S.count;for(let z=P,V=P+N;z<V;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new fr(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rv=new $t,Qs=new wM,Cc=new Hd,bv=new F,ia=new F,ra=new F,sa=new F,Vh=new F,Rc=new F,bc=new mt,Pc=new mt,Lc=new mt,Pv=new F,Lv=new F,Dv=new F,Dc=new F,Ic=new F;class Se extends An{constructor(e=new Zn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Vh.fromBufferAttribute(f,e),o?Rc.addScaledVector(Vh,c):Rc.addScaledVector(Vh.sub(t),c))}t.add(Rc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Cc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Cc,bv)===null||Qs.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Rv.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(Rv),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const C=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);r=Uc(this,h,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,h=m;g<h;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=Uc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const C=y,M=y+1,R=y+2;r=Uc(this,h,e,i,u,c,f,C,M,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,h=m;g<h;g+=3){const v=g,x=g+1,y=g+2;r=Uc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function KA(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ic);return u<t.near||u>t.far?null:{distance:u,point:Ic.clone(),object:n}}function Uc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ia),n.getVertexPosition(l,ra),n.getVertexPosition(u,sa);const c=KA(n,e,t,i,ia,ra,sa,Dc);if(c){r&&(bc.fromBufferAttribute(r,a),Pc.fromBufferAttribute(r,l),Lc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(Dc,ia,ra,sa,bc,Pc,Lc,new mt)),s&&(bc.fromBufferAttribute(s,a),Pc.fromBufferAttribute(s,l),Lc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(Dc,ia,ra,sa,bc,Pc,Lc,new mt)),o&&(Pv.fromBufferAttribute(o,a),Lv.fromBufferAttribute(o,l),Dv.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(Dc,ia,ra,sa,Pv,Lv,Dv,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};ar.getNormal(ia,ra,sa,f.normal),c.face=f}return c}class Pt extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function _(m,g,h,v,x,y,w,C,M,R,E){const S=y/M,P=w/R,N=y/2,z=w/2,V=C/2,$=M+1,G=R+1;let W=0,L=0;const j=new F;for(let b=0;b<G;b++){const se=b*P-z;for(let _e=0;_e<$;_e++){const Fe=_e*S-N;j[m]=Fe*v,j[g]=se*x,j[h]=V,u.push(j.x,j.y,j.z),j[m]=0,j[g]=0,j[h]=C>0?1:-1,c.push(j.x,j.y,j.z),f.push(_e/M),f.push(1-b/R),W+=1}}for(let b=0;b<R;b++)for(let se=0;se<M;se++){const _e=d+se+$*b,Fe=d+se+$*(b+1),q=d+(se+1)+$*(b+1),ie=d+(se+1)+$*b;l.push(_e,Fe,ie),l.push(Fe,q,ie),L+=6}a.addGroup(p,L,E),p+=L,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=rl(n[t]);for(const r in i)e[r]=i[r]}return e}function ZA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const QA={clone:rl,merge:Vn};var JA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bs extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JA,this.fragmentShader=eC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rl(e.uniforms),this.uniformsGroups=ZA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class PM extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new F,Iv=new mt,Uv=new mt;class Mi extends PM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vm*2*Math.atan(Math.tan(Sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Iv,Uv),t.subVectors(Uv,Iv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,aa=1;class tC extends An{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(oa,aa,e,t);r.layers=this.layers,this.add(r);const s=new Mi(oa,aa,e,t);s.layers=this.layers,this.add(s);const o=new Mi(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new Mi(oa,aa,e,t);a.layers=this.layers,this.add(a);const l=new Mi(oa,aa,e,t);l.layers=this.layers,this.add(l);const u=new Mi(oa,aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Wr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===od)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class LM extends ui{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:el,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nC extends Fo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new LM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:or}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pt(5,5,5),s=new Bs({name:"CubemapFromEquirect",uniforms:rl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Ds});s.uniforms.tEquirect.value=t;const o=new Se(r,s),a=t.minFilter;return t.minFilter===vo&&(t.minFilter=or),new tC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Gh=new F,iC=new F,rC=new at;class oo{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gh.subVectors(i,t).cross(iC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rC.getNormalMatrix(e),r=this.coplanarPoint(Gh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Hd,Nc=new F;class v0{constructor(e=new oo,t=new oo,i=new oo,r=new oo,s=new oo,o=new oo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,g-p,y-h).normalize(),i[1].setComponents(l+s,d+u,g+p,y+h).normalize(),i[2].setComponents(l+o,d+c,g+_,y+v).normalize(),i[3].setComponents(l-o,d-c,g-_,y-v).normalize(),i[4].setComponents(l-a,d-f,g-m,y-x).normalize(),t===Wr)i[5].setComponents(l+a,d+f,g+m,y+x).normalize();else if(t===od)i[5].setComponents(a,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Nc.x=r.normal.x>0?e.max.x:e.min.x,Nc.y=r.normal.y>0?e.max.y:e.min.y,Nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function DM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(u,a),f.count===-1&&d.length===0&&n.bufferSubData(u,0,c),d.length!==0){for(let p=0,_=d.length;p<_;p++){const m=d[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Vd extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],_=[],m=[],g=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),m.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),w=v+1+u*(h+1),C=v+1+u*h;p.push(x,y,C),p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.width,e.height,e.widthSegments,e.heightSegments)}}var oC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xC=`#ifdef USE_IRIDESCENCE
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
#endif`,yC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bC=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,LC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FC="gl_FragColor = linearToOutputTexel( gl_FragColor );",OC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BC=`#ifdef USE_ENVMAP
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
#endif`,HC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VC=`#ifdef USE_ENVMAP
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
#endif`,GC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jC=`#ifdef USE_GRADIENTMAP
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
}`,$C=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,QC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_R=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ER=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,WR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$R=`#ifdef USE_SKINNING
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
#endif`,qR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e2=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,d2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,p2=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,M2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,w2=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,R2=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,P2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,D2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,U2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O2=`uniform float rotation;
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
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:oC,alphahash_pars_fragment:aC,alphamap_fragment:lC,alphamap_pars_fragment:uC,alphatest_fragment:cC,alphatest_pars_fragment:fC,aomap_fragment:dC,aomap_pars_fragment:hC,batching_pars_vertex:pC,batching_vertex:mC,begin_vertex:gC,beginnormal_vertex:_C,bsdfs:vC,iridescence_fragment:xC,bumpmap_pars_fragment:yC,clipping_planes_fragment:SC,clipping_planes_pars_fragment:MC,clipping_planes_pars_vertex:EC,clipping_planes_vertex:wC,color_fragment:TC,color_pars_fragment:AC,color_pars_vertex:CC,color_vertex:RC,common:bC,cube_uv_reflection_fragment:PC,defaultnormal_vertex:LC,displacementmap_pars_vertex:DC,displacementmap_vertex:IC,emissivemap_fragment:UC,emissivemap_pars_fragment:NC,colorspace_fragment:FC,colorspace_pars_fragment:OC,envmap_fragment:kC,envmap_common_pars_fragment:zC,envmap_pars_fragment:BC,envmap_pars_vertex:HC,envmap_physical_pars_fragment:QC,envmap_vertex:VC,fog_vertex:GC,fog_pars_vertex:WC,fog_fragment:XC,fog_pars_fragment:YC,gradientmap_pars_fragment:jC,lightmap_pars_fragment:$C,lights_lambert_fragment:qC,lights_lambert_pars_fragment:KC,lights_pars_begin:ZC,lights_toon_fragment:JC,lights_toon_pars_fragment:eR,lights_phong_fragment:tR,lights_phong_pars_fragment:nR,lights_physical_fragment:iR,lights_physical_pars_fragment:rR,lights_fragment_begin:sR,lights_fragment_maps:oR,lights_fragment_end:aR,logdepthbuf_fragment:lR,logdepthbuf_pars_fragment:uR,logdepthbuf_pars_vertex:cR,logdepthbuf_vertex:fR,map_fragment:dR,map_pars_fragment:hR,map_particle_fragment:pR,map_particle_pars_fragment:mR,metalnessmap_fragment:gR,metalnessmap_pars_fragment:_R,morphinstance_vertex:vR,morphcolor_vertex:xR,morphnormal_vertex:yR,morphtarget_pars_vertex:SR,morphtarget_vertex:MR,normal_fragment_begin:ER,normal_fragment_maps:wR,normal_pars_fragment:TR,normal_pars_vertex:AR,normal_vertex:CR,normalmap_pars_fragment:RR,clearcoat_normal_fragment_begin:bR,clearcoat_normal_fragment_maps:PR,clearcoat_pars_fragment:LR,iridescence_pars_fragment:DR,opaque_fragment:IR,packing:UR,premultiplied_alpha_fragment:NR,project_vertex:FR,dithering_fragment:OR,dithering_pars_fragment:kR,roughnessmap_fragment:zR,roughnessmap_pars_fragment:BR,shadowmap_pars_fragment:HR,shadowmap_pars_vertex:VR,shadowmap_vertex:GR,shadowmask_pars_fragment:WR,skinbase_vertex:XR,skinning_pars_vertex:YR,skinning_vertex:jR,skinnormal_vertex:$R,specularmap_fragment:qR,specularmap_pars_fragment:KR,tonemapping_fragment:ZR,tonemapping_pars_fragment:QR,transmission_fragment:JR,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:r2,background_vert:s2,background_frag:o2,backgroundCube_vert:a2,backgroundCube_frag:l2,cube_vert:u2,cube_frag:c2,depth_vert:f2,depth_frag:d2,distanceRGBA_vert:h2,distanceRGBA_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:_2,linedashed_frag:v2,meshbasic_vert:x2,meshbasic_frag:y2,meshlambert_vert:S2,meshlambert_frag:M2,meshmatcap_vert:E2,meshmatcap_frag:w2,meshnormal_vert:T2,meshnormal_frag:A2,meshphong_vert:C2,meshphong_frag:R2,meshphysical_vert:b2,meshphysical_frag:P2,meshtoon_vert:L2,meshtoon_frag:D2,points_vert:I2,points_frag:U2,shadow_vert:N2,shadow_frag:F2,sprite_vert:O2,sprite_frag:k2},Ee={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},xr={basic:{uniforms:Vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Vn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Vn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Vn([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Vn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Vn([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Vn([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Vn([Ee.common,Ee.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Vn([Ee.lights,Ee.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xr.physical={uniforms:Vn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Fc={r:0,b:0,g:0},eo=new hr,z2=new $t;function B2(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function m(v){let x=!1;const y=_(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===zd)?(c===void 0&&(c=new Se(new Pt(1,1,1),new Bs({name:"BackgroundCubeMaterial",uniforms:rl(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),eo.copy(x.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z2.makeRotationFromEuler(eo)),c.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Ot,(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Se(new Vd(2,2),new Bs({name:"BackgroundMaterial",uniforms:rl(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Fc,bM(n)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:m,addToRenderList:g}}function H2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,N,z,V){let $=!1;const G=f(z,N,P);s!==G&&(s=G,u(s.object)),$=p(S,z,N,V),$&&_(S,z,N,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,P,N,z),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,P,N){const z=N.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let G=$[z];return G===void 0&&(G=d(l()),$[z]=G),G}function d(S){const P=[],N=[],z=[];for(let V=0;V<t;V++)P[V]=0,N[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,N,z){const V=s.attributes,$=P.attributes;let G=0;const W=N.getAttributes();for(const L in W)if(W[L].location>=0){const b=V[L];let se=$[L];if(se===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),b===void 0||b.attribute!==se||se&&b.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(S,P,N,z){const V={},$=P.attributes;let G=0;const W=N.getAttributes();for(const L in W)if(W[L].location>=0){let b=$[L];b===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(b=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(b=S.instanceColor));const se={};se.attribute=b,b&&b.data&&(se.data=b.data),V[L]=se,G++}s.attributes=V,s.attributesNum=G,s.index=z}function m(){const S=s.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function g(S){h(S,0)}function h(S,P){const N=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;N[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),V[S]!==P&&(n.vertexAttribDivisor(S,P),V[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==S[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function x(S,P,N,z,V,$,G){G===!0?n.vertexAttribIPointer(S,P,N,V,$):n.vertexAttribPointer(S,P,N,z,V,$)}function y(S,P,N,z){m();const V=z.attributes,$=N.getAttributes(),G=P.defaultAttributeValues;for(const W in $){const L=$[W];if(L.location>=0){let j=V[W];if(j===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const b=j.normalized,se=j.itemSize,_e=e.get(j);if(_e===void 0)continue;const Fe=_e.buffer,q=_e.type,ie=_e.bytesPerElement,he=q===n.INT||q===n.UNSIGNED_INT||j.gpuType===c0;if(j.isInterleavedBufferAttribute){const le=j.data,Oe=le.stride,ke=j.offset;if(le.isInstancedInterleavedBuffer){for(let Qe=0;Qe<L.locationSize;Qe++)h(L.location+Qe,le.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Qe=0;Qe<L.locationSize;Qe++)g(L.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Qe=0;Qe<L.locationSize;Qe++)x(L.location+Qe,se/L.locationSize,q,b,Oe*ie,(ke+se/L.locationSize*Qe)*ie,he)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)h(L.location+le,j.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<L.locationSize;le++)g(L.location+le);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let le=0;le<L.locationSize;le++)x(L.location+le,se/L.locationSize,q,b,se*ie,se/L.locationSize*le*ie,he)}}else if(G!==void 0){const b=G[W];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(L.location,b);break;case 3:n.vertexAttrib3fv(L.location,b);break;case 4:n.vertexAttrib4fv(L.location,b);break;default:n.vertexAttrib1fv(L.location,b)}}}}v()}function w(){R();for(const S in i){const P=i[S];for(const N in P){const z=P[N];for(const V in z)c(z[V].object),delete z[V];delete P[N]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const N in P){const z=P[N];for(const V in z)c(z[V].object),delete z[V];delete P[N]}delete i[S.id]}function M(S){for(const P in i){const N=i[P];if(N[S.id]===void 0)continue;const z=N[S.id];for(const V in z)c(z[V].object),delete z[V];delete N[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function V2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let m=0;m<f;m++)_+=c[m];for(let m=0;m<d.length;m++)t.update(_,i,d[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==lr&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const M=C===$u&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qr&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gr&&!M)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function W2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oo,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(_,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const h=p+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=p;x!==m;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function X2(n){let e=new WeakMap;function t(o,a){return a===dm?o.mapping=el:a===hm&&(o.mapping=tl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dm||a===hm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new nC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class IM extends PM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ca=4,Nv=[.125,.215,.35,.446,.526,.582],ho=20,Wh=new IM,Fv=new pt;let Xh=null,Yh=0,jh=0,$h=!1;const ao=(1+Math.sqrt(5))/2,la=1/ao,Ov=[new F(-ao,la,0),new F(ao,la,0),new F(-la,0,ao),new F(la,0,ao),new F(0,ao,-la),new F(0,ao,la),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Yh,jh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===el||e.mapping===tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:$u,format:lr,colorSpace:$s,depthBuffer:!1},r=zv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y2(s)),this._blurMaterial=j2(s,e,t)}return r}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Wh)}_sceneToCubeUV(e,t,i,r){const a=new Mi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Fv),c.toneMapping=Is,c.autoClear=!1;const p=new gn({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),_=new Se(new Pt,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Fv),m=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Oc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===el||e.mapping===tl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ov[(r-s-1)%Ov.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Se(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ho-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):ho;g>ho&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ho}`);const h=[];let v=0;for(let M=0;M<ho;++M){const R=M/m,E=Math.exp(-R*R/2);h.push(E),M===0?v+=E:M<g&&(v+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-Ca?r-x+Ca:0),C=4*(this._cubeSize-y);Oc(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(f,Wh)}}function Y2(n){const e=[],t=[],i=[];let r=n;const s=n-Ca+1+Nv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ca?l=Nv[o-n+Ca-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,h=1,v=new Float32Array(m*_*p),x=new Float32Array(g*_*p),y=new Float32Array(h*_*p);for(let C=0;C<p;C++){const M=C%3*2/3-1,R=C>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(E,m*_*C),x.set(d,g*_*C);const S=[C,C,C,C,C,C];y.set(S,h*_*C)}const w=new Zn;w.setAttribute("position",new fr(v,m)),w.setAttribute("uv",new fr(x,g)),w.setAttribute("faceIndex",new fr(y,h)),e.push(w),r>Ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zv(n,e,t){const i=new Fo(n,e,t);return i.texture.mapping=zd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function j2(n,e,t){const i=new Float32Array(ho),r=new F(0,1,0);return new Bs({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:x0(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Bv(){return new Bs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x0(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Hv(){return new Bs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function x0(){return`

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
	`}function $2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===dm||l===hm,c=l===el||l===tl;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kv(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new kv(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function q2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const m=d.morphAttributes[_];for(let g=0,h=m.length;g<h;g++)e.remove(m[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,h=m.length;g<h;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],C=v[x+1],M=v[x+2];d.push(w,C,C,M,M,w)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,C=x+1,M=x+2;d.push(w,C,C,M,M,w)}}else return;const g=new(SM(d)?RM:CM)(d,1);g.version=m;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Z2(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function u(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*o,_),t.update(p,i,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];t.update(g,i,1)}function f(d,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],m[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,m,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<m.length;v++)t.update(h,i,m[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Q2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J2(n,e,t){const i=new WeakMap,r=new kt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let w=a.attributes.position.count*y,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const M=new Float32Array(w*C*4*f),R=new EM(M,w,C,f);R.type=Gr,R.needsUpdate=!0;const E=y*4;for(let P=0;P<f;P++){const N=h[P],z=v[P],V=x[P],$=w*C*4*P;for(let G=0;G<N.count;G++){const W=G*E;_===!0&&(r.fromBufferAttribute(N,G),M[$+W+0]=r.x,M[$+W+1]=r.y,M[$+W+2]=r.z,M[$+W+3]=0),m===!0&&(r.fromBufferAttribute(z,G),M[$+W+4]=r.x,M[$+W+5]=r.y,M[$+W+6]=r.z,M[$+W+7]=0),g===!0&&(r.fromBufferAttribute(V,G),M[$+W+8]=r.x,M[$+W+9]=r.y,M[$+W+10]=r.z,M[$+W+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new mt(w,C)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function eb(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class UM extends ui{constructor(e,t,i,r,s,o,a,l,u,c=ka){if(c!==ka&&c!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ka&&(i=No),i===void 0&&c===il&&(i=nl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wi,this.minFilter=l!==void 0?l:Wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const NM=new ui,Vv=new UM(1,1),FM=new EM,OM=new BA,kM=new LM,Gv=[],Wv=[],Xv=new Float32Array(16),Yv=new Float32Array(9),jv=new Float32Array(4);function ml(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gv[r];if(s===void 0&&(s=new Float32Array(r),Gv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gd(n,e){let t=Wv[e];t===void 0&&(t=new Int32Array(e),Wv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function sb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;jv.set(i),n.uniformMatrix2fv(this.addr,!1,jv),pn(t,i)}}function ob(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Yv.set(i),n.uniformMatrix3fv(this.addr,!1,Yv),pn(t,i)}}function ab(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,i))return;Xv.set(i),n.uniformMatrix4fv(this.addr,!1,Xv),pn(t,i)}}function lb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function db(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function gb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vv.compareFunction=yM,s=Vv):s=NM,t.setTexture2D(e||s,r)}function _b(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||OM,r)}function vb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kM,r)}function xb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||FM,r)}function yb(n){switch(n){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return ub;case 35668:case 35672:return cb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}function Sb(n,e){n.uniform1fv(this.addr,e)}function Mb(n,e){const t=ml(e,this.size,2);n.uniform2fv(this.addr,t)}function Eb(n,e){const t=ml(e,this.size,3);n.uniform3fv(this.addr,t)}function wb(n,e){const t=ml(e,this.size,4);n.uniform4fv(this.addr,t)}function Tb(n,e){const t=ml(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ab(n,e){const t=ml(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cb(n,e){const t=ml(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rb(n,e){n.uniform1iv(this.addr,e)}function bb(n,e){n.uniform2iv(this.addr,e)}function Pb(n,e){n.uniform3iv(this.addr,e)}function Lb(n,e){n.uniform4iv(this.addr,e)}function Db(n,e){n.uniform1uiv(this.addr,e)}function Ib(n,e){n.uniform2uiv(this.addr,e)}function Ub(n,e){n.uniform3uiv(this.addr,e)}function Nb(n,e){n.uniform4uiv(this.addr,e)}function Fb(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||NM,s[o])}function Ob(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||OM,s[o])}function kb(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kM,s[o])}function zb(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||FM,s[o])}function Bb(n){switch(n){case 5126:return Sb;case 35664:return Mb;case 35665:return Eb;case 35666:return wb;case 35674:return Tb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return bb;case 35668:case 35672:return Pb;case 35669:case 35673:return Lb;case 5125:return Db;case 36294:return Ib;case 36295:return Ub;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}class Hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Vb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bb(t.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function $v(n,e){n.seq.push(e),n.map[e.id]=e}function Wb(n,e,t){const i=n.name,r=i.length;for(qh.lastIndex=0;;){const s=qh.exec(i),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$v(t,u===void 0?new Hb(a,n,e):new Vb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Gb(a),$v(t,f)),t=f}}}class Mf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Wb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Xb=37297;let Yb=0;function jb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $b(n){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n);let i;switch(e===t?i="":e===sd&&t===rd?i="LinearDisplayP3ToLinearSRGB":e===rd&&t===sd&&(i="LinearSRGBToLinearDisplayP3"),n){case $s:case Bd:return[i,"LinearTransferOETF"];case gr:case _0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jb(n.getShaderSource(e),o)}else return r}function qb(n,e){const t=$b(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kb(n,e){let t;switch(e){case pA:t="Linear";break;case mA:t="Reinhard";break;case gA:t="OptimizedCineon";break;case _A:t="ACESFilmic";break;case xA:t="AgX";break;case yA:t="Neutral";break;case vA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kc=new F;function Zb(){Ct.getLuminanceCoefficients(kc);const n=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function Jb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zl(n){return n!==""}function Zv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gm(n){return n.replace(tP,iP)}const nP=new Map;function iP(n,e){let t=ot[e];if(t===void 0){const i=nP.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gm(t)}const rP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(n){return n.replace(rP,sP)}function sP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ex(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===aM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function aP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case zd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tl:e="ENVMAP_MODE_REFRACTION";break}return e}function uP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case u0:e="ENVMAP_BLENDING_MULTIPLY";break;case dA:e="ENVMAP_BLENDING_MIX";break;case hA:e="ENVMAP_BLENDING_ADD";break}return e}function cP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oP(t),u=aP(t),c=lP(t),f=uP(t),d=cP(t),p=Qb(t),_=Jb(s),m=r.createProgram();let g,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zl).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zl).join(`
`),h.length>0&&(h+=`
`)):(g=[ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),h=[ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?ot.tonemapping_pars_fragment:"",t.toneMapping!==Is?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,qb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),o=Gm(o),o=Zv(o,t),o=Qv(o,t),a=Gm(a),a=Zv(a,t),a=Qv(a,t),o=Jv(o),a=Jv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+o,y=v+h+a,w=qv(r,r.VERTEX_SHADER,x),C=qv(r,r.FRAGMENT_SHADER,y);r.attachShader(m,w),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function M(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(w).trim(),V=r.getShaderInfoLog(C).trim();let $=!0,G=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,C);else{const W=Kv(r,w,"vertex"),L=Kv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+W+`
`+L)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:h}})}r.deleteShader(w),r.deleteShader(C),R=new Mf(r,m),E=eP(r,m)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(m,Xb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}let dP=0;class hP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pP(e),t.set(e,i)),i}}class pP{constructor(e){this.id=dP++,this.code=e,this.usedTimes=0}}function mP(n,e,t,i,r,s,o){const a=new TM,l=new hP,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return u.add(E),E===0?"uv":`uv${E}`}function g(E,S,P,N,z){const V=N.fog,$=z.geometry,G=E.isMeshStandardMaterial?N.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),L=W&&W.mapping===zd?W.image.height:null,j=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const b=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,se=b!==void 0?b.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let Fe,q,ie,he;if(j){const lt=xr[j];Fe=lt.vertexShader,q=lt.fragmentShader}else Fe=E.vertexShader,q=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const le=n.getRenderTarget(),Oe=z.isInstancedMesh===!0,ke=z.isBatchedMesh===!0,Qe=!!E.map,it=!!E.matcap,U=!!W,Ve=!!E.aoMap,Ye=!!E.lightMap,tt=!!E.bumpMap,Ce=!!E.normalMap,X=!!E.displacementMap,Ne=!!E.emissiveMap,je=!!E.metalnessMap,D=!!E.roughnessMap,A=E.anisotropy>0,Y=E.clearcoat>0,oe=E.dispersion>0,ue=E.iridescence>0,J=E.sheen>0,Pe=E.transmission>0,fe=A&&!!E.anisotropyMap,xe=Y&&!!E.clearcoatMap,We=Y&&!!E.clearcoatNormalMap,ce=Y&&!!E.clearcoatRoughnessMap,we=ue&&!!E.iridescenceMap,Be=ue&&!!E.iridescenceThicknessMap,qe=J&&!!E.sheenColorMap,Me=J&&!!E.sheenRoughnessMap,Ke=!!E.specularMap,$e=!!E.specularColorMap,xt=!!E.specularIntensityMap,O=Pe&&!!E.transmissionMap,Q=Pe&&!!E.thicknessMap,ee=!!E.gradientMap,K=!!E.alphaMap,de=E.alphaTest>0,De=!!E.alphaHash,nt=!!E.extensions;let Et=Is;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Et=n.toneMapping);const wt={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Fe,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ke,batchingColor:ke&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$s,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:it,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:L,aoMap:Ve,lightMap:Ye,bumpMap:tt,normalMap:Ce,displacementMap:d&&X,emissiveMap:Ne,normalMapObjectSpace:Ce&&E.normalMapType===wA,normalMapTangentSpace:Ce&&E.normalMapType===g0,metalnessMap:je,roughnessMap:D,anisotropy:A,anisotropyMap:fe,clearcoat:Y,clearcoatMap:xe,clearcoatNormalMap:We,clearcoatRoughnessMap:ce,dispersion:oe,iridescence:ue,iridescenceMap:we,iridescenceThicknessMap:Be,sheen:J,sheenColorMap:qe,sheenRoughnessMap:Me,specularMap:Ke,specularColorMap:$e,specularIntensityMap:xt,transmission:Pe,transmissionMap:O,thicknessMap:Q,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Oa&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:De,combine:E.combine,mapUv:Qe&&m(E.map.channel),aoMapUv:Ve&&m(E.aoMap.channel),lightMapUv:Ye&&m(E.lightMap.channel),bumpMapUv:tt&&m(E.bumpMap.channel),normalMapUv:Ce&&m(E.normalMap.channel),displacementMapUv:X&&m(E.displacementMap.channel),emissiveMapUv:Ne&&m(E.emissiveMap.channel),metalnessMapUv:je&&m(E.metalnessMap.channel),roughnessMapUv:D&&m(E.roughnessMap.channel),anisotropyMapUv:fe&&m(E.anisotropyMap.channel),clearcoatMapUv:xe&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(E.sheenRoughnessMap.channel),specularMapUv:Ke&&m(E.specularMap.channel),specularColorMapUv:$e&&m(E.specularColorMap.channel),specularIntensityMapUv:xt&&m(E.specularIntensityMap.channel),transmissionMapUv:O&&m(E.transmissionMap.channel),thicknessMapUv:Q&&m(E.thicknessMap.channel),alphaMapUv:K&&m(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ce||A),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Qe||K),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sr,flipSided:E.side===li,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:nt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=u.has(1),wt.vertexUv2s=u.has(2),wt.vertexUv3s=u.has(3),u.clear(),wt}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=_[E.type];let P;if(S){const N=xr[S];P=QA.clone(N.uniforms)}else P=E.uniforms;return P}function w(E,S){let P;for(let N=0,z=c.length;N<z;N++){const V=c[N];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new fP(n,S,E,s),c.push(P)),P}function C(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:M,programs:c,dispose:R}}function gP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _P(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,m,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=m,h.group=g),e++,h}function a(f,d,p,_,m,g){const h=o(f,d,p,_,m,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,m,g){const h=o(f,d,p,_,m,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||_P),i.length>1&&i.sort(d||tx),r.length>1&&r.sort(d||tx)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function vP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nx,n.set(i,[o])):r>=s.length?(o=new nx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new pt};break;case"SpotLight":t={position:new F,direction:new F,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function yP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SP=0;function MP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function EP(n){const e=new xP,t=yP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new $t,o=new $t;function a(u){let c=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,m=0,g=0,h=0,v=0,x=0,y=0,w=0,C=0,M=0;u.sort(MP);for(let E=0,S=u.length;E<S;E++){const P=u[E],N=P.color,z=P.intensity,V=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=N.r*z,f+=N.g*z,d+=N.b*z;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],z);M++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,L=t.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(z),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[m]=G;const W=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,W.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[m]=W.matrix,P.castShadow){const L=t.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.spotShadow[m]=L,i.spotShadowMap[m]=$,y++}m++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const W=P.shadow,L=t.get(P);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(z),G.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[h]=G,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==m||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==w||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,R.directionalLength=p,R.pointLength=_,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=w,R.numLightProbes=M,i.version=SP++)}function l(u,c){let f=0,d=0,p=0,_=0,m=0;const g=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function ix(n){const e=new EP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ix(n),e.set(r,[a])):s>=o.length?(a=new ix(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class TP extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AP extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RP=`uniform sampler2D shadow_pass;
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
}`;function bP(n,e,t){let i=new v0;const r=new mt,s=new mt,o=new kt,a=new TP({depthPacking:EA}),l=new AP,u={},c=t.maxTextureSize,f={[zs]:li,[li]:zs,[Sr]:Sr},d=new Bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:CP,fragmentShader:RP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Se(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aM;let h=this.type;this.render=function(C,M,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ds),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=h!==Nr&&this.type===Nr,V=h===Nr&&this.type!==Nr;for(let $=0,G=C.length;$<G;$++){const W=C[$],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||z===!0||V===!0){const se=this.type!==Nr?{minFilter:Wi,magFilter:Wi}:{};L.map!==null&&L.map.dispose(),L.map=new Fo(r.x,r.y,se),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const b=L.getViewportCount();for(let se=0;se<b;se++){const _e=L.getViewport(se);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),N.viewport(o),L.updateMatrices(W,se),i=L.getFrustum(),y(M,R,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===Nr&&v(L,R),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,P)};function v(C,M){const R=e.update(m);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fo(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,R,d,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,R,p,m,null)}function x(C,M,R,E){let S=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=S.uuid,z=M.uuid;let V=u[N];V===void 0&&(V={},u[N]=V);let $=V[z];$===void 0&&($=S.clone(),V[z]=$,M.addEventListener("dispose",w)),S=$}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Nr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:f[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=R}return S}function y(C,M,R,E,S){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Nr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),V=C.material;if(Array.isArray(V)){const $=z.groups;for(let G=0,W=$.length;G<W;G++){const L=$[G],j=V[L.materialIndex];if(j&&j.visible){const b=x(C,j,E,S);C.onBeforeShadow(n,C,M,R,z,b,L),n.renderBufferDirect(R,null,z,b,C,L),C.onAfterShadow(n,C,M,R,z,b,L)}}}else if(V.visible){const $=x(C,V,E,S);C.onBeforeShadow(n,C,M,R,z,$,null),n.renderBufferDirect(R,null,z,$,C,null),C.onAfterShadow(n,C,M,R,z,$,null)}}const N=C.children;for(let z=0,V=N.length;z<V;z++)y(N[z],M,R,E,S)}function w(C){C.target.removeEventListener("dispose",w);for(const R in u){const E=u[R],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function PP(n){function e(){let O=!1;const Q=new kt;let ee=null;const K=new kt(0,0,0,0);return{setMask:function(de){ee!==de&&!O&&(n.colorMask(de,de,de,de),ee=de)},setLocked:function(de){O=de},setClear:function(de,De,nt,Et,wt){wt===!0&&(de*=Et,De*=Et,nt*=Et),Q.set(de,De,nt,Et),K.equals(Q)===!1&&(n.clearColor(de,De,nt,Et),K.copy(Q))},reset:function(){O=!1,ee=null,K.set(-1,0,0,0)}}}function t(){let O=!1,Q=null,ee=null,K=null;return{setTest:function(de){de?he(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(de){Q!==de&&!O&&(n.depthMask(de),Q=de)},setFunc:function(de){if(ee!==de){switch(de){case sA:n.depthFunc(n.NEVER);break;case oA:n.depthFunc(n.ALWAYS);break;case aA:n.depthFunc(n.LESS);break;case nd:n.depthFunc(n.LEQUAL);break;case lA:n.depthFunc(n.EQUAL);break;case uA:n.depthFunc(n.GEQUAL);break;case cA:n.depthFunc(n.GREATER);break;case fA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=de}},setLocked:function(de){O=de},setClear:function(de){K!==de&&(n.clearDepth(de),K=de)},reset:function(){O=!1,Q=null,ee=null,K=null}}}function i(){let O=!1,Q=null,ee=null,K=null,de=null,De=null,nt=null,Et=null,wt=null;return{setTest:function(lt){O||(lt?he(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(lt){Q!==lt&&!O&&(n.stencilMask(lt),Q=lt)},setFunc:function(lt,Ge,Ie){(ee!==lt||K!==Ge||de!==Ie)&&(n.stencilFunc(lt,Ge,Ie),ee=lt,K=Ge,de=Ie)},setOp:function(lt,Ge,Ie){(De!==lt||nt!==Ge||Et!==Ie)&&(n.stencilOp(lt,Ge,Ie),De=lt,nt=Ge,Et=Ie)},setLocked:function(lt){O=lt},setClear:function(lt){wt!==lt&&(n.clearStencil(lt),wt=lt)},reset:function(){O=!1,Q=null,ee=null,K=null,de=null,De=null,nt=null,Et=null,wt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,h=null,v=null,x=null,y=null,w=null,C=new pt(0,0,0),M=0,R=!1,E=null,S=null,P=null,N=null,z=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=G>=2);let L=null,j={};const b=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),_e=new kt().fromArray(b),Fe=new kt().fromArray(se);function q(O,Q,ee,K){const de=new Uint8Array(4),De=n.createTexture();n.bindTexture(O,De),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ee;nt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Q+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return De}const ie={};ie[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(nd),tt(!1),Ce(cv),he(n.CULL_FACE),Ve(Ds);function he(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function le(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Oe(O,Q){return c[O]!==Q?(n.bindFramebuffer(O,Q),c[O]=Q,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Q),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(O,Q){let ee=d,K=!1;if(O){ee=f.get(Q),ee===void 0&&(ee=[],f.set(Q,ee));const de=O.textures;if(ee.length!==de.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let De=0,nt=de.length;De<nt;De++)ee[De]=n.COLOR_ATTACHMENT0+De;ee.length=de.length,K=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,K=!0);K&&n.drawBuffers(ee)}function Qe(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const it={[fo]:n.FUNC_ADD,[VT]:n.FUNC_SUBTRACT,[GT]:n.FUNC_REVERSE_SUBTRACT};it[WT]=n.MIN,it[XT]=n.MAX;const U={[YT]:n.ZERO,[jT]:n.ONE,[$T]:n.SRC_COLOR,[cm]:n.SRC_ALPHA,[eA]:n.SRC_ALPHA_SATURATE,[QT]:n.DST_COLOR,[KT]:n.DST_ALPHA,[qT]:n.ONE_MINUS_SRC_COLOR,[fm]:n.ONE_MINUS_SRC_ALPHA,[JT]:n.ONE_MINUS_DST_COLOR,[ZT]:n.ONE_MINUS_DST_ALPHA,[tA]:n.CONSTANT_COLOR,[nA]:n.ONE_MINUS_CONSTANT_COLOR,[iA]:n.CONSTANT_ALPHA,[rA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ve(O,Q,ee,K,de,De,nt,Et,wt,lt){if(O===Ds){_===!0&&(le(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),O!==HT){if(O!==m||lt!==R){if((g!==fo||x!==fo)&&(n.blendEquation(n.FUNC_ADD),g=fo,x=fo),lt)switch(O){case Oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case um:n.blendFunc(n.ONE,n.ONE);break;case fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case um:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}h=null,v=null,y=null,w=null,C.set(0,0,0),M=0,m=O,R=lt}return}de=de||Q,De=De||ee,nt=nt||K,(Q!==g||de!==x)&&(n.blendEquationSeparate(it[Q],it[de]),g=Q,x=de),(ee!==h||K!==v||De!==y||nt!==w)&&(n.blendFuncSeparate(U[ee],U[K],U[De],U[nt]),h=ee,v=K,y=De,w=nt),(Et.equals(C)===!1||wt!==M)&&(n.blendColor(Et.r,Et.g,Et.b,wt),C.copy(Et),M=wt),m=O,R=!1}function Ye(O,Q){O.side===Sr?le(n.CULL_FACE):he(n.CULL_FACE);let ee=O.side===li;Q&&(ee=!ee),tt(ee),O.blending===Oa&&O.transparent===!1?Ve(Ds):Ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const K=O.stencilWrite;o.setTest(K),K&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function Ce(O){O!==zT?(he(n.CULL_FACE),O!==S&&(O===cv?n.cullFace(n.BACK):O===BT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),S=O}function X(O){O!==P&&($&&n.lineWidth(O),P=O)}function Ne(O,Q,ee){O?(he(n.POLYGON_OFFSET_FILL),(N!==Q||z!==ee)&&(n.polygonOffset(Q,ee),N=Q,z=ee)):le(n.POLYGON_OFFSET_FILL)}function je(O){O?he(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function D(O){O===void 0&&(O=n.TEXTURE0+V-1),L!==O&&(n.activeTexture(O),L=O)}function A(O,Q,ee){ee===void 0&&(L===null?ee=n.TEXTURE0+V-1:ee=L);let K=j[ee];K===void 0&&(K={type:void 0,texture:void 0},j[ee]=K),(K.type!==O||K.texture!==Q)&&(L!==ee&&(n.activeTexture(ee),L=ee),n.bindTexture(O,Q||ie[O]),K.type=O,K.texture=Q)}function Y(){const O=j[L];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(O){_e.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),_e.copy(O))}function Me(O){Fe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Fe.copy(O))}function Ke(O,Q){let ee=l.get(Q);ee===void 0&&(ee=new WeakMap,l.set(Q,ee));let K=ee.get(O);K===void 0&&(K=n.getUniformBlockIndex(Q,O.name),ee.set(O,K))}function $e(O,Q){const K=l.get(Q).get(O);a.get(Q)!==K&&(n.uniformBlockBinding(Q,K,O.__bindingPointIndex),a.set(Q,K))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},L=null,j={},c={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,h=null,v=null,x=null,y=null,w=null,C=new pt(0,0,0),M=0,R=!1,E=null,S=null,P=null,N=null,z=null,_e.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:le,bindFramebuffer:Oe,drawBuffers:ke,useProgram:Qe,setBlending:Ve,setMaterial:Ye,setFlipSided:tt,setCullFace:Ce,setLineWidth:X,setPolygonOffset:Ne,setScissorTest:je,activeTexture:D,bindTexture:A,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:we,texImage3D:Be,updateUBOMapping:Ke,uniformBlockBinding:$e,texStorage2D:We,texStorage3D:ce,texSubImage2D:J,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:qe,viewport:Me,reset:xt}}function rx(n,e,t,i){const r=LP(i);switch(t){case hM:return n*e;case mM:return n*e;case gM:return n*e*2;case _M:return n*e/r.components*r.byteLength;case h0:return n*e/r.components*r.byteLength;case vM:return n*e*2/r.components*r.byteLength;case p0:return n*e*2/r.components*r.byteLength;case pM:return n*e*3/r.components*r.byteLength;case lr:return n*e*4/r.components*r.byteLength;case m0:return n*e*4/r.components*r.byteLength;case gf:case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vf:case xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _m:case xm:return Math.max(n,16)*Math.max(e,8)/4;case gm:case vm:return Math.max(n,8)*Math.max(e,8)/2;case ym:case Sm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Em:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Am:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Im:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Um:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yf:case Om:case km:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xM:case zm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bm:case Hm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LP(n){switch(n){case Qr:case cM:return{byteLength:1,components:1};case Du:case fM:case $u:return{byteLength:2,components:1};case f0:case d0:return{byteLength:2,components:4};case No:case c0:case Gr:return{byteLength:4,components:1};case dM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function DP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new mt,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,A){return p?new OffscreenCanvas(D,A):ad("canvas")}function m(D,A,Y){let oe=1;const ue=je(D);if((ue.width>Y||ue.height>Y)&&(oe=Y/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(oe*ue.width),Pe=Math.floor(oe*ue.height);f===void 0&&(f=_(J,Pe));const fe=A?_(J,Pe):f;return fe.width=J,fe.height=Pe,fe.getContext("2d").drawImage(D,0,0,J,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+J+"x"+Pe+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Wi&&D.minFilter!==or}function h(D){n.generateMipmap(D)}function v(D,A,Y,oe,ue=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=A;if(A===n.RED&&(Y===n.FLOAT&&(J=n.R32F),Y===n.HALF_FLOAT&&(J=n.R16F),Y===n.UNSIGNED_BYTE&&(J=n.R8)),A===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(J=n.R8UI),Y===n.UNSIGNED_SHORT&&(J=n.R16UI),Y===n.UNSIGNED_INT&&(J=n.R32UI),Y===n.BYTE&&(J=n.R8I),Y===n.SHORT&&(J=n.R16I),Y===n.INT&&(J=n.R32I)),A===n.RG&&(Y===n.FLOAT&&(J=n.RG32F),Y===n.HALF_FLOAT&&(J=n.RG16F),Y===n.UNSIGNED_BYTE&&(J=n.RG8)),A===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(J=n.RG8UI),Y===n.UNSIGNED_SHORT&&(J=n.RG16UI),Y===n.UNSIGNED_INT&&(J=n.RG32UI),Y===n.BYTE&&(J=n.RG8I),Y===n.SHORT&&(J=n.RG16I),Y===n.INT&&(J=n.RG32I)),A===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),A===n.RGBA){const Pe=ue?id:Ct.getTransfer(oe);Y===n.FLOAT&&(J=n.RGBA32F),Y===n.HALF_FLOAT&&(J=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(J=Pe===Ot?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(D,A){let Y;return D?A===null||A===No||A===nl?Y=n.DEPTH24_STENCIL8:A===Gr?Y=n.DEPTH32F_STENCIL8:A===Du&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===No||A===nl?Y=n.DEPTH_COMPONENT24:A===Gr?Y=n.DEPTH_COMPONENT32F:A===Du&&(Y=n.DEPTH_COMPONENT16),Y}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wi&&D.minFilter!==or?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){const A=D.target;A.removeEventListener("dispose",w),M(A),A.isVideoTexture&&c.delete(A)}function C(D){const A=D.target;A.removeEventListener("dispose",C),E(A)}function M(D){const A=i.get(D);if(A.__webglInit===void 0)return;const Y=D.source,oe=d.get(Y);if(oe){const ue=oe[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&R(D),Object.keys(oe).length===0&&d.delete(Y)}i.remove(D)}function R(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const Y=D.source,oe=d.get(Y);delete oe[A.__cacheKey],o.memory.textures--}function E(D){const A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ue=0;ue<A.__webglFramebuffer[oe].length;ue++)n.deleteFramebuffer(A.__webglFramebuffer[oe][ue]);else n.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)n.deleteFramebuffer(A.__webglFramebuffer[oe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=D.textures;for(let oe=0,ue=Y.length;oe<ue;oe++){const J=i.get(Y[oe]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(Y[oe])}i.remove(D)}let S=0;function P(){S=0}function N(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function z(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function V(D,A){const Y=i.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(Y,D,A);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+A)}function $(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Fe(Y,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+A)}function G(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Fe(Y,D,A);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+A)}function W(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){q(Y,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+A)}const L={[pm]:n.REPEAT,[_o]:n.CLAMP_TO_EDGE,[mm]:n.MIRRORED_REPEAT},j={[Wi]:n.NEAREST,[SA]:n.NEAREST_MIPMAP_NEAREST,[_c]:n.NEAREST_MIPMAP_LINEAR,[or]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[vo]:n.LINEAR_MIPMAP_LINEAR},b={[TA]:n.NEVER,[LA]:n.ALWAYS,[AA]:n.LESS,[yM]:n.LEQUAL,[CA]:n.EQUAL,[PA]:n.GEQUAL,[RA]:n.GREATER,[bA]:n.NOTEQUAL};function se(D,A){if(A.type===Gr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===or||A.magFilter===wh||A.magFilter===_c||A.magFilter===vo||A.minFilter===or||A.minFilter===wh||A.minFilter===_c||A.minFilter===vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,L[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,L[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,L[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,b[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Wi||A.minFilter!==_c&&A.minFilter!==vo||A.type===Gr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function _e(D,A){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",w));const oe=A.source;let ue=d.get(oe);ue===void 0&&(ue={},d.set(oe,ue));const J=z(A);if(J!==D.__cacheKey){ue[J]===void 0&&(ue[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[J].usedTimes++;const Pe=ue[D.__cacheKey];Pe!==void 0&&(ue[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(A)),D.__cacheKey=J,D.__webglTexture=ue[J].texture}return Y}function Fe(D,A,Y){let oe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=n.TEXTURE_3D);const ue=_e(D,A),J=A.source;t.bindTexture(oe,D.__webglTexture,n.TEXTURE0+Y);const Pe=i.get(J);if(J.version!==Pe.__version||ue===!0){t.activeTexture(n.TEXTURE0+Y);const fe=Ct.getPrimaries(Ct.workingColorSpace),xe=A.colorSpace===gs?null:Ct.getPrimaries(A.colorSpace),We=A.colorSpace===gs||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ce=m(A.image,!1,r.maxTextureSize);ce=Ne(A,ce);const we=s.convert(A.format,A.colorSpace),Be=s.convert(A.type);let qe=v(A.internalFormat,we,Be,A.colorSpace,A.isVideoTexture);se(oe,A);let Me;const Ke=A.mipmaps,$e=A.isVideoTexture!==!0,xt=Pe.__version===void 0||ue===!0,O=J.dataReady,Q=y(A,ce);if(A.isDepthTexture)qe=x(A.format===il,A.type),xt&&($e?t.texStorage2D(n.TEXTURE_2D,1,qe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,qe,ce.width,ce.height,0,we,Be,null));else if(A.isDataTexture)if(Ke.length>0){$e&&xt&&t.texStorage2D(n.TEXTURE_2D,Q,qe,Ke[0].width,Ke[0].height);for(let ee=0,K=Ke.length;ee<K;ee++)Me=Ke[ee],$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,we,Be,Me.data):t.texImage2D(n.TEXTURE_2D,ee,qe,Me.width,Me.height,0,we,Be,Me.data);A.generateMipmaps=!1}else $e?(xt&&t.texStorage2D(n.TEXTURE_2D,Q,qe,ce.width,ce.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,we,Be,ce.data)):t.texImage2D(n.TEXTURE_2D,0,qe,ce.width,ce.height,0,we,Be,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){$e&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,qe,Ke[0].width,Ke[0].height,ce.depth);for(let ee=0,K=Ke.length;ee<K;ee++)if(Me=Ke[ee],A.format!==lr)if(we!==null)if($e){if(O)if(A.layerUpdates.size>0){const de=rx(Me.width,Me.height,A.format,A.type);for(const De of A.layerUpdates){const nt=Me.data.subarray(De*de/Me.data.BYTES_PER_ELEMENT,(De+1)*de/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,De,Me.width,Me.height,1,we,nt,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,ce.depth,we,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,qe,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Me.width,Me.height,ce.depth,we,Be,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,qe,Me.width,Me.height,ce.depth,0,we,Be,Me.data)}else{$e&&xt&&t.texStorage2D(n.TEXTURE_2D,Q,qe,Ke[0].width,Ke[0].height);for(let ee=0,K=Ke.length;ee<K;ee++)Me=Ke[ee],A.format!==lr?we!==null?$e?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,qe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Me.width,Me.height,we,Be,Me.data):t.texImage2D(n.TEXTURE_2D,ee,qe,Me.width,Me.height,0,we,Be,Me.data)}else if(A.isDataArrayTexture)if($e){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,qe,ce.width,ce.height,ce.depth),O)if(A.layerUpdates.size>0){const ee=rx(ce.width,ce.height,A.format,A.type);for(const K of A.layerUpdates){const de=ce.data.subarray(K*ee/ce.data.BYTES_PER_ELEMENT,(K+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ce.width,ce.height,1,we,Be,de)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,we,Be,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,ce.width,ce.height,ce.depth,0,we,Be,ce.data);else if(A.isData3DTexture)$e?(xt&&t.texStorage3D(n.TEXTURE_3D,Q,qe,ce.width,ce.height,ce.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,we,Be,ce.data)):t.texImage3D(n.TEXTURE_3D,0,qe,ce.width,ce.height,ce.depth,0,we,Be,ce.data);else if(A.isFramebufferTexture){if(xt)if($e)t.texStorage2D(n.TEXTURE_2D,Q,qe,ce.width,ce.height);else{let ee=ce.width,K=ce.height;for(let de=0;de<Q;de++)t.texImage2D(n.TEXTURE_2D,de,qe,ee,K,0,we,Be,null),ee>>=1,K>>=1}}else if(Ke.length>0){if($e&&xt){const ee=je(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Q,qe,ee.width,ee.height)}for(let ee=0,K=Ke.length;ee<K;ee++)Me=Ke[ee],$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,we,Be,Me):t.texImage2D(n.TEXTURE_2D,ee,qe,we,Be,Me);A.generateMipmaps=!1}else if($e){if(xt){const ee=je(ce);t.texStorage2D(n.TEXTURE_2D,Q,qe,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Be,ce)}else t.texImage2D(n.TEXTURE_2D,0,qe,we,Be,ce);g(A)&&h(oe),Pe.__version=J.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function q(D,A,Y){if(A.image.length!==6)return;const oe=_e(D,A),ue=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const J=i.get(ue);if(ue.version!==J.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y);const Pe=Ct.getPrimaries(Ct.workingColorSpace),fe=A.colorSpace===gs?null:Ct.getPrimaries(A.colorSpace),xe=A.colorSpace===gs||Pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const We=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,we=[];for(let K=0;K<6;K++)!We&&!ce?we[K]=m(A.image[K],!0,r.maxCubemapSize):we[K]=ce?A.image[K].image:A.image[K],we[K]=Ne(A,we[K]);const Be=we[0],qe=s.convert(A.format,A.colorSpace),Me=s.convert(A.type),Ke=v(A.internalFormat,qe,Me,A.colorSpace),$e=A.isVideoTexture!==!0,xt=J.__version===void 0||oe===!0,O=ue.dataReady;let Q=y(A,Be);se(n.TEXTURE_CUBE_MAP,A);let ee;if(We){$e&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ke,Be.width,Be.height);for(let K=0;K<6;K++){ee=we[K].mipmaps;for(let de=0;de<ee.length;de++){const De=ee[de];A.format!==lr?qe!==null?$e?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,De.width,De.height,qe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,De.width,De.height,qe,Me,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Ke,De.width,De.height,0,qe,Me,De.data)}}}else{if(ee=A.mipmaps,$e&&xt){ee.length>0&&Q++;const K=je(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Ke,K.width,K.height)}for(let K=0;K<6;K++)if(ce){$e?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we[K].width,we[K].height,qe,Me,we[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ke,we[K].width,we[K].height,0,qe,Me,we[K].data);for(let de=0;de<ee.length;de++){const nt=ee[de].image[K].image;$e?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,nt.width,nt.height,qe,Me,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Ke,nt.width,nt.height,0,qe,Me,nt.data)}}else{$e?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,qe,Me,we[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ke,qe,Me,we[K]);for(let de=0;de<ee.length;de++){const De=ee[de];$e?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,qe,Me,De.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Ke,qe,Me,De.image[K])}}}g(A)&&h(n.TEXTURE_CUBE_MAP),J.__version=ue.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ie(D,A,Y,oe,ue,J){const Pe=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),xe=v(Y.internalFormat,Pe,fe,Y.colorSpace);if(!i.get(A).__hasExternalTextures){const ce=Math.max(1,A.width>>J),we=Math.max(1,A.height>>J);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,J,xe,ce,we,A.depth,0,Pe,fe,null):t.texImage2D(ue,J,xe,ce,we,0,Pe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ce(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ue,i.get(Y).__webglTexture,0,tt(A)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ue,i.get(Y).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(D,A,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){const oe=A.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,J=x(A.stencilBuffer,ue),Pe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=tt(A);Ce(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,J,A.width,A.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,J,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,J,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,D)}else{const oe=A.textures;for(let ue=0;ue<oe.length;ue++){const J=oe[ue],Pe=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),xe=v(J.internalFormat,Pe,fe,J.colorSpace),We=tt(A);Y&&Ce(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,xe,A.width,A.height):Ce(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,xe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,xe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const oe=i.get(A.depthTexture).__webglTexture,ue=tt(A);if(A.depthTexture.format===ka)Ce(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(A.depthTexture.format===il)Ce(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const A=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");le(A.__webglFramebuffer,D)}else if(Y){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]=n.createRenderbuffer(),he(A.__webglDepthbuffer[oe],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),he(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(D,A,Y){const oe=i.get(D);A!==void 0&&ie(oe.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Oe(D)}function Qe(D){const A=D.texture,Y=i.get(D),oe=i.get(A);D.addEventListener("dispose",C);const ue=D.textures,J=D.isWebGLCubeRenderTarget===!0,Pe=ue.length>1;if(Pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=A.version,o.memory.textures++),J){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let xe=0;xe<A.mipmaps.length;xe++)Y.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else Y.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let fe=0,xe=ue.length;fe<xe;fe++){const We=i.get(ue[fe]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Ce(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const xe=ue[fe];Y.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);const We=s.convert(xe.format,xe.colorSpace),ce=s.convert(xe.type),we=v(xe.internalFormat,We,ce,xe.colorSpace,D.isXRRenderTarget===!0),Be=tt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,we,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),se(n.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)ie(Y.__webglFramebuffer[fe][xe],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ie(Y.__webglFramebuffer[fe],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(A)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,xe=ue.length;fe<xe;fe++){const We=ue[fe],ce=i.get(We);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),se(n.TEXTURE_2D,We),ie(Y.__webglFramebuffer,D,We,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(We)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,oe.__webglTexture),se(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)ie(Y.__webglFramebuffer[xe],D,A,n.COLOR_ATTACHMENT0,fe,xe);else ie(Y.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,fe,0);g(A)&&h(fe),t.unbindTexture()}D.depthBuffer&&Oe(D)}function it(D){const A=D.textures;for(let Y=0,oe=A.length;Y<oe;Y++){const ue=A[Y];if(g(ue)){const J=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pe=i.get(ue).__webglTexture;t.bindTexture(J,Pe),h(J),t.unbindTexture()}}}const U=[],Ve=[];function Ye(D){if(D.samples>0){if(Ce(D)===!1){const A=D.textures,Y=D.width,oe=D.height;let ue=n.COLOR_BUFFER_BIT;const J=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(D),fe=A.length>1;if(fe)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const We=i.get(A[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,ue,n.NEAREST),l===!0&&(U.length=0,Ve.length=0,U.push(n.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(U.push(J),Ve.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const We=i.get(A[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function tt(D){return Math.min(r.maxSamples,D.samples)}function Ce(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(D){const A=o.render.frame;c.get(D)!==A&&(c.set(D,A),D.update())}function Ne(D,A){const Y=D.colorSpace,oe=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==$s&&Y!==gs&&(Ct.getTransfer(Y)===Ot?(oe!==lr||ue!==Qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=ke,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ce}function IP(n,e){function t(i,r=gs){let s;const o=Ct.getTransfer(r);if(i===Qr)return n.UNSIGNED_BYTE;if(i===f0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===d0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cM)return n.BYTE;if(i===fM)return n.SHORT;if(i===Du)return n.UNSIGNED_SHORT;if(i===c0)return n.INT;if(i===No)return n.UNSIGNED_INT;if(i===Gr)return n.FLOAT;if(i===$u)return n.HALF_FLOAT;if(i===hM)return n.ALPHA;if(i===pM)return n.RGB;if(i===lr)return n.RGBA;if(i===mM)return n.LUMINANCE;if(i===gM)return n.LUMINANCE_ALPHA;if(i===ka)return n.DEPTH_COMPONENT;if(i===il)return n.DEPTH_STENCIL;if(i===_M)return n.RED;if(i===h0)return n.RED_INTEGER;if(i===vM)return n.RG;if(i===p0)return n.RG_INTEGER;if(i===m0)return n.RGBA_INTEGER;if(i===gf||i===_f||i===vf||i===xf)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_f)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gm||i===_m||i===vm||i===xm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_m)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ym||i===Sm||i===Mm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ym||i===Sm)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Em||i===wm||i===Tm||i===Am||i===Cm||i===Rm||i===bm||i===Pm||i===Lm||i===Dm||i===Im||i===Um||i===Nm||i===Fm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Em)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Am)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Im)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Um)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yf||i===Om||i===km)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yf)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===km)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xM||i===zm||i===Bm||i===Hm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class UP extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qt extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NP={type:"move"};class Kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),h=this._getHandJoint(u,m);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const FP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ui,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bs({vertexShader:FP,fragmentShader:OP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Vd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zP extends pl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const m=new kP,g=t.getContextAttributes();let h=null,v=null;const x=[],y=[],w=new mt;let C=null;const M=new Mi;M.layers.enable(1),M.viewport=new kt;const R=new Mi;R.layers.enable(2),R.viewport=new kt;const E=[M,R],S=new UP;S.layers.enable(1),S.layers.enable(2);let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new Kh,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new Kh,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new Kh,x[q]=ie),ie.getHandSpace()};function z(q){const ie=y.indexOf(q.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update(q.inputSource,q.frame,u||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const ie=y[q];ie!==null&&(y[q]=null,x[q].disconnect(ie))}P=null,N=null,m.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Fo(p.framebufferWidth,p.framebufferHeight,{format:lr,type:Qr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,he=null,le=null;g.depth&&(le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?il:ka,he=g.stencil?nl:No);const Oe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Fo(d.textureWidth,d.textureHeight,{format:lr,type:Qr,depthTexture:new UM(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(q){for(let ie=0;ie<q.removed.length;ie++){const he=q.removed[ie],le=y.indexOf(he);le>=0&&(y[le]=null,x[le].disconnect(he))}for(let ie=0;ie<q.added.length;ie++){const he=q.added[ie];let le=y.indexOf(he);if(le===-1){for(let ke=0;ke<x.length;ke++)if(ke>=y.length){y.push(he),le=ke;break}else if(y[ke]===null){y[ke]=he,le=ke;break}if(le===-1)break}const Oe=x[le];Oe&&Oe.connect(he)}}const G=new F,W=new F;function L(q,ie,he){G.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const le=G.distanceTo(W),Oe=ie.projectionMatrix.elements,ke=he.projectionMatrix.elements,Qe=Oe[14]/(Oe[10]-1),it=Oe[14]/(Oe[10]+1),U=(Oe[9]+1)/Oe[5],Ve=(Oe[9]-1)/Oe[5],Ye=(Oe[8]-1)/Oe[0],tt=(ke[8]+1)/ke[0],Ce=Qe*Ye,X=Qe*tt,Ne=le/(-Ye+tt),je=Ne*-Ye;ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(je),q.translateZ(Ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const D=Qe+Ne,A=it+Ne,Y=Ce-je,oe=X+(le-je),ue=U*it/A*D,J=Ve*it/A*D;q.projectionMatrix.makePerspective(Y,oe,ue,J,D,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;m.texture!==null&&(q.near=m.depthNear,q.far=m.depthFar),S.near=R.near=M.near=q.near,S.far=R.far=M.far=q.far,(P!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,N=S.far,M.near=P,M.far=N,R.near=P,R.far=N,M.updateProjectionMatrix(),R.updateProjectionMatrix(),q.updateProjectionMatrix());const ie=q.parent,he=S.cameras;j(S,ie);for(let le=0;le<he.length;le++)j(he[le],ie);he.length===2?L(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),b(q,S,ie)};function b(q,ie,he){he===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let se=null;function _e(q,ie){if(c=ie.getViewerPose(u||o),_=ie,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;he.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let ke=0;ke<he.length;ke++){const Qe=he[ke];let it=null;if(p!==null)it=p.getViewport(Qe);else{const Ve=f.getViewSubImage(d,Qe);it=Ve.viewport,ke===0&&(e.setRenderTargetTextures(v,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(v))}let U=E[ke];U===void 0&&(U=new Mi,U.layers.enable(ke),U.viewport=new kt,E[ke]=U),U.matrix.fromArray(Qe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Qe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(it.x,it.y,it.width,it.height),ke===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(U)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const ke=f.getDepthInformation(he[0]);ke&&ke.isValid&&ke.texture&&m.init(e,ke,r.renderState)}}for(let he=0;he<x.length;he++){const le=y[he],Oe=x[he];le!==null&&Oe!==void 0&&Oe.update(le,ie,u||o)}se&&se(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Fe=new DM;Fe.setAnimationLoop(_e),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const to=new hr,BP=new $t;function HP(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,bM(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),m(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===li&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===li&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,to.copy(y),to.x*=-1,to.y*=-1,to.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),g.envMapRotation.value.setFromMatrix4(BP.makeRotationFromEuler(to)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===li&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function m(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),w=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,M=y.length;C<M;C++){const R=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,S=R.length;E<S;E++){const P=R[E];if(p(P,C,E,w)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<z.length;$++){const G=z[$],W=m(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,N+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,w){const C=v.value,M=x+"_"+y;if(w[M]===void 0)return typeof C=="number"||typeof C=="boolean"?w[M]=C:w[M]=C.clone(),!0;{const R=w[M];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return w[M]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(v){const x=v.uniforms;let y=0;const w=16;for(let M=0,R=x.length;M<R;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,P=E.length;S<P;S++){const N=E[S],z=Array.isArray(N.value)?N.value:[N.value];for(let V=0,$=z.length;V<$;V++){const G=z[V],W=m(G),L=y%w,j=L%W.boundary,b=L+j;y+=j,b!==0&&w-b<W.storage&&(y+=w-b),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=W.storage}}}const C=y%w;return C>0&&(y+=w-C),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class GP{constructor(e={}){const{canvas:t=IA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gr,this.toneMapping=Is,this.toneMappingExposure=1;const x=this;let y=!1,w=0,C=0,M=null,R=-1,E=null;const S=new kt,P=new kt;let N=null;const z=new pt(0);let V=0,$=t.width,G=t.height,W=1,L=null,j=null;const b=new kt(0,0,$,G),se=new kt(0,0,$,G);let _e=!1;const Fe=new v0;let q=!1,ie=!1;const he=new $t,le=new F,Oe=new kt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function it(){return M===null?W:1}let U=i;function Ve(T,I){return t.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${l0}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",de,!1),U===null){const I="webgl2";if(U=Ve(I,T),U===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,tt,Ce,X,Ne,je,D,A,Y,oe,ue,J,Pe,fe,xe,We,ce,we,Be,qe,Me,Ke,$e,xt;function O(){Ye=new q2(U),Ye.init(),Ke=new IP(U,Ye),tt=new G2(U,Ye,e,Ke),Ce=new PP(U),X=new Q2(U),Ne=new gP,je=new DP(U,Ye,Ce,Ne,tt,Ke,X),D=new X2(x),A=new $2(x),Y=new sC(U),$e=new H2(U,Y),oe=new K2(U,Y,X,$e),ue=new eb(U,oe,Y,X),Be=new J2(U,tt,je),We=new W2(Ne),J=new mP(x,D,A,Ye,tt,$e,We),Pe=new HP(x,Ne),fe=new vP,xe=new wP(Ye),we=new B2(x,D,A,Ce,ue,d,l),ce=new bP(x,ue,tt),xt=new VP(U,X,tt,Ce),qe=new V2(U,Ye,X),Me=new Z2(U,Ye,X),X.programs=J.programs,x.capabilities=tt,x.extensions=Ye,x.properties=Ne,x.renderLists=fe,x.shadowMap=ce,x.state=Ce,x.info=X}O();const Q=new zP(x,U);this.xr=Q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize($,G,!1))},this.getSize=function(T){return T.set($,G)},this.setSize=function(T,I,H=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,G=I,t.width=Math.floor(T*W),t.height=Math.floor(I*W),H===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set($*W,G*W).floor()},this.setDrawingBufferSize=function(T,I,H){$=T,G=I,W=H,t.width=Math.floor(T*H),t.height=Math.floor(I*H),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(b)},this.setViewport=function(T,I,H,B){T.isVector4?b.set(T.x,T.y,T.z,T.w):b.set(T,I,H,B),Ce.viewport(S.copy(b).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,I,H,B){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,I,H,B),Ce.scissor(P.copy(se).multiplyScalar(W).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){Ce.setScissorTest(_e=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(T=!0,I=!0,H=!0){let B=0;if(T){let k=!1;if(M!==null){const re=M.texture.format;k=re===m0||re===p0||re===h0}if(k){const re=M.texture.type,ve=re===Qr||re===No||re===Du||re===nl||re===f0||re===d0,Ae=we.getClearColor(),ge=we.getClearAlpha(),Te=Ae.r,Ue=Ae.g,He=Ae.b;ve?(p[0]=Te,p[1]=Ue,p[2]=He,p[3]=ge,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=Te,_[1]=Ue,_[2]=He,_[3]=ge,U.clearBufferiv(U.COLOR,0,_))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),H&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),xe.dispose(),Ne.dispose(),D.dispose(),A.dispose(),ue.dispose(),$e.dispose(),xt.dispose(),J.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ie),Q.removeEventListener("sessionend",ut),me.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=X.autoReset,I=ce.enabled,H=ce.autoUpdate,B=ce.needsUpdate,k=ce.type;O(),X.autoReset=T,ce.enabled=I,ce.autoUpdate=H,ce.needsUpdate=B,ce.type=k}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const I=T.target;I.removeEventListener("dispose",De),nt(I)}function nt(T){Et(T),Ne.remove(T)}function Et(T){const I=Ne.get(T).programs;I!==void 0&&(I.forEach(function(H){J.releaseProgram(H)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,H,B,k,re){I===null&&(I=ke);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Ae=ne(T,I,H,B,k);Ce.setMaterial(B,ve);let ge=H.index,Te=1;if(B.wireframe===!0){if(ge=oe.getWireframeAttribute(H),ge===void 0)return;Te=2}const Ue=H.drawRange,He=H.attributes.position;let ft=Ue.start*Te,yt=(Ue.start+Ue.count)*Te;re!==null&&(ft=Math.max(ft,re.start*Te),yt=Math.min(yt,(re.start+re.count)*Te)),ge!==null?(ft=Math.max(ft,0),yt=Math.min(yt,ge.count)):He!=null&&(ft=Math.max(ft,0),yt=Math.min(yt,He.count));const St=yt-ft;if(St<0||St===1/0)return;$e.setup(k,B,Ae,H,ge);let ln,_t=qe;if(ge!==null&&(ln=Y.get(ge),_t=Me,_t.setIndex(ln)),k.isMesh)B.wireframe===!0?(Ce.setLineWidth(B.wireframeLinewidth*it()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(k.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),Ce.setLineWidth(Le*it()),k.isLineSegments?_t.setMode(U.LINES):k.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else k.isPoints?_t.setMode(U.POINTS):k.isSprite&&_t.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)_t.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,Mn=k._multiDrawCounts,Tt=k._multiDrawCount,Zi=ge?Y.get(ge).bytesPerElement:1,Wo=Ne.get(B).currentProgram.getUniforms();for(let mi=0;mi<Tt;mi++)Wo.setValue(U,"_gl_DrawID",mi),_t.render(Le[mi]/Zi,Mn[mi])}else if(k.isInstancedMesh)_t.renderInstances(ft,St,k.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mn=Math.min(H.instanceCount,Le);_t.renderInstances(ft,St,Mn)}else _t.render(ft,St)};function wt(T,I,H){T.transparent===!0&&T.side===Sr&&T.forceSinglePass===!1?(T.side=li,T.needsUpdate=!0,bt(T,I,H),T.side=zs,T.needsUpdate=!0,bt(T,I,H),T.side=Sr):bt(T,I,H)}this.compile=function(T,I,H=null){H===null&&(H=T),g=xe.get(H),g.init(I),v.push(g),H.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const B=new Set;return T.traverse(function(k){const re=k.material;if(re)if(Array.isArray(re))for(let ve=0;ve<re.length;ve++){const Ae=re[ve];wt(Ae,H,k),B.add(Ae)}else wt(re,H,k),B.add(re)}),v.pop(),g=null,B},this.compileAsync=function(T,I,H=null){const B=this.compile(T,I,H);return new Promise(k=>{function re(){if(B.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){k(T);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let lt=null;function Ge(T){lt&&lt(T)}function Ie(){me.stop()}function ut(){me.start()}const me=new DM;me.setAnimationLoop(Ge),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(T){lt=T,Q.setAnimationLoop(T),T===null?me.stop():me.start()},Q.addEventListener("sessionstart",Ie),Q.addEventListener("sessionend",ut),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(I),I=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,M),g=xe.get(T,v.length),g.init(I),v.push(g),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(he),ie=this.localClippingEnabled,q=We.init(this.clippingPlanes,ie),m=fe.get(T,h.length),m.init(),h.push(m),Q.enabled===!0&&Q.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Xe(re,I,-1/0,x.sortObjects)}Xe(T,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(L,j),Qe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Qe&&we.addToRenderList(m,T),this.info.render.frame++,q===!0&&We.beginShadows();const H=g.state.shadowsArray;ce.render(H,T,I),q===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,k=m.transmissive;if(g.setupLights(),I.isArrayCamera){const re=I.cameras;if(k.length>0)for(let ve=0,Ae=re.length;ve<Ae;ve++){const ge=re[ve];Je(B,k,T,ge)}Qe&&we.render(T);for(let ve=0,Ae=re.length;ve<Ae;ve++){const ge=re[ve];ze(m,T,ge,ge.viewport)}}else k.length>0&&Je(B,k,T,I),Qe&&we.render(T),ze(m,T,I);M!==null&&(je.updateMultisampleRenderTarget(M),je.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(x,T,I),$e.resetDefaultState(),R=-1,E=null,v.pop(),v.length>0?(g=v[v.length-1],q===!0&&We.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function Xe(T,I,H,B){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){B&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const ve=ue.update(T),Ae=T.material;Ae.visible&&m.push(T,ve,Ae,H,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const ve=ue.update(T),Ae=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Ae)){const ge=ve.groups;for(let Te=0,Ue=ge.length;Te<Ue;Te++){const He=ge[Te],ft=Ae[He.materialIndex];ft&&ft.visible&&m.push(T,ve,ft,H,Oe.z,He)}}else Ae.visible&&m.push(T,ve,Ae,H,Oe.z,null)}}const re=T.children;for(let ve=0,Ae=re.length;ve<Ae;ve++)Xe(re[ve],I,H,B)}function ze(T,I,H,B){const k=T.opaque,re=T.transmissive,ve=T.transparent;g.setupLightsView(H),q===!0&&We.setGlobalState(x.clippingPlanes,H),B&&Ce.viewport(S.copy(B)),k.length>0&&Rt(k,I,H),re.length>0&&Rt(re,I,H),ve.length>0&&Rt(ve,I,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Je(T,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[B.id]===void 0&&(g.state.transmissionRenderTarget[B.id]=new Fo(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?$u:Qr,minFilter:vo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const re=g.state.transmissionRenderTarget[B.id],ve=B.viewport||S;re.setSize(ve.z,ve.w);const Ae=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(z),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&we.render(H);const ge=x.toneMapping;x.toneMapping=Is;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),g.setupLightsView(B),q===!0&&We.setGlobalState(x.clippingPlanes,B),Rt(T,H,B),je.updateMultisampleRenderTarget(re),je.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let He=0,ft=I.length;He<ft;He++){const yt=I[He],St=yt.object,ln=yt.geometry,_t=yt.material,Le=yt.group;if(_t.side===Sr&&St.layers.test(B.layers)){const Mn=_t.side;_t.side=li,_t.needsUpdate=!0,rt(St,H,B,ln,_t,Le),_t.side=Mn,_t.needsUpdate=!0,Ue=!0}}Ue===!0&&(je.updateMultisampleRenderTarget(re),je.updateRenderTargetMipmap(re))}x.setRenderTarget(Ae),x.setClearColor(z,V),Te!==void 0&&(B.viewport=Te),x.toneMapping=ge}function Rt(T,I,H){const B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,re=T.length;k<re;k++){const ve=T[k],Ae=ve.object,ge=ve.geometry,Te=B===null?ve.material:B,Ue=ve.group;Ae.layers.test(H.layers)&&rt(Ae,I,H,ge,Te,Ue)}}function rt(T,I,H,B,k,re){T.onBeforeRender(x,I,H,B,k,re),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.transparent===!0&&k.side===Sr&&k.forceSinglePass===!1?(k.side=li,k.needsUpdate=!0,x.renderBufferDirect(H,I,B,k,T,re),k.side=zs,k.needsUpdate=!0,x.renderBufferDirect(H,I,B,k,T,re),k.side=Sr):x.renderBufferDirect(H,I,B,k,T,re),T.onAfterRender(x,I,H,B,k,re)}function bt(T,I,H){I.isScene!==!0&&(I=ke);const B=Ne.get(T),k=g.state.lights,re=g.state.shadowsArray,ve=k.state.version,Ae=J.getParameters(T,k.state,re,I,H),ge=J.getProgramCacheKey(Ae);let Te=B.programs;B.environment=T.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(T.isMeshStandardMaterial?A:D).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Te===void 0&&(T.addEventListener("dispose",De),Te=new Map,B.programs=Te);let Ue=Te.get(ge);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ve)return Z(T,Ae),Ue}else Ae.uniforms=J.getUniforms(T),T.onBeforeCompile(Ae,x),Ue=J.acquireProgram(Ae,ge),Te.set(ge,Ue),B.uniforms=Ae.uniforms;const He=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=We.uniform),Z(T,Ae),B.needsLights=Ze(T),B.lightsStateVersion=ve,B.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function te(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Mf.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Z(T,I){const H=Ne.get(T);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function ne(T,I,H,B,k){I.isScene!==!0&&(I=ke),je.resetTextureUnits();const re=I.fog,ve=B.isMeshStandardMaterial?I.environment:null,Ae=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:$s,ge=(B.isMeshStandardMaterial?A:D).get(B.envMap||ve),Te=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),He=!!H.morphAttributes.position,ft=!!H.morphAttributes.normal,yt=!!H.morphAttributes.color;let St=Is;B.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=x.toneMapping);const ln=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=ln!==void 0?ln.length:0,Le=Ne.get(B),Mn=g.state.lights;if(q===!0&&(ie===!0||T!==E)){const Fi=T===E&&B.id===R;We.setState(B,T,Fi)}let Tt=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mn.state.version||Le.outputColorSpace!==Ae||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==ge||B.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==We.numPlanes||Le.numIntersection!==We.numIntersection)||Le.vertexAlphas!==Te||Le.vertexTangents!==Ue||Le.morphTargets!==He||Le.morphNormals!==ft||Le.morphColors!==yt||Le.toneMapping!==St||Le.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,Le.__version=B.version);let Zi=Le.currentProgram;Tt===!0&&(Zi=bt(B,I,k));let Wo=!1,mi=!1,$d=!1;const nn=Zi.getUniforms(),ns=Le.uniforms;if(Ce.useProgram(Zi.program)&&(Wo=!0,mi=!0,$d=!0),B.id!==R&&(R=B.id,mi=!0),Wo||E!==T){nn.setValue(U,"projectionMatrix",T.projectionMatrix),nn.setValue(U,"viewMatrix",T.matrixWorldInverse);const Fi=nn.map.cameraPosition;Fi!==void 0&&Fi.setValue(U,le.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&nn.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&nn.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,mi=!0,$d=!0)}if(k.isSkinnedMesh){nn.setOptional(U,k,"bindMatrix"),nn.setOptional(U,k,"bindMatrixInverse");const Fi=k.skeleton;Fi&&(Fi.boneTexture===null&&Fi.computeBoneTexture(),nn.setValue(U,"boneTexture",Fi.boneTexture,je))}k.isBatchedMesh&&(nn.setOptional(U,k,"batchingTexture"),nn.setValue(U,"batchingTexture",k._matricesTexture,je),nn.setOptional(U,k,"batchingIdTexture"),nn.setValue(U,"batchingIdTexture",k._indirectTexture,je),nn.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&nn.setValue(U,"batchingColorTexture",k._colorsTexture,je));const qd=H.morphAttributes;if((qd.position!==void 0||qd.normal!==void 0||qd.color!==void 0)&&Be.update(k,H,Zi),(mi||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,nn.setValue(U,"receiveShadow",k.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ns.envMap.value=ge,ns.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ns.envMapIntensity.value=I.environmentIntensity),mi&&(nn.setValue(U,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&ye(ns,$d),re&&B.fog===!0&&Pe.refreshFogUniforms(ns,re),Pe.refreshMaterialUniforms(ns,B,W,G,g.state.transmissionRenderTarget[T.id]),Mf.upload(U,te(Le),ns,je)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mf.upload(U,te(Le),ns,je),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&nn.setValue(U,"center",k.center),nn.setValue(U,"modelViewMatrix",k.modelViewMatrix),nn.setValue(U,"normalMatrix",k.normalMatrix),nn.setValue(U,"modelMatrix",k.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Fi=B.uniformsGroups;for(let Kd=0,lE=Fi.length;Kd<lE;Kd++){const Z0=Fi[Kd];xt.update(Z0,Zi),xt.bind(Z0,Zi)}}return Zi}function ye(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Ze(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,I,H){Ne.get(T.texture).__webglTexture=I,Ne.get(T.depthTexture).__webglTexture=H;const B=Ne.get(T);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=H===void 0,B.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const H=Ne.get(T);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,H=0){M=T,w=I,C=H;let B=!0,k=null,re=!1,ve=!1;if(T){const ge=Ne.get(T);ge.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):ge.__webglFramebuffer===void 0?je.setupRenderTarget(T):ge.__hasExternalTextures&&je.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ue=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?k=Ue[I][H]:k=Ue[I],re=!0):T.samples>0&&je.useMultisampledRTT(T)===!1?k=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[H]:k=Ue,S.copy(T.viewport),P.copy(T.scissor),N=T.scissorTest}else S.copy(b).multiplyScalar(W).floor(),P.copy(se).multiplyScalar(W).floor(),N=_e;if(Ce.bindFramebuffer(U.FRAMEBUFFER,k)&&B&&Ce.drawBuffers(T,k),Ce.viewport(S),Ce.scissor(P),Ce.setScissorTest(N),re){const ge=Ne.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,H)}else if(ve){const ge=Ne.get(T.texture),Te=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ge.__webglTexture,H||0,Te)}R=-1},this.readRenderTargetPixels=function(T,I,H,B,k,re,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Ce.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const ge=T.texture,Te=ge.format,Ue=ge.type;if(!tt.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-B&&H>=0&&H<=T.height-k&&U.readPixels(I,H,B,k,Ke.convert(Te),Ke.convert(Ue),re)}finally{const ge=M!==null?Ne.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,I,H,B,k,re,ve){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Ce.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const ge=T.texture,Te=ge.format,Ue=ge.type;if(!tt.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-B&&H>=0&&H<=T.height-k){const He=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(I,H,B,k,Ke.convert(Te),Ke.convert(Ue),0),U.flush();const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await UA(U,ft,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re)}finally{U.deleteBuffer(He),U.deleteSync(ft)}return re}}finally{const ge=M!==null?Ne.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(T,I=null,H=0){T.isTexture!==!0&&(nu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const B=Math.pow(2,-H),k=Math.floor(T.image.width*B),re=Math.floor(T.image.height*B),ve=I!==null?I.x:0,Ae=I!==null?I.y:0;je.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ve,Ae,k,re),Ce.unbindTexture()},this.copyTextureToTexture=function(T,I,H=null,B=null,k=0){T.isTexture!==!0&&(nu("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1],I=arguments[2],k=arguments[3]||0,H=null);let re,ve,Ae,ge,Te,Ue;H!==null?(re=H.max.x-H.min.x,ve=H.max.y-H.min.y,Ae=H.min.x,ge=H.min.y):(re=T.image.width,ve=T.image.height,Ae=0,ge=0),B!==null?(Te=B.x,Ue=B.y):(Te=0,Ue=0);const He=Ke.convert(I.format),ft=Ke.convert(I.type);je.setTexture2D(I,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),_t=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES),Mn=T.isCompressedTexture?T.mipmaps[k]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Mn.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mn.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,ge),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Te,Ue,re,ve,He,ft,Mn.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Te,Ue,Mn.width,Mn.height,He,Mn.data):U.texSubImage2D(U.TEXTURE_2D,k,Te,Ue,re,ve,He,ft,Mn),U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,_t),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),k===0&&I.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,I,H=null,B=null,k=0){T.isTexture!==!0&&(nu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,B=arguments[1]||null,T=arguments[2],I=arguments[3],k=arguments[4]||0);let re,ve,Ae,ge,Te,Ue,He,ft,yt;const St=T.isCompressedTexture?T.mipmaps[k]:T.image;H!==null?(re=H.max.x-H.min.x,ve=H.max.y-H.min.y,Ae=H.max.z-H.min.z,ge=H.min.x,Te=H.min.y,Ue=H.min.z):(re=St.width,ve=St.height,Ae=St.depth,ge=0,Te=0,Ue=0),B!==null?(He=B.x,ft=B.y,yt=B.z):(He=0,ft=0,yt=0);const ln=Ke.convert(I.format),_t=Ke.convert(I.type);let Le;if(I.isData3DTexture)je.setTexture3D(I,0),Le=U.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)je.setTexture2DArray(I,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Mn=U.getParameter(U.UNPACK_ROW_LENGTH),Tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Zi=U.getParameter(U.UNPACK_SKIP_PIXELS),Wo=U.getParameter(U.UNPACK_SKIP_ROWS),mi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Le,k,He,ft,yt,re,ve,Ae,ln,_t,St.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Le,k,He,ft,yt,re,ve,Ae,ln,St.data):U.texSubImage3D(Le,k,He,ft,yt,re,ve,Ae,ln,_t,St),U.pixelStorei(U.UNPACK_ROW_LENGTH,Mn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Zi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wo),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mi),k===0&&I.generateMipmaps&&U.generateMipmap(Le),Ce.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&je.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?je.setTextureCube(T,0):T.isData3DTexture?je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?je.setTexture2DArray(T,0):je.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){w=0,C=0,M=null,Ce.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_0?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Bd?"display-p3":"srgb"}}class y0{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=t}clone(){return new y0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class WP extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S0 extends Vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ld=new F,ud=new F,sx=new $t,Pl=new wM,zc=new Hd,Zh=new F,ox=new F;class XP extends An{constructor(e=new Zn,t=new S0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ld.fromBufferAttribute(t,r-1),ud.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ld.distanceTo(ud);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(r),zc.radius+=s,e.ray.intersectsSphere(zc)===!1)return;sx.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(sx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const h=c.getX(m),v=c.getX(m+1),x=Bc(this,e,Pl,l,h,v);x&&t.push(x)}if(this.isLineLoop){const m=c.getX(_-1),g=c.getX(p),h=Bc(this,e,Pl,l,m,g);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const h=Bc(this,e,Pl,l,m,m+1);h&&t.push(h)}if(this.isLineLoop){const m=Bc(this,e,Pl,l,_-1,p);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ld.fromBufferAttribute(o,r),ud.fromBufferAttribute(o,s),t.distanceSqToSegment(ld,ud,Zh,ox)>i)return;Zh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zh);if(!(l<e.near||l>e.far))return{distance:l,point:ox.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const ax=new F,lx=new F;class zM extends XP{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ax.fromBufferAttribute(t,r),lx.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ax.distanceTo(lx);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M0 extends Zn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new F,c=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new M0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends Zn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],p=[];let _=0;const m=[],g=i/2;let h=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(p,2));function v(){const y=new F,w=new F;let C=0;const M=(t-e)/i;for(let R=0;R<=s;R++){const E=[],S=R/s,P=S*(t-e)+e;for(let N=0;N<=r;N++){const z=N/r,V=z*l+a,$=Math.sin(V),G=Math.cos(V);w.x=P*$,w.y=-S*i+g,w.z=P*G,f.push(w.x,w.y,w.z),y.set($,M,G).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-S),E.push(_++)}m.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const S=m[E][R],P=m[E+1][R],N=m[E+1][R+1],z=m[E][R+1];c.push(S,P,z),c.push(P,N,z),C+=6}u.addGroup(h,C,0),h+=C}function x(y){const w=_,C=new mt,M=new F;let R=0;const E=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,g*S,0),d.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let N=0;N<=r;N++){const V=N/r*l+a,$=Math.cos(V),G=Math.sin(V);M.x=E*G,M.y=g*S,M.z=E*$,f.push(M.x,M.y,M.z),d.push(0,S,0),C.x=$*.5+.5,C.y=G*.5*S+.5,p.push(C.x,C.y),_++}for(let N=0;N<r;N++){const z=w+N,V=P+N;y===!0?c.push(V,V+1,z):c.push(V+1,V,z),R+=3}u.addGroup(h,R,y===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Hc=new F,Vc=new F,Qh=new F,Gc=new ar;class YP extends Zn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Sf*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){o?(u[0]=o.getX(_),u[1]=o.getX(_+1),u[2]=o.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:m,b:g,c:h}=Gc;if(m.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),h.fromBufferAttribute(a,u[2]),Gc.getNormal(Qh),f[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=f[v],w=f[x],C=Gc[c[v]],M=Gc[c[x]],R=`${y}_${w}`,E=`${w}_${y}`;E in d&&d[E]?(Qh.dot(d[E].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(M.x,M.y,M.z)),d[E]=null):R in d||(d[R]={index0:u[v],index1:u[x],normal:Qh.clone()})}}for(const _ in d)if(d[_]){const{index0:m,index1:g}=d[_];Hc.fromBufferAttribute(a,m),Vc.fromBufferAttribute(a,g),p.push(Hc.x,Hc.y,Hc.z),p.push(Vc.x,Vc.y,Vc.z)}this.setAttribute("position",new Vt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cd extends Zn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new F,d=new F,p=[],_=[],m=[],g=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),m.push(d.x,d.y,d.z),g.push(C+y,1-x),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const x=c[h][v+1],y=c[h][v],w=c[h+1][v],C=c[h+1][v+1];(h!==0||o>0)&&p.push(x,y,C),(h!==i-1||l<Math.PI)&&p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fd extends Zn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new F,f=new F,d=new F;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const m=_/r*s,g=p/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(m),f.y=(e+t*Math.cos(g))*Math.sin(m),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),d.subVectors(f,c).normalize(),l.push(d.x,d.y,d.z),u.push(_/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const m=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,v=(r+1)*p+_;o.push(m,g,v),o.push(g,h,v)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jh extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ur extends Vo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class E0 extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ep=new $t,ux=new F,cx=new F;class BM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new v0,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ux.setFromMatrixPosition(e.matrixWorld),t.position.copy(ux),cx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cx),t.updateMatrixWorld(),ep.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ep)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fx=new $t,Ll=new F,tp=new F;class jP extends BM{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ll.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ll),tp.copy(i.position),tp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(tp),i.updateMatrixWorld(),r.makeTranslation(-Ll.x,-Ll.y,-Ll.z),fx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fx)}}class $P extends E0{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qP extends BM{constructor(){super(new IM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dx extends E0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new qP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KP extends E0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZP extends zM{constructor(e=10,t=10,i=4473924,r=8947848){i=new pt(i),r=new pt(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let d=0,p=0,_=-a;d<=t;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const m=d===s?i:r;m.toArray(u,p),p+=3,m.toArray(u,p),p+=3,m.toArray(u,p),p+=3,m.toArray(u,p),p+=3}const c=new Zn;c.setAttribute("position",new Vt(l,3)),c.setAttribute("color",new Vt(u,3));const f=new S0({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:l0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=l0);function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function HM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Iu={duration:.5,overwrite:!1,delay:0},w0,Cn,Ht,Xi=1e8,Ut=1/Xi,Wm=Math.PI*2,QP=Wm/4,JP=0,VM=Math.sqrt,eL=Math.cos,tL=Math.sin,Sn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},T0=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},A0=function(){return typeof window<"u"},Wc=function(e){return Zt(e)||Sn(e)},GM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,nL=/random\([^)]+\)/g,iL=/,\s*/g,hx=/(?:-?\.?\d|\.)+/gi,WM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,np=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,XM=/[+-]=-?[.\d]+/,rL=/[^,'"\[\]\s]+/gi,sL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,_r,Xm,C0,Di={},dd={},YM,jM=function(e){return(dd=sl(e,Di))&&pi},R0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uu=function(e,t){return!t&&console.warn(e)},$M=function(e,t){return e&&(Di[e]=t)&&dd&&(dd[e]=t)||Di},Nu=function(){return 0},oL={suppressEvents:!0,isStart:!0,kill:!1},Ef={suppressEvents:!0,kill:!1},aL={suppressEvents:!0},b0={},Us=[],Ym={},qM,Si={},ip={},px=30,wf=[],P0="",L0=function(e){var t=e[0],i,r;if(Rr(t)||Zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=wf.length;r--&&!wf[r].targetTest(t););i=wf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _1(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||L0(Yi(e))[0]._gsap},KM=function(e,t,i){return(i=e[t])&&Zt(i)?e[t]():T0(i)&&e.getAttribute&&e.getAttribute(t)||i},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},lL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},hd=function(){var e=Us.length,t=Us.slice(0),i,r;for(Ym={},Us.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},D0=function(e){return!!(e._initted||e._startAt||e.add)},ZM=function(e,t,i,r){Us.length&&!Cn&&hd(),e.render(t,i,!!(Cn&&t<0&&D0(e))),Us.length&&!Cn&&hd()},QM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rL).length<2?t:Sn(e)?e.trim():e},JM=function(e){return e},Ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},uL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},sl=function(e,t){for(var i in t)e[i]=t[i];return e},mx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},pd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},iu=function(e){var t=e.parent||Xt,i=e.keyframes?uL(kn(e.keyframes)):Ii;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},cL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},e1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Wd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},fL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jm=function(e,t,i,r){return e._startAt&&(Cn?e._startAt.revert(Ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},dL=function n(e){return!e||e._ts&&n(e.parent)},gx=function(e){return e._repeat?ol(e._tTime,e=e.duration()+e._rDelay)*e:0},ol=function(e,t){var i=Math.floor(e=Gt(e/t));return e&&i===e?i-1:i},md=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xd=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Yd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xd(e),i._dirty||wo(i,e)),e},t1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=md(e.rawTime(),t),(!t._dur||Qu(0,t.totalDuration(),i)-t._tTime>Ut)&&t.render(i,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ut}},Mr=function(e,t,i,r){return t.parent&&Hs(t),t._start=Gt((Jr(i)?i:i||e!==Xt?ki(e,i,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),e1(e,t,"_first","_last",e._sort?"_start":0),$m(t)||(e._recent=t),r||t1(e,t),e._ts<0&&Yd(e,e._tTime),e},n1=function(e,t){return(Di.ScrollTrigger||R0("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},i1=function(e,t,i,r,s){if(U0(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qM!==wi.frame)return Us.push(e),e._lazy=[s,r],1},hL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$m=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&hL(e)&&!(!e._initted&&$m(e))||(e._ts<0||e._dp._ts<0)&&!$m(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Qu(0,e._tDur,t),c=ol(l,a),e._yoyo&&c&1&&(o=1-o),c!==ol(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&i1(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Ut:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&jm(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hs(e,1),!i&&!Cn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},al=function(e,t,i,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Yd(e,e._tTime=e._tDur*a),e.parent&&Xd(e),i||wo(e.parent,e),e},_x=function(e){return e instanceof ii?wo(e):al(e,e._dur)},gL={_start:0,endTime:Nu,totalDuration:Nu},ki=function n(e,t,i){var r=e.labels,s=e._recent||gL,o=e.duration()>=Xi?s.endTime(!1):e._dur,a,l,u;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(kn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ru=function(e,t,i){var r=Jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},qs=function(e,t){return e||e===0?t(e):t},Qu=function(e,t,i){return i<e?e:i>t?t:i},Fn=function(e,t){return!Sn(e)||!(t=sL.exec(e))?"":t[1]},_L=function(e,t,i){return qs(i,function(r){return Qu(e,t,r)})},qm=[].slice,r1=function(e,t){return e&&Rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==_r},vL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||r1(r,1)?(s=i).push.apply(s,Yi(r)):i.push(r)})||i},Yi=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):Sn(e)&&!i&&(Xm||!ll())?qm.call((t||C0).querySelectorAll(e),0):kn(e)?vL(e,i):r1(e)?qm.call(e,0):e?[e]:[]},Km=function(e){return e=Yi(e)[0]||Uu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Yi(t,i.querySelectorAll?i:i===e?Uu("Invalid scope")||C0.createElement("div"):e)}},s1=function(e){return e.sort(function(){return .5-Math.random()})},o1=function(e){if(Zt(e))return e;var t=Rr(e)?e:{each:e},i=To(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Sn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,_){var m=(_||t).length,g=o[m],h,v,x,y,w,C,M,R,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,Xi])[1],!E){for(M=-Xi;M<(M=_[E++].getBoundingClientRect().left)&&E<m;);E<m&&E--}for(g=o[m]=[],h=l?Math.min(E,m)*c-.5:r%E,v=E===Xi?0:l?m*f/E-.5:r/E|0,M=0,R=Xi,C=0;C<m;C++)x=C%E-h,y=v-(C/E|0),g[C]=w=u?Math.abs(u==="y"?y:x):VM(x*x+y*y),w>M&&(M=w),w<R&&(R=w);r==="random"&&s1(g),g.max=M-R,g.min=R,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(E>m?m-1:u?u==="y"?m/E:E:Math.max(E,m/E))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Fn(t.amount||t.each)||0,i=i&&m<0?LL(i):i}return m=(g[d]-g.min)/g.max||0,Gt(g.b+(i?i(m):m)*g.v)+g.u}},Zm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Gt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Jr(i)?0:Fn(i))}},a1=function(e,t){var i=kn(e),r,s;return!i&&Rr(e)&&(r=i=e.radius||Xi,e.values?(e=Yi(e.values),(s=!Jr(e[0]))&&(r*=r)):e=Zm(e.increment)),qs(t,i?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Xi,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Jr(o)?c:c+Fn(o)}:Zm(e))},l1=function(e,t,i,r){return qs(kn(e)?!t:i===!0?!!(i=0):!r,function(){return kn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},xL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},yL=function(e,t){return function(i){return e(parseFloat(i))+(t||Fn(i))}},SL=function(e,t,i){return c1(e,t,0,1,i)},u1=function(e,t,i){return qs(i,function(r){return e[~~t(r)]})},ML=function n(e,t,i){var r=t-e;return kn(e)?u1(e,n(0,e.length),t):qs(i,function(s){return(r+(s-e)%r)%r+e})},EL=function n(e,t,i){var r=t-e,s=r*2;return kn(e)?u1(e,n(0,e.length-1),t):qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fu=function(e){return e.replace(nL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(iL);return l1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},c1=function(e,t,i,r,s){var o=t-e,a=r-i;return qs(s,function(l){return i+((l-e)/o*a||0)})},wL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Sn(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(d,~~_);return c[m](_-m)},i=t}else r||(e=sl(kn(e)?[]:{},e));if(!c){for(l in t)I0.call(a,e,l,"get",t[l]);s=function(_){return O0(_,a)||(o?e.p:e)}}}return qs(i,s)},vx=function(e,t,i){var r=e.labels,s=Xi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=Ht,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Us.length&&hd(),a&&(Ht=a),c=l?s.apply(u,l):s.call(u),Ht=o,c},Bl=function(e){return Hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&Ci(e,"onInterrupt"),e},ba,f1=[],d1=function(e){if(e)if(e=!e.name&&e.default||e,A0()||e.headless){var t=e.name,i=Zt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Nu,render:O0,add:I0,kill:HL,modifier:BL,rawVars:0},o={targetTest:0,get:0,getSetter:F0,aliases:{},register:0};if(ll(),e!==r){if(Si[t])return;Ii(r,Ii(pd(e,s),o)),sl(r.prototype,sl(s,pd(e,o))),Si[r.prop=t]=r,e.targetTest&&(wf.push(r),b0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$M(t,r),e.register&&e.register(pi,r,di)}else f1.push(e)},It=255,Hl={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},rp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*It+.5|0},h1=function(e,t,i){var r=e?Jr(e)?[e>>16,e>>8&It,e&It]:0:Hl.black,s,o,a,l,u,c,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hl[e])r=Hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&It,r&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(hx),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=rp(l+1/3,s,o),r[1]=rp(l,s,o),r[2]=rp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(WM),i&&r.length<4&&(r[3]=1),r}else r=e.match(hx)||Hl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/It,o=r[1]/It,a=r[2]/It,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},p1=function(e){var t=[],i=[],r=-1;return e.split(Ns).forEach(function(s){var o=s.match(Ra)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},xx=function(e,t,i){var r="",s=(e+r).match(Ns),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=h1(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=p1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ns,"1").split(Ra),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ns),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ns=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),TL=/hsl[a]?\(/,m1=function(e){var t=e.join(" "),i;if(Ns.lastIndex=0,Ns.test(t))return i=TL.test(t),e[1]=xx(e[1],i),e[0]=xx(e[0],i,p1(e[1])),!0},Ou,wi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,_=function m(g){var h=n()-r,v=g===!0,x,y,w,C;if((h>e||h<0)&&(i+=h-t),r+=h,w=r-i,x=w-o,(x>0||v)&&(C=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](w,d,C,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){YM&&(!Xm&&A0()&&(_r=Xm=window,C0=_r.document||{},Di.gsap=pi,(_r.gsapVersions||(_r.gsapVersions=[])).push(pi.version),jM(dd||_r.GreenSockGlobals||!_r.gsap&&_r||{}),f1.forEach(d1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Ou=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ou=0,u=Nu},lagSmoothing:function(g,h){e=g||1/0,t=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,h,v){var x=h?function(y,w,C,M){g(y,w,C,M),f.remove(x)}:g;return f.remove(g),a[v?"unshift":"push"](x),ll(),x},remove:function(g,h){~(h=a.indexOf(g))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),ll=function(){return!Ou&&wi.wake()},vt={},AL=/^[\d.\-M][\d.\-,\s]/,CL=/["']/g,RL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(CL,"").trim():+u,r=l.substr(a+1).trim();return t},bL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},PL=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[RL(t[1])]:bL(e).split(",").map(QM)):vt._CE&&AL.test(e)?vt._CE("",e):i},LL=function(e){return function(t){return 1-e(1-t)}},To=function(e,t){return e&&(Zt(e)?e:vt[e]||PL(e))||t},Go=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return fi(e,function(a){vt[a]=Di[a]=s,vt[o=a.toLowerCase()]=i;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},g1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sp=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*tL((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:g1(a);return s=Wm/s,l.config=function(u,c){return n(e,u,c)},l},op=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:g1(i);return r.config=function(s){return n(e,s)},r};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Go(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Go("Elastic",sp("in"),sp("out"),sp());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Go("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Go("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Go("Circ",function(n){return-(VM(1-n*n)-1)});Go("Sine",function(n){return n===1?1:-eL(n*QP)+1});Go("Back",op("in"),op("out"),op());vt.SteppedEase=vt.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ut;return function(a){return((r*Qu(0,o,a)|0)+s)*i}}};Iu.ease=vt["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return P0+=n+","+n+"Params,"});var _1=function(e,t){this.id=JP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:KM,this.set=t?t.getSetter:F0},ku=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,al(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),Ou||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,al(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ll(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yd(this,i),!s._dp||s.parent||t1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ZM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ol(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?md(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ut?0:this._rts,this.totalTime(Qu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xd(this),fL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ll(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Gt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?md(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=aL);var r=Cn;return Cn=i,D0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Cn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,_x(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,_x(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ki(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-Ut),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ut)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Zt(i)?i:JM,l=function(){var c=r.then;r.then=null,s&&s(),Zt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Bl(this)},n}();Ii(ku.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var ii=function(n){HM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Xt&&Mr(i.parent||Xt,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&n1(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ru(0,arguments,this),this},t.from=function(r,s,o){return ru(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ru(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,iu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(r,s,ki(this,o),1),this},t.call=function(r,s,o){return Mr(this,on.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new on(r,o,ki(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,iu(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,iu(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Gt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,_,m,g,h,v,x,y,w,C,M;if(this!==Xt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=Gt(c%g),c===l?(m=this._repeat,d=u):(w=Gt(c/g),m=~~w,m&&m===w&&(d=u,m--),d>u&&(d=u)),w=ol(this._tTime,g),!a&&this._tTime&&w!==m&&this._tTime-w*g-this._dur<=0&&(w=m),C&&m&1&&(d=u-d,M=1),m!==w&&!this._lock){var R=C&&w&1,E=R===(C&&m&1);if(m<w&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Gt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=m),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=mL(this,Gt(a),Gt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Ci(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-Ut);break}}p=_}else{p=this._last;for(var S=r<0?r:d;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Cn&&D0(p)),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=S?-Ut:Ut);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Ut)._zTime=d>=a?1:-1,this._ts))return this._start=y,Xd(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ci(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Jr(s)||(s=ki(this,s,r)),!(r instanceof ku)){if(kn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Zt(r))r=on.delayedCall(0,r);else return this}return this!==r?Mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Xi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof on?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&Wd(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ki(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=on.delayedCall(0,s||Nu,o);return a.data="isPause",this._hasPause=1,Mr(this,a,ki(this,r))},t.removePause=function(r){var s=this._first;for(r=ki(this,r);s;)s._start===r&&s.data==="isPause"&&Hs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Yi(r),l=this._first,u=Jr(s),c;l;)l instanceof on?lL(l._targets,a)&&(u?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ki(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=on.to(o,Ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ut,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&al(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ii({startAt:{time:ki(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),vx(this,ki(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),vx(this,ki(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Gt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Xi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Gt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;al(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Xt._ts&&(ZM(Xt,md(r,Xt)),qM=wi.frame),wi.frame>=px){px+=Pi.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Pi.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e}(ku);Ii(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var DL=function(e,t,i,r,s,o,a){var l=new di(this._pt,e,t,0,1,E1,null,s),u=0,c=0,f,d,p,_,m,g,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Fu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(np)||[];f=np.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(g=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?Ba(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=np.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(XM.test(r)||h)&&(l.e=0),this._pt=l,l},I0=function(e,t,i,r,s,o,a,l,u,c){Zt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Zt(f)?u?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Zt(f)?u?OL:S1:N0,_;if(Sn(r)&&(~r.indexOf("random(")&&(r=Fu(r)),r.charAt(1)==="="&&(_=Ba(d,r)+(Fn(d)||0),(_||_===0)&&(r=_))),!c||d!==r||Qm)return!isNaN(d*r)&&r!==""?(_=new di(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?zL:M1,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&R0(t,r),DL.call(this,e,t,d,r,p,l||Pi.stringFilter,u))},IL=function(e,t,i,r,s){if(Zt(e)&&(e=su(e,s,t,i,r)),!Rr(e)||e.style&&e.nodeType||kn(e)||GM(e))return Sn(e)?su(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=su(e[a],s,t,i,r);return o},v1=function(e,t,i,r,s,o){var a,l,u,c;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:IL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new di(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ba))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xs,Qm,U0=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!w0,y=e.timeline,w=r.easeReverse||f,C,M,R,E,S,P,N,z,V,$,G,W,L;if(y&&(!d||!s)&&(s="none"),e._ease=To(s,Iu.ease),e._rEase=w&&(To(w)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||d&&!r.stagger){if(z=g[0]?Eo(g[0]).harness:0,W=z&&r[z.prop],C=pd(r,b0),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?Ef:oL),m._lazy=0),o){if(Hs(e._startAt=on.set(g,Ii({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!m&&ci(l),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!p)&&e._startAt.revert(Ef),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),R=Ii({overwrite:!1,data:"isFromStart",lazy:a&&!m&&ci(l),immediateRender:a,stagger:0,parent:h},C),W&&(R[z.prop]=W),Hs(e._startAt=on.set(g,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(Ef):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ci(l)||l&&!_,M=0;M<g.length;M++){if(S=g[M],N=S._gsap||L0(g)[M]._gsap,e._ptLookup[M]=$={},Ym[N.id]&&Us.length&&hd(),G=v===g?M:v.indexOf(S),z&&(V=new z).init(S,W||C,e,G,v)!==!1&&(e._pt=E=new di(e._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(j){$[j]=E}),V.priority&&(P=1)),!z||W)for(R in C)Si[R]&&(V=v1(R,C,e,G,S,v))?V.priority&&(P=1):$[R]=E=I0.call(e,S,R,"get",C[R],G,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),x&&e._pt&&(xs=e,Xt.killTweensOf(S,$,e.globalTime(t)),L=!e.parent,xs=0),e._pt&&l&&(Ym[N.id]=1)}P&&w1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!L,d&&t<=0&&y.render(Xi,!0,!0)},UL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Qm=1,e.vars[t]="+=0",U0(e,a),Qm=0,l?Uu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Jt(i)+Fn(f.e)),f.b&&(f.b=c.s+Fn(f.b))},NL=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=sl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},FL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(kn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},su=function(e,t,i,r,s){return Zt(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Fu(e):e},x1=P0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",y1={};fi(x1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return y1[n]=1});var on=function(n){HM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:iu(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,h=r.parent||Xt,v=(kn(i)||GM(i)?Jr(i[0]):"length"in r)?[i]:Yi(i),x,y,w,C,M,R,E,S;if(a._targets=v.length?L0(v):Uu("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||Wc(u)||Wc(c)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(x=a.timeline=new ii({data:"nested",defaults:m||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Or(a),x._start=0,d||Wc(u)||Wc(c)){if(C=v.length,E=d&&o1(d),Rr(d))for(M in d)~x1.indexOf(M)&&(S||(S={}),S[M]=d[M]);for(y=0;y<C;y++)w=pd(r,y1),w.stagger=0,P&&(w.easeReverse=P),S&&sl(w,S),R=v[y],w.duration=+su(u,Or(a),y,R,v),w.delay=(+su(c,Or(a),y,R,v)||0)-a._delay,!d&&C===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),x.to(R,w,E?E(y,R,v):0),x._ease=vt.none;x.duration()?u=c=0:a.timeline=0}else if(_){iu(Ii(x.vars.defaults,{ease:"none"})),x._ease=To(_.ease||r.ease||"none");var N=0,z,V,$;if(kn(_))_.forEach(function(G){return x.to(v,G,">")}),x.duration();else{w={};for(M in _)M==="ease"||M==="easeEach"||FL(M,_[M],w,_.easeEach);for(M in w)for(z=w[M].sort(function(G,W){return G.t-W.t}),N=0,y=0;y<z.length;y++)V=z[y],$={ease:V.e,duration:(V.t-(y?z[y-1].t:0))/100*u},$[M]=V.v,x.to(v,$,N),N+=$.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!w0&&(xs=Or(a),Xt.killTweensOf(v),xs=0),Mr(h,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Gt(h._time)&&ci(f)&&dL(Or(a))&&h.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-c)||0)),g&&n1(Or(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Ut&&!c?l:r<Ut?0:r,d,p,_,m,g,h,v,x;if(!u)pL(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(d=Gt(f%m),f===l?(_=this._repeat,d=u):(g=Gt(f/m),_=~~g,_&&_===g?(d=u,_--):d>u&&(d=u)),h=this._yoyo&&_&1,h&&(d=u-d),g=ol(this._tTime,m),d===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&this.vars.repeatRefresh&&!h&&!this._lock&&d!==m&&this._initted&&(this._lock=o=1,this.render(Gt(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(i1(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var w=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(Ci(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&jm(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&jm(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hs(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Ci(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ou||wi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||U0(this,u),c=this._ease(u/this._dur),UL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Yd(this,0),this.parent||e1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xs&&xs.vars.overwrite!==!0)._first||Bl(this),this.parent&&o!==this.timeline.totalDuration()&&al(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Yi(r):a,u=this._ptLookup,c=this._pt,f,d,p,_,m,g,h;if((!s||s==="all")&&cL(a,l))return s==="all"&&(this._pt=0),Bl(this);for(f=this._op=this._op||[],s!=="all"&&(Sn(s)&&(m={},fi(s,function(v){return m[v]=1}),s=m),s=NL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Wd(this,g,"_pt"),delete d[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Bl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ru(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ru(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Xt.killTweensOf(r,s,o)},e}(ku);Ii(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(n){on[n]=function(){var e=new ii,t=qm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var N0=function(e,t,i){return e[t]=i},S1=function(e,t,i){return e[t](i)},OL=function(e,t,i,r){return e[t](r.fp,i)},kL=function(e,t,i){return e.setAttribute(t,i)},F0=function(e,t){return Zt(e[t])?S1:T0(e[t])&&e.setAttribute?kL:N0},M1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},E1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},O0=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},BL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},HL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},VL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},w1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},di=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||M1,this.d=l||this,this.set=u||N0,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=VL,this.m=i,this.mt=s,this.tween=r},n}();fi(P0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return b0[n]=1});Di.TweenMax=Di.TweenLite=on;Di.TimelineLite=Di.TimelineMax=ii;Xt=new ii({sortChildren:!1,defaults:Iu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=m1;var Ao=[],Tf={},GL=[],yx=0,WL=0,ap=function(e){return(Tf[e]||GL).map(function(t){return t()})},Jm=function(){var e=Date.now(),t=[];e-yx>2&&(ap("matchMediaInit"),Ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=_r.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),ap("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),yx=e,ap("matchMedia"))},T1=function(){function n(t,i){this.selector=i&&Km(i),this.data=[],this._r=[],this.isReverted=!1,this.id=WL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Zt(i)&&(s=r,r=i,i=Zt);var o=this,a=function(){var u=Ht,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Km(s)),Ht=o,f=r.apply(o,arguments),Zt(f)&&o._r.push(f),Ht=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Zt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ht;Ht=null,i(this),Ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof on&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof ii?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof on)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ao.length;o--;)Ao[o].id===this.id&&Ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),XL=function(){function n(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Rr(i)||(i={matches:i});var o=new T1(0,s||this.scope),a=o.conditions={},l,u,c;Ht&&!o.selector&&(o.selector=Ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=_r.matchMedia(i[u]),l&&(Ao.indexOf(o)<0&&Ao.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Jm):l.addEventListener("change",Jm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),gd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return d1(r)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=Yi(e)[0]);var s=Eo(e||{}).get,o=i?JM:QM;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Yi(e),e.length>1){var r=e.map(function(c){return pi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Si[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;ba._pt=0,f.init(e,i?c+i:c,ba,0,[e]),f.render(1,f),ba._pt&&O0(1,ba)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=pi.to(e,Ii((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=To(e.ease,Iu.ease)),mx(Iu,e||{})},config:function(e){return mx(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Di[a]&&Uu(t+" effect requires "+a+" plugin.")}),ip[t]=function(a,l,u){return i(Yi(a),Ii(l||{},s),u)},o&&(ii.prototype[t]=function(a,l,u){return this.add(ip[t](a,Rr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){vt[e]=To(t)},parseEase:function(e,t){return arguments.length?To(e,t):vt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ii(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,r=Xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof on&&r.vars.onComplete===r._targets[0]))&&Mr(i,r,r._start-r._delay),r=s;return Mr(Xt,i,0),i},context:function(e,t){return e?new T1(e,t):Ht},matchMedia:function(e){return new XL(e)},matchMediaRefresh:function(){return Ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Jm()},addEventListener:function(e,t){var i=Tf[e]||(Tf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:ML,wrapYoyo:EL,distribute:o1,random:l1,snap:a1,normalize:SL,getUnit:Fn,clamp:_L,splitColor:h1,toArray:Yi,selector:Km,mapRange:c1,pipe:xL,unitize:yL,interpolate:wL,shuffle:s1},install:jM,effects:ip,ticker:wi,updateRoot:ii.updateRoot,plugins:Si,globalTimeline:Xt,core:{PropTween:di,globals:$M,Tween:on,Timeline:ii,Animation:ku,getCache:Eo,_removeLinkedListItem:Wd,reverting:function(){return Cn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return w0=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return gd[n]=on[n]});wi.add(ii.updateRoot);ba=gd.to({},{duration:0});var YL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},jL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=YL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},lp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},fi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}jL(a,s)}}}},pi=gd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Cn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},lp("roundProps",Zm),lp("modifiers"),lp("snap",a1))||gd;on.version=ii.version=pi.version="3.15.0";YM=1;A0()&&ll();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sx,ys,Ha,k0,xo,Mx,z0,$L=function(){return typeof window<"u"},es={},lo=180/Math.PI,Va=Math.PI/180,ua=Math.atan2,Ex=1e8,B0=/([A-Z])/g,qL=/(left|right|width|margin|padding|x)/i,KL=/[\s,\(]\S/,Er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},A1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},C1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tD=function(e,t,i){return e.style[t]=i},nD=function(e,t,i){return e.style.setProperty(t,i)},iD=function(e,t,i){return e._gsap[t]=i},rD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",hi=Yt+"Origin",aD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in es&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return Er.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},R1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(B0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=z0(),(!s||!s.isStart)&&!i[Yt]&&(R1(i),r.zOrigin&&i[hi]&&(i[hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},b1=function(e,t){var i={target:e,props:[],revert:lD,save:aD};return e._gsap||pi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},P1,tg=function(e,t){var i=ys.createElementNS?ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ys.createElement(e);return i&&i.style?i:ys.createElement(e)},Ri=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(B0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ul(t)||t,1)||""},wx="O,Moz,ms,Ms,Webkit".split(","),ul=function(e,t,i){var r=t||xo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wx[o]:"")+e},ng=function(){$L()&&window.document&&(Sx=window,ys=Sx.document,Ha=ys.documentElement,xo=tg("div")||{style:{}},tg("div"),Yt=ul(Yt),hi=Yt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",P1=!!ul("perspective"),z0=pi.core.reverting,k0=1)},Tx=function(e){var t=e.ownerSVGElement,i=tg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ha.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ha.removeChild(i),s},Ax=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},L1=function(e){var t,i;try{t=e.getBBox()}catch{t=Tx(e),i=1}return t&&(t.width||t.height)||i||(t=Tx(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ax(e,["x","cx","x1"])||0,y:+Ax(e,["y","cy","y1"])||0,width:0,height:0}:t},D1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&L1(e))},Vs=function(e,t){if(t){var i=e.style,r;t in es&&t!==hi&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(B0,"-$1").toLowerCase())):i.removeAttribute(t)}},Ss=function(e,t,i,r,s,o){var a=new di(e._pt,t,i,0,1,o?C1:A1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Cx={deg:1,rad:1,turn:1},uD={grid:1,flex:1},Gs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=xo.style,l=qL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,m,g,h;if(r===o||!s||Cx[r]||Cx[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&D1(e),(p||o==="%")&&(es[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Jt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===ys||!m.appendChild)&&(m=ys.body),g=m._gsap,g&&p&&g.width&&l&&g.time===wi.time&&!g.uncache)return Jt(s/g.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Vs(e,t)}else(p||o==="%")&&!uD[Ri(m,"display")]&&(a.position=Ri(e,"position")),m===e&&(a.position="static"),m.appendChild(xo),_=xo[c],m.removeChild(xo),a.position="absolute";return l&&p&&(g=Eo(m),g.time=wi.time,g.width=m[c]),Jt(d?_*s/f:_&&s?f/_*s:0)},zr=function(e,t,i,r){var s;return k0||ng(),t in Er&&t!=="transform"&&(t=Er[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(s=Bu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vd(Ri(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_d[t]&&_d[t](e,t,i)||Ri(e,t)||KM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gs(e,t,s,i)+i:s},cD=function(e,t,i,r){if(!i||i==="none"){var s=ul(t,e,1),o=s&&Ri(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ri(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,E1),l=0,u=0,c,f,d,p,_,m,g,h,v,x,y,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ri(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Ri(e,t)||r,m?e.style[t]=m:Vs(e,t)),c=[i,r],m1(c),i=c[0],r=c[1],d=i.match(Ra)||[],w=r.match(Ra)||[],w.length){for(;f=Ra.exec(r);)g=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=d[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=Ba(p,g)+y),h=parseFloat(g),x=g.substr((h+"").length),l=Ra.lastIndex-x.length,x||(x=x||Pi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Gs(e,t,m,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?C1:A1;return XM.test(r)&&(a.e=0),this._pt=a,a},Rx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Rx[i]||i,t[1]=Rx[r]||r,t.join(" ")},dD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],es[a]&&(l=1,a=a==="transformOrigin"?hi:Yt),Vs(i,a);l&&(Vs(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Bu(i,1),o.uncache=1,R1(r)))}},_d={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,i,0,0,dD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},zu=[1,0,0,1,0,0],I1={},U1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bx=function(e){var t=Ri(e,Yt);return U1(t)?zu:t.substr(7).match(WM).map(Jt)},H0=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=bx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zu:s):(s===zu&&!e.offsetParent&&e!==Ha&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ha.appendChild(e)),s=bx(e),l?r.display=l:Vs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ha.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ig=function(e,t,i,r,s,o){var a=e._gsap,l=s||H0(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,C,M,R,E;i?l!==zu&&(M=p*g-_*m)&&(R=y*(g/M)+w*(-m/M)+(m*v-g*h)/M,E=y*(-_/M)+w*(p/M)-(p*v-_*h)/M,y=R,w=E):(C=L1(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),w=C.y+(~(x[1]||x[0]).indexOf("%")?w/100*C.height:w)),r||r!==!1&&a.smooth?(h=y-u,v=w-c,a.xOffset=f+(h*p+v*m)-h,a.yOffset=d+(h*_+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[hi]="0px 0px",o&&(Ss(o,a,"xOrigin",u,y),Ss(o,a,"yOrigin",c,w),Ss(o,a,"xOffset",f,a.xOffset),Ss(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Bu=function(e,t){var i=e._gsap||new _1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ri(e,hi)||"0",c,f,d,p,_,m,g,h,v,x,y,w,C,M,R,E,S,P,N,z,V,$,G,W,L,j,b,se,_e,Fe,q,ie;return c=f=d=m=g=h=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&D1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),M=H0(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),ig(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,C=i.yOrigin||0,M!==zu&&(P=M[0],N=M[1],z=M[2],V=M[3],c=$=M[4],f=G=M[5],M.length===6?(p=Math.sqrt(P*P+N*N),_=Math.sqrt(V*V+z*z),m=P||N?ua(N,P)*lo:0,v=z||V?ua(z,V)*lo+m:0,v&&(_*=Math.abs(Math.cos(v*Va))),i.svg&&(c-=w-(w*P+C*z),f-=C-(w*N+C*V))):(ie=M[6],Fe=M[7],b=M[8],se=M[9],_e=M[10],q=M[11],c=M[12],f=M[13],d=M[14],R=ua(ie,_e),g=R*lo,R&&(E=Math.cos(-R),S=Math.sin(-R),W=$*E+b*S,L=G*E+se*S,j=ie*E+_e*S,b=$*-S+b*E,se=G*-S+se*E,_e=ie*-S+_e*E,q=Fe*-S+q*E,$=W,G=L,ie=j),R=ua(-z,_e),h=R*lo,R&&(E=Math.cos(-R),S=Math.sin(-R),W=P*E-b*S,L=N*E-se*S,j=z*E-_e*S,q=V*S+q*E,P=W,N=L,z=j),R=ua(N,P),m=R*lo,R&&(E=Math.cos(R),S=Math.sin(R),W=P*E+N*S,L=$*E+G*S,N=N*E-P*S,G=G*E-$*S,P=W,$=L),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,h=180-h),p=Jt(Math.sqrt(P*P+N*N+z*z)),_=Jt(Math.sqrt(G*G+ie*ie)),R=ua($,G),v=Math.abs(R)>2e-4?R*lo:0,y=q?1/(q<0?-q:q):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!U1(Ri(e,Yt)),W&&e.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Jt(p),i.scaleY=Jt(_),i.rotation=Jt(m)+a,i.rotationX=Jt(g)+a,i.rotationY=Jt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[hi]=vd(u)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?pD:P1?N1:hD,i.uncache=0,i},vd=function(e){return(e=e.split(" "))[0]+" "+e[1]},up=function(e,t,i){var r=Fn(t);return Jt(parseFloat(t)+parseFloat(Gs(e,"x",i+"px",r)))+r},hD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,N1(e,t)},no="0deg",Dl="0px",io=") ",N1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",w=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==no||c!==no)){var C=parseFloat(c)*Va,M=Math.sin(C),R=Math.cos(C),E;C=parseFloat(f)*Va,E=Math.cos(C),o=up(v,o,M*E*-x),a=up(v,a,-Math.sin(C)*-x),l=up(v,l,R*E*-x+x)}g!==Dl&&(y+="perspective("+g+io),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==Dl||a!==Dl||l!==Dl)&&(y+=l!==Dl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+io),u!==no&&(y+="rotate("+u+io),c!==no&&(y+="rotateY("+c+io),f!==no&&(y+="rotateX("+f+io),(d!==no||p!==no)&&(y+="skew("+d+", "+p+io),(_!==1||m!==1)&&(y+="scale("+_+", "+m+io),v.style[Yt]=y||"translate(0, 0)"},pD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),w,C,M,R,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Va,u*=Va,w=Math.cos(l)*f,C=Math.sin(l)*f,M=Math.sin(l-u)*-d,R=Math.cos(l-u)*d,u&&(c*=Va,E=Math.tan(u-c),E=Math.sqrt(1+E*E),M*=E,R*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),w*=E,C*=E)),w=Jt(w),C=Jt(C),M=Jt(M),R=Jt(R)):(w=f,R=d,C=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Gs(p,"x",o,"px"),y=Gs(p,"y",a,"px")),(_||m||g||h)&&(x=Jt(x+_-(_*w+m*M)+g),y=Jt(y+m-(_*C+m*R)+h)),(r||s)&&(E=p.getBBox(),x=Jt(x+r/100*E.width),y=Jt(y+s/100*E.height)),E="matrix("+w+","+C+","+M+","+R+","+x+","+y+")",p.setAttribute("transform",E),v&&(p.style[Yt]=E)},mD=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?lo:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Ex)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Ex)%o-~~(u/o)*o)),e._pt=d=new di(e._pt,t,i,r,u,ZL),d.e=c,d.u="deg",e._props.push(i),d},Px=function(e,t){for(var i in t)e[i]=t[i];return e},gD=function(e,t,i){var r=Px({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=Bu(i,1),Vs(i,Yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Yt],o[Yt]=t,a=Bu(i,1),o[Yt]=u);for(l in es)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Fn(u),_=Fn(c),f=p!==_?Gs(i,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new di(e._pt,a,l,f,d-f,eg),e._pt.u=_||0,e._props.push(l));Px(a,r)};fi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});_d[e>1?"border"+n:n]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(_){return zr(a,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,p,f)}});var F1={name:"css",register:ng,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,_,m,g,h,v,x,y,w,C,M,R,E;k0||ng(),this.styles=this.styles||b1(e),R=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Si[m]&&v1(m,t,i,r,e,s)))){if(p=typeof c,_=_d[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Fu(c)),_)_(this,e,m,c,i)&&(M=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Ns.lastIndex=0,Ns.test(u)||(g=Fn(u),h=Fn(c),h?g!==h&&(u=Gs(e,m,u,h)+h):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Sn(u)&&~u.indexOf("random(")&&(u=Fu(u)),Fn(u+"")||u==="auto"||(u+=Pi.units[m]||Fn(zr(e,m))||""),(u+"").charAt(1)==="="&&(u=zr(e,m))):u=zr(e,m),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),m in Er&&(m==="autoAlpha"&&(d===1&&zr(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Ss(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Er[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in es,x){if(this.styles.save(m),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ri(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Ri(e,"perspective"),S?e.style.perspective=S:Vs(e,"perspective")}f=parseFloat(c)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Bu(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new di(this._pt,a,Yt,0,1,w.renderTransform,w,0,-1),y.dep=1),m==="scale")this._pt=new di(this._pt,w,"scaleY",w.scaleY,(v?Ba(w.scaleY,v+f):f)-w.scaleY||0,eg),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(hi,0,a[hi]),c=fD(c),w.svg?ig(e,c,0,C,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==w.zOrigin&&Ss(this,w,"zOrigin",w.zOrigin,h),Ss(this,a,m,vd(u),vd(c)));continue}else if(m==="svgOrigin"){ig(e,c,1,C,0,this);continue}else if(m in I1){mD(this,w,m,d,v?Ba(d,v+c):c);continue}else if(m==="smoothOrigin"){Ss(this,w,"smooth",w.smooth,c);continue}else if(m==="force3D"){w[m]=c;continue}else if(m==="transform"){gD(this,c,e);continue}}else m in a||(m=ul(m)||m);if(x||(f||f===0)&&(d||d===0)&&!KL.test(c)&&m in a)g=(u+"").substr((d+"").length),f||(f=0),h=Fn(c)||(m in Pi.units?Pi.units[m]:g),g!==h&&(d=Gs(e,m,u,h)),this._pt=new di(this._pt,x?w:a,m,d,(v?Ba(d,v+f):f)-d,!x&&(h==="px"||m==="zIndex")&&t.autoRound!==!1?eD:eg),this._pt.u=h||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=JL):g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=QL);else if(m in a)cD.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){R0(m,c);continue}x||(m in a?R.push(m,0,a[m]):typeof e[m]=="function"?R.push(m,2,e[m]()):R.push(m,1,u||e[m])),o.push(m)}}M&&w1(this)},render:function(e,t){if(t.tween._time||!z0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:Er,getSetter:function(e,t,i){var r=Er[t];return r&&r.indexOf(",")<0&&(t=r),t in es&&t!==hi&&(e._gsap.x||zr(e,"x"))?i&&Mx===i?t==="scale"?rD:iD:(Mx=i||{})&&(t==="scale"?sD:oD):e.style&&!T0(e.style[t])?tD:~t.indexOf("-")?nD:F0(e,t)},core:{_removeProperty:Vs,_getMatrix:H0}};pi.utils.checkPrefix=ul;pi.core.getStyleSaver=b1;(function(n,e,t,i){var r=fi(n+","+e+","+t,function(s){es[s]=1});fi(e,function(s){Pi.units[s]="deg",I1[s]=1}),Er[r[13]]=n+","+e,fi(i,function(s){var o=s.split(":");Er[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});pi.registerPlugin(F1);var V0=pi.registerPlugin(F1)||pi;V0.core.Tween;function _D(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function vD(n,e,t){return e&&_D(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Af,Ti,Ms,Es,Ga,O1,uo,Wa,k1,Xr,nr,z1,B1=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},H1=1,Pa=[],ht=[],Cr=[],ou=Date.now,rg=function(e,t){return t},xD=function(){var e=Wa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ht),r.push.apply(r,Cr),ht=i,Cr=r,rg=function(o,a){return t[o](a)}},Fs=function(e,t){return~Cr.indexOf(e)&&Cr[Cr.indexOf(e)+1][t]},au=function(e){return!!~k1.indexOf(e)},Hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc="scrollLeft",Yc="scrollTop",sg=function(){return Xr&&Xr.isPressed||ht.cache++},xd=function(e,t){var i=function r(s){if(s||s===0){H1&&(Ti.history.scrollRestoration="manual");var o=Xr&&Xr.isPressed;s=r.v=Math.round(s)||(Xr&&Xr.iOS?1:0),e(s),r.cacheID=ht.cache,o&&rg("ss",s)}else(t||ht.cache!==r.cacheID||rg("ref"))&&(r.cacheID=ht.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:Xc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xd(function(n){return arguments.length?Ti.scrollTo(n,fn.sc()):Ti.pageXOffset||Ms[Xc]||Es[Xc]||Ga[Xc]||0})},fn={s:Yc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:xd(function(n){return arguments.length?Ti.scrollTo(jn.sc(),n):Ti.pageYOffset||Ms[Yc]||Es[Yc]||Ga[Yc]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},yD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ws=function(e,t){var i=t.s,r=t.sc;au(e)&&(e=Ms.scrollingElement||Es);var s=ht.indexOf(e),o=r===fn.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+o]||Hn(e,"scroll",sg);var a=ht[s+o],l=a||(ht[s+o]=xd(Fs(e,i),!0)||(au(e)?r:xd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},og=function(e,t,i){var r=e,s=e,o=ou(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,m){var g=ou();m||g-o>l?(s=r,r=_,a=o,o=g):i?r+=_:r=s+(_-s)/(g-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(_){var m=a,g=s,h=ou();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?g:-g))/((i?h:o)-m)*1e3};return{update:c,reset:f,getVelocity:d}},Il=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Lx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},V1=function(){Wa=wn.core.globals().ScrollTrigger,Wa&&Wa.core&&xD()},G1=function(e){return wn=e||B1(),!Af&&wn&&typeof document<"u"&&document.body&&(Ti=window,Ms=document,Es=Ms.documentElement,Ga=Ms.body,k1=[Ti,Ms,Es,Ga],wn.utils.clamp,z1=wn.core.context||function(){},uo="onpointerenter"in Ga?"pointer":"mouse",O1=tn.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nr=tn.eventTypes=("ontouchstart"in Es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return H1=0},500),Af=1),Wa||V1(),Af};jn.op=fn;ht.cache=0;var tn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Af||G1(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Wa||V1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,d=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,m=i.event,g=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,w=i.onRight,C=i.onLeft,M=i.onUp,R=i.onDown,E=i.onChangeX,S=i.onChangeY,P=i.onChange,N=i.onToggleX,z=i.onToggleY,V=i.onHover,$=i.onHoverEnd,G=i.onMove,W=i.ignoreCheck,L=i.isNormalizer,j=i.onGestureStart,b=i.onGestureEnd,se=i.onWheel,_e=i.onEnable,Fe=i.onDisable,q=i.onClick,ie=i.scrollSpeed,he=i.capture,le=i.allowClicks,Oe=i.lockAxis,ke=i.onLockAxis;this.target=a=Jn(a)||Es,this.vars=i,p&&(p=wn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ti.getComputedStyle(Ga).lineHeight)||22);var Qe,it,U,Ve,Ye,tt,Ce,X=this,Ne=0,je=0,D=i.passive||!c&&i.passive!==!1,A=Ws(a,jn),Y=Ws(a,fn),oe=A(),ue=Y(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&nr[0]==="pointerdown",Pe=au(a),fe=a.ownerDocument||Ms,xe=[0,0,0],We=[0,0,0],ce=0,we=function(){return ce=ou()},Be=function(Ie,ut){return(X.event=Ie)&&p&&yD(Ie.target,p)||ut&&J&&Ie.pointerType!=="touch"||W&&W(Ie,ut)},qe=function(){X._vx.reset(),X._vy.reset(),it.pause(),f&&f(X)},Me=function(){var Ie=X.deltaX=Lx(xe),ut=X.deltaY=Lx(We),me=Math.abs(Ie)>=r,Xe=Math.abs(ut)>=r;P&&(me||Xe)&&P(X,Ie,ut,xe,We),me&&(w&&X.deltaX>0&&w(X),C&&X.deltaX<0&&C(X),E&&E(X),N&&X.deltaX<0!=Ne<0&&N(X),Ne=X.deltaX,xe[0]=xe[1]=xe[2]=0),Xe&&(R&&X.deltaY>0&&R(X),M&&X.deltaY<0&&M(X),S&&S(X),z&&X.deltaY<0!=je<0&&z(X),je=X.deltaY,We[0]=We[1]=We[2]=0),(Ve||U)&&(G&&G(X),U&&(g&&U===1&&g(X),v&&v(X),U=0),Ve=!1),tt&&!(tt=!1)&&ke&&ke(X),Ye&&(se(X),Ye=!1),Qe=0},Ke=function(Ie,ut,me){xe[me]+=Ie,We[me]+=ut,X._vx.update(Ie),X._vy.update(ut),u?Qe||(Qe=requestAnimationFrame(Me)):Me()},$e=function(Ie,ut){Oe&&!Ce&&(X.axis=Ce=Math.abs(Ie)>Math.abs(ut)?"x":"y",tt=!0),Ce!=="y"&&(xe[2]+=Ie,X._vx.update(Ie,!0)),Ce!=="x"&&(We[2]+=ut,X._vy.update(ut,!0)),u?Qe||(Qe=requestAnimationFrame(Me)):Me()},xt=function(Ie){if(!Be(Ie,1)){Ie=Il(Ie,c);var ut=Ie.clientX,me=Ie.clientY,Xe=ut-X.x,ze=me-X.y,Je=X.isDragging;X.x=ut,X.y=me,(Je||(Xe||ze)&&(Math.abs(X.startX-ut)>=s||Math.abs(X.startY-me)>=s))&&(U||(U=Je?2:1),Je||(X.isDragging=!0),$e(Xe,ze))}},O=X.onPress=function(Ge){Be(Ge,1)||Ge&&Ge.button||(X.axis=Ce=null,it.pause(),X.isPressed=!0,Ge=Il(Ge),Ne=je=0,X.startX=X.x=Ge.clientX,X.startY=X.y=Ge.clientY,X._vx.reset(),X._vy.reset(),Hn(L?a:fe,nr[1],xt,D,!0),X.deltaX=X.deltaY=0,x&&x(X))},Q=X.onRelease=function(Ge){if(!Be(Ge,1)){Bn(L?a:fe,nr[1],xt,!0);var Ie=!isNaN(X.y-X.startY),ut=X.isDragging,me=ut&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Xe=Il(Ge);!me&&Ie&&(X._vx.reset(),X._vy.reset(),c&&le&&wn.delayedCall(.08,function(){if(ou()-ce>300&&!Ge.defaultPrevented){if(Ge.target.click)Ge.target.click();else if(fe.createEvent){var ze=fe.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Ti,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Ge.target.dispatchEvent(ze)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&ut&&!L&&it.restart(!0),U&&Me(),h&&ut&&h(X),y&&y(X,me)}},ee=function(Ie){return Ie.touches&&Ie.touches.length>1&&(X.isGesturing=!0)&&j(Ie,X.isDragging)},K=function(){return(X.isGesturing=!1)||b(X)},de=function(Ie){if(!Be(Ie)){var ut=A(),me=Y();Ke((ut-oe)*ie,(me-ue)*ie,1),oe=ut,ue=me,f&&it.restart(!0)}},De=function(Ie){if(!Be(Ie)){Ie=Il(Ie,c),se&&(Ye=!0);var ut=(Ie.deltaMode===1?l:Ie.deltaMode===2?Ti.innerHeight:1)*_;Ke(Ie.deltaX*ut,Ie.deltaY*ut,0),f&&!L&&it.restart(!0)}},nt=function(Ie){if(!Be(Ie)){var ut=Ie.clientX,me=Ie.clientY,Xe=ut-X.x,ze=me-X.y;X.x=ut,X.y=me,Ve=!0,f&&it.restart(!0),(Xe||ze)&&$e(Xe,ze)}},Et=function(Ie){X.event=Ie,V(X)},wt=function(Ie){X.event=Ie,$(X)},lt=function(Ie){return Be(Ie)||Il(Ie,c)&&q(X)};it=X._dc=wn.delayedCall(d||.25,qe).pause(),X.deltaX=X.deltaY=0,X._vx=og(0,50,!0),X._vy=og(0,50,!0),X.scrollX=A,X.scrollY=Y,X.isDragging=X.isGesturing=X.isPressed=!1,z1(this),X.enable=function(Ge){return X.isEnabled||(Hn(Pe?fe:a,"scroll",sg),o.indexOf("scroll")>=0&&Hn(Pe?fe:a,"scroll",de,D,he),o.indexOf("wheel")>=0&&Hn(a,"wheel",De,D,he),(o.indexOf("touch")>=0&&O1||o.indexOf("pointer")>=0)&&(Hn(a,nr[0],O,D,he),Hn(fe,nr[2],Q),Hn(fe,nr[3],Q),le&&Hn(a,"click",we,!0,!0),q&&Hn(a,"click",lt),j&&Hn(fe,"gesturestart",ee),b&&Hn(fe,"gestureend",K),V&&Hn(a,uo+"enter",Et),$&&Hn(a,uo+"leave",wt),G&&Hn(a,uo+"move",nt)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Ve=U=!1,X._vx.reset(),X._vy.reset(),oe=A(),ue=Y(),Ge&&Ge.type&&O(Ge),_e&&_e(X)),X},X.disable=function(){X.isEnabled&&(Pa.filter(function(Ge){return Ge!==X&&au(Ge.target)}).length||Bn(Pe?fe:a,"scroll",sg),X.isPressed&&(X._vx.reset(),X._vy.reset(),Bn(L?a:fe,nr[1],xt,!0)),Bn(Pe?fe:a,"scroll",de,he),Bn(a,"wheel",De,he),Bn(a,nr[0],O,he),Bn(fe,nr[2],Q),Bn(fe,nr[3],Q),Bn(a,"click",we,!0),Bn(a,"click",lt),Bn(fe,"gesturestart",ee),Bn(fe,"gestureend",K),Bn(a,uo+"enter",Et),Bn(a,uo+"leave",wt),Bn(a,uo+"move",nt),X.isEnabled=X.isPressed=X.isDragging=!1,Fe&&Fe(X))},X.kill=X.revert=function(){X.disable();var Ge=Pa.indexOf(X);Ge>=0&&Pa.splice(Ge,1),Xr===X&&(Xr=0)},Pa.push(X),L&&au(a)&&(Xr=X),X.enable(m)},vD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();tn.version="3.15.0";tn.create=function(n){return new tn(n)};tn.register=G1;tn.getAll=function(){return Pa.slice()};tn.getById=function(n){return Pa.filter(function(e){return e.vars.id===n})[0]};B1()&&wn.registerPlugin(tn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,ha,dt,Lt,Ei,At,G0,yd,Hu,lu,Vl,jc,In,jd,ag,Xn,Dx,Ix,pa,W1,cp,X1,Gn,lg,Y1,j1,cs,ug,W0,Xa,X0,uu,cg,fp,$c=1,Un=Date.now,dp=Un(),$i=0,Gl=0,Ux=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Nx=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},SD=function n(){return Gl&&requestAnimationFrame(n)},Fx=function(){return jd=1},Ox=function(){return jd=0},vr=function(e){return e},Wl=function(e){return Math.round(e*1e5)/1e5||0},$1=function(){return typeof window<"u"},q1=function(){return be||$1()&&(be=window.gsap)&&be.registerPlugin&&be},Oo=function(e){return!!~G0.indexOf(e)},K1=function(e){return(e==="Height"?X0:dt["inner"+e])||Ei["client"+e]||At["client"+e]},Z1=function(e){return Fs(e,"getBoundingClientRect")||(Oo(e)?function(){return Lf.width=dt.innerWidth,Lf.height=X0,Lf}:function(){return Br(e)})},MD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Fs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?K1(s):e["client"+s])||0}},ED=function(e,t){return!t||~Cr.indexOf(e)?Z1(e):function(){return Lf}},wr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Fs(e,i))?o()-Z1(e)()[s]:Oo(e)?(Ei[i]||At[i])-K1(r):e[i]-e["offset"+r])},qc=function(e,t){for(var i=0;i<pa.length;i+=3)(!t||~t.indexOf(pa[i+1]))&&e(pa[i],pa[i+1],pa[i+2])},yi=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},Xl=function(e){return typeof e=="number"},co=function(e){return typeof e=="object"},Ul=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ca=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},fa=Math.abs,Q1="left",J1="top",Y0="right",j0="bottom",Co="width",Ro="height",cu="Right",fu="Left",du="Top",hu="Bottom",sn="padding",Hi="margin",cl="Width",$0="Height",un="px",Vi=function(e){return dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},wD=function(e){var t=Vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Br=function(e,t){var i=t&&Vi(e)[ag]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Sd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},eE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},TD=function(e){return function(t){return be.utils.snap(eE(e),t)}},q0=function(e){var t=be.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},AD=function(e){return function(t,i){return q0(eE(e))(t,i.direction)}},Kc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},_n=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},zx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qc={toggleActions:"play",anticipatePin:0},Md={top:0,left:0,center:.5,bottom:1,right:1},Cf=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Md?Md[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Jc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,_=Lt.createElement("div"),m=Oo(i)||Fs(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,h=m?At:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(y+=(r===fn?Y0:j0)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],Rf(_,0,r,v),_},Rf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+cl]=1,s["border"+a+cl]=0,s[i.p]=t+"px",be.set(e,s)},ct=[],fg={},Vu,Bx=function(){return Un()-$i>34&&(Vu||(Vu=requestAnimationFrame(jr)))},da=function(){(!Gn||!Gn.isPressed||Gn.startX>At.clientWidth)&&(ht.cache++,Gn?Vu||(Vu=requestAnimationFrame(jr)):jr(),$i||zo("scrollStart"),$i=Un())},hp=function(){j1=dt.innerWidth,Y1=dt.innerHeight},Yl=function(e){ht.cache++,(e===!0||!In&&!X1&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!lg||j1!==dt.innerWidth||Math.abs(dt.innerHeight-Y1)>dt.innerHeight*.25))&&yd.restart(!0)},ko={},CD=[],tE=function n(){return _n(et,"scrollEnd",n)||yo(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||CD},vi=[],nE=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},iE=function(){return ht.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},K0=function(e,t){var i;for(Xn=0;Xn<ct.length;Xn++)i=ct[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));uu=!0,t&&nE(t),t||zo("revert")},rE=function(e,t){ht.cache++,(t||!Yn)&&ht.forEach(function(i){return On(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(dt.history.scrollRestoration=W0=e)},Yn,bo=0,Hx,RD=function(){if(Hx!==bo){var e=Hx=bo;requestAnimationFrame(function(){return e===bo&&yo(!0)})}},sE=function(){At.appendChild(Xa),X0=!Gn&&Xa.offsetHeight||dt.innerHeight,At.removeChild(Xa)},Vx=function(e){return Hu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yo=function(e,t){if(Ei=Lt.documentElement,At=Lt.body,G0=[dt,Lt,Ei,At],$i&&!e&&!uu){vn(et,"scrollEnd",tE);return}sE(),Yn=et.isRefreshing=!0,uu||iE();var i=zo("refreshInit");W1&&et.sort(),t||K0(),ht.forEach(function(r){On(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),uu=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),cg=1,Vx(!0),ct.forEach(function(r){var s=wr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Vx(!1),cg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ht.forEach(function(r){On(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),rE(W0,1),yd.pause(),bo++,Yn=2,jr(2),ct.forEach(function(r){return On(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Yn=et.isRefreshing=!1,zo("refresh")},dg=0,bf=1,pu,jr=function(e){if(e===2||!Yn&&!uu){et.isUpdating=!0,pu&&pu.update(0);var t=ct.length,i=Un(),r=i-dp>=50,s=t&&ct[0].scroll();if(bf=dg>s?-1:1,Yn||(dg=s),r&&($i&&!jd&&i-$i>200&&($i=0,zo("scrollEnd")),Vl=dp,dp=i),bf<0){for(Xn=t;Xn-- >0;)ct[Xn]&&ct[Xn].update(0,r);bf=1}else for(Xn=0;Xn<t;Xn++)ct[Xn]&&ct[Xn].update(0,r);et.isUpdating=!1}Vu=0},hg=[Q1,J1,j0,Y0,Hi+hu,Hi+cu,Hi+du,Hi+fu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pf=hg.concat([Co,Ro,"boxSizing","max"+cl,"max"+$0,"position",Hi,sn,sn+du,sn+cu,sn+hu,sn+fu]),bD=function(e,t,i){Ya(i);var r=e._gsap;if(r.spacerIsNative)Ya(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},pp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=hg.length,o=t.style,a=e.style,l;s--;)l=hg[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[j0]=a[Y0]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Co]=Sd(e,jn)+un,o[Ro]=Sd(e,fn)+un,o[sn]=a[Hi]=a[J1]=a[Q1]="0",Ya(r),a[Co]=a["max"+cl]=i[Co],a[Ro]=a["max"+$0]=i[Ro],a[sn]=i[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},PD=/([A-Z])/g,Ya=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(PD,"-$1").toLowerCase())}},ef=function(e){for(var t=Pf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Pf[s],i[Pf[s]]);return r.t=e,r},LD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Lf={left:0,top:0},Gx=function(e,t,i,r,s,o,a,l,u,c,f,d,p,_){On(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Cf("0"+e.substr(3),i):0));var m=p?p.time():0,g,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Xl(e))p&&(e=be.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&Rf(a,i,r,!0);else{On(t)&&(t=t(l));var x=(e||"0").split(" "),y,w,C,M;v=Jn(t,l)||At,y=Br(v)||{},(!y||!y.left&&!y.top)&&Vi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Br(v),M?v.style.display=M:v.style.removeProperty("display")),w=Cf(x[0],y[r.d]),C=Cf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-C,a&&Rf(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,E=o._isStart;g="scroll"+r.d2,Rf(o,R,r,E&&R>20||!E&&(f?Math.max(At[g],Ei[g]):o.parentNode[g])<=R+1),f&&(u=Br(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+un))}return p&&v&&(g=Br(v),p.seek(d),h=Br(v),p._caScrollDist=g[r.p]-h[r.p],e=e/p._caScrollDist*d),p&&p.seek(m),p?e:Math.round(e)},DD=/(webkit|moz|length|cssText|inset)/i,Wx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=Vi(e);for(o in a)!+o&&!DD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},oE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},tf=function(e,t,i){var r={};r[t.p]="+="+i,be.set(e,r)},Xx=function(e,t){var i=Ws(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var d=o.tween,p=l.onComplete,_={};u=u||i();var m=oE(i,u,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return m(u+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ht.cache++,o.tween&&jr()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=be.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",i.wheelHandler),et.isTouch&&vn(e,"touchmove",i.wheelHandler),s},et=function(){function n(t,i){ha||n.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ug(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Gl){this.update=this.refresh=this.kill=vr;return}i=kx(yi(i)||Xl(i)||i.nodeType?{trigger:i}:i,Qc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,C=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,E=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:fn,P=!f&&f!==0,N=Jn(i.scroller||dt),z=be.core.getCache(N),V=Oo(N),$=("pinType"in i?i.pinType:Fs(N,"pinType")||V&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],W=P&&i.toggleActions.split(" "),L="markers"in i?i.markers:Qc.markers,j=V?0:parseFloat(Vi(N)["border"+S.p2+cl])||0,b=this,se=i.onRefreshInit&&function(){return i.onRefreshInit(b)},_e=MD(N,V,S),Fe=ED(N,V),q=0,ie=0,he=0,le=Ws(N,S),Oe,ke,Qe,it,U,Ve,Ye,tt,Ce,X,Ne,je,D,A,Y,oe,ue,J,Pe,fe,xe,We,ce,we,Be,qe,Me,Ke,$e,xt,O,Q,ee,K,de,De,nt,Et,wt;if(b._startClamp=b._endClamp=!1,b._dir=S,g*=45,b.scroller=N,b.scroll=M?M.time.bind(M):le,it=le(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(W1=1,i.refreshPriority===-9999&&(pu=b)),z.tweenScroll=z.tweenScroll||{top:Xx(N,fn),left:Xx(N,jn)},b.tweenTo=Oe=z.tweenScroll[S.p],b.scrubDuration=function(me){ee=Xl(me)&&me,ee?Q?Q.duration(me):Q=be.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return h&&h(b)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(f),xt=0,l||(l=r.vars.id)),y&&((!co(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&be.set(V?[At,Ei]:N,{scrollBehavior:"auto"}),ht.forEach(function(me){return On(me)&&me.target===(V?Lt.scrollingElement||Ei:N)&&(me.smooth=!1)}),Qe=On(y.snapTo)?y.snapTo:y.snapTo==="labels"?TD(r):y.snapTo==="labelsDirectional"?AD(r):y.directional!==!1?function(me,Xe){return q0(y.snapTo)(me,Un()-ie<500?0:Xe.direction)}:be.utils.snap(y.snapTo),K=y.duration||{min:.1,max:2},K=co(K)?lu(K.min,K.max):lu(K,K),de=be.delayedCall(y.delay||ee/2||.1,function(){var me=le(),Xe=Un()-ie<500,ze=Oe.tween;if((Xe||Math.abs(b.getVelocity())<10)&&!ze&&!jd&&q!==me){var Je=(me-Ve)/A,Rt=r&&!P?r.totalProgress():Je,rt=Xe?0:(Rt-O)/(Un()-Vl)*1e3||0,bt=be.utils.clamp(-Je,1-Je,fa(rt/2)*rt/.185),te=Je+(y.inertia===!1?0:bt),Z,ne,ye=y,Ze=ye.onStart,T=ye.onInterrupt,I=ye.onComplete;if(Z=Qe(te,b),Xl(Z)||(Z=te),ne=Math.max(0,Math.round(Ve+Z*A)),me<=Ye&&me>=Ve&&ne!==me){if(ze&&!ze._initted&&ze.data<=fa(ne-me))return;y.inertia===!1&&(bt=Z-Je),Oe(ne,{duration:K(fa(Math.max(fa(te-Rt),fa(Z-Rt))*.185/rt/.05||0)),ease:y.ease||"power3",data:fa(ne-me),onInterrupt:function(){return de.restart(!0)&&T&&ca(b,T)},onComplete:function(){b.update(),q=le(),r&&!P&&(Q?Q.resetTo("totalProgress",Z,r._tTime/r._tDur):r.progress(Z)),xt=O=r&&!P?r.totalProgress():b.progress,v&&v(b),I&&ca(b,I)}},me,bt*A,ne-me-bt*A),Ze&&ca(b,Ze,Oe.tween)}}else b.isActive&&q!==me&&de.restart(!0)}).pause()),l&&(fg[l]=b),d=b.trigger=Jn(d||p!==!0&&p),wt=d&&d._gsap&&d._gsap.stRevert,wt&&(wt=wt(b)),p=p===!0?d:Jn(p),yi(a)&&(a={targets:d,className:a}),p&&(_===!1||_===Hi||(_=!_&&p.parentNode&&p.parentNode.style&&Vi(p.parentNode).display==="flex"?!1:sn),b.pin=p,ke=be.core.getCache(p),ke.spacer?Y=ke.pinState:(C&&(C=Jn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),ke.spacerIsNative=!!C,C&&(ke.spacerState=ef(C))),ke.spacer=J=C||Lt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),ke.pinState=Y=ef(p)),i.force3D!==!1&&be.set(p,{force3D:!0}),b.spacer=J=ke.spacer,$e=Vi(p),we=$e[_+S.os2],fe=be.getProperty(p),xe=be.quickSetter(p,S.a,un),pp(p,J,$e),ue=ef(p)),L){je=co(L)?kx(L,zx):zx,X=Jc("scroller-start",l,N,S,je,0),Ne=Jc("scroller-end",l,N,S,je,0,X),Pe=X["offset"+S.op.d2];var lt=Jn(Fs(N,"content")||N);tt=this.markerStart=Jc("start",l,lt,S,je,Pe,0,M),Ce=this.markerEnd=Jc("end",l,lt,S,je,Pe,0,M),M&&(Et=be.quickSetter([tt,Ce],S.a,un)),!$&&!(Cr.length&&Fs(N,"fixedMarkers")===!0)&&(wD(V?At:N),be.set([X,Ne],{force3D:!0}),qe=be.quickSetter(X,S.a,un),Ke=be.quickSetter(Ne,S.a,un))}if(M){var Ge=M.vars.onUpdate,Ie=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),Ge&&Ge.apply(M,Ie||[])})}if(b.previous=function(){return ct[ct.indexOf(b)-1]},b.next=function(){return ct[ct.indexOf(b)+1]},b.revert=function(me,Xe){if(!Xe)return b.kill(!0);var ze=me!==!1||!b.enabled,Je=In;ze!==b.isReverted&&(ze&&(De=Math.max(le(),b.scroll.rec||0),he=b.progress,nt=r&&r.progress()),tt&&[tt,Ce,X,Ne].forEach(function(Rt){return Rt.style.display=ze?"none":"block"}),ze&&(In=b,b.update(ze)),p&&(!w||!b.isActive)&&(ze?bD(p,J,Y):pp(p,J,Vi(p),Be)),ze||b.update(ze),In=Je,b.isReverted=ze)},b.refresh=function(me,Xe,ze,Je){if(!((In||!b.enabled)&&!Xe)){if(p&&me&&$i){vn(n,"scrollEnd",tE);return}!Yn&&se&&se(b),In=b,Oe.tween&&!ze&&(Oe.tween.kill(),Oe.tween=0),Q&&Q.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Rt=_e(),rt=Fe(),bt=M?M.duration():wr(N,S),te=A<=.01||!A,Z=0,ne=Je||0,ye=co(ze)?ze.end:i.end,Ze=i.endTrigger||d,T=co(ze)?ze.start:i.start||(i.start===0||!d?0:p?"0 0":"0 100%"),I=b.pinnedContainer=i.pinnedContainer&&Jn(i.pinnedContainer,b),H=d&&Math.max(0,ct.indexOf(b))||0,B=H,k,re,ve,Ae,ge,Te,Ue,He,ft,yt,St,ln,_t;for(L&&co(ze)&&(ln=be.getProperty(X,S.p),_t=be.getProperty(Ne,S.p));B-- >0;)Te=ct[B],Te.end||Te.refresh(0,1)||(In=b),Ue=Te.pin,Ue&&(Ue===d||Ue===p||Ue===I)&&!Te.isReverted&&(yt||(yt=[]),yt.unshift(Te),Te.revert(!0,!0)),Te!==ct[B]&&(H--,B--);for(On(T)&&(T=T(b)),T=Ux(T,"start",b),Ve=Gx(T,d,Rt,S,le(),tt,X,b,rt,j,$,bt,M,b._startClamp&&"_startClamp")||(p?-.001:0),On(ye)&&(ye=ye(b)),yi(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(yi(T)?T.split(" ")[0]:"")+ye:(Z=Cf(ye.substr(2),Rt),ye=yi(T)?T:(M?be.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ve):Ve)+Z,Ze=d)),ye=Ux(ye,"end",b),Ye=Math.max(Ve,Gx(ye||(Ze?"100% 0":bt),Ze,Rt,S,le()+Z,Ce,Ne,b,rt,j,$,bt,M,b._endClamp&&"_endClamp"))||-.001,Z=0,B=H;B--;)Te=ct[B]||{},Ue=Te.pin,Ue&&Te.start-Te._pinPush<=Ve&&!M&&Te.end>0&&(k=Te.end-(b._startClamp?Math.max(0,Te.start):Te.start),(Ue===d&&Te.start-Te._pinPush<Ve||Ue===I)&&isNaN(T)&&(Z+=k*(1-Te.progress)),Ue===p&&(ne+=k));if(Ve+=Z,Ye+=Z,b._startClamp&&(b._startClamp+=Z),b._endClamp&&!Yn&&(b._endClamp=Ye||-.001,Ye=Math.min(Ye,wr(N,S))),A=Ye-Ve||(Ve-=.01)&&.001,te&&(he=be.utils.clamp(0,1,be.utils.normalize(Ve,Ye,De))),b._pinPush=ne,tt&&Z&&(k={},k[S.a]="+="+Z,I&&(k[S.p]="-="+le()),be.set([tt,Ce],k)),p&&!(cg&&b.end>=wr(N,S)))k=Vi(p),Ae=S===fn,ve=le(),We=parseFloat(fe(S.a))+ne,!bt&&Ye>1&&(St=(V?Lt.scrollingElement||Ei:N).style,St={style:St,value:St["overflow"+S.a.toUpperCase()]},V&&Vi(At)["overflow"+S.a.toUpperCase()]!=="scroll"&&(St.style["overflow"+S.a.toUpperCase()]="scroll")),pp(p,J,k),ue=ef(p),re=Br(p,!0),He=$&&Ws(N,Ae?jn:fn)(),_?(Be=[_+S.os2,A+ne+un],Be.t=J,B=_===sn?Sd(p,S)+A+ne:0,B&&(Be.push(S.d,B+un),J.style.flexBasis!=="auto"&&(J.style.flexBasis=B+un)),Ya(Be),I&&ct.forEach(function(Le){Le.pin===I&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),$&&le(De)):(B=Sd(p,S),B&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=B+un)),$&&(ge={top:re.top+(Ae?ve-Ve:He)+un,left:re.left+(Ae?He:ve-Ve)+un,boxSizing:"border-box",position:"fixed"},ge[Co]=ge["max"+cl]=Math.ceil(re.width)+un,ge[Ro]=ge["max"+$0]=Math.ceil(re.height)+un,ge[Hi]=ge[Hi+du]=ge[Hi+cu]=ge[Hi+hu]=ge[Hi+fu]="0",ge[sn]=k[sn],ge[sn+du]=k[sn+du],ge[sn+cu]=k[sn+cu],ge[sn+hu]=k[sn+hu],ge[sn+fu]=k[sn+fu],oe=LD(Y,ge,w),Yn&&le(0)),r?(ft=r._initted,cp(1),r.render(r.duration(),!0,!0),ce=fe(S.a)-We+A+ne,Me=Math.abs(A-ce)>1,$&&Me&&oe.splice(oe.length-2,2),r.render(0,!0,!0),ft||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),cp(0)):ce=A,St&&(St.value?St.style["overflow"+S.a.toUpperCase()]=St.value:St.style.removeProperty("overflow-"+S.a));else if(d&&le()&&!M)for(re=d.parentNode;re&&re!==At;)re._pinOffset&&(Ve-=re._pinOffset,Ye-=re._pinOffset),re=re.parentNode;yt&&yt.forEach(function(Le){return Le.revert(!1,!0)}),b.start=Ve,b.end=Ye,it=U=Yn?De:le(),!M&&!Yn&&(it<De&&le(De),b.scroll.rec=0),b.revert(!1,!0),ie=Un(),de&&(q=-1,de.restart(!0)),In=0,r&&P&&(r._initted||nt)&&r.progress()!==nt&&r.progress(nt||0,!0).render(r.time(),!0,!0),(te||he!==b.progress||M||m||r&&!r._initted)&&(r&&!P&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Ve<-.001&&!he?be.utils.normalize(Ve,Ye,0):he,!0),b.progress=te||(it-Ve)/A===he?0:he),p&&_&&(J._pinOffset=Math.round(b.progress*ce)),Q&&Q.invalidate(),isNaN(ln)||(ln-=be.getProperty(X,S.p),_t-=be.getProperty(Ne,S.p),tf(X,S,ln),tf(tt,S,ln-(Je||0)),tf(Ne,S,_t),tf(Ce,S,_t-(Je||0))),te&&!Yn&&b.update(),c&&!Yn&&!D&&(D=!0,c(b),D=!1)}},b.getVelocity=function(){return(le()-U)/(Un()-Vl)*1e3||0},b.endAnimation=function(){Ul(b.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?P||Ul(r,b.direction<0,1):Ul(r,r.reversed()))},b.labelToScroll=function(me){return r&&r.labels&&(Ve||b.refresh()||Ve)+r.labels[me]/r.duration()*A||0},b.getTrailing=function(me){var Xe=ct.indexOf(b),ze=b.direction>0?ct.slice(0,Xe).reverse():ct.slice(Xe+1);return(yi(me)?ze.filter(function(Je){return Je.vars.preventOverlaps===me}):ze).filter(function(Je){return b.direction>0?Je.end<=Ve:Je.start>=Ye})},b.update=function(me,Xe,ze){if(!(M&&!ze&&!me)){var Je=Yn===!0?De:b.scroll(),Rt=me?0:(Je-Ve)/A,rt=Rt<0?0:Rt>1?1:Rt||0,bt=b.progress,te,Z,ne,ye,Ze,T,I,H;if(Xe&&(U=it,it=M?le():Je,y&&(O=xt,xt=r&&!P?r.totalProgress():rt)),g&&p&&!In&&!$c&&$i&&(!rt&&Ve<Je+(Je-U)/(Un()-Vl)*g?rt=1e-4:rt===1&&Ye>Je+(Je-U)/(Un()-Vl)*g&&(rt=.9999)),rt!==bt&&b.enabled){if(te=b.isActive=!!rt&&rt<1,Z=!!bt&&bt<1,T=te!==Z,Ze=T||!!rt!=!!bt,b.direction=rt>bt?1:-1,b.progress=rt,Ze&&!In&&(ne=rt&&!bt?0:rt===1?1:bt===1?2:3,P&&(ye=!T&&W[ne+1]!=="none"&&W[ne+1]||W[ne],H=r&&(ye==="complete"||ye==="reset"||ye in r))),E&&(T||H)&&(H||f||!r)&&(On(E)?E(b):b.getTrailing(E).forEach(function(ve){return ve.endAnimation()})),P||(Q&&!In&&!$c?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",rt,r._tTime/r._tDur):(Q.vars.totalProgress=rt,Q.invalidate().restart())):r&&r.totalProgress(rt,!!(In&&(ie||me)))),p){if(me&&_&&(J.style[_+S.os2]=we),!$)xe(Wl(We+ce*rt));else if(Ze){if(I=!me&&rt>bt&&Ye+1>Je&&Je+1>=wr(N,S),w)if(!me&&(te||I)){var B=Br(p,!0),k=Je-Ve;Wx(p,At,B.top+(S===fn?k:0)+un,B.left+(S===fn?0:k)+un)}else Wx(p,J);Ya(te||I?oe:ue),Me&&rt<1&&te||xe(We+(rt===1&&!I?ce:0))}}y&&!Oe.tween&&!In&&!$c&&de.restart(!0),a&&(T||x&&rt&&(rt<1||!fp))&&Hu(a.targets).forEach(function(ve){return ve.classList[te||x?"add":"remove"](a.className)}),o&&!P&&!me&&o(b),Ze&&!In?(P&&(H&&(ye==="complete"?r.pause().totalProgress(1):ye==="reset"?r.restart(!0).pause():ye==="restart"?r.restart(!0):r[ye]()),o&&o(b)),(T||!fp)&&(u&&T&&ca(b,u),G[ne]&&ca(b,G[ne]),x&&(rt===1?b.kill(!1,1):G[ne]=0),T||(ne=rt===1?1:3,G[ne]&&ca(b,G[ne]))),R&&!te&&Math.abs(b.getVelocity())>(Xl(R)?R:2500)&&(Ul(b.callbackAnimation),Q?Q.progress(1):Ul(r,ye==="reverse"?1:!rt,1))):P&&o&&!In&&o(b)}if(Ke){var re=M?Je/M.duration()*(M._caScrollDist||0):Je;qe(re+(X._isFlipped?1:0)),Ke(re)}Et&&Et(-Je/M.duration()*(M._caScrollDist||0))}},b.enable=function(me,Xe){b.enabled||(b.enabled=!0,vn(N,"resize",Yl),V||vn(N,"scroll",da),se&&vn(n,"refreshInit",se),me!==!1&&(b.progress=he=0,it=U=q=le()),Xe!==!1&&b.refresh())},b.getTween=function(me){return me&&Oe?Oe.tween:Q},b.setPositions=function(me,Xe,ze,Je){if(M){var Rt=M.scrollTrigger,rt=M.duration(),bt=Rt.end-Rt.start;me=Rt.start+bt*me/rt,Xe=Rt.start+bt*Xe/rt}b.refresh(!1,!1,{start:Nx(me,ze&&!!b._startClamp),end:Nx(Xe,ze&&!!b._endClamp)},Je),b.update()},b.adjustPinSpacing=function(me){if(Be&&me){var Xe=Be.indexOf(S.d)+1;Be[Xe]=parseFloat(Be[Xe])+me+un,Be[1]=parseFloat(Be[1])+me+un,Ya(Be)}},b.disable=function(me,Xe){if(me!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Xe||Q&&Q.pause(),De=0,ke&&(ke.uncache=1),se&&_n(n,"refreshInit",se),de&&(de.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!V)){for(var ze=ct.length;ze--;)if(ct[ze].scroller===N&&ct[ze]!==b)return;_n(N,"resize",Yl),V||_n(N,"scroll",da)}},b.kill=function(me,Xe){b.disable(me,Xe),Q&&!Xe&&Q.kill(),l&&delete fg[l];var ze=ct.indexOf(b);ze>=0&&ct.splice(ze,1),ze===Xn&&bf>0&&Xn--,ze=0,ct.forEach(function(Je){return Je.scroller===b.scroller&&(ze=1)}),ze||Yn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),Xe||r.kill()),tt&&[tt,Ce,X,Ne].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),pu===b&&(pu=0),p&&(ke&&(ke.uncache=1),ze=0,ct.forEach(function(Je){return Je.pin===p&&ze++}),ze||(ke.spacer=0)),i.onKill&&i.onKill(b)},ct.push(b),b.enable(!1,!1),wt&&wt(b),r&&r.add&&!A){var ut=b.update;b.update=function(){b.update=ut,ht.cache++,Ve||Ye||b.refresh()},be.delayedCall(.01,b.update),A=.01,Ve=Ye=0}else b.refresh();p&&RD()},n.register=function(i){return ha||(be=i||q1(),$1()&&window.document&&n.enable(),ha=Gl),ha},n.defaults=function(i){if(i)for(var r in i)Qc[r]=i[r];return Qc},n.disable=function(i,r){Gl=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),_n(dt,"wheel",da),_n(Lt,"scroll",da),clearInterval(jc),_n(Lt,"touchcancel",vr),_n(At,"touchstart",vr),Kc(_n,Lt,"pointerdown,touchstart,mousedown",Fx),Kc(_n,Lt,"pointerup,touchend,mouseup",Ox),yd.kill(),qc(_n);for(var s=0;s<ht.length;s+=3)Zc(_n,ht[s],ht[s+1]),Zc(_n,ht[s],ht[s+2])},n.enable=function(){if(dt=window,Lt=document,Ei=Lt.documentElement,At=Lt.body,be){if(Hu=be.utils.toArray,lu=be.utils.clamp,ug=be.core.context||vr,cp=be.core.suppressOverwrites||vr,W0=dt.history.scrollRestoration||"auto",dg=dt.pageYOffset||0,be.core.globals("ScrollTrigger",n),At){Gl=1,Xa=document.createElement("div"),Xa.style.height="100vh",Xa.style.position="absolute",sE(),SD(),tn.register(be),n.isTouch=tn.isTouch,cs=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lg=tn.isTouch===1,vn(dt,"wheel",da),G0=[dt,Lt,Ei,At],be.matchMedia?(n.matchMedia=function(c){var f=be.matchMedia(),d;for(d in c)f.add(d,c[d]);return f},be.addEventListener("matchMediaInit",function(){iE(),K0()}),be.addEventListener("matchMediaRevert",function(){return nE()}),be.addEventListener("matchMedia",function(){yo(0,1),zo("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return hp(),hp})):console.warn("Requires GSAP 3.11.0 or later"),hp(),vn(Lt,"scroll",da);var i=At.hasAttribute("style"),r=At.style,s=r.borderTopStyle,o=be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Br(At),fn.m=Math.round(a.top+fn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),jc=setInterval(Bx,250),be.delayedCall(.5,function(){return $c=0}),vn(Lt,"touchcancel",vr),vn(At,"touchstart",vr),Kc(vn,Lt,"pointerdown,touchstart,mousedown",Fx),Kc(vn,Lt,"pointerup,touchend,mouseup",Ox),ag=be.utils.checkPrefix("transform"),Pf.push(ag),ha=Un(),yd=be.delayedCall(.2,yo).pause(),pa=[Lt,"visibilitychange",function(){var c=dt.innerWidth,f=dt.innerHeight;Lt.hidden?(Dx=c,Ix=f):(Dx!==c||Ix!==f)&&Yl()},Lt,"DOMContentLoaded",yo,dt,"load",yo,dt,"resize",Yl],qc(vn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<ht.length;l+=3)Zc(_n,ht[l],ht[l+1]),Zc(_n,ht[l],ht[l+2])}else if(Lt){var u=function c(){n.enable(),Lt.removeEventListener("DOMContentLoaded",c)};Lt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(fp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(jc)||(jc=r)&&setInterval(Bx,r),"ignoreMobileResize"in i&&(lg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(qc(_n)||qc(vn,i.autoRefreshEvents||"none"),X1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Jn(i),o=ht.indexOf(s),a=Oo(s);~o&&ht.splice(o,a?6:2),r&&(a?Cr.unshift(dt,r,At,r,Ei,r):Cr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?Jn(i):i).getBoundingClientRect(),a=o[s?Co:Ro]*r||0;return s?o.right-a>0&&o.left+a<dt.innerWidth:o.bottom-a>0&&o.top+a<dt.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=Jn(i));var o=i.getBoundingClientRect(),a=o[s?Co:Ro],l=r==null?a/2:r in Md?Md[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/dt.innerWidth:(o.top+l)/dt.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},n}();et.version="3.15.0";et.saveStyles=function(n){return n?Hu(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),ug())}}):vi};et.revert=function(n,e){return K0(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?Yl(!0):(ha||et.register())&&yo(!0)};et.update=function(n){return++ht.cache&&jr(n===!0?2:0)};et.clearScrollMemory=rE;et.maxScroll=function(n,e){return wr(n,e?jn:fn)};et.getScrollFunc=function(n,e){return Ws(Jn(n),e?jn:fn)};et.getById=function(n){return fg[n]};et.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!$i};et.snapDirectional=q0;et.addEventListener=function(n,e){var t=ko[n]||(ko[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=ko[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],d=[],p=be.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(_){f.length||p.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),vn(et,"refresh",function(){return s=e.batchMax()})),Hu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(et.create(u))}),t};var Yx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},mp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===Ei&&n(At,t)},nf={auto:1,scroll:1},ID=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||be.core.getCache(s),a=Un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nf[(l=Vi(s)).overflowY]||nf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Oo(s)&&(nf[(l=Vi(s)).overflowY]||nf[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},aE=function(e,t,i,r){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ID,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&vn(Lt,tn.eventTypes[0],$x,!1,!0)},onDisable:function(){return _n(Lt,tn.eventTypes[0],$x,!0)}})},UD=/(input|label|select|textarea)/i,jx,$x=function(e){var t=UD.test(e.target.tagName);(t||jx)&&(e._gsapAllow=!0,jx=t)},ND=function(e){co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Jn(e.target)||Ei,c=be.core.globals().ScrollSmoother,f=c&&c.get(),d=cs&&(e.content&&Jn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Ws(u,fn),_=Ws(u,jn),m=1,g=(tn.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,h=0,v=On(r)?function(){return r(a)}:function(){return r||2.8},x,y,w=aE(u,e.type,!0,s),C=function(){return y=!1},M=vr,R=vr,E=function(){l=wr(u,fn),R=lu(cs?1:0,l),i&&(M=lu(0,wr(u,jn))),x=bo},S=function(){d._gsap.y=Wl(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},P=function(){if(y){requestAnimationFrame(C);var L=Wl(a.deltaY/2),j=R(p.v-L);if(d&&j!==p.v+p.offset){p.offset=j-p.v;var b=Wl((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",d._gsap.y=b+"px",p.cacheID=ht.cache,jr()}return!0}p.offset&&S(),y=!0},N,z,V,$,G=function(){E(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return d&&be.set(d,{y:"+=0"}),e.ignoreCheck=function(W){return cs&&W.type==="touchmove"&&P()||m>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){y=!1;var W=m;m=Wl((dt.visualViewport&&dt.visualViewport.scale||1)/g),N.pause(),W!==m&&mp(u,m>1.01?!0:i?!1:"x"),z=_(),V=p(),E(),x=bo},e.onRelease=e.onGestureStart=function(W,L){if(p.offset&&S(),!L)$.restart(!0);else{ht.cache++;var j=v(),b,se;i&&(b=_(),se=b+j*.05*-W.velocityX/.227,j*=Yx(_,b,se,wr(u,jn)),N.vars.scrollX=M(se)),b=p(),se=b+j*.05*-W.velocityY/.227,j*=Yx(p,b,se,wr(u,fn)),N.vars.scrollY=R(se),N.invalidate().duration(j).play(.01),(cs&&N.vars.scrollY>=l||b>=l-1)&&be.to({},{onUpdate:G,duration:j})}o&&o(W)},e.onWheel=function(){N._ts&&N.pause(),Un()-h>1e3&&(x=0,h=Un())},e.onChange=function(W,L,j,b,se){if(bo!==x&&E(),L&&i&&_(M(b[2]===L?z+(W.startX-W.x):_()+L-b[1])),j){p.offset&&S();var _e=se[2]===j,Fe=_e?V+W.startY-W.y:p()+j-se[1],q=R(Fe);_e&&Fe!==q&&(V+=q-Fe),p(q)}(j||L)&&jr()},e.onEnable=function(){mp(u,i?!1:"x"),et.addEventListener("refresh",G),vn(dt,"resize",G),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){mp(u,!0),_n(dt,"resize",G),et.removeEventListener("refresh",G),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=cs,cs&&!p()&&p(1),cs&&be.ticker.add(vr),$=a._dc,N=be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:oE(p,p(),function(){return N.pause()})},onUpdate:jr,onComplete:$.vars.onComplete}),a};et.sort=function(n){if(On(n))return ct.sort(n);var e=dt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+dt.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new tn(n)};et.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof tn?n:ND(n);return Gn&&Gn.target===e.target&&Gn.kill(),Oo(e.target)&&(Gn=e),e};et.core={_getVelocityProp:og,_inputObserver:aE,_scrollers:ht,_proxies:Cr,bridge:{ss:function(){$i||zo("scrollStart"),$i=Un()},ref:function(){return In}}};q1()&&be.registerPlugin(et);function FD(n){const e={orange:new Ur({color:16742912,emissive:3347712,shininess:30}),orangeWire:new gn({color:16742912,wireframe:!0}),green:new Ur({color:1720352,emissive:6664,shininess:10}),greenWire:new gn({color:65416,wireframe:!0}),dark:new Ur({color:1711914,emissive:329744,shininess:5}),silver:new Ur({color:8425632,emissive:1056816,shininess:60}),ledOff:new gn({color:3347712}),ledOn:new gn({color:16729088}),glass:new Ur({color:53247,transparent:!0,opacity:.4,shininess:100}),chassisWire:new gn({color:16742912,wireframe:!0,opacity:.6,transparent:!0}),chassisSolid:new Ur({color:1711914,emissive:329744,transparent:!0,opacity:.85}),solar:new Ur({color:662074,emissive:1297,shininess:80}),solarWire:new gn({color:26367,wireframe:!0,opacity:.2,transparent:!0})},t={},i=new Qt;i.name="roverMaster",n.add(i),t.roverMaster=i;const r=new Qt;r.name="mpu";const s=new Se(new Pt(1.4,.15,1),e.dark);r.add(s);const o=new Se(new Pt(.7,.08,.5),e.silver);o.position.set(0,.115,0),r.add(o);const a=new Se(new Pt(.65,.005,.08),new gn({color:16777215,opacity:.15,transparent:!0}));a.position.set(0,.08,.3),r.add(a);for(let te=0;te<8;te++){const Z=new Pt(.04,.12,.04),ne=new Se(Z,e.silver);ne.position.set(-.6+te*.175,-.1,.45),r.add(ne);const ye=ne.clone();ye.position.z=-.45,r.add(ye)}const l=new cd(.04,8,8),u=[{x:.5,y:.12,z:.3},{x:.5,y:.12,z:-.3},{x:-.5,y:.12,z:0}].map(te=>{const Z=new Jh({color:3347712,emissive:0,emissiveIntensity:0}),ne=new Se(l,Z);return ne.position.set(te.x,te.y,te.z),r.add(ne),ne});t.mpuLeds=u,r.position.set(0,0,0),i.add(r),t.mpu=r;const c=new Qt;c.name="pcb";const f=new Se(new Pt(3.5,.08,2.5),e.green);c.add(f);const d=new YP(new Pt(3.52,.1,2.52)),p=new zM(d,new S0({color:65416}));c.add(p);const _=new st(.05,.05,.085,12),m=new st(.025,.025,.086,8),g=new gn({color:13411840}),h=new gn({color:329224});for(let te=0;te<8;te++){const Z=-.6+te*.175;[-.45,.45].forEach(ne=>{const ye=new Se(_,g);ye.position.set(Z,0,ne),c.add(ye);const Ze=new Se(m,h);Ze.position.set(Z,0,ne),c.add(Ze)})}for(let te=0;te<3;te++){const Z=new Se(new st(.1,.1,.25,12),e.silver);Z.position.set(1.1,.165,-.7+te*.4),c.add(Z);const ne=new Se(new st(.1,.1,.02,12),new gn({color:2236962}));ne.position.set(Z.position.x,.29,Z.position.z),c.add(ne)}const v=new Se(new st(.18,.18,.12,16),e.dark);v.position.set(1.1,.1,.6),c.add(v);const x=(te,Z,ne,ye)=>{const Ze=new Se(new Pt(ne,.06,ye),e.dark);Ze.position.set(te,.07,Z),c.add(Ze);const T=e.silver,I=Math.floor(ne/.08);for(let H=0;H<I;H++){const B=te-ne/2+.04+H*.08,k=new Pt(.02,.04,ye+.04),re=new Se(k,T);re.position.set(B,.05,Z),c.add(re)}};x(-1,.8,.4,.2),x(-1,-.8,.4,.2),x(.4,.9,.3,.3);const y=(te,Z,ne)=>{const ye=new Qt,Ze=new Se(new Pt(.08,.04,.06),e.dark);Ze.position.set(0,.06,0),ye.add(Ze);const T=new Pt(.02,.04,.02),I=new Se(T,e.silver);I.position.set(-.025,.04,.035),ye.add(I);const H=new Se(T,e.silver);H.position.set(.025,.04,.035),ye.add(H);const B=new Se(T,e.silver);B.position.set(0,.04,-.035),ye.add(B),ye.position.set(te,0,Z),ye.rotation.y=ne,c.add(ye)};y(.3,-.8,0),y(.5,-.8,Math.PI/2),y(-.2,.85,Math.PI);const w=new Pt(.06,.03,.03),C=new Pt(.064,.032,.01),M=(te,Z,ne=0,ye=!1)=>{const Ze=new Qt,T=ye?11176021:1118481,I=new Se(w,new Ur({color:T}));Ze.add(I),[-.025,.025].forEach(H=>{const B=new Se(C,e.silver);B.position.set(H,0,0),B.rotation.y=Math.PI/2,Ze.add(B)}),Ze.position.set(te,.055,Z),Ze.rotation.y=ne,c.add(Ze)};for(let te=0;te<5;te++)M(-.7,.65+te*.06,0,!0),M(-.5+te*.1,-.65,0,!1),M(-1,-.2+te*.08,0,!1);const R=new Qt,E=new Se(new Pt(.35,.28,.45),e.silver);E.position.set(0,.14,0),R.add(E);const S=new Se(new Pt(.25,.18,.1),e.dark);S.position.set(0,.12,.23),R.add(S),[-.2,.5].forEach(te=>{const Z=R.clone();Z.position.set(-1.55,0,te),Z.rotation.y=-Math.PI/2,c.add(Z)});const P=new Ur({color:16755200,shininess:20}),N=new Qt,z=new Se(new Pt(.22,.16,.14),P);z.position.set(0,.08,0),N.add(z);const V=new st(.03,.03,.06,8);[-.05,.05].forEach(te=>{const Z=new Se(V,g);Z.position.set(te,.08,.08),Z.rotation.x=Math.PI/2,N.add(Z)}),[1,1.4].forEach(te=>{const Z=N.clone();Z.position.set(te,0,-1.15),c.add(Z)});const $=new Pt(.4,.14,.25);[-.8,0,.8].forEach(te=>{const Z=new Se($,e.dark);Z.position.set(1.55,.09,te),c.add(Z)});const G=new st(.08,.08,.12,16),W=new gn({color:460810});[[-1.5,1.05],[1.5,1.05],[-1.5,-1.05],[1.5,-1.05]].forEach(([te,Z])=>{const ne=new Se(G,W);ne.position.set(te,0,Z),c.add(ne)}),c.position.set(0,-9,0),i.add(c),t.pcb=c;const L=new Qt;L.name="chassis";const j=e.silver,b=.045,se=.025,_e=.02,Fe=8,q=[-.45,.45],ie=[-2.1,2.1],he=[-1.4,1.4],le=[-1,1],Oe=new Se(new Pt(4,.6,2.6),e.chassisSolid);L.add(Oe);const ke=2,Qe=.3,it=1.3;le.forEach(te=>{le.forEach(Z=>{const ne=new Se(new st(_e,_e,2.6,Fe),j);ne.rotation.x=Math.PI/2,ne.position.set(te*ke,Z*Qe,0),L.add(ne)}),le.forEach(Z=>{const ne=new Se(new st(_e,_e,.6,Fe),j);ne.position.set(te*ke,0,Z*it),L.add(ne)})}),le.forEach(te=>{le.forEach(Z=>{const ne=new Se(new st(_e,_e,4,Fe),j);ne.rotation.z=Math.PI/2,ne.position.set(0,te*Qe,Z*it),L.add(ne)})});const U=2.1,Ve=.45,Ye=1.4;le.forEach(te=>{le.forEach(Z=>{le.forEach(ne=>{const ye=new F(te*ke,Z*Qe,ne*it),Ze=new F(te*U,Z*Ve,ne*Ye),T=ye.distanceTo(Ze),I=new F().subVectors(Ze,ye).normalize(),H=new Se(new st(_e,_e,T,Fe),j);H.position.copy(ye).lerp(Ze,.5),H.quaternion.setFromUnitVectors(new F(0,1,0),I),L.add(H)})})}),q.forEach(te=>{he.forEach(Z=>{const ne=new Se(new st(b,b,4.2,Fe),j);ne.rotation.z=Math.PI/2,ne.position.set(0,te,Z),L.add(ne)})}),q.forEach(te=>{ie.forEach(Z=>{const ne=new Se(new st(b,b,2.8,Fe),j);ne.rotation.x=Math.PI/2,ne.position.set(Z,te,0),L.add(ne)})}),ie.forEach(te=>{he.forEach(Z=>{const ne=new Se(new st(b,b,.9,Fe),j);ne.position.set(te,0,Z),L.add(ne)})}),[-1.05,0,1.05].forEach(te=>{he.forEach(Z=>{const ne=new Se(new st(se,se,.9,Fe),j);ne.position.set(te,0,Z),L.add(ne)})}),he.forEach(te=>{le.forEach(Z=>{const ne=new F(-1.05,-.45*Z,te),ye=new F(1.05,.45*Z,te),Ze=ne.distanceTo(ye),T=new F().subVectors(ye,ne).normalize(),I=new Se(new st(se,se,Ze,Fe),j);I.position.copy(ne).lerp(ye,.5),I.quaternion.setFromUnitVectors(new F(0,1,0),T),L.add(I)})});const Ce=[2.1,-2.1],X=[-.2,.2];Ce.forEach(te=>{X.forEach(Z=>{const ne=new Se(new st(.05,.05,2.7,Fe),e.dark);ne.rotation.x=Math.PI/2,ne.position.set(te,Z,0),L.add(ne)})});const Ne=.2,je=new Float32Array([0,0,0,Ne,0,0,0,Ne,0,0,0,Ne]),D=[0,2,1,0,3,2,0,1,3,1,2,3],A=new Zn;A.setAttribute("position",new fr(je,3)),A.setIndex(D),A.computeVertexNormals(),q.forEach(te=>{ie.forEach(Z=>{he.forEach(ne=>{const ye=new Se(A,e.dark),Ze=Z+Math.sign(Z)*b,T=te+Math.sign(te)*b,I=ne+Math.sign(ne)*b;ye.position.set(Ze,T,I),ye.scale.set(-Math.sign(Z),-Math.sign(te),-Math.sign(ne)),L.add(ye)})})}),he.forEach(te=>{const Z=new Qt,ne=new Se(new st(.14,.14,.08,16),e.silver);ne.rotation.x=Math.PI/2,Z.add(ne);const ye=new Se(new st(.08,.08,.09,16),e.dark);ye.rotation.x=Math.PI/2,Z.add(ye),Z.position.set(0,0,te),L.add(Z)});const Y=1.5,oe=2.2,ue=new Pt(Y,.04,oe),J=new gn({color:2245768,opacity:.6,transparent:!0}),Pe=.02;[-1,1].forEach(te=>{const Z=new Qt,ne=new Se(ue,e.solar);Z.add(ne);for(let T=0;T<5;T++){const I=new Se(new Pt(0,.045,oe),J);I.position.set(-.6+T*.3,.005,0),Z.add(I)}for(let T=0;T<8;T++){const I=new Se(new Pt(Y,.045,0),J);I.position.set(0,.005,-1.05+T*.3),Z.add(I)}[-Y/2,Y/2].forEach(T=>{const I=new Se(new st(Pe,Pe,oe,8),j);I.rotation.x=Math.PI/2,I.position.set(T,0,0),Z.add(I)}),[-oe/2,oe/2].forEach(T=>{const I=new Se(new st(Pe,Pe,Y,8),j);I.rotation.z=Math.PI/2,I.position.set(0,0,T),Z.add(I)}),Z.position.set(te,.45,0),L.add(Z)});const xe=.45,We=1.75,ce=1.1,we=2.1,Be=.45,qe=1.4;le.forEach(te=>{le.forEach(Z=>{const ne=new F(te*We,xe,Z*ce),ye=new F(te*we,Be,Z*qe),Ze=ne.distanceTo(ye),T=new F().subVectors(ye,ne).normalize(),I=new Se(new st(_e,_e,Ze,Fe),j);I.position.copy(ne).lerp(ye,.5),I.quaternion.setFromUnitVectors(new F(0,1,0),T),L.add(I)})}),le.forEach(te=>{const Z=new Se(new st(_e,_e,.5,Fe),j);Z.rotation.z=Math.PI/2,Z.position.set(0,xe,te*ce),L.add(Z)});const Me=()=>new Jh({color:3347712,emissive:0,emissiveIntensity:0}),Ke=[[2.1,.57,1.4],[2.1,.57,-1.4],[-2.1,.57,1.4],[-2.1,.57,-1.4]].map(([te,Z,ne])=>{const ye=new Se(new cd(.06,8,8),Me());return ye.position.set(te,Z,ne),L.add(ye),ye});t.chassisLeds=Ke;const $e=new Qt;$e.position.set(0,.45,0);const xt=new Se(new Pt(.48,.06,.48),e.dark);$e.add(xt),le.forEach(te=>{const Z=new Se(new st(_e,_e,.5,Fe),j);Z.rotation.z=Math.PI/2,Z.position.set(0,xe,te*.24),L.add(Z)});const O=new Se(new st(.15,.2,.12,16),e.silver);O.position.set(0,.08,0),$e.add(O);const Q=new Jh({color:16755200,metalness:.9,roughness:.2}),ee=new Se(new st(.12,.12,.13,16),Q);ee.position.set(0,.08,0),$e.add(ee),[-.08,.08].forEach(te=>{const Z=new Se(new st(.015,.015,.2,8),e.silver),ne=new Se(new st(.015,.015,.2,8),e.silver);Z.position.set(te,.1,0),ne.position.set(0,.1,te),$e.add(Z),$e.add(ne)}),L.add($e),L.position.set(0,9,0),L.scale.setScalar(.3),i.add(L),t.chassis=L;const K=new Qt;K.name="sensors";const de=new Se(new st(.09,.15,.2,16),e.dark);de.position.set(0,0,0),K.add(de);const De=new Se(new st(.055,.09,2,8),e.silver);De.position.set(0,1,0),K.add(De);const nt=new Se(new Pt(.42,.28,.28),e.dark);nt.position.set(0,2.05,.04),K.add(nt);const Et=new st(.07,.07,.09,16);Et.rotateX(Math.PI/2);const wt=new st(.04,.04,.1,16);wt.rotateX(Math.PI/2),[-.13,.13].forEach(te=>{const Z=new Se(Et,e.glass);Z.position.set(te,2.05,.17),K.add(Z);const ne=new Se(wt,new gn({color:4386,opacity:.9,transparent:!0}));ne.position.set(te,2.05,.18),K.add(ne)});const lt=new Se(new st(.2,.2,.14,20),e.dark);lt.position.set(0,2.28,0),K.add(lt);const Ge=new Se(new fd(.2,.018,8,40),e.orange);Ge.position.set(0,2.3,0),Ge.rotation.x=Math.PI/2,K.add(Ge);const Ie=new gn({color:16742912,opacity:.08,transparent:!0,side:Sr,depthWrite:!1,blending:um}),ut=new Se(new M0(2.5,32,0,Math.PI/4),Ie);ut.position.set(0,2.3,0),ut.rotation.set(Math.PI/2,0,0),ut.renderOrder=1,K.add(ut),K.position.set(2.5,9,0),i.add(K),t.sensors=K;const me=new Qt;me.name="wheels",t.wheelMeshes=[];const Xe=(te,Z,ne,ye)=>{const Ze=te.distanceTo(Z),T=new Se(new st(ne,ne,Ze,8),ye);return T.position.copy(te).lerp(Z,.5),T.quaternion.setFromUnitVectors(new F(0,1,0),Z.clone().sub(te).normalize()),T},ze=()=>{const te=new Qt,Z=new Se(new st(.34,.34,.24,18),e.dark);Z.rotation.z=Math.PI/2,te.add(Z);for(let Ze=0;Ze<14;Ze++){const T=Ze/14*Math.PI*2,I=new Se(new Pt(.26,.05,.07),e.orange);I.position.set(0,Math.cos(T)*.34,Math.sin(T)*.34),I.lookAt(0,0,0),te.add(I)}[-.12,.12].forEach(Ze=>{const T=new Se(new fd(.3,.03,6,18),e.silver);T.rotation.y=Math.PI/2,T.position.set(Ze,0,0),te.add(T)});const ne=new Se(new st(.12,.12,.26,8),e.silver);ne.rotation.z=Math.PI/2,te.add(ne);const ye=new Se(new st(.04,.04,.28,6),new gn({color:16742912}));return ye.rotation.z=Math.PI/2,te.add(ye),te},Je=te=>{const Z=new Qt,ne=1.77*te,ye=new F(0,0,0),Ze=new F(0,-.6,-1.1),T=new F(0,-.2,.55),I=new F(0,-.6,0),H=new F(0,-.6,1.1),B=.05,k=.25*te,re=new Qt;re.add(Xe(ye,Ze,B,e.silver)),re.add(Xe(ye,T,B,e.silver));const ve=new Se(new st(.08,.08,.36,12),e.dark);ve.rotation.z=Math.PI/2,ve.position.set(-.1*te,0,0),re.add(ve);const Ae=ze();Ae.position.set(k,Ze.y,Ze.z),re.add(Ae),t.wheelMeshes.push(Ae),re.add(Xe(Ze.add(new F(-te*.08,0,0)),Ae.position,.04,e.dark));const ge=new Qt;ge.position.copy(T);const Te=I.clone().sub(T),Ue=H.clone().sub(T);ge.add(Xe(new F(0,0,0),Te,B,e.silver)),ge.add(Xe(new F(0,0,0),Ue,B,e.silver));const He=new Se(new st(.07,.07,.16,12),e.dark);He.rotation.z=Math.PI/2,ge.add(He);const ft=ze();ft.position.set(k,Te.y,Te.z),ge.add(ft),t.wheelMeshes.push(ft),ge.add(Xe(Te.add(new F(-te*.08,0,0)),ft.position,.04,e.dark));const yt=ze();return yt.position.set(k,Ue.y,Ue.z),ge.add(yt),t.wheelMeshes.push(yt),ge.add(Xe(Ue.add(new F(-te*.08,0,0)),yt.position,.04,e.dark)),re.add(ge),Z.add(re),Z.position.set(ne,0,0),Z.scale.setScalar(1.2),Z};me.add(Je(-1)),me.add(Je(1)),me.position.set(0,-15,0),i.add(me),t.wheels=me;const Rt=new ZP(18,36,16742912,1119520);Rt.material.opacity=.22,Rt.material.transparent=!0,Rt.position.y=-.95,i.add(Rt),t.grid=Rt;const rt=new Se(new Pt(.5,.005,.02),new gn({color:16742912,opacity:.4,transparent:!0}));rt.position.y=-.94,i.add(rt);const bt=rt.clone();return bt.rotation.y=Math.PI/2,i.add(bt),{groups:t,mats:e}}V0.registerPlugin(et);function OD({scrollerRef:n,sectionRefs:e,onPhaseChange:t,onScrollPct:i}){const r=ei.useRef(null);return ei.useEffect(()=>{var x;if(!r.current||!n.current)return;const s=new GP({canvas:r.current,antialias:!0,alpha:!1});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(460810,1),s.shadowMap.enabled=!0,s.shadowMap.type=lM;const o=new WP;o.fog=new y0(460810,.018);const a=new Mi(60,1,.1,200);a.position.set(4,3,7),a.lookAt(0,.5,0),o.add(new KP(1712176,1.6));const l=new dx(16748608,2.2);l.position.set(3,7,5),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),o.add(l);const u=new dx(53247,1);u.position.set(-5,3,-4),o.add(u);const c=new $P(16742912,.4,12);c.position.set(0,4,0),o.add(c);const{groups:f}=FD(o),d=()=>{var M;const y=(M=r.current)==null?void 0:M.parentElement;if(!y)return;const w=y.clientWidth,C=y.clientHeight;s.setSize(w,C),a.aspect=w/C,a.updateProjectionMatrix()};d();const p=new ResizeObserver(d);(x=r.current)!=null&&x.parentElement&&p.observe(r.current.parentElement);const _=n.current,m=V0.utils.interpolate;et.create({trigger:e.current[1],scroller:_,start:"top 90%",end:"center center",scrub:1.2,onUpdate(y){const w=y.progress;f.pcb.position.y=m(-9,-.1,w),f.pcb.rotation.y=m(.6,Math.PI/2,w),f.mpu.position.y=w<.6?m(0,.55,w/.6):m(.55,.1,(w-.6)/.4),f.mpu.rotation.y=m(0,Math.PI/2,w),a.position.set(m(4,3,w),m(3,3.5,w),m(7,7.5,w))}}),et.create({trigger:e.current[2],scroller:_,start:"top 90%",end:"center center",scrub:1.2,onUpdate(y){const w=y.progress;f.chassis.position.y=m(9,0,w),f.chassis.scale.setScalar(m(.25,1,w)),f.chassis.rotation.y=m(-Math.PI*.35,Math.PI/2,w),a.position.set(m(3,5.5,w),m(3.5,4,w),m(7.5,9.5,w))}}),et.create({trigger:e.current[3],scroller:_,start:"top 90%",end:"center center",scrub:1.2,onUpdate(y){const w=y.progress;f.sensors.position.set(m(2.5,0,w),m(9,.69,w),0),f.sensors.rotation.y=m(Math.PI*.5,0,w),a.position.set(m(5.5,2.5,w),m(4,5.5,w),m(9.5,8.5,w))}}),et.create({trigger:e.current[4],scroller:_,start:"top 90%",end:"center center",scrub:1.2,onUpdate(y){const w=y.progress;f.wheels.position.set(0,m(-15,0,w),0),f.wheels.rotation.z=m(0,0,w),a.position.set(m(2.5,6.5,w),m(5.5,2.8,w),m(8.5,7.5,w))}}),et.create({trigger:e.current[5],scroller:_,start:"top 90%",end:"center center",scrub:1.2,onUpdate(y){const w=y.progress;[...f.mpuLeds,...f.chassisLeds].forEach(M=>{M.material.color.setRGB(m(.2,1,w),m(.08,.27,w),0),M.material.emissive&&(M.material.emissive.setRGB(m(0,1,w),m(0,.2,w),0),M.material.emissiveIntensity=m(0,3,w))}),c.intensity=m(.4,3.5,w),c.color.setRGB(1,m(.48,.85,w),m(0,.1,w)),a.position.set(m(6.5,4.5,w),m(2.8,2.8,w),m(7.5,6,w))}}),hs.forEach((y,w)=>{et.create({trigger:e.current[w],scroller:_,start:"top 55%",end:"bottom 45%",onEnter:()=>t(w),onEnterBack:()=>t(w)})}),et.create({scroller:_,start:0,end:"max",onUpdate:y=>i(y.progress*100)});let g,h=0;const v=y=>{var R,E,S;g=requestAnimationFrame(v);const w=(y-h)*.001;h=y;const C=y*.001;f.roverMaster&&(f.roverMaster.rotation.y=Math.sin(C*.45)*.25,f.roverMaster.position.y=Math.sin(C*1.2)*.03);const M=((S=(E=(R=f.chassisLeds)==null?void 0:R[0])==null?void 0:E.material)==null?void 0:S.emissiveIntensity)>.5;f.sensors&&f.sensors.children.forEach(P=>{var N;((N=P.geometry)==null?void 0:N.type)==="CircleGeometry"&&(P.visible=M,M&&(P.rotation.z+=w*1.4))}),f.wheelMeshes&&f.wheelMeshes.forEach(P=>{P.rotation.x+=w*(M?2.8:0)}),a.lookAt(0,.5,0),s.render(o,a)};return v(0),()=>{cancelAnimationFrame(g),p.disconnect(),et.getAll().forEach(y=>y.kill()),s.dispose(),o.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&(Array.isArray(y.material)?y.material.forEach(w=>w.dispose()):y.material.dispose())})}},[n,e,t,i]),ae.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}})}function kD({activePhase:n,scrollPct:e}){var s;const[t,i]=ei.useState("");ei.useEffect(()=>{const o=()=>{const l=new Date,u=c=>String(c).padStart(2,"0");i(`${l.getUTCFullYear()}.${u(l.getUTCMonth()+1)}.${u(l.getUTCDate())} ${u(l.getUTCHours())}:${u(l.getUTCMinutes())}:${u(l.getUTCSeconds())} UTC`)};o();const a=setInterval(o,1e3);return()=>clearInterval(a)},[]);const r=o=>String(o).padStart(2,"0");return ae.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:10,fontFamily:"'Share Tech Mono', monospace"},children:[ae.jsxs("div",{style:{position:"absolute",top:18,left:20,fontSize:12,color:"rgba(255,122,0,0.55)",lineHeight:1.9,letterSpacing:"0.14em"},children:["ROVER SCHEMATIC VIEW",ae.jsx("br",{}),"PHASE: ",r(n+1)," / 06",ae.jsx("br",{}),"STATE: ",(s=hs[n])==null?void 0:s.state]}),ae.jsx("div",{style:{position:"absolute",top:24,right:24,display:"flex",flexDirection:"column",gap:12,alignItems:"flex-end"},children:hs.map((o,a)=>ae.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:8},children:[n===a&&ae.jsx("span",{style:{fontSize:10,color:a===hs.length-1?"rgba(0,255,136,0.8)":"rgba(255,122,0,0.7)",letterSpacing:"0.1em",textTransform:"uppercase"},children:o.phase}),ae.jsx("div",{style:{width:n===a?7:4,height:n===a?7:4,borderRadius:"50%",background:n===a?a===hs.length-1?"#00ff88":"#FF7A00":a===hs.length-1?"rgba(0,255,136,0.2)":"rgba(255,122,0,0.2)",boxShadow:n===a?a===hs.length-1?"0 0 10px rgba(0,255,136,0.8)":"0 0 8px rgba(255,122,0,0.8)":"none",transition:"all 0.3s ease"}})]},a))}),ae.jsxs("div",{className:"hide-on-mobile",style:{position:"absolute",bottom:18,left:20,fontSize:12,color:"rgba(255,122,0,0.55)",lineHeight:1.9,letterSpacing:"0.14em"},children:[t,ae.jsx("br",{}),"CAM: PERSPECTIVE 45°",ae.jsx("br",{}),"FOCAL: 0.1 – 200m"]}),ae.jsxs("div",{className:"hide-on-mobile",style:{position:"absolute",bottom:18,right:20,fontSize:12,color:"rgba(255,122,0,0.55)",lineHeight:1.9,letterSpacing:"0.14em",textAlign:"right"},children:["SCROLL: ",Math.round(e).toString().padStart(3," "),"%",ae.jsx("br",{}),"GRID: 18×18 / 36 DIV",ae.jsx("br",{}),"WIREFRAME: PARTIAL"]}),ae.jsx("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",pointerEvents:"none"}})]})}function zD(){const n=ei.useRef(null),e=ei.useRef([]),[t,i]=ei.useState(0),[r,s]=ei.useState(0),o=ei.useCallback(l=>i(l),[]),a=ei.useCallback(l=>s(l),[]);return ae.jsxs(ae.Fragment,{children:[ae.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:wght@200;300;400;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #07080a;
          color: #d0d8e8;
          font-family: 'Rajdhani', sans-serif;
          overflow: hidden;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,122,0,0.25); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,122,0,0.5); }

        @keyframes hud-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(0,255,136,0); }
        }

        /* --- BASE DESKTOP LAYOUT (No more inline styles!) --- */
        .app-wrapper {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .left-pane {
          width: 60%;
          height: 100vh;
          overflow-y: scroll;
          background: linear-gradient(180deg, #07080a 0%, #0d0f12 100%);
          border-right: 1px solid rgba(255,122,0,0.12);
          position: relative;
          z-index: 10;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,122,0,0.3) transparent;
        }

        .right-pane {
          width: 40%;
          height: 100vh;
          position: relative;
          flex-shrink: 0;
          background: #07080a;
        }

        /* --- MOBILE LAYOUT OVERRIDES --- */
        @media (orientation: portrait) {
          .app-wrapper {
            flex-direction: column;
          }
          .left-pane {
            width: 100%;
            height: 70vh;
            border-right: none;
            border-top: none;
            border-bottom: 1px solid rgba(255,122,0,0.2);
          }
          .right-pane {
            width: 100%;
            height: 30vh;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}),ae.jsxs("div",{className:"app-wrapper",children:[ae.jsx(kT,{ref:n,activePhase:t,sectionRefs:e}),ae.jsxs("div",{className:"right-pane",children:[ae.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:2,width:`${r}%`,background:"linear-gradient(90deg, #FF4D00, #FFA500)",zIndex:20,transition:"width 0.05s linear"}}),ae.jsx(OD,{scrollerRef:n,sectionRefs:e,onPhaseChange:o,onScrollPct:a}),ae.jsx(kD,{activePhase:t,scrollPct:r})]})]})]})}gp.createRoot(document.getElementById("root")).render(ae.jsx(TE.StrictMode,{children:ae.jsx(zD,{})}));
