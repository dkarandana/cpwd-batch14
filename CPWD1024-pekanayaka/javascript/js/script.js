console.log("javascript.js");

/*1 loop*/var studentData = [
		"Pradeepika",
		"Thashma",
		"Mandakini"
];
var myFunc = function(value,index){
	console.log(value,index)
};

studentData.forEach(myFunc);

console.log(studentData);

/*2 loop
var languages = [
	"HTML",
	"PHP",
	"CSS"
];
var myLang = function(value,index){
	console.log(value,index)
};
languages.forEach(myLang);
console.log(languages);*/

			/*DOM Manipulation*/

document.addEventListener('DOMContentLoaded', function(){
	console.log('DOMLoaded');

	var studentList = document.getElementById('student-list');

	if(studentList && studentData ){
		studentData.forEach(function(name,i){

		var para= document.createElement('li')
		var morebtn = document.createElement('button')

		morebtn.innerHTML = "View";
		morebtn.setAttribute('class','primary-btn');
		morebtn.setAttribute('data-name',name);


		morebtn.addEventListener('click',function(){
			 var student = this.getAttribute('data-name');
			 alert("More about" + student);
		
		});

		var paraTxt = document.createTextNode(++i + ')' + name);

		para.appendChild(paraTxt);
		para.appendChild(morebtn);
		studentList.appendChild(para);
	});
		
	}
});

