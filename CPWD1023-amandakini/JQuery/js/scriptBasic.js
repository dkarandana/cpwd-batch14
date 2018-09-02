console.log($);

$(document).ready(function(){
	console.log ('DOM is Ready');

	var $h3Titles = $('h3');

		/*$h3Titles.css('fontsize'.'4em');
		$h3Titles.css('color','red');
		$h3Titles.css('border','3px solid blue');*/

		$h3Titles.css({
			fontSize:'2em',
			color:'red',
			border:'2px solid blue'

		});

		var properties = {
			marginLeft : 800,
			height : 50,
			widtgh:300,
			opacity:.1


		};


		var completed = function(){
			var $this = $(this);
			$this.css('backgroundColor','gray');
		};

		$h3Titles.animate(properties,1000,completed );
			



		


	console.log($h3Titles);

	


});