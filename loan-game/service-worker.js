"use strict";var precacheConfig=[["/financial-literacy-playlist-games/loan-game/index.html","87f09a06bb59137339e2dd120c32bc6e"],["/financial-literacy-playlist-games/loan-game/static/css/main.408dc3d6.css","d9675838817a1714c3fdbf9e7d735a61"],["/financial-literacy-playlist-games/loan-game/static/js/main.1235c450.js","69f710dce468116af63f74e817e57871"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Black-Italic.0f629c96.ttf","0f629c963866f90e4ffa05550def8af3"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Black.d641109f.ttf","d641109f46a9231b7a92d6a114302a2b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Bold-Italic.02d3658b.ttf","02d3658bf349556ce8c3486c55bb703b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Bold.f5c9c1aa.ttf","f5c9c1aa2ac56e1f75b17c63c0a594bc"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraBold-Italic.8832d30f.ttf","8832d30f890da4120277ce31511440f3"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraBold.299ddfe9.ttf","299ddfe9ee671626b0fe97cd94cfbb3b"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraLight-Italic.91fc8a22.ttf","91fc8a226846c0aafdf32f1158585bee"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-ExtraLight.ebd5c800.ttf","ebd5c800e24e108dd3aeacb28e16c595"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Light-Italic.fa415a9d.ttf","fa415a9d96fefcef9dcd7c0f8938bdcb"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Light.6b562d7c.ttf","6b562d7ca359ccb3259f570bcceb4f70"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Medium-Italic.c966b862.ttf","c966b8622dc3df06f4dcb637212cd92f"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Medium.2e763f88.ttf","2e763f88811273e662c149e71ba9e984"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Regular-Italic.b1f58e1b.ttf","b1f58e1bdc559a465620e1e48d08f460"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Regular.2d4cd872.ttf","2d4cd8722065da2ac700199273325752"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-SemiBold-Italic.4bd987de.ttf","4bd987dee3441560d67deaf159d2feda"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-SemiBold.e18d3880.ttf","e18d3880935810355cd07b95337c381d"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Thin-Italic.f8708e6a.ttf","f8708e6ab83f9e2e11c2bd0c0ecf93a6"],["/financial-literacy-playlist-games/loan-game/static/media/Raleway-Thin.ebd07bb4.ttf","ebd07bb4e01077b3736004a5305ce741"],["/financial-literacy-playlist-games/loan-game/static/media/question-circle.99dd5895.svg","99dd5895c07669ed89e5e8d374be226b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),n=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var n="/financial-literacy-playlist-games/loan-game/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});