window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("peliculasFavoritas");

  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    peliculasFavoritas = [];

  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    peliculasFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < peliculasFavoritas.length; i++) {
    // BUSCAR ESE GIF Y MOSTRARLO

    fetch("https://api.themoviedb.org/3/movie/"+ peliculasFavoritas[i] +"?api_key=d354a91a93cd35091af35780dc100a8a")
      .then(function(response) {
        return response.json();
      })
      .then(function(peliculas) {
        document.querySelector(".padrefav ul").innerHTML += "<li><h3><a href=infoxpelicula.html?id=" + peliculas.id + ">" + peliculas.original_title + "</a></h3><img src=http://image.tmdb.org/t/p/w200" + peliculas.poster_path + "></li>";
      })
  }
  var lupita = document.querySelector("#lupita");
  var inputBuscador = document.querySelector(".buscadorsecundario");

  lupita.onclick = function() {
    inputBuscador.classList.toggle('inputHidden');
    setTimeout(function() {inputBuscador.focus();}, 301)

  }
}
