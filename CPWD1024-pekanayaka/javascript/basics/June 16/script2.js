/*var languages = ["js","jsx","html","css","React","Relay","TS","CSS","C++","C"];
	console.log(languages);

languages.forEach(function(lang){
	console.log(lang)
});*/
var langList = function(languages){
	/*return "Hello";*//*4*/
	var htmlOut;

	if(languages.length>0){
		var $ul = document.createElement('ul');
		
		languages.forEach(function(lang){
			/*Repeative Work*/
			var $li = document.createElement('li');
			
			var textNode  = document.createTextNode(lang.name);
			var $btn = document.createElement('button');

			$btn.innerText = "show Extention";
			$btn.setAttribute('value',lang.fileExt);

			$li.appendChild(textNode);
			$li.appendChild($btn);
			$li.style.color = "red";

			$ul.appendChild($li);

			/* Button vlick Listner*/
			$btn.addEventListener('click',function(e){
				var ext = this.value;//e.target.value

				alert("File Extention is " + ext);


			});
			//console.log(lang);

		});

		htmlOut = $ul;
		/*repeative Work*/
		
	}else{
		//Empty List
		htmlOut = document.createElement('div');
		html.innerHTML = "Empty List";

	}
	return htmlOut;
	
};

var DOMReady = function(){
	var languages=[
	"js",
	"jsx",
	"html",
	"css",
	"React",
	"Relay",
	"TS",
	"CSS",
	"C++",
	"C"
	];/*2*/

	var body = document.querySelector('body');
	var langListHTML =  langList(languages);/*3*/
	body.appendChild(langListHTML)

};

document.addEventListener('DOMContentLoaded',DOMReady);/*start*/
