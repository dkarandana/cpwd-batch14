jQuery(document).ready(function(){
	console.log('DOM Ready');

	/*var $seoH1 = jQuery('h1');

	
	$seoH1.css('color','Green');

	console.log($seoH1);*/
	var $seoH1 = jQuery('h1');

	
	$seoH1.css('color','Green');

	console.log($seoH1.text("SEO H1 Upadated")); //text

	
	var $seoH1 = jQuery('h1');

	
	$seoH1.css('color','Green');

	$seoH1.click(function(){
		$seoH1.text("SEO H1 Upadated")
	});

	console.log($seoH1.text("SEO H1 Upadated"));


	 /*Add Color to above define object($seoH1)*/ 

	 var $box = jQuery('#box');

	 //METHOD 01
	$box.css('width' ,200 );
	$box.css('height' , 200);
	$box.css('backgroundColor' ,'blue');

	//METHOD 02

	var $boxx = $('#boxx');

	$boxx
		.height(200)
		.width(200)
		.css('backgroundColor','gold');

	//METHOD 03
	/*var $boxxx = $('#boxxx');

	$boxxx.css({
		height:100,
		width:250,
		backgroundColor:'pink'
	});




	console.log($boxxx);*/

	var $boxxx = $('#boxxx');

	$boxxx.css({
		height:100,
		width:250,
		backgroundColor:'pink'
	}).text('Hello pipi How R u....!'); //text




	console.log($boxxx);
	
});

