(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;
exports.Header = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Footer() {
  return React.createElement("div", {
    className: "Footer"
  }, React.createElement("div", {
    className: "Footer-LeftSection"
  }, React.createElement("a", {
    href: "#",
    className: "Footer-Text"
  }, "\u041F\u043E\u043C\u043E\u0449\u044C"), React.createElement("a", {
    href: "#",
    className: "Footer-Text"
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"), React.createElement("a", {
    href: "#",
    className: "Footer-Text"
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C"), React.createElement("a", {
    href: "#",
    className: "Footer-Text"
  }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"), React.createElement("a", {
    href: "license.pdf",
    className: "Footer-Text"
  }, "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430")), React.createElement("div", {
    className: "Footer-RightSection"
  }, React.createElement("span", {
    className: "Footer-Text"
  }, "\xA9 2001\u20132017 \u041E\u041E\u041E \xAB\u042F\u043D\u0434\u0435\u043A\u0441\xBB")));
}

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
        className: "Header"
      }, React.createElement("div", {
        className: "Header-Logo"
      }), React.createElement("div", {
        className: "Header-Menu"
      }, React.createElement("a", {
        className: "Header-Link Header-Link_active",
        "data-page-title": "\u041B\u0435\u043D\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439",
        "data-page": "events.json",
        href: "#"
      }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"), React.createElement("a", {
        className: "Header-Link",
        href: "#"
      }, "\u0421\u0432\u043E\u0434\u043A\u0430"), React.createElement("a", {
        className: "Header-Link",
        href: "#"
      }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), React.createElement("a", {
        className: "Header-Link",
        href: "#"
      }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"), React.createElement("a", {
        className: "Header-Link",
        "data-page-title": "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",
        "data-page": "videos.json",
        href: "#"
      }, "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435")), React.createElement("div", {
        className: "HeaderMobileBtn"
      }, React.createElement("div", {
        className: "HeaderMobileBtn-Line"
      }), React.createElement("div", {
        className: "HeaderMobileBtn-Line"
      }), React.createElement("div", {
        className: "HeaderMobileBtn-Line"
      })));
    }
  }]);

  return Header;
}(React.Component);

exports.Header = Header;

},{}],2:[function(require,module,exports){
"use strict";

var _reactComponents = require("./reactComponents");

ReactDOM.render(React.createElement(_reactComponents.Header, null), document.querySelector('header'));
ReactDOM.render(React.createElement(_reactComponents.Footer, null), document.querySelector('footer'));

},{"./reactComponents":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9yZWFjdENvbXBvbmVudHMuanMiLCJhcHAvY29tcG9uZW50cy9yZW5kZXJDb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxTQUFTLE1BQVQsR0FBa0I7QUFDckIsU0FDSTtBQUFLLElBQUEsU0FBSyxFQUFDO0FBQVgsS0FDSTtBQUFLLElBQUEsU0FBSyxFQUFDO0FBQVgsS0FDSTtBQUFHLElBQUEsSUFBSSxFQUFDLEdBQVI7QUFBWSxJQUFBLFNBQUssRUFBQztBQUFsQiw0Q0FESixFQUVJO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUFZLElBQUEsU0FBSyxFQUFDO0FBQWxCLHVGQUZKLEVBR0k7QUFBRyxJQUFBLElBQUksRUFBQyxHQUFSO0FBQVksSUFBQSxTQUFLLEVBQUM7QUFBbEIsc0ZBSEosRUFJSTtBQUFHLElBQUEsSUFBSSxFQUFDLEdBQVI7QUFBWSxJQUFBLFNBQUssRUFBQztBQUFsQixpSUFKSixFQUtJO0FBQUcsSUFBQSxJQUFJLEVBQUMsYUFBUjtBQUFzQixJQUFBLFNBQUssRUFBQztBQUE1Qiw2RkFMSixDQURKLEVBUUk7QUFBSyxJQUFBLFNBQUssRUFBQztBQUFYLEtBQ0k7QUFBTSxJQUFBLFNBQUssRUFBQztBQUFaLDJGQURKLENBUkosQ0FESjtBQWNIOztJQUNZLE07Ozs7Ozs7Ozs7Ozs7NkJBQ0E7QUFDTCxhQUNJO0FBQUssUUFBQSxTQUFLLEVBQUM7QUFBWCxTQUNJO0FBQUssUUFBQSxTQUFLLEVBQUM7QUFBWCxRQURKLEVBRUk7QUFBSyxRQUFBLFNBQUssRUFBQztBQUFYLFNBQ0k7QUFBRyxRQUFBLFNBQUssRUFBQyxnQ0FBVDtBQUEwQywyQkFBZ0IsMkVBQTFEO0FBQTBFLHFCQUFVLGFBQXBGO0FBQWtHLFFBQUEsSUFBSSxFQUFDO0FBQXZHLHNEQURKLEVBRUk7QUFBRyxRQUFBLFNBQUssRUFBQyxhQUFUO0FBQXVCLFFBQUEsSUFBSSxFQUFDO0FBQTVCLGdEQUZKLEVBR0k7QUFBRyxRQUFBLFNBQUssRUFBQyxhQUFUO0FBQXVCLFFBQUEsSUFBSSxFQUFDO0FBQTVCLHdFQUhKLEVBSUk7QUFBRyxRQUFBLFNBQUssRUFBQyxhQUFUO0FBQXVCLFFBQUEsSUFBSSxFQUFDO0FBQTVCLDREQUpKLEVBS0k7QUFBRyxRQUFBLFNBQUssRUFBQyxhQUFUO0FBQXVCLDJCQUFnQiw0RkFBdkM7QUFBeUQscUJBQVUsYUFBbkU7QUFBaUYsUUFBQSxJQUFJLEVBQUM7QUFBdEYsc0dBTEosQ0FGSixFQVNJO0FBQUssUUFBQSxTQUFLLEVBQUM7QUFBWCxTQUNJO0FBQUssUUFBQSxTQUFLLEVBQUM7QUFBWCxRQURKLEVBRUk7QUFBSyxRQUFBLFNBQUssRUFBQztBQUFYLFFBRkosRUFHSTtBQUFLLFFBQUEsU0FBSyxFQUFDO0FBQVgsUUFISixDQVRKLENBREo7QUFpQkg7Ozs7RUFuQnVCLEtBQUssQ0FBQyxTOzs7Ozs7O0FDaEJsQzs7QUFFQSxRQUFRLENBQUMsTUFBVCxDQUFnQixvQkFBQyx1QkFBRCxPQUFoQixFQUE0QixRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUE1QjtBQUNBLFFBQVEsQ0FBQyxNQUFULENBQWdCLG9CQUFDLHVCQUFELE9BQWhCLEVBQTRCLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQTVCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIkZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRm9vdGVyLUxlZnRTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiRm9vdGVyLVRleHRcIj7Qn9C+0LzQvtGJ0Yw8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiRm9vdGVyLVRleHRcIj7QntCx0YDQsNGC0L3QsNGPINGB0LLRj9C30Yw8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiRm9vdGVyLVRleHRcIj7QoNCw0LfRgNCw0LHQvtGC0YfQuNC60LDQvDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJGb290ZXItVGV4dFwiPtCj0YHQu9C+0LLQuNGPINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImxpY2Vuc2UucGRmXCIgY2xhc3M9XCJGb290ZXItVGV4dFwiPtCQ0LLRgtC+0YDRgdC60LjQtSDQv9GA0LDQstCwPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkZvb3Rlci1SaWdodFNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRm9vdGVyLVRleHRcIj7CqSAyMDAx4oCTMjAxNyDQntCe0J4gwqvQr9C90LTQtdC60YHCuzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJIZWFkZXItTG9nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkhlYWRlci1NZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJIZWFkZXItTGluayBIZWFkZXItTGlua19hY3RpdmVcIiBkYXRhLXBhZ2UtdGl0bGU9XCLQm9C10L3RgtCwINGB0L7QsdGL0YLQuNC5XCIgZGF0YS1wYWdlPVwiZXZlbnRzLmpzb25cIiBocmVmPVwiI1wiPtCh0L7QsdGL0YLQuNGPPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiSGVhZGVyLUxpbmtcIiBocmVmPVwiI1wiPtCh0LLQvtC00LrQsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIkhlYWRlci1MaW5rXCIgaHJlZj1cIiNcIj7Qo9GB0YLRgNC+0LnRgdGC0LLQsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIkhlYWRlci1MaW5rXCIgaHJlZj1cIiNcIj7QodGG0LXQvdCw0YDQuNC4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiSGVhZGVyLUxpbmtcIiBkYXRhLXBhZ2UtdGl0bGU9XCLQktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LVcIiBkYXRhLXBhZ2U9XCJ2aWRlb3MuanNvblwiIGhyZWY9XCIjXCI+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiSGVhZGVyTW9iaWxlQnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkhlYWRlck1vYmlsZUJ0bi1MaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkhlYWRlck1vYmlsZUJ0bi1MaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkhlYWRlck1vYmlsZUJ0bi1MaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIgfSBmcm9tICcuL3JlYWN0Q29tcG9uZW50cyc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEhlYWRlciAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xyXG5SZWFjdERPTS5yZW5kZXIoPEZvb3RlciAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykpOyJdfQ==
