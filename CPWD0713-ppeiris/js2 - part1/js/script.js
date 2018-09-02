console.log('dfds');

document.addEventListener('DOMContentLoaded',function(){
	//console.log('DOMContentLoaded');
/*	var studentData = document.getElementById('student-data');

	var studentName = document.createElement('p');
	var studentNameTextNode = document.createTextNode("Amal");

	studentName.appendChild(studentNameTextNode);
	studentData.appendChild(studentName);
*/



	
	var studentData = document.getElementsByClassName('personal-details');
	console.log(studentData);
	var studentName = document.createElement('p');
	var studentNameTextNode = document.createTextNode("Amal2");

	studentName.appendChild(studentNameTextNode);
	studentData[0].appendChild(studentName);

});


