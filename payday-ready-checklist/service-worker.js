"use strict";var precacheConfig=[["./index.html","c2311a1730f4198f5cbc6da8b79df444"],["./static/css/main.12cd28a5.css","4f13b374af3438cddc9ead1338e16530"],["./static/js/main.036d2476.js","cd905d1f4d67aef71c15f6fd5902245f"],["./static/media/cat-deposit-optimized.91fea3e9.gif","91fea3e9aa4f9562de150192709cb7a4"],["./static/media/kelson_sans_bold-webfont.50919fdd.woff","50919fdd78a928e803e2fad55a8f5559"],["./static/media/kelson_sans_bold-webfont.cfa786bd.woff2","cfa786bd4fc21bfb78a3f6cb4b00a4b2"],["./static/media/kelson_sans_light-webfont.374cfec1.woff","374cfec133031599db206bb216ef064a"],["./static/media/kelson_sans_light-webfont.3f903d96.woff2","3f903d96c4143d12dea2b7ff2db2b56f"],["./static/media/kelson_sans_regular-webfont.260104f2.woff","260104f251ab0e81b0074167e74c744e"],["./static/media/kelson_sans_regular-webfont.33f5c648.woff2","33f5c648f19f9b11544dc6a7f211ceb1"],["./static/media/mario-coins-optimized.9b492bfe.gif","9b492bfeb7116dd7972bb65f095fe77f"],["./static/media/master-shot-optimized.2df9bb17.gif","2df9bb17af3c420e4690af8bb81c5cf7"],["./static/media/permanent-marker-latin-400.ab4be30d.woff","ab4be30d798627be7771924d49bcecc1"],["./static/media/permanent-marker-latin-400.e94e2666.woff2","e94e266662894658091d2819dc4fecec"],["./static/media/privacy-optimized.5b09f05e.gif","5b09f05ee1b8dcbf7924a155efd84eeb"],["./static/media/splitting-money-optimized.ffa80698.gif","ffa806980e5a67879c62d0074584f98a"],["./static/media/time-optimized.28df5573.gif","28df5573d5e185169728c4f29ee5507c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});