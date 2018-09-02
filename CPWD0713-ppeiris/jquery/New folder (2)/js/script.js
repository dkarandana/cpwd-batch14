console.log('adsad');
//type jQuery in console to check  jquery 
console.log(jQuery);
console.log("Version", jQuery().jquery);

var jQ = $.noConflict();  //Refer jQuery No Conflict
console.log( $ , jQ );



var DOMReady = function(){
	console.log('DOM Ready');
};

jQuery( document ).ready( DOMReady );

jQuery(document).ready(function(){
	console.log('DOM Ready');
});

$(function(){
	console.log('DOm ready Shorthand');
});