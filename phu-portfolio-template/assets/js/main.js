// CURSOR
const cursor = document.querySelector("#cursor");
anchor = document.querySelectorAll(
  ".nav__logo, .nav__link, .home__data, .footer__phone, .footer__mail, .project__img, .project__img2, .project__img3, .project__img4, .about__container-contact-link"
);

anchor2 = document.querySelectorAll(".home__data");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX,
    y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(4.5)";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
  });
});

anchor2.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(9)";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
  });
});

const link = document.querySelectorAll(
  "nav > .hover-this, .home__container > .hover-this"
);

const animateit = function (e) {
  const span = this.querySelector("span");

  const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,
    move = 35,
    xMove = (x / width) * (move * 2) - move,
    yMove = (y / height) * (move * 2) - move;

  span.style.transform = `translate(${xMove}px, ${yMove}px)`;

  if (e.type === "mouseleave") span.style.transform = "";
};

link.forEach((b) => b.addEventListener("mousemove", animateit));
link.forEach((b) => b.addEventListener("mouseleave", animateit));

// ANIMATION ON IMAGE
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
      let valueXLeft =
        (img.getBoundingClientRect().width / 2 -
          (e.x - img.getBoundingClientRect().x)) /
        15;
      TweenMax.to(img, 1, { rotationY: -1 * valueXLeft });
    }

    if (
      e.x >
        img.getBoundingClientRect().x + img.getBoundingClientRect().width / 2 &&
      e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width
    ) {
      let valueXRight =
        (e.x -
          img.getBoundingClientRect().x -
          img.getBoundingClientRect().width / 2) /
        15;
      TweenMax.to(img, 1, { rotationY: valueXRight });
    }

    if (
      e.y > img.getBoundingClientRect().y &&
      e.y <
        img.getBoundingClientRect().y + img.getBoundingClientRect().height / 2
    ) {
      let valueYTop =
        (img.getBoundingClientRect().height / 2 -
          (e.y - img.getBoundingClientRect().y)) /
        15;
      TweenMax.to(img, 1, { rotationX: valueYTop });
    }

    if (
      e.y >
        img.getBoundingClientRect().y +
          img.getBoundingClientRect().height / 2 &&
      e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height
    ) {
      let valueXBottom =
        (e.y -
          img.getBoundingClientRect().y -
          img.getBoundingClientRect().height / 2) /
        15;
      TweenMax.to(img, 1, { rotationX: -1 * valueXBottom });
    }
  } else {
    TweenMax.to(img, 2, { rotationX: 0 });
    TweenMax.to(img, 2, { rotationY: 0 });
  }
});

// CURSOR HOVER VIEW
$(document).ready(function () {
  let seeMoreHover = new TimelineMax({ paused: true })
    .to("#cursor", 0, { scale: 4.5 })
    .to(".more", 0, { opacity: 1, color: "#000" });

  $(".col-lg-8").each(function (i, el) {
    let imgHoverTl = new TimelineMax({ paused: true });
    imgHoverTl.to($(this).find(".more img"), 0, { opacity: 1 });
    el.animation = imgHoverTl;
  });

  $(".col-lg-8").hover(
    function () {
      this.animation.play();
      seeMoreHover.play();
    },
    function () {
      this.animation.reverse();
      seeMoreHover.reverse();
    }
  );
});

// OVERLAY
TweenMax.to(".overlay", 2.45, {
  delay: 3,
  top: "-150%",
  ease: Expo.easeInOut,
});

// smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll-index"),
  smooth: true,
  smoothMobile: true,
  inertia: 0.75,
});
