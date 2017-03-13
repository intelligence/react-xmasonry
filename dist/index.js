!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e={"data-key":this.props["data-key"],"data-width":this.props["data-width"]};return this.props["data-xkey"]&&(e["data-xkey"]=this.props["data-xkey"]),c.default.createElement("div",s({},e,{style:s({},this.props.style,t.defaultStyle),className:this.props.measured?"xblock":""}),this.props.children)}}]),t}(c.default.Component);h.defaultProps={width:1,measured:!1},h.defaultStyle={position:"absolute"},t.default=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=o(l),h=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:1,containerWidth:0},n.container=null,n.mounted=!1,n.resizeListener=null,n.debouncedResizeTimeout=0,n.debounceRate=50,n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.props.responsive&&window.addEventListener("resize",n.resizeListener=n.onResize.bind(n)),n.onResize(),n}return a(t,e),u(t,[{key:"getColumns",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){var e=this.container.getBoundingClientRect().width;return e===this.containerWidth||(this.setState({columns:this.columns=this.getColumns(e),containerWidth:this.containerWidth=e,blocks:{}}),!1)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.updateContainerWidth()&&this.measureChildren()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.resizeListener&&window.removeEventListener("resize",this.resizeListener)}},{key:"componentWillReceiveProps",value:function(e){if(e.children.length<this.props.children.length){for(var t=new Set,n={},o=0;o<e.children.length;o++)t.add(e.children[o].key);for(var r=0;r<this.props.children.length;r++)t.has(this.props.children[r].key)||(n[this.props.children[r].key]={});this.recalculatePositions(null,n)}}},{key:"componentDidUpdate",value:function(){this.updateContainerWidth()&&this.measureChildren()}},{key:"measureChildren",value:function(){for(var e={},t=0;t<this.container.children.length;t++){var n=this.container.children[t];if(void 0!==n.dataset.xkey){var o=n.getBoundingClientRect(),r=o.height;e[n.dataset.xkey]={height:Math.ceil(r)}}}Object.keys(e).length>0&&this.recalculatePositions(e)}},{key:"recalculatePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=void 0,r=Array.from({length:this.columns},function(){return 0});if(n){o={};for(var i in this.state.blocks)this.state.blocks.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(o[i]=this.state.blocks[i]);for(var a in e)e.hasOwnProperty(a)&&!n.hasOwnProperty(a)&&(o[a]=e[a])}else o=s({},this.state.blocks,e);for(var u=0;u<this.container.children.length;u++){var l=this.container.children[u];if(o.hasOwnProperty(l.dataset.key)&&(!n||!n.hasOwnProperty(l.dataset.key))){var c=+l.dataset.width||1,h=t.getBestFitColumn(r,c),d=h.col,f=h.height,p=f+o[l.dataset.key].height;o[l.dataset.key].left=this.containerWidth*d/this.columns,o[l.dataset.key].top=f;for(var y=0;y<c;++y)r[d+y]=p}}if(this.props.center&&0===r[r.length-1]){for(var v=1;0===r[r.length-1-v];++v);var b=this.containerWidth*v/this.columns/2;for(var m in o)o.hasOwnProperty(m)&&(o[m].left+=b)}this.setState({blocks:o,containerHeight:Math.max.apply(null,r)})}},{key:"onResize",value:function(){var e=this;if(this.mounted){if(this.debouncedResizeTimeout)return clearTimeout(this.debouncedResizeTimeout),void(this.debouncedResizeTimeout=setTimeout(function(){e.debouncedResizeTimeout=null,e.updateContainerWidth(e)},this.debounceRate));this.updateContainerWidth(),this.debouncedResizeTimeout=setTimeout(function(){return e.debouncedResizeTimeout=0},this.debounceRate)}}},{key:"render",value:function(){var e=this,n=0,o=Array.prototype.slice.call(this.props.children).map(function(t){var o=e.state.blocks[t.key],r=Math.min(t.props.width,e.columns);return o||++n,o?c.default.cloneElement(t,{"data-key":t.key,"data-width":r,style:{width:Math.floor(r*e.containerWidth/e.columns),height:o.height,left:Math.floor(o.left),top:o.top},measured:!0,width:r}):c.default.cloneElement(t,{"data-key":t.key,"data-width":r,"data-xkey":t.key,style:{width:Math.floor(r*e.containerWidth/e.columns),visibility:"hidden"},width:r})}),r=n?this.fixedHeight:this.fixedHeight=this.state.containerHeight;return c.default.createElement("div",{className:"xmasonry",style:s({},t.containerStyle,{height:r}),ref:function(t){return e.container=t}},o)}}],[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,o=1/0,r=0;r<e.length-t+1;++r){var i=Math.max.apply(null,e.slice(r,r+t));i<o&&(o=i,n=r)}return{col:n,height:o}}}]),t}(c.default.Component);h.propTypes={center:c.default.PropTypes.bool,responsive:c.default.PropTypes.bool,targetBlockWidth:c.default.PropTypes.number},h.defaultProps={center:!0,responsive:!0,targetBlockWidth:300},h.containerStyle={position:"relative"},t.default=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var r=n(2),i=o(r),a=n(1),s=o(a);t.XMasonry=i.default,t.XBlock=s.default,"undefined"!=typeof window&&(window.XMasonry=i.default,window.XBlock=s.default)}])});