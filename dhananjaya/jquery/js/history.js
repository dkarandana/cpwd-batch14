console.log("jQuery Version ", jQuery().jquery );

/**
 * @see https://api.jquery.com/jquery.noconflict/
 */

var jQ = $.noConflict();

console.log( $ , jQ );

console.log( Modernizr );

if( Modernizr.touchevents ){

}else{
    
}


/* DOM Ready */

var DOMReady = function(){
    console.log('DOM is Ready');
};

jQuery( document ).ready( DOMReady );