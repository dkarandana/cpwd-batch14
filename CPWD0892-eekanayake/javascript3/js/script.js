var printMyName = function(){
	var name = "Eshan hasanka";
	var nametextnode = document.createTextNode( name );
	var paraElement = document.createElement( 'P' );

	/*
	var name = "Eshan hasanka",
		nametextnode = document.createTextNode( name ),
		paraElement = document.createElement( 'P' );
	*/
	paraElement.appendChild( nametextnode );

	document.addEventListener( 'DOMContentLoaded', function(){
		var display = document.querySelector('.personal_data');
		display.appendChild( paraElement );
	});
}();


