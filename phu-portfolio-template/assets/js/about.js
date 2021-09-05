const cursor = document.querySelector("#cursor");
(anchor = document.querySelectorAll(
  ".nav__logo, .nav__link, .about__container-contact-link, .about__container--download, .footer__link"
)),
  document.addEventListener("mousemove", (e) => {
    let o = e.clientX,
      t = e.clientY;
    (cursor.style.left = `${o}px`), (cursor.style.top = `${t}px`);
  }),
  anchor.forEach((e) => {
    e.addEventListener("mouseover", () => {
      cursor.style.transform = "scale(4.5)";
    }),
      e.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
      });
  });
const link = document.querySelectorAll("nav > .hover-this"),
  animateit = function (e) {
    const o = this.querySelector("span"),
      { offsetX: t, offsetY: s } = e,
      { offsetWidth: n, offsetHeight: r } = this,
      a = (t / n) * 70 - 35,
      l = (s / r) * 70 - 35;
    (o.style.transform = `translate(${a}px, ${l}px)`),
      "mouseleave" === e.type && (o.style.transform = "");
  };
link.forEach((e) => e.addEventListener("mousemove", animateit)),
  link.forEach((e) => e.addEventListener("mouseleave", animateit));
const scroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll-about"),
  smooth: !0,
  smoothMobile: !0,
  inertia: 0.75,
});
TweenMax.from(".cursor-follow", 2, { delay: 1, opacity: 0 }),
  (follower = document.querySelector(".cursor-follow")),
  (posX = 0),
  (posY = 0),
  (mouseX = 0),
  (mouseY = 0),
  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      (posX += (mouseX - posX) / 9),
        (posY += (mouseY - posY) / 9),
        TweenMax.set(follower, { css: { left: posX - 40, top: posY - 40 } }),
        document.addEventListener("mousemove", function (e) {
          (mouseX = e.pageX), (mouseY = e.pageY);
        });
    },
  }),
  TweenMax.to(".overlay h1", 2.5, { opacity: 0, y: -60, ease: Expo.easeInOut }),
  TweenMax.to(".overlay", 2, { delay: 1, top: "-150%", ease: Expo.easeInOut });
