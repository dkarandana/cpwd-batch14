
var studentData = ["rukshan", "lahiru", "sumedha", "charith", "nalin", "danidu"];
console.log( studentData );

var func1 = function( value, index ){
			console.log( value, index );
	
};


studentData.forEach (func1);


/* DOM Elemnt */

/* document.addEventListner('DOMContentLoaded', function(){
	console.log('DOM Loaded');

	var studentlist = document.getElementById('student-list');
	
	if ( studentlist && studentData ) {
	
	var sname = document.createElement ('p');
	var paraText = document.createTextNode('add text here');

	sname.appendChild ( paraText );
	studentlist.appendChild ( sname );
	
	}
	
}); */

document.addEventListner('DOMContentLoaded', function(){
	

	var studentlist = document.getElementById('student-list');
	
	if ( studentlist && studentData ) {
	
	studentData.forEach(function ( name, i ){
		var studentEle = document.createElement('li');
		var morebtn = document.createElement('button');
		var studentTextNode = document.createTextNode ( ++i + ' ) ' +
		
		
		morebtn.innerHTML = "view";
		morebtn.setAttribute('class', 'primary-btn');
		morebtn.setAttribute('data-name', name );
		
		morebtn.addEventListner('click', function(){
			var student = this.getAttribute('data-name');
			alert('more about' + student);
			
		});
		studentEle.appendChild( studentTextNode );
		studentEle.appendChild( morebtn );
		
		studentlist.appendChild ( studentEle );
		
	});
  }
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 