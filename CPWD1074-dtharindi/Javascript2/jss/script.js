console.log("script.js")

var studentdata = ["nimansha","harindr","tharindi","pabasara","eshani"];
console.log(studentdata);

var Myfun1 = function (index, name){
	console.log(index ,name);

};
	
studentdata.forEach(Myfun1); 

document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM Loaded');

	var studentlist = document.getElementById('studentlist');


		if(studentlist && studentdata){


			studentdata.forEach(function ( name ){
				var p1 = document.createElement('p');
				var morebtn = document.createElement('button');
				var paraText = document.createTextNode(name);


				morebtn.innerHTML = "View";
				morebtn.setAttribute('class', 'primary- btn');
				morebtn.setAttribute('data-name', name);



				morebtn.addEventListener('click',function(){
					var student = this.getAttribute('data-name');
					alert("More about"+ student);


				});

				p1.appendChild( paraText );
				studentlist.appendChild ( p1);
				studentlist.appendChild (morebtn);
				


				console.log (studentlist);

			})

			

				
		}

}) ;






