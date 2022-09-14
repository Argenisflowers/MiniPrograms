

//Function that receive input in years and give you an estimate of how many weeks of your life you have left.

function weeksToLive(years) {
	
	const lifeExpectancy = 73;
	
	var yearsLeft = lifeExpectancy - years;
	
	var weeksLeft = yearsLeft * 52;

	var weeks = weeksLeft;
	
	
  return weeks;
}

var years = prompt ("How old are you?");

alert = "You have " + weeksToLive(years) +"weeks left";

