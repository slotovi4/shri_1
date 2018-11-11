function Header() {
  return React.createElement("div", {
    className: "Header"
  }, React.createElement("div", {
    className: "Header-Logo"
  }), React.createElement("div", {
    className: "Header-Menu"
  }, React.createElement("a", {
    className: "Header-Link Header-Link_active",
    "data-page-title": "Лента событий",
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
    "data-page-title": "Видеонаблюдение",
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

ReactDOM.render(React.createElement(Header, null), document.querySelector('header'));