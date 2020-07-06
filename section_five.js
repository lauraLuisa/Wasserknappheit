var btn18 = document.getElementById("btn18");
var btn19 = document.getElementById("btn19");
var diagram_rects = $(".diagram_rect")
var rects = [$("#rect_apr"),$("#rect_may"),$("#rect_jun"),$("#rect_jul"),$("#rect_aug"),$("#rect_sep")];
var value18 = ["43%","32.5%","50%","58%","54.5%","32.5%"];
var value19 = ["58%","0%","39%","33%","21%","0%"];
var value_null = ["0px","0px","0px","0px","0px","0px"];


btn18.addEventListener("click", function () {
    modifyDiagram(value18,btn18,btn19);
  });

btn19.addEventListener("click", function () {
    modifyDiagram(value19,btn19,btn18);
  });

function modifyDiagram(values,btn1,btn2) {

    btn1.style.color = "#0C0C46";
    btn1.style.background = "#2CFFEA";
    btn2.style.color = "white";
    btn2.style.background = "#465172";

    for (let v= 0; v < rects.length; v++) {
       rects[v].animate({height: values[v]}, 1000);
    }
    
 }