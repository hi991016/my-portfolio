/*===== MENU SHOW/HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.querySelector(".btnmenu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navMenu.classList.toggle("show-menu");
});

window.addEventListener("resize", function (e) {
  if (window.innerWidth < 768) {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("open");
  }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".menu__link");
function linkAction() {
  // When we click on each menu__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("open");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let menus = document.querySelectorAll("header .menu a");
let sectionHeight = document.querySelector("header").offsetHeight;
let sectionId = [];

function removeActiveMenu() {
  menus.forEach(function (ele, id) {
    ele.classList.remove("--active");
  });
}
menus.forEach(function (ele, id) {
  let cl = ele.getAttribute("href").replace("#", "");
  let sections = document.querySelector("." + cl);
  sectionId.push(sections);

  ele.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('href', href)
    console.log("sections", sections);
    let posSection = sections.offsetTop;
    window.scrollTo({
      top: posSection - sectionHeight + 1,
      behavior: "smooth",
    });

    removeActiveMenu();
    ele.classList.add("--active");
  });
});

window.addEventListener("scroll", function () {
  let posScroll = window.pageYOffset;
  // console.log("sectionId", sectionId);
  sectionId.forEach(function (section, id) {
    // if (
    //   posScroll > section.offsetTop - sectionHeight &&
    //   posScroll < section.offsetTop + section.offsetHeight
    // ) {
    if (posScroll > section.offsetTop - sectionHeight) {
      removeActiveMenu();
      menus[id].classList.add("--active");
    } else {
      menus[id].classList.remove("--active");
    }
  });
});

let posProduct = document.querySelector(".products").offsetTop;
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  // if (this.scrollY >= posProduct) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// scroll top
function showScroll() {
  const showScroll = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) showScroll.classList.add("show-scroll");
  // if (this.scrollY >= posProduct) showScroll.classList.add("show-scroll");
  else showScroll.classList.remove("show-scroll");
}
window.addEventListener("scroll", showScroll);

let scrollTop = document.querySelector(".scrolltop");
let backTop = document.querySelector(".footer__back");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// lang
let lang = document.querySelector(".lang");
let langCurrent = document.querySelector(".lang .lang__current span");
let langItems = document.querySelectorAll(".lang .lang__option a");
lang.addEventListener("click", function (e) {
  e.stopPropagation();
  lang.classList.toggle("active-lang");
});

langItems.forEach(function (e) {
  e.addEventListener("click", function () {
    let text = this.textContent;
    let current = langCurrent.textContent;
    langCurrent.innerHTML = text;
    this.innerHTML = current;
  });
});

document.addEventListener("click", function () {
  lang.classList.remove("active-lang");
});

// popup video
let video = document.querySelectorAll(".play");
let popup_video = document.querySelector(".popup-video");
let close_popup = document.querySelector(".popup-video .close");
let iframe = document.querySelector(".popup-video iframe");

video.forEach(function (e) {
  e.addEventListener("click", function () {
    let id = e.getAttribute("data-video-src");
    console.log("id", id);
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        id +
        "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
    );
    popup_video.style.display = "flex";
  });
});

close_popup.addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popup_video.style.display = "none";
});

document.querySelector(".popup-video").addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popup_video.style.display = "none";
});

// slider
// let slider = document.querySelectorAll(".slider__item");
// let curSlide = 0;
// console.log("slider", slider);

// // num page
// let numPage = document.querySelector(".slider__left .pagenumber");
// console.log("numPage", curSlide + 1);

// // dot
// let dot = document.querySelectorAll(".slider__left .dot li");
// console.log("dot", dot);

// slider.forEach(function (e, i) {
//   if (e.classList.contains("active-slider")) {
//     console.log("i", i);
//     curSlide = i;
//   }
//   console.log("curSlide", curSlide);
// });

// function showNumber(value) {
//   numPage.innerHTML = value.toString().padStart(2, "0");
// }

// // default dot
// showNumber(curSlide + 1);
// dot[curSlide].classList.add("active-dot");

// // ---- SLIDER NEXT
// document
//   .querySelector(".btn-arrow.--next")
//   .addEventListener("click", function () {
//     // check current slide < total slider else back to 0
//     if (curSlide < slider.length - 1) {
//       slideGoTo(curSlide + 1);
//     } else {
//       slideGoTo(0);
//     }
//   });

// // ---- SLIDER PREV
// document
//   .querySelector(".btn-arrow.--prev")
//   .addEventListener("click", function () {
//     if (curSlide > 0) {
//       slideGoTo(curSlide - 1);
//     } else {
//       slideGoTo(slider.length - 1);
//     }
//   });

// function slideGoTo(value) {
//   slider[curSlide].classList.remove("active-slider");
//   slider[value].classList.add("active-slider");

//   dot[curSlide].classList.remove("active-dot");
//   dot[value].classList.add("active-dot");

//   curSlide = value;
//   showNumber(curSlide + 1);
// }

// dot.forEach(function (e, i) {
//   e.addEventListener("click", function () {
//     slideGoTo(i);
//   });
// });

// slide libary
let $carousel = $(".slider__item-wrap");
$carousel.flickity({
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  on: {
    ready: function () {
      let dotted = $(".flickity-page-dots");
      paging = $(".slider__bottom-paging .dotted ");
      dotted.appendTo(paging);
    },
    change: function (index) {
      let number = $(".slider__bottom-paging .number");
      let indexPage = index + 1;
      let a = indexPage.toString();
      number.text(a.padStart(2, 0));
    },
  },
});

// previous
$(".slider__right .--prev").on("click", function () {
  $carousel.flickity("previous");
});
// next
$(".slider__right .--next").on("click", function () {
  $carousel.flickity("next");
});

// news
const newBtn = document.querySelectorAll(".news__button .btn");
const newData = document.querySelectorAll(".news__data");

newBtn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let id = index + 1;
    newBtn.forEach(function (item) {
      item.classList.remove("active");
    });
    newData.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    document.querySelector(".news__data" + id).classList.add("active");
  });
});

// accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// popup image
var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

// scroll bar
window.addEventListener("load", () => {
  initPhotoSwipeFromDOM(".gallery__data");
  console.log("initPhotoSwipeFromDOM", initPhotoSwipeFromDOM);
  const scrollBar = document.querySelector(".scrollbar");
  window.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollBar.style.width = (scrollY / height) * 100 + "%";
  });
});

// $(window).load(function () {
//   initPhotoSwipeFromDOM(".carousel-img");
// });

let $carousel1 = $(".photos__list");
$carousel1.flickity({
  cellAlign: "left",
  freeScroll: true,
  pageDots: false,
  lazyLoad: 4,
  prevNextButtons: false,
  contain: true,
  fullscreen: true,
});

// --progressBar photo---------
$carousel1.on("scroll.flickity", function (event, progress) {
  // console.log('Flickity scrolled ' + progress * 100 + '%')
  $(".time__line").css("width", progress * 100 + "%");
});
