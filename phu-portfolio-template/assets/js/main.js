const cursor = document.querySelector("#cursor");
(anchor = document.querySelectorAll(
  ".nav__logo, .nav__link, .home__data, .footer__phone, .footer__mail, .project__img, .project__img2, .project__img3, .project__img4, .about__container-contact-link, .footer__link"
)),
  (anchor2 = document.querySelectorAll(".home__data")),
  document.addEventListener("mousemove", (e) => {
    let t = e.clientX,
      n = e.clientY;
    (cursor.style.left = `${t}px`), (cursor.style.top = `${n}px`);
  }),
  anchor.forEach((e) => {
    e.addEventListener("mouseover", () => {
      cursor.style.transform = "scale(4.5)";
    }),
      e.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
      });
  }),
  anchor2.forEach((e) => {
    e.addEventListener("mouseover", () => {
      cursor.style.transform = "scale(9)";
    }),
      e.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
      });
  });
const link = document.querySelectorAll(
    "nav > .hover-this, .home__container > .hover-this"
  ),
  animateit = function (e) {
    const t = this.querySelector("span"),
      { offsetX: n, offsetY: i } = e,
      { offsetWidth: o, offsetHeight: g } = this,
      l = (n / o) * 70 - 35,
      c = (i / g) * 70 - 35;
    (t.style.transform = `translate(${l}px, ${c}px)`),
      "mouseleave" === e.type && (t.style.transform = "");
  };
link.forEach((e) => e.addEventListener("mousemove", animateit)),
  link.forEach((e) => e.addEventListener("mouseleave", animateit));
let img = document.querySelector(".project__img");
document.addEventListener("mousemove", function (e) {
  if (
    e.x > img.getBoundingClientRect().x &&
    e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width &&
    e.y > img.getBoundingClientRect().y &&
    e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height
  ) {
    if (
      e.x > img.getBoundingClientRect().x &&
      e.x <
        img.getBoundingClientRect().x + img.getBoundingClientRect().width / 2
    ) {
      let t =
        (img.getBoundingClientRect().width / 2 -
          (e.x - img.getBoundingClientRect().x)) /
        15;
      TweenMax.to(img, 1, { rotationY: -1 * t });
    }
    if (
      e.x >
        img.getBoundingClientRect().x + img.getBoundingClientRect().width / 2 &&
      e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width
    ) {
      let t =
        (e.x -
          img.getBoundingClientRect().x -
          img.getBoundingClientRect().width / 2) /
        15;
      TweenMax.to(img, 1, { rotationY: t });
    }
    if (
      e.y > img.getBoundingClientRect().y &&
      e.y <
        img.getBoundingClientRect().y + img.getBoundingClientRect().height / 2
    ) {
      let t =
        (img.getBoundingClientRect().height / 2 -
          (e.y - img.getBoundingClientRect().y)) /
        15;
      TweenMax.to(img, 1, { rotationX: t });
    }
    if (
      e.y >
        img.getBoundingClientRect().y +
          img.getBoundingClientRect().height / 2 &&
      e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height
    ) {
      let t =
        (e.y -
          img.getBoundingClientRect().y -
          img.getBoundingClientRect().height / 2) /
        15;
      TweenMax.to(img, 1, { rotationX: -1 * t });
    }
  } else TweenMax.to(img, 2, { rotationX: 0 }), TweenMax.to(img, 2, { rotationY: 0 });
}),
  $(document).ready(function () {
    let e = new TimelineMax({ paused: !0 })
      .to("#cursor", 0, { scale: 4.5 })
      .to(".more", 0, { opacity: 1, color: "#000" });
    $(".col-lg-8").each(function (e, t) {
      let n = new TimelineMax({ paused: !0 });
      n.to($(this).find(".more img"), 0, { opacity: 1 }), (t.animation = n);
    }),
      $(".col-lg-8").hover(
        function () {
          this.animation.play(), e.play();
        },
        function () {
          this.animation.reverse(), e.reverse();
        }
      );
  }),
  TweenMax.to(".overlay-bg", 2.5, {
    delay: 2.8,
    top: "-150%",
    ease: Expo.easeInOut,
  });
const scroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll-index"),
  smooth: !0,
  smoothMobile: !0,
  inertia: 0.75,
});
