var name = prompt("What is your name");

var charCap = name.slice(0,1);

var charRem = name.slice(1,name.lenght);

charCap = charCap.toUpperCase();

charRem = charRem.toLowerCase();

console.log(name);

console.log(charCap + charRem);