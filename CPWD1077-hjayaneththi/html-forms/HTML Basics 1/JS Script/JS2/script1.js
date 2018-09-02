var studentsRecords = function () {
var studentData = [{
	name: "Harindra",
	email: "hariendrat@gmail.com"
},{

	name:"Shashini",
	email: "malsha@gmail.com"
},

	name:"Hiruni",
	email:"hiruni@gmail.com" }];

var DOMReady = function () {
var appRoot = document.getElementById('app');



studentData.forEach(function( record , index){
	var tNode = document.createTextNode(record.name );
	var p = document.createElement('p');
	var btn = document.createElement('button');
	btn.innerHTML = "view"


	p.appendChild( tNode );
	appRoot.appendChild( p );


});

};
 
 document.addEventListener('DOMContentLoaded')



}


alert(
	Reg Number ${student.id}
	Name ${}
























/*
var printMyName = function(){
var name = "Harindra";
var textNode = document.createTextNode(name);
var para = document.createElement('p');
para.appendChild( textNode );

document.addEventListener('DOMContentLoaded' , function () { 
var display = document.querySelector('Personal Details');

display.appendChild( para );

});

}); */



/*
console.log( display );
console.log('Loaded');

var display = document.getElementsByClassName('Personal Details');
console.log (display); 
console.log( para );
console.log( textNode );


*/

