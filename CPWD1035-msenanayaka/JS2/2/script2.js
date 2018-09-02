var record = function(){

	var studentData = [{
			id : "CPW0001",
			name : "Mahesha",
			email : "maheshajpura@gmail.com",
		},{
			id : "CPW0002",
			name : "Pubudu",
			email : "pubudu@gmail.com",
		},{
			id : "CPW0003",
			name : "Dasun",
			email : "dasun@gmail.com",
		},{
			id : "CPW0004",
			name : "Waruna",
			email : "waruna@gmail.com",
		},{
			id : "CPW0005",
			name : "Saman",
			email : "saman@gmail.com",
		},{
			id : "CPW0006",
			name : "Gamitha",
			email: "gamitha@gmail.com",
		}];


	var DOMReady =function(){
		var appRoot = document.getElementById('app');

		studentData.forEach(function(record,index){
			var tNode = document.createTextNode( record.name );
			var p = document.createElement("p");
			var btn = document.createElement('button');

			btn.innerHTML = record.id;
			btn.setAttribute('data-id',record.id);


			p.appendChild(  tNode );
			p.appendChild( btn );
			appRoot.appendChild( p );

			btn.addEventListener('click',function(){
				var id = this.getAttribute('data-id');
				var index = studentData.map(function(record){
					return record.id;
				}).indexOf( id );

				var student = studentData[index]

				alert(`
						Reg Number 	${student.id}
						Name 		${student.name}
						Email 		${student.email}
					`);


				console.log( student );
				console.log('clicked',this);
			});
		});
	};
	document.addEventListener('DOMContentLoaded', DOMReady);

}();