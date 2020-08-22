document.addEventListener("DOMContentLoaded", function(event) {
    console.log("hello world!");
    safari.extension.dispatchMessage("Hello World!");
    
    const elem = document.createElement("img");
    elem.src = safari.extension.baseURI + "up_arrow_256.png";
    
    // styling
    elem.className = "top_scroller";
    elem.style.position = "fixed";
    elem.style.right = "10px";
    elem.style.bottom = "10px";
    elem.style.zIndex = 99;
    
    document.body.insertBefore(elem, document.body.firstChild);
});
