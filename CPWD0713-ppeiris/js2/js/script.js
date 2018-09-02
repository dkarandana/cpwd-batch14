console.log('aa');

var printMyName = function(){
	var studentname = "Dasun4";


	var t =document.createTextNode(studentname);
	//console.log(t);

	var stContainer = document.createElement('p');

	console.log(stContainer);

	stContainer.appendChild(t);

	document.addEventListener('DOMContentLoaded',function(){

	console.log('loaded');
	//var display = document.getElementsByClassName('personal-details'); 
	var display = document.querySelector('.personal-details')
	console.log(display);

	//display[0].appendChild(stContainer); //
	display.appendChild(stContainer);

	});

}();











