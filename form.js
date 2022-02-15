//Bring all necessary form elements into JS
var Form1 = document.getElementById(form1);
var Lawnform = document.getElementById(lawnform);
var Outdoorform = document.getElementById(outdoorform);
var Constructionform = document.getElementById(constructionform);
var Personinfo = document.getElementById(personinfo);

var next1 = document.getElementById(next1);
var next2 = document.getElementById(next2);
var next3 = document.getElementById(next3);
var next4 = document.getElementById(next4);
var back2 = document.getElementById(back2);
var back3 = document.getElementById(back3);
var back4 = document.getElementById(back4);
var back5 = document.getElementById(back5);
var Progress = document.getElementById(progress);

var zipentry = document.getElementById(zipentry);

// The following 3 functions are associated with the "next" and
// "back" buttons if the user picks the lawncare icon

function firstLawn() {
    form1.classList.toggle("slide-left"); //adds class that slides item to left
    lawnform.style.transform = "translateX(0)"; //Brings lawnform into view
    progress.style.width = "50%";
}
function firstLawnBack() {
    form1.classList.toggle("slide-left");
    lawnform.style.transform = "translateX(100%)";//slides item out of view to right
    progress.style.width = "25%";
}
function lawnNext() {
    lawnform.style.transform = "translateX(-100%)";//slides item out of view to left
    addrinfo.style.transform = "translateX(0)";
    progress.style.width = "75%";
}

// Same goes for these 3, but if the user picks outdoor living

function firstOutdoor() {
    form1.classList.toggle("slide-left");
    outdoorform.style.transform = "translateX(0)";
    progress.style.width = "50%";
}
function firstOutdoorBack() {
    form1.classList.toggle("slide-left");
    outdoorform.style.transform = "translateX(100%)";
    progress.style.width = "25%";
}
function outdoorNext() {
    outdoorform.style.transform = "translateX(-100%)";
    addrinfo.style.transform = "translateX(0)";
    progress.style.width = "75%";
}

// Next/back functions for drainage icon

function firstDrain() {
    form1.classList.toggle("slide-left");
    progress.style.width = "50%";
    constructionform.style.transform = "translateX(0)";
}
function firstDrainBack() {
    form1.classList.toggle("slide-left");
    constructionform.style.transform = "translateX(100%)";
    progress.style.width = "25%";
}
function drainNext() {
    constructionform.style.transform = "translateX(-100%)";
    addrinfo.style.transform = "translateX(0)";
    progress.style.width = "75%";
}

// Address slidable form next/back

function addrnext() {
        addrinfo.style.transform = "translateX(-100%)";
        progress.style.width = "100%";
        personinfo.style.transform = "translateX(0)";
}
function fourthBack() {
    personinfo.style.transform = "translateX(100%)";
    addrinfo.style.transform = "translateX(0)";
    progress.style.width = "75%";
}

// Last back button for contact form, if statements check what is located to the left (to determine user's previous selection)

function addrback() {
    if (lawnform.style.transform == "translateX(-100%)") {
        addrinfo.style.transform = "translateX(100%)";
        lawnform.style.transform = "translateX(0)";
        progress.style.width = "50%";
    }
    else if (outdoorform.style.transform == "translateX(-100%)") {
        addrinfo.style.transform = "translateX(100%)";
        outdoorform.style.transform = "translateX(0)";
        progress.style.width = "50%";
    }
    else if (constructionform.style.transform == "translateX(-100%)") {
        addrinfo.style.transform = "translateX(100%)";
        constructionform.style.transform = "translateX(0)";
        progress.style.width = "50%";
    }
}