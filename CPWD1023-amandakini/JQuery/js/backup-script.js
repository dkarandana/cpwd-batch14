/*console.log("jQuery Version",jQuery().jquery );

var jQ = $.noConflict();

console.log( $ , jQ );*/

var DOMReady = function(){

	console.log('DOM is ready');
};

jQuery(document).ready(DOMReady);
