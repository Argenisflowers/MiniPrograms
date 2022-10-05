const people = ['Argenis', 'David', 'Yorman', 'Reinaldo', 'JoseLuis', 'Cesar', 'Donnis', 'Jose', 'Ramon'];

var numberOfPeople = people.length;

var randomNumber = Math.floor(Math.random() * numberOfPeople);

var randomPerson = people[randomNumber];

console.log(randomPerson);