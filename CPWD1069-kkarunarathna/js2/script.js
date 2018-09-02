	
	var studentrecord = function(){
	var studentData = [{
		name:"Samal"
		Email:"samal@gmail.com"
	},{
		name:"Supun"
		Email:"samal@gmail.com"
	},{
		name:"Sadun"
		Email:"samal@gmail.com"
	},{
		name:"kasun"
		Email:"samal@gmail.com"
	}];	
	
	var DOMReady = function(){
		var appRoot = document.getElementById('student-list');
		
		studentData.forEach(function(name,i){
			var tNode = document.createTextNode( name );
			var para = document.createElement('p');
			var btn = document.createElement('button');
			
			btn.innerHTML = "view"
			btn.setAttribute('data-id',record.id);
			
			para.appendChild( tNode );
			appRoot.appendChild(btn);
			
			btn.addEventListener('click',function(){
				var id = this.getAttribute('dats-id');
				var index = studentData.map(function( record ){
					return record.id;
				}).indexOf( id );
				
				var student = studentData[index]
				
				alert(`
					Reg Number ${student.id}
					Name ${student.name}
					Email${student.email}
				`);
				
		});
		
	};
	document.addEventListener('DOMContentLoaded',DOMReady());
	}();
