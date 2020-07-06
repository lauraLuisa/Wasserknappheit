var directFirst = document.getElementById("directFirst");
var indirectFirst = document.getElementById("indirectFirst");
var directSecond = document.getElementById("directSecond");
var indirectSecond = document.getElementById("indirectSecond");

var containerAll = document.getElementById("content_six");
var matchesAll = containerAll.querySelectorAll("p");

changeActiveRow(directSecond, indirectSecond);

directFirst.addEventListener("click", function () {
    changeActiveRow(directFirst, indirectFirst);
});

indirectFirst.addEventListener("click", function () {
    changeActiveRow(directFirst, indirectFirst);
});

directSecond.addEventListener("click", function () {
    changeActiveRow(directSecond, indirectSecond);
});

indirectSecond.addEventListener("click", function () {
    changeActiveRow(directSecond, indirectSecond);
});

directThird.addEventListener("click", function () {
    changeActiveRow(directThird, indirectThird);
});

indirectThird.addEventListener("click", function () {
    changeActiveRow(directThird, indirectThird);
});

function changeActiveRow(direct, indirect) {

    for (var i = 2; i < matchesAll.length; i++) {
        matchesAll[i].style.color = "#465172";
    }

    var container1 = direct;
    var container2 = indirect;
    var matches = container1.querySelectorAll("p");
    var matches2 = container2.querySelectorAll("p");
    for (var m = 0; m < matches.length; m++) {
        matches[m].style.color = "#2CFFEA";
    }
    for (var m2 = 0; m2 < matches2.length; m2++) {
        matches2[m2].style.color = "#2CFFEA";
    }
}