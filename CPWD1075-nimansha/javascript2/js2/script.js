/*varprintMyName = function(){
	var name = ["nimansha" , " eshani "] ;
		textnode = document.createTextNode( name );
		para = document.createElement('p');

	 	para.appendChild( textnode );


document.addEventListener('DOMContentLoaded', function (){
	var display = document.getElementsByClassName( 'personal details');
	display[0].appendChild( para );

	});


}();*/

var studentRecords = function(){

	var studentdata = [{
		id:"001",
		name: "nimansha" ,
		email: " dhsbcjs@dhshf.com "
	},{
		id:"002",
		name: "eshani" ,
		email: "fedfuefjgamil.com   "

	},{ 
		id:"003",
		name: "tharindi" ,
		email: "  wdjkljwk@gash.com   "
	}];

	

		

	var DOMready = function(){
		var appRoot = document.getElementById('app');

			studentdata.forEach( function(name,i){
			var tnode = document.createTextNode( name );
			var p = document.createElement(p);


			btn.innerHTML = " record.id ";
			btn.setAttribute('data-id', record.id);

			p.appendChild( tnode );
			appRoot.appendChild( btn );



			btn.addEventListener('click', function(){
				var id = this.getAttribute('data-id');
				var index = studentdata.map(function(record){
					return record.id;
				}).indexOf( id );

			var student = studentdata[index]


			alert(`
				Reg Number ${student.id} 
				Name ${student.name}
				Email ${student.email}
				`);





				console.log(student);




			});
				appRoot.appendChild( p );

		});
			

};
	
			

	document.addEventListener('DOMContentLoaded', DOMready);

	};




