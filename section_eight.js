var neonFilter1 = document.getElementById("neonFilter1");
var neonFilter2 = document.getElementById("neonFilter2");
var neonFilter3 = document.getElementById("neonFilter3");
var neonFilter4 = document.getElementById("neonFilter4");

var regionalPath = document.getElementsByClassName("regionalPath");
var regional = document.getElementById("regional");
var recyclePath = document.getElementsByClassName("recyclePath");
var recycle = document.getElementById("recycle");
var meatPath = document.getElementsByClassName("meatPath");
var meat = document.getElementById("meat");
var ecologicalPath = document.getElementsByClassName("ecologicalPath");
var ecological = document.getElementById("ecological");


regional.addEventListener("mouseover", function () {
    solutionGlow(regionalPath,neonFilter1);
});

regional.addEventListener("mouseout", function () {
    solutionInactive(regionalPath,neonFilter1);
});

recycle.addEventListener("mouseover", function () {
    solutionGlow(recyclePath, neonFilter2);
});

recycle.addEventListener("mouseout", function () {
    solutionInactive(recyclePath, neonFilter2);
});

meat.addEventListener("mouseover", function () {
    solutionGlow(meatPath, neonFilter3);
});

meat.addEventListener("mouseout", function () {
    solutionInactive(meatPath, neonFilter3);
});

ecological.addEventListener("mouseover", function () {
    solutionGlow(ecologicalPath, neonFilter4);
});

ecological.addEventListener("mouseout", function () {
    solutionInactive(ecologicalPath, neonFilter4);
});

function solutionGlow(path,filter) {
    for (let j = 0; j < path.length; j++) {
        path[j].style.animation = "colorUp 1s forwards";
    }
    filter.style.animation = "glowUp 1s forwards";
}

function solutionInactive(path,filter) {
    for (let j = 0; j < path.length; j++) {
        path[j].style.animation = "colorDown 0.5s forwards";
    }
    filter.style.animation = "glowDown 0.5s forwards"
}
