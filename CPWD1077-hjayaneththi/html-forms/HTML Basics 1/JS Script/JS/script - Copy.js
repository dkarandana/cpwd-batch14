console.log ("Script.js");

var studentlist = ["Harindra","Nimansha","Tharindi","Poorni"];
console.log(studentlist);


var Myfun1= function(value,index) {
	console.log (value,index) ;
};



studentData.forEach(Myfun1);

document.addEventListner('DOMContentLoaded',function() {
console.log ('DOM Loaded');


var studentList= document.getElementByid ("student-List");

if( studentList && studentData) {

studentData.forEach (function(name,i) {
var studentEle = document.createElement ('li');
var morebtn = document.createElement ('Button')
var studentTextNode = document.createTextNode(++i|+ ')' +

morebtn.innerHTML = "view";
moreebtn.setAttribute('class','primary-btn')
moreebtn.setAttribute('data-name','name');

morebtn.addEventListner('click,function' ( ) {
 var student = this.getAttribute('data-name');
 alert("More about"+ student);
}) ;


studentEle.appenChild(studentTextNode);
studentEle.appenchild (morebtn) ;
studentList.appenchild (studentEle);
console.log (studentList)

});



/*
para.appenChild (paraText) ;
studentlist.appenChild(para);
console.log (studentlist); */