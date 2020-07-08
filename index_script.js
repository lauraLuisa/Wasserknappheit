function isOnScreen(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function glow(dot) {
    for (let i = 0; i < dotarray.length; i++) {
        dotarray[i].style.filter = "none";
        dotarray[i].style.fill = "#3d4664";
    }
    dot.style.fill = "#2CFFEA";
    dot.style.filter = "url(#neon)";
}

function hide() {
    navigationbar.style.visibility = "hidden";
}

window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    const loaderGif = document.querySelector(".loaderGif");
    setTimeout(function(){loader.classList+= " hidden"; loaderGif.classList+= " hidden"},1000);
});

var wrapper_start = document.getElementById('wrapper_start');
var wrapper_one = document.getElementById('wrapper_one');
var wrapper_two = document.getElementById('wrapper_two');
var wrapper_three = document.getElementById('wrapper_three');
var wrapper_four = document.getElementById('wrapper_four');
var wrapper_five = document.getElementById('wrapper_five');
var wrapper_six = document.getElementById('wrapper_six');
var wrapper_seven = document.getElementById('wrapper_seven');
var wrapper_eight = document.getElementById('wrapper_eight');

var navigationbar = document.getElementById('navigationbar');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');
var dot5 = document.getElementById('dot5');
var dot6 = document.getElementById('dot6');
var dot7 = document.getElementById('dot7');
var dot8 = document.getElementById('dot8');

var dotarray = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8];

window.addEventListener('scroll', function () {

    navigationbar.style.visibility = "visible";

    if (isOnScreen(wrapper_start)) {
        hide();
    }

    else if (isOnScreen(wrapper_one)) {
        glow(dot1);
    }

    else if (isOnScreen(wrapper_two)) {
        glow(dot2);
    }

    else if (isOnScreen(wrapper_three)) {
        glow(dot3);
    }

    else if (isOnScreen(wrapper_four)) {
        glow(dot4);
    }

    else if (isOnScreen(wrapper_five)) {
        glow(dot5);
    }

    else if (isOnScreen(wrapper_six)) {
        glow(dot6);
    }

    else if (isOnScreen(wrapper_seven)) {
        glow(dot7);
    }

    else if (isOnScreen(wrapper_eight)) {
        glow(dot8);
    }

});


