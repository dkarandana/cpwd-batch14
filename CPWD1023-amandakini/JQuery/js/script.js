jQuery( document ).ready( function(){
	console.log('DOM Ready');

	var $seoH1 = jQuery('h1');
	
	$seoH1.css('color','red');

	$seoH1.click(function(){
		$seoH1.text("SEO h1 Updated")
	});
	
	/*var box = jQuery('#box');
	box.css('height','200px');
	box.css('width','200px');
	box.css('background','blue');
	box.css('color','red');*/

	var $box = $('#box');
		/*Sbox
			.height(200)
			.width(200)
			.css('backgroundColor','gold');*/

	$box.css({
		height:200,
		width:200,
		backgroundColor:'pink'
		.text('Hellow Worid!!')



	});


	
	


});