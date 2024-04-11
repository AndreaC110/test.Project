

//

myitem = document.getElementById("first");

myitem.addEventListener("click", onClick);

function onClick(onButtonClick) {  
    myitem.style.color = "green";  
}

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);

function onButtonClick(color) {  
    otheritem.style.color = "Green";  
}