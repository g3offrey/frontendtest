(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f64":function(e,t,n){"use strict";n("4359")},4359:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container"},o={class:"chessboard-container"},a={class:"sidebar-container"};function u(e,t,n,u,i,l){var s=Object(r["o"])("Sidebar");return Object(r["i"])(),Object(r["d"])("main",c,[Object(r["g"])("div",o,[Object(r["g"])(u["Chessboard"],{selectedSquare:u.lastSelection,onOnSquareSelection:u.handleChessBoardSquareSelection},null,8,["selectedSquare","onOnSquareSelection"])]),Object(r["g"])("div",a,[Object(r["g"])(s,{selectedSquares:u.selectedSquares,onOnSquareSelectionChange:u.handleSelectionChange},null,8,["selectedSquares","onOnSquareSelectionChange"])])])}n("99af");var i=Object(r["r"])("data-v-033650d7"),l=i((function(e,t,n,c,o,a){return Object(r["i"])(),Object(r["d"])("svg",{class:"chessboard",viewBox:"0 0 ".concat(10*c.CHESSBOARD_SIZE," ").concat(10*c.CHESSBOARD_SIZE),xmlns:"http://www.w3.org/2000/svg"},[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(c.CHESSBOARD_SIZE,(function(e,t){return Object(r["i"])(),Object(r["d"])(r["a"],{key:t},[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(c.CHESSBOARD_SIZE,(function(e,n){return Object(r["i"])(),Object(r["d"])("rect",{key:"".concat(t," - ").concat(n),class:["square",{"square-dark":c.isGridSquareDark({column:t,row:n}),"square-selected":c.isGridSquareSelected({column:t,row:n})}],x:10*t,y:10*n,onClick:function(e){return c.handleGridSquareSelection({column:t,row:n})},height:"10",width:"10","data-testid":c.getTestId({column:t,row:n})},null,10,["x","y","onClick","data-testid"])})),128))],64)})),128))],8,["viewBox"])})),s=(n("a15b"),n("3835"));function d(e,t){var n=t.emit,c=8,o=Object(r["b"])((function(){return u(e.selectedSquare)}));function a(e){var t=e.column,n=e.row,r="abcdefghijlmnopqrstuvwxyz";return[r[t],c-n]}function u(e){var t=Object(s["a"])(e,2),n=t[0],r=t[1];if(!n||!r)return{column:null,row:null};var o="abcdefghijlmnopqrstuvwxyz";return{column:o.indexOf(n),row:c-r}}function i(e){var t=e.column,n=e.row;return t%2===n%2}function l(e){var t=e.column,n=e.row;return o.value.column===t&&o.value.row===n}function d(e){var t=e.column,r=e.row,c=a({column:t,row:r});n("onSquareSelection",c)}function f(e){var t=e.column,n=e.row,r=a({column:t,row:n});return"square-".concat(r.join(""))}return{CHESSBOARD_SIZE:c,selectedGridSquare:o,isGridSquareDark:i,isGridSquareSelected:l,getTestId:f,handleGridSquareSelection:d}}var f={props:{onSquareSelection:Function,selectedSquare:Array}};f.setup=d;var b=f;n("d5d8");b.render=l,b.__scopeId="data-v-033650d7";var v=b,O=Object(r["r"])("data-v-6f93a63a");Object(r["k"])("data-v-6f93a63a");var S={class:"sidebar"},j={key:0,class:"controls"},p=Object(r["f"])("⃔"),h=Object(r["f"])("⃕"),g=Object(r["g"])("h3",null,"Moves :",-1),q={class:"selection-list-wrapper"},w={ref:"$selectionList",class:"selection-list"};Object(r["j"])();var m=O((function(e,t,n,c,o,a){var u,i=Object(r["o"])("Button");return Object(r["i"])(),Object(r["d"])("aside",S,[(null===(u=n.selectedSquares)||void 0===u?void 0:u.length)?(Object(r["i"])(),Object(r["d"])("div",j,[Object(r["g"])(i,{onClick:c.goToPreviousSelection,"data-testid":"previous-selection"},{default:O((function(){return[p]})),_:1},8,["onClick"]),Object(r["g"])(i,{onClick:c.goToNextSelection,"data-testid":"next-selection"},{default:O((function(){return[h]})),_:1},8,["onClick"])])):Object(r["e"])("",!0),g,Object(r["g"])("div",q,[Object(r["g"])("ol",w,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(n.selectedSquares,(function(e,t){return Object(r["i"])(),Object(r["d"])("li",{class:{active:t===c.activeIndex},key:t,"data-testid":"selection-".concat(t)},Object(r["p"])(e.join("")),11,["data-testid"])})),128))],512)])])})),y=Object(r["r"])("data-v-a36efc18");Object(r["k"])("data-v-a36efc18");var C={class:"button",type:"button"};Object(r["j"])();var x=y((function(e,t,n,c,o,a){return Object(r["i"])(),Object(r["d"])("button",C,[Object(r["n"])(e.$slots,"default")])}));n("0f64");const _={};_.render=x,_.__scopeId="data-v-a36efc18";var k=_;function I(e,t){var n=t.emit,c=Object(r["l"])(a()||0),o=Object(r["l"])(null);function a(){var t;return(null===(t=e.selectedSquares)||void 0===t?void 0:t.length)-1}function u(){if(0!==c.value){c.value--;var t=e.selectedSquares[c.value];n("onSquareSelectionChange",t)}}function i(){if(!(c.value>=a())){c.value++;var t=e.selectedSquares[c.value];n("onSquareSelectionChange",t)}}return Object(r["q"])(e.selectedSquares,(function(){c.value=a()||0})),Object(r["h"])((function(){var e=o.value;e.scrollTop=e.querySelector(".active").offsetTop})),{activeIndex:c,$selectionList:o,goToPreviousSelection:u,goToNextSelection:i}}var B={components:{Button:k},props:{selectedSquares:Array}};B.setup=I;var E=B;n("a4c4");E.render=m,E.__scopeId="data-v-6f93a63a";var T=E;function P(){var e=Object(r["l"])([]),t=Object(r["l"])([]);function n(n){e.value=n,t.value.push(n)}function c(t){e.value=t}return{Chessboard:v,lastSelection:e,selectedSquares:t,handleChessBoardSquareSelection:n,handleSelectionChange:c}}var A={components:{Sidebar:T,Chessboard:v}};A.setup=P;var D=A;n("64be");D.render=u;var G=D;Object(r["c"])(G).mount("#app")},"5ec5":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"6ce4":function(e,t,n){},a4c4:function(e,t,n){"use strict";n("6ce4")},c894:function(e,t,n){},d5d8:function(e,t,n){"use strict";n("5ec5")}});
//# sourceMappingURL=app.3d91a305.js.map