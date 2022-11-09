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
    ev.target.innerHTML = "Changed"
    console.info("I was clicked")
}
let colourBtns = document.querySelectorAll(".colPicker")
console.dir(colourBtns) 
for(let i=0; i<colourBtns.length; i++)
{
    colourBtns[i].addEventListener("click",chgColour)
}

function chgColour(ev){
    console.info(ev.target.classList[0])
    let newBgColour = ev.target.classList[0]+"Back"
    document.querySelector("body").setAttribute("class",newBgColour)
}
//background color selector
/*document.querySelector(".red").addEventListener("click",function(){
    document.querySelector("body").setAttribute("class","redBack")
})
document.querySelector(".green").addEventListener("click",function(){
    document.querySelector("body").setAttribute("class","greenBack")
})
document.querySelector(".blue").addEventListener("click",function(){
    document.querySelector("body").setAttribute("class","blueBack")
})
document.querySelector(".reset").addEventListener("click",function(){
    document.querySelector("body").removeAttribute("class")
})*/
})()