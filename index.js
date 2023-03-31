document.querySelector(".button").addEventListener("click" , clickHandler);


function clickHandler () {
    document.querySelector("body").setAttribute("class" , "after-click");
    document.querySelector(".button").setAttribute("class" , "button-vanish");
    document.querySelector(".hidden-text").setAttribute("style" , "visibility:visible")
}