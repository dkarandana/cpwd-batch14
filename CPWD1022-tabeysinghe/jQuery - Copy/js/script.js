
/** console.log("Version", jQuery().jquery);

var jQ = $.noconflict();

console.log($,jQ);

/** httpps://api.jquery.com/jquery.noconflict/ */

var DOMReady = function (){
	console.log("Dom is ready");

};

jQuery(document).ready(DOMReady);