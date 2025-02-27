const box1 = document.getElementById("li1");
const box2 = document.getElementById("li2");
const button = document.getElementById("btn1");
let margin = Boolean(true);
let padding = Boolean(true);

function addMargin(){
    margin = !margin;
    if(!margin) {box1.style.margin = "10px";}
    else {box1.style.margin = "0px";}
    box1.style.background ="red";
}

function addPadding(){
    padding = !padding;
    if(!padding) {box2.style.padding = "10px";}
    else {box2.style.padding = "0px";}
    box2.style.background ="blue";
}