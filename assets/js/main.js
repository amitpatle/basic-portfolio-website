AOS.init();


document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let parallaxHeader = document.getElementById("parallaxHeader");

    parallaxHeader.style.backgroundPositionY = scrollPosition * 0.05 + "px";
});


function scrollTopTop(){
    window.scrollTo(0, 0);
}











