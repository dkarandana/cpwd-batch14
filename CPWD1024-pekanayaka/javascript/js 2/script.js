var studentRecords = function(){
	var studentData = ["Dhananjaya","Lahiru","Prabath"];

	var DOMReady = function(){
		var appRoot = document.getElementsById(app);

		studentData.forEach(function(name, i){
			var tNode = document.createTextNode(name);
			var p = document.createElement('p');

			p.appendChild(tNode);
			appRoot.appendChild(p);
		});
	};

	document.addEventListener('DOMContentLoaded',DOMReady);
}();


/*var printMyName = function(){
 	var name = 'Pradeepika'; /*01*
console.log(name);

var textNode = document.createTextNode(name); /*02
console.log(textNode);

var para = document.createElement('p');  /*03
console.log(para);

para.appendChild(textNode);  /*04

document.addEventListener('DOMContentLoaded', function(){

	/*var display = document.getElementsByClassName('personal-data');

	display[0].appendChild(para);
	console.log(display[0]);

	console.log('Loaded');

	var display = document.querySelector('.personal-data');

	display.appendChild(para);

});

 }();*/





