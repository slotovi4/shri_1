/* Event handling "click" on the button ".header-mobile-btn": animate button & show/hide mobile menu */

const menu = <HTMLElement>document.querySelector(".Header-Menu");
const menuBtn = <HTMLElement>document.querySelector(".HeaderMobileBtn");
const menuBtnLine = document.querySelectorAll(".HeaderMobileBtn-Line");

/* Set Initial State Of Menu */
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("Header-Menu_show");
    menuBtn.classList.add("HeaderMobileBtn_close");
    menuBtnLine.forEach(item =>
      item.classList.add("HeaderMobileBtn-Line_close")
    );

    /* Set Menu State */
    showMenu = true;
  } else {
    menu.classList.remove("Header-Menu_show");
    menuBtn.classList.remove("HeaderMobileBtn_close");
    menuBtnLine.forEach(item =>
      item.classList.remove("HeaderMobileBtn-Line_close")
    );

    /* Set Menu State */
    showMenu = false;
  }
}
