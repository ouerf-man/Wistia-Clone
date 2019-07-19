var oldColor;

$(function () {
    $(".btn-colored-divs").hover(function () {
        oldColor = $(this).siblings(".fas").css("color");
        $(this).siblings(".fas").css("color", "white");
        $(this).css("background-color", "white");
    }, function () {
        $(this).siblings(".fas").css("color", oldColor);
        $(this).css("background-color", "inherit");
    })
console.log("hello");
    $(".nav-item").hover(function () {
        $(".dropdown-nav").show(50);
        console.log("hello");
    },function () {
        $(".dropdown-nav").hide(50);
    })
})
