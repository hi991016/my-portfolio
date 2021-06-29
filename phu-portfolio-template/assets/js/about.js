// CURSOR
const cursor = document.querySelector("#cursor");

anchor = document.querySelectorAll(
  ".nav__logo, .nav__link, .about__container-contact-link"
);

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

const link = document.querySelectorAll("nav > .hover-this");

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

// smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll"),
  smooth: true,
  smoothMobile: true,
  inertia: 0.75,
});

//div following mouse
TweenMax.from(".cursor-follow", 2, {
  delay: 1,
  opacity: 0,
});

follower = document.querySelector(".cursor-follow");

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 40,
        top: posY - 40,
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  },
});

// OVERPLAY
TweenMax.to(".overlay h1", 2.5, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});
TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-150%",
  ease: Expo.easeInOut,
});
