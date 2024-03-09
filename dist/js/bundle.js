/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/inputmask/lib/canUseDOM.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/canUseDOM.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

/* harmony default export */ __webpack_exports__["default"] = (canUseDOM);


/***/ }),

/***/ "./node_modules/inputmask/lib/defaults.js":
/*!************************************************!*\
  !*** ./node_modules/inputmask/lib/defaults.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");


/* harmony default export */ __webpack_exports__["default"] = ({
	_maxTestPos: 500,
	placeholder: "_",
	optionalmarker: ["[", "]"],
	quantifiermarker: ["{", "}"],
	groupmarker: ["(", ")"],
	alternatormarker: "|",
	escapeChar: "\\",
	mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
	regex: null, //regular expression as a mask
	oncomplete: () => {
	}, //executes when the mask is complete
	onincomplete: () => {
	}, //executes when the mask is incomplete and focus is lost
	oncleared: () => {
	}, //executes when the mask is cleared
	repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
	greedy: false, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
	autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
	removeMaskOnSubmit: false, //remove the mask before submitting the form.
	clearMaskOnLostFocus: true,
	insertMode: true, //insert the input or overwrite the input
	insertModeVisual: true, //show selected caret when insertmode = false
	clearIncomplete: false, //clear the incomplete input on blur
	alias: null,
	onKeyDown: () => {
	}, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
	onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
	onBeforePaste: function (pastedValue, opts) {
		return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
	}, //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
	onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
	onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
	showMaskOnFocus: true, //show the mask-placeholder when the input has focus
	showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
	onKeyValidation: () => {
	}, //executes on every key-press with the result of isValid. Params: key, result, opts
	skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
	numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
	rightAlign: false, //align to the right
	undoOnEscape: true, //pressing escape reverts the value to the value before focus
	//numeric basic properties
	radixPoint: "", //".", // | ","
	_radixDance: false, //dance around the radixPoint
	groupSeparator: "", //",", // | "."
	//numeric basic properties
	keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
	positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
	tabThrough: false, //allows for tabbing through the different parts of the masked field
	supportsInputType: ["text", "tel", "url", "password", "search"], //list with the supported input types
	//specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
	ignorables: [
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Backspace,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Tab,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Pause,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Escape,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.PageUp,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.PageDown,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.End,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Home,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.ArrowLeft,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.ArrowUp,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.ArrowRight,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.ArrowDown,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Insert,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Delete,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.ContextMenu,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F1,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F2,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F3,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F4,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F5,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F6,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F7,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F8,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F9,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F10,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F11,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.F12,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Process,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Unidentified,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Shift,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Control,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Alt,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Tab,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.AltGraph,
		_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.CapsLock
	],
	isComplete: null, //override for isComplete - args => buffer, opts - return true || false
	preValidation: null, //hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
	postValidation: null, //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval => return true/false/json
	staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
	jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
	nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
	inputEventOnly: false, //dev option - testing inputfallback behavior
	noValuePatching: false, //disable value property patching
	positionCaretOnClick: "lvp", //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
	casing: null, //mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
	inputmode: "text", //specify the inputmode
	importDataAttributes: true, //import data-inputmask attributes
	shiftPositions: true, //shift position of the mask entries on entry and deletion.
	usePrototypeDefinitions: true, //use the default defined definitions from the prototype
	validationEventTimeOut: 3000, //Time to show validation error on form submit
	substitutes: {} //define character substitutes
});


/***/ }),

/***/ "./node_modules/inputmask/lib/definitions.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/definitions.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	"9": { //\uFF11-\uFF19 #1606
		validator: "[0-9\uFF10-\uFF19]",
		definitionSymbol: "*"
	},
	"a": { //\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5 #76
		validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
		definitionSymbol: "*"
	},
	"*": {
		validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]"
	}
});

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/data.js":
/*!***********************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/data.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(owner, key, value) {
	if (value === undefined) {
		return owner.__data ? owner.__data[key] : null;
	} else {
		owner.__data = owner.__data || {};
		owner.__data[key] = value;
	}
}

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/events.js":
/*!*************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/events.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": function() { return /* binding */ Event; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "on": function() { return /* binding */ on; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; }
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/inputmask/lib/dependencyLibs/extend.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");







function isValidElement(elem) {
	return elem instanceof Element;
}

let Event;
if (typeof _global_window__WEBPACK_IMPORTED_MODULE_1__["default"].CustomEvent === "function") {
	Event = _global_window__WEBPACK_IMPORTED_MODULE_1__["default"].CustomEvent;
} else {
	if (_canUseDOM__WEBPACK_IMPORTED_MODULE_3__["default"]) {
		Event = function (event, params) {
			params = params || {bubbles: false, cancelable: false, composed: true, detail: undefined};
			var evt = document.createEvent("CustomEvent");
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		};
		Event.prototype = _global_window__WEBPACK_IMPORTED_MODULE_1__["default"].Event.prototype;
	}
}


function on(events, handler) {
	function addEvent(ev, namespace) {
		//register domevent
		if (elem.addEventListener) { // all browsers except IE before version 9
			elem.addEventListener(ev, handler, false);
		} else if (elem.attachEvent) { // IE before version 9
			elem.attachEvent(`on${ev}`, handler);
		}
		eventRegistry[ev] = eventRegistry[ev] || {};
		eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
		eventRegistry[ev][namespace].push(handler);
	}

	if (isValidElement(this[0])) {
		var eventRegistry = this[0].eventRegistry,
			elem = this[0];

		events.split(" ").forEach((event) => {
			const [ev, namespace = "global"] = event.split(".");
			addEvent(ev, namespace);
		});
	}
	return this;
}

function off(events, handler) {
	var eventRegistry, elem;

	function removeEvent(ev, namespace, handler) {
		if (ev in eventRegistry === true) {
			//unbind to dom events
			if (elem.removeEventListener) { // all browsers except IE before version 9
				elem.removeEventListener(ev, handler, false);
			} else if (elem.detachEvent) { // IE before version 9
				elem.detachEvent(`on${ev}`, handler);
			}
			if (namespace === "global") {
				for (var nmsp in eventRegistry[ev]) {
					eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
				}
			} else {
				eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
			}
		}
	}

	function resolveNamespace(ev, namespace) {
		var evts = [],
			hndx, hndL;
		if (ev.length > 0) {
			if (handler === undefined) {
				for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
					evts.push({
						ev: ev,
						namespace: namespace && namespace.length > 0 ? namespace : "global",
						handler: eventRegistry[ev][namespace][hndx]
					});
				}
			} else {
				evts.push({
					ev: ev,
					namespace: namespace && namespace.length > 0 ? namespace : "global",
					handler: handler
				});
			}
		} else if (namespace.length > 0) {
			for (var evNdx in eventRegistry) {
				for (var nmsp in eventRegistry[evNdx]) {
					if (nmsp === namespace) {
						if (handler === undefined) {
							for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
								evts.push({
									ev: evNdx,
									namespace: nmsp,
									handler: eventRegistry[evNdx][nmsp][hndx]
								});
							}
						} else {
							evts.push({
								ev: evNdx,
								namespace: nmsp,
								handler: handler
							});
						}
					}
				}
			}
		}

		return evts;
	}

	if (isValidElement(this[0]) && events) {
		eventRegistry = this[0].eventRegistry;
		elem = this[0];

		events.split(" ").forEach((event) => {
			const [ev, namespace] = event.split(".");
			resolveNamespace(ev, namespace).forEach(({ev: ev1, handler: handler1, namespace: namespace1}) => {
				removeEvent(ev1, namespace1, handler1);
			});
		});
	}
	return this;
}

function trigger(events /* , args... */) {
	if (isValidElement(this[0])) {
		var eventRegistry = this[0].eventRegistry,
			elem = this[0];
		var _events = typeof events === "string" ? events.split(" ") : [events.type];
		for (var endx = 0; endx < _events.length; endx++) {
			var nsEvent = _events[endx].split("."),
				ev = nsEvent[0],
				namespace = nsEvent[1] || "global";
			if (document !== undefined && namespace === "global") {
				//trigger domevent
				var evnt, i, params = {
					bubbles: true,
					cancelable: true,
					composed: true,
					detail: arguments[1]
				};
				// The custom event that will be created
				if (document.createEvent) {
					try {
						switch (ev) {
							case "input":
								params.inputType = "insertText";
								evnt = new InputEvent(ev, params);
								break;
							default:
								evnt = new CustomEvent(ev, params);
						}
					} catch (e) {
						evnt = document.createEvent("CustomEvent");
						evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
					}
					if (events.type) (0,_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(evnt, events);
					elem.dispatchEvent(evnt);
				} else {
					evnt = document.createEventObject();
					evnt.eventType = ev;
					evnt.detail = arguments[1];
					if (events.type) (0,_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(evnt, events);
					elem.fireEvent("on" + evnt.eventType, evnt);
				}
			} else if (eventRegistry[ev] !== undefined) {
				arguments[0] = arguments[0].type ? arguments[0] : _inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_2__["default"].Event(arguments[0]);
				arguments[0].detail = arguments.slice(1);

				const registry = eventRegistry[ev],
					handlers = namespace === "global" ? Object.values(registry).flat() : registry[namespace];
				handlers.forEach(handler => handler.apply(elem, arguments));
			}
		}
	}
	return this;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/extend.js":
/*!*************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/extend.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ extend; }
/* harmony export */ });
function extend() {
	let options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;

		// Skip the boolean and the target
		target = arguments[i] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if (typeof target !== "object" && typeof target !== "function") {
		target = {};
	}

	for (; i < length; i++) {
		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];

					} else {
						clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
					}

					// Never move original objects, clone them
					target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
}

/***/ }),

/***/ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js":
/*!******************************************************************************!*\
  !*** ./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/inputmask/lib/dependencyLibs/extend.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./node_modules/inputmask/lib/dependencyLibs/data.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./node_modules/inputmask/lib/dependencyLibs/events.js");
/*
 Input Mask plugin dependencyLib
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) Robin Herbots
 Licensed under the MIT license
 */






const document = _global_window__WEBPACK_IMPORTED_MODULE_1__["default"].document;

function DependencyLib(elem) {
	if (elem instanceof DependencyLib) {
		return elem;
	}
	if (!(this instanceof DependencyLib)) {
		return new DependencyLib(elem);
	}
	if (elem !== undefined && elem !== null && elem !== _global_window__WEBPACK_IMPORTED_MODULE_1__["default"]) {
		this[0] = elem.nodeName ? elem : (elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem));
		if (this[0] !== undefined && this[0] !== null) {
			this[0].eventRegistry = this[0].eventRegistry || {};
		}
	}
}

DependencyLib.prototype = {
	on: _events__WEBPACK_IMPORTED_MODULE_3__.on,
	off: _events__WEBPACK_IMPORTED_MODULE_3__.off,
	trigger: _events__WEBPACK_IMPORTED_MODULE_3__.trigger
};

//static
DependencyLib.extend = _extend__WEBPACK_IMPORTED_MODULE_0__["default"];
DependencyLib.data = _data__WEBPACK_IMPORTED_MODULE_2__["default"];
DependencyLib.Event = _events__WEBPACK_IMPORTED_MODULE_3__.Event;

/* harmony default export */ __webpack_exports__["default"] = (DependencyLib);


/***/ }),

/***/ "./node_modules/inputmask/lib/environment.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/environment.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ie": function() { return /* binding */ ie; },
/* harmony export */   "iphone": function() { return /* binding */ iphone; },
/* harmony export */   "mobile": function() { return /* binding */ mobile; }
/* harmony export */ });
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/lib/global/window.js");


const ua = (_global_window__WEBPACK_IMPORTED_MODULE_0__["default"].navigator && _global_window__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.userAgent) || "",
    ie = (ua.indexOf("MSIE ") > 0) || (ua.indexOf("Trident/") > 0),
    mobile = (navigator.userAgentData && navigator.userAgentData.mobile) || (_global_window__WEBPACK_IMPORTED_MODULE_0__["default"].navigator && _global_window__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.maxTouchPoints) || "ontouchstart" in _global_window__WEBPACK_IMPORTED_MODULE_0__["default"], //not entirely correct but will currently do
    iphone = /iphone/i.test(ua);




/***/ }),

/***/ "./node_modules/inputmask/lib/escapeRegex.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/escapeRegex.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
const  escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(str) {
	return str.replace(escapeRegexRegex, "\\$1");
}

/***/ }),

/***/ "./node_modules/inputmask/lib/eventhandlers.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/eventhandlers.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlers": function() { return /* binding */ EventHandlers; }
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");









var EventHandlers = {
    keyEvent: function (e, checkval, writeOut, strict, ndx) {
        const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib,
            maskset = inputmask.maskset;

        var input = this,
            $input = $(input),
            c = e.key,
            pos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);

        var kdResult = opts.onKeyDown.call(this, e, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), pos, opts);
        if (kdResult !== undefined) return kdResult;

        //backspace, delete, and escape get special treatment
        if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace || c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete || (_environment__WEBPACK_IMPORTED_MODULE_2__.iphone && c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.BACKSPACE_SAFARI) || (e.ctrlKey && c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.x && !("oncut" in input))) { //backspace/delete
            e.preventDefault(); //stop default action but allow propagation
            _validation__WEBPACK_IMPORTED_MODULE_3__.handleRemove.call(inputmask, input, c, pos);
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask, true), maskset.p, e, input.inputmask._valueGet() !== _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).join(""));
        } else if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.End || c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.PageDown) { //when END or PAGE_DOWN pressed set position at lastmatch
            e.preventDefault();
            var caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask));
            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
        } else if ((c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Home && !e.shiftKey) || c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.PageUp) { //Home or page_up
            e.preventDefault();
            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
        } else if (((opts.undoOnEscape && c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Escape) || ( false && 0)) && e.altKey !== true) { //escape && undo && #762
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.checkVal)(input, true, false, inputmask.undoValue.split(""));
            $input.trigger("click");
        } else if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Insert && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === undefined) { //insert
            if (!_validation__WEBPACK_IMPORTED_MODULE_3__.isSelection.call(inputmask, pos)) {
                opts.insertMode = !opts.insertMode;
                _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, pos.begin, pos.begin);
            } else opts.insertMode = !opts.insertMode;
        } else if (opts.tabThrough === true && c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Tab) {
            if (e.shiftKey === true) {
                pos.end = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, pos.end, true);
                if (_validation_tests__WEBPACK_IMPORTED_MODULE_5__.getTest.call(inputmask, pos.end - 1).match.static === true) {
                    pos.end--;
                }
                pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, pos.end, true);
                if (pos.begin >= 0 && pos.end > 0) {
                    e.preventDefault();
                    _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, pos.begin, pos.end);
                }
            } else {
                pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, pos.begin, true);
                pos.end = _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, pos.begin, true);
                if (pos.end < maskset.maskLength) pos.end--;
                if (pos.begin <= maskset.maskLength) {
                    e.preventDefault();
                    _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, pos.begin, pos.end);
                }
            }
        } else if (!e.shiftKey) {
            if (opts.insertModeVisual && opts.insertMode === false) {
                if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowRight) {
                    setTimeout(function () {
                        var caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);
                        _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin);
                    }, 0);
                } else if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowLeft) {
                    setTimeout(function () {
                        var caretPos = {
                            begin: _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, input.inputmask.caretPos.begin),
                            end: _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, input.inputmask.caretPos.end)
                        };
                        if (inputmask.isRTL) {
                            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1));
                        } else {
                            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin - (caretPos.begin === 0 ? 0 : 1));
                        }
                    }, 0);
                }
            }
        }

        inputmask.isComposing = (c == _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Process || c == _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Unidentified);
        inputmask.ignorable = opts.ignorables.includes(c);
        return EventHandlers.keypressEvent.call(this, e, checkval, writeOut, strict, ndx);
    },
    keypressEvent: function (e, checkval, writeOut, strict, ndx) {
        const inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib,
            maskset = inputmask.maskset;

        var input = inputmask.el,
            $input = $(input),
            c = e.key;

        if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable))) {
            if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Enter) {
                if (inputmask.undoValue !== inputmask._valueGet(true)) {
                    inputmask.undoValue = inputmask._valueGet(true);
                    // e.preventDefault();

                    setTimeout(function () {
                        $input.trigger("change");
                    }, 0);
                }
            }
            //inputmask.skipInputEvent = true; //skip the input as otherwise the skipped char could be picked up for validation by the inputfallback
            return;
        } else if (c) {
            //special treat the decimal separator
            // if ((k === 44 || k === 46) && e.location === 3 && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
            var pos = checkval ? {
                    begin: ndx,
                    end: ndx
                } : _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input),
                forwardPosition;

            //allow for character substitution
            c = opts.substitutes[c] || c;
            maskset.writeOutBuffer = true;
            var valResult = _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.call(inputmask, pos, c, strict, undefined, undefined, undefined, checkval);
            if (valResult !== false) {
                _positioning__WEBPACK_IMPORTED_MODULE_0__.resetMaskSet.call(inputmask, true);
                forwardPosition = valResult.caret !== undefined ? valResult.caret : _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                maskset.p = forwardPosition; //needed for checkval
            }

            forwardPosition = ((opts.numericInput && valResult.caret === undefined) ? _positioning__WEBPACK_IMPORTED_MODULE_0__.seekPrevious.call(inputmask, forwardPosition) : forwardPosition);
            if (writeOut !== false) {

                setTimeout(function () {
                    opts.onKeyValidation.call(input, c, valResult);
                }, 0);
                if (maskset.writeOutBuffer && valResult !== false) {
                    var buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask);
                    (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, buffer, forwardPosition, e, checkval !== true);
                }
            }

            e.preventDefault();

            if (checkval) {
                if (valResult !== false) valResult.forwardPosition = forwardPosition;
                return valResult;
            }
        }
    },
    pasteEvent: function (e) {
        const inputmask = this.inputmask, opts = inputmask.opts;

        var input = this,
            inputValue = inputmask._valueGet(true),
            caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input),
            tempValue;

        if (inputmask.isRTL) {
            tempValue = caretPos.end;
            caretPos.end = _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, caretPos.begin);
            caretPos.begin = _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, tempValue);
        }

        var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
            valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

        if (valueBeforeCaret == (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
        if (valueAfterCaret == (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")) valueAfterCaret = "";

        if (window.clipboardData && window.clipboardData.getData) { // IE
            inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
        } else if (e.clipboardData && e.clipboardData.getData) {
            inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
        } else {
            return true;
        } //allow native paste event as fallback ~ masking will continue by inputfallback

        var pasteValue = inputValue;
        if (inputmask.isRTL) {
            pasteValue = pasteValue.split("");
            for (let c of _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)) {
                if (pasteValue[0] === c)
                    pasteValue.shift();
            }
            pasteValue = pasteValue.join("");
        }
        if (typeof opts.onBeforePaste === "function") {
            pasteValue = opts.onBeforePaste.call(inputmask, pasteValue, opts);
            if (pasteValue === false) {
                return false;
            }
            if (!pasteValue) {
                pasteValue = inputValue;
            }
        }
        (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.checkVal)(input, true, false, pasteValue.toString().split(""), e);
        e.preventDefault();
    },
    inputFallBackEvent: function (e) { //fallback when keypress is not triggered
        const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
        // console.log(e.inputType);

        function analyseChanges(inputValue, buffer, caretPos) {
            var frontPart = inputValue.substr(0, caretPos.begin).split(""),
                backPart = inputValue.substr(caretPos.begin).split(""),
                frontBufferPart = buffer.substr(0, caretPos.begin).split(""),
                backBufferPart = buffer.substr(caretPos.begin).split("");

            var fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length,
                bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length,
                bl, i, action = "", data = [], marker = "~", placeholder;

            //align buffers
            while (frontPart.length < fpl) frontPart.push(marker);
            while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
            while (backPart.length < bpl) backPart.unshift(marker);
            while (backBufferPart.length < bpl) backBufferPart.unshift(marker);

            var newBuffer = frontPart.concat(backPart);
            var oldBuffer = frontBufferPart.concat(backBufferPart);

            // console.log("N " + newBuffer);
            // console.log("O " + oldBuffer);

            for (i = 0, bl = newBuffer.length; i < bl; i++) {
                placeholder = _validation_tests__WEBPACK_IMPORTED_MODULE_5__.getPlaceholder.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, i));
                switch (action) {
                    case "insertText":
                        if (oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1) {
                            data.push(newBuffer[i]);
                        }
                        i = bl;
                        break;
                    case "insertReplacementText":
                        if (newBuffer[i] === marker) { //extend selection
                            caretPos.end++;
                        } else {
                            // breakout loop
                            i = bl;
                        }
                        break;
                    case "deleteContentBackward":
                        if (newBuffer[i] === marker) {
                            caretPos.end++;
                        } else {
                            //breakout loop
                            i = bl;
                        }
                        break;
                    default:
                        if (newBuffer[i] !== oldBuffer[i]) {
                            if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === undefined) && ((oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker) || oldBuffer[i] === marker)) {  //basic insert
                                action = "insertText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                                caretPos.end--;
                            } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) { //insert between
                                action = "insertText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                                caretPos.end--;
                            } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker &&
                                (newBuffer[i + 1] === marker || (oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1] /*single char replacement*/))) { //replace selection
                                action = "insertReplacementText";
                                data.push(newBuffer[i]);
                                caretPos.begin--;
                            } else if (newBuffer[i] === marker) {  //delete~backspace
                                action = "deleteContentBackward";
                                if (_positioning__WEBPACK_IMPORTED_MODULE_0__.isMask.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.translatePosition.call(inputmask, i), true) || oldBuffer[i] === opts.radixPoint) caretPos.end++;
                            } else {
                                i = bl;
                            }
                        }
                        break;
                }
            }

            return {
                action: action,
                data: data,
                caret: caretPos
            };
        }

        var input = this,
            inputValue = input.inputmask._valueGet(true),
            buffer = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)).join(""),
            caretPos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, undefined, undefined, true),
            changes;

        if (buffer !== inputValue) {
            changes = analyseChanges(inputValue, buffer, caretPos);
            if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
                input.focus();
            }
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask));
            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin, caretPos.end, true);

            // Japanese IME hack #2662
            if (!_environment__WEBPACK_IMPORTED_MODULE_2__.mobile && inputmask.skipNextInsert && e.inputType === "insertText" && changes.action === "insertText" && inputmask.isComposing) {
                return false;
            }
            if (e.inputType === "insertCompositionText" && changes.action === "insertText" && inputmask.isComposing) {
                inputmask.skipNextInsert = true;
            } else {
                inputmask.skipNextInsert = false;
            }

            switch (changes.action) {
                case "insertText":
                case "insertReplacementText":
                    changes.data.forEach(function (entry, ndx) {
                        var keypress = new $.Event("keypress");
                        keypress.key = entry;
                        inputmask.ignorable = false; //make sure ignorable is ignored ;-)
                        EventHandlers.keypressEvent.call(input, keypress);
                    });
                    setTimeout(function () {  //#2195 trigger keyup to help some other plugins to track changes
                        inputmask.$el.trigger("keyup");
                    }, 0);
                    break;
                case "deleteContentBackward":
                    var keydown = new $.Event("keydown");
                    keydown.key = _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace;
                    EventHandlers.keyEvent.call(input, keydown);
                    break;
                default:
                    (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(input, inputValue);
                    _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
                    break;
            }

            e.preventDefault();
        }
    },
    setValueEvent: function (e) {
        const inputmask = this.inputmask;
        var input = this,
            value = (e && e.detail) ? e.detail[0] : arguments[1];

        if (value === undefined) {
            value = input.inputmask._valueGet(true);
        }

        (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(input, value);

        if ((e.detail && e.detail[1] !== undefined) || arguments[2] !== undefined) {
            _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
        }
    }
    ,
    focusEvent: function (e) {
        const inputmask = this.inputmask, opts = inputmask.opts;
        var input = this,
            nptValue = inputmask?._valueGet();

        if (opts.showMaskOnFocus) {
            if (nptValue !== _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).join("")) {
                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), _positioning__WEBPACK_IMPORTED_MODULE_0__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask)));
            } /*else if (mouseEnter === false) { //only executed on focus without mouseenter
					caret(input, seekNext(getLastValidPosition()));
				}*/
        }
        if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)) || _positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1)) {
            EventHandlers.clickEvent.apply(input, [e, true]);
        }
        inputmask.undoValue = inputmask?._valueGet(true);
    },
    invalidEvent: function (e) {
        this.inputmask.validationEvent = true;
    },
    mouseleaveEvent: function () {
        const inputmask = this.inputmask, opts = inputmask.opts;

        var input = this;
        inputmask.mouseEnter = false;
        if (opts.clearMaskOnLostFocus && (input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
        }
    },
    clickEvent: function (e, tabbed) {
        const inputmask = this.inputmask;
        inputmask.clicked++;

        var input = this;
        if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement === input) {
            var newCaretPosition = _positioning__WEBPACK_IMPORTED_MODULE_0__.determineNewCaretPosition.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input), tabbed);
            if (newCaretPosition !== undefined) {
                _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input, newCaretPosition);
            }
        }
    },
    cutEvent: function (e) {
        const inputmask = this.inputmask, maskset = inputmask.maskset;

        var input = this,
            pos = _positioning__WEBPACK_IMPORTED_MODULE_0__.caret.call(inputmask, input);

        //correct clipboardData
        var clipData = inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice(pos.begin, pos.end),
            clipDataText = inputmask.isRTL ? clipData.reverse().join("") : clipData.join("");
        if (window.navigator.clipboard) window.navigator.clipboard.writeText(clipDataText);
        else if (window.clipboardData && window.clipboardData.getData) { // IE
            window.clipboardData.setData("Text", clipDataText);
        }
        _validation__WEBPACK_IMPORTED_MODULE_3__.handleRemove.call(inputmask, input, _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete, pos);
        (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== inputmask._valueGet(true));
    },
    blurEvent: function (e) {
        const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
        inputmask.clicked = 0;

        var $input = $(this),
            input = this;
        if (input.inputmask) {
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, inputmask.originalPlaceholder);
            var nptValue = input.inputmask._valueGet(),
                buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask).slice();

            if (nptValue !== "") {
                if (opts.clearMaskOnLostFocus) {
                    if (_positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1 && nptValue === _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).join("")) {
                        buffer = [];
                    } else { //clearout optional tail of the mask
                        _inputHandling__WEBPACK_IMPORTED_MODULE_4__.clearOptionalTail.call(inputmask, buffer);
                    }
                }
                if (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, buffer) === false) {
                    setTimeout(function () {
                        $input.trigger("incomplete");
                    }, 0);
                    if (opts.clearIncomplete) {
                        _positioning__WEBPACK_IMPORTED_MODULE_0__.resetMaskSet.call(inputmask);
                        if (opts.clearMaskOnLostFocus) {
                            buffer = [];
                        } else {
                            buffer = _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice();
                        }

                    }
                }

                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(input, buffer, undefined, e);
            }

            if (inputmask.undoValue !== inputmask._valueGet(true)) {
                inputmask.undoValue = inputmask._valueGet(true);
                $input.trigger("change");
            }
        }
    }
    ,
    mouseenterEvent: function () {
        const inputmask = this.inputmask, {showMaskOnHover} = inputmask.opts;

        var input = this;
        inputmask.mouseEnter = true;
        if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
            var bufferTemplate = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask)).join("");
            if (showMaskOnHover) {
                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.HandleNativePlaceholder)(input, bufferTemplate);
            }
        }
    }
    ,
    submitEvent: function () { //trigger change on submit if any
        const inputmask = this.inputmask, opts = inputmask.opts;

        if (inputmask.undoValue !== inputmask._valueGet(true)) {
            inputmask.$el.trigger("change");
        }
        if (/*opts.clearMaskOnLostFocus && */_positioning__WEBPACK_IMPORTED_MODULE_0__.getLastValidPosition.call(inputmask) === -1 && inputmask._valueGet && inputmask._valueGet() === _positioning__WEBPACK_IMPORTED_MODULE_0__.getBufferTemplate.call(inputmask).join("")) {
            inputmask._valueSet(""); //clear masktemplete on submit and still has focus
        }
        if (opts.clearIncomplete && _validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask)) === false) {
            inputmask._valueSet("");
        }
        if (opts.removeMaskOnSubmit) {
            inputmask._valueSet(inputmask.unmaskedvalue(), true);
            setTimeout(function () {
                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.writeBuffer)(inputmask.el, _positioning__WEBPACK_IMPORTED_MODULE_0__.getBuffer.call(inputmask));
            }, 0);
        }
    }
    ,
    resetEvent: function () {
        const inputmask = this.inputmask;

        inputmask.refreshValue = true; //indicate a forced refresh when there is a call to the value before leaving the triggering event fn
        setTimeout(function () {
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_4__.applyInputValue)(inputmask.el, inputmask._valueGet(true));
        }, 0);
    }
};


/***/ }),

/***/ "./node_modules/inputmask/lib/eventruler.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/eventruler.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRuler": function() { return /* binding */ EventRuler; }
/* harmony export */ });
/* harmony import */ var _inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/lib/inputmask.js");
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");







var EventRuler = {
    on: function (input, eventName, eventHandler) {
        const $ = input.inputmask.dependencyLib;

        var ev = function (e) {
            if (e.originalEvent) {
                e = e.originalEvent || e; //get original event from jquery evenbt
                arguments[0] = e;
            }
            // console.log(e.type);
            var that = this, args, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : undefined;
            if (inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
                var imOpts = $.data(that, "_inputmask_opts");
                $(that).off(); //unbind all events
                if (imOpts) {
                    (new _inputmask__WEBPACK_IMPORTED_MODULE_0__["default"](imOpts)).mask(that);
                }
            } else if (!["submit", "reset", "setvalue"].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || (that.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.key === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.c) || (opts.tabThrough === false && e.key === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Tab))))) {
                e.preventDefault();
            } else {
                switch (e.type) {
                    case "input":
                        if (inputmask.skipInputEvent === true) {
                            inputmask.skipInputEvent = false;
                            return e.preventDefault();
                        }

                        // if (mobile) { //this causes problem see #2220
                        // 	args = arguments;
                        // 	setTimeout(function () { //needed for caret selection when entering a char on Android 8 - #1818
                        // 		eventHandler.apply(that, args);
                        // 		caret(that, that.inputmask.caretPos, undefined, true);
                        // 	}, 0);
                        // 	return false;
                        // }
                        break;
                    case "click":
                    case "focus":
                        if (inputmask.validationEvent) { // #841
                            inputmask.validationEvent = false;
                            input.blur();
                            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_3__.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask)).join(""));
                            setTimeout(function () {
                                input.focus();
                            }, opts.validationEventTimeOut);
                            return false;
                        }
                        args = arguments;
                        setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
                            if (!input.inputmask) {
                                // `inputmask.remove()` was called before this callback
                                return;
                            }
                            eventHandler.apply(that, args);
                        }, 0);
                        return /*false*/; //#2423
                }
                var returnVal = eventHandler.apply(that, arguments);
                if (returnVal === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                return returnVal;
            }
        };
        if (["submit", "reset"].includes(eventName)) {
            ev = ev.bind(input); //bind creates a new eventhandler (wrap)
            if (input.form !== null) $(input.form).on(eventName, ev);
        } else {
            $(input).on(eventName, ev);
        }

        //keep instance of the event
        input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
        input.inputmask.events[eventName].push(ev);

    },
    off: function (input, event) {
        if (input.inputmask && input.inputmask.events) {
            const $ = input.inputmask.dependencyLib;
            let events = input.inputmask.events;
            if (event) {
                events = [];
                events[event] = input.inputmask.events[event];
            }
            for (let eventName in events) {
                let evArr = events[eventName];
                while (evArr.length > 0) {
                    let ev = evArr.pop();
                    if (["submit", "reset",].includes(eventName)) {
                        if (input.form !== null) $(input.form).off(eventName, ev);
                    } else {
                        $(input).off(eventName, ev);
                    }
                }
                delete input.inputmask.events[eventName];
            }
        }
    }
};


/***/ }),

/***/ "./node_modules/inputmask/lib/global/window.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/global/window.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");


/* harmony default export */ __webpack_exports__["default"] = (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"] ? window : {});


/***/ }),

/***/ "./node_modules/inputmask/lib/inputHandling.js":
/*!*****************************************************!*\
  !*** ./node_modules/inputmask/lib/inputHandling.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandleNativePlaceholder": function() { return /* binding */ HandleNativePlaceholder; },
/* harmony export */   "applyInputValue": function() { return /* binding */ applyInputValue; },
/* harmony export */   "checkVal": function() { return /* binding */ checkVal; },
/* harmony export */   "clearOptionalTail": function() { return /* binding */ clearOptionalTail; },
/* harmony export */   "unmaskedvalue": function() { return /* binding */ unmaskedvalue; },
/* harmony export */   "writeBuffer": function() { return /* binding */ writeBuffer; }
/* harmony export */ });
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");










function applyInputValue(input, value) {
    const inputmask = input ? input.inputmask : this, opts = inputmask.opts;

    input.inputmask.refreshValue = false;
    if (typeof opts.onBeforeMask === "function") value = opts.onBeforeMask.call(inputmask, value, opts) || value;
    value = (value || "").toString().split("");
    checkVal(input, true, false, value);
    inputmask.undoValue = inputmask._valueGet(true);
    if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("") && _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask) === -1) {
        input.inputmask._valueSet("");
    }
}

//todo put on prototype?
function clearOptionalTail(buffer) {
    const inputmask = this;

    buffer.length = 0;
    var template = _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getMaskTemplate.call(inputmask, true, 0, true, undefined, true), lmnt;
    while ((lmnt = template.shift()) !== undefined) buffer.push(lmnt);
    return buffer;
}

function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
    const inputmask = input ? input.inputmask : this,
        maskset = inputmask.maskset,
        opts = inputmask.opts, $ = inputmask.dependencyLib;

    var inputValue = nptvl.slice(),
        charCodes = "",
        initialNdx = -1,
        result = undefined, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
    opts.skipOptionalPartCharacter = ""; //see issue #2311

    function isTemplateMatch(ndx, charCodes) {
        var targetTemplate = _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getMaskTemplate.call(inputmask, true, 0).slice(ndx, _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, ndx, false, false)).join("").replace(/'/g, ""),
            charCodeNdx = targetTemplate.indexOf(charCodes);
        //strip spaces from targetTemplate
        while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ") charCodeNdx--;

        var match = charCodeNdx === 0 && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx)
            && (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0)
                || (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.static === true && _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === ("'" + charCodes.charAt(0)))
                || (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx).match.nativeDef === " " && (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0)
                    || (_validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.static === true && _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getTest.call(inputmask, ndx + 1).match.nativeDef === ("'" + charCodes.charAt(0))))));

        if (!match && charCodeNdx > 0 && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx, false, true)) {
            var nextPos = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, ndx);
            if (inputmask.caretPos.begin < nextPos) {
                inputmask.caretPos = {begin: nextPos};
            }
        }
        return match;
    }

    _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
    maskset.tests = {}; //reset tests ~ possible after alternating
    initialNdx = opts.radixPoint ? _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {
        begin: 0,
        end: 0
    }, false, opts.__financeInput === false ? "radixFocus" : undefined).begin : 0;
    maskset.p = initialNdx;
    inputmask.caretPos = {begin: initialNdx};

    var staticMatches = [], prevCaretPos = inputmask.caretPos;
    inputValue.forEach(function (charCode, ndx) {
        if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
            /*if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true) &&
                isValid.call(inputmask, ndx, inputValue[ndx], true, undefined, true, true) === false) {
                inputmask.caretPos.begin++;
            } else*/
            {
                var keypress = new $.Event("_checkval");
                keypress.key = charCode;
                charCodes += charCode;
                var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true);
                if (!isTemplateMatch(initialNdx, charCodes)) {
                    result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, inputmask.caretPos.begin);

                    if (result) {
                        initialNdx = inputmask.caretPos.begin + 1;
                        charCodes = "";
                    }
                } else {
                    result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, lvp + 1);
                }
                if (result) {
                    if (result.pos !== undefined && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === undefined) {
                        staticMatches.push(result.pos);
                        if (!inputmask.isRTL) {
                            result.forwardPosition = result.pos + 1;
                        }
                    }
                    writeBuffer.call(inputmask, undefined, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), result.forwardPosition, keypress, false);
                    inputmask.caretPos = {begin: result.forwardPosition, end: result.forwardPosition};
                    prevCaretPos = inputmask.caretPos;
                } else {
                    if (maskset.validPositions[ndx] === undefined && inputValue[ndx] === _validation_tests__WEBPACK_IMPORTED_MODULE_1__.getPlaceholder.call(inputmask, ndx) && _positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ndx, true)) {
                        inputmask.caretPos.begin++;
                    } else inputmask.caretPos = prevCaretPos; //restore the caret position from before the failed validation
                }
            }
        }
    });
    if (staticMatches.length > 0) {
        var sndx, validPos, nextValid = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, -1, undefined, false);
        if ((!_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) && staticMatches.length <= nextValid)
            || (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) && staticMatches.length > 0 && (staticMatches.length !== nextValid && staticMatches[0] === 0))) { //should check if is sequence starting from 0
            var nextSndx = nextValid;
            while ((sndx = staticMatches.shift()) !== undefined) {
                var keypress = new $.Event("_checkval");
                validPos = maskset.validPositions[sndx];
                validPos.generatedInput = true;
                keypress.key = validPos.input;
                result = _eventhandlers__WEBPACK_IMPORTED_MODULE_5__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, strict, nextSndx);
                if (result && result.pos !== undefined && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) {
                    staticMatches.push(result.pos);
                } else if (!result) break;
                nextSndx++;
            }
        } else { //mark al statics as generated
            // while ((sndx = staticMatches.pop())) {
            // 	validPos = maskset.validPositions[sndx];
            // 	if (validPos) {
            // 		validPos.generatedInput = true;
            // 	}
            // }
        }
    }
    if (writeOut) {
        writeBuffer.call(
            inputmask,
            input,
            _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin,
            initiatingEvent || new $.Event("checkval"),
            initiatingEvent && ((initiatingEvent.type === "input" && inputmask.undoValue !== _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).join("")) || initiatingEvent.type === "paste"));
        // for (var vndx in maskset.validPositions) {
        // 	if (maskset.validPositions[vndx].match.generated !== true) { //only remove non forced generated
        // 		delete maskset.validPositions[vndx].generatedInput; //clear generated markings ~ consider initializing with a  value as fully typed
        // 	}
        // }
    }
    opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

function HandleNativePlaceholder(npt, value) {
    const inputmask = npt ? npt.inputmask : this;

    if (_environment__WEBPACK_IMPORTED_MODULE_4__.ie) {
        if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
            var buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).slice(),
                nptValue = npt.inputmask._valueGet();
            if (nptValue !== value) {
                var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask);
                if (lvp === -1 && nptValue === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("")) {
                    buffer = [];
                } else if (lvp !== -1) { //clearout optional tail of the mask
                    clearOptionalTail.call(inputmask, buffer);
                }
                writeBuffer(npt, buffer);
            }
        }
    } else if (npt.placeholder !== value) {
        npt.placeholder = value;
        if (npt.placeholder === "") npt.removeAttribute("placeholder");
    }
}

function unmaskedvalue(input) {
    const inputmask = input ? input.inputmask : this,
        opts = inputmask.opts,
        maskset = inputmask.maskset;

    if (input) {
        if (input.inputmask === undefined) {
            return input.value;
        }
        if (input.inputmask && input.inputmask.refreshValue) { //forced refresh from the value form.reset
            applyInputValue(input, input.inputmask._valueGet(true));
        }
    }
    var umValue = [],
        vps = maskset.validPositions;
    for (let pndx = 0, vpl = vps.length; pndx < vpl; pndx++) {
        if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || (Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true))) {
            //only include generated input with multiple masks (check on metadata)
            umValue.push(vps[pndx].input);
        }
    }
    var unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
    if (typeof opts.onUnMask === "function") {
        var bufferValue = (inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)).join("");
        unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
    }
    return unmaskedValue;
}

function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
    const inputmask = input ? input.inputmask : this,
        opts = inputmask.opts,
        $ = inputmask.dependencyLib;

    if (event && typeof opts.onBeforeWrite === "function") {
        //    buffer = buffer.slice(); //prevent uncontrolled manipulation of the internal buffer
        var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
        if (result) {
            if (result.refreshFromBuffer) {
                var refresh = result.refreshFromBuffer;
                _validation__WEBPACK_IMPORTED_MODULE_3__.refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
            }
            if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
        }
    }
    if (input !== undefined) {
        input.inputmask._valueSet(buffer.join(""));
        if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
            // console.log(caretPos);
            _positioning__WEBPACK_IMPORTED_MODULE_2__.caret.call(inputmask, input, caretPos, undefined, undefined, (event !== undefined && event.type === "keydown" && (event.key === _keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Delete || event.key === _keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Backspace)));
        }
        if (triggerEvents === true) {
            var $input = $(input), nptVal = input.inputmask._valueGet();
            input.inputmask.skipInputEvent = true;
            $input.trigger("input");
            setTimeout(function () { //timeout needed for IE
                if (nptVal === _positioning__WEBPACK_IMPORTED_MODULE_2__.getBufferTemplate.call(inputmask).join("")) {
                    $input.trigger("cleared");
                } else if (_validation__WEBPACK_IMPORTED_MODULE_3__.isComplete.call(inputmask, buffer) === true) {
                    $input.trigger("complete");
                }
            }, 0);
        }
    }
}


/***/ }),

/***/ "./node_modules/inputmask/lib/inputmask.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/inputmask.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask */ "./node_modules/inputmask/lib/mask.js");
/* harmony import */ var _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _global_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/lib/global/window.js");
/* harmony import */ var _mask_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-lexer */ "./node_modules/inputmask/lib/mask-lexer.js");
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _eventruler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventruler */ "./node_modules/inputmask/lib/eventruler.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./definitions */ "./node_modules/inputmask/lib/definitions.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaults */ "./node_modules/inputmask/lib/defaults.js");
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/inputmask/lib/canUseDOM.js");
/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) Robin Herbots
 * Licensed under the MIT license
 */














const document = _global_window__WEBPACK_IMPORTED_MODULE_2__["default"].document, dataKey = "_inputmask_opts";

function Inputmask(alias, options, internal) {
    if (!_canUseDOM__WEBPACK_IMPORTED_MODULE_11__["default"]) {
        return;
    }

    //allow instanciating without new
    if (!(this instanceof Inputmask)) {
        return new Inputmask(alias, options, internal);
    }

    this.dependencyLib = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.el = undefined;
    this.events = {};
    this.maskset = undefined;

    if (internal !== true) {
        //init options
        if (Object.prototype.toString.call(alias) === "[object Object]") {
            options = alias;
        } else {
            options = options || {};
            if (alias) options.alias = alias;
        }
        this.opts = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, {}, this.defaults, options);
        this.noMasksCache = options && options.definitions !== undefined;
        this.userOptions = options || {}; //user passed options
        resolveAlias(this.opts.alias, options, this.opts);
    }

    //maskscope properties
    this.refreshValue = false; //indicate a refresh from the inputvalue is needed (form.reset)
    this.undoValue = undefined;
    this.$el = undefined;
    this.skipInputEvent = false; //skip when triggered from within inputmask
    this.validationEvent = false;
    this.ignorable = false;
    this.maxLength;
    this.mouseEnter = false;
    this.clicked = 0;
    this.originalPlaceholder = undefined; //needed for FF
    this.isComposing = false, //keydowncode == 229  compositionevent fallback
    this.hasAlternator = false;
}

Inputmask.prototype = {
    dataAttribute: "data-inputmask", //data attribute prefix used for attribute binding
    //options default
    defaults: _defaults__WEBPACK_IMPORTED_MODULE_10__["default"],
    definitions: _definitions__WEBPACK_IMPORTED_MODULE_9__["default"],
    aliases: {}, //aliases definitions
    masksCache: {},
    get isRTL() {
        return this.opts.isRTL || this.opts.numericInput;
    },
    mask: function (elems) {
        var that = this;
        if (typeof elems === "string") {
            elems = (document.getElementById(elems) || document.querySelectorAll(elems));
        }
        elems = elems.nodeName ? [elems] : (Array.isArray(elems) ? elems : [].slice.call(elems)); //[].slice as alternate for Array.from (Yandex browser)
        elems.forEach(function (el, ndx) {
            var scopedOpts = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, {}, that.opts);
            if (importAttributeOptions(el, scopedOpts, _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, {}, that.userOptions), that.dataAttribute)) {
                var maskset = (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(scopedOpts, that.noMasksCache);
                if (maskset !== undefined) {
                    if (el.inputmask !== undefined) {
                        el.inputmask.opts.autoUnmask = true; //force autounmasking when remasking
                        el.inputmask.remove();
                    }
                    //store inputmask instance on the input with element reference
                    el.inputmask = new Inputmask(undefined, undefined, true);
                    el.inputmask.opts = scopedOpts;
                    el.inputmask.noMasksCache = that.noMasksCache;
                    el.inputmask.userOptions = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, {}, that.userOptions);
                    // el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                    el.inputmask.el = el;
                    el.inputmask.$el = (0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
                    el.inputmask.maskset = maskset;

                    _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].data(el, dataKey, that.userOptions);
                    _mask__WEBPACK_IMPORTED_MODULE_0__.mask.call(el.inputmask);
                }
            }
        });
        return elems && elems[0] ? (elems[0].inputmask || this) : this;
    },
    option: function (options, noremask) { //set extra options || retrieve value of a current option
        if (typeof options === "string") {
            return this.opts[options];
        } else if (typeof options === "object") {
            _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(this.userOptions, options); //user passed options
            //remask
            if (this.el && noremask !== true) {
                this.mask(this.el);
            }
            return this;
        }
    },
    unmaskedvalue: function (value) {
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        if (this.el === undefined || value !== undefined) {
            var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
            _inputHandling__WEBPACK_IMPORTED_MODULE_7__.checkVal.call(this, undefined, false, false, valueBuffer);
            if (typeof this.opts.onBeforeWrite === "function") this.opts.onBeforeWrite.call(this, undefined, _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this), 0, this.opts);
        }
        return _inputHandling__WEBPACK_IMPORTED_MODULE_7__.unmaskedvalue.call(this, this.el);
    },
    remove: function () {
        if (this.el) {
            _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].data(this.el, dataKey, null); //invalidate
            //writeout the value
            var cv = this.opts.autoUnmask ? (0,_inputHandling__WEBPACK_IMPORTED_MODULE_7__.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
            if (cv !== _positioning__WEBPACK_IMPORTED_MODULE_5__.getBufferTemplate.call(this).join("")) this._valueSet(cv, this.opts.autoUnmask); else this._valueSet("");
            //unbind all events
            _eventruler__WEBPACK_IMPORTED_MODULE_8__.EventRuler.off(this.el);

            //restore the value property
            var valueProperty;
            if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value");
                if (valueProperty) {
                    if (this.__valueGet) {
                        Object.defineProperty(this.el, "value", {
                            get: this.__valueGet,
                            set: this.__valueSet,
                            configurable: true
                        });
                    }
                }
            } else if (document.__lookupGetter__ && this.el.__lookupGetter__("value")) {
                if (this.__valueGet) {
                    this.el.__defineGetter__("value", this.__valueGet);
                    this.el.__defineSetter__("value", this.__valueSet);
                }
            }
            //clear data
            this.el.inputmask = undefined;
        }
        return this.el;
    },
    getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        return (this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_5__.getBufferTemplate.call(this).reverse() : _positioning__WEBPACK_IMPORTED_MODULE_5__.getBufferTemplate.call(this)).join("");
    },
    hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
        return !this.opts.autoUnmask;
    },
    isComplete: function () {
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        return _validation__WEBPACK_IMPORTED_MODULE_6__.isComplete.call(this, _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this));
    },
    getmetadata: function () { //return mask metadata if exists
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        if (Array.isArray(this.maskset.metadata)) {
            var maskTarget = _validation_tests__WEBPACK_IMPORTED_MODULE_4__.getMaskTemplate.call(this, true, 0, false).join("");
            this.maskset.metadata.forEach(function (mtdt) {
                if (mtdt.mask === maskTarget) {
                    maskTarget = mtdt;
                    return false;
                }

                return true;
            });
            return maskTarget;
        }
        return this.maskset.metadata;
    },
    isValid: function (value) {
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        if (value) {
            var valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
            _inputHandling__WEBPACK_IMPORTED_MODULE_7__.checkVal.call(this, undefined, true, false, valueBuffer);
        } else {
            value = this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).join("");
        }
        var buffer = _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this);
        var rl = _positioning__WEBPACK_IMPORTED_MODULE_5__.determineLastRequiredPosition.call(this),
            lmib = buffer.length - 1;
        for (; lmib > rl; lmib--) {
            if (_positioning__WEBPACK_IMPORTED_MODULE_5__.isMask.call(this, lmib)) break;
        }
        buffer.splice(rl, lmib + 1 - rl);

        return _validation__WEBPACK_IMPORTED_MODULE_6__.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).join(""));

    },
    format: function (value, metadata) {
        this.maskset = this.maskset || (0,_mask_lexer__WEBPACK_IMPORTED_MODULE_3__.generateMaskSet)(this.opts, this.noMasksCache);
        let valueBuffer = (typeof this.opts.onBeforeMask === "function" ? (this.opts.onBeforeMask.call(this, value, this.opts) || value) : value).split("");
        _inputHandling__WEBPACK_IMPORTED_MODULE_7__.checkVal.call(this, undefined, true, false, valueBuffer);
        let formattedValue = this.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).slice().reverse().join("") : _positioning__WEBPACK_IMPORTED_MODULE_5__.getBuffer.call(this).join("");
        return metadata ? {
            value: formattedValue,
            metadata: this.getmetadata()
        } : formattedValue;
    },
    setValue: function (value) {
        if (this.el) {
            (0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"])(this.el).trigger("setvalue", [value]);
        }
    },
    analyseMask: _mask_lexer__WEBPACK_IMPORTED_MODULE_3__.analyseMask
};

function resolveAlias(aliasStr, options, opts) {
    var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
    if (aliasDefinition) {
        if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
        _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, opts, aliasDefinition); //merge alias definition in the options
        _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, opts, options); //reapply extra given options
        return true;
    } else //alias not found - try as mask
    if (opts.mask === null) {
        opts.mask = aliasStr;
    }

    return false;
}

function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
    function importOption(option, optionData) {
        const attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
        optionData = optionData !== undefined ? optionData : npt.getAttribute(attrOption);
        if (optionData !== null) {
            if (typeof optionData === "string") {
                if (option.indexOf("on") === 0) {
                    optionData = _global_window__WEBPACK_IMPORTED_MODULE_2__["default"][optionData];
                }//get function definition
                else if (optionData === "false") {
                    optionData = false;
                } else if (optionData === "true") optionData = true;
            }
            userOptions[option] = optionData;
        }
    }

    if (opts.importDataAttributes === true) {
        var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;

        if (attrOptions && attrOptions !== "") {
            attrOptions = attrOptions.replace(/'/g, "\"");
            dataoptions = JSON.parse("{" + attrOptions + "}");
        }

        //resolve aliases
        if (dataoptions) { //pickup alias from dataAttribute
            optionData = undefined;
            for (p in dataoptions) {
                if (p.toLowerCase() === "alias") {
                    optionData = dataoptions[p];
                    break;
                }
            }
        }
        importOption("alias", optionData); //pickup alias from dataAttribute-alias
        if (userOptions.alias) {
            resolveAlias(userOptions.alias, userOptions, opts);
        }

        for (option in opts) {
            if (dataoptions) {
                optionData = undefined;
                for (p in dataoptions) {
                    if (p.toLowerCase() === option.toLowerCase()) {
                        optionData = dataoptions[p];
                        break;
                    }
                }
            }
            importOption(option, optionData);
        }
    }
    _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, opts, userOptions);

    //handle dir=rtl
    if (npt.dir === "rtl" || opts.rightAlign) {
        npt.style.textAlign = "right";
    }

    if (npt.dir === "rtl" || opts.numericInput) {
        npt.dir = "ltr";
        npt.removeAttribute("dir");
        opts.isRTL = true;
    }

    return Object.keys(userOptions).length;
}

//apply defaults, definitions, aliases
Inputmask.extendDefaults = function (options) {
    _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, Inputmask.prototype.defaults, options);
};
Inputmask.extendDefinitions = function (definition) {
    _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, Inputmask.prototype.definitions, definition);
};
Inputmask.extendAliases = function (alias) {
    _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"].extend(true, Inputmask.prototype.aliases, alias);
};
//static fn on inputmask
Inputmask.format = function (value, options, metadata) {
    return Inputmask(options).format(value, metadata);
};
Inputmask.unmask = function (value, options) {
    return Inputmask(options).unmaskedvalue(value);
};
Inputmask.isValid = function (value, options) {
    return Inputmask(options).isValid(value);
};
Inputmask.remove = function (elems) {
    if (typeof elems === "string") {
        elems = document.getElementById(elems) || document.querySelectorAll(elems);
    }
    elems = elems.nodeName ? [elems] : elems;
    elems.forEach(function (el) {
        if (el.inputmask) el.inputmask.remove();
    });
};
Inputmask.setValue = function (elems, value) {
    if (typeof elems === "string") {
        elems = document.getElementById(elems) || document.querySelectorAll(elems);
    }
    elems = elems.nodeName ? [elems] : elems;
    elems.forEach(function (el) {
        if (el.inputmask) el.inputmask.setValue(value); else (0,_dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"])(el).trigger("setvalue", [value]);
    });
};

Inputmask.dependencyLib = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_1__["default"];

//make inputmask available
_global_window__WEBPACK_IMPORTED_MODULE_2__["default"].Inputmask = Inputmask;
/* harmony default export */ __webpack_exports__["default"] = (Inputmask);


/***/ }),

/***/ "./node_modules/inputmask/lib/keycode.js":
/*!***********************************************!*\
  !*** ./node_modules/inputmask/lib/keycode.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyCode": function() { return /* binding */ keyCode; },
/* harmony export */   "keys": function() { return /* binding */ keys; },
/* harmony export */   "toKey": function() { return /* binding */ toKey; },
/* harmony export */   "toKeyCode": function() { return /* binding */ toKeyCode; }
/* harmony export */ });


const keyCode = {
    "AltGraph": 18,
    "ArrowDown": 40,
    "ArrowLeft": 37,
    "ArrowRight": 39,
    "ArrowUp": 38,
    "Backspace": 8,
    "BACKSPACE_SAFARI": 127,
    "CapsLock": 20,
    "Delete": 46,
    "End": 35,
    "Enter": 13,
    "Escape": 27,
    "Home": 36,
    "Insert": 45,
    "PageDown": 34,
    "PageUp": 33,
    "Space": 32,
    "Tab": 9,
    "c": 67,
    "x": 88,
    "z": 90,
    "Shift": 16,
    "Control": 17,
    "Alt": 18,
    "Pause": 19,
    "Meta_LEFT": 91,
    "Meta_RIGHT": 92,
    "ContextMenu": 93,
    "Process": 229,
    "Unidentified": 229,
    "F1": 112,
    "F2": 113,
    "F3": 114,
    "F4": 115,
    "F5": 116,
    "F6": 117,
    "F7": 118,
    "F8": 119,
    "F9": 120,
    "F10": 121,
    "F11": 122,
    "F12": 123
};

const keyCodeRev = Object.entries(keyCode).reduce((acc, [key, value]) => (acc[value] = acc[value] === undefined ? key : acc[value] , acc), {});
const keys = Object.entries(keyCode).reduce((acc, [key, value]) => (acc[key] = key === "Space" ? " " : key, acc), {});

function toKey(keyCode, shiftKey) {
    return keyCodeRev[keyCode] || (shiftKey ? String.fromCharCode(keyCode) : String.fromCharCode(keyCode).toLowerCase());
}

function toKeyCode(key) {
    return keyCode[key];
}


/***/ }),

/***/ "./node_modules/inputmask/lib/mask-lexer.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/mask-lexer.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analyseMask": function() { return /* binding */ analyseMask; },
/* harmony export */   "generateMaskSet": function() { return /* binding */ generateMaskSet; }
/* harmony export */ });
/* harmony import */ var _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js");
/* harmony import */ var _masktoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masktoken */ "./node_modules/inputmask/lib/masktoken.js");
/* harmony import */ var _inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/lib/inputmask.js");
/* harmony import */ var _escapeRegex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escapeRegex */ "./node_modules/inputmask/lib/escapeRegex.js");







function generateMaskSet(opts, nocache) {
    var ms;

    function preProcessMask(mask, {repeat, groupmarker, quantifiermarker, keepStatic}) {
        if (repeat > 0 || repeat === "*" || repeat === "+") {
            var repeatStart = repeat === "*" ? 0 : (repeat === "+" ? 1 : repeat);
            mask = groupmarker[0] + mask + groupmarker[1] + quantifiermarker[0] + repeatStart + "," + repeat + quantifiermarker[1];
        }
        if (keepStatic === true) {
            let optionalRegex = "(.)\\[([^\\]]*)\\]", // "(?<p1>.)\\[(?<p2>[^\\]]*)\\]", remove named capture group @2428
                maskMatches = mask.match(new RegExp(optionalRegex, "g"));
            maskMatches && maskMatches.forEach((m, i) => {
                let [p1, p2] = m.split("["); p2 = p2.replace("]", "");
                mask = mask.replace(new RegExp(`${(0,_escapeRegex__WEBPACK_IMPORTED_MODULE_3__["default"])(p1)}\\[${(0,_escapeRegex__WEBPACK_IMPORTED_MODULE_3__["default"])(p2)}\\]`),
                    p1.charAt(0) === p2.charAt(0) ?
                        `(${p1}|${p1}${p2})` :
                        `${p1}[${p2}]`);
                // console.log(mask);
            });
        }

        return mask;
    }

    function generateMask(mask, metadata, opts) {
        var regexMask = false;
        if (mask === null || mask === "") {
            regexMask = opts.regex !== null;
            if (regexMask) {
                mask = opts.regex;
                mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
            } else {
                regexMask = true;
                mask = ".*";
            }
        }
        if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
            opts.placeholder = "";
        } //hide placeholder with single non-greedy mask
        mask = preProcessMask(mask, opts);

        // console.log(mask);
        var masksetDefinition, maskdefKey;
        maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
        if (opts.keepStatic !== null) { //keepstatic modifies the output from the testdefinitions ~ so differentiate in the maskcache
            maskdefKey = "ks_" + opts.keepStatic + maskdefKey;
        }

        if (_inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.masksCache[maskdefKey] === undefined || nocache === true) {
            masksetDefinition = {
                "mask": mask,
                "maskToken": _inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.analyseMask(mask, regexMask, opts),
                "validPositions": [],
                "_buffer": undefined,
                "buffer": undefined,
                "tests": {},
                "excludes": {}, //excluded alternations
                "metadata": metadata,
                "maskLength": undefined,
                "jitOffset": {}
            };
            if (nocache !== true) {
                _inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.masksCache[maskdefKey] = masksetDefinition;
                masksetDefinition = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__["default"].extend(true, {}, _inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.masksCache[maskdefKey]);
            }
        } else {
            masksetDefinition = _dependencyLibs_inputmask_dependencyLib__WEBPACK_IMPORTED_MODULE_0__["default"].extend(true, {}, _inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.masksCache[maskdefKey]);
        }

        return masksetDefinition;
    }

    if (typeof opts.mask === "function") { //allow mask to be a preprocessing fn - should return a valid mask
        opts.mask = opts.mask(opts);
    }
    if (Array.isArray(opts.mask)) {
        if (opts.mask.length > 1) {
            if (opts.keepStatic === null) { //enable by default when passing multiple masks when the option is not explicitly specified
                opts.keepStatic = true;
            }
            var altMask = opts.groupmarker[0];
            (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
                if (altMask.length > 1) {
                    altMask += opts.alternatormarker;
                }
                if (msk.mask !== undefined && typeof msk.mask !== "function") {
                    altMask += msk.mask;
                } else {
                    altMask += msk;
                }
            });
            altMask += opts.groupmarker[1];
            // console.log(altMask);
            return generateMask(altMask, opts.mask, opts);
        } else {
            opts.mask = opts.mask.pop();
        }
    }
    if (opts.mask && opts.mask.mask !== undefined && typeof opts.mask.mask !== "function") {
        ms = generateMask(opts.mask.mask, opts.mask, opts);
    } else {
        ms = generateMask(opts.mask, opts.mask, opts);
    }
    if (opts.keepStatic === null) opts.keepStatic = false;
    return ms;
}

function analyseMask(mask, regexMask, opts) {
    const tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
        //Thx to https://github.com/slevithan/regex-colorizer for the regexTokenizer regex
        regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g;
    var escaped = false,
        currentToken = new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](),
        match,
        m,
        openenings = [],
        maskTokens = [],
        openingToken,
        currentOpeningToken,
        alternator,
        lastMatch,
        closeRegexGroup = false;

    //test definition => {fn: RegExp/function, static: true/false optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
    function insertTestDefinition(mtoken, element, position) {
        position = position !== undefined ? position : mtoken.matches.length;
        var prevMatch = mtoken.matches[position - 1];
        if (regexMask) {
            if (element.indexOf("[") === 0 || (escaped && /\\d|\\s|\\w|\\p/i.test(element)) || element === ".") {
                let flag = opts.casing ? "i" : "";
                if (/^\\p\{.*}$/i.test(element))
                    flag += "u";
                mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, flag),
                    static: false,
                    optionality: false,
                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: undefined,
                    nativeDef: element
                });
            } else {
                if (escaped) element = element[element.length - 1];
                element.split("").forEach(function (lmnt, ndx) {
                    prevMatch = mtoken.matches[position - 1];
                    mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test((opts.staticDefinitionSymbol || lmnt)) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                        static: true,
                        optionality: false,
                        newBlockMarker: prevMatch === undefined ? "master" : (prevMatch.def !== lmnt && prevMatch.static !== true),
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                        nativeDef: (escaped ? "'" : "") + lmnt
                    });
                });
            }
            escaped = false;
        } else {
            var maskdef = (opts.definitions && opts.definitions[element]) || (opts.usePrototypeDefinitions && _inputmask__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.definitions[element]);
            if (maskdef && !escaped) {
                mtoken.matches.splice(position++, 0, {
                    fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                        this.test = maskdef.validator;
                    } : new RegExp("."),
                    static: maskdef.static || false,
                    optionality: maskdef.optional || false,
                    defOptionality: maskdef.optional || false, //indicator for an optional from the definition
                    newBlockMarker: (prevMatch === undefined || maskdef.optional) ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                    casing: maskdef.casing,
                    def: maskdef.definitionSymbol || element,
                    placeholder: maskdef.placeholder,
                    nativeDef: element,
                    generated: maskdef.generated
                });
            } else {
                mtoken.matches.splice(position++, 0, {
                    fn: /[a-z]/i.test((opts.staticDefinitionSymbol || element)) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                    static: true,
                    optionality: false,
                    newBlockMarker: prevMatch === undefined ? "master" : (prevMatch.def !== element && prevMatch.static !== true),
                    casing: null,
                    def: opts.staticDefinitionSymbol || element,
                    placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                    nativeDef: (escaped ? "'" : "") + element
                });
                escaped = false;
            }
        }
    }

    function verifyGroupMarker(maskToken) {
        if (maskToken && maskToken.matches) {
            maskToken.matches.forEach(function (token, ndx) {
                var nextToken = maskToken.matches[ndx + 1];
                if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) { //this is not a group but a normal mask => convert
                    token.isGroup = false;
                    if (!regexMask) {
                        insertTestDefinition(token, opts.groupmarker[0], 0);
                        if (token.openGroup !== true) {
                            insertTestDefinition(token, opts.groupmarker[1]);
                        }
                    }
                }
                verifyGroupMarker(token);
            });
        }
    }

    function defaultCase() {
        if (openenings.length > 0) {
            currentOpeningToken = openenings[openenings.length - 1];
            insertTestDefinition(currentOpeningToken, m);
            if (currentOpeningToken.isAlternator) { //handle alternator a | b case
                alternator = openenings.pop();
                for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                    if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                }
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    currentOpeningToken.matches.push(alternator);
                } else {
                    currentToken.matches.push(alternator);
                }
            }
        } else {
            insertTestDefinition(currentToken, m);
        }
    }

    function reverseTokens(maskToken) {
        function reverseStatic(st) {
            if (st === opts.optionalmarker[0]) {
                st = opts.optionalmarker[1];
            } else if (st === opts.optionalmarker[1]) {
                st = opts.optionalmarker[0];
            } else if (st === opts.groupmarker[0]) {
                st = opts.groupmarker[1];
            } else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];

            return st;
        }

        maskToken.matches = maskToken.matches.reverse();
        for (var match in maskToken.matches) {
            if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                var intMatch = parseInt(match);
                if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
                    var qt = maskToken.matches[match];
                    maskToken.matches.splice(match, 1);
                    maskToken.matches.splice(intMatch + 1, 0, qt);
                }
                if (maskToken.matches[match].matches !== undefined) {
                    maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                } else {
                    maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                }
            }
        }

        return maskToken;
    }

    function groupify(matches) {
        var groupToken = new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](true);
        groupToken.openGroup = false;
        groupToken.matches = matches;
        return groupToken;
    }

    function closeGroup() {
        // Group closing
        openingToken = openenings.pop();
        openingToken.openGroup = false; //mark group as complete
        if (openingToken !== undefined) {
            if (openenings.length > 0) {
                currentOpeningToken = openenings[openenings.length - 1];
                currentOpeningToken.matches.push(openingToken);
                if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
                    alternator = openenings.pop();
                    let altMatchesLength = alternator.matches[0].matches ? alternator.matches[0].matches.length : 1;
                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                        alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                        alternator.matches[mndx].alternatorGroup = false;
                        if (opts.keepStatic === null && altMatchesLength < (alternator.matches[mndx].matches ? alternator.matches[mndx].matches.length : 1)) { //enable by default when passing multiple masks when the option is not explicitly specified
                            opts.keepStatic = true;
                        }
                        altMatchesLength = alternator.matches[mndx].matches ? alternator.matches[mndx].matches.length : 1;
                    }
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        currentOpeningToken.matches.push(alternator);
                    } else {
                        currentToken.matches.push(alternator);
                    }
                }
            } else {
                currentToken.matches.push(openingToken);
            }
        } else {
            defaultCase();
        }
    }

    function groupQuantifier(matches) {
        var lastMatch = matches.pop();
        if (lastMatch.isQuantifier) {
            lastMatch = groupify([matches.pop(), lastMatch]);
        }
        return lastMatch;
    }

    if (regexMask) {
        opts.optionalmarker[0] = undefined;
        opts.optionalmarker[1] = undefined;
    }
    while ((match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask))) {
        m = match[0];

        if (regexMask) {
            switch (m.charAt(0)) {
                //Quantifier
                case "?":
                    m = "{0,1}";
                    break;
                case "+":
                case "*":
                    m = "{" + m + "}";
                    break;
                case "|":
                    //regex mask alternator  ex: [01][0-9]|2[0-3] => ([01][0-9]|2[0-3])
                    if (openenings.length === 0) { //wrap the mask in a group to form a regex alternator  ([01][0-9]|2[0-3])
                        var altRegexGroup = groupify(currentToken.matches);
                        altRegexGroup.openGroup = true;
                        openenings.push(altRegexGroup);
                        currentToken.matches = [];
                        closeRegexGroup = true;
                    }
                    break;
            }
            switch (m) {
                case "\\d":
                    m = "[0-9]";
                    break;
                case "\\p": //Unicode Categories
                    m += regexTokenizer.exec(mask)[0]; // {
                    m += regexTokenizer.exec(mask)[0]; // ?}
                    break;
                case "(?:": //non capturing group
                case "(?=": //lookahead
                case "(?!": //negative lookahead
                case "(?<=": //lookbehind
                case "(?<!": //negative lookbehind
                    // treat as group
                    break;
            }
        }

        if (escaped) {
            defaultCase();
            continue;
        }
        switch (m.charAt(0)) {
            case "$":
            case "^":
                //ignore beginswith and endswith as in masking this makes no point
                if (!regexMask) {
                    defaultCase();
                }
                break;
            case opts.escapeChar:
                escaped = true;
                if (regexMask) defaultCase();
                break;
            // optional closing
            case opts.optionalmarker[1]:
            case opts.groupmarker[1]:
                closeGroup();
                break;
            case opts.optionalmarker[0]:
                // optional opening
                openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](false, true));
                break;
            case opts.groupmarker[0]:
                // Group opening
                openenings.push(new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](true));
                break;
            case opts.quantifiermarker[0]:
                //Quantifier
                var quantifier = new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](false, false, true);

                m = m.replace(/[{}?]/g, ""); //? matches lazy quantifiers
                var mqj = m.split("|"),
                    mq = mqj[0].split(","),
                    mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                    mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1])),
                    mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
                if (mq0 === "*" || mq0 === "+") {
                    mq0 = mq1 === "*" ? 0 : 1;
                }
                quantifier.quantifier = {
                    min: mq0,
                    max: mq1,
                    jit: mqJit
                };
                var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                match = matches.pop();
                // if (match.isAlternator) { //handle quantifier in an alternation [0-9]{2}|[0-9]{3}
                //     matches.push(match); //push back alternator
                //     matches = match.matches; //remap target matches
                //     var groupToken = new MaskToken(true);
                //     var tmpMatch = matches.pop();
                //     matches.push(groupToken); //push the group
                //     matches = groupToken.matches;
                //     match = tmpMatch;
                // }
                if (!match.isGroup) {
                    match = groupify([match]);
                }
                matches.push(match);
                matches.push(quantifier);

                break;
            case opts.alternatormarker:
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                    if (currentOpeningToken.openGroup && //regexp alt syntax
                        (subToken.matches === undefined || (subToken.isGroup === false && subToken.isAlternator === false))) { //alternations within group
                        lastMatch = openenings.pop();
                    } else {
                        lastMatch = groupQuantifier(currentOpeningToken.matches);
                    }
                } else {
                    lastMatch = groupQuantifier(currentToken.matches);
                }
                if (lastMatch.isAlternator) {
                    openenings.push(lastMatch);
                } else {
                    if (lastMatch.alternatorGroup) {
                        alternator = openenings.pop();
                        lastMatch.alternatorGroup = false;
                    } else {
                        alternator = new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](false, false, false, true);
                    }
                    alternator.matches.push(lastMatch);
                    openenings.push(alternator);
                    if (lastMatch.openGroup) { //regexp alt syntax
                        lastMatch.openGroup = false;
                        var alternatorGroup = new _masktoken__WEBPACK_IMPORTED_MODULE_1__["default"](true);
                        alternatorGroup.alternatorGroup = true;
                        openenings.push(alternatorGroup);
                    }
                }
                break;
            default:
                defaultCase();
        }
    }

    if (closeRegexGroup) closeGroup();

    while (openenings.length > 0) {
        openingToken = openenings.pop();
        currentToken.matches.push(openingToken);
    }
    if (currentToken.matches.length > 0) {
        verifyGroupMarker(currentToken);
        maskTokens.push(currentToken);
    }

    if (opts.numericInput || opts.isRTL) {
        reverseTokens(maskTokens[0]);
    }
    // console.log(JSON.stringify(maskTokens));
    return maskTokens;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/mask.js":
/*!********************************************!*\
  !*** ./node_modules/inputmask/lib/mask.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mask": function() { return /* binding */ mask; }
/* harmony export */ });
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _inputHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputHandling */ "./node_modules/inputmask/lib/inputHandling.js");
/* harmony import */ var _eventruler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventruler */ "./node_modules/inputmask/lib/eventruler.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment */ "./node_modules/inputmask/lib/environment.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");










//todo put on the prototype?
function mask() {
    const inputmask = this,
        opts = this.opts,
        el = this.el, $ = this.dependencyLib;


    function isElementTypeSupported(input, opts) {
        function patchValueProperty(npt) {
            var valueGet;
            var valueSet;

            function patchValhook(type) {
                if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                        return elem.value;
                    };
                    var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                        elem.value = value;
                        return elem;
                    };

                    $.valHooks[type] = {
                        get: function (elem) {
                            if (elem.inputmask) {
                                if (elem.inputmask.opts.autoUnmask) {
                                    return elem.inputmask.unmaskedvalue();
                                } else {
                                    var result = valhookGet(elem);
                                    return _positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask, undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                }
                            } else {
                                return valhookGet(elem);
                            }
                        },
                        set: function (elem, value) {
                            var result = valhookSet(elem, value);
                            if (elem.inputmask) {
                                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(elem, value);
                            }
                            return result;
                        },
                        inputmaskpatch: true
                    };
                }
            }

            function getter() {
                if (this.inputmask) {
                    return this.inputmask.opts.autoUnmask ?
                        this.inputmask.unmaskedvalue() :
                        (_positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask) !== -1 || opts.nullable !== true ?
                            (((this.inputmask.shadowRoot || this.ownerDocument).activeElement) === this && opts.clearMaskOnLostFocus ?
                                (inputmask.isRTL ? _inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice()).reverse() : _inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice())).join("") :
                                valueGet.call(this)) :
                            "");
                } else {
                    return valueGet.call(this);
                }
            }

            function setter(value) {
                valueSet.call(this, value);
                if (this.inputmask) {
                    (0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(this, value);
                }
            }

            function installNativeValueSetFallback(npt) {
                _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(npt, "mouseenter", function () {
                    let input = this,
                        value = input.inputmask._valueGet(true),
                        bufferValue = (input.inputmask.isRTL ? _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(input.inputmask).slice().reverse() : _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(input.inputmask)).join("");
                    if (value != bufferValue) {
                        (0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(input, value);
                    }
                });
            }

            if (!npt.inputmask.__valueGet) {
                if (opts.noValuePatching !== true) {
                    if (Object.getOwnPropertyDescriptor) {
                        var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                        if (valueProperty && valueProperty.get && valueProperty.set) {
                            valueGet = valueProperty.get;
                            valueSet = valueProperty.set;
                            Object.defineProperty(npt, "value", {
                                get: getter,
                                set: setter,
                                configurable: true
                            });
                        } else if (npt.tagName.toLowerCase() !== "input") {
                            valueGet = function () {
                                return this.textContent;
                            };
                            valueSet = function (value) {
                                this.textContent = value;
                            };
                            Object.defineProperty(npt, "value", {
                                get: getter,
                                set: setter,
                                configurable: true
                            });
                        }
                    } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                        valueGet = npt.__lookupGetter__("value");
                        valueSet = npt.__lookupSetter__("value");

                        npt.__defineGetter__("value", getter);
                        npt.__defineSetter__("value", setter);
                    }
                    npt.inputmask.__valueGet = valueGet; //store native property getter
                    npt.inputmask.__valueSet = valueSet; //store native property setter
                }
                npt.inputmask._valueGet = function (overruleRTL) {
                    return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                };
                npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
                    valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && inputmask.isRTL) ? value.split("").reverse().join("") : value));
                };

                if (valueGet === undefined) { //jquery.val fallback
                    valueGet = function () {
                        return this.value;
                    };
                    valueSet = function (value) {
                        this.value = value;
                    };
                    patchValhook(npt.type);
                    installNativeValueSetFallback(npt);
                }
            }
        }

        if (input.tagName.toLowerCase() !== "textarea") {
            opts.ignorables.push(_keycode_js__WEBPACK_IMPORTED_MODULE_0__.keys.Enter);
        }

        var elementType = input.getAttribute("type");
        var isSupported = (input.tagName.toLowerCase() === "input" && opts.supportsInputType.includes(elementType)) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
        if (!isSupported) {
            if (input.tagName.toLowerCase() === "input") {
                var el = document.createElement("input");
                el.setAttribute("type", elementType);
                isSupported = el.type === "text"; //apply mask only if the type is not natively supported
                el = null;
            } else {
                isSupported = "partial";
            }
        }
        if (isSupported !== false) {
            patchValueProperty(input);
        } else {
            input.inputmask = undefined;
        }
        return isSupported;
    }

    //unbind all events - to make sure that no other mask will interfere when re-masking
    _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.off(el);
    var isSupported = isElementTypeSupported(el, opts);
    if (isSupported !== false) {
        inputmask.originalPlaceholder = el.placeholder;

        //read maxlength prop from el
        inputmask.maxLength = el !== undefined ? el.maxLength : undefined;
        if (inputmask.maxLength === -1) inputmask.maxLength = undefined;
        if ("inputMode" in el && el.getAttribute("inputmode") === null) {
            el.inputMode = opts.inputmode;
            el.setAttribute("inputmode", opts.inputmode);
        }


        if (isSupported === true) {
            opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;
            if (_environment__WEBPACK_IMPORTED_MODULE_4__.iphone) {
                //selecting the caret shows as a selection on iphone
                opts.insertModeVisual = false;
                //disable autocorrect
                el.setAttribute("autocorrect", "off");
            }

            //bind events
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "submit", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.submitEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "reset", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.resetEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "blur", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.blurEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "focus", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.focusEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "invalid", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.invalidEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "click", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.clickEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "mouseleave", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.mouseleaveEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "mouseenter", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.mouseenterEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "paste", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.pasteEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "cut", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.cutEvent);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "complete", opts.oncomplete);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "incomplete", opts.onincomplete);
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "cleared", opts.oncleared);
            if (opts.inputEventOnly !== true) {
                _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "keydown", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.keyEvent);
            }
            if (_environment__WEBPACK_IMPORTED_MODULE_4__.mobile || opts.inputEventOnly) {
                el.removeAttribute("maxLength");
            }
            _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "input", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.inputFallBackEvent);
            // EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent); //https://github.com/w3c/input-events - to implement
        }
        _eventruler__WEBPACK_IMPORTED_MODULE_3__.EventRuler.on(el, "setvalue", _eventhandlers__WEBPACK_IMPORTED_MODULE_6__.EventHandlers.setValueEvent);

        //apply mask
        _positioning__WEBPACK_IMPORTED_MODULE_1__.getBufferTemplate.call(inputmask).join(""); //initialize the buffer and getmasklength
        inputmask.undoValue = inputmask._valueGet(true);
        var activeElement = (el.inputmask.shadowRoot || el.ownerDocument).activeElement;
        if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
            (0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.applyInputValue)(el, el.inputmask._valueGet(true), opts);
            var buffer = _positioning__WEBPACK_IMPORTED_MODULE_1__.getBuffer.call(inputmask).slice();
            if (_validation__WEBPACK_IMPORTED_MODULE_5__.isComplete.call(inputmask, buffer) === false) {
                if (opts.clearIncomplete) {
                    _positioning__WEBPACK_IMPORTED_MODULE_1__.resetMaskSet.call(inputmask);
                }
            }
            if (opts.clearMaskOnLostFocus && activeElement !== el) {
                if (_positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask) === -1) {
                    buffer = [];
                } else {
                    _inputHandling__WEBPACK_IMPORTED_MODULE_2__.clearOptionalTail.call(inputmask, buffer);
                }
            }
            if (opts.clearMaskOnLostFocus === false || (opts.showMaskOnFocus && activeElement === el) || el.inputmask._valueGet(true) !== "") {
                (0,_inputHandling__WEBPACK_IMPORTED_MODULE_2__.writeBuffer)(el, buffer);
            }
            if (activeElement === el) { //position the caret when in focus
                _positioning__WEBPACK_IMPORTED_MODULE_1__.caret.call(inputmask, el, _positioning__WEBPACK_IMPORTED_MODULE_1__.seekNext.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_1__.getLastValidPosition.call(inputmask)));
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/inputmask/lib/masktoken.js":
/*!*************************************************!*\
  !*** ./node_modules/inputmask/lib/masktoken.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(isGroup, isOptional, isQuantifier, isAlternator) {
	this.matches = [];
	this.openGroup = isGroup || false;
	this.alternatorGroup = false;
	this.isGroup = isGroup || false;
	this.isOptional = isOptional || false;
	this.isQuantifier = isQuantifier || false;
	this.isAlternator = isAlternator || false;
	this.quantifier = {
		min: 1,
		max: 1
	};
}

/***/ }),

/***/ "./node_modules/inputmask/lib/positioning.js":
/*!***************************************************!*\
  !*** ./node_modules/inputmask/lib/positioning.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caret": function() { return /* binding */ caret; },
/* harmony export */   "determineLastRequiredPosition": function() { return /* binding */ determineLastRequiredPosition; },
/* harmony export */   "determineNewCaretPosition": function() { return /* binding */ determineNewCaretPosition; },
/* harmony export */   "getBuffer": function() { return /* binding */ getBuffer; },
/* harmony export */   "getBufferTemplate": function() { return /* binding */ getBufferTemplate; },
/* harmony export */   "getLastValidPosition": function() { return /* binding */ getLastValidPosition; },
/* harmony export */   "isMask": function() { return /* binding */ isMask; },
/* harmony export */   "resetMaskSet": function() { return /* binding */ resetMaskSet; },
/* harmony export */   "seekNext": function() { return /* binding */ seekNext; },
/* harmony export */   "seekPrevious": function() { return /* binding */ seekPrevious; },
/* harmony export */   "translatePosition": function() { return /* binding */ translatePosition; }
/* harmony export */ });
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./node_modules/inputmask/lib/validation.js");





//tobe put on prototype?
function caret(input, begin, end, notranslate, isDelete) {
    const inputmask = this,
        opts = this.opts;

    var range;
    if (begin !== undefined) {
        if (Array.isArray(begin)) {
            end = inputmask.isRTL ? begin[0] : begin[1];
            begin = inputmask.isRTL ? begin[1] : begin[0];
        }
        if (begin.begin !== undefined) {
            end = inputmask.isRTL ? begin.begin : begin.end;
            begin = inputmask.isRTL ? begin.end : begin.begin;
        }
        if (typeof begin === "number") {
            begin = notranslate ? begin : translatePosition.call(inputmask, begin);
            end = notranslate ? end : translatePosition.call(inputmask, end);
            end = (typeof end == "number") ? end : begin;
            // if (!$(input).is(":visible")) {
            // 	return;
            // }

            var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
            input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
            input.inputmask.caretPos = {begin: begin, end: end}; //track caret internally
            if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
                if (!isDelete) {
                    end++; //set visualization for insert/overwrite mode
                }
            }
            if (input === (input.inputmask.shadowRoot || input.ownerDocument).activeElement) {
                if ("setSelectionRange" in input) {
                    input.setSelectionRange(begin, end);
                } else if (window.getSelection) {
                    range = document.createRange();
                    if (input.firstChild === undefined || input.firstChild === null) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                    range.collapse(true);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    //input.focus();
                } else if (input.createTextRange) {
                    range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd("character", end);
                    range.moveStart("character", begin);
                    range.select();
                }
            }
        }
    } else {
        if ("selectionStart" in input && "selectionEnd" in input) {
            begin = input.selectionStart;
            end = input.selectionEnd;
        } else if (window.getSelection) {
            range = window.getSelection().getRangeAt(0);
            if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                begin = range.startOffset;
                end = range.endOffset;
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
            end = begin + range.text.length;
        }

        // if (opts.insertModeVisual && opts.insertMode === false && begin === (end - 1)) end--; //correct caret for insert/overwrite mode

        /*eslint-disable consistent-return */
        return {
            "begin": notranslate ? begin : translatePosition.call(inputmask, begin),
            "end": notranslate ? end : translatePosition.call(inputmask, end)
        };
        /*eslint-enable consistent-return */
    }
}

//tobe put on prototype?
function determineLastRequiredPosition(returnDefinition) {
    const inputmask = this, {maskset, dependencyLib: $} = inputmask;

    var buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true, true),
        bl = buffer.length,
        pos, lvp = getLastValidPosition.call(inputmask),
        positions = {},
        lvTest = maskset.validPositions[lvp],
        ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
        testPos;
    for (pos = lvp + 1; pos < buffer.length; pos++) {
        testPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
        ndxIntlzr = testPos.locator.slice();
        positions[pos] = $.extend(true, {}, testPos);
    }

    var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
    for (pos = bl - 1; pos > lvp; pos--) {
        testPos = positions[pos];
        if ((testPos.match.optionality ||
                (testPos.match.optionalQuantifier && testPos.match.newBlockMarker) ||
                (lvTestAlt &&
                    (
                        (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static != true) ||
                        (testPos.match.static === true &&
                            testPos.locator[lvTest.alternation] &&
                            _validation__WEBPACK_IMPORTED_MODULE_1__.checkAlternationMatch.call(inputmask, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) &&
                            _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos)[0].def !== "")
                    )
                )) &&
            buffer[pos] === _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, pos, testPos.match)) {
            bl--;
        } else {
            break;
        }
    }
    return returnDefinition ? {
        "l": bl,
        "def": positions[bl] ? positions[bl].match : undefined
    } : bl;
}

//tobe put on prototype?
function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
    const inputmask = this, {maskset, opts} = inputmask;

    function doRadixFocus(clickPos) {
        if (opts.radixPoint !== "" && opts.digits !== 0) {
            var vps = maskset.validPositions;
            if (vps[clickPos] === undefined || (vps[clickPos].input === _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, clickPos))) {
                if (clickPos < seekNext.call(inputmask, -1)) return true;
                var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
                if (radixPos !== -1) {
                    for (let vp = 0, vpl = vps.length; vp < vpl; vp++) {
                        if (vps[vp] && radixPos < vp && vps[vp].input !== _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, vp)) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    }

    if (tabbed) {
        if (inputmask.isRTL) {
            selectedCaret.end = selectedCaret.begin;
        } else {
            selectedCaret.begin = selectedCaret.end;
        }
    }
    if (selectedCaret.begin === selectedCaret.end) {
        positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
        switch (positionCaretOnClick) {
            case "none":
                break;
            case "select":
                selectedCaret = {begin: 0, end: getBuffer.call(inputmask).length};
                break;
            case "ignore":
                selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
                break;
            case "radixFocus":
                if (inputmask.clicked > 1 && maskset.validPositions.length == 0)
                    break;
                if (doRadixFocus(selectedCaret.begin)) {
                    var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
                    selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
                    break;
                } //fallback to lvp
            // eslint-disable-next-line no-fallthrough
            default: //lvp:
                var clickPosition = selectedCaret.begin,
                    lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, true),
                    lastPosition = seekNext.call(inputmask, (lvclickPosition === -1 && !isMask.call(inputmask, 0)) ? -1 : lvclickPosition);

                if (clickPosition <= lastPosition) {
                    selectedCaret.end = selectedCaret.begin = !isMask.call(inputmask, clickPosition, false, true) ? seekNext.call(inputmask, clickPosition) : clickPosition;
                } else {
                    var lvp = maskset.validPositions[lvclickPosition],
                        tt = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : undefined, lvp),
                        placeholder = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, lastPosition, tt.match);
                    if ((placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true) || (!isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder)) {
                        var newPos = seekNext.call(inputmask, lastPosition);
                        if (clickPosition >= newPos || clickPosition === lastPosition) {
                            lastPosition = newPos;
                        }
                    }
                    selectedCaret.end = selectedCaret.begin = lastPosition;
                }
        }

        return selectedCaret;
    }
}


//tobe put on prototype?
function getBuffer(noCache) {
    const inputmask = this, {maskset} = inputmask;

    if (maskset.buffer === undefined || noCache === true) {
        maskset.buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, true, getLastValidPosition.call(inputmask), true);
        if (maskset._buffer === undefined) maskset._buffer = maskset.buffer.slice();
    }
    return maskset.buffer;
}

//tobe put on prototype?
function getBufferTemplate() {
    const inputmask = this, maskset = this.maskset;

    if (maskset._buffer === undefined) {
        //generate template
        maskset._buffer = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getMaskTemplate.call(inputmask, false, 1);
        if (maskset.buffer === undefined) maskset.buffer = maskset._buffer.slice();
    }
    return maskset._buffer;
}

//tobe put on prototype?
function getLastValidPosition(closestTo, strict, validPositions) {
    const maskset = this.maskset;

    var before = -1,
        after = -1,
        valids = validPositions || maskset.validPositions; //for use in valhook ~ context switch
    if (closestTo === undefined) closestTo = -1;
    for (var psNdx = 0, vpl = valids.length; psNdx < vpl; psNdx++) {
        if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
            if (psNdx <= closestTo) before = psNdx;
            if (psNdx >= closestTo) after = psNdx;
        }
    }
    return (before === -1 || before == closestTo) ? after : after == -1 ? before : (closestTo - before) < (after - closestTo) ? before : after;
}

//tobe put on prototype?
function isMask(pos, strict, fuzzy) {
    const inputmask = this, maskset = this.maskset;

    var test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, pos).match;
    if (test.def === "") test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, pos).match;

    if (test.static !== true) {
        return test.fn;
    }
    if (fuzzy === true && (maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].generatedInput !== true)) {
        return true;
    }

    if (strict !== true && pos > -1) {
        if (fuzzy) { //check on the number of tests
            var tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos);
            return tests.length > (1 + (tests[tests.length - 1].match.def === "" ? 1 : 0));
        }
        //else based on the template
        var testTemplate = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.determineTestTemplate.call(inputmask, pos, _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos));
        var testPlaceHolder = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, pos, testTemplate.match);
        return testTemplate.match.def !== testPlaceHolder;

    }
    return false;
}

//tobe put on prototype?
function resetMaskSet(soft) {
    const maskset = this.maskset;

    maskset.buffer = undefined;
    if (soft !== true) {
        maskset.validPositions = [];
        maskset.p = 0;
    }
}

//tobe put on prototype?
function seekNext(pos, newBlock, fuzzy) {
    const inputmask = this;

    if (fuzzy === undefined) fuzzy = true;
    var position = pos + 1;
    while (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.def !== "" &&
    ((newBlock === true && (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true))) ||
        (newBlock !== true && !isMask.call(inputmask, position, undefined, fuzzy)))) {
        position++;
    }
    return position;
}

//tobe put on prototype?
function seekPrevious(pos, newBlock) {
    const inputmask = this;

    var position = pos - 1;
    if (pos <= 0) return 0;

    while (position > 0 &&
    ((newBlock === true && (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, undefined, true))) ||
        (newBlock !== true && !isMask.call(inputmask, position, undefined, true)))) {
        position--;
    }
    return position;
}

//tobe put on prototype?
function translatePosition(pos) {
    const inputmask = this,
        opts = this.opts,
        el = this.el;

    if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
        pos = inputmask._valueGet().length - pos;
        if (pos < 0) pos = 0;
    }
    return pos;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/validation-tests.js":
/*!********************************************************!*\
  !*** ./node_modules/inputmask/lib/validation-tests.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "determineTestTemplate": function() { return /* binding */ determineTestTemplate; },
/* harmony export */   "getDecisionTaker": function() { return /* binding */ getDecisionTaker; },
/* harmony export */   "getMaskTemplate": function() { return /* binding */ getMaskTemplate; },
/* harmony export */   "getPlaceholder": function() { return /* binding */ getPlaceholder; },
/* harmony export */   "getTest": function() { return /* binding */ getTest; },
/* harmony export */   "getTestTemplate": function() { return /* binding */ getTestTemplate; },
/* harmony export */   "getTests": function() { return /* binding */ getTests; },
/* harmony export */   "isSubsetOf": function() { return /* binding */ isSubsetOf; }
/* harmony export */ });
/* harmony import */ var _inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/lib/inputmask.js");



function getLocator(tst, align) { //need to align the locators to be correct
    var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
    if (locator !== "") while (locator.length < align) locator += "0";
    return locator;
}

function getDecisionTaker(tst) {
    var decisionTaker = tst.locator[tst.alternation];
    if (typeof decisionTaker == "string" && decisionTaker.length > 0) { //no decision taken ~ take first one as decider
        decisionTaker = decisionTaker.split(",")[0];
    }
    return decisionTaker !== undefined ? decisionTaker.toString() : "";
}

//tobe put on prototype?
function getPlaceholder(pos, test, returnPL) {
    const inputmask = this,
        opts = this.opts,
        maskset = this.maskset;

    test = test || getTest.call(inputmask, pos).match;
    if (test.placeholder !== undefined || returnPL === true) {
        return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
    } else if (test.static === true) {
        if (pos > -1 && maskset.validPositions[pos] === undefined) {
            var tests = getTests.call(inputmask, pos),
                staticAlternations = [],
                prevTest;
            if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                for (var i = 0; i < tests.length; i++) {
                    if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
                        (tests[i].match.static === true || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, maskset, pos, true, opts) !== false))) {
                        staticAlternations.push(tests[i]);
                        if (tests[i].match.static === true) prevTest = tests[i];
                        if (staticAlternations.length > 1) {
                            if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                return opts.placeholder.charAt(pos % opts.placeholder.length);
                            }
                        }
                    }
                }
            }
        }
        return test.def;
    }

    return opts.placeholder.charAt(pos % opts.placeholder.length);
}

//tobe put on prototype?
function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
    //includeMode true => input, undefined => placeholder, false => mask

    var inputmask = this,
        opts = this.opts,
        maskset = this.maskset;


    var greedy = opts.greedy;
    if (clearOptionalTail && opts.greedy) {
        opts.greedy = false;
        inputmask.maskset.tests = {};
    }
    minimalPos = minimalPos || 0;
    var maskTemplate = [],
        ndxIntlzr, pos = 0,
        test, testPos, jitRenderStatic;
    do {
        if (baseOnInput === true && maskset.validPositions[pos]) {
            testPos = (clearOptionalTail && maskset.validPositions[pos].match.optionality
                && maskset.validPositions[pos + 1] === undefined
                && (maskset.validPositions[pos].generatedInput === true || (maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0)))
                ? determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr, pos - 1))
                : maskset.validPositions[pos];
            test = testPos.match;
            ndxIntlzr = testPos.locator.slice();
            maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test));
        } else {
            testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
            test = testPos.match;
            ndxIntlzr = testPos.locator.slice();
            var jitMasking = noJit === true ? false : (opts.jitMasking !== false ? opts.jitMasking : test.jit);
            //check for groupSeparator is a hack for the numerics as we don't want the render of the groupSeparator beforehand
            jitRenderStatic = ((jitRenderStatic && test.static && test.def !== opts.groupSeparator && test.fn === null) || (maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && test.fn === null)) && maskset.tests[pos] /*&& maskset.tests[pos].length === 1*/;
            if (jitRenderStatic || jitMasking === false || jitMasking === undefined /*|| pos < lvp*/ || (typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos)) {
                maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, maskTemplate.length, test));
            } else {
                jitRenderStatic = false;
            }
        }

        pos++;
    } while ((test.static !== true || test.def !== "") || minimalPos > pos);
    if (maskTemplate[maskTemplate.length - 1] === "") {
        maskTemplate.pop(); //drop the last one which is empty
    }
    if (includeMode !== false || //do not alter the masklength when just retrieving the maskdefinition
        maskset.maskLength === undefined) //just make sure the maskLength gets initialized in all cases (needed for isValid)
    {
        maskset.maskLength = pos - 1;
    }

    opts.greedy = greedy;
    return maskTemplate;
}

//tobe put on prototype?
function getTestTemplate(pos, ndxIntlzr, tstPs) {
    var inputmask = this,
        maskset = this.maskset;

    return maskset.validPositions[pos] || determineTestTemplate.call(inputmask, pos, getTests.call(inputmask, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
}

//tobe put on prototype?
function determineTestTemplate(pos, tests) {
    var inputmask = this,
        opts = this.opts,
        lenghtOffset = 0;
    var optionalityLevel = determineOptionalityLevel(pos, tests);
    pos = pos > 0 ? pos - 1 : 0;
    var altTest = getTest.call(inputmask, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
    if (opts.greedy && tests.length > 1 && tests[tests.length - 1].match.def === "")
        lenghtOffset = 1;
    // console.log(" optionality = " + optionalityLevel);
    // console.log(" - " + JSON.stringify(tests));
    for (var ndx = 0; ndx < tests.length - lenghtOffset; ndx++) { //find best matching
        var tst = tests[ndx];
        tstLocator = getLocator(tst, targetLocator.length);
        var distance = Math.abs(tstLocator - targetLocator);

        if (closest === undefined
            || (tstLocator !== "" && distance < closest)
            || (bestMatch && !opts.greedy &&
                (bestMatch.match.optionality && bestMatch.match.optionality - optionalityLevel > 0) &&
                bestMatch.match.newBlockMarker === "master" &&
                ((!tst.match.optionality || tst.match.optionality - optionalityLevel < 1) || !tst.match.newBlockMarker))
            || (bestMatch && !opts.greedy && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier)) {
            closest = distance;
            bestMatch = tst;
        }
    }
    return bestMatch;
}

function determineOptionalityLevel(pos, tests) {
    let optionalityLevel = 0, differentOptionalLevels = false;
    tests.forEach(test => {
        if (test.match.optionality) {
            if (optionalityLevel !== 0 && optionalityLevel !== test.match.optionality)
                differentOptionalLevels = true;
            if (optionalityLevel === 0 || optionalityLevel > test.match.optionality) {
                optionalityLevel = test.match.optionality;
            }
        }
    });
    if (optionalityLevel) {
        if (pos == 0) optionalityLevel = 0;
        else if (tests.length == 1) optionalityLevel = 0;
        else if (!differentOptionalLevels) optionalityLevel = 0;
    }
    return optionalityLevel;
}

//tobe put on prototype?
function getTest(pos, tests) {
    var inputmask = this,
        maskset = this.maskset;

    if (maskset.validPositions[pos]) {
        return maskset.validPositions[pos];
    }
    return (tests || getTests.call(inputmask, pos))[0];
}

function isSubsetOf(source, target, opts) {
    function expand(pattern) {
        var expanded = [], start = -1, end;
        for (var i = 0, l = pattern.length; i < l; i++) {
            if (pattern.charAt(i) === "-") {
                end = pattern.charCodeAt(i + 1);
                while (++start < end) expanded.push(String.fromCharCode(start));
            } else {
                start = pattern.charCodeAt(i);
                expanded.push(pattern.charAt(i));
            }
        }
        return expanded.join("");
    }

    if (source.match.def === target.match.nativeDef) return true;
    if ((opts.regex || (source.match.fn instanceof RegExp && target.match.fn instanceof RegExp)) && source.match.static !== true && target.match.static !== true) { //is regex a subset
        return expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, ""))) !== -1;
    }
    return false;
}

//tobe put on prototype?
function getTests(pos, ndxIntlzr, tstPs) {
    var inputmask = this,
        $ = this.dependencyLib,
        maskset = this.maskset,
        opts = this.opts,
        el = this.el,
        maskTokens = maskset.maskToken,
        testPos = ndxIntlzr ? tstPs : 0,
        ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
        matches = [],
        insertStop = false,
        latestMatch,
        cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

    function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
        function handleMatch(match, loopNdx, quantifierRecurse) {
            function isFirstMatch(latestMatch, tokenGroup) {
                var firstMatch = tokenGroup.matches.indexOf(latestMatch) === 0;
                if (!firstMatch) {
                    tokenGroup.matches.every(function (match, ndx) {
                        if (match.isQuantifier === true) {
                            firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
                        } else if (Object.prototype.hasOwnProperty.call(match, "matches")) firstMatch = isFirstMatch(latestMatch, match);
                        if (firstMatch) return false;

                        return true;
                    });
                }
                return firstMatch;
            }

            function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                var bestMatch, indexPos;

                if (maskset.tests[pos] || maskset.validPositions[pos]) {
                    (maskset.tests[pos] || [maskset.validPositions[pos]]).every(function (lmnt, ndx) {
                        if (lmnt.mloc[alternateNdx]) {
                            bestMatch = lmnt;
                            return false; //break
                        }
                        var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                            ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                        if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                            bestMatch = lmnt;
                            indexPos = ndxPos;
                        }

                        return true;
                    });
                }
                if (bestMatch) {
                    var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                    var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                    return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                } else {
                    return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                }
            }

            function staticCanMatchDefinition(source, target) {
                return source.match.static === true && target.match.static !== true ? target.match.fn.test(source.match.def, maskset, pos, false, opts, false) : false;
            }

            //mergelocators for retrieving the correct locator match when merging
            function setMergeLocators(targetMatch, altMatch) {
                var alternationNdx = targetMatch.alternation,
                    shouldMerge = altMatch === undefined || (alternationNdx === altMatch.alternation &&
                        targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1);
                if (!shouldMerge && alternationNdx > altMatch.alternation) {
                    for (var i = altMatch.alternation; i < alternationNdx; i++) {
                        if (targetMatch.locator[i] !== altMatch.locator[i]) {
                            alternationNdx = i;
                            shouldMerge = true;
                            break;
                        }
                    }
                }

                if (shouldMerge) {
                    targetMatch.mloc = targetMatch.mloc || {};
                    var locNdx = targetMatch.locator[alternationNdx];
                    if (locNdx === undefined) {
                        targetMatch.alternation = undefined;
                    } else {
                        if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                        if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                        if (altMatch !== undefined) {
                            for (var ndx in altMatch.mloc) {
                                if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                            }
                            targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                        }
                        return true;
                    }
                }
                return false;
            }

            function isSameLevel(targetMatch, altMatch) {
                if (targetMatch.locator.length !== altMatch.locator.length) {
                    return false;
                }
                for (let locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
                    if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) {
                        return false;
                    }
                }
                return true;
            }

            function handleGroup() {
                match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse);
                if (match) return true;
            }

            function handleOptional() {
                var optionalToken = match, mtchsNdx = matches.length;
                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                if (matches.length > 0) { //check on matches.length instead of match to handle quantifier in a recursive call
                    //mark optionality in matches
                    matches.forEach(function (mtch, ndx) {
                        if (ndx >= mtchsNdx) {
                            mtch.match.optionality = mtch.match.optionality ? mtch.match.optionality + 1 : 1;
                        }
                    });
                    latestMatch = matches[matches.length - 1].match;

                    if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) { //prevent loop see #698
                        insertStop = true; //insert a stop
                        testPos = pos; //match the position after the group
                    } else {
                        return match; //make the loop continue when it is deliberately by a quantifier
                    }
                }
            }

            function handleAlternator() {
                inputmask.hasAlternator = true;
                var alternateToken = match,
                    malternateMatches = [],
                    maltMatches,
                    currentMatches = matches.slice(),
                    loopNdxCnt = loopNdx.length,
                    unMatchedAlternation = false;
                var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                if (altIndex === -1 || typeof altIndex === "string") {
                    var currentPos = testPos,
                        ndxInitializerClone = ndxInitializer.slice(),
                        altIndexArr = [],
                        amndx;
                    if (typeof altIndex == "string") {
                        altIndexArr = altIndex.split(",");
                    } else {
                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                            altIndexArr.push(amndx.toString());
                        }
                    }

                    if (maskset.excludes[pos] !== undefined) {
                        var altIndexArrClone = altIndexArr.slice();
                        for (var i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                            var excludeSet = maskset.excludes[pos][i].toString().split(":");
                            if (loopNdx.length == excludeSet[1]) {
                                altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                            }
                        }
                        if (altIndexArr.length === 0) { //fully alternated => reset
                            delete maskset.excludes[pos];
                            altIndexArr = altIndexArrClone;
                        }
                    }
                    if (opts.keepStatic === true || (isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic)) altIndexArr = altIndexArr.slice(0, 1);
                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                        amndx = parseInt(altIndexArr[ndx]);
                        matches = [];
                        //set the correct ndxInitializer
                        ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                        var tokenMatch = alternateToken.matches[amndx];
                        if (tokenMatch && handleMatch(tokenMatch, [amndx].concat(loopNdx), quantifierRecurse)) {
                            match = true;
                        } else {
                            if (ndx === 0) {
                                unMatchedAlternation = true;
                            }
                            if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) {
                                break;
                            }
                        }

                        maltMatches = matches.slice();
                        testPos = currentPos;
                        matches = [];

                        //fuzzy merge matches
                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                            var altMatch = maltMatches[ndx1],
                                dropMatch = false;
                            altMatch.match.jit = altMatch.match.jit || unMatchedAlternation; //mark jit when there are unmatched alternations  ex: mask: "(a|aa)"
                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                            setMergeLocators(altMatch);
                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                var altMatch2 = malternateMatches[ndx2];
                                if (typeof altIndex !== "string" || (altMatch.alternation !== undefined && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString()))) {
                                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                        dropMatch = true;
                                        setMergeLocators(altMatch2, altMatch);
                                        break;
                                    } else if (isSubsetOf(altMatch, altMatch2, opts)) {
                                        if (setMergeLocators(altMatch, altMatch2)) {
                                            dropMatch = true;
                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                        }
                                        break;
                                    } else if (isSubsetOf(altMatch2, altMatch, opts)) {
                                        setMergeLocators(altMatch2, altMatch);
                                        break;
                                    } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                        if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === undefined) {
                                            opts.keepStatic = true;
                                        } else if (setMergeLocators(altMatch, altMatch2)) {
                                            //insert match above general match
                                            dropMatch = true;
                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (!dropMatch) {
                                malternateMatches.push(altMatch);
                            }
                        }
                    }

                    matches = currentMatches.concat(malternateMatches);
                    testPos = pos;
                    insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option
                    match = malternateMatches.length > 0; //set correct match state

                    //cloneback
                    ndxInitializer = ndxInitializerClone.slice();
                } else {
                    match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                }
                if (match) return true;
            }

            function handleQuantifier() {
                var qt = match, breakloop = false;
                for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
                    var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                    match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
                    if (match) {
                        matches.forEach(function (mtch, ndx) {
                            if (IsMatchOf(tokenGroup, mtch.match))
                                latestMatch = mtch.match;
                            else latestMatch = matches[matches.length - 1].match;

                            //mark optionality
                            //TODO FIX RECURSIVE QUANTIFIERS
                            latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                            // console.log(pos + " " + qt.quantifier.min + " " + latestMatch.optionalQuantifier);
                            //qndx + 1 as the index starts from 0
                            latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
                            if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                insertStop = true;
                                testPos = pos; //match the position after the group
                                if (opts.greedy && maskset.validPositions[pos - 1] == undefined && qndx > qt.quantifier.min && ["*", "+"].indexOf(qt.quantifier.max) != -1) {
                                    matches.pop();
                                    cacheDependency = undefined;
                                }
                                breakloop = true; //stop quantifierloop && search for next possible match
                                match = false; //mark match to false to make sure the loop in optionals continues
                            }
                            if (!breakloop && latestMatch.jit /*&& !latestMatch.optionalQuantifier*/) {
                                //always set jitOffset, isvalid checks when to apply
                                maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
                            }
                        });
                        if (breakloop) break; // search for next possible match
                        return true;
                    }
                }
            }

            if (testPos > (pos + opts._maxTestPos)) {
                throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
            }
            if (testPos === pos && match.matches === undefined) {
                matches.push({
                    "match": match,
                    "locator": loopNdx.reverse(),
                    "cd": cacheDependency,
                    "mloc": {}
                });
                if (match.optionality && quantifierRecurse === undefined &&
                    ((opts.definitions && opts.definitions[match.nativeDef] && opts.definitions[match.nativeDef].optional) ||
                        (_inputmask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.definitions[match.nativeDef] && _inputmask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.definitions[match.nativeDef].optional))) { //prevent loop see #698
                    insertStop = true; //insert a stop
                    testPos = pos; //match the position after the group
                } else {
                    return true;
                }
            } else if (match.matches !== undefined) {
                if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
                    return handleGroup();
                } else if (match.isOptional) {
                    return handleOptional();
                } else if (match.isAlternator) {
                    return handleAlternator();
                } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
                    return handleQuantifier();
                } else {
                    match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                    if (match) return true;
                }
            } else {
                testPos++;
            }
        }

        //the offset is set in the quantifierloop when git masking is used
        for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
            if (maskToken.matches[tndx].isQuantifier !== true) {
                var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                if (match && testPos === pos) {
                    return match;
                } else if (testPos > pos) {
                    break;
                }
            }
        }
    }

    function IsMatchOf(tokenGroup, match) {
        let isMatch = tokenGroup.matches.indexOf(match) != -1;
        if (!isMatch) {
            tokenGroup.matches.forEach((mtch, ndx) => {
                if (mtch.matches !== undefined && !isMatch) {
                    isMatch = IsMatchOf(mtch, match);
                }
            });
        }
        return isMatch;
    }

    function mergeLocators(pos, tests) {
        let locator = [], alternation;
        if (!Array.isArray(tests)) tests = [tests];

        if (tests.length > 0) {
            if (tests[0].alternation === undefined || opts.keepStatic === true) {
                locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice();
                if (locator.length === 0) locator = tests[0].locator.slice();
            } else {
                tests.forEach(function (tst) {
                    if (tst.def !== "") {
                        if (locator.length === 0) {
                            alternation = tst.alternation;
                            locator = tst.locator.slice();
                        } else {
                            if (tst.locator[alternation] && locator[alternation].toString().indexOf(tst.locator[alternation]) === -1) {
                                locator[alternation] += "," + tst.locator[alternation];
                            }
                        }
                    }
                });
            }
        }
        return locator;
    }

    if (pos > -1) {
        if (ndxIntlzr === undefined) { //determine index initializer
            var previousPos = pos - 1,
                test;
            while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === undefined && previousPos > -1) {
                previousPos--;
            }
            if (test !== undefined && previousPos > -1) {
                ndxInitializer = mergeLocators(previousPos, test);
                cacheDependency = ndxInitializer.join("");
                testPos = previousPos;
            }
        }
        if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
            return maskset.tests[pos];
        }
        for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
            var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
            if ((match && testPos === pos) || testPos > pos) {
                break;
            }
        }
    }
    if (matches.length === 0 || insertStop) {
        matches.push({
            match: {
                fn: null,
                static: true,
                optionality: false,
                casing: null,
                def: "",
                placeholder: ""
            },
            locator: [],
            mloc: {},
            cd: cacheDependency
        });
    }
    var result;
    if (ndxIntlzr !== undefined && maskset.tests[pos]) { //prioritize full tests for caching
        result = $.extend(true, [], matches);
    } else {
        maskset.tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
        result = maskset.tests[pos];
    }

    // console.log(pos + " - " + JSON.stringify(matches));
    //cleanup optionality marking
    matches.forEach(t => {
        t.match.optionality = t.match.defOptionality || false;
    });

    return result;
}


/***/ }),

/***/ "./node_modules/inputmask/lib/validation.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/lib/validation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alternate": function() { return /* binding */ alternate; },
/* harmony export */   "checkAlternationMatch": function() { return /* binding */ checkAlternationMatch; },
/* harmony export */   "handleRemove": function() { return /* binding */ handleRemove; },
/* harmony export */   "isComplete": function() { return /* binding */ isComplete; },
/* harmony export */   "isSelection": function() { return /* binding */ isSelection; },
/* harmony export */   "isValid": function() { return /* binding */ isValid; },
/* harmony export */   "refreshFromBuffer": function() { return /* binding */ refreshFromBuffer; },
/* harmony export */   "revalidateMask": function() { return /* binding */ revalidateMask; }
/* harmony export */ });
/* harmony import */ var _validation_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-tests */ "./node_modules/inputmask/lib/validation-tests.js");
/* harmony import */ var _keycode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keycode.js */ "./node_modules/inputmask/lib/keycode.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning */ "./node_modules/inputmask/lib/positioning.js");
/* harmony import */ var _eventhandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventhandlers */ "./node_modules/inputmask/lib/eventhandlers.js");







//tobe put on prototype?
function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) { //pos == true => generalize
    const inputmask = this,
        $ = this.dependencyLib,
        opts = this.opts,
        maskset = inputmask.maskset;

    var validPsClone = $.extend(true, [], maskset.validPositions),
        tstClone = $.extend(true, {}, maskset.tests),
        lastAlt,
        alternation,
        isValidRslt = false, returnRslt = false,
        altPos, prevAltPos, i, validPos,
        decisionPos,
        lAltPos = rAltPos !== undefined ? rAltPos : _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask), nextPos, input, begin, end;

    if (selection) {
        begin = selection.begin;
        end = selection.end;
        if (selection.begin > selection.end) {
            begin = selection.end;
            end = selection.begin;
        }
    }
    if (lAltPos === -1 && rAltPos === undefined) { //do not recurse when already paste the beginning
        lastAlt = 0;
        prevAltPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, lastAlt);
        alternation = prevAltPos.alternation;
    } else {
        //find last modified alternation
        for (; lAltPos >= 0; lAltPos--) {
            altPos = maskset.validPositions[lAltPos];
            if (altPos && altPos.alternation !== undefined) {
                if (lAltPos <= (maskPos || 0) && prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                    break;
                }
                lastAlt = lAltPos;
                alternation = maskset.validPositions[lastAlt].alternation;
                prevAltPos = altPos;
            }
        }
    }

    if (alternation !== undefined) {
        decisionPos = parseInt(lastAlt);
        maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
        if (maskPos !== true) { //generalize
            maskset.excludes[decisionPos].push((0,_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
        }

        var validInputs = [], resultPos = -1;
        for (i = decisionPos; i < _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) {
            if (resultPos === -1 && maskPos <= i && c !== undefined) {
                validInputs.push(c);
                resultPos = validInputs.length - 1;
            }
            validPos = maskset.validPositions[i];
            if (validPos && validPos.generatedInput !== true && (selection === undefined || (i < begin || i >= end))) {
                validInputs.push(validPos.input);
            }
            delete maskset.validPositions[i];
        }
        if (resultPos === -1 && c !== undefined) {
            validInputs.push(c);
            resultPos = validInputs.length - 1;
        }

        while (maskset.excludes[decisionPos] !== undefined && maskset.excludes[decisionPos].length < 10) {
            // maskset.tests[decisionPos] = undefined; //clear decisionPos
            maskset.tests = {};  //clear all
            _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true); //clear getbuffer
            isValidRslt = true;
            for (i = 0; i < validInputs.length; i++) {
                nextPos = isValidRslt.caret || (_positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1);
                input = validInputs[i];
                // nextPos = translatePosition.call(inputmask, nextPos);
                if (!(isValidRslt = isValid.call(inputmask, nextPos, input, false, fromIsValid, true))) {
                    break;
                }
                if (i === resultPos) {
                    returnRslt = isValidRslt;
                }
                if (maskPos == true && isValidRslt) {  //return validposition on generalise
                    returnRslt = {caretPos: i};
                }
            }
            if (!isValidRslt) {
                _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
                prevAltPos = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, decisionPos);  //get the current decisionPos to exclude ~ needs to be before restoring the initial validation
                //reset & revert
                maskset.validPositions = $.extend(true, [], validPsClone);
                maskset.tests = $.extend(true, {}, tstClone); //refresh tests after possible alternating
                if (maskset.excludes[decisionPos]) {
                    var decisionTaker = (0,_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getDecisionTaker)(prevAltPos);
                    if (maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation) !== -1) {
                        returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break;
                    }
                    maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation);
                    for (i = decisionPos; i < _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) + 1; i++) delete maskset.validPositions[i];
                } else { //latest alternation
                    returnRslt = alternate.call(inputmask, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                    break;
                }
            } else {
                break;
            }
        }
    }
    //reset alternation excludes
    if (!returnRslt || opts.keepStatic !== false) {
        delete maskset.excludes[decisionPos];
    }
    return returnRslt;
}

function casing(elem, test, pos) {
    const opts = this.opts,
        maskset = this.maskset;

    switch (opts.casing || test.casing) {
        case "upper":
            elem = elem.toUpperCase();
            break;
        case "lower":
            elem = elem.toLowerCase();
            break;
        case "title":
            var posBefore = maskset.validPositions[pos - 1];
            if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(_keycode_js__WEBPACK_IMPORTED_MODULE_1__.keyCode.Space)) {
                elem = elem.toUpperCase();
            } else {
                elem = elem.toLowerCase();
            }
            break;
        default:
            if (typeof opts.casing === "function") {
                var args = Array.prototype.slice.call(arguments);
                args.push(maskset.validPositions);
                elem = opts.casing.apply(this, args);
            }
    }

    return elem;
}

//tobe put on prototype?
function checkAlternationMatch(altArr1, altArr2, na) {
    const opts = this.opts;

    var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
        isMatch = false,
        naArr = na !== undefined ? na.split(",") : [],
        naNdx;

    //remove no alternate indexes from alternation array
    for (var i = 0; i < naArr.length; i++) {
        if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
            altArr1.splice(naNdx, 1);
        }
    }

    for (var alndx = 0; alndx < altArr1.length; alndx++) {
        if (altArrC.includes(altArr1[alndx])) {
            isMatch = true;
            break;
        }
    }
    return isMatch;
}

//tobe put on prototype?
function handleRemove(input, c, pos, strict, fromIsValid) {
    const inputmask = this, maskset = this.maskset, opts = this.opts;

    if (opts.numericInput || inputmask.isRTL) {
        if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace) {
            c = _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete;
        } else if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete) {
            c = _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace;
        }

        if (inputmask.isRTL) {
            var pend = pos.end;
            pos.end = pos.begin;
            pos.begin = pend;
        }
    }

    var lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true);
    if (pos.end >= _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask).length && lvp >= pos.end) { //handle numeric negate symbol offset, due to  dynamic jit masking
        pos.end = lvp + 1;
    }

    if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace) {
        if ((pos.end - pos.begin < 1)) {
            pos.begin = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, pos.begin);
        }
    } else if (c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete) {
        if (pos.begin === pos.end) {
            pos.end = _positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, pos.end) + 1;
        }
    }
    var offset;
    if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
        if (strict !== true && opts.keepStatic !== false || (opts.regex !== null && _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1)) { //TODO NEEDS BETTER CHECK WHEN TO ALTERNATE  ~ opts regex isn"t good enough
            var result = alternate.call(inputmask, true);
            if (result) {
                var newPos = result.caret !== undefined ? result.caret : (result.pos ? _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, result.pos.begin ? result.pos.begin : result.pos) : _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, -1, true));
                if (c !== _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete || pos.begin > newPos) {
                    pos.begin == newPos;
                }
            }
        }

        if (strict !== true) {
            maskset.p = c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Delete ? pos.begin + offset : pos.begin;
            maskset.p = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {
                begin: maskset.p,
                end: maskset.p
            }, false, opts.insertMode === false && c === _keycode_js__WEBPACK_IMPORTED_MODULE_1__.keys.Backspace ? "none" : undefined).begin;
        }
    }
}

//tobe put on prototype?
function isComplete(buffer) { //return true / false / undefined (repeat *)
    const inputmask = this, opts = this.opts, maskset = this.maskset;

    if (typeof opts.isComplete === "function") return opts.isComplete(buffer, opts);
    if (opts.repeat === "*") return undefined;
    var complete = false,
        lrp = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineLastRequiredPosition.call(inputmask, true),
        aml = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, lrp.l);

    if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
        complete = true;
        for (var i = 0; i <= aml; i++) {
            var test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTestTemplate.call(inputmask, i).match;
            if ((test.static !== true && maskset.validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.static === true && buffer[i] !== _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, i, test))) {
                complete = false;
                break;
            }
        }
    }
    return complete;
}

function isSelection(posObj) {
    const inputmask = this,
        opts = this.opts, insertModeOffset = opts.insertMode ? 0 : 1;
    return inputmask.isRTL ? (posObj.begin - posObj.end) > insertModeOffset : (posObj.end - posObj.begin) > insertModeOffset;
}

//tobe put on prototype?
function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) { //strict true ~ no correction or autofill
    const inputmask = this,
        $ = this.dependencyLib,
        opts = this.opts,
        maskset = inputmask.maskset;

    strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

    var maskPos = pos;
    if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
        maskPos = inputmask.isRTL ? pos.end : pos.begin;
    }

    function processCommandObject(commandObj) {
        if (commandObj !== undefined) {
            if (commandObj.remove !== undefined) { //remove position(s)
                if (!Array.isArray(commandObj.remove)) commandObj.remove = [commandObj.remove];
                commandObj.remove.sort(function (a, b) {
                    return inputmask.isRTL ? a.pos - b.pos : b.pos - a.pos;
                }).forEach(function (lmnt) {
                    revalidateMask.call(inputmask, {begin: lmnt, end: lmnt + 1});
                });
                commandObj.remove = undefined;
            }
            if (commandObj.insert !== undefined) { //insert position(s)
                if (!Array.isArray(commandObj.insert)) commandObj.insert = [commandObj.insert];
                commandObj.insert.sort(function (a, b) {
                    return inputmask.isRTL ? b.pos - a.pos : a.pos - b.pos;
                }).forEach(function (lmnt) {
                    if (lmnt.c !== "") {
                        isValid.call(inputmask, lmnt.pos, lmnt.c, lmnt.strict !== undefined ? lmnt.strict : true, lmnt.fromIsValid !== undefined ? lmnt.fromIsValid : fromIsValid);
                    }
                });
                commandObj.insert = undefined;
            }

            if (commandObj.refreshFromBuffer && commandObj.buffer) {
                var refresh = commandObj.refreshFromBuffer;
                refreshFromBuffer.call(inputmask, refresh === true ? refresh : refresh.start, refresh.end, commandObj.buffer);
                commandObj.refreshFromBuffer = undefined;
            }

            if (commandObj.rewritePosition !== undefined) {
                maskPos = commandObj.rewritePosition;
                // commandObj.rewritePosition = undefined;
                commandObj = true;
            }
        }
        return commandObj;
    }

    function _isValid(position, c, strict) {
        var rslt = false;
        _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, position).every(function (tst, ndx) {
            var test = tst.match;
            //make sure the buffer is set and correct
            _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
            if (test.jit && maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekPrevious.call(inputmask, position)] === undefined) //ignore if jit is not desirable
            {
                rslt = false;
            } else {
                //return is false or a json object => { pos: ??, c: ??} or true
                rslt = test.fn != null ?
                    test.fn.test(c, maskset, position, strict, opts, isSelection.call(inputmask, pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
                        {
                            c: _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, position, test, true) || test.def,
                            pos: position
                        } : false;
            }
            if (rslt !== false) {
                var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
                elem = (elem === opts.skipOptionalPartCharacter && test.static === true) ?
                    (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, position, test, true) || test.def) : elem;

                rslt = processCommandObject(rslt);

                if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
                    validatedPos = rslt.pos;
                }

                if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                    return false; //breakout if nothing to insert
                }

                if (revalidateMask.call(inputmask, pos, $.extend({}, tst, {
                    "input": casing.call(inputmask, elem, test, validatedPos)
                }), fromIsValid, validatedPos) === false) {
                    rslt = false;
                }
                return false; //break from loop
            }

            return true;
        });
        return rslt;
    }

    var result = true,
        positionsClone = $.extend(true, {}, maskset.validPositions); //clone the currentPositions

    if (opts.keepStatic === false && maskset.excludes[maskPos] !== undefined && fromAlternate !== true && fromIsValid !== true) {
        for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
            if (maskset.excludes[i] !== undefined) {
                maskset.excludes[i] = undefined;
                delete maskset.tests[i];
            }
        }
    }

    if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
        result = opts.preValidation.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), maskPos, c, isSelection.call(inputmask, pos), opts, maskset, pos, strict || fromAlternate);
        result = processCommandObject(result);
    }
    if (result === true) { //preValidation result
        result = _isValid(maskPos, c, strict);
        if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
            var currentPosValid = maskset.validPositions[maskPos];
            if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                result = {
                    "caret": _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)
                };
            } else {
                if (opts.insertMode || maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)] === undefined || pos.end > maskPos) { //does the input match on a further position?
                    var skip = false;
                    if (maskset.jitOffset[maskPos] && maskset.validPositions[_positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos)] === undefined) {
                        result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, true, true);
                        if (result !== false) {
                            if (fromAlternate !== true) result.caret = maskPos;
                            skip = true;
                        }
                    }
                    if (pos.end > maskPos) {
                        maskset.validPositions[maskPos] = undefined;
                    }
                    if (!skip && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) {
                        for (var nPos = maskPos + 1, snPos = _positioning__WEBPACK_IMPORTED_MODULE_2__.seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
                            // if (!isMask(nPos, true)) {
                            // 	continue;
                            // }
                            result = _isValid(nPos, c, strict);
                            if (result !== false) {
                                result = trackbackPositions.call(inputmask, maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                                maskPos = nPos;
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (inputmask.hasAlternator && fromAlternate !== true && !strict) {
            if (result === false && opts.keepStatic && (isComplete.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask)) || maskPos === 0)) { //try fuzzy alternator logic
                result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, undefined, pos);
            } else if (isSelection.call(inputmask, pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic) { //selection clears an alternated keepstatic mask ~ #2189
                result = alternate.call(inputmask, true);
            } else if (result == true && opts.numericInput !== true && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true) > maskPos) {
                // console.log("Alternating");
                result = alternate.call(inputmask, true);
            }
        }

        if (result === true) {
            result = {
                "pos": maskPos
            };
        }
    }
    if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
        var postResult = opts.postValidation.call(inputmask, _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true), pos.begin !== undefined ? (inputmask.isRTL ? pos.end : pos.begin) : pos, c, result, opts, maskset, strict, fromCheckval);
        if (postResult !== undefined) {
            result = postResult === true ? result : postResult;
        }
    }

    if (result && result.pos === undefined) {
        result.pos = maskPos;
    }

    if (result === false || validateOnly === true) {
        _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
        maskset.validPositions = $.extend(true, [], positionsClone); //revert validation changes
    } else {
        trackbackPositions.call(inputmask, undefined, maskPos, true);
    }

    var endResult = processCommandObject(result);
    // console.log("returned result " + JSON.stringify(endResult));
    if (inputmask.maxLength !== undefined) {
        var buffer = _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask);
        if (buffer.length > inputmask.maxLength && !fromIsValid) {
            _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
            maskset.validPositions = $.extend(true, [], positionsClone); //revert validation changes
            endResult = false;
        }
    }
    return endResult;
}

//tobe put on prototype?
function positionCanMatchDefinition(pos, testDefinition, opts) {
    const inputmask = this,
        maskset = this.maskset;

    var valid = false,
        tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, pos);
    for (var tndx = 0; tndx < tests.length; tndx++) {
        if (tests[tndx].match &&
            ((tests[tndx].match["nativeDef"] === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static)) ||
                tests[tndx].match["nativeDef"] === testDefinition.match["nativeDef"] ||
                (opts.regex && !tests[tndx].match.static && tests[tndx].match.fn.test(testDefinition.input, maskset, pos, false, opts)))) {
            valid = true;
            break;
        } else if (tests[tndx].match && tests[tndx].match["def"] === testDefinition.match["nativeDef"]) {
            valid = undefined;
            break;
        }
    }
    if (valid === false) {
        if (maskset.jitOffset[pos] !== undefined) {
            valid = positionCanMatchDefinition.call(inputmask, pos + maskset.jitOffset[pos], testDefinition, opts);
        }
    }
    return valid;
}

//tobe put on prototype?
function refreshFromBuffer(start, end, buffer) {
    const inputmask = this,
        maskset = this.maskset,
        opts = this.opts,
        $ = this.dependencyLib;
    // checkVal.call(inputmask, el, false, true, isRTL ? buffer.reverse() : buffer);
    var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
        bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
    opts.skipOptionalPartCharacter = "";
    if (start === true) {
        _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask);
        maskset.tests = {}; //refresh tests after possible alternating
        start = 0;
        end = buffer.length;
        p = _positioning__WEBPACK_IMPORTED_MODULE_2__.determineNewCaretPosition.call(inputmask, {begin: 0, end: 0}, false).begin;
    } else {
        for (i = start; i < end; i++) {
            delete maskset.validPositions[i];
        }
        p = start;
    }

    var keypress = new $.Event("keypress");
    for (i = start; i < end; i++) {
        keypress.key = bffr[i].toString();
        inputmask.ignorable = false; //make sure ignorable is ignored ;-)
        var valResult = _eventhandlers__WEBPACK_IMPORTED_MODULE_3__.EventHandlers.keypressEvent.call(inputmask, keypress, true, false, false, p);
        if (valResult !== false && valResult !== undefined) {
            p = valResult.forwardPosition;
        }
    }

    opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}

//tobe put on prototype?
//fill in best positions according the current input
function trackbackPositions(originalPos, newPos, fillOnly) {
    const inputmask = this,
        maskset = this.maskset,
        $ = this.dependencyLib;

    // console.log("trackbackPositions " + originalPos + " " + newPos);
    if (originalPos === undefined) {
        //find previous valid
        for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
            if (maskset.validPositions[originalPos]) break;
        }
    }
    for (var ps = originalPos; ps < newPos; ps++) {
        if (maskset.validPositions[ps] === undefined && !_positioning__WEBPACK_IMPORTED_MODULE_2__.isMask.call(inputmask, ps, false)) {
            var vp = ps == 0 ? _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];
            if (vp) {
                var tests = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTests.call(inputmask, ps).slice();
                if (tests[tests.length - 1].match.def === "") tests.pop();
                var bestMatch = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.determineTestTemplate.call(inputmask, ps, tests), np;
                if (bestMatch && (bestMatch.match.jit !== true || (bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true))) {
                    bestMatch = $.extend({}, bestMatch, {
                        "input": _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
                    });
                    bestMatch.generatedInput = true;
                    revalidateMask.call(inputmask, ps, bestMatch, true);

                    if (fillOnly !== true) {
                        //revalidate the new position to update the locator value
                        var cvpInput = maskset.validPositions[newPos].input;
                        maskset.validPositions[newPos] = undefined;
                        return isValid.call(inputmask, newPos, cvpInput, true, true);
                    }
                }
            }
        }
    }
}

//tobe put on prototype?
function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
    const inputmask = this,
        maskset = this.maskset,
        opts = this.opts,
        $ = this.dependencyLib;

    function IsEnclosedStatic(pos, valids, selection) {
        var posMatch = valids[pos];
        if (posMatch !== undefined && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === undefined || valids[0].alternation === undefined)) {
            var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.static === true && valids[pos - 1] : valids[pos - 1],
                nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.static === true && valids[pos + 1] : valids[pos + 1];
            return prevMatch && nextMatch;
        }
        return false;
    }

    var offset = 0, begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos,
        valid = true;
    if (pos.begin > pos.end) {
        begin = pos.end;
        end = pos.begin;
    }

    validatedPos = validatedPos !== undefined ? validatedPos : begin;
    if (fromIsValid === undefined && (begin !== end || (opts.insertMode && maskset.validPositions[validatedPos] !== undefined) || validTest === undefined || validTest.match.optionalQuantifier || validTest.match.optionality)) {
        //reposition & revalidate others
        var positionsClone = $.extend(true, {}, maskset.validPositions),
            lvp = _positioning__WEBPACK_IMPORTED_MODULE_2__.getLastValidPosition.call(inputmask, undefined, true),
            i;
        maskset.p = begin; //needed for alternated position after overtype selection

        for (i = lvp; i >= begin; i--) {
            delete maskset.validPositions[i];
            if (validTest === undefined) delete maskset.tests[i + 1];
        }

        var j = validatedPos,
            posMatch = j, t, canMatch, test;

        if (validTest) {
            maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
            posMatch++;
            j++;
        }

        for (i = validTest ? end : end - 1; i <= lvp; i++) {
            if ((t = positionsClone[i]) !== undefined && t.generatedInput !== true &&
                (i >= end || (i >= begin && IsEnclosedStatic(i, positionsClone, {
                    begin: begin,
                    end: end
                })))) {
                while (test = _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, posMatch), test.match.def !== "") { //loop needed to match further positions
                    if ((canMatch = positionCanMatchDefinition.call(inputmask, posMatch, t, opts)) !== false || t.match.def === "+") { //validated match //we still need some hackery for the + validator (numeric alias)
                        if (t.match.def === "+") _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask, true);
                        var result = isValid.call(inputmask, posMatch, t.input, t.match.def !== "+", /*t.match.def !== "+"*/ true);
                        valid = result !== false;
                        j = (result.pos || posMatch) + 1;
                        if (!valid && canMatch) break;
                    } else {
                        valid = false;
                    }
                    if (valid) {
                        if (validTest === undefined && t.match.static && i === pos.begin) offset++;
                        break;
                    }
                    if (!valid && _positioning__WEBPACK_IMPORTED_MODULE_2__.getBuffer.call(inputmask), posMatch > maskset.maskLength) {
                        break;
                    }
                    posMatch++;
                }
                if (_validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, posMatch).match.def == "") {
                    valid = false;
                }
                //restore position
                posMatch = j;
            }
            if (!valid) break;
        }
        if (!valid) {
            maskset.validPositions = $.extend(true, [], positionsClone);
            _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
            return false;
        }
    } else if (validTest && _validation_tests__WEBPACK_IMPORTED_MODULE_0__.getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) {
        maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
    }

    _positioning__WEBPACK_IMPORTED_MODULE_2__.resetMaskSet.call(inputmask, true);
    return offset;
}


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/the-new-css-reset/css/reset.css":
/*!******************************************************!*\
  !*** ./node_modules/the-new-css-reset/css/reset.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  openDropdown();
});

const openDropdown = () => {
  const triggers = document.querySelectorAll("[data-trigger]");
  let mql = window.matchMedia("(max-width: 991px)");

  triggers.forEach((trigger) => {
    const triggeredElement = document.getElementById(trigger.dataset.trigger);
    let elementHeight = getComputedStyle(triggeredElement).height;

    if (window.innerWidth <= 991) {
      triggeredElement.style.height = "0px";
    }

    mql.addEventListener("change", () => {
      elementHeight = getComputedStyle(triggeredElement).height;
      if (mql.matches) {
        triggeredElement.style.height = "0px";
      } else {
        triggeredElement.style.height = "auto";
        trigger.classList.remove("active");
      }
    });

    trigger.addEventListener("click", () => {
      trigger.classList.toggle("active");
      if (triggeredElement) {
        if (triggeredElement.style.height === "0px") {
          triggeredElement.style.height = elementHeight;
        } else {
          triggeredElement.style.height = "0px";
        }
      }
    });
  });
};


/***/ }),

/***/ "./src/js/mask.js":
/*!************************!*\
  !*** ./src/js/mask.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask_lib_inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask/lib/inputmask */ "./node_modules/inputmask/lib/inputmask.js");


document.addEventListener("DOMContentLoaded", () => {
  const allInputs = document.querySelectorAll("input");

  allInputs.forEach((el) => {
    if (el.dataset.code === "") {
      (0,inputmask_lib_inputmask__WEBPACK_IMPORTED_MODULE_0__["default"])({
        regex:
          "[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}",
      }).mask(el);
    }
  });
});


/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", () => {
  scrollEvent();
});

const scrollEvent = () => {
  const contentHeader = document.querySelectorAll("[data-content-header]");
  const sidebar = document.getElementById("sidebar");
  const content = document.querySelector(".page-content");

  contentHeader.forEach((header) => {
    const headerOffsetTop = header.offsetTop;
    let headerHeight = parseInt(getComputedStyle(header).height, 10);

    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 992) {
        if (window.pageYOffset >= headerOffsetTop - headerHeight) {
          header.classList.add("fixed");
          content.style.marginTop = `${headerHeight}px`;
        } else {
          header.classList.remove("fixed");
          content.style.marginTop = `0px`;
        }
      } else {
        header.classList.remove("fixed");
        content.style.marginTop = `0px`;
      }
    });
    if (window.innerWidth <= 991) {
      sidebar.style.top = `${headerHeight + 45}px`;
    }
    window.addEventListener("resize", () => {
      headerHeight = parseInt(getComputedStyle(header).height, 10);
      sidebar.style.top = `${headerHeight + 45}px`;
      if (window.innerWidth <= 991) {
        content.style.paddingTop = `${headerHeight}px`;
      } else {
        content.style.paddingTop = `8px`;
      }
    });
  });
};


/***/ }),

/***/ "./src/js/sprite.js":
/*!**************************!*\
  !*** ./src/js/sprite.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({

});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var the_new_css_reset_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! the-new-css-reset/css/reset.css */ "./node_modules/the-new-css-reset/css/reset.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprite */ "./src/js/sprite.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask */ "./src/js/mask.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown */ "./src/js/dropdown.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dropdown__WEBPACK_IMPORTED_MODULE_6__);









}();
/******/ })()
;