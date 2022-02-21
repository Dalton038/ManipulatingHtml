 //OBJECTIVE 1
addEventListener("DOMContentLoaded", button);
function button() {
  addEventListener("click", click);
    function click() {
        alert("nice message.")
    }
}


//OBJECTIVE 2 
let newbutton = document.getElementById("newbutton");
newbutton.addEventListener("click", click);
function click() {
let message = document.getElementById("text-box").value;
alert(message);
}


//OBJECTIVE 3 
let divOne = document.getElementById("divOne");
divOne.addEventListener("mouseenter", function() {
    divOne.style.backgroundColor = "red";
})
divOne.addEventListener("mouseleave", function() {
    divOne.style.backgroundColor = "black";
})


//OBJECTIVE 4
let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})


//OBJECTIVE 5
let newerbutton = document.getElementById("newerbutton");
let divSpan = document.getElementById("divSpan");
newerbutton.addEventListener("click", function() {
    let span = document.createElement("span");
    divSpan.appendChild(span);
    let text = document.createTextNode("Dalton");
    span.appendChild(text);
})

//Objective 6
let friends = ["Brody", "Will", "Madison", "Trent", "Jerry", "Kasyn", "Zach", "Landon", "Peyton", "Cole"];
let newestbutton = document.getElementById("newestbutton");
let ul = document.getElementById("ul");
newestbutton.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});