console.log("script");


var studentData = ["Asanka","Gayan","kavinda"];

console.log(studentData);



document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM Loaded');

	var studentList = document.getElementById('student-list');

	if(studentList && studentData){
		studentData.forEach(function(name, i){
			var studentName = document.createElement('li');
			var morebtn = document.createElement('button');
			var studentTextNode = document.createTextNode(++i + ' ) ' + name);

			morebtn.innerHTML = "view";
			morebtn.setAttribute('class','primary-btn');
			morebtn.setAttribute('data-name',name);

			morebtn.addEventListener('click',function(){
				var student = this.getAttribute('data-name');
				alert("More about" + student);
			});
			studentName.appendChild(studentTextNode);
			studentName.appendChild(morebtn);
			studentList.appendChild(studentName);	 
		});

	}

});


/*DOM Manipulation*/





