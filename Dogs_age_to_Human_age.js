//Dog age to human age formula is humanAge =(dogAge - 2) * 4 + 21;

var getDogsAge = prompt("What is the Dogs age?");

var humanAge = ((getDogsAge - 2) * 4) + 21;

console.log(humanAge);
console.log(getDogsAge);
alert('Your dog is '+ humanAge +' years old in human years', humanAge);
console.log("Your dog is %i years old in human years", humanAge);