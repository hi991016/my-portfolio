const cursor = document.querySelector("#cursor");
(anchor = document.querySelectorAll(
  ".nav__logo, .nav__link, .project__image, .projectWork-next-link, .project__container-link"
)),
  document.addEventListener("mousemove", (e) => {
    let t = e.clientX,
      o = e.clientY;
    (cursor.style.left = `${t}px`), (cursor.style.top = `${o}px`);
  }),
  anchor.forEach((e) => {
    e.addEventListener("mouseover", () => {
      cursor.style.transform = "scale(4.5)";
    }),
      e.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
      });
  });
const link = document.querySelectorAll(
    "nav > .hover-this, .project__container > .hover-this"
  ),
  animateit = function (e) {
    const t = this.querySelector("span"),
      { offsetX: o, offsetY: r } = e,
      { offsetWidth: n, offsetHeight: a } = this,
      s = (o / n) * 70 - 35,
      l = (r / a) * 70 - 35;
    (t.style.transform = `translate(${s}px, ${l}px)`),
      "mouseleave" === e.type && (t.style.transform = "");
  };
link.forEach((e) => e.addEventListener("mousemove", animateit)),
  link.forEach((e) => e.addEventListener("mouseleave", animateit));
var textWrapper = document.querySelector(".anime-js-title");
(textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)),
  anime.timeline().add({
    targets: ".anime-js-title .letter",
    translateY: [60, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (e, t) => 600 + 30 * t,
  }),
  TweenMax.from(".project__container-subtitle", 2, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
  }),
  TweenMax.from(".project__image-1", 2, { opacity: 0, ease: Expo.easeInOut }),
  TweenMax.to(".overlay h1", 2.5, { opacity: 0, y: -60, ease: Expo.easeInOut }),
  TweenMax.to(".overlay", 2, { delay: 1, top: "-150%", ease: Expo.easeInOut });
const scroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll-project"),
  smooth: !0,
  smoothMobile: !0,
  inertia: 0.75,
});
