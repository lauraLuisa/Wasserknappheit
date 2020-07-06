
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function elementInViewport2(el, h, w) {
    var top = el.offsetTop + h;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight - w;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

function bannerAnimation(banner_number, chapter_title) {

    if (elementInViewport2(banner_number, 400, 700)) {
        chapter_title.classList.add("fly_in");
    }

    if (!elementInViewport2(banner_number, 0, 0)) {
        chapter_title.classList.remove("fly_in");
    }

};

// ---------- section_one ----------

var banner_one = document.getElementById('banner_one');
var chapter_title_one = document.getElementById('chapter_title_one');
var fill_whole_water = document.getElementById('fill_whole_water');
var fill_salt_water = document.getElementById('fill_salt_water');
var fill_usable_water = document.getElementById('fill_usable_water');

// ---------- section_two ----------

var banner_two = document.getElementById('banner_two');
var chapter_title_two = document.getElementById('chapter_title_two');
var inViewportSec2 = true;
var box_1 = document.getElementById('box1');
var box_2 = document.getElementById('box2');
var box_3 = document.getElementById('box3');
var box_4 = document.getElementById('box4');

// ---------- section_three ----------

var banner_three = document.getElementById('banner_three');
var chapter_title_three = document.getElementById('chapter_title_three');
var countries = document.getElementById("countries");

// ---------- section_four ----------
var banner_four = document.getElementById('banner_four');
var chapter_title_four = document.getElementById('chapter_title_four');

// ---------- section_five ----------
var banner_five = document.getElementById('banner_five');
var chapter_title_five = document.getElementById('chapter_title_five');
var once = true;

// ---------- section_six ----------
var banner_six = document.getElementById('banner_six');
var chapter_title_six = document.getElementById('chapter_title_six');
var content_six = document.getElementById('content_six');

// ---------- section_seven ----------
var banner_seven = document.getElementById('banner_seven');
var chapter_title_seven = document.getElementById('chapter_title_seven');

// ---------- section_eight ----------
var banner_eight = document.getElementById('banner_eight');
var chapter_title_eight = document.getElementById('chapter_title_eight');



window.addEventListener('scroll', function () {

    // ---------- section_one ----------

    bannerAnimation (banner_one, chapter_title_one);

    if (elementInViewport2(wrapper_one, 400, 700)) {
        fill_whole_water.style.animation = "grow 1s ease-in-out forwards";
        fill_salt_water.style.animation = "grow2 1s ease-in-out forwards";
        fill_usable_water.style.animation = "grow3 1s ease-in-out forwards";
    }

    if (!elementInViewport2(wrapper_one, 0, 0)) {
        fill_whole_water.style.animation = "none";
        fill_salt_water.style.animation = "none";
        fill_usable_water.style.animation = "none";
    }

    // ---------- section_two ----------

    bannerAnimation (banner_two, chapter_title_two);

    if (elementInViewport2(wrapper_two, 400, 700)) {
        
        if(inViewportSec2 == true){
        info_1.style.animation = "pop 1s forwards";
        info_2.style.animation = "pop 1s 0.1s forwards";
        info_3.style.animation = "pop 1s 0.3s forwards";
        info_4.style.animation = "pop 1s 0.5s forwards";
        inViewportSec2 = false;
        }
    }

    if (!elementInViewport2(wrapper_two, 0, 0)) {
        inViewportSec2 = true;
        info_1.style.animation = "none";
        info_1.style.opacity ="0";
        info_2.style.animation = "none";
        info_2.style.opacity ="0";
        info_3.style.animation = "none";
        info_3.style.opacity ="0";
        info_4.style.animation = "none";
        info_4.style.opacity ="0";

        boxtext1.style.animation = "textFadeOut 0.5s forwards";
        box_1.style.animation = "boxcolorFadeOut 0.5s forwards";
        info_1.style.animation = "colorButtonDown 1s forwards";
        stateOfButton1 = false;

        boxtext2.style.animation = "textFadeOut 0.5s forwards";
        box_2.style.animation = "boxcolorFadeOut 0.5s forwards";
        info_2.style.animation = "colorButtonDown 1s forwards";
        stateOfButton2 = false;

        boxtext3.style.animation = "textFadeOut 0.5s forwards";
        box_3.style.animation = "boxcolorFadeOut 0.5s forwards";
        info_3.style.animation = "colorButtonDown 1s forwards";
        stateOfButton3 = false;

        boxtext4.style.animation = "textFadeOut 0.5s forwards";
        box_4.style.animation = "boxcolorFadeOut 0.5s forwards";
        info_4.style.animation = "colorButtonDown 1s forwards";
        stateOfButton4 = false;
    }

    // ---------- section_three----------

    bannerAnimation (banner_three, chapter_title_three);

    if (elementInViewport2(wrapper_three, 400, 700)) {
        countries.style.animation = "pop 0.8s forwards";
    }

    if (!elementInViewport2(wrapper_three, 0, 0)) {
        countries.style.animation = "none";
    }

    // ---------- section_four----------

    bannerAnimation (banner_four, chapter_title_four);

    // ---------- section_five----------
    bannerAnimation (banner_five, chapter_title_five);
    if (elementInViewport2(wrapper_five, 400, 700)) {
        if(once){
            modifyDiagram(value18,btn18,btn19);
            once = false;
        }
    }

    if (!elementInViewport2(wrapper_five, 0, 0)) {
        if(once==false){
            once = true;
            for (let v= 0; v < rects.length; v++) {
                rects[v].animate({height: 0}, 200);
             }
        }
    }

    // ---------- section_six----------

    bannerAnimation (banner_six, chapter_title_six);

    if (elementInViewport2(wrapper_six, 400, 700)) {
        content_six.style.animation = "pop 0.8s forwards";
    }

    if (!elementInViewport2(wrapper_six, 0, 0)) {
        content_six.style.animation = "none";
    }

    // ---------- section_seven----------

    bannerAnimation (banner_seven, chapter_title_seven);
    if (elementInViewport2(wrapper_seven, 400, 700)) {
        card1.style.animation = "flip 1s";
        card1.style.opacity = "100";
        card2.style.animation = "flip 1s 0.1s";
        setTimeout(function(){ card2.style.opacity = "100"; }, 100);
        card3.style.animation = "flip 1s 0.3s";
        setTimeout(function(){ card3.style.opacity = "100"; }, 300);
        card4.style.animation = "flip 1s 0.5s";
        setTimeout(function(){ card4.style.opacity = "100"; }, 500);
    }
    if (!elementInViewport2(wrapper_seven, 0, 0)) {
        card1.style.animation = "none";
        card1.style.opacity = "0";
        card2.style.animation = "none";
        card2.style.opacity = "0";
        card3.style.animation = "none";
        card3.style.opacity = "0";
        card4.style.animation = "none";
        card4.style.opacity = "0";
    }

    // ---------- section_eight----------

    bannerAnimation (banner_eight, chapter_title_eight);

    if (elementInViewport2(wrapper_eight, 400, 700)) {
        regional.style.animation = "pop 1s forwards";
        recycle.style.animation = "pop 1s 0.1s forwards";
        meat.style.animation = "pop 1s 0.3s forwards";
        ecological.style.animation = "pop 1s 0.5s forwards";
    }
    if (!elementInViewport2(wrapper_eight, 0, 0)) {
        regional.style.animation = "none";
        recycle.style.animation = "none";
        meat.style.animation = "none";
        ecological.style.animation = "none";
    }

});

