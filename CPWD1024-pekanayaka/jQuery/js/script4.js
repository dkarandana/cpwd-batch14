var TVShows = [
	{
    name:"Planet Earth II",
    IMDB:9.5,
    year:2016,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Band of Brothers",
    IMDB:9.5,
    year:2001,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Planet Earth",
    IMDB:9.4,
    year:2006,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Game of Thrones",
    IMDB:9.4,
    year:2011,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Breaking Bad",
    IMDB:9.4,
    year:2008,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg"
  },
  {
    name:"The Star",
    IMDB:4.9,
    year:2017,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MDQ4NTM2N15BMl5BanBnXkFtZTgwNDM1NTIzMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

$(function(){

var $moviesList = $('.movies-list');
var $movieBelt = $('<ul>');

/*$moviesList.append('append');
$moviesList.prepend('prepend');
$moviesList.html('Hello');*/

/*Bad Practice*/
/*TVShows.forEach(function(movie,index){

  $moviesList.append("<p>" + movie.name + "</p> [****]");

});*/


TVShows.forEach(function(movie, index){
var $movie = $('<li>');

$movie.text(movie.name);

//$movie.append($('<img.').attr('src,movie.'));

$movieBelt.append($movie);

});
  
$moviesList.append($movieBelt);
});




