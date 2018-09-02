

/*
	var name = 'Mandakini',
	 	textNode = document.createTextNode( name );
	 	para = document.createElement( 'p' );

	para.appendChild(textNode);/*(4)*/

	/*document.addEventListener('DOMContentLoaded',function(){/*(6)*/
		//console.log('Loaded');

	/*var display = document.querySelector('personal-details');/*(5)*/
	/*display.appendChild(para);
	//console.log(display);
//});


}();*/

var studentRecords = function(){


	//var studentData  = ["Archana", "Sakuni" ,"Mandakini"];
	var studentData  = [{
		name:"Archana",
		email:"archana.sakuni@pace.lk"
	},{
		name:"Sakuni",
		email:"sakuni@pace.lk"
		},{

		name:"Mandakini",
		email:"mandi@pace.lk"
		}];


		/*Find index*/




	var DOMReady = function(){
		var appRoot = document.getElementById('app');

		studentData.forEach(function( record , index ){
			var tNode = document.createTextNode( record.name );
			var p = document.createElement('p');
			var btn = document.createElement('button');

			btn.innerHTML = record.id;
			btn.setAttribute('data-id',record.id);

			p.appendChild( tNode );
			p.appendChild( btn );

			btn.addEventListener('click',function(){
				var id = this.getAttribute('data-id');
				var index = studentData.map(function(record){
					return record.id;
				}).indexOf( id );

				var student = studentData[index]
				alert(
						Reg Number ${student.id}
						Name ${student.name}
						Email ${student.email}

					);

				console.log( student );

				

			});

			

		
			

			
			appRoot.appendChild( p );



		});
	};
	console.log()

	document.addEventListener('DOMContentLoaded',DOMReady);
};











