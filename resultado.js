window.onload = function() {

  var datos = new URLSearchParams(location.search);
  var loBuscado = datos.get("buscadorsecundario");
   console.log(loBuscado);

  document.querySelector('input.buscadorsecundario').value = loBuscado

 fetch("https://api.themoviedb.org/3/search/movie?api_key=d354a91a93cd35091af35780dc100a8a&language=en-US&query="+ loBuscado +"&page=1")
 .then(function(response) {
   return response.json();
 })
 .then(function(respuesta) {
   console.log(respuesta);
   document.querySelector("h2.title").innerText = "Resultado de ''" + loBuscado + "''";
   var peliculas = respuesta.results;
   console.log(peliculas);
   if (peliculas != false) {
     document.querySelector("h2.title").innerText = "Resultado de ''" + loBuscado + "''";
     for (var i = 0; i < peliculas.length; i++) {
      if(peliculas[i].poster_path != null) {
       document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><a href='infoxpelicula.html?id=" + peliculas[i].id + "'><img src='http://image.tmdb.org/t/p/w300" + peliculas[i].poster_path + "'></a></div>";
      }
     }
   } else {
     console.log('entre')
document.querySelector ("div.noHay").innerHTML += "<p>No hay resultado para su búsqueda</p>"
     }
 })
 // .catch(function(error) {
 //   alert("Error, perdon, vuelva mas tarde")
 // })

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

  }
