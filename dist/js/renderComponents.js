(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvVideoBlock = CanvVideoBlock;
exports.Footer = Footer;
exports.Header = void 0;

var _classname = require("@bem-react/classname");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cnCanvVideoBlock = (0, _classname.cn)('CanvVideoBlock');

function CanvVideoBlock(props) {
  var videos = props.videos;
  var videoContent = [React.createElement("h1", {
    className: "Container-Title"
  }, "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435")];
  var sections = Object.keys(videos).map(function (key) {
    return React.createElement("section", {
      className: cnCanvVideoBlock(),
      key: key,
      id: videos[key].id + "-block"
    }, React.createElement("video", {
      className: "Container-Video",
      id: videos[key].id,
      poster: "img/yandex.jpg",
      controls: "controls",
      loop: "loop",
      muted: true,
      autoPlay: true
    }), React.createElement("div", {
      className: cnCanvVideoBlock('CanvasBlock')
    }, React.createElement("span", {
      className: cnCanvVideoBlock('Info')
    }), React.createElement("div", {
      className: cnCanvVideoBlock('SoundVolume')
    }), React.createElement("canvas", {
      className: cnCanvVideoBlock('Video')
    }), React.createElement("canvas", {
      className: cnCanvVideoBlock('CanvasMove')
    }), React.createElement("div", {
      className: cnCanvVideoBlock('ControllBlock')
    }, React.createElement("span", {
      className: cnCanvVideoBlock('Text')
    }, "\u042F\u0440\u043A\u043E\u0441\u0442\u044C"), React.createElement("input", {
      className: cnCanvVideoBlock('Luminance'),
      type: "range",
      defaultValue: "5",
      min: "0",
      max: "10"
    }), React.createElement("span", {
      className: cnCanvVideoBlock('Text')
    }, "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442"), React.createElement("input", {
      className: cnCanvVideoBlock('Contrast'),
      type: "range",
      defaultValue: "1",
      min: "1",
      max: "5"
    }), React.createElement("span", {
      className: cnCanvVideoBlock('Button')
    }, "\u0412\u0441\u0435 \u043A\u0430\u043C\u0435\u0440\u044B"), React.createElement("div", {
      className: cnCanvVideoBlock('SoundMute')
    }, "\u266A"))));
  });
  videoContent.push(sections);
  return videoContent;
}

var cnFooter = (0, _classname.cn)('Footer');

function Footer() {
  return React.createElement("div", {
    className: cnFooter()
  }, React.createElement("div", {
    className: cnFooter('LeftSection')
  }, React.createElement("a", {
    href: "#",
    className: cnFooter('Text')
  }, "\u041F\u043E\u043C\u043E\u0449\u044C"), React.createElement("a", {
    href: "#",
    className: cnFooter('Text')
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"), React.createElement("a", {
    href: "#",
    className: cnFooter('Text')
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C"), React.createElement("a", {
    href: "#",
    className: cnFooter('Text')
  }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"), React.createElement("a", {
    href: "license.pdf",
    className: cnFooter('Text')
  }, "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430")), React.createElement("div", {
    className: cnFooter('RightSection')
  }, React.createElement("span", {
    className: cnFooter('Text')
  }, "\xA9 2001\u20132017 \u041E\u041E\u041E \xAB\u042F\u043D\u0434\u0435\u043A\u0441\xBB")));
}

var cnHeader = (0, _classname.cn)('Header');
var cnHeaderMobileBtn = (0, _classname.cn)('HeaderMobileBtn');

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: cnHeader()
      }, React.createElement("div", {
        className: cnHeader('Logo')
      }), React.createElement("div", {
        className: cnHeader('Menu')
      }, React.createElement("a", {
        className: cnHeader('Link', {
          active: true
        }),
        "data-page-title": "\u041B\u0435\u043D\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439",
        "data-page": "events.json",
        href: "#"
      }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"), React.createElement("a", {
        className: cnHeader('Link'),
        href: "#"
      }, "\u0421\u0432\u043E\u0434\u043A\u0430"), React.createElement("a", {
        className: cnHeader('Link'),
        href: "#"
      }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), React.createElement("a", {
        className: cnHeader('Link'),
        href: "#"
      }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), React.createElement("a", {
        className: cnHeader('Link'),
        "data-page-title": "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",
        "data-page": "videos.json",
        href: "#"
      }, "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435")), React.createElement("div", {
        className: cnHeaderMobileBtn()
      }, React.createElement("div", {
        className: cnHeaderMobileBtn('Line')
      }), React.createElement("div", {
        className: cnHeaderMobileBtn('Line')
      }), React.createElement("div", {
        className: cnHeaderMobileBtn('Line')
      })));
    }
  }]);

  return Header;
}(React.Component);

exports.Header = Header;

},{"@bem-react/classname":5}],2:[function(require,module,exports){
"use strict";

var _reactComponents = require("./reactComponents");

/* Render */
ReactDOM.render(React.createElement(_reactComponents.Header, null), document.querySelector('header'));
ReactDOM.render(React.createElement(_reactComponents.Footer, null), document.querySelector('footer'));
var request = new XMLHttpRequest();
request.open("GET", '/dist/data/videos.json', false);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var videos = data.videos;
    ReactDOM.render(React.createElement(_reactComponents.CanvVideoBlock, {
      videos: videos
    }), document.querySelector('.Container'));
  } else {
    throw "Error: data not received";
  }
};

request.send();

if (request.status != 200) {
  alert(request.status + ": " + request.statusText);
}

},{"./reactComponents":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk_naming_entity_stringify = require('@bem/sdk.naming.entity.stringify');

var react = {
    delims: {
        elem: '-',
        mod: {
            name: '_',
            val: '_',
        },
    },
    fs: {
        pattern: '${entity}${layer?@${layer}}.${tech}',
        scheme: 'nested',
        delims: { elem: '' },
    },
    wordPattern: '[a-zA-Z0-9]+',
};
function withNaming(preset) {
    var naming = sdk_naming_entity_stringify.stringifyWrapper(preset);
    var stringify = function (entities) {
        return classnames.apply(classnames, entities.map(function (entity) { return typeof entity === 'string' ? entity : naming(entity); }).filter(Boolean));
    };
    var modsToEntities = function (block, elem, mods) {
        var entities = [{ block: block, elem: elem }];
        mods && Object.keys(mods).forEach(function (name) {
            if (mods[name] || mods[name] === 0) {
                entities.push({ block: block, elem: elem, mod: {
                        name: name,
                        val: mods[name] === true ? true : String(mods[name]),
                    } });
            }
        });
        return entities;
    };
    return function (blockName, elemName) { return (function (elemOrBlockMods, elemModsOrBlockMix, elemMix) {
        return typeof elemOrBlockMods === 'string'
            ? Array.isArray(elemModsOrBlockMix)
                ? stringify(modsToEntities(blockName, elemOrBlockMods).concat(elemModsOrBlockMix))
                : stringify(modsToEntities(blockName, elemOrBlockMods, elemModsOrBlockMix).concat(elemMix))
            : Array.isArray(elemModsOrBlockMix)
                ? stringify(modsToEntities(blockName, elemName, elemOrBlockMods).concat(elemModsOrBlockMix))
                : stringify(modsToEntities(blockName, elemName, elemOrBlockMods).concat(elemMix));
    }); };
}
var cn = withNaming(react);
var classnames = function () {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    var className = '';
    var uniqueCache = new Set();
    var classNameList = strings.join(' ').split(' ');
    for (var _a = 0, classNameList_1 = classNameList; _a < classNameList_1.length; _a++) {
        var value = classNameList_1[_a];
        if (value === '' || uniqueCache.has(value)) {
            continue;
        }
        uniqueCache.add(value);
        className += " " + value;
    }
    return className.trim();
};

exports.withNaming = withNaming;
exports.cn = cn;
exports.classnames = classnames;

},{"@bem/sdk.naming.entity.stringify":6}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var sdk_naming_entity_stringify=require("@bem/sdk.naming.entity.stringify"),react={delims:{elem:"-",mod:{name:"_",val:"_"}},fs:{pattern:"${entity}${layer?@${layer}}.${tech}",scheme:"nested",delims:{elem:""}},wordPattern:"[a-zA-Z0-9]+"};function withNaming(n){var e=sdk_naming_entity_stringify.stringifyWrapper(n),i=function(n){return classnames.apply(classnames,n.map(function(n){return"string"==typeof n?n:e(n)}).filter(Boolean))},s=function(e,t,r){var a=[{block:e,elem:t}];return r&&Object.keys(r).forEach(function(n){(r[n]||0===r[n])&&a.push({block:e,elem:t,mod:{name:n,val:!0===r[n]||String(r[n])}})}),a};return function(r,a){return function(n,e,t){return"string"==typeof n?Array.isArray(e)?i(s(r,n).concat(e)):i(s(r,n,e).concat(t)):Array.isArray(e)?i(s(r,a,n).concat(e)):i(s(r,a,n).concat(t))}}}var cn=withNaming(react),classnames=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t="",r=new Set,a=0,i=n.join(" ").split(" ");a<i.length;a++){var s=i[a];""===s||r.has(s)||(r.add(s),t+=" "+s)}return t.trim()};exports.withNaming=withNaming,exports.cn=cn,exports.classnames=classnames;

},{"@bem/sdk.naming.entity.stringify":6}],5:[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./build/cjs/classname.production.min.js');
} else {
    module.exports = require('./build/cjs/classname.development.js');
}

}).call(this,require('_process'))

},{"./build/cjs/classname.development.js":3,"./build/cjs/classname.production.min.js":4,"_process":7}],6:[function(require,module,exports){
'use strict';

/**
 * Forms a string according to object representation of BEM entity.
 *
 * @param {Object|BemEntityName} entity - object representation of BEM entity.
 * @param {INamingConventionDelims} delims - separates entity names from each other.
 * @returns {String}
 */
function stringify(entity, delims) {
    if (!entity || !entity.block) {
        return '';
    }

    var res = [entity.block];

    if (entity.elem !== undefined) {
        res.push(delims.elem, entity.elem);
    }

    var mod = entity.mod;
    if (mod !== undefined) {
        var val = mod.val;
        if (typeof mod === 'string') {
            res.push(delims.mod.name, mod);
        } else if (val || !('val' in mod)) {
            res.push(delims.mod.name, mod.name);

            if (val && val !== true) {
                res.push(delims.mod.val, val);
            }
        }
    }

    return res.join('');
}

/**
 * Creates `stringify` function for specified naming convention.
 *
 * @param {INamingConvention} convention - options for naming convention.
 * @returns {Function}
 */
function stringifyWrapper(convention) {
    // TODO: https://github.com/bem/bem-sdk/issues/326
    // console.assert(convention.delims && convention.delims.elem && convention.delims.mod,
    //     '@bem/sdk.naming.entity.stringify: convention should be an instance of BemNamingEntityConvention');
    return function (entity) {
        return stringify(entity, convention.delims);
    };
}

module.exports = stringifyWrapper;
module.exports.stringifyWrapper = stringifyWrapper;

},{}],7:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9yZWFjdENvbXBvbmVudHMuanMiLCJhcHAvY29tcG9uZW50cy9yZW5kZXJDb21wb25lbnRzLmpzIiwibm9kZV9tb2R1bGVzL0BiZW0tcmVhY3QvY2xhc3NuYW1lL2J1aWxkL2Nqcy9jbGFzc25hbWUuZGV2ZWxvcG1lbnQuanMiLCJub2RlX21vZHVsZXMvQGJlbS1yZWFjdC9jbGFzc25hbWUvYnVpbGQvY2pzL2NsYXNzbmFtZS5wcm9kdWN0aW9uLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy9AYmVtLXJlYWN0L2NsYXNzbmFtZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AYmVtL3Nkay5uYW1pbmcuZW50aXR5LnN0cmluZ2lmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLGdCQUFnQixHQUFHLG1CQUFHLGdCQUFILENBQXpCOztBQUVPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUFBLE1BQzFCLE1BRDBCLEdBQ2YsS0FEZSxDQUMxQixNQUQwQjtBQUVsQyxNQUFNLFlBQVksR0FBRyxDQUFDO0FBQUksSUFBQSxTQUFLLEVBQUM7QUFBVixrR0FBRCxDQUFyQjtBQUVBLE1BQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksTUFBWixFQUFvQixHQUFwQixDQUF3QixVQUFVLEdBQVYsRUFBZTtBQUNsRCxXQUFRO0FBQVMsTUFBQSxTQUFTLEVBQUUsZ0JBQWdCLEVBQXBDO0FBQXdDLE1BQUEsR0FBRyxFQUFFLEdBQTdDO0FBQWtELE1BQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWSxFQUFaLEdBQWlCO0FBQXZFLE9BQ0o7QUFBTyxNQUFBLFNBQVMsRUFBQyxpQkFBakI7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBjbiB9IGZyb20gJ0BiZW0tcmVhY3QvY2xhc3NuYW1lJztcclxuY29uc3QgY25DYW52VmlkZW9CbG9jayA9IGNuKCdDYW52VmlkZW9CbG9jaycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhbnZWaWRlb0Jsb2NrKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHZpZGVvcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB2aWRlb0NvbnRlbnQgPSBbPGgxIGNsYXNzPVwiQ29udGFpbmVyLVRpdGxlXCI+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1PC9oMT5dO1xyXG5cclxuICAgIGxldCBzZWN0aW9ucyA9IE9iamVjdC5rZXlzKHZpZGVvcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gKDxzZWN0aW9uIGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygpfSBrZXk9e2tleX0gaWQ9e3ZpZGVvc1trZXldLmlkICsgXCItYmxvY2tcIn0+XHJcbiAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJDb250YWluZXItVmlkZW9cIiBpZD17dmlkZW9zW2tleV0uaWR9IHBvc3Rlcj1cImltZy95YW5kZXguanBnXCIgY29udHJvbHM9XCJjb250cm9sc1wiIGxvb3A9XCJsb29wXCIgbXV0ZWQgYXV0b1BsYXkgPjwvdmlkZW8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkNhbnZWaWRlb0Jsb2NrKCdDYW52YXNCbG9jaycpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnSW5mbycpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnU291bmRWb2x1bWUnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnVmlkZW8nKX0+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnQ2FudmFzTW92ZScpfT48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkNhbnZWaWRlb0Jsb2NrKCdDb250cm9sbEJsb2NrJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnVGV4dCcpfT7Qr9GA0LrQvtGB0YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbkNhbnZWaWRlb0Jsb2NrKCdMdW1pbmFuY2UnKX0gdHlwZT1cInJhbmdlXCIgZGVmYXVsdFZhbHVlPVwiNVwiIG1pbj1cIjBcIiBtYXg9XCIxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbkNhbnZWaWRlb0Jsb2NrKCdUZXh0Jyl9PtCa0L7QvdGC0YDQsNGB0YI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y25DYW52VmlkZW9CbG9jaygnQ29udHJhc3QnKX0gdHlwZT1cInJhbmdlXCIgZGVmYXVsdFZhbHVlPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuQ2FudlZpZGVvQmxvY2soJ0J1dHRvbicpfT7QktGB0LUg0LrQsNC80LXRgNGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkNhbnZWaWRlb0Jsb2NrKCdTb3VuZE11dGUnKX0+4pmqPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPilcclxuICAgIH0pO1xyXG5cclxuICAgIHZpZGVvQ29udGVudC5wdXNoKHNlY3Rpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdmlkZW9Db250ZW50XHJcbn1cclxuXHJcblxuY29uc3QgY25Gb290ZXIgPSBjbignRm9vdGVyJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25Gb290ZXIoKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkZvb3RlcignTGVmdFNlY3Rpb24nKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17Y25Gb290ZXIoJ1RleHQnKX0+0J/QvtC80L7RidGMPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2NuRm9vdGVyKCdUZXh0Jyl9PtCe0LHRgNCw0YLQvdCw0Y8g0YHQstGP0LfRjDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtjbkZvb3RlcignVGV4dCcpfT7QoNCw0LfRgNCw0LHQvtGC0YfQuNC60LDQvDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtjbkZvb3RlcignVGV4dCcpfT7Qo9GB0LvQvtCy0LjRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjzwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJsaWNlbnNlLnBkZlwiIGNsYXNzTmFtZT17Y25Gb290ZXIoJ1RleHQnKX0+0JDQstGC0L7RgNGB0LrQuNC1INC/0YDQsNCy0LA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25Gb290ZXIoJ1JpZ2h0U2VjdGlvbicpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25Gb290ZXIoJ1RleHQnKX0+wqkgMjAwMeKAkzIwMTcg0J7QntCeIMKr0K/QvdC00LXQutGBwrs8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5jb25zdCBjbkhlYWRlciA9IGNuKCdIZWFkZXInKTtcclxuY29uc3QgY25IZWFkZXJNb2JpbGVCdG4gPSBjbignSGVhZGVyTW9iaWxlQnRuJyk7XHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkhlYWRlcigpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkhlYWRlcignTG9nbycpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkhlYWRlcignTWVudScpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NuSGVhZGVyKCdMaW5rJywgeyBhY3RpdmU6IHRydWUgfSl9IGRhdGEtcGFnZS10aXRsZT1cItCb0LXQvdGC0LAg0YHQvtCx0YvRgtC40LlcIiBkYXRhLXBhZ2U9XCJldmVudHMuanNvblwiIGhyZWY9XCIjXCI+0KHQvtCx0YvRgtC40Y88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbkhlYWRlcignTGluaycpfSBocmVmPVwiI1wiPtCh0LLQvtC00LrQsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NuSGVhZGVyKCdMaW5rJyl9IGhyZWY9XCIjXCI+0KPRgdGC0YDQvtC50YHRgtCy0LA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbkhlYWRlcignTGluaycpfSBocmVmPVwiI1wiPtCh0YbQtdC90LDRgNC40Lg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbkhlYWRlcignTGluaycpfSBkYXRhLXBhZ2UtdGl0bGU9XCLQktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LVcIiBkYXRhLXBhZ2U9XCJ2aWRlb3MuanNvblwiIGhyZWY9XCIjXCI+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25IZWFkZXJNb2JpbGVCdG4oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuSGVhZGVyTW9iaWxlQnRuKCdMaW5lJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbkhlYWRlck1vYmlsZUJ0bignTGluZScpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25IZWFkZXJNb2JpbGVCdG4oJ0xpbmUnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCB7IEhlYWRlciwgRm9vdGVyLCBDYW52VmlkZW9CbG9jayB9IGZyb20gJy4vcmVhY3RDb21wb25lbnRzJztcclxuXHJcbi8qIFJlbmRlciAqL1xyXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlciAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xyXG5SZWFjdERPTS5yZW5kZXIoPEZvb3RlciAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykpO1xyXG5cclxuXHJcbmxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbnJlcXVlc3Qub3BlbihcIkdFVFwiLCAnL2Rpc3QvZGF0YS92aWRlb3MuanNvbicsIGZhbHNlKTtcclxuXHJcbnJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICBsZXQgdmlkZW9zID0gZGF0YS52aWRlb3M7XHJcblxyXG4gICAgUmVhY3RET00ucmVuZGVyKDxDYW52VmlkZW9CbG9jayB2aWRlb3M9e3ZpZGVvc30gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db250YWluZXInKSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBcIkVycm9yOiBkYXRhIG5vdCByZWNlaXZlZFwiO1xyXG4gIH1cclxufTtcclxuXHJcbnJlcXVlc3Quc2VuZCgpO1xyXG5cclxuaWYgKHJlcXVlc3Quc3RhdHVzICE9IDIwMCkge1xyXG4gIGFsZXJ0KHJlcXVlc3Quc3RhdHVzICsgXCI6IFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0KTtcclxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNka19uYW1pbmdfZW50aXR5X3N0cmluZ2lmeSA9IHJlcXVpcmUoJ0BiZW0vc2RrLm5hbWluZy5lbnRpdHkuc3RyaW5naWZ5Jyk7XG5cbnZhciByZWFjdCA9IHtcclxuICAgIGRlbGltczoge1xyXG4gICAgICAgIGVsZW06ICctJyxcclxuICAgICAgICBtb2Q6IHtcclxuICAgICAgICAgICAgbmFtZTogJ18nLFxyXG4gICAgICAgICAgICB2YWw6ICdfJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZzOiB7XHJcbiAgICAgICAgcGF0dGVybjogJyR7ZW50aXR5fSR7bGF5ZXI/QCR7bGF5ZXJ9fS4ke3RlY2h9JyxcclxuICAgICAgICBzY2hlbWU6ICduZXN0ZWQnLFxyXG4gICAgICAgIGRlbGltczogeyBlbGVtOiAnJyB9LFxyXG4gICAgfSxcclxuICAgIHdvcmRQYXR0ZXJuOiAnW2EtekEtWjAtOV0rJyxcclxufTtcclxuZnVuY3Rpb24gd2l0aE5hbWluZyhwcmVzZXQpIHtcclxuICAgIHZhciBuYW1pbmcgPSBzZGtfbmFtaW5nX2VudGl0eV9zdHJpbmdpZnkuc3RyaW5naWZ5V3JhcHBlcihwcmVzZXQpO1xyXG4gICAgdmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIChlbnRpdGllcykge1xyXG4gICAgICAgIHJldHVybiBjbGFzc25hbWVzLmFwcGx5KGNsYXNzbmFtZXMsIGVudGl0aWVzLm1hcChmdW5jdGlvbiAoZW50aXR5KSB7IHJldHVybiB0eXBlb2YgZW50aXR5ID09PSAnc3RyaW5nJyA/IGVudGl0eSA6IG5hbWluZyhlbnRpdHkpOyB9KS5maWx0ZXIoQm9vbGVhbikpO1xyXG4gICAgfTtcclxuICAgIHZhciBtb2RzVG9FbnRpdGllcyA9IGZ1bmN0aW9uIChibG9jaywgZWxlbSwgbW9kcykge1xyXG4gICAgICAgIHZhciBlbnRpdGllcyA9IFt7IGJsb2NrOiBibG9jaywgZWxlbTogZWxlbSB9XTtcclxuICAgICAgICBtb2RzICYmIE9iamVjdC5rZXlzKG1vZHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKG1vZHNbbmFtZV0gfHwgbW9kc1tuYW1lXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZW50aXRpZXMucHVzaCh7IGJsb2NrOiBibG9jaywgZWxlbTogZWxlbSwgbW9kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbW9kc1tuYW1lXSA9PT0gdHJ1ZSA/IHRydWUgOiBTdHJpbmcobW9kc1tuYW1lXSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbnRpdGllcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJsb2NrTmFtZSwgZWxlbU5hbWUpIHsgcmV0dXJuIChmdW5jdGlvbiAoZWxlbU9yQmxvY2tNb2RzLCBlbGVtTW9kc09yQmxvY2tNaXgsIGVsZW1NaXgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1PckJsb2NrTW9kcyA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGVsZW1Nb2RzT3JCbG9ja01peClcclxuICAgICAgICAgICAgICAgID8gc3RyaW5naWZ5KG1vZHNUb0VudGl0aWVzKGJsb2NrTmFtZSwgZWxlbU9yQmxvY2tNb2RzKS5jb25jYXQoZWxlbU1vZHNPckJsb2NrTWl4KSlcclxuICAgICAgICAgICAgICAgIDogc3RyaW5naWZ5KG1vZHNUb0VudGl0aWVzKGJsb2NrTmFtZSwgZWxlbU9yQmxvY2tNb2RzLCBlbGVtTW9kc09yQmxvY2tNaXgpLmNvbmNhdChlbGVtTWl4KSlcclxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGVsZW1Nb2RzT3JCbG9ja01peClcclxuICAgICAgICAgICAgICAgID8gc3RyaW5naWZ5KG1vZHNUb0VudGl0aWVzKGJsb2NrTmFtZSwgZWxlbU5hbWUsIGVsZW1PckJsb2NrTW9kcykuY29uY2F0KGVsZW1Nb2RzT3JCbG9ja01peCkpXHJcbiAgICAgICAgICAgICAgICA6IHN0cmluZ2lmeShtb2RzVG9FbnRpdGllcyhibG9ja05hbWUsIGVsZW1OYW1lLCBlbGVtT3JCbG9ja01vZHMpLmNvbmNhdChlbGVtTWl4KSk7XHJcbiAgICB9KTsgfTtcclxufVxyXG52YXIgY24gPSB3aXRoTmFtaW5nKHJlYWN0KTtcclxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RyaW5ncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBzdHJpbmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gJyc7XHJcbiAgICB2YXIgdW5pcXVlQ2FjaGUgPSBuZXcgU2V0KCk7XHJcbiAgICB2YXIgY2xhc3NOYW1lTGlzdCA9IHN0cmluZ3Muam9pbignICcpLnNwbGl0KCcgJyk7XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIGNsYXNzTmFtZUxpc3RfMSA9IGNsYXNzTmFtZUxpc3Q7IF9hIDwgY2xhc3NOYW1lTGlzdF8xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGNsYXNzTmFtZUxpc3RfMVtfYV07XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB1bmlxdWVDYWNoZS5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bmlxdWVDYWNoZS5hZGQodmFsdWUpO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzTmFtZS50cmltKCk7XHJcbn07XG5cbmV4cG9ydHMud2l0aE5hbWluZyA9IHdpdGhOYW1pbmc7XG5leHBvcnRzLmNuID0gY247XG5leHBvcnRzLmNsYXNzbmFtZXMgPSBjbGFzc25hbWVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHNka19uYW1pbmdfZW50aXR5X3N0cmluZ2lmeT1yZXF1aXJlKFwiQGJlbS9zZGsubmFtaW5nLmVudGl0eS5zdHJpbmdpZnlcIikscmVhY3Q9e2RlbGltczp7ZWxlbTpcIi1cIixtb2Q6e25hbWU6XCJfXCIsdmFsOlwiX1wifX0sZnM6e3BhdHRlcm46XCIke2VudGl0eX0ke2xheWVyP0Ake2xheWVyfX0uJHt0ZWNofVwiLHNjaGVtZTpcIm5lc3RlZFwiLGRlbGltczp7ZWxlbTpcIlwifX0sd29yZFBhdHRlcm46XCJbYS16QS1aMC05XStcIn07ZnVuY3Rpb24gd2l0aE5hbWluZyhuKXt2YXIgZT1zZGtfbmFtaW5nX2VudGl0eV9zdHJpbmdpZnkuc3RyaW5naWZ5V3JhcHBlcihuKSxpPWZ1bmN0aW9uKG4pe3JldHVybiBjbGFzc25hbWVzLmFwcGx5KGNsYXNzbmFtZXMsbi5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG4/bjplKG4pfSkuZmlsdGVyKEJvb2xlYW4pKX0scz1mdW5jdGlvbihlLHQscil7dmFyIGE9W3tibG9jazplLGVsZW06dH1dO3JldHVybiByJiZPYmplY3Qua2V5cyhyKS5mb3JFYWNoKGZ1bmN0aW9uKG4peyhyW25dfHwwPT09cltuXSkmJmEucHVzaCh7YmxvY2s6ZSxlbGVtOnQsbW9kOntuYW1lOm4sdmFsOiEwPT09cltuXXx8U3RyaW5nKHJbbl0pfX0pfSksYX07cmV0dXJuIGZ1bmN0aW9uKHIsYSl7cmV0dXJuIGZ1bmN0aW9uKG4sZSx0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2Ygbj9BcnJheS5pc0FycmF5KGUpP2kocyhyLG4pLmNvbmNhdChlKSk6aShzKHIsbixlKS5jb25jYXQodCkpOkFycmF5LmlzQXJyYXkoZSk/aShzKHIsYSxuKS5jb25jYXQoZSkpOmkocyhyLGEsbikuY29uY2F0KHQpKX19fXZhciBjbj13aXRoTmFtaW5nKHJlYWN0KSxjbGFzc25hbWVzPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKW5bZV09YXJndW1lbnRzW2VdO2Zvcih2YXIgdD1cIlwiLHI9bmV3IFNldCxhPTAsaT1uLmpvaW4oXCIgXCIpLnNwbGl0KFwiIFwiKTthPGkubGVuZ3RoO2ErKyl7dmFyIHM9aVthXTtcIlwiPT09c3x8ci5oYXMocyl8fChyLmFkZChzKSx0Kz1cIiBcIitzKX1yZXR1cm4gdC50cmltKCl9O2V4cG9ydHMud2l0aE5hbWluZz13aXRoTmFtaW5nLGV4cG9ydHMuY249Y24sZXhwb3J0cy5jbGFzc25hbWVzPWNsYXNzbmFtZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2J1aWxkL2Nqcy9jbGFzc25hbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2J1aWxkL2Nqcy9jbGFzc25hbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBGb3JtcyBhIHN0cmluZyBhY2NvcmRpbmcgdG8gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIEJFTSBlbnRpdHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QmVtRW50aXR5TmFtZX0gZW50aXR5IC0gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIEJFTSBlbnRpdHkuXG4gKiBAcGFyYW0ge0lOYW1pbmdDb252ZW50aW9uRGVsaW1zfSBkZWxpbXMgLSBzZXBhcmF0ZXMgZW50aXR5IG5hbWVzIGZyb20gZWFjaCBvdGhlci5cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeShlbnRpdHksIGRlbGltcykge1xuICAgIGlmICghZW50aXR5IHx8ICFlbnRpdHkuYmxvY2spIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciByZXMgPSBbZW50aXR5LmJsb2NrXTtcblxuICAgIGlmIChlbnRpdHkuZWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcy5wdXNoKGRlbGltcy5lbGVtLCBlbnRpdHkuZWxlbSk7XG4gICAgfVxuXG4gICAgdmFyIG1vZCA9IGVudGl0eS5tb2Q7XG4gICAgaWYgKG1vZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB2YWwgPSBtb2QudmFsO1xuICAgICAgICBpZiAodHlwZW9mIG1vZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGRlbGltcy5tb2QubmFtZSwgbW9kKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgfHwgISgndmFsJyBpbiBtb2QpKSB7XG4gICAgICAgICAgICByZXMucHVzaChkZWxpbXMubW9kLm5hbWUsIG1vZC5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChkZWxpbXMubW9kLnZhbCwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuam9pbignJyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBgc3RyaW5naWZ5YCBmdW5jdGlvbiBmb3Igc3BlY2lmaWVkIG5hbWluZyBjb252ZW50aW9uLlxuICpcbiAqIEBwYXJhbSB7SU5hbWluZ0NvbnZlbnRpb259IGNvbnZlbnRpb24gLSBvcHRpb25zIGZvciBuYW1pbmcgY29udmVudGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5V3JhcHBlcihjb252ZW50aW9uKSB7XG4gICAgLy8gVE9ETzogaHR0cHM6Ly9naXRodWIuY29tL2JlbS9iZW0tc2RrL2lzc3Vlcy8zMjZcbiAgICAvLyBjb25zb2xlLmFzc2VydChjb252ZW50aW9uLmRlbGltcyAmJiBjb252ZW50aW9uLmRlbGltcy5lbGVtICYmIGNvbnZlbnRpb24uZGVsaW1zLm1vZCxcbiAgICAvLyAgICAgJ0BiZW0vc2RrLm5hbWluZy5lbnRpdHkuc3RyaW5naWZ5OiBjb252ZW50aW9uIHNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZiBCZW1OYW1pbmdFbnRpdHlDb252ZW50aW9uJyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeShlbnRpdHksIGNvbnZlbnRpb24uZGVsaW1zKTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVdyYXBwZXI7XG5tb2R1bGUuZXhwb3J0cy5zdHJpbmdpZnlXcmFwcGVyID0gc3RyaW5naWZ5V3JhcHBlcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
