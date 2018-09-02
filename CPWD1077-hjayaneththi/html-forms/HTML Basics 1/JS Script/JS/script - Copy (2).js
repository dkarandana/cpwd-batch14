console.log ("script.js");

var studentdata= ["Harindra","Nimansha","Tharindi","Poorni"];
console.log(studentlist);


var Myfun1= function(index,name) {
	console.log (index,name) ;
};



studentdata.forEach(Myfun1);

document.addEventListener('DOMContentLoaded',function () {
console.log ('DOM Loaded');


var studentlist = document.getElementById ('studentlist');

if(studentlist && studentdata){

studentdata.forEach(function (name){
var student1= document.createElement ('s');
var morebtn = document.createElement ('button');
var paraText= document.createTextNode(name);

morebtn.innerHTML = "view";
morebtn.setAttribute('class','primary-btn');
morebtn.setAttribute('data-name', name);

morebtn.addEventListener('click',function(){
 var student = this.getAttribute('data-name');
 alert("More about"+ student);

}) ;


student1.appendChild(paraText);
studentlist.appendChild (student1) ;
studentlist.appendChild (morebtn);

console.log (studentlist);

})

}



}) ;



/*
para.appenChild (paraText) ;
studentlist.appenChild(para);
console.log (studentlist); */