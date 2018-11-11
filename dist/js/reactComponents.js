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

ReactDOM.render(React.createElement(Footer, null), document.querySelector('footer'));
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