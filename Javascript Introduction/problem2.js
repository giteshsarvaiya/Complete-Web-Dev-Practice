var yourName = prompt("What is your name?");
var firstLetter = yourName.slice(0,1);
var num = yourName.length;
alert("Hello " + firstLetter.toUpperCase() + yourName.slice(1,num).toLowerCase());