
/*var printMyname =function(){
	var name ='Tharindi';
 		textNode = document.createTextNode( name );
		para = document.createElement( 'p' );

		para.appenedChild(textNode);

	document.addEventlitstener("DOMContentLoaded" function(){
	var display = document.getElementsByClassname( 'personaldetails' );
		display.appenedChild(para);

	};
	
});
*/ 

var studentRecords = function(){

	var studentData = [{
		name:"Tharindi",
		email:"tharindi9411@gmail.com",
	}, {
 		name:"Eshani",
 		email:"thmm@gmail.com",

	}, {
		name:"Harindra",
		email:"mhryd@gmail.com",

	}];

	var DOMReady = function(){

		var appRoot = document.getElementById('app');

		studentData.forEach(function( record , index ){
			var tNode =document.createTextNode( record.name );
			var p = document.createElement(' p ');
			var btn = document.createElement('button');

			btn.innerHTML = recoad,id;
			btn.setAttribute('data-id',record.id);

			p.appenedChild( tNode );
			p.appenedChild( btn );

			btn.addEventLitstener('click', function(){
				var id = this.getAttribute('data-id');
				var index = studentData.map(function( record ){
					return record.id;
				}).indexOF( id );

				var student = studentData[index]

				alert(
					Reg Number ${student.id}
					Name ${student.name}
					Email ${student.email}
					);
				
				console.log( student );
			});
			

		});
	};

	document.addEventLitstener('DOMContentLoaded',DOMReady);
};