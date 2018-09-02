/*console.log ($);

var test=function(){
	console.log("dom ready");
}*/

$(document).ready(function(){
console.log("dom ready");
var $h3tag=$('h3');
/*$h3tag.css('fontSize','4em');
$h3tag.css('color','red');
$h3tag.css('border','3px solid gold');*/

$h3tag.css({

	fontSize:'4em',
color:'red',
border:'3px solid gold'
});

var speed={
	marginLeft:800
};

var compleat=function(){
	var $this=$(this);
	$this.css("backgroundColor","green");
}
$h3tag.animate( speed, 3000, compleat);

console.log($h3tag);

});
