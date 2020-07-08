var mouse = document.getElementById("scroll_mouse");

setTimeout(function () {
    mouse.style.animation="show 1s ease";
    setTimeout(function () {
        mouse.style.opacity="100%";
    }, 1);
}, 7900);

var myElement = $('video');
var myElement2 = $('.mouse');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 1 - st/400
    });
    myElement2.css({
        'opacity' : 1 - st/400
    });
});