var studentData = ["Mahesha","Pubudu","Dasun","Waruna","Saman","Gamitha"];

var myfunc= function(value,index){
	console.log(value,index);
	
}
studentData.forEach(myfunc);

console.log(studentData);

					/*DOM Manipulate*/
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOM loaded');
	
	var studentList = document.getElementById('student-list');
	
	if( studentList && studentData ){
		studentData.forEach(function(name , index){
			if(studentList){
				var studentElement = document.createElement('ul');
				var morebuttn = document.createElement('button');
				var studentTextNode = document.createTextNode(++index + ') ' +name);
				
				morebuttn.innerHTML = "View";
				morebuttn.setAttribute('class','primary-button');
				morebuttn.setAttribute('data-name', name);
				
				morebuttn.addEventListener( 'click' , function(){
					//alert("clicked");
					var student = this.getAttribute('data-name');
					alert(" " + student );
				})
				
				studentElement.appendChild( studentTextNode );
				studentElement.appendChild( morebuttn );
				
				studentList.appendChild( studentElement );
				console.log(morebuttn);
	}
		})
	}
})
