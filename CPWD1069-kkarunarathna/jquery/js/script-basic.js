
jQuery(document).ready( function(){
	console.log( 'DOMReady' );
	
	var $seoH1 = jQuery('h1');
	
	console.log( $seoH1 );
	$seoH1.css( 'color','red');
	
	 $seoH1.click(function(){
		 $seoH1.text("kasuni")
	 });
	
	var $box = jQuery('#box');
	$box.css({
			height:100,
			width:100,
			backgroundColor:'blue'
	}).text('hello world');
	
});