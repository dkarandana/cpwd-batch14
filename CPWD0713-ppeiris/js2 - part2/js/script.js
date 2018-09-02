console.log('dfds');

document.addEventListener('DOMContentLoaded',function(){
	
	var studentData = document.getElementsByClassName('personal-details');
	console.log(studentData);
	var studentName = document.createElement('p');
	var studentNameTextNode = document.createTextNode("Amal2");

	studentName.appendChild(studentNameTextNode);
	studentData[0].appendChild(studentName);

});


