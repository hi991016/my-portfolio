$(document).ready(function () {
  /*===== MENU SHOW/HIDDEN =====*/
  const navMenu = $("#nav-menu"),
    navToggle = $(".btnmenu");

  navToggle.on("click", () => {
    navToggle.toggleClass("open");
    navMenu.toggleClass("show-menu");
  });

  $(window).on("resize", (e) => {
    if (window.innerWidth < 768) {
      navToggle.removeClass("open");
      navMenu.removeClass("show-menu");
    }
  });
  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = $(".menu__link");
  navLink.on("click", () => {
    navToggle.removeClass("open");
    navMenu.removeClass("show-menu");
  });

  // scroll bar
  $(window).on("load", () => {
    const scrollBar = $(".scrollbar");
    $(window).on("scroll", function () {
      let scrollY = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      scrollBar.css("width", (scrollY / height) * 100 + "%");
    });
  });
});
