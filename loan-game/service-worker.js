"use strict";var precacheConfig=[["/financial-literacy-playlist-games/loan-game/index.html","8745938d0294b503fb9c7c21a2dc815e"],["/financial-literacy-playlist-games/loan-game/static/css/main.ad1b3321.css","ebc8d517f7236270fbc49d868d8ec50a"],["/financial-literacy-playlist-games/loan-game/static/js/main.50b23367.js","ae0bfbc17a75a2ce748da42537189537"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Black-Italic.0f629c96.ttf","0f629c963866f90e4ffa05550def8af3"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Black.d641109f.ttf","d641109f46a9231b7a92d6a114302a2b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Bold-Italic.02d3658b.ttf","02d3658bf349556ce8c3486c55bb703b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Bold.f5c9c1aa.ttf","f5c9c1aa2ac56e1f75b17c63c0a594bc"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraBold-Italic.8832d30f.ttf","8832d30f890da4120277ce31511440f3"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraBold.299ddfe9.ttf","299ddfe9ee671626b0fe97cd94cfbb3b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraLight-Italic.91fc8a22.ttf","91fc8a226846c0aafdf32f1158585bee"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraLight.ebd5c800.ttf","ebd5c800e24e108dd3aeacb28e16c595"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Light-Italic.fa415a9d.ttf","fa415a9d96fefcef9dcd7c0f8938bdcb"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Light.6b562d7c.ttf","6b562d7ca359ccb3259f570bcceb4f70"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Medium-Italic.c966b862.ttf","c966b8622dc3df06f4dcb637212cd92f"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Medium.2e763f88.ttf","2e763f88811273e662c149e71ba9e984"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Regular-Italic.b1f58e1b.ttf","b1f58e1bdc559a465620e1e48d08f460"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Regular.2d4cd872.ttf","2d4cd8722065da2ac700199273325752"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-SemiBold-Italic.4bd987de.ttf","4bd987dee3441560d67deaf159d2feda"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-SemiBold.e18d3880.ttf","e18d3880935810355cd07b95337c381d"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Thin-Italic.f8708e6a.ttf","f8708e6ab83f9e2e11c2bd0c0ecf93a6"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Thin.ebd07bb4.ttf","ebd07bb4e01077b3736004a5305ce741"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,t,n){var i=new URL(a);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],n=new URL(e,self.location),i=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var i="/financial-literacy-playlist-games/loan-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});