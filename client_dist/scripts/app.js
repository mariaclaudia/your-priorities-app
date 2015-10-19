function onSplashClick(){var e=document.getElementById("splash");e.parentNode.removeChild(e),document.body.classList.remove("loading")}!function(){function e(e,n){if(!n||"function"==typeof n)return e;for(var r in n)e[r]=n[r];return e}function n(e,r){for(var t in r)t in e?n(e[t],r[t]):e[t]=r[t];return e}function r(e,n,r){var t,a=0,u=e.length,o=void 0===u||"[object Array]"!==Object.prototype.toString.apply(e)||"function"==typeof e;if(r)if(o){for(t in e)if(n.apply(e[t],r)===!1)break}else for(;u>a&&n.apply(e[a++],r)!==!1;);else if(o){for(t in e)if(n.call(e[t],t,e[t])===!1)break}else for(;u>a&&n.call(e[a],a,e[a++])!==!1;);return e}function t(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return H[e]}):e}function a(e){var n=function(e){if(window.XMLHttpRequest)return e(null,new XMLHttpRequest);if(window.ActiveXObject)try{return e(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(n){return e(null,new ActiveXObject("Microsoft.XMLHTTP"))}return e(new Error)},r=function(e){if("string"==typeof e)return e;var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return n.join("&")},t=function(e){e=e.replace(/\r\n/g,"\n");for(var n="",r=0;r<e.length;r++){var t=e.charCodeAt(r);128>t?n+=String.fromCharCode(t):t>127&&2048>t?(n+=String.fromCharCode(192|t>>6),n+=String.fromCharCode(128|63&t)):(n+=String.fromCharCode(224|t>>12),n+=String.fromCharCode(128|63&t>>6),n+=String.fromCharCode(128|63&t))}return n},a=function(e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e=t(e);var r,a,u,o,s,i,l,c="",f=0;do r=e.charCodeAt(f++),a=e.charCodeAt(f++),u=e.charCodeAt(f++),o=r>>2,s=(3&r)<<4|a>>4,i=(15&a)<<2|u>>6,l=63&u,isNaN(a)?i=l=64:isNaN(u)&&(l=64),c+=n.charAt(o)+n.charAt(s)+n.charAt(i)+n.charAt(l),r=a=u="",o=s=i=l="";while(f<e.length);return c},u=function(){for(var e=arguments[0],n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])}return e},o=function(e,t,a,s){"function"==typeof a&&(s=a,a={}),a.cache=a.cache||!1,a.data=a.data||{},a.headers=a.headers||{},a.jsonp=a.jsonp||!1,a.async=void 0===a.async?!0:a.async;var i,l=u({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},o.headers,a.headers);if(i="application/json"===l["content-type"]?JSON.stringify(a.data):r(a.data),"GET"===e){var c=[];if(i&&(c.push(i),i=null),a.cache||c.push("_="+(new Date).getTime()),a.jsonp&&(c.push("callback="+a.jsonp),c.push("jsonp="+a.jsonp)),c=c.join("&"),c.length>1&&(t+=t.indexOf("?")>-1?"&"+c:"?"+c),a.jsonp){var f=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=t,void f.appendChild(m)}}n(function(n,r){if(n)return s(n);r.open(e,t,a.async);for(var u in l)l.hasOwnProperty(u)&&r.setRequestHeader(u,l[u]);r.onreadystatechange=function(){if(4===r.readyState){var e=r.responseText||"";if(!s)return;s(r.status,{text:function(){return e},json:function(){return JSON.parse(e)}})}},r.send(i)})},s={authBasic:function(e,n){o.headers.Authorization="Basic "+a(e+":"+n)},connect:function(e,n,r){return o("CONNECT",e,n,r)},del:function(e,n,r){return o("DELETE",e,n,r)},get:function(e,n,r){return o("GET",e,n,r)},head:function(e,n,r){return o("HEAD",e,n,r)},headers:function(e){o.headers=e||{}},isAllowed:function(e,n,r){this.options(e,function(e,t){r(-1!==t.text().indexOf(n))})},options:function(e,n,r){return o("OPTIONS",e,n,r)},patch:function(e,n,r){return o("PATCH",e,n,r)},post:function(e,n,r){return o("POST",e,n,r)},put:function(e,n,r){return o("PUT",e,n,r)},trace:function(e,n,r){return o("TRACE",e,n,r)}},i=e.type?e.type.toLowerCase():"get";s[i](e.url,e,function(n,r){200===n||0===n&&r.text()?e.success(r.json(),n,null):e.error(r.text(),n,null)})}function u(e,n){"function"==typeof e&&(n=e,e={}),e=e||{},z.extend(B,e),delete B.fixLng,"string"==typeof B.ns&&(B.ns={namespaces:[B.ns],defaultNs:B.ns}),"string"==typeof B.fallbackNS&&(B.fallbackNS=[B.fallbackNS]),("string"==typeof B.fallbackLng||"boolean"==typeof B.fallbackLng)&&(B.fallbackLng=[B.fallbackLng]),B.interpolationPrefixEscaped=z.regexEscape(B.interpolationPrefix),B.interpolationSuffixEscaped=z.regexEscape(B.interpolationSuffix),B.lng||(B.lng=z.detectLanguage()),F=z.toLanguages(B.lng),P=F[0],z.log("currentLng set to: "+P),B.useCookie&&z.cookie.read(B.cookieName)!==P&&z.cookie.create(B.cookieName,P,B.cookieExpirationTime,B.cookieDomain),B.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localstorage&&window.localStorage.setItem("i18next_lng",P);var r=S;e.fixLng&&(r=function(e,n){return n=n||{},n.lng=n.lng||r.lng,S(e,n)},r.lng=P),K.setCurrentLng(P),A&&B.setJqueryExt&&b();var t;if(A&&A.Deferred&&(t=A.Deferred()),!B.resStore){var a=z.toLanguages(B.lng);"string"==typeof B.preload&&(B.preload=[B.preload]);for(var u=0,o=B.preload.length;o>u;u++)for(var s=z.toLanguages(B.preload[u]),i=0,l=s.length;l>i;i++)a.indexOf(s[i])<0&&a.push(s[i]);return _.sync.load(a,B,function(e,a){E=a,R=!0,n&&n(r),t&&t.resolve(r)}),t?t.promise():void 0}return E=B.resStore,R=!0,n&&n(r),t&&t.resolve(r),t?t.promise():void 0}function o(e,n){"string"==typeof e&&(e=[e]);for(var r=0,t=e.length;t>r;r++)B.preload.indexOf(e[r])<0&&B.preload.push(e[r]);return u(n)}function s(e,n,r,t){"string"!=typeof n?(r=n,n=B.ns.defaultNs):B.ns.namespaces.indexOf(n)<0&&B.ns.namespaces.push(n),E[e]=E[e]||{},E[e][n]=E[e][n]||{},t?z.deepExtend(E[e][n],r):z.extend(E[e][n],r)}function i(e,n){"string"!=typeof n&&(n=B.ns.defaultNs),E[e]=E[e]||{},E[e][n]={}}function l(e,n,r,t){"string"!=typeof n?(resource=n,n=B.ns.defaultNs):B.ns.namespaces.indexOf(n)<0&&B.ns.namespaces.push(n),E[e]=E[e]||{},E[e][n]=E[e][n]||{};for(var a=r.split(B.keyseparator),u=0,o=E[B.lng][n];a[u];)u==a.length-1?o[a[u]]=t:(null==o[a[u]]&&(o[a[u]]={}),o=o[a[u]]),u++}function c(e,n,r){"string"!=typeof n?(resource=n,n=B.ns.defaultNs):B.ns.namespaces.indexOf(n)<0&&B.ns.namespaces.push(n);for(var t in r)"string"==typeof r[t]&&l(e,n,t,r[t])}function f(e){B.ns.defaultNs=e}function m(e,n){p([e],n)}function p(e,n){var r={dynamicLoad:B.dynamicLoad,resGetPath:B.resGetPath,getAsync:B.getAsync,customLoad:B.customLoad,ns:{namespaces:e,defaultNs:""}},t=z.toLanguages(B.lng);"string"==typeof B.preload&&(B.preload=[B.preload]);for(var a=0,u=B.preload.length;u>a;a++)for(var o=z.toLanguages(B.preload[a]),s=0,i=o.length;i>s;s++)t.indexOf(o[s])<0&&t.push(o[s]);for(var l=[],c=0,f=t.length;f>c;c++){var m=!1,p=E[t[c]];if(p)for(var d=0,g=e.length;g>d;d++)p[e[d]]||(m=!0);else m=!0;m&&l.push(t[c])}l.length?_.sync._fetch(l,r,function(r,t){var a=e.length*l.length;z.each(e,function(e,r){B.ns.namespaces.indexOf(r)<0&&B.ns.namespaces.push(r),z.each(l,function(e,u){E[u]=E[u]||{},E[u][r]=t[u][r],a--,0===a&&n&&(B.useLocalStorage&&_.sync._storeLocal(E),n())})})}):n&&n()}function d(e,n,r){return"function"==typeof n?(r=n,n={}):n||(n={}),n.lng=e,u(n,r)}function g(){return P}function b(){function e(e,n,r){if(0!==n.length){var t="text";if(0===n.indexOf("[")){var a=n.split("]");n=a[1],t=a[0].substr(1,a[0].length-1)}n.indexOf(";")===n.length-1&&(n=n.substr(0,n.length-2));var u;if("html"===t)u=B.defaultValueFromContent?A.extend({defaultValue:e.html()},r):r,e.html(A.t(n,u));else if("text"===t)u=B.defaultValueFromContent?A.extend({defaultValue:e.text()},r):r,e.text(A.t(n,u));else if("prepend"===t)u=B.defaultValueFromContent?A.extend({defaultValue:e.html()},r):r,e.prepend(A.t(n,u));else if("append"===t)u=B.defaultValueFromContent?A.extend({defaultValue:e.html()},r):r,e.append(A.t(n,u));else if(0===t.indexOf("data-")){var o=t.substr("data-".length);u=B.defaultValueFromContent?A.extend({defaultValue:e.data(o)},r):r;var s=A.t(n,u);e.data(o,s),e.attr(t,s)}else u=B.defaultValueFromContent?A.extend({defaultValue:e.attr(t)},r):r,e.attr(t,A.t(n,u))}}function n(n,r){var t=n.attr(B.selectorAttr);if(t||"undefined"==typeof t||t===!1||(t=n.text()||n.val()),t){var a=n,u=n.data("i18n-target");if(u&&(a=n.find(u)||n),r||B.useDataAttrOptions!==!0||(r=n.data("i18n-options")),r=r||{},t.indexOf(";")>=0){var o=t.split(";");A.each(o,function(n,t){""!==t&&e(a,t,r)})}else e(a,t,r);B.useDataAttrOptions===!0&&n.data("i18n-options",r)}}A.t=A.t||S,A.fn.i18n=function(e){return this.each(function(){n(A(this),e);var r=A(this).find("["+B.selectorAttr+"]");r.each(function(){n(A(this),e)})})}}function h(e,n,r,t){if(!e)return e;if(t=t||n,e.indexOf(t.interpolationPrefix||B.interpolationPrefix)<0)return e;var a=t.interpolationPrefix?z.regexEscape(t.interpolationPrefix):B.interpolationPrefixEscaped,u=t.interpolationSuffix?z.regexEscape(t.interpolationSuffix):B.interpolationSuffixEscaped,o="HTML"+u,s=n.replace&&"object"==typeof n.replace?n.replace:n;return z.each(s,function(n,s){var i=r?r+B.keyseparator+n:n;"object"==typeof s&&null!==s?e=h(e,s,i,t):t.escapeInterpolation||B.escapeInterpolation?(e=e.replace(new RegExp([a,i,o].join(""),"g"),z.regexReplacementEscape(s)),e=e.replace(new RegExp([a,i,u].join(""),"g"),z.regexReplacementEscape(z.escape(s)))):e=e.replace(new RegExp([a,i,u].join(""),"g"),z.regexReplacementEscape(s))}),e}function y(e,n){var r=",",t="{",a="}",u=z.extend({},n);for(delete u.postProcess;-1!=e.indexOf(B.reusePrefix)&&(M++,!(M>B.maxRecursion));){var o=e.lastIndexOf(B.reusePrefix),s=e.indexOf(B.reuseSuffix,o)+B.reuseSuffix.length,i=e.substring(o,s),l=i.replace(B.reusePrefix,"").replace(B.reuseSuffix,"");if(o>=s)return z.error("there is an missing closing in following translation value",e),"";if(-1!=l.indexOf(r)){var c=l.indexOf(r);if(-1!=l.indexOf(t,c)&&-1!=l.indexOf(a,c)){var f=l.indexOf(t,c),m=l.indexOf(a,f)+a.length;try{u=z.extend(u,JSON.parse(l.substring(f,m))),l=l.substring(0,c)}catch(p){}}}var d=O(l,u);e=e.replace(i,z.regexReplacementEscape(d))}return e}function v(e){return e.context&&("string"==typeof e.context||"number"==typeof e.context)}function N(e,n){return void 0!==e.count&&"string"!=typeof e.count&&K.needsPlural(n,e.count)}function x(e){return void 0!==e.indefinite_article&&"string"!=typeof e.indefinite_article&&e.indefinite_article}function k(e,n){n=n||{};var r=w(e,n),t=j(e,n);return void 0!==t||t===r}function S(e,n){return n=n||{},R?(M=0,O.apply(null,arguments)):(z.log("i18next not finished initialization. you might have called t function before loading resources finished."),n.defaultValue||"")}function w(e,n){return void 0!==n.defaultValue?n.defaultValue:e}function L(){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);return{postProcess:"sprintf",sprintf:e}}function O(e,n){if(n&&"object"!=typeof n?"sprintf"===B.shortcutFunction?n=L.apply(null,arguments):"defaultValue"===B.shortcutFunction&&(n={defaultValue:n}):n=n||{},void 0===e||null===e||""===e)return"";"string"==typeof e&&(e=[e]);var r=e[0];if(e.length>1)for(var t=0;t<e.length&&(r=e[t],!k(r,n));t++);var a,u=w(r,n),o=j(r,n),s=n.lng?z.toLanguages(n.lng,n.fallbackLng):F,i=n.ns||B.ns.defaultNs;r.indexOf(B.nsseparator)>-1&&(a=r.split(B.nsseparator),i=a[0],r=a[1]),void 0===o&&B.sendMissing&&"function"==typeof B.missingKeyHandler&&(n.lng?B.missingKeyHandler(s[0],i,r,u,s):B.missingKeyHandler(B.lng,i,r,u,s));var l=n.postProcess||B.postProcess;void 0!==o&&l&&G[l]&&(o=G[l](o,r,n));var c=u;if(u.indexOf(B.nsseparator)>-1&&(a=u.split(B.nsseparator),c=a[1]),c===r&&B.parseMissingKey&&(u=B.parseMissingKey(u)),void 0===o&&(u=h(u,n),u=y(u,n),l&&G[l])){var f=w(r,n);o=G[l](f,r,n)}return void 0!==o?o:u}function j(e,n){n=n||{};var r,t,a=w(e,n),u=F;if(!E)return a;if("cimode"===u[0].toLowerCase())return a;if(n.lng&&(u=z.toLanguages(n.lng,n.fallbackLng),!E[u[0]])){var o=B.getAsync;B.getAsync=!1,_.sync.load(u,B,function(e,n){z.extend(E,n),B.getAsync=o})}var s=n.ns||B.ns.defaultNs;if(e.indexOf(B.nsseparator)>-1){var i=e.split(B.nsseparator);s=i[0],e=i[1]}if(v(n)){r=z.extend({},n),delete r.context,r.defaultValue=B.contextNotFound;var l=s+B.nsseparator+e+"_"+n.context;if(t=S(l,r),t!=B.contextNotFound)return h(t,{context:n.context})}if(N(n,u[0])){r=z.extend({},n),delete r.count,r.defaultValue=B.pluralNotFound;var c=s+B.nsseparator+e+B.pluralSuffix,f=K.get(u[0],n.count);if(f>=0?c=c+"_"+f:1===f&&(c=s+B.nsseparator+e),t=S(c,r),t!=B.pluralNotFound)return h(t,{count:n.count,interpolationPrefix:n.interpolationPrefix,interpolationSuffix:n.interpolationSuffix})}if(x(n)){var m=z.extend({},n);delete m.indefinite_article,m.defaultValue=B.indefiniteNotFound;var p=s+B.nsseparator+e+(n.count&&!N(n,u[0])||!n.count?B.indefiniteSuffix:"");if(t=S(p,m),t!=B.indefiniteNotFound)return t}for(var d,g=e.split(B.keyseparator),b=0,k=u.length;k>b&&void 0===d;b++){for(var L=u[b],T=0,P=E[L]&&E[L][s];g[T];)P=P&&P[g[T]],T++;if(void 0!==P){var C=Object.prototype.toString.apply(P);if("string"==typeof P)P=h(P,n),P=y(P,n);else if("[object Array]"!==C||B.returnObjectTrees||n.returnObjectTrees){if(null===P&&B.fallbackOnNull===!0)P=void 0;else if(null!==P)if(B.returnObjectTrees||n.returnObjectTrees){if("[object Number]"!==C&&"[object Function]"!==C&&"[object RegExp]"!==C){var A="[object Array]"===C?[]:{};z.each(P,function(r){A[r]=O(s+B.nsseparator+e+B.keyseparator+r,n)}),P=A}}else B.objectTreeKeyHandler&&"function"==typeof B.objectTreeKeyHandler?P=B.objectTreeKeyHandler(e,P,L,s,n):(P="key '"+s+":"+e+" ("+L+")' returned an object instead of string.",z.log(P))}else P=P.join("\n"),P=h(P,n),P=y(P,n);"string"==typeof P&&""===P.trim()&&B.fallbackOnEmpty===!0&&(P=void 0),d=P}}if(void 0===d&&!n.isFallbackLookup&&(B.fallbackToDefaultNS===!0||B.fallbackNS&&B.fallbackNS.length>0)){if(n.isFallbackLookup=!0,B.fallbackNS.length){for(var M=0,R=B.fallbackNS.length;R>M;M++)if(d=j(B.fallbackNS[M]+B.nsseparator+e,n)){var I=d.indexOf(B.nsseparator)>-1?d.split(B.nsseparator)[1]:d,D=a.indexOf(B.nsseparator)>-1?a.split(B.nsseparator)[1]:a;if(I!==D)break}}else d=j(e,n);n.isFallbackLookup=!1}return d}function T(){var e,n=[];if("undefined"!=typeof window&&(!function(){for(var e=window.location.search.substring(1),r=e.split("&"),t=0;t<r.length;t++){var a=r[t].indexOf("=");if(a>0){var u=r[t].substring(0,a),o=r[t].substring(a+1);n[u]=o}}}(),n[B.detectLngQS]&&(e=n[B.detectLngQS])),!e&&"undefined"!=typeof document&&B.useCookie){var r=z.cookie.read(B.cookieName);r&&(e=r)}return!e&&"undefined"!=typeof document&&window.localstorage&&B.detectLngFromLocalStorage&&(e=window.localStorage.getItem("i18next_lng")),e||"undefined"==typeof navigator||(e=navigator.language?navigator.language:navigator.userLanguage),e||(e=B.fallbackLng[0]),e}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(null==this)throw new TypeError;var n=Object(this),r=n.length>>>0;if(0===r)return-1;var t=0;if(arguments.length>0&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&1/0!=t&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),t>=r)return-1;for(var a=t>=0?t:Math.max(r-Math.abs(t),0);r>a;a++)if(a in n&&n[a]===e)return a;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){"use strict";if(null==this)throw new TypeError;var n=Object(this),r=n.length>>>0;if(0===r)return-1;var t=r;arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&t!=1/0&&t!=-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))));for(var a=t>=0?Math.min(t,r-1):r-Math.abs(t);a>=0;a--)if(a in n&&n[a]===e)return a;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var P,C=this,A=C.jQuery||C.Zepto,_={},E={},M=0,F=[],R=!1,I={};if("undefined"!=typeof module&&module.exports){if(!A)try{A=require("jquery")}catch(D){}A&&(A.i18n=A.i18n||_),module.exports=_}else A&&(A.i18n=A.i18n||_),C.i18n=C.i18n||_;I={load:function(e,n,r){n.useLocalStorage?I._loadLocal(e,n,function(t,a){for(var u=[],o=0,s=e.length;s>o;o++)a[e[o]]||u.push(e[o]);u.length>0?I._fetch(u,n,function(e,n){z.extend(a,n),I._storeLocal(n),r(null,a)}):r(null,a)}):I._fetch(e,n,function(e,n){r(null,n)})},_loadLocal:function(e,n,r){var t={},a=(new Date).getTime();if(window.localStorage){var u=e.length;z.each(e,function(e,o){var s=window.localStorage.getItem("res_"+o);s&&(s=JSON.parse(s),s.i18nStamp&&s.i18nStamp+n.localStorageExpirationTime>a&&(t[o]=s)),u--,0===u&&r(null,t)})}},_storeLocal:function(e){if(window.localStorage)for(var n in e)e[n].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+n,JSON.stringify(e[n]))},_fetch:function(e,n,r){var t=n.ns,a={};if(n.dynamicLoad){var u=function(e,n){r(null,n)};if("function"==typeof n.customLoad)n.customLoad(e,t.namespaces,n,u);else{var o=h(n.resGetPath,{lng:e.join("+"),ns:t.namespaces.join("+")});z.ajax({url:o,success:function(e){z.log("loaded: "+o),u(null,e)},error:function(e,n,r){z.log("failed loading: "+o),u("failed loading resource.json error: "+r)},dataType:"json",async:n.getAsync})}}else{var s,i=t.namespaces.length*e.length;z.each(t.namespaces,function(t,u){z.each(e,function(e,t){var o=function(e,n){e&&(s=s||[],s.push(e)),a[t]=a[t]||{},a[t][u]=n,i--,0===i&&r(s,a)};"function"==typeof n.customLoad?n.customLoad(t,u,n,o):I._fetchOne(t,u,n,o)})})}},_fetchOne:function(e,n,r,t){var a=h(r.resGetPath,{lng:e,ns:n});z.ajax({url:a,success:function(e){z.log("loaded: "+a),t(null,e)},error:function(e,n,r){if(n&&200==n||e&&e.status&&200==e.status)z.error("There is a typo in: "+a);else if(n&&404==n||e&&e.status&&404==e.status)z.log("Does not exist: "+a);else{var u=n?n:e&&e.status?e.status:null;z.log(u+" when loading "+a)}t(r,{})},dataType:"json",async:r.getAsync})},postMissing:function(e,n,r,t,a){var u={};u[r]=t;var o=[];if("fallback"===B.sendMissingTo&&B.fallbackLng[0]!==!1)for(var s=0;s<B.fallbackLng.length;s++)o.push({lng:B.fallbackLng[s],url:h(B.resPostPath,{lng:B.fallbackLng[s],ns:n})});else if("current"===B.sendMissingTo||"fallback"===B.sendMissingTo&&B.fallbackLng[0]===!1)o.push({lng:e,url:h(B.resPostPath,{lng:e,ns:n})});else if("all"===B.sendMissingTo)for(var s=0,i=a.length;i>s;s++)o.push({lng:a[s],url:h(B.resPostPath,{lng:a[s],ns:n})});for(var l=0,c=o.length;c>l;l++){var f=o[l];z.ajax({url:f.url,type:B.sendType,data:u,success:function(){z.log("posted missing key '"+r+"' to: "+f.url);for(var e=r.split("."),a=0,u=E[f.lng][n];e[a];)u=u[e[a]]=a===e.length-1?t:u[e[a]]||{},a++},error:function(){z.log("failed posting missing key '"+r+"' to: "+f.url)},dataType:"json",async:B.postAsync})}}};var B={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:"translation",fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:I.postMissing,shortcutFunction:"sprintf"},H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},V={create:function(e,n,r,t){var a;if(r){var u=new Date;u.setTime(u.getTime()+6e4*r),a="; expires="+u.toGMTString()}else a="";t=t?"domain="+t+";":"",document.cookie=e+"="+n+a+";"+t+"path=/"},read:function(e){for(var n=e+"=",r=document.cookie.split(";"),t=0;t<r.length;t++){for(var a=r[t];" "==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(n))return a.substring(n.length,a.length)}return null},remove:function(e){this.create(e,"",-1)}},q={create:function(){},read:function(){return null},remove:function(){}},z={extend:A?A.extend:e,deepExtend:n,each:A?A.each:r,ajax:A?A.ajax:"undefined"!=typeof document?a:function(){},cookie:"undefined"!=typeof document?V:q,detectLanguage:T,escape:t,log:function(e){B.debug&&"undefined"!=typeof console&&console.log(e)},error:function(e){"undefined"!=typeof console&&console.error(e)},getCountyIndexOfLng:function(e){var n=0;return("nb-NO"===e||"nn-NO"===e)&&(n=1),n},toLanguages:function(e){var n=this.log,r=[],t=B.lngWhitelist||!1,a=function(e){!t||t.indexOf(e)>-1?r.push(e):n("rejecting non-whitelisted language: "+e)};if("string"==typeof e&&e.indexOf("-")>-1){var u=e.split("-");e=B.lowerCaseLng?u[0].toLowerCase()+"-"+u[1].toLowerCase():u[0].toLowerCase()+"-"+u[1].toUpperCase(),"unspecific"!==B.load&&a(e),"current"!==B.load&&a(u[this.getCountyIndexOfLng(e)])}else a(e);for(var o=0;o<B.fallbackLng.length;o++)-1===r.indexOf(B.fallbackLng[o])&&B.fallbackLng[o]&&r.push(B.fallbackLng[o]);return r},regexEscape:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(e){return"string"==typeof e?e.replace(/\$/g,"$$$$"):e}};z.applyReplacement=h;var K={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(e){return Number(e>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ak:{name:"Akan",numbers:[1,2],plurals:function(e){return Number(e>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(e){return Number(e>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(e){return Number(1!=e)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(e){return Number(1!=e)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(e){return Number(e>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(e){return Number(1!=e)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},de:{name:"German",numbers:[1,2],plurals:function(e){return Number(1!=e)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(e){return Number(1!=e)}},en:{name:"English",numbers:[1,2],plurals:function(e){return Number(1!=e)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(e){return Number(1!=e)}},es:{name:"Spanish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},et:{name:"Estonian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},eu:{name:"Basque",numbers:[1,2],plurals:function(e){return Number(1!=e)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(e){return Number(e>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(e){return Number(1!=e)}},fr:{name:"French",numbers:[1,2],plurals:function(e){return Number(e>=2)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(e){return Number(1==e?0:2==e?1:7>e?2:11>e?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&20>e?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(e){return Number(1!=e)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(e){return Number(1!=e)}},gun:{name:"Gun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(e){return Number(1!=e)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(e){return Number(1!=e)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(e){return Number(1!=e)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(e){return Number(1!=e)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(e){return Number(1!=e%10||11==e%100)}},it:{name:"Italian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(e){return Number(0!==e)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(e){return Number(1==e?0:2==e?1:3==e?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(e){return Number(e>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&(10>e%100||e%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(e){return Number(1==e%10&&11!=e%100?0:0!==e?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(e){return Number(1!=e)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(e){return Number(e>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(e){return Number(e>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(e){return Number(e>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(e){return Number(1==e||1==e%10?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(e){return Number(1!=e)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(e){return Number(1==e?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(e){return Number(1==e?0:0===e||e%100>1&&11>e%100?1:e%100>10&&20>e%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(e){return Number(1!=e)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(e){return Number(1!=e)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(e){return Number(1!=e)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(e){return Number(1!=e)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(e){return Number(1!=e)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(e){return Number(1!=e)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(e){return Number(e>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(e){return Number(1!=e)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(e){return Number(1!=e)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(e){return Number(1!=e)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(e){return Number(1!=e)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(e){return Number(1!=e)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(e){return Number(1!=e)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(e){return Number(1==e?0:0===e||e%100>0&&20>e%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(e){return Number(1!=e)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(e){return Number(1!=e)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(e){return Number(1!=e)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(e){return Number(1==e%100?1:2==e%100?2:3==e%100||4==e%100?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(e){return Number(1!=e)}},son:{name:"Songhay",numbers:[1,2],plurals:function(e){return Number(1!=e)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(e){return Number(1!=e)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(e){return Number(1!=e)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(e){return Number(1!=e)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(e){return Number(1!=e)}},te:{name:"Telugu",numbers:[1,2],plurals:function(e){return Number(1!=e)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(e){return Number(e>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(e){return Number(e>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(e){return Number(1!=e)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(e){return Number(e>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(e){return Number(1==e%10&&11!=e%100?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(e){return Number(1!=e)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(e){return Number(e>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(e){return Number(e>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(e){return Number(1!=e)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(e,n){K.rules[e]=n},setCurrentLng:function(e){if(!K.currentRule||K.currentRule.lng!==e){var n=e.split("-");K.currentRule={lng:e,rule:K.rules[n[0]]}}},needsPlural:function(e,n){var r,t=e.split("-");return r=K.currentRule&&K.currentRule.lng===e?K.currentRule.rule:K.rules[t[z.getCountyIndexOfLng(e)]],r&&r.numbers.length<=1?!1:1!==this.get(e,n)},get:function(e,n){function r(n,r){var t;if(t=K.currentRule&&K.currentRule.lng===e?K.currentRule.rule:K.rules[n]){var a;a=t.noAbs?t.plurals(r):t.plurals(Math.abs(r));
var u=t.numbers[a];return 2===t.numbers.length&&1===t.numbers[0]&&(2===u?u=-1:1===u&&(u=1)),u}return 1===r?"1":"-1"}var t=e.split("-");return r(t[z.getCountyIndexOfLng(e)],n)}},G={},U=function(e,n){G[e]=n},$=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function n(e,n){for(var r=[];n>0;r[--n]=e);return r.join("")}var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,t){var a,u,o,s,i,l,c,f=1,m=r.length,p="",d=[];for(u=0;m>u;u++)if(p=e(r[u]),"string"===p)d.push(r[u]);else if("array"===p){if(s=r[u],s[2])for(a=t[f],o=0;o<s[2].length;o++){if(!a.hasOwnProperty(s[2][o]))throw $('[sprintf] property "%s" does not exist',s[2][o]);a=a[s[2][o]]}else a=s[1]?t[s[1]]:t[f++];if(/[^s]/.test(s[8])&&"number"!=e(a))throw $("[sprintf] expecting number but found %s",e(a));switch(s[8]){case"b":a=a.toString(2);break;case"c":a=String.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=s[7]?a.toExponential(s[7]):a.toExponential();break;case"f":a=s[7]?parseFloat(a).toFixed(s[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=String(a))&&s[7]?a.substring(0,s[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(s[8])&&s[3]&&a>=0?"+"+a:a,l=s[4]?"0"==s[4]?"0":s[4].charAt(1):" ",c=s[6]-String(a).length,i=s[6]?n(l,c):"",d.push(s[5]?a+i:i+a)}return d.join("")},r.cache={},r.parse=function(e){for(var n=e,r=[],t=[],a=0;n;){if(null!==(r=/^[^\x25]+/.exec(n)))t.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(n)))t.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw"[sprintf] huh?";if(r[2]){a|=1;var u=[],o=r[2],s=[];if(null===(s=/^([a-z_][a-z_\d]*)/i.exec(o)))throw"[sprintf] huh?";for(u.push(s[1]);""!==(o=o.substring(s[0].length));)if(null!==(s=/^\.([a-z_][a-z_\d]*)/i.exec(o)))u.push(s[1]);else{if(null===(s=/^\[(\d+)\]/.exec(o)))throw"[sprintf] huh?";u.push(s[1])}r[2]=u}else a|=2;if(3===a)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";t.push(r)}n=n.substring(r[0].length)}return t},r}(),J=function(e,n){return n.unshift(e),$.apply(null,n)};U("sprintf",function(e,n,r){return r.sprintf?"[object Array]"===Object.prototype.toString.apply(r.sprintf)?J(e,r.sprintf):"object"==typeof r.sprintf?$(e,r.sprintf):e:e}),_.init=u,_.setLng=d,_.preload=o,_.addResourceBundle=s,_.addResource=l,_.addResources=c,_.removeResourceBundle=i,_.loadNamespace=m,_.loadNamespaces=p,_.setDefaultNamespace=f,_.t=S,_.translate=S,_.exists=k,_.detectLanguage=z.detectLanguage,_.pluralExtensions=K,_.sync=I,_.functions=z,_.lng=g,_.addPostProcessor=U,_.options=B}(),function(e){"use strict";window.appStartTime=new Date,i18n.init({lng:"en"}),window.i18n=i18n;var n=e.querySelector("#app");n.appTitle="Your Priorities",n.user=null,n.previousSearches=[],n.showSearch=!1,n.showBack=!1,n.backPath=null,n.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},n.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(n){var r=e.querySelector("#mainToolbar .app-name"),t=e.querySelector("#mainToolbar .middle-container"),a=e.querySelector("#mainToolbar .bottom-container"),u=n.detail,o=u.height-u.condensedHeight,s=Math.min(1,u.y/o),i=.5,l=Math.max(i,(o-u.y)/(o/(1-i))+i),c=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",t),Polymer.Base.transform("scale("+c+") translateZ(0)",a),Polymer.Base.transform("scale("+l+") translateZ(0)",r)}),n.onDataRouteClick=function(){var n=e.querySelector("#paperDrawerPanel");n.narrow&&n.closeDrawer()},n.openEdit=function(){var r=e.querySelector("#userEdit");r.open("edit",{userId:n.user.id})},n.onChangeHeader=function(r,t){n.headerTitle=e.title=t.headerTitle,n.headerDescription=t.headerDescription,t.enableSearch?this.showSearch=!0:this.showSearch=!1,t.backPath?(this.showBack=!0,this.backPath=t.backPath):(this.showBack=!1,this.backPath=null)},n.goBack=function(e,n){this.backPath&&page(this.backPath)},n.onUserChanged=function(e,r){r?n.user=r:n.user=null},n._onSearch=function(r){n.toggleSearch(),this.unshift("previousSearches",r.detail.value);var t=e.querySelector("#ideasFilter");t&&t.searchFor(r.detail.value)},n.toggleSearch=function(){n.$.search.toggle()},n.scrollPageToTop=function(){e.getElementById("mainArea").scroller.scrollTop=0}}(document);