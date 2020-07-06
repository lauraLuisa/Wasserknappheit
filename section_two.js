var stateOfButton2 = false;
var stateOfButton1 = false;
var stateOfButton3 = false;
var stateOfButton4 = false;

var boxtext1 = document.getElementById("boxtext1");
var boxtext2 = document.getElementById("boxtext2");
var boxtext3 = document.getElementById("boxtext3");
var boxtext4 = document.getElementById("boxtext4");

var info_1 = document.getElementById("info_1");
var info_2 = document.getElementById("info_2");
var info_3 = document.getElementById("info_3");
var info_4 = document.getElementById("info_4");


info_1.addEventListener("click", function () {
    stateOfButton1 = changeStateOfButton(stateOfButton1,boxtext1,box_1,this);
});

info_2.addEventListener("click", function () {
    stateOfButton2 = changeStateOfButton(stateOfButton2,boxtext2,box_2,this);
});

info_3.addEventListener("click", function () {
    stateOfButton3 = changeStateOfButton(stateOfButton3,boxtext3,box_3,this);
});

info_4.addEventListener("click", function () {
    stateOfButton4 = changeStateOfButton(stateOfButton4,boxtext4,box_4,this);
});

function changeStateOfButton(state,text,box,info) {

    if (state == false) {
        text.style.animation = "textFadeIn 1s forwards";
        box.style.animation = "boxcolorFadeIn 1s forwards";
        info.style.animation = "colorButton 1s forwards";
        info.style.opacity = "1";
        state = true;
        return state;
    }

    else {
        text.style.animation = "textFadeOut 0.5s forwards";
        box.style.animation = "boxcolorFadeOut 0.5s forwards";
        info.style.animation = "colorButtonDown 1s forwards";
        state = false;
        return state;
    }
}


// var stateOfButton2 = false;
// var stateOfButton1 = false;
// var stateOfButton3 = false;
// var stateOfButton4 = false;

// var boxtext1 = document.getElementById("boxtext1");
// var boxtext2 = document.getElementById("boxtext2");
// var boxtext3 = document.getElementById("boxtext3");
// var boxtext4 = document.getElementById("boxtext4");


// document.getElementById("info_1").addEventListener("click", function () {
//     stateOfButton1 = changeStateOfButton(this,stateOfButton1);
// });

// document.getElementById("info_2").addEventListener("click", function () {
//     stateOfButton2 = changeStateOfButton(this, stateOfButton2);
// });

// document.getElementById("info_3").addEventListener("click", function () {
//     stateOfButton3 = changeStateOfButton(this, stateOfButton3);
// });

// document.getElementById("info_4").addEventListener("click", function () {
//     stateOfButton4 = changeStateOfButton(this, stateOfButton4);
// });

// function changeStateOfButton(knoten,state) {

//     if (state == false) {
//         knoten.style.color = "white";
//         knoten.parentNode.style.clipPath = "circle(85%)";
//         knoten.parentNode.style.background = "#465172";
//         state = true;
//         console.log(state);
//         return state;
//     } 
    
//     else if (state == true) {

//         knoten.parentNode.style.clipPath = "circle(18px at 85% 205px)";
//         state = false;
//         setTimeout(function () {
//             knoten.parentNode.style.background = "#2CFFEA";
//             knoten.style.color = "rgb(28, 39, 60)";
//         }, 500);
//         return state;
//     }

// }


