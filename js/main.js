/*alert("Hello from JS")
console.info("hello from console")
console.dir(document)*/

(function(){
document.getElementById("myHeading").innerHTML = "Erik"
let currentNav = document.querySelector("nav ul li")
console.info(currentNav)
currentNav.setAttribute("class","currentPage")
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk/")
let eventBtn=document.getElementById("myTestEvent")
eventBtn.addEventListener("click",myEvent)
function myEvent(ev){
    console.dir(ev)
    console.info("I was clicked")
}

})()