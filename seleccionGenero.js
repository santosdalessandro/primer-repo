window.addEventListener("load", function (){

  var idGenero = new URLSearchParams(location.search)
  var genero = idGenero.get("idGenero");
  // PROBANDO var nombre = new URLSearchParams(location.search)
  // var nombre = nombre.get("nombre")
  // console.log(nombre);

  var nombreGenero = "";

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d354a91a93cd35091af35780dc100a8a&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    var peliculas = respuesta.genres;
    for (var i = 0; i < peliculas.length; i++) {
      if(peliculas[i].id == genero){
        nombreGenero = peliculas[i].name
      }
    }
  })

   fetch("https://api.themoviedb.org/3/discover/movie?api_key=d354a91a93cd35091af35780dc100a8a&sort_by=popularity.desc&page=1&with_genres=" + genero)
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    document.querySelector("h2.title").innerText = nombreGenero
    var peliculas = respuesta.results;
    for (var i = 0; i < peliculas.length; i++) {
      if(peliculas[i].poster_path != null) {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><a href='infoxpelicula.html?id=" + peliculas[i].id + "'><img src='http://image.tmdb.org/t/p/w300" + peliculas[i].poster_path + "'></a></div>"
      } else {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'id='errores'><img src='img/newError.jpeg'></div>";
      }

    }
  })
  // aca arranco desde aqui
  var lupita = document.querySelector("#lupita");
  var inputBuscador = document.querySelector(".buscadorsecundario");

  lupita.onclick = function() {
  inputBuscador.classList.toggle('inputHidden');
  setTimeout(function() {inputBuscador.focus();}, 301)
  }

  //busqueda sea valida y con mas de 3 caracteres y desaparezca dps de 3s
  document.querySelector("form#busqueda").onsubmit = function (event) {

    if(document.querySelector("input.buscadorsecundario").value.length < 3) {
  event.preventDefault();
    document.querySelector('.error').innerHTML += `<div class="uk-alert-danger notificacion" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <p>Al menos 3 letras.</p>
  </div>`
  setTimeout(function(){
    document.querySelector('.notificacion').style.display = 'none'
  }, 3000)
    }
    }

})
