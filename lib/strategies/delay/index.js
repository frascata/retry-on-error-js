"use strict";var _createClass=function(){function a(c,f){for(var d,a=0;a<f.length;a++)d=f[a],d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(c,d.key,d)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")}var Delay=function(){function b(){_classCallCheck(this,b)}return _createClass(b,null,[{key:"wait",value:function(d,a){return new Promise(function(b){setTimeout(function(){return b(a)},d)})}}]),b}();module.exports=Delay;