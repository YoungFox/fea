webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var dot = __webpack_require__(7);
	var css = __webpack_require__(13);
	var tpl = __webpack_require__(15);
	var d = __webpack_require__(16);
	// console.log($);
	var Header = function Header() {
		this.title = d.title;
	};
	
	Header.prototype = {
		constructor: Header,
		init: function init() {
			var tplFn = dot.template(tpl);
			var html = tplFn(d);
			$('body').append(html);
		},
		show: function show() {}
	};
	
	module.exports = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./header.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.header{\n\theight: 40px;\n\tbackground: #19b955;\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 40px;\n}", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var tpl = '<div class="header">{{=it.title}}</div>';
	var dot = __webpack_require__(7);
	module.exports = tpl;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var data = {
		title: '组件 #header# 的title'
	};
	module.exports = data;

/***/ }
]);
//# sourceMappingURL=../sourcemap/js/1.chunk.js.map