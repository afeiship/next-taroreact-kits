/*!
 *  name: @jswork/react-interactive-list
 *  description: An interactive, dynamic list of components with add / remove actions.
 *  homepage: https://github.com/afeiship/react-interactive-list#readme
 *  version: 1.0.6
 *  date: 2021-05-15T07:42:19.558Z
 *  license: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactInteractiveList=e():t.ReactInteractiveList=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("@jswork/noop")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@jswork/react-list")},function(t,e){t.exports=require("classnames")},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(3),i=n.n(a),u=n(4),l=n.n(u),c=n(0),f=n.n(c),s=n(2),p=n.n(s);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x="react-interactive-list",j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,r,o=b(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this,t)).template=function(t){var n=t.item,r=t.index,o=e.props.template,a=e.state.value;return o({item:n,index:r,change:e.doChange,items:a},(function(){e.isLteMin||(a.splice(r,1),e.doChange(a))}))},e.doChange=function(t){var n=e.props,r=n.onChange,o=n.onValidate,a=n.min,i=n.max,u={value:t};e.setState(u,(function(){r({target:u}),e.length===a&&o({target:{value:"EQ_MIN"}}),e.length===i&&o({target:{value:"EQ_MAX"}})}))},e.notify=function(){var t=e.state.value;e.doChange(t)};var n=t.items,r=t.onInit;return e.state={value:n},r({items:n,notify:e.notify}),e}return e=a,(n=[{key:"length",get:function(){return this.state.value.length}},{key:"isLteMin",get:function(){var t=this.props.min;return this.length<=t}},{key:"isGteMax",get:function(){var t=this.props.max;return this.length>=t}},{key:"listView",get:function(){var t=this.props.virtual,e=this.state.value;return p.a.createElement(i.a,{virtual:t,items:e,template:this.template})}},{key:"createView",get:function(){var t=this,e=this.state.value,n=this.props,r=n.templateCreate,o=n.templateDefault;return r({items:e,change:this.doChange},(function(){t.isGteMax||(e.push(o()),t.doChange(e))}))}},{key:"shouldComponentUpdate",value:function(t){var e=t.items;return e!==this.state.value&&this.setState({value:e}),!0}},{key:"render",value:function(){var t=this.props,e=t.className,n=(t.min,t.max,t.virtual,t.items,t.template,t.templateCreate,t.templateDefault,t.onChange,t.onValidate,t.onInit,v(t,["className","min","max","virtual","items","template","templateCreate","templateDefault","onChange","onValidate","onInit"]));return p.a.createElement("div",y({"data-component":x,className:l()(x,e)},n),this.listView,this.createView)}}])&&h(e.prototype,n),r&&h(e,r),a}(s.Component);j.displayName=x,j.version="1.0.6",j.propTypes={className:f.a.string,min:f.a.number,max:f.a.number,virtual:f.a.bool,items:f.a.array,template:f.a.func,templateCreate:f.a.func,templateDefault:f.a.func,onChange:f.a.func,onValidate:f.a.func,onInit:f.a.func},j.defaultProps={min:1,max:10,items:[],template:o.a,templateCreate:o.a,templateDefault:o.a,onChange:o.a,onValidate:o.a,onInit:o.a};e.default=j}])}));
//# sourceMappingURL=index.js.map