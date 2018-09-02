var printMyName = function(){
var name = "mahesha";

var textNode = document.createTextNode(name);

var para = document.createElement("p");

para.appendChild(textNode);

document.addEventListener('DOMContentLoaded', function(){
	var display = document.getElementsByClassName("personal-data"); 
	//var display = document.querySelector('.personal-data');
	display[0].appendChild(para);
	console.log(display[0]);

	
})

console.log(textNode);
console.log(para);	
}();

