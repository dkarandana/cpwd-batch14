jQuery( document ).ready( function(){
	//console.log( 'DOM is ready');
	
	var $box = jQuery( '#box' );
	var $seoh2 = jQuery( 'h2' );
	
	$seoh2.css( 'color','red' );
	
	/*$box.css( 'backgroundColor','blue' );
	$box.height( 100 );
	$box.width( 500 );*/
	
	
	
	/*$box.
		height( 100 )
		width( 500 )
		css('backgroundColor','blue' );*/
		
	$box.css({
		height:200,
		width:250,
		backgroundColor: 'green'
	});
	
	console.log( $box );
	console.log( $seoh2 );
	
});