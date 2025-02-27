const box1 = document.getElementById("li1");
const box2 = document.getElementById("li2");
const button = document.getElementById("btn1");
const dragBox = document.getElementById("drag");
const container = document.getElementById("container")
const container2 = document.getElementById("container2")
let margin = Boolean(true);
let padding = Boolean(true);
let newX = 0, newY = 0, startX = 0, startY = 0;

function addMargin(){
    margin = !margin;
    if(!margin) {box1.style.margin = "10px";}
    else {box1.style.margin = "0px";}
    box1.style.background ="red";
    clickBox.style.visibility = "visible"
}

function addPadding(){
    padding = !padding;
    if(!padding) {box2.style.padding = "10px";}
    else {box2.style.padding = "0px";}
    box2.style.background ="blue";
}

dragBox.addEventListener('mousedown', mouseDown);
function mouseDown(e){
    
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mouseleave', mouseLeave);
}

const c2Border = container2.getBoundingClientRect();

function mouseMove(e){
    
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    //let topo = dragBox.offsetTop; 

    dragBox.style.top = (dragBox.offsetTop - container.offsetHeight) - newY + "px";
    //console.log(topo + " " + (startY + container.offsetHeight) + " " + newY);
    dragBox.style.left = dragBox.offsetLeft - newX + "px";

    //console.log(container.offsetHeight + " " + startY + " " + c2Border.bottom )
    //if(startY > container.offsetHeight) mouseLeave()      TODO:(don't allow box to escape c2)

}
function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove);
}


function mouseLeave(e){
    document.removeEventListener('mousemove', mouseMove);
}

const clickBox = document.getElementById("click")
clickBox.addEventListener('click', click)
function click (e){
    clickBox.style.visibility = "hidden";
    clickBox.style.background = "red";
}
