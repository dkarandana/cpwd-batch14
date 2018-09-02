/***
* @see https://api.jquery.com/ready/
*/

jQuery(document).ready(function() {
	console.log('DOM READY');

	var $seoH1 = jQuery('h1');
	$seoH1.css('color', 'red');

	console.log($seoH1);

	var $box = $('#box');
	$box
		.width('200')
		.height('200')
		.css('backgroundColor','blue')
		.text('Hello World')
});