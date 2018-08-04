
/*
var studentData = ["rukshan", "lahiru", "sumedha", "charith", "nalin", "danidu"];
console.log( studentData );

var func1 = function( value, index ){
			console.log( value, index );
	
};


studentData.forEach (func1);*/

/*dom manipulation  */


/*
var studentlist= document.getElementById("student-list");

var stName= document.createElement("p");
var stText= document.createTextNode("this is s test");

stName.appendChild(stText);
studentlist.appendChild(stText); */





/*
document.addEventListener('DOMContentLoaded', function(){
	console.log('sdom dom dom');

	var studentlist= document.getElementById("student-list");

	if(studentlist){
		var stName= document.createElement("p");
var stText= document.createTextNode("this is s test");

stName.appendChild(stText);
studentlist.appendChild(stText);

	}
});
*/



var studentData = ["rukshan", "lahiru", "sumedha", "charith", "nalin", "danidu"];
document.addEventListener('DOMContentLoaded', function(){
	var studentlist= document.getElementById("student-list");
	if(studentlist && studentData){

		studentData.forEach(function (value , index ){
		var stName= document.createElement("li");
		var moreButton= document.createElement("button");
		var stText= document.createTextNode(index+" "+value );
		
		moreButton.innerHTML="view"
		moreButton.setAttribute('class','primary-btn');
		moreButton.setAttribute('data-name',value);

		moreButton.addEventListener('click', function(){
			var studentDetail=this.getAttribute('data-name');
			alert(studentDetail);
		});
		
		stName.appendChild(stText);
		studentlist.appendChild(stName);	
		studentlist.appendChild(moreButton);
		});
	}
});