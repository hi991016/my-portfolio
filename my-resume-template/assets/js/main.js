/* SHOW MENU */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            // add show-menu div tag nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click to each nav__link, remove the class show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* SHOW SCROLL TOP */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) 
        scrollTop.classList.add('show-scroll'); 
    else 
        scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* REDUCE THE SIZE AND PRINT ON AN A4*/
function scaleCv() {
    document.body.classList.add('scale-cv')
}

/* REMOVE SIZE WHEN CV IS DOWNLOAD*/
function removeScale() {
    document.body.classList.remove('scale-cv')
}


/* GENERATED PDF */

// PDF GENERATED AREA
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

//HTML2PDF OPTIONS
let opt = {
    margin:       0,
    filename:     'NguyenVanPhu-CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      dpi: 192,
      scale: 4,
      letterRendering: true,
      useCORS: true
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

// FUNCTION TO CALL AREACV AND HTML2PDF OPTIONS
function generateResume() {
    html2pdf(areaCv, opt)
}

// WEHN THE BUTTON IS CLICKED, IT EXECUTES THE THREE FUNCTIONS
resumeButton.addEventListener('click', () => {
    // 1. class .scale-cv add the .body
    scaleCv()

    // 2. the pdf is generated
    generateResume()

    // 3. the .scale-cv class is remove from the body after 5 second to normal
    setTimeout(removeScale, 3000)
})

// CURSOR
const cursor = document.querySelector("#cursor");
anchor = document.querySelectorAll(".section-title, .home__title, .project__website, .change-theme, .generate-pdf");

document.addEventListener('mousemove', (e) => {
    let x = e.clientX,
        y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

anchor.forEach(anc => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(6)";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
    })
})

const link = document.querySelectorAll('section > .hover-this');

const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 25,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));

// HOVER IMAGE
var getImage1 = document.getElementsByClassName("img-container") [0];
var getImage2 = document.getElementsByClassName("img-container") [1];
var getImage3 = document.getElementsByClassName("img-container") [2];
var getImage4 = document.getElementsByClassName("img-container") [3];
var getImage5 = document.getElementsByClassName("img-container") [4];

function imageIn(img) {
    img.style.opacity = "1";
    img.style.visibility = "visible";
    img.style.transition = "opacity 0.5s ease-in";
}

function imageOut(img) {
    img.style.opacity = "0";
    img.style.visibility = "hidden";
    img.style.transition = "opacity 0.5s ease-in";
}

// OVERLAY

TweenMax.to(".overlay h1", 2.5, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})
TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-150%",
    ease: Expo.easeInOut
})

TweenMax.from(".section-title", 2.5, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".home__data img", 2, {
    delay: 1.5,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".social__container a", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".profile p", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

//home address
TweenMax.staggerFrom(".home__address span", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".home__address a", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".home__data h1", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".home__data h3", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

//project data
TweenMax.staggerFrom(".project__data h3", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)
TweenMax.staggerFrom(".project__data span", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)
TweenMax.staggerFrom(".project__data p", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)
TweenMax.staggerFrom(".project__data a", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".project__rounder", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)
TweenMax.staggerFrom(".project__line", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

//Education
TweenMax.staggerFrom(".education__time span", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".education__data h3", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".education__data span", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

//SKILLS
TweenMax.staggerFrom(".skills__content span", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".skills__content ul li", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

//Content
TweenMax.staggerFrom(".certificate__content", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".languages__content", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".interests__content", 1, {
    delay: 2, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)