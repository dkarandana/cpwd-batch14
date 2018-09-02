console.log("Script JS");

/*
var cpwd = "CPWD";
var firstName = "Ovini";
var lastName = "Ratnayake";

var fullName;

	fullName = firstName + " " + lastName;

	console.log( fullName );
*/



/*
	function getFullName(){
		var firstName = "Ovini";
		var lastName = "Ratnayake";

		var fullName;

		fullName = firstName + " " + lastName;

		console.log( fullName );
	}


	getFullName(); //function call

	*/



	function getFullName(firstName,lastName){
		
		var fullName;
		fullName = firstName + " " + lastName;
		return "My full name is",fullName;
	}


	var person1 = getFullName("Ovini","Ratnayake");
	console.log( person1 );


	var person2 = getFullName("Osura","Ratnayake");
	console.log( person2 );