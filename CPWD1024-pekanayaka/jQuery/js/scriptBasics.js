/*console.log($);

var trigger = function(){
	console.log("DOM is ready" );
};*/

$(document).ready(function(){
	console.log("DOM is ready" );

	var $h3Titles = $('h3');

	/*$h3Titles.css('fontSize','5em');
	$h3Titles.css('color','Blue');
	$h3Titles.css('border','2px solid black');*/

	$h3Titles.css({
		fontSize:'1em',
		color:'green',
		border:'2px solid black'
	});

 /*var completed = function  (){
 		var $this = $(this);
 		$this.css('backgroundColor','gray');
		alert("Animation Done");
		
	}*/

	$h3Titles.animate( {
		marginLeft:400
	}, 800 , completed );









	console.log($h3Titles);






});