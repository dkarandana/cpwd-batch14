	var studentData = new Array("Samal","Supun","Sadun","Kasun","Amal");

	var myFunc = function( name, index ){
		console.log(name,index)
	};
		
	studentData.forEach( myFunc );
	document.addEventListener('DOMContentLoaded',function(){
		console.log('DOM Loaded')
	var studentList = document.getElementById("student-list");
	
	
	if(studentList && studentData ){
		
		studentData.forEach(function(name,i){
		var studentEle = document.createElement( 'li' );
		var morebtn = document.createElement('button');
		var studentTextNode = document.createTextNode(++i + ')'+ name );
		
		/*morebtn.innerHTML = "view";
		morebtn.setAttribute('class','primary-btn');
		morebtn.setAttribute('data-name','name');
		alert("More about" + student);
		});*/
		

		studentEle.appendChild( studentTextNode );
		studentList.appendChild( studentEle );
		});
	}
	});

                     