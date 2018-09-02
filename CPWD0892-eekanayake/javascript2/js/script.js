var studentRecords = function(){
	var studentData = [{
		name:"Eshan",
		email: "e@gmail.com"
		},{
		name: "hasanka",
		email: "has@gm.com"
		},{
		name:"ekanayake"
		email: "eka@gmail.com"
		},{
		name:"suresh",
		email: "sur@yhoo.com"
		}];
	
	var DOMReady = function(){
		var stListRoot = document.getElementById('Student-List');
		
		studentData.forEach(function(record,index){
			
			var textNode = document.createTextNode(record.name);
			var para = document.createElement('p');
			var btn = document.createElement('button');
			
			btn.innerHTML = record.id;
			btn.setAttribute('data-id',record.id);
			
			p.appendChild(tNode);
			p.appendChild(btn);
			stListRoot.appendChild(p);
				
			btn.addEventListener('click',function(){
				var id = this.getAttribute('data-id');
				var index = studentData.map(function( record ){
					return record.id;
				}).index(id);
				
				var student = studentData[index]				
				)
				
				
				
			});
				
			para.appendChild( textNode );
			stListRoot.appendChild( para );
				
		});
		};
		
	Document.addEventListener('DOMContentLoaded' , DOMReady);
	
}();











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



/*Dom manupilation
document.addEventListener( 'DOMContentLoaded', function() {
	var studentList = document.getElementById('student-List');

	if( studentList && studentData ){
	
		studentdata.forEach(function( name, index ){	
			var stdElement = document.createElement('li');
			var morebtn = document.createElement('button');
			var stdTextNode = document.createTextNode(++ index +')' + name);
			
			morebtn.innerHTML = "view";
			morebtn.setAttribute('class','primary-btn');
			morebtn.setAttribute('data-name',name);
			
			morebtn.addEventListener('click',function(){
				var student=this.getAttribute('data-name');
				alert("More about" + student);
			});
			
			stdElement.appendChild( stdTextNode );
			stdElement.appendChild( morebtn );
			studentList.appendChild( stdElement );
		});
	}
});

/*
document.addEventListener('DOMContentLoaded' , function(){
	var personalDetails = document.getElementsByClassName('personal _details');
	console.log(personalDetails);
	
	var paragrahElement = document.createElement('p');
	var paragraphTextNode = document.createTextNode("Eshan");
	
	paragrahElement.appendChild( paragraphTextNode );
	personalDetails.appendChild()
});
*/

/*var printMyName = function(){
	var name = "Eshan hasanka";
	var nametextnode = document.createTextNode( name );
	var paraElement = document.createElement( 'P' );

	/*
	var name = "Eshan hasanka",
		nametextnode = document.createTextNode( name ),
		paraElement = document.createElement( 'P' );
	*/
	/*paraElement.appendChild( nametextnode );

	document.addEventListener( 'DOMContentLoaded', function(){
		var display = document.querySelector('.personal_data');
		display.appendChild( paraElement );
	});
}();*/

