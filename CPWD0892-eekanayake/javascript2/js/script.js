var studentData = ["Eshan","hasanka","ekanayake", "suresh"];

/*Dom manupilation*/
document.addEventListener( 'DOMContentLoaded', function() {
	var studentList = document.getElementById('student-List');

	if( studentList && studentData ){
	
		studentdata.forEach(function( name, index ){	
			var stdElement = document.createElement('li');
			var morebtn = document.createElement('button');
			var stdTextNode = document.createTextNode(++ index +')' + name);
			
			morebtn.innerHTML = "view";
			morebtn.setAttribute('class','primary-btn');
			morebtn.setAttribute('data-name',name);
			
			morebtn.addEventListener('click',function(){
				var student=this.getAttribute('data-name');
				alert("More about" + student);
			});
			
			stdElement.appendChild( stdTextNode );
			stdElement.appendChild( morebtn );
			studentList.appendChild( stdElement );
		});
	}
});
