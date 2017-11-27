webpackJsonp([0],{

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports) {

const whenBoolean = (x, prop) => {
  return x ? prop : ''
}

const whenFunction = (x, prop) => {
  return x() ? prop : ''
}

const classnames = input => {
  const willReturn = [];
  for(const prop in input){
    const x = input[prop]
    const xType = typeof x
    if(xType === 'boolean'){
      willReturn.push(whenBoolean(x, prop))
    }else if(xType === 'function'){
      willReturn.push(whenFunction(x, prop))
    }
  }

  return willReturn.filter(x => x !== '').join(' ')
}

exports.classnames = classnames;


/***/ }),

/***/ "./node_modules/create-action/index.js":
/***/ (function(module, exports) {

function createAction(type){
  if(arguments.length === 2){
    return {
      type: type,
      payload: arguments[1]
    }
  }  
  return payload => ({
    type,
    payload
  })
}

exports.createAction = createAction

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/notify/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".notify, .notify__info, .notify__warning, .notify__error, .notify__success, .notify__active--info, .notify__active--warning, .notify__active--error, .notify__active--success, .notify__animate-close--info, .notify__animate-close--warning, .notify__animate-close--error, .notify__animate-close--success {\n  line-height: 15vh;\n  font-size: 3.3vh;\n  text-align: center;\n}\n\n.notify__info, .notify__active--info, .notify__animate-close--info {\n  border: 1px dashed #132333;\n  background-color: #134a75;\n  color: #d8e6e7;\n}\n\n.notify__warning, .notify__active--warning, .notify__animate-close--warning {\n  border: 1px dashed #feee7d;\n  background-color: #f46f19;\n  color: #282e33;\n}\n\n.notify__error, .notify__active--error, .notify__animate-close--error {\n  border: 1px dashed #de6571;\n  background-color: #d71729;\n  color: #132333;\n}\n\n.notify__success, .notify__active--success, .notify__animate-close--success {\n  border: 1px dashed #80cbc4;\n  background-color: #2a897e;\n  color: #03111c;\n}\n\n.notify__wrapper {\n  position: absolute;\n  top: 2vh;\n  right: 2vw;\n  width: 20vw;\n  height: 15vh;\n}\n\n.notify__hidden {\n  display: none;\n}\n\n.notify__active--info {\n  -webkit-animation: animationOpen 1s;\n          animation: animationOpen 1s;\n}\n\n.notify__active--warning {\n  -webkit-animation: animationOpen 1s;\n          animation: animationOpen 1s;\n}\n\n.notify__active--error {\n  -webkit-animation: animationOpen 1s;\n          animation: animationOpen 1s;\n}\n\n.notify__active--success {\n  -webkit-animation: animationOpen 1s;\n          animation: animationOpen 1s;\n}\n\n.notify__animate-close--info {\n  -webkit-animation: animationClose 1s;\n          animation: animationClose 1s;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n}\n\n.notify__animate-close--warning {\n  -webkit-animation: animationClose 1s;\n          animation: animationClose 1s;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n}\n\n.notify__animate-close--error {\n  -webkit-animation: animationClose 1s;\n          animation: animationClose 1s;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n}\n\n.notify__animate-close--success {\n  -webkit-animation: animationClose 1s;\n          animation: animationClose 1s;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n}\n\n@-webkit-keyframes animationOpen {\n  0% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n\n  100% {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  }\n}\n\n@keyframes animationOpen {\n  0% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n\n  100% {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  }\n}\n\n@-webkit-keyframes animationClose {\n  0% {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  }\n\n  100% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n\n@keyframes animationClose {\n  0% {\n    opacity: 1;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  }\n\n  100% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/x/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".x, .x__active, .x__passive {\n  width: 20vw;\n  height: 20vw;\n}\n\n.x__active {\n    background-color: #de6571;\n  }\n\n.x__passive {\n    background-color: #3f7063;\n  }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/notify/component.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
const react_redux_1 = __webpack_require__("./node_modules/react-redux/es/index.js");
const connectNotifyStore = ({ notifyStore }) => ({ notifyStore });
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const className = `notify__${this.props.notifyStore.className}`;
        return (React.createElement("div", { className: 'notify__wrapper' },
            React.createElement("div", { className: className }, this.props.notifyStore.message)));
    }
}
exports.Notify = react_redux_1.connect(connectNotifyStore)(App);


/***/ }),

/***/ "./node_modules/notify/reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    className: 'hidden',
    message: '',
};
const reactions = {
    NOTIFY_ANIMATE_CLOSE: (state, action) => (Object.assign({}, state, { className: `animate-close--${action.notifyType}` })),
    NOTIFY_CLOSE_MESSAGE: (state, action) => (Object.assign({}, state, { className: 'hidden', message: '' })),
    NOTIFY_SET_MESSAGE: (state, action) => (Object.assign({}, state, { className: `active--${action.notifyType}`, message: action.message })),
};
exports.notifyStore = (state = initialState, action) => {
    if (Object.keys(reactions).includes(action.type)) {
        return reactions[action.type](state, action);
    }
    return state;
};


/***/ }),

/***/ "./node_modules/notify/sagas.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rambda_1 = __webpack_require__("./node_modules/rambda/dist/rambda.esm.js");
const redux_saga_1 = __webpack_require__("./node_modules/redux-saga/es/index.js");
// tslint:disable-next-line
const effects_1 = __webpack_require__("./node_modules/redux-saga/es/effects.js");
const LONG_DELAY = 2000;
const SHORT_DELAY = 1000;
function* notifyFn(payload) {
    yield effects_1.put({
        message: payload.message,
        notifyType: payload.notifyType,
        type: 'NOTIFY_SET_MESSAGE',
    });
    const ms = rambda_1.defaultTo(LONG_DELAY, payload.ms);
    yield redux_saga_1.delay(ms);
    yield effects_1.put({
        notifyType: payload.notifyType,
        type: 'NOTIFY_ANIMATE_CLOSE',
    });
    yield redux_saga_1.delay(SHORT_DELAY);
    yield effects_1.put({ type: 'NOTIFY_CLOSE_MESSAGE' });
}
function createSaga(base) {
    return function* () {
        while (true) {
            try {
                const payload = yield effects_1.take(`NOTIFY_${base.toUpperCase()}`);
                const classNameState = yield effects_1.select(rambda_1.path('notifyStore.className'));
                if (classNameState !== 'hidden') {
                    console.warn('classNameState !== "hidden', base);
                    return;
                }
                yield effects_1.call(notifyFn, rambda_1.merge(payload, { notifyType: base }));
            }
            catch (err) {
                console.log(err);
            }
        }
    };
}
const infoSaga = createSaga('info');
const warningSaga = createSaga('warning');
const errorSaga = createSaga('error');
const successSaga = createSaga('success');
function* notifySagas() {
    return yield effects_1.all([
        infoSaga(),
        warningSaga(),
        errorSaga(),
        successSaga(),
    ]);
}
exports.notifySagas = notifySagas;


/***/ }),

/***/ "./node_modules/notify/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/notify/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!./style.css", function() {
			var newContent = require("!!../css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/rambda/dist/rambda.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return addIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return adjust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return allPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return anyPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "both", function() { return both; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dec", function() { return dec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return defaultTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropLast", function() { return dropLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return either; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inc", function() { return inc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifElse", function() { return ifElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "none", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partialCurry", function() { return partialCurry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathOr", function() { return pathOr$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickAll", function() { return pickAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return propEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return splitEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return takeLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return times; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLower", function() { return toLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUpper", function() { return toUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
function add(x, y) {
  if (y === undefined) {
    return yHolder => add(x, yHolder);
  }

  return x + y;
}

function addIndex(functor) {
  return function (fn, ...rest) {
    let cnt = 0;
    const newFn = (...args) => fn.apply(null, [...args, cnt++]);

    return functor.apply(null, [newFn, ...rest]);
  };
}

function adjust(fn, index, arr) {
  if (index === undefined) {
    return (indexHolder, arrHolder) => adjust(fn, indexHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => adjust(fn, index, arrHolder);
  }

  const clone = arr.concat();

  return clone.map((val, key) => {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop])) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, arr) {
  if (arr === undefined) {
    return arrHolder => filter(fn, arrHolder);
  }

  if (arr.length === undefined) {
    return filterObject(fn, arr);
  }
  let index = -1;
  let resIndex = 0;
  const len = arr.length;
  const willReturn = [];

  while (++index < len) {
    const value = arr[index];

    if (fn(value)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function all(condition, arr) {
  if (arr === undefined) {
    return arrHolder => all(condition, arrHolder);
  }

  return filter(condition, arr).length === arr.length;
}

function any(fn, arr) {
  if (arr === undefined) {
    return arrHolder => any(fn, arrHolder);
  }
  let counter = 0;

  while (counter < arr.length) {
    if (fn(arr[counter])) {
      return true;
    }
    counter++;
  }

  return false;
}

function allPass(conditions, x) {
  if (arguments.length === 1) {
    return xHolder => allPass(conditions, xHolder);
  }

  return !any(condition => !condition(x), conditions);
}

function anyPass(conditions, x) {
  if (arguments.length === 1) {
    return xHolder => anyPass(conditions, xHolder);
  }

  return any(condition => condition(x))(conditions);
}

function append(x, arr) {
  if (arr === undefined) {
    return arrHolder => append(x, arrHolder);
  }
  if (typeof arr === 'string') {
    return `${arr}${x}`;
  }
  const clone = arr.concat();

  clone.push(x);

  return clone;
}

function both(x, y) {
  if (y === undefined) {
    return yHolder => both(x, yHolder);
  }

  return input => x(input) && y(input);
}

//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose(...fns) {
  return result => {
    const list = fns.slice();

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}

function concat(x, y) {
  if (y === undefined) {
    return yHolder => concat(x, yHolder);
  }

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y];
}

function type(a) {
  const typeOf = typeof a;

  if (a === null) {
    return 'Null';
  } else if (a === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(a)) {
    return 'Array';
  } else if (a instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = a.toString();

  if (asStr.startsWith('async')) {
    return 'Async';
  } else if (asStr === '[object Promise]') {
    return 'Promise';
  } else if (asStr.includes('function') || asStr.includes('=>')) {
    return 'Function';
  }

  return 'Object';
}

function equals(a, b) {
  if (arguments.length === 1) {
    return bHolder => equals(a, bHolder);
  }

  if (a === b) {
    return true;
  }
  const aType = type(a);

  if (aType !== type(b)) {
    return false;
  }

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    return aClone.sort().toString() === bClone.sort().toString();
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true;
      }
      let flag = true;

      aKeys.map(val => {
        if (flag) {
          const aValType = type(a[val]);
          const bValType = type(b[val]);

          if (aValType === bValType) {
            if (aValType === 'Object') {
              if (Object.keys(a[val]).length === Object.keys(b[val]).length) {
                if (Object.keys(a[val]).length !== 0) {
                  if (!equals(a[val], b[val])) {
                    flag = false;
                  }
                }
              } else {
                flag = false;
              }
            } else if (!equals(a[val], b[val])) {
              flag = false;
            }
          } else {
            flag = false;
          }
        }
      });

      return flag;
    }
  }

  return false;
}

function contains(x, arr) {
  if (arr === undefined) {
    return arrHolder => contains(x, arrHolder);
  }
  let index = -1;
  let flag = false;

  while (++index < arr.length && !flag) {
    if (equals(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}

//taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry(f, a = []) {
  return (...p) => (o => o.length >= f.length ? f(...o) : curry(f, o))([...a, ...p]);
}

var dec = (x => x - 1);

function defaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => defaultTo(defaultArgument, inputArgumentHolder);
  }

  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true ? defaultArgument : inputArgument;
}

function divide(x, y) {
  if (y === undefined) {
    return yHolder => divide(x, yHolder);
  }

  return x / y;
}

function drop(dropNumber, x) {
  if (x === undefined) {
    return xHolder => drop(dropNumber, xHolder);
  }

  return x.slice(dropNumber);
}

function dropLast(dropNumber, x) {
  if (x === undefined) {
    return xHolder => dropLast(dropNumber, xHolder);
  }

  return x.slice(0, -dropNumber);
}

function either(x, y) {
  if (y === undefined) {
    return yHolder => either(x, yHolder);
  }

  return input => x(input) || y(input);
}

function endsWith(x, y) {
  if (y === undefined) {
    return yHolder => endsWith(x, yHolder);
  }

  return y.endsWith(x);
}

var inc = (x => x + 1);

function find(fn, arr) {
  if (arr === undefined) {
    return arrHolder => find(fn, arrHolder);
  }

  return arr.find(fn);
}

function findIndex(fn, arr) {
  if (arr === undefined) {
    return arrHolder => findIndex(fn, arrHolder);
  }
  const len = arr.length;
  let index = -1;

  while (++index < len) {
    if (fn(arr[index])) {
      return index;
    }
  }

  return -1;
}

function flatten(arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], willReturn);
    } else {
      willReturn.push(arr[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[0]);
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn, ...input) {
  return flipExport(fn);
}

function tap(fn, x) {
  if (x === undefined) {
    return xHolder => tap(fn, xHolder);
  }

  fn(x);

  return x;
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop]);
  }

  return willReturn;
}

function map(fn, arr) {
  if (arr === undefined) {
    return arrHolder => map(fn, arrHolder);
  }
  if (arr.length === undefined) {
    return mapObject(fn, arr);
  }
  let index = -1;
  const len = arr.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}

function forEach(fn, arr) {
  if (arr === undefined) {
    return arrHolder => forEach(fn, arrHolder);
  }

  return map(tap(fn), arr);
}

function has(prop, obj) {
  if (obj === undefined) {
    return objHolder => has(prop, objHolder);
  }

  return obj[prop] !== undefined;
}

function head(a) {
  if (typeof a === 'string') {
    return a[0] || '';
  }

  return a[0];
}

function ifElse(condition, ifFn, elseFn) {
  if (ifFn === undefined) {

    return (ifFnHolder, elseFnHolder) => ifElse(condition, ifFnHolder, elseFnHolder);
  } else if (elseFn === undefined) {

    return elseFnHolder => ifElse(condition, ifFn, elseFnHolder);
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return ifFn(input);
    }

    return elseFn(input);
  };
}

function is(xPrototype, x) {
  if (x === undefined) {
    return xHolder => is(xPrototype, xHolder);
  }

  return x instanceof xPrototype || x.constructor === xPrototype;
}

function isNil(x) {
  return x === undefined || x === null;
}

function includes(x, y) {
  if (y === undefined) {
    return yHolder => includes(x, yHolder);
  }

  return y.includes(x);
}

function indexOf(x, arr) {
  if (arr === undefined) {
    return arrHolder => indexOf(x, arrHolder);
  }
  let index = -1;
  const length = arr.length;

  while (++index < length) {
    if (arr[index] === x) {
      return index;
    }
  }

  return -1;
}

function baseSlice(array, start, end) {
  let index = -1;
  let length = array.length;

  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(a) {
  if (typeof a === 'string') {
    return a.slice(0, -1);
  }

  return a.length ? baseSlice(a, 0, -1) : [];
}

function join(glue, arr) {
  if (arr === undefined) {
    return arrHolder => join(glue, arrHolder);
  }

  return arr.join(glue);
}

function lastIndexOf(x, arr) {
  if (arr === undefined) {
    return arrHolder => lastIndexOf(x, arrHolder);
  }
  let willReturn = -1;

  arr.map((value, key) => {
    if (equals(value, x)) {
      willReturn = key;
    }
  });

  return willReturn;
}

function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}

function length(x) {
  return x.length;
}

function match(regex, x) {
  if (x === undefined) {
    return xHolder => match(regex, xHolder);
  }
  const willReturn = x.match(regex);

  return willReturn === null ? [] : willReturn;
}

function merge(obj, newProps) {
  if (newProps === undefined) {
    return newPropsHolder => merge(obj, newPropsHolder);
  }

  return Object.assign({}, obj, newProps);
}

function modulo(x, y) {
  if (y === undefined) {
    return yHolder => modulo(x, yHolder);
  }

  return x % y;
}

function multiply(x, y) {
  if (y === undefined) {
    return yHolder => multiply(x, yHolder);
  }

  return x * y;
}

function none(fn, arr) {
  if (arr === undefined) {
    return arrHolder => none(fn, arr);
  }

  return arr.filter(fn).length === 0;
}

function omit(keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys = keys.split(',') : keys;

  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function partialCurry(fn, inputArguments = {}) {
  return inputArgumentsHolder => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }

    return fn(merge(inputArgumentsHolder, inputArguments));
  };
}

function path(pathArr, obj) {
  if (arguments.length === 1) {
    return objHolder => path(pathArr, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  let willReturn = obj;
  let counter = 0;

  const pathArrValue = typeof pathArr === 'string' ? pathArr = pathArr.split('.') : pathArr;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }
    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function pathOr(defaultValue, inputPath, inputObject) {
  return defaultTo(defaultValue, path(inputPath, inputObject));
}

var pathOr$1 = curry(pathOr);

function pick(keys, obj) {
  if (arguments.length === 1) {
    return objHolder => pick(keys, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;

  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }
    counter++;
  }

  return willReturn;
}

function pickAll(keys, obj) {
  if (arguments.length === 1) {
    return objHolder => pickAll(keys, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;

  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }
    counter++;
  }

  return willReturn;
}

function pipe(...fns) {
  return compose(...fns.reverse());
}

function pluck(keyToPluck, arr) {
  if (arr === undefined) {
    return arrHolder => pluck(keyToPluck, arrHolder);
  }
  const willReturn = [];

  map(val => {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);

  return willReturn;
}

function prepend(x, arr) {
  if (arr === undefined) {
    return arrHolder => prepend(x, arrHolder);
  }
  if (typeof arr === 'string') {
    return `${x}${arr}`;
  }
  const clone = arr.concat();

  clone.unshift(x);

  return clone;
}

function prop(key, obj) {
  if (obj === undefined) {
    return objHolder => prop(key, objHolder);
  }

  return obj[key];
}

function propEq(key, x, obj) {
  if (x === undefined) {
    return (xHolder, objHolder) => propEq(key, xHolder, objHolder);
  } else if (obj === undefined) {
    return objHolder => propEq(key, x, objHolder);
  }

  return obj[key] === x;
}

function range(start, end) {
  if (end === undefined) {
    return endHolder => range(start, endHolder);
  }
  const willReturn = [];

  for (let i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

function reduce(fn, initialValue, arr) {
  if (initialValue === undefined) {
    return (initialValueHolder, arrHolder) => reduce(fn, initialValueHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => reduce(fn, initialValue, arrHolder);
  }

  return arr.reduce(fn, initialValue);
}

function reject(fn, arr) {
  if (arr === undefined) {
    return arrHolder => reject(fn, arrHolder);
  }

  return filter(x => !fn(x), arr);
}

function repeat(x, num) {
  if (num === undefined) {
    return numHolder => repeat(x, numHolder);
  }
  const willReturn = Array(num);

  return willReturn.fill(x);
}

function replace(regex, replacer, str) {
  if (replacer === undefined) {
    return (replacerHolder, strHolder) => replace(regex, replacerHolder, strHolder);
  } else if (str === undefined) {
    return strHolder => replace(regex, replacer, strHolder);
  }

  return str.replace(regex, replacer);
}

function reverse(arr) {
  const clone = arr.concat();

  return clone.reverse();
}

function sort(fn, arr) {
  if (arr === undefined) {
    return arrHolder => sort(fn, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.sort(fn);
}

function sortBy(fn, arr) {
  if (arr === undefined) {
    return arrHolder => sortBy(fn, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);

    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}

function split(glue, str) {
  if (str === undefined) {
    return strHolder => split(glue, strHolder);
  }

  return str.split(glue);
}

function splitEvery(num, x) {
  if (x === undefined) {
    return xHolder => splitEvery(num, xHolder);
  }

  const numValue = num > 1 ? num : 1;

  const willReturn = [];
  let counter = 0;

  while (counter < x.length) {
    willReturn.push(x.slice(counter, counter += numValue));
  }

  return willReturn;
}

function startsWith(x, y) {
  if (y === undefined) {
    return yHolder => startsWith(x, yHolder);
  }

  return y.startsWith(x);
}

function subtract(x, y) {
  if (y === undefined) {
    return yHolder => subtract(x, yHolder);
  }

  return x - y;
}

function tail(arr) {
  return drop(1, arr);
}

function take(num, x) {
  if (x === undefined) {
    return xHolder => take(num, xHolder);
  }
  if (typeof x === 'string') {
    return x.slice(0, num);
  }

  return baseSlice(x, 0, num);
}

function takeLast(num, x) {
  if (x === undefined) {
    return xHolder => takeLast(num, xHolder);
  }
  const len = x.length;

  let numValue = num > len ? len : num;

  if (typeof x === 'string') {
    return x.slice(len - numValue);
  }
  numValue = len - numValue;

  return baseSlice(x, numValue, len);
}

function test(regex, str) {
  if (str === undefined) {
    return strHolder => test(regex, strHolder);
  }

  return str.search(regex) !== -1;
}

function times(fn, num) {
  if (num === undefined) {
    return numHolder => times(fn, numHolder);
  }

  return map(fn, range(0, num));
}

function toLower(x) {
  return x.toLowerCase();
}

function toUpper(x) {
  return x.toUpperCase();
}

function toString(x) {
  return x.toString();
}

function uniq(arr) {
  let index = -1;
  const willReturn = [];

  while (++index < arr.length) {
    const value = arr[index];

    if (!contains(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(index, newValue, arr) {
  if (newValue === undefined) {
    return (newValueHolder, arrHolder) => update(index, newValueHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => update(index, newValue, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}

function values(obj) {
  const willReturn = [];

  for (const key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}

function without(itemsToOmit, collection) {
  return reduce((accum, item) => !contains(item, itemsToOmit) ? accum.concat(item) : accum, [], collection);
}

const always = x => () => x;
const complement = fn => input => !fn(input);
const F = () => false;
const identity = x => x;
const not = x => !x;
const T = () => true;
const trim = x => x.trim();


//# sourceMappingURL=rambda.esm.js.map


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/main/style.less");
__webpack_require__("./src/main/style.scss");
__webpack_require__("./src/x/style.css");
__webpack_require__("./node_modules/notify/style.css");
const connected_react_router_1 = __webpack_require__("./node_modules/connected-react-router/lib/index.js");
const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
const react_redux_1 = __webpack_require__("./node_modules/react-redux/es/index.js");
const react_router_1 = __webpack_require__("./node_modules/react-router/es/index.js");
const createStore_1 = __webpack_require__("./src/createStore.ts");
const component_1 = __webpack_require__("./node_modules/notify/component.tsx");
const component_2 = __webpack_require__("./src/main/component.tsx");
const component_3 = __webpack_require__("./src/x/component.tsx");
const connectComponent = ({ mainStore }) => ({ mainStore });
const connectX = x => input => ({ [x]: input[x] });
const MainWrapped = react_redux_1.connect(connectComponent)(component_2.Main);
const XWrapped = react_redux_1.connect(connectX('xStore'))(component_3.default);
class RouterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(connected_react_router_1.ConnectedRouter, { history: createStore_1.history },
                React.createElement("div", null,
                    React.createElement(component_1.Notify, null),
                    React.createElement(react_router_1.Route, { component: XWrapped, exact: true, path: '/' }),
                    React.createElement(react_router_1.Route, { component: MainWrapped, exact: true, path: '/x' })))));
    }
}
const RouterComponentWrapped = react_redux_1.connect(connectComponent)(RouterComponent);
const store = createStore_1.createStore();
exports.App = () => (React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(RouterComponentWrapped, null)));


/***/ }),

/***/ "./src/common.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducer = (x) => {
    const store = (state = x.initialState, action) => {
        if (Object.keys(x.reactions).includes(action.type)) {
            return x.reactions[action.type](state, action);
        }
        return state;
    };
    return store;
};


/***/ }),

/***/ "./src/createStore.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__("./node_modules/redux/es/index.js");
const reducers_1 = __webpack_require__("./node_modules/notify/reducers.ts");
const redux_saga_1 = __webpack_require__("./node_modules/redux-saga/es/index.js");
const reducers_2 = __webpack_require__("./src/main/reducers.ts");
const reducers_3 = __webpack_require__("./src/x/reducers.ts");
const sagas_1 = __webpack_require__("./node_modules/notify/sagas.ts");
const sagas_2 = __webpack_require__("./src/main/sagas.ts");
const sagas_3 = __webpack_require__("./src/x/sagas.ts");
const connected_react_router_1 = __webpack_require__("./node_modules/connected-react-router/lib/index.js");
const history_1 = __webpack_require__("./node_modules/history/es/index.js");
exports.history = history_1.createBrowserHistory();
const composeEnhancers = process.env.NODE_ENV === 'production' ?
    redux_1.compose :
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined ?
        redux_1.compose :
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
function createStore() {
    const sagaMiddleware = redux_saga_1.default();
    const mainReducers = redux_1.combineReducers({
        mainStore: reducers_2.mainStore,
        notifyStore: reducers_1.notifyStore,
        xStore: reducers_3.xStore,
    });
    const willReturn = redux_1.createStore(connected_react_router_1.connectRouter(exports.history)(mainReducers), composeEnhancers(redux_1.applyMiddleware(connected_react_router_1.routerMiddleware(exports.history), sagaMiddleware)));
    sagaMiddleware.run(sagas_1.notifySagas);
    sagaMiddleware.run(sagas_2.mainSagas);
    sagaMiddleware.run(sagas_3.default);
    return willReturn;
}
exports.createStore = createStore;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
const react_dom_1 = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
const app_1 = __webpack_require__("./src/app.tsx");
const id = 'react-container';
const element = document.createElement('div');
element.setAttribute('id', id);
document.body.appendChild(element);
const rootEl = document.getElementById(id);
react_dom_1.render(React.createElement(app_1.App, null), rootEl);


/***/ }),

/***/ "./src/main/component.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            "main_",
            this.props.mainStore.mainFoo));
    }
}
exports.Main = Main;


/***/ }),

/***/ "./src/main/reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__("./src/common.ts");
exports.initialState = {
    mainFoo: 'MAIN_BAR',
};
const reactions = {
    X: (state, action) => (Object.assign({}, state, { x: true })),
};
exports.mainStore = common_1.createReducer({ initialState: exports.initialState, reactions });


/***/ }),

/***/ "./src/main/sagas.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = __webpack_require__("./node_modules/redux-saga/es/effects.js");
const initSaga_1 = __webpack_require__("./src/main/sagas/initSaga.ts");
function* mainSagas() {
    return yield effects_1.all([initSaga_1.initSaga()]);
}
exports.mainSagas = mainSagas;


/***/ }),

/***/ "./src/main/sagas/initSaga.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const create_action_1 = __webpack_require__("./node_modules/create-action/index.js");
const effects_1 = __webpack_require__("./node_modules/redux-saga/es/effects.js");
function* initSagaFn() {
    const { payload } = yield effects_1.take('INIT');
    yield effects_1.put(create_action_1.createAction('REPLY')(payload));
}
exports.initSagaFn = initSagaFn;
function* initSaga() {
    while (true) {
        try {
            yield initSagaFn();
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.initSaga = initSaga;


/***/ }),

/***/ "./src/main/style.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main/style.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/x/actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const create_action_1 = __webpack_require__("./node_modules/create-action/index.js");
const base = 'X';
exports.TOGGLE = `${base}_TOGGLE`;
exports.toggle = create_action_1.createAction(exports.TOGGLE);


/***/ }),

/***/ "./src/x/component.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
const actions_1 = __webpack_require__("./src/x/actions.ts");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle() {
        this.props.dispatch(actions_1.toggle());
    }
    render() {
        return React.createElement("div", { className: this.props.xStore.foo },
            React.createElement("button", { onClick: this.onToggle, type: 'button' },
                "Toggle ",
                `${this.props.xStore.fooX}`));
    }
}
exports.default = App;


/***/ }),

/***/ "./src/x/reducers.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __webpack_require__("./node_modules/classnames/index.js");
const common_1 = __webpack_require__("./src/common.ts");
exports.initialState = {
    counter: 0,
    foo: 'x__passive',
    fooX: false,
};
const reactions = {
    X_TOGGLE: (state, action) => (Object.assign({}, state, { counter: state.counter + 1, foo: classnames_1.classnames({
            x__active: () => state.counter % 2 === 0,
            x__passive: () => state.counter % 2 === 1,
        }), fooX: !state.fooX })),
};
exports.xStore = common_1.createReducer({ initialState: exports.initialState, reactions });


/***/ }),

/***/ "./src/x/sagas.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = __webpack_require__("./node_modules/redux-saga/es/effects.js");
const actions_1 = __webpack_require__("./src/x/actions.ts");
function* toggleMenuSaga() {
    while (true) {
        try {
            yield effects_1.take(actions_1.TOGGLE);
            const notifyOptions = { message: 'foo', type: 'NOTIFY_SUCCESS' };
            yield effects_1.put(notifyOptions);
        }
        catch (err) {
            console.log(err);
        }
    }
}
function* rootSaga() {
    return yield effects_1.all([
        toggleMenuSaga(),
    ]);
}
exports.default = rootSaga;


/***/ }),

/***/ "./src/x/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./src/x/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},["./src/index.tsx"]);