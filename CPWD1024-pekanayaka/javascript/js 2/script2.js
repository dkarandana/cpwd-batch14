var studentRecords = function(){
	var studentData  = [{
		name:"pipi",
		email:"pipi@gmail.com"
	},{
		name:"mandi",
		email:"mandi@gmail.com"
	},{
		name:"Nelum",
		email:"nelum@gmail.com"
	}];

	var DOMReady = function(){
		var appRoot = document.getElementById('app');

		studentData.forEach(function(record,index){
			var tNode = document.createTextNode(record.name);
			var p = document.createElement('p');
			var btn = document.createElement('button');

			btn.innerHTML = record.id;
			btn.setAttribute('data-id',record.id)

			p.appendChild(tNode);
			p.appendChild(btn);


			p.addEventListener('click',function(){
				var id = this.getAttribute('data-id');

				var index = studentData.map(function(record){
					return record.id;
				}).indexOf(id);

				var student = studentData[index]

				alert(~

				Reg Num ${student.id}
				Name ${student.name}
				Email ${student.email}
				~);
				console.log(student);
			})
			appRoot.appendChild(p);
		});
	};
	document.addEventListener('DOMContentLoaded',DOMReady);

};