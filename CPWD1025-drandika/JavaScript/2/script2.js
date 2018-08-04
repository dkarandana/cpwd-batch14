console.log("script2.js");

 var studentList = ["Deshan","Randika","Wick","Erick","Lannister"];
console.log = (studentList); 


var func = function (value,index) {
	console.log=(value,index);
};

studentList.forEach( func ); 



/* DOM Manipulation*/
document.addEventListener("DOMContnetLoaded",function(){
	console.log("DOMContnetLoaded");

var studentList = document.getElementById('student-list');
if (studentList) {
var para = document.createElement("p");
var paragraph = document.createTextNode("THE PARAGRAPH");
 	
 	para.appendChild(paragraph);
 	studentList.appendChild(para);

};

});


document.addEventListener("DOMContnetLoaded",function(){
	var studentList = document.getElementById("list");
if ( list && studentList) {

	studentList.forEach(function(name,index){
	var studentEle = document.createElement("li");
	var studentTextNode = document.createTextNode(++i);
	var morebtn = document.createElement("button");


	morebtn.innerHTML = "viwe";
	morebtn.setAttribute("class","primary-btn");
	morebtn.setAttribute("data-name",name);

	morebtn.addEventListener("click",function(){
		var student = this.getAttribute("data-name");
		alert("CLICK"+ student);
	});

	studentEle.appendChild(studentTextNode);
	studentList.appendChild(studentEle);
	studentEle.appendChild(morebtn);


});	


};	

});

















