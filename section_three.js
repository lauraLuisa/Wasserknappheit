var worldmap = document.getElementById("map");
var tablecells = document.getElementsByClassName("tab");
var btnExtreme = document.getElementById("extreme");
var btnHigh = document.getElementById("high");
var table = document.getElementById("table");
var ext = document.getElementsByClassName("ext");
var high = document.getElementsByClassName("hig");

var countryArray = ['1.Katar', '7.kuwait', '13.indien', '2.israel', '8.saudi arabien', '14.pakistan', '3.libanon', 
'9.eritrea', '15.turkmenistan', '4.iran', '10.ver. arab. emirate', 
'16.oman', '5.jordanien', '11.san marino', '17.botswana', '6.libyen', '12.bahrain', '', '', '', '', '', '', '', '', '', ''];
var countryArray2 = ['18.Chile', '27.Afghanistan', '36.Djibouti', '19.Zypern', '28.Spanien', '37.Namibia', '20.Jemen', '29.Algerien',
 '38.Kirgistan', '21.Andorra', '30.Tunesien', '39.Niger', '22.Marokko', '31.Syrien', '40.Nepal', '23.Belgien', '32.Türkei', '41.Portugal',
 '24.Mexiko', '33.Albanien', '42.Irak','25.Usbekistan', '34.Armenien', '43.Ägypten', '26.Griechenland', '35.Burkina Faso', '44.Italien'];

modifyMap(countryArray,high,ext,btnExtreme,btnHigh);

btnExtreme.addEventListener("click", function () {
  modifyMap(countryArray,high,ext,btnExtreme,btnHigh);
  table.style.animation = "pop 0.8s forwards";
});

btnHigh.addEventListener("click", function () {
  modifyMap(countryArray2,ext,high,btnHigh,btnExtreme);
  table.style.animation = "pop2 0.8s forwards";
});

function modifyMap(ar_co,co_1,co_2,btn_1,btn_2) {

    for (let i = 0; i < tablecells.length; i++) {
      tablecells[i].innerHTML = ar_co[i];
    }
  
    for (let j = 0; j < co_1.length; j++) {
      co_1[j].style.animation = "colorDown 0.5s forwards";
    }
  
    for (let j = 0; j < co_2.length; j++) {
      co_2[j].style.animation = "colorUp 2s forwards";
    }
  
    btn_1.style.color = "#0C0C46";
    btn_1.style.background = "#2CFFEA";
    btn_2.style.color = "white";
    btn_2.style.background = "#465172";
    
  }

