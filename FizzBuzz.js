var output = [];

function fizzBuzz()
{
	var tempNum = 1;
	
	 
	while(tempNum < 101)
	{
		if (((tempNum % 3) === 0) && ((tempNum %5) === 0))
		{
			output.push("FizzBuzz")
		}
		else if (((tempNum %3) === 0))
		{
			output.push("Fizz")
		}
		else if (((tempNum % 5) === 0)) 
		{
				output.push("Buzz")
		}
		else 
		{
			output.push(tempNum)
		}
		tempNum ++;
	}
		console.log(output);
}

fizzBuzz(output);