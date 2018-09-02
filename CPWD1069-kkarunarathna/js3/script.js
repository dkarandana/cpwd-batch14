
	var PrintMyName = function(){
		var name = "kasuni karunarathna"
		    textNode = document.createTextNode( name );
			para = document.createElement('p');
			
		para.appendChild( textNode );
		
		
		document.addEventListener('DOMContentLoaded', function(){
			var display = document.getElementsByClassName('personal-details');
			display[0].appendChild( para );
			
			/*console.log(para)
			console.log('Loaded');
			console.log( display[0] );*/
		});
	}();