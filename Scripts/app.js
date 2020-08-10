/* 
COMP125(Sec.004) - Assignment 3
Student Name + Number - Kristian Waithe 300637474
Mini Portfolio using JSON and AJAX
*/

"use strict";

/* 
1. Console 
2. Header + Footer
3. Content
*/

function displayOutput()

function setNavigation()
{
    if (document.title == "About Me" || document.title == "Projects" || document.title == "Contact")
    {
        loadHeader();
        loadFooter();
    }
}

loadHeader();
function loadHeader()
{
    console.info("Loading Header...");
// Create Object
let XHR = new XMLHttpRequest();
// Configuration
XHR.open("GET", "./Views/Partials/Header.html")
// Execute
XHR.send();
// Register ReadyState Event
XHR.addEventListener("readystatechange", function(){
   if((XHR.readyState === 4) && (XHR.status === 200))
{
    let header = document.getElementsByTagName("Header")[0];

    let headerData = XHR.responseText

    header.innerHTML = headerData;
}
});
}

loadFooter();
function loadFooter()
{
    console.info("Loading Footer...");
// Create Object
let XHR = new XMLHttpRequest();
// Configuration
XHR.open("GET", "./Views/Partials/Footer.html")
// Execute
XHR.send();
// Register ReadyState Event
XHR.addEventListener("readystatechange", function(){
   if((XHR.readyState === 4) && (XHR.status === 200))
{
    let footer = document.getElementsByTagName("Footer")[0];

    let footerData = XHR.responseText

    footer.innerHTML = footerData;
}
});
}

function loadParagraphs()
{
let xhrText;

if ((xhrText.readyState === 4) && (xhrText.responseText))
{
    
}

}