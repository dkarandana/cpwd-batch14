

console.log("jQuery Version" , jQuery()jquery );

var jQ = $.noConflict();

console.log($ , jq ) ;


var DOMReady = function () {

console.log('DOM is Ready');

};

jQuery ( document ).ready( DOMReady );

});

$(function () {
	console.log('DOM Ready SHORTHAND') ;

};


