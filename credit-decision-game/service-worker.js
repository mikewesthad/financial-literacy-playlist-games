"use strict";var precacheConfig=[["/financial-literacy-playlist-games/credit-decision-game/index.html","003fc59f9b42a09dcebf44947a358049"],["/financial-literacy-playlist-games/credit-decision-game/static/css/main.64db9b05.css","ee676846cc579894f6deadcc845385d9"],["/financial-literacy-playlist-games/credit-decision-game/static/js/main.7b63062d.js","8a2dd14f469e69c41331603cdcd3b6ec"],["/financial-literacy-playlist-games/credit-decision-game/static/media/add-icon.bd77fbab.svg","bd77fbab5a8d5c9b7088b29323b746d7"],["/financial-literacy-playlist-games/credit-decision-game/static/media/birthday.1baaed8c.gif","1baaed8c7c8e6e3a1e5360a51b46e6cf"],["/financial-literacy-playlist-games/credit-decision-game/static/media/call-icon.658e90d2.svg","658e90d2ae2593805f0fc2ac33a58d32"],["/financial-literacy-playlist-games/credit-decision-game/static/media/card-stack.36f10987.svg","36f10987d8a2967a936a55ba679e7b38"],["/financial-literacy-playlist-games/credit-decision-game/static/media/checkmark.f539dc0a.svg","f539dc0abf9f3137a58a5ea91f9c6f84"],["/financial-literacy-playlist-games/credit-decision-game/static/media/computer-2.214b79e5.gif","214b79e5518b7e5763f508df9d9a8d1b"],["/financial-literacy-playlist-games/credit-decision-game/static/media/confused.858856c3.gif","858856c3036375d9b9cd49c45b967a1f"],["/financial-literacy-playlist-games/credit-decision-game/static/media/credit-power.bd00352a.svg","bd00352a2faf24e6dd4422206500e3b1"],["/financial-literacy-playlist-games/credit-decision-game/static/media/determined.bb8de22e.gif","bb8de22ebb51700b5f4217fb2abd47f9"],["/financial-literacy-playlist-games/credit-decision-game/static/media/doodles-background.9236522d.png","9236522dd89730f4a22f0bdd791caa0b"],["/financial-literacy-playlist-games/credit-decision-game/static/media/first-bank-card.fd25ce99.svg","fd25ce99f5d30b5f5412a112b99e2146"],["/financial-literacy-playlist-games/credit-decision-game/static/media/happy.b1da09dc.gif","b1da09dced9c6623d3aeb9bd59eccd99"],["/financial-literacy-playlist-games/credit-decision-game/static/media/help-icon.1e6d3ef6.svg","1e6d3ef6b2b3a785f7691499967df98f"],["/financial-literacy-playlist-games/credit-decision-game/static/media/no-card.25282a1e.svg","25282a1eef050e856d62ef32e3c936ba"],["/financial-literacy-playlist-games/credit-decision-game/static/media/remove-icon.c6616ef5.svg","c6616ef5cc3859e1f27052cfc5ed3793"],["/financial-literacy-playlist-games/credit-decision-game/static/media/rewards-card.b77455f5.svg","b77455f59e2fb783d88e37657bbab298"],["/financial-literacy-playlist-games/credit-decision-game/static/media/save.e7866f83.gif","e7866f83fb1ac484a40ece027489dcfc"],["/financial-literacy-playlist-games/credit-decision-game/static/media/sick.8b4a609f.gif","8b4a609f3eeace00f0e3d13198e28951"],["/financial-literacy-playlist-games/credit-decision-game/static/media/vip-card.2a1daf0e.svg","2a1daf0e9dc8eb969de125789914effe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=a),i.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,i,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(i)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var i=new URL(a).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,i){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return i.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],i=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,i,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(i){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!i.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var i=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!i.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,i=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,t),e=urlsToCacheKeys.has(i));var c="/financial-literacy-playlist-games/credit-decision-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(i=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(i)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});