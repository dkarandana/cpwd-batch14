var studentData = ["Thashma", "Pradeepika", "Mandakini"];
console.log(studentData);

var myFunction = function(value, index){
	console.log(value,index);

};

studentData.forEach(myFunction);

	/*DOM Manipulation*/

document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM Loaded',studentData);

	var studentList = document.getElementById('student-list');

	if ( studentList && studentData){

		studentData.forEach( function(name,i){
			var paraElement = document.createElement('li');
			var	viewmore = document.createElement('button');
			var paraText = document.createTextNode(++i + ')' + name);

			viewmore.innerHTML ="view more";
			viewmore.setAttribute('class','primary-btn');
			viewmore.setAttribute('data-name', name);


			viewmore.addEventListener('click',function(){
				var student = this.getAttribute('data-name');
				alert('More about'+ student );
			});


			paraElement.appendChild(paraText);
			paraElement.appendChild(viewmore);

			studentList.appendChild(paraElement);

				console.log(studentList);
			});

	}

});









