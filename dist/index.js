/*!
 *  name: @jswork/react-interactive-list
 *  description: An interactive, dynamic list of components with add / remove actions.
 *  homepage: https://github.com/afeiship/react-interactive-list#readme
 *  version: 1.0.1
 *  date: 2021-03-09T06:09:08.513Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactInteractiveList=t():e.ReactInteractiveList=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@jswork/noop")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@jswork/react-list")},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(3),i=n.n(a),u=n(4),c=n.n(u),l=n(0),f=n.n(l),s=n(2),p=n.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x="react-interactive-list",j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o=d(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).template=function(e){var n=e.item,r=e.index,o=t.props.template,a=t.state.value;return o({item:n,index:r,change:t.doChange,items:a},(function(){t.isLteMin||(a.splice(r,1),t.doChange(a))}))},t.doChange=function(e){var n=t.props,r=n.onChange,o=n.onValidate,a=n.min,i=n.max,u={value:e};t.setState(u,(function(){r({target:u}),t.length===a&&o({target:{value:"EQ_MIN"}}),t.length===i&&o({target:{value:"EQ_MAX"}})}))},t.state={value:e.items},t}return t=a,(n=[{key:"length",get:function(){return this.state.value.length}},{key:"isLteMin",get:function(){var e=this.props.min;return this.length<=e}},{key:"isGteMax",get:function(){var e=this.props.max;return this.length>=e}},{key:"listView",get:function(){var e=this.state.value;return p.a.createElement(i.a,{items:e,template:this.template})}},{key:"createView",get:function(){var e=this,t=this.state.value,n=this.props,r=n.templateCreate,o=n.templateDefault;return r({items:t},(function(){e.isGteMax||(t.push(o()),e.doChange(t))}))}},{key:"shouldComponentUpdate",value:function(e){var t=e.items;return t!==this.state.value&&this.setState({value:t}),!0}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.min,e.max,e.items,e.template,e.templateCreate,e.templateDefault,e.onChange,e.onValidate,h(e,["className","min","max","items","template","templateCreate","templateDefault","onChange","onValidate"]));return p.a.createElement("div",y({"data-component":x,className:c()(x,t)},n),this.listView,this.createView)}}])&&v(t.prototype,n),r&&v(t,r),a}(s.Component);j.displayName=x,j.version="1.0.1",j.propTypes={className:f.a.string,min:f.a.number,max:f.a.number,items:f.a.array,template:f.a.func,templateCreate:f.a.func,templateDefault:f.a.func,onChange:f.a.func,onValidate:f.a.func},j.defaultProps={min:1,max:10,items:[],template:o.a,templateCreate:o.a,templateDefault:o.a,onChange:o.a,onValidate:o.a};t.default=j}])}));
//# sourceMappingURL=index.js.map