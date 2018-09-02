jQuery(document).ready(function(){
	console.log ('DOM Ready');

	var H01 = jQuery ('h1');

	H01.css('color', 'green');

	console.log(H01);

	console.log(H01.text());




	var box = jQuery('#box');

	box.css('height', 200);
	box.css('width', 200);
	box.css('backgroundColor', 'blue');


});