jQuery( document ).ready( function(){
	console.log('DOM Ready');
	
	var $seoH1 = jQuery('h1');

	console.log($seoH1);

	$seoH1.css('color' , 'blue');

	$seoH1.click(function(){
			$seoH1.text("SEO h1")
	});

	/*
	var $seo = jQuery('#box');
	$seo.css('color' , 'blue');
	$seo.height('200px');
	$seo.width('200px');
	$seo.css('backgroundColor' , 'red'); */

		//OR

	
	var $seo = jQuery('#box');
	$seo
	.css('color' , 'blue')
	.css('height' , '200px')
	.css('width' , '200px')
	.css('backgroundColor' , 'red');	

		
/*
	var $seo = jQuery('#box');
	$seo.css({
			color:blue,
			height:200px,
			width:200px,
			backgroundColor:'red'

		}).text('Hello');
					
*/



});

