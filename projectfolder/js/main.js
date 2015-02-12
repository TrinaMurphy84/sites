var firstname = "trina",
	lastname = "murphy",
	age = 30;


// alert("Hi. I am " + firstname + " " + lastname + ".");
// alert("I am" + age + "years old. ");

var states = ["Nj","Pa","Ma","Nv","Me","Md","Nc","Wa","De","Ct","Ri", "Vt","La",];

alert(states);
states=states.sort();

alert(states);


console.log(states.length);
console.log(states [2])



alert("I have been to"  + states.length  +  "states");

var secondState = state[1];

alert("The second state in my array is " + secondState + ".");

var firstTwoStates = states.slice(0, 2);
alert("The first two states I have been to are" + firstTwoStates )

states.push("De");
states.sort();states.reverse();
alert(states);


var toTheSecondPower = function(number) {
	var result = number * number;
	return(result);
}















