"use strict";var precacheConfig=[["./index.html","581c11ef6075a94cb169b31daa298f30"],["./static/css/main.c88740f7.css","e3df8a4f02cdcf559082ce4ef0704744"],["./static/js/main.6cef8516.js","ed7889a7c8bebbb9bdd2c2bc563ea018"],["./static/media/add-icon.bd77fbab.svg","bd77fbab5a8d5c9b7088b29323b746d7"],["./static/media/birthday.1baaed8c.gif","1baaed8c7c8e6e3a1e5360a51b46e6cf"],["./static/media/card-stack.36f10987.svg","36f10987d8a2967a936a55ba679e7b38"],["./static/media/checkmark.f539dc0a.svg","f539dc0abf9f3137a58a5ea91f9c6f84"],["./static/media/close-icon.fb94fa8a.svg","fb94fa8a36f9929d36358bd0d45a2f0a"],["./static/media/computer-2.214b79e5.gif","214b79e5518b7e5763f508df9d9a8d1b"],["./static/media/confused.858856c3.gif","858856c3036375d9b9cd49c45b967a1f"],["./static/media/credit-power.bd00352a.svg","bd00352a2faf24e6dd4422206500e3b1"],["./static/media/determined.bb8de22e.gif","bb8de22ebb51700b5f4217fb2abd47f9"],["./static/media/doodles-background.9236522d.png","9236522dd89730f4a22f0bdd791caa0b"],["./static/media/first-bank-card.fd25ce99.svg","fd25ce99f5d30b5f5412a112b99e2146"],["./static/media/happy.b1da09dc.gif","b1da09dced9c6623d3aeb9bd59eccd99"],["./static/media/help-icon.1e6d3ef6.svg","1e6d3ef6b2b3a785f7691499967df98f"],["./static/media/no-card.25282a1e.svg","25282a1eef050e856d62ef32e3c936ba"],["./static/media/remove-icon.c6616ef5.svg","c6616ef5cc3859e1f27052cfc5ed3793"],["./static/media/rewards-card.b77455f5.svg","b77455f59e2fb783d88e37657bbab298"],["./static/media/save.e7866f83.gif","e7866f83fb1ac484a40ece027489dcfc"],["./static/media/sick.8b4a609f.gif","8b4a609f3eeace00f0e3d13198e28951"],["./static/media/vip-card.2a1daf0e.svg","2a1daf0e9dc8eb969de125789914effe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});