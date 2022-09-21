var guestList = ["Argenis","Jose","David","Samuel","Reinaldo","Yorman","Jesus"]

var name = prompt("What is your name?: ");

if (guestList.includes(name)){
alert("¡Welcome to the party " + name + "!" );
}
else
{
	alert("Sorry, you are not invited.");
}