(this["webpackJsonpintegrated-app"]=this["webpackJsonpintegrated-app"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r);n(8),n(9);var i=function(){return Object(o.useEffect)((function(){window.addEventListener("message",(function(e){return console.log("event from parent is ===",e)}))})),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Hi I am the embedded App. I am running on port 3000"),a.a.createElement("button",{onClick:function(){window.parent.postMessage(JSON.parse('{ "key": "value", "other": 1, "another": false }'),"http://localhost:8080")}},"Click me!"),a.a.createElement("button",{onClick:function(){window.parent.postMessage("close","http://localhost:8080")}},"Close Me!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.800ae02d.chunk.js.map