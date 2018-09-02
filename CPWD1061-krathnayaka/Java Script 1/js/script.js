var studentRecords = function(){
	
	var studentData = [{
		
		name:"Kasuntha",
		email:"kasuntha.lk@gmail.com"
		
	},{
		
		name:"Gihan",
		email:"gihan.lk@gmail.com"
		
	},{
		
		name:"Rathnayaka",
		email:"rathnayaka.lk@gmail.com"
		
	}];
	
	var DOMReady = function(){
		
		var appRoot = document.getElementById('app');
		
		studentData.forEach(function(record,index){
			
			var tNode = document.createTextNode(record.name);
			var p = document.createElement('p');
			var btn = document.createElement('button');
			
			btn.innerHTML = record.id;
			btn.setAttribute('data-id',record.id);
			
			p.appendChild(tNode);
			p.appendChild(btn);
			appRoot.appendChild(p);
				
			btn.addEventListener('click',function(){
				var id = this.getAttribute('data-id');
				var index = studentData.map(function(record){
					return record.id;
					
				}).indexOf(id);
				
				
				
			});
			
			
		});
		
	};
	
	document.addEventListener('DOMContentLoaded',DOMReady);
	
}();


