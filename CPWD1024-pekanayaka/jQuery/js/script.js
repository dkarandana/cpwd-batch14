/*console.log(jQuery);
console.log("Version", jQuery().jquery);*/

/*$.noConflict();
console.log($);*/

/*var jQ = $.noConflict();
console.log($ , jQ);*/

//method 01

var DOMReady = function(){
	console.log('DOM is Ready');
};

jQuery(document).ready(DOMReady);


//method 02

jQuery(document).ready(function(){
	console.log('DOM is Ready Again');
});
 
//method 03

$(function(){
	console.log("DOMReady ShortHand");
});

