var currentChar;
var remainingChar = 0;
var charLimit = 280;
var userPrompt = prompt("Write a tweet!");
currentChar = userPrompt.length;
remainingChar = charLimit - currentChar;
console.log("You have written %d characters", userPrompt.length);
console.log("You have %d characters left", remainingChar);