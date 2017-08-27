/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HrefWatcher = function () {
  function HrefWatcher(element, binding) {
    _classCallCheck(this, HrefWatcher);

    var classNames = '';
    this.isExact = binding.modifiers.exact;

    switch (_typeof(binding.value)) {
      case 'object':
        return this.multiElement(element, binding.value);
      case 'string':
        classNames = binding.value || 'active';
        break;
      case 'undefined':
        classNames = 'active';
        break;
      default:
        classNames = binding.expression || 'active';
    }

    return this.singleElement(element, classNames);
  }

  _createClass(HrefWatcher, [{
    key: 'singleElement',
    value: function singleElement(element, classNames) {
      var link = element.tagName.toLowerCase() === 'a' ? element.href : element.querySelector('a').href;
      var regexpString = '^' + link + (this.isExact ? '$' : '');
      var regexp = new RegExp(regexpString);

      if (window.location.href.match(regexp)) {
        var _element$classList;

        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' ')));
      } else {
        var _element$classList2;

        (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(classNames.split(' ')));
      }
    }
  }, {
    key: 'multiElement',
    value: function multiElement(root, options) {
      for (var key in options) {
        // noinspection JSUnfilteredForInLoop
        var selector = options instanceof Array ? options[key].trim() : key.trim();
        // noinspection JSUnfilteredForInLoop
        var _classNames = !(options instanceof Array) ? options[key].trim() || 'active' : 'active';
        var elements = this.findElements(root, selector);
        this.handleElements(elements, _classNames);
      }
    }

    // noinspection JSMethodCanBeStatic

  }, {
    key: 'findElements',
    value: function findElements(root, selector) {
      if (selector.split()[0] === '>') {
        selector = ':scope ' + selector;
      }
      return root.querySelectorAll(selector);
    }
  }, {
    key: 'handleElements',
    value: function handleElements(elements, classNames) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          this.singleElement(element, classNames);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return HrefWatcher;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  inserted: function inserted(el, binding) {
    new HrefWatcher(el, binding);
  }
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(10);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_active_link__ = __webpack_require__(52);


$(function () {
  var app = new Vue({
    el: '#app',
    directives: {
      activeLink: __WEBPACK_IMPORTED_MODULE_0_common_active_link__["a" /* default */]
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTE2NjVjNjc4OGQyYmNlZTg4MWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tbW9uL2FjdGl2ZS1saW5rLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIkhyZWZXYXRjaGVyIiwiZWxlbWVudCIsImJpbmRpbmciLCJjbGFzc05hbWVzIiwiaXNFeGFjdCIsIm1vZGlmaWVycyIsImV4YWN0IiwidmFsdWUiLCJtdWx0aUVsZW1lbnQiLCJleHByZXNzaW9uIiwic2luZ2xlRWxlbWVudCIsImxpbmsiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJocmVmIiwicXVlcnlTZWxlY3RvciIsInJlZ2V4cFN0cmluZyIsInJlZ2V4cCIsIlJlZ0V4cCIsIndpbmRvdyIsImxvY2F0aW9uIiwibWF0Y2giLCJjbGFzc0xpc3QiLCJhZGQiLCJzcGxpdCIsInJlbW92ZSIsInJvb3QiLCJvcHRpb25zIiwia2V5Iiwic2VsZWN0b3IiLCJBcnJheSIsInRyaW0iLCJlbGVtZW50cyIsImZpbmRFbGVtZW50cyIsImhhbmRsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydGVkIiwiZWwiLCIkIiwiYXBwIiwiVnVlIiwiZGlyZWN0aXZlcyIsImFjdGl2ZUxpbmsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Qzs7Ozs7O0FBR0gseURBQWU7QUFDYmlDLFVBRGEsb0JBQ0pDLEVBREksRUFDQW5DLE9BREEsRUFDUztBQUNwQixRQUFJRixXQUFKLENBQWdCcUMsRUFBaEIsRUFBb0JuQyxPQUFwQjtBQUNEO0FBSFksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOztBQUVBb0MsRUFBRSxZQUFVO0FBQ1YsTUFBTUMsTUFBTSxJQUFJQyxHQUFKLENBQVE7QUFDbEJILFFBQUksTUFEYztBQUVsQkksZ0JBQVk7QUFDVkMsa0JBQUEsbUVBQUFBO0FBRFU7QUFGTSxHQUFSLENBQVo7QUFNRCxDQVBELEUiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTE2NjVjNjc4OGQyYmNlZTg4MWUiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjbGFzcyBIcmVmV2F0Y2hlciB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgYmluZGluZykge1xyXG4gICAgbGV0IGNsYXNzTmFtZXMgPSAnJ1xyXG4gICAgdGhpcy5pc0V4YWN0ID0gYmluZGluZy5tb2RpZmllcnMuZXhhY3RcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBiaW5kaW5nLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlFbGVtZW50KGVsZW1lbnQsIGJpbmRpbmcudmFsdWUpXHJcbiAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgY2xhc3NOYW1lcyA9IGJpbmRpbmcudmFsdWUgfHwgJ2FjdGl2ZSdcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgIGNsYXNzTmFtZXMgPSAnYWN0aXZlJ1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY2xhc3NOYW1lcyA9IGJpbmRpbmcuZXhwcmVzc2lvbiB8fCAnYWN0aXZlJ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNpbmdsZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lcylcclxuICB9XHJcblxyXG4gIHNpbmdsZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgbGluayA9IChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSA/IGVsZW1lbnQuaHJlZiA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpLmhyZWZcclxuICAgIGNvbnN0IHJlZ2V4cFN0cmluZyA9ICdeJyArIGxpbmsgKyAodGhpcy5pc0V4YWN0ID8gJyQnIDogJycpXHJcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHJlZ2V4cFN0cmluZylcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2gocmVnZXhwKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcy5zcGxpdCgnICcpKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzLnNwbGl0KCcgJykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtdWx0aUVsZW1lbnQocm9vdCwgb3B0aW9ucykge1xyXG4gICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICBjb25zdCBzZWxlY3RvciA9IG9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IG9wdGlvbnNba2V5XS50cmltKCkgOiBrZXkudHJpbSgpXHJcbiAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9ICEob3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSA/IG9wdGlvbnNba2V5XS50cmltKCkgfHwgJ2FjdGl2ZScgOiAnYWN0aXZlJ1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZmluZEVsZW1lbnRzKHJvb3QsIHNlbGVjdG9yKVxyXG4gICAgICB0aGlzLmhhbmRsZUVsZW1lbnRzKGVsZW1lbnRzLCBjbGFzc05hbWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcclxuICBmaW5kRWxlbWVudHMocm9vdCwgc2VsZWN0b3Ipe1xyXG4gICAgaWYoc2VsZWN0b3Iuc3BsaXQoKVswXSA9PT0gJz4nKXtcclxuICAgICAgc2VsZWN0b3IgPSAnOnNjb3BlICcgKyBzZWxlY3RvclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcclxuICB9XHJcblxyXG4gIGhhbmRsZUVsZW1lbnRzKGVsZW1lbnRzLCBjbGFzc05hbWVzKSB7XHJcbiAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cyl7XHJcbiAgICAgIHRoaXMuc2luZ2xlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWVzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluc2VydGVkKGVsLCBiaW5kaW5nKSB7XHJcbiAgICBuZXcgSHJlZldhdGNoZXIoZWwsIGJpbmRpbmcpXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21tb24vYWN0aXZlLWxpbmsuanMiLCJpbXBvcnQgYWN0aXZlTGluayBmcm9tICdjb21tb24vYWN0aXZlLWxpbmsnXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgZGlyZWN0aXZlczoge1xyXG4gICAgICBhY3RpdmVMaW5rXHJcbiAgICB9XHJcbiAgfSlcclxufSlcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==