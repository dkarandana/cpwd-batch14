
var studentData = ["rukshan", "lahiru", "sumedha", "charith", "nalin", "danidu"];
console.log( studentData );

var func1 = function( value, index ){
			console.log( value, index );
	
};


studentData.forEach (func1);


/* DOM Elemnt */

var studentlist = document.ElemntById('student-list');
var sname = document.createElement ('p');
var paraText = document.createTextNode('add text here');

sname.appendChild ( paraText );
studentlist.appendChild ( sname );
