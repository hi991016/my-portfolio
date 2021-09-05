let img2 = document.querySelector(".project__img2");
document.addEventListener("mousemove", function (t) {
  if (
    t.x > img2.getBoundingClientRect().x &&
    t.x < img2.getBoundingClientRect().x + img2.getBoundingClientRect().width &&
    t.y > img2.getBoundingClientRect().y &&
    t.y < img2.getBoundingClientRect().y + img2.getBoundingClientRect().height
  ) {
    if (
      t.x > img2.getBoundingClientRect().x &&
      t.x <
        img2.getBoundingClientRect().x + img2.getBoundingClientRect().width / 2
    ) {
      let e =
        (img2.getBoundingClientRect().width / 2 -
          (t.x - img2.getBoundingClientRect().x)) /
        15;
      TweenMax.to(img2, 1, { rotationY: -1 * e });
    }
    if (
      t.x >
        img2.getBoundingClientRect().x +
          img2.getBoundingClientRect().width / 2 &&
      t.x < img2.getBoundingClientRect().x + img2.getBoundingClientRect().width
    ) {
      let e =
        (t.x -
          img2.getBoundingClientRect().x -
          img2.getBoundingClientRect().width / 2) /
        15;
      TweenMax.to(img2, 1, { rotationY: e });
    }
    if (
      t.y > img2.getBoundingClientRect().y &&
      t.y <
        img2.getBoundingClientRect().y + img2.getBoundingClientRect().height / 2
    ) {
      let e =
        (img2.getBoundingClientRect().height / 2 -
          (t.y - img2.getBoundingClientRect().y)) /
        15;
      TweenMax.to(img2, 1, { rotationX: e });
    }
    if (
      t.y >
        img2.getBoundingClientRect().y +
          img2.getBoundingClientRect().height / 2 &&
      t.y < img2.getBoundingClientRect().y + img2.getBoundingClientRect().height
    ) {
      let e =
        (t.y -
          img2.getBoundingClientRect().y -
          img2.getBoundingClientRect().height / 2) /
        15;
      TweenMax.to(img2, 1, { rotationX: -1 * e });
    }
  } else TweenMax.to(img2, 2, { rotationX: 0 }), TweenMax.to(img2, 2, { rotationY: 0 });
});
let img3 = document.querySelector(".project__img3");
document.addEventListener("mousemove", function (t) {
  if (
    t.x > img3.getBoundingClientRect().x &&
    t.x < img3.getBoundingClientRect().x + img3.getBoundingClientRect().width &&
    t.y > img3.getBoundingClientRect().y &&
    t.y < img3.getBoundingClientRect().y + img3.getBoundingClientRect().height
  ) {
    if (
      t.x > img3.getBoundingClientRect().x &&
      t.x <
        img3.getBoundingClientRect().x + img3.getBoundingClientRect().width / 2
    ) {
      let e =
        (img3.getBoundingClientRect().width / 2 -
          (t.x - img3.getBoundingClientRect().x)) /
        15;
      TweenMax.to(img3, 1, { rotationY: -1 * e });
    }
    if (
      t.x >
        img3.getBoundingClientRect().x +
          img3.getBoundingClientRect().width / 2 &&
      t.x < img3.getBoundingClientRect().x + img3.getBoundingClientRect().width
    ) {
      let e =
        (t.x -
          img3.getBoundingClientRect().x -
          img3.getBoundingClientRect().width / 2) /
        15;
      TweenMax.to(img3, 1, { rotationY: e });
    }
    if (
      t.y > img3.getBoundingClientRect().y &&
      t.y <
        img3.getBoundingClientRect().y + img3.getBoundingClientRect().height / 2
    ) {
      let e =
        (img3.getBoundingClientRect().height / 2 -
          (t.y - img3.getBoundingClientRect().y)) /
        15;
      TweenMax.to(img3, 1, { rotationX: e });
    }
    if (
      t.y >
        img3.getBoundingClientRect().y +
          img3.getBoundingClientRect().height / 2 &&
      t.y < img3.getBoundingClientRect().y + img3.getBoundingClientRect().height
    ) {
      let e =
        (t.y -
          img3.getBoundingClientRect().y -
          img3.getBoundingClientRect().height / 2) /
        15;
      TweenMax.to(img3, 1, { rotationX: -1 * e });
    }
  } else TweenMax.to(img3, 2, { rotationX: 0 }), TweenMax.to(img3, 2, { rotationY: 0 });
});
let img4 = document.querySelector(".project__img4");
document.addEventListener("mousemove", function (t) {
  if (
    t.x > img4.getBoundingClientRect().x &&
    t.x < img4.getBoundingClientRect().x + img4.getBoundingClientRect().width &&
    t.y > img4.getBoundingClientRect().y &&
    t.y < img4.getBoundingClientRect().y + img4.getBoundingClientRect().height
  ) {
    if (
      t.x > img4.getBoundingClientRect().x &&
      t.x <
        img4.getBoundingClientRect().x + img4.getBoundingClientRect().width / 2
    ) {
      let e =
        (img4.getBoundingClientRect().width / 2 -
          (t.x - img4.getBoundingClientRect().x)) /
        15;
      TweenMax.to(img4, 1, { rotationY: -1 * e });
    }
    if (
      t.x >
        img4.getBoundingClientRect().x +
          img4.getBoundingClientRect().width / 2 &&
      t.x < img4.getBoundingClientRect().x + img4.getBoundingClientRect().width
    ) {
      let e =
        (t.x -
          img4.getBoundingClientRect().x -
          img4.getBoundingClientRect().width / 2) /
        15;
      TweenMax.to(img4, 1, { rotationY: e });
    }
    if (
      t.y > img4.getBoundingClientRect().y &&
      t.y <
        img4.getBoundingClientRect().y + img4.getBoundingClientRect().height / 2
    ) {
      let e =
        (img4.getBoundingClientRect().height / 2 -
          (t.y - img4.getBoundingClientRect().y)) /
        15;
      TweenMax.to(img4, 1, { rotationX: e });
    }
    if (
      t.y >
        img4.getBoundingClientRect().y +
          img4.getBoundingClientRect().height / 2 &&
      t.y < img4.getBoundingClientRect().y + img4.getBoundingClientRect().height
    ) {
      let e =
        (t.y -
          img4.getBoundingClientRect().y -
          img4.getBoundingClientRect().height / 2) /
        15;
      TweenMax.to(img4, 1, { rotationX: -1 * e });
    }
  } else TweenMax.to(img4, 2, { rotationX: 0 }), TweenMax.to(img4, 2, { rotationY: 0 });
});
let mail = document.querySelector(".footer__mail");
document.addEventListener("mousemove", function (t) {
  if (
    t.x > mail.getBoundingClientRect().x &&
    t.x < mail.getBoundingClientRect().x + mail.getBoundingClientRect().width &&
    t.y > mail.getBoundingClientRect().y &&
    t.y < mail.getBoundingClientRect().y + mail.getBoundingClientRect().height
  ) {
    if (
      t.x > mail.getBoundingClientRect().x &&
      t.x <
        mail.getBoundingClientRect().x + mail.getBoundingClientRect().width / 2
    ) {
      let e =
        (mail.getBoundingClientRect().width / 2 -
          (t.x - mail.getBoundingClientRect().x)) /
        17;
      TweenMax.to(mail, 1, { rotationY: -1 * e });
    }
    if (
      t.x >
        mail.getBoundingClientRect().x +
          mail.getBoundingClientRect().width / 2 &&
      t.x < mail.getBoundingClientRect().x + mail.getBoundingClientRect().width
    ) {
      let e =
        (t.x -
          mail.getBoundingClientRect().x -
          mail.getBoundingClientRect().width / 2) /
        17;
      TweenMax.to(mail, 1, { rotationY: e });
    }
    if (
      t.y > mail.getBoundingClientRect().y &&
      t.y <
        mail.getBoundingClientRect().y + mail.getBoundingClientRect().height / 2
    ) {
      let e =
        (mail.getBoundingClientRect().height / 2 -
          (t.y - mail.getBoundingClientRect().y)) /
        17;
      TweenMax.to(mail, 1, { rotationX: e });
    }
    if (
      t.y >
        mail.getBoundingClientRect().y +
          mail.getBoundingClientRect().height / 2 &&
      t.y < mail.getBoundingClientRect().y + mail.getBoundingClientRect().height
    ) {
      let e =
        (t.y -
          mail.getBoundingClientRect().y -
          mail.getBoundingClientRect().height / 2) /
        17;
      TweenMax.to(img, 1, { rotationX: -1 * e });
    }
  } else TweenMax.to(mail, 2, { rotationX: 0 }), TweenMax.to(mail, 2, { rotationY: 0 });
});
