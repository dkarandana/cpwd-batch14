var studentData=["Kasuntha","Gihan","Rathnayaka","Chamara"];

	/*var myfunction = function(value,index){
		
		console.log(value,index)
		
	};
	
	studentData.forEach(myfunction);*/
	
	
	
	document.addEventListener('DOMContentLoaded',function(){
		console.log('DOM Loaded');
		
		var studentList = document.getElementById('student-list');
		
		if(studentList && studentData){
			
			studentData.forEach(function(name,index){
				
				var studentEle = document.createElement('li');
				
				var studentTextNode = document.createTextNode(++index + ')'+(" ")+ name);
				
				var viewbtn = document.createElement('button');
				
				viewbtn.innerHTML = "view";
				viewbtn.setAttribute('class','primary-btn');
				viewbtn.setAttribute('data-name', name);
				
				viewbtn.addEventListener('click', function(){
					var student = this.getAttribute('data-name');
					alert('More about'+(" ") + student);
					
				
					
				});
				
				studentEle.appendChild(studentTextNode);
				studentEle.appendChild(viewbtn);
				studentList.appendChild(studentEle);
			});
			
			
			/*DOM MANIPULATION*/
			/*var para = document.createElement('p');
	
			var paraText = document.createTextNode("your text goes here");
	
			para.appendChild(paraText);
	
			studentList.appendChild(para);*/
			
		}
		
		
	});
	
		
	
	/*console.log(studentList);*/