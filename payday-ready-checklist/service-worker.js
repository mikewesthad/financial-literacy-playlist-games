"use strict";var precacheConfig=[["/financial-literacy-playlist-games/payday-ready-checklist/index.html","0e443d3fdc08af47d882c9aa0ae21f45"],["/financial-literacy-playlist-games/payday-ready-checklist/static/css/main.f08e1818.css","e74d0c5f9ccedd69375de9d8998ec0e3"],["/financial-literacy-playlist-games/payday-ready-checklist/static/js/main.744dbc6d.js","f89a70182878be6e2d70902c5fcfbbd5"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/cat-deposit-optimized.91fea3e9.gif","91fea3e9aa4f9562de150192709cb7a4"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_bold-webfont.50919fdd.woff","50919fdd78a928e803e2fad55a8f5559"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_bold-webfont.cfa786bd.woff2","cfa786bd4fc21bfb78a3f6cb4b00a4b2"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_light-webfont.374cfec1.woff","374cfec133031599db206bb216ef064a"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_light-webfont.3f903d96.woff2","3f903d96c4143d12dea2b7ff2db2b56f"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_regular-webfont.260104f2.woff","260104f251ab0e81b0074167e74c744e"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/kelson_sans_regular-webfont.33f5c648.woff2","33f5c648f19f9b11544dc6a7f211ceb1"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/mario-coins-optimized.9b492bfe.gif","9b492bfeb7116dd7972bb65f095fe77f"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/perfect-shot-loop-optimized.9a74e5a0.gif","9a74e5a05679ef246801b85e572ba825"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/permanent-marker-latin-400.ab4be30d.woff","ab4be30d798627be7771924d49bcecc1"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/permanent-marker-latin-400.e94e2666.woff2","e94e266662894658091d2819dc4fecec"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/protect-optimized.fe4ed97b.gif","fe4ed97b581c34fe4508875aa33c2669"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/splitting-money-optimized.ffa80698.gif","ffa806980e5a67879c62d0074584f98a"],["/financial-literacy-playlist-games/payday-ready-checklist/static/media/time-optimized.28df5573.gif","28df5573d5e185169728c4f29ee5507c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),n=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var n="/financial-literacy-playlist-games/payday-ready-checklist/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});