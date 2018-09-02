//console.log("jQuery version", jQuery().jquery);

//var jQ = $.noConflict();

//console.log( $ , jQ );

var DOMReady = function(){
	console.log( 'DOM is ready' );
};

jQuery( document ).ready( DOMReady );

jQuery( document ).ready( function(){
	console.log( 'DOM is already ready);
});

jQuery(function(){
	console.log( 'DOM is ready in short hand' );
});