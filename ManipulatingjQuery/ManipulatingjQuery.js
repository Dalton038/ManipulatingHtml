// OBJECTIVE 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Nice Message.")
});


// OBJECTIVE 2
let $newbutton = $("#newbutton");
$newbutton.click( function () {
    let message = $("#text-box").val();
    alert(message);
});


// OBJECTIVE 3
let $divOne = $("#divOne");
$divOne.hover(function() {
    divOne.style.backgroundColor = "red";
}, function() {
    divOne.style.backgroundColor = "black";
});


// OBJECTIVE 4
let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});


// OBJECTIVE 5
let $newerbutton = $("#newerbutton");
let $SpanDiv = $("#SpanDiv");
$newerbutton.click( function() {
    let $span = $("<span>Dalton</span>");
    $($span).appendTo($SpanDiv);
});


// OBJECTIVE 6
let $friends = ["Madison", "Zach", "Brody", "Trent", "Jerry", "Will", "Jake", "Peyton", "Landon", "Randy"];
let $newestbutton = $("#newestbutton");
let $ul = $("#ul");
$($newestbutton).click( function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($ul);
    }
});