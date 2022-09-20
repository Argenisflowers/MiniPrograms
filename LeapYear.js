function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.  	
	if ((year %4) == 0) {
	leapYear = true;
	}
    if (((year %4) == 0) && ((year %100) == 0)){
	leapYear = false;
    }
	if (((year %4) == 0) && ((year %100) == 0) && ((year %400) == 0)){
		leapYear = true;
	}
	
	if (leapYear == true){
	return alert(year +" is a leap year.");
	}
	if (leapYear == false){
	return alert( year + " is not a leap year.")
	}
		
/**************Don't change the code below****************/    
}

var leapYear = false;
var year = 0;
year = prompt("Write a year: "); 

isLeap(year);