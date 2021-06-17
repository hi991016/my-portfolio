// CURSOR
const cursor = document.querySelector("#cursor");

anchor = document.querySelectorAll(".nav__logo, .nav__link, .project__image, .projectWork1-next-link, .projectWork2-next-link, .projectWork3-next-link, .projectWork4-next-link, .project__container-link");

document.addEventListener('mousemove', (e) => {
    let x = e.clientX,
        y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

anchor.forEach(anc => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(4.5)";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
    })
})

const link = document.querySelectorAll('nav > .hover-this, .project__container > .hover-this');

const animateit = function (e) {
    const span = this.querySelector('span');

    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 35,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));

const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});

// project title animation 
var textWrapper = document.querySelector('.anime-js-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.anime-js-title .letter',
        translateY: [60, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 600 + 30 * i
    });
    
// project subtitle animation 
TweenMax.from(".project__container-subtitle", 2, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

// project image fade 
TweenMax.from(".project__image-1", 2, {
    opacity: 0,
    ease: Expo.easeInOut
});