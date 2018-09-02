var printMyName = function(){
	
	var name = "Kasuntha Rathnayaka"

	var tNode = document.createTextNode(name);

	var para = document.createElement('p');

	para.appendChild(tNode);

	document.addEventListener('DOMContentLoaded',function(){
	
	
	
		var display = document.getElementsByClassName('personal_details');

		display[0].appendChild(para);
		console.log(display[0]);
	
	
	});
	
}();//call function//

