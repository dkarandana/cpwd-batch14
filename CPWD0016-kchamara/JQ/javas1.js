

var studentData = [{
	name:"chamara",
	email:"chamara@hotmail.com"
},{
	name:"nimal",
	email:"nimal@hotmail.com"
},{
	name:"ravi",
	email:"ravi@hotmail.com"
},];

	var DOMReady = function(){
	var appRoot = document.getElementById('app');
		
		studentData.forEach(function( record , index ){
			var tNode = document.createTextNode( record.name );
			var p = document.createElement( 'p' );
			var btn = document.createElement('button');
			
			btn.innerHTML = "record.id";
			btn.setAttribute('data-id',record-id);
			
			p.appendChild( tNode );
			p.appendChild( btn );
			
			btn.addEventListener('click',function(){
				var id = this.getAttribute('date-id');
				var index = studentData.map(function( record ){
					return record.id;
				}).indexOf( id );
				
				var student = studentData[index]
				
				aleart(
				Reg Number ${student.id}
				Name ${student.id}
				Email ${student.id}
				
				);
				
				console.log( student );
 });

			appRoot.appendChild( p );
			
		});
		
	};
	
	


2. /*var printMyname = function(){
	var name = 'Chamara',
	textNode = document.createTextNode( 'name' ),
	para = document.createElement( 'p' );
	
	para.appendChild( textNode );
	
	document.addEventListener('DOMContentLoaded'), function(){
	var display = document.querySelector('.PersonalData' );
	display.appendChild( para );
	
	});
}();
	

1.   /*var name = "Chamara";
	var textNode = document.createTextNode( name );

	var para = document.createElement( 'p' );

	Document.addEventListener('DOMContentLoaded'), function(){
	var display = document.getElementsByClassName( PersonalData );
	
	display[0].appendChild( para );
	
	
});

	
	console.log( para );
	console.log( textNode );

	

  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 