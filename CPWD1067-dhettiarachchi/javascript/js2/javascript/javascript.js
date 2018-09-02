/*var printmyname= function(){


var myname = "duminda";
var tnode =document.createTextNode( myname );
var namep = document.createElement( "p");

namep.appendChild(tnode);

console.log( namep );

document.addEventListener('DOMContentLoaded',function(){

var display=document.getElementsByClassName( "personal-details" );
display[0].appendChild( namep );

// var display=document.querySelector( ".personal-details" );
// display.appendChild( namep );

//var display=document.querySelectorAll( ".personal-details" );
//display.appendChild( namep );


});
}();
*/
/*printmyname();


function printmyname(){


var myname = "duminda";
var tnode =document.createTextNode( myname );
var namep = document.createElement( "p");

namep.appendChild(tnode);

console.log( namep );

document.addEventListener('DOMContentLoaded',function(){

var display=document.getElementsByClassName( "personal-details" );
display[0].appendChild( namep );

//var display=document.querySelector( ".personal-details" );
//display.appendChild( namep );

//var display=document.querySelectorAll( ".personal-details" );
//display.appendChild( namep );


});
}*/


/*var record=function(){

	var studentname=["kasun" , "supun" , "kalum"];
 var Docready= function(){
 var approot=document.getElementById("root");
	studentname.forEach(function(name ,index){
	var textnode= document.createTextNode( name );
	var litag= document.createElement("li");
	litag.appendChild(textnode);
	approot.appendChild(litag);
});
}
document.addEventListener('DOMContentLoaded',record();
}*/




var record=function(){

	var studentname=[{
		id:"001",name:"kasun",email:"kasun@yahoo.com"
		},{
		id:"002",name:"supun",email:"supun@yahoo.com"
	},{
		id:"003",name:"kalum",email:"kalum@yahoo.com"

	}];
 var Docready= function(){
 var approot=document.getElementById("root");
	studentname.forEach(function(record, index){
	var textnode= document.createTextNode( record.name );
	var litag= document.createElement("p");
	var btn=document.createElement("button");
	btn.innerHTML=record.id;
	btn.setAttribute('data-id',record.id);

	litag.appendChild(textnode);
	litag.appendChild(btn);

	// approot.appendChild(litag);
	btn.addEventListener("click",function(){
		var id=this.getAttribute('data-id');
		var index= studentData.map(function(recoed){
			return record.id;
		}).indexOf(id);
		var student =studentData[index]

		alert(`reg Number ${student.id}
			Name ${student.name}
			email ${student.email}`
			)
		console.log('Clicked', this);
	})

});
}
document.addEventListener('DOMContentLoaded',record());
}


