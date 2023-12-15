'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".displayNone {\n  display: none;\n}\n\n.dropDown__container {\n  width: 103%;\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.borderBottomNone {\n  border-bottom: none;\n}\n.supperposition {\n  z-index: 1;\n}\n.large {\n  width: 20rem;\n}\n.medium {\n  width: 15rem;\n}\n.small {\n  width: 10rem;\n}\n\n.dropDown__container__input {\n  border: 1px solid rgb(118, 118, 118);\n  height: 1.63rem;\n  padding: 1px 0.5rem 1px 0.5rem;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.dropDown__container__input--value {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.dropDown__container__options {\n  background-color: white;\n  position: absolute;\n  border: 1px solid rgb(113, 113, 113);\n  width: 99.4%;\n  border-radius: 0px 0px 5px 5px;\n  overflow-y: auto;\n  max-height: 250px;\n}\n\n.dropDown__container__options--list {\n  padding: 0;\n  margin: 0;\n}\n\n.dropDown__container__options--list > li {\n  transition-duration: 0.6s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  border-top: 1px solid black;\n  padding: 7px 0px 7px 0px;\n  cursor: pointer;\n}\n\n.dropDown__container__options--list > li:hover {\n  transition-duration: 0.6s;\n  background-color: #87ceeb;\n}\n\n.dropDown__container__options--list > li:first-child {\n  border: none;\n}\n";
styleInject(css_248z$1);

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION$1 = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = 'classic';
var FAMILY_SHARP = 'sharp';
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
  'fa': 'solid',
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fakd': 'kit',
  'fa-kit': 'kit',
  'fa-kit-duotone': 'kit'
}), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
  'fa': 'solid',
  'fass': 'solid',
  'fa-solid': 'solid',
  'fasr': 'regular',
  'fa-regular': 'regular',
  'fasl': 'light',
  'fa-light': 'light',
  'fast': 'thin',
  'fa-thin': 'thin'
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  thin: 'fat',
  duotone: 'fad',
  brands: 'fab',
  kit: 'fak'
}), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
  solid: 'fass',
  regular: 'fasr',
  light: 'fasl',
  thin: 'fast'
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
  fab: 'fa-brands',
  fad: 'fa-duotone',
  fak: 'fa-kit',
  fal: 'fa-light',
  far: 'fa-regular',
  fas: 'fa-solid',
  fat: 'fa-thin'
}), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
  fass: 'fa-solid',
  fasr: 'fa-regular',
  fasl: 'fa-light',
  fast: 'fa-thin'
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
}), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
  'fa-solid': 'fass',
  'fa-regular': 'fasr',
  'fa-light': 'fasl',
  'fa-thin': 'fast'
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
  900: 'fas',
  400: 'far',
  normal: 'far',
  300: 'fal',
  100: 'fat'
}), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
  900: 'fass',
  400: 'fasr',
  300: 'fasl',
  100: 'fast'
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var prefixes = new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$1(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present

if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}

var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;

    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
      family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;

  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;

  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }

  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }

  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family: family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }

  if (values.includes('fa-duotone') || values.includes('fad')) {
    canonical.prefix = 'fad';
  }

  if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
    canonical.prefix = 'fass';
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof$1(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof$1(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2$1({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    ({
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    });

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.5.1\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2$1({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

var knownPrefixes = new Set();
FAMILIES.map(function (family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray$1(knownPrefixes);

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));

  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }

  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION$1) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2$1({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray$1(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray$1(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray$1(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2$1({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2$1({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2$1({}, trans.inner),
        children: [fillBlack(_objectSpread2$1({
          tag: mainPath.tag,
          attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2$1({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2$1({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
api.config;
api.library;
api.dom;
var parse$1 = api.parse;
api.findIconDefinition;
api.toHtml;
var icon = api.icon;
api.layer;
api.text;
api.counter;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

var reactIs = {exports: {}};

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var _excluded = ["style"];

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (parse$1.icon) {
    return parse$1.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var FontAwesomeIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId,
      maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse$1.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: ref
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: PropTypes.bool,
  border: PropTypes.bool,
  beatFade: PropTypes.bool,
  bounce: PropTypes.bool,
  className: PropTypes.string,
  fade: PropTypes.bool,
  flash: PropTypes.bool,
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  maskId: PropTypes.string,
  fixedWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  flip: PropTypes.oneOf([true, false, 'horizontal', 'vertical', 'both']),
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  listItem: PropTypes.bool,
  pull: PropTypes.oneOf(['right', 'left']),
  pulse: PropTypes.bool,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  shake: PropTypes.bool,
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: PropTypes.bool,
  spinPulse: PropTypes.bool,
  spinReverse: PropTypes.bool,
  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  titleId: PropTypes.string,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  swapOpacity: PropTypes.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, React.createElement);

var faChevronUp = {
  prefix: 'fas',
  iconName: 'chevron-up',
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
};
var faChevronDown = {
  prefix: 'fas',
  iconName: 'chevron-down',
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
};

var css_248z = "/*!\n * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n * Copyright 2023 Fonticons, Inc.\n */\n.fa {\n  font-family: var(--fa-style-family, \"Font Awesome 6 Free\");\n  font-weight: var(--fa-style, 900); }\n\n.fa,\n.fa-classic,\n.fa-sharp,\n.fas,\n.fa-solid,\n.far,\n.fa-regular,\n.fab,\n.fa-brands {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: var(--fa-display, inline-block);\n  font-style: normal;\n  font-variant: normal;\n  line-height: 1;\n  text-rendering: auto; }\n\n.fas,\n.fa-classic,\n.fa-solid,\n.far,\n.fa-regular {\n  font-family: 'Font Awesome 6 Free'; }\n\n.fab,\n.fa-brands {\n  font-family: 'Font Awesome 6 Brands'; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em; }\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.08333em;\n  vertical-align: 0.125em; }\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.07143em;\n  vertical-align: 0.05357em; }\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em; }\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.04167em;\n  vertical-align: -0.125em; }\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit; }\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em); }\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em); }\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em); }\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1)); }\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear); }\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear); }\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse; }\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8)); }\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s; } }\n\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\n\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\n\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); } }\n\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0); } }\n\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4); } }\n\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4); } }\n\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\n\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\n\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\n\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\n\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg); }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg); }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg); }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg); }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg); }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg); }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg); }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg); }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg); }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg); }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg); }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg); }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg); }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg); }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg); }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg); }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none)); }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: var(--fa-stack-z-index, auto); }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff); }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n\n.fa-0::before {\n  content: \"\\30\"; }\n\n.fa-1::before {\n  content: \"\\31\"; }\n\n.fa-2::before {\n  content: \"\\32\"; }\n\n.fa-3::before {\n  content: \"\\33\"; }\n\n.fa-4::before {\n  content: \"\\34\"; }\n\n.fa-5::before {\n  content: \"\\35\"; }\n\n.fa-6::before {\n  content: \"\\36\"; }\n\n.fa-7::before {\n  content: \"\\37\"; }\n\n.fa-8::before {\n  content: \"\\38\"; }\n\n.fa-9::before {\n  content: \"\\39\"; }\n\n.fa-fill-drip::before {\n  content: \"\\f576\"; }\n\n.fa-arrows-to-circle::before {\n  content: \"\\e4bd\"; }\n\n.fa-circle-chevron-right::before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-right::before {\n  content: \"\\f138\"; }\n\n.fa-at::before {\n  content: \"\\40\"; }\n\n.fa-trash-can::before {\n  content: \"\\f2ed\"; }\n\n.fa-trash-alt::before {\n  content: \"\\f2ed\"; }\n\n.fa-text-height::before {\n  content: \"\\f034\"; }\n\n.fa-user-xmark::before {\n  content: \"\\f235\"; }\n\n.fa-user-times::before {\n  content: \"\\f235\"; }\n\n.fa-stethoscope::before {\n  content: \"\\f0f1\"; }\n\n.fa-message::before {\n  content: \"\\f27a\"; }\n\n.fa-comment-alt::before {\n  content: \"\\f27a\"; }\n\n.fa-info::before {\n  content: \"\\f129\"; }\n\n.fa-down-left-and-up-right-to-center::before {\n  content: \"\\f422\"; }\n\n.fa-compress-alt::before {\n  content: \"\\f422\"; }\n\n.fa-explosion::before {\n  content: \"\\e4e9\"; }\n\n.fa-file-lines::before {\n  content: \"\\f15c\"; }\n\n.fa-file-alt::before {\n  content: \"\\f15c\"; }\n\n.fa-file-text::before {\n  content: \"\\f15c\"; }\n\n.fa-wave-square::before {\n  content: \"\\f83e\"; }\n\n.fa-ring::before {\n  content: \"\\f70b\"; }\n\n.fa-building-un::before {\n  content: \"\\e4d9\"; }\n\n.fa-dice-three::before {\n  content: \"\\f527\"; }\n\n.fa-calendar-days::before {\n  content: \"\\f073\"; }\n\n.fa-calendar-alt::before {\n  content: \"\\f073\"; }\n\n.fa-anchor-circle-check::before {\n  content: \"\\e4aa\"; }\n\n.fa-building-circle-arrow-right::before {\n  content: \"\\e4d1\"; }\n\n.fa-volleyball::before {\n  content: \"\\f45f\"; }\n\n.fa-volleyball-ball::before {\n  content: \"\\f45f\"; }\n\n.fa-arrows-up-to-line::before {\n  content: \"\\e4c2\"; }\n\n.fa-sort-down::before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-desc::before {\n  content: \"\\f0dd\"; }\n\n.fa-circle-minus::before {\n  content: \"\\f056\"; }\n\n.fa-minus-circle::before {\n  content: \"\\f056\"; }\n\n.fa-door-open::before {\n  content: \"\\f52b\"; }\n\n.fa-right-from-bracket::before {\n  content: \"\\f2f5\"; }\n\n.fa-sign-out-alt::before {\n  content: \"\\f2f5\"; }\n\n.fa-atom::before {\n  content: \"\\f5d2\"; }\n\n.fa-soap::before {\n  content: \"\\e06e\"; }\n\n.fa-icons::before {\n  content: \"\\f86d\"; }\n\n.fa-heart-music-camera-bolt::before {\n  content: \"\\f86d\"; }\n\n.fa-microphone-lines-slash::before {\n  content: \"\\f539\"; }\n\n.fa-microphone-alt-slash::before {\n  content: \"\\f539\"; }\n\n.fa-bridge-circle-check::before {\n  content: \"\\e4c9\"; }\n\n.fa-pump-medical::before {\n  content: \"\\e06a\"; }\n\n.fa-fingerprint::before {\n  content: \"\\f577\"; }\n\n.fa-hand-point-right::before {\n  content: \"\\f0a4\"; }\n\n.fa-magnifying-glass-location::before {\n  content: \"\\f689\"; }\n\n.fa-search-location::before {\n  content: \"\\f689\"; }\n\n.fa-forward-step::before {\n  content: \"\\f051\"; }\n\n.fa-step-forward::before {\n  content: \"\\f051\"; }\n\n.fa-face-smile-beam::before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-beam::before {\n  content: \"\\f5b8\"; }\n\n.fa-flag-checkered::before {\n  content: \"\\f11e\"; }\n\n.fa-football::before {\n  content: \"\\f44e\"; }\n\n.fa-football-ball::before {\n  content: \"\\f44e\"; }\n\n.fa-school-circle-exclamation::before {\n  content: \"\\e56c\"; }\n\n.fa-crop::before {\n  content: \"\\f125\"; }\n\n.fa-angles-down::before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-down::before {\n  content: \"\\f103\"; }\n\n.fa-users-rectangle::before {\n  content: \"\\e594\"; }\n\n.fa-people-roof::before {\n  content: \"\\e537\"; }\n\n.fa-people-line::before {\n  content: \"\\e534\"; }\n\n.fa-beer-mug-empty::before {\n  content: \"\\f0fc\"; }\n\n.fa-beer::before {\n  content: \"\\f0fc\"; }\n\n.fa-diagram-predecessor::before {\n  content: \"\\e477\"; }\n\n.fa-arrow-up-long::before {\n  content: \"\\f176\"; }\n\n.fa-long-arrow-up::before {\n  content: \"\\f176\"; }\n\n.fa-fire-flame-simple::before {\n  content: \"\\f46a\"; }\n\n.fa-burn::before {\n  content: \"\\f46a\"; }\n\n.fa-person::before {\n  content: \"\\f183\"; }\n\n.fa-male::before {\n  content: \"\\f183\"; }\n\n.fa-laptop::before {\n  content: \"\\f109\"; }\n\n.fa-file-csv::before {\n  content: \"\\f6dd\"; }\n\n.fa-menorah::before {\n  content: \"\\f676\"; }\n\n.fa-truck-plane::before {\n  content: \"\\e58f\"; }\n\n.fa-record-vinyl::before {\n  content: \"\\f8d9\"; }\n\n.fa-face-grin-stars::before {\n  content: \"\\f587\"; }\n\n.fa-grin-stars::before {\n  content: \"\\f587\"; }\n\n.fa-bong::before {\n  content: \"\\f55c\"; }\n\n.fa-spaghetti-monster-flying::before {\n  content: \"\\f67b\"; }\n\n.fa-pastafarianism::before {\n  content: \"\\f67b\"; }\n\n.fa-arrow-down-up-across-line::before {\n  content: \"\\e4af\"; }\n\n.fa-spoon::before {\n  content: \"\\f2e5\"; }\n\n.fa-utensil-spoon::before {\n  content: \"\\f2e5\"; }\n\n.fa-jar-wheat::before {\n  content: \"\\e517\"; }\n\n.fa-envelopes-bulk::before {\n  content: \"\\f674\"; }\n\n.fa-mail-bulk::before {\n  content: \"\\f674\"; }\n\n.fa-file-circle-exclamation::before {\n  content: \"\\e4eb\"; }\n\n.fa-circle-h::before {\n  content: \"\\f47e\"; }\n\n.fa-hospital-symbol::before {\n  content: \"\\f47e\"; }\n\n.fa-pager::before {\n  content: \"\\f815\"; }\n\n.fa-address-book::before {\n  content: \"\\f2b9\"; }\n\n.fa-contact-book::before {\n  content: \"\\f2b9\"; }\n\n.fa-strikethrough::before {\n  content: \"\\f0cc\"; }\n\n.fa-k::before {\n  content: \"\\4b\"; }\n\n.fa-landmark-flag::before {\n  content: \"\\e51c\"; }\n\n.fa-pencil::before {\n  content: \"\\f303\"; }\n\n.fa-pencil-alt::before {\n  content: \"\\f303\"; }\n\n.fa-backward::before {\n  content: \"\\f04a\"; }\n\n.fa-caret-right::before {\n  content: \"\\f0da\"; }\n\n.fa-comments::before {\n  content: \"\\f086\"; }\n\n.fa-paste::before {\n  content: \"\\f0ea\"; }\n\n.fa-file-clipboard::before {\n  content: \"\\f0ea\"; }\n\n.fa-code-pull-request::before {\n  content: \"\\e13c\"; }\n\n.fa-clipboard-list::before {\n  content: \"\\f46d\"; }\n\n.fa-truck-ramp-box::before {\n  content: \"\\f4de\"; }\n\n.fa-truck-loading::before {\n  content: \"\\f4de\"; }\n\n.fa-user-check::before {\n  content: \"\\f4fc\"; }\n\n.fa-vial-virus::before {\n  content: \"\\e597\"; }\n\n.fa-sheet-plastic::before {\n  content: \"\\e571\"; }\n\n.fa-blog::before {\n  content: \"\\f781\"; }\n\n.fa-user-ninja::before {\n  content: \"\\f504\"; }\n\n.fa-person-arrow-up-from-line::before {\n  content: \"\\e539\"; }\n\n.fa-scroll-torah::before {\n  content: \"\\f6a0\"; }\n\n.fa-torah::before {\n  content: \"\\f6a0\"; }\n\n.fa-broom-ball::before {\n  content: \"\\f458\"; }\n\n.fa-quidditch::before {\n  content: \"\\f458\"; }\n\n.fa-quidditch-broom-ball::before {\n  content: \"\\f458\"; }\n\n.fa-toggle-off::before {\n  content: \"\\f204\"; }\n\n.fa-box-archive::before {\n  content: \"\\f187\"; }\n\n.fa-archive::before {\n  content: \"\\f187\"; }\n\n.fa-person-drowning::before {\n  content: \"\\e545\"; }\n\n.fa-arrow-down-9-1::before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-desc::before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-down-alt::before {\n  content: \"\\f886\"; }\n\n.fa-face-grin-tongue-squint::before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-squint::before {\n  content: \"\\f58a\"; }\n\n.fa-spray-can::before {\n  content: \"\\f5bd\"; }\n\n.fa-truck-monster::before {\n  content: \"\\f63b\"; }\n\n.fa-w::before {\n  content: \"\\57\"; }\n\n.fa-earth-africa::before {\n  content: \"\\f57c\"; }\n\n.fa-globe-africa::before {\n  content: \"\\f57c\"; }\n\n.fa-rainbow::before {\n  content: \"\\f75b\"; }\n\n.fa-circle-notch::before {\n  content: \"\\f1ce\"; }\n\n.fa-tablet-screen-button::before {\n  content: \"\\f3fa\"; }\n\n.fa-tablet-alt::before {\n  content: \"\\f3fa\"; }\n\n.fa-paw::before {\n  content: \"\\f1b0\"; }\n\n.fa-cloud::before {\n  content: \"\\f0c2\"; }\n\n.fa-trowel-bricks::before {\n  content: \"\\e58a\"; }\n\n.fa-face-flushed::before {\n  content: \"\\f579\"; }\n\n.fa-flushed::before {\n  content: \"\\f579\"; }\n\n.fa-hospital-user::before {\n  content: \"\\f80d\"; }\n\n.fa-tent-arrow-left-right::before {\n  content: \"\\e57f\"; }\n\n.fa-gavel::before {\n  content: \"\\f0e3\"; }\n\n.fa-legal::before {\n  content: \"\\f0e3\"; }\n\n.fa-binoculars::before {\n  content: \"\\f1e5\"; }\n\n.fa-microphone-slash::before {\n  content: \"\\f131\"; }\n\n.fa-box-tissue::before {\n  content: \"\\e05b\"; }\n\n.fa-motorcycle::before {\n  content: \"\\f21c\"; }\n\n.fa-bell-concierge::before {\n  content: \"\\f562\"; }\n\n.fa-concierge-bell::before {\n  content: \"\\f562\"; }\n\n.fa-pen-ruler::before {\n  content: \"\\f5ae\"; }\n\n.fa-pencil-ruler::before {\n  content: \"\\f5ae\"; }\n\n.fa-people-arrows::before {\n  content: \"\\e068\"; }\n\n.fa-people-arrows-left-right::before {\n  content: \"\\e068\"; }\n\n.fa-mars-and-venus-burst::before {\n  content: \"\\e523\"; }\n\n.fa-square-caret-right::before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-right::before {\n  content: \"\\f152\"; }\n\n.fa-scissors::before {\n  content: \"\\f0c4\"; }\n\n.fa-cut::before {\n  content: \"\\f0c4\"; }\n\n.fa-sun-plant-wilt::before {\n  content: \"\\e57a\"; }\n\n.fa-toilets-portable::before {\n  content: \"\\e584\"; }\n\n.fa-hockey-puck::before {\n  content: \"\\f453\"; }\n\n.fa-table::before {\n  content: \"\\f0ce\"; }\n\n.fa-magnifying-glass-arrow-right::before {\n  content: \"\\e521\"; }\n\n.fa-tachograph-digital::before {\n  content: \"\\f566\"; }\n\n.fa-digital-tachograph::before {\n  content: \"\\f566\"; }\n\n.fa-users-slash::before {\n  content: \"\\e073\"; }\n\n.fa-clover::before {\n  content: \"\\e139\"; }\n\n.fa-reply::before {\n  content: \"\\f3e5\"; }\n\n.fa-mail-reply::before {\n  content: \"\\f3e5\"; }\n\n.fa-star-and-crescent::before {\n  content: \"\\f699\"; }\n\n.fa-house-fire::before {\n  content: \"\\e50c\"; }\n\n.fa-square-minus::before {\n  content: \"\\f146\"; }\n\n.fa-minus-square::before {\n  content: \"\\f146\"; }\n\n.fa-helicopter::before {\n  content: \"\\f533\"; }\n\n.fa-compass::before {\n  content: \"\\f14e\"; }\n\n.fa-square-caret-down::before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-down::before {\n  content: \"\\f150\"; }\n\n.fa-file-circle-question::before {\n  content: \"\\e4ef\"; }\n\n.fa-laptop-code::before {\n  content: \"\\f5fc\"; }\n\n.fa-swatchbook::before {\n  content: \"\\f5c3\"; }\n\n.fa-prescription-bottle::before {\n  content: \"\\f485\"; }\n\n.fa-bars::before {\n  content: \"\\f0c9\"; }\n\n.fa-navicon::before {\n  content: \"\\f0c9\"; }\n\n.fa-people-group::before {\n  content: \"\\e533\"; }\n\n.fa-hourglass-end::before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-3::before {\n  content: \"\\f253\"; }\n\n.fa-heart-crack::before {\n  content: \"\\f7a9\"; }\n\n.fa-heart-broken::before {\n  content: \"\\f7a9\"; }\n\n.fa-square-up-right::before {\n  content: \"\\f360\"; }\n\n.fa-external-link-square-alt::before {\n  content: \"\\f360\"; }\n\n.fa-face-kiss-beam::before {\n  content: \"\\f597\"; }\n\n.fa-kiss-beam::before {\n  content: \"\\f597\"; }\n\n.fa-film::before {\n  content: \"\\f008\"; }\n\n.fa-ruler-horizontal::before {\n  content: \"\\f547\"; }\n\n.fa-people-robbery::before {\n  content: \"\\e536\"; }\n\n.fa-lightbulb::before {\n  content: \"\\f0eb\"; }\n\n.fa-caret-left::before {\n  content: \"\\f0d9\"; }\n\n.fa-circle-exclamation::before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-circle::before {\n  content: \"\\f06a\"; }\n\n.fa-school-circle-xmark::before {\n  content: \"\\e56d\"; }\n\n.fa-arrow-right-from-bracket::before {\n  content: \"\\f08b\"; }\n\n.fa-sign-out::before {\n  content: \"\\f08b\"; }\n\n.fa-circle-chevron-down::before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-down::before {\n  content: \"\\f13a\"; }\n\n.fa-unlock-keyhole::before {\n  content: \"\\f13e\"; }\n\n.fa-unlock-alt::before {\n  content: \"\\f13e\"; }\n\n.fa-cloud-showers-heavy::before {\n  content: \"\\f740\"; }\n\n.fa-headphones-simple::before {\n  content: \"\\f58f\"; }\n\n.fa-headphones-alt::before {\n  content: \"\\f58f\"; }\n\n.fa-sitemap::before {\n  content: \"\\f0e8\"; }\n\n.fa-circle-dollar-to-slot::before {\n  content: \"\\f4b9\"; }\n\n.fa-donate::before {\n  content: \"\\f4b9\"; }\n\n.fa-memory::before {\n  content: \"\\f538\"; }\n\n.fa-road-spikes::before {\n  content: \"\\e568\"; }\n\n.fa-fire-burner::before {\n  content: \"\\e4f1\"; }\n\n.fa-flag::before {\n  content: \"\\f024\"; }\n\n.fa-hanukiah::before {\n  content: \"\\f6e6\"; }\n\n.fa-feather::before {\n  content: \"\\f52d\"; }\n\n.fa-volume-low::before {\n  content: \"\\f027\"; }\n\n.fa-volume-down::before {\n  content: \"\\f027\"; }\n\n.fa-comment-slash::before {\n  content: \"\\f4b3\"; }\n\n.fa-cloud-sun-rain::before {\n  content: \"\\f743\"; }\n\n.fa-compress::before {\n  content: \"\\f066\"; }\n\n.fa-wheat-awn::before {\n  content: \"\\e2cd\"; }\n\n.fa-wheat-alt::before {\n  content: \"\\e2cd\"; }\n\n.fa-ankh::before {\n  content: \"\\f644\"; }\n\n.fa-hands-holding-child::before {\n  content: \"\\e4fa\"; }\n\n.fa-asterisk::before {\n  content: \"\\2a\"; }\n\n.fa-square-check::before {\n  content: \"\\f14a\"; }\n\n.fa-check-square::before {\n  content: \"\\f14a\"; }\n\n.fa-peseta-sign::before {\n  content: \"\\e221\"; }\n\n.fa-heading::before {\n  content: \"\\f1dc\"; }\n\n.fa-header::before {\n  content: \"\\f1dc\"; }\n\n.fa-ghost::before {\n  content: \"\\f6e2\"; }\n\n.fa-list::before {\n  content: \"\\f03a\"; }\n\n.fa-list-squares::before {\n  content: \"\\f03a\"; }\n\n.fa-square-phone-flip::before {\n  content: \"\\f87b\"; }\n\n.fa-phone-square-alt::before {\n  content: \"\\f87b\"; }\n\n.fa-cart-plus::before {\n  content: \"\\f217\"; }\n\n.fa-gamepad::before {\n  content: \"\\f11b\"; }\n\n.fa-circle-dot::before {\n  content: \"\\f192\"; }\n\n.fa-dot-circle::before {\n  content: \"\\f192\"; }\n\n.fa-face-dizzy::before {\n  content: \"\\f567\"; }\n\n.fa-dizzy::before {\n  content: \"\\f567\"; }\n\n.fa-egg::before {\n  content: \"\\f7fb\"; }\n\n.fa-house-medical-circle-xmark::before {\n  content: \"\\e513\"; }\n\n.fa-campground::before {\n  content: \"\\f6bb\"; }\n\n.fa-folder-plus::before {\n  content: \"\\f65e\"; }\n\n.fa-futbol::before {\n  content: \"\\f1e3\"; }\n\n.fa-futbol-ball::before {\n  content: \"\\f1e3\"; }\n\n.fa-soccer-ball::before {\n  content: \"\\f1e3\"; }\n\n.fa-paintbrush::before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-brush::before {\n  content: \"\\f1fc\"; }\n\n.fa-lock::before {\n  content: \"\\f023\"; }\n\n.fa-gas-pump::before {\n  content: \"\\f52f\"; }\n\n.fa-hot-tub-person::before {\n  content: \"\\f593\"; }\n\n.fa-hot-tub::before {\n  content: \"\\f593\"; }\n\n.fa-map-location::before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked::before {\n  content: \"\\f59f\"; }\n\n.fa-house-flood-water::before {\n  content: \"\\e50e\"; }\n\n.fa-tree::before {\n  content: \"\\f1bb\"; }\n\n.fa-bridge-lock::before {\n  content: \"\\e4cc\"; }\n\n.fa-sack-dollar::before {\n  content: \"\\f81d\"; }\n\n.fa-pen-to-square::before {\n  content: \"\\f044\"; }\n\n.fa-edit::before {\n  content: \"\\f044\"; }\n\n.fa-car-side::before {\n  content: \"\\f5e4\"; }\n\n.fa-share-nodes::before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt::before {\n  content: \"\\f1e0\"; }\n\n.fa-heart-circle-minus::before {\n  content: \"\\e4ff\"; }\n\n.fa-hourglass-half::before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-2::before {\n  content: \"\\f252\"; }\n\n.fa-microscope::before {\n  content: \"\\f610\"; }\n\n.fa-sink::before {\n  content: \"\\e06d\"; }\n\n.fa-bag-shopping::before {\n  content: \"\\f290\"; }\n\n.fa-shopping-bag::before {\n  content: \"\\f290\"; }\n\n.fa-arrow-down-z-a::before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-desc::before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-down-alt::before {\n  content: \"\\f881\"; }\n\n.fa-mitten::before {\n  content: \"\\f7b5\"; }\n\n.fa-person-rays::before {\n  content: \"\\e54d\"; }\n\n.fa-users::before {\n  content: \"\\f0c0\"; }\n\n.fa-eye-slash::before {\n  content: \"\\f070\"; }\n\n.fa-flask-vial::before {\n  content: \"\\e4f3\"; }\n\n.fa-hand::before {\n  content: \"\\f256\"; }\n\n.fa-hand-paper::before {\n  content: \"\\f256\"; }\n\n.fa-om::before {\n  content: \"\\f679\"; }\n\n.fa-worm::before {\n  content: \"\\e599\"; }\n\n.fa-house-circle-xmark::before {\n  content: \"\\e50b\"; }\n\n.fa-plug::before {\n  content: \"\\f1e6\"; }\n\n.fa-chevron-up::before {\n  content: \"\\f077\"; }\n\n.fa-hand-spock::before {\n  content: \"\\f259\"; }\n\n.fa-stopwatch::before {\n  content: \"\\f2f2\"; }\n\n.fa-face-kiss::before {\n  content: \"\\f596\"; }\n\n.fa-kiss::before {\n  content: \"\\f596\"; }\n\n.fa-bridge-circle-xmark::before {\n  content: \"\\e4cb\"; }\n\n.fa-face-grin-tongue::before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue::before {\n  content: \"\\f589\"; }\n\n.fa-chess-bishop::before {\n  content: \"\\f43a\"; }\n\n.fa-face-grin-wink::before {\n  content: \"\\f58c\"; }\n\n.fa-grin-wink::before {\n  content: \"\\f58c\"; }\n\n.fa-ear-deaf::before {\n  content: \"\\f2a4\"; }\n\n.fa-deaf::before {\n  content: \"\\f2a4\"; }\n\n.fa-deafness::before {\n  content: \"\\f2a4\"; }\n\n.fa-hard-of-hearing::before {\n  content: \"\\f2a4\"; }\n\n.fa-road-circle-check::before {\n  content: \"\\e564\"; }\n\n.fa-dice-five::before {\n  content: \"\\f523\"; }\n\n.fa-square-rss::before {\n  content: \"\\f143\"; }\n\n.fa-rss-square::before {\n  content: \"\\f143\"; }\n\n.fa-land-mine-on::before {\n  content: \"\\e51b\"; }\n\n.fa-i-cursor::before {\n  content: \"\\f246\"; }\n\n.fa-stamp::before {\n  content: \"\\f5bf\"; }\n\n.fa-stairs::before {\n  content: \"\\e289\"; }\n\n.fa-i::before {\n  content: \"\\49\"; }\n\n.fa-hryvnia-sign::before {\n  content: \"\\f6f2\"; }\n\n.fa-hryvnia::before {\n  content: \"\\f6f2\"; }\n\n.fa-pills::before {\n  content: \"\\f484\"; }\n\n.fa-face-grin-wide::before {\n  content: \"\\f581\"; }\n\n.fa-grin-alt::before {\n  content: \"\\f581\"; }\n\n.fa-tooth::before {\n  content: \"\\f5c9\"; }\n\n.fa-v::before {\n  content: \"\\56\"; }\n\n.fa-bangladeshi-taka-sign::before {\n  content: \"\\e2e6\"; }\n\n.fa-bicycle::before {\n  content: \"\\f206\"; }\n\n.fa-staff-snake::before {\n  content: \"\\e579\"; }\n\n.fa-rod-asclepius::before {\n  content: \"\\e579\"; }\n\n.fa-rod-snake::before {\n  content: \"\\e579\"; }\n\n.fa-staff-aesculapius::before {\n  content: \"\\e579\"; }\n\n.fa-head-side-cough-slash::before {\n  content: \"\\e062\"; }\n\n.fa-truck-medical::before {\n  content: \"\\f0f9\"; }\n\n.fa-ambulance::before {\n  content: \"\\f0f9\"; }\n\n.fa-wheat-awn-circle-exclamation::before {\n  content: \"\\e598\"; }\n\n.fa-snowman::before {\n  content: \"\\f7d0\"; }\n\n.fa-mortar-pestle::before {\n  content: \"\\f5a7\"; }\n\n.fa-road-barrier::before {\n  content: \"\\e562\"; }\n\n.fa-school::before {\n  content: \"\\f549\"; }\n\n.fa-igloo::before {\n  content: \"\\f7ae\"; }\n\n.fa-joint::before {\n  content: \"\\f595\"; }\n\n.fa-angle-right::before {\n  content: \"\\f105\"; }\n\n.fa-horse::before {\n  content: \"\\f6f0\"; }\n\n.fa-q::before {\n  content: \"\\51\"; }\n\n.fa-g::before {\n  content: \"\\47\"; }\n\n.fa-notes-medical::before {\n  content: \"\\f481\"; }\n\n.fa-temperature-half::before {\n  content: \"\\f2c9\"; }\n\n.fa-temperature-2::before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-2::before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-half::before {\n  content: \"\\f2c9\"; }\n\n.fa-dong-sign::before {\n  content: \"\\e169\"; }\n\n.fa-capsules::before {\n  content: \"\\f46b\"; }\n\n.fa-poo-storm::before {\n  content: \"\\f75a\"; }\n\n.fa-poo-bolt::before {\n  content: \"\\f75a\"; }\n\n.fa-face-frown-open::before {\n  content: \"\\f57a\"; }\n\n.fa-frown-open::before {\n  content: \"\\f57a\"; }\n\n.fa-hand-point-up::before {\n  content: \"\\f0a6\"; }\n\n.fa-money-bill::before {\n  content: \"\\f0d6\"; }\n\n.fa-bookmark::before {\n  content: \"\\f02e\"; }\n\n.fa-align-justify::before {\n  content: \"\\f039\"; }\n\n.fa-umbrella-beach::before {\n  content: \"\\f5ca\"; }\n\n.fa-helmet-un::before {\n  content: \"\\e503\"; }\n\n.fa-bullseye::before {\n  content: \"\\f140\"; }\n\n.fa-bacon::before {\n  content: \"\\f7e5\"; }\n\n.fa-hand-point-down::before {\n  content: \"\\f0a7\"; }\n\n.fa-arrow-up-from-bracket::before {\n  content: \"\\e09a\"; }\n\n.fa-folder::before {\n  content: \"\\f07b\"; }\n\n.fa-folder-blank::before {\n  content: \"\\f07b\"; }\n\n.fa-file-waveform::before {\n  content: \"\\f478\"; }\n\n.fa-file-medical-alt::before {\n  content: \"\\f478\"; }\n\n.fa-radiation::before {\n  content: \"\\f7b9\"; }\n\n.fa-chart-simple::before {\n  content: \"\\e473\"; }\n\n.fa-mars-stroke::before {\n  content: \"\\f229\"; }\n\n.fa-vial::before {\n  content: \"\\f492\"; }\n\n.fa-gauge::before {\n  content: \"\\f624\"; }\n\n.fa-dashboard::before {\n  content: \"\\f624\"; }\n\n.fa-gauge-med::before {\n  content: \"\\f624\"; }\n\n.fa-tachometer-alt-average::before {\n  content: \"\\f624\"; }\n\n.fa-wand-magic-sparkles::before {\n  content: \"\\e2ca\"; }\n\n.fa-magic-wand-sparkles::before {\n  content: \"\\e2ca\"; }\n\n.fa-e::before {\n  content: \"\\45\"; }\n\n.fa-pen-clip::before {\n  content: \"\\f305\"; }\n\n.fa-pen-alt::before {\n  content: \"\\f305\"; }\n\n.fa-bridge-circle-exclamation::before {\n  content: \"\\e4ca\"; }\n\n.fa-user::before {\n  content: \"\\f007\"; }\n\n.fa-school-circle-check::before {\n  content: \"\\e56b\"; }\n\n.fa-dumpster::before {\n  content: \"\\f793\"; }\n\n.fa-van-shuttle::before {\n  content: \"\\f5b6\"; }\n\n.fa-shuttle-van::before {\n  content: \"\\f5b6\"; }\n\n.fa-building-user::before {\n  content: \"\\e4da\"; }\n\n.fa-square-caret-left::before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-left::before {\n  content: \"\\f191\"; }\n\n.fa-highlighter::before {\n  content: \"\\f591\"; }\n\n.fa-key::before {\n  content: \"\\f084\"; }\n\n.fa-bullhorn::before {\n  content: \"\\f0a1\"; }\n\n.fa-globe::before {\n  content: \"\\f0ac\"; }\n\n.fa-synagogue::before {\n  content: \"\\f69b\"; }\n\n.fa-person-half-dress::before {\n  content: \"\\e548\"; }\n\n.fa-road-bridge::before {\n  content: \"\\e563\"; }\n\n.fa-location-arrow::before {\n  content: \"\\f124\"; }\n\n.fa-c::before {\n  content: \"\\43\"; }\n\n.fa-tablet-button::before {\n  content: \"\\f10a\"; }\n\n.fa-building-lock::before {\n  content: \"\\e4d6\"; }\n\n.fa-pizza-slice::before {\n  content: \"\\f818\"; }\n\n.fa-money-bill-wave::before {\n  content: \"\\f53a\"; }\n\n.fa-chart-area::before {\n  content: \"\\f1fe\"; }\n\n.fa-area-chart::before {\n  content: \"\\f1fe\"; }\n\n.fa-house-flag::before {\n  content: \"\\e50d\"; }\n\n.fa-person-circle-minus::before {\n  content: \"\\e540\"; }\n\n.fa-ban::before {\n  content: \"\\f05e\"; }\n\n.fa-cancel::before {\n  content: \"\\f05e\"; }\n\n.fa-camera-rotate::before {\n  content: \"\\e0d8\"; }\n\n.fa-spray-can-sparkles::before {\n  content: \"\\f5d0\"; }\n\n.fa-air-freshener::before {\n  content: \"\\f5d0\"; }\n\n.fa-star::before {\n  content: \"\\f005\"; }\n\n.fa-repeat::before {\n  content: \"\\f363\"; }\n\n.fa-cross::before {\n  content: \"\\f654\"; }\n\n.fa-box::before {\n  content: \"\\f466\"; }\n\n.fa-venus-mars::before {\n  content: \"\\f228\"; }\n\n.fa-arrow-pointer::before {\n  content: \"\\f245\"; }\n\n.fa-mouse-pointer::before {\n  content: \"\\f245\"; }\n\n.fa-maximize::before {\n  content: \"\\f31e\"; }\n\n.fa-expand-arrows-alt::before {\n  content: \"\\f31e\"; }\n\n.fa-charging-station::before {\n  content: \"\\f5e7\"; }\n\n.fa-shapes::before {\n  content: \"\\f61f\"; }\n\n.fa-triangle-circle-square::before {\n  content: \"\\f61f\"; }\n\n.fa-shuffle::before {\n  content: \"\\f074\"; }\n\n.fa-random::before {\n  content: \"\\f074\"; }\n\n.fa-person-running::before {\n  content: \"\\f70c\"; }\n\n.fa-running::before {\n  content: \"\\f70c\"; }\n\n.fa-mobile-retro::before {\n  content: \"\\e527\"; }\n\n.fa-grip-lines-vertical::before {\n  content: \"\\f7a5\"; }\n\n.fa-spider::before {\n  content: \"\\f717\"; }\n\n.fa-hands-bound::before {\n  content: \"\\e4f9\"; }\n\n.fa-file-invoice-dollar::before {\n  content: \"\\f571\"; }\n\n.fa-plane-circle-exclamation::before {\n  content: \"\\e556\"; }\n\n.fa-x-ray::before {\n  content: \"\\f497\"; }\n\n.fa-spell-check::before {\n  content: \"\\f891\"; }\n\n.fa-slash::before {\n  content: \"\\f715\"; }\n\n.fa-computer-mouse::before {\n  content: \"\\f8cc\"; }\n\n.fa-mouse::before {\n  content: \"\\f8cc\"; }\n\n.fa-arrow-right-to-bracket::before {\n  content: \"\\f090\"; }\n\n.fa-sign-in::before {\n  content: \"\\f090\"; }\n\n.fa-shop-slash::before {\n  content: \"\\e070\"; }\n\n.fa-store-alt-slash::before {\n  content: \"\\e070\"; }\n\n.fa-server::before {\n  content: \"\\f233\"; }\n\n.fa-virus-covid-slash::before {\n  content: \"\\e4a9\"; }\n\n.fa-shop-lock::before {\n  content: \"\\e4a5\"; }\n\n.fa-hourglass-start::before {\n  content: \"\\f251\"; }\n\n.fa-hourglass-1::before {\n  content: \"\\f251\"; }\n\n.fa-blender-phone::before {\n  content: \"\\f6b6\"; }\n\n.fa-building-wheat::before {\n  content: \"\\e4db\"; }\n\n.fa-person-breastfeeding::before {\n  content: \"\\e53a\"; }\n\n.fa-right-to-bracket::before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-in-alt::before {\n  content: \"\\f2f6\"; }\n\n.fa-venus::before {\n  content: \"\\f221\"; }\n\n.fa-passport::before {\n  content: \"\\f5ab\"; }\n\n.fa-heart-pulse::before {\n  content: \"\\f21e\"; }\n\n.fa-heartbeat::before {\n  content: \"\\f21e\"; }\n\n.fa-people-carry-box::before {\n  content: \"\\f4ce\"; }\n\n.fa-people-carry::before {\n  content: \"\\f4ce\"; }\n\n.fa-temperature-high::before {\n  content: \"\\f769\"; }\n\n.fa-microchip::before {\n  content: \"\\f2db\"; }\n\n.fa-crown::before {\n  content: \"\\f521\"; }\n\n.fa-weight-hanging::before {\n  content: \"\\f5cd\"; }\n\n.fa-xmarks-lines::before {\n  content: \"\\e59a\"; }\n\n.fa-file-prescription::before {\n  content: \"\\f572\"; }\n\n.fa-weight-scale::before {\n  content: \"\\f496\"; }\n\n.fa-weight::before {\n  content: \"\\f496\"; }\n\n.fa-user-group::before {\n  content: \"\\f500\"; }\n\n.fa-user-friends::before {\n  content: \"\\f500\"; }\n\n.fa-arrow-up-a-z::before {\n  content: \"\\f15e\"; }\n\n.fa-sort-alpha-up::before {\n  content: \"\\f15e\"; }\n\n.fa-chess-knight::before {\n  content: \"\\f441\"; }\n\n.fa-face-laugh-squint::before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-squint::before {\n  content: \"\\f59b\"; }\n\n.fa-wheelchair::before {\n  content: \"\\f193\"; }\n\n.fa-circle-arrow-up::before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-circle-up::before {\n  content: \"\\f0aa\"; }\n\n.fa-toggle-on::before {\n  content: \"\\f205\"; }\n\n.fa-person-walking::before {\n  content: \"\\f554\"; }\n\n.fa-walking::before {\n  content: \"\\f554\"; }\n\n.fa-l::before {\n  content: \"\\4c\"; }\n\n.fa-fire::before {\n  content: \"\\f06d\"; }\n\n.fa-bed-pulse::before {\n  content: \"\\f487\"; }\n\n.fa-procedures::before {\n  content: \"\\f487\"; }\n\n.fa-shuttle-space::before {\n  content: \"\\f197\"; }\n\n.fa-space-shuttle::before {\n  content: \"\\f197\"; }\n\n.fa-face-laugh::before {\n  content: \"\\f599\"; }\n\n.fa-laugh::before {\n  content: \"\\f599\"; }\n\n.fa-folder-open::before {\n  content: \"\\f07c\"; }\n\n.fa-heart-circle-plus::before {\n  content: \"\\e500\"; }\n\n.fa-code-fork::before {\n  content: \"\\e13b\"; }\n\n.fa-city::before {\n  content: \"\\f64f\"; }\n\n.fa-microphone-lines::before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt::before {\n  content: \"\\f3c9\"; }\n\n.fa-pepper-hot::before {\n  content: \"\\f816\"; }\n\n.fa-unlock::before {\n  content: \"\\f09c\"; }\n\n.fa-colon-sign::before {\n  content: \"\\e140\"; }\n\n.fa-headset::before {\n  content: \"\\f590\"; }\n\n.fa-store-slash::before {\n  content: \"\\e071\"; }\n\n.fa-road-circle-xmark::before {\n  content: \"\\e566\"; }\n\n.fa-user-minus::before {\n  content: \"\\f503\"; }\n\n.fa-mars-stroke-up::before {\n  content: \"\\f22a\"; }\n\n.fa-mars-stroke-v::before {\n  content: \"\\f22a\"; }\n\n.fa-champagne-glasses::before {\n  content: \"\\f79f\"; }\n\n.fa-glass-cheers::before {\n  content: \"\\f79f\"; }\n\n.fa-clipboard::before {\n  content: \"\\f328\"; }\n\n.fa-house-circle-exclamation::before {\n  content: \"\\e50a\"; }\n\n.fa-file-arrow-up::before {\n  content: \"\\f574\"; }\n\n.fa-file-upload::before {\n  content: \"\\f574\"; }\n\n.fa-wifi::before {\n  content: \"\\f1eb\"; }\n\n.fa-wifi-3::before {\n  content: \"\\f1eb\"; }\n\n.fa-wifi-strong::before {\n  content: \"\\f1eb\"; }\n\n.fa-bath::before {\n  content: \"\\f2cd\"; }\n\n.fa-bathtub::before {\n  content: \"\\f2cd\"; }\n\n.fa-underline::before {\n  content: \"\\f0cd\"; }\n\n.fa-user-pen::before {\n  content: \"\\f4ff\"; }\n\n.fa-user-edit::before {\n  content: \"\\f4ff\"; }\n\n.fa-signature::before {\n  content: \"\\f5b7\"; }\n\n.fa-stroopwafel::before {\n  content: \"\\f551\"; }\n\n.fa-bold::before {\n  content: \"\\f032\"; }\n\n.fa-anchor-lock::before {\n  content: \"\\e4ad\"; }\n\n.fa-building-ngo::before {\n  content: \"\\e4d7\"; }\n\n.fa-manat-sign::before {\n  content: \"\\e1d5\"; }\n\n.fa-not-equal::before {\n  content: \"\\f53e\"; }\n\n.fa-border-top-left::before {\n  content: \"\\f853\"; }\n\n.fa-border-style::before {\n  content: \"\\f853\"; }\n\n.fa-map-location-dot::before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marked-alt::before {\n  content: \"\\f5a0\"; }\n\n.fa-jedi::before {\n  content: \"\\f669\"; }\n\n.fa-square-poll-vertical::before {\n  content: \"\\f681\"; }\n\n.fa-poll::before {\n  content: \"\\f681\"; }\n\n.fa-mug-hot::before {\n  content: \"\\f7b6\"; }\n\n.fa-car-battery::before {\n  content: \"\\f5df\"; }\n\n.fa-battery-car::before {\n  content: \"\\f5df\"; }\n\n.fa-gift::before {\n  content: \"\\f06b\"; }\n\n.fa-dice-two::before {\n  content: \"\\f528\"; }\n\n.fa-chess-queen::before {\n  content: \"\\f445\"; }\n\n.fa-glasses::before {\n  content: \"\\f530\"; }\n\n.fa-chess-board::before {\n  content: \"\\f43c\"; }\n\n.fa-building-circle-check::before {\n  content: \"\\e4d2\"; }\n\n.fa-person-chalkboard::before {\n  content: \"\\e53d\"; }\n\n.fa-mars-stroke-right::before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-h::before {\n  content: \"\\f22b\"; }\n\n.fa-hand-back-fist::before {\n  content: \"\\f255\"; }\n\n.fa-hand-rock::before {\n  content: \"\\f255\"; }\n\n.fa-square-caret-up::before {\n  content: \"\\f151\"; }\n\n.fa-caret-square-up::before {\n  content: \"\\f151\"; }\n\n.fa-cloud-showers-water::before {\n  content: \"\\e4e4\"; }\n\n.fa-chart-bar::before {\n  content: \"\\f080\"; }\n\n.fa-bar-chart::before {\n  content: \"\\f080\"; }\n\n.fa-hands-bubbles::before {\n  content: \"\\e05e\"; }\n\n.fa-hands-wash::before {\n  content: \"\\e05e\"; }\n\n.fa-less-than-equal::before {\n  content: \"\\f537\"; }\n\n.fa-train::before {\n  content: \"\\f238\"; }\n\n.fa-eye-low-vision::before {\n  content: \"\\f2a8\"; }\n\n.fa-low-vision::before {\n  content: \"\\f2a8\"; }\n\n.fa-crow::before {\n  content: \"\\f520\"; }\n\n.fa-sailboat::before {\n  content: \"\\e445\"; }\n\n.fa-window-restore::before {\n  content: \"\\f2d2\"; }\n\n.fa-square-plus::before {\n  content: \"\\f0fe\"; }\n\n.fa-plus-square::before {\n  content: \"\\f0fe\"; }\n\n.fa-torii-gate::before {\n  content: \"\\f6a1\"; }\n\n.fa-frog::before {\n  content: \"\\f52e\"; }\n\n.fa-bucket::before {\n  content: \"\\e4cf\"; }\n\n.fa-image::before {\n  content: \"\\f03e\"; }\n\n.fa-microphone::before {\n  content: \"\\f130\"; }\n\n.fa-cow::before {\n  content: \"\\f6c8\"; }\n\n.fa-caret-up::before {\n  content: \"\\f0d8\"; }\n\n.fa-screwdriver::before {\n  content: \"\\f54a\"; }\n\n.fa-folder-closed::before {\n  content: \"\\e185\"; }\n\n.fa-house-tsunami::before {\n  content: \"\\e515\"; }\n\n.fa-square-nfi::before {\n  content: \"\\e576\"; }\n\n.fa-arrow-up-from-ground-water::before {\n  content: \"\\e4b5\"; }\n\n.fa-martini-glass::before {\n  content: \"\\f57b\"; }\n\n.fa-glass-martini-alt::before {\n  content: \"\\f57b\"; }\n\n.fa-rotate-left::before {\n  content: \"\\f2ea\"; }\n\n.fa-rotate-back::before {\n  content: \"\\f2ea\"; }\n\n.fa-rotate-backward::before {\n  content: \"\\f2ea\"; }\n\n.fa-undo-alt::before {\n  content: \"\\f2ea\"; }\n\n.fa-table-columns::before {\n  content: \"\\f0db\"; }\n\n.fa-columns::before {\n  content: \"\\f0db\"; }\n\n.fa-lemon::before {\n  content: \"\\f094\"; }\n\n.fa-head-side-mask::before {\n  content: \"\\e063\"; }\n\n.fa-handshake::before {\n  content: \"\\f2b5\"; }\n\n.fa-gem::before {\n  content: \"\\f3a5\"; }\n\n.fa-dolly::before {\n  content: \"\\f472\"; }\n\n.fa-dolly-box::before {\n  content: \"\\f472\"; }\n\n.fa-smoking::before {\n  content: \"\\f48d\"; }\n\n.fa-minimize::before {\n  content: \"\\f78c\"; }\n\n.fa-compress-arrows-alt::before {\n  content: \"\\f78c\"; }\n\n.fa-monument::before {\n  content: \"\\f5a6\"; }\n\n.fa-snowplow::before {\n  content: \"\\f7d2\"; }\n\n.fa-angles-right::before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-right::before {\n  content: \"\\f101\"; }\n\n.fa-cannabis::before {\n  content: \"\\f55f\"; }\n\n.fa-circle-play::before {\n  content: \"\\f144\"; }\n\n.fa-play-circle::before {\n  content: \"\\f144\"; }\n\n.fa-tablets::before {\n  content: \"\\f490\"; }\n\n.fa-ethernet::before {\n  content: \"\\f796\"; }\n\n.fa-euro-sign::before {\n  content: \"\\f153\"; }\n\n.fa-eur::before {\n  content: \"\\f153\"; }\n\n.fa-euro::before {\n  content: \"\\f153\"; }\n\n.fa-chair::before {\n  content: \"\\f6c0\"; }\n\n.fa-circle-check::before {\n  content: \"\\f058\"; }\n\n.fa-check-circle::before {\n  content: \"\\f058\"; }\n\n.fa-circle-stop::before {\n  content: \"\\f28d\"; }\n\n.fa-stop-circle::before {\n  content: \"\\f28d\"; }\n\n.fa-compass-drafting::before {\n  content: \"\\f568\"; }\n\n.fa-drafting-compass::before {\n  content: \"\\f568\"; }\n\n.fa-plate-wheat::before {\n  content: \"\\e55a\"; }\n\n.fa-icicles::before {\n  content: \"\\f7ad\"; }\n\n.fa-person-shelter::before {\n  content: \"\\e54f\"; }\n\n.fa-neuter::before {\n  content: \"\\f22c\"; }\n\n.fa-id-badge::before {\n  content: \"\\f2c1\"; }\n\n.fa-marker::before {\n  content: \"\\f5a1\"; }\n\n.fa-face-laugh-beam::before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-beam::before {\n  content: \"\\f59a\"; }\n\n.fa-helicopter-symbol::before {\n  content: \"\\e502\"; }\n\n.fa-universal-access::before {\n  content: \"\\f29a\"; }\n\n.fa-circle-chevron-up::before {\n  content: \"\\f139\"; }\n\n.fa-chevron-circle-up::before {\n  content: \"\\f139\"; }\n\n.fa-lari-sign::before {\n  content: \"\\e1c8\"; }\n\n.fa-volcano::before {\n  content: \"\\f770\"; }\n\n.fa-person-walking-dashed-line-arrow-right::before {\n  content: \"\\e553\"; }\n\n.fa-sterling-sign::before {\n  content: \"\\f154\"; }\n\n.fa-gbp::before {\n  content: \"\\f154\"; }\n\n.fa-pound-sign::before {\n  content: \"\\f154\"; }\n\n.fa-viruses::before {\n  content: \"\\e076\"; }\n\n.fa-square-person-confined::before {\n  content: \"\\e577\"; }\n\n.fa-user-tie::before {\n  content: \"\\f508\"; }\n\n.fa-arrow-down-long::before {\n  content: \"\\f175\"; }\n\n.fa-long-arrow-down::before {\n  content: \"\\f175\"; }\n\n.fa-tent-arrow-down-to-line::before {\n  content: \"\\e57e\"; }\n\n.fa-certificate::before {\n  content: \"\\f0a3\"; }\n\n.fa-reply-all::before {\n  content: \"\\f122\"; }\n\n.fa-mail-reply-all::before {\n  content: \"\\f122\"; }\n\n.fa-suitcase::before {\n  content: \"\\f0f2\"; }\n\n.fa-person-skating::before {\n  content: \"\\f7c5\"; }\n\n.fa-skating::before {\n  content: \"\\f7c5\"; }\n\n.fa-filter-circle-dollar::before {\n  content: \"\\f662\"; }\n\n.fa-funnel-dollar::before {\n  content: \"\\f662\"; }\n\n.fa-camera-retro::before {\n  content: \"\\f083\"; }\n\n.fa-circle-arrow-down::before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-down::before {\n  content: \"\\f0ab\"; }\n\n.fa-file-import::before {\n  content: \"\\f56f\"; }\n\n.fa-arrow-right-to-file::before {\n  content: \"\\f56f\"; }\n\n.fa-square-arrow-up-right::before {\n  content: \"\\f14c\"; }\n\n.fa-external-link-square::before {\n  content: \"\\f14c\"; }\n\n.fa-box-open::before {\n  content: \"\\f49e\"; }\n\n.fa-scroll::before {\n  content: \"\\f70e\"; }\n\n.fa-spa::before {\n  content: \"\\f5bb\"; }\n\n.fa-location-pin-lock::before {\n  content: \"\\e51f\"; }\n\n.fa-pause::before {\n  content: \"\\f04c\"; }\n\n.fa-hill-avalanche::before {\n  content: \"\\e507\"; }\n\n.fa-temperature-empty::before {\n  content: \"\\f2cb\"; }\n\n.fa-temperature-0::before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-0::before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-empty::before {\n  content: \"\\f2cb\"; }\n\n.fa-bomb::before {\n  content: \"\\f1e2\"; }\n\n.fa-registered::before {\n  content: \"\\f25d\"; }\n\n.fa-address-card::before {\n  content: \"\\f2bb\"; }\n\n.fa-contact-card::before {\n  content: \"\\f2bb\"; }\n\n.fa-vcard::before {\n  content: \"\\f2bb\"; }\n\n.fa-scale-unbalanced-flip::before {\n  content: \"\\f516\"; }\n\n.fa-balance-scale-right::before {\n  content: \"\\f516\"; }\n\n.fa-subscript::before {\n  content: \"\\f12c\"; }\n\n.fa-diamond-turn-right::before {\n  content: \"\\f5eb\"; }\n\n.fa-directions::before {\n  content: \"\\f5eb\"; }\n\n.fa-burst::before {\n  content: \"\\e4dc\"; }\n\n.fa-house-laptop::before {\n  content: \"\\e066\"; }\n\n.fa-laptop-house::before {\n  content: \"\\e066\"; }\n\n.fa-face-tired::before {\n  content: \"\\f5c8\"; }\n\n.fa-tired::before {\n  content: \"\\f5c8\"; }\n\n.fa-money-bills::before {\n  content: \"\\e1f3\"; }\n\n.fa-smog::before {\n  content: \"\\f75f\"; }\n\n.fa-crutch::before {\n  content: \"\\f7f7\"; }\n\n.fa-cloud-arrow-up::before {\n  content: \"\\f0ee\"; }\n\n.fa-cloud-upload::before {\n  content: \"\\f0ee\"; }\n\n.fa-cloud-upload-alt::before {\n  content: \"\\f0ee\"; }\n\n.fa-palette::before {\n  content: \"\\f53f\"; }\n\n.fa-arrows-turn-right::before {\n  content: \"\\e4c0\"; }\n\n.fa-vest::before {\n  content: \"\\e085\"; }\n\n.fa-ferry::before {\n  content: \"\\e4ea\"; }\n\n.fa-arrows-down-to-people::before {\n  content: \"\\e4b9\"; }\n\n.fa-seedling::before {\n  content: \"\\f4d8\"; }\n\n.fa-sprout::before {\n  content: \"\\f4d8\"; }\n\n.fa-left-right::before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-h::before {\n  content: \"\\f337\"; }\n\n.fa-boxes-packing::before {\n  content: \"\\e4c7\"; }\n\n.fa-circle-arrow-left::before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-left::before {\n  content: \"\\f0a8\"; }\n\n.fa-group-arrows-rotate::before {\n  content: \"\\e4f6\"; }\n\n.fa-bowl-food::before {\n  content: \"\\e4c6\"; }\n\n.fa-candy-cane::before {\n  content: \"\\f786\"; }\n\n.fa-arrow-down-wide-short::before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-asc::before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-down::before {\n  content: \"\\f160\"; }\n\n.fa-cloud-bolt::before {\n  content: \"\\f76c\"; }\n\n.fa-thunderstorm::before {\n  content: \"\\f76c\"; }\n\n.fa-text-slash::before {\n  content: \"\\f87d\"; }\n\n.fa-remove-format::before {\n  content: \"\\f87d\"; }\n\n.fa-face-smile-wink::before {\n  content: \"\\f4da\"; }\n\n.fa-smile-wink::before {\n  content: \"\\f4da\"; }\n\n.fa-file-word::before {\n  content: \"\\f1c2\"; }\n\n.fa-file-powerpoint::before {\n  content: \"\\f1c4\"; }\n\n.fa-arrows-left-right::before {\n  content: \"\\f07e\"; }\n\n.fa-arrows-h::before {\n  content: \"\\f07e\"; }\n\n.fa-house-lock::before {\n  content: \"\\e510\"; }\n\n.fa-cloud-arrow-down::before {\n  content: \"\\f0ed\"; }\n\n.fa-cloud-download::before {\n  content: \"\\f0ed\"; }\n\n.fa-cloud-download-alt::before {\n  content: \"\\f0ed\"; }\n\n.fa-children::before {\n  content: \"\\e4e1\"; }\n\n.fa-chalkboard::before {\n  content: \"\\f51b\"; }\n\n.fa-blackboard::before {\n  content: \"\\f51b\"; }\n\n.fa-user-large-slash::before {\n  content: \"\\f4fa\"; }\n\n.fa-user-alt-slash::before {\n  content: \"\\f4fa\"; }\n\n.fa-envelope-open::before {\n  content: \"\\f2b6\"; }\n\n.fa-handshake-simple-slash::before {\n  content: \"\\e05f\"; }\n\n.fa-handshake-alt-slash::before {\n  content: \"\\e05f\"; }\n\n.fa-mattress-pillow::before {\n  content: \"\\e525\"; }\n\n.fa-guarani-sign::before {\n  content: \"\\e19a\"; }\n\n.fa-arrows-rotate::before {\n  content: \"\\f021\"; }\n\n.fa-refresh::before {\n  content: \"\\f021\"; }\n\n.fa-sync::before {\n  content: \"\\f021\"; }\n\n.fa-fire-extinguisher::before {\n  content: \"\\f134\"; }\n\n.fa-cruzeiro-sign::before {\n  content: \"\\e152\"; }\n\n.fa-greater-than-equal::before {\n  content: \"\\f532\"; }\n\n.fa-shield-halved::before {\n  content: \"\\f3ed\"; }\n\n.fa-shield-alt::before {\n  content: \"\\f3ed\"; }\n\n.fa-book-atlas::before {\n  content: \"\\f558\"; }\n\n.fa-atlas::before {\n  content: \"\\f558\"; }\n\n.fa-virus::before {\n  content: \"\\e074\"; }\n\n.fa-envelope-circle-check::before {\n  content: \"\\e4e8\"; }\n\n.fa-layer-group::before {\n  content: \"\\f5fd\"; }\n\n.fa-arrows-to-dot::before {\n  content: \"\\e4be\"; }\n\n.fa-archway::before {\n  content: \"\\f557\"; }\n\n.fa-heart-circle-check::before {\n  content: \"\\e4fd\"; }\n\n.fa-house-chimney-crack::before {\n  content: \"\\f6f1\"; }\n\n.fa-house-damage::before {\n  content: \"\\f6f1\"; }\n\n.fa-file-zipper::before {\n  content: \"\\f1c6\"; }\n\n.fa-file-archive::before {\n  content: \"\\f1c6\"; }\n\n.fa-square::before {\n  content: \"\\f0c8\"; }\n\n.fa-martini-glass-empty::before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini::before {\n  content: \"\\f000\"; }\n\n.fa-couch::before {\n  content: \"\\f4b8\"; }\n\n.fa-cedi-sign::before {\n  content: \"\\e0df\"; }\n\n.fa-italic::before {\n  content: \"\\f033\"; }\n\n.fa-church::before {\n  content: \"\\f51d\"; }\n\n.fa-comments-dollar::before {\n  content: \"\\f653\"; }\n\n.fa-democrat::before {\n  content: \"\\f747\"; }\n\n.fa-z::before {\n  content: \"\\5a\"; }\n\n.fa-person-skiing::before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing::before {\n  content: \"\\f7c9\"; }\n\n.fa-road-lock::before {\n  content: \"\\e567\"; }\n\n.fa-a::before {\n  content: \"\\41\"; }\n\n.fa-temperature-arrow-down::before {\n  content: \"\\e03f\"; }\n\n.fa-temperature-down::before {\n  content: \"\\e03f\"; }\n\n.fa-feather-pointed::before {\n  content: \"\\f56b\"; }\n\n.fa-feather-alt::before {\n  content: \"\\f56b\"; }\n\n.fa-p::before {\n  content: \"\\50\"; }\n\n.fa-snowflake::before {\n  content: \"\\f2dc\"; }\n\n.fa-newspaper::before {\n  content: \"\\f1ea\"; }\n\n.fa-rectangle-ad::before {\n  content: \"\\f641\"; }\n\n.fa-ad::before {\n  content: \"\\f641\"; }\n\n.fa-circle-arrow-right::before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-right::before {\n  content: \"\\f0a9\"; }\n\n.fa-filter-circle-xmark::before {\n  content: \"\\e17b\"; }\n\n.fa-locust::before {\n  content: \"\\e520\"; }\n\n.fa-sort::before {\n  content: \"\\f0dc\"; }\n\n.fa-unsorted::before {\n  content: \"\\f0dc\"; }\n\n.fa-list-ol::before {\n  content: \"\\f0cb\"; }\n\n.fa-list-1-2::before {\n  content: \"\\f0cb\"; }\n\n.fa-list-numeric::before {\n  content: \"\\f0cb\"; }\n\n.fa-person-dress-burst::before {\n  content: \"\\e544\"; }\n\n.fa-money-check-dollar::before {\n  content: \"\\f53d\"; }\n\n.fa-money-check-alt::before {\n  content: \"\\f53d\"; }\n\n.fa-vector-square::before {\n  content: \"\\f5cb\"; }\n\n.fa-bread-slice::before {\n  content: \"\\f7ec\"; }\n\n.fa-language::before {\n  content: \"\\f1ab\"; }\n\n.fa-face-kiss-wink-heart::before {\n  content: \"\\f598\"; }\n\n.fa-kiss-wink-heart::before {\n  content: \"\\f598\"; }\n\n.fa-filter::before {\n  content: \"\\f0b0\"; }\n\n.fa-question::before {\n  content: \"\\3f\"; }\n\n.fa-file-signature::before {\n  content: \"\\f573\"; }\n\n.fa-up-down-left-right::before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt::before {\n  content: \"\\f0b2\"; }\n\n.fa-house-chimney-user::before {\n  content: \"\\e065\"; }\n\n.fa-hand-holding-heart::before {\n  content: \"\\f4be\"; }\n\n.fa-puzzle-piece::before {\n  content: \"\\f12e\"; }\n\n.fa-money-check::before {\n  content: \"\\f53c\"; }\n\n.fa-star-half-stroke::before {\n  content: \"\\f5c0\"; }\n\n.fa-star-half-alt::before {\n  content: \"\\f5c0\"; }\n\n.fa-code::before {\n  content: \"\\f121\"; }\n\n.fa-whiskey-glass::before {\n  content: \"\\f7a0\"; }\n\n.fa-glass-whiskey::before {\n  content: \"\\f7a0\"; }\n\n.fa-building-circle-exclamation::before {\n  content: \"\\e4d3\"; }\n\n.fa-magnifying-glass-chart::before {\n  content: \"\\e522\"; }\n\n.fa-arrow-up-right-from-square::before {\n  content: \"\\f08e\"; }\n\n.fa-external-link::before {\n  content: \"\\f08e\"; }\n\n.fa-cubes-stacked::before {\n  content: \"\\e4e6\"; }\n\n.fa-won-sign::before {\n  content: \"\\f159\"; }\n\n.fa-krw::before {\n  content: \"\\f159\"; }\n\n.fa-won::before {\n  content: \"\\f159\"; }\n\n.fa-virus-covid::before {\n  content: \"\\e4a8\"; }\n\n.fa-austral-sign::before {\n  content: \"\\e0a9\"; }\n\n.fa-f::before {\n  content: \"\\46\"; }\n\n.fa-leaf::before {\n  content: \"\\f06c\"; }\n\n.fa-road::before {\n  content: \"\\f018\"; }\n\n.fa-taxi::before {\n  content: \"\\f1ba\"; }\n\n.fa-cab::before {\n  content: \"\\f1ba\"; }\n\n.fa-person-circle-plus::before {\n  content: \"\\e541\"; }\n\n.fa-chart-pie::before {\n  content: \"\\f200\"; }\n\n.fa-pie-chart::before {\n  content: \"\\f200\"; }\n\n.fa-bolt-lightning::before {\n  content: \"\\e0b7\"; }\n\n.fa-sack-xmark::before {\n  content: \"\\e56a\"; }\n\n.fa-file-excel::before {\n  content: \"\\f1c3\"; }\n\n.fa-file-contract::before {\n  content: \"\\f56c\"; }\n\n.fa-fish-fins::before {\n  content: \"\\e4f2\"; }\n\n.fa-building-flag::before {\n  content: \"\\e4d5\"; }\n\n.fa-face-grin-beam::before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam::before {\n  content: \"\\f582\"; }\n\n.fa-object-ungroup::before {\n  content: \"\\f248\"; }\n\n.fa-poop::before {\n  content: \"\\f619\"; }\n\n.fa-location-pin::before {\n  content: \"\\f041\"; }\n\n.fa-map-marker::before {\n  content: \"\\f041\"; }\n\n.fa-kaaba::before {\n  content: \"\\f66b\"; }\n\n.fa-toilet-paper::before {\n  content: \"\\f71e\"; }\n\n.fa-helmet-safety::before {\n  content: \"\\f807\"; }\n\n.fa-hard-hat::before {\n  content: \"\\f807\"; }\n\n.fa-hat-hard::before {\n  content: \"\\f807\"; }\n\n.fa-eject::before {\n  content: \"\\f052\"; }\n\n.fa-circle-right::before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-right::before {\n  content: \"\\f35a\"; }\n\n.fa-plane-circle-check::before {\n  content: \"\\e555\"; }\n\n.fa-face-rolling-eyes::before {\n  content: \"\\f5a5\"; }\n\n.fa-meh-rolling-eyes::before {\n  content: \"\\f5a5\"; }\n\n.fa-object-group::before {\n  content: \"\\f247\"; }\n\n.fa-chart-line::before {\n  content: \"\\f201\"; }\n\n.fa-line-chart::before {\n  content: \"\\f201\"; }\n\n.fa-mask-ventilator::before {\n  content: \"\\e524\"; }\n\n.fa-arrow-right::before {\n  content: \"\\f061\"; }\n\n.fa-signs-post::before {\n  content: \"\\f277\"; }\n\n.fa-map-signs::before {\n  content: \"\\f277\"; }\n\n.fa-cash-register::before {\n  content: \"\\f788\"; }\n\n.fa-person-circle-question::before {\n  content: \"\\e542\"; }\n\n.fa-h::before {\n  content: \"\\48\"; }\n\n.fa-tarp::before {\n  content: \"\\e57b\"; }\n\n.fa-screwdriver-wrench::before {\n  content: \"\\f7d9\"; }\n\n.fa-tools::before {\n  content: \"\\f7d9\"; }\n\n.fa-arrows-to-eye::before {\n  content: \"\\e4bf\"; }\n\n.fa-plug-circle-bolt::before {\n  content: \"\\e55b\"; }\n\n.fa-heart::before {\n  content: \"\\f004\"; }\n\n.fa-mars-and-venus::before {\n  content: \"\\f224\"; }\n\n.fa-house-user::before {\n  content: \"\\e1b0\"; }\n\n.fa-home-user::before {\n  content: \"\\e1b0\"; }\n\n.fa-dumpster-fire::before {\n  content: \"\\f794\"; }\n\n.fa-house-crack::before {\n  content: \"\\e3b1\"; }\n\n.fa-martini-glass-citrus::before {\n  content: \"\\f561\"; }\n\n.fa-cocktail::before {\n  content: \"\\f561\"; }\n\n.fa-face-surprise::before {\n  content: \"\\f5c2\"; }\n\n.fa-surprise::before {\n  content: \"\\f5c2\"; }\n\n.fa-bottle-water::before {\n  content: \"\\e4c5\"; }\n\n.fa-circle-pause::before {\n  content: \"\\f28b\"; }\n\n.fa-pause-circle::before {\n  content: \"\\f28b\"; }\n\n.fa-toilet-paper-slash::before {\n  content: \"\\e072\"; }\n\n.fa-apple-whole::before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-alt::before {\n  content: \"\\f5d1\"; }\n\n.fa-kitchen-set::before {\n  content: \"\\e51a\"; }\n\n.fa-r::before {\n  content: \"\\52\"; }\n\n.fa-temperature-quarter::before {\n  content: \"\\f2ca\"; }\n\n.fa-temperature-1::before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-1::before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-quarter::before {\n  content: \"\\f2ca\"; }\n\n.fa-cube::before {\n  content: \"\\f1b2\"; }\n\n.fa-bitcoin-sign::before {\n  content: \"\\e0b4\"; }\n\n.fa-shield-dog::before {\n  content: \"\\e573\"; }\n\n.fa-solar-panel::before {\n  content: \"\\f5ba\"; }\n\n.fa-lock-open::before {\n  content: \"\\f3c1\"; }\n\n.fa-elevator::before {\n  content: \"\\e16d\"; }\n\n.fa-money-bill-transfer::before {\n  content: \"\\e528\"; }\n\n.fa-money-bill-trend-up::before {\n  content: \"\\e529\"; }\n\n.fa-house-flood-water-circle-arrow-right::before {\n  content: \"\\e50f\"; }\n\n.fa-square-poll-horizontal::before {\n  content: \"\\f682\"; }\n\n.fa-poll-h::before {\n  content: \"\\f682\"; }\n\n.fa-circle::before {\n  content: \"\\f111\"; }\n\n.fa-backward-fast::before {\n  content: \"\\f049\"; }\n\n.fa-fast-backward::before {\n  content: \"\\f049\"; }\n\n.fa-recycle::before {\n  content: \"\\f1b8\"; }\n\n.fa-user-astronaut::before {\n  content: \"\\f4fb\"; }\n\n.fa-plane-slash::before {\n  content: \"\\e069\"; }\n\n.fa-trademark::before {\n  content: \"\\f25c\"; }\n\n.fa-basketball::before {\n  content: \"\\f434\"; }\n\n.fa-basketball-ball::before {\n  content: \"\\f434\"; }\n\n.fa-satellite-dish::before {\n  content: \"\\f7c0\"; }\n\n.fa-circle-up::before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-alt-circle-up::before {\n  content: \"\\f35b\"; }\n\n.fa-mobile-screen-button::before {\n  content: \"\\f3cd\"; }\n\n.fa-mobile-alt::before {\n  content: \"\\f3cd\"; }\n\n.fa-volume-high::before {\n  content: \"\\f028\"; }\n\n.fa-volume-up::before {\n  content: \"\\f028\"; }\n\n.fa-users-rays::before {\n  content: \"\\e593\"; }\n\n.fa-wallet::before {\n  content: \"\\f555\"; }\n\n.fa-clipboard-check::before {\n  content: \"\\f46c\"; }\n\n.fa-file-audio::before {\n  content: \"\\f1c7\"; }\n\n.fa-burger::before {\n  content: \"\\f805\"; }\n\n.fa-hamburger::before {\n  content: \"\\f805\"; }\n\n.fa-wrench::before {\n  content: \"\\f0ad\"; }\n\n.fa-bugs::before {\n  content: \"\\e4d0\"; }\n\n.fa-rupee-sign::before {\n  content: \"\\f156\"; }\n\n.fa-rupee::before {\n  content: \"\\f156\"; }\n\n.fa-file-image::before {\n  content: \"\\f1c5\"; }\n\n.fa-circle-question::before {\n  content: \"\\f059\"; }\n\n.fa-question-circle::before {\n  content: \"\\f059\"; }\n\n.fa-plane-departure::before {\n  content: \"\\f5b0\"; }\n\n.fa-handshake-slash::before {\n  content: \"\\e060\"; }\n\n.fa-book-bookmark::before {\n  content: \"\\e0bb\"; }\n\n.fa-code-branch::before {\n  content: \"\\f126\"; }\n\n.fa-hat-cowboy::before {\n  content: \"\\f8c0\"; }\n\n.fa-bridge::before {\n  content: \"\\e4c8\"; }\n\n.fa-phone-flip::before {\n  content: \"\\f879\"; }\n\n.fa-phone-alt::before {\n  content: \"\\f879\"; }\n\n.fa-truck-front::before {\n  content: \"\\e2b7\"; }\n\n.fa-cat::before {\n  content: \"\\f6be\"; }\n\n.fa-anchor-circle-exclamation::before {\n  content: \"\\e4ab\"; }\n\n.fa-truck-field::before {\n  content: \"\\e58d\"; }\n\n.fa-route::before {\n  content: \"\\f4d7\"; }\n\n.fa-clipboard-question::before {\n  content: \"\\e4e3\"; }\n\n.fa-panorama::before {\n  content: \"\\e209\"; }\n\n.fa-comment-medical::before {\n  content: \"\\f7f5\"; }\n\n.fa-teeth-open::before {\n  content: \"\\f62f\"; }\n\n.fa-file-circle-minus::before {\n  content: \"\\e4ed\"; }\n\n.fa-tags::before {\n  content: \"\\f02c\"; }\n\n.fa-wine-glass::before {\n  content: \"\\f4e3\"; }\n\n.fa-forward-fast::before {\n  content: \"\\f050\"; }\n\n.fa-fast-forward::before {\n  content: \"\\f050\"; }\n\n.fa-face-meh-blank::before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-blank::before {\n  content: \"\\f5a4\"; }\n\n.fa-square-parking::before {\n  content: \"\\f540\"; }\n\n.fa-parking::before {\n  content: \"\\f540\"; }\n\n.fa-house-signal::before {\n  content: \"\\e012\"; }\n\n.fa-bars-progress::before {\n  content: \"\\f828\"; }\n\n.fa-tasks-alt::before {\n  content: \"\\f828\"; }\n\n.fa-faucet-drip::before {\n  content: \"\\e006\"; }\n\n.fa-cart-flatbed::before {\n  content: \"\\f474\"; }\n\n.fa-dolly-flatbed::before {\n  content: \"\\f474\"; }\n\n.fa-ban-smoking::before {\n  content: \"\\f54d\"; }\n\n.fa-smoking-ban::before {\n  content: \"\\f54d\"; }\n\n.fa-terminal::before {\n  content: \"\\f120\"; }\n\n.fa-mobile-button::before {\n  content: \"\\f10b\"; }\n\n.fa-house-medical-flag::before {\n  content: \"\\e514\"; }\n\n.fa-basket-shopping::before {\n  content: \"\\f291\"; }\n\n.fa-shopping-basket::before {\n  content: \"\\f291\"; }\n\n.fa-tape::before {\n  content: \"\\f4db\"; }\n\n.fa-bus-simple::before {\n  content: \"\\f55e\"; }\n\n.fa-bus-alt::before {\n  content: \"\\f55e\"; }\n\n.fa-eye::before {\n  content: \"\\f06e\"; }\n\n.fa-face-sad-cry::before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-cry::before {\n  content: \"\\f5b3\"; }\n\n.fa-audio-description::before {\n  content: \"\\f29e\"; }\n\n.fa-person-military-to-person::before {\n  content: \"\\e54c\"; }\n\n.fa-file-shield::before {\n  content: \"\\e4f0\"; }\n\n.fa-user-slash::before {\n  content: \"\\f506\"; }\n\n.fa-pen::before {\n  content: \"\\f304\"; }\n\n.fa-tower-observation::before {\n  content: \"\\e586\"; }\n\n.fa-file-code::before {\n  content: \"\\f1c9\"; }\n\n.fa-signal::before {\n  content: \"\\f012\"; }\n\n.fa-signal-5::before {\n  content: \"\\f012\"; }\n\n.fa-signal-perfect::before {\n  content: \"\\f012\"; }\n\n.fa-bus::before {\n  content: \"\\f207\"; }\n\n.fa-heart-circle-xmark::before {\n  content: \"\\e501\"; }\n\n.fa-house-chimney::before {\n  content: \"\\e3af\"; }\n\n.fa-home-lg::before {\n  content: \"\\e3af\"; }\n\n.fa-window-maximize::before {\n  content: \"\\f2d0\"; }\n\n.fa-face-frown::before {\n  content: \"\\f119\"; }\n\n.fa-frown::before {\n  content: \"\\f119\"; }\n\n.fa-prescription::before {\n  content: \"\\f5b1\"; }\n\n.fa-shop::before {\n  content: \"\\f54f\"; }\n\n.fa-store-alt::before {\n  content: \"\\f54f\"; }\n\n.fa-floppy-disk::before {\n  content: \"\\f0c7\"; }\n\n.fa-save::before {\n  content: \"\\f0c7\"; }\n\n.fa-vihara::before {\n  content: \"\\f6a7\"; }\n\n.fa-scale-unbalanced::before {\n  content: \"\\f515\"; }\n\n.fa-balance-scale-left::before {\n  content: \"\\f515\"; }\n\n.fa-sort-up::before {\n  content: \"\\f0de\"; }\n\n.fa-sort-asc::before {\n  content: \"\\f0de\"; }\n\n.fa-comment-dots::before {\n  content: \"\\f4ad\"; }\n\n.fa-commenting::before {\n  content: \"\\f4ad\"; }\n\n.fa-plant-wilt::before {\n  content: \"\\e5aa\"; }\n\n.fa-diamond::before {\n  content: \"\\f219\"; }\n\n.fa-face-grin-squint::before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint::before {\n  content: \"\\f585\"; }\n\n.fa-hand-holding-dollar::before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-holding-usd::before {\n  content: \"\\f4c0\"; }\n\n.fa-bacterium::before {\n  content: \"\\e05a\"; }\n\n.fa-hand-pointer::before {\n  content: \"\\f25a\"; }\n\n.fa-drum-steelpan::before {\n  content: \"\\f56a\"; }\n\n.fa-hand-scissors::before {\n  content: \"\\f257\"; }\n\n.fa-hands-praying::before {\n  content: \"\\f684\"; }\n\n.fa-praying-hands::before {\n  content: \"\\f684\"; }\n\n.fa-arrow-rotate-right::before {\n  content: \"\\f01e\"; }\n\n.fa-arrow-right-rotate::before {\n  content: \"\\f01e\"; }\n\n.fa-arrow-rotate-forward::before {\n  content: \"\\f01e\"; }\n\n.fa-redo::before {\n  content: \"\\f01e\"; }\n\n.fa-biohazard::before {\n  content: \"\\f780\"; }\n\n.fa-location-crosshairs::before {\n  content: \"\\f601\"; }\n\n.fa-location::before {\n  content: \"\\f601\"; }\n\n.fa-mars-double::before {\n  content: \"\\f227\"; }\n\n.fa-child-dress::before {\n  content: \"\\e59c\"; }\n\n.fa-users-between-lines::before {\n  content: \"\\e591\"; }\n\n.fa-lungs-virus::before {\n  content: \"\\e067\"; }\n\n.fa-face-grin-tears::before {\n  content: \"\\f588\"; }\n\n.fa-grin-tears::before {\n  content: \"\\f588\"; }\n\n.fa-phone::before {\n  content: \"\\f095\"; }\n\n.fa-calendar-xmark::before {\n  content: \"\\f273\"; }\n\n.fa-calendar-times::before {\n  content: \"\\f273\"; }\n\n.fa-child-reaching::before {\n  content: \"\\e59d\"; }\n\n.fa-head-side-virus::before {\n  content: \"\\e064\"; }\n\n.fa-user-gear::before {\n  content: \"\\f4fe\"; }\n\n.fa-user-cog::before {\n  content: \"\\f4fe\"; }\n\n.fa-arrow-up-1-9::before {\n  content: \"\\f163\"; }\n\n.fa-sort-numeric-up::before {\n  content: \"\\f163\"; }\n\n.fa-door-closed::before {\n  content: \"\\f52a\"; }\n\n.fa-shield-virus::before {\n  content: \"\\e06c\"; }\n\n.fa-dice-six::before {\n  content: \"\\f526\"; }\n\n.fa-mosquito-net::before {\n  content: \"\\e52c\"; }\n\n.fa-bridge-water::before {\n  content: \"\\e4ce\"; }\n\n.fa-person-booth::before {\n  content: \"\\f756\"; }\n\n.fa-text-width::before {\n  content: \"\\f035\"; }\n\n.fa-hat-wizard::before {\n  content: \"\\f6e8\"; }\n\n.fa-pen-fancy::before {\n  content: \"\\f5ac\"; }\n\n.fa-person-digging::before {\n  content: \"\\f85e\"; }\n\n.fa-digging::before {\n  content: \"\\f85e\"; }\n\n.fa-trash::before {\n  content: \"\\f1f8\"; }\n\n.fa-gauge-simple::before {\n  content: \"\\f629\"; }\n\n.fa-gauge-simple-med::before {\n  content: \"\\f629\"; }\n\n.fa-tachometer-average::before {\n  content: \"\\f629\"; }\n\n.fa-book-medical::before {\n  content: \"\\f7e6\"; }\n\n.fa-poo::before {\n  content: \"\\f2fe\"; }\n\n.fa-quote-right::before {\n  content: \"\\f10e\"; }\n\n.fa-quote-right-alt::before {\n  content: \"\\f10e\"; }\n\n.fa-shirt::before {\n  content: \"\\f553\"; }\n\n.fa-t-shirt::before {\n  content: \"\\f553\"; }\n\n.fa-tshirt::before {\n  content: \"\\f553\"; }\n\n.fa-cubes::before {\n  content: \"\\f1b3\"; }\n\n.fa-divide::before {\n  content: \"\\f529\"; }\n\n.fa-tenge-sign::before {\n  content: \"\\f7d7\"; }\n\n.fa-tenge::before {\n  content: \"\\f7d7\"; }\n\n.fa-headphones::before {\n  content: \"\\f025\"; }\n\n.fa-hands-holding::before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-clapping::before {\n  content: \"\\e1a8\"; }\n\n.fa-republican::before {\n  content: \"\\f75e\"; }\n\n.fa-arrow-left::before {\n  content: \"\\f060\"; }\n\n.fa-person-circle-xmark::before {\n  content: \"\\e543\"; }\n\n.fa-ruler::before {\n  content: \"\\f545\"; }\n\n.fa-align-left::before {\n  content: \"\\f036\"; }\n\n.fa-dice-d6::before {\n  content: \"\\f6d1\"; }\n\n.fa-restroom::before {\n  content: \"\\f7bd\"; }\n\n.fa-j::before {\n  content: \"\\4a\"; }\n\n.fa-users-viewfinder::before {\n  content: \"\\e595\"; }\n\n.fa-file-video::before {\n  content: \"\\f1c8\"; }\n\n.fa-up-right-from-square::before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-alt::before {\n  content: \"\\f35d\"; }\n\n.fa-table-cells::before {\n  content: \"\\f00a\"; }\n\n.fa-th::before {\n  content: \"\\f00a\"; }\n\n.fa-file-pdf::before {\n  content: \"\\f1c1\"; }\n\n.fa-book-bible::before {\n  content: \"\\f647\"; }\n\n.fa-bible::before {\n  content: \"\\f647\"; }\n\n.fa-o::before {\n  content: \"\\4f\"; }\n\n.fa-suitcase-medical::before {\n  content: \"\\f0fa\"; }\n\n.fa-medkit::before {\n  content: \"\\f0fa\"; }\n\n.fa-user-secret::before {\n  content: \"\\f21b\"; }\n\n.fa-otter::before {\n  content: \"\\f700\"; }\n\n.fa-person-dress::before {\n  content: \"\\f182\"; }\n\n.fa-female::before {\n  content: \"\\f182\"; }\n\n.fa-comment-dollar::before {\n  content: \"\\f651\"; }\n\n.fa-business-time::before {\n  content: \"\\f64a\"; }\n\n.fa-briefcase-clock::before {\n  content: \"\\f64a\"; }\n\n.fa-table-cells-large::before {\n  content: \"\\f009\"; }\n\n.fa-th-large::before {\n  content: \"\\f009\"; }\n\n.fa-book-tanakh::before {\n  content: \"\\f827\"; }\n\n.fa-tanakh::before {\n  content: \"\\f827\"; }\n\n.fa-phone-volume::before {\n  content: \"\\f2a0\"; }\n\n.fa-volume-control-phone::before {\n  content: \"\\f2a0\"; }\n\n.fa-hat-cowboy-side::before {\n  content: \"\\f8c1\"; }\n\n.fa-clipboard-user::before {\n  content: \"\\f7f3\"; }\n\n.fa-child::before {\n  content: \"\\f1ae\"; }\n\n.fa-lira-sign::before {\n  content: \"\\f195\"; }\n\n.fa-satellite::before {\n  content: \"\\f7bf\"; }\n\n.fa-plane-lock::before {\n  content: \"\\e558\"; }\n\n.fa-tag::before {\n  content: \"\\f02b\"; }\n\n.fa-comment::before {\n  content: \"\\f075\"; }\n\n.fa-cake-candles::before {\n  content: \"\\f1fd\"; }\n\n.fa-birthday-cake::before {\n  content: \"\\f1fd\"; }\n\n.fa-cake::before {\n  content: \"\\f1fd\"; }\n\n.fa-envelope::before {\n  content: \"\\f0e0\"; }\n\n.fa-angles-up::before {\n  content: \"\\f102\"; }\n\n.fa-angle-double-up::before {\n  content: \"\\f102\"; }\n\n.fa-paperclip::before {\n  content: \"\\f0c6\"; }\n\n.fa-arrow-right-to-city::before {\n  content: \"\\e4b3\"; }\n\n.fa-ribbon::before {\n  content: \"\\f4d6\"; }\n\n.fa-lungs::before {\n  content: \"\\f604\"; }\n\n.fa-arrow-up-9-1::before {\n  content: \"\\f887\"; }\n\n.fa-sort-numeric-up-alt::before {\n  content: \"\\f887\"; }\n\n.fa-litecoin-sign::before {\n  content: \"\\e1d3\"; }\n\n.fa-border-none::before {\n  content: \"\\f850\"; }\n\n.fa-circle-nodes::before {\n  content: \"\\e4e2\"; }\n\n.fa-parachute-box::before {\n  content: \"\\f4cd\"; }\n\n.fa-indent::before {\n  content: \"\\f03c\"; }\n\n.fa-truck-field-un::before {\n  content: \"\\e58e\"; }\n\n.fa-hourglass::before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-empty::before {\n  content: \"\\f254\"; }\n\n.fa-mountain::before {\n  content: \"\\f6fc\"; }\n\n.fa-user-doctor::before {\n  content: \"\\f0f0\"; }\n\n.fa-user-md::before {\n  content: \"\\f0f0\"; }\n\n.fa-circle-info::before {\n  content: \"\\f05a\"; }\n\n.fa-info-circle::before {\n  content: \"\\f05a\"; }\n\n.fa-cloud-meatball::before {\n  content: \"\\f73b\"; }\n\n.fa-camera::before {\n  content: \"\\f030\"; }\n\n.fa-camera-alt::before {\n  content: \"\\f030\"; }\n\n.fa-square-virus::before {\n  content: \"\\e578\"; }\n\n.fa-meteor::before {\n  content: \"\\f753\"; }\n\n.fa-car-on::before {\n  content: \"\\e4dd\"; }\n\n.fa-sleigh::before {\n  content: \"\\f7cc\"; }\n\n.fa-arrow-down-1-9::before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-asc::before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-down::before {\n  content: \"\\f162\"; }\n\n.fa-hand-holding-droplet::before {\n  content: \"\\f4c1\"; }\n\n.fa-hand-holding-water::before {\n  content: \"\\f4c1\"; }\n\n.fa-water::before {\n  content: \"\\f773\"; }\n\n.fa-calendar-check::before {\n  content: \"\\f274\"; }\n\n.fa-braille::before {\n  content: \"\\f2a1\"; }\n\n.fa-prescription-bottle-medical::before {\n  content: \"\\f486\"; }\n\n.fa-prescription-bottle-alt::before {\n  content: \"\\f486\"; }\n\n.fa-landmark::before {\n  content: \"\\f66f\"; }\n\n.fa-truck::before {\n  content: \"\\f0d1\"; }\n\n.fa-crosshairs::before {\n  content: \"\\f05b\"; }\n\n.fa-person-cane::before {\n  content: \"\\e53c\"; }\n\n.fa-tent::before {\n  content: \"\\e57d\"; }\n\n.fa-vest-patches::before {\n  content: \"\\e086\"; }\n\n.fa-check-double::before {\n  content: \"\\f560\"; }\n\n.fa-arrow-down-a-z::before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-asc::before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-down::before {\n  content: \"\\f15d\"; }\n\n.fa-money-bill-wheat::before {\n  content: \"\\e52a\"; }\n\n.fa-cookie::before {\n  content: \"\\f563\"; }\n\n.fa-arrow-rotate-left::before {\n  content: \"\\f0e2\"; }\n\n.fa-arrow-left-rotate::before {\n  content: \"\\f0e2\"; }\n\n.fa-arrow-rotate-back::before {\n  content: \"\\f0e2\"; }\n\n.fa-arrow-rotate-backward::before {\n  content: \"\\f0e2\"; }\n\n.fa-undo::before {\n  content: \"\\f0e2\"; }\n\n.fa-hard-drive::before {\n  content: \"\\f0a0\"; }\n\n.fa-hdd::before {\n  content: \"\\f0a0\"; }\n\n.fa-face-grin-squint-tears::before {\n  content: \"\\f586\"; }\n\n.fa-grin-squint-tears::before {\n  content: \"\\f586\"; }\n\n.fa-dumbbell::before {\n  content: \"\\f44b\"; }\n\n.fa-rectangle-list::before {\n  content: \"\\f022\"; }\n\n.fa-list-alt::before {\n  content: \"\\f022\"; }\n\n.fa-tarp-droplet::before {\n  content: \"\\e57c\"; }\n\n.fa-house-medical-circle-check::before {\n  content: \"\\e511\"; }\n\n.fa-person-skiing-nordic::before {\n  content: \"\\f7ca\"; }\n\n.fa-skiing-nordic::before {\n  content: \"\\f7ca\"; }\n\n.fa-calendar-plus::before {\n  content: \"\\f271\"; }\n\n.fa-plane-arrival::before {\n  content: \"\\f5af\"; }\n\n.fa-circle-left::before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-left::before {\n  content: \"\\f359\"; }\n\n.fa-train-subway::before {\n  content: \"\\f239\"; }\n\n.fa-subway::before {\n  content: \"\\f239\"; }\n\n.fa-chart-gantt::before {\n  content: \"\\e0e4\"; }\n\n.fa-indian-rupee-sign::before {\n  content: \"\\e1bc\"; }\n\n.fa-indian-rupee::before {\n  content: \"\\e1bc\"; }\n\n.fa-inr::before {\n  content: \"\\e1bc\"; }\n\n.fa-crop-simple::before {\n  content: \"\\f565\"; }\n\n.fa-crop-alt::before {\n  content: \"\\f565\"; }\n\n.fa-money-bill-1::before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-alt::before {\n  content: \"\\f3d1\"; }\n\n.fa-left-long::before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-left::before {\n  content: \"\\f30a\"; }\n\n.fa-dna::before {\n  content: \"\\f471\"; }\n\n.fa-virus-slash::before {\n  content: \"\\e075\"; }\n\n.fa-minus::before {\n  content: \"\\f068\"; }\n\n.fa-subtract::before {\n  content: \"\\f068\"; }\n\n.fa-chess::before {\n  content: \"\\f439\"; }\n\n.fa-arrow-left-long::before {\n  content: \"\\f177\"; }\n\n.fa-long-arrow-left::before {\n  content: \"\\f177\"; }\n\n.fa-plug-circle-check::before {\n  content: \"\\e55c\"; }\n\n.fa-street-view::before {\n  content: \"\\f21d\"; }\n\n.fa-franc-sign::before {\n  content: \"\\e18f\"; }\n\n.fa-volume-off::before {\n  content: \"\\f026\"; }\n\n.fa-hands-asl-interpreting::before {\n  content: \"\\f2a3\"; }\n\n.fa-american-sign-language-interpreting::before {\n  content: \"\\f2a3\"; }\n\n.fa-asl-interpreting::before {\n  content: \"\\f2a3\"; }\n\n.fa-hands-american-sign-language-interpreting::before {\n  content: \"\\f2a3\"; }\n\n.fa-gear::before {\n  content: \"\\f013\"; }\n\n.fa-cog::before {\n  content: \"\\f013\"; }\n\n.fa-droplet-slash::before {\n  content: \"\\f5c7\"; }\n\n.fa-tint-slash::before {\n  content: \"\\f5c7\"; }\n\n.fa-mosque::before {\n  content: \"\\f678\"; }\n\n.fa-mosquito::before {\n  content: \"\\e52b\"; }\n\n.fa-star-of-david::before {\n  content: \"\\f69a\"; }\n\n.fa-person-military-rifle::before {\n  content: \"\\e54b\"; }\n\n.fa-cart-shopping::before {\n  content: \"\\f07a\"; }\n\n.fa-shopping-cart::before {\n  content: \"\\f07a\"; }\n\n.fa-vials::before {\n  content: \"\\f493\"; }\n\n.fa-plug-circle-plus::before {\n  content: \"\\e55f\"; }\n\n.fa-place-of-worship::before {\n  content: \"\\f67f\"; }\n\n.fa-grip-vertical::before {\n  content: \"\\f58e\"; }\n\n.fa-arrow-turn-up::before {\n  content: \"\\f148\"; }\n\n.fa-level-up::before {\n  content: \"\\f148\"; }\n\n.fa-u::before {\n  content: \"\\55\"; }\n\n.fa-square-root-variable::before {\n  content: \"\\f698\"; }\n\n.fa-square-root-alt::before {\n  content: \"\\f698\"; }\n\n.fa-clock::before {\n  content: \"\\f017\"; }\n\n.fa-clock-four::before {\n  content: \"\\f017\"; }\n\n.fa-backward-step::before {\n  content: \"\\f048\"; }\n\n.fa-step-backward::before {\n  content: \"\\f048\"; }\n\n.fa-pallet::before {\n  content: \"\\f482\"; }\n\n.fa-faucet::before {\n  content: \"\\e005\"; }\n\n.fa-baseball-bat-ball::before {\n  content: \"\\f432\"; }\n\n.fa-s::before {\n  content: \"\\53\"; }\n\n.fa-timeline::before {\n  content: \"\\e29c\"; }\n\n.fa-keyboard::before {\n  content: \"\\f11c\"; }\n\n.fa-caret-down::before {\n  content: \"\\f0d7\"; }\n\n.fa-house-chimney-medical::before {\n  content: \"\\f7f2\"; }\n\n.fa-clinic-medical::before {\n  content: \"\\f7f2\"; }\n\n.fa-temperature-three-quarters::before {\n  content: \"\\f2c8\"; }\n\n.fa-temperature-3::before {\n  content: \"\\f2c8\"; }\n\n.fa-thermometer-3::before {\n  content: \"\\f2c8\"; }\n\n.fa-thermometer-three-quarters::before {\n  content: \"\\f2c8\"; }\n\n.fa-mobile-screen::before {\n  content: \"\\f3cf\"; }\n\n.fa-mobile-android-alt::before {\n  content: \"\\f3cf\"; }\n\n.fa-plane-up::before {\n  content: \"\\e22d\"; }\n\n.fa-piggy-bank::before {\n  content: \"\\f4d3\"; }\n\n.fa-battery-half::before {\n  content: \"\\f242\"; }\n\n.fa-battery-3::before {\n  content: \"\\f242\"; }\n\n.fa-mountain-city::before {\n  content: \"\\e52e\"; }\n\n.fa-coins::before {\n  content: \"\\f51e\"; }\n\n.fa-khanda::before {\n  content: \"\\f66d\"; }\n\n.fa-sliders::before {\n  content: \"\\f1de\"; }\n\n.fa-sliders-h::before {\n  content: \"\\f1de\"; }\n\n.fa-folder-tree::before {\n  content: \"\\f802\"; }\n\n.fa-network-wired::before {\n  content: \"\\f6ff\"; }\n\n.fa-map-pin::before {\n  content: \"\\f276\"; }\n\n.fa-hamsa::before {\n  content: \"\\f665\"; }\n\n.fa-cent-sign::before {\n  content: \"\\e3f5\"; }\n\n.fa-flask::before {\n  content: \"\\f0c3\"; }\n\n.fa-person-pregnant::before {\n  content: \"\\e31e\"; }\n\n.fa-wand-sparkles::before {\n  content: \"\\f72b\"; }\n\n.fa-ellipsis-vertical::before {\n  content: \"\\f142\"; }\n\n.fa-ellipsis-v::before {\n  content: \"\\f142\"; }\n\n.fa-ticket::before {\n  content: \"\\f145\"; }\n\n.fa-power-off::before {\n  content: \"\\f011\"; }\n\n.fa-right-long::before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-right::before {\n  content: \"\\f30b\"; }\n\n.fa-flag-usa::before {\n  content: \"\\f74d\"; }\n\n.fa-laptop-file::before {\n  content: \"\\e51d\"; }\n\n.fa-tty::before {\n  content: \"\\f1e4\"; }\n\n.fa-teletype::before {\n  content: \"\\f1e4\"; }\n\n.fa-diagram-next::before {\n  content: \"\\e476\"; }\n\n.fa-person-rifle::before {\n  content: \"\\e54e\"; }\n\n.fa-house-medical-circle-exclamation::before {\n  content: \"\\e512\"; }\n\n.fa-closed-captioning::before {\n  content: \"\\f20a\"; }\n\n.fa-person-hiking::before {\n  content: \"\\f6ec\"; }\n\n.fa-hiking::before {\n  content: \"\\f6ec\"; }\n\n.fa-venus-double::before {\n  content: \"\\f226\"; }\n\n.fa-images::before {\n  content: \"\\f302\"; }\n\n.fa-calculator::before {\n  content: \"\\f1ec\"; }\n\n.fa-people-pulling::before {\n  content: \"\\e535\"; }\n\n.fa-n::before {\n  content: \"\\4e\"; }\n\n.fa-cable-car::before {\n  content: \"\\f7da\"; }\n\n.fa-tram::before {\n  content: \"\\f7da\"; }\n\n.fa-cloud-rain::before {\n  content: \"\\f73d\"; }\n\n.fa-building-circle-xmark::before {\n  content: \"\\e4d4\"; }\n\n.fa-ship::before {\n  content: \"\\f21a\"; }\n\n.fa-arrows-down-to-line::before {\n  content: \"\\e4b8\"; }\n\n.fa-download::before {\n  content: \"\\f019\"; }\n\n.fa-face-grin::before {\n  content: \"\\f580\"; }\n\n.fa-grin::before {\n  content: \"\\f580\"; }\n\n.fa-delete-left::before {\n  content: \"\\f55a\"; }\n\n.fa-backspace::before {\n  content: \"\\f55a\"; }\n\n.fa-eye-dropper::before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-dropper-empty::before {\n  content: \"\\f1fb\"; }\n\n.fa-eyedropper::before {\n  content: \"\\f1fb\"; }\n\n.fa-file-circle-check::before {\n  content: \"\\e5a0\"; }\n\n.fa-forward::before {\n  content: \"\\f04e\"; }\n\n.fa-mobile::before {\n  content: \"\\f3ce\"; }\n\n.fa-mobile-android::before {\n  content: \"\\f3ce\"; }\n\n.fa-mobile-phone::before {\n  content: \"\\f3ce\"; }\n\n.fa-face-meh::before {\n  content: \"\\f11a\"; }\n\n.fa-meh::before {\n  content: \"\\f11a\"; }\n\n.fa-align-center::before {\n  content: \"\\f037\"; }\n\n.fa-book-skull::before {\n  content: \"\\f6b7\"; }\n\n.fa-book-dead::before {\n  content: \"\\f6b7\"; }\n\n.fa-id-card::before {\n  content: \"\\f2c2\"; }\n\n.fa-drivers-license::before {\n  content: \"\\f2c2\"; }\n\n.fa-outdent::before {\n  content: \"\\f03b\"; }\n\n.fa-dedent::before {\n  content: \"\\f03b\"; }\n\n.fa-heart-circle-exclamation::before {\n  content: \"\\e4fe\"; }\n\n.fa-house::before {\n  content: \"\\f015\"; }\n\n.fa-home::before {\n  content: \"\\f015\"; }\n\n.fa-home-alt::before {\n  content: \"\\f015\"; }\n\n.fa-home-lg-alt::before {\n  content: \"\\f015\"; }\n\n.fa-calendar-week::before {\n  content: \"\\f784\"; }\n\n.fa-laptop-medical::before {\n  content: \"\\f812\"; }\n\n.fa-b::before {\n  content: \"\\42\"; }\n\n.fa-file-medical::before {\n  content: \"\\f477\"; }\n\n.fa-dice-one::before {\n  content: \"\\f525\"; }\n\n.fa-kiwi-bird::before {\n  content: \"\\f535\"; }\n\n.fa-arrow-right-arrow-left::before {\n  content: \"\\f0ec\"; }\n\n.fa-exchange::before {\n  content: \"\\f0ec\"; }\n\n.fa-rotate-right::before {\n  content: \"\\f2f9\"; }\n\n.fa-redo-alt::before {\n  content: \"\\f2f9\"; }\n\n.fa-rotate-forward::before {\n  content: \"\\f2f9\"; }\n\n.fa-utensils::before {\n  content: \"\\f2e7\"; }\n\n.fa-cutlery::before {\n  content: \"\\f2e7\"; }\n\n.fa-arrow-up-wide-short::before {\n  content: \"\\f161\"; }\n\n.fa-sort-amount-up::before {\n  content: \"\\f161\"; }\n\n.fa-mill-sign::before {\n  content: \"\\e1ed\"; }\n\n.fa-bowl-rice::before {\n  content: \"\\e2eb\"; }\n\n.fa-skull::before {\n  content: \"\\f54c\"; }\n\n.fa-tower-broadcast::before {\n  content: \"\\f519\"; }\n\n.fa-broadcast-tower::before {\n  content: \"\\f519\"; }\n\n.fa-truck-pickup::before {\n  content: \"\\f63c\"; }\n\n.fa-up-long::before {\n  content: \"\\f30c\"; }\n\n.fa-long-arrow-alt-up::before {\n  content: \"\\f30c\"; }\n\n.fa-stop::before {\n  content: \"\\f04d\"; }\n\n.fa-code-merge::before {\n  content: \"\\f387\"; }\n\n.fa-upload::before {\n  content: \"\\f093\"; }\n\n.fa-hurricane::before {\n  content: \"\\f751\"; }\n\n.fa-mound::before {\n  content: \"\\e52d\"; }\n\n.fa-toilet-portable::before {\n  content: \"\\e583\"; }\n\n.fa-compact-disc::before {\n  content: \"\\f51f\"; }\n\n.fa-file-arrow-down::before {\n  content: \"\\f56d\"; }\n\n.fa-file-download::before {\n  content: \"\\f56d\"; }\n\n.fa-caravan::before {\n  content: \"\\f8ff\"; }\n\n.fa-shield-cat::before {\n  content: \"\\e572\"; }\n\n.fa-bolt::before {\n  content: \"\\f0e7\"; }\n\n.fa-zap::before {\n  content: \"\\f0e7\"; }\n\n.fa-glass-water::before {\n  content: \"\\e4f4\"; }\n\n.fa-oil-well::before {\n  content: \"\\e532\"; }\n\n.fa-vault::before {\n  content: \"\\e2c5\"; }\n\n.fa-mars::before {\n  content: \"\\f222\"; }\n\n.fa-toilet::before {\n  content: \"\\f7d8\"; }\n\n.fa-plane-circle-xmark::before {\n  content: \"\\e557\"; }\n\n.fa-yen-sign::before {\n  content: \"\\f157\"; }\n\n.fa-cny::before {\n  content: \"\\f157\"; }\n\n.fa-jpy::before {\n  content: \"\\f157\"; }\n\n.fa-rmb::before {\n  content: \"\\f157\"; }\n\n.fa-yen::before {\n  content: \"\\f157\"; }\n\n.fa-ruble-sign::before {\n  content: \"\\f158\"; }\n\n.fa-rouble::before {\n  content: \"\\f158\"; }\n\n.fa-rub::before {\n  content: \"\\f158\"; }\n\n.fa-ruble::before {\n  content: \"\\f158\"; }\n\n.fa-sun::before {\n  content: \"\\f185\"; }\n\n.fa-guitar::before {\n  content: \"\\f7a6\"; }\n\n.fa-face-laugh-wink::before {\n  content: \"\\f59c\"; }\n\n.fa-laugh-wink::before {\n  content: \"\\f59c\"; }\n\n.fa-horse-head::before {\n  content: \"\\f7ab\"; }\n\n.fa-bore-hole::before {\n  content: \"\\e4c3\"; }\n\n.fa-industry::before {\n  content: \"\\f275\"; }\n\n.fa-circle-down::before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-down::before {\n  content: \"\\f358\"; }\n\n.fa-arrows-turn-to-dots::before {\n  content: \"\\e4c1\"; }\n\n.fa-florin-sign::before {\n  content: \"\\e184\"; }\n\n.fa-arrow-down-short-wide::before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-desc::before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-down-alt::before {\n  content: \"\\f884\"; }\n\n.fa-less-than::before {\n  content: \"\\3c\"; }\n\n.fa-angle-down::before {\n  content: \"\\f107\"; }\n\n.fa-car-tunnel::before {\n  content: \"\\e4de\"; }\n\n.fa-head-side-cough::before {\n  content: \"\\e061\"; }\n\n.fa-grip-lines::before {\n  content: \"\\f7a4\"; }\n\n.fa-thumbs-down::before {\n  content: \"\\f165\"; }\n\n.fa-user-lock::before {\n  content: \"\\f502\"; }\n\n.fa-arrow-right-long::before {\n  content: \"\\f178\"; }\n\n.fa-long-arrow-right::before {\n  content: \"\\f178\"; }\n\n.fa-anchor-circle-xmark::before {\n  content: \"\\e4ac\"; }\n\n.fa-ellipsis::before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-h::before {\n  content: \"\\f141\"; }\n\n.fa-chess-pawn::before {\n  content: \"\\f443\"; }\n\n.fa-kit-medical::before {\n  content: \"\\f479\"; }\n\n.fa-first-aid::before {\n  content: \"\\f479\"; }\n\n.fa-person-through-window::before {\n  content: \"\\e5a9\"; }\n\n.fa-toolbox::before {\n  content: \"\\f552\"; }\n\n.fa-hands-holding-circle::before {\n  content: \"\\e4fb\"; }\n\n.fa-bug::before {\n  content: \"\\f188\"; }\n\n.fa-credit-card::before {\n  content: \"\\f09d\"; }\n\n.fa-credit-card-alt::before {\n  content: \"\\f09d\"; }\n\n.fa-car::before {\n  content: \"\\f1b9\"; }\n\n.fa-automobile::before {\n  content: \"\\f1b9\"; }\n\n.fa-hand-holding-hand::before {\n  content: \"\\e4f7\"; }\n\n.fa-book-open-reader::before {\n  content: \"\\f5da\"; }\n\n.fa-book-reader::before {\n  content: \"\\f5da\"; }\n\n.fa-mountain-sun::before {\n  content: \"\\e52f\"; }\n\n.fa-arrows-left-right-to-line::before {\n  content: \"\\e4ba\"; }\n\n.fa-dice-d20::before {\n  content: \"\\f6cf\"; }\n\n.fa-truck-droplet::before {\n  content: \"\\e58c\"; }\n\n.fa-file-circle-xmark::before {\n  content: \"\\e5a1\"; }\n\n.fa-temperature-arrow-up::before {\n  content: \"\\e040\"; }\n\n.fa-temperature-up::before {\n  content: \"\\e040\"; }\n\n.fa-medal::before {\n  content: \"\\f5a2\"; }\n\n.fa-bed::before {\n  content: \"\\f236\"; }\n\n.fa-square-h::before {\n  content: \"\\f0fd\"; }\n\n.fa-h-square::before {\n  content: \"\\f0fd\"; }\n\n.fa-podcast::before {\n  content: \"\\f2ce\"; }\n\n.fa-temperature-full::before {\n  content: \"\\f2c7\"; }\n\n.fa-temperature-4::before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-4::before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-full::before {\n  content: \"\\f2c7\"; }\n\n.fa-bell::before {\n  content: \"\\f0f3\"; }\n\n.fa-superscript::before {\n  content: \"\\f12b\"; }\n\n.fa-plug-circle-xmark::before {\n  content: \"\\e560\"; }\n\n.fa-star-of-life::before {\n  content: \"\\f621\"; }\n\n.fa-phone-slash::before {\n  content: \"\\f3dd\"; }\n\n.fa-paint-roller::before {\n  content: \"\\f5aa\"; }\n\n.fa-handshake-angle::before {\n  content: \"\\f4c4\"; }\n\n.fa-hands-helping::before {\n  content: \"\\f4c4\"; }\n\n.fa-location-dot::before {\n  content: \"\\f3c5\"; }\n\n.fa-map-marker-alt::before {\n  content: \"\\f3c5\"; }\n\n.fa-file::before {\n  content: \"\\f15b\"; }\n\n.fa-greater-than::before {\n  content: \"\\3e\"; }\n\n.fa-person-swimming::before {\n  content: \"\\f5c4\"; }\n\n.fa-swimmer::before {\n  content: \"\\f5c4\"; }\n\n.fa-arrow-down::before {\n  content: \"\\f063\"; }\n\n.fa-droplet::before {\n  content: \"\\f043\"; }\n\n.fa-tint::before {\n  content: \"\\f043\"; }\n\n.fa-eraser::before {\n  content: \"\\f12d\"; }\n\n.fa-earth-americas::before {\n  content: \"\\f57d\"; }\n\n.fa-earth::before {\n  content: \"\\f57d\"; }\n\n.fa-earth-america::before {\n  content: \"\\f57d\"; }\n\n.fa-globe-americas::before {\n  content: \"\\f57d\"; }\n\n.fa-person-burst::before {\n  content: \"\\e53b\"; }\n\n.fa-dove::before {\n  content: \"\\f4ba\"; }\n\n.fa-battery-empty::before {\n  content: \"\\f244\"; }\n\n.fa-battery-0::before {\n  content: \"\\f244\"; }\n\n.fa-socks::before {\n  content: \"\\f696\"; }\n\n.fa-inbox::before {\n  content: \"\\f01c\"; }\n\n.fa-section::before {\n  content: \"\\e447\"; }\n\n.fa-gauge-high::before {\n  content: \"\\f625\"; }\n\n.fa-tachometer-alt::before {\n  content: \"\\f625\"; }\n\n.fa-tachometer-alt-fast::before {\n  content: \"\\f625\"; }\n\n.fa-envelope-open-text::before {\n  content: \"\\f658\"; }\n\n.fa-hospital::before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt::before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-wide::before {\n  content: \"\\f0f8\"; }\n\n.fa-wine-bottle::before {\n  content: \"\\f72f\"; }\n\n.fa-chess-rook::before {\n  content: \"\\f447\"; }\n\n.fa-bars-staggered::before {\n  content: \"\\f550\"; }\n\n.fa-reorder::before {\n  content: \"\\f550\"; }\n\n.fa-stream::before {\n  content: \"\\f550\"; }\n\n.fa-dharmachakra::before {\n  content: \"\\f655\"; }\n\n.fa-hotdog::before {\n  content: \"\\f80f\"; }\n\n.fa-person-walking-with-cane::before {\n  content: \"\\f29d\"; }\n\n.fa-blind::before {\n  content: \"\\f29d\"; }\n\n.fa-drum::before {\n  content: \"\\f569\"; }\n\n.fa-ice-cream::before {\n  content: \"\\f810\"; }\n\n.fa-heart-circle-bolt::before {\n  content: \"\\e4fc\"; }\n\n.fa-fax::before {\n  content: \"\\f1ac\"; }\n\n.fa-paragraph::before {\n  content: \"\\f1dd\"; }\n\n.fa-check-to-slot::before {\n  content: \"\\f772\"; }\n\n.fa-vote-yea::before {\n  content: \"\\f772\"; }\n\n.fa-star-half::before {\n  content: \"\\f089\"; }\n\n.fa-boxes-stacked::before {\n  content: \"\\f468\"; }\n\n.fa-boxes::before {\n  content: \"\\f468\"; }\n\n.fa-boxes-alt::before {\n  content: \"\\f468\"; }\n\n.fa-link::before {\n  content: \"\\f0c1\"; }\n\n.fa-chain::before {\n  content: \"\\f0c1\"; }\n\n.fa-ear-listen::before {\n  content: \"\\f2a2\"; }\n\n.fa-assistive-listening-systems::before {\n  content: \"\\f2a2\"; }\n\n.fa-tree-city::before {\n  content: \"\\e587\"; }\n\n.fa-play::before {\n  content: \"\\f04b\"; }\n\n.fa-font::before {\n  content: \"\\f031\"; }\n\n.fa-rupiah-sign::before {\n  content: \"\\e23d\"; }\n\n.fa-magnifying-glass::before {\n  content: \"\\f002\"; }\n\n.fa-search::before {\n  content: \"\\f002\"; }\n\n.fa-table-tennis-paddle-ball::before {\n  content: \"\\f45d\"; }\n\n.fa-ping-pong-paddle-ball::before {\n  content: \"\\f45d\"; }\n\n.fa-table-tennis::before {\n  content: \"\\f45d\"; }\n\n.fa-person-dots-from-line::before {\n  content: \"\\f470\"; }\n\n.fa-diagnoses::before {\n  content: \"\\f470\"; }\n\n.fa-trash-can-arrow-up::before {\n  content: \"\\f82a\"; }\n\n.fa-trash-restore-alt::before {\n  content: \"\\f82a\"; }\n\n.fa-naira-sign::before {\n  content: \"\\e1f6\"; }\n\n.fa-cart-arrow-down::before {\n  content: \"\\f218\"; }\n\n.fa-walkie-talkie::before {\n  content: \"\\f8ef\"; }\n\n.fa-file-pen::before {\n  content: \"\\f31c\"; }\n\n.fa-file-edit::before {\n  content: \"\\f31c\"; }\n\n.fa-receipt::before {\n  content: \"\\f543\"; }\n\n.fa-square-pen::before {\n  content: \"\\f14b\"; }\n\n.fa-pen-square::before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-square::before {\n  content: \"\\f14b\"; }\n\n.fa-suitcase-rolling::before {\n  content: \"\\f5c1\"; }\n\n.fa-person-circle-exclamation::before {\n  content: \"\\e53f\"; }\n\n.fa-chevron-down::before {\n  content: \"\\f078\"; }\n\n.fa-battery-full::before {\n  content: \"\\f240\"; }\n\n.fa-battery::before {\n  content: \"\\f240\"; }\n\n.fa-battery-5::before {\n  content: \"\\f240\"; }\n\n.fa-skull-crossbones::before {\n  content: \"\\f714\"; }\n\n.fa-code-compare::before {\n  content: \"\\e13a\"; }\n\n.fa-list-ul::before {\n  content: \"\\f0ca\"; }\n\n.fa-list-dots::before {\n  content: \"\\f0ca\"; }\n\n.fa-school-lock::before {\n  content: \"\\e56f\"; }\n\n.fa-tower-cell::before {\n  content: \"\\e585\"; }\n\n.fa-down-long::before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-down::before {\n  content: \"\\f309\"; }\n\n.fa-ranking-star::before {\n  content: \"\\e561\"; }\n\n.fa-chess-king::before {\n  content: \"\\f43f\"; }\n\n.fa-person-harassing::before {\n  content: \"\\e549\"; }\n\n.fa-brazilian-real-sign::before {\n  content: \"\\e46c\"; }\n\n.fa-landmark-dome::before {\n  content: \"\\f752\"; }\n\n.fa-landmark-alt::before {\n  content: \"\\f752\"; }\n\n.fa-arrow-up::before {\n  content: \"\\f062\"; }\n\n.fa-tv::before {\n  content: \"\\f26c\"; }\n\n.fa-television::before {\n  content: \"\\f26c\"; }\n\n.fa-tv-alt::before {\n  content: \"\\f26c\"; }\n\n.fa-shrimp::before {\n  content: \"\\e448\"; }\n\n.fa-list-check::before {\n  content: \"\\f0ae\"; }\n\n.fa-tasks::before {\n  content: \"\\f0ae\"; }\n\n.fa-jug-detergent::before {\n  content: \"\\e519\"; }\n\n.fa-circle-user::before {\n  content: \"\\f2bd\"; }\n\n.fa-user-circle::before {\n  content: \"\\f2bd\"; }\n\n.fa-user-shield::before {\n  content: \"\\f505\"; }\n\n.fa-wind::before {\n  content: \"\\f72e\"; }\n\n.fa-car-burst::before {\n  content: \"\\f5e1\"; }\n\n.fa-car-crash::before {\n  content: \"\\f5e1\"; }\n\n.fa-y::before {\n  content: \"\\59\"; }\n\n.fa-person-snowboarding::before {\n  content: \"\\f7ce\"; }\n\n.fa-snowboarding::before {\n  content: \"\\f7ce\"; }\n\n.fa-truck-fast::before {\n  content: \"\\f48b\"; }\n\n.fa-shipping-fast::before {\n  content: \"\\f48b\"; }\n\n.fa-fish::before {\n  content: \"\\f578\"; }\n\n.fa-user-graduate::before {\n  content: \"\\f501\"; }\n\n.fa-circle-half-stroke::before {\n  content: \"\\f042\"; }\n\n.fa-adjust::before {\n  content: \"\\f042\"; }\n\n.fa-clapperboard::before {\n  content: \"\\e131\"; }\n\n.fa-circle-radiation::before {\n  content: \"\\f7ba\"; }\n\n.fa-radiation-alt::before {\n  content: \"\\f7ba\"; }\n\n.fa-baseball::before {\n  content: \"\\f433\"; }\n\n.fa-baseball-ball::before {\n  content: \"\\f433\"; }\n\n.fa-jet-fighter-up::before {\n  content: \"\\e518\"; }\n\n.fa-diagram-project::before {\n  content: \"\\f542\"; }\n\n.fa-project-diagram::before {\n  content: \"\\f542\"; }\n\n.fa-copy::before {\n  content: \"\\f0c5\"; }\n\n.fa-volume-xmark::before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-mute::before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-times::before {\n  content: \"\\f6a9\"; }\n\n.fa-hand-sparkles::before {\n  content: \"\\e05d\"; }\n\n.fa-grip::before {\n  content: \"\\f58d\"; }\n\n.fa-grip-horizontal::before {\n  content: \"\\f58d\"; }\n\n.fa-share-from-square::before {\n  content: \"\\f14d\"; }\n\n.fa-share-square::before {\n  content: \"\\f14d\"; }\n\n.fa-child-combatant::before {\n  content: \"\\e4e0\"; }\n\n.fa-child-rifle::before {\n  content: \"\\e4e0\"; }\n\n.fa-gun::before {\n  content: \"\\e19b\"; }\n\n.fa-square-phone::before {\n  content: \"\\f098\"; }\n\n.fa-phone-square::before {\n  content: \"\\f098\"; }\n\n.fa-plus::before {\n  content: \"\\2b\"; }\n\n.fa-add::before {\n  content: \"\\2b\"; }\n\n.fa-expand::before {\n  content: \"\\f065\"; }\n\n.fa-computer::before {\n  content: \"\\e4e5\"; }\n\n.fa-xmark::before {\n  content: \"\\f00d\"; }\n\n.fa-close::before {\n  content: \"\\f00d\"; }\n\n.fa-multiply::before {\n  content: \"\\f00d\"; }\n\n.fa-remove::before {\n  content: \"\\f00d\"; }\n\n.fa-times::before {\n  content: \"\\f00d\"; }\n\n.fa-arrows-up-down-left-right::before {\n  content: \"\\f047\"; }\n\n.fa-arrows::before {\n  content: \"\\f047\"; }\n\n.fa-chalkboard-user::before {\n  content: \"\\f51c\"; }\n\n.fa-chalkboard-teacher::before {\n  content: \"\\f51c\"; }\n\n.fa-peso-sign::before {\n  content: \"\\e222\"; }\n\n.fa-building-shield::before {\n  content: \"\\e4d8\"; }\n\n.fa-baby::before {\n  content: \"\\f77c\"; }\n\n.fa-users-line::before {\n  content: \"\\e592\"; }\n\n.fa-quote-left::before {\n  content: \"\\f10d\"; }\n\n.fa-quote-left-alt::before {\n  content: \"\\f10d\"; }\n\n.fa-tractor::before {\n  content: \"\\f722\"; }\n\n.fa-trash-arrow-up::before {\n  content: \"\\f829\"; }\n\n.fa-trash-restore::before {\n  content: \"\\f829\"; }\n\n.fa-arrow-down-up-lock::before {\n  content: \"\\e4b0\"; }\n\n.fa-lines-leaning::before {\n  content: \"\\e51e\"; }\n\n.fa-ruler-combined::before {\n  content: \"\\f546\"; }\n\n.fa-copyright::before {\n  content: \"\\f1f9\"; }\n\n.fa-equals::before {\n  content: \"\\3d\"; }\n\n.fa-blender::before {\n  content: \"\\f517\"; }\n\n.fa-teeth::before {\n  content: \"\\f62e\"; }\n\n.fa-shekel-sign::before {\n  content: \"\\f20b\"; }\n\n.fa-ils::before {\n  content: \"\\f20b\"; }\n\n.fa-shekel::before {\n  content: \"\\f20b\"; }\n\n.fa-sheqel::before {\n  content: \"\\f20b\"; }\n\n.fa-sheqel-sign::before {\n  content: \"\\f20b\"; }\n\n.fa-map::before {\n  content: \"\\f279\"; }\n\n.fa-rocket::before {\n  content: \"\\f135\"; }\n\n.fa-photo-film::before {\n  content: \"\\f87c\"; }\n\n.fa-photo-video::before {\n  content: \"\\f87c\"; }\n\n.fa-folder-minus::before {\n  content: \"\\f65d\"; }\n\n.fa-store::before {\n  content: \"\\f54e\"; }\n\n.fa-arrow-trend-up::before {\n  content: \"\\e098\"; }\n\n.fa-plug-circle-minus::before {\n  content: \"\\e55e\"; }\n\n.fa-sign-hanging::before {\n  content: \"\\f4d9\"; }\n\n.fa-sign::before {\n  content: \"\\f4d9\"; }\n\n.fa-bezier-curve::before {\n  content: \"\\f55b\"; }\n\n.fa-bell-slash::before {\n  content: \"\\f1f6\"; }\n\n.fa-tablet::before {\n  content: \"\\f3fb\"; }\n\n.fa-tablet-android::before {\n  content: \"\\f3fb\"; }\n\n.fa-school-flag::before {\n  content: \"\\e56e\"; }\n\n.fa-fill::before {\n  content: \"\\f575\"; }\n\n.fa-angle-up::before {\n  content: \"\\f106\"; }\n\n.fa-drumstick-bite::before {\n  content: \"\\f6d7\"; }\n\n.fa-holly-berry::before {\n  content: \"\\f7aa\"; }\n\n.fa-chevron-left::before {\n  content: \"\\f053\"; }\n\n.fa-bacteria::before {\n  content: \"\\e059\"; }\n\n.fa-hand-lizard::before {\n  content: \"\\f258\"; }\n\n.fa-notdef::before {\n  content: \"\\e1fe\"; }\n\n.fa-disease::before {\n  content: \"\\f7fa\"; }\n\n.fa-briefcase-medical::before {\n  content: \"\\f469\"; }\n\n.fa-genderless::before {\n  content: \"\\f22d\"; }\n\n.fa-chevron-right::before {\n  content: \"\\f054\"; }\n\n.fa-retweet::before {\n  content: \"\\f079\"; }\n\n.fa-car-rear::before {\n  content: \"\\f5de\"; }\n\n.fa-car-alt::before {\n  content: \"\\f5de\"; }\n\n.fa-pump-soap::before {\n  content: \"\\e06b\"; }\n\n.fa-video-slash::before {\n  content: \"\\f4e2\"; }\n\n.fa-battery-quarter::before {\n  content: \"\\f243\"; }\n\n.fa-battery-2::before {\n  content: \"\\f243\"; }\n\n.fa-radio::before {\n  content: \"\\f8d7\"; }\n\n.fa-baby-carriage::before {\n  content: \"\\f77d\"; }\n\n.fa-carriage-baby::before {\n  content: \"\\f77d\"; }\n\n.fa-traffic-light::before {\n  content: \"\\f637\"; }\n\n.fa-thermometer::before {\n  content: \"\\f491\"; }\n\n.fa-vr-cardboard::before {\n  content: \"\\f729\"; }\n\n.fa-hand-middle-finger::before {\n  content: \"\\f806\"; }\n\n.fa-percent::before {\n  content: \"\\25\"; }\n\n.fa-percentage::before {\n  content: \"\\25\"; }\n\n.fa-truck-moving::before {\n  content: \"\\f4df\"; }\n\n.fa-glass-water-droplet::before {\n  content: \"\\e4f5\"; }\n\n.fa-display::before {\n  content: \"\\e163\"; }\n\n.fa-face-smile::before {\n  content: \"\\f118\"; }\n\n.fa-smile::before {\n  content: \"\\f118\"; }\n\n.fa-thumbtack::before {\n  content: \"\\f08d\"; }\n\n.fa-thumb-tack::before {\n  content: \"\\f08d\"; }\n\n.fa-trophy::before {\n  content: \"\\f091\"; }\n\n.fa-person-praying::before {\n  content: \"\\f683\"; }\n\n.fa-pray::before {\n  content: \"\\f683\"; }\n\n.fa-hammer::before {\n  content: \"\\f6e3\"; }\n\n.fa-hand-peace::before {\n  content: \"\\f25b\"; }\n\n.fa-rotate::before {\n  content: \"\\f2f1\"; }\n\n.fa-sync-alt::before {\n  content: \"\\f2f1\"; }\n\n.fa-spinner::before {\n  content: \"\\f110\"; }\n\n.fa-robot::before {\n  content: \"\\f544\"; }\n\n.fa-peace::before {\n  content: \"\\f67c\"; }\n\n.fa-gears::before {\n  content: \"\\f085\"; }\n\n.fa-cogs::before {\n  content: \"\\f085\"; }\n\n.fa-warehouse::before {\n  content: \"\\f494\"; }\n\n.fa-arrow-up-right-dots::before {\n  content: \"\\e4b7\"; }\n\n.fa-splotch::before {\n  content: \"\\f5bc\"; }\n\n.fa-face-grin-hearts::before {\n  content: \"\\f584\"; }\n\n.fa-grin-hearts::before {\n  content: \"\\f584\"; }\n\n.fa-dice-four::before {\n  content: \"\\f524\"; }\n\n.fa-sim-card::before {\n  content: \"\\f7c4\"; }\n\n.fa-transgender::before {\n  content: \"\\f225\"; }\n\n.fa-transgender-alt::before {\n  content: \"\\f225\"; }\n\n.fa-mercury::before {\n  content: \"\\f223\"; }\n\n.fa-arrow-turn-down::before {\n  content: \"\\f149\"; }\n\n.fa-level-down::before {\n  content: \"\\f149\"; }\n\n.fa-person-falling-burst::before {\n  content: \"\\e547\"; }\n\n.fa-award::before {\n  content: \"\\f559\"; }\n\n.fa-ticket-simple::before {\n  content: \"\\f3ff\"; }\n\n.fa-ticket-alt::before {\n  content: \"\\f3ff\"; }\n\n.fa-building::before {\n  content: \"\\f1ad\"; }\n\n.fa-angles-left::before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-left::before {\n  content: \"\\f100\"; }\n\n.fa-qrcode::before {\n  content: \"\\f029\"; }\n\n.fa-clock-rotate-left::before {\n  content: \"\\f1da\"; }\n\n.fa-history::before {\n  content: \"\\f1da\"; }\n\n.fa-face-grin-beam-sweat::before {\n  content: \"\\f583\"; }\n\n.fa-grin-beam-sweat::before {\n  content: \"\\f583\"; }\n\n.fa-file-export::before {\n  content: \"\\f56e\"; }\n\n.fa-arrow-right-from-file::before {\n  content: \"\\f56e\"; }\n\n.fa-shield::before {\n  content: \"\\f132\"; }\n\n.fa-shield-blank::before {\n  content: \"\\f132\"; }\n\n.fa-arrow-up-short-wide::before {\n  content: \"\\f885\"; }\n\n.fa-sort-amount-up-alt::before {\n  content: \"\\f885\"; }\n\n.fa-house-medical::before {\n  content: \"\\e3b2\"; }\n\n.fa-golf-ball-tee::before {\n  content: \"\\f450\"; }\n\n.fa-golf-ball::before {\n  content: \"\\f450\"; }\n\n.fa-circle-chevron-left::before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-left::before {\n  content: \"\\f137\"; }\n\n.fa-house-chimney-window::before {\n  content: \"\\e00d\"; }\n\n.fa-pen-nib::before {\n  content: \"\\f5ad\"; }\n\n.fa-tent-arrow-turn-left::before {\n  content: \"\\e580\"; }\n\n.fa-tents::before {\n  content: \"\\e582\"; }\n\n.fa-wand-magic::before {\n  content: \"\\f0d0\"; }\n\n.fa-magic::before {\n  content: \"\\f0d0\"; }\n\n.fa-dog::before {\n  content: \"\\f6d3\"; }\n\n.fa-carrot::before {\n  content: \"\\f787\"; }\n\n.fa-moon::before {\n  content: \"\\f186\"; }\n\n.fa-wine-glass-empty::before {\n  content: \"\\f5ce\"; }\n\n.fa-wine-glass-alt::before {\n  content: \"\\f5ce\"; }\n\n.fa-cheese::before {\n  content: \"\\f7ef\"; }\n\n.fa-yin-yang::before {\n  content: \"\\f6ad\"; }\n\n.fa-music::before {\n  content: \"\\f001\"; }\n\n.fa-code-commit::before {\n  content: \"\\f386\"; }\n\n.fa-temperature-low::before {\n  content: \"\\f76b\"; }\n\n.fa-person-biking::before {\n  content: \"\\f84a\"; }\n\n.fa-biking::before {\n  content: \"\\f84a\"; }\n\n.fa-broom::before {\n  content: \"\\f51a\"; }\n\n.fa-shield-heart::before {\n  content: \"\\e574\"; }\n\n.fa-gopuram::before {\n  content: \"\\f664\"; }\n\n.fa-earth-oceania::before {\n  content: \"\\e47b\"; }\n\n.fa-globe-oceania::before {\n  content: \"\\e47b\"; }\n\n.fa-square-xmark::before {\n  content: \"\\f2d3\"; }\n\n.fa-times-square::before {\n  content: \"\\f2d3\"; }\n\n.fa-xmark-square::before {\n  content: \"\\f2d3\"; }\n\n.fa-hashtag::before {\n  content: \"\\23\"; }\n\n.fa-up-right-and-down-left-from-center::before {\n  content: \"\\f424\"; }\n\n.fa-expand-alt::before {\n  content: \"\\f424\"; }\n\n.fa-oil-can::before {\n  content: \"\\f613\"; }\n\n.fa-t::before {\n  content: \"\\54\"; }\n\n.fa-hippo::before {\n  content: \"\\f6ed\"; }\n\n.fa-chart-column::before {\n  content: \"\\e0e3\"; }\n\n.fa-infinity::before {\n  content: \"\\f534\"; }\n\n.fa-vial-circle-check::before {\n  content: \"\\e596\"; }\n\n.fa-person-arrow-down-to-line::before {\n  content: \"\\e538\"; }\n\n.fa-voicemail::before {\n  content: \"\\f897\"; }\n\n.fa-fan::before {\n  content: \"\\f863\"; }\n\n.fa-person-walking-luggage::before {\n  content: \"\\e554\"; }\n\n.fa-up-down::before {\n  content: \"\\f338\"; }\n\n.fa-arrows-alt-v::before {\n  content: \"\\f338\"; }\n\n.fa-cloud-moon-rain::before {\n  content: \"\\f73c\"; }\n\n.fa-calendar::before {\n  content: \"\\f133\"; }\n\n.fa-trailer::before {\n  content: \"\\e041\"; }\n\n.fa-bahai::before {\n  content: \"\\f666\"; }\n\n.fa-haykal::before {\n  content: \"\\f666\"; }\n\n.fa-sd-card::before {\n  content: \"\\f7c2\"; }\n\n.fa-dragon::before {\n  content: \"\\f6d5\"; }\n\n.fa-shoe-prints::before {\n  content: \"\\f54b\"; }\n\n.fa-circle-plus::before {\n  content: \"\\f055\"; }\n\n.fa-plus-circle::before {\n  content: \"\\f055\"; }\n\n.fa-face-grin-tongue-wink::before {\n  content: \"\\f58b\"; }\n\n.fa-grin-tongue-wink::before {\n  content: \"\\f58b\"; }\n\n.fa-hand-holding::before {\n  content: \"\\f4bd\"; }\n\n.fa-plug-circle-exclamation::before {\n  content: \"\\e55d\"; }\n\n.fa-link-slash::before {\n  content: \"\\f127\"; }\n\n.fa-chain-broken::before {\n  content: \"\\f127\"; }\n\n.fa-chain-slash::before {\n  content: \"\\f127\"; }\n\n.fa-unlink::before {\n  content: \"\\f127\"; }\n\n.fa-clone::before {\n  content: \"\\f24d\"; }\n\n.fa-person-walking-arrow-loop-left::before {\n  content: \"\\e551\"; }\n\n.fa-arrow-up-z-a::before {\n  content: \"\\f882\"; }\n\n.fa-sort-alpha-up-alt::before {\n  content: \"\\f882\"; }\n\n.fa-fire-flame-curved::before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-alt::before {\n  content: \"\\f7e4\"; }\n\n.fa-tornado::before {\n  content: \"\\f76f\"; }\n\n.fa-file-circle-plus::before {\n  content: \"\\e494\"; }\n\n.fa-book-quran::before {\n  content: \"\\f687\"; }\n\n.fa-quran::before {\n  content: \"\\f687\"; }\n\n.fa-anchor::before {\n  content: \"\\f13d\"; }\n\n.fa-border-all::before {\n  content: \"\\f84c\"; }\n\n.fa-face-angry::before {\n  content: \"\\f556\"; }\n\n.fa-angry::before {\n  content: \"\\f556\"; }\n\n.fa-cookie-bite::before {\n  content: \"\\f564\"; }\n\n.fa-arrow-trend-down::before {\n  content: \"\\e097\"; }\n\n.fa-rss::before {\n  content: \"\\f09e\"; }\n\n.fa-feed::before {\n  content: \"\\f09e\"; }\n\n.fa-draw-polygon::before {\n  content: \"\\f5ee\"; }\n\n.fa-scale-balanced::before {\n  content: \"\\f24e\"; }\n\n.fa-balance-scale::before {\n  content: \"\\f24e\"; }\n\n.fa-gauge-simple-high::before {\n  content: \"\\f62a\"; }\n\n.fa-tachometer::before {\n  content: \"\\f62a\"; }\n\n.fa-tachometer-fast::before {\n  content: \"\\f62a\"; }\n\n.fa-shower::before {\n  content: \"\\f2cc\"; }\n\n.fa-desktop::before {\n  content: \"\\f390\"; }\n\n.fa-desktop-alt::before {\n  content: \"\\f390\"; }\n\n.fa-m::before {\n  content: \"\\4d\"; }\n\n.fa-table-list::before {\n  content: \"\\f00b\"; }\n\n.fa-th-list::before {\n  content: \"\\f00b\"; }\n\n.fa-comment-sms::before {\n  content: \"\\f7cd\"; }\n\n.fa-sms::before {\n  content: \"\\f7cd\"; }\n\n.fa-book::before {\n  content: \"\\f02d\"; }\n\n.fa-user-plus::before {\n  content: \"\\f234\"; }\n\n.fa-check::before {\n  content: \"\\f00c\"; }\n\n.fa-battery-three-quarters::before {\n  content: \"\\f241\"; }\n\n.fa-battery-4::before {\n  content: \"\\f241\"; }\n\n.fa-house-circle-check::before {\n  content: \"\\e509\"; }\n\n.fa-angle-left::before {\n  content: \"\\f104\"; }\n\n.fa-diagram-successor::before {\n  content: \"\\e47a\"; }\n\n.fa-truck-arrow-right::before {\n  content: \"\\e58b\"; }\n\n.fa-arrows-split-up-and-left::before {\n  content: \"\\e4bc\"; }\n\n.fa-hand-fist::before {\n  content: \"\\f6de\"; }\n\n.fa-fist-raised::before {\n  content: \"\\f6de\"; }\n\n.fa-cloud-moon::before {\n  content: \"\\f6c3\"; }\n\n.fa-briefcase::before {\n  content: \"\\f0b1\"; }\n\n.fa-person-falling::before {\n  content: \"\\e546\"; }\n\n.fa-image-portrait::before {\n  content: \"\\f3e0\"; }\n\n.fa-portrait::before {\n  content: \"\\f3e0\"; }\n\n.fa-user-tag::before {\n  content: \"\\f507\"; }\n\n.fa-rug::before {\n  content: \"\\e569\"; }\n\n.fa-earth-europe::before {\n  content: \"\\f7a2\"; }\n\n.fa-globe-europe::before {\n  content: \"\\f7a2\"; }\n\n.fa-cart-flatbed-suitcase::before {\n  content: \"\\f59d\"; }\n\n.fa-luggage-cart::before {\n  content: \"\\f59d\"; }\n\n.fa-rectangle-xmark::before {\n  content: \"\\f410\"; }\n\n.fa-rectangle-times::before {\n  content: \"\\f410\"; }\n\n.fa-times-rectangle::before {\n  content: \"\\f410\"; }\n\n.fa-window-close::before {\n  content: \"\\f410\"; }\n\n.fa-baht-sign::before {\n  content: \"\\e0ac\"; }\n\n.fa-book-open::before {\n  content: \"\\f518\"; }\n\n.fa-book-journal-whills::before {\n  content: \"\\f66a\"; }\n\n.fa-journal-whills::before {\n  content: \"\\f66a\"; }\n\n.fa-handcuffs::before {\n  content: \"\\e4f8\"; }\n\n.fa-triangle-exclamation::before {\n  content: \"\\f071\"; }\n\n.fa-exclamation-triangle::before {\n  content: \"\\f071\"; }\n\n.fa-warning::before {\n  content: \"\\f071\"; }\n\n.fa-database::before {\n  content: \"\\f1c0\"; }\n\n.fa-share::before {\n  content: \"\\f064\"; }\n\n.fa-mail-forward::before {\n  content: \"\\f064\"; }\n\n.fa-bottle-droplet::before {\n  content: \"\\e4c4\"; }\n\n.fa-mask-face::before {\n  content: \"\\e1d7\"; }\n\n.fa-hill-rockslide::before {\n  content: \"\\e508\"; }\n\n.fa-right-left::before {\n  content: \"\\f362\"; }\n\n.fa-exchange-alt::before {\n  content: \"\\f362\"; }\n\n.fa-paper-plane::before {\n  content: \"\\f1d8\"; }\n\n.fa-road-circle-exclamation::before {\n  content: \"\\e565\"; }\n\n.fa-dungeon::before {\n  content: \"\\f6d9\"; }\n\n.fa-align-right::before {\n  content: \"\\f038\"; }\n\n.fa-money-bill-1-wave::before {\n  content: \"\\f53b\"; }\n\n.fa-money-bill-wave-alt::before {\n  content: \"\\f53b\"; }\n\n.fa-life-ring::before {\n  content: \"\\f1cd\"; }\n\n.fa-hands::before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-language::before {\n  content: \"\\f2a7\"; }\n\n.fa-signing::before {\n  content: \"\\f2a7\"; }\n\n.fa-calendar-day::before {\n  content: \"\\f783\"; }\n\n.fa-water-ladder::before {\n  content: \"\\f5c5\"; }\n\n.fa-ladder-water::before {\n  content: \"\\f5c5\"; }\n\n.fa-swimming-pool::before {\n  content: \"\\f5c5\"; }\n\n.fa-arrows-up-down::before {\n  content: \"\\f07d\"; }\n\n.fa-arrows-v::before {\n  content: \"\\f07d\"; }\n\n.fa-face-grimace::before {\n  content: \"\\f57f\"; }\n\n.fa-grimace::before {\n  content: \"\\f57f\"; }\n\n.fa-wheelchair-move::before {\n  content: \"\\e2ce\"; }\n\n.fa-wheelchair-alt::before {\n  content: \"\\e2ce\"; }\n\n.fa-turn-down::before {\n  content: \"\\f3be\"; }\n\n.fa-level-down-alt::before {\n  content: \"\\f3be\"; }\n\n.fa-person-walking-arrow-right::before {\n  content: \"\\e552\"; }\n\n.fa-square-envelope::before {\n  content: \"\\f199\"; }\n\n.fa-envelope-square::before {\n  content: \"\\f199\"; }\n\n.fa-dice::before {\n  content: \"\\f522\"; }\n\n.fa-bowling-ball::before {\n  content: \"\\f436\"; }\n\n.fa-brain::before {\n  content: \"\\f5dc\"; }\n\n.fa-bandage::before {\n  content: \"\\f462\"; }\n\n.fa-band-aid::before {\n  content: \"\\f462\"; }\n\n.fa-calendar-minus::before {\n  content: \"\\f272\"; }\n\n.fa-circle-xmark::before {\n  content: \"\\f057\"; }\n\n.fa-times-circle::before {\n  content: \"\\f057\"; }\n\n.fa-xmark-circle::before {\n  content: \"\\f057\"; }\n\n.fa-gifts::before {\n  content: \"\\f79c\"; }\n\n.fa-hotel::before {\n  content: \"\\f594\"; }\n\n.fa-earth-asia::before {\n  content: \"\\f57e\"; }\n\n.fa-globe-asia::before {\n  content: \"\\f57e\"; }\n\n.fa-id-card-clip::before {\n  content: \"\\f47f\"; }\n\n.fa-id-card-alt::before {\n  content: \"\\f47f\"; }\n\n.fa-magnifying-glass-plus::before {\n  content: \"\\f00e\"; }\n\n.fa-search-plus::before {\n  content: \"\\f00e\"; }\n\n.fa-thumbs-up::before {\n  content: \"\\f164\"; }\n\n.fa-user-clock::before {\n  content: \"\\f4fd\"; }\n\n.fa-hand-dots::before {\n  content: \"\\f461\"; }\n\n.fa-allergies::before {\n  content: \"\\f461\"; }\n\n.fa-file-invoice::before {\n  content: \"\\f570\"; }\n\n.fa-window-minimize::before {\n  content: \"\\f2d1\"; }\n\n.fa-mug-saucer::before {\n  content: \"\\f0f4\"; }\n\n.fa-coffee::before {\n  content: \"\\f0f4\"; }\n\n.fa-brush::before {\n  content: \"\\f55d\"; }\n\n.fa-mask::before {\n  content: \"\\f6fa\"; }\n\n.fa-magnifying-glass-minus::before {\n  content: \"\\f010\"; }\n\n.fa-search-minus::before {\n  content: \"\\f010\"; }\n\n.fa-ruler-vertical::before {\n  content: \"\\f548\"; }\n\n.fa-user-large::before {\n  content: \"\\f406\"; }\n\n.fa-user-alt::before {\n  content: \"\\f406\"; }\n\n.fa-train-tram::before {\n  content: \"\\e5b4\"; }\n\n.fa-user-nurse::before {\n  content: \"\\f82f\"; }\n\n.fa-syringe::before {\n  content: \"\\f48e\"; }\n\n.fa-cloud-sun::before {\n  content: \"\\f6c4\"; }\n\n.fa-stopwatch-20::before {\n  content: \"\\e06f\"; }\n\n.fa-square-full::before {\n  content: \"\\f45c\"; }\n\n.fa-magnet::before {\n  content: \"\\f076\"; }\n\n.fa-jar::before {\n  content: \"\\e516\"; }\n\n.fa-note-sticky::before {\n  content: \"\\f249\"; }\n\n.fa-sticky-note::before {\n  content: \"\\f249\"; }\n\n.fa-bug-slash::before {\n  content: \"\\e490\"; }\n\n.fa-arrow-up-from-water-pump::before {\n  content: \"\\e4b6\"; }\n\n.fa-bone::before {\n  content: \"\\f5d7\"; }\n\n.fa-user-injured::before {\n  content: \"\\f728\"; }\n\n.fa-face-sad-tear::before {\n  content: \"\\f5b4\"; }\n\n.fa-sad-tear::before {\n  content: \"\\f5b4\"; }\n\n.fa-plane::before {\n  content: \"\\f072\"; }\n\n.fa-tent-arrows-down::before {\n  content: \"\\e581\"; }\n\n.fa-exclamation::before {\n  content: \"\\21\"; }\n\n.fa-arrows-spin::before {\n  content: \"\\e4bb\"; }\n\n.fa-print::before {\n  content: \"\\f02f\"; }\n\n.fa-turkish-lira-sign::before {\n  content: \"\\e2bb\"; }\n\n.fa-try::before {\n  content: \"\\e2bb\"; }\n\n.fa-turkish-lira::before {\n  content: \"\\e2bb\"; }\n\n.fa-dollar-sign::before {\n  content: \"\\24\"; }\n\n.fa-dollar::before {\n  content: \"\\24\"; }\n\n.fa-usd::before {\n  content: \"\\24\"; }\n\n.fa-x::before {\n  content: \"\\58\"; }\n\n.fa-magnifying-glass-dollar::before {\n  content: \"\\f688\"; }\n\n.fa-search-dollar::before {\n  content: \"\\f688\"; }\n\n.fa-users-gear::before {\n  content: \"\\f509\"; }\n\n.fa-users-cog::before {\n  content: \"\\f509\"; }\n\n.fa-person-military-pointing::before {\n  content: \"\\e54a\"; }\n\n.fa-building-columns::before {\n  content: \"\\f19c\"; }\n\n.fa-bank::before {\n  content: \"\\f19c\"; }\n\n.fa-institution::before {\n  content: \"\\f19c\"; }\n\n.fa-museum::before {\n  content: \"\\f19c\"; }\n\n.fa-university::before {\n  content: \"\\f19c\"; }\n\n.fa-umbrella::before {\n  content: \"\\f0e9\"; }\n\n.fa-trowel::before {\n  content: \"\\e589\"; }\n\n.fa-d::before {\n  content: \"\\44\"; }\n\n.fa-stapler::before {\n  content: \"\\e5af\"; }\n\n.fa-masks-theater::before {\n  content: \"\\f630\"; }\n\n.fa-theater-masks::before {\n  content: \"\\f630\"; }\n\n.fa-kip-sign::before {\n  content: \"\\e1c4\"; }\n\n.fa-hand-point-left::before {\n  content: \"\\f0a5\"; }\n\n.fa-handshake-simple::before {\n  content: \"\\f4c6\"; }\n\n.fa-handshake-alt::before {\n  content: \"\\f4c6\"; }\n\n.fa-jet-fighter::before {\n  content: \"\\f0fb\"; }\n\n.fa-fighter-jet::before {\n  content: \"\\f0fb\"; }\n\n.fa-square-share-nodes::before {\n  content: \"\\f1e1\"; }\n\n.fa-share-alt-square::before {\n  content: \"\\f1e1\"; }\n\n.fa-barcode::before {\n  content: \"\\f02a\"; }\n\n.fa-plus-minus::before {\n  content: \"\\e43c\"; }\n\n.fa-video::before {\n  content: \"\\f03d\"; }\n\n.fa-video-camera::before {\n  content: \"\\f03d\"; }\n\n.fa-graduation-cap::before {\n  content: \"\\f19d\"; }\n\n.fa-mortar-board::before {\n  content: \"\\f19d\"; }\n\n.fa-hand-holding-medical::before {\n  content: \"\\e05c\"; }\n\n.fa-person-circle-check::before {\n  content: \"\\e53e\"; }\n\n.fa-turn-up::before {\n  content: \"\\f3bf\"; }\n\n.fa-level-up-alt::before {\n  content: \"\\f3bf\"; }\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0; }\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0; }\n:root, :host {\n  --fa-style-family-brands: 'Font Awesome 6 Brands';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands'; }\n\n@font-face {\n  font-family: 'Font Awesome 6 Brands';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\"); }\n\n.fab,\n.fa-brands {\n  font-weight: 400; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-cloudflare:before {\n  content: \"\\e07d\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-pixiv:before {\n  content: \"\\e640\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-stackpath:before {\n  content: \"\\f842\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-guilded:before {\n  content: \"\\e07e\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-square-js:before {\n  content: \"\\f3b9\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-orcid:before {\n  content: \"\\f8d2\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-unity:before {\n  content: \"\\e049\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-square-reddit:before {\n  content: \"\\f1a2\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-square-font-awesome:before {\n  content: \"\\e5ad\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-brave:before {\n  content: \"\\e63c\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-square-instagram:before {\n  content: \"\\e055\"; }\n\n.fa-instagram-square:before {\n  content: \"\\e055\"; }\n\n.fa-battle-net:before {\n  content: \"\\f835\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-square-hacker-news:before {\n  content: \"\\f3af\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-threads:before {\n  content: \"\\e618\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-square-snapchat:before {\n  content: \"\\f2ad\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-square-font-awesome-stroke:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-chromecast:before {\n  content: \"\\f838\"; }\n\n.fa-evernote:before {\n  content: \"\\f839\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-watchman-monitoring:before {\n  content: \"\\e087\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-git-alt:before {\n  content: \"\\f841\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-square-viadeo:before {\n  content: \"\\f2aa\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-opensuse:before {\n  content: \"\\e62b\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-square-dribbble:before {\n  content: \"\\f397\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-debian:before {\n  content: \"\\e60b\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-instalod:before {\n  content: \"\\e081\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-square-twitter:before {\n  content: \"\\f081\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-golang:before {\n  content: \"\\e40f\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-uncharted:before {\n  content: \"\\e084\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-square-youtube:before {\n  content: \"\\f431\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-rendact:before {\n  content: \"\\f3e4\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-nfc-directional:before {\n  content: \"\\e530\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-meta:before {\n  content: \"\\e49b\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-square-letterboxd:before {\n  content: \"\\e62e\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-shoelace:before {\n  content: \"\\e60c\"; }\n\n.fa-mdb:before {\n  content: \"\\f8ca\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-unsplash:before {\n  content: \"\\e07c\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-square-steam:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-square-vimeo:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f2b4\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-hive:before {\n  content: \"\\e07f\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-padlet:before {\n  content: \"\\e4a0\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-square-github:before {\n  content: \"\\f092\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-shopify:before {\n  content: \"\\e057\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-square-threads:before {\n  content: \"\\e619\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-swift:before {\n  content: \"\\f8e1\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-google-scholar:before {\n  content: \"\\e63b\"; }\n\n.fa-square-gitlab:before {\n  content: \"\\e5ae\"; }\n\n.fa-gitlab-square:before {\n  content: \"\\e5ae\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-square-odnoklassniki:before {\n  content: \"\\f264\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-hashnode:before {\n  content: \"\\e499\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-itch-io:before {\n  content: \"\\f83a\"; }\n\n.fa-umbraco:before {\n  content: \"\\f8e8\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-square-pinterest:before {\n  content: \"\\f0d3\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-signal-messenger:before {\n  content: \"\\e663\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-dailymotion:before {\n  content: \"\\e052\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-bootstrap:before {\n  content: \"\\f836\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-nfc-symbol:before {\n  content: \"\\e531\"; }\n\n.fa-mintbit:before {\n  content: \"\\e62f\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-brave-reverse:before {\n  content: \"\\e63d\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-square-google-plus:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-square-xing:before {\n  content: \"\\f169\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-letterboxd:before {\n  content: \"\\e62d\"; }\n\n.fa-symfony:before {\n  content: \"\\f83d\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-bilibili:before {\n  content: \"\\e3d9\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-x-twitter:before {\n  content: \"\\e61b\"; }\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-42-group:before {\n  content: \"\\e080\"; }\n\n.fa-innosoft:before {\n  content: \"\\e080\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-square-pied-piper:before {\n  content: \"\\e01e\"; }\n\n.fa-pied-piper-square:before {\n  content: \"\\e01e\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-tiktok:before {\n  content: \"\\e07b\"; }\n\n.fa-square-facebook:before {\n  content: \"\\f082\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-mixer:before {\n  content: \"\\e056\"; }\n\n.fa-square-lastfm:before {\n  content: \"\\f203\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-cmplid:before {\n  content: \"\\e360\"; }\n\n.fa-upwork:before {\n  content: \"\\e641\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-deezer:before {\n  content: \"\\e077\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-screenpal:before {\n  content: \"\\e570\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-microblog:before {\n  content: \"\\e01a\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-wirsindhandwerk:before {\n  content: \"\\e2d0\"; }\n\n.fa-wsh:before {\n  content: \"\\e2d0\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-salesforce:before {\n  content: \"\\f83b\"; }\n\n.fa-octopus-deploy:before {\n  content: \"\\e082\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-waze:before {\n  content: \"\\f83f\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ab\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-rust:before {\n  content: \"\\e07a\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-square-behance:before {\n  content: \"\\f1b5\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-webflow:before {\n  content: \"\\e65c\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-space-awesome:before {\n  content: \"\\e5ac\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-square-git:before {\n  content: \"\\f1d2\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-square-tumblr:before {\n  content: \"\\f174\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-perbyte:before {\n  content: \"\\e083\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-bots:before {\n  content: \"\\e340\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-ideal:before {\n  content: \"\\e013\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-firefox-browser:before {\n  content: \"\\e007\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-buffer:before {\n  content: \"\\f837\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-yammer:before {\n  content: \"\\f840\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-stubber:before {\n  content: \"\\e5c7\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f2c6\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-odysee:before {\n  content: \"\\e5c6\"; }\n\n.fa-square-whatsapp:before {\n  content: \"\\f40c\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-edge-legacy:before {\n  content: \"\\e078\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f198\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-square-x-twitter:before {\n  content: \"\\e61a\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f23a\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-sitrox:before {\n  content: \"\\e44a\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-airbnb:before {\n  content: \"\\f834\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-buy-n-large:before {\n  content: \"\\f8a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-wodu:before {\n  content: \"\\e088\"; }\n\n.fa-google-pay:before {\n  content: \"\\e079\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-pix:before {\n  content: \"\\e43a\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n:root, :host {\n  --fa-style-family-classic: 'Font Awesome 6 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free'; }\n\n@font-face {\n  font-family: 'Font Awesome 6 Free';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\"); }\n\n.far,\n.fa-regular {\n  font-weight: 400; }\n:root, :host {\n  --fa-style-family-classic: 'Font Awesome 6 Free';\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free'; }\n\n@font-face {\n  font-family: 'Font Awesome 6 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\"); }\n\n.fas,\n.fa-solid {\n  font-weight: 900; }\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-display: block;\n  font-weight: 400;\n  src: url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-display: block;\n  font-weight: 900;\n  src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-display: block;\n  font-weight: 400;\n  src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\"); }\n@font-face {\n  font-family: 'FontAwesome';\n  font-display: block;\n  src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'FontAwesome';\n  font-display: block;\n  src: url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'FontAwesome';\n  font-display: block;\n  src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\");\n  unicode-range: U+F003,U+F006,U+F014,U+F016-F017,U+F01A-F01B,U+F01D,U+F022,U+F03E,U+F044,U+F046,U+F05C-F05D,U+F06E,U+F070,U+F087-F088,U+F08A,U+F094,U+F096-F097,U+F09D,U+F0A0,U+F0A2,U+F0A4-F0A7,U+F0C5,U+F0C7,U+F0E5-F0E6,U+F0EB,U+F0F6-F0F8,U+F10C,U+F114-F115,U+F118-F11A,U+F11C-F11D,U+F133,U+F147,U+F14E,U+F150-F152,U+F185-F186,U+F18E,U+F190-F192,U+F196,U+F1C1-F1C9,U+F1D9,U+F1DB,U+F1E3,U+F1EA,U+F1F7,U+F1F9,U+F20A,U+F247-F248,U+F24A,U+F24D,U+F255-F25B,U+F25D,U+F271-F274,U+F278,U+F27B,U+F28C,U+F28E,U+F29C,U+F2B5,U+F2B7,U+F2BA,U+F2BC,U+F2BE,U+F2C0-F2C1,U+F2C3,U+F2D0,U+F2D2,U+F2D4,U+F2DC; }\n\n@font-face {\n  font-family: 'FontAwesome';\n  font-display: block;\n  src: url(\"../webfonts/fa-v4compatibility.woff2\") format(\"woff2\"), url(\"../webfonts/fa-v4compatibility.ttf\") format(\"truetype\");\n  unicode-range: U+F041,U+F047,U+F065-F066,U+F07D-F07E,U+F080,U+F08B,U+F08E,U+F090,U+F09A,U+F0AC,U+F0AE,U+F0B2,U+F0D0,U+F0D6,U+F0E4,U+F0EC,U+F10A-F10B,U+F123,U+F13E,U+F148-F149,U+F14C,U+F156,U+F15E,U+F160-F161,U+F163,U+F175-F178,U+F195,U+F1F8,U+F219,U+F27A; }\n";
styleInject(css_248z);

var DropDown = function (_a) {
    var options = _a.options, id = _a.id, onSelectedValue = _a.onSelectedValue, onOpened = _a.onOpened, size = _a.size, idOfDropdownOpened = _a.idOfDropdownOpened;
    var _b = React.useState(''), dropdownValue = _b[0], setDropDownValue = _b[1];
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    React.useEffect(function () {
        if (idOfDropdownOpened !== id) {
            setIsOpen(false);
        }
    }, [idOfDropdownOpened]);
    var toggle = function () {
        setIsOpen(function (prevState) {
            var newState = !prevState;
            if (newState === true) {
                onOpened(id);
            }
            return newState;
        });
    };
    var handlerSelectDropDown = function (event) {
        var valueChoose = event.currentTarget.textContent;
        if (valueChoose) {
            onSelectedValue({ id: id, value: valueChoose });
            setDropDownValue(valueChoose);
            toggle();
        }
    };
    return (React.createElement("div", { className: "dropDown__container ".concat(size ? size : "") },
        React.createElement("div", { className: "dropDown__container__input ".concat(isOpen ? 'borderBottomNone' : ''), onClick: toggle },
            React.createElement("div", { className: "dropDown__container__input--value", id: "".concat(id) },
                React.createElement("p", null, dropdownValue),
                React.createElement(FontAwesomeIcon, { icon: isOpen ? faChevronDown : faChevronUp }))),
        React.createElement("div", { className: "dropDown__container__options ".concat(isOpen ? 'supperposition' : 'displayNone') },
            React.createElement("ul", { className: "dropDown__container__options--list" }, options.map(function (_a) {
                var id = _a.id, name = _a.name;
                return React.createElement("li", { onClick: handlerSelectDropDown, key: id }, name);
            })))));
};

exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map
