var cpwd = "cpwd";
var firstName = "Malka";
var lastName ="Samaradivakara"
var fullName;
	
		fullName = firstName + " " + lastName;
	
		console.log(fullName);
		
		/*function getFullName() {
			var firstName = "Malka";
			var lastName = "Samaradivakara";
			var fullName;
			
			fullName = firstName + "  " + lastName;
			
			console.log ( fullName ); 
		}*/
		
		
		function (firstName, lastName) {
			var fullName;
			fullName = firstName + "  " + lastName;
			
			return "My fullname is:", fullName;
			}
			
			var person1 = getFullName ("Malka", "Samaradivakara");
			
			consle.log ( person1 );
			
			var person2 = getFullname ("Heshan" "Sampath");
			
			console.log (person2);
		getFullName();