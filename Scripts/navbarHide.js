var navHeight, navColor, navTextShadow, fontSize, logoPad, logoMarg;
var navbar, logo;
var big = true;
var homepage;

$(document).ready(function () {
    navbar = document.getElementById("navbar");
    logo = document.getElementById("logo");

    navHeight = navbar.style.height;
    navColor = navbar.style.backgroundColor;
    navTextShadow = navbar.style.textShadow;
    fontSize = logo.style.fontSize;
    logoPad = logo.style.paddingTop;
    logoMarg = logo.style.marginTop;

    homepage = document.URL.includes("index.html");
    if (homepage) {
        grow();
    } else {
        shrink();
    }
    scrollFunction();
});

$(window).scroll(function () {
    scrollFunction();
});

function scrollFunction() {
    var scrollThreshold = 200;

    if (document.documentElement.scrollTop > scrollThreshold) {
        // Smaller navbar
        if (big) {
            shrink();
            big = false;
            console.log(big);
        }

    } else {
        // Default, big navbar
        if (!big && homepage) {
            grow();
            big = true;
            console.log(big);
        }
        
    }
    console.log(homepage);
}

function shrink() {
    navbar.style.height = "100px";
    navbar.style.backgroundColor = navColor;
    navbar.style.textShadow = "0px 0px 0px #000000";
    //navbar.getElementsByTagName("a")[0].style.paddingTop = "14px";
    //navbar.getElementsByTagName("a")[1].style.paddingTop = "14px";

    logo.style.fontSize = "5vh";
    logo.style.paddingTop = "0px";
    logo.style.marginTop = "7px";
    //logo.style.top = "-100px";
    //logo.getElementsByTagName("img")[0].style.width = "40px";
}

function grow() {
    navbar.style.height = navHeight;
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    navbar.style.textShadow = navTextShadow;
    //navbar.getElementsByTagName("a")[0].style.paddingTop = "200px";
    //navbar.getElementsByTagName("a")[1].style.paddingTop = "200px";

    logo.style.fontSize = fontSize;
    logo.style.paddingTop = logoPad;
    logo.style.marginTop = logoMarg;
    //logo.getElementsByTagName("img")[0].style.width = "50px";
}