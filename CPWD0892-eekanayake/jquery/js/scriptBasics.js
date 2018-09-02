 jQuery( document ).ready(function(){
		
	var $seoh1 = jQuery('h1');
	
	$seoh1.css( 'color','red');
	
	var $box = $('#box');
	
	
	$box.css({
		height:200,
		width:200,
		backgroundColor:'blue'
		}).text('Hello world');
	
	console.log('$box');
	
 });
 
 /* .height .width jQuery wala methord dekak nisa 
	$box.css('backgroundColor', 'Blue');
	$box.css('height', '200px');
	$box.css('width', '200px'); 
	
	$box
		('backgroundColor', 'Blue')
		.height( 200 )
		.width( 200 );
		
	$box.css('backgroundColor', 'Blue');
	$box.css('height', '200px');
	$box.css('width', '200px');
	
	
	*/