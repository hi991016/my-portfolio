// IMAGE 2
let img2 = document.querySelector('.project__img2');

document.addEventListener("mousemove", function (e) {
    if (
        e.x > img2.getBoundingClientRect().x
        && e.x < img2.getBoundingClientRect().x + img2.getBoundingClientRect().width
        && e.y > img2.getBoundingClientRect().y
        && e.y < img2.getBoundingClientRect().y + img2.getBoundingClientRect().height
    ) {
        if (
            e.x > img2.getBoundingClientRect().x
            && e.x < img2.getBoundingClientRect().x + (img2.getBoundingClientRect().width/2)
        ) {
            let valueXLeft = (img2.getBoundingClientRect().width/2 - (e.x - img2.getBoundingClientRect().x))/15;
            TweenMax.to(img2, 1, {rotationY: -1 * valueXLeft})
        }

        if (
            e.x > img2.getBoundingClientRect().x + (img2.getBoundingClientRect().width/2)
            && e.x < img2.getBoundingClientRect().x + (img2.getBoundingClientRect().width)
        ) {
            let valueXRight = (e.x - img2.getBoundingClientRect().x - img2.getBoundingClientRect().width/2)/15;
            TweenMax.to(img2, 1, {rotationY: valueXRight})
        }

        if (
            e.y > img2.getBoundingClientRect().y
            && e.y < img2.getBoundingClientRect().y + (img2.getBoundingClientRect().height/2)
        ) {
            let valueYTop = (img2.getBoundingClientRect().height/2 - (e.y - img2.getBoundingClientRect().y))/15;
            TweenMax.to(img2, 1, {rotationX: valueYTop})
        }

        if (
            e.y > img2.getBoundingClientRect().y + (img2.getBoundingClientRect().height/2)
            && e.y < img2.getBoundingClientRect().y + (img2.getBoundingClientRect().height)
        ) {
            let valueXBottom = (e.y - img2.getBoundingClientRect().y - img2.getBoundingClientRect().height/2)/15;
            TweenMax.to(img2, 1, {rotationX: -1 * valueXBottom})
        }
    }
    else {
        TweenMax.to(img2, 2, {rotationX: 0})
        TweenMax.to(img2, 2, {rotationY: 0})
    }
})

// IMAGE 3
let img3 = document.querySelector('.project__img3');

document.addEventListener("mousemove", function (e) {
    if (
        e.x > img3.getBoundingClientRect().x
        && e.x < img3.getBoundingClientRect().x + img3.getBoundingClientRect().width
        && e.y > img3.getBoundingClientRect().y
        && e.y < img3.getBoundingClientRect().y + img3.getBoundingClientRect().height
    ) {
        if (
            e.x > img3.getBoundingClientRect().x
            && e.x < img3.getBoundingClientRect().x + (img3.getBoundingClientRect().width/2)
        ) {
            let valueXLeft = (img3.getBoundingClientRect().width/2 - (e.x - img3.getBoundingClientRect().x))/15;
            TweenMax.to(img3, 1, {rotationY: -1 * valueXLeft})
        }

        if (
            e.x > img3.getBoundingClientRect().x + (img3.getBoundingClientRect().width/2)
            && e.x < img3.getBoundingClientRect().x + (img3.getBoundingClientRect().width)
        ) {
            let valueXRight = (e.x - img3.getBoundingClientRect().x - img3.getBoundingClientRect().width/2)/15;
            TweenMax.to(img3, 1, {rotationY: valueXRight})
        }

        if (
            e.y > img3.getBoundingClientRect().y
            && e.y < img3.getBoundingClientRect().y + (img3.getBoundingClientRect().height/2)
        ) {
            let valueYTop = (img3.getBoundingClientRect().height/2 - (e.y - img3.getBoundingClientRect().y))/15;
            TweenMax.to(img3, 1, {rotationX: valueYTop})
        }

        if (
            e.y > img3.getBoundingClientRect().y + (img3.getBoundingClientRect().height/2)
            && e.y < img3.getBoundingClientRect().y + (img3.getBoundingClientRect().height)
        ) {
            let valueXBottom = (e.y - img3.getBoundingClientRect().y - img3.getBoundingClientRect().height/2)/15;
            TweenMax.to(img3, 1, {rotationX: -1 * valueXBottom})
        }
    }
    else {
        TweenMax.to(img3, 2, {rotationX: 0})
        TweenMax.to(img3, 2, {rotationY: 0})
    }
})

// IMAGE 4
let img4 = document.querySelector('.project__img4');

document.addEventListener("mousemove", function (e) {
    if (
        e.x > img4.getBoundingClientRect().x
        && e.x < img4.getBoundingClientRect().x + img4.getBoundingClientRect().width
        && e.y > img4.getBoundingClientRect().y
        && e.y < img4.getBoundingClientRect().y + img4.getBoundingClientRect().height
    ) {
        if (
            e.x > img4.getBoundingClientRect().x
            && e.x < img4.getBoundingClientRect().x + (img4.getBoundingClientRect().width/2)
        ) {
            let valueXLeft = (img4.getBoundingClientRect().width/2 - (e.x - img4.getBoundingClientRect().x))/15;
            TweenMax.to(img4, 1, {rotationY: -1 * valueXLeft})
        }

        if (
            e.x > img4.getBoundingClientRect().x + (img4.getBoundingClientRect().width/2)
            && e.x < img4.getBoundingClientRect().x + (img4.getBoundingClientRect().width)
        ) {
            let valueXRight = (e.x - img4.getBoundingClientRect().x - img4.getBoundingClientRect().width/2)/15;
            TweenMax.to(img4, 1, {rotationY: valueXRight})
        }

        if (
            e.y > img4.getBoundingClientRect().y
            && e.y < img4.getBoundingClientRect().y + (img4.getBoundingClientRect().height/2)
        ) {
            let valueYTop = (img4.getBoundingClientRect().height/2 - (e.y - img4.getBoundingClientRect().y))/15;
            TweenMax.to(img4, 1, {rotationX: valueYTop})
        }

        if (
            e.y > img4.getBoundingClientRect().y + (img4.getBoundingClientRect().height/2)
            && e.y < img4.getBoundingClientRect().y + (img4.getBoundingClientRect().height)
        ) {
            let valueXBottom = (e.y - img4.getBoundingClientRect().y - img4.getBoundingClientRect().height/2)/15;
            TweenMax.to(img4, 1, {rotationX: -1 * valueXBottom})
        }
    }
    else {
        TweenMax.to(img4, 2, {rotationX: 0})
        TweenMax.to(img4, 2, {rotationY: 0})
    }
})

// 3D MAIL
let mail = document.querySelector('.footer__mail');

document.addEventListener("mousemove", function (e) {
    if (
        e.x > mail.getBoundingClientRect().x
        && e.x < mail.getBoundingClientRect().x + mail.getBoundingClientRect().width
        && e.y > mail.getBoundingClientRect().y
        && e.y < mail.getBoundingClientRect().y + mail.getBoundingClientRect().height
    ) {
        if (
            e.x > mail.getBoundingClientRect().x
            && e.x < mail.getBoundingClientRect().x + (mail.getBoundingClientRect().width/2)
        ) {
            let valueXLeft = (mail.getBoundingClientRect().width/2 - (e.x - mail.getBoundingClientRect().x))/17;
            TweenMax.to(mail, 1, {rotationY: -1 * valueXLeft})
        }

        if (
            e.x > mail.getBoundingClientRect().x + (mail.getBoundingClientRect().width/2)
            && e.x < mail.getBoundingClientRect().x + (mail.getBoundingClientRect().width)
        ) {
            let valueXRight = (e.x - mail.getBoundingClientRect().x - mail.getBoundingClientRect().width/2)/17;
            TweenMax.to(mail, 1, {rotationY: valueXRight})
        }

        if (
            e.y > mail.getBoundingClientRect().y
            && e.y < mail.getBoundingClientRect().y + (mail.getBoundingClientRect().height/2)
        ) {
            let valueYTop = (mail.getBoundingClientRect().height/2 - (e.y - mail.getBoundingClientRect().y))/17;
            TweenMax.to(mail, 1, {rotationX: valueYTop})
        }

        if (
            e.y > mail.getBoundingClientRect().y + (mail.getBoundingClientRect().height/2)
            && e.y < mail.getBoundingClientRect().y + (mail.getBoundingClientRect().height)
        ) {
            let valueXBottom = (e.y - mail.getBoundingClientRect().y - mail.getBoundingClientRect().height/2)/17;
            TweenMax.to(img, 1, {rotationX: -1 * valueXBottom})
        }
    }
    else {
        TweenMax.to(mail, 2, {rotationX: 0})
        TweenMax.to(mail, 2, {rotationY: 0})
    }
})