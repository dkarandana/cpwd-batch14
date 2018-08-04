//console.log("java script");
var studentData = ["Archana","Samali","Nishan","Kaveen"];
//console.log(StudentList);

/*var myFunc = function (value,index){ 
	console.log(value,index);
};
StudentData.forEach(myFunc);*/

			/*DOM manipulation*/
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOM Loaded');


var studentList = document.getElementById('student-list');


if(studentList && studentData){

	studentData.forEach(function(name,i){

	var stuEle = document.createElement('li');
	var morebtn = document.createElement('button');
	var stuTextNode = document.createTextNode(++i + ')' + name);

	morebtn.innerHTML = "view";
	morebtn.setAttribute('class','primary-btn');
	morebtn.setAttribute('data-name','name');

	morebtn.addEventListener('click',function(){

		var student = this.getAttribute('data-name');
		alert("More about" + student);

	});


	stuEle.appendChild(stuTextNode);
	stuEle.appendChild(morebtn);

	
	studentList.appendChild(stuEle);
});
}

});


