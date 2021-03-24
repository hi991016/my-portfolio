// SHOW BIG IMAGE
$(document).ready(function() {
    flag = 0;
    $(".home__img").click(function() {
        $("#bigImage").fadeIn();
    })

    $(".close").click(function() {
        $("#bigImage").fadeOut();
    })
})

// CLOSE BIG IMAGE
function closeImage() {
    $("#bigImage").fadeOut();
}