
var DReady =function(){
$( document ).ready( DReady );
};

var h3titles = $('h3');
h3titles.css({
	fontSize: '2em',
	color: 'red',
	border: '5px solid red'
	});	

var complete =function(){
	var $comp = $(this);
	$comp.css('backgroundColor','blue');
	}
	
	
h3titles.animate({
	marginRight:400}, 
	80, 
	complete);

console.log(h3titles);
	
/*
	h3titles.css('fontSize' , '4em');
	h3titles.css('color' , 'blue');
*/



